import React from 'react';
import { BookOpen, Moon, Sun, Palette } from 'lucide-react';

export type Theme = 'dark' | 'gray' | 'light';

interface NavbarProps {
  onGoHome: () => void;
  currentPage: string;
  onGoToGlossary: () => void;
  theme: Theme;
  onThemeChange: (theme: Theme) => void;
}

export const Navbar: React.FC<NavbarProps> = ({
  onGoHome,
  currentPage,
  onGoToGlossary,
  theme,
  onThemeChange,
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
          onClick={onGoToGlossary}
          className={`nav-btn ${currentPage === 'glossary' ? 'nav-btn-active' : ''}`}
          id="nav-btn-glossary"
        >
          Glossary
        </button>

        {/* Theme Picker */}
        <div className="theme-toggle-group">
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
            title="Gray Theme"
            onClick={() => onThemeChange('gray')}
            className={`theme-btn ${theme === 'gray' ? 'active' : ''}`}
            id="theme-btn-gray"
          >
            <Palette className="theme-btn-icon" />
            <span className="theme-btn-label">Gray</span>
          </button>

          <button
            title="Light Theme"
            onClick={() => onThemeChange('light')}
            className={`theme-btn ${theme === 'light' ? 'active' : ''}`}
            id="theme-btn-light"
          >
            <Sun className="theme-btn-icon" />
            <span className="theme-btn-label">Light</span>
          </button>
        </div>
      </nav>
    </header>
  );
};
