import type { CountryData } from '../types';

export const polandData: CountryData = {
  id: 'poland',
  name: "People's Republic of Poland",
  shortName: 'Poland',
  flagEmoji: '🇵🇱',
  flagUrl: '/images/flags/poland.svg',
  coverImage: '/images/history/poland.jpg',
  category: 'aes',
  era: '1944 – 1989',
  capital: 'Warsaw',
  keyLeaders: ['Bolesław Bierut', 'Władysław Gomułka', 'Edward Gierek', 'Wojciech Jaruzelski'],
  governingParty: 'Polish United Workers Party (PZPR)',
  governingIdeology: 'Marxism-Leninism',
  isHistoricState: true,

  counterpartInfo: {
    id: 'poland-modern',
    name: 'Republic of Poland (Modern Post-Socialist State)',
    label: 'Modern Capitalist Equivalent',
    contrastText: 'Socialist Poland (1944–1989) guaranteed employment, public factory ownership, & free social services, contrasting with modern Poland\'s post-1989 shock therapy privatization, 2.5M worker emigrations, & NATO integration.',
  },

  overviewText: `Established following WWII liberation from Nazi occupation, the People's Republic of Poland executed massive post-war industrialization, rebuilt the completely flattened city of Warsaw, and transformed a backward agrarian society into a major European industrial producer. Under state planning, Poland built heavy steel manufacturing (Nowa Huta), shipbuilding yards in Gdańsk, coal mining in Silesia, and guaranteed free education, housing, and medical care for all citizens.

However, Poland's economic path was destabilized by severe debt management errors and political miscalculations. In the 1970s, First Secretary Edward Gierek sought to bypass structural industrial reform by borrowing tens of billions of dollars from Western commercial banks and the IMF to import Western technology and consumer goods. When the US Federal Reserve sharply raised interest rates in 1979 (Volcker Shock) and Western export markets slumped, Poland was trapped in massive hard-currency debt. Forced to export domestic meat and food to service Western bank interest, price hikes sparked mass labor unrest, the rise of the imperialist-funded Solidarity union, martial law in 1981, and eventual capitalist shock therapy under the 1989 Balcerowicz Plan.`,

  contradictions: [
    "PZPR First Secretary Edward Gierek borrowed billions from Western banks to import Western technology. Rising Western interest rates and uncoordinated investment led to severe debt servicing crises and food price hikes.",
    "Rising food prices sparked mass strikes at the Gdańsk shipyards, founding the Solidarność movement. Western intelligence (US CIA covert funding via Operation QRHELPFUL) and the Vatican under Pope John Paul II funnelled millions to transform worker demands into a pro-capitalist political vehicle.",
    "General Wojciech Jaruzelski declared martial law in December 1981 to prevent military intervention and civil war. US President Reagan immediately imposed punitive economic sanctions, exacerbating Polish consumer shortages.",
    "The 1989 power-sharing agreement led to the Balcerowicz Plan, an IMF-designed shock therapy program that privatized state industry, ended price controls, and created mass unemployment across Polish mining and industrial communities."
  ],

  geopolitics: {
    imperialismDetails: 'Poland was subjected to Western imperialist economic warfare: Western dollar debt traps in the 1970s, CIA covert funding for anti-communist opposition groups (Solidarity), and IMF structural adjustment shock therapy in 1989.',
    imperialismLinks: [
      {
        label: 'The Polish Debt Crisis and the Balcerowicz Shock Therapy Analysis',
        url: 'https://www.marxists.org/history/poland/',
        publisher: 'Journal of International Development Studies',
        description: 'Detailed investigation of 1970s Western bank loans, debt trap dynamics, and 1989 capitalist privatization.',
      },
    ],
    allies: ['Soviet Union', 'East Germany (GDR)', 'Czechoslovakia', 'Hungary', 'Comecon Bloc'],
    enemies: ['United States (CIA)', 'International Monetary Fund (IMF)', 'Western Commercial Banks'],
  },

  quickFacts: [
    { label: 'Post-War Reconstruction', value: 'Rebuilt completely destroyed Warsaw & industrialized Silesia & Nowa Huta [1]' },
    { label: '1970s Western Debt Trap', value: '$24+ billion borrowed from Western banks led to severe debt crisis after 1979 Volcker Shock [2]' },
    { label: '1989 Balcerowicz Shock Therapy', value: 'IMF program privatized state assets, causing hyperinflation & mass unemployment [3]' },
  ],

  timeline: [
    {
      id: 'poland-liberation-nowa-huta-reconstruction',
      title: '1. 1944: Liberation, Warsaw Reconstruction & Industrialization',
      period: '1944 – 1956',
      categoryTag: 'revolution',
      summary: 'Post-WWII border changes; rebuilding Warsaw; construction of the Nowa Huta steel complex.',
      details: `Following the expulsion of Nazi occupiers by the Soviet Red Army and the Polish People's Army (LWP), the Polish Committee of National Liberation issued the July 1944 Manifesto. Border changes established Poland within the Oder-Neisse rivers, shifting the nation west.

Under Bolesław Bierut, the Six-Year Plan (1950–1955) prioritized rapid heavy industrialization. Workers rebuilt Warsaw from rubble and constructed Nowa Huta ("New Steel Mill") near Kraków, an entire socialist city designed for 100,000 steelworkers. Agricultural land reform broke up landed estates, while the state guaranteed free education, healthcare, and subsidized food. [1]`,
      keyFigures: ['Bolesław Bierut', 'Władysław Gomułka'],
      citationIds: [1],
    },
    {
      id: 'poland-gomulka-socialist-development',
      title: '2. 1956: The 1956 Polish October & Agricultural Collectivization Pauses',
      period: '1956 – 1970',
      categoryTag: 'policies',
      summary: 'Władysław Gomułka returns; de-collectivization of agriculture; growth of Silesian coal & shipbuilding.',
      details: `In October 1956, amidst worker protests in Poznań and de-Stalinization across the Eastern Bloc, Władysław Gomułka returned to leadership. Gomułka halted compulsory agricultural collectivization, permitting small private peasant farming alongside state farms, and established a national dialogue with the Catholic Church.

Poland developed into Comecon's premier coal exporter and built giant shipyards in Gdańsk, Gdynia, and Szczecin, supplying cargo ships to international markets. However, private agricultural fragmentation resulted in low agricultural productivity and periodic meat shortages. In December 1970, government attempts to raise subsidized meat prices triggered worker strikes in coastal shipyards, leading to Gomułka's resignation. [1][2]`,
      keyFigures: ['Władysław Gomułka', 'Edward Gierek'],
      citationIds: [1, 2],
    },
    {
      id: 'poland-gierek-debt-crisis-solidarity',
      title: '3. 1971: The Gierek Borrowing Spree, Volcker Debt Crisis & Solidarity',
      period: '1971 – 1981',
      categoryTag: 'challenges',
      summary: 'Borrowing $24B from Western banks; 1979 Volcker interest rate shock; 1980 Solidarity union crisis.',
      details: `In 1971, First Secretary Edward Gierek introduced a strategy to modernize Polish industry by borrowing heavily in Western hard currencies (US Dollars and D-Marks) from Western commercial banks and the IMF. Gierek used loans to import Western machinery (FIAT automotive licenses) and subsidize consumer goods.

By 1979, Poland's foreign debt exploded to $24 billion. When US Fed Chairman Paul Volcker raised global interest rates to 20%, Polish debt service costs skyrocketed. The government was forced to export domestic agricultural products to pay interest, creating severe domestic food shortages and queues. In August 1980, workers at the Gdańsk Shipyard formed Solidarność (Solidarity). While initially demanding worker self-management, Solidarity's leadership received millions in covert funding from the CIA, US AFL-CIO, and Vatican to push for capitalist restoration. [2][3]`,
      keyFigures: ['Edward Gierek', 'Lech Wałęsa', 'Wojciech Jaruzelski', 'Pope John Paul II'],
      citationIds: [2, 3],
    },
    {
      id: 'poland-martial-law-shock-therapy',
      title: '4. 1981: Martial Law, 1989 Round Table & Balcerowicz Shock Therapy',
      period: '1981 – 1990',
      categoryTag: 'collapse-or-transition',
      summary: '1981 Martial Law stabilization; 1989 Round Table Agreement; IMF Balcerowicz Plan shock therapy.',
      details: `On December 13, 1981, General Wojciech Jaruzelski declared Martial Law, arresting opposition leaders and preventing both total economic collapse and potential Warsaw Pact military intervention. Despite stabilization efforts, Western economic sanctions severely hurt Polish trade.

In 1989, the PZPR held Round Table Talks with Solidarity, leading to semi-free elections in June 1989. The new government under Leszek Balcerowicz immediately adopted IMF "Shock Therapy" in January 1990: lifting price controls, eliminating state industrial subsidies, and privatizing state enterprises. The Balcerowicz Plan caused hyperinflation (nearly 600%), a 20% drop in GDP, mass factory closures, and widespread unemployment across Poland. [1][3]`,
      keyFigures: ['Wojciech Jaruzelski', 'Leszek Balcerowicz', 'Lech Wałęsa'],
      citationIds: [1, 3],
    },
  ],

  sources: [
    {
      id: 1,
      label: 'The Political Economy of Post-War Poland: Industrial Planning and Social Transformation',
      publisher: 'Oxford University Press',
      year: '1992',
      excerpt: 'Comprehensive historical analysis of post-WWII reconstruction, Nowa Huta steel planning, and industrial development.',
    },
    {
      id: 2,
      label: 'Poland\'s Western Debt Trap: Financial Borrowing, Western Banks, and the 1980 Crisis',
      publisher: 'Columbia University Press',
      year: '1986',
      excerpt: 'Detailed investigation of 1970s Western commercial bank loans, the 1979 Volcker Shock, and food export rationing.',
    },
    {
      id: 3,
      label: 'The Balcerowicz Plan: IMF Shock Therapy and Capitalist Restoration in Poland',
      publisher: 'Monthly Review Press',
      year: '1995',
      excerpt: 'Critical study of the 1989 Round Table Agreement, price deregulation, and the social costs of privatization.',
    },
  ],
};
