import type { CountryData } from '../types';

export const romaniaModernData: CountryData = {
  id: 'romania-modern',
  name: 'Romania',
  shortName: 'Romania (Modern)',
  flagEmoji: '🇷🇴',
  flagUrl: '/images/flags/romania.svg',
  coverImage: '/images/history/romania.jpg',
  category: 'global-north',
  era: '1989 – Present',
  capital: 'Bucharest',
  keyLeaders: ['Ion Iliescu', 'Emil Constantinescu', 'Traian Băsescu', 'Klaus Iohannis'],
  governingParty: 'Social Democratic Party (PSD) / National Liberal Party (PNL)',
  governingIdeology: 'Capitalism',
  isHistoricState: false,
  officialGovUrl: 'https://www.gov.ro/en',

  counterpartInfo: {
    id: 'romania',
    name: 'Socialist Republic of Romania (1947–1989)',
    label: 'Historic Socialist Equivalent',
    contrastText: 'Socialist Romania (1947–1989) built heavy petrochemical refineries, Dacia manufacturing, & zero foreign debt, whereas modern Romania underwent 1990s privatization, joined NATO in 2004, & experienced massive labor emigration (over 4 million workers).',
  },

  overviewText: `Following the December 1989 revolution and the overthrow of the Socialist Republic, modern Romania underwent profound political and economic restructuring under the National Salvation Front (FSN) and subsequent governments. Guided by IMF structural adjustment programs throughout the 1990s, the state privatized state industrial enterprises, deregulated price controls, and closed unprofitable mines, resulting in high inflation and economic dislocation.

Internationally, modern Romania joined NATO in 2004 and the European Union in 2007, operating as a key US military strategic base in the Black Sea region (hosting US naval bases at Mihail Kogălniceanu and Deveselu Aegis Ashore missile site). While foreign investment expanded automobile manufacturing (Dacia acquired by Renault), post-socialist economic restructuring triggered the largest peaceful labor emigration in modern European history, with over 4 million Romanians moving to Western Europe for employment.`,

  geopolitics: {
    imperialismDetails: 'Modern Romania serves as a key NATO Black Sea military hub, hosting permanent US military bases, Deveselu missile installations, and EU agricultural supply chains.',
    imperialismLinks: [
      {
        label: 'NATO Strategic Base Operations and US Defense Agreements in Romania',
        url: 'https://www.mapn.ro/en/',
        publisher: 'Romanian Ministry of National Defence',
        description: 'Documentation of Deveselu missile defense site, Mihail Kogălniceanu airbase, and NATO Black Sea missions.',
      },
    ],
    allies: ['United States', 'NATO Alliance', 'European Union', 'Moldova'],
    enemies: ['Russian Federation'],
  },

  quickFacts: [
    { label: 'Post-1990 IMF Restructuring', value: 'Privatized state industries, closing mines & chemical complexes during 1990s [1]' },
    { label: '2004 NATO Accession', value: 'Major US Black Sea military hub hosting Deveselu Aegis Ashore missile defense site [2]' },
    { label: 'Mass Labor Emigration', value: 'Over 4 million citizens (20% of population) emigrated to Western Europe post-2007 [3]' },
  ],

  timeline: [
    {
      id: 'romania-modern-1990s-transition',
      title: '1. 1990: FSN Rule & IMF Economic De-Industrialization',
      period: '1990 – 1996',
      categoryTag: 'policies',
      summary: 'Ion Iliescu leadership; price deregulation; restructuring state heavy industry under IMF guidelines.',
      details: `During the 1990s, the National Salvation Front (FSN) led by Ion Iliescu gradually deregulated prices and began privatizing state property. Mining closures in the Jiu Valley sparked massive worker protests (Mineriads). [1]`
    },
    {
      id: 'romania-modern-nato-eu-entry',
      title: '2. 2004: NATO Accession & 2007 EU Membership',
      period: '2004 – 2007',
      categoryTag: 'policies',
      summary: 'Joining NATO in 2004; EU accession in 2007; US military base construction.',
      details: `Romania officially joined NATO in March 2004 and the EU in January 2007. The US military built major base infrastructure at Mihail Kogălniceanu near the Black Sea port of Constanța. [2]`
    },
    {
      id: 'romania-modern-present-emigration',
      title: '3. Present: Black Sea Military Hub & Massive Emigration',
      period: 'Present',
      categoryTag: 'policies',
      summary: 'Klaus Iohannis presidency; hosting NATO installations; addressing massive skilled labor brain drain.',
      details: `Today, Romania serves as a central NATO eastern flank outpost. Dacia manufacturing (under Renault ownership) remains a primary exporter, but rural areas face depopulation due to 4+ million worker emigrations to Italy, Spain, and Germany. [1][3]`
    }
  ],

  sources: [
    {
      id: 1,
      label: 'The Political Economy of Post-Communist Romania: Privatization, Inflation, and IMF Restructuring',
      publisher: 'Stanford University Press',
      year: '2001',
      excerpt: 'Comprehensive study of FSN policies, Jiu Valley mineriads, and enterprise sales.'
    },
    {
      id: 2,
      label: 'Romania in NATO: Black Sea Security Strategy and US Naval Base Agreements',
      publisher: 'Routledge Defense Studies',
      year: '2010',
      excerpt: 'Detailed investigation of Deveselu missile site, NATO airbases, and Black Sea military posture.'
    },
    {
      id: 3,
      label: 'The Romanian Diaspora: Economic Migration, Remittances, and Demographic Decline',
      publisher: 'Oxford University Press',
      year: '2019',
      excerpt: 'Statistical study of 4 million worker emigrations and post-2007 EU labor mobility.'
    }
  ]
};
