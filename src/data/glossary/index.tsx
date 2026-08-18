import React, { useState, useRef } from 'react';
import { createPortal } from 'react-dom';
import { HelpCircle, Sparkles, Lightbulb, Tag } from 'lucide-react';
import { FormattedText } from '../../components/FormattedText';

import type { TheoryTag, GlossaryTerm } from './types';
import { getTermSlug } from './types';
import { classicalTerms } from './classical';
import { dialecticalTerms } from './dialectics';
import { leninistTerms } from './leninism';
import { maoistTerms } from './maoism';
import { trotskyistTerms } from './trotskyism';
import { anarchistTerms } from './anarchism';
import { stalinistTerms } from './stalinism';
import { dengistTerms } from './dengism';
import { jucheTerms } from './juche';
import { antiColonialTerms } from './antiColonial';
import { capitalistTerms } from './capitalism';
import { fascistTerms } from './fascism';
import { neoMarxistTerms } from './neoMarxism';
import { philosophyTerms } from './philosophy';
import { feudalismTerms } from './feudalism';
import { postmodernTerms } from './postmodernism';
import { marxistFeministTerms } from './marxistFeminism';

export type { TheoryTag, GlossaryTerm };
export { getTermSlug };

export const glossary: GlossaryTerm[] = [
  ...classicalTerms,
  ...dialecticalTerms,
  ...leninistTerms,
  ...maoistTerms,
  ...trotskyistTerms,
  ...anarchistTerms,
  ...stalinistTerms,
  ...dengistTerms,
  ...jucheTerms,
  ...antiColonialTerms,
  ...capitalistTerms,
  ...fascistTerms,
  ...neoMarxistTerms,
  ...philosophyTerms,
  ...feudalismTerms,
  ...postmodernTerms,
  ...marxistFeministTerms,
];


export const JargonWord: React.FC<{ part: string; matchingTerm: GlossaryTerm }> = ({ part, matchingTerm }) => {
  const [isHovered, setIsHovered] = useState(false);
  const [coords, setCoords] = useState<{ top: number; left: number; popDown: boolean } | null>(null);
  const targetRef = useRef<HTMLSpanElement>(null);
  const termSlug = getTermSlug(matchingTerm.term);

  const updatePosition = () => {
    if (!targetRef.current) return;
    const rect = targetRef.current.getBoundingClientRect();
    const tooltipWidth = 340;
    const halfWidth = tooltipWidth / 2;
    const preferredLeft = rect.left + rect.width / 2;
    const clampedLeft = Math.max(16 + halfWidth, Math.min(window.innerWidth - 16 - halfWidth, preferredLeft));

    const popDown = rect.top < 260;
    const top = popDown ? rect.bottom + 10 : rect.top - 10;

    setCoords({ top, left: clampedLeft, popDown });
  };

  return (
    <>
      <span
        ref={targetRef}
        className="jargon-highlight"
        onClick={(e) => {
          e.stopPropagation();
          e.preventDefault();
          const targetHash = `#term-${termSlug}`;
          window.location.hash = targetHash;
          window.dispatchEvent(new CustomEvent('navigate-to-glossary', { detail: { slug: termSlug } }));
        }}
        onMouseEnter={() => {
          updatePosition();
          setIsHovered(true);
        }}
        onMouseLeave={() => setIsHovered(false)}
      >
        {part}
      </span>
      {isHovered && coords && createPortal(
        <div
          className={`tooltip-balloon jargon-tooltip glass-panel portal-tooltip ${coords.popDown ? 'pop-down' : ''}`}
          style={{
            position: 'fixed',
            top: coords.popDown ? `${coords.top}px` : 'auto',
            bottom: !coords.popDown ? `${window.innerHeight - coords.top}px` : 'auto',
            left: `${coords.left}px`,
            transform: 'translateX(-50%)',
            zIndex: 99999,
            opacity: 1,
            visibility: 'visible',
            pointerEvents: 'auto',
          }}
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          <span className="tooltip-balloon-label">
            <Sparkles className="section-icon text-gold" /> Glossary: {matchingTerm.term}
          </span>

          {matchingTerm.theoryTags && matchingTerm.theoryTags.length > 0 && (
            <div className="tooltip-theory-tags">
              {matchingTerm.theoryTags.map((tag) => (
                <span key={tag} className="theory-tag-pill mini">
                  <Tag className="tag-icon" /> {tag}
                </span>
              ))}
            </div>
          )}

          <FormattedText text={matchingTerm.definition} paragraphClassName="jargon-def-text" highlightJargon={false} />

          <span className="jargon-example-label">
            <Lightbulb className="section-icon text-amber" /> Day-to-day Example
          </span>
          <FormattedText text={matchingTerm.dayToDayExample} paragraphClassName="jargon-example-text" highlightJargon={false} />

          <span className="jargon-misconception-label">
            <HelpCircle className="section-icon text-crimson" /> Common Misconception
          </span>
          <FormattedText text={matchingTerm.misconception} paragraphClassName="jargon-misconception-text" highlightJargon={false} />
        </div>,
        document.body
      )}
    </>
  );
};

