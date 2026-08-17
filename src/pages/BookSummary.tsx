import React from 'react';
import { ArrowLeft, BookOpen, Key, History, ChevronRight, ExternalLink, Sparkles } from 'lucide-react';
import { FormattedText } from '../components/FormattedText';
import { getAuthorImageUrl } from '../utils/authorImage';

export interface Chapter {
  id: string;
  title: string;
  textFile: string;
  annotationFile: string;
  summaryFile?: string;
}

export interface BookDetail {
  id: string;
  title: string;
  author: string;
  year: string;
  difficulty: string;
  readingTime: string;
  coverGradient: string;
  context: string;
  keyTakeaways: string[];
  chapters: Chapter[];
  relatesToToday?: string;
  marxistsOrgUrl?: string;
}

interface BookSummaryProps {
  book: BookDetail;
  onBack: () => void;
  onStartReading: (chapterId: string) => void;
  onStartSimplifiedReading?: (chapterId?: string) => void;
}

export const BookSummary: React.FC<BookSummaryProps> = ({
  book,
  onBack,
  onStartReading,
  onStartSimplifiedReading,
}) => {
  const authorImageUrl = getAuthorImageUrl(book.author);

  return (
    <div className="page-container summary-page">
      <button className="back-link-btn" onClick={onBack}>
        <ArrowLeft className="back-icon" /> Back to Library
      </button>

      <section className="summary-hero-row">
        <div className="summary-hero-cover">
          <div className="book-cover" style={{ background: book.coverGradient }}>
            {authorImageUrl && (
              <img
                src={authorImageUrl}
                alt={book.author}
                className="book-cover-author-overlay"
              />
            )}
            <span className="book-cover-star">★</span>
            <div className="book-cover-title">{book.title}</div>
            <div className="book-cover-author">{book.author}</div>
          </div>
        </div>

        <div className="summary-hero-info">
          <div className="info-meta-row">
            <span className="difficulty-badge">{book.difficulty}</span>
            <span className="reading-time-meta">{book.readingTime}</span>
            <span className="year-meta">Published {book.year}</span>
          </div>
          <h2 className="summary-book-title">{book.title}</h2>
          <p className="summary-book-author">By {book.author}</p>

          <div className="summary-action-btns-row">
            <button
              className="summary-primary-btn full-text-mode-btn"
              onClick={() => onStartReading(book.chapters[0]?.id || '')}
              id="hero-start-reading-btn"
            >
              <BookOpen className="btn-small-icon" /> Read Full Text
            </button>
            {onStartSimplifiedReading && (
              <button
                className="summary-secondary-btn simplified-mode-btn"
                onClick={() => onStartSimplifiedReading()}
                id="hero-start-simplified-btn"
              >
                <Sparkles className="btn-small-icon text-gold" /> Simplified Version
              </button>
            )}
          </div>

          {book.marxistsOrgUrl && (
            <a 
              href={book.marxistsOrgUrl} 
              target="_blank" 
              rel="noopener noreferrer" 
              className="marxists-org-link-btn"
            >
              <ExternalLink className="btn-small-icon" /> Read Original on Marxists.org
            </a>
          )}
        </div>
      </section>

      <main className="summary-content-grid">
        <div className="summary-main-column">
          <section className="summary-card glass-panel">
            <h3 className="card-section-title">
              <History className="card-section-icon text-crimson" /> Historical Context
            </h3>
            <FormattedText text={book.context} paragraphClassName="context-text-paragraph" />
          </section>

          <section className="summary-card glass-panel">
            <h3 className="card-section-title">
              <Key className="card-section-icon text-gold" /> Key Takeaways
            </h3>
            <ul className="takeaways-list">
              {book.keyTakeaways.map((takeaway, idx) => (
                <li key={idx} className="takeaway-item">
                  <span className="takeaway-bullet">✦</span>
                  <div className="takeaway-text">
                    <FormattedText text={takeaway} />
                  </div>
                </li>
              ))}
            </ul>
          </section>

          {book.relatesToToday && (
            <section className="summary-card glass-panel">
              <h3 className="card-section-title">
                <BookOpen className="card-section-icon" style={{ color: 'var(--accent)' }} /> How This Relates to Today
              </h3>
              <FormattedText text={book.relatesToToday} paragraphClassName="context-text-paragraph" />
            </section>
          )}
        </div>

        <div className="summary-sidebar-column">
          <section className="chapters-card glass-panel">
            <h3 className="card-section-title">
              <BookOpen className="card-section-icon" /> Chapters
            </h3>
            <div className="chapters-list">
              {book.chapters.map((chapter) => (
                <div key={chapter.id} className="chapter-row-container">
                  <button 
                    className="chapter-list-item glass-panel card-hover-effect"
                    onClick={() => onStartReading(chapter.id)}
                    id={`chapter-full-btn-${chapter.id}`}
                  >
                    <span className="chapter-item-title">{chapter.title}</span>
                    <ChevronRight className="chapter-item-arrow" />
                  </button>

                  {onStartSimplifiedReading && (
                    <button
                      className="chapter-simplified-side-btn glass-panel card-hover-effect"
                      onClick={() => onStartSimplifiedReading(chapter.id)}
                      title="Read chapter simplified version"
                      id={`chapter-simplified-btn-${chapter.id}`}
                    >
                      <Sparkles className="btn-mini-icon text-gold" />
                      <span>Simplified</span>
                    </button>
                  )}
                </div>
              ))}
            </div>
          </section>
        </div>
      </main>
    </div>
  );
};

