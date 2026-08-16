import React, { useState, useMemo } from 'react';
import { BookCard } from '../components/BookCard';
import type { Book } from '../components/BookCard';
import { Search, BookOpen, GraduationCap, RotateCcw } from 'lucide-react';

interface LibraryProps {
  books: Book[];
  onSelectBook: (id: string) => void;
  progressMap: Record<string, 'not-started' | 'reading' | 'completed'>;
}

export const Library: React.FC<LibraryProps> = ({ books, onSelectBook, progressMap }) => {
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [filterAuthor, setFilterAuthor] = useState<string>('All');
  const [filterYear, setFilterYear] = useState<string>('All');
  const [filterTag, setFilterTag] = useState<string>('All');
  const [filterDifficulty, setFilterDifficulty] = useState<string>('All');

  // Dynamically extract unique filter options
  const authors = useMemo(() => {
    const set = new Set<string>();
    books.forEach((b) => set.add(b.author));
    return ['All', ...Array.from(set)];
  }, [books]);

  const years = useMemo(() => {
    const set = new Set<string>();
    books.forEach((b) => set.add(b.year));
    return ['All', ...Array.from(set).sort()];
  }, [books]);

  const tags = useMemo(() => {
    const set = new Set<string>();
    books.forEach((b) => {
      b.tags?.forEach((t) => set.add(t));
    });
    return ['All', ...Array.from(set).sort()];
  }, [books]);

  const difficulties = ['All', 'Easy-Medium', 'Medium', 'Hard'];

  const filteredBooks = useMemo(() => {
    return books.filter((book) => {
      // Search Query filter
      if (searchQuery.trim()) {
        const query = searchQuery.toLowerCase();
        const matchesTitle = book.title.toLowerCase().includes(query);
        const matchesAuthor = book.author.toLowerCase().includes(query);
        const matchesDesc = book.shortDescription.toLowerCase().includes(query);
        const matchesSubject = book.subject?.toLowerCase().includes(query) ?? false;
        const matchesTags = book.tags?.some((t) => t.toLowerCase().includes(query)) ?? false;
        const matchesYear = book.year.includes(query);

        if (!matchesTitle && !matchesAuthor && !matchesDesc && !matchesSubject && !matchesTags && !matchesYear) {
          return false;
        }
      }

      // Author filter
      if (filterAuthor !== 'All' && book.author !== filterAuthor) {
        return false;
      }

      // Year filter
      if (filterYear !== 'All' && book.year !== filterYear) {
        return false;
      }

      // Tag filter
      if (filterTag !== 'All' && (!book.tags || !book.tags.includes(filterTag))) {
        return false;
      }

      // Difficulty filter
      if (filterDifficulty !== 'All' && book.difficulty !== filterDifficulty) {
        return false;
      }

      return true;
    });
  }, [books, searchQuery, filterAuthor, filterYear, filterTag, filterDifficulty]);

  const hasActiveFilters =
    searchQuery.trim() !== '' ||
    filterAuthor !== 'All' ||
    filterYear !== 'All' ||
    filterTag !== 'All' ||
    filterDifficulty !== 'All';

  const resetFilters = () => {
    setSearchQuery('');
    setFilterAuthor('All');
    setFilterYear('All');
    setFilterTag('All');
    setFilterDifficulty('All');
  };

  return (
    <div className="page-container library-page">
      <section className="library-hero glass-panel">
        <div className="hero-text-content">
          <span className="hero-badge">
            <GraduationCap className="hero-badge-icon" /> Welcome to Simplified Theory
          </span>
          <h2 className="hero-title">Democratizing Classic Texts</h2>
          <p className="hero-subtitle">
            Study original publications side-by-side with paragraph-by-paragraph modern translations, historical context guides, and core takeaway summaries.
          </p>
        </div>
        <div className="hero-stats">
          <div className="stat-card glass-panel">
            <span className="stat-value">{books.length}</span>
            <span className="stat-label">Volumes</span>
          </div>
          <div className="stat-card glass-panel">
            <span className="stat-value">
              {Object.values(progressMap).filter((p) => p === 'completed').length}
            </span>
            <span className="stat-label">Completed</span>
          </div>
        </div>
      </section>

      {/* Filter and Search Container */}
      <section className="library-search-filter-wrapper glass-panel">
        {/* Search Bar */}
        <div className="library-search-box">
          <Search className="library-search-icon" />
          <input
            type="text"
            className="library-search-input"
            placeholder="Search books by title, author, year, subject, or keywords..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            id="library-search-input"
          />
        </div>

        {/* Filter Controls */}
        <div className="library-filter-groups">
          <div className="filter-group">
            <span className="filter-group-label">Author</span>
            <select
              className="filter-select"
              value={filterAuthor}
              onChange={(e) => setFilterAuthor(e.target.value)}
              id="filter-author-select"
            >
              {authors.map((a) => (
                <option key={a} value={a}>
                  {a}
                </option>
              ))}
            </select>
          </div>

          <div className="filter-group">
            <span className="filter-group-label">Year Published</span>
            <select
              className="filter-select"
              value={filterYear}
              onChange={(e) => setFilterYear(e.target.value)}
              id="filter-year-select"
            >
              {years.map((y) => (
                <option key={y} value={y}>
                  {y === 'All' ? 'All Years' : y}
                </option>
              ))}
            </select>
          </div>

          <div className="filter-group">
            <span className="filter-group-label">Subject / Tag</span>
            <select
              className="filter-select"
              value={filterTag}
              onChange={(e) => setFilterTag(e.target.value)}
              id="filter-tag-select"
            >
              {tags.map((t) => (
                <option key={t} value={t}>
                  {t === 'All' ? 'All Subjects' : t}
                </option>
              ))}
            </select>
          </div>

          <div className="filter-group">
            <span className="filter-group-label">Difficulty</span>
            <select
              className="filter-select"
              value={filterDifficulty}
              onChange={(e) => setFilterDifficulty(e.target.value)}
              id="filter-difficulty-select"
            >
              {difficulties.map((d) => (
                <option key={d} value={d}>
                  {d === 'All' ? 'All Difficulties' : d}
                </option>
              ))}
            </select>
          </div>

          {hasActiveFilters && (
            <button
              className="reset-filters-btn"
              onClick={resetFilters}
              id="reset-filters-btn"
              title="Reset search and filters"
            >
              <RotateCcw className="btn-small-icon" /> Reset
            </button>
          )}
        </div>
      </section>

      <main className="library-grid-container">
        {filteredBooks.length === 0 ? (
          <div className="library-empty glass-panel" style={{ padding: '40px 20px', textAlign: 'center' }}>
            <BookOpen className="empty-icon" style={{ width: '48px', height: '48px', margin: '0 auto 16px', opacity: 0.5 }} />
            <h3>No matching books found</h3>
            <p style={{ margin: '8px 0 20px', color: 'var(--text-secondary)' }}>
              No volumes in the archive match your current search query or active filter selections.
            </p>
            <button className="nav-footer-btn" onClick={resetFilters} style={{ margin: '0 auto' }}>
              Clear All Filters
            </button>
          </div>
        ) : (
          <div className="library-grid">
            {filteredBooks.map((book) => (
              <BookCard
                key={book.id}
                book={book}
                progress={progressMap[book.id] || 'not-started'}
                onSelect={onSelectBook}
              />
            ))}
          </div>
        )}
      </main>
    </div>
  );
};
