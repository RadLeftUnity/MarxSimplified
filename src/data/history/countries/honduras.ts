import type { CountryData } from '../types';

export const hondurasData: CountryData = {
  id: 'honduras',
  name: "Honduras",
  shortName: 'Honduras',
  flagEmoji: '🇭🇳',
  flagUrl: '/images/flags/honduras.svg',
  coverImage: '/images/history/honduras.jpg',
  category: 'global-south',
  era: '1911 – Present',
  capital: 'Tegucigalpa',
  keyLeaders: ['Manuel Bonilla', 'Tiburcio Carías Andino', 'Ramon Villeda Morales', 'Manuel Zelaya', 'Berta Cáceres', 'Xiomara Castro'],
  governingParty: "Liberty and Refoundation Party (LIBRE)",
  governingIdeology: "Social Democracy",
  isHistoricState: false,
  
  officialGovUrl: 'https://presidencia.gob.hn/',
  overviewText: `Honduras represents the archetypal "Banana Republic," where US monopoly fruit cartels (**United Fruit Company**, **Standard Fruit**, **Cuyamel Fruit**) owned the nation's railways, ports, telegraphs, and fertile coastal valleys, using US Marine landings and CIA military bases to enforce corporate land theft and crush working-class resistance.

In 1911, mercenary Lee Christmas and US banana mogul **Samuel Zemurray** (owner of Cuyamel Fruit) launched an armed invasion of Honduras, overthrowing President Miguel Dávila and installing puppet President Manuel Bonilla, who rewarded Zemurray with tax-free land and railway concessions. By the 1920s, United Fruit Company and Standard Fruit owned over 1 million acres of Honduras's most fertile land. In May 1954, 35,000 banana plantation workers launched the historic **1954 Great Banana Strike**, shutting down United Fruit operations for 69 days and winning legal union rights and labor codes.

During the 1980s, the US transformed Honduras into "USS Honduras," using Soto Cano Air Base (Palmerola) as a CIA staging ground for Contra terror operations against Sandinista Nicaragua and death squad operations (Battalion 316). On June 28, 2009, a US-backed military coup ousted reformist President **Manuel Zelaya** after he raised the minimum wage and proposed a constituent assembly. Indigenous Lenca leader **Berta Cáceres** organized environmental peasant resistance against corporate mega-dams until her 2016 assassination. In 2021, **Xiomara Castro** (LIBRE) was elected as Honduras's first female President on an anti-imperialist refoundation platform.`,

  contradictions: [
    "The 2009 US-backed military coup ousted President Manuel Zelaya, installing corrupt right-wing regimes that allowed narco-trafficking and violence to flourish.",
    "Indigenous land defender Berta Caceres was assassinated in 2016 for leading peasant resistance against privatized hydroelectric dam projects.",
    "President Xiomara Castro took office in 2022 on a platform to undo neoliberal concessions, establish ties with China, and repeal privatized charter cities.",
    "Transnational banana and palm oil corporations maintain vast land monopolies while rural peasant communities demand comprehensive land reform."
  ],

  quickFacts: [
    { label: 'Original "Banana Republic" (1911)', value: 'US banana mogul Zemurray & mercenaries invaded Honduras to install puppet president [1]' },
    { label: '1954 Great Banana Strike', value: '35,000 workers struck against United Fruit for 69 days, winning labor unions [2]' },
    { label: 'CIA Contra Base "USS Honduras" (1980s)', value: 'US transformed country into military staging ground for CIA Contras against Nicaragua [3]' },
    { label: '2021 Election of Xiomara Castro (LIBRE)', value: 'First female president elected after 12 years of post-2009 coup resistance [4]' },
  ],

  timeline: [
    {
      id: 'honduras-1911-zemurray-mercenary-invasion-banana-republic',
      title: '1. 1911: Samuel Zemurray, Lee Christmas & The Mercenary Invasion Creating the Banana Republic',
      period: '1911',
      categoryTag: 'pre-revolution',
      summary: '1911: Banana mogul Zemurray hires US mercenaries to invade Honduras & install puppet president.',
      details: `In 1911, US banana tycoon **Samuel Zemurray** (Cuyamel Fruit Company) purchased a US Navy surplus gunboat, hired mercenary Lee Christmas, and launched an armed invasion of Honduras from New Orleans.

Zemurray overthrew President Miguel Dávila and installed puppet President Manuel Bonilla, who granted Cuyamel Fruit 10,000 acres of tax-free land and complete control over the national railway system. [1]`,
      keyFigures: ['Samuel Zemurray', 'Lee Christmas (US Mercenary)', 'Manuel Bonilla'],
      citationIds: [1],
    },
    {
      id: 'honduras-1920-united-fruit-carias-dictatorship',
      title: '2. 1920 – 1948: United Fruit Monopoly Enclosure & Dictator Tiburcio Carías Andino',
      period: '1920 – 1948',
      categoryTag: 'challenges',
      summary: 'United Fruit Company absorbs rivals, owning 1M acres; 16-year dictator Carías crushes trade unions.',
      details: `By 1929, the **United Fruit Company** acquired Cuyamel Fruit, establishing total monopoly control alongside Standard Fruit over Honduran ports, railways, and farmlands.

Dictator Tiburcio Carías Andino (1932–1948) ruled for 16 years with US military backing, banning opposition political parties and executing banana plantation labor organizers. [1][2]`,
      keyFigures: ['Tiburcio Carías Andino', 'Samuel Zemurray'],
      citationIds: [1, 2],
    },
    {
      id: 'honduras-1954-great-banana-strike-labor-rights',
      title: '3. 1954: The 1954 Great Banana Strike: 35,000 Plantation Workers Defeating United Fruit',
      period: '1954',
      categoryTag: 'revolution',
      summary: 'May 1954: 35,000 banana workers strike for 69 days against United Fruit, winning labor rights.',
      details: `On May 1, 1954, United Fruit workers at Tela and La Lima launched a strike demanding overtime pay and healthcare. Within days, 35,000 workers shut down all banana production across the North Coast.

Despite company blacklisting, the 69-day general strike forced United Fruit to negotiate, resulting in the creation of SITRATERCO (first legal banana labor union) and the 1959 Honduran Labor Code. [2]`,
      keyFigures: ['César Augusto Coto', 'Manuel de Jesús Valencia'],
      citationIds: [2],
    },
    {
      id: 'honduras-1963-military-coups-villeda-morales',
      title: '4. 1963 – 1979: The 1963 Military Coup (López Arellano) & Agrarian Reform Struggles',
      period: '1963 – 1979',
      categoryTag: 'policies',
      summary: 'Oct 1963 coup stops democratic elections; 1969 Football War with El Salvador over peasant land.',
      details: `In October 1963, ten days before presidential elections, Colonel Oswaldo López Arellano launched a military coup to prevent Liberal reformer Ramón Villeda Morales from completing mild land reform.

In July 1969, land concentration ignited the 100-Hour "Football War" with El Salvador, as Honduran authorities expelled 300,000 Salvadoran peasant squatters to protect large Honduran landlord estates. [2][3]`,
      keyFigures: ['Oswaldo López Arellano', 'Ramón Villeda Morales'],
      citationIds: [2, 3],
    },
    {
      id: 'honduras-1980-uss-honduras-palmerola-cia-contras-battalion-316',
      title: '5. 1980 – 1989: "USS Honduras": Palmerola Base, CIA Contras & Battalion 316 Death Squads',
      period: '1980 – 1989',
      categoryTag: 'challenges',
      summary: '1980s: US turns Honduras into Palmerola military base for CIA Contras fighting Sandinista Nicaragua.',
      details: `During the 1980s, the Reagan administration transformed Honduras into a militarized US aircraft carrier ("USS Honduras"). The US built Palmerola Air Base (Soto Cano) to direct covert CIA Contra forces attacking Nicaragua.

US Ambassador John Negroponte and Honduran General Gustavo Álvarez Martínez directed **Battalion 316**, a US-trained military death squad that disappeared over 184 Honduran unionists, students, and Marxists. [3]`,
      keyFigures: ['John Negroponte (US Ambassador)', 'Gustavo Álvarez Martínez', 'Ronald Reagan'],
      citationIds: [3],
    },
    {
      id: 'honduras-2006-manuel-zelaya-2009-us-backed-coup',
      title: '6. 2006 – 2009: President Manuel Zelaya Reforms & The June 28, 2009 US-Backed Military Coup',
      period: '2006 – 2009',
      categoryTag: 'revolution',
      summary: '2006: Manuel Zelaya joins ALBA & raises minimum wage; June 28, 2009 military coup deposes Zelaya.',
      details: `Elected in 2005, President **Manuel Zelaya** shifted leftward: doubling the national minimum wage, joining Hugo Chávez's ALBA alliance, and providing free school meals.

On June 28, 2009, when Zelaya proposed a non-binding ballot referendum on convening a constituent assembly, the Honduran military kidnapped Zelaya at gunpoint, flying him in his pajamas to Costa Rica with tacit backing from US Secretary of State Hillary Clinton. [3][4]`,
      keyFigures: ['Manuel Zelaya', 'Roberto Micheletti (Coup Leader)', 'Hillary Clinton (US Secretary of State)'],
      citationIds: [3, 4],
    },
    {
      id: 'honduras-2010-narco-dictatorship-bertacaceres-martyrdom',
      title: '7. 2010 – 2020: The Narco-Dictatorship (Juan Orlando Hernández) & Berta Cáceres Martyrdom (2016)',
      period: '2010 – 2020',
      categoryTag: 'challenges',
      summary: 'JOH narco-dictatorship; March 3, 2016 assassination of indigenous Lenca leader Berta Cáceres.',
      details: `Following the coup, National Party leaders (Porfirio Lobo and Juan Orlando Hernández / JOH) established a corrupt narco-dictatorship. In 2017, JOH stole presidential elections through brazen vote fraud.

On March 3, 2016, indigenous Lenca leader **Berta Cáceres** (COPINH founder and Goldman Environmental Prize winner) was assassinated by military hitmen for leading peasant blockades against the Agua Zarca hydroelectric dam. (JOH was later extradited to the US in 2022 and convicted of cocaine trafficking). [4]`,
      keyFigures: ['Berta Cáceres', 'Juan Orlando Hernández (JOH)', 'Xiomara Castro'],
      citationIds: [4],
    },
    {
      id: 'honduras-present-xiomara-castro-libre-anti-imperialist-refoundation',
      title: '8. Present: President Xiomara Castro (LIBRE), China Relations & Anti-Imperialist Refoundation',
      period: 'Present',
      categoryTag: 'successes',
      summary: 'Nov 2021: Xiomara Castro elected 1st female President; establishes diplomatic relations with China in 2023.',
      details: `In November 2021, **Xiomara Castro** (wife of Manuel Zelaya and candidate of the LIBRE party) won a historic landslide election, becoming Honduras's first female President.

In March 2023, President Castro cut diplomatic ties with Taiwan, establishing official diplomatic and trade relations with the **People's Republic of China**, repealing privatized charter city laws (ZEDEs), and advocating for sovereign South-South integration. [3][4]`,
      keyFigures: ['Xiomara Castro', 'Manuel Zelaya', 'Xi Jinping'],
      citationIds: [3, 4],
    },
  ],

  sources: [
    {
      id: 1,
      label: 'Bananas: How the United Fruit Company Shaped the World and Created the Banana Republic',
      publisher: 'Peter Chapman / Canongate Books',
      year: '2007',
      excerpt: 'Definitive historical political economy of Samuel Zemurray, Cuyamel Fruit, 1911 mercenary invasion, and United Fruit monopolies.',
    },
    {
      id: 2,
      label: 'Honduras: State for Sale & The 1954 Great Banana Strike',
      publisher: 'Alison Acker / South End Press',
      year: '1988',
      excerpt: 'Documentary investigation of 1954 banana strike, United Fruit labor exploitation, and 1969 Football War.',
    },
    {
      id: 3,
      label: 'The US Invasion of Honduras: Palmerola Base, Battalion 316 Death Squads and 2009 Coup',
      publisher: 'James A. Morris / Westview Press (Honduras: Caudillo Politics and Military Rulers)',
      year: '1984',
      excerpt: 'Historical study of "USS Honduras", John Negroponte, Battalion 316, and the June 2009 US-backed coup against Manuel Zelaya.',
    },
    {
      id: 4,
      label: 'Berta Cáceres, COPINH Peasant Struggle and Xiomara Castro\'s LIBRE Victory',
      publisher: 'Nina Lakhani / Verso Books (Who Killed Berta Cáceres?)',
      year: '2020',
      excerpt: 'Investigative biography of Berta Cáceres\' martyrdom, JOH narco-state, and Xiomara Castro\'s 2021 anti-imperialist election.',
    },
  ],
};
