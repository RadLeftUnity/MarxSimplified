import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const workspaceRoot = path.join(__dirname, '..');
const booksDir = path.join(workspaceRoot, 'public', 'data', 'books');

// ---------------------------------------------------------------------------
// Fuzzy matching helpers (mirrors src/utils/fuzzyMatch.ts logic for Node use)
// ---------------------------------------------------------------------------

function bigrams(str) {
  const map = new Map();
  const s = str.toLowerCase();
  for (let i = 0; i < s.length - 1; i++) {
    const bg = s[i] + s[i + 1];
    map.set(bg, (map.get(bg) ?? 0) + 1);
  }
  return map;
}

function diceSimilarity(a, b) {
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

function normalizeWS(str) {
  return str.replace(/\s+/g, ' ').trim();
}

/**
 * Returns best fuzzy score for needle inside haystack.
 * 1.0 = exact, 0.99 = whitespace-normalized, <1 = bigram similarity.
 */
function fuzzyScore(haystack, needle) {
  // Pass 1: exact
  if (haystack.includes(needle)) return 1.0;

  // Pass 2: whitespace-normalized
  const normH = normalizeWS(haystack);
  const normN = normalizeWS(needle);
  if (normH.includes(normN)) return 0.99;

  // Pass 3: sliding-window bigram search over normalised text
  const needleBg = bigrams(normN);
  const winLen = normN.length;
  const minWin = Math.floor(winLen * 0.75);
  const maxWin = Math.ceil(winLen * 1.30);
  const step = Math.max(1, Math.floor(winLen * 0.05));

  let bestScore = 0;
  for (let start = 0; start + minWin <= normH.length; start += step) {
    for (
      let wl = minWin;
      wl <= maxWin && start + wl <= normH.length;
      wl += Math.max(1, Math.floor(wl * 0.08))
    ) {
      const score = diceSimilarity(needleBg, bigrams(normH.slice(start, start + wl)));
      if (score > bestScore) bestScore = score;
    }
  }
  return bestScore;
}

// ---------------------------------------------------------------------------

export function checkAnnotations() {
  console.log('=== Checking Line Annotations Across All Books ===\n');

  if (!fs.existsSync(booksDir)) {
    console.error(`❌ Books directory not found at: ${booksDir}`);
    process.exit(1);
  }

  const bookFolders = fs.readdirSync(booksDir, { withFileTypes: true })
    .filter(dirent => dirent.isDirectory())
    .map(dirent => dirent.name);

  let totalBooks = 0;
  let totalChapters = 0;
  let totalAnnotations = 0;
  let totalErrors = 0;
  let totalWarnings = 0;
  const zeroAnnotationChapters = [];

  for (const bookFolder of bookFolders) {
    const bookPath = path.join(booksDir, bookFolder);
    const summaryPath = path.join(bookPath, 'summary.json');

    if (!fs.existsSync(summaryPath)) {
      console.warn(`⚠️  Warning: summary.json missing in ${bookFolder}`);
      continue;
    }

    totalBooks++;
    const summary = JSON.parse(fs.readFileSync(summaryPath, 'utf8'));
    console.log(`Book [${bookFolder}]: "${summary.title}" (${summary.chapters?.length || 0} chapters)`);

    for (const chapter of (summary.chapters || [])) {
      totalChapters++;
      const textPath = path.join(bookPath, chapter.textFile);
      const annPath = path.join(bookPath, chapter.annotationFile);

      if (!fs.existsSync(textPath)) {
        console.error(`  ❌ Text file missing: ${chapter.textFile}`);
        totalErrors++;
        continue;
      }

      if (!fs.existsSync(annPath)) {
        console.error(`  ❌ Annotation file missing: ${chapter.annotationFile}`);
        totalErrors++;
        continue;
      }

      const textRaw = fs.readFileSync(textPath, 'utf8');
      const annotations = JSON.parse(fs.readFileSync(annPath, 'utf8'));

      if (annotations.length === 0) {
        zeroAnnotationChapters.push({ book: summary.title, bookId: bookFolder, chapter: chapter.title });
      }

      for (let i = 0; i < annotations.length; i++) {
        totalAnnotations++;
        const ann = annotations[i];
        const target = (ann.targetText || '').trim();

        if (!target) {
          console.error(`  ❌ Empty targetText in chapter "${chapter.title}" annotation #${i + 1}`);
          totalErrors++;
          continue;
        }

        const score = fuzzyScore(textRaw, target);

        if (score >= 0.99) {
          // Exact or whitespace-normalized match: all good, no output needed
        } else if (score >= 0.82) {
          // Fuzzy match: will work in the reader but targetText should be cleaned up
          console.warn(
            `  ⚠️  FUZZY MATCH (score ${score.toFixed(2)}) in chapter "${chapter.title}":\n` +
            `     Target: "${target.slice(0, 100)}${target.length > 100 ? '...' : ''}"`
          );
          totalWarnings++;
        } else {
          // Below threshold: annotation will NOT highlight in the reader
          console.error(
            `  ❌ NO MATCH (score ${score.toFixed(2)}) in chapter "${chapter.title}":\n` +
            `     Target: "${target.slice(0, 100)}${target.length > 100 ? '...' : ''}"`
          );
          totalErrors++;
        }
      }
    }
  }

  console.log('\n=== Annotation Verification Summary ===');
  console.log(`Total Books Checked:        ${totalBooks}`);
  console.log(`Total Chapters Checked:     ${totalChapters}`);
  console.log(`Total Annotations Verified: ${totalAnnotations}`);
  console.log(`Chapters with 0 Annotations: ${zeroAnnotationChapters.length}`);

  if (zeroAnnotationChapters.length > 0) {
    console.log('\nChapters without line annotations:');
    zeroAnnotationChapters.forEach(z => {
      console.log(`  - [${z.bookId}] ${z.chapter}`);
    });
  }

  if (totalErrors > 0) {
    console.error(`\n❌ Validation Failed: ${totalErrors} error(s) found (will not highlight in reader).`);
    if (totalWarnings > 0) {
      console.warn(`⚠️  Also ${totalWarnings} fuzzy match warning(s) (will highlight, but targetText should be corrected).`);
    }
    return false;
  } else if (totalWarnings > 0) {
    console.warn(`\n⚠️  Passed with ${totalWarnings} fuzzy match warning(s): all annotations will highlight, but the flagged targetTexts are close but not verbatim and should be corrected.`);
    console.log(`✅ All ${totalAnnotations} annotations will match in the reader.`);
    return true;
  } else {
    console.log(`\n✅ Success: All ${totalAnnotations} line annotations match their chapter text perfectly.`);
    return true;
  }
}

if (process.argv[1] && process.argv[1].endsWith('check-annotations.js')) {
  const success = checkAnnotations();
  process.exit(success ? 0 : 1);
}
