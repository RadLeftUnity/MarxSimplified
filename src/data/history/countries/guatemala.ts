import type { CountryData } from '../types';

export const guatemalaData: CountryData = {
  id: 'guatemala',
  name: "Guatemala",
  shortName: 'Guatemala',
  flagEmoji: '🇬🇹',
  flagUrl: '/images/flags/guatemala.svg',
  coverImage: '/images/history/guatemala.jpg',
  category: 'global-south',
  era: '1944 – Present',
  capital: 'Guatemala City',
  keyLeaders: ['Juan José Arévalo', 'Jacobo Árbenz', 'Carlos Castillo Armas', 'Efraín Ríos Montt', 'Rigoberta Menchú', 'Bernardo Arévalo'],
  governingParty: "Semilla Movement",
  governingIdeology: 'Capitalism',
  isHistoricState: false,
  
  officialGovUrl: 'https://prensa.gob.gt/',
  overviewText: `Guatemala represents one of Latin America's most tragic victimizations by US corporate imperialism, where a decade of socialist-democratic reform ("The Ten Years of Spring") was crushed by a 1954 CIA coup (**Operation PBSUCCESS**) engineered to protect the **United Fruit Company (UFCO)**, unleashing a 36-year civil war and state genocide against indigenous Mayan peasants.

In October 1944, a popular revolution overthrew dictator Jorge Ubico. President Juan José Arévalo introduced labor codes and social security, followed by democratically elected President **Jacobo Árbenz** in 1951. Under **Decree 900 (Agrarian Reform Law)**, Árbenz expropriated 234,000 acres of uncultivated land owned by the United Fruit Company (which owned 42% of the nation's land tax-free) and distributed it to 500,000 landless Mayan peasants.

In June 1954, US Secretary of State John Foster Dulles and CIA Director Allen Dulles (both major UFCO shareholders) organized **Operation PBSUCCESS**, bombing Guatemala City and replacing Árbenz with military dictator Carlos Castillo Armas. The coup restored UFCO's untaxed lands, outlawed trade unions, and triggered a 36-year armed resistance by the Guatemalan National Revolutionary Unity (**URNG**). Between 1960 and 1996, US-backed military regimes executed genocide against the indigenous Maya, killing 200,000 citizens. Today, under President Bernardo Arévalo (son of Juan José Arévalo), Guatemala continues fighting oligarchic corruption.`,

  contradictions: [
    "The 1954 CIA military coup ousted democratically elected President Jacobo Arbenz to protect United Fruit Company land holdings, triggering 36 years of military genocide against Maya peasants.",
    "Domestic oligarchy and corrupt judicial networks enforce land dispossession, forcing thousands of impoverished rural workers to migrate to the US.",
    "Indigenous peasant organizations mobilize to defend agrarian territory against transnational nickel mining and hydroelectric mega-projects.",
    "Popular anti-corruption strikes in 2023 defended democratic election results against right-wing judicial coup attempts."
  ],

  quickFacts: [
    { label: 'Ten Years of Spring (1944–1954)', value: 'Democratic revolutions led by Arévalo & Árbenz enacting progressive land reform [1]' },
    { label: '1954 CIA Coup (PBSUCCESS)', value: 'CIA & United Fruit Company overthrew Árbenz to reverse land distribution to Mayan peasants [2]' },
    { label: '36-Year State Genocide (200000 Dead)', value: 'US-backed military juntas executed 200,000 Mayan peasants during civil war [3]' },
    { label: 'Rigoberta Menchú & Mayan Sovereignty', value: '1992 Nobel Peace Prize winner organized indigenous peasant resistance against land theft [4]' },
  ],

  timeline: [
    {
      id: 'guatemala-1871-liberal-coffee-monopoly-maya-dispossession',
      title: '1. 1871 – 1943: Coffee Monopolies, Mayan Forced Labor & The Jorge Ubico Dictatorship',
      period: '1871 – 1943',
      categoryTag: 'pre-revolution',
      summary: 'Liberal dictators expropriate Mayan communal lands for coffee cartels; Jorge Ubico dictatorship.',
      details: `Following the 1871 Liberal Revolution under Justo Rufino Barrios, the Guatemalan state expropriated indigenous Mayan communal lands (*Ejidos*) to build coffee monoculture plantations, imposing vagrancy laws that forced Mayans into unpaid labor.

Dictator Jorge Ubico (1931–1944) granted vast tax-free land and railway concessions to the US-owned **United Fruit Company (UFCO)**, turning Guatemala into a quintessential Banana Republic. [1]`,
      keyFigures: ['Jorge Ubico (Dictator)', 'Justo Rufino Barrios'],
      citationIds: [1],
    },
    {
      id: 'guatemala-1944-october-revolution-arevalo',
      title: '2. 1944 – 1950: The October 1944 Revolution & Juan José Arévalo\'s "Spiritual Socialism"',
      period: '1944 – 1950',
      categoryTag: 'revolution',
      summary: 'Oct 20, 1944: Workers & students overthrow Ubico; President Arévalo introduces labor rights & health.',
      details: `On October 20, 1944, an uprising of teachers, students, workers, and progressive military officers overthrew the Ubico dictatorship, inaugurating Guatemala's "Ten Years of Spring."

Elected President in 1945, **Juan José Arévalo** introduced the 1947 Labor Code, established social security, built rural schools, and granted trade unions the legal right to organize. [1]`,
      keyFigures: ['Juan José Arévalo', 'Jacobo Árbenz', 'Francisco Javier Arana'],
      citationIds: [1],
    },
    {
      id: 'guatemala-1951-arbenz-decree-900-land-reform',
      title: '3. 1951 – 1953: Jacobo Árbenz & Decree 900 Land Reform Expropriating United Fruit Company',
      period: '1951 – 1953',
      categoryTag: 'successes',
      summary: '1951: Jacobo Árbenz elected; June 1952 Decree 900 redistributes 234,000 acres of UFCO land.',
      details: `In 1951, **Jacobo Árbenz** was elected President. In June 1952, he passed **Decree 900 (Agrarian Reform Law)**, expropriating uncultivated land from large estates and redistributing it to 500,000 landless Mayan peasants.

The law expropriated 234,000 acres of unused land held by the **United Fruit Company**, offering compensation based on UFCO's own tax filings. UFCO rejected the compensation, lobbying the Eisenhower White House for a military coup. [1][2]`,
      keyFigures: ['Jacobo Árbenz', 'María Vilanova de Árbenz', 'Che Guevara (Observer in Guatemala)'],
      citationIds: [1, 2],
    },
    {
      id: 'guatemala-1954-cia-coup-operation-pbsuccess',
      title: '4. 1954: The June 1954 CIA Coup (Operation PBSUCCESS) Overthrowing Árbenz',
      period: '1954',
      categoryTag: 'revolution',
      summary: 'June 1954: CIA bombs Guatemala City, overthrows Árbenz, & installs Castillo Armas dictatorship.',
      details: `In June 1954, US Secretary of State John Foster Dulles and CIA Director Allen Dulles launched **Operation PBSUCCESS**. CIA planes bombed Guatemala City while psychological warfare radio broadcasts convinced the military to abandon Árbenz.

Árbenz resigned on June 27, 1954. CIA asset Carlos Castillo Armas assumed power, immediately outlawing trade unions, burning books, and returning all expropriated lands to the United Fruit Company. [2]`,
      keyFigures: ['Jacobo Árbenz', 'Carlos Castillo Armas', 'Allen Dulles (CIA Director)', 'John Foster Dulles'],
      citationIds: [2],
    },
    {
      id: 'guatemala-1960-urng-guerrilla-war-mayan-genocide',
      title: '5. 1960 – 1981: The Outbreak of Armed Guerrilla Struggle & US-Backed State Terror',
      period: '1960 – 1981',
      categoryTag: 'challenges',
      summary: 'Nov 13, 1960 military mutiny ignites 36-year civil war; MR-13, EGP & ORPA guerrillas form URNG.',
      details: `On November 13, 1960, nationalist military officers mutinied against US military presence, igniting 36 years of civil war. Revolutionary guerrilla movements (MR-13, FAR, Guerrilla Army of the Poor / EGP, ORPA) united into the **URNG**.

US Green Berets trained Guatemalan military death squads, which executed scorched-earth campaigns across the highlands. [2][3]`,
      keyFigures: ['Yon Sosa', 'Turcios Lima', 'Ricardo Ramírez (Commander Rolando Morán)'],
      citationIds: [2, 3],
    },
    {
      id: 'guatemala-1982-rios-montt-mayan-genocide-scorched-earth',
      title: '6. 1982 – 1983: Dictator Efraín Ríos Montt & The Silent Holocaust / Mayan Genocide',
      period: '1982 – 1983',
      categoryTag: 'challenges',
      summary: 'General Ríos Montt executes scorched-earth genocide against 626 Mayan villages (100,000 killed).',
      details: `In March 1982, US-backed evangelical General **Efraín Ríos Montt** seized power. Under the *Victoria 82* military campaign, Montt ordered the total destruction of 626 Ixil Mayan villages.

Guatemalan soldiers slaughtered over 100,000 indigenous Mayans in two years, raping women and burning crops (a campaign formally designated as **Genocide** by the 1999 UN Truth Commission). [3]`,
      keyFigures: ['Efraín Ríos Montt', 'Ronald Reagan (Praised Ríos Montt as "totally dedicated")'],
      citationIds: [3],
    },
    {
      id: 'guatemala-1996-peace-accords-rigoberta-menchu',
      title: '7. 1996 – 2015: The 1996 Peace Accords, Rigoberta Menchú & Neoliberal Dispossession',
      period: '1996 – 2015',
      categoryTag: 'policies',
      summary: 'Dec 1996 Peace Accords end civil war; 1992 Nobel laureate Rigoberta Menchú advocates for Mayan rights.',
      details: `In December 1996, the URNG signed the Firm and Lasting Peace Accords with the government, demobilizing guerrilla forces.

In 1992, Maya K'iche' activist **Rigoberta Menchú Tum** was awarded the Nobel Peace Prize for documenting state military massacres. However, neoliberal economic policies enabled Canadian mining cartels (Goldcorp's Marlin Mine) to extract gold on Mayan lands without consent. [3][4]`,
      keyFigures: ['Rigoberta Menchú Tum', 'Álvaro Arzú', 'Bishop Juan Gerardi (Assassinated in 1998)'],
      citationIds: [3, 4],
    },
    {
      id: 'guatemala-present-bernardo-arevalo-semilla-mayan-resistance',
      title: '8. Present: Election of Bernardo Arévalo (Semilla) & Indigenous Peasant Resistance',
      period: 'Present',
      categoryTag: 'successes',
      summary: 'Aug 2023: Bernardo Arévalo wins presidency; indigenous 48 Cantones blockades defend democracy.',
      details: `In August 2023, anti-corruption candidate **Bernardo Arévalo** (son of 1944 revolutionary President Juan José Arévalo) won the presidency in a landslide for the Semilla Movement.

When corrupt prosecutorial cartels (*Pacto de Corruptos*) attempted to block his inauguration, thousands of indigenous leaders from the **48 Cantones of Totonicapán** organized a historic 100-day national strike, shutting down highways to defend democratic rule. [3][4]`,
      keyFigures: ['Bernardo Arévalo', 'Luis Almagro', 'Consuelo Porras (Corrupt Prosecutor)'],
      citationIds: [3, 4],
    },
  ],

  sources: [
    {
      id: 1,
      label: 'Guatemala: Tyranny on Trial & The Ten Years of Spring (1944-1954)',
      publisher: 'Susanne Jonas / Westview Press',
      year: '1991',
      excerpt: 'Definitive historical political economy of Arévalo and Árbenz\'s progressive reforms, Decree 900 land distribution, and United Fruit Company monopolies.',
    },
    {
      id: 2,
      label: 'Bitter Fruit: The Story of the American Coup in Guatemala (Operation PBSUCCESS)',
      publisher: 'Stephen Schlesinger & Stephen Kinzer / Harvard University Press',
      year: '1982',
      excerpt: 'Documentary investigation of the 1954 CIA coup, Allen Dulles, United Fruit Company corporate lobbying, and Árbenz\'s overthrow.',
    },
    {
      id: 3,
      label: 'Guatemala: Memory of Silence (Report of the UN Commission for Historical Clarification)',
      publisher: 'United Nations CEH / CEH Report',
      year: '1999',
      excerpt: 'Official UN report documenting 200,000 civil war deaths, 83% Mayan casualties, and legal finding of US-backed military genocide under Ríos Montt.',
    },
    {
      id: 4,
      label: 'I, Rigoberta Menchú: An Indian Woman in Guatemala & 48 Cantones Resistance',
      publisher: 'Rigoberta Menchú & Elisabeth Burgos-Debray / Verso Books',
      year: '1984',
      excerpt: 'Testimonial account of Mayan peasant labor, military massacres, 1992 Nobel Peace Prize, and 2023 Semilla democratic defense.',
    },
  ],
};
