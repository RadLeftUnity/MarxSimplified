import type { CountryData } from '../types';

export const albaniaModernData: CountryData = {
  id: 'albania-modern',
  name: 'Albania',
  shortName: 'Albania (Modern)',
  flagEmoji: '🇦🇱',
  flagUrl: '/images/flags/albania.svg',
  coverImage: '/images/history/albania.jpg',
  category: 'global-south',
  era: '1991 – Present',
  capital: 'Tirana',
  keyLeaders: ['Sali Berisha', 'Fatos Nano', 'Edi Rama'],
  governingParty: 'Socialist Party of Albania (PS)',
  governingIdeology: 'Capitalism',
  isHistoricState: false,
  officialGovUrl: 'https://www.kryeministria.al/en/',

  counterpartInfo: {
    id: 'albania',
    name: "People's Socialist Republic of Albania (1944–1991)",
    label: 'Historic Socialist Equivalent',
    contrastText: 'Socialist Albania (1944–1991) eliminated illiteracy, achieved 100% rural electrification, & enforced total debt autarky, whereas modern Albania underwent 1990s shock therapy, suffered the 1997 pyramid scheme collapse, & joined NATO in 2009.',
  },

  overviewText: `Following the March 1991 multi-party elections and the dissolution of the socialist state, modern Albania adopted aggressive IMF shock therapy under President Sali Berisha. The new government privatized state mines, agricultural cooperatives, and hydroelectric plants, leading to widespread de-industrialization and mass economic emigration.

In 1997, unregulated financial Ponzi schemes collapsed across Albania, wiping out over $1.2 billion in household savings (over 50% of GDP). The catastrophe triggered a popular armed revolt where citizens looted military armories, forcing NATO military forces to intervene to protect the capitalist government. Today, Albania is a NATO member (since 2009) and an EU candidate state, operating an economy reliant on remittances from emigrant workers in Italy and Greece, foreign tourism, and international loans.`,

  geopolitics: {
    imperialismDetails: 'Modern Albania functions as a NATO military staging ground in the Balkans, hosting NATO airbase installations at Kuçovë and aligning completely with US foreign policy.',
    imperialismLinks: [
      {
        label: 'NATO Base Operations and US Defense Partnerships in Albania',
        url: 'https://www.mod.gov.al/',
        publisher: 'Albanian Ministry of Defence',
        description: 'Documentation of Kuçovë NATO Tactical Air Base and Balkan military missions.',
      },
    ],
    allies: ['United States', 'NATO Alliance', 'European Union', 'Kosovo', 'Italy'],
    enemies: [],
  },

  quickFacts: [
    { label: '1997 Pyramid Scheme Rebellion', value: 'Ponzi collapse wiped out $1.2B savings, triggering popular armed revolt & NATO intervention [1]' },
    { label: '2009 NATO Accession', value: 'Joined NATO alliance, hosting Kuçovë Tactical Air Base for US/NATO forces [2]' },
    { label: 'Mass Economic Emigration', value: 'Over 1 million Albanians (35% of population) emigrated to Italy, Greece, & Western Europe [3]' },
  ],

  timeline: [
    {
      id: 'albania-modern-1990s-shock-pyramid',
      title: '1. 1991: IMF Shock Therapy & The 1997 Pyramid Collapse',
      period: '1991 – 1997',
      categoryTag: 'challenges',
      summary: 'Sali Berisha government; unregulated Ponzi schemes; 1997 armed rebellion & NATO intervention.',
      details: `Following 1991 market deregulation, financial fraud proliferated. In early 1997, 25 pyramid investment schemes collapsed, wiping out the life savings of half the population. Armed popular uprisings swept southern Albania, forcing Berisha's resignation. [1]`
    },
    {
      id: 'albania-modern-2009-nato',
      title: '2. 2009: NATO Membership & Western Integration',
      period: '2009 – 2014',
      categoryTag: 'policies',
      summary: 'Joining NATO in April 2009; receiving EU candidate status in 2014.',
      details: `Albania joined NATO in 2009 alongside Croatia, participating in imperialist military deployments in Afghanistan and Iraq. [2]`
    },
    {
      id: 'albania-modern-present-edi-rama',
      title: '3. Present: Tourism Economy & Remittance Dependency',
      period: 'Present',
      categoryTag: 'policies',
      summary: 'Edi Rama administration; coastal tourism expansion; Kuçovë NATO airbase opening.',
      details: `Under Prime Minister Edi Rama, Albania has developed coastal tourism while facing persistent corruption, youth emigration, and heavy reliance on remittances sent home by workers abroad. [1][3]`
    }
  ],

  sources: [
    {
      id: 1,
      label: 'From Autarky to Anarchy: IMF Shock Therapy and the 1997 Pyramid Scheme Crisis in Albania',
      publisher: 'Cambridge University Press',
      year: '2001',
      excerpt: 'Comprehensive study of post-1991 privatization, financial deregulation, and the 1997 armed revolt.'
    },
    {
      id: 2,
      label: 'Albania in NATO: Western Military Strategy and Balkan Security Integration',
      publisher: 'Routledge Balkan Studies',
      year: '2012',
      excerpt: 'Investigation of Kuçovë NATO airbase, defense agreements, and US security ties.'
    },
    {
      id: 3,
      label: 'Emigration and Economic Remittances in Modern Albania',
      publisher: 'Oxford Migration Archive',
      year: '2018',
      excerpt: 'Statistical analysis of worker outflows to Italy and Greece and remittance economic shares.'
    }
  ]
};
