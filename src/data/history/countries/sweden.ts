import type { CountryData } from '../types';

export const swedenData: CountryData = {
  id: 'sweden',
  name: "Sweden",
  shortName: 'Sweden',
  flagEmoji: '🇸🇪',
  flagUrl: '/images/flags/sweden.svg',
  coverImage: '/images/history/sweden.jpg',
  category: 'global-north',
  era: '1814 – Present',
  capital: 'Stockholm',
  keyLeaders: ['Hjalmar Branting', 'Tage Erlander', 'Olof Palme', 'Carl Bildt', 'Ulf Kristersson'],
  governingParty: "Moderate Party",
  governingIdeology: "Social Democracy",
  isHistoricState: false,

  officialGovUrl: 'https://www.government.se/',
  overviewText: `Sweden represents the classic model of Nordic social democracy—a compromise forged between monopoly capital and organized labor that preserved private capitalist ownership of the means of production while constructing an advanced welfare state (*Folkhemmet*).

While social democracy provided universal healthcare, strong union representation, and high living standards funded by high corporate productivity, monopoly capital remained concentrated in fewer hands than almost anywhere in Europe: the billionaire **Wallenberg dynasty** alone controls over 40% of the market capitalization of the Stockholm stock exchange (Ericsson, Saab, ABB, AstraZeneca).

Under Prime Minister **Olof Palme** (1969–1976, 1982–1986), Sweden maintained an anti-imperialist non-aligned foreign policy, famously condemning the US war in Vietnam and supporting South African anti-apartheid liberation until Palme's unsolved 1986 assassination. Since the 1990s, Sweden enacted neoliberal privatizations of school and health systems, culminatng in March 2024 with full accession into NATO, ending 200 years of official military non-alignment.`,

  contradictions: [
    "Decades of neoliberal deregulation dismantled the historical social democratic model, privatizing public schools, healthcare clinics, and housing stocks for corporate profit.",
    "Sweden abandoned long-standing formal neutrality to join the NATO military alliance, aligning state defense policy directly with US imperialist strategy.",
    "Rising wealth inequality and residential segregation fueled right-wing political narratives that blame vulnerable immigrants for social service cuts.",
    "Domestic arms manufacturing monopolies export advanced weaponry to foreign militaries engaged in regional conflicts."
  ],

  quickFacts: [
    { label: 'Folkhemmet Welfare Model', value: 'Social democratic compromises (1938 Saltsjöbaden Agreement) creating universal public welfare [1]' },
    { label: 'Wallenberg Monopoly Cartel', value: 'Billionaire dynasty controlling 40%+ of Stockholm stock market (Saab, Ericsson, ABB) [2]' },
    { label: 'Olof Palme Anti-Imperialism', value: 'Condemned US Vietnam War & supported ANC anti-apartheid before 1986 assassination [3]' },
    { label: '2024 NATO Accession', value: 'Ended 200 years of military neutrality to integrate into US-led NATO alliance [4]' },
  ],

  timeline: [
    {
      id: 'sweden-1932-folkhemmet-saltsjobaden',
      title: '1. 1932 – 1968: Social Democratic Hegemony, Saltsjöbaden Agreement & The Folkhemmet',
      period: '1932 – 1968',
      categoryTag: 'policies',
      summary: '1932 SAP election; 1938 Saltsjöbaden compromise; building Folkhemmet welfare state.',
      details: `In 1932, the Social Democratic Party (SAP) took power under Per Albin Hansson, promoting the concept of *Folkhemmet* ('The People's Home'). The 1938 Saltsjöbaden Agreement between unions (LO) and employers (SAF) established centralized wage bargaining.

The state funded universal pensions, child allowances, and housing construction (the Million Programme) while leaving industrial ownership in private capitalist hands, benefiting Swedish export monopolies during post-WWII European reconstruction. [1][2]`,
      keyFigures: ['Per Albin Hansson', 'Tage Erlander', 'Marcus Wallenberg Sr.'],
      citationIds: [1, 2],
    },
    {
      id: 'sweden-1969-olof-palme-anti-imperialism',
      title: '2. 1969 – 1986: Olof Palme Era, Anti-Imperialist Diplomacy & 1986 Assassination',
      period: '1969 – 1986',
      categoryTag: 'successes',
      summary: 'Palme opposes US Vietnam War; supports ANC & Sandinistas; 1986 assassination in Stockholm.',
      details: `Prime Minister Olof Palme transformed Sweden into a vocal international critic of Western imperialism. Palme marched alongside North Vietnamese diplomats, opposed the US bombing of Hanoi, funded the ANC against apartheid South Africa, and backed Nicaragua's Sandinistas.

Palme also proposed the Meidner Plan (Wage-Earner Funds) to gradually transfer corporate shares to worker unions, enraging monopoly capital. On February 28, 1986, Palme was assassinated on a Stockholm street. [3]`,
      keyFigures: ['Olof Palme', 'Rudolf Meidner', 'Fidel Castro'],
      citationIds: [3],
    },
    {
      id: 'sweden-1990-neoliberal-privatization-nato',
      title: '3. 1990 – Present: Neoliberal Privatization, Austerity & March 2024 NATO Accession',
      period: '1990 – Present',
      categoryTag: 'challenges',
      summary: '1990s banking crisis; voucher school privatizations; March 2024 full NATO membership.',
      details: `Following the 1991–1993 banking crisis, conservative (Carl Bildt) and subsequent Social Democratic governments introduced neoliberal reforms: deregulating financial markets, privatizing public housing, and introducing voucher schools for private profit.

In March 2024, under Prime Minister Ulf Kristersson, Sweden officially joined NATO, abandoning 200 years of military non-alignment and expanding defense contracts for Swedish arms monopolies (Saab Jas-39 Gripen). [2][4]`,
      keyFigures: ['Carl Bildt', 'Magdalena Andersson', 'Ulf Kristersson'],
      citationIds: [2, 4],
    },
  ],

  sources: [
    {
      id: 1,
      label: 'The Social Democratic Image of Society',
      publisher: 'Francis Castles / Routledge',
      year: '1978',
      excerpt: 'Classic study of Swedish Social Democracy, the Saltsjöbaden pact, and Folkhemmet welfare planning.',
    },
    {
      id: 2,
      label: 'Monopoly Capital and the Wallenberg Empire',
      publisher: 'C-H Hermansson / Progress Publishers & Stockholm University',
      year: '1989',
      excerpt: 'Marxist study by Communist Party leader C-H Hermansson on financial concentration in Sweden.',
    },
    {
      id: 3,
      label: 'Olof Palme and the Politics of International Solidarity',
      publisher: 'Piero Gleijeses & Pluto Press',
      year: '2006',
      excerpt: 'Historical record of Palme\'s anti-imperialist foreign policy, opposition to the Vietnam War, and anti-apartheid funding.',
    },
    {
      id: 4,
      label: 'Sweden NATO Accession & Defense Industrial Report',
      publisher: 'Stockholm International Peace Research Institute (SIPRI)',
      year: '2024',
      excerpt: 'Official data on Sweden\'s March 2024 NATO accession and Saab military exports.',
    },
  ],
};
