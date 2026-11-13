import React, { useEffect, useState, useMemo } from 'react';
import { glossary, getTermSlug } from '../data/glossary';
import type { GlossaryTerm, TheoryTag } from '../data/glossary';
import { Sparkles, HelpCircle, Lightbulb, Link as LinkIcon, Check, Tag, Search, X, ArrowLeft, BookOpen } from 'lucide-react';
import { FormattedText } from '../components/FormattedText';
import { CopyImageButton } from '../components/CopyImageButton';
import { generateGlossaryCardCanvas } from '../utils/shareCardCanvas';

const THEORY_OPTIONS: Array<'All' | TheoryTag> = [
  'All',
  'Classical Marxism',
  'Marxism-Leninism',
  'Trotskyism',
  'Maoism',
  'Anarcho-Communism',
  'Stalinism',
  'Dengism',
  'Xi Jinping Thought',
  'Juche',
  'Anti-Colonial Socialism',
  'Guevarism',
  'Capitalist Theory',
  'Fascism Analysis',
  'Neo-Marxism',
  'Bourgeois Philosophy',
  'Pre-Capitalist Modes',
  'Postmodernism',
  'Marxist Feminism',
];


interface GlossaryProps {
  onBack?: () => void;
  previousViewLabel?: string;
  onSearchTerm?: (pattern: string, filterType?: 'all' | 'fulltext' | 'annotation' | 'summary') => void;
}