// Helper interface for individual variant matching
interface VariantMatch {
  variant: string;
  term: GlossaryTerm;
}

// Flatten all pattern variants into a sorted list by length descending so longer phrases match first
const allVariants: VariantMatch[] = [];
glossary.forEach(item => {
  const variants = item.pattern.split('|');
  variants.forEach(v => {
    const trimmed = v.trim();
    if (trimmed) {
      allVariants.push({ variant: trimmed, term: item });
    }
  });
});
// Sort variants by string length descending
allVariants.sort((a, b) => b.variant.length - a.variant.length);

// Escape regex special characters helper
function escapeRegex(str: string): string {
  return str.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
}

// Pre-build regex string with longest variants first
const patternString = allVariants.map(v => escapeRegex(v.variant)).join('|');

export interface GlossaryOptions {
  excludeTerms?: string[];
  excludePhrases?: string[];
}

interface ExcludedRange {
  start: number;
  end: number;
  term?: GlossaryTerm;
}

// Highlight utility
export const highlightJargon = (text: string, options?: GlossaryOptions): React.ReactNode[] => {
  if (!text) return [];

  const excludedTermsSet = new Set(
    (options?.excludeTerms || []).map((t) => t.toLowerCase().trim())
  );

  const excludedRanges: ExcludedRange[] = [];

  glossary.forEach((item) => {
    if (item.excludePattern) {
      const phrases = item.excludePattern.split('|').map((s) => s.trim()).filter(Boolean);
      if (phrases.length > 0) {
        const exRegex = new RegExp(`\\b(${phrases.map(escapeRegex).join('|')})\\b`, 'gi');
        let match: RegExpExecArray | null;
        while ((match = exRegex.exec(text)) !== null) {
          excludedRanges.push({
            start: match.index,
            end: match.index + match[0].length,
            term: item,
          });
        }
      }
    }
  });

  if (options?.excludePhrases && options.excludePhrases.length > 0) {
    const customPhrases = options.excludePhrases.map((s) => s.trim()).filter(Boolean);
    if (customPhrases.length > 0) {
      const customExRegex = new RegExp(`\\b(${customPhrases.map(escapeRegex).join('|')})\\b`, 'gi');
      let match: RegExpExecArray | null;
      while ((match = customExRegex.exec(text)) !== null) {
        excludedRanges.push({
          start: match.index,
          end: match.index + match[0].length,
        });
      }
    }
  }

  const nodes: React.ReactNode[] = [];
  let lastIndex = 0;

  const regex = new RegExp(`\\b(${patternString})\\b`, 'gi');
  let match: RegExpExecArray | null;

  while ((match = regex.exec(text)) !== null) {
    const matchStart = match.index;
    const matchEnd = match.index + match[0].length;
    const matchedText = match[0];
    const lowerText = matchedText.toLowerCase();

    const matchedVariant = allVariants.find((v) => v.variant.toLowerCase() === lowerText);

    if (matchedVariant) {
      const isTermDisabled =
        excludedTermsSet.has(matchedVariant.term.term.toLowerCase()) ||
        excludedTermsSet.has(matchedVariant.variant.toLowerCase());

      if (isTermDisabled) {
        continue;
      }

      const isExcluded = excludedRanges.some(
        (ex) =>
          (!ex.term || ex.term === matchedVariant.term) &&
          matchStart >= ex.start &&
          matchEnd <= ex.end
      );

      if (!isExcluded) {
        if (matchStart > lastIndex) {
          nodes.push(text.slice(lastIndex, matchStart));
        }
        nodes.push(
          <JargonWord key={`jargon-${matchStart}`} part={matchedText} matchingTerm={matchedVariant.term} />
        );
        lastIndex = matchEnd;
      }
    }
  }

  if (lastIndex < text.length) {
    nodes.push(text.slice(lastIndex));
  }

  return nodes.length > 0 ? nodes : [text];
};
