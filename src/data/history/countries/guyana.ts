import type { CountryData } from '../types';

export const guyanaData: CountryData = {
  id: 'guyana',
  name: 'Co-operative Republic of Guyana',
  shortName: 'Guyana',
  flagEmoji: '🇬🇾',
  flagUrl: '/images/flags/guyana.svg',
  coverImage: '/images/history/guyana.jpg',
  category: 'global-south',
  era: '1763 – Present',
  capital: 'Georgetown',
  keyLeaders: ['Cuffy (Kofi)', 'Cheddi Jagan', 'Forbes Burnham', 'Walter Rodney'],
  governingParty: 'People\'s Progressive Party / Civic (PPP/C)',
  governingIdeology: 'Capitalism',
  isHistoricState: false,

  officialGovUrl: 'https://opm.gov.gy/',
  overviewText: `Guyana represents a South American Caribbean nation forged through Dutch and British sugar plantation slavery, slave insurrections (1763 Berbice Revolution), Indian indentured labor, anti-imperialist Marxist political organizing led by Cheddi Jagan, and the revolutionary scholarship of Walter Rodney.

Under Dutch and British colonial rule, the coastal empoldered lands of Demerara, Essequibo, and Berbice were converted into massive sugar cane monocrop plantations. British plantocrats exploited enslaved Africans under horrific conditions. In 1763, an enslaved revolutionary leader named **Cuffy (Kofi)** launched the **Berbice Slave Rebellion**, establishing an autonomous revolutionary government for over a year. Following slave emancipation in 1838, British sugar monopolies (notably Booker Brothers, known as "Bookers Guiana") imported over two hundred and forty thousand indentured laborers from India to maintain low wages and plantation profits.

In 1950, Marxist leader **Cheddi Jagan** and **Forbes Burnham** formed the People's Progressive Party (PPP), uniting Afro-Guyanese and Indo-Guyanese workers around anti-colonial socialism. In 1953, after the PPP won democratic elections, British Prime Minister Winston Churchill dispatched warships and troops to oust Jagan's government and suspend the constitution. British and US CIA intelligence agencies engineered racial destabilization to split the movement. Following independence in 1966, Marxist historian **Walter Rodney** (author of *How Europe Underdeveloped Africa* and *A History of the Guyanese Working People*) founded the Working People's Alliance (WPA) to unite working-class resistance against Burnham's authoritarian regime before Rodney was assassinated in 1980.`,

  contradictions: [
    "British colonial sugar monoculture relied on Booker Brothers plantation monopolies and divide-and-rule tactics between Afro-Guyanese and Indo-Guyanese workers, creating racialized political divisions that Anglo-American intelligence weaponized to split the anti-imperialist movement.",
    "Cheddi Jagan's democratically elected Marxist government in 1953 was overthrown by British military invasion and US CIA covert operations to prevent a sovereign socialist state in South America.",
    "Forbes Burnham's government nationalized bauxite and sugar industries under cooperative socialism, yet repressed working-class trade unions, accumulated massive Western commercial debt, and assassinated Marxist historian Walter Rodney in 1980.",
    "Recent offshore oil extractions led by US energy giant ExxonMobil generate billions in gross revenue, yet the 2016 Production Sharing Agreement locks Guyana into colonial-style terms (2% royalty rate and 75% cost-recovery deductions for foreign corporations), siphoning public wealth overseas while triggering domestic inflation and Dutch disease."
  ],

  quickFacts: [
    { label: '1763 Berbice Slave Revolution', value: 'Revolutionary leader Cuffy liberated Berbice, establishing an autonomous anti-colonial state [1]' },
    { label: 'Bookers Guiana Monopoly', value: 'British sugar cartel Booker Brothers controlled plantation land, shipping and trade [2]' },
    { label: '1953 British Military Overthrow', value: 'Churchill sent warships to overthrow Cheddi Jagan\'s democratically elected Marxist government [3]' },
    { label: 'Walter Rodney\'s Scholarship', value: 'Marxist historian authored anti-imperialist classics before his 1980 political assassination [4]' },
  ],

  timeline: [
    {
      id: 'guyana-1763-berbice-rebellion-sugar',
      title: '1. 1763 – 1838: The 1763 Berbice Slave Revolution and British Sugar Monoculture',
      period: '1763 – 1838',
      categoryTag: 'pre-revolution',
      summary: '1763 Cuffy leads Berbice slave revolution; British sugar monocrop plantations and 1838 emancipation.',
      details: `In February 1763, an enslaved revolutionary named Cuffy led a massive slave uprising across Dutch sugar plantations in Berbice. Cuffy organized an independent government and military defense, holding Berbice for over a year before Dutch reinforcements crushed the revolution.

In 1814, Britain formally acquired Guyana, expanding coastal empoldered sugar cane monocrop plantations. Driven by enslaved African labor, British plantocrats made sugar the dominant export, destroying domestic food agriculture. Emancipation in 1838 led freed workers to establish communal villages, resisting estate low wages. [1]`,
      keyFigures: ['Cuffy (Kofi)', 'Akara', 'Atta'],
      citationIds: [1],
    },
    {
      id: 'guyana-1845-indentured-labor-jagan-1953',
      title: '2. 1845 – 1953: Indentured Labor, Cheddi Jagan and the 1953 British Overthrow',
      period: '1845 – 1953',
      categoryTag: 'revolution',
      summary: '240,000 Indian indentured workers; 1950 PPP formation; 1953 British warships depose Jagan.',
      details: `To replace emancipated African labor and depress wages, British sugar monopolies (Booker Brothers) imported over 240,000 indentured workers from India between 1838 and 1917. In 1948, colonial police murdered striking sugar workers at Enmore (the Enmore Martyrs).

In 1950, Marxist dentist Dr. Cheddi Jagan and Forbes Burnham formed the People's Progressive Party (PPP), winning the 1953 elections on a socialist platform. Fearing a communist state, British Prime Minister Winston Churchill suspended the constitution and landed troops in October 1953 to oust Jagan. [2][3]`,
      keyFigures: ['Cheddi Jagan', 'Janet Jagan', 'Forbes Burnham', 'Enmore Martyrs'],
      citationIds: [2, 3],
    },
    {
      id: 'guyana-1966-independence-rodney-oil',
      title: '3. 1966 – Present: Independence, Walter Rodney\'s Legacy and ExxonMobil Oil Exploitation',
      period: '1966 – Present',
      categoryTag: 'policies',
      summary: '1966 Independence; Forbes Burnham nationalizations; 1980 assassination of Walter Rodney; ExxonMobil oil contract exploitation.',
      details: `Guyana achieved independence in 1966. Forbes Burnham's PNC government nationalized bauxite and sugar assets under "Co-operative Socialism." However, Burnham suppressed political opponents, leading Marxist historian Walter Rodney to form the Working People's Alliance (WPA) to rebuild working-class unity across racial lines. On June 13, 1980, Walter Rodney was assassinated by a state-planted explosive device.

During the late 1980s and 1990s, extreme foreign debt servicing forced Guyana into IMF Economic Recovery Programs (ERPs), which mandated state asset privatizations, currency devaluations, and public wage freezes, causing severe working-class impoverishment and mass emigration.

Since 2015, massive offshore oil discoveries in the Stabroek Block have transformed Guyana into one of the world's fastest-growing oil producers. However, the oil boom is governed by a notoriously unequal 2016 Production Sharing Agreement negotiated under pressure with US energy giant ExxonMobil, Hess, and CNOOC. The contract grants ExxonMobil a 75% annual cost-recovery deduction and a paltry 2% royalty rate, allowing foreign corporate cartels to extract tens of billions in oil profits while Guyanese workers face rising housing costs, inflation, and environmental risks. Working-class organizations and civil society activists demand renegotiation of the imperialist oil contract to secure national resource sovereignty. [4]`,
      keyFigures: ['Walter Rodney', 'Cheddi Jagan', 'Forbes Burnham', 'Irfaan Ali'],
      citationIds: [4],
    },
  ],

  sources: [
    {
      id: 1,
      label: 'The Berbice Revolution 1763',
      publisher: 'Anna Benjamin / History Gazette Guyana',
      year: '1992',
      excerpt: 'Historical study of the 1763 Berbice Slave Revolt led by Cuffy and the establishment of an anti-colonial revolutionary state.',
    },
    {
      id: 2,
      label: 'A History of the Guyanese Working People 1881–1905',
      publisher: 'Walter Rodney / Johns Hopkins University Press',
      year: '1981',
      excerpt: 'Landmark Marxist historical analysis of sugar monoculture, indentured labor, and working-class resistance in British Guiana.',
    },
    {
      id: 3,
      label: 'The West On Trial: My Fight for Guyana\'s Freedom',
      publisher: 'Cheddi Jagan / Seven Seas Books',
      year: '1966',
      excerpt: 'Autobiographical account by Cheddi Jagan documenting the 1953 British military invasion and US intervention in British Guiana.',
    },
    {
      id: 4,
      label: 'How Europe Underdeveloped Africa',
      publisher: 'Walter Rodney / Bogle-L\'Ouverture Publications',
      year: '1972',
      excerpt: 'Classic anti-colonial Marxist analysis demonstrating how European imperialist plunder under-developed the Global South.',
    },
  ],
};
