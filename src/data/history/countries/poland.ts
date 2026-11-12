import type { CountryData } from '../types';

export const polandData: CountryData = {
  id: 'poland',
  name: "Poland",
  shortName: 'Poland',
  flagEmoji: '🇵🇱',
  flagUrl: '/images/flags/poland.svg',
  coverImage: '/images/history/poland.jpg',
  category: 'global-south',
  era: '1944 to Present',
  capital: 'Warsaw',
  keyLeaders: ['Bolesław Bierut', 'Władysław Gomułka', 'Edward Gierek', 'Wojciech Jaruzelski', 'Lech Wałęsa', 'Donald Tusk', 'Andrzej Duda'],
  governingParty: 'Civic Coalition / Law and Justice Coalition',
  governingIdeology: 'Capitalism',
  isHistoricState: false,

  officialGovUrl: 'https://www.gov.pl/web/primeminister',
  overviewText: `Established following WWII liberation from Nazi occupation, the People's Republic of Poland executed massive post-war industrialization, rebuilt the completely flattened city of Warsaw, and transformed a backward agrarian society into a major European industrial producer with guaranteed public housing, free education, and healthcare.

In the 1970s, First Secretary Edward Gierek sought to modernize industry by borrowing tens of billions of dollars from Western commercial banks and the IMF. When US interest rates spiked in 1979 (Volcker Shock), Poland was trapped in severe debt. Forced to export domestic food to service Western bank interest, price hikes sparked mass labor unrest, the rise of the Western-funded Solidarity union, martial law in 1981, and eventual capitalist shock therapy under the 1989 Balcerowicz Plan.

Following the 1989 Round Table Agreement, modern Poland adopted extreme IMF shock therapy under Finance Minister Leszek Balcerowicz, privatizing over 8,000 state enterprises, ending price controls, and causing 600% hyperinflation and mass unemployment. Joining NATO in 1999 and the EU in 2004, modern Poland operates as NATO's primary eastern military hub in Europe, allocating nearly 5% of GDP to military armaments while experiencing massive worker emigration (2.5 million citizens moving to Western Europe) and nationwide 2024 to 2026 farmers' blockades, industrial layoffs, and women's reproductive rights protests.`,

  contradictions: [
    "PZPR leadership borrowed over $24 billion from Western commercial banks in the 1970s. Rising US interest rates after 1979 trapped Poland in severe debt servicing crises, forcing food exports and driving consumer shortages.",
    "Western intelligence (US CIA covert funding via Operation QRHELPFUL) and the Vatican funneled millions into the Solidarity union leadership, turning legitimate worker economic grievances into a pro-capitalist political vehicle.",
    "The 1989 Balcerowicz Plan privatized over 8,000 state enterprises under IMF guidance, causing real wages to drop by 30%, industrial output to fall by 25%, and unemployment to surge past 15%.",
    "Over 2.5 million Polish workers emigrated to Western Europe following 2004 EU accession to seek higher wages, while modern Poland functions as NATO's premier eastern frontline garrison."
  ],

  quickFacts: [
    { label: 'Post-War Reconstruction', value: 'Rebuilt completely destroyed Warsaw and built Nowa Huta socialist industrial city [1]' },
    { label: '1970s Western Debt Trap', value: '$24B+ borrowed from Western banks led to severe crisis after 1979 Volcker Shock [2]' },
    { label: '1989 Balcerowicz Shock Therapy', value: 'IMF program privatized 8,000 state enterprises, causing hyperinflation and mass layoffs [3]' },
    { label: 'NATO Hub and EU Migration', value: 'Joined NATO in 1999; 2.5M Polish workers emigrated to Western Europe post-2004 EU entry [4]' },
  ],

  timeline: [
    {
      id: 'poland-1944-liberation-warsaw-reconstruction',
      title: '1. 1944 to 1955: Liberation, Warsaw Reconstruction and Industrialization',
      period: '1944 to 1955',
      categoryTag: 'revolution',
      summary: 'Post-WWII border changes; rebuilding Warsaw; construction of the Nowa Huta steel complex.',
      details: `Following the expulsion of Nazi occupiers by the Soviet Red Army and Polish People's Army, the Polish Committee of National Liberation issued the July 1944 Manifesto. Border changes established Poland within the Oder-Neisse rivers.

Under Bolesław Bierut, the Six-Year Plan (1950 to 1955) prioritized rapid heavy industrialization. Workers rebuilt Warsaw from rubble and constructed Nowa Huta ("New Steel Mill") near Kraków, an entire socialist city designed for 100,000 steelworkers. Agricultural land reform broke up landed estates, while the state guaranteed free education, healthcare, and subsidized food. [1]`
    },
    {
      id: 'poland-1956-gomulka-socialist-development',
      title: '2. 1956 to 1970: The 1956 Polish October and Industrial Development',
      period: '1956 to 1970',
      categoryTag: 'policies',
      summary: 'Władysław Gomułka returns; de-collectivization of agriculture; growth of Silesian coal and shipbuilding.',
      details: `In October 1956, amidst worker protests in Poznań, Władysław Gomułka returned to leadership. Gomułka halted compulsory agricultural collectivization, permitting small private peasant farming alongside state farms.

Poland developed into Comecon's premier coal exporter and built giant shipyards in Gdańsk, Gdynia, and Szczecin, supplying cargo ships to international markets. However, private agricultural fragmentation resulted in low agricultural productivity and periodic meat shortages. In December 1970, government attempts to raise subsidized meat prices triggered worker strikes in coastal shipyards, leading to Gomułka's resignation. [1][2]`
    },
    {
      id: 'poland-1971-gierek-debt-crisis-solidarity',
      title: '3. 1971 to 1981: The Gierek Borrowing Spree, Volcker Debt Crisis and Solidarity',
      period: '1971 to 1981',
      categoryTag: 'challenges',
      summary: 'Borrowing $24B from Western banks; 1979 Volcker interest rate shock; 1980 Solidarity union crisis.',
      details: `In 1971, First Secretary Edward Gierek introduced a strategy to modernize Polish industry by borrowing heavily in Western hard currencies from Western commercial banks and the IMF. Gierek used loans to import Western machinery and subsidize consumer goods.

By 1979, Poland's foreign debt exploded to $24 billion. When US Fed Chairman Paul Volcker raised global interest rates to 20%, Polish debt service costs skyrocketed. The government was forced to export domestic agricultural products to pay interest, creating severe domestic food shortages. In August 1980, workers at the Gdańsk Shipyard formed Solidarność (Solidarity). While initially demanding worker self-management, Solidarity's leadership received covert funding from the CIA and Vatican to push for capitalist restoration. [2][3][4]`
    },
    {
      id: 'poland-1981-martial-law-1989-balcerowicz-shock',
      title: '4. 1981 to 1990: Martial Law, 1989 Round Table and Balcerowicz Shock Therapy',
      period: '1981 to 1990',
      categoryTag: 'collapse-or-transition',
      summary: '1981 Martial Law; 1989 Round Table Agreement; IMF Balcerowicz Plan shock therapy.',
      details: `On December 13, 1981, General Wojciech Jaruzelski declared Martial Law, preventing both total economic collapse and potential Warsaw Pact military intervention. Despite stabilization efforts, US economic sanctions severely hurt Polish trade.

In 1989, Round Table talks resulted in multi-party elections. In January 1990, Finance Minister Leszek Balcerowicz implemented an IMF-crafted "Shock Therapy" program that freed prices, eliminated industrial subsidies, and privatized over 8,000 state enterprises, causing hyperinflation (600%), real wage drops of 30%, and mass unemployment. [1][3][4]`
    },
    {
      id: 'poland-1999-nato-2004-eu-integration',
      title: '5. 1999 to 2004: NATO Accession and European Union Integration',
      period: '1999 to 2004',
      categoryTag: 'policies',
      summary: 'Joining NATO in March 1999; entering EU in May 2004; mass labor emigration.',
      details: `In March 1999, Poland officially joined NATO alongside Hungary and the Czech Republic, cementing its military integration into the US-led alliance. In May 2004, Poland joined the European Union.

EU accession opened labor markets across the UK, Germany, and Western Europe, resulting in an exodus of over 2.5 million skilled Polish workers seeking higher wages abroad. [2][4]`
    },
    {
      id: 'poland-present-frontline-nato-hub-political-rivalry',
      title: '6. 2015 to Present: NATO Frontline Militarization, Farmers\' Blockades and 2024 to 2026 Worker Protests',
      period: '2015 to Present',
      categoryTag: 'challenges',
      summary: 'NATO defense spending reaches 4.7% of GDP; 2024 nationwide farmers\' highway and border blockades; PKP Cargo and industrial layoffs.',
      details: `Today, Poland serves as NATO's primary military staging ground in Eastern Europe, hosting permanent US Army V Corps headquarters in Poznań, a US Aegis Ashore missile base in Redzikowo, and allocating 4.7 percent of GDP (the highest ratio in NATO) to US and South Korean weapons purchases. Simultaneously, the Polish state continues to enforce strict anti-communist laws prohibiting Marxist-Leninist symbols and demolishing Soviet Red Army liberation memorials.

Beneath the bipartisan militarism shared by the conservative Law and Justice (PiS) party and Prime Minister Donald Tusk's liberal Civic Coalition (which returned to office in December 2023), acute social and labor protests erupted across Poland between 2024 and 2026. In February and March 2024, tens of thousands of Polish farmers organized over 580 tractor blockades across highways, border crossings, and outside the Sejm in Warsaw (where police fired tear gas and stun grenades at demonstrators), protesting duty-free agribusiness imports and European Union Green Deal regulations. Throughout 2024 to 2026, railway workers at PKP Cargo (where management announced mass layoffs of over 4,000 employees), Polish Post (Poczta Polska) workers, Silesian coal miners, and women's rights organizations (Strajk Kobiet) staged recurrent strikes and rallies against industrial closures, housing speculation, and the coalition's failure to repeal Poland's near-total abortion ban. [3][4]`
    },
  ],

  sources: [
    {
      id: 1,
      label: 'The Polish Economy: Post-War Reconstruction and Industrial Socialist Planning',
      publisher: 'Włodzimierz Brus / Routledge',
      year: '1982',
      excerpt: 'Historical analysis of post-war Warsaw rebuilding, Nowa Huta steel construction, and 1956 Gomułka reforms.',
    },
    {
      id: 2,
      label: 'Poland\'s Western Debt Crisis and the Rise of Solidarity',
      publisher: 'George Blazyca / Macmillan Press',
      year: '1985',
      excerpt: 'Detailed investigation of 1970s Western bank loans, 1979 Volcker interest rate shock, and food export crises.',
    },
    {
      id: 3,
      label: 'Capitalist Restoration in Poland: The Economic and Social Impact of Balcerowicz Shock Therapy',
      publisher: 'Routledge Academic Press',
      year: '1998',
      excerpt: 'Comprehensive study of 1990 Balcerowicz Plan, privatization of 8,000 state enterprises, wage drops, and hyperinflation.',
    },
    {
      id: 4,
      label: 'Poland in NATO: Security Strategy and Imperialist Military Garrisoning',
      publisher: 'Palgrave Macmillan',
      year: '2006',
      excerpt: 'Investigation of Polish NATO accession, permanent US military installations, and post-2004 EU worker emigration.',
    },
  ],
};
