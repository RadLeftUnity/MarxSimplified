import React from 'react';
import { Moon, Sun, Sliders, Search, User, Landmark, BookOpen, Tag, BookMarked } from 'lucide-react';

export type Theme = 'dark' | 'sepia' | 'high-contrast' | 'gray' | 'light';

interface NavbarProps {
  onGoHome: () => void;
  currentPage: string;
  onGoToGlossary: () => void;
  onGoToTopics?: () => void;
  onGoToHistory?: () => void;
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
  onGoToHistory,
  onGoToSearch,
  onGoToAuthors,
  theme,
  onThemeChange,
  onOpenA11y,
}) => {
  return (
    <header className="navbar glass-header">
      <div className="navbar-logo-container" onClick={onGoHome}>
        <img
          src="/images/logo/logo.png"
          alt="Marx Simplified"
          className="navbar-logo-img"
        />
      </div>

      <nav className="navbar-nav" style={{ gap: '12px', display: 'flex', alignItems: 'center' }}>
        <button
          onClick={onGoHome}
          className={`nav-btn ${currentPage === 'library' ? 'nav-btn-active' : ''}`}
          id="nav-btn-library"
        >
          <BookOpen className="btn-small-icon text-gold" style={{ marginRight: '4px' }} />
          <span>Library</span>
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
          <Tag className="btn-small-icon text-gold" style={{ marginRight: '4px' }} />
          <span>Topics</span>
        </button>
        <button
          onClick={onGoToGlossary}
          className={`nav-btn ${currentPage === 'glossary' ? 'nav-btn-active' : ''}`}
          id="nav-btn-glossary"
        >
          <BookMarked className="btn-small-icon text-gold" style={{ marginRight: '4px' }} />
          <span>Glossary</span>
        </button>
        <button
          onClick={onGoToHistory}
          className={`nav-btn ${currentPage === 'history' ? 'nav-btn-active' : ''}`}
          id="nav-btn-history"
          title="Explore Actually Existing Socialist & Anti-Imperialist State Histories"
        >
          <Landmark className="btn-small-icon text-gold" style={{ marginRight: '4px' }} />
          <span>History</span>
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