export const Glossary: React.FC<GlossaryProps> = ({ onBack, previousViewLabel, onSearchTerm }) => {
  const [targetSlug, setTargetSlug] = useState<string | null>(null);
  const [copiedSlug, setCopiedSlug] = useState<string | null>(null);
  const [selectedTheory, setSelectedTheory] = useState<'All' | TheoryTag>('All');
  const [searchInput, setSearchInput] = useState<string>('');
  const [appliedSearchQuery, setAppliedSearchQuery] = useState<string>('');

  const handleExecuteSearch = () => {
    setAppliedSearchQuery(searchInput.trim());
  };

  const handleClearSearch = () => {
    setSearchInput('');
    setAppliedSearchQuery('');
  };

  // Cached filtering, sorting, and grouping via useMemo
  const { sortedGlossary, groupedTerms, alphabet } = useMemo(() => {
    const filtered = glossary.filter((item) => {
      if (selectedTheory !== 'All' && !item.theoryTags?.includes(selectedTheory)) {
        return false;
      }
      if (appliedSearchQuery) {
        const q = appliedSearchQuery.toLowerCase();
        const matchTerm = item.term.toLowerCase().includes(q);
        const matchDef = item.definition.toLowerCase().includes(q);
        const matchEx = item.example.toLowerCase().includes(q);
        const matchMisc = item.misconception?.toLowerCase().includes(q) ?? false;
        const matchPattern = item.pattern.toLowerCase().includes(q);
        const matchTags = item.theoryTags?.some((t) => t.toLowerCase().includes(q)) ?? false;
        return matchTerm || matchDef || matchEx || matchMisc || matchPattern || matchTags;
      }
      return true;
    });

    const sorted = [...filtered].sort((a, b) => a.term.localeCompare(b.term));

    const grouped: Record<string, GlossaryTerm[]> = {};
    sorted.forEach((item) => {
      const firstLetter = item.term.charAt(0).toUpperCase();
      if (!grouped[firstLetter]) {
        grouped[firstLetter] = [];
      }
      grouped[firstLetter].push(item);
    });

    return {
      sortedGlossary: sorted,
      groupedTerms: grouped,
      alphabet: Object.keys(grouped).sort(),
    };
  }, [selectedTheory, appliedSearchQuery]);

  const handleScrollToSection = (letter: string) => {
    const element = document.getElementById(`glossary-section-${letter}`);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  useEffect(() => {
    const scrollToTerm = () => {
      const pathname = window.location.pathname;
      let cleanSlug = '';
      if (pathname.startsWith('/glossary/') && pathname !== '/glossary') {
        cleanSlug = pathname.split('/glossary/')[1].split('/')[0];
      }
      if (!cleanSlug && window.location.hash) {
        cleanSlug = window.location.hash.replace('#term-', '').replace('#', '');
      }

      if (!cleanSlug) return;
      setTargetSlug(cleanSlug);

      // Attempt to scroll up to 5 times (100ms intervals) to handle DOM mount delay
      let attempts = 0;
      const tryScroll = () => {
        attempts++;
        const el = document.getElementById(`term-${cleanSlug}`);
        if (el) {
          el.scrollIntoView({ behavior: 'smooth', block: 'center' });
        } else if (attempts < 5) {
          setTimeout(tryScroll, 100);
        }
      };

      tryScroll();
    };

    scrollToTerm();
    window.addEventListener('hashchange', scrollToTerm);
    window.addEventListener('navigate-to-glossary', scrollToTerm);
    return () => {
      window.removeEventListener('hashchange', scrollToTerm);
      window.removeEventListener('navigate-to-glossary', scrollToTerm);
    };
  }, []);

  const handleCopyLink = (term: string) => {
    const slug = getTermSlug(term);
    const url = `${window.location.origin}/glossary/${slug}`;
    window.history.pushState(null, '', `/glossary/${slug}`);
    navigator.clipboard.writeText(url);
    setCopiedSlug(slug);
    setTargetSlug(slug);
    setTimeout(() => setCopiedSlug(null), 2500);
  };

  return (
    <div className="page-container glossary-page">
      <div className="glossary-layout-grid">
        {/* Left Sticky Sidebar */}
        <aside className="glossary-sidebar glass-panel">
          {onBack && (
            <div className="glossary-back-nav">
              <button className="glossary-back-btn glass-panel" onClick={onBack} id="glossary-back-btn">
                <ArrowLeft className="btn-small-icon" />
                <span>{previousViewLabel || 'Back to Previous Page'}</span>
              </button>
            </div>
          )}

          {/* Search Box */}
          <div className="sidebar-section">
            <div className="glossary-search-box">
              <Search className="library-search-icon" />
              <input
                type="text"
                className="library-search-input"
                placeholder="Search glossary terms..."
                value={searchInput}
                onChange={(e) => setSearchInput(e.target.value)}
                onKeyDown={(e) => {
                  if (e.key === 'Enter') handleExecuteSearch();
                }}
                id="glossary-search-input"
              />
              {searchInput && (
                <button
                  className="glossary-search-clear-btn"
                  onClick={handleClearSearch}
                  title="Clear search"
                  type="button"
                >
                  <X className="btn-small-icon" />
                </button>
              )}
              <button
                className="glossary-search-btn"
                onClick={handleExecuteSearch}
                type="button"
                id="glossary-search-btn"
              >
                Search
              </button>
            </div>
          </div>

          {/* Alphabet Jumping Menu */}
          {alphabet.length > 0 && (
            <div className="sidebar-section alphabet-section">
              <span className="alphabet-label">Jump to Letter:</span>
              <div className="alphabet-links-grid">
                {alphabet.map((letter) => (
                  <button
                    key={letter}
                    onClick={() => handleScrollToSection(letter)}
                    className="alphabet-link-btn"
                  >
                    {letter}
                  </button>
                ))}
              </div>
            </div>
          )}

          {/* Theoretical Framework Filter */}
          <div className="sidebar-section">
            <div className="filter-bar-header">
              <Tag className="filter-icon" />
              <span>Theoretical Framework:</span>
            </div>
            <div className="filter-pills-row">
              {THEORY_OPTIONS.map((theory) => (
                <button
                  key={theory}
                  className={`filter-pill-btn ${selectedTheory === theory ? 'active' : ''}`}
                  onClick={() => setSelectedTheory(theory)}
                >
                  {theory}
                </button>
              ))}
            </div>
          </div>
        </aside>

        {/* Right Main Content */}
        <main className="glossary-main-content">
          {/* Header Stats Bar */}
          <div className="glossary-header-bar glass-panel">
            <span className="glossary-count-badge">
              Showing <strong>{sortedGlossary.length}</strong> term{sortedGlossary.length !== 1 ? 's' : ''}
              {selectedTheory !== 'All' ? ` in ${selectedTheory}` : ''}
              {appliedSearchQuery ? ` matching "${appliedSearchQuery}"` : ''}
            </span>
            {(appliedSearchQuery || selectedTheory !== 'All') && (
              <button
                className="glossary-reset-filters-btn"
                onClick={() => {
                  handleClearSearch();
                  setSelectedTheory('All');
                }}
              >
                Reset Filters
              </button>
            )}
          </div>

          {/* Glossary Sections List */}
          <div className="glossary-sections-container">
            {alphabet.length === 0 ? (
              <div className="glossary-empty-state glass-panel" style={{ textAlign: 'center', padding: '40px 20px' }}>
                <h3>No matching glossary terms found</h3>
                <p style={{ margin: '8px 0 16px', color: 'var(--text-secondary)' }}>
                  No terms match your current search "{appliedSearchQuery}" or active theoretical framework filter.
                </p>
                <button
                  className="nav-footer-btn"
                  onClick={() => {
                    handleClearSearch();
                    setSelectedTheory('All');
                  }}
                  style={{ margin: '0 auto' }}
                >
                  Reset Search &amp; Filters
                </button>
              </div>
            ) : (
              alphabet.map((letter) => (
                <div key={letter} id={`glossary-section-${letter}`} className="glossary-section">
                  <h3 className="glossary-section-letter">{letter}</h3>

                  <div className="glossary-cards-grid">
                    {groupedTerms[letter].map((item) => {
                      const slug = getTermSlug(item.term);
                      const isTarget = targetSlug === slug;
                      const isCopied = copiedSlug === slug;

                      return (
                        <div
                          key={item.term}
                          id={`term-${slug}`}
                          className={`glossary-card glass-panel card-hover-effect ${isTarget ? 'target-highlight' : ''}`}
                        >
                          <div className="glossary-card-header">
                            <div>
                              <h4 className="glossary-card-term">{item.term}</h4>
                              {item.theoryTags && item.theoryTags.length > 0 && (
                                <div className="glossary-card-tags">
                                  {item.theoryTags.map((tag) => (
                                    <span key={tag} className="theory-tag-pill">
                                      <Tag className="tag-icon" /> {tag}
                                    </span>
                                  ))}
                                </div>
                              )}
                            </div>

                            <div className="glossary-card-action-btns">
                              <CopyImageButton
                                className="glossary-card-share-btn"
                                id={`copy-img-${slug}`}
                                onGenerateCanvas={() =>
                                  generateGlossaryCardCanvas({
                                    term: item.term,
                                    definition: item.definition,
                                    example: item.example,
                                    misconception: item.misconception,
                                    theoryTags: item.theoryTags,
                                  })
                                }
                              />
                              <button
                                className="glossary-card-share-btn"
                                onClick={() => handleCopyLink(item.term)}
                                title="Copy direct link to this term"
                              >
                                {isCopied ? (
                                  <>
                                    <Check className="btn-small-icon text-gold" />
                                    <span>Link Copied</span>
                                  </>
                                ) : (
                                  <>
                                    <LinkIcon className="btn-small-icon" />
                                    <span>Share Link</span>
                                  </>
                                )}
                              </button>
                            </div>
                          </div>

                          <div className="glossary-card-section definition-section">
                            <span className="section-label summary-label">
                              <Sparkles className="section-icon text-gold" /> Simplified Meaning
                            </span>
                            <FormattedText text={item.definition} paragraphClassName="glossary-card-text" />
                          </div>

                          <div className="glossary-card-section example-section glass-panel">
                            <span className="section-label example-label">
                              <Lightbulb className="section-icon text-amber" /> Example
                            </span>
                            <FormattedText text={item.example} paragraphClassName="glossary-card-text" />
                          </div>

                          <div className="glossary-card-section misconception-section glass-panel">
                            <span className="section-label context-label">
                              <HelpCircle className="section-icon text-crimson" /> Common Misconception
                            </span>
                            <FormattedText text={item.misconception} paragraphClassName="glossary-card-text text-muted-style" />
                          </div>

                          {onSearchTerm && (
                            <div className="glossary-card-footer">
                              <button
                                className="glossary-find-books-btn"
                                onClick={() => onSearchTerm(item.pattern, 'fulltext')}
                                title={`Search all books for: ${item.pattern.split('|').join(', ')}`}
                                id={`find-books-${slug}`}
                              >
                                <BookOpen className="btn-small-icon" />
                                <span>Find in Books</span>
                              </button>
                              <button
                                className="glossary-find-books-btn glossary-find-annotations-btn"
                                onClick={() => onSearchTerm(item.pattern, 'annotation')}
                                title={`Search all annotations for: ${item.pattern.split('|').join(', ')}`}
                                id={`find-annotations-${slug}`}
                              >
                                <Sparkles className="btn-small-icon" />
                                <span>Find in Annotations</span>
                              </button>
                            </div>
                          )}
                        </div>
                      );
                    })}
                  </div>
                </div>
              ))
            )}
          </div>
        </main>
      </div>
    </div>
  );

};
