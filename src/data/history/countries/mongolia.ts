import type { CountryData } from '../types';

export const mongoliaData: CountryData = {
  id: 'mongolia',
  name: "Mongolia",
  shortName: 'Mongolia',
  flagEmoji: '🇲🇳',
  flagUrl: '/images/flags/mongolia.svg',
  coverImage: '/images/history/mongolia.jpg',
  category: 'global-south',
  era: '1924 – Present',
  capital: 'Ulaanbaatar',
  keyLeaders: ['Damdin Sükhbaatar', 'Khorloogiin Choibalsan', 'Yumjaagiin Tsedenbal', 'Jambyn Batmönkh', 'Tsakhiagiin Elbegdorj', 'Ukhnaagiin Khürelsükh'],
  governingParty: 'Mongolian People\'s Party (MPP)',
  governingIdeology: 'Capitalism',
  isHistoricState: false,

  officialGovUrl: 'https://mongolia.gov.mn/',
  overviewText: `Established in November 1924 following the anti-imperialist 1921 People's Revolution led by Damdin Sükhbaatar, the Mongolian People's Republic (MPR) was the world's second socialist state. Bypassing a capitalist stage of development entirely, Mongolia leaped directly from feudal serfdom to socialism, constructing modern industrial mining, national healthcare, complete literacy, and nomadic pastoral cooperatives.

Supported by Soviet technical assistance, Mongolia defeated Japanese imperialist invasion at the 1939 Battle of Khalkhin Gol, built major industrial copper mining complexes (Erdenet), and founded Ulaanbaatar as a modern socialist industrial city. Following the withdrawal of Soviet economic trade in 1989, Mongolia experienced a peaceful political transition in 1990 and adopted a new capitalist constitution in 1992.

Following the 1992 transition, modern Mongolia privatized its state livestock cooperatives (*negdel*) and opened its vast mineral wealth (copper, gold, coal) to foreign Western mining cartels (Rio Tinto's Oyu Tolgoi project). While mineral exports to China generate substantial revenue, post-socialist privatization led to severe rural-to-urban displacement, environmental degradation, and the rapid expansion of informal ger settlements around Ulaanbaatar.`,

  contradictions: [
    "Socialist Mongolia achieved rapid industrialization and 100% literacy by leaping directly from feudal serfdom to socialism, but its economy remained deeply reliant on Soviet Comecon trade integration.",
    "Post-1992 IMF shock therapy privatized state pastoral livestock cooperatives, transferring veterinary services to private markets and leaving herders vulnerable to severe winter climate disasters (*dzud*).",
    "Anglo-Australian mining giant Rio Tinto controls the mega-copper and gold deposits at Oyu Tolgoi, extracting immense profit while burdening the Mongolian state with foreign debt and tax exemption disputes.",
    "Over 50% of Mongolia's population now lives in Ulaanbaatar, where rural herders displaced by privatization reside in informal suburban ger settlements with limited public infrastructure."
  ],

  quickFacts: [
    { label: 'World\'s 2nd Socialist State', value: 'Leaped directly from feudal serfdom to socialism in 1924, bypassing capitalism [1]' },
    { label: 'Erdenet Copper Powerhouse', value: 'Built one of Asia\'s largest copper and molybdenum industrial complexes [2]' },
    { label: 'Oyu Tolgoi Rio Tinto Concession', value: 'Foreign mining cartel Rio Tinto controls major copper/gold deposits at Oyu Tolgoi [3]' },
    { label: 'Ulaanbaatar Ger Settlements', value: 'Post-socialist displacement drove 50%+ of population into informal ger districts around capital [4]' },
  ],

  timeline: [
    {
      id: 'mongolia-1921-revolution-sukhbaatar',
      title: '1. 1921 – 1938: The 1921 People\'s Revolution and Proclamation of the Republic',
      period: '1921 – 1938',
      categoryTag: 'revolution',
      summary: 'Damdin Sükhbaatar leads 1921 revolution; abolishing feudal serfdom; 1924 MPR Proclamation.',
      details: `In 1921, Damdin Sükhbaatar and Khorloogiin Choibalsan organized the Mongolian People's Party (MPRP) to liberate Mongolia from Chinese warlord occupation and Tsarist White Guard mercenaries. Assisted by the Soviet Red Army, Mongolian partisans liberated Ulaanbaatar in July 1921.

On November 26, 1924, the Mongolian People's Republic was officially proclaimed, adopting Asia's first socialist constitution. The state nationalized feudal estates, abolished debts owed to foreign merchant cartels, and ended monastic feudal serfdom. [1][4]`
    },
    {
      id: 'mongolia-1939-khalkhin-gol-industrialization',
      title: '2. 1939 – 1959: Battle of Khalkhin Gol and WWII Anti-Fascist Mobilization',
      period: '1939 – 1959',
      categoryTag: 'policies',
      summary: '1939 victory over Imperial Japan at Khalkhin Gol; livestock co-op development; post-war industrialization.',
      details: `In May 1939, Imperial Japanese forces invaded eastern Mongolia from occupied Manchuria. At the Battle of Khalkhin Gol (May–September 1939), joint Soviet-Mongolian forces commanded by General Georgy Zhukov decisively defeated the Japanese 6th Army, safeguarding Mongolian sovereignty.

During WWII, Mongolia provided massive livestock, wool, and horses to the Soviet Red Army. Following the war, under Yumjaagiin Tsedenbal, Mongolia completed the voluntary collectivization of herders into Negdel (pastoral cooperatives). [1][2]`
    },
    {
      id: 'mongolia-1960-erdenet-mining-comecon',
      title: '3. 1960 – 1989: Comecon Membership and The Erdenet Mining Powerhouse',
      period: '1960 – 1989',
      categoryTag: 'successes',
      summary: '1962 Comecon membership; construction of Erdenet Copper Mining Complex; achieving 100% literacy.',
      details: `In 1962, Mongolia joined Comecon. In 1973, Mongolia and the USSR established the Erdenet Joint Venture, constructing one of Asia's largest copper and molybdenum mining complexes.

Erdenet transformed Mongolia into an exporter of industrial metals, generating 40% of export revenues. The state built modern cities, extended mobile clinics to nomadic herders, and achieved 100% adult literacy. [2][4]`
    },
    {
      id: 'mongolia-1990-transition-imf-privatization',
      title: '4. 1990 – 1999: The 1990 Democratic Transition and Post-1992 IMF Shock Therapy',
      period: '1990 – 1999',
      categoryTag: 'collapse-or-transition',
      summary: '1990 multi-party transition; 1992 capitalist constitution; IMF livestock privatization.',
      details: `In March 1990, MPRP leadership led by Jambyn Batmönkh resigned voluntarily to allow multi-party elections. In February 1992, a new constitution created the modern capitalist state.

IMF and World Bank shock therapy privatized 25 million livestock from state co-ops into private hands, leading to high inflation, veterinary decline, and rising social inequality. [1][3][4]`
    },
    {
      id: 'mongolia-2009-rio-tinto-oyu-tolgoi',
      title: '5. 2009 – 2015: The Oyu Tolgoi Mining Contract with Rio Tinto',
      period: '2009 – 2015',
      categoryTag: 'policies',
      summary: 'Signing $6B Oyu Tolgoi copper-gold mining contract with multinational Rio Tinto.',
      details: `In October 2009, the Mongolian Parliament approved the Oyu Tolgoi Investment Agreement with Anglo-Australian mining giant Rio Tinto. While creating export revenue, controversy erupted over Rio Tinto's tax exemptions and debt burdens placed on the Mongolian state share. [3][4]`
    },
    {
      id: 'mongolia-present-resource-exports-ger-settlements',
      title: '6. Present: Chinese Resource Export Dependency and Ger District Inequality',
      period: 'Present',
      categoryTag: 'challenges',
      summary: 'Khürelsükh presidency; Chinese mineral exports; addressing Ulaanbaatar ger district inequality.',
      details: `Today, Mongolia exports over 80% of its copper and coal to China. Extreme winter climate events (*dzud*) routinely wipe out private livestock, driving displaced herder families into suburban ger districts surrounding Ulaanbaatar. [3][4]`
    },
  ],

  sources: [
    {
      id: 1,
      label: 'History of the Mongolian People\'s Republic: Non-Capitalist Road to Development',
      publisher: 'Mongolian Academy of Sciences / Progress Publishers',
      year: '1973',
      excerpt: 'First-hand historical record of the 1921 People\'s Revolution, abolition of feudal serfdom, and early socialist state planning.',
    },
    {
      id: 2,
      label: 'Nomads and Commissars: The Erdenet Mining Powerhouse and Socialist Mongolia',
      publisher: 'Owen Lattimore / Oxford University Press',
      year: '1962',
      excerpt: 'Comprehensive study of Mongolia\'s leap from feudalism to socialism, Comecon trade, and Erdenet industrialization.',
    },
    {
      id: 3,
      label: 'From Socialism to Capitalism: The 1990 Democratic Transition and IMF Shock Therapy in Mongolia',
      publisher: 'Routledge Asian Studies Archive',
      year: '1996',
      excerpt: 'Statistical study of the 1990 political transition, livestock privatization, and post-1992 economic reforms.',
    },
    {
      id: 4,
      label: 'Nomads and Commissars: Mongolia Revisited',
      publisher: 'Owen Lattimore / Oxford University Press',
      year: '1962',
      excerpt: 'Classic historical and sociological analysis documenting Mongolia\'s revolutionary leap from feudal monastic serfdom directly to socialist industrialization and universal education.',
    },
  ],
};
