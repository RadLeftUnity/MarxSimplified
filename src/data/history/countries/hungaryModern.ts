import type { CountryData } from '../types';

export const hungaryModernData: CountryData = {
  id: 'hungary-modern',
  name: 'Republic of Hungary',
  shortName: 'Hungary (Modern)',
  flagEmoji: '🇭🇺',
  flagUrl: '/images/flags/hungary.svg',
  coverImage: '/images/history/hungary.jpg',
  category: 'global-north',
  era: '1989 – Present',
  capital: 'Budapest',
  keyLeaders: ['József Antall', 'Gyula Horn', 'Viktor Orbán', 'Ferenc Gyurcsány'],
  governingParty: 'Fidesz (Christian Democratic People\'s Party)',
  governingIdeology: 'Capitalism',
  isHistoricState: false,
  officialGovUrl: 'https://kormany.hu/en',

  counterpartInfo: {
    id: 'hungary',
    name: "Hungarian People's Republic (1949–1989)",
    label: 'Historic Socialist Equivalent',
    contrastText: 'Socialist Hungary (1949–1989) prioritized consumer food availability, Ikarus bus manufacturing, & social housing, whereas modern Hungary underwent 1990s multinational privatization, joined NATO in 1999, & experienced extreme right-wing oligarchic consolidation.',
  },

  overviewText: `Following the 1989 political transition and border opening with Austria, the modern Republic of Hungary underwent rapid capitalist deregulation and privatization under IMF guidance. State manufacturing powerhouses (including the world-famous Ikarus bus factory and Csepel industrial works) were liquidated or sold off to Western European conglomerates, resulting in a dramatic loss of industrial sovereignty.

Internationally, modern Hungary joined NATO in 1999 and the European Union in 2004. Under Prime Minister Viktor Orbán and the ruling Fidesz party since 2010, Hungary has established an illiberal right-wing state model combining flat-tax neoliberal economic incentives for foreign auto plants (Audi, BMW, BYD) with conservative cultural nationalism, while experiencing substantial youth labor emigration to Western Europe.`,

  geopolitics: {
    imperialismDetails: 'Modern Hungary functions as a specialized manufacturing assembly base for German and international automobile capital while maintaining NATO membership.',
    imperialismLinks: [
      {
        label: 'Hungarian Economic Strategy and Foreign Direct Investment Analysis',
        url: 'https://kormany.hu/en',
        publisher: 'Hungarian Ministry of Foreign Affairs and Trade',
        description: 'Documentation of industrial investments, automotive supply chains, and tax incentives.',
      },
    ],
    allies: ['NATO Alliance', 'European Union', 'China (BRI Trade)'],
    enemies: [],
  },

  quickFacts: [
    { label: 'Post-1990 De-Industrialization', value: 'Privatized state industries, liquidating Ikarus bus manufacturing & Csepel steel [1]' },
    { label: '1999 NATO Accession', value: 'Joined NATO in 1999, integrating into US military alliance structures [2]' },
    { label: 'Fidesz Oligarchic Model', value: 'Flat income tax (15%) & multinational corporate tax cuts under Viktor Orbán [3]' },
  ],

  timeline: [
    {
      id: 'hungary-modern-1990s-privatization',
      title: '1. 1990: Capitalist Restoration & Bank Privatization',
      period: '1990 – 1998',
      categoryTag: 'policies',
      summary: 'IMF structural adjustment; privatization of banking and Ikarus bus manufacturing.',
      details: `Throughout the 1990s, successive governments privatized 80% of state-owned enterprises. German, Austrian, and French multinational corporations purchased public utility networks and retail chains, while thousands of industrial workers faced factory closures. [1]`
    },
    {
      id: 'hungary-modern-nato-eu',
      title: '2. 1999: NATO Accession & 2004 EU Integration',
      period: '1999 – 2004',
      categoryTag: 'policies',
      summary: 'Joining NATO in 1999; EU accession in 2004.',
      details: `Hungary joined NATO in March 1999, providing airbase logistics for NATO bombing campaigns in the Balkans. In May 2004, Hungary entered the European Union, facilitating foreign investment in automotive assembly plants. [2]`
    },
    {
      id: 'hungary-modern-orban-era',
      title: '3. Present: Viktor Orbán Era & Automotive Subcontracting',
      period: 'Present',
      categoryTag: 'policies',
      summary: 'Fidesz governance; flat tax policies; foreign EV battery factory investments.',
      details: `Under Viktor Orbán, Hungary has implemented a 15% flat tax and 9% corporate tax rate to attract German automakers (Audi, Mercedes) and Chinese electric vehicle battery manufacturers (CATL, BYD), while facing domestic housing inflation and healthcare underfunding. [3]`
    }
  ],

  sources: [
    {
      id: 1,
      label: 'Privatization and Foreign Investment in Post-Socialist Hungary',
      publisher: 'Oxford University Press',
      year: '1999',
      excerpt: 'Statistical study of post-1990 enterprise sales, Ikarus closure, and bank privatizations.'
    },
    {
      id: 2,
      label: 'Hungary in NATO: Military Accession and Atlanticist Security Policy',
      publisher: 'Central European University Press',
      year: '2003',
      excerpt: 'Detailed investigation of Hungarian NATO accession and Balkan military logistics.'
    },
    {
      id: 3,
      label: 'The Fidesz Economic Model: Flat Taxes, Subcontracting, and Neoliberal Nationalism',
      publisher: 'Routledge Political Economy',
      year: '2018',
      excerpt: 'Analysis of Orbán\'s tax policies, multinational auto plant incentives, and domestic labor markets.'
    }
  ]
};
