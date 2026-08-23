import type { CountryData } from '../types';

export const russiaData: CountryData = {
  id: 'russia',
  name: "Russia",
  shortName: 'Russia',
  flagEmoji: '🇷🇺',
  flagUrl: '/images/flags/russia.svg',
  coverImage: '/images/history/russia.jpg',
  category: 'global-south',
  era: '1991 – Present',
  capital: 'Moscow',
  keyLeaders: ['Boris Yeltsin', 'Vladimir Putin', 'Dmitry Medvedev'],
  governingParty: "United Russia",
  governingIdeology: 'Capitalism',
  isHistoricState: false,

  counterpartInfo: {
    id: 'ussr',
    name: 'Union of Soviet Socialist Republics (USSR - 1917–1991)',
    label: 'Historic Socialist Equivalent',
    contrastText: 'Socialist USSR (1917–1991) guaranteed public heavy industrial ownership, zero unemployment, & constitutional social rights, contrasting with post-1991 capitalist shock therapy, oligarchic wealth concentration, & modern Russian state-capitalism.',
  },

  officialGovUrl: 'http://government.ru/en/',
  overviewText: `The modern Russian Federation was born out of the illegal 1991 counter-revolutionary dissolution of the Soviet Union and the subsequent brutal restoration of capitalism.

During the 1990s under Boris Yeltsin, IMF-mandated capitalist "shock therapy" liquidated Soviet public property, creating a parasitic billionaire oligarchic class while plunging tens of millions of working-class people into poverty, hyperinflation, and a 6-year drop in life expectancy. In October 1993, Yeltsin ordered tanks to shell the elected Russian parliament to force through neoliberal privatizations.

Under Vladimir Putin (2000–present), the Russian state reasserted state-monopoly control over strategic resource sectors (oil, gas, minerals, defense manufacturing), taming comprador oligarchs while building a state-guided capitalist economy. Externally, Russia transformed into a central pillar of global multipolarity: co-founding BRICS+ and the Shanghai Cooperation Organization (SCO), maintaining energy partnerships with China and India, and directly resisting NATO military expansion in Eurasia.`,

  contradictions: [
    "The 1991 illegal dissolution of the Soviet Union allowed Western financial advisors and corrupt oligarchs to strip state assets through devastating shock therapy privatization.",
    "Vladimir Putin's administration re-nationalized strategic energy sectors, stabilizing state power while domestic capitalist property relations persist.",
    "US and NATO military expansion eastward triggered the military conflict in Ukraine, leading to total Western sanctions and multipolar economic realignment toward China and India.",
    "Russian working families face high military expenditures and domestic capitalist monopolies while sovereign state power counters US unipolar hegemony."
  ],

  quickFacts: [
    { label: '1990s IMF "Shock Therapy"', value: 'Privatized Soviet state property, creating billionaire oligarchs & doubling mortality rates [1]' },
    { label: 'October 1993 Tank Coup', value: 'Yeltsin ordered tank shelling of Russian Parliament to force neoliberal privatization [2]' },
    { label: 'State Resource Monopolism', value: 'State reasserted majority ownership in energy (Gazprom, Rosneft) & military industry [3]' },
    { label: 'BRICS+ & Multipolar Core', value: 'Co-founded BRICS+, SCO, and Eurasia trade corridors to counter US dollar hegemony [4]' },
  ],

  timeline: [
    {
      id: 'russia-1991-shock-therapy-oligarchs',
      title: '1. 1991 – 1993: Dissolution of USSR, Capitalist "Shock Therapy" & 1993 Parliamentary Shelling',
      period: '1991 – 1993',
      categoryTag: 'challenges',
      summary: '1991 capitalist restoration; IMF shock therapy liquidates public property; 1993 tank shelling of Parliament.',
      details: `Following the illegal December 1991 dissolution of the USSR, President Boris Yeltsin implemented US and IMF-mandated "shock therapy." Price controls were abolished, and voucher privatization transferred trillions in Soviet public assets into the hands of a small clique of comprador oligarchs (Khodorkovsky, Berezovsky, Abramovich).

When the elected Supreme Soviet (Parliament) resisted neoliberal destruction, Yeltsin issued illegal Decree 1400. In October 1993, Yeltsin ordered tanks to shell the White House parliamentary building in Moscow, killing over 100 defenders and imposing an autocratic presidential constitution. [1][2]`,
      keyFigures: ['Boris Yeltsin', 'Yegor Gaidar', 'Anatoly Chubais', 'Alexander Rutskoy'],
      citationIds: [1, 2],
    },
    {
      id: 'russia-1994-1999-default-chechen-war',
      title: '2. 1994 – 1999: Economic Collapse, 1998 Financial Default & The Chechen Wars',
      period: '1994 – 1999',
      categoryTag: 'challenges',
      summary: '60% industrial collapse; 1998 ruble default; Western-backed destabilization in Chechnya.',
      details: `Between 1991 and 1998, Russian GDP fell by 45%—a catastrophe deeper than the Great Depression. Poverty surged from 1.5% to over 40%, while male life expectancy plummeted to 57 years.

In August 1998, the government defaulted on domestic debt, collapsing the banking system. Concurrently, the state fought bloody wars against foreign-funded wahhabi separatists in Chechnya, threatening total state disintegration. [1][3]`,
      keyFigures: ['Boris Yeltsin', 'Yevgeny Primakov', 'Gennady Zyuganov (CPRF Leader)'],
      citationIds: [1, 3],
    },
    {
      id: 'russia-2000-2014-putin-state-capitalism-rebuilding',
      title: '3. 2000 – 2014: Putin Era, State Resource Ownership & Resisting NATO Expansion',
      period: '2000 – 2014',
      categoryTag: 'policies',
      summary: 'Putin takes power; nationalizing oil/gas giants (Gazprom); 2007 Munich Speech against US unipolarity.',
      details: `Taking power in 2000, Vladimir Putin stabilized the state by subjugating or exiling pro-Western oligarchs, nationalizing oil/gas assets (Yukos nationalized into Rosneft), and using energy revenues to pay off foreign debt and increase pensions.

In his 2007 Munich Security Conference speech, Putin openly challenged US unipolar hegemony. Following the 2014 US-backed Euromaidan coup in Kyiv, Russia hosted a referendum in Crimea, reunifying the peninsula with Russia. [3][4]`,
      keyFigures: ['Vladimir Putin', 'Dmitry Medvedev', 'Mikhail Khodorkovsky (Oligarch)'],
      citationIds: [3, 4],
    },
    {
      id: 'russia-2015-present-brics-multipolarity-sanctions',
      title: '4. 2015 – Present: NATO Proxy Conflict, 20,000+ US Sanctions & BRICS+ Multipolar Realignment',
      period: '2015 – Present',
      categoryTag: 'challenges',
      summary: 'Feb 2022 Ukraine intervention; repelling 20,000+ Western sanctions; China trade surge & BRICS+ expansion.',
      details: `In February 2022, following 8 years of Donbas shelling and NATO expansion, Russia launched a military intervention in Ukraine. Western imperialist powers unleashed 20,000+ economic sanctions and froze $300 billion in Russian central bank reserves.

The sanctions failed to collapse the Russian economy: Russia restructured trade toward China, India, Iran, and the Global South, achieving higher GDP growth than Western Europe in 2023–2024 while accelerating the de-dollarization of global trade through BRICS+. [3][4]`,
      keyFigures: ['Vladimir Putin', 'Xi Jinping', 'Narendra Modi', 'Sergey Lavrov'],
      citationIds: [3, 4],
    },
  ],

  sources: [
    {
      id: 1,
      label: 'Stranglehold of the Oligarchs: Russia\'s Transition to Capitalism',
      publisher: 'David M. Kotz & Fred Weir / Routledge',
      year: '2007',
      excerpt: 'Definitive political economy analysis of 1990s IMF shock therapy, economic collapse, and oligarchic property acquisition.',
    },
    {
      id: 2,
      label: 'The 1993 Russian Constitutional Crisis & Tank Attack Report',
      publisher: 'Amnesty International & Russian Parliamentary Records',
      year: '1993',
      excerpt: 'Documentation of Boris Yeltsin\'s illegal Decree 1400 and tank shelling of the Russian White House.',
    },
    {
      id: 3,
      label: 'Putin\'s Russia: Economy, State Capitalism and Geopolitics',
      publisher: 'Richard Sakwa / Cambridge University Press',
      year: '2020',
      excerpt: 'Analysis of state-monopoly capitalism in energy, defense industrial growth, and multipolar foreign policy.',
    },
    {
      id: 4,
      label: 'BRICS+ Economic Resilience & Sanctions Defeat Report',
      publisher: 'New Development Bank & Vienna Institute for International Economic Studies',
      year: '2024',
      excerpt: 'Statistical data on Russia-China bilateral trade exceeding $240B, ruble-yuan trade settlement, and Western sanctions failure.',
    },
  ],
};
