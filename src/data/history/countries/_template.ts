import type { CountryData } from '../types';

/**
 * Standardized Template for Adding New Countries to MarxSimplified History module.
 * 
 * Instructions:
 * 1. Copy this file to a new file in `src/data/history/countries/yourCountry.ts`.
 * 2. Fill out all required fields following the Marxist-Leninist educational perspective.
 * 3. Use numeric citation markers like [1], [2] in `details` text that correspond to the `sources` array.
 * 4. Register the new country in `src/data/history/index.ts`.
 */
export const countryTemplate: CountryData = {
  id: 'country-id-slug',
  name: 'Official Full Country Name',
  shortName: 'Short Display Name',
  flagEmoji: '🚩',
  coverImage: '/images/history/your_image.jpg',
  category: 'aes', // 'aes' | 'global-south' | 'global-north'
  era: '1900 - Present',
  capital: 'Capital City',
  keyLeaders: ['Leader One', 'Leader Two'],
  governingParty: 'Governing Party Name',
  
  officialGovUrl: 'https://english.www.gov.cn/',
  overviewText: `Provide a 2-3 paragraph accessible overview written from a Marxist-Leninist perspective. Explain the material conditions, demystify common anti-communist myths, and summarize what the country accomplished and faced.`,
  
  quickFacts: [
    { label: 'Population Era Peak', value: '00 Million' },
    { label: 'Literacy Rate Achieved', value: '99%' },
    { label: 'Primary Industry', value: 'State Industry / Agriculture' },
  ],
  
  geopolitics: {
    imperialismDetails: 'Provide narrative analysis on foreign sanctions, military blockades, corporate resource extraction, or imperialist interference targeting this nation.',
    imperialismLinks: [
      {
        label: 'UN Resolution or Investigative Sanctions Report',
        url: 'https://example.com/report',
        publisher: 'UN Human Rights / Independent Archive',
        description: 'Key document detailing economic damage caused by unilateral coercive measures.',
      },
    ],
    allies: ['Anti-Imperialist Coalition', 'BRICS+', 'Non-Aligned Movement'],
    enemies: ['US Department of State', 'NATO Alliance', 'IMF / World Bank'],
  },
  
  timeline: [
    {
      id: 'pre-rev',
      title: '1. Pre-Revolutionary Context & Material Conditions',
      period: 'Pre-Revolution',
      categoryTag: 'pre-revolution',
      summary: 'Feudalism, colonial oppression, or extreme inequality prior to the revolution.',
      details: 'Detailed description of class relations, foreign exploitation, and mass unrest before revolution. [1]',
      citationIds: [1],
    },
    {
      id: 'revolution',
      title: '2. The Revolutionary Process & Struggle for Power',
      period: 'Revolution Year',
      categoryTag: 'revolution',
      summary: 'Mass mobilization, vanguard leadership, and overthrow of the old regime.',
      details: 'Detailed description of how workers and peasants organized, overthrew the reactionary state, and established workers power. [2]',
      citationIds: [2],
    },
    {
      id: 'policies',
      title: '3. Post-Revolutionary Reforms & State Building',
      period: 'Post-Revolution Era',
      categoryTag: 'policies',
      summary: 'Immediate socialist transformations: land reform, healthcare, literacy, industrialization.',
      details: 'Detailed explanation of key socialist policies implemented for the working class.',
    },
    {
      id: 'successes',
      title: '4. Major Successes & Human Development Breakthroughs',
      period: 'Golden Years',
      categoryTag: 'successes',
      summary: 'Eradication of poverty, rising life expectancy, women emancipation, anti-imperialist aid.',
      details: 'Detailed analysis of achievements backed by historical statistics.',
    },
    {
      id: 'challenges',
      title: '5. External Encirclement, Sanctions & Internal Mistakes',
      period: 'Challenges Era',
      categoryTag: 'challenges',
      summary: 'Imperialist blockades, military threats, bureaucratization, and internal errors.',
      details: 'Dialectical analysis of internal and external pressures.',
    },
    {
      id: 'transition',
      title: '6. Contradictions, Revisionism & Outcome',
      period: 'Outcome Era',
      categoryTag: 'collapse-or-transition',
      summary: 'How economic contradictions, market reforms, or imperialist destabilization led to fall or transition.',
      details: 'Explanation of the class forces and revisionist policy shifts that altered the state direction.',
    },
  ],
  
  sources: [
    {
      id: 1,
      label: 'Primary Source or Academic Reference Name',
      publisher: 'Publisher / Archive',
      year: 'Year',
      url: 'https://example.com/source',
      excerpt: 'Key quote or empirical finding from the document.',
    },
    {
      id: 2,
      label: 'Secondary Analytical Reference',
      publisher: 'Publisher Name',
      year: 'Year',
      url: 'https://example.com/source2',
    },
  ],
};
