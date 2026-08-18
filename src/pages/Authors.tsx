import React, { useState, useMemo } from 'react';
import { User, BookOpen, ChevronLeft, ChevronRight, Tag, ArrowLeft } from 'lucide-react';
import type { Book } from '../components/BookCard';
import { authorsData } from '../data/authorsData';
import { FormattedText } from '../components/FormattedText';
import { getAuthorImageUrl } from '../utils/authorImage';

interface AuthorsProps {
  books: Book[];
  onSelectBook: (bookId: string) => void;
  onStartReading: (bookId: string, chapterId: string) => void;
  onBack: () => void;
  progressMap?: Record<string, 'not-started' | 'reading' | 'completed'>;
}

const AUTHORS_PER_PAGE = 6;
const BOOKS_PER_PAGE = 4;

export const Authors: React.FC<AuthorsProps> = ({
  books,
  onSelectBook,
  onStartReading: _onStartReading,
  onBack,
  progressMap: _progressMap = {},
}) => {
  const [selectedAuthorId, setSelectedAuthorId] = useState<string>(authorsData[0].id);
  const [authorsPage, setAuthorsPage] = useState<number>(1);
  const [booksPage, setBooksPage] = useState<number>(1);

  // Active selected author profile
  const selectedAuthor = useMemo(() => {
    return authorsData.find((a) => a.id === selectedAuthorId) || authorsData[0];
  }, [selectedAuthorId]);

  // Paginated authors list for left pane
  const totalAuthorPages = Math.max(1, Math.ceil(authorsData.length / AUTHORS_PER_PAGE));
  const paginatedAuthors = useMemo(() => {
    const start = (authorsPage - 1) * AUTHORS_PER_PAGE;
    return authorsData.slice(start, start + AUTHORS_PER_PAGE);
  }, [authorsPage]);

  // Associated books for selected author
  const associatedBooks = useMemo(() => {
    if (!selectedAuthor) return [];
    return books.filter((b) => {
      const bAuthor = b.author.toLowerCase();
      const aName = selectedAuthor.name.toLowerCase();
      // Match partial names (e.g. Marx in Karl Marx & Friedrich Engels)
      if (aName === 'karl marx') return bAuthor.includes('marx');
      if (aName === 'friedrich engels') return bAuthor.includes('engels');
      if (aName === 'v.i. lenin') return bAuthor.includes('lenin');
      if (aName === 'mao zedong') return bAuthor.includes('mao');
      if (aName === 'alexandra kollontai') return bAuthor.includes('kollontai');
      return bAuthor.includes(aName);
    });
  }, [books, selectedAuthor]);

  // Paginated associated books for right panel
  const totalBookPages = Math.max(1, Math.ceil(associatedBooks.length / BOOKS_PER_PAGE));
  const paginatedBooks = useMemo(() => {
    const start = (booksPage - 1) * BOOKS_PER_PAGE;
    return associatedBooks.slice(start, start + BOOKS_PER_PAGE);
  }, [associatedBooks, booksPage]);

  const handleSelectAuthor = (authorId: string) => {
    setSelectedAuthorId(authorId);
    setBooksPage(1);
  };

  return (
    <div className="page-container authors-page">
      {/* Top Back Navigation Bar */}
      <div className="glossary-back-nav" style={{ marginBottom: '16px' }}>
        <button className="glossary-back-btn glass-panel" onClick={onBack} id="authors-back-btn">
          <ArrowLeft className="btn-small-icon" />
          <span>Back to Library</span>
        </button>
      </div>

      {/* Main Split Grid */}
      <div className="authors-workspace-grid">
        {/* Left Pane: Author Cards */}
        <aside className="authors-left-pane">
          <div className="pane-header-title">
            <User className="pane-header-icon text-gold" />
            <h3>Authors Index ({authorsData.length})</h3>
          </div>

          <div className="authors-cards-grid">
            {paginatedAuthors.map((author) => {
              const isSelected = author.id === selectedAuthorId;

              return (
                <div
                  key={author.id}
                  className={`author-square-card glass-panel ${isSelected ? 'active-author-card' : ''}`}
                  onClick={() => handleSelectAuthor(author.id)}
                  style={{ background: author.coverGradient }}
                  id={`author-card-${author.id}`}
                >
                  <img src={author.imageUrl} alt={author.name} className="author-square-img" />
                  <div className="author-card-gradient-overlay" />

                  <div className="author-square-content">
                    {/* Plain Framework Tag oriented right above banner */}
                    <div className="author-square-above-banner-tag">
                      <span className="author-framework-badge-plain">
                        <Tag className="tag-icon" /> {author.framework}
                      </span>
                    </div>

                    {/* Slim 30px Fixed-Height Full-Width Bottom Name Banner */}
                    <div className="author-square-fixed-banner">
                      <h4 className="author-square-name">{author.name}</h4>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Author Cards Pagination Controls */}
          {totalAuthorPages > 1 && (
            <div className="pagination-bar glass-panel" style={{ marginTop: '16px' }}>
              <button
                className="nav-footer-btn"
                onClick={() => setAuthorsPage((p) => Math.max(1, p - 1))}
                disabled={authorsPage === 1}
                id="authors-prev-page-btn"
              >
                <ChevronLeft className="btn-small-icon" />
                <span>Previous</span>
              </button>

              <span className="page-indicator">
                Page <strong>{authorsPage}</strong> of {totalAuthorPages}
              </span>

              <button
                className="nav-footer-btn"
                onClick={() => setAuthorsPage((p) => Math.min(totalAuthorPages, p + 1))}
                disabled={authorsPage === totalAuthorPages}
                id="authors-next-page-btn"
              >
                <span>Next</span>
                <ChevronRight className="btn-small-icon" />
              </button>
            </div>
          )}
        </aside>

        {/* Right Pane: Selected Author Detail Panel */}
        <main className="authors-right-pane">
          {selectedAuthor && (
            <div className="author-detail-panel glass-panel">
              {/* Author Header */}
              <div className="author-detail-header" style={{ background: selectedAuthor.coverGradient }}>
                <div className="author-detail-avatar-large">
                  <img src={selectedAuthor.imageUrl} alt={selectedAuthor.name} className="author-detail-img" />
                </div>
                <div className="author-detail-title-box">
                  <h2 className="author-detail-name">{selectedAuthor.name}</h2>
                  <span className="author-detail-years">{selectedAuthor.years}</span>
                  <p className="author-detail-role">{selectedAuthor.role}</p>
                </div>
              </div>

              {/* Compact Concepts Banner BELOW author header (without label header) */}
              {selectedAuthor.keyConcepts && selectedAuthor.keyConcepts.length > 0 && (
                <div className="author-concepts-top-banner">
                  <div className="concepts-inline-row">
                    {selectedAuthor.keyConcepts.map((concept, idx) => (
                      <React.Fragment key={idx}>
                        {idx > 0 && <span className="concept-separator">✦</span>}
                        <span className="concept-inline-text">{concept}</span>
                      </React.Fragment>
                    ))}
                  </div>
                </div>
              )}

              <div className="author-detail-body">
                {/* Biography Blurb */}
                <div className="detail-section bio-section">
                  <span className="detail-section-label">
                    <User className="section-icon text-gold" /> Biography & Historical Overview
                  </span>
                  <FormattedText text={selectedAuthor.blurb} paragraphClassName="author-bio-text" />
                </div>

                {/* Associated Works Section - Standalone CSS Book Covers */}
                <div className="detail-section works-section">
                  <div className="works-section-header">
                    <span className="detail-section-label">
                      <BookOpen className="section-icon text-gold" /> Published Works in Archive ({associatedBooks.length})
                    </span>
                  </div>

                  {associatedBooks.length === 0 ? (
                    <p className="no-works-text text-muted-style">No associated works currently in the catalog.</p>
                  ) : (
                    <div className="author-standalone-books-grid">
                      {paginatedBooks.map((book) => {
                        const authorImgUrl = getAuthorImageUrl(book.author);
                        return (
                          <div
                            key={book.id}
                            className="book-cover standalone-book-cover card-hover-effect"
                            style={{ background: book.coverGradient }}
                            onClick={() => onSelectBook(book.id)}
                            title={`Read ${book.title}`}
                          >
                            {authorImgUrl && (
                              <img
                                src={authorImgUrl}
                                alt={book.author}
                                className="book-cover-author-overlay"
                              />
                            )}
                            <span className="book-cover-star">★</span>
                            <div className="book-cover-title">{book.title}</div>
                            <div className="book-cover-author">{book.author}</div>
                          </div>
                        );
                      })}
                    </div>
                  )}

                  {/* Associated Books Pagination Controls */}
                  {totalBookPages > 1 && (
                    <div className="pagination-bar glass-panel" style={{ marginTop: '20px' }}>
                      <button
                        className="nav-footer-btn"
                        onClick={() => setBooksPage((p) => Math.max(1, p - 1))}
                        disabled={booksPage === 1}
                        id="books-prev-page-btn"
                      >
                        <ChevronLeft className="btn-small-icon" />
                        <span>Previous</span>
                      </button>

                      <span className="page-indicator">
                        Page <strong>{booksPage}</strong> of {totalBookPages}
                      </span>

                      <button
                        className="nav-footer-btn"
                        onClick={() => setBooksPage((p) => Math.min(totalBookPages, p + 1))}
                        disabled={booksPage === totalBookPages}
                        id="books-next-page-btn"
                      >
                        <span>Next</span>
                        <ChevronRight className="btn-small-icon" />
                      </button>
                    </div>
                  )}
                </div>
              </div>
            </div>
          )}
        </main>
      </div>
    </div>
  );
};
