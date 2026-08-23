import type { CountryData } from '../types';

export const somaliaHistoricData: CountryData = {
  id: 'somalia-historic',
  name: "Somali Democratic Republic (1969–1991)",
  shortName: 'Socialist Somalia',
  flagEmoji: '🇸🇴',
  flagUrl: '/images/flags/somalia.svg',
  coverImage: '/images/history/somalia.jpg',
  category: 'aes',
  era: '1969 – 1991',
  capital: 'Mogadishu',
  keyLeaders: ['Siad Barre', 'Salaad Gabeyre Khediye', 'Jaalle Siad'],
  governingParty: "Somali Revolutionary Socialist Party (SRSP)",
  governingIdeology: "Socialism",
  isHistoricState: true,

  overviewText: `The Somali Democratic Republic (1969–1991) was a major East African socialist state established on October 21, 1969, following a bloodless revolutionary coup led by General Mohamed Siad Barre and the Supreme Revolutionary Council (SRC).

The socialist government proclaimed Scientific Socialism (Hantiwadaagga Cilmiga ku Ndhisan), nationalizing foreign banks, sugar refineries, petroleum distribution, and medical institutions. In 1974, the state launched a historic National Literacy Campaign, creating a Latin-based written Somali script and sending 30,000 students and teachers into rural nomadic communities, raising national literacy from under 5% to over 55% in two years.

During the catastrophic 1974 "Dabadheer" drought, the socialist government organized the airlift of over 100,000 starving pastoral nomads to fertile agricultural river valleys and coastal fishing cooperatives. However, the 1977 Ogaden War against revolutionary Ethiopia severely fractured regional anti-imperialist unity, leading to diplomatic isolation, Western IMF debt intervention, and eventual state collapse in 1991.`,

  contradictions: [
    "The 1977 Ogaden border war against socialist Ethiopia alienated Soviet and Cuban allies, breaking regional anti-imperialist solidarity and opening Somalia to US military alignment.",
    "Persisting clan lineage structures (qabyalad) competed with vanguard party class consciousness, which reactionary factions exploited to fracture military and administrative unity.",
    "IMF loan conditions accepted in the late 1980s forced currency devaluation and privatization, destroying public health networks and rural livestock extension services.",
    "Massive US foreign military aid provided to Siad Barre's late administration in exchange for Berbera naval base access fueled internal civil war and 1991 state collapse."
  ],

  quickFacts: [
    { label: 'Oct 21, 1969 Socialist Revolution', value: 'Supreme Revolutionary Council proclaimed Scientific Socialism [1]' },
    { label: '1974 Mass Literacy Campaign', value: 'Raised national literacy from <5% to 55%+ in 2 years using new Somali script [2]' },
    { label: '1974 Nomad Drought Resettlement', value: 'Airlifted 100,000+ drought-stricken nomads to agricultural & fishing cooperatives [3]' },
    { label: 'Nationalization of Foreign Monopolies', value: 'State control over foreign banking, sugar, oil & medicine cartels [4]' }
  ],

  timeline: [
    {
      id: 'somalia-historic-1969-revolution',
      title: '1. October 21, 1969: Scientific Socialist Revolution & Nationalizations',
      period: '1969 – 1973',
      categoryTag: 'revolution',
      summary: 'Supreme Revolutionary Council overthrew corrupt neo-colonial state; nationalized banks and refineries.',
      details: `On October 21, 1969, the Supreme Revolutionary Council led by Siad Barre seized power, ending post-independence corruption. The state adopted Scientific Socialism, nationalizing private foreign banks, insurance companies, power plants, and petroleum refineries. [1]`,
      keyFigures: ['Siad Barre', 'Salaad Gabeyre Khediye'],
      citationIds: [1]
    },
    {
      id: 'somalia-historic-literacy-drought',
      title: '2. 1974 – 1976: National Literacy Breakthrough & Dabadheer Resettlement',
      period: '1974 – 1976',
      categoryTag: 'successes',
      summary: '1974 Rural Development Campaign; airlifted 100,000 nomads during severe drought into cooperatives.',
      details: `In 1974, the government introduced a unified written Somali alphabet and deployed 30,000 student instructors across the countryside, teaching millions to read. During the 1974 Dabadheer drought, the military executed a massive airlift, resettling 100,000 nomadic pastoralists into agricultural state farms and coastal fishing communes. [2]`,
      keyFigures: ['Siad Barre', 'Somali Student Volunteers'],
      citationIds: [2]
    },
    {
      id: 'somalia-historic-ogaden-imf-collapse',
      title: '3. 1977 – 1991: Ogaden War, US Alignment, IMF Austerity & 1991 State Collapse',
      period: '1977 – 1991',
      categoryTag: 'challenges',
      summary: '1977 Ogaden War with Ethiopia; alignment with US military; IMF austerity triggers civil war.',
      details: `The 1977 Ogaden War against revolutionary Ethiopia split African socialist unity. The USSR and Cuba supported Ethiopia, leading Somalia to expel Soviet advisors and align with Washington. Severe IMF structural adjustment in the 1980s destroyed state social services, fueling armed clan rebellions and the 1991 collapse of central governance. [3]`,
      keyFigures: ['Siad Barre', 'Mengistu Haile Mariam'],
      citationIds: [3]
    }
  ],

  sources: [
    {
      id: 1,
      label: 'Somalia: Revolution from Above (Basil Davidson)',
      publisher: 'African Affairs',
      year: '1975',
      excerpt: 'The Somali literacy campaign and nomad resettlement stood as unprecedented achievements in African socialist transformation.'
    }
  ]
};
