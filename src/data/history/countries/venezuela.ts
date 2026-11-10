import type { CountryData } from '../types';

export const venezuelaData: CountryData = {
  id: 'venezuela',
  name: 'Venezuela',
  shortName: 'Venezuela',
  flagEmoji: '🇻🇪',
  flagUrl: '/images/flags/venezuela.svg',
  coverImage: '/images/history/venezuela.jpg',
  category: 'global-south',
  era: '1811 to Present',
  capital: 'Caracas',
  keyLeaders: ['Simón Bolívar', 'Ezequiel Zamora', 'Cipriano Castro', 'Rómulo Betancourt', 'Carlos Andrés Pérez', 'Delcy Rodríguez'],
  governingParty: 'State Administration',
  governingIdeology: 'Capitalism',
  isHistoricState: false,

  counterpartInfo: {
    id: 'venezuela-bolivarian',
    name: 'Bolivarian Republic of Venezuela (1999 to 2026)',
    label: 'Historic Socialist Equivalent',
    contrastText: 'The Bolivarian Socialist era (1999 to 2026) under Hugo Chávez and Nicolás Maduro nationalized PDVSA oil wealth to build 4.9 million free working-class homes, eradicate illiteracy, and empower 4,500 worker communes, contrasting with the pre-1999 Puntofijo comprador oligarchy and the post-2026 US military intervention and corporate petroleum restructuring.',
  },

  officialGovUrl: 'http://www.presidencia.gob.ve/',
  overviewText: `Venezuela holds over 303 billion barrels of proven crude oil reserves (the largest on Earth), making its territory a central battleground between national anti-colonial sovereignty and Anglo-American petroleum imperialism for more than a century.

Following Simón Bolívar's 19th-century liberation war against the Spanish Empire and Ezequiel Zamora's peasant Federal War (1859 to 1863), the discovery of vast oil fields at Mene Grande in 1914 turned Venezuela into a neocolonial petro-state dominated by Royal Dutch Shell and US Standard Oil. Under the US-backed dictatorship of Juan Vicente Gómez and later the 1958 Puntofijo Pact oligarchy (which explicitly banned the Communist Party of Venezuela from governance), foreign oil cartels and a domestic comprador elite siphoned off hundreds of billions of dollars in petroleum rents while over 65 percent of Venezuelans lived in poverty. When President Carlos Andrés Pérez imposed an IMF structural adjustment package in February 1989, the working class rose up in the Caracazo rebellion and was met with state military massacres that killed thousands.

From 1999 to 2026, the Bolivarian Revolution led by Hugo Chávez and Nicolás Maduro overthrew the Puntofijo oligarchy, established the Bolivarian Republic, and redirected nationalized PDVSA oil wealth into free healthcare, universal literacy, 4.9 million public homes, and 4,500 grassroots Socialist Communes. In response to the loss of Venezuelan crude, the United States and Britain waged a twenty-five-year hybrid war of coups, asset seizures, and economic blockades, culminating in the direct US military intervention of February 2026.

In early 2026, international legal and human rights organizations including Amnesty International denounced the US military assault against Venezuela as a flagrant breach of the UN Charter that severely weakened the international rules-based order. By August 2026, in a stark demonstration of the material motive behind Washington's aggression, Venezuelan crude exports surged to port infrastructure loading ceilings while US Gulf Coast refineries absorbed over half of Venezuela's total crude output under commercial licensing waivers.`,

  contradictions: [
    "For over a century, foreign petroleum conglomerates (Royal Dutch Shell, Jersey Standard / ExxonMobil, Gulf, and Chevron) collaborated with domestic comprador elites to extract Venezuela's 303 billion barrels of crude oil reserves while leaving the domestic economy dependent on imported goods.",
    "Under the 1958 to 1998 Puntofijo Pact, social-democratic (AD) and Christian-democratic (COPEI) elites excluded the Communist Party of Venezuela (PCV), collaborated with British IRD and US CIA propaganda operations, and enforced 1989 IMF shock therapy through the Caracazo military massacre.",
    "In June 2023, Donald Trump openly stated the material driver of US policy toward Caracas: 'When I left, Venezuela was ready to collapse. We would have taken it over; we would have gotten all that oil; it would have been right next door.'",
    "Following the February 2026 US military intervention denounced by Amnesty International as a violation of international law, US Gulf Coast refineries absorbed over 50 percent of Venezuela's surging heavy crude exports by August 2026, exposing the direct structural dependence of US energy capital on Venezuelan petroleum."
  ],

  geopolitics: {
    imperialismDetails: 'From the 1902 European naval blockade and 1960s British IRD covert media operations to twenty-five years of US sanctions, the $7B CITGO seizure, the $1.9B Bank of England gold freeze, and the February 2026 US military intervention, Venezuela has been continuously targeted by Anglo-American imperialism seeking control over the world\'s largest proven oil reserves.',
    allies: ['Latin American Popular Movements', 'Cuba', 'ALBA-TCP', 'Global South Sovereignty Blocs'],
    enemies: ['United States (SOUTHCOM / CIA / Department of State)', 'United Kingdom (Foreign Office / Shell)', 'ExxonMobil, Chevron and ConocoPhillips', 'International Monetary Fund (IMF)'],
  },

  quickFacts: [
    { label: 'Proven Crude Reserves', value: '303 Billion barrels (largest proven petroleum reserves on Earth) [2]' },
    { label: '1989 Caracazo Uprising', value: 'Thousands of working-class citizens killed by Puntofijo state troops enforcing IMF austerity [3]' },
    { label: 'Trump Oil Confession', value: '"We would have taken it over; we would have gotten all that oil" (Trump 2023 [4])' },
    { label: '2026 Amnesty Denunciation', value: 'Amnesty International condemned February 2026 US military aggression as illegal [5]' },
    { label: 'US Refinery Crude Absorption', value: 'US Gulf Coast refineries take in over half of Venezuela\'s 2026 crude oil exports [6]' },
  ],

  timeline: [
    {
      id: 'venezuela-1811-bolivar-gran-colombia-zamora',
      title: '1. 1811 to 1863: Simón Bolívar\'s Gran Colombia and Ezequiel Zamora\'s Peasant Federal War',
      period: '1811 to 1863',
      categoryTag: 'pre-revolution',
      summary: 'Simón Bolívar leads the anti-Spanish liberation war and founds Gran Colombia; Ezequiel Zamora leads the 1859 peasant Federal War.',
      details: `Venezuela's anti-colonial tradition originated in the 1811 declaration of independence and the revolutionary liberation struggle led by Simón Bolívar ("El Libertador"), which expelled the Spanish colonial empire and established the Republic of Gran Colombia (uniting modern Venezuela, Colombia, Ecuador, and Panama) in 1819. Before his death in 1830, Bolívar prophetically warned in 1829 that "the United States appears to be destined by Providence to plague America with misery in the name of liberty."

After landed creole oligarchs fractured Gran Colombia in 1830, impoverished peasants and formerly enslaved workers remained trapped on semi-feudal latifundio estates. From 1859 to 1863, radical agrarian revolutionary Ezequiel Zamora led peasant armies in the Federal War under the slogan "Land and Free Men" (*Tierra y Hombres Libres*) and "Horror to the Oligarchy," before his assassination allowed landlord elites to preserve estate concentration. [3]`,
      keyFigures: ['Simón Bolívar', 'Francisco de Miranda', 'Antonio José de Sucre', 'Ezequiel Zamora'],
      citationIds: [3],
    },
    {
      id: 'venezuela-1902-blockade-shell-1936-strike',
      title: '2. 1902 to 1945: The 1902 Imperialist Naval Blockade, Shell Oil Concessions and the 1936 Oil Strike',
      period: '1902 to 1945',
      categoryTag: 'pre-revolution',
      summary: '1902 British-German-Italian naval blockade; 1914 Mene Grande oil discovery under Gómez; heroic 1936 Maracaibo oil workers strike.',
      details: `In December 1902, British, German, and Italian warships imposed an armed naval blockade on Venezuelan ports, shelling coastal forts at Puerto Cabello to force foreign bank debt repayment against President Cipriano Castro, who rallied national resistance against European gunboat diplomacy.

Following the 1908 US-backed seizure of power by military dictator Juan Vicente Gómez, Venezuela was handed over to Anglo-Dutch and American oil monopolies. Royal Dutch Shell began operations in 1912 and struck the massive Zumaque-1 gusher at Mene Grande in 1914. Gómez allowed corporate attorneys from Shell and US Standard Oil (later Exxon) to literally draft Venezuela's petroleum laws while torturing political dissidents in La Rotunda prison.

Following Gómez's death, thousands of oil workers in Maracaibo organized by the underground Communist Party of Venezuela (PCV, founded in 1931) launched a historic 43-day general strike in December 1936 against starvation wages, segregated company camps, and lack of clean drinking water, cutting national crude output by 39 percent. By 1940, Venezuelan oil supplied the majority of Britain's wartime petroleum. [8]`,
      keyFigures: ['Cipriano Castro', 'Juan Vicente Gómez', 'Gustavo Machado (PCV)', 'Jesús Faría (Oil Union Leader)'],
      citationIds: [8],
    },
    {
      id: 'venezuela-1958-puntofijo-ird-propaganda',
      title: '3. 1958 to 1988: The Puntofijo Oligarchy, UK IRD Covert Propaganda and the 1976 "Chucuta" Nationalization',
      period: '1958 to 1988',
      categoryTag: 'challenges',
      summary: '1958 Puntofijo Pact excludes the Communist Party; declassified UK files expose British IRD and Shell covert operations; 1976 oil nationalization.',
      details: `After a popular uprising and military rebellion overthrew US-decorated dictator Marcos Pérez Jiménez in January 1958, leaders of Acción Democrática (AD), COPEI, and URD signed the Puntofijo Pact. Under US Cold War pressure, the pact established a corrupt two-party cartel that explicitly excluded the Communist Party of Venezuela (PCV), despite the PCV's decisive role in the anti-dictatorship underground, pushing leftists into the 1960s FALN guerrilla struggle.

Declassified British Foreign Office archives reveal that during the 1960s, Britain's covert Cold War propaganda arm, the Information Research Department (IRD), collaborated closely with Royal Dutch Shell and the CIA-linked Latin American Information Committee (LAIC) to subvert Venezuelan politics. The IRD and foreign corporations organized an advertising boycott against Venezuela's largest daily newspaper, *El Nacional*, forcing the purge of its left-wing editors and suppressing demands for genuine oil sovereignty.

Even when President Carlos Andrés Pérez formally nationalized the oil industry in 1976 to create PDVSA (a compromise criticized by Venezuelan Marxists as a *nacionalización chucuta* or "botched nationalization"), the state paid generous compensation to Exxon and Shell while granting them lucrative technology and marketing service contracts, and PDVSA operated as an autonomous corporate enclave detached from public welfare. [8]`,
      keyFigures: ['Rómulo Betancourt', 'Carlos Andrés Pérez', 'Pompeyo Márquez', 'Teodoro Petkoff'],
      citationIds: [8],
    },
    {
      id: 'venezuela-1989-caracazo-1992-rebellion',
      title: '4. 1989 to 1998: The 1989 Caracazo Anti-IMF Uprising, Neoliberalism and Collapse of the Fourth Republic',
      period: '1989 to 1998',
      categoryTag: 'revolution',
      summary: 'Feb 1989 Caracazo uprising against IMF shock therapy leaves thousands dead; 1992 Chávez rebellion shatters the Fourth Republic.',
      details: `By the late 1980s, falling oil prices, capital flight, and systemic elite corruption plunged the Fourth Republic into terminal crisis. After running on an anti-IMF campaign in 1988, President Carlos Andrés Pérez immediately betrayed voters in February 1989 by announcing *El Gran Viraje* ("The Great Turnaround"), an IMF structural adjustment package that deregulated prices, privatized state enterprises, and doubled working-class bus transit fares overnight.

On February 27, 1989, a spontaneous mass rebellion known as the **Caracazo** erupted across Guarenas, Caracas, and cities nationwide as starving barrio residents requisitioned food from corporate supermarkets. The AD government suspended constitutional guarantees and deployed the army into poor neighborhoods with live ammunition, slaughtering between 2,000 and 3,000 unarmed civilians and burying victims in mass graves like La Peste.

The Caracazo shattered the ideological legitimacy of the Puntofijo regime. On February 4, 1992, revolutionary military officers of the Revolutionary Bolivarian Movement-200 (MBR-200) led by Lt. Col. Hugo Chávez launched an armed uprising against Pérez. Though militarily contained, Chávez's televised declaration that the movement's goals had not been achieved "for now" (*por ahora*) galvanized the working class and paved the way for the collapse of the two-party oligarchy in 1998. [3]`,
      keyFigures: ['Hugo Chávez', 'Carlos Andrés Pérez', 'Rafael Caldera'],
      citationIds: [3],
    },
    {
      id: 'venezuela-1999-2025-bolivarian-socialist-period',
      title: '5. 1999 to 2025: The Bolivarian Socialist Republic, Social Missions and US Hybrid Sanctions Siege',
      period: '1999 to 2025',
      categoryTag: 'policies',
      summary: 'Chávez and Maduro build Bolivarian Socialism (4.9M GMVV homes, UNESCO literacy, 4,500 Communes) while defeating US coups and sanctions.',
      details: `Following Hugo Chávez's 1998 election and the ratification of the 1999 Bolivarian Constitution, Venezuela entered a twenty-seven-year Bolivarian Socialist period (examined in detail on the dedicated Bolivarian Republic of Venezuela 1999 to 2026 archive page). Reclaiming sovereign control over PDVSA after defeating the April 2002 US-backed coup and corporate oil lockout, the Bolivarian state funded Misión Barrio Adentro (free healthcare with Cuban doctors), eradicated illiteracy in 2005 (Misión Robinson), built over 4.9 million free public housing units (GMVV), and organized 49,000 Communal Councils and 4,500 Socialist Communes.

Under President Nicolás Maduro (elected 2013), Venezuela withstood over 930 unilateral US and EU sanctions, the theft of $7 billion in CITGO refining assets, the Bank of England's freeze of $1.9 billion in Venezuelan gold, the UK Foreign Office's covert "Venezuela Reconstruction Unit" (VRU), the Juan Guaidó parallel government plot, and the May 2020 Silvercorp mercenary invasion (Operation Gideon), achieving multi-year economic recovery and food self-sufficiency by 2024 to 2025. [1][2][3][8][9]`,
      keyFigures: ['Hugo Chávez', 'Nicolás Maduro', 'Diosdado Cabello', 'Delcy Rodríguez'],
      citationIds: [1, 2, 3, 8, 9],
    },
    {
      id: 'venezuela-2026-present-us-intervention-oil-surge',
      title: '6. 2026 to Present: The 2026 US Military Intervention, Amnesty Denunciation and US Refinery Crude Dependency',
      period: '2026 to Present',
      categoryTag: 'challenges',
      summary: 'Feb 2026 US military intervention denounced by Amnesty International; Venezuelan crude exports hit port ceilings as US refineries take half of output.',
      details: `In February 2026, the United States military launched a direct armed intervention against Venezuela, executing an extrajudicial military rendition operation against Caracas under US lawfare indictments. International human rights and legal organizations, including Amnesty International, issued immediate public denunciations, declaring that the February 2026 US military aggression violated the UN Charter, trampled sovereign equality, and severely weakened the international rules-based order.

By August 2026, the naked petroleum imperatives underlying US intervention were laid bare in global energy markets. Venezuelan crude oil exports surged to the physical loading ceilings of domestic port terminals at José and Bajo Grande, leaving supertankers waiting over a month offshore to load cargo.

In a striking confirmation of imperialist political economy, energy market data documented by Al Jazeera in August 2026 revealed that US Gulf Coast refineries were absorbing over half of Venezuela's total crude oil export output. Having been engineered specifically to process heavy sour Venezuelan crude from the Orinoco Belt, US petroleum monopolies led by Chevron and Valero moved immediately to capture Venezuelan barrels, confirming Donald Trump's 2023 admission that the singular objective of US regime-change warfare was to seize Venezuela's oil reserves. [4][5][6][7][9]`,
      keyFigures: ['Donald Trump', 'Nicolás Maduro', 'Delcy Rodríguez', 'US Petroleum Monopolies (Chevron / ExxonMobil)'],
      citationIds: [4, 5, 6, 7, 9],
    },
  ],

  sources: [
    {
      id: 1,
      label: 'Great Mission Housing Venezuela (GMVV) Official Milestones Report',
      publisher: 'Ministry of Popular Power for Housing and Habitat (Venezuela)',
      year: '2023',
      excerpt: 'Over 4.9 million state-constructed housing units completed and delivered to working-class families free of mortgage debt during the Bolivarian era.',
    },
    {
      id: 2,
      label: 'Economic Sanctions as Collective Punishment: The Case of Venezuela',
      publisher: 'Center for Economic and Policy Research (CEPR) - Mark Weisbrot and Jeffrey Sachs',
      year: '2019',
      url: 'https://cepr.net/images/stories/reports/venezuela-sanctions-2019-04.pdf',
      excerpt: 'U.S. sanctions reduced caloric intake, increased disease and mortality, and fit the definition of collective punishment under international law.',
    },
    {
      id: 3,
      label: 'Building the Commune: Radical Democracy in Venezuela',
      publisher: 'George Ciccariello-Maher / Verso Books',
      year: '2016',
      excerpt: 'Historical materialist study of the 1989 Caracazo uprising, the collapse of the Puntofijo oligarchy, and the rise of Venezuelan Communal Councils and Communes.',
    },
    {
      id: 4,
      label: 'Donald Trump Public Address Confession on Venezuelan Oil',
      publisher: 'North Carolina Speech Broadcast / Reuters and Associated Press Records',
      year: '2023',
      url: 'https://www.reuters.com/',
      excerpt: 'Former US President Donald Trump publicly admitting the imperialist motive: "When I left, Venezuela was ready to collapse. We would have taken it over; we would have gotten all that oil."',
    },
    {
      id: 5,
      label: 'USA Aggression Against Venezuela Further Weakens Rules-Based Order',
      publisher: 'Amnesty International News and Human Rights Documentation',
      year: '2026',
      url: 'https://www.amnesty.org/en/latest/news/2026/02/usa-aggression-against-venezuela-further-weakens-rules-based-order/',
      excerpt: 'Legal and human rights analysis denouncing the February 2026 US unilateral military aggression against Venezuela as a violation of sovereign equality and international law.',
    },
    {
      id: 6,
      label: 'Venezuela Oil Exports Surge with US Refineries Taking in Half of Output',
      publisher: 'Al Jazeera English / Energy Market Reports',
      year: '2026',
      url: 'https://www.aljazeera.com/news/2026/8/19/venezuela-oil-exports-surge-with-us-refineries-taking-in-half-of-output',
      excerpt: 'Report detailing Venezuela\'s August 2026 crude oil export surge and US Gulf Coast refineries absorbing over 50% of Venezuelan oil exports.',
    },
    {
      id: 7,
      label: 'Tankers Wait a Month as Venezuela Hits an Oil Export Ceiling',
      publisher: 'OilPrice.com / Global Energy News',
      year: '2026',
      url: 'https://oilprice.com/Latest-Energy-News/World-News/Tankers-Wait-a-Month-as-Venezuela-Hits-an-Oil-Export-Ceiling.html',
      excerpt: 'Energy sector analysis of domestic oil export infrastructure bottlenecks and heavy crude tanker queues at Venezuelan ports in 2026.',
    },
    {
      id: 8,
      label: 'One Hundred Years of British Interference in Venezuela',
      publisher: 'Declassified UK - Ana Maria Monjardino and John McEvoy',
      year: '2026',
      url: 'https://www.declassifieduk.org/one-hundred-years-of-british-interference-in-venezuela/',
      excerpt: 'Archival investigation detailing a century of British state and corporate intervention to control Venezuelan oil, including 1914 Shell concessions, the 1936 oil strike, and 1960s IRD propaganda campaigns.',
    },
    {
      id: 9,
      label: 'How Britain Helped Trump Destabilise Venezuela',
      publisher: 'Declassified UK - John McEvoy',
      year: '2026',
      url: 'https://www.declassifieduk.org/how-britain-helped-trump-destabilise-venezuela/',
      excerpt: 'Investigative report uncovering British government complicity in Venezuelan regime change, including the secret Foreign Office "Venezuela Reconstruction Unit" (VRU) and Bank of England gold freeze.',
    },
  ],
};
