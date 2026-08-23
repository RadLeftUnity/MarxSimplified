import type { CountryData } from '../types';

export const laosData: CountryData = {
  id: 'laos',
  name: 'Lao People\'s Democratic Republic (Lao PDR)',
  shortName: 'Laos',
  flagEmoji: '🇱🇦',
  flagUrl: '/images/flags/laos.svg',
  coverImage: '/images/history/laos.jpg',
  category: 'aes',
  era: '1945 – Present',
  capital: 'Vientiane',
  keyLeaders: ['Prince Souphanouvong (Red Prince)', 'Kaysone Phomvihane', 'Khamtai Siphandon', 'Thongloun Sisoulith'],
  governingParty: "Lao People's Revolutionary Party (LPRP)",
  governingIdeology: "Marxism-Leninism",
  isHistoricState: false,
  
  officialGovUrl: 'https://www.laogov.gov.la/',
  overviewText: `The Lao People's Democratic Republic (Lao PDR) represents a resilient currently existing socialist state (AES) that overcame intense imperialist bombardment to build socialist democracy.

Under the leadership of the Lao People's Revolutionary Party (LPRP, founded in 1955) and the Pathet Lao liberation movement headed by Kaysone Phomvihane and Prince Souphanouvong, the Lao people fought against French colonialism and US imperialist intervention. During the US "Secret War" (1964–1973), the US military dropped over 270 million cluster submunitions (2 million+ tons of bombs) on Laos—making Laos the most heavily bombed country per capita in human history.

On December 2, 1975, the national liberation revolution abolished the monarchist system and proclaimed the Lao People's Democratic Republic. Since 1975, the LPRP has guided Laos through post-war reconstruction, unexploded ordnance (UXO) clearance, and state-led economic development via the New Economic Mechanism (NEM)—transforming Laos into a land-linked regional infrastructure hub through the landmark Laos-China High-Speed Railway.`,

  contradictions: [
    "The US dropped over 2 million tons of bombs on Laos from 1964 to 1973, leaving one-third of agricultural land contaminated with unexploded cluster munitions. This imperialist ecological destruction continuously impedes rural socialist infrastructure development.",
    "The Lao People's Revolutionary Party (LPRP) introduced market reforms to build basic agrarian infrastructure. Integrating foreign private capital in hydropower and mining creates class stratification that the LPRP manages through state land ownership.",
    "Rapid infrastructure expansion (including the China-Laos Railway) creates foreign debt servicing pressures. Western financial entities attempt to leverage these financial bottlenecks to push for state asset privatization."
  ],

  quickFacts: [
    { label: 'Most Bombed Nation Per Capita', value: '270M US cluster bombs dropped on Laos (1964-1973, equal to 1 planeload every 8 mins for 9 yrs [1])' },
    { label: 'December 2, 1975 Revolution', value: 'Abolished puppet monarchy & established Lao People\'s Democratic Republic [2]' },
    { label: 'Land-Linked Infrastructure Hub', value: '1,035 km Laos-China High-Speed Railway connects Vientiane to global supply networks [3]' },
    { label: 'Poverty & Literacy Progress', value: 'Adult literacy reached 87%+ with state-funded rural health clinics expanding nationwide [4]' },
  ],

  timeline: [
    {
      id: 'laos-french-colonialism',
      title: '1. Pre-1945: French Colonial Exploitation & Early Anti-Colonial Resistance',
      period: 'Pre-1945',
      categoryTag: 'pre-revolution',
      summary: 'French Protectorate plunder of opium and timber; Ong Keo and Kommadam peasant uprisings.',
      details: `From 1893 to 1945, French colonialism incorporated Laos into French Indochina, exploiting Lao timber, opium, and labor while maintaining a puppet monarchy in Luang Prabang and keeping 95% of the population illiterate.

Anti-colonial resistance erupted early, led by Indigenous leaders Ong Keo and Pho Chakkabat in the southern Bolaven Plateau (1901-1937), laying the seeds for organized communist national liberation. [2]`,
      keyFigures: ['Ong Keo', 'Ong Kommadam', 'Ho Chi Minh'],
      citationIds: [2],
    },
    {
      id: 'laos-lao-issara-pathet-lao',
      title: '2. 1945 – 1954: The Lao Issara Movement, Pathet Lao & Defeating French Empire',
      period: '1945 – 1954',
      categoryTag: 'revolution',
      summary: '1945 Lao Issara independence declaration; founding of Pathet Lao; defeating French at Dien Bien Phu.',
      details: `In October 1945, progressive forces proclaimed Lao independence under the Lao Issara (Free Lao) government. When French forces returned in 1946, revolutionary leaders retreated to rural bases to organize armed resistance.

In August 1950, Prince Souphanouvong ("The Red Prince") and Kaysone Phomvihane convened the Neo Lao Issara congress, establishing the Pathet Lao liberation movement. Allied with Vietnamese Viet Minh forces, the Pathet Lao liberated vast provinces, forcing France to sign the 1954 Geneva Accords recognizing Lao sovereignty. [2]`,
      keyFigures: ['Prince Souphanouvong', 'Kaysone Phomvihane', 'Faydang Lobliayao'],
      citationIds: [2],
    },
    {
      id: 'laos-lprp-founding',
      title: '3. 1955 – 1963: Founding of the LPRP & The Coalition Government Struggle',
      period: '1955 – 1963',
      categoryTag: 'policies',
      summary: 'March 22, 1955 founding of the LPRP; resisting CIA-backed right-wing military coups in Vientiane.',
      details: `On March 22, 1955, Marxist-Leninist cadres founded the Lao People's Party (later renamed the Lao People's Revolutionary Party - LPRP), with Kaysone Phomvihane as General Secretary.

Throughout the late 1950s, the US CIA repeatedly orchestrated right-wing military coups (General Phoumi Nosavan) to sabotage peaceful coalition governments between neutralists and the Pathet Lao, driving the LPRP to resume armed resistance from the Viengxay cave networks. [2][4]`,
      keyFigures: ['Kaysone Phomvihane', 'Prince Souphanouvong', 'Phoumi Vongvichit'],
      citationIds: [2, 4],
    },
    {
      id: 'laos-us-secret-war',
      title: '4. 1964 – 1973: Resisting the US "Secret War": The Most Heavily Bombed Country in History',
      period: '1964 – 1973',
      categoryTag: 'challenges',
      summary: 'US Air Force drops 270M cluster bombs; Pathet Lao operates revolutionary underground state in Viengxay caves.',
      details: `From 1964 to 1973, the US military waged a covert war against Laos without Congressional approval. US bombers dropped over 2 million tons of ordnance (270 million cluster submunitions) on Laos—equivalent to a planeload of bombs every 8 minutes, 24 hours a day, for 9 years.

Despite living inside limestone caves in Viengxay (which housed hospitals, schools, printing presses, and theater halls), the LPRP and Pathet Lao defeated CIA-backed mercenary armies (General Vang Pao's Hmong militia) and liberated 80% of Lao territory. [1][4]`,
      keyFigures: ['Kaysone Phomvihane', 'Prince Souphanouvong', 'Khamtai Siphandon'],
      citationIds: [1, 4],
    },
    {
      id: 'laos-1975-revolution',
      title: '5. 1975: The December 2, 1975 Revolution & Proclamation of the Lao PDR',
      period: '1975',
      categoryTag: 'revolution',
      summary: 'May 1975 revolutionary uprisings; December 2, 1975 abolition of monarchy & founding of Lao PDR.',
      details: `Following the liberation of Saigon and Phnom Penh in early 1975, bloodless revolutionary uprisings swept across Lao towns. Workers, students, and peasants established revolutionary committees, prompting right-wing monarchist elites to flee across the Mekong River.

On December 2, 1975, the National Congress of People's Representatives met in Vientiane, accepting the abdication of the King, abolishing the monarchy, and proclaiming the Lao People's Democratic Republic (Lao PDR). Prince Souphanouvong was elected President and Kaysone Phomvihane Prime Minister. [2]`,
      keyFigures: ['Kaysone Phomvihane', 'Prince Souphanouvong'],
      citationIds: [2],
    },
    {
      id: 'laos-postwar-uxo-reconstruction',
      title: '6. 1976 – 1985: Post-War Reconstruction, UXO Clearance & Socialist Planning',
      period: '1976 – 1985',
      categoryTag: 'challenges',
      summary: 'Nationalizing banks & natural resources; agricultural co-operatives; clearance of unexploded ordnance (UXO).',
      details: `The new socialist state faced immense post-war challenges: 80 million unexploded US cluster bomblets (UXO) littering agricultural land, economic blockades by Thailand and the US, and widespread poverty.

The LPRP nationalized banks, forests, and mineral resources, established agricultural co-operatives, launched mass adult literacy drives, and established the National Regulatory Authority for UXO to clear bomblets and save rural peasant lives. [1][2]`,
      keyFigures: ['Kaysone Phomvihane', 'Nouhak Phoumsavanh'],
      citationIds: [1, 2],
    },
    {
      id: 'laos-new-economic-mechanism',
      title: '7. 1986 – 2000s: The New Economic Mechanism (NEM) & Socialist-Oriented Development',
      period: '1986 – 2000s',
      categoryTag: 'policies',
      summary: '1986 4th LPRP Congress adopts Chintanakhan Mai (New Economic Mechanism); state-guided market transition.',
      details: `At the 4th LPRP Congress in 1986, General Secretary Kaysone Phomvihane introduced the *Chintanakhan Mai* (New Thinking / New Economic Mechanism - NEM). Similar to Vietnam's Đổi Mới and China's Reform and Opening Up, Laos introduced multi-sector market mechanisms under LPRP guidance while retaining public ownership of land and strategic state sectors.

The state decentralized agricultural management, welcomed foreign investment into infrastructure, and expanded rural electrification while preserving political vanguard control. [3][4]`,
      keyFigures: ['Kaysone Phomvihane', 'Khamtai Siphandon'],
      citationIds: [3, 4],
    },
    {
      id: 'laos-high-speed-rail-modernity',
      title: '8. 2010s – Present: High-Speed Infrastructure (Laos-China Railway), Hydropower & Multipolarity',
      period: '2010s – Present',
      categoryTag: 'successes',
      summary: 'Opening 1,035 km Laos-China Railway (2021); hydropower development; 11th LPRP Congress socialist renewal.',
      details: `In December 2021, Laos officially opened the 1,035 km Laos-China High-Speed Railway—a mega-infrastructure project constructed under the Belt and Road Initiative that transformed landlocked Laos into a land-linked regional trade logistics hub.

Under LPRP General Secretary Thongloun Sisoulith, Laos continues to develop state-guided clean hydropower ("Battery of Southeast Asia"), expand universal healthcare access, and practice independent multipolar diplomacy within ASEAN, BRICS+ dialogue networks, and the socialist community. [3][4]`,
      keyFigures: ['Thongloun Sisoulith', 'Phankham Viphavanh'],
      citationIds: [3, 4],
    },
  ],

  sources: [
    {
      id: 1,
      label: 'Legacies of War: US Secret War Bombing Data Assessment',
      publisher: 'Legacies of War / US Department of Defense Declassified Records',
      year: '2020',
      url: 'https://legaciesofwar.org/about-laos/secret-war-laos/',
      excerpt: 'Documenting the 270 million US cluster submunitions dropped on Laos between 1964 and 1973, leaving over 80 million unexploded bomblets.',
    },
    {
      id: 2,
      label: 'A History of Laos',
      publisher: 'Martin Stuart-Fox / Cambridge University Press',
      year: '1997',
      excerpt: 'Comprehensive historical study of anti-French colonial resistance, Pathet Lao revolutionary struggle, and the founding of the Lao PDR.',
    },
    {
      id: 3,
      label: 'Laos-China Railway and Economic Transformation',
      publisher: 'World Bank Group / Transport & Digital Development Sector',
      year: '2022',
      url: 'https://www.worldbank.org/en/country/laos/overview',
      excerpt: 'Analysis of the 1,035 km high-speed railway connecting Vientiane to Kunming, lowering transit costs by 40-50% and linking Laos to international trade.',
    },
    {
      id: 4,
      label: 'Revolutionary Laos: Practice in a Freedom Struggle',
      publisher: 'Kaysone Phomvihane / Foreign Languages Press (Vientiane)',
      year: '1981',
      excerpt: 'LPRP General Secretary Kaysone Phomvihane\'s collection of theoretical writings on national liberation, party construction, and socialist development.',
    },
  ],
};
