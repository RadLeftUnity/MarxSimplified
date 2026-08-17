import React, { useState, useEffect, useMemo } from 'react';
import { Search as SearchIcon, X, Filter, BookOpen, Sparkles, FileText, ArrowRight, Loader2, Tag, ArrowLeft } from 'lucide-react';
import type { Book } from '../components/BookCard';
import { fetchSearchIndex, type SearchIndexData, type IndexedChapter } from '../utils/dataCache';
import { FormattedText } from '../components/FormattedText';

export interface SearchResultItem {
  id: string;
  bookId: string;
  bookTitle: string;
  author: string;
  chapterId: string;
  chapterTitle: string;
  type: 'fulltext' | 'annotation' | 'summary';
  matchText: string;
  annotationId?: string;
  explanation?: string;
}

interface SearchProps {
  initialQuery?: string;
  books: Book[];
  onSelectMatch: (bookId: string, chapterId: string, annotationId?: string, searchText?: string) => void;
  onBack: () => void;
}

function extractMatchSnippet(text: string, query: string, maxLength: number = 240): string {
  if (!text || !query.trim()) {
    return text.length > maxLength ? `${text.slice(0, maxLength)}...` : text;
  }
  const q = query.trim().toLowerCase();
  const index = text.toLowerCase().indexOf(q);
  if (index === -1) {
    return text.length > maxLength ? `${text.slice(0, maxLength)}...` : text;
  }

  let start = Math.max(0, index - 75);
  let end = Math.min(text.length, index + q.length + 125);

  if (start > 0) {
    const spaceBefore = text.indexOf(' ', start);
    if (spaceBefore !== -1 && spaceBefore < index) {
      start = spaceBefore + 1;
    }
  }

  if (end < text.length) {
    const spaceAfter = text.lastIndexOf(' ', end);
    if (spaceAfter !== -1 && spaceAfter > index + q.length) {
      end = spaceAfter;
    }
  }

  let snippet = text.slice(start, end).trim();
  if (start > 0) snippet = `... ${snippet}`;
  if (end < text.length) snippet = `${snippet} ...`;

  return snippet;
}

