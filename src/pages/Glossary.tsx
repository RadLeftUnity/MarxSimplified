import React, { useEffect, useState } from 'react';
import { glossary, getTermSlug } from '../data/glossary';
import type { GlossaryTerm, TheoryTag } from '../data/glossary';
import { Sparkles, HelpCircle, Lightbulb, BookOpen, Link as LinkIcon, Check, Tag, Search, X } from 'lucide-react';
import { FormattedText } from '../components/FormattedText';

const THEORY_OPTIONS: Array<'All' | TheoryTag> = [
  'All',
  'Classical Marxism',
  'Marxism-Leninism',
  'Trotskyism',
  'Maoism',
];

export const Glossary: React.FC = () => {
  const [targetSlug, setTargetSlug] = useState<string | null>(null);
  const [copiedSlug, setCopiedSlug] = useState<string | null>(null);
  const [selectedTheory, setSelectedTheory] = useState<'All' | TheoryTag>('All');
  const [searchQuery, setSearchQuery] = useState<string>('');

  // Filter glossary by selected theory and search query
  const filteredGlossary = glossary.filter((item) => {
    if (selectedTheory !== 'All' && !item.theoryTags?.includes(selectedTheory)) {
      return false;
    }
    if (searchQuery.trim()) {
      const q = searchQuery.toLowerCase();
      const matchTerm = item.term.toLowerCase().includes(q);
      const matchDef = item.definition.toLowerCase().includes(q);
      const matchEx = item.dayToDayExample.toLowerCase().includes(q);
      const matchMisc = item.misconception?.toLowerCase().includes(q) ?? false;
      const matchPattern = item.pattern.toLowerCase().includes(q);
      const matchTags = item.theoryTags?.some((t) => t.toLowerCase().includes(q)) ?? false;
      return matchTerm || matchDef || matchEx || matchMisc || matchPattern || matchTags;
    }
    return true;
  });

  // Sort glossary alphabetically by term
  const sortedGlossary = [...filteredGlossary].sort((a, b) => a.term.localeCompare(b.term));

  // Group terms by first letter
  const groupedTerms: Record<string, GlossaryTerm[]> = {};
  sortedGlossary.forEach((item) => {
    const firstLetter = item.term.charAt(0).toUpperCase();
    if (!groupedTerms[firstLetter]) {
      groupedTerms[firstLetter] = [];
    }
    groupedTerms[firstLetter].push(item);
  });

  const alphabet = Object.keys(groupedTerms).sort();

  const handleScrollToSection = (letter: string) => {
    const element = document.getElementById(`glossary-section-${letter}`);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  useEffect(() => {
    const scrollToTerm = () => {
      const hash = window.location.hash.replace('#', '');
      if (!hash) return;

      const cleanSlug = hash.replace(/^term-/, '');
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
    const url = `${window.location.origin}${window.location.pathname}#term-${slug}`;
    window.location.hash = `term-${slug}`;
    navigator.clipboard.writeText(url);
    setCopiedSlug(slug);
    setTargetSlug(slug);
    setTimeout(() => setCopiedSlug(null), 2500);
  };

  return (
    <div className="page-container glossary-page">
      <section className="library-hero glass-panel">
        <div className="hero-text-content">
          <span className="hero-badge">
            <BookOpen className="hero-badge-icon" /> Jargon Dictionary
          </span>
          <h2 className="hero-title">Simplified Glossary of Terms</h2>
          <p className="hero-subtitle">
            A guide to understanding core Marxist jargon, explaining away common media misconceptions and defining economic concepts with real-world, everyday examples.
          </p>
        </div>
      </section>

      {/* Search & Filter Bar */}
      <section className="glossary-filter-bar glass-panel">
        <div className="glossary-search-box">
          <Search className="library-search-icon" />
          <input
            type="text"
            className="library-search-input"
            placeholder="Search glossary by term, definition, example, or keywords..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            id="glossary-search-input"
          />
          {searchQuery && (
            <button
              className="glossary-search-clear-btn"
              onClick={() => setSearchQuery('')}
              title="Clear search"
            >
              <X className="btn-small-icon" />
            </button>
          )}
        </div>

        <div className="filter-bar-header" style={{ marginTop: '16px' }}>
          <Tag className="filter-icon" />
          <span>Filter by Theoretical Framework:</span>
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
      </section>

      {/* Alphabet Jumping Menu */}
      {alphabet.length > 0 && (
        <nav className="glossary-alphabet-menu glass-panel">
          <span className="alphabet-label">Jump to:</span>
          <div className="alphabet-links">
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
        </nav>
      )}

      {/* Glossary List */}
      <main className="glossary-sections-container">
        {alphabet.length === 0 ? (
          <div className="glossary-empty-state glass-panel" style={{ textAlign: 'center', padding: '40px 20px' }}>
            <h3>No matching glossary terms found</h3>
            <p style={{ margin: '8px 0 16px', color: 'var(--text-secondary)' }}>
              No terms match your current search "{searchQuery}" or active theoretical framework filter.
            </p>
            <button
              className="nav-footer-btn"
              onClick={() => {
                setSearchQuery('');
                setSelectedTheory('All');
              }}
              style={{ margin: '0 auto' }}
            >
              Reset Search & Filters
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

                        <button
                          className="glossary-card-share-btn"
                          onClick={() => handleCopyLink(item.term)}
                          title="Copy direct link to this term"
                        >
                          {isCopied ? (
                            <>
                              <Check className="btn-small-icon text-gold" />
                              <span className="share-btn-text text-gold">Link Copied</span>
                            </>
                          ) : (
                            <>
                              <LinkIcon className="btn-small-icon" />
                              <span className="share-btn-text">Share Link</span>
                            </>
                          )}
                        </button>
                      </div>
                      
                      <div className="glossary-card-section definition-section">
                        <span className="section-label summary-label">
                          <Sparkles className="section-icon text-gold" /> Simplified Meaning
                        </span>
                        <FormattedText text={item.definition} paragraphClassName="glossary-card-text" />
                      </div>

                      <div className="glossary-card-section example-section glass-panel">
                        <span className="section-label example-label">
                          <Lightbulb className="section-icon text-amber" /> Day-to-day Example
                        </span>
                        <FormattedText text={item.dayToDayExample} paragraphClassName="glossary-card-text" />
                      </div>

                      <div className="glossary-card-section misconception-section glass-panel">
                        <span className="section-label context-label">
                          <HelpCircle className="section-icon text-crimson" /> Common Misconception
                        </span>
                        <FormattedText text={item.misconception} paragraphClassName="glossary-card-text text-muted-style" />
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          ))
        )}
      </main>
    </div>
  );
};
