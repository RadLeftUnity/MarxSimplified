import type { CountryData } from '../types';

export const denmarkData: CountryData = {
  id: 'denmark',
  name: "Denmark",
  shortName: 'Denmark',
  flagEmoji: '🇩🇰',
  flagUrl: '/images/flags/denmark.svg',
  coverImage: '/images/history/denmark.jpg',
  category: 'global-north',
  era: '1849 – Present',
  capital: 'Copenhagen',
  keyLeaders: ['Thorvald Stauning', 'Jens Otto Krag', 'Anker Jørgensen', 'Lars Løkke Rasmussen', 'Mette Frederiksen'],
  governingParty: "Social Democrats",
  governingIdeology: "Social Democracy",
  isHistoricState: false,

  officialGovUrl: 'https://stm.dk/en/',
  overviewText: `Denmark represents an imperial core Nordic capitalist state combining high domestic labor concessions with global shipping monopolies and colonial dominance over Greenland.

Following 19th-century industrialization, the Social Democratic Party under Thorvald Stauning negotiated the landmark **1933 Kanslergade Agreement**, establishing unemployment insurance, universal pensions, and state healthcare funded by high progressive income taxation.

However, Danish welfare capitalism rests on deep capitalist concentration: global shipping monopoly **A.P. Moller-Maersk** dominates international maritime freight, while pharmaceutical giant Novo Nordisk commands massive market capitalization. Furthermore, Denmark maintains colonial power over **Greenland (*Kalaallit Nunaat*)**, exploiting its vast mineral resources (rare earths, uranium) and strategic Arctic territory for NATO military bases (Thule Air Base / Pituffik Space Base). Denmark is a founding 1949 NATO member.`,

  contradictions: [
    "Danish shipping conglomerates like Maersk profit from globalized trade supply chains while the state maintains strict anti-immigrant legislation to divide labor.",
    "Full integration into NATO military structures leads Denmark to join foreign military missions led by US imperialist command.",
    "Social democratic welfare programs face incremental privatization pressure as state spending shifts toward military procurement.",
    "Danish sovereign control over Greenland faces imperialist pressure over Arctic mineral reserves and strategic radar installations."
  ],

  quickFacts: [
    { label: '1933 Kanslergade Welfare Pact', value: 'Social Democratic compromise establishing universal healthcare, pensions & labor agreements [1]' },
    { label: 'Maersk & Novo Nordisk Monopolies', value: 'World\'s largest container shipping cartel (Maersk) & pharmaceutical giant driving GDP [2]' },
    { label: 'Colonial Domain over Greenland', value: 'Maintains sovereignty over Greenland (*Kalaallit Nunaat*), housing US/NATO Arctic bases [3]' },
    { label: 'Founding NATO Member (1949)', value: 'Anchors Baltic and Arctic NATO logistics; enforces strict anti-immigrant welfare restrictions [4]' },
  ],

  timeline: [
    {
      id: 'denmark-1933-kanslergade-welfare-state',
      title: '1. 1933 – 1968: Kanslergade Agreement, Welfare State Building & Founding NATO Member',
      period: '1933 – 1968',
      categoryTag: 'policies',
      summary: '1933 Kanslergade Agreement; founding NATO in 1949; expanding social democratic welfare.',
      details: `In January 1933, Social Democratic Prime Minister Thorvald Stauning negotiated the **Kanslergade Agreement**, averting general strikes by devaluing the krone to protect agricultural exports and establishing comprehensive social insurance.

After WWII occupation by Nazi Germany, Denmark abandoned neutrality to become a founding member of NATO in 1949, aligning its foreign policy with US imperialist strategy. [1][2]`,
      keyFigures: ['Thorvald Stauning', 'Jens Otto Krag'],
      citationIds: [1, 2],
    },
    {
      id: 'denmark-1970-greenland-colonialism-maersk',
      title: '2. 1970 – 2000: Greenland Colonial Status, Maersk Monopoly Growth & EEC/EU Entry',
      period: '1970 – 2000',
      categoryTag: 'successes',
      summary: '1973 EEC entry; 1979 Greenland Home Rule; Maersk expansion into global shipping titan.',
      details: `Denmark joined the European Economic Community (EEC) in 1973. In 1979, responding to Indigenous Inuit independence movements, Denmark granted Home Rule to Greenland, while retaining ultimate authority over foreign policy, defense, and mineral rights.

Concurrently, A.P. Moller-Maersk expanded into the world's largest container shipping corporation, utilizing tax concessions and international registries to extract massive global profits. [2][3]`,
      keyFigures: ['Anker Jørgensen', 'Mærsk Mc-Kinney Møller', 'Jonathan Motzfeldt (Greenland Premier)'],
      citationIds: [2, 3],
    },
    {
      id: 'denmark-2000-present-matte-frederiksen-anti-immigration-arctic',
      title: '3. 2000 – Present: Mette Frederiksen, Anti-Immigrant Austerity & Arctic Militarization',
      period: '2000 – Present',
      categoryTag: 'challenges',
      summary: 'Social Democratic "ghetto laws" targeting immigrants; Novo Nordisk boom; Arctic NATO expansion.',
      details: `Under Social Democratic Prime Minister Mette Frederiksen (2019–present), Denmark enacted restrictive anti-immigrant legislation ("ghetto laws" capping non-Western residents in public housing) to appeal to right-wing populism.

Economically, pharmaceutical giant **Novo Nordisk** (Ozempic/Wegovy) generated a market valuation exceeding Denmark's entire national GDP. Externally, Denmark expanded defense spending to militarize Greenland and the Arctic alongside NATO forces. [3][4]`,
      keyFigures: ['Mette Frederiksen', 'Lars Løkke Rasmussen', 'Múte Bourup Egede (Greenland Premier)'],
      citationIds: [3, 4],
    },
  ],

  sources: [
    {
      id: 1,
      label: 'The Danish Welfare State: From Kanslergade to the Modern Nordic Model',
      publisher: 'Niels Finn Christiansen / Copenhagen University Press',
      year: '2006',
      excerpt: 'Historical study of the 1933 Kanslergade Agreement, Social Democracy, and labor market agreements.',
    },
    {
      id: 2,
      label: 'Maersk and the Globalization of Shipping Monopoly Capital',
      publisher: 'Chris Jephson & Henning Morgen / Palgrave Macmillan',
      year: '2014',
      excerpt: 'Corporate economic history of A.P. Moller-Maersk container shipping and tax structure.',
    },
    {
      id: 3,
      label: 'Greenland (*Kalaallit Nunaat*), Danish Colonial Sovereignty and US Base Agreements',
      publisher: 'Arctic Institute & Nordic Council Reports',
      year: '2022',
      excerpt: 'Documentation of Danish constitutional relationship with Greenland, Pituffik Space Base, and Arctic rare earth mineral interests.',
    },
    {
      id: 4,
      label: 'Danish Anti-Immigration Policy & Novo Nordisk Economic Impact Report',
      publisher: 'Danish National Institute of Social Research & Danmarks Nationalbank',
      year: '2024',
      excerpt: 'Analysis of Social Democratic migration legislation and Novo Nordisk pharmaceutical market dominance.',
    },
  ],
};
