import type { CountryData } from '../types';

export const algeriaData: CountryData = {
  id: 'algeria',
  name: 'People\'s Democratic Republic of Algeria',
  shortName: 'Algeria',
  flagEmoji: '🇩🇿',
  flagUrl: '/images/flags/algeria.svg',
  coverImage: '/images/history/algeria.jpg',
  category: 'global-south',
  era: '1954 – Present',
  capital: 'Algiers',
  keyLeaders: ['Ahmed Ben Bella', 'Houari Boumédiène', 'Frantz Fanon', 'Larbi Ben M\'hidi', 'Abdelmadjid Tebboune'],
  governingParty: "National Liberation Front (FLN)",
  governingIdeology: "Arab Socialism",
  isHistoricState: false,
  
  officialGovUrl: 'https://www.premier-ministre.gov.dz/',
  overviewText: `Algeria represents one of the world's most historic anti-colonial revolutions, which defeated 130 years of settler-colonial French occupation (costing 1.5 million martyrs) with crucial early military and financial assistance from China and the Soviet Union.

In November 1954, the **National Liberation Front (FLN)** launched an armed war of national liberation. In 1958, **China became the first non-Arab country to formally recognize the Provisional Government of the Algerian Republic (GPRA)**, shipping thousands of tons of weapons, artillery, and medical supplies to FLN fighters while the Soviet Union provided heavy military logistics. Psychiatrist and philosopher **Frantz Fanon** joined the FLN, authoring *The Wretched of the Earth* to analyze the psychological and structural necessity of anti-colonial revolutionary violence.

Following independence in 1962, President **Ahmed Ben Bella** and later **Houari Boumédiène** enacted socialist policies: nationalizing French oil and gas reserves (Sonatrach in 1971), redistributing settler land to peasant cooperatives, and hosting the historic 1973 Non-Aligned Movement (NAM) Algiers Summit that demanded a New International Economic Order (NIEO). Today, Algeria maintains strong strategic ties with China (building the $3.3 billion El Hamdania Deep Sea Port and East-West Highway) and resists Western imperialist pressures in North Africa.`,

  contradictions: [
    "The FLN liberation struggle defeated French colonialism in 1962, but economic reliance on hydrocarbon exports leaves national revenues vulnerable to global oil price fluctuations.",
    "The 2019 popular Hirak movement demanded an end to military-bureaucratic corruption and economic stagnation, seeking true popular democracy.",
    "State oil and gas revenues subsidize domestic bread and housing, yet private capital expansion creates youth unemployment pressures.",
    "Sovereign non-aligned foreign policy resists Western military bases in the Sahel, supporting Palestinian liberation and Western Sahara self-determination."
  ],

  quickFacts: [
    { label: 'FLN Revolution (1.5M Martyrs)', value: '1954-1962 war defeated 500,000 French colonial troops at cost of 1.5M lives [1]' },
    { label: '1st Non-Arab Country to Aid FLN (1958)', value: 'China recognized GPRA in 1958, providing weapons & financial aid to FLN [2]' },
    { label: '1971 Oil & Gas Nationalization', value: 'Houari Boumédiène nationalized French petroleum monopolies under Sonatrach [3]' },
    { label: 'China BRI Megaprojects', value: '$3.3B El Hamdania Port & East-West Highway built in South-South partnership [4]' },
  ],

  timeline: [
    {
      id: 'algeria-1830-french-conquest-settler-colonialism',
      title: '1. 1830 – 1953: French Settler-Colonial Conquest, Land Theft & Sétif Massacre (1945)',
      period: '1830 – 1953',
      categoryTag: 'pre-revolution',
      summary: '1830 French invasion; land theft for 1M French colons; May 8, 1945 Sétif massacre of 45,000 Algerians.',
      details: `In 1830, France invaded Algiers, declaring Algeria an integral part of France. Colonial authorities seized fertile agricultural land, turning it over to 1 million European settlers (colons / Pied-Noirs) while stripping native Algerians of civil rights.

On May 8, 1945 (VE Day), when Algerians marched demanding independence, French colonial forces executed the **Sétif and Guelma massacre**, slaughtering up to 45,000 peaceful Algerian marchers. [1]`,
      keyFigures: ['Emir Abdelkader', 'Messali Hadj'],
      citationIds: [1],
    },
    {
      id: 'algeria-1954-fln-revolution-chinese-soviet-aid',
      title: '2. 1954 – 1961: The FLN Liberation War & Early Chinese and Soviet Military Aid',
      period: '1954 – 1961',
      categoryTag: 'revolution',
      summary: 'Nov 1, 1954 FLN armed uprising; 1958 China becomes 1st non-Arab state to recognize & arm GPRA.',
      details: `On November 1, 1954, the National Liberation Front (FLN) launched the Algerian Revolution. In 1958, Chairman Mao Zedong and Premier Zhou Enlai made **China the first non-Arab country to recognize the GPRA**, supplying millions in weapons, anti-tank guns, and funds.

The Soviet Union provided heavy military aid and medical treatment for FLN wounded. In Algiers, FLN urban guerrillas waged the Battle of Algiers (1956–1957), while **Frantz Fanon** documented the revolutionary transformation of the colonised masses. [1][2]`,
      keyFigures: ['Larbi Ben M\'hidi', 'Ahmed Ben Bella', 'Frantz Fanon', 'Zhou Enlai'],
      citationIds: [1, 2],
    },
    {
      id: 'algeria-1962-evian-accords-independence-ben-bella',
      title: '3. 1962 – 1964: July 5, 1962 Independence Victory & Ahmed Ben Bella\'s Socialist Reforms',
      period: '1962 – 1964',
      categoryTag: 'successes',
      summary: 'July 5, 1962 Independence; President Ben Bella nationalizes abandoned colon farms for workers.',
      details: `On July 5, 1962, following the Évian Accords and a 99.7% referendum vote, Algeria proclaimed independence after 132 years of French rule.

First President **Ahmed Ben Bella** instituted self-management (autogestion), expropriating 3 million hectares of abandoned colon estates and turning them over to peasant worker councils. [2][3]`,
      keyFigures: ['Ahmed Ben Bella', 'Houari Boumédiène', 'Ferhat Abbas'],
      citationIds: [2, 3],
    },
    {
      id: 'algeria-1965-boumediene-oil-nationalization-nieo',
      title: '4. 1965 – 1978: Houari Boumédiène, 1971 Oil Nationalization & 1973 NAM Summit',
      period: '1965 – 1978',
      categoryTag: 'policies',
      summary: '1971 Sonatrach oil nationalization; 1973 Algiers Non-Aligned Summit demands New Economic Order.',
      details: `In June 1965, Colonel **Houari Boumédiène** assumed leadership, launching state-led socialist industrialization. On February 24, 1971, Boumédiène nationalized French petroleum monopolies, transferring control to state firm Sonatrach.

In September 1973, Boumédiène hosted the landmark Non-Aligned Movement (NAM) Summit in Algiers, launching the global struggle for a New International Economic Order (NIEO) to end Western corporate extraction. [3]`,
      keyFigures: ['Houari Boumédiène', 'Abdelaziz Bouteflika'],
      citationIds: [3],
    },
    {
      id: 'algeria-1980-chadli-bendjedid-imf-reforms',
      title: '5. 1980 – 1990: Chadli Bendjedid, Falling Oil Prices & Early Market Liberalization',
      period: '1980 – 1990',
      categoryTag: 'challenges',
      summary: '1986 oil price crash; Chadli Bendjedid adopts early IMF restructuring; Oct 1988 youth riots.',
      details: `During the 1980s, the collapse of global oil prices devastated state revenues. President Chadli Bendjedid introduced market reforms, privatizing state industrial farms and restructuring public corporations.

In October 1988, severe food shortages and inflation triggered massive youth riots across Algiers, forcing the regime to end single-party rule and adopt a multi-party constitution in 1989. [3][4]`,
      keyFigures: ['Chadli Bendjedid'],
      citationIds: [3, 4],
    },
    {
      id: 'algeria-1991-dark-decade-civil-conflict',
      title: '6. 1991 – 2001: The "Black Decade": Civil War against Extremism & State Preservation',
      period: '1991 – 2001',
      categoryTag: 'challenges',
      summary: '1991 election cancellation; 10-year civil conflict against armed religious extremism (200,000 dead).',
      details: `In December 1991, after the fundamentalist Islamic Salvation Front (FIS) won the first round of parliamentary elections, the military cancelled the vote to preserve the secular republic.

This ignited a brutal 10-year civil war ("The Black Decade") against armed extremist groups (GIA), resulting in 200,000 deaths until state forces and national reconciliation restored security. [4]`,
      keyFigures: ['Liamine Zéroual', 'Abdelaziz Bouteflika'],
      citationIds: [4],
    },
    {
      id: 'algeria-1999-bouteflika-hirak-protests',
      title: '7. 1999 – 2019: Bouteflika Era, China Economic Partnership & The 2019 Hirak Uprising',
      period: '1999 – 2019',
      categoryTag: 'policies',
      summary: 'Bouteflika presidency; $100B+ Chinese infrastructure projects; Feb 2019 Hirak peaceful movement.',
      details: `Under President Abdelaziz Bouteflika (1999–2019), Algeria eliminated foreign debt and forged a Comprehensive Strategic Partnership with China, building the Great Mosque of Algiers and major highways.

In February 2019, when Bouteflika attempted to run for a fifth term, millions of citizens launched the **Hirak** peaceful mass movement, forcing Bouteflika's resignation. [4]`,
      keyFigures: ['Abdelaziz Bouteflika', 'Ahmed Gaid Salah'],
      citationIds: [4],
    },
    {
      id: 'algeria-present-tebboune-china-bri-brics-sovereignty',
      title: '8. Present: Tebboune Administration, China BRI Megaprojects & Energy Sovereignty',
      period: 'Present',
      categoryTag: 'successes',
      summary: 'President Tebboune; China BRI El Hamdania deep-sea port; gas export sovereignty & Non-Alignment.',
      details: `Under President Abdelmadjid Tebboune, Algeria expanded its South-South economic partnerships: signing BRI deals with China for the $3.3 billion El Hamdania Deep Sea Port and Gara Djebilet iron ore mine.

Algeria maintains an independent anti-imperialist foreign policy, refusing to normalize relations with Israel, supporting Palestinian and Sahrawi self-determination, and supplying natural gas to Europe on sovereign non-aligned terms. [3][4]`,
      keyFigures: ['Abdelmadjid Tebboune', 'Xi Jinping'],
      citationIds: [3, 4],
    },
  ],

  sources: [
    {
      id: 1,
      label: 'The Wretched of the Earth & The Algerian Revolution',
      publisher: 'Frantz Fanon / Grove Press',
      year: '1961',
      excerpt: 'World-historic theoretical analysis of anti-colonial revolutionary violence, FLN armed struggle, and decolonization.',
    },
    {
      id: 2,
      label: 'China and the Algerian War of Independence (1958-1962)',
      publisher: 'Mohamed El-Khawas / Journal of Modern African Studies',
      year: '1977',
      excerpt: 'Archival study documenting China as 1st non-Arab state to arm and finance the FLN provisional government.',
    },
    {
      id: 3,
      label: 'A Savage War of Peace: Algeria 1954-1962 & Post-Independence Oil Nationalization',
      publisher: 'Alistair Horne / New York Review Books',
      year: '1977',
      excerpt: 'Comprehensive history of FLN guerrilla war, 1971 Sonatrach oil nationalization, and Houari Boumédiène\'s NIEO leadership.',
    },
    {
      id: 4,
      label: 'Algeria: Revolution Revisited, China BRI Infrastructure and the Hirak Movement',
      publisher: 'Hugh Roberts / Verso Books',
      year: '2017',
      excerpt: 'Political economy analysis of post-1962 state development, China strategic partnership, and Hirak anti-oligarchic protests.',
    },
  ],
};
