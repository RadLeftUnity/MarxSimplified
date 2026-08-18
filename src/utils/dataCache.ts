/**
 * dataCache.ts
 *
 * In-memory caching and pre-fetching utility for MarxSimplified.
 * Eliminates redundant HTTP requests and eliminates chapter transition delays.
 */

import type { Annotation } from '../components/ChapterReader';
import type { BookDetail } from '../pages/BookSummary';

const textCache = new Map<string, string>();
const jsonCache = new Map<string, any>();
const inFlightPromises = new Map<string, Promise<any>>();
const normalizedAnnotationsCache = new Map<string, Annotation[]>();

/**
 * Fetch plain text with caching and deduplicated in-flight requests.
 */
export async function fetchCachedText(url: string): Promise<string> {
  if (textCache.has(url)) {
    return textCache.get(url)!;
  }
  if (inFlightPromises.has(url)) {
    return inFlightPromises.get(url)!;
  }

  const fetchPromise = (async () => {
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error(`Failed to fetch text resource: ${url} (status ${response.status})`);
    }
    const textData = await response.text();
    textCache.set(url, textData);
    inFlightPromises.delete(url);
    return textData;
  })();

  inFlightPromises.set(url, fetchPromise);
  return fetchPromise;
}

/**
 * Fetch JSON with caching and deduplicated in-flight requests.
 */
export async function fetchCachedJSON<T = any>(url: string): Promise<T> {
  if (jsonCache.has(url)) {
    return jsonCache.get(url)! as T;
  }
  if (inFlightPromises.has(url)) {
    return inFlightPromises.get(url)!;
  }

  const fetchPromise = (async () => {
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error(`Failed to fetch JSON resource: ${url} (status ${response.status})`);
    }
    const jsonData = await response.json();
    jsonCache.set(url, jsonData);
    inFlightPromises.delete(url);
    return jsonData as T;
  })();

  inFlightPromises.set(url, fetchPromise);
  return fetchPromise;
}

/**
 * Fetch and normalize annotations with caching.
 */
export async function fetchCachedAnnotations(
  bookId: string,
  chapterId: string,
  annotationFile: string
): Promise<Annotation[]> {
  const cacheKey = `${bookId}/${chapterId}/${annotationFile}`;
  if (normalizedAnnotationsCache.has(cacheKey)) {
    return normalizedAnnotationsCache.get(cacheKey)!;
  }

  const annotationPath = `/data/books/${bookId}/${annotationFile}`;
  const rawData = await fetchCachedJSON<any[]>(annotationPath);

  const normalized: Annotation[] = (Array.isArray(rawData) ? rawData : []).map(
    (ann: any, index: number) => ({
      id: ann.id || `${chapterId}-ann-${index + 1}`,
      targetText: ann.targetText || '',
      summary: ann.summary || ann.explanation || '',
      explanation: ann.explanation || ann.summary || '',
      context: ann.context || '',
      topics: Array.isArray(ann.topics) ? ann.topics : undefined,
    })
  );

  normalizedAnnotationsCache.set(cacheKey, normalized);
  return normalized;
}

export interface ChapterBundle {
  text: string;
  annotations: Annotation[];
  chapterSummary: string;
}

/**
 * Fetch all resources for a single chapter in parallel (text, annotations, narrative summary).
 */
export async function fetchChapterBundle(
  bookId: string,
  chapter: { id: string; textFile: string; annotationFile: string; summaryFile?: string }
): Promise<ChapterBundle> {
  const textPath = `/data/books/${bookId}/${chapter.textFile}`;
  
  const textPromise = fetchCachedText(textPath);
  const annotationsPromise = fetchCachedAnnotations(bookId, chapter.id, chapter.annotationFile);
  const summaryPromise = chapter.summaryFile
    ? fetchCachedText(`/data/books/${bookId}/${chapter.summaryFile}`).catch(() => '')
    : Promise.resolve('');

  const [text, annotations, chapterSummary] = await Promise.all([
    textPromise,
    annotationsPromise,
    summaryPromise,
  ]);

  return { text, annotations, chapterSummary };
}

/**
 * Background pre-fetcher for adjacent chapters (Next and Previous).
 */
export function prefetchAdjacentChapters(book: BookDetail, currentIndex: number): void {
  const chaptersToPrefetch = [];
  if (currentIndex < book.chapters.length - 1) {
    chaptersToPrefetch.push(book.chapters[currentIndex + 1]);
  }
  if (currentIndex > 0) {
    chaptersToPrefetch.push(book.chapters[currentIndex - 1]);
  }

  chaptersToPrefetch.forEach((ch) => {
    fetchChapterBundle(book.id, ch).catch(() => {
      // Ignore background prefetch errors
    });
  });
}

/**
 * Background pre-fetcher for all book summaries in the catalog.
 */
export function prefetchBookSummaries(books: Array<{ id: string }>): void {
  books.forEach((b) => {
    fetchCachedJSON(`/data/books/${b.id}/summary.json`).catch(() => {
      // Ignore background prefetch errors
    });
  });
}

export interface TopicAnnotationRef {
  annotation: Annotation;
  bookId: string;
  bookTitle: string;
  bookAuthor?: string;
  coverGradient?: string;
  chapterId: string;
  chapterTitle: string;
}

export interface TopicGroup {
  topic: string;
  count: number;
  annotations: TopicAnnotationRef[];
}



export interface TopicIndexData {
  updatedAt: string;
  totalTopics: number;
  totalIndexedAnnotations: number;
  topics: TopicGroup[];
}

let topicIndexPromise: Promise<TopicGroup[]> | null = null;

export function clearTopicCache(): void {
  topicIndexPromise = null;
  jsonCache.clear();
  normalizedAnnotationsCache.clear();
  inFlightPromises.clear();
}

export async function fetchCachedTopicIndex(): Promise<TopicGroup[]> {
  if (topicIndexPromise) {
    return topicIndexPromise;
  }

  topicIndexPromise = (async () => {
    const data = await fetchCachedJSON<TopicIndexData>('/data/topics-index.json');
    return data.topics || [];
  })();

  return topicIndexPromise;
}

export interface IndexedChapter {
  bookId: string;
  bookTitle: string;
  author: string;
  subject: string;
  tags: string[];
  chapterId: string;
  chapterTitle: string;
  summaryText: string;
  annotations: Array<{
    id?: string;
    targetText: string;
    explanation?: string;
    summary?: string;
  }>;
  paragraphs: string[];
}

export interface SearchIndexData {
  updatedAt: string;
  totalChapters: number;
  chapters: IndexedChapter[];
}

export async function fetchSearchIndex(): Promise<SearchIndexData> {
  return fetchCachedJSON<SearchIndexData>('/data/search-index.json');
}


