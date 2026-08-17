import React, { useMemo, useState, useRef } from 'react';
import { createPortal } from 'react-dom';
import { highlightJargon } from '../data/glossary';
import { fuzzyFindInText } from '../utils/fuzzyMatch';
import { parseFormattedBlocks, type ParsedBlock } from './FormattedText';

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
  searchTerm?: string;
}

interface Segment {
  type: 'text' | 'highlight';
  text: string;
  annotationId?: string;
}

function renderSearchAndJargon(str: string, searchQuery?: string) {
  if (!searchQuery || !searchQuery.trim()) {
    return highlightJargon(str);
  }
  const q = searchQuery.trim();
  const parts = str.split(new RegExp(`(${q.replace(/[-[\]{}()*+?.,\\^$|#\s]/g, '\\$&')})`, 'gi'));
  return parts.map((part, i) =>
    part.toLowerCase() === q.toLowerCase() ? (
      <mark key={i} className="search-highlight">
        {part}
      </mark>
    ) : (
      <React.Fragment key={i}>{highlightJargon(part)}</React.Fragment>
    )
  );
}

function parseSegmentsForText(rawText: string, annotations: Annotation[]): Segment[] {
  if (!rawText) return [];
  const matches: { start: number; end: number; annotation: Annotation }[] = [];

  for (let idx = 0; idx < annotations.length; idx++) {
    const ann = annotations[idx];
    const result = fuzzyFindInText(rawText, ann.targetText);
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
    return [{ type: 'text', text: rawText }];
  }

  matches.sort((a, b) => {
    if (a.start !== b.start) return a.start - b.start;
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
        text: rawText.slice(currentPos, match.start),
      });
    }
    segments.push({
      type: 'highlight',
      text: rawText.slice(match.start, match.end),
      annotationId: match.annotation.id,
    });
    currentPos = match.end;
  }

  if (currentPos < rawText.length) {
    segments.push({
      type: 'text',
      text: rawText.slice(currentPos),
    });
  }

  return segments;
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
  searchTerm,
}) => {
  const urlSearchTerm = new URLSearchParams(window.location.search).get('q') || undefined;
  const activeSearchTerm = searchTerm || urlSearchTerm;

  const parsedBlocks = useMemo(() => {
    return parseFormattedBlocks(text);
  }, [text]);

  // Auto scroll to search highlight if present
  React.useEffect(() => {
    if (activeSearchTerm) {
      const timer = setTimeout(() => {
        const el = document.querySelector('mark.search-highlight');
        if (el) {
          el.scrollIntoView({ behavior: 'smooth', block: 'center' });
        }
      }, 200);
      return () => clearTimeout(timer);
    }
  }, [activeSearchTerm, text]);

  const renderSegments = (segments: Segment[], isTitle: boolean = false) => {
    const content = segments.map((seg, segIdx) => {
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
      return <span key={segIdx}>{renderSearchAndJargon(seg.text, activeSearchTerm)}</span>;
    });

    if (isTitle) {
      return <strong className="formatted-item-title">{content}</strong>;
    }
    return content;
  };

  const renderItemWithHighlights = (itemText: string) => {
    const titleColonMatch = itemText.match(/^([^:]+:\s*)(.*)$/);
    if (titleColonMatch) {
      const titlePart = titleColonMatch[1];
      const restPart = titleColonMatch[2];
      const titleSegments = parseSegmentsForText(titlePart, annotations);
      const restSegments = parseSegmentsForText(restPart, annotations);

      return (
        <>
          {renderSegments(titleSegments, true)}
          {renderSegments(restSegments, false)}
        </>
      );
    }

    const segments = parseSegmentsForText(itemText, annotations);
    return renderSegments(segments, false);
  };

  return (
    <div className="chapter-reader-container">
      <h2 className="chapter-title">{title}</h2>
      
      <article className="reader-article">
        {parsedBlocks.map((block: ParsedBlock, idx: number) => {
          if (block.type === 'ol') {
            return (
              <div key={idx} className="formatted-list-wrapper">
                {block.intro && (
                  <p className="reader-paragraph formatted-intro">
                    {renderSegments(parseSegmentsForText(block.intro, annotations))}
                  </p>
                )}
                <ol className="formatted-list formatted-ol">
                  {block.items?.map((item, itemIdx) => (
                    <li key={itemIdx} className="formatted-list-item formatted-ol-item">
                      <span className="formatted-ol-badge">{item.num || itemIdx + 1}</span>
                      <div className="formatted-item-content">
                        {renderItemWithHighlights(item.text)}
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
                  <p className="reader-paragraph formatted-intro">
                    {renderSegments(parseSegmentsForText(block.intro, annotations))}
                  </p>
                )}
                <ul className="formatted-list formatted-ul">
                  {block.items?.map((item, itemIdx) => (
                    <li key={itemIdx} className="formatted-list-item formatted-ul-item">
                      <span className="formatted-ul-bullet">✦</span>
                      <div className="formatted-item-content">
                        {renderItemWithHighlights(item.text)}
                      </div>
                    </li>
                  ))}
                </ul>
              </div>
            );
          }

          const paraSegments = parseSegmentsForText(block.paragraphText || '', annotations);
          return (
            <p key={idx} className="reader-paragraph">
              {renderSegments(paraSegments)}
            </p>
          );
        })}
      </article>
    </div>
  );
};

