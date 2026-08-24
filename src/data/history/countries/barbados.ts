import type { CountryData } from '../types';

export const barbadosData: CountryData = {
  id: 'barbados',
  name: 'Barbados',
  shortName: 'Barbados',
  flagEmoji: '🇧🇧',
  flagUrl: '/images/flags/barbados.svg',
  coverImage: '/images/history/barbados.jpg',
  category: 'global-south',
  era: '1627 – Present',
  capital: 'Bridgetown',
  keyLeaders: ['Bussa', 'Samuel Jackman Prescod', 'Grantley Adams', 'Errol Barrow', 'Mia Mottley'],
  governingParty: 'Barbados Labour Party',
  governingIdeology: 'Social Democracy',
  isHistoricState: false,

  officialGovUrl: 'https://www.gov.bb/',
  overviewText: `Barbados represents the historical birthplace of the British sugar plantation economy and transatlantic slave plantation machinery in the Americas, which was later transformed by popular anti-colonial labor struggles and modern republic sovereignty.

Following British colonial settlement in 1627, Barbados underwent the Sugar Revolution of the 1640s. British plantocrats destroyed the island's native rainforests to convert virtually one hundred percent of arable land into sugar cane monoculture. Driven by hyper-exploited enslaved African labor under the brutal 1661 Barbadian Slave Code (which served as the legal model for slave codes across the British Empire), Barbados became the world's most profitable sugar monocrop export enclave. This complete monocrop specialization destroyed food sovereignty, forcing the island to import all basic sustenance from British merchant cartels. Enslaved Africans waged relentless anti-colonial resistance, culminating in Bussa's 1816 Slave Rebellion.

Following slave emancipation in 1838, the white plantocracy maintained economic control through land monopolies and low agricultural wages. During the 1930s labor uprisings, Grantley Adams organized the working class, leading to universal suffrage. Under Errol Barrow and the Democratic Labour Party, Barbados achieved full independence in 1966. In November 2021, under Prime Minister Mia Mottley, Barbados officially removed Queen Elizabeth II as head of state, declaring a sovereign Republic and leading global Global South demands for climate reparations and international financial reform.`,

  contradictions: [
    "Centuries of British sugar plantation monoculture stripped Barbados of native forest ecology and agricultural diversification, creating permanent structural reliance on expensive foreign food imports from Western cartels.",
    "The 1661 Barbados Slave Code served as the foundational legal template for colonial slave regimes across North America and the West Indies, generating immense primitive capital for British commercial banks while entrenching racialized class inequality.",
    "Transitioning from sugar monoculture into offshore financial services and foreign luxury resort tourism created extreme vulnerability to Western financial crises, corporate tax dodging, and profit repatriation by foreign hotel cartels.",
    "IMF Structural Adjustment Programs (such as the 2018 Economic Recovery and Transformation plan) forced public sector lay-offs and state expenditure cuts, while Western carbon emissions drive catastrophic Category 5 hurricanes that trap the nation in endless debt-funded reconstruction cycles.",
    "Prime Minister Mia Mottley leads global international calls for imperialist climate reparations and sovereign debt relief (the Bridgetown Initiative), while domestic working-class organizations demand structural wage increases, food sovereignty, and public utility control."
  ],

  quickFacts: [
    { label: 'Sugar Monocrop Revolution (1640s)', value: 'Pioneered total sugar cane monoculture and British plantocracy estate enclosure [1]' },
    { label: '1661 Slave Code Template', value: 'Drafted the legal framework for chattel slavery adopted across the British Empire [2]' },
    { label: 'Bussa\'s 1816 Slave Rebellion', value: 'Enslaved revolutionary Bussa led island-wide armed insurrection against plantocrats [3]' },
    { label: '2021 Parliamentary Republic', value: 'Removed British monarch as head of state and declared sovereign Republic [4]' },
  ],

  timeline: [
    {
      id: 'barbados-1627-sugar-revolution-slave-code',
      title: '1. 1627 – 1815: British Sugar Monocrop Revolution and the 1661 Slave Code',
      period: '1627 – 1815',
      categoryTag: 'pre-revolution',
      summary: 'British settlement; total sugar monoculture enclosure; drafting the 1661 Barbadian Slave Code.',
      details: `In 1627, British colonizers claimed Barbados, rapidly clearing native rainforests to establish tobacco and cotton estates. By the 1640s, Dutch capital and British plantocrats introduced sugar cane, launching the Sugar Revolution.

Barbados became the first island completely transformed into a sugar monocrop plantation economy. To control the vast enslaved African majority, the colonial assembly enacted the 1661 Barbados Slave Code, defining enslaved human beings as chattel property. This law served as the direct model for slave codes in Jamaica, South Carolina, and across the British Empire. [1][2]`,
      keyFigures: ['Sir William Drax', 'Colonial Plantocrats'],
      citationIds: [1, 2],
    },
    {
      id: 'barbados-1816-bussa-rebellion-emancipation',
      title: '2. 1816 – 1937: Bussa\'s 1816 Slave Revolt, Emancipation and 1930s Labor Rebellion',
      period: '1816 – 1937',
      categoryTag: 'revolution',
      summary: '1816 Bussa insurrection; 1838 emancipation; 1937 working-class labor uprising.',
      details: `In April 1816, an enslaved ranger named Bussa led a carefully organized island-wide slave rebellion against sugar plantocrats. Mobilizing over four thousand enslaved workers, Bussa's army fought British imperial troops before being suppressed.

Following full emancipation in 1838, the plantocracy maintained land monopolies, forcing former slaves to work on sugar estates for starvation wages under tenantry laws. In July 1937, severe economic distress during the Great Depression sparked working-class labor rebellions led by Clement Payne, forcing colonial authorities to permit trade union organizing. [3]`,
      keyFigures: ['Bussa', 'Nanny Grigg', 'Clement Payne', 'Samuel Jackman Prescod'],
      citationIds: [3],
    },
    {
      id: 'barbados-1966-independence-republic-2021',
      title: '3. 1966 – Present: Independence, Neoliberal Debt Traps and Declaration of the Republic',
      period: '1966 – Present',
      categoryTag: 'successes',
      summary: '1966 Independence under Errol Barrow; 2021 removal of British monarch; Bridgetown Initiative against climate debt.',
      details: `On November 30, 1966, Errol Barrow and the Democratic Labour Party guided Barbados to full independence from Great Britain. The new state expanded public education and healthcare while attempting to transition away from failing sugar monoculture into light manufacturing, offshore banking, and luxury tourism.

However, formal political independence did not break underlying imperialist economic dependencies. Foreign-owned hotel cartels and cruise lines extract immense profits from Barbadian beaches while repatriating earnings to Western financial hubs, leaving host communities with low-wage service jobs. In 2018, severe balance of payments crises forced Barbados into a multi-year IMF Structural Adjustment Program (the BERT plan), which mandated public sector retrenchment, state expenditure caps, and utility price increases.

Furthermore, Barbados suffers from climate imperialism: Western industrialized nations generate the vast majority of global carbon emissions, yet small island states face devastating Category 5 hurricanes and coastal erosion. Rebuilding destroyed public infrastructure forces Barbados to take out high-interest loans from Western commercial banks, trapping the nation in an endless cycle of climate-induced debt servicing. On November 30, 2021, Barbados officially severed ties with the British Crown, declaring a sovereign Republic under President Sandra Mason. Prime Minister Mia Mottley launched the Bridgetown Initiative, calling for unconditional debt restructuring, climate reparations from imperialist powers, and the complete transformation of international financial institutions. [4]`,
      keyFigures: ['Errol Barrow', 'Mia Mottley', 'Sandra Mason'],
      citationIds: [4],
    },
  ],

  sources: [
    {
      id: 1,
      label: 'Capitalism and Slavery',
      publisher: 'Eric Williams / University of North Carolina Press',
      year: '1944',
      excerpt: 'Landmark Marxist economic study demonstrating how Barbadian and West Indian sugar monoculture generated the primary capital accumulation that financed the British Industrial Revolution.',
    },
    {
      id: 2,
      label: 'The 1661 Barbados Slave Act Historical Record',
      publisher: 'Colonial Assembly of Barbados / British Public Record Office',
      year: '1661',
      excerpt: 'Historical legal documentation defining enslaved Africans as chattel property, providing the legal template for British colonial slave codes.',
    },
    {
      id: 3,
      label: 'Bussa\'s Rebellion and the Abolition of British Slavery',
      publisher: 'Hilary Beckles / Caribbean Universities Press',
      year: '1998',
      excerpt: 'Historical study of the 1816 Barbadian slave insurrection led by Bussa and its role in forcing the abolition of British chattel slavery.',
    },
    {
      id: 4,
      label: 'Official Proclamation of the Republic of Barbados',
      publisher: 'Government of Barbados',
      year: '2021',
      excerpt: 'Official state documentation severing constitutional ties with the British Crown and establishing a parliamentary republic.',
    },
  ],
};
