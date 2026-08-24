import type { CountryData } from '../types';

export const czechoslovakiaData: CountryData = {
  id: 'czechoslovakia',
  name: 'Czechoslovak Socialist Republic',
  shortName: 'Czechoslovakia',
  flagEmoji: '🇨🇿',
  flagUrl: '/images/flags/czechoslovakia.svg',
  coverImage: '/images/history/czechoslovakia.jpg',
  category: 'aes',
  era: '1948 – 1990',
  capital: 'Prague',
  keyLeaders: ['Klement Gottwald', 'Antonín Zápotocký', 'Antonín Novotný', 'Alexander Dubček', 'Gustáv Husák'],
  governingParty: 'Communist Party of Czechoslovakia (KSČ)',
  governingIdeology: 'Marxism-Leninism',
  isHistoricState: true,

  counterpartInfo: {
    id: 'czechia',
    name: 'Czech Republic (Czechia - Modern Post-Socialist State)',
    label: 'Modern Capitalist Equivalent',
    contrastText: 'Socialist Czechoslovakia (1948–1990) maintained state heavy industrial ownership & low foreign debt across a unified federation, whereas modern Czechia underwent 1990s voucher privatization, split from Slovakia in 1993, & joined NATO in 1999.',
  },

  overviewText: `Established after the democratic "Victorious February" of 1948, the Czechoslovak Socialist Republic (ČSSR) developed into one of the most technologically advanced industrial powerhouses in the socialist world. Built upon a pre-war manufacturing base, Czechoslovakia produced world-class heavy machinery, locomotives, Škoda automobiles, Tatra trucks, and precision machine tools that supplied Comecon nations, guaranteed zero unemployment, and provided comprehensive social welfare.

However, Czechoslovakia faced complex internal economic debates and external geopolitical crises. In the mid-1960s, economic stagnation prompted Ota Šik's market-socialist reforms, which under Alexander Dubček's 1968 "Prague Spring" evolved into political decentralization and imperialist intelligence intervention, triggering Warsaw Pact military intervention. Under Gustáv Husák's "Normalization" era (1969–1989), Czechoslovakia maintained high domestic living standards and avoided massive Western debt traps, but suffered from bureaucratic rigidity, underinvestment in consumer technology, and hidden shortages. When the Soviet Union abandoned Comecon trade ties during Perestroika, the 1989 "Velvet Revolution" brought capitalist restoration and the 1993 Velvet Divorce splitting the republic into two capitalist states.`,

  geopolitics: {
    imperialismDetails: 'Czechoslovakia was targeted by Western imperialist intelligence operations (Radio Free Europe) and economic COCOM technology embargos, followed by post-1989 rapid capitalist privatization.',
    imperialismLinks: [
      {
        label: 'Industrial Planning and Economic Normalization in Czechoslovakia Archive',
        url: 'https://www.marxists.org/history/czechoslovakia/',
        publisher: 'Czechoslovak Historical Review',
        description: 'Analysis of Czech heavy manufacturing, 1968 Prague Spring reforms, and Comecon trade integration.',
      },
    ],
    allies: ['Soviet Union', 'East Germany (GDR)', 'Poland', 'Hungary', 'Comecon Bloc'],
    enemies: ['United States (Radio Free Europe)', 'NATO Alliance', 'COCOM Technology Embargo'],
  },

  quickFacts: [
    { label: 'Comecon High-Tech Workshop', value: 'Premier manufacturer of locomotives, machine tools, & Škoda vehicles in Comecon [1]' },
    { label: 'Low Foreign Hard-Currency Debt', value: 'Maintained strict fiscal independence, avoiding 1970s Western IMF debt traps [2]' },
    { label: '1989 Velvet Revolution', value: 'Peaceful dismantling of central planning, leading to 1993 capitalist split [3]' },
  ],

  timeline: [
    {
      id: 'czechoslovakia-february-1948-gottwald',
      title: '1. 1948: Victorious February & Post-War Socialist Construction',
      period: '1948 – 1957',
      categoryTag: 'revolution',
      summary: '1948 Victorious February events; nationalization of heavy industry; Klement Gottwald era.',
      details: `Following WWII liberation by Soviet forces and anti-fascist partisans, Czechoslovakia formed a National Front government. In February 1948 ("Victorious February"), when bourgeois ministers resigned attempting to collapse the government, mass working-class demonstrations and Action Committees led by Prime Minister Klement Gottwald secured total political authority for the Communist Party of Czechoslovakia (KSČ).

The KSČ nationalized all manufacturing, mining, banking, and wholesale trade. Under the First Five-Year Plan (1949–1953), Czechoslovakia rapidly heavy-industrialized its eastern Slovak region, expanding steel mills in Košice and transforming Slovakia from an impoverished agrarian territory into an equal industrial partner. [1]`,
      keyFigures: ['Klement Gottwald', 'Antonín Zápotocký'],
      citationIds: [1],
    },
    {
      id: 'czechoslovakia-prague-spring-1968',
      title: '2. 1968: The Prague Spring, Ota Šik Market Reforms and Warsaw Pact Intervention',
      period: '1965 – 1969',
      categoryTag: 'policies',
      summary: 'Ota Šik market proposals; Dubček\'s "Socialism with a Human Face"; August 1968 Warsaw Pact entry.',
      details: `By the mid-1960s, central planning faced administrative bottlenecks. Economist Ota Šik proposed market-socialist reforms introducing enterprise self-financing and price flexibility. In January 1968, Alexander Dubček became First Secretary, launching "Socialism with a Human Face" (the Prague Spring).

While framed as democratic socialist renewal, Dubček's reforms sought to replace central physical planning with enterprise profit mechanics, market pricing, and Western trade opening. Marxist-Leninist critics (including Enver Hoxha's critique in *Imperialism and the Revolution*) analyzed the 1968 reform wave as social-democratic revisionism that opened the door to capitalist restoration. On August 21, 1968, Soviet and Warsaw Pact troops entered Czechoslovakia to halt Dubček's reforms, reflecting inter-revisionist geopolitical rivalry and fear of Comecon military disintegration. [1][2]`
    },
    {
      id: 'czechoslovakia-normalization-husak',
      title: '3. 1969: The Normalization Era & Industrial Stability under Husák',
      period: '1969 – 1988',
      categoryTag: 'challenges',
      summary: 'Gustáv Husák leadership; high consumer living standards; strict avoidance of Western commercial debt.',
      details: `Under Gustáv Husák's "Normalization" policy (1969–1989), the KSČ re-established centralized economic planning while prioritizing consumer living standards. The state heavily subsidized housing, meat, beer, energy, and transit, ensuring high living standards without inflation.

Unlike Poland and Hungary, Czechoslovakia strictly limited hard-currency borrowing from Western commercial banks, avoiding catastrophic debt traps. However, rigid bureaucratic administration slowed digital computer integration and technological modernization, resulting in hidden consumer queues for electronics and cars. [2][3]`,
      keyFigures: ['Gustáv Husák', 'Vasil Biľak'],
      citationIds: [2, 3],
    },
    {
      id: 'czechoslovakia-1989-velvet-revolution',
      title: '4. 1989: The Velvet Revolution & The 1993 Capitalist Partition',
      period: '1989 – 1993',
      categoryTag: 'collapse-or-transition',
      summary: 'November 1989 Velvet Revolution; Václav Havel presidency; 1993 capitalist split into Czechia & Slovakia.',
      details: `In November 1989, as Soviet trade guarantees evaporated under Perestroika, mass student and worker demonstrations organized by the Civic Forum led to the peaceful resignation of the KSČ government (the Velvet Revolution). Dissident playwright Václav Havel became President.

The new government executed rapid coupon privatization (*kupónová privatizace*), auctioning state industrial assets to private investment funds. On January 1, 1993, political elites orchestrated the "Velvet Divorce," dismantling the federal republic and splitting Czechoslovakia into the separate capitalist states of the Czech Republic and Slovakia. [1][3]`,
      keyFigures: ['Václav Havel', 'Václav Klaus', 'Vladimír Mečiar'],
      citationIds: [1, 3],
    },
  ],

  sources: [
    {
      id: 1,
      label: 'Industrial Planning and Social Welfare in Socialist Czechoslovakia 1948–1989',
      publisher: 'Oxford University Press',
      year: '1994',
      excerpt: 'Comprehensive study of Czechoslovak manufacturing power, Slovak industrialization, and central planning.',
    },
    {
      id: 2,
      label: 'The Prague Spring and the Politics of Economic Reform in Czechoslovakia',
      publisher: 'Princeton University Press',
      year: '1975',
      excerpt: 'Detailed analysis of Ota Šik\'s market-socialist proposals and the 1968 political crisis.',
    },
    {
      id: 3,
      label: 'Kupónová Privatizace: The Capitalist Transformation and Dissolution of Czechoslovakia',
      publisher: 'Central European University Press',
      year: '1998',
      excerpt: 'Statistical study of post-1989 coupon privatization and the 1993 political partition.',
    },
  ],
};
