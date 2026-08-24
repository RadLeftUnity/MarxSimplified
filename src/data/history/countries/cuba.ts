import type { CountryData } from '../types';

export const cubaData: CountryData = {
  id: 'cuba',
  name: 'Republic of Cuba',
  shortName: 'Cuba',
  flagEmoji: '🇨🇺',
  flagUrl: '/images/flags/cuba.svg',
  coverImage: '/images/history/cuba.jpg',
  category: 'aes',
  era: '1959 – Present',
  capital: 'Havana',
  keyLeaders: ['Fidel Castro', 'Raúl Castro', 'Miguel Díaz-Canel'],
  governingParty: "Communist Party of Cuba (PCC)",
  governingIdeology: "Marxism-Leninism",
  isHistoricState: false,
  
  officialGovUrl: 'https://www.presidencia.gob.cu/',
  overviewText: `The Cuban Revolution of 1959 overthrew Fulgencio Batista's U.S.-backed dictatorship, ending centuries of colonial and neo-colonial exploitation. Under Spanish rule and subsequent American domination, Cuba was forced into a rigid sugar monocrop plantation economy, where foreign corporations owned Cuba's most fertile soil, sugar mills, and public utilities. Under the leadership of Fidel Castro and the July 26th Movement, Cuba dismantled the plantation system through revolutionary agrarian reform and embarked on a socialist path that transformed the island's social structure.

Despite enduring the longest illegal trade embargo (blockade) in modern history imposed by the United States, Cuba achieved world-renowned social metrics: complete eradication of illiteracy, a lower infant mortality rate than the United States, a 100% public healthcare system, and international medical brigades (Henry Reeve Contingent) sent to combat disasters and epidemics across the globe.

Understanding socialist Cuba requires looking beyond imperialist media narratives to analyze how popular democratic organs like the Organs of People's Power and Committees for the Defense of the Revolution operate, as well as Cuba's ongoing struggle against economic warfare, fuel shortages, and imperialist subversion.`,

  contradictions: [
    "The unilateral US embargo (enforced by the Helms-Burton Act and Trading with the Enemy Act) severely restricts foreign currency reserves and medical imports, leading to acute supply bottlenecks. US Department of State strategists explicitly weaponized this blockade (as outlined in the 1960 Mallory memo) to induce hunger and overthrow the socialist government.",
    "The collapse of CMEA trade forced Fidel Castro into the 1990s Special Period, introducing dual-currency mechanisms and international tourism. While preserving free universal healthcare and education, this created internal income disparities between state workers and tourism earners, which US NED-funded soft-power campaigns attempt to exploit.",
    "Heightened US sanctions under Trump and Biden (including placement on the bogus State Sponsors of Terrorism list) block fuel shipments and international banking transfers, leading to power outages and inflation. Imperialist media channels weaponize these artificially engineered shortages to incite anti-government demonstrations such as the July 2021 protests.",
    "Integrating agricultural cooperatives and small-scale private enterprises (cuentapropistas) builds productive forces under Miguel Díaz-Canel, yet introduces micro-capitalist property relations. The Communist Party of Cuba (PCC) maintains strict anti-corruption vigilance to prevent private wealth from capturing state regulatory policy."
  ],

  quickFacts: [
    { label: 'Literacy Rate', value: '99.8% (Literacy Campaign 1961)' },
    { label: 'Infant Mortality Rate', value: '4.0 per 1,000 (Lower than US per UNICEF [1])' },
    { label: 'Doctors Per Capita', value: '8.4 per 1,000 (Highest in the world [2])' },
    { label: 'U.S. Blockade Cost', value: '$150+ Billion in cumulative damages' },
  ],

  timeline: [
    {
      id: 'cuba-batista',
      title: '1. Pre-Revolutionary Cuba: US Neo-Colonialism and the Sugar Monocrop Plantation Economy',
      period: 'Pre-1959',
      categoryTag: 'pre-revolution',
      summary: 'Extreme sugar monoculture land inequality, US corporate ownership of sugar mills and casinos, ruthless political suppression.',
      details: `Before 1959, Cuba operated as a classic monocrop plantation economy and de facto economic colony of the United States. Following Spanish colonial sugar domination, American monopolies like the United Fruit Company and the Cuban-American Sugar Company seized over seventy-five percent of fertile agricultural land. This enforced sugar monoculture stripped Cuba of food sovereignty, forcing the island to import basic foodstuffs from the United States at inflated prices while leaving rural agricultural workers suffering from severe seasonal unemployment during the dead season (tiempo muerto).

Under U.S.-backed dictator Fulgencio Batista, Havana was turned into a playground for American mobsters and corporate cartels, while secret police tortured political dissidents and trade unionists fighting against plantation dispossession. [3]`,
      citationIds: [3],
    },
    {
      id: 'cuba-revolution',
      title: '2. The July 26th Movement and The Overthrow of Batista',
      period: '1953 – 1959',
      categoryTag: 'revolution',
      summary: 'Moncada barracks attack, Sierra Maestra guerrilla war, mass general strikes, and victory in 1959.',
      details: `Following the 1953 assault on the Moncada Barracks, Fidel Castro delivered his famous defense speech "History Will Absolve Me," outlining a revolutionary program for land reform, worker rights, and national sovereignty.

After returning from exile aboard the Granma in 1956, guerrilla forces in the Sierra Maestra organized rural peasants while urban resistance coordinated strikes in Havana. In January 1959, Batista fled the country, and the revolutionary forces established popular rule.`,
      keyFigures: ['Fidel Castro', 'Che Guevara', 'Camilo Cienfuegos', 'Vilma Espín'],
    },
    {
      id: 'cuba-girón',
      title: '3. Agrarian Reform, Literacy Campaign & Defeating the Bay of Pigs Invasion',
      period: '1959 – 1961',
      categoryTag: 'policies',
      summary: 'First Agrarian Reform Law; 1961 Great Literacy Campaign; defeating CIA mercenaries at Playa Girón.',
      details: `The revolutionary government enacted the First Agrarian Reform Law, capping land ownership and redistributing land to over 100,000 tenant peasants. In 1961, the Great Literacy Campaign sent 100,000 youth volunteers into rural areas, raising literacy to 99.8% in a single year.

In April 1961, a CIA-trained mercenary army invaded at the Bay of Pigs (Playa Girón). Workers' militias and the Cuban military crushed the invasion within 72 hours. On the eve of battle, Fidel Castro officially declared the Cuban Revolution to be socialist in character.`,
      keyFigures: ['Fidel Castro', 'Raúl Castro', 'Che Guevara'],
    },
    {
      id: 'cuba-socialism-building',
      title: '4. Building Socialist Institutions & Committees for the Defense of the Revolution',
      period: '1961 – 1975',
      categoryTag: 'policies',
      summary: 'Establishing CDR neighborhood security, nationalizing health/education, drafting the 1976 Socialist Constitution.',
      details: `To defend against US sabotage and CIA assassination attempts (over 600 documented plots), Cuba established the Committees for the Defense of the Revolution (CDRs)—neighborhood organization committees involving millions of citizens in local security, blood donation, and civic administration.

Healthcare and education were nationalized and made 100% free for all citizens. In 1975, the First Congress of the Communist Party of Cuba established formal central economic planning and drafted the 1976 Socialist Constitution, codifying the Organs of People's Power.`,
      keyFigures: ['Fidel Castro', 'Blas Roca', 'Vilma Espín'],
    },
    {
      id: 'cuba-internationalism',
      title: '5. Anti-Imperialist Solidarity: Defeating South African Apartheid in Angola',
      period: '1975 – 1989',
      categoryTag: 'successes',
      summary: 'Over 400,000 Cuban volunteers defeat white-supremacist South African forces in Angola (Cuito Cuanavale).',
      details: `Socialist Cuba became world-famous for its anti-imperialist internationalism. Between 1975 and 1991, at the request of Angola's MPLA government, over 400,000 Cuban soldiers and doctors volunteered in Operation Carlota.

In 1988, Cuban troops dealt a crushing defeat to the invading white-supremacist South African apartheid army at the Battle of Cuito Cuanavale. Nelson Mandela later declared that the Cuban victory at Cuito Cuanavale destroyed the myth of the invincible apartheid military and directly paved the way for Angola's independence and Namibia's liberation. [4]`,
      keyFigures: ['Fidel Castro', 'Nelson Mandela', 'Arnaldo Ochoa'],
      citationIds: [4],
    },
    {
      id: 'cuba-special-period',
      title: '6. The Special Period: Surviving USSR Collapse & Agro-Ecological Transition',
      period: '1990 – 1999',
      categoryTag: 'challenges',
      summary: 'Loss of 80% of trade after Soviet collapse; extreme fuel shortages; transition to organic urban farming (Organopónicos).',
      details: `The dissolution of the Soviet Union in 1991 triggered a severe economic crisis in Cuba known as the "Special Period in Time of Peace," as trade plummeted by 80% and oil imports collapsed.

Instead of submitting to imperialist demands or privatizing healthcare, Cuba adapted through organic agro-ecology, community organopónico urban farms, and building a world-leading biotechnology sector. Despite the US tightening its blockade via the Torricelli and Helms-Burton Acts, Cuban socialism survived intact.`,
      keyFigures: ['Fidel Castro', 'Carlos Lage'],
    },
    {
      id: 'cuba-biotech',
      title: '7. Biotechnology Revolution, Medical Diplomacy & Economic Updating',
      period: '2000 – 2018',
      categoryTag: 'successes',
      summary: 'Developing world-first vaccines (CIMAvax lung cancer vaccine); sending Henry Reeve doctors abroad; Lineamientos reforms.',
      details: `Investing in scientific human capital paid massive dividends: Cuban state bio-pharmaceutical institutes developed groundbreaking medical innovations, including CIMAvax-EGF (lung cancer treatment vaccine) and Heberprot-P (preventing diabetic amputations).

The Henry Reeve International Medical Contingent deployed thousands of doctors to combat Ebola in West Africa (2014) and assist earthquake victims globally. Under Raúl Castro, the Party introduced the Lineamientos (Economic Guidelines), updating socialist planning while protecting social security.`,
      keyFigures: ['Fidel Castro', 'Raúl Castro', 'Concepción Campa'],
    },
    {
      id: 'cuba-present-constitution-family-code',
      title: '8. 2019 – Present: The 2019 Constitution, Resisting US Blockade Power Grids Crises and International Solidarity',
      period: '2019 – Present',
      categoryTag: 'successes',
      summary: '2022 Family Code victory; 5 COVID-19 vaccines; resisting US blockade-engineered energy grid blackouts with international solidarity.',
      details: `In 2019, Cubans ratified a renewed socialist Constitution. In 2022, a public referendum approved the revolutionary Family Code, establishing landmark LGBTQ+ rights, equal marriage, and elder protections. During COVID-19, despite US sanctions blocking medical supplies, Cuban scientists developed five indigenous vaccines (Abdala and Soberana) and vaccinated over ninety percent of the population. Concurrently, Cuban workers mobilized en masse to defeat USAID and NED hybrid warfare soft-coup attempts (such as the July 2021 color revolution attempt).

In 2024, Cuba faced acute electrical power grid blackouts caused by sixty-plus years of the illegal US economic blockade. US President Donald Trump placed Cuba on the arbitrary US "State Sponsors of Terrorism" (SSOT) list, a coercive designation maintained by the Biden administration that blocks Cuba's access to international banking channels and imposes secondary sanctions on foreign oil tankers attempting to dock in Cuban ports. Starved of foreign currency reserves, state power utility Unión Eléctrica (UNE) was unable to purchase spare parts for aging thermoelectric power plants (such as the Antonio Guiteras facility) or secure sufficient heavy crude fuel. This vulnerable state was further battered by Category 3 Hurricane Oscar and Hurricane Rafael, which damaged high-voltage electrical towers.

In response to the imperialist siege, international solidarity from Global South allies proved crucial. Mexico dispatched technical repair crews and emergency fuel tankers, Russia delivered crude oil shipments, China supplied solar grid generators and electrical infrastructure equipment, and Venezuela maintained energy solidarity. Domestically, the socialist state deployed emergency electrical brigades to restore power to hospitals and water pumping stations while accelerating national solar power installation projects to build renewable energy sovereignty. [1][2][3][4]`,
      keyFigures: ['Miguel Díaz-Canel', 'Raúl Castro', 'Concepción Campa'],
      citationIds: [1, 2, 3, 4],
    },
  ],

  sources: [
    {
      id: 1,
      label: 'UNICEF Country Statistics: Cuba Infant Health & Literacy Metrics',
      publisher: 'UNICEF Data & Analytics Division',
      year: '2022',
      url: 'https://data.unicef.org/country/cub/',
      excerpt: 'Cuba maintains near-universal child literacy (99.8%) and infant mortality rate under 5 per 1,000 live births.',
    },
    {
      id: 2,
      label: 'World Health Organization (WHO) Global Health Observatory: Doctor Density',
      publisher: 'World Health Organization',
      year: '2021',
      excerpt: 'Cuba has the highest density of physicians relative to population globally (~8.4 medical doctors per 1,000 people).',
    },
    {
      id: 3,
      label: 'The Economic Transformation of Cuba',
      publisher: 'Edward Boorstein / Monthly Review Press',
      year: '1968',
      excerpt: 'Detailed analysis of pre-revolutionary US corporate dominance over Cuban land and sugar, and the socialist planning response.',
    },
    {
      id: 4,
      label: 'How Cuba Helped End Apartheid in South Africa',
      publisher: 'Piero Gleijeses / University of North Carolina Press',
      year: '2002',
      excerpt: 'Historical study of Cuban military internationalism in Angola and the decisive Battle of Cuito Cuanavale.',
    },
  ],
};
