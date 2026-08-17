import React, { useMemo, useState, useRef } from 'react';
import { createPortal } from 'react-dom';
import { highlightJargon } from '../data/glossary';
import { fuzzyFindInText } from '../utils/fuzzyMatch';

export interface Annotation {
  id: string;
  targetText: string;
  summary: string;
  context: string;
  topics?: string[];
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

const AnnotationHighlightWord: React.FC<{
  segmentText: string;
  annotationId: string;
  summaryText: string;
  isActive: boolean;
  onSelectAnnotation: (id: string | null) => void;
}> = ({ segmentText, annotationId, summaryText, isActive, onSelectAnnotation }) => {
  const [isHovered, setIsHovered] = useState(false);
  const [coords, setCoords] = useState<{ top: number; left: number; popDown: boolean } | null>(null);
  const targetRef = useRef<HTMLSpanElement>(null);

  const updatePosition = () => {
    if (!targetRef.current) return;
    const rect = targetRef.current.getBoundingClientRect();
    const tooltipWidth = 300;
    const halfWidth = tooltipWidth / 2;
    const preferredLeft = rect.left + rect.width / 2;
    const clampedLeft = Math.max(16 + halfWidth, Math.min(window.innerWidth - 16 - halfWidth, preferredLeft));

    const popDown = rect.top < 220;
    const top = popDown ? rect.bottom + 10 : rect.top - 10;

    setCoords({ top, left: clampedLeft, popDown });
  };

  return (
    <>
      <span
        ref={targetRef}
        id={`annotation-highlight-${annotationId}`}
        className={`annotation-highlight ${isActive ? 'active' : ''}`}
        onClick={(e) => {
          e.stopPropagation();
          onSelectAnnotation(annotationId || null);
        }}
        onMouseEnter={() => {
          updatePosition();
          setIsHovered(true);
        }}
        onMouseLeave={() => setIsHovered(false)}
      >
        {segmentText}
      </span>
      {isHovered && summaryText && coords && createPortal(
        <div
          className={`tooltip-balloon glass-panel portal-tooltip ${coords.popDown ? 'pop-down' : ''}`}
          style={{
            position: 'fixed',
            top: coords.popDown ? `${coords.top}px` : 'auto',
            bottom: !coords.popDown ? `${window.innerHeight - coords.top}px` : 'auto',
            left: `${coords.left}px`,
            transform: 'translateX(-50%)',
            zIndex: 99999,
            opacity: 1,
            visibility: 'visible',
            pointerEvents: 'none',
          }}
        >
          <span className="tooltip-balloon-label">Meaning:</span>
          {summaryText}
        </div>,
        document.body
      )}
    </>
  );
};

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
                  <AnnotationHighlightWord
                    key={segIdx}
                    segmentText={seg.text}
                    annotationId={seg.annotationId}
                    summaryText={summaryText}
                    isActive={isActive}
                    onSelectAnnotation={onSelectAnnotation}
                  />
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
