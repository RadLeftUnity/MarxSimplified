import type { CountryData } from '../types';

export const uaeData: CountryData = {
  id: 'uae',
  name: "United Arab Emirates",
  shortName: 'UAE & Dubai',
  flagEmoji: '🇦🇪',
  flagUrl: '/images/flags/uae.svg',
  coverImage: '/images/history/uae.jpg',
  category: 'global-south',
  era: '1820 – Present',
  capital: 'Abu Dhabi (Dubai as Financial Hub)',
  keyLeaders: ['Zayed bin Sultan Al Nahyan', 'Rashid bin Saeed Al Maktoum', 'Mohammed bin Zayed (MbZ)', 'Mohammed bin Rashid Al Maktoum'],
  governingParty: "Federal Supreme Council",
  governingIdeology: "Capitalism",
  isHistoricState: false,
  
  officialGovUrl: 'https://u.ae/',
  overviewText: `The United Arab Emirates (UAE) represents a major offshore financial hub and imperialist-aligned petro-capitalist state in the Persian Gulf.

Originally governed as the British "Trucial States" protectorate to control maritime routes to India, the UAE federated in 1971 under Abu Dhabi's oil wealth and Dubai's mercantile elite. The state developed a specialized economic model: leveraging sovereign wealth (Abu Dhabi Investment Authority / ADIA managing $900B+) alongside Dubai's transformation into a tax haven, free-trade zone, and global capital-laundering sanctuary for foreign oligarchs, private equity funds, and real estate speculators.

Domestically, over 85% of the UAE's population consists of disenfranchised South Asian and African migrant workers exploited under the brutal **Kafala System**, constructing luxury mega-projects while living in segregated labor camps without trade union rights. Regionally, Abu Dhabi exercises aggressive subversion: funding Sudan's RSF paramilitary to seize gold mines, annexing Yemeni ports (Socotra, Aden) via DP World, signing the 2020 **Abraham Accords** with Israel for surveillance tech trade, and joining BRICS+ in 2024 to diversify its multipolar assets.`,

  quickFacts: [
    { label: 'Offshore Capital Haven', value: 'Dubai operates as a global tax haven, free zone & real estate laundering hub [1]' },
    { label: 'Kafala Indentured Labor', value: '85%+ of population are migrant workers stripped of labor & union rights [2]' },
    { label: 'Regional Subversion (Sudan/Yemen)', value: 'Funding RSF paramilitary in Sudan & seizing Yemeni island ports via DP World [3]' },
    { label: 'BRICS+ & Abraham Accords', value: '2020 normalization with Israel alongside January 2024 accession to BRICS+ [4]' },
  ],

  timeline: [
    {
      id: 'uae-british-trucial-states-oil-discovery',
      title: '1. 1820 – 1970: British Trucial States Protectorate & 1958 Abu Dhabi Oil Discovery',
      period: '1820 – 1970',
      categoryTag: 'pre-revolution',
      summary: '1820 British maritime treaty; Trucial States protectorate; 1958 Abu Dhabi oil discovery.',
      details: `In 1820, the British Empire enforced maritime treaties on local coastal monarchies, establishing the "Trucial States" protectorate to secure British trade routes to colonial India.

In 1958, massive petroleum reserves were discovered off Abu Dhabi (Bab and Umm Shaif fields), transforming impoverished pearl-diving ports into major oil exporters under British and French oil concessions. [1]`,
      keyFigures: ['Shakhbut bin Sultan Al Nahyan', 'Zayed bin Sultan Al Nahyan'],
      citationIds: [1],
    },
    {
      id: 'uae-1971-federation-dubai-tax-haven-model',
      title: '2. 1971 – 1999: 1971 Federation, Dubai Commercial Transformation & Offshore Free Zones',
      period: '1971 – 1999',
      categoryTag: 'successes',
      summary: 'Dec 2, 1971 UAE federation; Sheikh Rashid transforms Dubai into a free-trade offshore financial hub.',
      details: `On December 2, 1971, Britain withdrew its military forces, and six emirates (later joined by Ras Al Khaimah in 1972) federated to form the United Arab Emirates under Sheikh Zayed bin Sultan Al Nahyan.

Recognizing Abu Dhabi held 90% of oil reserves, Dubai's ruler Sheikh Rashid bin Saeed Al Maktoum pioneered a commercial pivot: building Jebel Ali Free Zone (1985), expanding Emirates Airline, and creating an offshore tax-free sanctuary for global shipping, finance capital, and real estate speculation. [1][2]`,
      keyFigures: ['Zayed bin Sultan Al Nahyan', 'Rashid bin Saeed Al Maktoum'],
      citationIds: [1, 2],
    },
    {
      id: 'uae-kafala-hyper-exploitation-burj-khalifa-construction',
      title: '3. 2000 – 2019: The Kafala Exploitation System, Burj Khalifa Boom & Global Real Estate Speculation',
      period: '2000 – 2019',
      categoryTag: 'challenges',
      summary: 'Kafala system exploits millions of South Asian workers; construction of Burj Khalifa & luxury mega-projects.',
      details: `Dubai and Abu Dhabi's construction boom relied on the **Kafala System**, importing millions of workers from India, Pakistan, Bangladesh, Nepal, and the Philippines. Construction monopolies confiscated passports, withheld wages, and housed workers in crowded, segregated labor camps (Sonapur) in temperatures exceeding 45°C.

During the 2008 global financial crisis, Abu Dhabi issued a $20 billion bailout to save Dubai from debt default, renaming the world's tallest skyscraper the Burj Khalifa. Dubai solidified its status as an offshore wealth haven for international corporate capital and real estate speculators. [2][3]`,
      keyFigures: ['Mohammed bin Rashid Al Maktoum', 'Mohammed bin Zayed (MbZ)'],
      citationIds: [2, 3],
    },
    {
      id: 'uae-abraham-accords-sudan-rsf-brics-accession',
      title: '4. Present: Abraham Accords, Sudan RSF Intervention, DP World Ports & BRICS+ Accession',
      period: 'Present',
      categoryTag: 'challenges',
      summary: '2020 Israeli Abraham Accords; funding Sudan RSF; DP World port control; Jan 2024 BRICS+ accession.',
      details: `Under President Mohammed bin Zayed (MbZ), the UAE signed the **Abraham Accords** in September 2020, normalizing diplomatic, surveillance, and military trade ties with Israel.

Regionally, Abu Dhabi exercises aggressive subversion: funding the Rapid Support Forces (RSF) paramilitary in Sudan to secure gold export routes and agricultural concessions, while using port logistics monopoly DP World to control strategic maritime ports in Somaliland, Yemen (Socotra), and the Red Sea. In January 2024, the UAE officially joined BRICS+, balancing its US military dependency with non-dollar trade and Russian capital inflows. [3][4]`,
      keyFigures: ['Mohammed bin Zayed (MbZ)', 'Benjamin Netanyahu', 'Hemedti (RSF Commander)'],
      citationIds: [3, 4],
    },
  ],

  sources: [
    {
      id: 1,
      label: 'Dubai: The Story of the World\'s Fastest City',
      publisher: 'Jim Krane / St. Martin\'s Press',
      year: '2009',
      excerpt: 'Historical study of British Trucial States, Abu Dhabi oil reserves, and Dubai\'s transformation into a global tax haven and commercial hub.',
    },
    {
      id: 2,
      label: 'City of Gold: Dubai and the Dream of Capitalism',
      publisher: 'Jim Krane & Human Rights Watch Reports',
      year: '2010',
      excerpt: 'Documenting the extreme exploitation of South Asian migrant workers under the Kafala system in Sonapur labor camps.',
    },
    {
      id: 3,
      label: 'UAE Regional Interventions: Sudan RSF Gold Trade & DP World Maritime Ports',
      publisher: 'Amnesty International & Stockholm International Peace Research Institute',
      year: '2024',
      excerpt: 'Documentation of UAE financial and armaments supply lines to Sudan\'s RSF paramilitary, Socotra port annexation, and military trade with Israel.',
    },
    {
      id: 4,
      label: 'UAE Accession to BRICS+ & Abraham Accords Economic Impact',
      publisher: 'Abu Dhabi Investment Authority & BRICS Financial Bulletin',
      year: '2024',
      excerpt: 'Official data on ADIA sovereign wealth management, Abraham Accords tech trade, and BRICS+ non-dollar trade integration.',
    },
  ],
};
