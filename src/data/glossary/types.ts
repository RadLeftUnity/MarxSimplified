export type TheoryTag = 
  | 'Classical Marxism' 
  | 'Marxism-Leninism' 
  | 'Trotskyism' 
  | 'Maoism'
  | 'Anarcho-Communism'
  | 'Stalinism'
  | 'Dengism'
  | 'Xi Jinping Thought'
  | 'Juche'
  | 'Anti-Colonial Socialism'
  | 'Capitalist Theory'
  | 'Fascism Analysis'
  | 'Neo-Marxism'
  | 'Bourgeois Philosophy'
  | 'Pre-Capitalist Modes'
  | 'Postmodernism'
  | 'Marxist Feminism';

export interface GlossaryTerm {
  term: string;
  pattern: string; // Pipe-separated regex pattern variants
  excludePattern?: string; // Optional pipe-separated phrases to exclude from highlighting (e.g. "state of things|state of affairs")
  definition: string;
  misconception: string;
  dayToDayExample: string;
  theoryTags?: TheoryTag[];
}

export const getTermSlug = (term: string): string => {
  return term.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, '');
};
