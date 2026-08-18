import { authorsData } from '../data/authorsData';

export const getAuthorImageUrl = (author: string): string => {
  if (!author) return '';
  const lower = author.toLowerCase();

  if (lower.includes('marx') && lower.includes('engels')) {
    return '/images/authors/marx-engels.webp';
  }

  const match = authorsData.find((a) => {
    const aNameLower = a.name.toLowerCase();
    return lower.includes(aNameLower);
  });

  if (match) {
    return match.imageUrl;
  }

  if (lower.includes('marx')) return '/images/authors/marx.jpg';
  if (lower.includes('engels')) return '/images/authors/engels.jpg';
  if (lower.includes('lenin')) return '/images/authors/lenin.jpg';
  if (lower.includes('mao')) return '/images/authors/mao.jpg';
  if (lower.includes('kollontai')) return '/images/authors/kollontai.jpg';
  if (lower.includes('luxemburg')) return '/images/authors/luxemburg.jpg';

  return '';
};
