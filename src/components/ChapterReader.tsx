import React, { useMemo } from 'react';
import { highlightJargon } from '../data/glossary';
import { fuzzyFindInText } from '../utils/fuzzyMatch';

export interface Annotation {
  id: string;
  targetText: string;
  summary: string;
  context: string;
}

interface ChapterReaderProps {
  title: string;
  text: string;
  annotations: Annotation[];
  activeAnnotationId: string | null;
  onSelectAnnotation: (id: string | null) => void;
}

interface Segment {
  type: 'text' | 'highlight';
  text: string;
  annotationId?: string;
}

export const ChapterReader: React.FC<ChapterReaderProps> = ({
  title,
  text,
  annotations,
  activeAnnotationId,
  onSelectAnnotation,
}) => {
  // Memoize paragraph parsing so regex & fuzzy matching only re-run when text or annotations change
  const parsedParagraphs = useMemo(() => {
    const paragraphs = text.split(/\n\s*\n/).map(p => p.trim()).filter(Boolean);

    return paragraphs.map((paraText) => {
      const matches: { start: number; end: number; annotation: Annotation }[] = [];

      for (let idx = 0; idx < annotations.length; idx++) {
        const ann = annotations[idx];
        const result = fuzzyFindInText(paraText, ann.targetText);
        if (result) {
          const safeAnn = {
            ...ann,
            id: ann.id || `ann-${idx + 1}`,
            summary: ann.summary || (ann as any).explanation || '',
          };
          matches.push({
            start: result.start,
            end: result.end,
            annotation: safeAnn,
          });
        }
      }

      if (matches.length === 0) {
        return [{ type: 'text' as const, text: paraText }];
      }

      matches.sort((a, b) => {
        if (a.start !== b.start) {
          return a.start - b.start;
        }
        return (b.end - b.start) - (a.end - a.start);
      });

      const nonOverlappingMatches: typeof matches = [];
      let lastEnd = 0;
      for (const match of matches) {
        if (match.start >= lastEnd) {
          nonOverlappingMatches.push(match);
          lastEnd = match.end;
        }
      }

      const segments: Segment[] = [];
      let currentPos = 0;

      for (const match of nonOverlappingMatches) {
        if (match.start > currentPos) {
          segments.push({
            type: 'text',
            text: paraText.slice(currentPos, match.start),
          });
        }
        segments.push({
          type: 'highlight',
          text: paraText.slice(match.start, match.end),
          annotationId: match.annotation.id,
        });
        currentPos = match.end;
      }

      if (currentPos < paraText.length) {
        segments.push({
          type: 'text',
          text: paraText.slice(currentPos),
        });
      }

      return segments;
    });
  }, [text, annotations]);

  return (
    <div className="chapter-reader-container">
      <h2 className="chapter-title">{title}</h2>
      
      <article className="reader-article">
        {parsedParagraphs.map((segments, paraIdx) => (
          <p key={paraIdx} className="reader-paragraph">
            {segments.map((seg, segIdx) => {
              if (seg.type === 'highlight' && seg.annotationId) {
                const isActive = activeAnnotationId === seg.annotationId;
                const ann = annotations.find((a) => (a.id || '') === seg.annotationId);
                const summaryText = ann ? (ann.summary || (ann as any).explanation || '') : '';
                return (
                  <span
                    key={segIdx}
                    id={`annotation-highlight-${seg.annotationId}`}
                    className={`annotation-highlight ${isActive ? 'active' : ''}`}
                    onClick={(e) => {
                      e.stopPropagation();
                      onSelectAnnotation(seg.annotationId || null);
                    }}
                    onMouseEnter={(e) => {
                      const rect = e.currentTarget.getBoundingClientRect();
                      const balloon = e.currentTarget.querySelector('.tooltip-balloon');
                      if (balloon) {
                        if (rect.top < 210) {
                          balloon.classList.add('pop-down');
                        } else {
                          balloon.classList.remove('pop-down');
                        }
                      }
                    }}
                  >
                    {seg.text}
                    {summaryText && (
                      <span className="tooltip-balloon">
                        <span className="tooltip-balloon-label">Meaning:</span>
                        {summaryText}
                      </span>
                    )}
                  </span>
                );
              }
              return <span key={segIdx}>{highlightJargon(seg.text)}</span>;
            })}
          </p>
        ))}
      </article>
    </div>
  );
};
