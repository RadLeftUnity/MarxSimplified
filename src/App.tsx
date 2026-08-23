import { useState, useEffect, useRef } from 'react';
import { useNavigate, useLocation, Routes, Route, Navigate } from 'react-router-dom';
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
import { History } from './pages/History';
import { AccessibilityPanel, DEFAULT_A11Y_SETTINGS } from './components/AccessibilityPanel';
import type { AccessibilitySettings, ReaderFontSize, Theme } from './components/AccessibilityPanel';
import { Loader2, AlertTriangle } from 'lucide-react';
import { fetchCachedJSON, prefetchBookSummaries, fetchCachedTopicIndex, fetchSearchIndex } from './utils/dataCache';

export default function App() {
  const navigate = useNavigate();
  const location = useLocation();

  const [books, setBooks] = useState<Book[]>([]);
  const [selectedBookId, setSelectedBookId] = useState<string | null>(null);
  const [selectedBookDetail, setSelectedBookDetail] = useState<BookDetail | null>(null);
  const [selectedChapterId, setSelectedChapterId] = useState<string | null>(null);
  const [selectedTopic, setSelectedTopic] = useState<string | null>(null);
  const [searchQuery, setSearchQuery] = useState<string>('');

  // Sub-view on root route ('library' | 'summary' | 'reading' | 'simplified')
  const [rootSubView, setRootSubView] = useState<'library' | 'summary' | 'reading' | 'simplified'>('library');

  const [previousView, setPreviousView] = useState<{
    path: string;
    bookId?: string | null;
    bookTitle?: string;
    chapterId?: string | null;
    subView?: 'library' | 'summary' | 'reading' | 'simplified';
  } | null>(null);

  const currentViewRef = useRef<{
    path: string;
    bookId: string | null;
    bookTitle?: string;
    chapterId: string | null;
    subView: 'library' | 'summary' | 'reading' | 'simplified';
  }>({
    path: '/',
    bookId: null,
    chapterId: null,
    subView: 'library',
  });

  useEffect(() => {
    if (location.pathname !== '/glossary') {
      currentViewRef.current = {
        path: location.pathname,
        bookId: selectedBookId,
        bookTitle: selectedBookDetail?.title,
        chapterId: selectedChapterId,
        subView: rootSubView,
      };
    }
  }, [location.pathname, selectedBookId, selectedBookDetail, selectedChapterId, rootSubView]);

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

        // Handle legacy URL query params or legacy hash links
        const params = new URLSearchParams(window.location.search);
        const urlPage = params.get('page');
        const urlTopic = params.get('topic');

        if (urlPage === 'topics' || urlTopic) {
          if (urlTopic) setSelectedTopic(urlTopic);
          navigate('/topics', { replace: true });
        } else if (urlPage === 'authors') {
          navigate('/authors', { replace: true });
        } else if (urlPage === 'history' || params.get('country')) {
          const countryParam = params.get('country');
          navigate(countryParam ? `/history?country=${countryParam}` : '/history', { replace: true });
        } else if (urlPage === 'glossary' || window.location.hash.startsWith('#term-') || window.location.hash.startsWith('#glossary')) {
          const hash = window.location.hash;
          navigate(`/glossary${hash}`, { replace: true });
        } else if (urlPage === 'search') {
          navigate('/search', { replace: true });
        } else {
          const urlBook = params.get('book');
          const urlChapter = params.get('chapter');
          const urlView = params.get('view');

          if (urlBook && data.books.some((b: Book) => b.id === urlBook)) {
            setSelectedBookId(urlBook);
            try {
              const summaryData = await fetchCachedJSON<BookDetail>(`/data/books/${urlBook}/summary.json`);
              setSelectedBookDetail(summaryData);

              if (urlView === 'simplified') {
                if (urlChapter && summaryData.chapters.some((c: any) => c.id === urlChapter)) {
                  setSelectedChapterId(urlChapter);
                }
                setRootSubView('simplified');
              } else if (urlChapter && summaryData.chapters.some((c: any) => c.id === urlChapter)) {
                setSelectedChapterId(urlChapter);
                setRootSubView('reading');
              } else {
                setRootSubView('summary');
              }
            } catch {
              setRootSubView('summary');
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
        navigate(`/glossary${hash}`);
        setSelectedBookId(null);
        setSelectedChapterId(null);
      }
    };

    const handleNavToGlossary = (e: Event) => {
      const customEvent = e as CustomEvent;
      const current = currentViewRef.current;
      setPreviousView({
        path: current.path,
        bookId: current.bookId,
        bookTitle: current.bookTitle,
        chapterId: current.chapterId,
        subView: current.subView,
      });
      const hashStr = customEvent.detail?.slug ? `#term-${customEvent.detail.slug}` : '';
      navigate(`/glossary${hashStr}`);
    };

    window.addEventListener('hashchange', handleHashChange);
    window.addEventListener('navigate-to-glossary', handleNavToGlossary);

    return () => {
      window.removeEventListener('hashchange', handleHashChange);
      window.removeEventListener('navigate-to-glossary', handleNavToGlossary);
    };
  }, []);

  // Update URL query parameters when on root route ('/')
  useEffect(() => {
    if (loading) return;
    if (location.pathname === '/') {
      const params = new URLSearchParams(location.search);
      params.delete('page');
      params.delete('topic');

      if (selectedBookId && rootSubView !== 'library') {
        params.set('book', selectedBookId);
      } else {
        params.delete('book');
      }

      if (rootSubView === 'simplified') {
        params.set('view', 'simplified');
        if (selectedChapterId) {
          params.set('chapter', selectedChapterId);
        } else {
          params.delete('chapter');
        }
      } else {
        params.delete('view');
        if (selectedChapterId && rootSubView === 'reading') {
          params.set('chapter', selectedChapterId);
        } else {
          params.delete('chapter');
        }
      }

      if (rootSubView !== 'reading') {
        params.delete('ann');
      }

      const searchStr = params.toString();
      const hashStr = window.location.hash;
      const newUrl = (searchStr ? `/?${searchStr}` : '/') + hashStr;
      window.history.replaceState(null, '', newUrl);
    }
  }, [location.pathname, rootSubView, selectedBookId, selectedChapterId, loading]);

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
    setRootSubView('summary');
    navigate('/');
  };

  const handleStartReading = (chapterId: string) => {
    setSelectedChapterId(chapterId);
    setRootSubView('reading');
    navigate('/');

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
    setRootSubView('simplified');
    navigate('/');
  };

  const handleSelectAnnotationInText = (chapterId: string, annotationId: string) => {
    setSelectedChapterId(chapterId);
    setRootSubView('reading');

    const params = new URLSearchParams();
    params.set('book', selectedBookId || '');
    params.set('chapter', chapterId);
    params.set('ann', annotationId);
    navigate(`/?${params.toString()}`);

    if (selectedBookId && progressMap[selectedBookId] !== 'completed') {
      const updated: Record<string, 'not-started' | 'reading' | 'completed'> = { ...progressMap, [selectedBookId]: 'reading' };
      saveProgress(updated);
    }
  };

  const handleSwitchToFullText = (chapterId?: string) => {
    if (chapterId) {
      setSelectedChapterId(chapterId);
    }
    setRootSubView('reading');
    navigate('/');
  };

  const handleMarkCompleted = () => {
    if (!selectedBookId) return;
    const isCurrentlyCompleted = progressMap[selectedBookId] === 'completed';
    const nextStatus: 'reading' | 'completed' = isCurrentlyCompleted ? 'reading' : 'completed';
    const updated: Record<string, 'not-started' | 'reading' | 'completed'> = { ...progressMap, [selectedBookId]: nextStatus };
    saveProgress(updated);
  };

  const handleGoHome = () => {
    setRootSubView('library');
    setSelectedBookId(null);
    setSelectedChapterId(null);
    navigate('/');
  };

  const handleGoToGlossary = () => {
    const current = currentViewRef.current;
    setPreviousView({
      path: current.path,
      bookId: current.bookId,
      bookTitle: current.bookTitle,
      chapterId: current.chapterId,
      subView: current.subView,
    });
    navigate('/glossary');
  };

  const handleReturnFromGlossary = () => {
    if (!previousView) {
      handleGoHome();
      return;
    }
    if (previousView.bookId) {
      setSelectedBookId(previousView.bookId);
    }
    if (previousView.chapterId) {
      setSelectedChapterId(previousView.chapterId);
    }
    if (previousView.subView) {
      setRootSubView(previousView.subView);
    }
    navigate(previousView.path || '/');
    setPreviousView(null);
  };

  const handleGoToTopics = (topic?: string) => {
    if (topic) {
      setSelectedTopic(topic);
    }
    navigate('/topics');
  };

  const handleGoToHistory = () => {
    navigate('/history');
  };

  const handleSelectAnnotationFromTopics = (bookId: string, chapterId: string, annotationId: string) => {
    setSelectedBookId(bookId);
    setSelectedChapterId(chapterId);
    setRootSubView('reading');

    const params = new URLSearchParams();
    params.set('book', bookId);
    params.set('chapter', chapterId);
    params.set('ann', annotationId);
    navigate(`/?${params.toString()}`);

    if (progressMap[bookId] !== 'completed') {
      const updated: Record<string, 'not-started' | 'reading' | 'completed'> = { ...progressMap, [bookId]: 'reading' };
      saveProgress(updated);
    }
  };

  const handleGoToSearch = () => {
    navigate('/search');
  };

  const handleSearchTerm = (pattern: string) => {
    setSearchQuery(pattern);
    navigate('/search');
  };

  const handleGoToAuthors = () => {
    navigate('/authors');
  };

  const handleSelectMatchFromSearch = (
    bookId: string,
    chapterId: string,
    annotationId?: string,
    searchText?: string
  ) => {
    setSelectedBookId(bookId);
    setSelectedChapterId(chapterId);
    setRootSubView('reading');

    const params = new URLSearchParams();
    params.set('book', bookId);
    params.set('chapter', chapterId);
    if (annotationId) {
      params.set('ann', annotationId);
    }
    if (searchText) {
      params.set('q', searchText);
    }
    navigate(`/?${params.toString()}`);

    if (progressMap[bookId] !== 'completed') {
      const updated: Record<string, 'not-started' | 'reading' | 'completed'> = { ...progressMap, [bookId]: 'reading' };
      saveProgress(updated);
    }
  };

  const updateA11ySettings = (newPartial: Partial<AccessibilitySettings>) => {
    setA11ySettings((prev) => ({ ...prev, ...newPartial }));
  };

  // Determine active page name for Navbar highlight
  const currentPageName =
    location.pathname === '/authors'
      ? 'authors'
      : location.pathname === '/topics'
      ? 'topics'
      : location.pathname === '/history'
      ? 'history'
      : location.pathname === '/glossary'
      ? 'glossary'
      : location.pathname === '/search'
      ? 'search'
      : rootSubView === 'simplified' || rootSubView === 'summary'
      ? 'summary'
      : 'library';

  return (
    <div className="app-layout">
      <Navbar
        onGoHome={handleGoHome}
        currentPage={currentPageName}
        onGoToGlossary={handleGoToGlossary}
        onGoToTopics={() => handleGoToTopics()}
        onGoToHistory={handleGoToHistory}
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
          <Routes>
            <Route
              path="/"
              element={
                rootSubView === 'library' ? (
                  <Library books={books} onSelectBook={handleSelectBook} progressMap={progressMap} />
                ) : rootSubView === 'summary' && selectedBookDetail ? (
                  <BookSummary
                    book={selectedBookDetail}
                    onBack={handleGoHome}
                    onStartReading={handleStartReading}
                    onStartSimplifiedReading={handleStartSimplifiedReading}
                  />
                ) : rootSubView === 'reading' && selectedBookDetail && selectedChapterId ? (
                  <Reader
                    book={selectedBookDetail}
                    chapterId={selectedChapterId}
                    onBackToSummary={() => setRootSubView('summary')}
                    onChapterChange={setSelectedChapterId}
                    onMarkCompleted={handleMarkCompleted}
                    isCompleted={progressMap[selectedBookId || ''] === 'completed'}
                    onOpenA11y={() => setA11yOpen(true)}
                    onSwitchToSimplified={() => setRootSubView('simplified')}
                    onSelectTopicTag={handleGoToTopics}
                  />
                ) : rootSubView === 'simplified' && selectedBookDetail ? (
                  <SimplifiedVersion
                    book={selectedBookDetail}
                    initialChapterId={selectedChapterId}
                    onBackToSummary={() => setRootSubView('summary')}
                    onSelectAnnotationInText={handleSelectAnnotationInText}
                    onSwitchToFullText={handleSwitchToFullText}
                    onOpenA11y={() => setA11yOpen(true)}
                  />
                ) : (
                  <Library books={books} onSelectBook={handleSelectBook} progressMap={progressMap} />
                )
              }
            />

            <Route
              path="/authors"
              element={
                <Authors
                  books={books}
                  onSelectBook={handleSelectBook}
                  onStartReading={handleStartReading}
                  onBack={handleGoHome}
                  progressMap={progressMap}
                />
              }
            />

            <Route
              path="/topics"
              element={
                <Topics
                  initialTopic={selectedTopic}
                  onSelectAnnotationInReader={handleSelectAnnotationFromTopics}
                />
              }
            />

            <Route
              path="/history"
              element={<History onBackToLibrary={handleGoHome} />}
            />

            <Route
              path="/glossary"
              element={
                <Glossary
                  onBack={previousView ? handleReturnFromGlossary : undefined}
                  previousViewLabel={
                    previousView ? (
                      previousView.subView === 'reading' || previousView.subView === 'simplified' ? (
                        `Back to Reading${previousView.bookTitle ? `: ${previousView.bookTitle}` : ''}`
                      ) : previousView.subView === 'summary' ? (
                        `Back to Summary${previousView.bookTitle ? `: ${previousView.bookTitle}` : ''}`
                      ) : (
                        `Back to Library`
                      )
                    ) : undefined
                  }
                  onSearchTerm={handleSearchTerm}
                />
              }
            />

            <Route
              path="/search"
              element={
                <Search
                  books={books}
                  initialQuery={searchQuery}
                  onSelectMatch={handleSelectMatchFromSearch}
                  onBack={handleGoHome}
                />
              }
            />

            <Route path="*" element={<Navigate to="/" replace />} />
          </Routes>

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

