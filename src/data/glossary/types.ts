export type TheoryTag = 
  | 'Classical Marxism' 
  | 'Marxism-Leninism' 
  | 'Trotskyism' 
  | 'Maoism';

export interface GlossaryTerm {
  term: string;
  pattern: string; // Pipe-separated regex pattern variants
  definition: string;
  misconception: string;
  dayToDayExample: string;
  theoryTags?: TheoryTag[];
}

export const getTermSlug = (term: string): string => {
  return term.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, '');
};
