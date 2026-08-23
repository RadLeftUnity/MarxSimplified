import type { CountryData } from '../types';

export const mongoliaModernData: CountryData = {
  id: 'mongolia-modern',
  name: 'Mongolia',
  shortName: 'Mongolia (Modern)',
  flagEmoji: '🇲🇳',
  flagUrl: '/images/flags/mongolia.svg',
  coverImage: '/images/history/mongolia.jpg',
  category: 'global-south',
  era: '1992 – Present',
  capital: 'Ulaanbaatar',
  keyLeaders: ['Punsalmaagiin Ochirbat', 'Natsagiin Bagabandi', 'Tsakhiagiin Elbegdorj', 'Ukhnaagiin Khürelsükh'],
  governingParty: 'Mongolian People\'s Party (MPP)',
  governingIdeology: 'Capitalism',
  isHistoricState: false,
  officialGovUrl: 'https://mongolia.gov.mn/',

  counterpartInfo: {
    id: 'mongolia',
    name: "Mongolian People's Republic (1924–1992)",
    label: 'Historic Socialist Equivalent',
    contrastText: 'Socialist Mongolia (1924–1992) leaped from feudal serfdom to socialism, building Erdenet mining co-ops, mobile rural clinics, & 100% literacy, contrasting with modern Mongolia\'s post-1992 IMF voucher privatization, foreign mining concessions (Oyu Tolgoi), & urban inequality.',
  },

  overviewText: `Following the adoption of a new constitution in February 1992, modern Mongolia completed its transition from a socialist planned economy to a capitalist market economy. Under guidance from the IMF, World Bank, and Asian Development Bank, Mongolia privatized state pastoral livestock cooperatives (*negdel*), deregulated trade, and opened its vast mineral wealth (copper, gold, coal) to foreign Western mining corporations.

Today, Mongolia's economy is heavily dependent on raw material exports, primarily to neighboring China. The mega-mining project at Oyu Tolgoi (operated by Anglo-Australian mining giant Rio Tinto) dominates national export revenues. While mining expansion generated wealth for a new domestic business elite in Ulaanbaatar, post-socialist privatization led to rural-to-urban displacement, environmental degradation, seasonal severe winters (*dzud*) crippling private herder families, and expanding informal ger settlements surrounding the capital.`,

  geopolitics: {
    imperialismDetails: 'Modern Mongolia maintains a "Third Neighbor Policy" seeking diplomatic balance with the US and Western mining cartels (Rio Tinto), while maintaining economic trade with China and Russia.',
    imperialismLinks: [
      {
        label: 'Mongolian Foreign Direct Investment and Oyu Tolgoi Mining Report',
        url: 'https://mfa.gov.mn/en/',
        publisher: 'Ministry of Foreign Affairs of Mongolia',
        description: 'Documentation of Rio Tinto copper contracts, mining exports, and multi-lateral trade.',
      },
    ],
    allies: ['China', 'Russian Federation', 'United States ("Third Neighbor")'],
    enemies: [],
  },

  quickFacts: [
    { label: 'Post-1992 IMF Shock Privatization', value: 'Privatized state livestock co-ops & state enterprises under IMF guidelines [1]' },
    { label: 'Oyu Tolgoi Rio Tinto Concession', value: 'Foreign mining cartel Rio Tinto controls major copper/gold deposits at Oyu Tolgoi [2]' },
    { label: 'Ulaanbaatar Ger Settlements', value: 'Rural displacement drove 50%+ of population into informal ger districts around capital [3]' },
  ],

  timeline: [
    {
      id: 'mongolia-modern-1992-constitution-privatization',
      title: '1. 1992: The 1992 Constitution & Livestock Voucher Privatization',
      period: '1992 – 2000',
      categoryTag: 'policies',
      summary: 'Adopting 1992 capitalist constitution; privatizing pastoral negdel co-ops into private herds.',
      details: `In February 1992, a new constitution created the modern multi-party state. The government privatized 25 million head of state livestock via voucher distribution, dismantling negdel cooperatives and transferring veterinary care to private markets. [1]`
    },
    {
      id: 'mongolia-modern-rio-tinto-oyu-tolgoi',
      title: '2. 2009: The Oyu Tolgoi Mining Agreement with Rio Tinto',
      period: '2009 – 2015',
      categoryTag: 'policies',
      summary: 'Signing $6B Oyu Tolgoi copper-gold mining contract with multinational Rio Tinto.',
      details: `In October 2009, the Mongolian Parliament approved the Oyu Tolgoi Investment Agreement with Anglo-Australian mining giant Rio Tinto. While creating export revenue, controversy erupted over Rio Tinto's tax exemptions and debt burdens placed on the Mongolian state share. [2]`
    },
    {
      id: 'mongolia-modern-present-third-neighbor',
      title: '3. Present: Resource Diplomacy & Ger Settlement Inequality',
      period: 'Present',
      categoryTag: 'policies',
      summary: 'Khürelsükh presidency; Chinese mineral exports; addressing Ulaanbaatar winter air pollution.',
      details: `Today, Mongolia exports 80%+ of its copper and coal to China. However, extreme winter climate events (*dzud*) routinely wipe out private livestock, driving displaced herder families into suburban ger districts surrounding Ulaanbaatar. [1][3]`
    }
  ],

  sources: [
    {
      id: 1,
      label: 'From Socialism to Capitalism: The 1990 Democratic Transition and IMF Shock Therapy in Mongolia',
      publisher: 'Routledge Asian Studies Archive',
      year: '1996',
      excerpt: 'Comprehensive analysis of 1992 constitution, livestock privatization, and veterinary decline.'
    },
    {
      id: 2,
      label: 'Rio Tinto and the Oyu Tolgoi Mine: Resource Imperialism and Sovereign Debt in Mongolia',
      publisher: 'Oxford University Press',
      year: '2016',
      excerpt: 'Detailed investigation of the 2009 Oyu Tolgoi contract, foreign profit repatriation, and state debt.'
    },
    {
      id: 3,
      label: 'Urbanization, Ger Districts, and Social Inequality in Modern Ulaanbaatar',
      publisher: 'Asian Development Bank Research Report',
      year: '2020',
      excerpt: 'Statistical study of rural-urban displacement, ger settlement expansion, and infrastructure needs.'
    }
  ]
};
