import type { CountryData } from '../types';

export const italyData: CountryData = {
  id: 'italy',
  name: "Italy",
  shortName: 'Italy',
  flagEmoji: '🇮🇹',
  flagUrl: '/images/flags/italy.svg',
  coverImage: '/images/history/italy.jpg',
  category: 'global-north',
  era: '1921 to Present',
  capital: 'Rome',
  keyLeaders: ['Benito Mussolini', 'Antonio Gramsci', 'Palmiro Togliatti', 'Enrico Berlinguer', 'Giorgia Meloni'],
  governingParty: "Brothers of Italy",
  governingIdeology: 'Capitalism',
  isHistoricState: false,
  
  officialGovUrl: 'https://www.governo.it/',
  overviewText: `Italy represents a major European capitalist state where foundational Marxist theoretical developments (**Antonio Gramsci's Hegemony Theory**) emerged alongside a mass communist working-class movement, which defeated Mussolini's fascism through an armed partisan resistance, only to face NATO and CIA clandestine subversion (**Operation Gladio**).

In the aftermath of WWI, revolutionary Turin workers established Factory Councils, analyzed by **Antonio Gramsci** in *L'Ordine Nuovo*, leading to the 1921 founding of the Italian Communist Party (**PCI**). In 1922, Benito Mussolini's fascist Blackshirts seized power, imprisoning Gramsci in 1926 (where he authored his famous *Prison Notebooks* on cultural hegemony). During WWII, the communist-led **Garibaldi Brigades** launched the armed anti-fascist Resistance (*Resistenza*), liberating northern cities and executing Mussolini in April 1945.

Following WWII, under **Palmiro Togliatti** and later **Enrico Berlinguer**, the PCI became the largest communist party in Western Europe (with 2 million members). During the **Years of Lead (Anni di piombo, 1969 to 1980)**, working-class wildcat strikes ("Hot Autumn 1969") were met by NATO and CIA Operation Gladio's "strategy of tension", where neo-fascist groups executed terrorist bombings (Piazza Fontana 1969, Bologna station 1980) to frame communists and block the PCI's "Historic Compromise". Under Giorgia Meloni's far-right government (2022 to present), Italian workers, dockworkers, and trade unions (CGIL, USB) have staged repeated national general strikes against austerity budgets, the draconian DDL 1660 anti-protest law, and NATO military escalation.`,

  contradictions: [
    "During the Cold War, the US CIA and NATO operated clandestine Operation Gladio stay-behind networks that collaborated with neo-fascist bombers to prevent the mass Italian Communist Party from entering government.",
    "Post-1992 privatization and European Union fiscal rules dismantled state industrial holdings and compressed real wages across three decades.",
    "Prime Minister Giorgia Meloni's far-right government abolished the Citizens' Income anti-poverty program and passed the authoritarian DDL 1660 Security Bill criminalizing roadblocks, factory picket lines, and housing occupations.",
    "While cutting domestic healthcare, education, and industrial jobs, the Italian state finances extraterritorial migrant detention camps in Albania and expands NATO weapons production, sparking nationwide CGIL and USB general strikes."
  ],

  quickFacts: [
    { label: 'Gramsci and Prison Notebooks (1926)', value: 'Antonio Gramsci authored foundational Marxist theories of hegemony and passive revolution [1]' },
    { label: 'Garibaldi Partisan Resistance (1943)', value: 'Communist guerrillas led armed anti-fascist liberation, executing Mussolini in 1945 [2]' },
    { label: 'Years of Lead and CIA Operation Gladio', value: 'NATO and CIA strategy of tension used neo-fascist bombings to stop communist power [3]' },
    { label: 'Eurocommunism and Berlinguer (1970s)', value: 'PCI under Berlinguer mobilized 2M members, pioneering Western European socialism [4]' },
  ],

  timeline: [
    {
      id: 'italy-1921-gramsci-ordine-nuovo-pci-founding',
      title: '1. 1921: Antonio Gramsci, L\'Ordine Nuovo, Factory Councils and Founding of the PCI',
      period: '1921',
      categoryTag: 'revolution',
      summary: 'Jan 1921: Antonio Gramsci, Amadeo Bordiga and Palmiro Togliatti found Italian Communist Party (PCI).',
      details: `During the *Biennio Rosso* (Red Two Years, 1919 to 1920), 500,000 Italian metalworkers occupied factories in Turin and Milan, creating democratic worker factory councils analyzed by **Antonio Gramsci** in *L'Ordine Nuovo*.

On January 21, 1921, at the Livorno Congress, Gramsci, Amadeo Bordiga, and Palmiro Togliatti broke from reformist socialism to found the **Communist Party of Italy (PCI)** as a Marxist vanguard party. [1]`,
      keyFigures: ['Antonio Gramsci', 'Amadeo Bordiga', 'Palmiro Togliatti'],
      citationIds: [1],
    },
    {
      id: 'italy-1922-mussolini-fascism-gramsci-imprisonment',
      title: '2. 1922 to 1942: Mussolini Fascist Regime, Abyssinian War Crimes and Gramsci\'s Prison Notebooks',
      period: '1922 to 1942',
      categoryTag: 'challenges',
      summary: 'Oct 1922 March on Rome; Nov 1926: Gramsci imprisoned, writing Prison Notebooks before 1937 martyrdom.',
      details: `In October 1922, Benito Mussolini's fascist Blackshirts executed the March on Rome. In November 1926, the fascist regime outlawed the PCI and imprisoned Antonio Gramsci, with the fascist prosecutor declaring: "We must stop this brain from functioning for twenty years."

In prison, Gramsci authored his 3,000-page ***Prison Notebooks*** (*Quaderni del carcere*), developing revolutionary Marxist concepts of cultural hegemony, war of position, organic intellectuals, and passive revolution before dying in 1937. [1][2]`,
      keyFigures: ['Benito Mussolini', 'Antonio Gramsci', 'Palmiro Togliatti'],
      citationIds: [1, 2],
    },
    {
      id: 'italy-1943-resistenza-garibaldi-brigades-mussolini-execution',
      title: '3. 1943 to 1945: The Italian Anti-Fascist Resistance (Resistenza) and Execution of Mussolini',
      period: '1943 to 1945',
      categoryTag: 'revolution',
      summary: 'Sept 1943: Garibaldi Brigades lead 300,000 partisans; April 25, 1945 liberation and Mussolini execution.',
      details: `Following the September 1943 armistice, 300,000 Italian partisans organized the Committee of National Liberation (CLN). The communist-led **Garibaldi Brigades** (*Brigate Garibaldi*) formed the military core of the *Resistenza*.

On April 25, 1945 (Liberation Day), a general partisan insurrection liberated Milan and Turin. Communist partisans captured fleeing dictator Benito Mussolini and his mistress Clara Petacci, executing them at Dongo. [2]`,
      keyFigures: ['Luigi Longo', 'Palmiro Togliatti', 'Sandro Pertini'],
      citationIds: [2],
    },
    {
      id: 'italy-1946-togliatti-pci-mass-party-operation-gladio',
      title: '4. 1946 to 1968: Palmiro Togliatti, The Mass PCI Party and CIA Operation Gladio Subversion',
      period: '1946 to 1968',
      categoryTag: 'policies',
      summary: 'Palmiro Togliatti builds 2M-member PCI; NATO and CIA construct stay-behind network Operation Gladio.',
      details: `In June 1946, Italians voted to abolish the monarchy, establishing the Italian Republic. PCI General Secretary **Palmiro Togliatti** transformed the party into a mass working-class organization with 2.3 million members.

Fearing a communist electoral victory, the US CIA funneled millions to the ruling Christian Democracy (DC) party and established **Operation Gladio**, a secret NATO stay-behind paramilitary network aimed at subverting Italian left-wing politics. [2][3]`,
      keyFigures: ['Palmiro Togliatti', 'Luigi Longo', 'Alcide De Gasperi'],
      citationIds: [2, 3],
    },
    {
      id: 'italy-1969-hot-autumn-years-of-lead-red-brigades',
      title: '5. 1969 to 1979: The "Hot Autumn" (Autunno Caldo), Strategy of Tension and The Red Brigades',
      period: '1969 to 1979',
      categoryTag: 'challenges',
      summary: '1969 Hot Autumn wildcat strikes; Dec 1969 Piazza Fontana Gladio bombing; Red Brigades armed struggle.',
      details: `In late 1969, 1.5 million industrial workers launched wildcat strikes during the **Hot Autumn** (*Autunno Caldo*), winning factory council control. On December 12, 1969, neo-fascists colluding with state intelligence bombed Piazza Fontana in Milan, initiating the **Strategy of Tension** to frame communists.

During the **Years of Lead** (*Anni di piombo*), Marxist youth formed armed groups, including the **Red Brigades** (*Brigate Rosse*), which kidnapped and executed Christian Democratic leader Aldo Moro in May 1978. [3]`,
      keyFigures: ['Enrico Berlinguer', 'Aldo Moro', 'Renato Curcio (Red Brigades Founder)'],
      citationIds: [3],
    },
    {
      id: 'italy-1973-berlinguer-eurocommunism-historic-compromise',
      title: '6. 1973 to 1984: Enrico Berlinguer, Eurocommunism and The Historic Compromise',
      period: '1973 to 1984',
      categoryTag: 'successes',
      summary: 'Enrico Berlinguer develops Eurocommunism and Historic Compromise; 1976 PCI wins 34.4% of national vote.',
      details: `PCI General Secretary **Enrico Berlinguer** developed **Eurocommunism**, asserting independence from Moscow and advocating democratic socialist transformation inside Western Europe. Following the 1973 CIA coup in Chile, Berlinguer proposed the "Historic Compromise" (*Compromesso storico*) to prevent a fascist coup in Italy.

In 1976 parliamentary elections, the PCI achieved a historic high of 34.4% of the vote. Berlinguer's funeral in June 1984 drew 1 million working-class mourners in Rome. [3][4]`,
      keyFigures: ['Enrico Berlinguer', 'Georges Marchais (PCF)', 'Santiago Carrillo (PCE)'],
      citationIds: [3, 4],
    },
    {
      id: 'italy-1992-collapse-first-republic-berlusconi-privatization',
      title: '7. 1992 to 2021: Tangentopoli Crisis, Dissolution of PCI, Berlusconi Media Empire and EU Austerity',
      period: '1992 to 2021',
      categoryTag: 'challenges',
      summary: '1991 PCI dissolves into PDS; 1992 Tangentopoli scandal; billionaire media tycoon Berlusconi rules.',
      details: `In 1991, following the fall of the Berlin Wall, the PCI leadership dissolved the party, splitting into the Democratic Party of the Left (PDS) and Communist Refoundation (PRC). The 1992 *Mani Pulite* (Clean Hands) corruption scandal destroyed the old ruling parties.

Billionaire media tycoon **Silvio Berlusconi** dominated Italian politics for two decades, deregulating labor markets and privatizing state industrial holdings under EU Maastricht Treaty fiscal constraints, followed by technocratic EU austerity governments under Mario Monti and Mario Draghi. [4]`,
      keyFigures: ['Silvio Berlusconi', 'Fausto Bertinotti (PRC Leader)', 'Romano Prodi'],
      citationIds: [4],
    },
    {
      id: 'italy-present-meloni-far-right-eu-working-class',
      title: '8. 2022 to Present: Giorgia Meloni Far-Right Government, DDL 1660 Police Law and Mass General Strikes',
      period: '2022 to Present',
      categoryTag: 'challenges',
      summary: 'Meloni abolishes poverty relief and passes DDL 1660 anti-protest law; 2024 to 2026 CGIL and USB general strikes.',
      details: `In October 2022, **Giorgia Meloni** (leader of the post-fascist Brothers of Italy, FdI) became Prime Minister at the head of a far-right coalition with Matteo Salvini's League. Meloni's government abolished the Citizens' Income (*Reddito di cittadinanza*) anti-poverty lifeline for hundreds of thousands of low-income families, pushed the "differentiated autonomy" (*Autonomia differenziata*) law widening regional inequality between northern and southern Italy, and signed an extraterritorial deal with Albania to build offshore migrant detention camps.

To crush mounting labor and student dissent, the Meloni administration introduced and passed **DDL 1660 (the Security Bill)** in 2024 and 2025, a draconian law imposing multi-year prison sentences for road and railway blockades, factory picket lines, anti-eviction housing occupations, and passive resistance against strategic infrastructure. Between 2024 and 2026, Italy was swept by recurring nationwide general strikes organized by the **CGIL** confederation (led by Maurizio Landini) and militant grassroots unions (**USB**, Cobas, CUB). Hundreds of thousands of metalworkers (including Stellantis autoworkers striking against plant closures), transport workers, teachers, healthcare staff, and dockworkers blocking weapons shipments to Israel marched across Rome, Milan, Turin, and Genoa against Meloni's austerity budgets, police-state repression, and NATO war spending. [3][4]`,
      keyFigures: ['Giorgia Meloni', 'Matteo Salvini', 'Maurizio Landini (CGIL)', 'Elly Schlein'],
      citationIds: [3, 4],
    },
  ],

  sources: [
    {
      id: 1,
      label: 'Selections from the Prison Notebooks of Antonio Gramsci',
      publisher: 'Antonio Gramsci / International Publishers',
      year: '1971',
      excerpt: 'Foundational theoretical text developing revolutionary Marxist concepts of cultural hegemony, war of position, organic intellectuals, and passive revolution.',
    },
    {
      id: 2,
      label: 'The Italian Communist Party (PCI) and the Anti-Fascist Resistance (1943-1945)',
      publisher: 'Paul Ginsborg / Penguin Books (A History of Contemporary Italy)',
      year: '1990',
      excerpt: 'Comprehensive historical account of Garibaldi Partisan Brigades, Togliatti\'s mass PCI party, and post-war democratic statehood.',
    },
    {
      id: 3,
      label: 'NATO\'s Secret Armies: Operation Gladio and Terrorism in Western Europe and The Years of Lead',
      publisher: 'Daniele Ganser / Frank Cass Publishers',
      year: '2005',
      excerpt: 'Documentary investigation of CIA and NATO stay-behind network Operation Gladio, 1969 Piazza Fontana bombing, and strategy of tension.',
    },
    {
      id: 4,
      label: 'Enrico Berlinguer, Eurocommunism and the Political Economy of Modern Italy',
      publisher: 'Donald Sassoon / I.B. Tauris (The Strategy of the Italian Communist Party)',
      year: '1981',
      excerpt: 'Analysis of Eurocommunism, Historic Compromise, 1984 Berlinguer funeral, and post-1991 neoliberal restructuring.',
    },
  ],
};
