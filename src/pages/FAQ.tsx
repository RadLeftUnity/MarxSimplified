import React, { useState, useEffect, useMemo } from 'react';
import { useNavigate } from 'react-router-dom';
import { HelpCircle, Search, BookOpen, Tag, Check, Link as LinkIcon, ArrowRight, BookMarked, ListFilter, Globe, FileText, ExternalLink } from 'lucide-react';
import { FAQ_ITEMS, FAQ_CATEGORIES } from '../data/faq/faqData';
import type { FAQItem } from '../data/faq/faqData';
import { FormattedText } from '../components/FormattedText';
import { getAuthorImageUrl } from '../utils/authorImage';
import { glossary, getTermSlug } from '../data/glossary';
import { getTopicSlug } from '../utils/dataCache';

interface FAQProps {
  onSelectAnnotationInReader: (bookId: string, chapterId: string, annotationId: string) => void;
  onSelectGlossaryTerm?: (termSlug: string) => void;
  onSelectCountry?: (countryId: string) => void;
  onSelectTopic?: (topicSlug: string) => void;
}

function extractUrlQuestionId(): string {
  const pathname = window.location.pathname;
  if (pathname.startsWith('/faq/') && pathname !== '/faq') {
    return decodeURIComponent(pathname.split('/faq/')[1].split('/')[0]);
  }
  const hash = window.location.hash.replace('#', '');
  if (hash) return hash;
  const params = new URLSearchParams(window.location.search);
  return params.get('q') || '';
}

