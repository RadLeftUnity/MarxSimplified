export const getAuthorImageUrl = (author: string): string => {
  if (!author) return '';
  const lower = author.toLowerCase();
  if (lower.includes('marx') && lower.includes('engels')) {
    return '/images/authors/marx-engels.webp';
  }
  if (lower.includes('marx')) {
    return '/images/authors/marx.jpg';
  }
  if (lower.includes('engels')) {
    return '/images/authors/engels.jpg';
  }
  if (lower.includes('lenin')) {
    return '/images/authors/lenin.jpg';
  }
  if (lower.includes('mao')) {
    return '/images/authors/mao.jpg';
  }
  return '';
};
