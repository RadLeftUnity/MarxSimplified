import type { CountryData } from '../types';

export const grenadaData: CountryData = {
  id: 'grenada',
  name: "People's Revolutionary Government of Grenada",
  shortName: 'Grenada',
  flagEmoji: '🇬🇩',
  flagUrl: '/images/flags/grenada.svg',
  coverImage: '/images/history/grenada.jpg',
  category: 'aes',
  era: '1979 – 1983',
  capital: 'St. George\'s',
  keyLeaders: ['Maurice Bishop', 'Unison Whiteman', 'Bernard Coard', 'Hudson Austin'],
  governingParty: 'New JEWEL Movement (NJM)',
  governingIdeology: 'Marxism-Leninism',
  isHistoricState: true,

  overviewText: `On March 13, 1979, the New JEWEL Movement (Joint Endeavor for Welfare, Education, and Liberation) led by Maurice Bishop executed an almost bloodless socialist revolution in the Caribbean island nation of Grenada, overthrowing Eric Gairy's corrupt, US-backed dictatorship and his murderous "Mongoose Gang" secret police. The People's Revolutionary Government (PRG) established popular democracy, nationalized financial monopolies, slashed unemployment from 49% to 14%, guaranteed free healthcare and education, and constructed the Point Salines International Airport to develop sovereign tourism and trade.

However, Grenada's socialist experiment was targeted by aggressive US imperialist hostility. US President Ronald Reagan declared Grenada a threat to US national security, alleging that the civilian international airport was a Soviet-Cuban military base. The CIA launched financial blockades, naval maneuvers, and propaganda campaigns against the PRG. In October 1983, acute internal ideological and organizational disputes within the NJM leadership led to Maurice Bishop's house arrest and tragical death during a crowd demonstration. Exploiting the internal crisis, the US military launched Operation Urgent Fury on October 25, 1983, invading Grenada with 7,000 troops, overthrowing the PRG, and restoring capitalist economic dependencies.`,

  contradictions: [
    "Ideological and tactical rivalries between Maurice Bishop and Bernard Coard fractured the New JEWEL Movement in October 1983, leading to Bishop's tragic house arrest and execution.",
    "US President Ronald Reagan seized upon the internal NJM division to launch a massive military invasion of Grenada in October 1983, destroying the socialist revolution and restoring a US-aligned puppet government.",
    "The People's Revolutionary Government under Maurice Bishop slashed unemployment from 49% to 14% and built Point Salines International Airport, demonstrating the rapid human development possible under socialist planning.",
    "Post-invasion neoliberal privatization under US-installed administrations dismantled public social programs and forced Grenada back into dependence on foreign tourism monopolies."
  ],

  geopolitics: {
    imperialismDetails: 'Grenada was subjected to intense US imperialist warfare: CIA economic blockades, naval intimidation, Point Salines airport propaganda, and direct 1983 US military invasion (Operation Urgent Fury).',
    imperialismLinks: [
      {
        label: 'Operation Urgent Fury: The 1983 US Imperialist Invasion of Grenada Archive',
        url: 'https://www.marxists.org/history/grenada/',
        publisher: 'Caribbean Anti-Imperialist Archive',
        description: 'Documentation of the NJM revolution, Maurice Bishop\'s speeches, PRG social programs, and the 1983 US military invasion.',
      },
    ],
    allies: ['Cuba', 'Soviet Union', 'Nicaragua (Sandinistas)', 'Jamaica (Manley Era)', 'Non-Aligned Movement'],
    enemies: ['United States (CIA / Pentagon)', 'United Kingdom', 'OECS Conservative Regimes'],
  },

  quickFacts: [
    { label: 'March 1979 Popular Revolution', value: 'Overthrew Gairy dictatorship; slashed unemployment from 49% to 14% in under 4 years [1]' },
    { label: 'Point Salines Airport Project', value: 'Constructed civilian international airport with Cuban engineering aid to build tourism sovereignty [2]' },
    { label: '1983 US Military Invasion', value: '7,000 US troops invaded Grenada (Operation Urgent Fury) following internal NJM leadership tragedy [3]' },
  ],

  timeline: [
    {
      id: 'grenada-1979-revolution-bishop',
      title: '1. 1979: The March 13 Revolution & Proclamation of the PRG',
      period: '1979 – 1980',
      categoryTag: 'revolution',
      summary: 'New JEWEL Movement overthrows Gairy; Maurice Bishop becomes Prime Minister; establishing popular democracy.',
      details: `On March 13, 1979, while dictator Eric Gairy was visiting the UN, armed cadres of the New JEWEL Movement (NJM) seized the True Blue military barracks and radio station in St. George's without casualties. The People's Revolutionary Government (PRG) was established with 34-year-old Maurice Bishop as Prime Minister.

The PRG suspended the colonial constitution, replaced Gairy's corrupt parliament with Parish and Workers' Councils, and launched radical social reforms. The state provided free secondary education, university scholarships, free healthcare, and created the National Import Board to lower basic food staple prices. [1]`,
      keyFigures: ['Maurice Bishop', 'Unison Whiteman', 'Jacqueline Creft'],
      citationIds: [1],
    },
    {
      id: 'grenada-economic-transformation-cuban-aid',
      title: '2. 1980: Economic Self-Reliance & Cuban Infrastructure Aid',
      period: '1980 – 1982',
      categoryTag: 'policies',
      summary: 'Slashed unemployment from 49% to 14%; building Point Salines Airport with Cuban engineering aid.',
      details: `Despite inheriting a bankrupt state, the PRG achieved 5% annual GDP growth between 1979 and 1982. The government established agricultural co-ops, processing plants for nutmeg and cocoa, and founded the Grenada Bank of Popular Development.

With crucial technical aid from socialist Cuba—which sent 600 construction workers, engineers, and doctors—Grenada began building the Point Salines International Airport. The airport was vital to unlock Grenada's sovereign tourism and agricultural exports. Cuban medical personnel provided free dental and specialized care to every village across Grenada and Carriacou. [1][2]`,
      keyFigures: ['Maurice Bishop', 'Fidel Castro', 'Bernard Coard'],
      citationIds: [1, 2],
    },
    {
      id: 'grenada-us-destabilization-internal-crisis',
      title: '3. 1983: US Economic Warfare & The October Leadership Tragedy',
      period: '1983',
      categoryTag: 'challenges',
      summary: 'Reagan\'s anti-Grenada propaganda; IMF loan blocking; internal NJM party crisis and October 19 tragedy.',
      details: `US President Ronald Reagan launched an aggressive campaign against Grenada, holding televised speeches displaying satellite photos of Point Salines Airport, claiming it was a "Soviet-Cuban military airbase." The US blocked IMF and World Bank loans, vetoed OAS hurricane disaster relief, and staged US Navy amphibious invasion rehearsals off Puerto Rico (Operation Amber and the Amberines).

Compounding external aggression, an ideological division emerged within the NJM central committee between Maurice Bishop and Deputy Prime Minister Bernard Coard over party structure and pace of development. On October 13, 1983, the central committee placed Bishop under house arrest. On October 19, 1983, tens of thousands of Grenadians marched and freed Bishop, leading to a tragic confrontation at Fort Rupert where Maurice Bishop, Unison Whiteman, Jacqueline Creft, and trade union leaders were shot and killed. [2][3]`,
      keyFigures: ['Maurice Bishop', 'Bernard Coard', 'Hudson Austin', 'Ronald Reagan'],
      citationIds: [2, 3],
    },
    {
      id: 'grenada-1983-us-invasion-urgent-fury',
      title: '4. 1983: Operation Urgent Fury & The US Military Occupation',
      period: '1983 – 1984',
      categoryTag: 'collapse-or-transition',
      summary: 'Oct 25, 1983 US invasion; heroic Cuban & Grenadian resistance; capitalist privatization.',
      details: `Exploiting the internal tragedy, US President Reagan ordered the full-scale invasion of Grenada on October 25, 1983 (Operation Urgent Fury). Over 7,000 US soldiers, Marines, and Special Forces landed by sea and air. A small force of 600 Cuban construction workers and Grenadian People's Revolutionary Army (PRA) soldiers mounted fierce resistance at Point Salines and Fort Frederick.

The UN General Assembly voted overwhelmingly (108 to 9) to condemn the US invasion as a flagrant violation of international law. US forces occupied Grenada, disbanded popular Parish Councils, privatized state farms, and installed a pro-US conservative government that restored neo-colonial trade dependencies. [1][3]`,
      keyFigures: ['Ronald Reagan', 'Fidel Castro', 'Hudson Austin'],
      citationIds: [1, 3],
    },
  ],

  sources: [
    {
      id: 1,
      label: 'Grenada: The Peaceful Revolution and the New JEWEL Movement',
      publisher: 'Monthly Review Press',
      year: '1981',
      excerpt: 'Comprehensive historical account of the 1979 revolution, PRG social programs, and popular democracy.',
    },
    {
      id: 2,
      label: 'Maurice Bishop Speaks: The Grenada Revolution 1979–1983',
      publisher: 'Pathfinder Press',
      year: '1984',
      excerpt: 'Collected speeches and writings of Maurice Bishop covering economic planning, Cuban aid, and anti-imperialism.',
    },
    {
      id: 3,
      label: 'Operation Urgent Fury: The US Invasion of Grenada and the Aftermath',
      publisher: 'Westview Press',
      year: '1989',
      excerpt: 'Detailed military and political analysis of US economic destabilization, the Oct 1983 tragedy, and the US invasion.',
    },
  ],
};
