import type { CountryData } from '../types';

export const stKittsAndNevisData: CountryData = {
  id: 'st-kitts-and-nevis',
  name: 'Federation of Saint Kitts and Nevis',
  shortName: 'Saint Kitts and Nevis',
  flagEmoji: '🇰🇳',
  flagUrl: '/images/flags/stKittsAndNevis.svg',
  coverImage: '/images/history/stKittsAndNevis.jpg',
  category: 'global-south',
  era: '1623 – Present',
  capital: 'Basseterre',
  keyLeaders: ['Thomas Manchester', 'Robert Llewellyn Bradshaw', 'C.A. Paul Southwell', 'Denzil Douglas'],
  governingParty: 'St. Kitts and Nevis Labour Party',
  governingIdeology: 'Social Democracy',
  isHistoricState: false,

  officialGovUrl: 'https://gov.kn/',
  overviewText: `Saint Kitts and Nevis represents the historical "Mother Colony" of the British West Indies, defined by three hundred and fifty years of absolute sugar cane monocrop plantation enclosure, heroic slave and labor insurrections, the 1975 state nationalization of sugar estates under Robert Bradshaw, and the complete 2005 transition away from sugar monoculture.

Beginning with British colonization in 1623, Saint Kitts was cleared of native forests to become the premier British sugar monoculture island. British plantocrats established total land monopolies, exploiting enslaved Africans under brutal estate conditions. Enslaved workers repeatedly launched armed rebellions, while post-emancipation labor remained bound to sugar estates by starvation wages and plantocracy-owned housing.

In 1935, Saint Kitts sugar workers launched the historic **Buckley\'s Uprising**, a pivotal Caribbean working-class rebellion that sparked labor revolts across the West Indies. Organized by **Robert Llewellyn Bradshaw** and the St. Kitts and Nevis Trades and Labour Union, working-class struggle led to universal suffrage and self-government. In 1975, Bradshaw\'s Labour government executed the historic state nationalization of all sugar estate lands, ending plantocracy land monopoly. On September 19, 1983, Saint Kitts and Nevis achieved full independence. In 2005, facing European Union subsidy cuts, the government officially closed the 350-year-old state sugar industry, transitioning into light manufacturing and tourism.`,

  contradictions: [
    "Three and a half centuries of total sugar monocrop plantation enclosure destroyed forest ecology and prevented food agriculture, forcing the population into structural food import dependency.",
    "The 1975 state nationalization of sugar lands under Robert Bradshaw broke white plantocracy estate monopoly, yet European Union subsidy cuts and global sugar market price collapses forced the complete closure of the 350-year-old state sugar industry in 2005.",
    "Transitioning from sugar monoculture into Citizenship-by-Investment (CBI) programs and luxury resort tourism generated capital, yet created extreme vulnerability to foreign real estate speculation, Western financial regulation, and EU/US financial blacklists.",
    "Western cruise line cartels and foreign resort conglomerates extract millions in local tourism revenues while repatriating earnings, leaving local service workers with low seasonal wages.",
    "Working-class organizations demand equitable distribution of nationalized sugar lands acquired in 1975 for local agricultural food production against private resort enclosure."
  ],

  quickFacts: [
    { label: '350 Years of Sugar Monoculture', value: 'First British West Indies colony completely enclosed for sugar cane monocrop export [1]' },
    { label: '1935 Buckley\'s Labor Uprising', value: 'Sugar workers launched historic strikes sparking Caribbean-wide 1930s labor revolution [2]' },
    { label: '1975 State Sugar Land Nationalization', value: 'Robert Bradshaw nationalized all sugar estate lands, ending plantocracy monopoly [3]' },
    { label: '2005 Sugar Monocrop Closure', value: 'Officially closed 350-year sugar industry to transition into diversified economy [4]' },
  ],

  timeline: [
    {
      id: 'st-kitts-1623-sugar-monoculture-plantocracy',
      title: '1. 1623 – 1838: "Mother Colony" Plantation Slavery and Total Sugar Monoculture',
      period: '1623 – 1838',
      categoryTag: 'pre-revolution',
      summary: 'British settlement; Taíno genocide; 350 years of total sugar cane monocrop plantation enclosure.',
      details: `In 1623, Thomas Warner established Saint Kitts as the first British colony in the Caribbean. British and French colonizers carried out the 1626 Kalinago Massacre at Bloody Point, clearing the island for plantation enclosure.

Saint Kitts was organized into an extreme sugar monocrop plantation economy. British plantocrats monopolized one hundred percent of arable land, exploiting tens of thousands of enslaved Africans. The total allocation of land to sugar cane prevented food crops, forcing total reliance on imported provisions. [1]`,
      keyFigures: ['Thomas Warner', 'Plantocracy Estate Owners'],
      citationIds: [1],
    },
    {
      id: 'st-kitts-1935-buckleys-uprising-bradshaw-nationalization',
      title: '2. 1935 – 1975: The 1935 Buckley\'s Uprising, Robert Bradshaw and 1975 Sugar Nationalization',
      period: '1935 – 1975',
      categoryTag: 'revolution',
      summary: '1935 Buckley\'s sugar revolt; Robert Bradshaw leads Labour Union; 1975 state sugar land nationalization.',
      details: `In January 1935, sugar workers at Buckley\'s Estate launched a historic strike demanding wage increases, resisting colonial police fire. The Buckley\'s Uprising ignited working-class labor rebellions across the Caribbean.

**Robert Llewellyn Bradshaw** organized the St. Kitts and Nevis Trades and Labour Union, building working-class political power. In 1975, Bradshaw\'s government passed the Sugar Lands Acquisition Act, nationalizing all 22,000 acres of sugar plantation land, breaking plantocracy land ownership forever. [2][3]`,
      keyFigures: ['Robert Llewellyn Bradshaw', 'C.A. Paul Southwell', 'Thomas Manchester'],
      citationIds: [2, 3],
    },
    {
      id: 'st-kitts-1983-independence-2005-sugar-closure',
      title: '3. 1983 – Present: Independence, 2005 Sugar Closure and Modern Enclave Vulnerability',
      period: '1983 – Present',
      categoryTag: 'successes',
      summary: '1983 Independence; 2005 closure of 350-year sugar industry; CBI programs and tourism enclave risks.',
      details: `On September 19, 1983, Saint Kitts and Nevis achieved full independence from Great Britain. In July 2005, following European Union decisions to slash sugar import price guarantees by 36%, Prime Minister Dr. Denzil Douglas officially closed the state sugar manufacturing corporation, bringing an end to 350 years of sugar monoculture.

To replace lost sugar export revenues, the government expanded Citizenship-by-Investment (CBI) programs and luxury resort tourism. However, this transition exposed the nation to new imperialist pressures. Western banking regulatory agencies and the European Union have repeatedly subjected Saint Kitts and Nevis to financial "blacklists" and "grey-lists," attempting to choke local off-shore banking revenues and force compliance with Western tax standards.

Furthermore, foreign real estate developers purchase prime coastal parcels, driving up land values and creating luxury enclaves out of reach for local working-class citizens. Today, popular movements demand that nationalized sugar lands acquired in 1975 be redistributed for smallholder food production to secure genuine agricultural sovereignty. [4]`,
      keyFigures: ['Denzil Douglas', 'Kennedy Simmonds', 'Terrance Drew'],
      citationIds: [4],
    },
  ],

  sources: [
    {
      id: 1,
      label: 'A History of St. Kitts: 2000 Years of People, Place and Progress',
      publisher: 'Brian Dyde / Macmillan Caribbean',
      year: '2005',
      excerpt: 'Comprehensive history of Saint Kitts from native Kalinago settlement through 350 years of British sugar monoculture.',
    },
    {
      id: 2,
      label: 'The 1935 Buckley\'s Uprising and the Labor Movement in St. Kitts',
      publisher: 'St. Kitts and Nevis Trades and Labour Union',
      year: '1985',
      excerpt: 'Historical account of the 1935 sugar worker rebellion at Buckley\'s Estate that launched modern Caribbean trade unionism.',
    },
    {
      id: 3,
      label: 'Robert Llewellyn Bradshaw and the Struggle for St. Kitts',
      publisher: 'Whitman Browne / Ian Randle Publishers',
      year: '1998',
      excerpt: 'Biographical study of labor leader Robert Bradshaw and the 1975 state nationalization of plantocracy sugar lands.',
    },
    {
      id: 4,
      label: 'Transitioning from Sugar: Economic Diversification in St. Kitts and Nevis',
      publisher: 'Caribbean Development Bank (CDB)',
      year: '2006',
      excerpt: 'Economic report detailing the 2005 closure of the 350-year sugar industry and post-monocrop agricultural transition.',
    },
  ],
};
