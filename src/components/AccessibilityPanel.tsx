import React from 'react';
import { createPortal } from 'react-dom';
import { X, Type, Eye, Sun, Moon, Palette, Sliders, Check } from 'lucide-react';

export type ReaderFontSize = 'small' | 'normal' | 'large' | 'xlarge';
export type ReaderFontFamily = 'serif' | 'sans' | 'dyslexic';
export type ReaderLineHeight = 'normal' | 'relaxed' | 'spacious';
export type Theme = 'dark' | 'sepia' | 'high-contrast' | 'gray' | 'light';

export interface AccessibilitySettings {
  fontSize: ReaderFontSize;
  fontFamily: ReaderFontFamily;
  lineHeight: ReaderLineHeight;
  theme: Theme;
}

interface AccessibilityPanelProps {
  isOpen: boolean;
  onClose: () => void;
  settings: AccessibilitySettings;
  onUpdateSettings: (newSettings: Partial<AccessibilitySettings>) => void;
}

export const DEFAULT_A11Y_SETTINGS: AccessibilitySettings = {
  fontSize: 'normal',
  fontFamily: 'sans',
  lineHeight: 'normal',
  theme: 'dark',
};

export const AccessibilityPanel: React.FC<AccessibilityPanelProps> = ({
  isOpen,
  onClose,
  settings,
  onUpdateSettings,
}) => {
  if (!isOpen) return null;

  const handleStepFontSize = (delta: -1 | 1) => {
    const sizes: ReaderFontSize[] = ['small', 'normal', 'large', 'xlarge'];
    const currentIdx = sizes.indexOf(settings.fontSize);
    const nextIdx = Math.max(0, Math.min(sizes.length - 1, currentIdx + delta));
    onUpdateSettings({ fontSize: sizes[nextIdx] });
  };

  return createPortal(
    <div className="a11y-modal-overlay" onClick={onClose}>
      <div className="a11y-modal-content glass-panel" onClick={(e) => e.stopPropagation()}>
        <div className="a11y-modal-header">
          <div className="a11y-header-title">
            <Sliders className="a11y-header-icon" />
            <h3>Accessibility & Reading Options</h3>
          </div>
          <button className="a11y-close-btn" onClick={onClose} title="Close Panel" id="a11y-close-btn">
            <X className="btn-small-icon" />
          </button>
        </div>

        <div className="a11y-modal-body">
          {/* Reader Text Size */}
          <div className="a11y-section">
            <div className="a11y-section-title-row">
              <Type className="section-icon text-gold" />
              <span className="a11y-section-title">Text Size (Reader & Site)</span>
            </div>
            
            <div className="a11y-size-stepper">
              <button
                className="a11y-step-btn"
                onClick={() => handleStepFontSize(-1)}
                disabled={settings.fontSize === 'small'}
                title="Decrease font size"
                id="a11y-font-dec-btn"
              >
                A-
              </button>
              <span className="a11y-size-indicator">
                {settings.fontSize === 'small' && 'Small (15px)'}
                {settings.fontSize === 'normal' && 'Normal (17px)'}
                {settings.fontSize === 'large' && 'Large (20px)'}
                {settings.fontSize === 'xlarge' && 'Extra Large (23px)'}
              </span>
              <button
                className="a11y-step-btn"
                onClick={() => handleStepFontSize(1)}
                disabled={settings.fontSize === 'xlarge'}
                title="Increase font size"
                id="a11y-font-inc-btn"
              >
                A+
              </button>
            </div>

            <div className="a11y-pill-row">
              {(['small', 'normal', 'large', 'xlarge'] as ReaderFontSize[]).map((size) => (
                <button
                  key={size}
                  className={`a11y-option-btn ${settings.fontSize === size ? 'active' : ''}`}
                  onClick={() => onUpdateSettings({ fontSize: size })}
                >
                  {size === 'small' && 'Small'}
                  {size === 'normal' && 'Normal'}
                  {size === 'large' && 'Large'}
                  {size === 'xlarge' && 'X-Large'}
                </button>
              ))}
            </div>
          </div>

          {/* Reader Font Family */}
          <div className="a11y-section">
            <div className="a11y-section-title-row">
              <Type className="section-icon text-gold" />
              <span className="a11y-section-title">Reading Font Style</span>
            </div>
            <div className="a11y-pill-row">
              <button
                className={`a11y-option-btn ${settings.fontFamily === 'sans' ? 'active' : ''}`}
                onClick={() => onUpdateSettings({ fontFamily: 'sans' })}
              >
                Clean Sans
              </button>
              <button
                className={`a11y-option-btn ${settings.fontFamily === 'serif' ? 'active' : ''}`}
                onClick={() => onUpdateSettings({ fontFamily: 'serif' })}
              >
                Book Serif
              </button>
              <button
                className={`a11y-option-btn ${settings.fontFamily === 'dyslexic' ? 'active' : ''}`}
                onClick={() => onUpdateSettings({ fontFamily: 'dyslexic' })}
                title="Enhanced legibility font with increased tracking and distinct letterforms"
              >
                Dyslexia Friendly
              </button>
            </div>
          </div>

          {/* Line Height & Spacing */}
          <div className="a11y-section">
            <div className="a11y-section-title-row">
              <Eye className="section-icon text-amber" />
              <span className="a11y-section-title">Line Spacing</span>
            </div>
            <div className="a11y-pill-row">
              <button
                className={`a11y-option-btn ${settings.lineHeight === 'normal' ? 'active' : ''}`}
                onClick={() => onUpdateSettings({ lineHeight: 'normal' })}
              >
                Compact (1.65x)
              </button>
              <button
                className={`a11y-option-btn ${settings.lineHeight === 'relaxed' ? 'active' : ''}`}
                onClick={() => onUpdateSettings({ lineHeight: 'relaxed' })}
              >
                Relaxed (1.9x)
              </button>
              <button
                className={`a11y-option-btn ${settings.lineHeight === 'spacious' ? 'active' : ''}`}
                onClick={() => onUpdateSettings({ lineHeight: 'spacious' })}
              >
                Spacious (2.2x)
              </button>
            </div>
          </div>

          {/* Color & Reading Themes */}
          <div className="a11y-section">
            <div className="a11y-section-title-row">
              <Palette className="section-icon text-gold" />
              <span className="a11y-section-title">Color & Reading Theme</span>
            </div>
            <div className="a11y-theme-grid">
              <button
                className={`a11y-theme-card theme-dark ${settings.theme === 'dark' ? 'active' : ''}`}
                onClick={() => onUpdateSettings({ theme: 'dark' })}
              >
                <Moon className="theme-card-icon" />
                <span className="theme-card-label">Sleek Dark</span>
                {settings.theme === 'dark' && <Check className="theme-check-icon" />}
              </button>

              <button
                className={`a11y-theme-card theme-sepia ${settings.theme === 'sepia' ? 'active' : ''}`}
                onClick={() => onUpdateSettings({ theme: 'sepia' })}
              >
                <Sun className="theme-card-icon" />
                <span className="theme-card-label">Warm Sepia</span>
                {settings.theme === 'sepia' && <Check className="theme-check-icon" />}
              </button>

              <button
                className={`a11y-theme-card theme-contrast ${settings.theme === 'high-contrast' ? 'active' : ''}`}
                onClick={() => onUpdateSettings({ theme: 'high-contrast' })}
              >
                <Eye className="theme-card-icon" />
                <span className="theme-card-label">High Contrast</span>
                {settings.theme === 'high-contrast' && <Check className="theme-check-icon" />}
              </button>

              <button
                className={`a11y-theme-card theme-gray ${settings.theme === 'gray' ? 'active' : ''}`}
                onClick={() => onUpdateSettings({ theme: 'gray' })}
              >
                <Palette className="theme-card-icon" />
                <span className="theme-card-label">Muted Slate</span>
                {settings.theme === 'gray' && <Check className="theme-check-icon" />}
              </button>

              <button
                className={`a11y-theme-card theme-light ${settings.theme === 'light' ? 'active' : ''}`}
                onClick={() => onUpdateSettings({ theme: 'light' })}
              >
                <Sun className="theme-card-icon" />
                <span className="theme-card-label">Clean Light</span>
                {settings.theme === 'light' && <Check className="theme-check-icon" />}
              </button>
            </div>
          </div>

          <div className="a11y-footer-note">
            💡 Press <kbd>Alt</kbd> + <kbd>+</kbd> or <kbd>Alt</kbd> + <kbd>-</kbd> anywhere to quickly adjust text size while reading.
          </div>
        </div>
      </div>
    </div>,
    document.body
  );
};
