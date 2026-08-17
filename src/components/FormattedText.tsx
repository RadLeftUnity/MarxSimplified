import React from 'react';
import { highlightJargon } from '../data/glossary';

interface FormattedTextProps {
  text: string;
  className?: string;
  paragraphClassName?: string;
  highlightJargon?: boolean;
}

export interface ParsedBlock {
  type: 'paragraph' | 'ol' | 'ul';
  intro?: string;
  items?: Array<{ num?: string; text: string }>;
  paragraphText?: string;
}

export function parseFormattedBlocks(rawText: string): ParsedBlock[] {
  if (!rawText) return [];
  const text = rawText.replace(/\r\n/g, '\n');

  const blocks: ParsedBlock[] = [];
  const rawParagraphs = text.split(/\n\s*\n/).filter((p) => p.trim().length > 0);

  let currentOlBlock: { intro?: string; items: Array<{ num: string; text: string }> } | null = null;
  let currentUlBlock: { intro?: string; items: Array<{ text: string }> } | null = null;

  for (let pIdx = 0; pIdx < rawParagraphs.length; pIdx++) {
    const rawPara = rawParagraphs[pIdx];
    const lines = rawPara.split('\n').map((l) => l.trim()).filter(Boolean);

    // Check if entire paragraph consists of multiline list items
    const isMultilineOl = lines.length > 1 && lines.every((l) => /^\d+[\.\)]\s+/.test(l));
    const isMultilineUl = lines.length > 1 && lines.every((l) => /^[•✦\*\-\+]\s+/.test(l));

    // Check if line 0 is an intro heading and remaining lines are list items
    const isIntroMultilineOl =
      lines.length > 2 &&
      !/^\d+[\.\)]\s+/.test(lines[0]) &&
      lines.slice(1).every((l) => /^\d+[\.\)]\s+/.test(l));
    const isIntroMultilineUl =
      lines.length > 2 &&
      !/^[•✦\*\-\+]\s+/.test(lines[0]) &&
      lines.slice(1).every((l) => /^[•✦\*\-\+]\s+/.test(l));

    if (isMultilineOl || isIntroMultilineOl) {
      if (currentOlBlock) {
        blocks.push({ type: 'ol', intro: currentOlBlock.intro, items: currentOlBlock.items });
        currentOlBlock = null;
      }
      if (currentUlBlock) {
        blocks.push({ type: 'ul', intro: currentUlBlock.intro, items: currentUlBlock.items });
        currentUlBlock = null;
      }

      const intro = isIntroMultilineOl ? lines[0] : undefined;
      const listLines = isIntroMultilineOl ? lines.slice(1) : lines;
      const items = listLines.map((l) => {
        const match = l.match(/^(\d+)[\.\)]\s+(.+)$/);
        return match ? { num: match[1], text: match[2] } : { num: '1', text: l };
      });
      blocks.push({ type: 'ol', intro, items });
      continue;
    }

    if (isMultilineUl || isIntroMultilineUl) {
      if (currentOlBlock) {
        blocks.push({ type: 'ol', intro: currentOlBlock.intro, items: currentOlBlock.items });
        currentOlBlock = null;
      }
      if (currentUlBlock) {
        blocks.push({ type: 'ul', intro: currentUlBlock.intro, items: currentUlBlock.items });
        currentUlBlock = null;
      }

      const intro = isIntroMultilineUl ? lines[0] : undefined;
      const listLines = isIntroMultilineUl ? lines.slice(1) : lines;
      const items = listLines.map((l) => {
        const match = l.match(/^[•✦\*\-\+]\s+(.+)$/);
        return match ? { text: match[1] } : { text: l };
      });
      blocks.push({ type: 'ul', intro, items });
      continue;
    }

    // Check single line/paragraph start matching ordered list
    const singleOlMatch = rawPara.trim().match(/^(\d+)[\.\)]\s+(.+)$/s);
    const singleUlMatch = rawPara.trim().match(/^[•✦\*\-\+]\s+(.+)$/s);

    if (singleOlMatch) {
      const num = singleOlMatch[1];
      const itemText = singleOlMatch[2].replace(/\n/g, ' ').trim();
      const numInt = parseInt(num, 10);

      if (currentOlBlock) {
        currentOlBlock.items.push({ num, text: itemText });
        continue;
      } else if (numInt === 1 || blocks.length > 0) {
        let intro: string | undefined = undefined;
        if (blocks.length > 0 && blocks[blocks.length - 1].type === 'paragraph') {
          const prevPara = blocks[blocks.length - 1].paragraphText || '';
          if (prevPara.trim().endsWith(':')) {
            blocks.pop();
            intro = prevPara;
          }
        }
        currentOlBlock = { intro, items: [{ num, text: itemText }] };
        continue;
      }
    }

    if (singleUlMatch) {
      const itemText = singleUlMatch[1].replace(/\n/g, ' ').trim();
      if (currentUlBlock) {
        currentUlBlock.items.push({ text: itemText });
        continue;
      } else {
        let intro: string | undefined = undefined;
        if (blocks.length > 0 && blocks[blocks.length - 1].type === 'paragraph') {
          const prevPara = blocks[blocks.length - 1].paragraphText || '';
          if (prevPara.trim().endsWith(':')) {
            blocks.pop();
            intro = prevPara;
          }
        }
        currentUlBlock = { intro, items: [{ text: itemText }] };
        continue;
      }
    }

    // Check inline multiple list items in a single paragraph
    const inlineText = rawPara.replace(/\n/g, ' ').trim();
    const olMatches = Array.from(inlineText.matchAll(/(?:^|[\s:])(\d+)[\.\)]\s+/g));

    if (olMatches.length >= 2 || (olMatches.length === 1 && olMatches[0].index !== undefined && olMatches[0].index <= 5)) {
      const firstNum = parseInt(olMatches[0][1], 10);
      if (firstNum === 1 || (olMatches.length >= 2 && parseInt(olMatches[1][1], 10) === firstNum + 1)) {
        if (currentOlBlock) {
          blocks.push({ type: 'ol', intro: currentOlBlock.intro, items: currentOlBlock.items });
          currentOlBlock = null;
        }
        if (currentUlBlock) {
          blocks.push({ type: 'ul', intro: currentUlBlock.intro, items: currentUlBlock.items });
          currentUlBlock = null;
        }

        const firstMatchIndex = olMatches[0].index!;
        const intro = inlineText.slice(0, firstMatchIndex).trim();

        const items: Array<{ num: string; text: string }> = [];
        for (let i = 0; i < olMatches.length; i++) {
          const match = olMatches[i];
          const num = match[1];
          const start = match.index! + match[0].length;
          const end = i < olMatches.length - 1 ? olMatches[i + 1].index! : inlineText.length;
          const itemText = inlineText.slice(start, end).trim();
          if (itemText) {
            items.push({ num, text: itemText });
          }
        }

        if (items.length > 0) {
          blocks.push({ type: 'ol', intro: intro || undefined, items });
          continue;
        }
      }
    }

    const ulMatches = Array.from(inlineText.matchAll(/(?:^|[\s:])([•✦\*\-\+])\s+/g));
    if (ulMatches.length >= 2) {
      if (currentOlBlock) {
        blocks.push({ type: 'ol', intro: currentOlBlock.intro, items: currentOlBlock.items });
        currentOlBlock = null;
      }
      if (currentUlBlock) {
        blocks.push({ type: 'ul', intro: currentUlBlock.intro, items: currentUlBlock.items });
        currentUlBlock = null;
      }

      const firstMatchIndex = ulMatches[0].index!;
      const intro = inlineText.slice(0, firstMatchIndex).trim();

      const items: Array<{ text: string }> = [];
      for (let i = 0; i < ulMatches.length; i++) {
        const match = ulMatches[i];
        const start = match.index! + match[0].length;
        const end = i < ulMatches.length - 1 ? ulMatches[i + 1].index! : inlineText.length;
        const itemText = inlineText.slice(start, end).trim();
        if (itemText) {
          items.push({ text: itemText });
        }
      }

      if (items.length > 0) {
        blocks.push({ type: 'ul', intro: intro || undefined, items });
        continue;
      }
    }

    // Flush any pending active list blocks before processing standard paragraph
    if (currentOlBlock) {
      blocks.push({ type: 'ol', intro: currentOlBlock.intro, items: currentOlBlock.items });
      currentOlBlock = null;
    }
    if (currentUlBlock) {
      blocks.push({ type: 'ul', intro: currentUlBlock.intro, items: currentUlBlock.items });
      currentUlBlock = null;
    }

    blocks.push({ type: 'paragraph', paragraphText: inlineText });
  }

  if (currentOlBlock) {
    blocks.push({ type: 'ol', intro: currentOlBlock.intro, items: currentOlBlock.items });
  }
  if (currentUlBlock) {
    blocks.push({ type: 'ul', intro: currentUlBlock.intro, items: currentUlBlock.items });
  }

  return blocks;
}

