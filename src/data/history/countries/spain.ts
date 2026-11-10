import type { CountryData } from '../types';

export const spainData: CountryData = {
  id: 'spain',
  name: 'Spain',
  shortName: 'Spain',
  flagEmoji: '🇪🇸',
  flagUrl: '/images/flags/spain.svg',
  coverImage: '/images/history/spain.jpg',
  category: 'global-north',
  era: '1931 to Present',
  capital: 'Madrid',
  keyLeaders: ['José Díaz', 'Dolores Ibárruri (La Pasionaria)', 'Manuel Azaña', 'Francisco Franco', 'Marcelino Camacho', 'Pedro Sánchez'],
  governingParty: 'Spanish Socialist Workers\' Party (PSOE)',
  governingIdeology: 'Capitalism',
  isHistoricState: false,

  officialGovUrl: 'https://www.lamoncloa.gob.es/lang/en/',
  overviewText: `Spain holds an indelible place in international revolutionary history as the frontline battlefield against European fascism during the 1936 to 1939 Spanish Civil War, where the Spanish working class, the Communist Party of Spain (PCE), and 35,000 anti-fascist volunteers of the Comintern-organized International Brigades fought General Francisco Franco's military coup backed by Nazi Germany and Fascist Italy.

Following the proclamation of the Second Spanish Republic in April 1931, workers and landless peasants organized militant strikes against semi-feudal latifundia landlords and the Catholic Church hierarchy, culminating in the heroic October 1934 Asturian Miners' Commune. When the Popular Front won the February 1936 elections, reactionary generals led by Francisco Franco launched a fascist rebellion in July 1936. While Britain, France, and the United States enforced a hypocritical "Non-Intervention" blockade that strangled the Republic while allowing Hitler's Condor Legion and Mussolini's troops to arm Franco, the Soviet Union and Mexico stood alone in supplying tanks, aircraft, and military advisors to the Spanish Republic, rallied by PCE leader Dolores Ibárruri ("La Pasionaria") under the immortal slogan "¡No pasarán!" (They shall not pass).

After the Republic's defeat in 1939, Franco established a 36-year fascist dictatorship that executed over 150,000 Republicans, imprisoned 400,000 workers in forced labor camps, and later integrated with US imperialism via the 1953 Pact of Madrid military base agreement. Following Franco's death in 1975, the 1978 Constitutional Transition preserved the Bourbon monarchy and granted amnesty to fascist criminals under the "Pact of Forgetting," integrating Spain into NATO (1982) and the European Union. From the 2011 15-M Indignados movement to the 2024 to 2026 mass rent and housing strikes, anti-overtourism protests, Valencia flood demonstrations, and general strike for Palestine, the Spanish working class continues its militant struggle against Wall Street vulture funds and austerity.`,

  contradictions: [
    "During the 1936 to 1939 Spanish Civil War, Western capitalist democracies (Britain, France, and the US) enforced an arms embargo on the elected Spanish Republic while US oil monopolies (Texaco) supplied Franco's Nazi-backed fascist army on credit.",
    "The post-1975 Transition and 1977 Amnesty Law ('Pact of Forgetting') shielded Francoist torturers and oligarchs from prosecution, preserving fascist-era corporate fortunes and restoring the Bourbon monarchy.",
    "Wall Street private equity vulture funds (such as Blackstone and Cerberus) and unregulated short-term tourist rentals bought up hundreds of thousands of apartments after the 2008 crash, driving mass evictions and pricing workers out of Madrid, Barcelona, Málaga, and the islands.",
    "Regional right-wing austerity and dismantled emergency units contributed to over 220 deaths during the October 2024 Valencia DANA floods, igniting massive working-class demonstrations alongside nationwide housing strikes."
  ],

  quickFacts: [
    { label: '1934 Asturian Miners\' Commune', value: '30,000 armed coal miners proclaimed a Workers\' Republic in Asturias for two weeks [1]' },
    { label: 'International Brigades (1936 to 1938)', value: '35,000 communist and anti-fascist volunteers from 50+ nations defended Madrid with Soviet aid [2]' },
    { label: 'Francoist White Terror (1939 to 1975)', value: 'Over 150,000 anti-fascists executed and 400,000 imprisoned in forced labor camps [3]' },
    { label: '2024 to 2026 Housing and Flood Protests', value: 'Mass tenant rent strikes, Valencia flood marches, and Palestine solidarity strikes shake Spain [4]' },
  ],

  timeline: [
    {
      id: 'spain-1931-second-republic-asturian-miners-commune',
      title: '1. 1931 to 1935: The Second Spanish Republic and The October 1934 Asturian Miners\' Commune',
      period: '1931 to 1935',
      categoryTag: 'revolution',
      summary: 'April 1931 proclamation of Second Republic; October 1934 Asturian Miners\' Commune proclaims Socialist Republic.',
      details: `In April 1931, mass municipal election victories by republican and socialist forces forced King Alfonso XIII to flee, establishing the Second Spanish Republic. However, semi-feudal aristocratic landlords (*latifundistas*), industrialists, and the military officer corps fiercely resisted land reform and secular education.

In October 1934, after the far-right CEDA party entered the national government, 30,000 Asturian coal miners united across communist, socialist, and anarcho-syndicalist unions under the *Alianza Obrera* (Workers' Alliance). Armed with dynamite, the miners seized Oviedo and proclaimed the Asturian Socialist Republic, abolishing money and organizing revolutionary committees for two weeks before General Francisco Franco deployed colonial troops from Morocco to crush the commune, killing 2,000 miners and imprisoning 30,000. [1]`,
      keyFigures: ['José Díaz', 'Dolores Ibárruri (La Pasionaria)', 'Manuel Azaña'],
      citationIds: [1],
    },
    {
      id: 'spain-1936-popular-front-civil-war-international-brigades',
      title: '2. 1936 to 1939: The Popular Front, Spanish Civil War, Soviet Aid and International Brigades',
      period: '1936 to 1939',
      categoryTag: 'revolution',
      summary: 'Feb 1936 Popular Front victory; July 1936 Franco fascist coup; PCE, USSR and International Brigades defend Republic.',
      details: `In February 1936, the left-wing **Popular Front** coalition won the national elections, freeing political prisoners and accelerating land redistribution. On July 17, 1936, reactionary military officers led by **Francisco Franco** launched an armed fascist coup. Armed workers and peasants defeated the coup in Madrid, Barcelona, and Valencia, collectivizing factories and estates.

Adolf Hitler (deploying the Condor Legion that bombed Guernica) and Benito Mussolini (sending 75,000 Italian troops) poured weapons into Franco's Nationalist army, while Britain, France, and the US imposed a "Non-Intervention" blockade on the Republic (even as US oil monopoly Texaco supplied Franco on credit). Only the **Soviet Union** and Mexico sent vital military aid, tanks, and fighter planes. Under General Secretary **José Díaz** and **Dolores Ibárruri ("La Pasionaria")**, the **Communist Party of Spain (PCE)** became the backbone of the Republican People's Army, joined by 35,000 Comintern volunteers in the **International Brigades** (including the Abraham Lincoln Brigade from the US) who held Madrid under the banner "¡No pasarán!" before the Republic fell in April 1939. [1][2]`,
      keyFigures: ['Dolores Ibárruri (La Pasionaria)', 'José Díaz', 'Enrique Líster', 'Juan Negrín'],
      citationIds: [1, 2],
    },
    {
      id: 'spain-1939-franco-dictatorship-maquis-ccoo',
      title: '3. 1939 to 1975: Francoist Fascist Dictatorship, White Terror, Maquis Guerrillas and CCOO Strikes',
      period: '1939 to 1975',
      categoryTag: 'challenges',
      summary: 'Franco executes 150,000+ Republicans; 1953 US Pact of Madrid bases; underground PCE and CCOO labor militancy.',
      details: `Following victory in 1939, General Francisco Franco established a clerico-fascist military dictatorship that outlawed all political parties and independent trade unions. During the *White Terror*, the Franco regime executed over 150,000 Republicans, buried tens of thousands in unmarked mass graves, imprisoned 400,000 workers in concentration camps to build monuments like the Valley of the Fallen, and stole up to 300,000 newborn babies from working-class Republican mothers.

Although Franco sent the Blue Division to fight alongside Nazi Germany on the Eastern Front, the United States rehabilitated his fascist regime during the Cold War, signing the **1953 Pact of Madrid** to establish US air and naval bases in Spain in exchange for economic aid. Inside Spain, Communist *Maquis* guerrillas fought in the mountains throughout the 1940s, while in the 1960s and 1970s underground PCE cadres led by **Marcelino Camacho** built the **Workers' Commissions (CCOO)**, organizing illegal wildcat strikes across Asturian mines, Basque steelworks, and Madrid factories that paralyzed the dying dictatorship. [2][3]`,
      keyFigures: ['Francisco Franco', 'Julián Grimau (Martyred PCE Leader)', 'Marcelino Camacho (CCOO Founder)'],
      citationIds: [2, 3],
    },
    {
      id: 'spain-1975-transition-pact-of-forgetting-nato',
      title: '4. 1975 to 2007: The 1978 Transition, Pact of Forgetting, NATO Entry and Neoliberal Integration',
      period: '1975 to 2007',
      categoryTag: 'policies',
      summary: '1975 death of Franco; 1977 Amnesty Law shields fascist criminals; 1982 NATO entry and EU privatization.',
      details: `After Franco died in November 1975, his handpicked successor King Juan Carlos I oversaw a controlled political transition (*La Transición*) designed to prevent a revolutionary rupture like Portugal's 1974 Carnation Revolution. Under Eurocommunist leader Santiago Carrillo, the PCE leadership accepted the restoration of the Bourbon monarchy and the 1977 Moncloa Pacts wage freeze, while the **1977 Amnesty Law ("Pact of Forgetting")** guaranteed total impunity for Francoist torturers, judges, and corporate oligarchs.

Under PSOE Prime Minister Felipe González (1982 to 1996), Spain joined **NATO** and the European Economic Community, executing brutal de-industrialization that shuttered state shipyards, steel mills, and coal mines while fueling a speculative real estate and banking bubble. [3]`,
      keyFigures: ['Santiago Carrillo', 'Felipe González', 'Julio Anguita (Izquierda Unida)'],
      citationIds: [3],
    },
    {
      id: 'spain-2008-crash-15m-indignados-podemos',
      title: '5. 2008 to 2023: The 2008 Financial Crash, Mass Evictions, 15-M Indignados and Coalition Governments',
      period: '2008 to 2023',
      categoryTag: 'challenges',
      summary: '2008 property crash brings 26% unemployment and 500,000 evictions; May 2011 15-M square occupations.',
      details: `The 2008 global financial crisis burst Spain's speculative housing bubble, driving overall unemployment to 26% (and youth unemployment above 55%). While the Spanish state bailed out bankrupt private banks with over €60 billion in public funds and amended Article 135 of the Constitution to prioritize debt payments to European banks over social spending, banks executed over 500,000 home foreclosures and evictions.

On May 15, 2011, millions of workers and youth occupied public squares in Madrid's Puerta del Sol and across 60 cities in the **15-M (Indignados) Movement**, while the **Platform for People Affected by Mortgages (PAH)** physically blocked police eviction squads. Simultaneously, Catalan independence mobilizations culminated in the October 2017 referendum, met by violent national police crackdowns and the imprisonment of Catalan political leaders. [3][4]`,
      keyFigures: ['Ada Colau (PAH Co-Founder)', 'Pablo Iglesias', 'Alberto Garzón (PCE)', 'Pedro Sánchez'],
      citationIds: [3, 4],
    },
    {
      id: 'spain-2024-present-housing-strikes-valencia-floods-palestine',
      title: '6. 2024 to Present: Anti-Overtourism Protests, Valencia Flood Outrage, Palestine Strike and Housing Revolt',
      period: '2024 to Present',
      categoryTag: 'challenges',
      summary: '2024 to 2025 anti-overtourism marches; Oct 2024 Valencia flood protests; Sept 2024 Palestine strike; 2026 housing general strike.',
      details: `From 2024 through 2026, Spain was convulsed by a massive convergence of working-class, tenant, and anti-imperialist mobilizations. Beginning in spring 2024, hundreds of thousands marched across the Canary Islands, Balearic Islands, Barcelona, and Málaga against unregulated mass tourism, short-term Airbnb conversions, and foreign real estate speculation that priced local workers out of their neighborhoods. In September 2024, trade unions (CGT, Solidaridad Obrera) and student coalitions staged a 24-hour general strike and campus encampments for Palestine, demanding a total arms embargo on Israel.

In late October 2024, catastrophic DANA flash floods struck Valencia, killing over 220 working-class residents after regional right-wing People's Party (PP) President Carlos Mazón had abolished the Valencian Emergency Unit and delayed phone flood alerts by hours while workers were trapped on factory shifts and roads; over 130,000 protesters repeatedly marched through Valencia demanding Mazón's resignation under the slogan "Only the people save the people." Throughout 2024 to 2026, tenant unions (*Sindicato de Inquilinas*) and labor confederations escalated nationwide housing demonstrations across 50+ cities, establishing long-term protest encampments in Madrid's Puerta del Sol after the eviction death of 87-year-old tenant Maricarmen Abascal and launching rent strikes and a nationwide general strike against Wall Street vulture funds (such as Blackstone) and parliamentary rejections of anti-eviction decrees. [4]`,
      keyFigures: ['Pedro Sánchez', 'Yolanda Díaz', 'Valeria Racu (Tenants Union)', 'Carlos Mazón'],
      citationIds: [4],
    },
  ],

  sources: [
    {
      id: 1,
      label: 'The Spanish Labyrinth and The 1934 Asturian Miners\' Commune',
      publisher: 'Ronald Fraser / Pantheon Books (Blood of Spain: An Oral History of the Spanish Civil War)',
      year: '1979',
      excerpt: 'Oral and materialist history of the Second Spanish Republic, the October 1934 Asturian workers\' uprising, and class polarization.',
    },
    {
      id: 2,
      label: 'They Shall Not Pass: The Autobiography of La Pasionaria and the Spanish Civil War',
      publisher: 'Dolores Ibárruri / International Publishers',
      year: '1966',
      excerpt: 'First-hand Marxist account by PCE leader Dolores Ibárruri of the Popular Front, Soviet military aid, the International Brigades, and the defense of Madrid.',
    },
    {
      id: 3,
      label: 'The Spanish Holocaust: Inquisition and Extermination in Twentieth-Century Spain',
      publisher: 'Paul Preston / W.W. Norton and Company',
      year: '2012',
      excerpt: 'Comprehensive documentation of Francoist fascist terror, mass executions, forced labor camps, and underground CCOO and PCE resistance.',
    },
    {
      id: 4,
      label: 'Vulture Funds, Tourist Speculation and the Spanish Housing and Labor Movements (2011 to 2026)',
      publisher: 'Jaime Palomera / Verso Books and Sindicato de Inquilinas Reports',
      year: '2025',
      excerpt: 'Political economy analysis of Blackstone housing monopolization, the 2024 Valencia flood crisis, and the 2024 to 2026 tenant and general strikes.',
    },
  ],
};

