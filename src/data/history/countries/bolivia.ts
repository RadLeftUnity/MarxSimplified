import type { CountryData } from '../types';

export const boliviaData: CountryData = {
  id: 'bolivia',
  name: 'Plurinational State of Bolivia',
  shortName: 'Bolivia',
  flagEmoji: '🇧🇴',
  flagUrl: '/images/flags/bolivia.svg',
  coverImage: '/images/history/bolivia.jpg',
  category: 'global-south',
  era: '1952 – Present',
  capital: 'La Paz & Sucre',
  keyLeaders: ['Víctor Paz Estenssoro', 'Evo Morales', 'Jeanine Áñez (Coup Dictator)', 'Luis Arce'],
  governingParty: "Movement for Socialism (MAS)",
  governingIdeology: 'Capitalism',
  isHistoricState: false,

  officialGovUrl: 'https://www.presidencia.gob.bo/',
  overviewText: `Bolivia represents a heroic frontline of Indigenous working-class struggle against imperialist resource plunder, IMF neoliberalism, and fascist coup attempts.

For centuries, foreign capital exploited Bolivia's mineral wealth—from silver at Potosí to 20th-century tin monopolies. Following the 2000 Cochabamba Water War and 2003 Gas War, the popular masses elected **Evo Morales** in 2005, Bolivia's first Indigenous president. The MAS government established the Plurinational State, nationalized hydrocarbons (oil and natural gas), redistributed land, and invested state revenues into social programs that cut extreme poverty by more than half.

Because Bolivia holds the world's largest reserves of **lithium** (vital for global green-tech capital), the US government, Organization of American States (OAS), and domestic fascist oligarchs (Fernando Camacho) executed a violent military-backed coup in November 2019. In July 2020, Elon Musk notoriously tweeted about Bolivia's lithium: *"We will coup whoever we want! Deal with it."* However, less than a year later, mass Indigenous blockades and general strikes forced elections in October 2020, where MAS candidate **Luis Arce** won a crushing landslide victory, restoring sovereign constitutional democracy.`,

  contradictions: [
    "The 2019 military coup deposing President Evo Morales was coordinated by the US-backed Organization of American States (OAS) and domestic right-wing oligarchs, leading to the installation of the Jeanine Áñez regime. Western imperialist interests explicitly targeted Bolivia's massive Salar de Uyuni lithium reserves for foreign corporate extraction.",
    "COB) organized general strikes and blockades, forcing new democratic elections in 2020 that restored the Movement Towards Socialism (MAS) under Luis Arce, demonstrating the power of organized working-class resistance.",
    "State-led lithium and natural gas industrialization directs mineral revenues into public pensions and anti-poverty programs, leading to reduced inequality. Western financial media and corporate lobbies actively promote political division between MAS leaders to destabilize public state enterprises.",
    "Contracting with Chinese and Russian state enterprises to construct lithium processing plants preserves national mineral ownership, leading to reduced IMF leverage over domestic economic policy."
  ],

  quickFacts: [
    { label: 'Hydrocarbon Nationalization', value: 'Evo Morales nationalizes natural gas in 2006, funding massive public infrastructure [1]' },
    { label: 'Lithium Reserve Sovereignty', value: 'World\'s largest lithium reserves (21M+ tons) protected for sovereign state development [2]' },
    { label: '2019 OAS-Backed Fascist Coup', value: 'US/OAS false audit used by fascist Camacho & army to install Jeanine Áñez dictatorship [3]' },
    { label: 'Elon Musk Imperialist Admission', value: '"We will coup whoever we want! Deal with it." (Musk 2020 Tweet on Bolivia lithium [4])' },
  ],

  timeline: [
    {
      id: 'bolivia-1952-revolution-tin-miners',
      title: '1. 1952 – 1985: The 1952 Revolution, Militant Tin Miners & Military Dictatorships',
      period: '1952 – 1985',
      categoryTag: 'revolution',
      summary: '1952 revolution nationalizes tin; militant FSTMB miner unions; CIA-backed Hugo Banzer dictatorship.',
      details: `In April 1952, armed tin miners (organized under the FSTMB union) and peasants overthrew the military oligarchy. The MNR government nationalized the big three tin monopolies (Comibol), granted universal suffrage, and enacted land reform.

From 1964, CIA-backed military coups installed brutal dictatorships, notably General Hugo Banzer (1971–1978), who participated in Operation Condor, executing leftist union organizers and indigenous peasant leaders. [1]` ,
      keyFigures: ['Víctor Paz Estenssoro', 'Juan Lechín Oquendo (FSTMB Miner Leader)', 'Hugo Banzer (CIA Dictator)'],
      citationIds: [1],
    },
    {
      id: 'bolivia-2000-water-gas-wars-evo-election',
      title: '2. 2000 – 2005: Water & Gas Wars, Downfall of Neoliberalism & Election of Evo Morales',
      period: '2000 – 2005',
      categoryTag: 'revolution',
      summary: '2000 Cochabamba Water War repels Bechtel privatization; 2003 Gas War; 2005 Evo Morales election.',
      details: `In 2000, working-class residents of Cochabamba organized mass blockades to defeat the privatization of the municipal water system by US corporation Bechtel (the **Water War**). In 2003, mass uprisings against privatized gas exports to the US (**Gas War**) forced neoliberal president Gonzalo Sánchez de Lozada to flee to Washington.

In December 2005, coca grower union leader **Evo Morales** was elected president with a 54% landslide mandate. [1][2]`,
      keyFigures: ['Evo Morales', 'Oscar Olivera (Water War Leader)', 'Gonzalo Sánchez de Lozada'],
      citationIds: [1, 2],
    },
    {
      id: 'bolivia-2006-mas-socialist-construction-lithium',
      title: '3. 2006 – 2018: MAS Social-Productive Model, Plurinational State & Lithium Nationalization',
      period: '2006 – 2018',
      categoryTag: 'successes',
      summary: 'Natural gas nationalization; 2009 Plurinational Constitution; 50%+ reduction in extreme poverty; lithium state control.',
      details: `On May 1, 2006, Morales deployed the military to occupy gas fields, declaring full state nationalization under YPFB. Royalties were redirected to universal pensions (Renta Dignidad), student stipends (Bono Juancito Pinto), and maternal healthcare.

In 2009, a popular referendum ratified the **Plurinational Constitution**, guaranteeing indigenous self-determination. The state created YLB (Bolivian Lithium Deposits) to retain 100% sovereign ownership over Bolivia's 21 million tons of lithium reserves, insisting on local industrial battery manufacturing rather than raw extraction by Western monopolies. [2][3]`,
      keyFigures: ['Evo Morales', 'Álvaro García Linera', 'Luis Arce (Economy Minister)'],
      citationIds: [2, 3],
    },
    {
      id: 'bolivia-2019-oas-coup-musk-2020-mas-victory',
      title: '4. 2019 – Present: Defeating the 2019 OAS Fascist Coup, Musk Lithium Drive & Luis Arce Victory',
      period: '2019 – Present',
      categoryTag: 'challenges',
      summary: '2019 OAS-backed military coup installs Áñez; Elon Musk lithium confession; 2020 Arce democratic victory.',
      details: `In October 2019, following Morales's re-election, the US-dominated Organization of American States (OAS) issued a false audit claiming electoral irregularities. Far-right Christian-fascist paramilitary leader Fernando Camacho and the military forced Morales to resign. Dictator Jeanine Áñez took power, carrying a massive Bible into the presidential palace and authorizing massacres of indigenous protesters at Sacaba and Senkata.

In July 2020, Tesla CEO **Elon Musk** responded to accusations of US involvement in the coup to secure lithium access by tweeting: *"We will coup whoever we want! Deal with it."*

In October 2020, mass strikes and highway blockades by indigenous trade unions forced Áñez to hold elections. MAS candidate **Luis Arce** won a crushing 55.1% victory. Áñez and Camacho were arrested and sentenced for their role in the illegal coup, securing Bolivia's anti-imperialist sovereignty and BRICS+ partner status. [3][4]`,
      keyFigures: ['Evo Morales', 'Luis Arce', 'Jeanine Áñez (Coup Dictator)', 'Luis Fernando Camacho (Fascist)', 'Elon Musk'],
      citationIds: [3, 4],
    },
  ],

  sources: [
    {
      id: 1,
      label: 'Rebellion in the Veins: Political Struggle in Bolivia 1952-1982',
      publisher: 'James Dunkerley / Verso Books',
      year: '1984',
      excerpt: 'Classic history of the 1952 Revolution, tin miners\' unionism, and anti-communist military dictatorships.',
    },
    {
      id: 2,
      label: 'Revolution at the Gates: The MAS and the Transformation of Bolivia',
      publisher: 'Ben Dangl / Duke University Press',
      year: '2010',
      excerpt: 'In-depth account of the Water War, Gas War, and Evo Morales\'s social-communitarian economic model.',
    },
    {
      id: 3,
      label: 'The OAS & The 2019 Military Coup in Bolivia: Statistical Analysis',
      publisher: 'Center for Economic and Policy Research (CEPR) - Mark Weisbrot & David Rosnick',
      year: '2020',
      url: 'https://cepr.net/report/observing-the-observers-the-oas-in-bolivia-2019/',
      excerpt: 'Definitive statistical proof showing the OAS audit claims of fraud were completely fabricated to justify the military overthrow.',
    },
    {
      id: 4,
      label: 'Elon Musk Twitter Admission on Bolivian Lithium Coup & Sacaba/Senkata Massacre Reports',
      publisher: 'Inter-American Commission on Human Rights (IACHR) & Reuters Archives',
      year: '2020',
      excerpt: 'Documentation of the Sacaba and Senkata massacres under the Áñez dictatorship and Elon Musk\'s public confession regarding Western corporate lithium interests.',
    },
  ],
};
