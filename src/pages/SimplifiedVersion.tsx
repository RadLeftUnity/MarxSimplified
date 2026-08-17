import React, { useState, useEffect } from 'react';
import { ArrowLeft, BookOpen, Sparkles, History, ExternalLink, Layers, Type, Compass } from 'lucide-react';
import type { BookDetail, Chapter } from './BookSummary';
import type { Annotation } from '../components/ChapterReader';
import { fetchCachedAnnotations, fetchCachedText } from '../utils/dataCache';
import { highlightJargon } from '../data/glossary';

interface SimplifiedVersionProps {
  book: BookDetail;
  initialChapterId?: string | null;
  onBackToSummary: () => void;
  onSelectAnnotationInText: (chapterId: string, annotationId: string) => void;
  onSwitchToFullText: (chapterId: string) => void;
  onOpenA11y?: () => void;
}

interface ChapterAnnotations {
  chapter: Chapter;
  chapterSummary: string;
  annotations: Annotation[];
}

export const SimplifiedVersion: React.FC<SimplifiedVersionProps> = ({
  book,
  initialChapterId,
  onBackToSummary,
  onSelectAnnotationInText,
  onSwitchToFullText,
  onOpenA11y,
}) => {
  const [selectedChapterId, setSelectedChapterId] = useState<string>(
    initialChapterId || (book.chapters.length > 0 ? book.chapters[0].id : '')
  );
  const [viewMode, setViewMode] = useState<'single' | 'all'>('single');
  const [loading, setLoading] = useState<boolean>(true);
  const [chapterDataMap, setChapterDataMap] = useState<Record<string, ChapterAnnotations>>({});
  const [error, setError] = useState<string | null>(null);

  // Sync initialChapterId if changed externally
  useEffect(() => {
    if (initialChapterId && book.chapters.some((c) => c.id === initialChapterId)) {
      setSelectedChapterId(initialChapterId);
    }
  }, [initialChapterId, book.chapters]);

  // Load annotations and summaries for all chapters
  useEffect(() => {
    let isMounted = true;
    const loadAllAnnotations = async () => {
      setLoading(true);
      setError(null);
      try {
        const resultMap: Record<string, ChapterAnnotations> = {};

        await Promise.all(
          book.chapters.map(async (ch) => {
            const annotations = await fetchCachedAnnotations(book.id, ch.id, ch.annotationFile);
            let chapterSummary = '';
            if (ch.summaryFile) {
              try {
                chapterSummary = await fetchCachedText(`/data/books/${book.id}/${ch.summaryFile}`);
              } catch {
                chapterSummary = '';
              }
            }
            resultMap[ch.id] = {
              chapter: ch,
              chapterSummary,
              annotations,
            };
          })
        );

        if (isMounted) {
          setChapterDataMap(resultMap);
        }
      } catch (err: any) {
        if (isMounted) {
          setError(err.message || 'Could not load simplified reading annotations.');
        }
      } finally {
        if (isMounted) {
          setLoading(false);
        }
      }
    };

    loadAllAnnotations();

    return () => {
      isMounted = false;
    };
  }, [book.id, book.chapters]);

  const activeChapterObj = book.chapters.find((c) => c.id === selectedChapterId) || book.chapters[0];

  const totalAnnotations = Object.values(chapterDataMap).reduce(
    (acc, item) => acc + item.annotations.length,
    0
  );

  return (
    <div className="simplified-page-wrapper">
      {/* Top Header Bar */}
      <header className="simplified-toolbar glass-header">
        <button className="toolbar-back-btn" onClick={onBackToSummary} id="simplified-back-btn">
          <ArrowLeft className="toolbar-btn-icon" />
          <span className="hide-mobile">Summary</span>
        </button>

        <div className="toolbar-title-container">
          <span className="toolbar-book-title">{book.title}</span>
          <span className="simplified-badge-title">Simplified Version</span>
        </div>

        <div className="toolbar-actions">
          {onOpenA11y && (
            <button
              className="toolbar-action-btn reader-a11y-btn"
              onClick={onOpenA11y}
              title="Adjust Font Size & Theme"
              id="simplified-a11y-btn"
            >
              <Type className="toolbar-btn-icon text-gold" />
              <span className="hide-mobile">Text</span>
            </button>
          )}

          <button
            className="toolbar-action-btn switch-mode-btn"
            onClick={() => onSwitchToFullText(selectedChapterId || book.chapters[0]?.id)}
            title="Switch to Full Book Reader"
            id="switch-to-full-text-btn"
          >
            <BookOpen className="toolbar-btn-icon" />
            <span>Full Text</span>
          </button>
        </div>
      </header>

      {/* Main Container */}
      <div className="page-container simplified-container">
        {/* Banner Hero */}
        <section className="simplified-hero-banner glass-panel">
          <div className="hero-banner-content">
            <div className="hero-badge">
              <Sparkles className="hero-badge-icon" /> Simplified Reading Guide
            </div>
            <h2 className="hero-banner-title">{book.title}: Simplified Edition</h2>
            <p className="hero-banner-subtitle">
              Read the entire text purely through structured, simplified annotations and clear line notes. Click any section to jump directly to its context in the full original text.
            </p>
          </div>
        </section>

        {/* Sidebar & Main Workspace Grid */}
        <div className="simplified-workspace-grid">
          {/* Left Side Navigation Menu */}
          <aside className="simplified-sidebar-menu glass-panel">
            <div className="sidebar-menu-header">
              <Compass className="sidebar-header-icon text-gold" />
              <h4>Chapter Navigation</h4>
            </div>

            <nav className="sidebar-chapter-nav">
              <button
                className={`sidebar-nav-item ${viewMode === 'all' ? 'active' : ''}`}
                onClick={() => setViewMode('all')}
                id="nav-all-chapters"
              >
                <div className="nav-item-left">
                  <Layers className="nav-item-icon" />
                  <span>All Chapters</span>
                </div>
                <span className="nav-count-badge">{totalAnnotations} concepts</span>
              </button>

              <div className="sidebar-nav-divider" />

              {book.chapters.map((ch, idx) => {
                const chAnnotationsCount = chapterDataMap[ch.id]?.annotations.length || 0;
                const isSelected = viewMode === 'single' && selectedChapterId === ch.id;
                return (
                  <button
                    key={ch.id}
                    className={`sidebar-nav-item ${isSelected ? 'active' : ''}`}
                    onClick={() => {
                      setSelectedChapterId(ch.id);
                      setViewMode('single');
                    }}
                    id={`nav-chapter-${ch.id}`}
                  >
                    <div className="nav-item-left">
                      <span className="nav-chapter-num">Ch. {idx + 1}</span>
                      <span className="nav-chapter-title">{ch.title}</span>
                    </div>
                    {chAnnotationsCount > 0 && (
                      <span className="nav-count-pill">{chAnnotationsCount}</span>
                    )}
                  </button>
                );
              })}
            </nav>

            <div className="sidebar-menu-footer">
              <div className="sidebar-stat-row">
                <Sparkles className="stat-line-icon text-gold" />
                <span>{totalAnnotations} Simplified Concepts</span>
              </div>
              <div className="sidebar-stat-row">
                <BookOpen className="stat-line-icon" />
                <span>{book.chapters.length} Chapters</span>
              </div>
            </div>
          </aside>

          {/* Main Content Area */}
          <main className="simplified-main-pane">
            {loading ? (
              <div className="reader-state-viewport">
                <div className="spinner-icon-wrapper">
                  <div className="spinner-dot"></div>
                </div>
                <p>Gathering simplified concepts & annotations...</p>
              </div>
            ) : error ? (
              <div className="reader-state-viewport">
                <h3>Unable to load simplified reading</h3>
                <p>{error}</p>
              </div>
            ) : (
              <div className="simplified-content-stream">
                {(viewMode === 'single' ? [activeChapterObj] : book.chapters).map((ch) => {
                  const chData = chapterDataMap[ch.id];
                  if (!chData) return null;

                  return (
                    <section key={ch.id} className="simplified-chapter-block">
                      <div className="chapter-block-header glass-panel">
                        <div className="chapter-header-main">
                          <span className="chapter-number-pill">Chapter</span>
                          <h3 className="chapter-header-title">{ch.title}</h3>
                        </div>
                        <button
                          className="read-chapter-full-btn"
                          onClick={() => onSwitchToFullText(ch.id)}
                        >
                          <BookOpen className="btn-small-icon" /> Read Full Chapter Text
                        </button>
                      </div>

                      {/* Chapter Narrative Overview (if present) */}
                      {chData.chapterSummary && (
                        <div className="chapter-narrative-box glass-panel">
                          <div className="narrative-box-header">
                            <Sparkles className="narrative-icon text-gold" />
                            <h4>Chapter Overview</h4>
                          </div>
                          <div className="narrative-body">
                            {chData.chapterSummary.split(/\n\s*\n/).map((para, pIdx) => (
                              <p key={pIdx} className="narrative-paragraph">
                                {highlightJargon(para)}
                              </p>
                            ))}
                          </div>
                        </div>
                      )}

                      {/* List of Annotations as simplified reading stream */}
                      <div className="annotations-stream-list">
                        {chData.annotations.length === 0 ? (
                          <div className="empty-annotations-card glass-panel">
                            <p>No simplified annotations registered for this chapter.</p>
                          </div>
                        ) : (
                          chData.annotations.map((ann, annIdx) => {
                            const annId = ann.id || `${ch.id}-ann-${annIdx + 1}`;
                            return (
                              <article key={annId} className="simplified-concept-card glass-panel card-hover-effect">
                                <div className="concept-card-top-row">
                                  <span className="concept-index-badge">
                                    Concept #{annIdx + 1}
                                  </span>
                                  <button
                                    className="view-in-text-btn"
                                    onClick={() => onSelectAnnotationInText(ch.id, annId)}
                                    title="View this concept in the full original text context"
                                  >
                                    <ExternalLink className="btn-small-icon" />
                                    <span>View Context in Actual Text</span>
                                  </button>
                                </div>

                                {/* Main Simplified Explanation */}
                                <div className="concept-meaning-block">
                                  <span className="concept-label">
                                    <Sparkles className="concept-label-icon text-gold" /> Simplified Meaning
                                  </span>
                                  <p className="concept-summary-text">
                                    {highlightJargon(ann.summary)}
                                  </p>
                                </div>

                                {/* Original Text Excerpt Context */}
                                <div className="concept-excerpt-block">
                                  <span className="concept-label">
                                    <BookOpen className="concept-label-icon" /> Original Excerpt
                                  </span>
                                  <blockquote className="concept-original-quote">
                                    {ann.targetText}
                                  </blockquote>
                                </div>

                                {/* Historical Context (if present) */}
                                {ann.context && (
                                  <div className="concept-context-block">
                                    <span className="concept-label">
                                      <History className="concept-label-icon text-crimson" /> Historical & Analytical Context
                                    </span>
                                    <p className="concept-context-text">
                                      {highlightJargon(ann.context)}
                                    </p>
                                  </div>
                                )}
                              </article>
                            );
                          })
                        )}
                      </div>
                    </section>
                  );
                })}
              </div>
            )}
          </main>
        </div>
      </div>
    </div>
  );
};
