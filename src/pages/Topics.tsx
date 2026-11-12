import React, { useState, useEffect, useMemo } from 'react';
import { Tag, BookOpen, Search, Sparkles, History, MessageCircle, ArrowRight, Loader2, Link as LinkIcon, Check } from 'lucide-react';
import { fetchCachedTopicIndex, clearTopicCache, getTopicSlug, canonicalTopic } from '../utils/dataCache';
import type { TopicGroup } from '../utils/dataCache';
import { FormattedText } from '../components/FormattedText';
import { getAuthorImageUrl } from '../utils/authorImage';
import { CopyImageButton } from '../components/CopyImageButton';
import { generateAnnotationCardCanvas } from '../utils/shareCardCanvas';

interface TopicsProps {
  initialTopic?: string | null;
  onSelectAnnotationInReader: (bookId: string, chapterId: string, annotationId: string) => void;
  onSelectTopicTag?: (topic: string) => void;
}

function extractUrlTopicOrSlug(): string {
  const pathname = window.location.pathname;
  if (pathname.startsWith('/topics/') && pathname !== '/topics') {
    return decodeURIComponent(pathname.split('/topics/')[1].split('/')[0]);
  }
  const params = new URLSearchParams(window.location.search);
  return params.get('topic') || '';
}

function findMatchingGroup(groups: TopicGroup[], target: string | null | undefined): TopicGroup | undefined {
  if (!target) return undefined;
  const targetSlug = getTopicSlug(target);
  const canonical = canonicalTopic(target);
  const canonicalSlug = getTopicSlug(canonical);
  const unhyphenatedCanonical = canonicalTopic(target.replace(/-/g, ' '));
  const unhyphenatedSlug = getTopicSlug(unhyphenatedCanonical);

  return groups.find((g) => {
    const gSlug = g.slug || getTopicSlug(g.topic);
    return (
      g.topic === target ||
      g.topic === canonical ||
      g.topic === unhyphenatedCanonical ||
      gSlug === targetSlug ||
      gSlug === canonicalSlug ||
      gSlug === unhyphenatedSlug
    );
  });
}

