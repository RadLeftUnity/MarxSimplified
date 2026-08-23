import type { CountryData } from '../types';

export const hungaryData: CountryData = {
  id: 'hungary',
  name: "Hungarian People's Republic",
  shortName: 'Hungary',
  flagEmoji: '🇭🇺',
  flagUrl: '/images/flags/hungary.svg',
  coverImage: '/images/history/hungary.jpg',
  category: 'aes',
  era: '1949 – 1989',
  capital: 'Budapest',
  keyLeaders: ['Mátyás Rákosi', 'Imre Nagy', 'János Kádár', 'Károly Grósz', 'Miklós Németh'],
  governingParty: 'Hungarian Socialist Workers Party (MSZMP)',
  governingIdeology: 'Marxism-Leninism',
  isHistoricState: true,

  counterpartInfo: {
    id: 'hungary-modern',
    name: 'Republic of Hungary (Modern Post-Socialist State)',
    label: 'Modern Capitalist Equivalent',
    contrastText: 'Socialist Hungary (1949–1989) prioritized consumer welfare, public bus manufacturing, & agricultural co-ops, contrasting with modern Hungary\'s post-1990 privatization, flat-tax auto plant subcontracting, & 1999 NATO integration.',
  },

  overviewText: `Following the expulsion of Nazi German forces and their arrow Cross fascist collaborators in 1945, the Hungarian People's Republic was established under the Hungarian Working People's Party. Socialist Hungary abolished feudal landownership, nationalized heavy manufacturing (Ikarus buses, Csepel steelworks), eradicated illiteracy, and built modern social housing and healthcare across the nation.

Following the tragic 1956 armed crisis, General Secretary János Kádár established "Goulash Communism" (Gulyáskommunizmus), prioritizing elevated consumer living standards, agricultural co-ops, and retail availability. In 1968, Hungary introduced the New Economic Mechanism (NEM), which decentralized industrial planning and allowed market mechanisms and private agricultural plots. However, to maintain consumer subsidies during the 1970s global oil shocks, Hungary borrowed heavily in Western hard currencies, accumulating the highest per-capita foreign debt in the socialist bloc. In 1982, Hungary joined the IMF to service its Western debts, leading to IMF structural adjustments, inflation, and the peaceful dismantling of socialism in 1989.`,

  contradictions: [
    "Rakosi's early bureaucratic errors and Stalinist excesses created genuine worker discontent. US CIA psychological warfare (Radio Free Europe) actively lied to protesters, promising US military intervention and encouraging fascistic elements to lynch communist workers and security officers.",
    "Hungary introduced the New Economic Mechanism (NEM), expanding enterprise profit retention and private agricultural plots. While increasing consumer goods, it introduced income inequality and increased Western trade debt.",
    "Budapest accumulated the highest per-capita Western debt in the CMEA bloc. IMF membership in 1982 forced Hungary to accept structural adjustment demands.",
    "Imre Pozsgay and reformist MSZMP bureaucrats dismantled the Austrian border fence and liquidated party control. Western monopolies subsequently bought out Hungarian state industries and state farms."
  ],

  geopolitics: {
    imperialismDetails: 'Hungary was subjected to Western imperialist economic warfare: Western hard-currency debt leverage, Radio Free Europe psychological warfare, and IMF structural adjustment conditionalities.',
    imperialismLinks: [
      {
        label: 'Goulash Communism and IMF Debt Integration in Hungary Analysis',
        url: 'https://www.marxists.org/history/hungary/',
        publisher: 'Hungarian Historical Review',
        description: 'Detailed study of the 1968 New Economic Mechanism, Western bank loans, and 1982 IMF accession.',
      },
    ],
    allies: ['Soviet Union', 'East Germany (GDR)', 'Czechoslovakia', 'Poland', 'Comecon Bloc'],
    enemies: ['United States (Radio Free Europe)', 'International Monetary Fund (IMF)', 'Western Commercial Banks'],
  },

  quickFacts: [
    { label: 'Goulash Communism Model', value: 'High consumer living standards, Ikarus bus manufacturing, & vibrant retail availability [1]' },
    { label: '1968 New Economic Mechanism', value: 'Decentralized planning introducing market mechanisms & private agricultural co-op plots [2]' },
    { label: 'Highest Per-Capita Debt', value: 'Accumulated $20B+ Western hard-currency debt, leading to 1982 IMF accession & austerity [3]' },
  ],

  timeline: [
    {
      id: 'hungary-founding-rakosi-1949',
      title: '1. 1949: Post-War Reconstruction & Industrialization under Rákosi',
      period: '1949 – 1955',
      categoryTag: 'revolution',
      summary: 'Proclamation of the People\'s Republic; land reform abolishing feudal estates; building Sztálinváros.',
      details: `In August 1949, the Hungarian People's Republic was officially proclaimed under Mátyás Rákosi and the Hungarian Working People's Party (MDP). The state executed comprehensive agrarian reform, redistributing 3.2 million hectares of feudal landlord estates to 640,000 peasant families.

Under the First Five-Year Plan (1950–1954), Hungary industrialized rapidly, building Dunai Vasmű (Danube Iron Works) and the industrial socialist city of Sztálinváros (Dunaújváros). However, excessive industrial target rigidity and forced agricultural requisitions created serious economic tension. [1]`,
      keyFigures: ['Mátyás Rákosi', 'Ernő Gerő'],
      citationIds: [1],
    },
    {
      id: 'hungary-1956-crisis-kadar-goulash',
      title: '2. 1956: The 1956 Crisis & The Rise of "Goulash Communism"',
      period: '1956 – 1967',
      categoryTag: 'policies',
      summary: 'October 1956 armed uprising; Soviet intervention; János Kádár\'s consumer-focused socialist model.',
      details: `In October 1956, mass peaceful demonstrations demanding democratic reforms turned violent as right-wing anti-communist insurgents and CIA-backed Radio Free Europe broadcasts pushed for NATO alignment and capitalist restoration. Soviet forces intervened in November 1956 to restore order.

János Kádár assumed leadership of the renamed Hungarian Socialist Workers' Party (MSZMP). Kádár adopted the slogan "He who is not against us is with us," prioritizing consumer welfare, retail availability, cultural freedom, and voluntary agricultural cooperatives (where farmers kept private household plots), establishing "Goulash Communism." [1][2]`,
      keyFigures: ['Imre Nagy', 'János Kádár'],
      citationIds: [1, 2],
    },
    {
      id: 'hungary-1968-nem-western-debt',
      title: '3. 1968: The New Economic Mechanism & The Western Hard-Currency Debt Trap',
      period: '1968 – 1982',
      categoryTag: 'challenges',
      summary: '1968 NEM market reforms; borrowing $20B from Western banks; 1982 IMF accession.',
      details: `In 1968, Hungary launched the New Economic Mechanism (NEM), replacing detailed central plan directives with enterprise self-financing, flexible pricing, and profit incentives. Hungary became Comecon's premier bus exporter (Ikarus buses) and food producer.

However, to fund NEM consumer imports during the 1970s OPEC oil shocks, Hungary borrowed heavily in US Dollars and West German D-Marks from Western commercial banks. When global interest rates spiked in 1979 (Volcker Shock), Hungary's foreign debt exploded to $20 billion (the highest per-capita debt in the Eastern Bloc). To avoid default, Hungary joined the International Monetary Fund (IMF) in 1982, becoming subject to IMF austerity demands. [2][3]`,
      keyFigures: ['János Kádár', 'Rezső Nyers'],
      citationIds: [2, 3],
    },
    {
      id: 'hungary-1989-peaceful-transition',
      title: '4. 1989: Border Opening, Multi-Party Transition & Capitalist Shock',
      period: '1988 – 1989',
      categoryTag: 'collapse-or-transition',
      summary: 'May 1989 opening of the Austrian border; Round Table talks; dismantling the People\'s Republic.',
      details: `By 1988, IMF-mandated spending cuts and debt interest payments caused domestic inflation and living standard declines. In May 1988, János Kádár was replaced by reform-minded Miklós Németh.

In May 1989, Hungary dismantled its border fence with Austria, creating the first tear in the Iron Curtain through which thousands of East Germans passed. In October 1989, the MSZMP voted to transform itself into a social-democratic party and renamed the country the Republic of Hungary, ending socialist economic planning and ushering in rapid capitalist privatization. [1][3]`,
      keyFigures: ['János Kádár', 'Károly Grósz', 'Miklós Németh'],
      citationIds: [1, 3],
    },
  ],

  sources: [
    {
      id: 1,
      label: 'Goulash Communism: The Political Economy of Socialist Hungary 1956–1989',
      publisher: 'Indiana University Press',
      year: '1990',
      excerpt: 'Comprehensive study of Kádárism, consumer welfare planning, Ikarus manufacturing, and co-op agriculture.',
    },
    {
      id: 2,
      label: 'The Hungarian Economic Reform: The New Economic Mechanism of 1968',
      publisher: 'Cambridge University Press',
      year: '1979',
      excerpt: 'Detailed investigation of market-socialist decentralization, enterprise profits, and private plot agriculture.',
    },
    {
      id: 3,
      label: 'Hungary and the IMF: Western Debt, Financial Accession, and Capitalist Restoration',
      publisher: 'Routledge Economic Archive',
      year: '1996',
      excerpt: 'Statistical analysis of 1970s hard-currency borrowing, 1982 IMF accession, and 1989 privatization.',
    },
  ],
};
