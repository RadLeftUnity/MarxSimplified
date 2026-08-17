import React from 'react';
import { BookOpen, Moon, Sun, Sliders, Search, User } from 'lucide-react';

export type Theme = 'dark' | 'sepia' | 'high-contrast' | 'gray' | 'light';

interface NavbarProps {
  onGoHome: () => void;
  currentPage: string;
  onGoToGlossary: () => void;
  onGoToTopics?: () => void;
  onGoToSearch?: () => void;
  onGoToAuthors?: () => void;
  theme: Theme;
  onThemeChange: (theme: Theme) => void;
  onOpenA11y: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({
  onGoHome,
  currentPage,
  onGoToGlossary,
  onGoToTopics,
  onGoToSearch,
  onGoToAuthors,
  theme,
  onThemeChange,
  onOpenA11y,
}) => {
  return (
    <header className="navbar glass-header">
      <div className="navbar-logo-container" onClick={onGoHome}>
        <div className="navbar-icon-wrapper">
          <BookOpen className="navbar-icon" />
          <span className="navbar-star">★</span>
        </div>
        <div className="navbar-text">
          <span className="navbar-title">
            Marx<span className="title-highlight">Simplified</span>
          </span>
          <span className="navbar-subtitle">Accessible Theory Reader</span>
        </div>
      </div>

      <nav className="navbar-nav" style={{ gap: '12px', display: 'flex', alignItems: 'center' }}>
        <button
          onClick={onGoHome}
          className={`nav-btn ${currentPage === 'library' ? 'nav-btn-active' : ''}`}
          id="nav-btn-library"
        >
          Library
        </button>
        <button
          onClick={onGoToAuthors}
          className={`nav-btn ${currentPage === 'authors' ? 'nav-btn-active' : ''}`}
          id="nav-btn-authors"
        >
          <User className="btn-small-icon text-gold" style={{ marginRight: '4px' }} />
          <span>Authors</span>
        </button>
        <button
          onClick={onGoToTopics}
          className={`nav-btn ${currentPage === 'topics' ? 'nav-btn-active' : ''}`}
          id="nav-btn-topics"
        >
          Topics
        </button>
        <button
          onClick={onGoToGlossary}
          className={`nav-btn ${currentPage === 'glossary' ? 'nav-btn-active' : ''}`}
          id="nav-btn-glossary"
        >
          Glossary
        </button>
        <button
          onClick={onGoToSearch}
          className={`nav-btn ${currentPage === 'search' ? 'nav-btn-active' : ''}`}
          id="nav-btn-search"
          title="Search full texts and annotations across all books"
        >
          <Search className="btn-small-icon text-gold" style={{ marginRight: '4px' }} />
          <span>Search</span>
        </button>

        {/* Accessibility & Reading Options Button */}
        <button
          onClick={onOpenA11y}
          className="nav-btn a11y-trigger-btn"
          id="nav-btn-a11y"
          title="Open Text Size & Accessibility Settings (Alt+A)"
        >
          <Sliders className="btn-small-icon text-gold" style={{ marginRight: '6px' }} />
          <span>Text & Display</span>
        </button>

        {/* Quick Theme Picker */}
        <div className="theme-toggle-group hide-mobile">
          <button
            title="Dark Theme"
            onClick={() => onThemeChange('dark')}
            className={`theme-btn ${theme === 'dark' ? 'active' : ''}`}
            id="theme-btn-dark"
          >
            <Moon className="theme-btn-icon" />
            <span className="theme-btn-label">Dark</span>
          </button>

          <button
            title="Warm Sepia Theme"
            onClick={() => onThemeChange('sepia')}
            className={`theme-btn ${theme === 'sepia' ? 'active' : ''}`}
            id="theme-btn-sepia"
          >
            <Sun className="theme-btn-icon" />
            <span className="theme-btn-label">Sepia</span>
          </button>

          <button
            title="High Contrast Theme"
            onClick={() => onThemeChange('high-contrast')}
            className={`theme-btn ${theme === 'high-contrast' ? 'active' : ''}`}
            id="theme-btn-high-contrast"
          >
            <Sliders className="theme-btn-icon" />
            <span className="theme-btn-label">Contrast</span>
          </button>
        </div>
      </nav>
    </header>
  );
};
