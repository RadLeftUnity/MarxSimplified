import React from 'react';
import { getAuthorImageUrl } from '../utils/authorImage';

export interface Book {
  id: string;
  title: string;
  author: string;
  year: string;
  difficulty: string;
  readingTime: string;
  shortDescription: string;
  coverGradient: string;
  subject?: string;
  tags?: string[];
}

interface BookCardProps {
  book: Book;
  progress?: 'not-started' | 'reading' | 'completed';
  onSelect: (id: string) => void;
}

export const BookCard: React.FC<BookCardProps> = ({ book, progress = 'not-started', onSelect }) => {
  const getProgressLabel = () => {
    switch (progress) {
      case 'completed': return 'Completed';
      case 'reading': return 'Reading';
      default: return 'Not Started';
    }
  };

  const authorImageUrl = getAuthorImageUrl(book.author);

  return (
    <div className="book-card glass-panel card-hover-effect" onClick={() => onSelect(book.id)}>
      <div className="book-card-cover-container">
        <div 
          className="book-cover" 
          style={{ background: book.coverGradient }}
        >
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
      
      <div className="book-card-details">
        <div className="book-card-meta-row">
          <span className={`progress-badge badge-${progress}`}>{getProgressLabel()}</span>
          <span className="difficulty-badge">{book.difficulty}</span>
          {book.subject && <span className="subject-badge">{book.subject}</span>}
        </div>
        
        <h3 className="book-card-title">{book.title}</h3>
        <p className="book-card-author-year">By {book.author} • {book.year}</p>
        <p className="book-card-desc">{book.shortDescription}</p>

        {book.tags && book.tags.length > 0 && (
          <div className="book-card-tags">
            {book.tags.map((tag) => (
              <span key={tag} className="book-tag-pill">{tag}</span>
            ))}
          </div>
        )}
        
        <div className="book-card-footer">
          <span className="reading-time-meta">{book.readingTime}</span>
          <button className="book-card-btn">Explore Book</button>
        </div>
      </div>
    </div>
  );
};
