import type { CountryData } from '../types';

export const myanmarData: CountryData = {
  id: 'myanmar',
  name: 'Republic of the Union of Myanmar (Burma)',
  shortName: 'Myanmar',
  flagEmoji: '🇲🇲',
  flagUrl: '/images/flags/myanmar.svg',
  coverImage: '/images/history/myanmar.jpg',
  category: 'global-south',
  era: '1948 – Present',
  capital: 'Naypyidaw',
  keyLeaders: ['Aung San', 'Thakin Than Tun', 'Ne Win', 'Aung San Suu Kyi', 'Min Aung Hlaing'],
  governingParty: "State Administration Council",
  governingIdeology: 'Capitalism',
  isHistoricState: false,
  
  officialGovUrl: 'https://www.myanmar.gov.mm/',
  overviewText: `Myanmar (formerly Burma) represents a complex Global South nation shaped by British colonial plunder, anti-fascist armed liberation, decades of ethnic conflict, and intense geopolitical rivalry over Indian Ocean access.

During British colonial rule (1824–1948), imperialism plundered Burma's timber, petroleum, and rice while enforcing a divide-and-rule strategy that pitted Bamar majority communities against Karen, Shan, Kachin, and Chin ethnic minorities. Anti-colonial resistance crystallized in 1939 with the founding of the Communist Party of Burma (CPB) under Aung San, Thakin Than Tun, and Thakin Soe.

Following independence in 1948, Myanmar struggled with internal armed conflict, CIA-backed Kuomintang (KMT) invasions in the Shan state, and the 1962 military takeover under General Ne Win, who instituted the "Burmese Way to Socialism." In recent years, Myanmar has emerged as a crucial corridor for multipolar energy sovereignty, anchored by the China-Myanmar Oil and Gas Pipelines connecting the Kyaukphyu deepwater port on the Bay of Bengal directly to Yunnan—bypassing the US Navy-controlled Malacca Strait.`,

  contradictions: [
    "The 2021 military coup led by Min Aung Hlaing ousted the elected government, sparking widespread armed resistance by the People's Defense Force and ethnic armies.",
    "Decades of military rule subordinated public education and healthcare to general staff business combines (MEHL) and jade extraction monopolies.",
    "Popular worker general strikes and youth guerrilla forces actively target military infrastructure to restore democratic popular sovereignty.",
    "Imperialist entities seek access to rare earth minerals while regional powers balance trade relations with the military administration."
  ],

  quickFacts: [
    { label: 'Kyaukphyu Oil & Gas Pipeline', value: 'Bypasses US Navy Malacca Strait bottleneck, transporting energy directly to China [3]' },
    { label: 'Communist Party of Burma', value: 'Founded in 1939 by Aung San & Thakin Than Tun, leading anti-Japanese resistance [2]' },
    { label: 'CIA KMT Invasions (1950s)', value: 'CIA covertly armed 12,000+ KMT troops in Shan State to launch raids into China [4]' },
    { label: 'Ethnic Minorities & Federalism', value: '135 recognized ethnic groups navigating long-standing autonomy struggles [1]' },
  ],

  timeline: [
    {
      id: 'myanmar-british-colonialism',
      title: '1. Pre-1948: British Colonial Plunder & Founding of the Communist Party of Burma (CPB)',
      period: 'Pre-1948',
      categoryTag: 'pre-revolution',
      summary: 'British imperialist conquest; timber & oil plunder; 1939 founding of Communist Party of Burma (CPB).',
      details: `Through three Anglo-Burmese Wars (1824-1885), the British Empire dismantled the Konbaung Dynasty and annexed Burma into British India. Imperialist capital plundered teak timber, rubies, and petroleum (Burmah Oil Company), while British administrators imported Indian migrant labor and exploited ethnic divisions.

In the 1930s, young anti-colonial nationalists formed the Dobama Asiayone (We Burmans Association), taking the title "Thakin" (Master). On August 15, 1939, Marxist revolutionaries founded the Communist Party of Burma (CPB), led by Aung San, Thakin Than Tun, and Thakin Soe. [2]`,
      keyFigures: ['Aung San', 'Thakin Than Tun', 'Thakin Soe', 'Saya San'],
      citationIds: [2],
    },
    {
      id: 'myanmar-anti-fascist-liberation',
      title: '2. 1945 – 1948: Anti-Fascist Freedom League, Panglong Agreement & 1948 Independence',
      period: '1945 – 1948',
      categoryTag: 'revolution',
      summary: 'Forming AFPFL to defeat Japanese fascism; 1947 Panglong Agreement; Aung San assassination & 1948 independence.',
      details: `After initially seeking Japanese aid to expel Britain, General Aung San and the CPB realized Japanese fascism was a brutal occupation. In March 1945, they launched a national anti-fascist uprising under the Anti-Fascist People's Freedom League (AFPFL), liberating Rangoon alongside Allied forces.

In February 1947, Aung San signed the Panglong Agreement with Shan, Kachin, and Chin ethnic leaders, promising regional autonomy. On July 19, 1947, British-backed right-wing rivals assassinated Aung San and his cabinet. Burma officially gained independence on January 4, 1948. [1][2]`,
      keyFigures: ['Aung San', 'U Nu', 'Thakin Than Tun'],
      citationIds: [1, 2],
    },
    {
      id: 'myanmar-civil-war-cia-kmt',
      title: '3. 1948 – 1962: Early Post-Independence Civil War, CPB Armed Struggle & CIA KMT Incursions',
      period: '1948 – 1962',
      categoryTag: 'challenges',
      summary: 'CPB & Karen insurgencies; CIA Operation Paper arming 12,000+ KMT troops in Shan state against China.',
      details: `Immediately after independence, ideological and ethnic fractures erupted into civil war. The Communist Party of Burma (CPB) went underground to launch armed peasant revolution, while Karen nationalist forces (KNU) mobilized for independence.

From 1950 to 1954, the US CIA executed "Operation Paper," covertly airlifting weapons, ammunition, and opium trade networks to over 12,000 Chiang Kai-shek Kuomintang (KMT) troops who had fled into Myanmar's Shan state. The KMT used Myanmar as a launchpad for violent cross-border raids into revolutionary China, devastating local Burmese communities. [4]`,
      keyFigures: ['U Nu', 'Thakin Than Tun', 'General Ne Win'],
      citationIds: [4],
    },
    {
      id: 'myanmar-burmese-way-socialism',
      title: '4. 1962 – 1988: General Ne Win & The "Burmese Way to Socialism"',
      period: '1962 – 1988',
      categoryTag: 'policies',
      summary: '1962 military coup under Ne Win; nationalizing banks & foreign capital; Revolutionary Council isolationism.',
      details: `In March 1962, General Ne Win launched a military coup, establishing the Revolutionary Council and formulating the "Burmese Way to Socialism" under the Burma Socialist Programme Party (BSPP).

The regime nationalized foreign banks, major industries, and import-export trade, expelling British corporate monopolies and foreign merchant capital. However, plagued by military bureaucratism, demonetization crises, economic isolation, and ongoing armed conflicts with the CPB and ethnic armies, the model stalled by the late 1980s. [1][2]`,
      keyFigures: ['Ne Win', 'San Yu'],
      citationIds: [1, 2],
    },
    {
      id: 'myanmar-8888-slorc-sanctions',
      title: '5. 1988 – 2010: 8888 Uprising, State Law & Order Council (SLORC) & Western Sanctions',
      period: '1988 – 2010',
      categoryTag: 'challenges',
      summary: 'August 1988 popular mass uprisings; SLORC military takeover; Western imperialist sanctions blockade.',
      details: `In August 1988, massive student and worker demonstrations (the 8888 Uprising) paralyzed Rangoon, demanding political democracy and economic relief. Ne Win resigned, and the military established the State Law and Order Restoration Council (SLORC, later SPDC), led by Senior General Than Shwe.

Western imperialist powers imposed strict economic sanctions and trade blockades. Simultaneously, internal collapse led to the dissolution of the underground CPB armed wings in 1989, leading ethnic armies to negotiate individual ceasefires with the military government. [1]`,
      keyFigures: ['Than Shwe', 'Aung San Suu Kyi', 'Khin Nyunt'],
      citationIds: [1],
    },
    {
      id: 'myanmar-neoliberal-nld-transition',
      title: '6. 2011 – 2020: Neoliberal Transition, NLD Administration & The Rohingya Displacement Crisis',
      period: '2011 – 2020',
      categoryTag: 'policies',
      summary: '2010 constitutional transition; NLD administration; ML analysis of colonial roots & 2017 Rohingya displacement.',
      details: `In 2011, the military enacted the 2008 Constitution, initiating a partial civilian transition under President Thein Sein. In 2015, Aung San Suu Kyi's National League for Democracy (NLD) won a parliamentary landslide, opening Myanmar to Western NGO networks and foreign investment.

**Historical Materialist Analysis of the Rohingya Displacement**:
The tragic expulsion of over 700,000 Muslim Rohingya from Rakhine State in 2017 was rooted in deep historical contradictions:
1. **British Colonial Divide-and-Rule**: During British colonial rule (1824-1948), imperial administrators imported hundreds of thousands of Bengali agricultural laborers from Chittagong into Arakan (Rakhine) to work for British rice export cartels, displacing Indigenous Rakhine Buddhist farmers and seeding long-term inter-communal land and ethnic antagonisms.
2. **1982 Citizenship Law Legal Exclusion**: Under Ne Win's military government, the 1982 Citizenship Law codified 135 officially recognized "national races" (*Tainggyithaye*) present in Burma before the 1824 British invasion. The Rohingya were stripped of citizenship, classified as foreign "Bengali" illegal immigrants, and denied land ownership, higher education, and freedom of movement.
3. **2017 State Clearance Operations**: Reactionary ethno-religious nationalism (Ma Ba Tha) and land scarcity in impoverished Rakhine State escalated tensions. Following attacks on border outposts by the insurgent Arakan Rohingya Salvation Army (ARSA) in August 2017, the Myanmar military (*Tatmadaw*) launched brutal clearance operations, burning hundreds of villages and forcing 700,000+ Rohingya across the border into Bangladesh. [1][3]`,
      keyFigures: ['Aung San Suu Kyi', 'Thein Sein', 'Min Aung Hlaing'],
      citationIds: [1, 3],
    },
    {
      id: 'myanmar-2021-coup-resistance',
      title: '7. 2021: February 1, 2021 Military Coup, Operation 1027 & Armed Resistance (PDF/EAOs)',
      period: '2021 – 2024',
      categoryTag: 'challenges',
      summary: 'Min Aung Hlaing February 2021 coup; Civil Disobedience Movement; Three Brotherhood Alliance Operation 1027.',
      details: `On February 1, 2021, Senior General Min Aung Hlaing executed a military coup, detaining Aung San Suu Kyi and establishing the State Administration Council (SAC). Mass strikes by workers and healthcare staff formed the Civil Disobedience Movement (CDM).

Opposition forces formed the National Unity Government (NUG) and People's Defence Force (PDF), allying with powerful Ethnic Armed Organizations (EAOs). In October 2023, the Three Brotherhood Alliance launched "Operation 1027," capturing scores of northern garrison towns and border trade posts along the Chinese border. [1][3]`,
      keyFigures: ['Min Aung Hlaing', 'Duwa Lashi La', 'Peng Deren'],
      citationIds: [1, 3],
    },
    {
      id: 'myanmar-pipeline-multipolar-future',
      title: '8. Present: Kyaukphyu Deepwater Port, China-Myanmar Pipeline & Geopolitical Sovereignty',
      period: 'Present',
      categoryTag: 'successes',
      summary: 'Kyaukphyu oil & gas pipelines; bypassing US Malacca Navy blockade; multipolar energy sovereignty.',
      details: `Despite ongoing domestic conflict, Myanmar occupies a central position in multipolar Asian economic security. The China-Myanmar Oil and Gas Pipelines transport 22 million tons of crude oil and 12 billion cubic meters of natural gas annually from the Kyaukphyu deepwater port on the Bay of Bengal directly to Kunming, China.

This strategic corridor enables multipolar trade to bypass the US Navy-controlled Malacca Strait bottleneck. Myanmar maintains economic and diplomatic partnerships with China, Russia, ASEAN, and BRICS+ nations to resist Western hegemony. [3]`,
      keyFigures: ['Min Aung Hlaing', 'Wang Yi'],
      citationIds: [3],
    },
  ],

  sources: [
    {
      id: 1,
      label: 'A History of Myanmar since Ancient Times',
      publisher: 'Maitrii Aung-Thwin & Michael Aung-Thwin / Reaktion Books',
      year: '2013',
      excerpt: 'Comprehensive historical analysis of Burmese kingdoms, British colonial administrative division, post-colonial civil wars, and state formation.',
    },
    {
      id: 2,
      label: 'The Communist Party of Burma: Theory and Armed Struggle',
      publisher: 'Bertil Lintner / Institute of Southeast Asian Studies (ISEAS)',
      year: '1990',
      excerpt: 'Detailed historical documentation of the founding of the CPB, its anti-Japanese united front, and its decades of rural armed resistance.',
    },
    {
      id: 3,
      label: 'China-Myanmar Energy Pipelines and Indian Ocean Access',
      publisher: 'World Bank & Asian Infrastructure Investment Bank (AIIB) Trade Logistics Report',
      year: '2023',
      url: 'https://www.aiib.org/',
      excerpt: 'Technical and economic analysis of the 1,400 km dual oil and gas pipeline connecting Kyaukphyu to Yunnan province.',
    },
    {
      id: 4,
      label: 'The CIA\'s Secret War in Burma: Operation Paper',
      publisher: 'Richard Gibson / Stanford University Press',
      year: '2011',
      excerpt: 'Declassified historical documentation of US CIA covert operations supplying arms and opium networks to Kuomintang forces in Shan state during the 1950s.',
    },
  ],
};
