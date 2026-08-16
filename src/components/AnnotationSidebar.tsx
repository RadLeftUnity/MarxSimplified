import React, { useEffect, useState } from 'react';
import type { Annotation } from './ChapterReader';
import { BookOpen, Sparkles, History, MessageCircle } from 'lucide-react';
import { highlightJargon } from '../data/glossary';

interface AnnotationSidebarProps {
  annotations: Annotation[];
  activeAnnotationId: string | null;
  onSelectAnnotation: (id: string | null) => void;
  chapterSummary?: string;
}

export const AnnotationSidebar: React.FC<AnnotationSidebarProps> = ({
  annotations,
  activeAnnotationId,
  onSelectAnnotation,
  chapterSummary,
}) => {
  const [activeTab, setActiveTab] = useState<'highlights' | 'summary'>('highlights');

  useEffect(() => {
    if (activeAnnotationId) {
      setActiveTab('highlights');
      const element = document.getElementById(`annotation-card-${activeAnnotationId}`);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
      }
    }
  }, [activeAnnotationId]);

  return (
    <aside className="annotation-sidebar glass-panel">
      <div className="sidebar-header">
        <div className="sidebar-header-title-row">
          <BookOpen className="sidebar-header-icon" />
          <h3>Translation & Context</h3>
        </div>
        <p className="sidebar-header-sub">
          {annotations.length} simplified section{annotations.length !== 1 ? 's' : ''} in this chapter
        </p>
      </div>

      {chapterSummary && (
        <div className="sidebar-tabs">
          <button
            className={`sidebar-tab-btn ${activeTab === 'highlights' ? 'active' : ''}`}
            onClick={() => setActiveTab('highlights')}
            id="tab-btn-highlights"
          >
            Line Notes
          </button>
          <button
            className={`sidebar-tab-btn ${activeTab === 'summary' ? 'active' : ''}`}
            onClick={() => setActiveTab('summary')}
            id="tab-btn-summary"
          >
            Chapter Summary
          </button>
        </div>
      )}

      <div className="sidebar-cards-container">
        {activeTab === 'summary' && chapterSummary ? (
          <div className="sidebar-chapter-summary-view glass-panel">
            <span className="summary-guide-label">
              <Sparkles className="section-icon text-gold" /> Concise Summary
            </span>
            <div className="chapter-summary-content">
              {chapterSummary.split(/\n\s*\n/).map((para, idx) => (
                <p key={idx} className="summary-paragraph">
                  {highlightJargon(para)}
                </p>
              ))}
            </div>
          </div>
        ) : annotations.length === 0 ? (
          <div className="sidebar-empty-state">
            <p>No annotations available for this chapter.</p>
          </div>
        ) : (
          annotations.map((ann, idx) => {
            const annId = ann.id || `ann-${idx + 1}`;
            const isActive = activeAnnotationId === annId;
            const summaryText = ann.summary || (ann as any).explanation || '';
            return (
              <div
                key={annId}
                id={`annotation-card-${annId}`}
                className={`annotation-card glass-panel ${isActive ? 'active' : ''}`}
                onClick={() => onSelectAnnotation(annId)}
              >
                <div className="annotation-card-section quote-section">
                  <span className="section-label">
                    <MessageCircle className="section-icon" /> Original Text
                  </span>
                  <blockquote className="original-quote">
                    "{ann.targetText}"
                  </blockquote>
                </div>

                <div className="annotation-card-section summary-section">
                  <span className="section-label summary-label">
                    <Sparkles className="section-icon" /> Simplified Meaning
                  </span>
                  <p className="simplified-text">{summaryText}</p>
                </div>

                {ann.context && (
                  <div className="annotation-card-section context-section">
                    <span className="section-label context-label">
                      <History className="section-icon" /> Historical Context
                    </span>
                    <p className="context-text">{ann.context}</p>
                  </div>
                )}
              </div>
            );
          })
        )}

        {activeTab === 'highlights' && annotations.length > 0 && !activeAnnotationId && (
          <div className="sidebar-guide-prompt glass-panel">
            <span className="guide-prompt-icon">💡</span>
            <p className="guide-prompt-text">
              Click any underlined sentence in the book text to jump directly to its summary.
            </p>
          </div>
        )}
      </div>
    </aside>
  );
};
