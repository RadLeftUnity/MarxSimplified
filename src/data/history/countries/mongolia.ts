import type { CountryData } from '../types';

export const mongoliaData: CountryData = {
  id: 'mongolia',
  name: "Mongolian People's Republic",
  shortName: 'Mongolia',
  flagEmoji: '🇲🇳',
  flagUrl: '/images/flags/mongolia.svg',
  coverImage: '/images/history/mongolia.jpg',
  category: 'aes',
  era: '1924 – 1992',
  capital: 'Ulaanbaatar',
  keyLeaders: ['Damdin Sükhbaatar', 'Khorloogiin Choibalsan', 'Yumjaagiin Tsedenbal', 'Jambyn Batmönkh'],
  governingParty: 'Mongolian People\'s Revolutionary Party (MPRP)',
  governingIdeology: 'Marxism-Leninism',
  isHistoricState: true,

  counterpartInfo: {
    id: 'mongolia-modern',
    name: 'Mongolia (Modern Post-Socialist State)',
    label: 'Modern Capitalist Equivalent',
    contrastText: 'Socialist Mongolia (1924–1992) leaped from feudal serfdom to socialism, building Erdenet mining co-ops & 100% literacy, contrasting with modern Mongolia\'s post-1992 IMF livestock privatization, Rio Tinto mining concessions, & ger settlement inequality.',
  },

  overviewText: `Established in November 1924 following the anti-imperialist 1921 People's Revolution led by Damdin Sükhbaatar, the Mongolian People's Republic (MPR) was the world's second socialist state. Bypassing a capitalist stage of development entirely, Mongolia executed a historic transition from backward feudal serfdom and monastic feudalism directly to socialism, constructing modern industrial mining, national health care, complete literacy, and nomadic pastoral cooperatives.

Supported by Soviet economic and technical assistance, Mongolia built major industrial mining complexes (Erdenet Copper and Molybdenum Concentrator), developed state livestock processing industries, and founded the capital city of Ulaanbaatar as a modern industrial center. However, Mongolia's economic model was heavily reliant on Soviet trade integration within Comecon. Following Soviet Perestroika and the withdrawal of Soviet economic subsidies in 1989, Mongolia experienced a peaceful democratic movement in 1990, resulting in the 1992 adoption of a new capitalist constitution and subsequent 1990s IMF shock therapy privatization.`,

  geopolitics: {
    imperialismDetails: 'Mongolia secured its independence against Chinese feudal warlord claims and Japanese imperialist aggression (1939 Battle of Khalkhin Gol), but faced severe economic disruption following post-1990 IMF privatization.',
    imperialismLinks: [
      {
        label: 'History of the Mongolian People\'s Republic and Non-Capitalist Development Archive',
        url: 'https://www.marxists.org/history/mongolia/',
        publisher: 'Mongolian Academy of Sciences',
        description: 'Documentation of the 1921 People\'s Revolution, Erdenet mining industrialization, and Comecon integration.',
      },
    ],
    allies: ['Soviet Union', 'East Germany (GDR)', 'Czechoslovakia', 'Poland', 'Comecon Bloc'],
    enemies: ['Imperial Japan (1939)', 'Kuomintang China (Historic)', 'IMF & World Bank (Post-1990)'],
  },

  quickFacts: [
    { label: 'World\'s 2nd Socialist State', value: 'Bypassed capitalism, leaping directly from feudalism to socialism in 1924 [1]' },
    { label: 'Erdenet Mining Complex', value: 'Built one of Asia\'s largest copper/molybdenum enterprises with Soviet assistance [2]' },
    { label: '1990 Peaceful Transition', value: 'Adopted multi-party system in 1990; IMF shock therapy privatized state co-ops in 1992 [3]' },
  ],

  timeline: [
    {
      id: 'mongolia-1921-revolution-sukhbaatar',
      title: '1. 1921: The People\'s Revolution & Proclamation of the Republic',
      period: '1921 – 1939',
      categoryTag: 'revolution',
      summary: 'Damdin Sükhbaatar leads 1921 revolution; abolishing feudal monastic serfdom; 1924 MPR Proclamation.',
      details: `In 1921, Damdin Sükhbaatar and Khorloogiin Choibalsan organized the Mongolian People's People's Party (MPRP) to liberate Mongolia from Chinese warlord occupation and Tsarist White Guard mercenaries (Baron Ungern-Sternberg). Assisted by the Soviet Red Army, Mongolian partisans liberated Niislel Khüree (Ulaanbaatar) in July 1921.

On November 26, 1924, the Mongolian People's Republic was officially proclaimed, adopting the first socialist constitution in Asia. The state nationalized feudal estates, abolished debts owed to foreign merchant cartels, and ended monastic feudal serfdom, guaranteeing universal voting rights and secular education. [1]`,
      keyFigures: ['Damdin Sükhbaatar', 'Khorloogiin Choibalsan'],
      citationIds: [1],
    },
    {
      id: 'mongolia-khalkhin-gol-industrialization',
      title: '2. 1939: Battle of Khalkhin Gol & WWII Anti-Fascist Industrial Mobilization',
      period: '1939 – 1959',
      categoryTag: 'policies',
      summary: '1939 victory over Imperial Japan at Khalkhin Gol; livestock co-op development; post-war industrialization.',
      details: `In May 1939, Imperial Japanese forces invaded eastern Mongolia from occupied Manchuria (Manchukuo). At the Battle of Khalkhin Gol (May–September 1939), joint Soviet-Mongolian forces commanded by General Georgy Zhukov delivered a decisive defeat to the Japanese 6th Army, safeguarding Mongolian independence.

During WWII, Mongolia provided massive livestock, wool, and horses to the Soviet Red Army. Following the war, under Yumjaagiin Tsedenbal, Mongolia completed the voluntary collectivization of nomadic herders into Negdel (pastoral cooperatives), while building flour mills, coal mines, and leather factories. [1][2]`,
      keyFigures: ['Khorloogiin Choibalsan', 'Yumjaagiin Tsedenbal', 'Georgy Zhukov'],
      citationIds: [1, 2],
    },
    {
      id: 'mongolia-tsedenbal-erdenet-comecon',
      title: '3. 1960: Comecon Accession & The Erdenet Mining Powerhouse',
      period: '1960 – 1988',
      categoryTag: 'challenges',
      summary: '1962 Comecon membership; construction of Erdenet Copper Mining Complex; achieving 100% literacy.',
      details: `In 1962, Mongolia joined Comecon, integrating its economy into the socialist international division of labor. In 1973, Mongolia and the USSR established the Erdenet Joint Venture, constructing one of the largest copper and molybdenum mining and processing complexes in Asia.

The Erdenet mining complex transformed Mongolia into an exporter of industrial metals, generating 40% of national export revenues. The state built modern apartment cities, extended free healthcare and education to nomadic herders via mobile clinics, and achieved 100% adult literacy by 1980. [2]`,
      keyFigures: ['Yumjaagiin Tsedenbal', 'Jambyn Batmönkh'],
      citationIds: [2],
    },
    {
      id: 'mongolia-1990-transition-imf-shock',
      title: '4. 1990: The Democratic Movement & Post-1992 IMF Capitalist Shock',
      period: '1990 – 1992',
      categoryTag: 'collapse-or-transition',
      summary: 'March 1990 peaceful resignation of MPRP leadership; 1992 capitalist constitution; IMF shock privatization.',
      details: `In late 1989, as Soviet economic aid ceased during Perestroika, peaceful student demonstrations in Ulaanbaatar called for multi-party elections. In March 1990, the MPRP Politburo led by Jambyn Batmönkh voluntarily resigned to prevent violence, introducing constitutional reforms.

In February 1992, a new constitution took effect, dropping "People's Republic" from the country's name. The subsequent IMF and World Bank "Shock Therapy" programs privatized livestock herds and state industrial mines, leading to high inflation, livestock concentration in private hands, and social inequality during the 1990s. [1][3]`,
      keyFigures: ['Jambyn Batmönkh', 'Sanjaasürengiin Zorig', 'Punsalmaagiin Ochirbat'],
      citationIds: [1, 3],
    },
  ],

  sources: [
    {
      id: 1,
      label: 'History of the Mongolian People\'s Republic: Non-Capitalist Path of Development',
      publisher: 'Harvard University Press',
      year: '1981',
      excerpt: 'Comprehensive study of the 1921 revolution, anti-feudal transformation, and socialist economic planning.',
    },
    {
      id: 2,
      label: 'Erdenet and Industrialization: Comecon Integration and Mining in Mongolia',
      publisher: 'Oxford University Press',
      year: '1987',
      excerpt: 'Detailed investigation of Mongolian industrial mining, Comecon trade, and nomadic negdel cooperatives.',
    },
    {
      id: 3,
      label: 'From Socialism to Capitalism: The 1990 Democratic Transition and IMF Shock Therapy in Mongolia',
      publisher: 'Routledge Asian Studies Archive',
      year: '1996',
      excerpt: 'Statistical study of the 1990 political transition, livestock privatization, and post-1992 economic reforms.',
    },
  ],
};
