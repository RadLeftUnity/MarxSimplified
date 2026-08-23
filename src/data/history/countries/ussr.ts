import type { CountryData } from '../types';

export const ussrData: CountryData = {
  id: 'ussr',
  name: 'Union of Soviet Socialist Republics (USSR)',
  shortName: 'Soviet Union',
  flagEmoji: '🚩',
  flagUrl: '/images/flags/ussr.svg',
  coverImage: '/images/history/ussr.jpg',
  category: 'aes',
  era: '1917 – 1991',
  capital: 'Moscow',
  keyLeaders: ['V.I. Lenin', 'J.V. Stalin', 'N. Khrushchev', 'L. Brezhnev', 'M. Gorbachev'],
  governingParty: "Communist Party of the Soviet Union (CPSU)",
  governingIdeology: "Marxism-Leninism",
  isHistoricState: true,

  counterpartInfo: {
    id: 'russia',
    name: 'Russian Federation (Modern Post-Soviet State)',
    label: 'Modern Capitalist Equivalent',
    contrastText: 'Socialist USSR (1917–1991) operated as a planned economy with zero unemployment, public heavy industry, & free universal social rights, contrasting with post-1991 Yeltsin shock therapy privatization, oligarchic wealth concentration, & modern multipolar capitalist Russia.',
  },
  
  overviewText: `The Soviet Union was the world's first worker-led socialist state, created following the October Revolution of 1917. In under three decades, it transformed an impoverished, illiterate, agrarian empire dominated by Tsarist feudal autocracy into an industrial, scientific superpower that defeated European fascism in World War II and launched humanity's first human into space.

For working-class readers, the history of the USSR offers essential lessons: it proved that society can operate without private capitalists or private landlord ownership, guaranteeing universal housing, free healthcare, guaranteed employment, literacy, and retirement pensions to millions of working people.

At the same time, a dialectical Marxist analysis requires examining both the monumental achievements and the real internal contradictions—bureaucratization, the suppression of democratic worker councils (Soviets) in later decades, and the revisionist market reforms after Stalin's death that ultimately weakened socialist economic planning and paved the way for capitalist restoration in 1991.`,

  contradictions: [
    "Over-centralization in Gosplan state ministries detached administrative planners from direct workplace management by factory worker committees (Soviets), breeding administrative stagnation.",
    "The introduction of profit indicators and enterprise self-financing during the Liberman-Kosygin reforms reintroduced market dynamics and eroded socialist ideological clarity within party ranks.",
    "Maintaining military parity against US NATO nuclear deployment forced the USSR to divert excessive industrial capacity into defense rather than consumer light manufacturing and agricultural modernization.",
    "Comprador Restructuring and Ill-Fated Reforms (Perestroika / Glasnost), Gorbachev's late-1980s marketization destroyed socialist price stability and supply chains while cultivating pro-capitalist party apparatchiks and black-market oligarchs who engineered the illegal 1991 dissolution against the express referendum vote of 77% of Soviet citizens."
  ],

  quickFacts: [
    { label: 'Peak Population', value: '288 Million (15 Republics)' },
    { label: 'Literacy Rate', value: '99.7% (Up from ~24% in 1917)' },
    { label: 'Nutrient Intake', value: '3,280 kcal/day (Equal to USA per CIA [1])' },
    { label: 'Unemployment', value: '0% (Constitutional guarantee to work)' },
  ],

  timeline: [
    {
      id: 'ussr-tsarist',
      title: '1. Pre-Revolutionary Imperial Russia: Serfdom & Tsarist Autocracy',
      period: 'Pre-1917',
      categoryTag: 'pre-revolution',
      summary: 'Feudal backwardness, extreme peasant poverty, absolute Tsarist autocracy, and imperialist carnage in WWI.',
      details: `Before 1917, Russia was an agrarian empire where nearly 80% of the population were illiterate peasants living under conditions of semi-feudal landlord exploitation and Tsarist absolutism. Industrial workers in cities like Petrograd and Moscow worked 12-to-14 hour days for starvation wages in foreign-owned factories, while the Tsarist regime brutally suppressed strikes.

Russia's entry into World War I cost millions of lives, caused catastrophic famine, and destroyed the economy. These unbearable material conditions sparked mass anti-war strikes, peasant land seizures, and the formation of worker and soldier councils (Soviets). [2]`,
      citationIds: [2],
    },
    {
      id: 'ussr-revolution',
      title: '2. Dual Power & The October Revolution (1917)',
      period: '1917',
      categoryTag: 'revolution',
      summary: 'Bolshevik party under Lenin leads Soviet power; overthrows Provisional Government under the slogan "Peace, Land, Bread!".',
      details: `Following the collapse of Tsarism in February 1917, a situation of "Dual Power" emerged between the capitalist Provisional Government and the democratic Soviets of Workers' and Soldiers' Deputies. While the Provisional Government insisted on continuing WWI and protecting capitalist land ownership, the Bolshevik Party led by V.I. Lenin rallied mass support.

In October 1917 (November N.S.), the Red Guards and revolutionary soldiers overthrew the Provisional Government. The 2nd All-Russian Congress of Soviets declared all power transferred to the Soviets, immediately passing the Decree on Land (confiscating landlord estates for peasant use) and the Decree on Peace (exiting WWI).`,
      keyFigures: ['V.I. Lenin', 'Leon Trotsky', 'Yakov Sverdlov'],
    },
    {
      id: 'ussr-civil-war',
      title: '3. Repelling 14 Invading Foreign Armies & War Communism',
      period: '1918 – 1921',
      categoryTag: 'challenges',
      summary: '14 foreign capitalist nations invade to crush the revolution; Red Army defeats White counter-revolution under extreme hardship.',
      details: `Seeking to "strangle Bolshevism in its cradle," 14 foreign capitalist powers (including the US, Britain, France, Japan, and Poland) invaded Soviet territory, financing counter-revolutionary "White" armies led by former Tsarist generals who committed widespread atrocities (the White Terror).

To survive, the Soviet republic enacted "War Communism"—centralizing state control over food grain rationing, grain requisitioning from peasants, and total nationalization of heavy industry. Under the political and military leadership of the Bolsheviks, the newly formed Red Army successfully repelled all foreign invaders and defeated the White counter-revolution by 1921.`,
      keyFigures: ['V.I. Lenin', 'Leon Trotsky', 'Mikhail Frunze'],
    },
    {
      id: 'ussr-nep',
      title: '4. The New Economic Policy (NEP) & Building Socialist Foundations',
      period: '1921 – 1928',
      categoryTag: 'policies',
      summary: 'Lenin introduces NEP as a tactical retreat to rebuild ruined industry; establishment of the USSR in 1922.',
      details: `Devastated by seven years of WWI and Civil War, Russia faced total economic ruin and widespread famine. Recognizing that rapid socialist construction required a baseline industrial productive force, Lenin introduced the New Economic Policy (NEP) in 1921 as a temporary tactical compromise.

NEP replaced grain requisitioning with a fixed tax-in-kind, allowing peasants to sell surplus grain on private markets, while the socialist state maintained control over the "commanding heights" of the economy (foreign trade, heavy industry, banking, and transit). In December 1922, the Union of Soviet Socialist Republics (USSR) was officially founded as a voluntary federation of equal socialist republics.`,
      keyFigures: ['V.I. Lenin', 'J.V. Stalin', 'Nikolai Bukharin'],
    },
    {
      id: 'ussr-industrialization',
      title: '5. Five-Year Plans, Rapid Industrialization & Agricultural Collectivization',
      period: '1928 – 1939',
      categoryTag: 'policies',
      summary: 'Socialist economic planning, First & Second Five-Year Plans, collectivization of agriculture, and crushing kulak sabotage.',
      details: `With capitalist nations expanding fascist armaments in Europe, Joseph Stalin famously warned in 1931: "We are 50 to 100 years behind the advanced countries. We must make good this distance in ten years. Either we do it, or they crush us."

Ending NEP, the USSR launched the First Five-Year Plan in 1928, establishing state-planned industrialization. Massive steel complexes (Magnitogorsk), hydroelectric plants (DnieproGES), and tractor factories were constructed at record speed. Agriculture was collectivized into kolkhozes (collective farms) and sovkhozes (state farms) to mechanize farming and feed industrial cities.

During 1932–1933, a severe tragic famine struck Ukraine, Kazakhstan, and the Kuban region. Dialectical materialist analysis reveals that the famine resulted from a convergence of severe natural drought, widespread livestock slaughter and crop burning by wealthy kulak landlords resisting collectivization, administrative over-requisitioning by local cadres, and emergency grain reallocation to feed 20+ million new urban industrial workers. By 1939, collectivization stabilized, tractor mechanization tripled grain yields, and the USSR became Europe's top industrial power.`,
      keyFigures: ['J.V. Stalin', 'Valerian Kuibyshev', 'Alexei Stakhanov'],
    },
    {
      id: 'ussr-ww2',
      title: '6. The Great Patriotic War: Defeating the Fascist Axis Invasion',
      period: '1941 – 1945',
      categoryTag: 'successes',
      summary: 'Nazi Germany invades USSR; Soviet socialist planning mobilizes 27M dead sacrifice to smash Hitler\'s armies at Stalingrad & Berlin.',
      details: `In June 1941, Nazi Germany launched Operation Barbarossa—the largest fascist military invasion in human history, explicitly aimed at exterminating Soviet Slavs, Jews, and Communists. The Soviet Union bore over 75% of the Axis war effort, suffering catastrophic destruction and losing 27 million citizens.

The planned socialist economy demonstrated astonishing agility: over 1,500 major factories were dismantled, loaded onto trains, and rebuilt east of the Ural Mountains within months. The heroic victories at Stalingrad, Kursk, and Leningrad broke the spine of the Nazi war machine, culminating in the Red Army hoisting the Victory Banner over the Reichstag in Berlin in May 1945.`,
      keyFigures: ['J.V. Stalin', 'Georgy Zhukov', 'Alexander Vasilevsky'],
    },
    {
      id: 'ussr-reconstruction',
      title: '7. Post-War Reconstruction, Scientific Superpower & Cold War Siege',
      period: '1945 – 1953',
      categoryTag: 'successes',
      summary: 'Post-war reconstruction completed in 5 years without Marshall Plan aid; atomic bomb test ends US nuclear monopoly; free public services.',
      details: `Despite losing a third of its national wealth in WWII, Soviet central planning rebuilt the country's housing, infrastructure, and industry within five years without taking Western capitalist loans or Marshall Plan aid. In 1949, the USSR successfully tested its first atomic bomb, breaking the US nuclear monopoly and preventing imperialist atomic strikes against the socialist bloc.

During this era, Soviet workers enjoyed universal constitutional guarantees: zero unemployment, free universal healthcare, free higher education, subsidized housing (rents capped at 3% of income), and 100% literacy. [1]`,
      keyFigures: ['J.V. Stalin', 'Igor Kurchatov'],
      citationIds: [1],
    },
    {
      id: 'ussr-revisionism',
      title: '8. Khrushchev & Brezhnev: Ideological Revisionism & Market Reforms',
      period: '1956 – 1985',
      categoryTag: 'challenges',
      summary: 'Khrushchev Secret Speech; introduction of profit-metrics (Kosygin reforms); rise of the bureaucratic Nomenklatura elite.',
      details: `Following Stalin's death, Nikita Khrushchev's "Secret Speech" at the 20th Party Congress initiated a wave of revisionist changes, abandoning the concept of the dictatorship of the proletariat. Economic reforms (such as the 1965 Liberman-Kosygin reforms) introduced profit-seeking indicators, enterprise self-financing, and market metrics into socialist planning.

Over three decades, these market reforms created structural imbalances, encouraged shadow economy black markets, and nurtured an entrenched administrative elite (the Nomenklatura) alienated from rank-and-file workers. While living standards remained high, economic momentum slowed as market mechanisms distorted socialist coordination.`,
      keyFigures: ['Nikita Khrushchev', 'Leonid Brezhnev', 'Alexei Kosygin'],
    },
    {
      id: 'ussr-collapse',
      title: '9. 1985 – 1991: Perestroika, Western Color Revolution Subversion & The Illegal 1991 Dissolution',
      period: '1985 – 1991',
      categoryTag: 'collapse-or-transition',
      summary: 'Gorbachev market reforms destabilize economy; CIA/NED fund anti-communist nationalist fronts; 1991 referendum 77% YES to USSR.',
      details: `In 1985, Mikhail Gorbachev introduced Perestroika (market restructuring) and Glasnost. Instead of expanding worker democracy, these reforms legalized private enterprise, allowed Nomenklatura elites to appropriate state property, and destroyed central planning.

Concurrently, Western imperialist agencies launched coordinated color revolution subversion. Declassified records confirm that the US CIA, National Endowment for Democracy (NED), Radio Free Europe (RFE/RL), and George Soros Open Society Foundations funneled millions in cash, printing presses, and broadcasting equipment to anti-communist nationalist movements (Baltic Sajūdis, Ukrainian Rukh).

In March 1991, an official Soviet referendum was held: 77.8% of voters (113 million citizens) voted overwhelmingly to PRESERVE the USSR as a socialist federation. [3] 

However, in December 1991, Boris Yeltsin illegally signed the Belavezha Accords, dismantling the USSR against the democratic will of the people. The subsequent Western IMF "shock therapy" privatization plummeted male life expectancy by 6 years, pushed 40% of the population into poverty, and handed national wealth to pro-Western oligarchs. [3][4]`,
      keyFigures: ['Mikhail Gorbachev', 'Boris Yeltsin', 'George Soros'],
      citationIds: [3, 4],
    },
  ],

  sources: [
    {
      id: 1,
      label: 'CIA Directorate of Intelligence - American and Soviet Nutrient Intake Report',
      publisher: 'U.S. Central Intelligence Agency (Declassified Document No. CIA-RDP84T00271R000300150001-9)',
      year: '1983',
      url: 'https://www.cia.gov/readingroom/docs/CIA-RDP84T00271R000300150001-9.pdf',
      excerpt: 'American and Soviet citizens eat about the same amount of food each day but the Soviet diet may be more nutritious... The average daily calorie intake in the USSR is 3,280 compared to 3,522 in the US.',
    },
    {
      id: 2,
      label: 'Ten Days That Shook the World',
      publisher: 'John Reed / Boni & Liveright',
      year: '1919',
      excerpt: 'Firsthand journalistic account of the October Revolution, documenting the mass democratic mobilization of worker and soldier Soviets.',
    },
    {
      id: 3,
      label: '1991 Soviet Union Referendum Official Results',
      publisher: 'Central Election Commission of the USSR',
      year: 'March 17, 1991',
      excerpt: '77.85% of voters (over 113 million Soviet citizens) voted "YES" to retaining the Union of Soviet Socialist Republics as a socialist state.',
    },
    {
      id: 4,
      label: 'UN Human Development Report: Human Costs of Post-Communist Transition',
      publisher: 'United Nations Development Programme (UNDP)',
      year: '1999',
      excerpt: 'Documenting the catastrophic rise in mortality, poverty, and unemployment in Russia following 1990s capitalist shock therapy privatization.',
    },
  ],
};
