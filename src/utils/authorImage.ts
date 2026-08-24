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

export const getAuthorCoverGradient = (author: string): string => {
  if (!author) return 'linear-gradient(135deg, #7a152e 0%, #4a0b1a 100%)';
  const lower = author.toLowerCase();

  const match = authorsData.find((a) => {
    const aNameLower = a.name.toLowerCase();
    return lower.includes(aNameLower);
  });

  if (match && match.coverGradient) {
    return match.coverGradient;
  }

  if (lower.includes('kollontai')) return 'linear-gradient(135deg, #a01a4e 0%, #4a0c24 100%)';
  if (lower.includes('luxemburg')) return 'linear-gradient(135deg, #9c27b0 0%, #4a148c 100%)';
  if (lower.includes('engels')) return 'linear-gradient(135deg, #2b2d42 0%, #1d1a39 100%)';
  if (lower.includes('lenin')) return 'linear-gradient(135deg, #8c1c1c 0%, #3d0c0c 100%)';
  if (lower.includes('mao')) return 'linear-gradient(135deg, #4e1a3b 0%, #2f0f23 100%)';

  return 'linear-gradient(135deg, #7a152e 0%, #4a0b1a 100%)';
};