export const Search: React.FC<SearchProps> = ({
  initialQuery = '',
  books,
  onSelectMatch,
  onBack,
}) => {
  const [inputValue, setInputValue] = useState<string>(initialQuery);
  const [activeQuery, setActiveQuery] = useState<string>(initialQuery);
  const [searchIndex, setSearchIndex] = useState<SearchIndexData | null>(null);
  const [loadingIndex, setLoadingIndex] = useState<boolean>(true);
  const [errorIndex, setErrorIndex] = useState<string | null>(null);

  // Filters
  const [selectedBookFilter, setSelectedBookFilter] = useState<string>('all');
  const [selectedTypeFilter, setSelectedTypeFilter] = useState<'all' | 'fulltext' | 'annotation' | 'summary'>('all');

  // Trigger search execution
  const handleTriggerSearch = () => {
    setActiveQuery(inputValue.trim());
  };

  const handleClear = () => {
    setInputValue('');
    setActiveQuery('');
  };

  // Load search index on mount
  useEffect(() => {
    const loadIndex = async () => {
      setLoadingIndex(true);
      setErrorIndex(null);
      try {
        const data = await fetchSearchIndex();
        setSearchIndex(data);
      } catch (err: any) {
        console.error('Failed to load search index:', err);
        setErrorIndex('Could not load site-wide search index.');
      } finally {
        setLoadingIndex(false);
      }
    };
    loadIndex();
  }, []);

  // Compute search results based on activeQuery
  const results = useMemo(() => {
    if (!searchIndex || !activeQuery.trim() || activeQuery.trim().length < 2) {
      return [];
    }

    const q = activeQuery.trim().toLowerCase();
    const rawResults: SearchResultItem[] = [];

    searchIndex.chapters.forEach((ch: IndexedChapter) => {
      // Apply book filter
      if (selectedBookFilter !== 'all' && ch.bookId !== selectedBookFilter) {
        return;
      }

      // 1. Search Line Annotations
      if (selectedTypeFilter === 'all' || selectedTypeFilter === 'annotation') {
        ch.annotations.forEach((ann, idx) => {
          const targetStr = ann.targetText || '';
          const explStr = ann.explanation || ann.summary || '';
          if (targetStr.toLowerCase().includes(q) || explStr.toLowerCase().includes(q)) {
            rawResults.push({
              id: `${ch.bookId}-${ch.chapterId}-ann-${idx}`,
              bookId: ch.bookId,
              bookTitle: ch.bookTitle,
              author: ch.author,
              chapterId: ch.chapterId,
              chapterTitle: ch.chapterTitle,
              type: 'annotation',
              matchText: targetStr,
              annotationId: ann.id,
              explanation: explStr,
            });
          }
        });
      }

      // 2. Search Chapter Overview Summaries
      if (selectedTypeFilter === 'all' || selectedTypeFilter === 'summary') {
        if (ch.summaryText && ch.summaryText.toLowerCase().includes(q)) {
          rawResults.push({
            id: `${ch.bookId}-${ch.chapterId}-summary`,
            bookId: ch.bookId,
            bookTitle: ch.bookTitle,
            author: ch.author,
            chapterId: ch.chapterId,
            chapterTitle: ch.chapterTitle,
            type: 'summary',
            matchText: ch.summaryText,
          });
        }
      }

      // 3. Search Full Text Paragraphs
      if (selectedTypeFilter === 'all' || selectedTypeFilter === 'fulltext') {
        ch.paragraphs.forEach((p, pIdx) => {
          if (p.toLowerCase().includes(q)) {
            rawResults.push({
              id: `${ch.bookId}-${ch.chapterId}-p-${pIdx}`,
              bookId: ch.bookId,
              bookTitle: ch.bookTitle,
              author: ch.author,
              chapterId: ch.chapterId,
              chapterTitle: ch.chapterTitle,
              type: 'fulltext',
              matchText: p,
            });
          }
        });
      }
    });

    return rawResults;
  }, [searchIndex, activeQuery, selectedBookFilter, selectedTypeFilter]);

  // Helper to render text snippet with highlighted search terms
  const renderHighlightedSnippet = (text: string, searchTerm: string) => {
    if (!searchTerm.trim()) return text;
    const parts = text.split(new RegExp(`(${searchTerm.replace(/[-[\]{}()*+?.,\\^$|#\s]/g, '\\$&')})`, 'gi'));
    return (
      <span>
        {parts.map((part, i) =>
          part.toLowerCase() === searchTerm.toLowerCase() ? (
            <mark key={i} className="search-highlight">
              {part}
            </mark>
          ) : (
            part
          )
        )}
      </span>
    );
  };

  return (
    <div className="page-container search-page">
      {/* Top Back Navigation Bar */}
      <div className="glossary-back-nav" style={{ marginBottom: '16px' }}>
        <button className="glossary-back-btn glass-panel" onClick={onBack} id="search-back-btn">
          <ArrowLeft className="btn-small-icon" />
          <span>Back to Library</span>
        </button>
      </div>

      {/* Main Search Bar Header */}
      <section className="search-hero-box glass-panel">
        <div className="search-hero-header">
          <span className="hero-badge">
            <SearchIcon className="hero-badge-icon" /> Site-Wide Library Search
          </span>
          <h2 className="hero-title">Universal Text & Annotation Search</h2>
          <p className="hero-subtitle">
            Type your query and click out of the search box (or press Enter) to search across all 12 works in the archive.
          </p>
        </div>

        <div className="search-input-wrapper">
          <SearchIcon className="search-input-icon" />
          <input
            type="text"
            className="universal-search-input"
            placeholder="Search full texts, concepts, or terms (press Enter or click out to update)..."
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
            onBlur={handleTriggerSearch}
            onKeyDown={(e) => {
              if (e.key === 'Enter') {
                handleTriggerSearch();
              }
            }}
            autoFocus
            id="universal-search-input"
          />
          {inputValue && (
            <button className="search-clear-btn" onClick={handleClear} title="Clear search query">
              <X className="btn-small-icon" />
            </button>
          )}
          <button
            className="search-submit-btn glass-panel"
            onClick={handleTriggerSearch}
            id="search-submit-btn"
          >
            <span>Search</span>
          </button>
        </div>

        {/* Filter Toolbar */}
        <div className="search-filters-row">
          <div className="filter-group">
            <Filter className="filter-icon" />
            <span className="filter-label">Book Filter:</span>
            <select
              className="search-filter-select glass-panel"
              value={selectedBookFilter}
              onChange={(e) => setSelectedBookFilter(e.target.value)}
              id="search-book-filter"
            >
              <option value="all">All Catalog Books ({books.length})</option>
              {books.map((b) => (
                <option key={b.id} value={b.id}>
                  {b.title}
                </option>
              ))}
            </select>
          </div>

          <div className="filter-group">
            <Tag className="filter-icon" />
            <span className="filter-label">Match Type:</span>
            <select
              className="search-filter-select glass-panel"
              value={selectedTypeFilter}
              onChange={(e) => setSelectedTypeFilter(e.target.value as any)}
              id="search-type-filter"
            >
              <option value="all">All Content Types</option>
              <option value="fulltext">Full Text Passages</option>
              <option value="annotation">Annotations & Concepts</option>
              <option value="summary">Chapter Overviews</option>
            </select>
          </div>
        </div>
      </section>

      {/* Results Header / Stats */}
      {loadingIndex ? (
        <div className="search-state-viewport glass-panel">
          <Loader2 className="spinner-icon" />
          <p>Indexing archive texts and annotations...</p>
        </div>
      ) : errorIndex ? (
        <div className="search-state-viewport glass-panel">
          <p className="text-crimson">{errorIndex}</p>
        </div>
      ) : (
        <main className="search-results-container">
          {activeQuery.trim().length > 0 && activeQuery.trim().length < 2 && (
            <div className="search-hint-box glass-panel">
              <p>Type at least 2 characters to search across the library...</p>
            </div>
          )}

          {activeQuery.trim().length >= 2 && (
            <div className="search-stats-bar">
              <span>
                Found <strong>{results.length}</strong> matching passage(s) for "{activeQuery}"
              </span>
            </div>
          )}

          {activeQuery.trim().length >= 2 && results.length === 0 && (
            <div className="search-empty-state glass-panel">
              <h3>No matching passages found</h3>
              <p>No book passages or annotations matched "{activeQuery}" with the current filters.</p>
              <button
                className="nav-footer-btn"
                onClick={() => {
                  setSelectedBookFilter('all');
                  setSelectedTypeFilter('all');
                }}
              >
                Reset Filters
              </button>
            </div>
          )}

          {/* Results Feed */}
          <div className="search-results-feed">
            {results.map((item) => (
              <div
                key={item.id}
                className="search-result-card glass-panel card-hover-effect"
                onClick={() => onSelectMatch(item.bookId, item.chapterId, item.annotationId, item.matchText)}
              >
                <div className="result-card-header">
                  <div className="result-book-meta">
                    <span className="result-type-badge">
                      {item.type === 'annotation' && <Sparkles className="badge-icon text-gold" />}
                      {item.type === 'fulltext' && <BookOpen className="badge-icon" />}
                      {item.type === 'summary' && <FileText className="badge-icon text-amber" />}
                      {item.type === 'annotation' ? 'Simplified Concept' : item.type === 'summary' ? 'Chapter Overview' : 'Book Passage'}
                    </span>
                    <span className="result-book-title">{item.bookTitle}</span>
                    <span className="result-chapter-title">Ch: {item.chapterTitle}</span>
                  </div>

                  <button className="result-jump-btn">
                    <span>Read Passage</span>
                    <ArrowRight className="btn-small-icon" />
                  </button>
                </div>

                <div className="result-snippet-body">
                  <p className="snippet-text">
                    {renderHighlightedSnippet(
                      extractMatchSnippet(item.matchText, activeQuery),
                      activeQuery
                    )}
                  </p>
                  {item.explanation && (
                    <div className="result-annotation-explanation glass-panel">
                      <span className="explanation-label">Simplified Explanation:</span>
                      <FormattedText text={item.explanation} paragraphClassName="explanation-text" />
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
        </main>
      )}
    </div>
  );
};
