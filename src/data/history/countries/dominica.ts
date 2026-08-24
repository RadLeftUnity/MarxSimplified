import type { CountryData } from '../types';

export const dominicaData: CountryData = {
  id: 'dominica',
  name: "Dominica",
  shortName: 'Dominica',
  flagEmoji: '🇩🇲',
  flagUrl: '/images/flags/dominica.svg',
  coverImage: '/images/history/dominica.jpg',
  category: 'global-south',
  era: '1763 – Present',
  capital: 'Roseau',
  keyLeaders: ['Chief Jacko (Maroon Leader)', 'Edward Oliver LeBlanc', 'Patrick John', 'Eugenia Charles', 'Roosevelt Skerrit'],
  governingParty: "Dominica Labour Party",
  governingIdeology: "Social Democracy",
  isHistoricState: false,
  
  officialGovUrl: 'https://dominica.gov.dm/',
  overviewText: `Dominica represents a resilient Caribbean island nation forged through indigenous Kalinago land defense, escaped slave Maroon resistance (Chief Jacko), anti-colonial labor struggles, and modern anti-imperialist Global South solidarity.

Under British colonial rule, Dominica was exploited as a sugar and lime plantation economy, which was later converted into a banana monocrop economy ("Green Gold"). Controlled by British shipping cartels like the Geest Line, banana monocropping destroyed domestic food cultivation, creating severe vulnerability to global price shocks and US corporate banana wars under the World Trade Organization. Dominica's mountainous terrain enabled escaped enslaved Africans to establish autonomous mountain communities in dense rainforests, led by Maroon leaders Chief Jacko and Balla, who waged decades of armed resistance against British sugar planters. In 1932, Roseau hosted the historic West Indian Conference, demanding Caribbean self-determination and universal suffrage.

Following full independence on November 3, 1978, Dominica defeated a bizarre 1981 US white supremacist mercenary coup plot (Operation Red Dog and Ku Klux Klan). Under Prime Minister Roosevelt Skerrit and the Dominica Labour Party (DLP), Dominica joined the Bolivarian Alliance for the Peoples of Our America (ALBA) in 2008, building anti-imperialist partnerships with Venezuela and Cuba, resisting US coercion, and developing eco-resilience against climate-induced hurricanes.`,

  contradictions: [
    "Joining the anti-imperialist ALBA alliance alongside Venezuela and Cuba expanded public housing and infrastructure aid, yet invited economic coercion and diplomatic pressure from US imperialist state agencies.",
    "Escaped slave Maroon communities under Chief Jacko and indigenous Kalinago land defenders built historical anti-colonial resistance, yet modern transnational tourism cartels attempt to privatize coastal resources.",
    "Prime Minister Roosevelt Skerrit and the Dominica Labour Party maintain popular electoral support through social welfare programs, yet vulnerability to foreign capital markets and IMF debt traps remains an ongoing challenge.",
    "Severe climate destruction from category 5 hurricanes requires massive reconstruction capital, which Western financial institutions exploit to push for privatized economic concessions."
  ],

  quickFacts: [
    { label: 'Maroon Mountain Sovereignty', value: 'Chief Jacko led escaped slaves in decades of armed resistance against British sugar planters [1]' },
    { label: '1932 Roseau West Indian Conference', value: 'Historic conference in Roseau demanding Caribbean self-determination and universal suffrage [2]' },
    { label: '1981 KKK Mercenary Coup Defeated', value: 'Defeated Operation Red Dog: a plot by US Ku Klux Klan mercenaries to overthrow the state [3]' },
    { label: 'ALBA Anti-Imperialist Alliance', value: 'Joined ALBA in 2008, partnering with Venezuela and Cuba for regional sovereignty [4]' },
  ],

  timeline: [
    {
      id: 'dominica-pre-1763-kalinago-indigenous-resistance',
      title: '1. Pre-1763: Kalinago Indigenous Resistance and The Carib Territory Settlement',
      period: 'Pre-1763',
      categoryTag: 'pre-revolution',
      summary: 'Indigenous Kalinago defend mountainous Waitukubuli against Spanish and French colonization.',
      details: `Prior to European invasion, the island was called Waitukubuli ("Tall is her body") by the indigenous Kalinago people. Dominica's steep volcanic mountains and dense rainforests enabled the Kalinago to fiercely defend their land, forcing France and Britain to declare Dominica a "neutral island" in 1748.

Although European diseases and military violence reduced their numbers, the Kalinago secured 3,700 acres of land on the windward coast (the Kalinago Territory), preserving indigenous communal land governance to this day. [1]`,
      keyFigures: ['Kalinago Chiefs', 'Chief Warner'],
      citationIds: [1],
    },
    {
      id: 'dominica-1763-british-sugar-maroon-jacko',
      title: '2. 1763 – 1814: British Sugar Plantation Monoculture and Chief Jacko\'s Maroon Mountain Resistance',
      period: '1763 – 1814',
      categoryTag: 'revolution',
      summary: 'British establish sugar plantations; Chief Jacko leads Maroon mountain communities against planters.',
      details: `In 1763, the Treaty of Paris awarded Dominica to Great Britain, which established coffee and sugar plantations powered by enslaved African labor.

Escaped enslaved Africans fled into the impenetrable interior, forming autonomous Maroon camps. Under the leadership of **Chief Jacko** (who maintained an autonomous camp for 40 years) and Balla, Maroon guerrillas ambushed British colonial militia and raided plantations until Jacko was killed in battle in 1814. [1]` ,
      keyFigures: ['Chief Jacko', 'Balla', 'Governor George Ainslie'],
      citationIds: [1],
    },
    {
      id: 'dominica-1834-post-emancipation-mulatto-assembly',
      title: '3. 1834 – 1898: Post-Emancipation "Mulatto Assembly" & British Imperial Re-Categorization',
      period: '1834 – 1898',
      categoryTag: 'policies',
      summary: '1834 Slavery Abolition; 1838 first elected Black-majority Assembly; 1898 Crown Colony direct rule.',
      details: `Following the abolition of slavery in 1834, Dominica became the only British Caribbean colony in 1838 to elect a Black and mixed-race majority to its legislature (the "Mulatto Assembly").

Alarmed by non-white parliamentary control, British colonial authorities stripped the assembly of power, suspended the constitution, and imposed direct Crown Colony rule in 1898 to restore white planter control. [1][2]`,
      keyFigures: ['Louis Cools-Lartigue', 'J.B. Gideon'],
      citationIds: [1, 2],
    },
    {
      id: 'dominica-1932-west-indian-conference-self-determination',
      title: '4. 1932 – 1966: The 1932 West Indian Conference in Roseau & Drive for Self-Governance',
      period: '1932 – 1966',
      categoryTag: 'policies',
      summary: '1932: Roseau hosts historic West Indian Conference demanding self-determination & adult suffrage.',
      details: `In November 1932, Roseau hosted the landmark West Indian Conference, bringing together labor and political delegates across the Caribbean to demand democratic self-governance, a West Indies Federation, and universal adult suffrage.

Mass labor organizing in the 1940s led to universal adult suffrage in 1951 and the election of Edward Oliver LeBlanc's Dominica Labour Party (DLP) in 1961. [2]` ,
      keyFigures: ['Edward Oliver LeBlanc', 'Cecil Rawle', 'Phyllis Shand Allfrey'],
      citationIds: [2],
    },
    {
      id: 'dominica-1967-premier-leblanc-full-independence-1978',
      title: '5. 1967 – 1978: Premier Edward Oliver LeBlanc & Nov 3, 1978 Full Independence Victory',
      period: '1967 – 1978',
      categoryTag: 'successes',
      summary: '1967 Associated Statehood; Nov 3, 1978: Full independence proclaimed under Prime Minister Patrick John.',
      details: `In 1967, Premier Edward Oliver LeBlanc led Dominica to Associated Statehood, expanding public education, road infrastructure, and banana agriculture.

On November 3, 1978, the 185th anniversary of Columbus's arrival, Dominica achieved full political independence as a republic within the Commonwealth, with Patrick John serving as its first Prime Minister. [2][3]`,
      keyFigures: ['Edward Oliver LeBlanc', 'Patrick John', 'Rosie Douglas'],
      citationIds: [2, 3],
    },
    {
      id: 'dominica-1979-kkk-mercenary-coup-operation-red-dog',
      title: '6. 1979 – 1980: The 1979 Ku Klux Klan / Mercenary Operation Red Dog Coup Plot Defeated',
      period: '1979 – 1980',
      categoryTag: 'challenges',
      summary: '1981: Defeated Operation Red Dog coup plot by US white supremacists & KKK mercenaries.',
      details: `In 1981, ousted Prime Minister Patrick John conspired with US white supremacists, Nazi sympathizers, and Ku Klux Klan leaders in Louisiana to launch **Operation Red Dog**.

The plot aimed to hire 10 heavily armed US mercenaries to invade Dominica, overthrow Prime Minister Eugenia Charles, reinstate Patrick John, and establish cocaine refineries and offshore gambling cartels. US federal agents intercepted the mercenaries in New Orleans, arresting the conspirators. [3]` ,
      keyFigures: ['Eugenia Charles', 'Patrick John', 'Don Black (KKK Leader)'],
      citationIds: [3],
    },
    {
      id: 'dominica-1980-eugenia-charles-us-grenada-invasion',
      title: '7. 1980 – 1995: Eugenia Charles Regime, US Grenada Invasion Involvement & Banana Crises',
      period: '1980 – 1995',
      categoryTag: 'challenges',
      summary: 'Eugenia Charles becomes 1st female PM; supports 1983 US invasion of Grenada; WTO banana crisis.',
      details: `In 1980, Eugenia Charles (leader of the conservative Dominica Freedom Party) became North America's first female Prime Minister. A staunch US ally, Charles stood beside Ronald Reagan in Washington to provide diplomatic cover for the October 1983 US military invasion of socialist Grenada.

During the 1990s, US-backed World Trade Organization (WTO) rulings dismantled preferential European market access for Dominican bananas, devastating small family farmers. [3][4]`,
      keyFigures: ['Eugenia Charles', 'Ronald Reagan', 'Edison James'],
      citationIds: [3, 4],
    },
    {
      id: 'dominica-present-skerrit-labour-alba-climate-resilience',
      title: '8. Present: Roosevelt Skerrit Labour Government, ALBA Regional Integration and Climate Resilience',
      period: 'Present',
      categoryTag: 'challenges',
      summary: 'PM Roosevelt Skerrit joins ALBA (2008); alliance with Venezuela and Cuba; resisting climate debt traps.',
      details: `Since 2004, Prime Minister **Roosevelt Skerrit** and the Dominica Labour Party (DLP) have governed Dominica. In 2008, Dominica officially joined the **ALBA** anti-imperialist alliance, securing Petrocaribe energy assistance, healthcare medical brigades from Cuba, and infrastructure development from Venezuela and China.

However, Dominica remains severely impacted by climate imperialism and global trade destruction. The 1990s US corporate WTO banana rulings destroyed smallholder banana farming, driving rural poverty. In September 2017, Category 5 Hurricane Maria struck Dominica, destroying two hundred and twenty-six percent of national GDP in a single night. Rebuilding destroyed public infrastructure forced Dominica to incur heavy debt obligations to international commercial lenders, illustrating how small island states are trapped in climate-induced debt cycles caused by Western carbon emissions. Prime Minister Skerrit maintains an anti-imperialist foreign policy opposing foreign intervention, demanding global climate reparations and international financial reform. [4]`,
      keyFigures: ['Roosevelt Skerrit', 'Hugo Chávez', 'Fidel Castro'],
      citationIds: [4],
    },
  ],

  sources: [
    {
      id: 1,
      label: 'The Cultural Maroonage and Kalinago Resistance in Dominica',
      publisher: 'Lennox Honychurch / University of the West Indies Press',
      year: '1995',
      excerpt: 'Definitive historical study of Kalinago land defense, Chief Jacko\'s Maroon mountain resistance, and British sugar colonialism.',
    },
    {
      id: 2,
      label: 'Dominica: A History of a Caribbean Island',
      publisher: 'Lennox Honychurch / Macmillan Caribbean',
      year: '1995',
      excerpt: 'Comprehensive history of the 1838 Black-majority assembly, the 1932 Roseau West Indian Conference, and 1978 independence.',
    },
    {
      id: 3,
      label: 'The KKK Mercenary Invasion of Dominica: Operation Red Dog Uncovered',
      publisher: 'Stewart Bell / Doubleday Canada (Bayou of Pigs)',
      year: '2008',
      excerpt: 'Investigative reporting detailing the 1981 defeat of US white supremacist mercenaries and Ku Klux Klan coup conspirators.',
    },
    {
      id: 4,
      label: 'ALBA and Regional Integration: Dominica\'s Anti-Imperialist Foreign Policy',
      publisher: 'Norman Girvan / Monthly Review Press',
      year: '2011',
      excerpt: 'Political economy analysis of Roosevelt Skerrit\'s DLP government joining ALBA, Cuban healthcare brigades, and climate resilience.',
    },
  ],
};
