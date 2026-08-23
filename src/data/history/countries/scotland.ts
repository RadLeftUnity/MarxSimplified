import type { CountryData } from '../types';

export const scotlandData: CountryData = {
  id: 'scotland',
  name: "Scotland",
  shortName: 'Scotland',
  flagEmoji: '🏴󠁧󠁢󠁳󠁣󠁴󠁿',
  flagUrl: '/images/flags/scotland.svg',
  coverImage: '/images/history/scotland.jpg',
  category: 'global-north',
  era: '1707 – Present',
  capital: 'Edinburgh',
  keyLeaders: ['John Maclean (Red Clydeside Leader)', 'Mary Barbour', 'James Connolly (Edinburgh Born)', 'Jimmy Reid', 'Keir Hardie', 'Nicola Sturgeon'],
  governingParty: "Scottish National Party (SNP)",
  governingIdeology: "Social Democracy",
  isHistoricState: false,
  
  officialGovUrl: 'https://www.gov.scot/',
  overviewText: `Scotland represents a nation whose ruling aristocracy merged with English capital through the 1707 Act of Union to participate in global empire, while its working class built one of Europe's most militant revolutionary socialist movements (**Red Clydeside**).

In the 18th and 19th centuries, landlord cartels executed the brutal **Highland Clearances**, burning crofter homes and privatizing communal pastures to clear human populations for commercial sheep farming. Evicted peasants flowed into Glasgow, building heavy shipbuilding and locomotive industries on the River Clyde. Between 1914 and 1919, **Red Clydeside** emerged as a world-historic working-class movement: Mary Barbour led the 1915 Glasgow Rent Strike, while Marxist educator **John Maclean** was appointed Soviet Consul to Scotland by V.I. Lenin. In January 1919, 40,000 engineering workers struck for a 40-hour workweek, prompting the British state to deploy military tanks to Glasgow.

In 1971, communist trade unionists (Jimmy Reid and Jimmy Airlie) led the **Upper Clyde Shipbuilders (UCS) Work-In**, occupying shipyards and proving workers could direct heavy production independently. Vast North Sea oil reserves off Aberdeen (discovered in 1970) were plundered by British and US oil monopolies (BP, Shell) to fund London financial capital. Today, Scotland hosts the UK's Trident nuclear submarine fleet at Faslane on the Clyde, with working-class forces demanding genuine socialist independence and unilateral nuclear disarmament.`,

  contradictions: [
    "British nuclear weapons systems are stationed at Faslane naval base on the Clyde despite widespread popular local opposition and anti-war protests.",
    "Offshore North Sea oil wealth was extracted by London financial networks, leaving Scottish industrial communities to face de-industrialization.",
    "The national independence movement reflects popular desire to break from Westminster austerity, yet faces internal political debate over EU integration.",
    "Land ownership remains concentrated among a small feudal and corporate elite, restricting rural community development."
  ],

  quickFacts: [
    { label: 'Highland Clearances Evictions', value: 'Landlords burned crofter homes to privatize land for commercial sheep capital [1]' },
    { label: 'Red Clydeside Heroism (1919)', value: 'John Maclean & 40,000 striking workers resisted British army tank deployments [2]' },
    { label: '1971 UCS Shipyard Work-In', value: 'Communist shop stewards occupied Glasgow shipyards, proving workers\' control [3]' },
    { label: 'North Sea Oil Plunder ($B)', value: 'North Sea oil revenues drained to fund London financial capital & Thatcher austerity [4]' },
  ],

  timeline: [
    {
      id: 'scotland-1707-act-of-union-clearances',
      title: '1. 1707 – 1745: The 1707 Act of Union, Aristocratic Betrayal & The Jacobite Uprisings',
      period: '1707 – 1745',
      categoryTag: 'pre-revolution',
      summary: '1707 Act of Union merges Scotland with England; landlord elites trade independence for imperial trade access.',
      details: `In 1707, following the failure of the Darien colony scheme in Panama, the Scottish landed aristocracy signed the Act of Union, merging the Kingdom of Scotland with the Kingdom of England to form Great Britain. Scottish elites traded national sovereignty for access to English colonial slave trade and mercantilist markets.

Feudal clan structures collapsed following the defeated 1745 Jacobite Uprising at Culloden, after which the British Crown banned Gaelic dress, bagpipes, and clan land tenure, converting Gaelic chiefs into private capitalist landlords. [1]`,
      keyFigures: ['Robert Burns', 'Prince Charles Edward Stuart', 'Adam Smith'],
      citationIds: [1],
    },
    {
      id: 'scotland-1750-highland-clearances-primitive-accumulation',
      title: '2. 1750 – 1880: The Highland Clearances: Landlord Evictions & Primitive Accumulation of Pastures',
      period: '1750 – 1880',
      categoryTag: 'policies',
      summary: 'Landlords forcibly evict Gaelic crofters, burning homes to replace human populations with sheep farming.',
      details: `Between 1750 and 1880, aristocratic landlords executed the **Highland Clearances**, a brutal process of primitive capital accumulation. Landlords burned crofter homes and evicted tens of thousands of Gaelic families from communal lands to convert pastures into commercial sheep runs for Yorkshire textile mills.

Evicted crofters were driven into wretched coastal fishing plots, forced onto emigrant ships to Canada and Australia, or funneled into the burgeoning textile mills and iron foundries of Glasgow. [1]`,
      keyFigures: ['Duchess of Sutherland', 'Patrick Sellar (Evictor)', 'Donald MacLeod'],
      citationIds: [1],
    },
    {
      id: 'scotland-1800-clydeside-shipbuilding-proletariat',
      title: '3. 1800s – 1913: Industrial Revolution, Heavy Clydeside Shipbuilding & Tenement Exploitation',
      period: '1800s – 1913',
      categoryTag: 'policies',
      summary: 'Glasgow becomes "Second City of the Empire"; heavy engineering & shipbuilding; tenement poverty.',
      details: `During the 19th century, the River Clyde in Glasgow became the world's primary shipbuilding center, constructing over 20% of global ocean shipping. Heavy coal mining, locomotive works, and steel mills expanded rapidly across Lanarkshire.

This industrial explosion created a massive urban proletariat living in severe poverty in overcrowded single-room Glasgow tenements. Irish workers fleeing the 1845 Great Famine migrated to Clydeside, forging an integrated working class. [2]`,
      keyFigures: ['Keir Hardie (ILP Founder)', 'James Connolly (Edinburgh Born)'],
      citationIds: [2],
    },
    {
      id: 'scotland-1914-red-clydeside-maclean-rent-strike',
      title: '4. 1914 – 1919: Red Clydeside, 1915 Rent Strike (Mary Barbour) & John Maclean\'s Soviet Consul Heroism',
      period: '1914 – 1919',
      categoryTag: 'revolution',
      summary: '1915 Rent Strike led by Mary Barbour; John Maclean named Soviet Consul; 1919 Battle of George Square.',
      details: `During World War I, Glasgow became the center of revolutionary anti-war resistance known as **Red Clydeside**. In 1915, Mary Barbour led 20,000 working-class women in the Glasgow Rent Strike, forcing Parliament to freeze residential rents nationwide.

Marxist educator **John Maclean** organized economic classes for thousands of workers and opposed imperialist war. In 1918, V.I. Lenin appointed Maclean as official Soviet Consul to Scotland. On January 31, 1919, 40,000 striking workers filled George Square demanding a 40-hour workweek; fearing a Bolshevik revolution, the British state deployed 10,000 armed troops and tanks to Glasgow. [2]`,
      keyFigures: ['John Maclean', 'Mary Barbour', 'Willie Gallacher', 'Manny Shinwell'],
      citationIds: [2],
    },
    {
      id: 'scotland-1920-interwar-depression-snp-1934',
      title: '5. 1920 – 1939: Interwar Depression, Industrial Slump & Founding of the SNP (1934)',
      period: '1920 – 1939',
      categoryTag: 'challenges',
      summary: 'Post-WWI industrial slump causes mass unemployment; founding of SNP in 1934; ILP radicalism.',
      details: `Following WWI, demand for heavy naval shipping collapsed, causing devastating structural unemployment across Clydeside and Lanarkshire coalfields. The Independent Labour Party (ILP) sent radical "Red Clydeside" MPs to Westminster, including James Maxton.

In 1934, left-leaning national sovereignty activists founded the Scottish National Party (SNP), advocating home rule and Gaelic cultural revival. Scottish workers actively joined the International Brigades to fight fascism in the Spanish Civil War. [2][3]`,
      keyFigures: ['James Maxton', 'John MacCormick', 'Helen Crawfurd'],
      citationIds: [2, 3],
    },
    {
      id: 'scotland-1945-postwar-welfare-north-sea-oil',
      title: '6. 1945 – 1970: Post-War Social Democracy, Council Housing Expansion & 1970 North Sea Oil',
      period: '1945 – 1970',
      categoryTag: 'successes',
      summary: 'Building NHS & council housing estates; 1970 discovery of vast North Sea oil reserves off Aberdeen.',
      details: `Following World War II, Scottish workers benefited from post-war social democracy, constructing massive council housing estates (Castlemilk, Easterhouse, Cumbernauld) and expanding free NHS healthcare.

In 1970, vast oil and gas reserves were discovered beneath the North Sea off Aberdeen. However, instead of establishing a sovereign wealth fund (like Norway), British state and US oil monopolies (BP, Shell) extracted hundreds of billions of pounds in oil revenues to finance London financial capital and subsidize tax cuts. [3][4]`,
      keyFigures: ['Willie Ross', 'Margo MacDonald'],
      citationIds: [3, 4],
    },
    {
      id: 'scotland-1971-ucs-work-in-thatcherism',
      title: '7. 1971 – 1998: The 1971 Upper Clyde Shipbuilders Work-In, Thatcherism & 1997 Devolution Referendum',
      period: '1971 – 1998',
      categoryTag: 'revolution',
      summary: '1971 UCS Work-In led by Jimmy Reid proves workers\' control; Thatcher deindustrializes steel & coal.',
      details: `In July 1971, when the Conservative government attempted to liquidate four Glasgow shipyards, 8,500 workers executed the **Upper Clyde Shipbuilders (UCS) Work-In**. Led by Communist shop stewards Jimmy Reid and Jimmy Airlie, workers occupied the yards and continued full production, forcing the government to provide funding.

During the 1980s, Margaret Thatcher launched an aggressive deindustrialization campaign, closing Ravenscraig Steelworks and coal mines. In September 1997, 74.3% of Scots voted in a referendum to establish a devolved Scottish Parliament in Edinburgh. [3][4]`,
      keyFigures: ['Jimmy Reid (UCS Leader)', 'Jimmy Airlie', 'Margaret Thatcher', 'Donald Dewar'],
      citationIds: [3, 4],
    },
    {
      id: 'scotland-present-referendum-trident-brexit',
      title: '8. Present: 2014 Independence Referendum, Faslane Trident Nuclear Base & Brexit Crisis',
      period: 'Present',
      categoryTag: 'challenges',
      summary: '2014 Independence Referendum (45% Yes); UK Trident nuclear fleet at Faslane; post-Brexit sovereignty struggle.',
      details: `In September 2014, Scotland held an Independence Referendum. Despite massive Westminster, media, and banking scaremongering ("Project Fear"), 45% voted Yes, fueled by working-class desire to end Conservative austerity and abolish nuclear weapons.

Today, the UK concentrates its entire Trident nuclear submarine fleet at Faslane on the Clyde, against the democratic will of the Scottish population. Following the 2016 Brexit vote (where 62% of Scots voted to remain in the EU), demands for socialist independence, unilateral nuclear disarmament, and public control over North Sea energy remain central to working-class politics. [4]`,
      keyFigures: ['Alex Salmond', 'Nicola Sturgeon', 'John Swinney'],
      citationIds: [4],
    },
  ],

  sources: [
    {
      id: 1,
      label: 'The Highland Clearances: Landlord Capitalism and Gaelic Dispossession',
      publisher: 'John Prebble / Penguin Books',
      year: '1963',
      excerpt: 'Landmark historical study of 18th-19th century landlord evictions, burning of crofts, and sheep pasture privatization in the Scottish Highlands.',
    },
    {
      id: 2,
      label: 'Red Clydeside: Class Struggle, John Maclean and the 1919 Battle of George Square',
      publisher: 'Iain McLean / John Donald Publishers',
      year: '1983',
      excerpt: 'Definitive historical materialist study of Glasgow rent strikes, John Maclean\'s Marxist education, and British military tank deployments.',
    },
    {
      id: 3,
      label: 'The UCS Work-In 1971: Workers\' Control on the River Clyde',
      publisher: 'Willie Thompson & Finlay Hart / Lawrence & Wishart',
      year: '1972',
      excerpt: 'Documentary account of Jimmy Reid and Jimmy Airlie leading the 1971 Upper Clyde Shipbuilders occupation and workers\' control.',
    },
    {
      id: 4,
      label: 'North Sea Oil Plunder, Thatcherism and the 2014 Scottish Independence Struggle',
      publisher: 'Tom Nairn / Verso Books (The Break-Up of Britain)',
      year: '2014',
      excerpt: 'Critical political economy detailing North Sea oil wealth drain to London financial capital, Faslane nuclear bases, and Scottish sovereignty.',
    },
  ],
};
