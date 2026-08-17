import React, { useState, useEffect } from 'react';
import { ArrowLeft, CheckCircle, X, Loader2, RefreshCw, Type, Sparkles } from 'lucide-react';
import type { BookDetail } from './BookSummary';
import { ChapterReader } from '../components/ChapterReader';
import type { Annotation } from '../components/ChapterReader';
import { AnnotationSidebar } from '../components/AnnotationSidebar';
import { fetchChapterBundle, prefetchAdjacentChapters } from '../utils/dataCache';

interface ReaderProps {
  book: BookDetail;
  chapterId: string;
  onBackToSummary: () => void;
  onChapterChange: (chapterId: string) => void;
  onMarkCompleted: () => void;
  isCompleted: boolean;
  onOpenA11y?: () => void;
  onSwitchToSimplified?: () => void;
  onSelectTopicTag?: (topic: string) => void;
}

export const Reader: React.FC<ReaderProps> = ({
  book,
  chapterId,
  onBackToSummary,
  onChapterChange,
  onMarkCompleted,
  isCompleted,
  onOpenA11y,
  onSwitchToSimplified,
  onSelectTopicTag,
}) => {
  const [text, setText] = useState<string>('');
  const [annotations, setAnnotations] = useState<Annotation[]>([]);
  const [chapterSummary, setChapterSummary] = useState<string>('');
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);
  const [activeAnnotationId, setActiveAnnotationId] = useState<string | null>(null);
  const [isMobile, setIsMobile] = useState<boolean>(window.innerWidth < 992);
  const [showMobileDrawer, setShowMobileDrawer] = useState<boolean>(false);
  const [showMobileSummary, setShowMobileSummary] = useState<boolean>(false);

  // Resize handler
  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 992);
    };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // Fetch chapter text, annotations, and narrative summary with caching and background pre-fetching
  useEffect(() => {
    const fetchChapterData = async () => {
      setLoading(true);
      setError(null);
      setActiveAnnotationId(null);
      setShowMobileDrawer(false);
      setShowMobileSummary(false);
      setChapterSummary('');

      try {
        const currentIdx = book.chapters.findIndex((c) => c.id === chapterId);
        const chapter = book.chapters[currentIdx];
        if (!chapter) {
          throw new Error('Chapter configuration not found in book summary');
        }

        // Fetch bundle (uses cache if available)
        const bundle = await fetchChapterBundle(book.id, chapter);

        setText(bundle.text);
        setAnnotations(bundle.annotations);
        setChapterSummary(bundle.chapterSummary);

        // Check if there is a shared annotation in the URL parameter
        const params = new URLSearchParams(window.location.search);
        const urlAnn = params.get('ann');
        if (urlAnn && bundle.annotations.some((a: Annotation) => a.id === urlAnn)) {
          setActiveAnnotationId(urlAnn);
          if (isMobile) {
            setShowMobileDrawer(true);
          }
        }

        // Background pre-fetch next & previous chapters in memory
        if (currentIdx !== -1) {
          prefetchAdjacentChapters(book, currentIdx);
        }
      } catch (err: any) {
        console.error(err);
        setError(err.message || 'An error occurred while loading the chapter data.');
      } finally {
        setLoading(false);
      }
    };

    fetchChapterData();
  }, [book.id, chapterId]);

  // Update URL search parameters when activeAnnotationId changes
  useEffect(() => {
    if (loading) return;
    const params = new URLSearchParams(window.location.search);
    const currentAnn = params.get('ann');
    if (activeAnnotationId) {
      if (currentAnn !== activeAnnotationId) {
        params.set('ann', activeAnnotationId);
        window.history.replaceState(null, '', `?${params.toString()}`);
      }
    } else {
      if (currentAnn) {
        params.delete('ann');
        window.history.replaceState(null, '', `?${params.toString()}`);
      }
    }
  }, [activeAnnotationId, loading]);

  // Scroll active annotation highlight and card into view
  useEffect(() => {
    if (!loading && activeAnnotationId) {
      const timer = setTimeout(() => {
        const textEl = document.getElementById(`annotation-highlight-${activeAnnotationId}`);
        if (textEl) {
          textEl.scrollIntoView({ behavior: 'smooth', block: 'center' });
        }
      }, 150);
      return () => clearTimeout(timer);
    }
  }, [activeAnnotationId, loading]);

  // Handle setting annotation
  const handleSelectAnnotation = (id: string | null) => {
    setActiveAnnotationId(id);
    if (id && isMobile) {
      setShowMobileDrawer(true);
    }
  };

  const currentChapterIndex = book.chapters.findIndex((c) => c.id === chapterId);
  const currentChapter = book.chapters[currentChapterIndex];

  const handleNextChapter = () => {
    if (currentChapterIndex < book.chapters.length - 1) {
      onChapterChange(book.chapters[currentChapterIndex + 1].id);
    }
  };

  const handlePrevChapter = () => {
    if (currentChapterIndex > 0) {
      onChapterChange(book.chapters[currentChapterIndex - 1].id);
    }
  };

  const activeAnnotation = annotations.find((a) => a.id === activeAnnotationId);

  return (
    <div className="reader-page-wrapper">
      <header className="reader-toolbar glass-header">
        <button className="toolbar-back-btn" onClick={onBackToSummary}>
          <ArrowLeft className="toolbar-btn-icon" />
          <span className="hide-mobile">Summary</span>
        </button>

        <div className="toolbar-title-container">
          <span className="toolbar-book-title">{book.title}</span>
          <span className="toolbar-chapter-title">{currentChapter?.title}</span>
        </div>

        <div className="toolbar-actions">
          {onSwitchToSimplified && (
            <button
              className="toolbar-action-btn switch-mode-btn"
              onClick={onSwitchToSimplified}
              title="Switch to Simplified Version (Annotations Only)"
              id="reader-toolbar-simplified-btn"
            >
              <Sparkles className="toolbar-btn-icon text-gold" />
              <span className="hide-mobile-sm">Simplified</span>
            </button>
          )}

          {onOpenA11y && (
            <button
              className="toolbar-action-btn reader-a11y-btn"
              onClick={onOpenA11y}
              title="Adjust Reader Text Size & Theme"
              id="reader-toolbar-a11y-btn"
            >
              <Type className="toolbar-btn-icon text-gold" />
              <span className="hide-mobile-sm">Text</span>
            </button>
          )}

          {isMobile && chapterSummary && (
            <button 
              className="toolbar-action-btn mobile-summary-btn"
              onClick={() => setShowMobileSummary(true)}
              id="mobile-chapter-summary-btn"
            >
              <span>Summary</span>
            </button>
          )}

          <button 
            className={`toolbar-action-btn complete-btn ${isCompleted ? 'completed' : ''}`}
            onClick={onMarkCompleted}
            id="mark-completed-btn"
          >
            <CheckCircle className="toolbar-btn-icon" />
            <span className="hide-mobile-sm">{isCompleted ? 'Completed' : 'Mark Done'}</span>
          </button>
        </div>
      </header>

      {loading ? (
        <div className="reader-state-viewport">
          <Loader2 className="spinner-icon" />
          <p>Loading simplified study text...</p>
        </div>
      ) : error ? (
        <div className="reader-state-viewport">
          <RefreshCw className="error-icon" />
          <h3>Unable to load text</h3>
          <p>{error}</p>
          <button className="retry-btn glass-panel" onClick={() => window.location.reload()}>
            Reload Page
          </button>
        </div>
      ) : (
        <div className="reader-workspace">
          <div className="reader-text-column">
            <div className="reader-text-pane">
              <ChapterReader
                title={currentChapter.title}
                text={text}
                annotations={annotations}
                activeAnnotationId={activeAnnotationId}
                onSelectAnnotation={handleSelectAnnotation}
              />
            </div>

            <footer className="reader-nav-footer">
              <button
                className="nav-footer-btn"
                onClick={handlePrevChapter}
                disabled={currentChapterIndex === 0}
                id="prev-chapter-btn"
              >
                ‹ Previous
              </button>

              <span className="nav-footer-info">
                CH. {currentChapterIndex + 1} / {book.chapters.length}
              </span>

              <button
                className="nav-footer-btn"
                onClick={handleNextChapter}
                disabled={currentChapterIndex === book.chapters.length - 1}
                id="next-chapter-btn"
              >
                Next ›
              </button>
            </footer>
          </div>

          {!isMobile && (
            <AnnotationSidebar
              annotations={annotations}
              activeAnnotationId={activeAnnotationId}
              onSelectAnnotation={handleSelectAnnotation}
              chapterSummary={chapterSummary}
              onSelectTopicTag={onSelectTopicTag}
            />
          )}
        </div>
      )}

      {/* Mobile Line Notes Drawer Overlay */}
      {isMobile && showMobileDrawer && activeAnnotation && (
        <div className="mobile-drawer-backdrop" onClick={() => setShowMobileDrawer(false)}>
          <div className="mobile-drawer-content glass-panel" onClick={(e) => e.stopPropagation()}>
            <div className="drawer-header">
              <h4>Simplified Meaning</h4>
              <button className="drawer-close-btn" onClick={() => setShowMobileDrawer(false)}>
                <X className="drawer-close-icon" />
              </button>
            </div>
            
            <div className="drawer-body">
              <blockquote className="drawer-quote">
                {activeAnnotation.targetText}
              </blockquote>
              <div className="drawer-meaning">
                <span className="drawer-label">Meaning:</span>
                <p>{activeAnnotation.summary}</p>
              </div>
              {activeAnnotation.context && (
                <div className="drawer-context">
                  <span className="drawer-label">Context:</span>
                  <p>{activeAnnotation.context}</p>
                </div>
              )}
            </div>
          </div>
        </div>
      )}

      {/* Mobile Chapter Narrative Summary Drawer Overlay */}
      {isMobile && showMobileSummary && chapterSummary && (
        <div className="mobile-drawer-backdrop" onClick={() => setShowMobileSummary(false)}>
          <div className="mobile-drawer-content glass-panel" onClick={(e) => e.stopPropagation()}>
            <div className="drawer-header">
              <h4>Chapter Concise Summary</h4>
              <button className="drawer-close-btn" onClick={() => setShowMobileSummary(false)}>
                <X className="drawer-close-icon" />
              </button>
            </div>
            
            <div className="drawer-body" style={{ gap: '16px' }}>
              <span className="drawer-label">concise summary:</span>
              <div className="chapter-summary-content" style={{ fontFamily: 'var(--font-serif)', lineHeight: 1.7, fontSize: '14px', color: 'var(--text-secondary)' }}>
                {chapterSummary.split(/\n\s*\n/).map((para, idx) => (
                  <p key={idx} style={{ marginBottom: '14px' }}>
                    {para}
                  </p>
                ))}
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
