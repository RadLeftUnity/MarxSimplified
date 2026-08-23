import type { CountryData } from '../types';

export const dominicanRepublicData: CountryData = {
  id: 'dominican-republic',
  name: "Dominican Republic",
  shortName: 'Dominican Republic',
  flagEmoji: '🇩🇴',
  flagUrl: '/images/flags/dominican-republic.svg',
  coverImage: '/images/history/dominican-republic.jpg',
  category: 'global-south',
  era: '1844 – Present',
  capital: 'Santo Domingo',
  keyLeaders: ['Juan Pablo Duarte', 'Gregorio Luperón', 'Rafael Trujillo', 'Juan Bosch', 'Francisco Caamaño', 'Leonel Fernández', 'Luis Abinader'],
  governingParty: "Modern Revolutionary Party",
  governingIdeology: 'Capitalism',
  isHistoricState: false,
  
  officialGovUrl: 'https://presidencia.gob.do/',
  overviewText: `The Dominican Republic represents a Caribbean nation shaped by European colonial plunder, Spanish re-annexation wars, a 31-year US-backed fascist dictatorship (Rafael Trujillo), and direct US military invasion (1965 Operation Power Pack) to suppress popular democratic revolution.

On February 27, 1844, Juan Pablo Duarte and the Trinitarios proclaimed Dominican independence. When conservative elites attempted to sell the country back to Spain, General Gregorio Luperón led the guerrilla War of Restoration (1861–1865), defeating Spanish colonial troops and securing sovereign republic status. In 1916, US Marines invaded, occupying the country until 1924 to enforce debt collection for Wall Street banks and expand sugar monopolies (South Porto Rico Sugar Company).

US occupation installed military officer Rafael Trujillo, who ruled as a brutal dictator from 1930 to 1961, executing the 1937 Parsley Massacre of 20,000 Haitians. Following Trujillo's assassination, left-leaning reformer Juan Bosch won democratically in 1962, promising land reform. When a military coup ousted Bosch, a popular constitutionalist uprising led by Colonel Francisco Caamaño took up arms in April 1965. US President Lyndon B. Johnson launched a massive invasion, landing 42,000 US Marines to crush the constitutionalists and install US puppet Joaquín Balaguer. Today, the Dominican Republic operates as a tourism and free-trade export economy.`,

  contradictions: [
    "The 1965 US military invasion (Operation Power Pack) crushed Colonel Francisco Caamaño's constitutionalist revolution, enforcing a neoliberal export economy dominated by US hotel monopolies and free-trade zone garment assembly.",
    "Dominican ruling elites weaponize anti-Haitian racialized chauvinism to divide working-class agricultural labor and suppress union organizing among sugar cane plantation workers.",
    "Decades of foreign debt servicing and privatization under Balaguer and successive administrations created high urban unemployment and severe inequality in healthcare access.",
    "Popular protests against mining concessions (such as Pueblo Viejo gold extractions) clash with foreign multinational mining corporations backed by domestic comprador politicians."
  ],

  quickFacts: [
    { label: '1865 War of Restoration Victory', value: 'Gregorio Luperón led guerrilla war defeating Spanish re-annexation army [1]' },
    { label: '1916–1924 US Military Occupation', value: 'US Marines occupied Santo Domingo to enforce Wall Street sugar monopolies [2]' },
    { label: '31-Year US-Backed Trujillo Dictatorship', value: 'Rafael Trujillo ruled through state terror, executing 1937 Parsley Massacre [3]' },
    { label: 'April 1965 US Invasion (42,000 Marines)', value: 'US military invaded Santo Domingo to crush Caamaño\'s popular democratic revolution [4]' },
  ],

  timeline: [
    {
      id: 'dominican-republic-1492-taino-genocide-trinitarios-1844',
      title: '1. 1492 – 1844: Spanish Colonial Enclosure, Taíno Extermination & Feb 27, 1844 Independence',
      period: '1492 – 1844',
      categoryTag: 'pre-revolution',
      summary: '1492 Columbus invasion; Taíno genocide; Feb 27, 1844 independence proclaimed by Juan Pablo Duarte.',
      details: `In 1492, Christopher Columbus landed on Hispaniola, inaugurating Spanish colonial gold extraction and the near-total extermination of the native Taíno population.

On February 27, 1844, **Juan Pablo Duarte** and the secret patriotic organization *La Trinitaria* declared independent Dominican statehood, freeing Santo Domingo from Haitian governance. [1]`,
      keyFigures: ['Juan Pablo Duarte', 'Francisco del Rosario Sánchez', 'Matías Ramón Mella'],
      citationIds: [1],
    },
    {
      id: 'dominican-republic-1861-war-of-restoration-luperon',
      title: '2. 1861 – 1865: The War of Restoration: Defeating Spanish Re-Annexation',
      period: '1861 – 1865',
      categoryTag: 'revolution',
      summary: '1861 Pedro Santana sells nation to Spain; 1863-1865 Luperón leads guerrilla war defeating Spain.',
      details: `In 1861, conservative dictator Pedro Santana illegally annexed the Dominican Republic back to the Spanish Empire.

In August 1863, General **Gregorio Luperón** launched the War of Restoration. Mobilizing Afro-Dominican peasants in guerrilla warfare, Luperón crushed Spanish colonial garrisons, forcing Spain to withdraw its troops in July 1865. [1]`,
      keyFigures: ['Gregorio Luperón', 'Pedro Santana (Colonial Traitor)', 'Santiago Rodríguez'],
      citationIds: [1],
    },
    {
      id: 'dominican-republic-1916-first-us-military-occupation',
      title: '3. 1916 – 1924: The First US Military Occupation & Wall Street Sugar Monopolies',
      period: '1916 – 1924',
      categoryTag: 'challenges',
      summary: 'May 1916: US Marines invade Santo Domingo; martial law enforces Wall Street bank debt collection.',
      details: `In May 1916, US President Woodrow Wilson ordered the military invasion of Santo Domingo. US Marines imposed martial law, disarmed the population, and seized custom houses to guarantee loan repayments to National City Bank of New York.

US sugar corporations (South Porto Rico Sugar Company) expropriated thousands of peasant land titles, while eastern peasant guerrillas (*Gavilleros*) waged anti-occupation resistance until US troops withdrew in 1924. [2]`,
      keyFigures: ['Woodrow Wilson', 'Vicente Evangelista (Gavillero Leader)'],
      citationIds: [2],
    },
    {
      id: 'dominican-republic-1930-trujillo-dictatorship-parsley-massacre',
      title: '4. 1930 – 1961: The 31-Year US-Backed Rafael Trujillo Dictatorship & 1937 Parsley Massacre',
      period: '1930 – 1961',
      categoryTag: 'challenges',
      summary: 'Trujillo establishes fascist police state; 1937 Parsley Massacre of 20,000 Haitians; 1960 Mirabal Sisters.',
      details: `Trained by the US Marine occupation force, National Guard commander **Rafael Trujillo** seized power in 1930, ruling for 31 years as a bloody dictator who owned 60% of the nation's sugar mills.

In October 1937, Trujillo ordered the **Parsley Massacre** (El Corte), slaughtering 20,000 Haitian and Afro-Dominican border workers. On November 25, 1960, Trujillo's secret police assassinated the revolutionary **Mirabal Sisters** (Las Mirabal), sparking popular outrage until Trujillo was assassinated in May 1961. [3]`,
      keyFigures: ['Rafael Trujillo', 'Patria Mirabal', 'Minerva Mirabal', 'Maria Teresa Mirabal'],
      citationIds: [3],
    },
    {
      id: 'dominican-republic-1962-juan-bosch-leftist-election',
      title: '5. 1962 – 1963: The Democratic Election of Juan Bosch & The 1963 Right-Wing Military Coup',
      period: '1962 – 1963',
      categoryTag: 'revolution',
      summary: 'Dec 1962: Leftist scholar Juan Bosch elected president; sept 1963 military coup backed by landlords.',
      details: `In December 1962, prominent anti-Trujillo leftist scholar **Juan Bosch** won the presidency in a landslide for the Dominican Revolutionary Party (PRD).

Bosch promulgated a radical 1963 progressive constitution guaranteeing labor rights, land distribution, and secular education. Seven months later, in September 1963, US-aligned military officers and Catholic conservative elites launched a coup, exiling Bosch. [3][4]`,
      keyFigures: ['Juan Bosch', 'Elias Wessin y Wessin (Coup Leader)'],
      citationIds: [3, 4],
    },
    {
      id: 'dominican-republic-1965-constitutionalist-uprising-us-invasion',
      title: '6. 1965: The April 1965 Constitutionalist Uprising & US Military Invasion (42,000 Marines)',
      period: '1965',
      categoryTag: 'revolution',
      summary: 'April 24, 1965: Caamaño leads popular revolution; April 28: 42,000 US Marines invade to stop "another Cuba".',
      details: `On April 24, 1965, constitutionalist military officers led by Colonel **Francisco Caamaño** and armed civilian popular commandos took up arms in Santo Domingo, defeating the military junta to restore Juan Bosch.

On April 28, fearing a socialist revolution, US President Lyndon B. Johnson launched **Operation Power Pack**, landing 42,000 US Marines and 82nd Airborne troops in Santo Domingo. US forces bombarded constitutionalist strongholds, killing thousands of civilians and installing a right-wing puppet regime. [4]`,
      keyFigures: ['Francisco Caamaño', 'Juan Bosch', 'Lyndon B. Johnson (US Invader)'],
      citationIds: [4],
    },
    {
      id: 'dominican-republic-1966-balaguer-12-years-imf-debt',
      title: '7. 1966 – 1996: Joaquín Balaguer Regime, CIA Death Squads & IMF Structural Adjustment',
      period: '1966 – 1996',
      categoryTag: 'challenges',
      summary: 'Balaguer "12 Years" repressive rule; CIA-backed death squad (La Banda); 1984 IMF austerity riots.',
      details: `Following the US invasion, Trujillo protege Joaquín Balaguer was installed in rigged 1966 elections. During his "12 Years" rule (1966–1978), CIA-funded death squads (*La Banda Colorá*) murdered over 3,000 leftist trade unionists and student leaders.

In April 1984, popular anti-IMF food riots erupted across Santo Domingo against price increases, leaving over 100 protesters dead by army gunfire. [3][4]`,
      keyFigures: ['Joaquín Balaguer', 'Francisco Caamaño (Martyred in 1973 guerrilla landing)'],
      citationIds: [3, 4],
    },
    {
      id: 'dominican-republic-present-tourism-sweatshops-working-class',
      title: '8. Present: Resort Tourism, Export Processing Zones & Working-Class Realities',
      period: 'Present',
      categoryTag: 'challenges',
      summary: 'Tourism mega-resorts; free-trade processing sweatshops; President Luis Abinader (PRM).',
      details: `Today, under President Luis Abinader, the Dominican Republic relies heavily on foreign resort tourism, mining exports (Pueblo Viejo gold mine), and free-trade processing sweatshops.

Dominican working-class and peasant organizations continue organizing for labor rights, public healthcare funding, and anti-racist solidarity against state deportations of Haitian sugarcane cutters. [3][4]`,
      keyFigures: ['Luis Abinader', 'Leonel Fernández', 'Danilo Medina'],
      citationIds: [3, 4],
    },
  ],

  sources: [
    {
      id: 1,
      label: 'The Dominican War of Restoration and Gregorio Luperón',
      publisher: 'Frank Moya Pons / Forum Press',
      year: '1995',
      excerpt: 'Comprehensive historical account of Juan Pablo Duarte, the 1865 War of Restoration, and Luperón\'s guerrilla victory over Spain.',
    },
    {
      id: 2,
      label: 'The US Marine Occupation of the Dominican Republic (1916-1924)',
      publisher: 'Bruce J. Calder / University of Texas Press (The Impact of Intervention)',
      year: '1984',
      excerpt: 'Documentary investigation of Wall Street bank debt enforcement, sugar monopoly land theft, and Gavillero peasant resistance.',
    },
    {
      id: 3,
      label: 'The Trujillo Dictatorship, Mirabal Sisters and 1965 US Invasion',
      publisher: 'Piero Gleijeses / Johns Hopkins University Press (The Dominican Crisis)',
      year: '1978',
      excerpt: 'Definitive political economy account of Trujillo\'s 31-year terror, Juan Bosch\'s 1962 election, and Operation Power Pack.',
    },
    {
      id: 4,
      label: 'Dominican Constitutionalist Revolution and 1965 US Imperialist Intervention',
      publisher: 'Roberto Cassá / Editora Alfa y Omega',
      year: '2005',
      excerpt: 'Historical materialist study of Colonel Francisco Caamaño, popular commando armed struggles, and 42,000 US Marines invading Santo Domingo.',
    },
  ],
};
