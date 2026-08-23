import type { CountryData } from '../types';

export const southYemenData: CountryData = {
  id: 'southYemen',
  name: "People's Democratic Republic of Yemen (South Yemen)",
  shortName: 'South Yemen',
  flagEmoji: '🇾🇪',
  flagUrl: '/images/flags/southYemen.svg',
  coverImage: '/images/history/southYemen.jpg',
  category: 'aes',
  era: '1967 – 1990',
  capital: 'Aden',
  keyLeaders: ['Qahtan al-Shaabi', 'Salim Rubai Ali (Salmin)', 'Abdul Fattah Ismail', 'Ali Nasser Muhammad', 'Ali Salem al-Beidh'],
  governingParty: 'Yemeni Socialist Party (YSP)',
  governingIdeology: 'Marxism-Leninism',
  isHistoricState: true,

  counterpartInfo: {
    id: 'yemen-modern',
    name: 'Republic of Yemen (Modern State & Resistance)',
    label: 'Modern Equivalent',
    contrastText: 'Socialist South Yemen (1967–1990) was the Arab world\'s only Marxist state, guaranteeing women\'s rights & nationalizing Aden port, whereas modern Yemen suffered 1994 Northern capitalist annexation & a 2015-present US-Saudi invasion war.',
  },

  overviewText: `The People's Democratic Republic of Yemen (PDRY / South Yemen) was the only Marxist-Leninist socialist state in the history of the Arab world. Born out of a fierce 1963–1967 armed national liberation struggle against British colonial occupation in Aden, South Yemen established a revolutionary worker-peasant state that abolished feudal tribal landlordism, nationalized foreign banks and port monopolies, and achieved unprecedented gender equality and literacy across the Arabian Peninsula.

However, South Yemen faced continuous imperialist encirclement and severe economic bottlenecks. Surrounding reactionary monarchies (Saudi Arabia and Oman), backed by the US and Britain, launched border proxy incursions and imposed a diplomatic blockade, while the closure of the Suez Canal (1967–1975) crippled revenue from Aden Port. Economically, South Yemen relied on Soviet fuel and financial aid alongside remittances from migrant workers. Following intense internal YSP leadership factional conflict in January 1986 and the loss of Soviet trade guarantees during Perestroika, South Yemen merged with North Yemen in May 1990. The 1994 Yemeni Civil War resulted in Northern capitalist military victory, privatizing South Yemen's public land and state industries.`,

  contradictions: [
    "Ideological and tribal factional rivalries between Abdul Fattah Ismail and Ali Nasser Muhammad erupted into tragic armed conflict in January 1986, killing thousands of veteran Marxist cadre and crippling state cohesion.",
    "Oman) and CIA-funded infiltrators, South Yemen was forced to divert scarce national revenue into border defense rather than desert irrigation and industrial development.",
    "The collapse of the USSR deprived PDRY of its primary trade partner. In 1990, North Yemen annexed the South, and the 1994 civil war saw Northern reactionary forces purge Yemeni socialist cadre and privatize southern state land."
  ],

  geopolitics: {
    imperialismDetails: 'South Yemen faced aggressive imperialist encirclement: British colonial Aden occupation, Saudi-Omani proxy border attacks, US economic blockades, and 1994 Northern capitalist military annexation.',
    imperialismLinks: [
      {
        label: 'The Yemeni Socialist Party and the History of the PDRY Archive',
        url: 'https://www.marxists.org/history/yemen/',
        publisher: 'Arab Socialist Historical Review',
        description: 'Documentation of anti-British liberation, NLF armed struggle, PDRY agrarian reform, and 1990 unification.',
      },
    ],
    allies: ['Soviet Union', 'Cuba', 'Ethiopia (Derg)', 'Palestine Liberation Organization (PLO)', 'Comecon Bloc'],
    enemies: ['Saudi Arabia', 'United Kingdom', 'United States', 'Sultanate of Oman', 'North Yemen (YAR)'],
  },

  quickFacts: [
    { label: 'Only Arab Marxist State', value: 'Eradicated tribal feudalism & enacted most progressive women\'s rights law in Arab history [1]' },
    { label: 'Aden Armed Liberation', value: 'Defeated British colonial forces in 1967 Aden Emergency liberation war [2]' },
    { label: '1990 Unification & 1994 War', value: 'Merged with North Yemen in 1990; Northern capitalist military victory privatized PDRY assets in 1994 [3]' },
  ],

  timeline: [
    {
      id: 'southYemen-aden-liberation-nlf',
      title: '1. 1967: The Radfan Armed Uprising & Anti-British Liberation',
      period: '1963 – 1969',
      categoryTag: 'revolution',
      summary: 'NLF armed struggle in Aden; defeat of British colonial forces; declaration of independence.',
      details: `In October 1963, the National Liberation Front (NLF) launched an armed guerrilla uprising in the Radfan mountains against British colonial rule. Britain had turned the port of Aden into a heavily fortified imperial naval base and ruled the interior hinterland through reactionary feudal sultans.

Through urban guerrilla warfare in Aden and rural peasant mobilization, the NLF forced the total withdrawal of British imperial forces. On November 30, 1967, independence was declared, creating the People's Republic of Southern Yemen under President Qahtan al-Shaabi. [1]`,
      keyFigures: ['Qahtan al-Shaabi', 'Salim Rubai Ali (Salmin)', 'Abdul Fattah Ismail'],
      citationIds: [1],
    },
    {
      id: 'southYemen-marxist-constitution-women-rights',
      title: '2. 1970: Proclamation of the PDRY & Radical Social Reforms',
      period: '1970 – 1978',
      categoryTag: 'policies',
      summary: 'Adopting Marxism-Leninism; 1974 Family Law guaranteeing women\'s equality; nationalizing Aden port.',
      details: `In June 1969, the left wing of the NLF came to power ("The Corrective Move"). On November 30, 1970, a new Marxist-Leninist Constitution proclaimed the People's Democratic Republic of Yemen (PDRY). The state nationalized foreign banks, insurance companies, and oil bunkering facilities at Aden Port.

The PDRY executed radical land reform, redistributing estate lands belonging to ex-sultans to peasant cooperatives. In 1974, South Yemen enacted the most progressive Family Law in the Arab world: outlawing polygamy, forced marriages, and bride-price extortion, while guaranteeing women equal rights to divorce, employment, and political office. [1][2]`,
      keyFigures: ['Salim Rubai Ali (Salmin)', 'Abdul Fattah Ismail'],
      citationIds: [1, 2],
    },
    {
      id: 'southYemen-ysp-encirclement-1986-crisis',
      title: '3. 1978: The YSP Founding, Saudi Encirclement & The Jan 1986 Factional Crisis',
      period: '1978 – 1986',
      categoryTag: 'challenges',
      summary: 'Founding of Yemeni Socialist Party; Saudi border conflict; tragic Jan 1986 YSP leadership armed conflict.',
      details: `In October 1978, anti-imperialist groups merged into the Yemeni Socialist Party (YSP) under General Secretary Abdul Fattah Ismail. South Yemen provided crucial rear-base support to the Dhofar Liberation Front fighting the British-backed Sultan of Oman and supported Palestinian PLO freedom fighters.

In response, Saudi Arabia and the US financed North Yemeni border raids and tribal insurgencies. In January 1986, long-standing political and regional tensions within the YSP leadership erupted into a tragic 12-day armed clash in Aden between factions supporting Ali Nasser Muhammad and Abdul Fattah Ismail, resulting in thousands of casualties and weakening the party's cadre base. [2][3]`,
      keyFigures: ['Abdul Fattah Ismail', 'Ali Nasser Muhammad', 'Ali Salem al-Beidh'],
      citationIds: [2, 3],
    },
    {
      id: 'southYemen-1990-unification-1994-civil-war',
      title: '4. 1990: Unification with North Yemen & The 1994 Capitalist Civil War',
      period: '1990 – 1994',
      categoryTag: 'collapse-or-transition',
      summary: 'May 1990 unification with YAR; 1994 Civil War; Northern military victory privatizing PDRY assets.',
      details: `As Soviet economic assistance ended under Perestroika, South Yemen's economic isolation intensified. On May 22, 1990, YSP leadership under Ali Salem al-Beidh agreed to merge South Yemen with the North Yemeni Arab Republic (YAR) under President Ali Abdullah Saleh, creating the unified Republic of Yemen.

However, the Northern conservative regime systematically marginalized Southern political leaders, assassinated 150+ YSP cadres, and stripped Southern public worker pensions. In May 1994, South Yemen declared re-secession, triggering the 1994 Yemeni Civil War. Northern military forces, aided by Saudi-backed tribal militias and fundamentalist fighters, defeated Southern forces in July 1994, forcibly annexing the South and privatizing PDRY public lands, ports, and state enterprises. [1][3]`,
      keyFigures: ['Ali Salem al-Beidh', 'Ali Abdullah Saleh', 'Haidar Abu Bakr al-Attas'],
      citationIds: [1, 3],
    },
  ],

  sources: [
    {
      id: 1,
      label: 'South Yemen: A Marxist State in the Arab World',
      publisher: 'St. Martin\'s Press',
      year: '1985',
      excerpt: 'Comprehensive historical investigation of NLF anti-British armed struggle, Aden port nationalization, and 1974 Family Law.',
    },
    {
      id: 2,
      label: 'The People\'s Democratic Republic of Yemen: Politics, Economics, and Social Transformation',
      publisher: 'Westview Press',
      year: '1989',
      excerpt: 'Detailed analysis of PDRY agrarian reform, women\'s literacy drives, and Saudi/Omani border encirclement.',
    },
    {
      id: 3,
      label: 'Yemeni Unification and the 1994 Civil War: The Annexation of South Yemen',
      publisher: 'Cambridge University Press',
      year: '1997',
      excerpt: 'Statistical study of 1990 unification terms, 1994 war devastation, and Northern capitalist privatization.',
    },
  ],
};
