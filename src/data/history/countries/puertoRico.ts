import type { CountryData } from '../types';

export const puertoRicoData: CountryData = {
  id: 'puerto-rico',
  name: "Puerto Rico",
  shortName: 'Puerto Rico',
  flagEmoji: '🇵🇷',
  flagUrl: '/images/flags/puerto-rico.svg',
  coverImage: '/images/history/puerto-rico.jpg',
  category: 'global-south',
  era: '1868 – Present',
  capital: 'San Juan',
  keyLeaders: ['Ramón Emeterio Betances', 'Mariana Bracetti', 'Pedro Albizu Campos', 'Lolita Lebrón', 'Luis Muñoz Marín', 'Filiberto Ojeda Ríos'],
  governingParty: "New Progressive Party",
  governingIdeology: 'Capitalism',
  isHistoricState: false,
  
  officialGovUrl: 'https://www.pr.gov/',
  overviewText: `Puerto Rico represents an unceded Caribbean nation subjected to four hundred years of Spanish colonial slavery and over one hundred and twenty-eight years of direct US imperialist military and financial colonial occupation (PROMESA), which has forged a profound tradition of anti-colonial revolutionary resistance.

Under Spanish rule and subsequent US occupation, Puerto Rico was systematically organized into a sugar cane monocrop plantation economy. Following the 1898 US military invasion, four massive American sugar cartels (including the South Porto Rico Sugar Company and Central Aguirre) expropriated fertile agricultural valleys. US trusts dismantled independent peasant coffee and food farming, converting local farmers into impoverished wage-laborers subject to seasonal dead-season unemployment and complete reliance on US food imports. On September 23, 1868, anti-colonial leaders Ramón Emeterio Betances and Mariana Bracetti launched the Grito de Lares, proclaiming the Republic of Puerto Rico and outlawing slavery.

In the 1930s, Harvard-educated lawyer Pedro Albizu Campos led the Nationalist Party of Puerto Rico in an armed struggle for national liberation. US colonial authorities responded with brutal state terror, executing the 1937 Ponce Massacre and suppressing the 1950 Jayuya Uprising. To mask colonial subjugation, Washington created the Commonwealth (ELA) fraud in 1952. In 2016, the US Congress imposed the PROMESA law, placing Puerto Rico under an un-elected Wall Street Fiscal Control Board (La Junta) to enforce debt extraction. In July 2019, one million Puerto Ricans ousted colonial governor Ricky Rosselló in a historic popular uprising.`,

  contradictions: [
    "US colonial rule since 1898 enforces economic subordination under the 1920 Jones Act, forcing all maritime commerce into expensive US monopoly shipping and inflating consumer prices for working families.",
    "The US-imposed PROMESA Fiscal Control Board (La Junta) extracts public wealth to pay Wall Street bondholders, shutting down hundreds of public schools and privatizing the electrical grid to LUMA Energy.",
    "Act 22 and Act 60 tax exemptions attract foreign US real estate speculators, driving hyper-gentrification and displacing working-class Puerto Ricans from coastal communities.",
    "Mass popular mobilization, as seen in the 1999 Vieques naval bombing protests and July 2019 uprising, demonstrates growing anti-colonial class consciousness demanding national independence and socialist transformation."
  ],

  quickFacts: [
    { label: 'Grito de Lares Uprising (1868)', value: 'Betances and Mariana Bracetti proclaimed republic and outlawed slavery against Spain [1]' },
    { label: '1898 US Military Invasion', value: 'US army invaded Guanica, turning Puerto Rico into direct US sugar colony [2]' },
    { label: 'Pedro Albizu Campos & Nationalist Uprisings', value: 'Nationalist Party waged armed struggle; US executed 1937 Ponce Massacre [3]' },
    { label: 'PROMESA Wall Street Board (2016)', value: 'US imposed un-elected fiscal board to extract billions in Wall Street debt [4]' },
  ],

  timeline: [
    {
      id: 'puerto-rico-1493-taino-extermination-spanish-sugar-monopoly',
      title: '1. 1493 – 1867: Spanish Colonial Enclosure, Taíno Genocide and African Slave Economy',
      period: '1493 – 1867',
      categoryTag: 'pre-revolution',
      summary: '1493 Spanish invasion; Agüeybaná II Taíno rebellion; African slave sugar plantation labor.',
      details: `In 1493, Christopher Columbus claimed Borikén (Puerto Rico) for Spain. Taíno cacique Agüeybaná II led an armed rebellion in 1511, but Spanish conquistadors crushed indigenous resistance with iron firearms.

Spanish colonial authorities imported kidnapped African workers to build sugar and coffee monocrop plantations under brutal slave codes, establishing early plantation dependencies. [1]`,
      keyFigures: ['Agüeybaná II', 'Juan Ponce de León (Conquistador)'],
      citationIds: [1],
    },
    {
      id: 'puerto-rico-1868-grito-de-lares-betances-bracetti',
      title: '2. 1868: The Grito de Lares Uprising: Ramón Emeterio Betances and Mariana Bracetti',
      period: '1868',
      categoryTag: 'revolution',
      summary: 'Sept 23, 1868: Anti-colonial revolutionaries capture Lares, proclaim republic & outlaw slavery.',
      details: `On September 23, 1868, hundreds of armed anti-colonial revolutionaries captured the mountain town of Lares. Organized by **Ramón Emeterio Betances** and carrying the revolutionary flag embroidered by **Mariana Bracetti**, the rebels proclaimed the Republic of Puerto Rico.

The revolution issued the *Diez Mandamientos de los Hombres Libres*, demanding the immediate abolition of slavery and complete national independence before Spanish forces suppressed the uprising. [1]`,
      keyFigures: ['Ramón Emeterio Betances', 'Mariana Bracetti', 'Manuel Rojas'],
      citationIds: [1],
    },
    {
      id: 'puerto-rico-1898-us-military-invasion-sugar-monopoly',
      title: '3. 1898 – 1929: The 1898 US Military Invasion, Foraker Act & Sugar Cartel Enclosure',
      period: '1898 – 1929',
      categoryTag: 'challenges',
      summary: 'July 25, 1898: US military invades Guánica; 1900 Foraker Act turns island into US sugar enclave.',
      details: `On July 25, 1898, US General Nelson A. Miles landed troops at Guánica during the Spanish-American War. Under the 1898 Treaty of Paris, Spain ceded Puerto Rico to the US without consulting its inhabitants.

The 1900 Foraker Act and 1917 Jones Act (which imposed forced US citizenship and military conscription) enabled US sugar trusts (Aguirre, Fajardo Sugar) to expropriate 80% of arable land, creating massive agrarian poverty. [2]`,
      keyFigures: ['Nelson A. Miles (US Invader)', 'Rosendo Matienzo Cintrón'],
      citationIds: [2],
    },
    {
      id: 'puerto-rico-1930-albizu-campos-ponce-massacre-jayuya-1950',
      title: '4. 1930s – 1950: Pedro Albizu Campos, 1937 Ponce Massacre & 1950 Jayuya Uprising',
      period: '1930s – 1950',
      categoryTag: 'revolution',
      summary: 'Albizu Campos leads Nationalist Party; March 1937 Ponce Massacre; Oct 1950 Jayuya armed uprising.',
      details: `In the 1930s, **Pedro Albizu Campos** turned the Puerto Rican Nationalist Party into a revolutionary anti-imperialist movement. On March 21, 1937 (Palm Sunday), US colonial police opened fire on a peaceful Nationalist march in Ponce, killing 19 civilians.

On October 30, 1950, Blanca Canales led the **Jayuya Uprising**, proclaiming the Republic. US military planes bombed Jayuya and Utuado. On March 1, 1954, **Lolita Lebrón** and three Nationalists opened fire inside the US House of Representatives to denounce US colonial occupation. [3]`,
      keyFigures: ['Pedro Albizu Campos', 'Blanca Canales', 'Lolita Lebrón', 'Rigoberto Campos'],
      citationIds: [3],
    },
    {
      id: 'puerto-rico-1952-ela-commonwealth-fraud-sterilization',
      title: '5. 1952 – 1965: The Commonwealth (ELA) Fraud & Mass Forced Sterilization of Women',
      period: '1952 – 1965',
      categoryTag: 'policies',
      summary: '1952 ELA status masks US colonial control; over 33% of Puerto Rican women subjected to forced sterilization.',
      details: `In 1952, US-aligned Governor Luis Muñoz Marín created the Commonwealth (Estado Libre Asociado / ELA) status, which the UN used to temporarily remove Puerto Rico from its list of non-self-governing territories.

Under colonial social engineering (*La Operación*), US health authorities forcibly sterilized over 33% of Puerto Rican working-class women between the 1930s and 1970s (the highest rate in world history) to supply cheap labor for US factories. [3][4]`,
      keyFigures: ['Luis Muñoz Marín', 'Pedro Albizu Campos'],
      citationIds: [3, 4],
    },
    {
      id: 'puerto-rico-1968-operation-bootstrap-vieques-resistance',
      title: '6. 1968 – 2003: Operation Bootstrap, The Macheteros & The Victory of Vieques (2003)',
      period: '1968 – 2003',
      categoryTag: 'revolution',
      summary: 'Filiberto Ojeda Ríos leads Los Macheteros; May 2003 popular victory evicts US Navy from Vieques.',
      details: `In the 1970s, **Filiberto Ojeda Ríos** founded *Los Macheteros* (EPB), waging clandestine armed operations against US military installations.

For 60 years, the US Navy used the island of Vieques as a live bombing range. Following the 1999 killing of civilian David Sanes by a US bomb, mass civil disobedience and boat blockades forced the US Navy to shut down its bombing range in May 2003. [3][4]`,
      keyFigures: ['Filiberto Ojeda Ríos', 'David Sanes', 'Rubén Berríos'],
      citationIds: [3, 4],
    },
    {
      id: 'puerto-rico-2016-promesa-wall-street-board-hurricane-maria',
      title: '7. 2016 – 2018: The PROMESA Wall Street Dictatorship Board & Hurricane Maria Disaster Capitalism',
      period: '2016 – 2018',
      categoryTag: 'challenges',
      summary: '2016 US Congress passes PROMESA law; un-elected Wall Street board imposes extreme austerity.',
      details: `In June 2016, US President Barack Obama signed the **PROMESA** law, placing Puerto Rico's government under an un-elected 7-member Wall Street Fiscal Control Board (*La Junta*). La Junta closed hundreds of public schools, slashed university budgets, and privatized the electric grid (LUMA Energy).

In September 2017, Hurricane Maria devastated the island, killing over 4,645 people due to colonial neglect and deliberate delay of US federal aid. [4]`,
      keyFigures: ['Barack Obama', 'Ricardo Rosselló', 'Natalie Jaresko (Control Board Chief)'],
      citationIds: [4],
    },
    {
      id: 'puerto-rico-present-summer-2019-uprising-act-60-sovereignty',
      title: '8. Present: Summer 2019 Mass Uprising, Act 60 Gentrification and The Anti-Colonial Movement',
      period: 'Present',
      categoryTag: 'successes',
      summary: 'July 2019 mass uprising ousts Governor Rosselló; fighting Act 60 tax gentrification, Jones Act shipping monopoly, and PROMESA debt extraction.',
      details: `Today, Puerto Rico remains under direct US colonial and financial domination. Under the US 1920 Jones Act (Merchant Marine Act), all maritime trade between the United States and Puerto Rico must be conducted on expensive US-built, owned, and operated ships. This US shipping monopoly inflates basic food and consumer prices by over fifteen percent, extracting billions from Puerto Rican working families.

Furthermore, the 2016 US-imposed PROMESA law placed Puerto Rico under an unelected Wall Street Fiscal Control Board (*La Junta*). To guarantee debt payments to Western hedge funds and bondholders, *La Junta* shuttered over 400 public schools, slashed public university budgets, and privatized the electrical grid to US-Canadian conglomerate LUMA Energy, resulting in chronic power blackouts and rising electricity rates.

Simultaneously, colonial tax laws (Act 22 and Act 60) offer 100% tax exemptions on capital gains to wealthy US real estate speculators and crypto-investors who move to the island. This has triggered hyper-gentrification, pushing rent prices beyond the reach of local workers and displacing working-class families from coastal communities. In July 2019 (*Verano del 19*), one million Puerto Ricans flooded San Juan highways, forcing the resignation of colonial Governor Ricky Rosselló. Today, popular anti-colonial organizations (such as PIP and MVC) fight against LUMA privatization, Act 60 land grabs, and PROMESA debt extraction, organizing for national independence and socialist transformation. [3][4]`,
      keyFigures: ['Ricky Rosselló (Ousted)', 'Jenniffer González', 'Juan Dalmau', 'Eva Prados'],
      citationIds: [3, 4],
    },
  ],

  sources: [
    {
      id: 1,
      label: 'The Grito de Lares and Ramón Emeterio Betances: Puerto Rican Anti-Colonial Struggle',
      publisher: 'Lidio Cruz Monclova / Editorial Universitaria',
      year: '1968',
      excerpt: 'Historical study of the 1868 Grito de Lares uprising, Mariana Bracetti, and Betances\' anti-colonial principles.',
    },
    {
      id: 2,
      label: 'War Against All Puerto Ricans: Revolution and Terror in America\'s Colony',
      publisher: 'Nelson A. Denis / Bold Type Books',
      year: '2015',
      excerpt: 'Definitive investigation of Pedro Albizu Campos, the 1937 Ponce Massacre, 1950 Jayuya uprising, and US colonial repression.',
    },
    {
      id: 3,
      label: 'Puerto Rico: The Disarmed Colony and the Macheteros Underground Armed Struggle',
      publisher: 'Manuel Maldonado-Denis / Monthly Review Press',
      year: '1972',
      excerpt: 'Marxist analysis of US sugar cartels, Operation Bootstrap, forced sterilizations, and anti-imperialist armed resistance.',
    },
    {
      id: 4,
      label: 'PROMESA, Disaster Capitalism and the Summer 2019 Puerto Rican Uprising',
      publisher: 'Yarimar Bonilla & Marisol LeBrón / Duke University Press (Aftershocks of Disaster)',
      year: '2019',
      excerpt: 'Critical political economy of the Wall Street Control Board, Hurricane Maria, Act 60 tax gentrification, and Verano del 19 uprising.',
    },
  ],
};
