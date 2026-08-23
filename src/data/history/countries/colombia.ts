import type { CountryData } from '../types';

export const colombiaData: CountryData = {
  id: 'colombia',
  name: "Colombia",
  shortName: 'Colombia',
  flagEmoji: '🇨🇴',
  flagUrl: '/images/flags/colombia.svg',
  coverImage: '/images/history/colombia.jpg',
  category: 'global-south',
  era: '1928 – Present',
  capital: 'Bogotá',
  keyLeaders: ['Jorge Eliécer Gaitán', 'Manuel Marulanda (Tirofijo)', 'Camilo Torres', 'Alfonso Cano', 'Álvaro Uribe', 'Gustavo Petro', 'Francia Márquez'],
  governingParty: "Historic Pact",
  governingIdeology: "Social Democracy",
  isHistoricState: false,
  
  officialGovUrl: 'https://petro.presidencia.gov.co/',
  overviewText: `Colombia represents a nation shaped by brutal landlord land dispossession, foreign corporate extraction (United Fruit Company), decades of US military intervention (Plan Colombia), and a historic 60-year Marxist guerrilla struggle (FARC-EP) that recently culminated in the election of the nation's first left-wing government (Gustavo Petro and Francia Márquez).

On December 6, 1928, the Colombian military executed the infamous Banana Massacre (Masacre de las Bananeras) in Ciénaga, opening fire on 25,000 striking United Fruit Company workers who demanded 8-hour workdays and cash wages, killing over 1,000 workers (immortalized by Gabriel García Márquez in One Hundred Years of Solitude). Popular socialist leader Jorge Eliécer Gaitán exposed the massacre in parliament. When Gaitán was assassinated in Bogotá on April 9, 1948, the country erupted into La Violencia (1948–1958), a decade of partisan landlord terror killing 300,000 peasants.

In May 1964, following a US-backed military assault on the autonomous peasant enclave of Marquetalia, Manuel Marulanda (Tirofijo) founded the FARC-EP (Revolutionary Armed Forces of Colombia), launching a 50-year Marxist peasant war. In 2000, Washington poured 10+ billion dollars into Plan Colombia, militarizing the country alongside right-wing paramilitary death squads (AUC under Álvaro Uribe). Following the 2016 Havana Peace Accords, popular mass strikes propelled former M-19 guerrilla Gustavo Petro and Afro-Colombian land defender Francia Márquez to a historic 2022 presidential victory.`,

  contradictions: [
    "The historic 2022 election of Gustavo Petro and Francia Márquez established Colombia's first left-wing government, proposing agrarian reform and health system nationalization. Domestic oligarchic media and right-wing paramilitary networks actively organize lawfare to sabotage reforms.",
    "Decades of US Plan Colombia military funding (10+ billion dollars) created 7 US military base access agreements, turning Colombia into NATO's primary South American partner and a launchpad for regional destabilization against Venezuela.",
    "Right-wing paramilitary groups allied with landowning elites continue targeting trade unionists, indigenous leaders, and peasant activists to protect illegal land grabs executed during decades of civil war.",
    "Redistributing fertile land to displaced peasant families builds grass-roots agrarian production, yet requires constant state protection against narco-paramilitary violence and corporate mining lobbies."
  ],

  quickFacts: [
    { label: '1928 Banana Massacre (UFCO)', value: 'Army massacred 1,000+ striking United Fruit workers in Ciénaga [1]' },
    { label: '1948 Gaitán Assassination & La Violencia', value: 'Bogotazo uprising & 10-year landlord terror war killing 300,000 peasants [2]' },
    { label: 'FARC-EP Founding at Marquetalia (1964)', value: 'Manuel Marulanda founded Marxist guerrilla army after US-backed military assault [3]' },
    { label: '2022 Historic Victory (Petro & Márquez)', value: 'First left-wing government elected on anti-imperialist land & climate reform platform [4]' },
  ],

  timeline: [
    {
      id: 'colombia-1928-banana-massacre-united-fruit-cienaga',
      title: '1. 1928: The 1928 Banana Massacre (Masacre de las Bananeras) by United Fruit',
      period: '1928',
      categoryTag: 'challenges',
      summary: 'Dec 6, 1928: Colombian military massacres 1,000+ striking United Fruit Company workers in Ciénaga.',
      details: `In November 1928, 25,000 banana workers organized by union leader Raúl Mahecha launched a strike against the **United Fruit Company** in the Magdalena region, demanding basic labor rights, cash wages, and medical care.

On December 6, 1928, under pressure from US Ambassador Jefferson Caffery (who threatened a US Marine invasion), General Carlos Cortés Vargas ordered troops to fire machine guns into a peaceful gathering in the square of Ciénaga, killing over 1,000 striking workers. [1]`,
      keyFigures: ['Raúl Mahecha', 'General Carlos Cortés Vargas', 'Gabriel García Márquez (Author)'],
      citationIds: [1],
    },
    {
      id: 'colombia-1948-gaitan-assassination-bogotazo-la-violencia',
      title: '2. 1948 – 1958: The Assassination of Jorge Eliécer Gaitán, The Bogotazo & La Violencia',
      period: '1948 – 1958',
      categoryTag: 'revolution',
      summary: 'April 9, 1948: Gaitán assassinated; Bogotazo uprising ignites 10-year civil war (300,000 dead).',
      details: `Popular socialist leader **Jorge Eliécer Gaitán**, who built a mass working-class movement exposing landlord land theft, was assassinated in Bogotá on April 9, 1948.

His murder triggered the **Bogotazo** (a massive urban insurrection) and **La Violencia** (1948–1958), a decade of state and landlord terror against liberal and communist peasants, resulting in 300,000 deaths and massive land concentration. [2]`,
      keyFigures: ['Jorge Eliécer Gaitán', 'Fidel Castro (Attending student summit in Bogotá)'],
      citationIds: [2],
    },
    {
      id: 'colombia-1964-marquetalia-farc-ep-eln-founding',
      title: '3. 1964 – 1974: The Marquetalia Republic Assault & Founding of FARC-EP and ELN',
      period: '1964 – 1974',
      categoryTag: 'revolution',
      summary: 'May 1964: US-backed assault on Marquetalia peasant republic; Manuel Marulanda founds FARC-EP.',
      details: `In May 1964, 16,000 US-trained Colombian troops executed *Plan Lazo*, launching a military assault on the autonomous communist peasant enclave of Marquetalia.

Forty-eight surviving peasant defenders, led by **Manuel Marulanda Vélez (Tirofijo)** and Jacobo Arenas, formed the **FARC-EP** (Revolutionary Armed Forces of Colombia), while radical students and liberation theology priest **Camilo Torres Restrepo** founded the ELN. [2][3]`,
      keyFigures: ['Manuel Marulanda (Tirofijo)', 'Jacobo Arenas', 'Camilo Torres Restrepo'],
      citationIds: [2, 3],
    },
    {
      id: 'colombia-1984-up-genocide-peace-talks-assassinations',
      title: '4. 1984 – 1990: La Uribe Peace Accords & The State Genocide of Patriotic Union (UP)',
      period: '1984 – 1990',
      categoryTag: 'challenges',
      summary: '1985 UP legal party formed; military & drug cartel death squads assassinate 5,000 UP leaders.',
      details: `In 1984, the FARC signed the La Uribe Peace Accords with President Belisario Betancur, founding a legal political party, the **Patriotic Union (UP)**, which won dozens of mayoralties and parliamentary seats.

In response, military intelligence and drug cartel hitmen executed a systematic state genocide, murdering over 5,000 UP members, including presidential candidates Jaime Pardo Leal and Bernardo Jaramillo Ossa. [3]`,
      keyFigures: ['Jaime Pardo Leal', 'Bernardo Jaramillo Ossa', 'Belisario Betancur'],
      citationIds: [3],
    },
    {
      id: 'colombia-2000-plan-colombia-uribe-paramilitary-auc-false-positives',
      title: '5. 2000 – 2010: Plan Colombia, Álvaro Uribe, AUC Death Squads & "False Positives" Scandal',
      period: '2000 – 2010',
      categoryTag: 'challenges',
      summary: 'US pours $10B into Plan Colombia; President Uribe directs "False Positives" execution of 6,402 civilians.',
      details: `In 2000, US President Clinton launched **Plan Colombia**, pouring over $10 billion into military aid, chemical coca defoliation, and Green Beret deployments.

Under far-right President **Álvaro Uribe** (2002–2010), army units collaborated with AUC paramilitary death squads. To claim high body counts for US military aid, the army executed **6,402 innocent young civilians** ("False Positives"), dressing their bodies as guerrilla casualties. [3][4]`,
      keyFigures: ['Álvaro Uribe', 'Bill Clinton', 'Alfonso Cano (FARC Leader)'],
      citationIds: [3, 4],
    },
    {
      id: 'colombia-2016-havana-peace-accords-farc-demobilization',
      title: '6. 2016: The 2016 Havana Peace Accords & Demobilization of the FARC-EP',
      period: '2016',
      categoryTag: 'successes',
      summary: 'Nov 2016: FARC signs Havana Peace Accords in Cuba; demobilizing guerrillas for agrarian reform.',
      details: `In November 2016, following four years of negotiations in Havana, Cuba, President Juan Manuel Santos and FARC commander **Timoleón Jiménez (Timochenko)** signed the historic Havana Peace Accords.

The accords provided for FARC demobilization, rural land investment, and political participation, though right-wing governments systematically failed to fund rural agrarian reform commitments. [3][4]`,
      keyFigures: ['Juan Manuel Santos', 'Rodrigo Londoño (Timochenko)', 'Fidel Castro (Host of Peace Talks)'],
      citationIds: [3, 4],
    },
    {
      id: 'colombia-2021-paronacional-mass-strikes-police-brutality',
      title: '7. 2021: The 2021 Paro Nacional Mass General Strike & Working-Class Uprising',
      period: '2021',
      categoryTag: 'revolution',
      summary: 'April 2021: Mass national general strike against neoliberal tax reforms paralyzed major cities for months.',
      details: `In April 2021, a proposed neoliberal tax increase ignited the **Paro Nacional** (National Strike). Millions of youth, indigenous Minga marchers, trade unionists, and urban workers occupied the streets of Cali, Medellín, and Bogotá.

Despite brutal police repression (ESMAD killing 80 protesters), the mass movement defeated the tax bill and created the political momentum for historic electoral change. [4]`,
      keyFigures: ['Iván Duque (Right-Wing President)', 'Francia Márquez'],
      citationIds: [4],
    },
    {
      id: 'colombia-present-gustavo-petro-francia-marquez-historic-pact',
      title: '8. Present: Historic Victory of Gustavo Petro & Francia Márquez (Pacto Histórico)',
      period: 'Present',
      categoryTag: 'successes',
      summary: 'June 2022: Gustavo Petro & Francia Márquez elected in historic 1st left-wing victory in Colombian history.',
      details: `In June 2022, former M-19 guerrilla **Gustavo Petro** and Afro-Colombian environmental land defender **Francia Márquez** won a historic victory for the *Pacto Histórico*, establishing Colombia's first left-wing government.

The Petro administration has enacted progressive tax reforms, re-opened diplomatic and trade relations with Venezuela, pursued total peace talks (*Paz Total*) with the ELN, and advocated for global Amazon protection and fossil fuel transition. [3][4]`,
      keyFigures: ['Gustavo Petro', 'Francia Márquez', 'Nicolás Maduro'],
      citationIds: [3, 4],
    },
  ],

  sources: [
    {
      id: 1,
      label: 'The 1928 Banana Massacre in Colombia: United Fruit Company and Gabriel García Márquez',
      publisher: 'Judith White / University of London Press',
      year: '1978',
      excerpt: 'Documentary investigation of 1928 United Fruit strike, Ciénaga massacre, 1,000+ worker deaths, and Jorge Eliécer Gaitán\'s parliamentary exposure.',
    },
    {
      id: 2,
      label: 'Colombia: Inside the Labyrinth & La Violencia (1948-1958)',
      publisher: 'Jenny Pearce / Latin America Bureau',
      year: '1990',
      excerpt: 'Historical materialist political economy of Gaitán\'s assassination, the Bogotazo, 300,000 civil war casualties, and peasant land concentration.',
    },
    {
      id: 3,
      label: 'FARC-EP: 50 Years of Peasant Resistance, Plan Colombia and the 2016 Havana Accords',
      publisher: 'Garry Leech / Zed Books',
      year: '2011',
      excerpt: 'Definitive historical study of Marquetalia assault, Manuel Marulanda, Patriotic Union state genocide, and 2016 peace accords.',
    },
    {
      id: 4,
      label: 'Plan Colombia, The 6,402 False Positives Scandal and the 2022 Election of Gustavo Petro & Francia Márquez',
      publisher: 'Nazih Richani / SUNY Press (Systems of Violence)',
      year: '2013',
      excerpt: 'Critical political economy of US $10B Plan Colombia, Álvaro Uribe military death squads, 2021 Paro Nacional strike, and Petro-Márquez historic victory.',
    },
  ],
};
