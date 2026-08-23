import React, { useState } from 'react';
import type { Citation } from '../data/history/types';
import { ExternalLink, BookOpen, X, Info } from 'lucide-react';

interface CitationTooltipProps {
  citation: Citation;
}

export const CitationTooltip: React.FC<CitationTooltipProps> = ({ citation }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <span className="citation-marker-container">
      <button
        className="citation-marker-btn"
        onClick={(e) => {
          e.stopPropagation();
          setIsOpen(!isOpen);
        }}
        title={`View Source [${citation.id}]: ${citation.label}`}
        type="button"
      >
        [{citation.id}]
      </button>

      {isOpen && (
        <div className="citation-popup-card glass-panel" onClick={(e) => e.stopPropagation()}>
          <div className="citation-popup-header">
            <span className="citation-popup-title">
              <BookOpen className="btn-small-icon text-gold" />
              Source [{citation.id}]
            </span>
            <button
              className="citation-close-btn"
              onClick={() => setIsOpen(false)}
              title="Close source overlay"
            >
              <X className="btn-small-icon" />
            </button>
          </div>

          <div className="citation-popup-body">
            <h5 className="citation-label">{citation.label}</h5>
            {citation.publisher && (
              <p className="citation-meta">
                <span>{citation.publisher}</span>
                {citation.year && <span> ({citation.year})</span>}
              </p>
            )}
            {citation.excerpt && (
              <blockquote className="citation-excerpt">
                <Info className="excerpt-icon text-gold" />
                &ldquo;{citation.excerpt}&rdquo;
              </blockquote>
            )}
          </div>

          {citation.url && (
            <div className="citation-popup-footer">
              <a
                href={citation.url}
                target="_blank"
                rel="noopener noreferrer"
                className="citation-external-link"
              >
                <span>Read Full Document</span>
                <ExternalLink className="btn-small-icon" />
              </a>
            </div>
          )}
        </div>
      )}
    </span>
  );
};