function renderItemText(itemText: string, shouldHighlight: boolean) {
  // Check if item text has a title before a colon
  const titleColonMatch = itemText.match(/^([^:]+:\s*)(.*)$/);
  if (titleColonMatch) {
    const titlePart = titleColonMatch[1];
    const restPart = titleColonMatch[2];
    return (
      <>
        <strong className="formatted-item-title">
          {shouldHighlight ? highlightJargon(titlePart) : titlePart}
        </strong>
        {shouldHighlight ? highlightJargon(restPart) : restPart}
      </>
    );
  }

  return shouldHighlight ? highlightJargon(itemText) : itemText;
}

export const FormattedText: React.FC<FormattedTextProps> = ({
  text,
  className = '',
  paragraphClassName = '',
  highlightJargon: shouldHighlight = true,
}) => {
  if (!text) return null;

  const blocks = parseFormattedBlocks(text);

  return (
    <div className={`formatted-text-container ${className}`.trim()}>
      {blocks.map((block, idx) => {
        if (block.type === 'ol') {
          return (
            <div key={idx} className="formatted-list-wrapper">
              {block.intro && (
                <p className={`formatted-paragraph formatted-intro ${paragraphClassName}`.trim()}>
                  {shouldHighlight ? highlightJargon(block.intro) : block.intro}
                </p>
              )}
              <ol className="formatted-list formatted-ol">
                {block.items?.map((item, itemIdx) => (
                  <li key={itemIdx} className="formatted-list-item formatted-ol-item">
                    <span className="formatted-ol-badge">{item.num || itemIdx + 1}</span>
                    <div className="formatted-item-content">
                      {renderItemText(item.text, shouldHighlight)}
                    </div>
                  </li>
                ))}
              </ol>
            </div>
          );
        }

        if (block.type === 'ul') {
          return (
            <div key={idx} className="formatted-list-wrapper">
              {block.intro && (
                <p className={`formatted-paragraph formatted-intro ${paragraphClassName}`.trim()}>
                  {shouldHighlight ? highlightJargon(block.intro) : block.intro}
                </p>
              )}
              <ul className="formatted-list formatted-ul">
                {block.items?.map((item, itemIdx) => (
                  <li key={itemIdx} className="formatted-list-item formatted-ul-item">
                    <span className="formatted-ul-bullet">✦</span>
                    <div className="formatted-item-content">
                      {renderItemText(item.text, shouldHighlight)}
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          );
        }

        return (
          <p key={idx} className={`formatted-paragraph ${paragraphClassName}`.trim()}>
            {shouldHighlight ? highlightJargon(block.paragraphText || '') : block.paragraphText}
          </p>
        );
      })}
    </div>
  );
};
