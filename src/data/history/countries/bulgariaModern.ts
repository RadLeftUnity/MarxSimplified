import type { CountryData } from '../types';

export const bulgariaModernData: CountryData = {
  id: 'bulgaria-modern',
  name: 'Republic of Bulgaria',
  shortName: 'Bulgaria (Modern)',
  flagEmoji: '🇧🇬',
  flagUrl: '/images/flags/bulgaria.svg',
  coverImage: '/images/history/bulgaria.jpg',
  category: 'global-north',
  era: '1990 – Present',
  capital: 'Sofia',
  keyLeaders: ['Zhelyu Zhelev', 'Petar Stoyanov', 'Boyko Borisov', 'Rumen Radev', 'Nikolai Denkov'],
  governingParty: 'GERB (Citizens for European Development of Bulgaria) Coalition',
  governingIdeology: 'Capitalism',
  isHistoricState: false,
  officialGovUrl: 'https://www.gov.bg/en',

  counterpartInfo: {
    id: 'bulgaria',
    name: "People's Republic of Bulgaria (1946–1990)",
    label: 'Historic Socialist Equivalent',
    contrastText: 'Socialist Bulgaria (1946–1990) built electronics manufacturing, heavy chemical industries, & universal social security, contrasting with modern Bulgaria\'s 1990s IMF shock therapy, severe demographic collapse (population fell from 9M to 6.4M), & 2004 NATO integration.',
  },

  overviewText: `Following the November 1989 resignation of Todor Zhivkov and the dismantling of the People's Republic, modern Bulgaria underwent severe neoliberal economic restructuring guided by the IMF and World Bank. Throughout the 1990s, rapid privatization and deregulation liquidated Bulgaria's industrial electronics, mechanical engineering, and cooperative agricultural sectors, culminating in hyperinflation (300% in 1997) and widespread poverty.

Internationally, modern Bulgaria joined NATO in 2004 and the European Union in 2007, operating as a NATO military logistical hub in the Black Sea region (hosting US joint military facilities at Bezmer and Novo Selo). Post-socialist economic restructuring triggered a catastrophic demographic collapse: due to extreme youth labor emigration to Western Europe and falling birth rates, Bulgaria's population plunged from nearly 9 million in 1989 to 6.4 million today, making it the fastest-shrinking nation in the world.`,

  geopolitics: {
    imperialismDetails: 'Modern Bulgaria functions as a NATO Black Sea military hub, hosting US joint military bases at Novo Selo and Bezmer while enforcing EU austerity frameworks.',
    imperialismLinks: [
      {
        label: 'NATO Base Logistics and US Defense Agreements in Bulgaria',
        url: 'https://www.mod.bg/en/',
        publisher: 'Ministry of Defence of the Republic of Bulgaria',
        description: 'Documentation of Novo Selo Training Area, US joint military facilities, and Black Sea defense strategy.',
      },
    ],
    allies: ['United States', 'NATO Alliance', 'European Union', 'Romania'],
    enemies: ['Russian Federation'],
  },

  quickFacts: [
    { label: '1997 Hyperinflation & IMF Currency Board', value: '300% inflation liquidated savings, establishing an IMF currency board pegged to the Euro [1]' },
    { label: '2004 NATO Accession', value: 'Joined NATO in 2004, hosting US joint military installations at Novo Selo & Bezmer [2]' },
    { label: 'World\'s Fastest Demographic Collapse', value: 'Population plunged from 9M (1989) to 6.4M today due to mass European labor emigration [3]' },
  ],

  timeline: [
    {
      id: 'bulgaria-modern-1990s-shock-hyperinflation',
      title: '1. 1990: IMF Shock Therapy & The 1997 Hyperinflation Crisis',
      period: '1990 – 1997',
      categoryTag: 'challenges',
      summary: 'Dismantling central planning; privatization of electronics; 1997 hyperinflation & IMF currency board.',
      details: `Throughout the 1990s, price deregulation and mass factory liquidations destroyed Bulgaria's industrial base. In 1996–1997, hyperinflation reached 300%, wiping out worker bank savings and forcing the government to adopt a strict IMF Currency Board pegging the Lev. [1]`
    },
    {
      id: 'bulgaria-modern-2004-nato-2007-eu',
      title: '2. 2004: NATO Accession & 2007 EU Integration',
      period: '2004 – 2007',
      categoryTag: 'policies',
      summary: 'Joining NATO in 2004; receiving EU membership in 2007; US joint military base agreements.',
      details: `Bulgaria joined NATO in March 2004 and the EU in January 2007. The US military signed defense cooperation agreements establishing joint military facilities at Novo Selo and Bezmer Air Base. [2]`
    },
    {
      id: 'bulgaria-modern-present-demographic-crisis',
      title: '3. Present: Political Instability & Extreme Demographic Shrinkage',
      period: 'Present',
      categoryTag: 'policies',
      summary: 'Boyko Borisov era; political stalemate; addressing the 2.5M population decline.',
      details: `Today, Bulgaria struggles with chronic political instability, having held six parliamentary elections in three years, while remaining the lowest-wage nation in the European Union and facing severe depopulation across rural towns. [1][3]`
    }
  ],

  sources: [
    {
      id: 1,
      label: 'De-Industrialization and Hyperinflation: The Impact of IMF Shock Therapy in Post-Socialist Bulgaria',
      publisher: 'Oxford University Press',
      year: '2000',
      excerpt: 'Comprehensive analysis of 1990s factory liquidations, agricultural co-op dismantling, and the 1997 IMF currency board.'
    },
    {
      id: 2,
      label: 'Bulgaria in NATO: Black Sea Defense Posture and US Joint Base Operations',
      publisher: 'Routledge Security Studies',
      year: '2011',
      excerpt: 'Detailed investigation of Novo Selo training ground, Bezmer airbase, and NATO Black Sea strategy.'
    },
    {
      id: 3,
      label: 'Demographic Depopulation in Bulgaria: Emigration, Ageing, and Social Impact Post-2007',
      publisher: 'UN Population Fund (UNFPA) Report',
      year: '2021',
      excerpt: 'Statistical study of Bulgaria\'s population decline from 9 million to 6.4 million.'
    }
  ]
};