export const Topics: React.FC<TopicsProps> = ({
  initialTopic,
  onSelectAnnotationInReader,
}) => {
  const [topicGroups, setTopicGroups] = useState<TopicGroup[]>([]);
  const [selectedTopic, setSelectedTopic] = useState<string | null>(initialTopic || null);
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [loading, setLoading] = useState<boolean>(true);
  const [copiedSlug, setCopiedSlug] = useState<string | null>(null);

  useEffect(() => {
    let isMounted = true;
    const loadTopics = async () => {
      clearTopicCache();
      setLoading(true);
      try {
        const groups = await fetchCachedTopicIndex();
        if (isMounted) {
          setTopicGroups(groups);
          if (groups.length > 0) {
            const urlTarget = extractUrlTopicOrSlug();
            const matched =
              findMatchingGroup(groups, urlTarget) ||
              findMatchingGroup(groups, initialTopic) ||
              findMatchingGroup(groups, selectedTopic) ||
              groups[0];

            setSelectedTopic(matched.topic);
            const activeSlug = matched.slug || getTopicSlug(matched.topic);
            if (window.location.pathname.startsWith('/topics')) {
              window.history.replaceState(null, '', `/topics/${activeSlug}`);
            }
          }
        }
      } catch (err) {
        console.error('Failed to load topics index:', err);
      } finally {
        if (isMounted) setLoading(false);
      }
    };

    loadTopics();

    return () => {
      isMounted = false;
    };
  }, [initialTopic]);

  useEffect(() => {
    const handlePopState = () => {
      if (topicGroups.length === 0) return;
      const urlTarget = extractUrlTopicOrSlug();
      const matched = findMatchingGroup(topicGroups, urlTarget);
      if (matched) {
        setSelectedTopic(matched.topic);
      }
    };

    window.addEventListener('popstate', handlePopState);
    return () => window.removeEventListener('popstate', handlePopState);
  }, [topicGroups]);

  const handleSelectTopicCategory = (topic: string) => {
    setSelectedTopic(topic);
    const slug = getTopicSlug(topic);
    window.history.pushState(null, '', `/topics/${slug}`);
  };

  const handleCopyTopicLink = (group: TopicGroup) => {
    const slug = group.slug || getTopicSlug(group.topic);
    const url = `${window.location.origin}/topics/${slug}`;
    window.history.replaceState(null, '', `/topics/${slug}`);
    navigator.clipboard.writeText(url);
    setCopiedSlug(slug);
    setTimeout(() => setCopiedSlug(null), 2500);
  };

  const filteredGroups = useMemo(() => {
    if (!searchQuery.trim()) return topicGroups;
    const query = searchQuery.toLowerCase().trim();
    return topicGroups.filter(
      (g) =>
        g.topic.toLowerCase().includes(query) ||
        g.annotations.some(
          (ref) =>
            ref.annotation.targetText.toLowerCase().includes(query) ||
            ref.annotation.summary.toLowerCase().includes(query) ||
            ref.bookTitle.toLowerCase().includes(query)
        )
    );
  }, [topicGroups, searchQuery]);

  const currentGroup = useMemo(() => {
    if (!selectedTopic) return filteredGroups[0] || null;
    return topicGroups.find((g) => g.topic === selectedTopic) || filteredGroups[0] || null;
  }, [topicGroups, filteredGroups, selectedTopic]);

  return (
    <div className="topics-page-container">
      <header className="topics-page-header glass-panel">
        <div className="header-title-container">
          <div className="topics-header-badge">
            <Tag className="badge-icon text-gold" />
            <span>Theoretical Concepts</span>
          </div>
          <h1 className="topics-main-title">
            Topics and <span className="title-highlight">Themes</span>
          </h1>
          <p className="topics-subtitle">
            Explore annotations across all foundational texts organized by key Marxist concepts, economic theories, and political strategies.
          </p>
        </div>

        <div className="topics-search-bar glass-panel">
          <Search className="search-icon" />
          <input
            type="text"
            placeholder="Filter topics or search quotes..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="search-input"
            id="topics-search-input"
          />
          {searchQuery && (
            <button
              className="clear-search-btn"
              onClick={() => setSearchQuery('')}
              title="Clear search"
            >
              ×
            </button>
          )}
        </div>
      </header>

      {loading ? (
        <div className="topics-loading-viewport">
          <Loader2 className="spinner-icon" />
          <p>Compiling topic annotations catalog...</p>
        </div>
      ) : topicGroups.length === 0 ? (
        <div className="topics-empty-state glass-panel">
          <p>No topic annotations available in catalog.</p>
        </div>
      ) : (
        <div className="topics-layout-split">
          {/* Left Vertical Menu */}
          <aside className="topics-sidebar glass-panel">
            <div className="topics-sidebar-header">
              <span className="sidebar-title-text">
                <Tag className="icon-small" /> Topic Menu ({filteredGroups.length})
              </span>
            </div>

            <nav className="topics-tag-list vertical-scroll">
              {filteredGroups.map((group) => {
                const isActive = currentGroup?.topic === group.topic;
                const slug = group.slug || getTopicSlug(group.topic);
                return (
                  <button
                    key={group.topic}
                    id={`topic-tag-btn-${slug}`}
                    className={`topic-tag-item ${isActive ? 'active' : ''}`}
                    onClick={() => handleSelectTopicCategory(group.topic)}
                  >
                    <span className="tag-name">{group.topic}</span>
                    <span className="tag-count-badge">{group.count}</span>
                  </button>
                );
              })}
            </nav>
          </aside>

          {/* Right Main Annotations Content */}
          <main className="topics-content-area">
            {currentGroup ? (
              <div className="topic-group-detail">
                <div className="topic-detail-banner glass-panel" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '0.75rem' }}>
                  <div className="banner-left">
                    <h2 className="topic-title-active">{currentGroup.topic}</h2>
                    <span className="topic-count-summary">
                      {currentGroup.annotations.length} annotated passage{currentGroup.annotations.length !== 1 ? 's' : ''} across library
                    </span>
                  </div>
                  <button
                    className="read-in-book-btn"
                    onClick={() => handleCopyTopicLink(currentGroup)}
                    title={`Copy direct link to ${currentGroup.topic}`}
                  >
                    {copiedSlug === (currentGroup.slug || getTopicSlug(currentGroup.topic)) ? (
                      <>
                        <Check className="btn-arrow-icon" />
                        <span>Copied Link</span>
                      </>
                    ) : (
                      <>
                        <LinkIcon className="btn-arrow-icon" />
                        <span>Copy Topic Link</span>
                      </>
                    )}
                  </button>
                </div>

                <div className="topic-annotations-grid">
                  {currentGroup.annotations.map((ref, idx) => {
                    const ann = ref.annotation;
                    const annId = ann.id || `ann-${idx}`;
                    const authorImgUrl = getAuthorImageUrl(ref.bookAuthor || '');

                    return (
                      <article key={`${currentGroup.topic}-${ref.bookId}-${ref.chapterId}-${annId}-${idx}`} className="topic-annotation-card glass-panel">
                        <div 
                          className="topic-card-book-cover-wrap"
                          onClick={() => onSelectAnnotationInReader(ref.bookId, ref.chapterId, annId)}
                          title={`Read ${ref.chapterTitle} in ${ref.bookTitle}`}
                        >
                          <div 
                            className="book-cover mini-topic-cover" 
                            style={{ background: ref.coverGradient || 'linear-gradient(135deg, #8b0000 0%, #3a0000 100%)' }}
                          >
                            {authorImgUrl && (
                              <img src={authorImgUrl} alt={ref.bookAuthor || ''} className="book-cover-author-overlay" />
                            )}
                            <span className="book-cover-star">★</span>
                            <div className="book-cover-title">{ref.bookTitle}</div>
                            <div className="book-cover-author">{ref.bookAuthor}</div>
                          </div>
                        </div>

                        <div className="topic-card-body">
                          <div className="card-source-header">
                            <div className="source-info">
                              <BookOpen className="source-icon text-gold" />
                              <span className="source-book">{ref.bookTitle}</span>
                              <span className="source-separator">•</span>
                              <span className="source-chapter">{ref.chapterTitle}</span>
                            </div>
                            <div className="card-source-actions" style={{ display: 'flex', gap: '0.5rem', alignItems: 'center' }}>
                              <CopyImageButton
                                className="read-in-book-btn"
                                id={`copy-topic-${annId}`}
                                onGenerateCanvas={() =>
                                  generateAnnotationCardCanvas({
                                    bookTitle: ref.bookTitle || 'Marxist Theory Reader',
                                    author: ref.bookAuthor || 'Karl Marx',
                                    targetText: ann.targetText,
                                    summary: ann.summary || '',
                                    explanation: ann.explanation || (ann as any).context || '',
                                    coverGradient: ref.coverGradient,
                                    authorImageUrl: authorImgUrl,
                                  })
                                }
                              />
                              <button
                                id={`read-btn-${annId}`}
                                className="read-in-book-btn"
                                onClick={() => onSelectAnnotationInReader(ref.bookId, ref.chapterId, annId)}
                              >
                                <span>Read in Book</span>
                                <ArrowRight className="btn-arrow-icon" />
                              </button>
                            </div>
                          </div>

                          <div className="topic-card-section quote-section">
                            <span className="section-label">
                              <MessageCircle className="section-icon" /> Target Text
                            </span>
                            <blockquote className="original-quote">
                              {ann.targetText}
                            </blockquote>
                          </div>

                          <div className="topic-card-section summary-section">
                            <span className="section-label summary-label">
                              <Sparkles className="section-icon" /> Simplified Meaning
                            </span>
                            <FormattedText text={ann.summary} className="simplified-text" />
                          </div>

                          {ann.context && (
                            <div className="topic-card-section context-section">
                              <span className="section-label context-label">
                                <History className="section-icon" /> Historical Context
                              </span>
                              <FormattedText text={ann.context} className="context-text" />
                            </div>
                          )}

                          {ann.topics && ann.topics.length > 0 && (
                            <div className="topic-card-tags">
                              {ann.topics.map((t) => (
                                <span
                                  key={t}
                                  className={`topic-pill ${t === currentGroup.topic ? 'active' : ''}`}
                                  onClick={() => handleSelectTopicCategory(t)}
                                >
                                  #{t}
                                </span>
                              ))}
                            </div>
                          )}
                        </div>
                      </article>
                    );
                  })}
                </div>
              </div>
            ) : (
              <div className="topics-no-selection glass-panel">
                <p>Select a topic from the vertical menu to view annotations.</p>
              </div>
            )}
          </main>
        </div>
      )}
    </div>
  );
};
