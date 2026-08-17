import { useState, useEffect, useRef } from 'react';
import { Navbar } from './components/Navbar';
import { Library } from './pages/Library';
import { BookSummary } from './pages/BookSummary';
import type { BookDetail } from './pages/BookSummary';
import { Reader } from './pages/Reader';
import { SimplifiedVersion } from './pages/SimplifiedVersion';
import type { Book } from './components/BookCard';
import { Glossary } from './pages/Glossary';
import { Topics } from './pages/Topics';
import { Search } from './pages/Search';
import { Authors } from './pages/Authors';
import { AccessibilityPanel, DEFAULT_A11Y_SETTINGS } from './components/AccessibilityPanel';
import type { AccessibilitySettings, ReaderFontSize, Theme } from './components/AccessibilityPanel';
import { Loader2, AlertTriangle } from 'lucide-react';
import { fetchCachedJSON, prefetchBookSummaries, fetchCachedTopicIndex, fetchSearchIndex } from './utils/dataCache';

export default function App() {
  const [page, setPage] = useState<'library' | 'summary' | 'reading' | 'glossary' | 'simplified' | 'topics' | 'search' | 'authors'>('library');
  const [books, setBooks] = useState<Book[]>([]);
  const [selectedBookId, setSelectedBookId] = useState<string | null>(null);
  const [selectedBookDetail, setSelectedBookDetail] = useState<BookDetail | null>(null);
  const [selectedChapterId, setSelectedChapterId] = useState<string | null>(null);
  const [selectedTopic, setSelectedTopic] = useState<string | null>(null);
  const [previousView, setPreviousView] = useState<{
    page: 'library' | 'summary' | 'reading' | 'simplified' | 'topics' | 'search' | 'authors';
    bookId?: string | null;
    bookTitle?: string;
    chapterId?: string | null;
  } | null>(null);
  const currentViewRef = useRef<{
    page: 'library' | 'summary' | 'reading' | 'simplified' | 'topics' | 'search' | 'authors';
    bookId: string | null;
    bookTitle?: string;
    chapterId: string | null;
  }>({
    page: 'library',
    bookId: null,
    chapterId: null,
  });

  useEffect(() => {
    if (page !== 'glossary') {
      currentViewRef.current = {
        page,
        bookId: selectedBookId,
        bookTitle: selectedBookDetail?.title,
        chapterId: selectedChapterId,
      };
    }
  }, [page, selectedBookId, selectedBookDetail, selectedChapterId]);
  
  const [loading, setLoading] = useState<boolean>(true);
  const [bookLoading, setBookLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);
  
  // Accessibility & Theme state persisted in localStorage
  const [a11yOpen, setA11yOpen] = useState<boolean>(false);
  const [a11ySettings, setA11ySettings] = useState<AccessibilitySettings>(() => {
    const saved = localStorage.getItem('marx_simplified_a11y');
    if (saved) {
      try {
        return { ...DEFAULT_A11Y_SETTINGS, ...JSON.parse(saved) };
      } catch {
        // fallback
      }
    }
    const legacyTheme = localStorage.getItem('marx_simplified_theme');
    return {
      ...DEFAULT_A11Y_SETTINGS,
      theme: (legacyTheme as Theme) || 'dark',
    };
  });

  // Apply data attributes to document root
  useEffect(() => {
    document.documentElement.setAttribute('data-theme', a11ySettings.theme);
    document.documentElement.setAttribute('data-reader-size', a11ySettings.fontSize);
    document.documentElement.setAttribute('data-reader-font', a11ySettings.fontFamily);
    document.documentElement.setAttribute('data-reader-spacing', a11ySettings.lineHeight);
    localStorage.setItem('marx_simplified_a11y', JSON.stringify(a11ySettings));
  }, [a11ySettings]);

  // Keyboard accessibility hotkeys (Alt + +, Alt + -, Alt + A)
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.altKey && (e.key === '+' || e.key === '=')) {
        e.preventDefault();
        setA11ySettings((prev) => {
          const sizes: ReaderFontSize[] = ['small', 'normal', 'large', 'xlarge'];
          const idx = sizes.indexOf(prev.fontSize);
          return { ...prev, fontSize: sizes[Math.min(sizes.length - 1, idx + 1)] };
        });
      } else if (e.altKey && (e.key === '-' || e.key === '_')) {
        e.preventDefault();
        setA11ySettings((prev) => {
          const sizes: ReaderFontSize[] = ['small', 'normal', 'large', 'xlarge'];
          const idx = sizes.indexOf(prev.fontSize);
          return { ...prev, fontSize: sizes[Math.max(0, idx - 1)] };
        });
      } else if (e.altKey && (e.key === 'a' || e.key === 'A')) {
        e.preventDefault();
        setA11yOpen((prev) => !prev);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  // Progress tracker mapping book ID to status
  const [progressMap, setProgressMap] = useState<Record<string, 'not-started' | 'reading' | 'completed'>>({});

  // Initialize and load manifest catalog
  useEffect(() => {
    const initApp = async () => {
      setLoading(true);
      setError(null);
      try {
        const data = await fetchCachedJSON<{ books: Book[] }>('/data/manifest.json');
        setBooks(data.books);
        
        // Background pre-fetch all book summaries, topic index, and search index in the catalog
        prefetchBookSummaries(data.books);
        fetchCachedTopicIndex().catch(() => {});
        fetchSearchIndex().catch(() => {});

        // Load reading progress
        const stored = localStorage.getItem('marx_simplified_progress');
        if (stored) {
          setProgressMap(JSON.parse(stored));
        } else {
          const initialProgress: typeof progressMap = {};
          data.books.forEach((b: Book) => {
            initialProgress[b.id] = 'not-started';
          });
          setProgressMap(initialProgress);
          localStorage.setItem('marx_simplified_progress', JSON.stringify(initialProgress));
        }

        // Check if direct hash link to glossary term is present
        if (window.location.hash.startsWith('#term-') || window.location.hash.startsWith('#glossary')) {
          setPage('glossary');
        } else {
          // Initialize state routing from URL search parameters if present
          const params = new URLSearchParams(window.location.search);
          const urlBook = params.get('book');
          const urlChapter = params.get('chapter');
          const urlView = params.get('view');
          const urlPage = params.get('page');
          const urlTopic = params.get('topic');
          
          if (urlPage === 'topics' || urlTopic) {
            if (urlTopic) setSelectedTopic(urlTopic);
            setPage('topics');
          } else if (urlBook && data.books.some((b: Book) => b.id === urlBook)) {
            setSelectedBookId(urlBook);
            try {
              const summaryData = await fetchCachedJSON<BookDetail>(`/data/books/${urlBook}/summary.json`);
              setSelectedBookDetail(summaryData);

              if (urlView === 'simplified') {
                if (urlChapter && summaryData.chapters.some((c: any) => c.id === urlChapter)) {
                  setSelectedChapterId(urlChapter);
                }
                setPage('simplified');
              } else if (urlChapter && summaryData.chapters.some((c: any) => c.id === urlChapter)) {
                setSelectedChapterId(urlChapter);
                setPage('reading');
              } else {
                setPage('summary');
              }
            } catch {
              setPage('summary');
            }
          }
        }
      } catch (err: any) {
        console.error(err);
        setError(err.message || 'An error occurred during library initialization.');
      } finally {
        setLoading(false);
      }
    };
    initApp();

    const handleHashChange = () => {
      const hash = window.location.hash;
      if (hash.startsWith('#term-') || hash.startsWith('#glossary')) {
        setPage('glossary');
        setSelectedBookId(null);
        setSelectedChapterId(null);
      }
    };
    
    const handleNavToGlossary = (e: Event) => {
      const customEvent = e as CustomEvent;
      const current = currentViewRef.current;
      setPreviousView({
        page: current.page,
        bookId: current.bookId,
        bookTitle: current.bookTitle,
        chapterId: current.chapterId,
      });
      setPage('glossary');
      if (customEvent.detail?.slug) {
        window.location.hash = `term-${customEvent.detail.slug}`;
      }
    };

    handleHashChange();
    window.addEventListener('hashchange', handleHashChange);
    window.addEventListener('navigate-to-glossary', handleNavToGlossary);

    return () => {
      window.removeEventListener('hashchange', handleHashChange);
      window.removeEventListener('navigate-to-glossary', handleNavToGlossary);
    };
  }, []);

  // Update URL parameters when routing state changes
  useEffect(() => {
    if (loading) return;
    const params = new URLSearchParams(window.location.search);
    
    if (page === 'topics') {
      params.set('page', 'topics');
      if (selectedTopic) {
        params.set('topic', selectedTopic);
      } else {
        params.delete('topic');
      }
      params.delete('book');
      params.delete('chapter');
      params.delete('view');
      params.delete('ann');
    } else {
      params.delete('page');
      params.delete('topic');

      if (selectedBookId && page !== 'glossary' && page !== 'library') {
        params.set('book', selectedBookId);
      } else {
        params.delete('book');
      }
      
      if (page === 'simplified') {
        params.set('view', 'simplified');
        if (selectedChapterId) {
          params.set('chapter', selectedChapterId);
        } else {
          params.delete('chapter');
        }
      } else {
        params.delete('view');
        if (selectedChapterId && page === 'reading') {
          params.set('chapter', selectedChapterId);
        } else {
          params.delete('chapter');
        }
      }
      
      if (page !== 'reading') {
        params.delete('ann');
      }
    }

    const searchStr = params.toString();
    const hashStr = window.location.hash;
    const newUrl = (searchStr ? `?${searchStr}` : window.location.pathname) + hashStr;
    window.history.replaceState(null, '', newUrl);
  }, [page, selectedBookId, selectedChapterId, selectedTopic, loading]);

  // Save progress helper
  const saveProgress = (newProgress: typeof progressMap) => {
    setProgressMap(newProgress);
    localStorage.setItem('marx_simplified_progress', JSON.stringify(newProgress));
  };

  // Fetch book details when selected (uses cache)
  useEffect(() => {
    if (!selectedBookId) {
      setSelectedBookDetail(null);
      return;
    }

    const fetchBookDetail = async () => {
      setBookLoading(true);
      try {
        const data = await fetchCachedJSON<BookDetail>(`/data/books/${selectedBookId}/summary.json`);
        setSelectedBookDetail(data);
      } catch (err: any) {
        console.error(err);
        alert(`Could not load book overview documents: ${err.message}`);
      } finally {
        setBookLoading(false);
      }
    };

    fetchBookDetail();
  }, [selectedBookId]);

  const handleSelectBook = (id: string) => {
    setSelectedBookId(id);
    setPage('summary');
  };

  const handleStartReading = (chapterId: string) => {
    setSelectedChapterId(chapterId);
    setPage('reading');
    
    // Set status to active reading if not already completed
    if (selectedBookId && progressMap[selectedBookId] !== 'completed') {
      const updated: Record<string, 'not-started' | 'reading' | 'completed'> = { ...progressMap, [selectedBookId]: 'reading' };
      saveProgress(updated);
    }
  };

  const handleStartSimplifiedReading = (chapterId?: string) => {
    if (chapterId) {
      setSelectedChapterId(chapterId);
    } else if (selectedBookDetail && selectedBookDetail.chapters.length > 0) {
      setSelectedChapterId(selectedBookDetail.chapters[0].id);
    }
    setPage('simplified');
  };

  const handleSelectAnnotationInText = (chapterId: string, annotationId: string) => {
    setSelectedChapterId(chapterId);
    setPage('reading');

    // Update URL param 'ann' so Reader highlights and scrolls to annotation
    const params = new URLSearchParams(window.location.search);
    params.set('book', selectedBookId || '');
    params.set('chapter', chapterId);
    params.set('ann', annotationId);
    params.delete('view');
    window.history.replaceState(null, '', `?${params.toString()}`);

    if (selectedBookId && progressMap[selectedBookId] !== 'completed') {
      const updated: Record<string, 'not-started' | 'reading' | 'completed'> = { ...progressMap, [selectedBookId]: 'reading' };
      saveProgress(updated);
    }
  };

  const handleSwitchToFullText = (chapterId?: string) => {
    if (chapterId) {
      setSelectedChapterId(chapterId);
    }
    setPage('reading');
  };

  const handleMarkCompleted = () => {
    if (!selectedBookId) return;
    const isCurrentlyCompleted = progressMap[selectedBookId] === 'completed';
    const nextStatus: 'reading' | 'completed' = isCurrentlyCompleted ? 'reading' : 'completed';
    const updated: Record<string, 'not-started' | 'reading' | 'completed'> = { ...progressMap, [selectedBookId]: nextStatus };
    saveProgress(updated);
  };

  const handleGoHome = () => {
    setPage('library');
    setSelectedBookId(null);
    setSelectedChapterId(null);
  };

  const handleGoToGlossary = () => {
    const current = currentViewRef.current;
    setPreviousView({
      page: current.page,
      bookId: current.bookId,
      bookTitle: current.bookTitle,
      chapterId: current.chapterId,
    });
    setPage('glossary');
  };

  const handleReturnFromGlossary = () => {
    if (!previousView) {
      setPage('library');
      setSelectedBookId(null);
      setSelectedChapterId(null);
      return;
    }
    if (previousView.bookId) {
      setSelectedBookId(previousView.bookId);
    }
    if (previousView.chapterId) {
      setSelectedChapterId(previousView.chapterId);
    }
    setPage(previousView.page);
    setPreviousView(null);
  };

  const handleGoToTopics = (topic?: string) => {
    if (topic) {
      setSelectedTopic(topic);
    }
    setPage('topics');
  };

  const handleSelectAnnotationFromTopics = (bookId: string, chapterId: string, annotationId: string) => {
    setSelectedBookId(bookId);
    setSelectedChapterId(chapterId);
    setPage('reading');

    const params = new URLSearchParams(window.location.search);
    params.set('book', bookId);
    params.set('chapter', chapterId);
    params.set('ann', annotationId);
    params.delete('view');
    window.history.replaceState(null, '', `?${params.toString()}`);

    if (progressMap[bookId] !== 'completed') {
      const updated: Record<string, 'not-started' | 'reading' | 'completed'> = { ...progressMap, [bookId]: 'reading' };
      saveProgress(updated);
    }
  };

  const handleGoToSearch = () => {
    setPage('search');
  };

  const handleGoToAuthors = () => {
    setPage('authors');
  };

  const handleSelectMatchFromSearch = (
    bookId: string,
    chapterId: string,
    annotationId?: string,
    searchText?: string
  ) => {
    setSelectedBookId(bookId);
    setSelectedChapterId(chapterId);
    setPage('reading');

    const params = new URLSearchParams(window.location.search);
    params.set('book', bookId);
    params.set('chapter', chapterId);
    if (annotationId) {
      params.set('ann', annotationId);
    } else {
      params.delete('ann');
    }
    if (searchText) {
      params.set('q', searchText);
    } else {
      params.delete('q');
    }
    params.delete('view');
    window.history.replaceState(null, '', `?${params.toString()}`);

    if (progressMap[bookId] !== 'completed') {
      const updated: Record<string, 'not-started' | 'reading' | 'completed'> = { ...progressMap, [bookId]: 'reading' };
      saveProgress(updated);
    }
  };

  const updateA11ySettings = (newPartial: Partial<AccessibilitySettings>) => {
    setA11ySettings((prev) => ({ ...prev, ...newPartial }));
  };

  return (
    <div className="app-layout">
      <Navbar 
        onGoHome={handleGoHome} 
        currentPage={page === 'simplified' ? 'summary' : page} 
        onGoToGlossary={handleGoToGlossary}
        onGoToTopics={() => handleGoToTopics()}
        onGoToSearch={handleGoToSearch}
        onGoToAuthors={handleGoToAuthors}
        theme={a11ySettings.theme}
        onThemeChange={(newTheme) => updateA11ySettings({ theme: newTheme })}
        onOpenA11y={() => setA11yOpen(true)}
      />
      
      {loading ? (
        <div className="app-loading-viewport">
          <Loader2 className="spinner-icon" />
          <p>Opening Simplified Archive Library...</p>
        </div>
      ) : error ? (
        <div className="app-loading-viewport">
          <AlertTriangle className="error-icon" />
          <h3>Failed to connect to archive</h3>
          <p>{error}</p>
        </div>
      ) : (
        <main className="app-main-content">
          {page === 'library' && (
            <Library 
              books={books} 
              onSelectBook={handleSelectBook} 
              progressMap={progressMap} 
            />
          )}

          {page === 'summary' && selectedBookDetail && (
            <BookSummary 
              book={selectedBookDetail} 
              onBack={handleGoHome} 
              onStartReading={handleStartReading}
              onStartSimplifiedReading={handleStartSimplifiedReading}
            />
          )}

          {page === 'reading' && selectedBookDetail && selectedChapterId && (
            <Reader
              book={selectedBookDetail}
              chapterId={selectedChapterId}
              onBackToSummary={() => setPage('summary')}
              onChapterChange={setSelectedChapterId}
              onMarkCompleted={handleMarkCompleted}
              isCompleted={progressMap[selectedBookId || ''] === 'completed'}
              onOpenA11y={() => setA11yOpen(true)}
              onSwitchToSimplified={() => setPage('simplified')}
              onSelectTopicTag={handleGoToTopics}
            />
          )}

          {page === 'simplified' && selectedBookDetail && (
            <SimplifiedVersion
              book={selectedBookDetail}
              initialChapterId={selectedChapterId}
              onBackToSummary={() => setPage('summary')}
              onSelectAnnotationInText={handleSelectAnnotationInText}
              onSwitchToFullText={handleSwitchToFullText}
              onOpenA11y={() => setA11yOpen(true)}
            />
          )}

          {page === 'glossary' && (
            <Glossary 
              onBack={previousView ? handleReturnFromGlossary : undefined}
              previousViewLabel={
                previousView ? (
                  previousView.page === 'reading' || previousView.page === 'simplified' ? (
                    `Back to Reading${previousView.bookTitle ? `: ${previousView.bookTitle}` : ''}`
                  ) : previousView.page === 'summary' ? (
                    `Back to Summary${previousView.bookTitle ? `: ${previousView.bookTitle}` : ''}`
                  ) : (
                    `Back to ${previousView.page.charAt(0).toUpperCase() + previousView.page.slice(1)}`
                  )
                ) : undefined
              }
            />
          )}

          {page === 'topics' && (
            <Topics
              initialTopic={selectedTopic}
              onSelectAnnotationInReader={handleSelectAnnotationFromTopics}
            />
          )}

          {page === 'search' && (
            <Search
              books={books}
              onSelectMatch={handleSelectMatchFromSearch}
              onBack={handleGoHome}
            />
          )}

          {page === 'authors' && (
            <Authors
              books={books}
              onSelectBook={handleSelectBook}
              onStartReading={handleStartReading}
              onBack={handleGoHome}
              progressMap={progressMap}
            />
          )}
          
          {bookLoading && (
            <div className="modal-loader-overlay">
              <Loader2 className="spinner-icon" />
              <p>Loading catalog documents...</p>
            </div>
          )}
        </main>
      )}

      <AccessibilityPanel
        isOpen={a11yOpen}
        onClose={() => setA11yOpen(false)}
        settings={a11ySettings}
        onUpdateSettings={updateA11ySettings}
      />
    </div>
  );
}

