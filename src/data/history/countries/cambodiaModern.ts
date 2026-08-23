import type { CountryData } from '../types';

export const cambodiaModernData: CountryData = {
  id: 'cambodia-modern',
  name: 'Kingdom of Cambodia (Modern Post-PRK State)',
  shortName: 'Cambodia (Modern)',
  flagEmoji: '🇰🇭',
  flagUrl: '/images/flags/cambodia.svg',
  coverImage: '/images/history/cambodia.jpg',
  category: 'global-south',
  era: '1993 – Present',
  capital: 'Phnom Penh',
  keyLeaders: ['Hun Sen', 'Norodom Sihanouk', 'Norodom Sihamoni', 'Hun Manet'],
  governingParty: 'Cambodian People\'s Party (CPP)',
  governingIdeology: 'Capitalism',
  isHistoricState: false,
  officialGovUrl: 'https://pressocm.gov.kh/en/',

  counterpartInfo: {
    id: 'cambodia',
    name: "People's Republic of Kampuchea (1979–1991)",
    label: 'Historic Socialist Equivalent',
    contrastText: 'Socialist PRK (1979–1991) liberated Phnom Penh from Pol Pot\'s genocide, rebuilt currency/schools, & organized solidarity co-ops despite a Western UN embargo, whereas modern Cambodia adopted a constitutional monarchy in 1993, expanding export garment factories & Chinese BRI infrastructure.',
  },

  overviewText: `Following the 1991 Paris Peace Accords, the temporary UNTAC administration, and the May 1993 national elections, Cambodia adopted a constitutional monarchy under King Norodom Sihanouk and Prime Minister Hun Sen (who led the country for 38 years from 1985 to 2023 before transitioning leadership to his son Hun Manet).

Modern Cambodia transformed its economy into a free-market export platform centered on garment and footwear manufacturing, international tourism (Angkor Wat), and construction. In recent decades, Cambodia has established a strategic comprehensive partnership with China under the Belt and Road Initiative (BRI), developing the Phnom Penh-Sihanoukville Expressway, the Ream Naval Base modernization, and special economic zones. While modern economic growth expanded urban construction, garment workers face low minimum wages and foreign corporate export dependencies.`,

  geopolitics: {
    imperialismDetails: 'Modern Cambodia maintains deep economic and infrastructure partnerships with China under the Belt and Road Initiative, resisting US diplomatic sanctions and military pressure.',
    imperialismLinks: [
      {
        label: 'Cambodian Trade and China BRI Infrastructure Agreements Report',
        url: 'https://pressocm.gov.kh/en/',
        publisher: 'Council of Ministers of Cambodia',
        description: 'Documentation of Sihanoukville SEZ, BRI expressways, and international trade.',
      },
    ],
    allies: ['China', 'Vietnam', 'Laos', 'ASEAN Nations'],
    enemies: [],
  },

  quickFacts: [
    { label: '1993 Constitutional Monarchy', value: 'UNTAC administration transitioned PRK into modern constitutional monarchy under Hun Sen [1]' },
    { label: 'Export Garment Industry', value: 'Employs 700,000+ workers in low-wage export manufacturing for Western fashion brands [2]' },
    { label: 'China BRI Strategic Base', value: 'Constructed Phnom Penh-Sihanoukville Expressway & Ream Port infrastructure with China [3]' },
  ],

  timeline: [
    {
      id: 'cambodia-modern-1993-untac-monarchy',
      title: '1. 1993: UNTAC Administration & The 1993 Constitutional Monarchy',
      period: '1991 – 1998',
      categoryTag: 'policies',
      summary: '1991 Paris Accords; UNTAC oversight; establishing constitutional monarchy under Hun Sen.',
      details: `The 1991 Paris Peace Accords established UNTAC to oversee multi-party elections in May 1993. King Norodom Sihanouk was restored to the throne, while Hun Sen's CPP shared power before consolidating governance in 1997. [1]`
    },
    {
      id: 'cambodia-modern-garment-tourism',
      title: '2. 2000: Garment Export & Tourism Growth',
      period: '2000 – 2015',
      categoryTag: 'policies',
      summary: 'Expansion of garment manufacturing for Western markets; WTO accession in 2004.',
      details: `Cambodia joined the World Trade Organization (WTO) in 2004. Garment manufacturing expanded rapidly, becoming the primary formal sector employer for young rural women. [2]`
    },
    {
      id: 'cambodia-modern-present-china-bri',
      title: '3. Present: China Strategic Partnership & Hun Manet Transition',
      period: 'Present',
      categoryTag: 'policies',
      summary: 'Hun Manet leadership; BRI expressways and port developments; ASEAN trade integration.',
      details: `In August 2023, Hun Manet succeeded his father Hun Sen as Prime Minister, continuing strong economic ties with China through BRI infrastructure and expanding ASEAN regional trade agreements. [1][3]`
    }
  ],

  sources: [
    {
      id: 1,
      label: 'The Political Economy of Modern Cambodia: From UNTAC to the Cambodian People\'s Party',
      publisher: 'Routledge Asian Studies',
      year: '2011',
      excerpt: 'Comprehensive study of post-1993 state building, CPP governance, and UNTAC transition.'
    },
    {
      id: 2,
      label: 'Garment Workers in Global Supply Chains: Labor and Neoliberal Export Growth in Cambodia',
      publisher: 'Cornell University Press',
      year: '2016',
      excerpt: 'Detailed investigation of garment export factories, low minimum wages, and worker strikes.'
    },
    {
      id: 3,
      label: 'China\'s Belt and Road Initiative in Cambodia: Infrastructure, SEZs, and Geopolitics',
      publisher: 'Singapore Institute of Southeast Asian Studies',
      year: '2021',
      excerpt: 'Statistical study of Sihanoukville SEZ, expressway construction, and Sino-Cambodian strategic ties.'
    }
  ]
};