export const FAQ: React.FC<FAQProps> = ({
  onSelectAnnotationInReader,
  onSelectGlossaryTerm,
  onSelectCountry,
  onSelectTopic,
}) => {
  const navigate = useNavigate();
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [copiedId, setCopiedId] = useState<string | null>(null);

  // Initialize selected question from URL or default to first question
  const [selectedQuestionId, setSelectedQuestionId] = useState<string>(() => {
    const urlTarget = extractUrlQuestionId();
    const matched = FAQ_ITEMS.find((item) => item.id === urlTarget);
    return matched ? matched.id : FAQ_ITEMS[0].id;
  });

  useEffect(() => {
    const handlePopState = () => {
      const urlTarget = extractUrlQuestionId();
      if (urlTarget) {
        const matched = FAQ_ITEMS.find((item) => item.id === urlTarget);
        if (matched) {
          setSelectedQuestionId(matched.id);
          setSelectedCategory('All');
        }
      }
    };

    window.addEventListener('popstate', handlePopState);
    return () => window.removeEventListener('popstate', handlePopState);
  }, []);

  const handleSelectQuestion = (item: FAQItem) => {
    setSelectedQuestionId(item.id);
    if (window.location.pathname.startsWith('/faq')) {
      window.history.pushState(null, '', `/faq/${item.id}`);
    }
  };

  const handleCopyLink = (item: FAQItem) => {
    const url = `${window.location.origin}/faq/${item.id}`;
    navigator.clipboard.writeText(url);
    setCopiedId(item.id);
    setTimeout(() => setCopiedId(null), 2500);
  };

  const handleGlossaryClick = (slug: string) => {
    if (onSelectGlossaryTerm) {
      onSelectGlossaryTerm(slug);
    } else {
      window.dispatchEvent(new CustomEvent('navigate-to-glossary', { detail: { slug } }));
    }
  };

  const handleCountryClick = (countryId: string) => {
    if (onSelectCountry) {
      onSelectCountry(countryId);
    } else {
      navigate(`/history/${countryId}`);
    }
  };

  const handleTopicClick = (topicNameOrSlug: string) => {
    const slug = getTopicSlug(topicNameOrSlug);
    if (onSelectTopic) {
      onSelectTopic(slug);
    } else {
      navigate(`/topics/${slug}`);
    }
  };

  const renderAnswerWithCitations = (text: string) => {
    const parts = text.split(/(\[\d+\])/g);
    return parts.map((part, index) => {
      const match = part.match(/^\[(\d+)\]$/);
      if (match) {
        const citationNum = match[1];
        return (
          <a
            key={index}
            href={`#faq-citation-${citationNum}`}
            className="faq-citation-badge-link"
            onClick={(e) => {
              e.preventDefault();
              const el = document.getElementById(`faq-citation-${citationNum}`);
              if (el) {
                el.scrollIntoView({ behavior: 'smooth', block: 'center' });
                el.classList.add('citation-card-highlighted');
                setTimeout(() => el.classList.remove('citation-card-highlighted'), 2200);
              }
            }}
            title={`Jump to Source [${citationNum}]`}
          >
            [{citationNum}]
          </a>
        );
      }
      return part;
    });
  };

  // Filter questions based on category and search query
  const filteredQuestions = useMemo(() => {
    return FAQ_ITEMS.filter((item) => {
      const matchesCategory = selectedCategory === 'All' || item.category === selectedCategory;
      if (!matchesCategory) return false;

      if (!searchQuery.trim()) return true;
      const q = searchQuery.toLowerCase();
      return (
        item.question.toLowerCase().includes(q) ||
        item.shortAnswer.toLowerCase().includes(q) ||
        item.detailedAnswer.toLowerCase().includes(q) ||
        item.category.toLowerCase().includes(q)
      );
    });
  }, [selectedCategory, searchQuery]);

  // Active question object
  const activeQuestion = useMemo(() => {
    return FAQ_ITEMS.find((item) => item.id === selectedQuestionId) || filteredQuestions[0] || FAQ_ITEMS[0];
  }, [selectedQuestionId, filteredQuestions]);

  // Map category counts
  const categoryCounts = useMemo(() => {
    const counts: Record<string, number> = { All: FAQ_ITEMS.length };
    FAQ_ITEMS.forEach((item) => {
      counts[item.category] = (counts[item.category] || 0) + 1;
    });
    return counts;
  }, []);

  return (
    <div className="faq-page-container">
      {/* Main 3-Column Layout */}
      <div className="faq-layout-grid">
        {/* Column 1: Categories Navigation */}
        <aside className="faq-categories-col glass-panel">
          <div className="faq-col-header">
            <span className="col-header-title">
              <ListFilter className="icon-small text-gold" />
              Categories
            </span>
          </div>

          <nav className="faq-categories-nav">
            {FAQ_CATEGORIES.map((cat) => {
              const count = categoryCounts[cat] || 0;
              const isActive = selectedCategory === cat;
              return (
                <button
                  key={cat}
                  className={`faq-cat-nav-btn ${isActive ? 'active' : ''}`}
                  onClick={() => setSelectedCategory(cat)}
                >
                  <span className="faq-cat-nav-name">{cat}</span>
                  <span className="faq-cat-nav-count">{count}</span>
                </button>
              );
            })}
          </nav>
        </aside>

        {/* Column 2: Questions Browser */}
        <section className="faq-questions-col glass-panel">
          <div className="faq-col-header">
            <span className="col-header-title">
              <HelpCircle className="icon-small text-gold" />
              Questions
            </span>
            <span className="faq-questions-counter-badge">
              {filteredQuestions.length}
            </span>
          </div>

          {/* Search Box */}
          <div className="faq-search-box">
            <Search className="search-icon-left text-muted" />
            <input
              type="text"
              placeholder="Search questions or keywords..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="faq-search-input"
            />
            {searchQuery && (
              <button
                className="faq-search-clear-btn"
                onClick={() => setSearchQuery('')}
                title="Clear search"
                aria-label="Clear search"
              >
                ×
              </button>
            )}
          </div>

          {/* Question List */}
          <div className="faq-questions-list vertical-scroll">
            {filteredQuestions.map((item) => {
              const isActive = activeQuestion.id === item.id;
              return (
                <button
                  key={item.id}
                  className={`faq-question-card ${isActive ? 'active' : ''}`}
                  onClick={() => handleSelectQuestion(item)}
                >
                  <div className="faq-card-top">
                    <span className="faq-card-cat-badge">{item.category}</span>
                    <ArrowRight className="faq-card-arrow icon-tiny" />
                  </div>
                  <div className="faq-card-question-text">{item.question}</div>
                </button>
              );
            })}

            {filteredQuestions.length === 0 && (
              <div className="faq-no-results">
                <HelpCircle className="icon-large text-muted" />
                <p>No questions found matching your filter.</p>
                {selectedCategory !== 'All' && (
                  <button
                    className="faq-reset-filter-btn"
                    onClick={() => { setSelectedCategory('All'); setSearchQuery(''); }}
                  >
                    Reset Filter
                  </button>
                )}
              </div>
            )}
          </div>
        </section>

        {/* Column 3: Detailed Answer and Library Connections */}
        <main className="faq-content-area">
          {activeQuestion ? (
            <article className="faq-detail-card glass-panel">
              {/* Question Header */}
              <div className="faq-detail-header">
                <div className="faq-detail-header-left">
                  <div className="faq-category-label">
                    <Tag className="icon-tiny text-gold" />
                    <span>{activeQuestion.category}</span>
                  </div>
                  <h2 className="faq-active-question-title">{activeQuestion.question}</h2>
                </div>
                <button
                  className="faq-copy-btn"
                  onClick={() => handleCopyLink(activeQuestion)}
                  title="Copy direct link to this question"
                >
                  {copiedId === activeQuestion.id ? (
                    <>
                      <Check className="icon-small text-gold" />
                      <span>Copied Link</span>
                    </>
                  ) : (
                    <>
                      <LinkIcon className="icon-small text-gold" />
                      <span>Share Question</span>
                    </>
                  )}
                </button>
              </div>

              {/* Quick Summary / Analysis Box */}
              <div className="faq-short-answer-box">
                <div className="short-answer-heading">
                  <HelpCircle className="icon-small text-gold" />
                  <span>Analysis</span>
                </div>
                <p className="short-answer-text">{renderAnswerWithCitations(activeQuestion.shortAnswer)}</p>
              </div>

              {/* Key Takeaways */}
              {activeQuestion.takeaways && activeQuestion.takeaways.length > 0 && (
                <div className="faq-takeaways-section">
                  <h3 className="section-mini-heading">Key Takeaways</h3>
                  <ul className="faq-takeaway-list">
                    {activeQuestion.takeaways.map((point, idx) => (
                      <li key={idx} className="faq-takeaway-item">
                        <span className="takeaway-bullet">★</span>
                        <span>{point}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              {/* Detailed Theoretical Explanation */}
              <div className="faq-detailed-section">
                <h3 className="section-mini-heading">Theoretical Explanation</h3>
                <div className="faq-prose-body">
                  <FormattedText text={activeQuestion.detailedAnswer} highlightJargon={true} enableCitations={true} />
                </div>
              </div>

              {/* Related Library Annotations (Source Theory) */}
              {activeQuestion.relatedAnnotations && activeQuestion.relatedAnnotations.length > 0 && (
                <div className="faq-sources-section">
                  <div className="sources-section-header">
                    <BookOpen className="icon-small text-gold" />
                    <h3 className="section-mini-heading" style={{ margin: 0 }}>
                      Source Theory in Library ({activeQuestion.relatedAnnotations.length})
                    </h3>
                  </div>
                  <div className="faq-annotations-grid">
                    {activeQuestion.relatedAnnotations.map((ref, idx) => {
                      const authorImg = getAuthorImageUrl(ref.author);
                      return (
                        <div key={`${ref.bookId}-${ref.chapterId}-${ref.annotationId}-${idx}`} className="faq-source-card">
                          <div className="source-card-header">
                            <div
                              className="source-mini-cover"
                              style={{ background: ref.coverGradient || 'linear-gradient(135deg, #7c1a22 0%, #30080c 100%)' }}
                            >
                              {authorImg && (
                                <img src={authorImg} alt={ref.author} className="source-mini-author-img" />
                              )}
                              <span className="source-cover-star">★</span>
                            </div>
                            <div className="source-meta-text">
                              <span className="source-book-name">{ref.bookTitle}</span>
                              <span className="source-chapter-name">{ref.chapterTitle}</span>
                              <span className="source-author-name">{ref.author}</span>
                            </div>
                          </div>

                          {ref.quote && (
                            <blockquote className="source-quote-box">
                              "{ref.quote}"
                            </blockquote>
                          )}

                          <p className="source-summary-text">{ref.summary}</p>

                          <button
                            className="source-read-btn"
                            onClick={() => onSelectAnnotationInReader(ref.bookId, ref.chapterId, ref.annotationId)}
                            title={`Read in ${ref.bookTitle}`}
                          >
                            <span>Read Passage in Library</span>
                            <ArrowRight className="icon-tiny" />
                          </button>
                        </div>
                      );
                    })}
                  </div>
                </div>
              )}

              {/* Primary Sources, Data, and Documentation */}
              {activeQuestion.sources && activeQuestion.sources.length > 0 && (
                <div className="faq-citations-section">
                  <div className="sources-section-header">
                    <FileText className="icon-small text-gold" />
                    <h3 className="section-mini-heading" style={{ margin: 0 }}>
                      Primary Sources and Empirical Documentation ({activeQuestion.sources.length})
                    </h3>
                  </div>
                  <div className="faq-citations-list">
                    {activeQuestion.sources.map((src, idx) => (
                      <div
                        key={idx}
                        id={`faq-citation-${idx + 1}`}
                        className="faq-citation-card"
                      >
                        <div className="citation-header-row">
                          <div className="citation-title-wrapper">
                            <span className="citation-index-badge">[{idx + 1}]</span>
                            <a
                              href={src.url}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="citation-title-link"
                            >
                              <span>{src.title}</span>
                              <ExternalLink className="icon-tiny text-gold" />
                            </a>
                          </div>
                          {src.authorOrPublisher && (
                            <span className="citation-publisher-badge">
                              {src.authorOrPublisher}
                            </span>
                          )}
                        </div>
                        {src.note && <p className="citation-note-text">{src.note}</p>}
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Related Country History Modules */}
              {activeQuestion.relatedCountries && activeQuestion.relatedCountries.length > 0 && (
                <div className="faq-countries-section">
                  <div className="sources-section-header">
                    <Globe className="icon-small text-gold" />
                    <h3 className="section-mini-heading" style={{ margin: 0 }}>
                      Related Country History Modules ({activeQuestion.relatedCountries.length})
                    </h3>
                  </div>
                  <div className="faq-countries-grid">
                    {activeQuestion.relatedCountries.map((cRef) => (
                      <div key={cRef.countryId} className="faq-country-card">
                        <div className="country-card-header-row">
                          <span className="country-card-flag">{cRef.flagEmoji || '🚩'}</span>
                          <div className="country-card-titles">
                            <span className="country-card-name">{cRef.countryName}</span>
                            <span className="country-card-badge">History Module</span>
                          </div>
                        </div>
                        <p className="country-card-summary">{cRef.summary}</p>
                        <button
                          className="country-card-nav-btn"
                          onClick={() => handleCountryClick(cRef.countryId)}
                          title={`Explore ${cRef.countryName} in Country History`}
                        >
                          <span>Explore Country History and Timeline</span>
                          <ArrowRight className="icon-tiny" />
                        </button>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Related Topics (See Also) */}
              {activeQuestion.relatedTopics && activeQuestion.relatedTopics.length > 0 && (
                <div className="faq-topics-section">
                  <div className="sources-section-header">
                    <ListFilter className="icon-small text-gold" />
                    <h3 className="section-mini-heading" style={{ margin: 0 }}>
                      Related Topics ({activeQuestion.relatedTopics.length})
                    </h3>
                  </div>
                  <div className="faq-topic-pills">
                    {activeQuestion.relatedTopics.map((topicName) => (
                      <button
                        key={topicName}
                        className="faq-topic-pill-btn"
                        onClick={() => handleTopicClick(topicName)}
                        title={`Explore ${topicName} in Topics`}
                      >
                        <Tag className="icon-tiny text-gold" />
                        <span>{topicName}</span>
                        <ArrowRight className="icon-tiny" />
                      </button>
                    ))}
                  </div>
                </div>
              )}

              {/* Related Glossary Concepts */}
              {activeQuestion.glossaryTerms && activeQuestion.glossaryTerms.length > 0 && (
                <div className="faq-glossary-section">
                  <div className="sources-section-header">
                    <BookMarked className="icon-small text-gold" />
                    <h3 className="section-mini-heading" style={{ margin: 0 }}>
                      Related Glossary Concepts
                    </h3>
                  </div>
                  <div className="faq-glossary-pills">
                    {activeQuestion.glossaryTerms.map((termSlug) => {
                      const foundTerm = glossary.find((t) => getTermSlug(t.term) === termSlug);
                      const displayTitle = foundTerm ? foundTerm.term : termSlug.replace(/-/g, ' ');
                      return (
                        <button
                          key={termSlug}
                          className="faq-glossary-pill-btn"
                          onClick={() => handleGlossaryClick(termSlug)}
                          title={`View ${displayTitle} in Glossary`}
                        >
                          <Tag className="icon-tiny text-gold" />
                          <span>{displayTitle}</span>
                        </button>
                      );
                    })}
                  </div>
                </div>
              )}
            </article>
          ) : (
            <div className="faq-empty-state glass-panel">
              <HelpCircle className="icon-large text-muted" />
              <h3>Select a question to view the theoretical explanation</h3>
              <p>Explore common questions and anti-communist misconceptions answered with Marxist theory.</p>
            </div>
          )}
        </main>
      </div>
    </div>
  );
};
