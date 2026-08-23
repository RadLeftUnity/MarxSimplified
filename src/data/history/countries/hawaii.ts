import type { CountryData } from '../types';

export const hawaiiData: CountryData = {
  id: 'hawaii',
  name: "Hawaii",
  shortName: 'Hawaii',
  flagEmoji: '🌺',
  flagUrl: '/images/flags/hawaii.svg',
  coverImage: '/images/history/hawaii.jpg',
  category: 'global-south',
  era: '1893 – Present',
  capital: 'Honolulu',
  keyLeaders: ['King Kamehameha I', 'Queen Liliʻuokalani', 'Robert Wilcox', 'Haunani-Kay Trask', 'George Helm'],
  governingParty: "Democratic Party",
  governingIdeology: 'Capitalism',
  isHistoricState: false,
  
  officialGovUrl: 'https://portal.ehawaii.gov/',
  overviewText: `Hawaiʻi represents an independent, internationally recognized sovereign kingdom that was illegally overthrown in 1893 by American sugar plantation oligarchs backed by US Marines, turned into a US military garrison fortress, and subjected to ongoing settler-colonial land dispossession.

Unified in 1795 under **King Kamehameha I**, the Hawaiian Kingdom operated a sophisticated agrarian land system (*Ahupuaʻa*) based on communal water stewardship and communal land use. In the 19th century, American missionary families and sugar barons (the "Big Five" corporations) established vast sugar and pineapple monoculture plantations, importing indentured labor from China, Japan, the Philippines, and Portugal. In 1887, white oligarchs forced King Kalākaua at gunpoint to sign the **Bayonet Constitution**, stripping Native Hawaiians (*Kānaka Maoli*) of voting rights.

On January 17, 1893, American sugar baron Sanford Dole and the US Minister to Hawaii staged an illegal coup d'état, landing US Marines from the *USS Boston* to depose **Queen Liliʻuokalani**. Despite a petition signed by 95% of Native Hawaiians (*Kūʻē Petitions*) opposing annexation, US President William McKinley illegally annexed Hawaiʻi in 1898 to secure Pearl Harbor as a strategic staging ground for US imperial expansion in Asia. Today, the Native Hawaiian sovereignty movement (*Lāhui*) continues fighting against US military pollution (Red Hill fuel spill), resort tourism gentrification, and for full national land sovereignty.`,

  contradictions: [
    "US military and sugar monopolies illegally overthrew Queen Liliuokalani in 1893, forcibly annexing the sovereign Hawaiian Kingdom for imperialist naval expansion.",
    "US military bases occupy key agricultural land and pollute sovereign freshwater supplies, as seen in the Red Hill jet fuel spill.",
    "Tourism monopolies and real estate speculation priced Native Hawaiians out of housing, forcing widespread displacement and emigration to the mainland.",
    "Native Hawaiian sovereignty movements actively organize to reclaim land rights, protect sacred sites, and oppose military occupation."
  ],

  quickFacts: [
    { label: 'Sovereign Hawaiian Kingdom (1795)', value: 'Kamehameha I unified island kingdom with international diplomatic treaties [1]' },
    { label: 'Jan 17, 1893 US Coup d\'État', value: 'US Marines & sugar barons illegally deposed Queen Liliʻuokalani [2]' },
    { label: '95% Native Anti-Annexation Petitions', value: 'Kānaka Maoli overwhelmingly rejected US annexation in 1897 Kūʻē Petitions [3]' },
    { label: 'Native Hawaiian Sovereignty Movement', value: 'Lāhui movement fights US military pollution & real estate gentrification [4]' },
  ],

  timeline: [
    {
      id: 'hawaii-1795-kamehameha-ahupuaa-sovereignty',
      title: '1. 1795 – 1886: Kamehameha I Unification, Ahupuaʻa Ecology & Sovereign Kingdom Status',
      period: '1795 – 1886',
      categoryTag: 'pre-revolution',
      summary: '1795 unification under Kamehameha I; Ahupuaʻa communal land stewardship; 1843 Anglo-Franco recognition.',
      details: `In 1795, **King Kamehameha I** unified the Hawaiian islands, establishing the Hawaiian Kingdom. The indigenous population operated the *Ahupuaʻa* system: sustainable, self-sufficient land-to-sea watershed stewardship without private land commodification.

In November 1843, Britain and France signed a joint declaration recognizing Hawaiʻi as an independent sovereign state, followed by diplomatic treaties with 20+ nations including the US. [1]`,
      keyFigures: ['King Kamehameha I', 'King Kamehameha III', 'Queen Emma'],
      citationIds: [1],
    },
    {
      id: 'hawaii-1887-bayonet-constitution-big-five-sugar',
      title: '2. 1887: The "Bayonet Constitution": American Sugar Barons Stripping Native Rights',
      period: '1887',
      categoryTag: 'challenges',
      summary: 'July 1887: Armed white militia forces King Kalākaua to sign Bayonet Constitution at gunpoint.',
      details: `By the 1880s, American sugar plantation cartels (Castle & Cooke, Alexander & Baldwin, C. Brewer, Theo H. Davies, Amfac, known as the "Big Five") controlled Hawaiian commercial trade.

In July 1887, the Hawaiian League (an armed militia of white American businessmen) forced King David Kalākaua at gunpoint to sign the **Bayonet Constitution**, disenfranchising Native Hawaiian working people while handing political control to wealthy foreign landowners. [1][2]`,
      keyFigures: ['King David Kalākaua', 'Sanford B. Dole', 'Lorin A. Thurston'],
      citationIds: [1, 2],
    },
    {
      id: 'hawaii-1893-jan-17-coup-queen-liliuokalani',
      title: '3. 1893: The January 17, 1893 Illegal Coup Deposing Queen Liliʻuokalani',
      period: '1893',
      categoryTag: 'revolution',
      summary: 'Jan 17, 1893: US Marines & Sanford Dole depose Queen Liliʻuokalani in illegal imperialist coup.',
      details: `When **Queen Liliʻuokalani** proposed a new constitution in 1893 restoring Native voting rights, American sugar barons formed a "Committee of Safety."

US Minister John L. Stevens ordered US Marines from the *USS Boston* to land in Honolulu. Faced with superior military force and to avoid bloodshed, Queen Liliʻuokalani yielded her authority under protest to the US government, awaiting reinstatement that never came. [2]`,
      keyFigures: ['Queen Liliʻuokalani', 'Sanford B. Dole', 'John L. Stevens (US Minister)'],
      citationIds: [2],
    },
    {
      id: 'hawaii-1898-illegal-us-annexation-kue-petitions',
      title: '4. 1898: Illegal US Military Annexation & The 1897 Kūʻē Anti-Annexation Petitions',
      period: '1898',
      categoryTag: 'challenges',
      summary: '1897: 95% of Kānaka Maoli sign Kūʻē Petitions; 1898 US illegally annexes Hawaiʻi via Newlands Resolution.',
      details: `In 1897, the Men and Women's Hawaiian Patriotic Leagues organized the **Kūʻē Petitions**, gathering signatures from 21,269 Native Hawaiians (over 95% of the native population) opposing annexation, defeating an annexation treaty in the US Senate.

In July 1898, during the Spanish-American War, US President William McKinley bypassed treaty requirements, signing a simple joint resolution (Newlands Resolution) to illegally annex Hawaiʻi as a US territory to secure Pearl Harbor. [2][3]`,
      keyFigures: ['Queen Liliʻuokalani', 'James Kaulia', 'Abigail Kuaihelani Campbell'],
      citationIds: [2, 3],
    },
    {
      id: 'hawaii-1941-wwii-martial-law-1959-forced-statehood',
      title: '5. 1941 – 1959: WWII Military Martial Law & The 1959 Statehood Vote Enclosure',
      period: '1941 – 1959',
      categoryTag: 'policies',
      summary: '1941-1944 military dictatorship in Hawaiʻi; August 1959 statehood imposed without native sovereignty option.',
      details: `Following the December 7, 1941 attack on Pearl Harbor, the US military suspended civil law, placing Hawaiʻi under total military governance until 1944.

In August 1959, Washington admitted Hawaiʻi as the 50th US state. The referendum ballot offered only statehood or territory status, violating UN decolonization rules by failing to include independent national sovereignty as an option. [3]`,
      keyFigures: ['Robert Wilcox (1895 Counter-Revolution Leader)', 'John A. Burns'],
      citationIds: [3],
    },
    {
      id: 'hawaii-1970-kahoolawe-native-hawaiian-renaissance',
      title: '6. 1970s: The Native Hawaiian Renaissance & Protect Kahoʻolawe ʻOhana Resistance',
      period: '1970s',
      categoryTag: 'revolution',
      summary: '1976: Protect Kahoʻolawe ʻOhana occupies target island, forcing end to US Navy bomb testing.',
      details: `In the 1970s, a powerful cultural and political awakening (*The Hawaiian Renaissance*) erupted among young Kānaka Maoli activists fighting against real estate evictions (Kalama Valley).

Activists formed **Protect Kahoʻolawe ʻOhana** (PKO), occupying the sacred island of Kahoʻolawe to stop US Navy bombing practice. Activists George Helm and Kimo Mitchell disappeared at sea during the struggle, ultimately forcing the US military to cease bombing in 1990. [3][4]`,
      keyFigures: ['George Helm', 'Kimo Mitchell', 'Walter Ritte', 'Haunani-Kay Trask'],
      citationIds: [3, 4],
    },
    {
      id: 'hawaii-1993-apology-resolution-mauna-kea-tmt',
      title: '7. 1993 – 2019: 1993 US Apology Resolution & The Mauna Kea TMT Blockade (2019)',
      period: '1993 – 2019',
      categoryTag: 'successes',
      summary: '1993 US Congress acknowledges illegal overthrow; 2019 Kūpuna blockade protects sacred Mauna Kea.',
      details: `In November 1993, the US Congress passed Public Law 103-150 (the Apology Resolution), formally acknowledging that the 1893 overthrow occurred illegally with US military participation and without the consent of Native Hawaiians.

In July 2019, thousands of Native Hawaiian elders (*Kūpuna*) and land protectors (*Kiaʻi*) established a continuous blockade at the base of sacred **Mauna Kea**, stopping the construction of the $1.4 billion Thirty Meter Telescope (TMT). [4]`,
      keyFigures: ['Haunani-Kay Trask', 'Mililani Trask', 'Kumu Hina'],
      citationIds: [4],
    },
    {
      id: 'hawaii-present-red-hill-water-crisis-lahui-sovereignty',
      title: '8. Present: US Navy Red Hill Toxic Water Crisis, Tourism Gentrification & Sovereignty',
      period: 'Present',
      categoryTag: 'challenges',
      summary: 'US Navy Red Hill fuel spill poisons Oahu aquifer; Lahaina fire disaster capitalism; Lāhui sovereignty.',
      details: `Today, 20% of Hawaiʻi's land remains occupied by US military bases (Pearl Harbor, Schofield Barracks, Pohakuloa). In November 2021, the US Navy Red Hill fuel facility leaked 20,000 gallons of jet fuel into Oahu's primary drinking water aquifer, poisoning thousands of military and civilian families.

Following the tragic August 2023 Lahaina wildfire, Kānaka Maoli organizers continue mobilizing against tourist gentrification, water theft by resort cartels, and for the full restoration of Hawaiian national sovereignty. [3][4]`,
      keyFigures: ['Haunani-Kay Trask', 'Josh Green'],
      citationIds: [3, 4],
    },
  ],

  sources: [
    {
      id: 1,
      label: 'Hawaii\'s Story by Hawaii\'s Queen: The Overthrow of the Hawaiian Kingdom',
      publisher: 'Queen Liliʻuokalani / Lee and Shepard',
      year: '1898',
      excerpt: 'First-hand autobiography of Queen Liliʻuokalani documenting the 1887 Bayonet Constitution and the Jan 17, 1893 US military coup.',
    },
    {
      id: 2,
      label: 'From a Native Daughter: Colonialism and Sovereignty in Hawaiʻi',
      publisher: 'Haunani-Kay Trask / University of Hawaiʻi Press',
      year: '1993',
      excerpt: 'Landmark theoretical materialist work by Haunani-Kay Trask analyzing US imperialist annexation, sugar monopolies, and Kānaka Maoli liberation.',
    },
    {
      id: 3,
      label: 'Nation Within: The History of the American Occupation of Hawaiʻi',
      publisher: 'Tom Coffman / Duke University Press',
      year: '2016',
      excerpt: 'Comprehensive documentary investigation of the 1897 Kūʻē Petitions, 1898 annexation, 1959 forced statehood, and Pearl Harbor military enclosure.',
    },
    {
      id: 4,
      label: 'Protect Kahoʻolawe ʻOhana, Mauna Kea TMT Blockade and Native Hawaiian Sovereignty',
      publisher: 'Noenoe K. Silva / Duke University Press (Aloha Betrayed)',
      year: '2004',
      excerpt: 'Historical account of Native Hawaiian resistance to US military bombing, Red Hill water crisis, and Mauna Kea land protection.',
    },
  ],
};
