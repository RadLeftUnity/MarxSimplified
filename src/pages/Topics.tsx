import React, { useState, useEffect, useMemo } from 'react';
import { Tag, BookOpen, Search, Sparkles, History, MessageCircle, ArrowRight, Loader2 } from 'lucide-react';
import { fetchCachedTopicIndex } from '../utils/dataCache';
import type { TopicGroup } from '../utils/dataCache';
import { FormattedText } from '../components/FormattedText';
import { getAuthorImageUrl } from '../utils/authorImage';

interface TopicsProps {
  initialTopic?: string | null;
  onSelectAnnotationInReader: (bookId: string, chapterId: string, annotationId: string) => void;
  onSelectTopicTag?: (topic: string) => void;
}

export const Topics: React.FC<TopicsProps> = ({
  initialTopic,
  onSelectAnnotationInReader,
}) => {
  const [topicGroups, setTopicGroups] = useState<TopicGroup[]>([]);
  const [selectedTopic, setSelectedTopic] = useState<string | null>(initialTopic || null);
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    let isMounted = true;
    const loadTopics = async () => {
      setLoading(true);
      try {
        const groups = await fetchCachedTopicIndex();
        if (isMounted) {
          setTopicGroups(groups);
          if (groups.length > 0) {
            if (initialTopic && groups.some((g) => g.topic === initialTopic)) {
              setSelectedTopic(initialTopic);
            } else if (!selectedTopic) {
              setSelectedTopic(groups[0].topic);
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
            Topics & <span className="title-highlight">Themes</span>
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
                return (
                  <button
                    key={group.topic}
                    id={`topic-tag-btn-${group.topic.toLowerCase().replace(/\s+/g, '-')}`}
                    className={`topic-tag-item ${isActive ? 'active' : ''}`}
                    onClick={() => setSelectedTopic(group.topic)}
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
                <div className="topic-detail-banner glass-panel">
                  <div className="banner-left">
                    <h2 className="topic-title-active">{currentGroup.topic}</h2>
                    <span className="topic-count-summary">
                      {currentGroup.annotations.length} annotated passage{currentGroup.annotations.length !== 1 ? 's' : ''} across library
                    </span>
                  </div>
                </div>

                <div className="topic-annotations-grid">
                  {currentGroup.annotations.map((ref, idx) => {
                    const ann = ref.annotation;
                    const annId = ann.id || `ann-${idx}`;
                    const authorImgUrl = getAuthorImageUrl(ref.bookAuthor || '');

                    return (
                      <article key={`${ref.bookId}-${ref.chapterId}-${annId}`} className="topic-annotation-card glass-panel">
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
                            <button
                              id={`read-btn-${annId}`}
                              className="read-in-book-btn"
                              onClick={() => onSelectAnnotationInReader(ref.bookId, ref.chapterId, annId)}
                            >
                              <span>Read in Book</span>
                              <ArrowRight className="btn-arrow-icon" />
                            </button>
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
                                  onClick={() => setSelectedTopic(t)}
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
