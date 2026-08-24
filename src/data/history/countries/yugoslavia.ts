import type { CountryData } from '../types';

export const yugoslaviaData: CountryData = {
  id: 'yugoslavia',
  name: 'Socialist Federal Republic of Yugoslavia (SFRY)',
  shortName: 'Yugoslavia',
  flagEmoji: '🚩',
  flagUrl: '/images/flags/yugoslavia.svg',
  coverImage: '/images/history/yugoslavia.jpg',
  category: 'aes',
  era: '1945 – 1992',
  capital: 'Belgrade',
  keyLeaders: ['Josip Broz Tito', 'Edvard Kardelj', 'Milovan Djilas', 'Slobodan Milošević', 'Franjo Tuđman'],
  governingParty: "League of Communists of Yugoslavia (SKJ)",
  governingIdeology: "Titoism",
  isHistoricState: true,

  counterpartInfo: {
    id: 'serbia',
    name: 'Republic of Serbia (Modern Post-Yugoslav State)',
    label: 'Modern Capitalist Equivalent',
    contrastText: 'Socialist Yugoslavia (SFRY 1945–1992) pioneered Workers\' Self-Management, Non-Aligned Movement diplomacy, and equal federal republic rights, contrasting with post-1990 IMF debt destruction, 1999 NATO carpet-bombing, and modern post-socialist Balkan fragmentation.',
  },
  
  overviewText: `The Socialist Federal Republic of Yugoslavia (SFRY) represents a historic experiment in self-managing socialism, anti-fascist national liberation, and Global South non-alignment that was ultimately dismantled through Western-backed debt restructuring and imperialist military intervention.

During World War II, as Nazi German invaders and local fascist death squads (**Ustaše** at Jasenovac) unleashed genocidal terror, **Josip Broz Tito** organized the National Liberation Army (NOVJ / Partisans). The Partisans liberated Yugoslavia from Axis occupation through heroic guerrilla warfare without requiring foreign occupation armies. In November 1945, the federal republic was proclaimed, uniting six equal socialist republics (Slovenia, Croatia, Bosnia and Herzegovina, Serbia, Montenegro, Macedonia) and two autonomous provinces (Kosovo and Vojvodina).

Following the 1948 Tito-Stalin split, Yugoslavia pioneered **Workers' Self-Management (Samoupravljanje)**, transferring enterprise governance directly to elected Workers' Councils. Internationally, Tito co-founded the **Non-Aligned Movement (NAM)** in 1961, uniting Global South nations against imperialist superpower military blocs. Following Tito's death in 1980, Western financial institutions (IMF and World Bank) imposed structural adjustment programs that enforced severe austerity, devaluing wages and sparking high unemployment, which opportunistic ethno-nationalist politicians exploited. In 1999, NATO executed a 78-day carpet-bombing campaign (Operation Allied Force), destroying public infrastructure and completing the capitalist privatization of the Balkans.`,

  contradictions: [
    "The diplomatic break between Josip Broz Tito and the Cominform led Yugoslavia to seek Western loans and trade agreements. Western imperialist financial institutions used this leverage to gradually introduce market mechanics and IMF loan conditions.",
    "While worker self-management decentralized factory control, it created market competition between enterprises and widened wealth gaps between wealthy northern republics (Slovenia, Croatia) and poorer southern regions (Kosovo, Macedonia), sparking nationalist friction.",
    "Severe foreign debt forced Belgrade to accept IMF austerity programs in the 1980s, requiring wage freezes, public spending cuts, and currency devaluation. This destroyed national economic cohesion and triggered soaring unemployment.",
    "Germany passed foreign assistance laws conditioning aid on republic-level independence elections, actively fueling ethnic chauvinism. In 1999, NATO launched a 78-day illegal bombing campaign to partition the remaining federal state and privatize its public enterprises."
  ],

  quickFacts: [
    { label: 'Partisan Self-Liberation (1945)', value: 'Tito\'s Partisans liberated Yugoslavia without foreign military occupation [1]' },
    { label: 'Workers\' Self-Management (1950)', value: 'Pioneered direct workplace democracy through elected Workers\' Councils [2]' },
    { label: 'Non-Aligned Movement Founder (1961)', value: 'Co-founded NAM in Belgrade with Egypt, India, Indonesia, and Ghana [3]' },
    { label: '1999 NATO Bombing Destruction', value: '78-day illegal NATO bombardment destroyed public state infrastructure [4]' },
  ],

  timeline: [
    {
      id: 'yugoslavia-pre-1941-kingdom-kpj',
      title: '1. Pre-1941: The Royalist Kingdom of Yugoslavia, Peasant Dispossession and 1920 Founding of KPJ',
      period: 'Pre-1941',
      categoryTag: 'pre-revolution',
      summary: '1918 Kingdom of Serbs, Croats, and Slovenes; peasant poverty; 1920 founding and illegalization of KPJ.',
      details: `Following World War I and the collapse of the Austro-Hungarian Empire, the Kingdom of Serbs, Croats, and Slovenes (later Kingdom of Yugoslavia) was established in 1918 under the Serbian Karađorđević monarchy. The state suffered from severe agrarian poverty, foreign French and British capital control over mines, and intense national chauvinism.

In April 1919, revolutionary socialists founded the Communist Party of Yugoslavia (KPJ). After winning major victories in 1920 municipal elections, the royalist regime passed the draconian Obznana decree, illegalizing the KPJ, banning trade unions, and imprisoning Marxist leaders. [1]`,
      keyFigures: ['King Alexander I', 'Filip Filipović', 'Josip Broz Tito'],
      citationIds: [1],
    },
    {
      id: 'yugoslavia-1941-nazi-invasion-partisans',
      title: '2. 1941 – 1945: Axis Invasion, Ustaše Fascist Genocide (Jasenovac) and Tito\'s Partisan Liberation',
      period: '1941 – 1945',
      categoryTag: 'revolution',
      summary: '1941 Axis invasion; Ustaše commit Jasenovac genocide; Tito\'s Partisans liberate Yugoslavia.',
      details: `In April 1941, Nazi Germany, Fascist Italy, and Hungary invaded Yugoslavia, partitioning the country. In Croatia, the Axis installed the Nazi-puppet **Ustaše** regime, which operated the Jasenovac concentration camp and slaughtered over 500,000 Serbs, Jews, and Romani people.

In response, Josip Broz Tito and the KPJ organized the National Liberation Army (NOVJ / Partisans). Uniting all nationalities under the banner of "Brotherhood and Unity," 800,000 Partisan fighters waged legendary guerrilla warfare, liberating Belgrade in October 1944 and achieving total victory by May 1945 without Red Army garrison occupation. [1][2]`,
      keyFigures: ['Josip Broz Tito', 'Edvard Kardelj', 'Ivo Lola Ribar', 'Ante Pavelić (Ustaše Fascist)'],
      citationIds: [1, 2],
    },
    {
      id: 'yugoslavia-1945-founding-fpry-tito-stalin-split',
      title: '3. 1945 – 1948: Proclamation of the Federal Republic and The 1948 Tito-Stalin Split',
      period: '1945 – 1948',
      categoryTag: 'revolution',
      summary: 'Nov 1945: Proclamation of FPRY; nationalizing industry and land reform; 1948 Tito-Stalin split.',
      details: `On November 29, 1945, the Constituent Assembly formally abolished the monarchy and proclaimed the Federal People's Republic of Yugoslavia (FPRY), composed of six equal republics. The state nationalized foreign cartels, banks, and heavy industry, enacting radical land distribution.

In June 1948, a severe rift erupted between Yugoslavia and the Soviet Union over independent Yugoslav foreign policy in the Balkans and Greece. Yugoslavia was expelled from the Cominform, leading Tito to chart an independent, non-aligned path to socialism. [1][3]`,
      keyFigures: ['Josip Broz Tito', 'J.V. Stalin', 'Edvard Kardelj'],
      citationIds: [1, 3],
    },
    {
      id: 'yugoslavia-1950-workers-self-management-nam-1961',
      title: '4. 1950 – 1964: Workers\' Self-Management (Samoupravljanje) and Founding of Non-Aligned Movement (1961)',
      period: '1950 – 1964',
      categoryTag: 'policies',
      summary: '1950 Law on Workers\' Self-Management; 1961 Belgrade Conference co-founds Non-Aligned Movement (NAM).',
      details: `In June 1950, Yugoslavia passed the historic Law on Management of Government Enterprises by Workers, establishing Workers' Self-Management (Samoupravljanje). Governance was transferred to elected Workers' Councils, allowing factory workers to decide enterprise production and wage distribution.

In September 1961, Tito hosted the historic Belgrade Conference alongside Nasser (Egypt), Nehru (India), Sukarno (Indonesia), and Nkrumah (Ghana), founding the Non-Aligned Movement (NAM) to unite Global South nations against imperialist superpower military pacts. [2][3]`
    },
    {
      id: 'yugoslavia-1965-market-reforms-1974-constitution',
      title: '5. 1965 – 1979: Market Socialist Mechanics, Unemployment and Regional Economic Disparities',
      period: '1965 – 1979',
      categoryTag: 'challenges',
      summary: '1965 market reforms; rising unemployment (15-20%); labor migration (Gastarbeiter) and regional wealth gaps.',
      details: `During the 1960s and 1970s, Yugoslavia maintained high social welfare, free universal healthcare, and 100% literacy. However, the introduction of market-socialist reforms in 1965 replaced centralized physical planning with enterprise market competition and profit retention.

Unlike centrally planned socialist economies that guaranteed 0% unemployment and full labor utilization, Yugoslavia's market mechanics generated high structural unemployment (reaching 15% to 20%+ in southern regions), widespread underemployment, and mass worker emigration to West Germany (*Gastarbeiter*). Furthermore, market forces widened regional wealth gaps between industrialized northern republics (Slovenia and Croatia) and underdeveloped southern territories (Kosovo and Macedonia), creating structural economic tensions that exploded when Western IMF debt hit in the 1980s. [2][4]`
    },
    {
      id: 'yugoslavia-1980-tito-death-imf-debt-crisis',
      title: '6. 1980 – 1989: Death of Tito, Foreign IMF Debt Crisis and Rise of Ethno-Nationalist Sabotage',
      period: '1980 – 1989',
      categoryTag: 'challenges',
      summary: 'May 1980: Death of Tito; IMF austerity forces wage freezes; nationalist politicians exploit economic misery.',
      details: `Following President Tito's death in May 1980, Yugoslavia entered severe economic crisis under $20 billion in foreign debt. The International Monetary Fund (IMF) imposed strict structural adjustment programs, demanding currency devaluations, wage freezes, and public spending cuts.

Mass unemployment and inflation shattered working-class solidarity. Opportunistic demagogues like Slobodan Milošević in Serbia and Franjo Tuđman in Croatia exploited social misery, replacing socialist class consciousness with toxic ethno-nationalism. [4]`,
      keyFigures: ['Slobodan Milošević', 'Franjo Tuđman', 'Ante Marković'],
      citationIds: [4],
    },
    {
      id: 'yugoslavia-1990-dissolution-nato-bombing-1999',
      title: '7. 1990 – 1999: Western-Backed Violent Dissolution, 1999 NATO Bombing and Capitalist Restoration',
      period: '1990 – 1999',
      categoryTag: 'challenges',
      summary: '1991-1995 civil wars; Western powers recognize secessions; 1999 78-day NATO carpet-bombing destroys state assets.',
      details: `In 1990, the League of Communists collapsed, and Western powers (led by Germany and the US) hastily recognized unilateral secessions by Slovenia and Croatia, triggering devastating civil wars in Croatia and Bosnia.

In March 1999, bypassing the UN Security Council, NATO launched a 78-day illegal carpet-bombing campaign (Operation Allied Force) against the Federal Republic of Yugoslavia (Serbia and Montenegro). NATO missiles targeted bridges, power grids, factories, and television stations, destroying state property to force total capitalist market privatization. [4]`,
      keyFigures: ['Slobodan Milošević', 'Franjo Tuđman', 'Bill Clinton', 'Tony Blair'],
      citationIds: [4],
    },
    {
      id: 'yugoslavia-2000-bulldozer-revolution-color-revolution',
      title: '8. 2000: The Bulldozer Revolution (US-Backed Color Revolution) and Fall of Milosevic',
      period: '2000',
      categoryTag: 'challenges',
      summary: 'USAID/NED fund Otpor! youth org; October 5 Bulldozer Revolution deposes Milosevic; template for all future color revolutions.',
      details: `Following the 1999 NATO bombing, the US State Department and USAID mounted an intensive **Color Revolution** operation to complete the political transformation of Yugoslavia (Serbia). Working through the National Endowment for Democracy (NED) and International Republican Institute (IRI), US agencies channeled over $40 million to opposition political parties, private media networks (B92 Radio), and most critically to **Otpor!** ('Resistance!'), a youth organization trained directly by US consultants using Gene Sharp's 'nonviolent revolution' doctrine developed at the Albert Einstein Institution.

Otpor! activists were trained in Serbia and then sent to Budapest and Bratislava for workshops, returning to organize a clenched fist symbol movement that operated identically to a political party infrastructure. When election results for the September 2000 federal election were disputed, Otpor and opposition parties coordinated a mass occupation of federal buildings. Crucially, a convoy of miners driving industrial bulldozers into Belgrade to storm the Federal Parliament building on October 5 provided the iconic image that named the revolution.

The US operation's success in Serbia became the **explicit export template**: Otpor! organizers were flown to Georgia (Rose Revolution, 2003), Ukraine (Orange Revolution, 2004), and Kyrgyzstan (Tulip Revolution, 2005) to directly train local color revolution organizations. The Canvas (Centre for Applied Nonviolent Action and Strategies) spin-off organization continued exporting the methodology globally. [4][5]`,
      keyFigures: ['Slobodan Milošević', 'Vojislav Koštunica', 'Srđa Popović (Otpor! / Canvas)', 'Zoran Đinđić'],
      citationIds: [4, 5],
    },
    {
      id: 'yugoslavia-present-post-yugoslav-peripheralization',
      title: '9. Present: Post-Yugoslav Peripheralization, Privatization and Capitalist Hegemony in Balkans',
      period: 'Present',
      categoryTag: 'challenges',
      summary: 'Successor states converted into debt-ridden EU/NATO periphery; destruction of social property.',
      details: `Today, the former Yugoslav space stands fragmented into seven debt-ridden peripheral states. State-owned self-managed factories and public housing were liquidated and handed to Western transnational banks and domestic oligarchs.

Citizens across the region face high unemployment, mass youth brain-drain emigration, and crumbling public healthcare, while popular nostalgia for socialist Yugoslav welfare, peace, and industrial dignity ("Yugonostalgia") remains widespread. [2][4]`,
      keyFigures: ['Aleksandar Vučić', 'Zoran Milanović'],
      citationIds: [2, 4],
    },
  ],

  sources: [
    {
      id: 1,
      label: 'Yugoslavia as History: Twice There Was a Country',
      publisher: 'John R. Lampe / Cambridge University Press',
      year: '2000',
      excerpt: 'Comprehensive historical survey of interwar kingdom, WWII Partisan anti-fascist liberation, and post-war socialist development.',
    },
    {
      id: 2,
      label: 'Socialist Self-Management in Yugoslavia: Economic Theory and Practice',
      publisher: 'Branko Horvat / M.E. Sharpe',
      year: '1982',
      excerpt: 'Definitive economic study of Workers\' Self-Management, Workers\' Councils, and social property distribution in the SFRY.',
    },
    {
      id: 3,
      label: 'The Non-Aligned Movement: From Belgrade 1961 to Global Anti-Imperialism',
      publisher: 'A.W. Singham & Shirley Hune / Zed Books',
      year: '1986',
      excerpt: 'Historical study of Tito\'s role in co-founding the Non-Aligned Movement and Global South anti-imperialist diplomacy.',
    },
    {
      id: 4,
      label: 'To Kill a Nation: The Attack on Yugoslavia, IMF Shock Therapy and NATO Imperialism',
      publisher: 'Michael Parenti / Verso Books',
      year: '2000',
      excerpt: 'Critical political economy detailing IMF structural adjustment austerity, Western recognition of secessions, and the 1999 NATO bombing.',
    },
    {
      id: 5,
      label: 'Bringing Down a Dictator (Otpor Documentary) & Canvas Revolution Export Network',
      publisher: 'York Zimmermann Inc. / Steve York & Centre for Applied Nonviolent Action and Strategies',
      year: '2002',
      excerpt: 'Documentary and research documenting USAID/NED funding of Otpor!, Gene Sharp training methodology, and the subsequent export of the Bulldozer Revolution model to Georgia, Ukraine, and Kyrgyzstan.',
    },
  ],
};
