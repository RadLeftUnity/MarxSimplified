import React, { useEffect } from 'react';

export interface DocumentHeadProps {
  title?: string;
  description?: string;
  image?: string;
  url?: string;
  type?: string;
}

export const DocumentHead: React.FC<DocumentHeadProps> = ({
  title = 'Marx Simplified - Accessible Marxist Theory Reader',
  description = 'Study classic Marxist theory books with paragraph-by-paragraph modern translations, historical context guides, and simplified summaries.',
  image = '/og/main.png',
  url = typeof window !== 'undefined' ? window.location.href : 'https://marxsimplified.com',
  type = 'website',
}) => {
  useEffect(() => {
    // 1. Update Document Title
    document.title = title.includes('Marx Simplified') ? title : `${title} | Marx Simplified`;

    // 2. Helper to set or create meta tag
    const setMetaTag = (selector: string, attrName: string, attrVal: string, content: string) => {
      let element = document.querySelector<HTMLMetaElement>(selector);
      if (!element) {
        element = document.createElement('meta');
        element.setAttribute(attrName, attrVal);
        document.head.appendChild(element);
      }
      element.setAttribute('content', content);
    };

    const fullImageUrl = image.startsWith('http')
      ? image
      : `${window.location.origin}${image.startsWith('/') ? '' : '/'}${image}`;

    // Standard Description
    setMetaTag('meta[name="description"]', 'name', 'description', description);

    // Open Graph Tags
    setMetaTag('meta[property="og:title"]', 'property', 'og:title', title);
    setMetaTag('meta[property="og:description"]', 'property', 'og:description', description);
    setMetaTag('meta[property="og:image"]', 'property', 'og:image', fullImageUrl);
    setMetaTag('meta[property="og:url"]', 'property', 'og:url', url);
    setMetaTag('meta[property="og:type"]', 'property', 'og:type', type);
    setMetaTag('meta[property="og:site_name"]', 'property', 'og:site_name', 'Marx Simplified');

    // Twitter Card Tags
    setMetaTag('meta[name="twitter:card"]', 'name', 'twitter:card', 'summary_large_image');
    setMetaTag('meta[name="twitter:title"]', 'name', 'twitter:title', title);
    setMetaTag('meta[name="twitter:description"]', 'name', 'twitter:description', description);
    setMetaTag('meta[name="twitter:image"]', 'name', 'twitter:image', fullImageUrl);
  }, [title, description, image, url, type]);

  return null;
};
