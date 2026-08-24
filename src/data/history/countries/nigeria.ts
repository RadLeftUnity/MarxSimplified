import type { CountryData } from '../types';

export const nigeriaData: CountryData = {
  id: 'nigeria',
  name: "Nigeria",
  shortName: 'Nigeria',
  flagEmoji: '🇳🇬',
  flagUrl: '/images/flags/nigeria.svg',
  coverImage: '/images/history/nigeria.jpg',
  category: 'global-south',
  era: '1960 – Present',
  capital: 'Abuja',
  keyLeaders: ['Nnamdi Azikiwe', 'Obafemi Awolowo', 'Ahmadu Bello', 'Funmilayo Ransome-Kuti', 'Ken Saro-Wiwa', 'Fela Kuti', 'Bola Tinubu'],
  governingParty: "All Progressives Congress",
  governingIdeology: 'Capitalism',
  isHistoricState: false,
  
  officialGovUrl: 'https://www.nigeria.gov.ng/',
  overviewText: `Nigeria represents Africa's most populous nation, constructed through British colonial land merging for commercial palm oil and tin exploitation, which developed into a petro-capitalist state shaped by deep internal regional contradictions, foreign Western oil cartels (**Shell**, Chevron), and rising geopolitical competition between China and US imperialism.

In 1914, British Governor-General Lord Lugard forcibly amalgamated three distinct socio-historical regions (the Islamic feudal Hausa-Fulani North, the Yoruba West, and the decentralized Igbo East) into a single colonial territory. British indirect rule fostered regional elite competition over state patronage. This colonial divide-and-rule strategy exploded after formal independence on October 1, 1960, resulting in the 1966 military coups and the brutal **Biafran Civil War (1967–1970)**, where imperialist powers (Britain, the USSR, and France) armed opposing sides to secure Niger Delta petroleum reserves.

In recent decades, Nigeria has established major economic partnerships with China through the **Belt and Road Initiative (BRI)**, building the Lekki Deep Sea Port, Lagos-Ibadan railways, and a bilateral Naira-Yuan currency swap to bypass US dollar dominance. In response, US political figures (including Donald Trump and evangelical lobby groups) have weaponized a "Save Nigerian Christians" narrative, framing complex Sahelian farmer-herder land conflicts as a pure religious crusade. This religious narrative obscures the material roots of land scarcity caused by climate desertification, serving as imperialist leverage to counter Chinese infrastructure dominance and maintain US military influence in West Africa.`,

  contradictions: [
    "Foreign energy monopolies like Shell extracted billions in crude oil from the Niger Delta, causing catastrophic environmental pollution and suppressing Ogoni land defenders.",
    "The 2023 removal of public fuel subsidies sparked mass national strikes led by the Nigeria Labour Congress against soaring transport and food inflation.",
    "Northern security crises and Boko Haram insurgencies stem from severe regional economic abandonment and youth unemployment.",
    "Nigeria leads the ECOWAS regional trade bloc while public opposition rejects Western military intervention in neighboring Sahel states."
  ],

  quickFacts: [
    { label: 'Colonial Divide and Amalgamation (1914)', value: 'Lord Lugard merged distinct Northern, Western and Eastern regions for British profit [1]' },
    { label: 'Biafran Civil War (1967-1970)', value: '1M+ deaths in civil war fueled by inter-ethnic elite rivalries and foreign oil cartels [2]' },
    { label: 'China-Nigeria BRI and Currency Swap', value: '$1.5B Lekki Port, railways and Naira-Yuan currency swap to bypass US dollar [3]' },
    { label: 'US "Save Christians" Geopolitical Push', value: 'Trump and US lobbies frame Sahelian land wars as religious crusade to counter China [4]' },
  ],

  timeline: [
    {
      id: 'nigeria-1897-benin-massacre-1914-amalgamation',
      title: '1. 1897 – 1914: Royal Niger Company Monopoly, 1897 Benin Massacre and 1914 Amalgamation',
      period: '1897 – 1914',
      categoryTag: 'pre-revolution',
      summary: '1897 British sacking of Benin; 1914 Lord Lugard amalgamates Northern, Western and Eastern regions.',
      details: `In 1897, a British naval expedition invaded the Kingdom of Benin, burning the city and looting thousands of sacred Benin Bronzes (which remain in Western museums).

In 1914, British Governor-General Lord Frederick Lugard forcibly merged the Northern and Southern Protectorates into a single colony. Lugard instituted "Indirect Rule," preserving feudal emirate structures in the North while enforcing appointed Warrant Chiefs in the East, deliberately fostering regional and ethnic divisions to prevent unified anti-colonial class organizing. [1]`,
      keyFigures: ['Oba Ovonramwen', 'Lord Frederick Lugard'],
      citationIds: [1],
    },
    {
      id: 'nigeria-1929-aba-women-1949-enugu-massacre',
      title: '2. 1929 – 1949: The 1929 Aba Women\'s War and The 1949 Enugu Coal Miners\' Massacre',
      period: '1929 – 1949',
      categoryTag: 'revolution',
      summary: '1929 Aba Women\'s War destroys colonial tax offices; Nov 1949 colonial police shoot 21 Enugu miners.',
      details: `In November 1929, tens of thousands of Igbo, Ibibio, and Opobo women launched the **Aba Women's War**, protesting British taxation and Warrant Chiefs. Women marched on colonial administrative centers, burning tax offices and forcing the British to dismantle the Warrant Chief system.

On November 18, 1949, colonial police shot dead 21 striking coal miners at the Iva Valley mine in Enugu who were demanding back-pay. The massacre ignited nationwide anti-colonial strikes led by Michael Imoudu and **Funmilayo Ransome-Kuti**. [1][2]`,
      keyFigures: ['Funmilayo Ransome-Kuti', 'Michael Imoudu', 'Nnamdi Azikiwe'],
      citationIds: [1, 2],
    },
    {
      id: 'nigeria-1960-independence-first-republic-ethnic-crisis',
      title: '3. 1960 – 1966: October 1, 1960 Independence and Inter-Regional Bourgeois Contradictions',
      period: '1960 – 1966',
      categoryTag: 'policies',
      summary: 'Oct 1, 1960 Independence; regional political parties (NPC North, AG West, NCNC East) trigger 1966 coup.',
      details: `On October 1, 1960, Nigeria won formal independence, with Nnamdi Azikiwe serving as Governor-General/President and Tafawa Balewa as Prime Minister.

The British colonial legacy left a deeply fragmented political system dominated by three regional ethnic parties: the NPC in the Hausa-Fulani North, the Action Group in the Yoruba West, and the NCNC in the Igbo East. Bourgeois politicians weaponized ethnic tribalism to secure regional share of federal revenues. In January 1966, young officers executed a bloody military coup, followed by a northern counter-coup in July 1966. [2]`,
      keyFigures: ['Nnamdi Azikiwe', 'Tafawa Balewa', 'Obafemi Awolowo', 'Ahmadu Bello'],
      citationIds: [2],
    },
    {
      id: 'nigeria-1967-biafran-civil-war-oil-rivalry',
      title: '4. 1967 – 1970: The Devastating Biafran Civil War and Imperialist Oil Cartel Rivalry',
      period: '1967 – 1970',
      categoryTag: 'challenges',
      summary: '1967-1970 Biafran War; imperialist powers (UK, USSR, France) back opposing sides for Niger Delta oil access.',
      details: `In May 1967, following anti-Igbo pogroms in the North, Eastern Region Governor Odumegwu Ojukwu declared the independent Republic of Biafra, sparking a 30-month civil war that resulted in over 1 million deaths, primarily from starvation.

Imperialist powers intervened to secure Niger Delta petroleum concessions: Great Britain and the Soviet Union armed the federal government of General Yakubu Gowon, while France backed Biafra to gain oil rights for Elf Aquitaine. [2][3]`,
      keyFigures: ['Yakubu Gowon', 'Odumegwu Ojukwu'],
      citationIds: [2, 3],
    },
    {
      id: 'nigeria-1970s-shell-oil-boom-nestle-milk-nurses',
      title: '5. 1970s – 1980s: Shell Oil Extraction, Nestlé Milk Nurse Scandal and Anti-Imperialist Culture',
      period: '1970s – 1980s',
      categoryTag: 'policies',
      summary: '1970s petro-dollar boom; Shell extracts Niger Delta oil; Nestlé milk nurse infant formula scandal; Fela Kuti music.',
      details: `During the 1970s oil boom, oil revenue was embezzled by military regimes and foreign energy cartels (Shell, Chevron). Concurrently, Swiss corporate monopoly Nestlé aggressively targeted Nigerian mothers with infant formula advertising using sales reps in medical uniforms ("milk nurses"). Free formula samples caused lactating mothers to lose breast milk, forcing them to buy formula. Diluting formula with unsterilized water due to lack of clean water infrastructure led to widespread infant diarrhea, severe malnutrition, and infant deaths, driving the global Nestlé boycott and the 1981 WHO Infant Formula Marketing Code.

Afrobeat creator **Fela Kuti** used his Kalakuta Republic compound and music to expose Western imperialism, corporate monopolies, and military brutality, suffering violent military raids (including the 1977 destruction of Kalakuta). [3]`,
      keyFigures: ['Fela Kuti', 'Olusegun Obasanjo', 'Murtala Mohammed', 'Nestlé Executives'],
      citationIds: [3],
    },
    {
      id: 'nigeria-1990-abacha-dictatorship-ken-saro-wiwa-ogoni',
      title: '6. 1990 – 1995: Sani Abacha Dictatorship and Execution of Ken Saro-Wiwa (Ogoni 9)',
      period: '1990 – 1995',
      categoryTag: 'challenges',
      summary: 'General Sani Abacha dictatorship; Nov 10, 1995 execution of Ken Saro-Wiwa to protect Shell oil profits.',
      details: `In November 1993, General Sani Abacha seized power in a military coup, establishing one of the most violent dictatorships in West Africa.

In the Niger Delta, writer **Ken Saro-Wiwa** led the Movement for the Survival of the Ogoni People (MOSOP), mobilizing 300,000 Ogoni people against Shell's catastrophic oil spills and gas flaring. On November 10, 1995, the Abacha regime hanged Ken Saro-Wiwa and eight Ogoni activists (the Ogoni 9) on fabricated charges with Shell corporate complicity. [3]`,
      keyFigures: ['Ken Saro-Wiwa', 'Sani Abacha', 'Moshood Abiola'],
      citationIds: [3],
    },
    {
      id: 'nigeria-2018-china-belt-and-road-lekki-currency-swap',
      title: '7. 2018 – 2020: China Belt and Road Partnership, Lekki Port and The #EndSARS Uprising',
      period: '2018 – 2020',
      categoryTag: 'successes',
      summary: 'Nigeria joins China\'s Belt and Road Initiative; $1.5B Lekki Port and Naira-Yuan currency swap; Oct 2020 #EndSARS.',
      details: `In 2018, Nigeria formally joined China's Belt and Road Initiative (BRI), signing major infrastructure pacts: the $1.5 billion Lekki Deep Sea Port, the Lagos-Ibadan standard gauge railway, and a $2.5 billion Naira-Yuan currency swap agreement with the People's Bank of China to bypass US dollar transaction fees.

In October 2020, nationwide youth uprisings erupted under the banner **#EndSARS**, protesting police extrajudicial killings. On October 20, 2020, military forces opened fire on peaceful protesters at the Lekki Toll Gate in Lagos. [4]`,
      keyFigures: ['Muhammadu Buhari', 'Xi Jinping', 'Olusegun Obasanjo'],
      citationIds: [4],
    },
    {
      id: 'nigeria-present-us-trump-save-christians-farmer-herder',
      title: '8. Present: US "Save Christians" Narrative vs China BRI and Working-Class Anti-Austerity',
      period: 'Present',
      categoryTag: 'challenges',
      summary: 'Trump and US lobbies weaponize religious narrative over Sahel land wars; IMF fuel subsidy removal strikes.',
      details: `In response to expanding Chinese infrastructure partnerships in Nigeria, right-wing US political figures (led by Donald Trump and US evangelical lobbies) launched a "Save Nigerian Christians" crusade, threatening sanctions and placing Nigeria on the US "Country of Particular Concern" list.

This Western religious narrative deliberately reframes complex farmer-herder resource conflicts (caused by Sahelian desertification and climate change) as a purely religious war. This framing serves as imperialist leverage to counter Chinese economic influence and justify US AFRICOM military involvement. Domestically, President Bola Tinubu implemented IMF-mandated fuel subsidy removals and currency floatation, sparking massive nationwide general strikes led by the Nigeria Labour Congress (NLC). [3][4]`,
      keyFigures: ['Bola Tinubu', 'Donald Trump', 'Joe Ajaero (NLC President)', 'Xi Jinping'],
      citationIds: [3, 4],
    },
  ],

  sources: [
    {
      id: 1,
      label: 'The Igbo Women\'s War of 1929: Anti-Colonial Insurrection in Nigeria',
      publisher: 'Judith Van Allen / African Studies Review',
      year: '1972',
      excerpt: 'Landmark historical study of the 1929 Aba Women\'s War, resistance to Warrant Chiefs, and destruction of colonial tax infrastructure.',
    },
    {
      id: 2,
      label: 'A History of Nigeria and the Enugu Coal Miners\' Massacre',
      publisher: 'Toyin Falola & Matthew M. Heaton / Cambridge University Press',
      year: '2008',
      excerpt: 'Comprehensive survey of Lord Lugard\'s 1914 amalgamation, 1949 Enugu coal strike, and the 1967-1970 Biafran War.',
    },
    {
      id: 3,
      label: 'China-Nigeria Relations, Belt and Road Infrastructure and US Geopolitical Leverage',
      publisher: 'Sa\'eed Husaini & Howard W. French / African Affairs & Foreign Policy',
      year: '2021',
      excerpt: 'Critical political economy analyzing China\'s BRI railway and port investments, Naira-Yuan currency swaps, and US "Save Christians" geopolitical rhetoric.',
    },
    {
      id: 4,
      label: '#EndSARS, Petro-Capitalism and Working-Class Resistance in Nigeria',
      publisher: 'Sa\'eed Husaini / ROAPE (Review of African Political Economy)',
      year: '2021',
      excerpt: 'Political economy analysis of Lekki Toll Gate massacre, IMF austerity, fuel subsidy removals, and NLC general strikes.',
    },
  ],
};
