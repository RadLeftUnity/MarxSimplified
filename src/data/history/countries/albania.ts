import type { CountryData } from '../types';

export const albaniaData: CountryData = {
  id: 'albania',
  name: 'Albania',
  shortName: 'Albania',
  flagEmoji: '🇦🇱',
  flagUrl: '/images/flags/albania.svg',
  coverImage: '/images/history/albania.jpg',
  category: 'global-south',
  era: '1944 to Present',
  capital: 'Tirana',
  keyLeaders: ['Enver Hoxha', 'Mehmet Shehu', 'Ramiz Alia', 'Sali Berisha', 'Fatos Nano', 'Edi Rama'],
  governingParty: 'Socialist Party of Albania',
  governingIdeology: 'Capitalism',
  isHistoricState: false,

  officialGovUrl: 'https://www.kryeministria.al/en/',
  overviewText: `Albania underwent one of the most profound anti-feudal and anti-imperialist social transformations in post-WWII Europe under Enver Hoxha and the Party of Labour of Albania (PLA), followed by catastrophic post-1991 capitalist shock therapy, the 1997 pyramid scheme collapse, and integration into Western military alliances.

Liberated in November 1944 solely by indigenous communist Partisans without foreign Allied troop deployment, socialist Albania eradicated feudal landlordism, blood feuds, and 85% illiteracy, while building universal healthcare, industrial mining, and achieving 100% rural electrification by 1970. Following the 1961 split with Soviet revisionism and the 1978 split with post-Mao China, Albania pursued total economic autarky, banning foreign debt in its 1976 Constitution and constructing over 170,000 defensive concrete bunkers across the nation.

Following the 1991 dissolution of the socialist state, modern Albania adopted aggressive IMF shock therapy under President Sali Berisha. The rapid privatization of state enterprises led to economic collapse, culminating in the 1997 Ponzi scheme collapse that wiped out over $1.2 billion in household savings and sparked a popular armed revolt. Today, Albania operates as a NATO member state (since 2009) with an economy heavily reliant on remittances from emigrant workers, coastal tourism privatization, and extraterritorial migrant detention camps for Italy, sparking waves of anti-corruption and student protests in Tirana.`,

  contradictions: [
    "Following Khrushchev's 1956 revisionist shift and China's post-1976 market reforms, Enver Hoxha and the PLA broke relations with both superpowers, pursuing complete autarky that severely constrained foreign industrial technology access.",
    "The socialist state expended immense public capital constructing over 170,000 defensive concrete bunkers across the country, diverting steel, cement, and labor away from civilian housing and light manufacturing.",
    "Post-1991 capitalist restoration under IMF shock therapy destroyed state industrial planning, leading to the collapse of 25 unregulated pyramid schemes in 1997 that wiped out over 50% of national household savings and triggered a mass armed rebellion.",
    "Over one million Albanians (more than 35% of the total population) have been forced to emigrate to Western Europe due to de-industrialization and low domestic wages, creating deep remittance dependency.",
    "The modern state hosts NATO military installations at Kuçovë Tactical Air Base and extraterritorial Italian migrant detention camps at Shëngjin and Gjadër while handing protected coastal lands to Western billionaire developers, triggering recurring mass anti-corruption protests in Tirana."
  ],

  quickFacts: [
    { label: 'Partisan National Liberation (1944)', value: 'Liberated solely by indigenous communist Partisans without foreign troops [1]' },
    { label: 'Universal Literacy and Electrification', value: 'Illiteracy reduced from 85% to 0% alongside 100% rural electrification by 1970 [2]' },
    { label: '1997 Pyramid Collapse Uprising', value: 'Ponzi scheme collapse wiped out $1.2B savings, sparking armed revolt and NATO intervention [3]' },
    { label: 'NATO Membership and Kuçovë Airbase', value: 'Joined NATO alliance in 2009, hosting Kuçovë Tactical Air Base [4]' },
  ],

  timeline: [
    {
      id: 'albania-1944-partisan-liberation-anti-feudal',
      title: '1. 1944 to 1955: Partisan Victory and Anti-Feudal Social Transformation',
      period: '1944 to 1955',
      categoryTag: 'revolution',
      summary: 'Partisan liberation of Tirana; agrarian reform eliminating Bey landlordism; universal literacy drive.',
      details: `During World War II, fascist Italy and Nazi Germany occupied Albania. The Communist Party of Albania (later Party of Labour of Albania, PLA), led by Enver Hoxha, established the National Liberation Army. Through guerrilla warfare, Albanian partisans liberated Tirana on November 17, 1944, and completed national liberation on November 29, 1944, without requiring Soviet Red Army troops.

The new socialist government executed radical Agrarian Reform laws, expropriating feudal Beys (landlords) who owned 60% of arable land, and redistributing plots to 70,000 peasant families. The state launched a historic campaign that eliminated 85% illiteracy, banned forced child marriages and blood feuds, and guaranteed women full legal and economic equality. [1][2]`,
      keyFigures: ['Enver Hoxha', 'Mehmet Shehu', 'William Ash'],
      citationIds: [1, 2],
    },
    {
      id: 'albania-1961-soviet-split-china-alliance',
      title: '2. 1961 to 1977: Hydroelectric Powerhouse, Chromite Mining and The Sino-Albanian Alliance',
      period: '1961 to 1977',
      categoryTag: 'policies',
      summary: 'Rejecting Khrushchevite revisionism; alliance with China; 100% rural electrification and chromite leadership.',
      details: `Following Nikita Khrushchev's 1956 de-Stalinization speech and Soviet accommodation with Western imperialism, Enver Hoxha vehemently denounced Soviet revisionism at the 1960 Moscow Meeting of 81 Communist Parties. In 1961, the USSR broke diplomatic ties and imposed an economic blockade on Albania, expelling it from Comecon.

Albania forged a strategic alliance with the People's Republic of China. China provided industrial credits, machinery, and technical experts to construct major hydroelectric dams on the Drin River (Fierza and Vau i Dejës), chromite ore processing plants, and copper refineries. By 1970, Albania achieved 100% rural electrification, becoming one of the first developing nations in the world to supply electricity to every rural village, while rising to become the world's 3rd largest producer of chromite ore. [1][2]`
    },
    {
      id: 'albania-1978-autarky-bunkerization-isolation',
      title: '3. 1978 to 1985: Total Autarky, Constitutional Loan Bans and Technological Stagnation',
      period: '1978 to 1985',
      categoryTag: 'challenges',
      summary: 'Sino-Albanian split; 1976 Constitutional ban on foreign debt; autarkic supply bottlenecks.',
      details: `Following China's post-1976 market reforms and diplomatic opening to the US, Albania broke diplomatic ties with China in 1978. The 1976 Albanian Constitution formally banned all foreign loans, credits, and foreign direct investment to prevent imperialist debt leverage.

Facing total encirclement by both NATO and Warsaw Pact military blocs, the government built 173,000 reinforced concrete military bunkers across the countryside as part of its "Everyman a Soldier" defense doctrine. However, total autarky meant that industrial enterprises faced acute capital equipment shortages and difficulty importing machinery replacement parts, leading to economic growth bottlenecks in the 1980s. [2][3]`
    },
    {
      id: 'albania-1991-imf-shock-therapy-1997-pyramid-collapse',
      title: '4. 1991 to 1997: 1991 Election Victory, IMF Shock Therapy, 1997 Uprising and Operation Alba',
      period: '1991 to 1997',
      categoryTag: 'collapse-or-transition',
      summary: 'PLA wins 67% vote in 1991; Sali Berisha shock therapy; 1997 Ponzi revolt suppressed by NATO Operation Alba.',
      details: `In the March 31, 1991 multi-party elections, the Party of Labour of Albania (PLA) won a decisive 67.2% victory (169 of 250 seats), backed by working-class and rural voters. However, reformist leadership led by Fatos Nano self-dissolved and converted the party into the social-democratic Socialist Party (PS) in June 1991.

In 1992, Sali Berisha's Democratic Party took power and implemented aggressive IMF shock therapy, liquidating state industries. In early 1997, 25 unregulated pyramid investment schemes collapsed, wiping out over $1.2 billion in household savings (over 50% of GDP). The catastrophe triggered a popular armed uprising: citizens seized military armories and formed insurgent Salvation Committees (*Këshillat e Shpëtimit*) demanding the restoration of state security and public property. To prevent a socialist restoration, the UN Security Council authorized NATO and Italian military forces to deploy 7,000 troops under Operation Alba, suppressing the rebellion and stabilizing the capitalist state. [3][4]`
    },
    {
      id: 'albania-2009-nato-membership-kuçovë-airbase',
      title: '5. 2009 to 2022: NATO Membership and Integration into Western Security Architecture',
      period: '2009 to 2022',
      categoryTag: 'policies',
      summary: 'Joining NATO in 2009; establishing Kuçovë NATO Tactical Air Base; mass youth emigration.',
      details: `In April 2009, Albania officially joined NATO alongside Croatia, participating in imperialist military deployments in Afghanistan and Iraq. The Albanian government transformed former socialist military infrastructure for NATO usage, culminating in the opening of the modernized Kuçovë NATO Tactical Air Base in March 2024 as a primary forward operating hub for Western forces in the Balkans.

Meanwhile, de-industrialization and low domestic wages drove over 1 million Albanians (more than 35% of the population) to emigrate to Italy, Greece, and Western Europe, making the domestic economy heavily dependent on worker remittances. [3][4]`,
      keyFigures: ['Sali Berisha', 'Edi Rama'],
      citationIds: [3, 4],
    },
    {
      id: 'albania-present-edi-rama-emigration-remittances',
      title: '6. 2023 to Present: Italian Migrant Detention Camps, Coastal Privatization and Tirana Protests',
      period: '2023 to Present',
      categoryTag: 'challenges',
      summary: 'Rama-Meloni migrant detention camp pact; luxury coastal sell-offs; 2024 to 2026 Tirana anti-corruption protests.',
      details: `Under Prime Minister Edi Rama, the Albanian government deepened its compradore alignment with Western European states and foreign luxury developers. In late 2023, Rama signed a controversial five-year agreement with far-right Italian Prime Minister Giorgia Meloni allowing Italy to build and operate extraterritorial migrant detention and processing camps on Albanian soil at the port of Shëngjin and the former Gjadër airbase. Opened in late 2024, the camps were widely condemned by human rights and left-wing organizations as neocolonial containment zones ("Italian Guantánamos"), sparking joint protests by Albanian and Italian activists in Tirana and Shëngjin.

Simultaneously, the Rama administration revised environmental protection laws to hand pristine public coastlines and ecological reserves, including Sazan Island and the Zvërnec and Narta Lagoon wetlands, to foreign billionaire resort developers such as Jared Kushner. Between 2024 and 2026, sustained waves of civil unrest, student demonstrations, and opposition marches shook Tirana. Protesters clashed repeatedly with riot police outside Parliament and the Prime Minister's Office, hurling Molotov cocktails and organizing environmental and anti-corruption marches against state capture, soaring housing and food costs, and the entrenched political duopoly of Edi Rama and Sali Berisha. [3][4]`,
      keyFigures: ['Edi Rama', 'Sali Berisha', 'Giorgia Meloni'],
      citationIds: [3, 4],
    },
  ],

  sources: [
    {
      id: 1,
      label: 'The Albanian Revolution and Anti-Feudal Transformation',
      publisher: 'Enver Hoxha / Workers\' Publishing House',
      year: '1975',
      excerpt: 'First-hand account of the 1944 Partisan liberation, agrarian reform laws, and the total eradication of illiteracy.',
    },
    {
      id: 2,
      label: 'Albania: Defending Socialism against Imperialism and Revisionism',
      publisher: 'William Ash / November 8th Publishing House',
      year: '1974',
      excerpt: 'Historical materialist study of the Soviet-Albanian split, 100% rural electrification, and Sino-Albanian economic cooperation.',
    },
    {
      id: 3,
      label: 'From Autarky to Anarchy: IMF Shock Therapy and the 1997 Pyramid Scheme Crisis in Albania',
      publisher: 'Cambridge University Press',
      year: '2001',
      excerpt: 'Comprehensive study of post-1991 privatization, financial deregulation, and the 1997 armed revolt.',
    },
    {
      id: 4,
      label: 'Emigration, Remittances and NATO Integration in Modern Albania',
      publisher: 'Routledge Balkan Studies',
      year: '2018',
      excerpt: 'Investigation of worker emigration to Italy and Greece, Kuçovë NATO airbase, and modern political economy.',
    },
  ],
};
