import type { CountryData } from '../types';

export const hungaryData: CountryData = {
  id: 'hungary',
  name: "Hungary",
  shortName: 'Hungary',
  flagEmoji: '🇭🇺',
  flagUrl: '/images/flags/hungary.svg',
  coverImage: '/images/history/hungary.jpg',
  category: 'global-south',
  era: '1949 – Present',
  capital: 'Budapest',
  keyLeaders: ['Mátyás Rákosi', 'Imre Nagy', 'János Kádár', 'József Antall', 'Gyula Horn', 'Viktor Orbán'],
  governingParty: 'Fidesz Coalition',
  governingIdeology: 'Capitalism',
  isHistoricState: false,

  officialGovUrl: 'https://kormany.hu/en',
  overviewText: `Following the defeat of Nazi Germany and Arrow Cross fascism in 1945, the Hungarian People's Republic abolished feudal landownership, nationalized heavy industry (Ikarus buses, Csepel steel), eliminated illiteracy, and constructed universal healthcare and public social housing.

Following the 1956 armed crisis, General Secretary János Kádár established "Goulash Communism" (Gulyáskommunizmus), prioritizing elevated consumer living standards, voluntary agricultural co-ops, and vibrant retail availability. In 1968, Hungary introduced the New Economic Mechanism (NEM), expanding enterprise decentralization. However, to maintain consumer subsidies during the 1970s OPEC oil shocks, Hungary borrowed heavily in Western hard currencies. In 1982, Hungary joined the IMF to service its $20 billion Western debts, leading to IMF structural adjustments and the 1989 capitalist restoration.

Following the 1989 transition, modern Hungary underwent rapid privatization under IMF guidance. State manufacturing powerhouses (including the Ikarus bus factory and Csepel industrial works) were liquidated or sold off to Western conglomerates. Hungary joined NATO in 1999 and the EU in 2004. Under Prime Minister Viktor Orbán since 2010, Hungary operates an illiberal right-wing state model combining flat taxes and corporate incentives for foreign automotive assembly plants (Audi, Mercedes, BYD) with conservative nationalism.`,

  contradictions: [
    "Hungary introduced the New Economic Mechanism (NEM) in 1968, expanding enterprise self-financing and market incentives. While boosting consumer retail goods, it introduced domestic income inequality and created severe Western hard-currency debt dependency.",
    "To service its $20 billion debt to Western commercial banks, Hungary joined the International Monetary Fund (IMF) in 1982, accepting structural adjustment conditions that eroded state planning and accelerated post-1989 capitalist restoration.",
    "Post-1990 privatization liquidated Hungary's world-class industrial manufacturing (Ikarus buses, Csepel steel), transforming the national economy into a subcontracted assembly base for foreign automotive capital.",
    "The modern state under Viktor Orbán enforces a 15% flat income tax and 9% corporate tax rate to attract foreign multinationals, while public healthcare and education suffer chronic underfunding."
  ],

  quickFacts: [
    { label: 'Goulash Communism Model', value: 'High consumer living standards, Ikarus bus manufacturing & universal social security [1]' },
    { label: '1968 New Economic Mechanism', value: 'Decentralized planning introducing market incentives & private agricultural co-op plots [2]' },
    { label: '1982 IMF Debt Accession', value: 'Accumulated $20B+ Western debt, leading to 1982 IMF entry and structural adjustment [3]' },
    { label: 'Post-1990 De-Industrialization', value: 'Privatized state industries, turning economy into foreign auto assembly subcontracting hub [4]' },
  ],

  timeline: [
    {
      id: 'hungary-1949-postwar-reconstruction-rakosi',
      title: '1. 1949 – 1955: Post-War Reconstruction and Industrialization under Rákosi',
      period: '1949 – 1955',
      categoryTag: 'revolution',
      summary: 'Proclamation of the People\'s Republic; land reform abolishing feudal estates; building Sztálinváros.',
      details: `In August 1949, the Hungarian People's Republic was officially proclaimed under Mátyás Rákosi and the Hungarian Working People's Party (MDP). The state executed comprehensive agrarian reform, redistributing 3.2 million hectares of feudal landlord estates to 640,000 peasant families.

Under the First Five-Year Plan (1950–1954), Hungary industrialized rapidly, building Dunai Vasmű (Danube Iron Works) and the industrial socialist city of Sztálinváros (Dunaújváros). However, excessive industrial target rigidity and forced agricultural requisitions created serious economic tension. [1]`
    },
    {
      id: 'hungary-1956-crisis-kadar-goulash-communism',
      title: '2. 1956 – 1967: The 1956 Crisis and The Rise of "Goulash Communism"',
      period: '1956 – 1967',
      categoryTag: 'policies',
      summary: 'October 1956 armed uprising; Soviet intervention; János Kádár\'s consumer-focused socialist model.',
      details: `In October 1956, mass peaceful demonstrations demanding democratic reforms turned violent as right-wing anti-communist insurgents and CIA-backed Radio Free Europe broadcasts pushed for NATO alignment. As documented by Herbert Aptheker (*The Truth About Hungary*), armed anti-communist groups launched violent pogroms against state workers before Soviet forces intervened in November 1956 to stabilize the state.

János Kádár assumed leadership of the Hungarian Socialist Workers' Party (MSZMP). Kádár adopted the slogan "He who is not against us is with us," prioritizing consumer welfare, retail availability, cultural freedom, and voluntary agricultural cooperatives, establishing "Goulash Communism." [1][2][4]`
    },
    {
      id: 'hungary-1968-nem-western-debt-imf',
      title: '3. 1968 – 1982: The New Economic Mechanism and The Western Hard-Currency Debt Trap',
      period: '1968 – 1982',
      categoryTag: 'challenges',
      summary: '1968 NEM market reforms; borrowing $20B from Western banks; 1982 IMF accession.',
      details: `In 1968, Hungary launched the New Economic Mechanism (NEM), replacing detailed central plan directives with enterprise self-financing, flexible pricing, and profit incentives. Hungary became Comecon's premier bus exporter (Ikarus buses) and food producer.

However, to fund NEM consumer imports during the 1970s OPEC oil shocks, Hungary borrowed heavily in US Dollars and West German D-Marks from Western commercial banks. When global interest rates spiked in 1979, Hungary's foreign debt exploded to $20 billion. To avoid default, Hungary joined the International Monetary Fund (IMF) in 1982, becoming subject to IMF austerity demands. [2][3]`
    },
    {
      id: 'hungary-1989-border-opening-capitalist-transition',
      title: '4. 1989 – 1990: Border Opening, Multi-Party Transition and Capitalist Restoration',
      period: '1989 – 1990',
      categoryTag: 'collapse-or-transition',
      summary: 'May 1989 opening of the Austrian border; Round Table talks; dismantling the People\'s Republic.',
      details: `By 1988, IMF-mandated spending cuts and debt interest payments caused domestic living standard declines. In May 1989, Hungary removed border fences with Austria.

In October 1989, the MSZMP dissolved itself, and multi-party elections in 1990 brought capitalist parties to power, initiating rapid privatization and industrial liquidation. [1][3]`
    },
    {
      id: 'hungary-1999-nato-2004-eu-integration',
      title: '5. 1999 – 2004: NATO Accession and European Union Integration',
      period: '1999 – 2004',
      categoryTag: 'policies',
      summary: 'Joining NATO in March 1999; entering EU in May 2004; expanding foreign auto assembly.',
      details: `Hungary joined NATO in March 1999, providing airbase logistics for NATO military operations in the Balkans. In May 2004, Hungary entered the European Union, facilitating Western European corporate acquisition of retail and manufacturing sectors. [3][4]`
    },
    {
      id: 'hungary-present-orban-era-automotive-subcontracting',
      title: '6. Present: Viktor Orbán Era and Foreign Automotive Subcontracting',
      period: 'Present',
      categoryTag: 'policies',
      summary: 'Fidesz governance; 15% flat tax; foreign German and Chinese automotive battery factory investments.',
      details: `Under Viktor Orbán and Fidesz, Hungary has enforced a 15% flat income tax and 9% corporate tax rate to attract German automakers (Audi, Mercedes) and Chinese electric vehicle battery manufacturers (CATL, BYD), creating an economy dependent on foreign export assembly. [3][4]`
    },
  ],

  sources: [
    {
      id: 1,
      label: 'The Truth About Hungary: Anti-Fascist Resistance and Socialist Planning',
      publisher: 'Herbert Aptheker / Mainstream Publishers',
      year: '1957',
      excerpt: 'Historical investigation of the 1956 crisis, Radio Free Europe psychological warfare, and Hungarian socialist reconstruction.',
    },
    {
      id: 2,
      label: 'Goulash Communism and the New Economic Mechanism',
      publisher: 'Ivan T. Berend / Indiana University Press',
      year: '1990',
      excerpt: 'Comprehensive study of Kádár\'s economic reforms, Ikarus bus manufacturing, and Western hard-currency debt borrowing.',
    },
    {
      id: 3,
      label: 'Hungary and the IMF: Western Debt, Financial Accession, and Capitalist Restoration',
      publisher: 'Routledge Economic Archive',
      year: '1996',
      excerpt: 'Statistical analysis of 1970s hard-currency borrowing, 1982 IMF accession, and 1989 privatization.',
    },
    {
      id: 4,
      label: 'The Truth About Hungary',
      publisher: 'Herbert Aptheker / Mainstream Publishers (New York)',
      year: '1957',
      excerpt: 'Pioneering Marxist investigative study refuting Western anti-communist framing of 1956 by documenting CIA Radio Free Europe psychological warfare, fascist Arrow Cross restorationists, and pogroms against Jewish communists.',
    },
  ],
};
