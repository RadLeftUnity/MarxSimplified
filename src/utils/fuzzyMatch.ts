/**
 * fuzzyMatch.ts
 *
 * Finds the best-matching substring within a haystack for a given needle,
 * using a multi-pass strategy:
 *   1. Exact indexOf (fastest, preferred).
 *   2. Whitespace-normalized indexOf (catches extra/missing spaces or newlines).
 *   3. Key-word filter guard (instantly rejects non-matching paragraphs).
 *   4. Sliding-window bigram similarity search (only runs on candidate paragraphs).
 *
 * Returns { start, end } indices into the ORIGINAL (un-normalized) haystack,
 * or null if the best similarity score is below the threshold.
 */

/** Build a multiset of character bigrams from a string. */
function bigrams(str: string): Map<string, number> {
  const map = new Map<string, number>();
  const s = str.toLowerCase();
  for (let i = 0; i < s.length - 1; i++) {
    const bg = s[i] + s[i + 1];
    map.set(bg, (map.get(bg) ?? 0) + 1);
  }
  return map;
}

/** Dice coefficient similarity between two bigram multisets. */
function diceSimilarity(a: Map<string, number>, b: Map<string, number>): number {
  if (a.size === 0 && b.size === 0) return 1;
  let intersection = 0;
  for (const [bg, count] of a) {
    const bCount = b.get(bg) ?? 0;
    intersection += Math.min(count, bCount);
  }
  const totalA = [...a.values()].reduce((s, v) => s + v, 0);
  const totalB = [...b.values()].reduce((s, v) => s + v, 0);
  return (2 * intersection) / (totalA + totalB);
}

/**
 * Collapse runs of whitespace (including \r\n) to a single space and trim.
 * This is used for the normalized comparison pass.
 */
function normalizeWS(str: string): string {
  return str.replace(/\s+/g, ' ').trim();
}

/**
 * Build an index that maps positions in the normalized string back to
 * positions in the original string.
 */
function buildNormToOrigIndex(orig: string): { normalized: string; origIndex: number[] } {
  const normalized: string[] = [];
  const origIndex: number[] = [];
  let inSpace = false;
  for (let i = 0; i < orig.length; i++) {
    const ch = orig[i];
    if (/\s/.test(ch)) {
      if (!inSpace && normalized.length > 0) {
        normalized.push(' ');
        origIndex.push(i);
        inSpace = true;
      }
    } else {
      normalized.push(ch);
      origIndex.push(i);
      inSpace = false;
    }
  }
  // Trim leading space
  if (normalized[0] === ' ') {
    normalized.shift();
    origIndex.shift();
  }
  return { normalized: normalized.join(''), origIndex };
}

export interface FuzzyMatchResult {
  start: number;  // inclusive, into original haystack
  end: number;    // exclusive, into original haystack
  score: number;  // 0–1 similarity (1 = perfect)
}

/**
 * Find the best match for needle inside haystack.
 *
 * @param haystack  The full paragraph text
 * @param needle    The targetText from the annotation JSON
 * @param threshold Minimum Dice score to accept a fuzzy match (default 0.82)
 */
export function fuzzyFindInText(
  haystack: string,
  needle: string,
  threshold = 0.82
): FuzzyMatchResult | null {
  // --- Pass 1: Exact match ---
  const exact = haystack.indexOf(needle);
  if (exact !== -1) {
    return { start: exact, end: exact + needle.length, score: 1 };
  }

  // --- Pass 2: Whitespace-normalized match (handles newlines/spaces) ---
  const { normalized: normHaystack, origIndex } = buildNormToOrigIndex(haystack);
  const normNeedle = normalizeWS(needle);
  const normIdx = normHaystack.indexOf(normNeedle);
  if (normIdx !== -1) {
    const start = origIndex[normIdx];
    const endNormIdx = normIdx + normNeedle.length - 1;
    const end = origIndex[Math.min(endNormIdx, origIndex.length - 1)] + 1;
    return { start, end, score: 0.99 };
  }

  // --- Fast Early Exit Guard: Word Presence Filter ---
  // If the paragraph does not contain at least 40% of the significant words (>=3 chars)
  // in the needle, skip the heavy sliding-window calculation completely!
  const needleWords = normNeedle.toLowerCase().match(/\b\w{3,}\b/g) ?? [];
  if (needleWords.length > 0) {
    const lowerHaystack = normHaystack.toLowerCase();
    let foundCount = 0;
    for (const w of needleWords) {
      if (lowerHaystack.includes(w)) foundCount++;
    }
    if (foundCount / needleWords.length < 0.4) {
      return null;
    }
  }

  // --- Pass 3: Sliding-window bigram fuzzy search (Only run for candidate paragraphs) ---
  const needleBg = bigrams(normNeedle);
  const winLen = normNeedle.length;
  const minWin = Math.floor(winLen * 0.75);
  const maxWin = Math.ceil(winLen * 1.30);

  let bestScore = 0;
  let bestNormStart = -1;
  let bestNormEnd = -1;

  // Step size scales with needle length for maximum efficiency
  const step = Math.max(2, Math.floor(winLen * 0.08));

  for (let start = 0; start + minWin <= normHaystack.length; start += step) {
    for (let wl = minWin; wl <= maxWin && start + wl <= normHaystack.length; wl += Math.max(2, Math.floor(wl * 0.12))) {
      const window = normHaystack.slice(start, start + wl);
      const score = diceSimilarity(needleBg, bigrams(window));
      if (score > bestScore) {
        bestScore = score;
        bestNormStart = start;
        bestNormEnd = start + wl;
      }
    }
  }

  if (bestScore < threshold || bestNormStart === -1) {
    return null;
  }

  // Map best normalized match back to original indices
  const origStart = origIndex[bestNormStart] ?? 0;
  const lastNormIdx = Math.min(bestNormEnd - 1, origIndex.length - 1);
  const origEnd = (origIndex[lastNormIdx] ?? origStart) + 1;

  return { start: origStart, end: origEnd, score: bestScore };
}
