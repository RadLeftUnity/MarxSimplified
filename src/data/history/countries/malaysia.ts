import type { CountryData } from '../types';

export const malaysiaData: CountryData = {
  id: 'malaysia',
  name: "Malaysia",
  shortName: 'Malaysia',
  flagEmoji: '🇲🇾',
  flagUrl: '/images/flags/malaysia.svg',
  coverImage: '/images/history/malaysia.jpg',
  category: 'global-south',
  era: '1957 – Present',
  capital: 'Kuala Lumpur',
  keyLeaders: ['Chin Peng (MCP Leader)', 'Tunku Abdul Rahman', 'Mahathir Mohamad', 'Anwar Ibrahim'],
  governingParty: "Pakatan Harapan",
  governingIdeology: 'Capitalism',
  isHistoricState: false,
  
  officialGovUrl: 'https://www.malaysia.gov.my/',
  overviewText: `Malaysia represents a Southeast Asian federation forged through European spice trade monopolies (Portuguese Malacca), British rubber and tin extraction, and a brutal 12-year British counter-insurgency war (**The Malayan Emergency**) against communist national liberation forces (**Chin Peng**).

During the 19th and early 20th centuries, British merchant capital transformed Malaya into the world's primary exporter of natural rubber and tin. To supply cheap labor, British colonial authorities imported hundreds of thousands of indentured Chinese and Indian workers, structuring a tri-racial colonial labor system (Malay peasantry, Chinese miners/shopkeepers, Indian rubber plantation laborers). During World War II, the Malayan Communist Party (MCP) organized the **Malayan People's Anti-Japanese Army (MPAJA)**, which led anti-fascist guerrilla resistance against Japanese occupation.

In 1948, when British cartels attempted to restore colonial monopolies, the MCP launched an anti-colonial war of national liberation (**The Malayan Emergency, 1948–1960**), led by **Chin Peng**. British forces deployed horrific counter-insurgency tactics, forcibly herding 500,000 rural villagers into barbed-wire "New Villages" and spraying Agent Orange defoliants. After granting formal independence on August 31, 1957, Malaysia adopted the **New Economic Policy (NEP)** in 1971 to expand state-assisted capital. During the 1997 Asian Financial Crisis, Prime Minister **Mahathir Mohamad** famously rejected IMF austerity, imposing capital controls to protect national sovereignty.`,

  contradictions: [
    "British colonial authorities suppressed the 12-year Malayan Communist Party liberation war, enforcing racialized labor divisions in tin and rubber industries.",
    "Yet private corporate monopolies and high living costs spark working-class discontent.",
    "Export-oriented electronics and palm oil sectors rely on low-wage migrant labor under precarious workplace conditions.",
    "Foreign policy maintains non-aligned trade with China and South-South economic partners while resisting US military bloc alignment."
  ],

  quickFacts: [
    { label: 'British Rubber & Tin Monopolies', value: 'British cartels structured Malaya into world\'s top rubber & tin export colony [1]' },
    { label: 'The Malayan Emergency (1948-1960)', value: 'Chin Peng led anti-colonial guerrilla war against British rubber cartels [2]' },
    { label: 'British "New Villages" Internment', value: 'British forces forcibly interned 500,000 peasants in barbed-wire concentration camps [3]' },
    { label: '1997 Rejection of IMF Austerity', value: 'Mahathir Mohamad imposed capital controls, defying IMF neoliberal dictates [4]' },
  ],

  timeline: [
    {
      id: 'malaysia-1511-colonial-monopolies-tin-rubber',
      title: '1. 1511 – 1941: Portuguese, Dutch & British Colonial Monopolies: Malacca, Tin & Rubber',
      period: '1511 – 1941',
      categoryTag: 'pre-revolution',
      summary: '1511 Portuguese conquest of Malacca; British colonial monopoly over tin mines & rubber plantations.',
      details: `In 1511, Portuguese gunboats seized the Sultanate of Malacca, controlling the strategic Malacca Strait spice trade. In 1824, the Anglo-Dutch Treaty awarded Malaya to Great Britain.

British merchant capital cleared rainforests for vast rubber plantations (Guthrie, Dunlop) and tin mines. To prevent unified class consciousness, British colonial authorities imported indentured labor from China and South India, maintaining a divided colonial division of labor. [1]`,
      keyFigures: ['Sultan Mahmud Shah', 'Stamford Raffles'],
      citationIds: [1],
    },
    {
      id: 'malaysia-1941-wwii-mpaja-anti-fascist-resistance',
      title: '2. 1941 – 1945: WWII Japanese Occupation & Malayan People\'s Anti-Japanese Army (MPAJA)',
      period: '1941 – 1945',
      categoryTag: 'revolution',
      summary: '1941-1945: Malayan Communist Party forms MPAJA, waging anti-fascist guerrilla war against Japan.',
      details: `In December 1941, Imperial Japanese forces invaded Malaya, executing thousands of Chinese and Malay trade unionists.

The Malayan Communist Party (MCP) organized the **Malayan People's Anti-Japanese Army (MPAJA)**, establishing jungle guerrilla bases, ambushing Japanese supply columns, and becoming the effective anti-fascist liberation force across Malaya. [2]`,
      keyFigures: ['Chin Peng', 'Lai Teck (British Double Agent)'],
      citationIds: [2],
    },
    {
      id: 'malaysia-1948-malayan-emergency-anti-british-war',
      title: '3. 1948 – 1960: The Malayan Emergency: Chin Peng, MCP & British Counter-Insurgency Camps',
      period: '1948 – 1960',
      categoryTag: 'revolution',
      summary: '1948-1960: Chin Peng leads MRLA in anti-colonial war; British intern 500,000 peasants in "New Villages".',
      details: `In June 1948, after British colonial police outlawed communist trade unions and shot striking rubber workers, the MCP launched an anti-colonial war of national liberation, forming the Malayan Races Liberation Army (MRLA) led by **Chin Peng**.

British High Commissioner Gerald Templer executed brutal counter-insurgency: forcibly interning 500,000 rural peasants in barbed-wire "New Villages" to cut off guerrilla food supplies, spraying chemical defoliants, and offering massive bounties. [2][3]`,
      keyFigures: ['Chin Peng', 'Gerald Templer (British High Commissioner)', 'Rashid Maidin'],
      citationIds: [2, 3],
    },
    {
      id: 'malaysia-1957-independence-hari-merdeka',
      title: '4. 1957: August 31, 1957 Independence (Hari Merdeka) under Tunku Abdul Rahman',
      period: '1957',
      categoryTag: 'successes',
      summary: 'Aug 31, 1957: Independence proclaimed; Alliance Party (UMNO, MCA, MIC) preserves capitalist property.',
      details: `To undercut popular support for the communist insurgency, the British government agreed to grant formal independence to the Federation of Malaya on August 31, 1957.

Independence was handed to the conservative Alliance Party led by **Tunku Abdul Rahman**, which preserved British corporate land holdings, rubber estates, and mining concessions while maintaining anti-communist emergency laws (ISA). [2][3]`,
      keyFigures: ['Tunku Abdul Rahman', 'Abdul Razak Hussein'],
      citationIds: [2, 3],
    },
    {
      id: 'malaysia-1963-federation-konfrontasi-singapore',
      title: '5. 1963 – 1965: Federation of Malaysia, Konfrontasi with Indonesia & Singapore Separation',
      period: '1963 – 1965',
      categoryTag: 'policies',
      summary: '1963 incorporation of Sabah, Sarawak & Singapore; 1963-1966 Konfrontasi war with Sukarno\'s Indonesia.',
      details: `On September 16, 1963, Malaya merged with Sabah, Sarawak, and Singapore to form the Federation of Malaysia. Indonesian President Sukarno denounced Malaysia as a British neo-colonial project, launching the **Konfrontasi (1963–1966)** border war.

In August 1965, due to acute political and ethnic tensions between Lee Kuan Yew's PAP and UMNO, Singapore was expelled from the federation, becoming an independent republic. [3]`,
      keyFigures: ['Tunku Abdul Rahman', 'Sukarno', 'Lee Kuan Yew'],
      citationIds: [3],
    },
    {
      id: 'malaysia-1969-may-13-riots-new-economic-policy',
      title: '6. 1969: The May 13 Racial Riots & The 1971 New Economic Policy (NEP)',
      period: '1969',
      categoryTag: 'challenges',
      summary: 'May 13, 1969 ethnic riots in KL; 1971 NEP launches state-assisted affirmative action capitalism.',
      details: `In May 1969, following tense general elections, deadly ethnic riots erupted in Kuala Lumpur. In response, Prime Minister Abdul Razak suspended parliament, forming the National Operations Council.

In 1971, the government launched the **New Economic Policy (NEP)**, utilizing state-owned enterprises (PERNAS, PETRONAS) to expand corporate equity ownership for the indigenous Malay majority (Bumiputera) while promoting export-oriented electronics manufacturing. [3][4]`,
      keyFigures: ['Abdul Razak Hussein', 'Mahathir Mohamad'],
      citationIds: [3, 4],
    },
    {
      id: 'malaysia-1981-mahathir-1997-asian-financial-crisis',
      title: '7. 1988 – 2003: Mahathir Mohamad, Look East Policy & 1997 Rejection of IMF Austerity',
      period: '1981 – 2003',
      categoryTag: 'successes',
      summary: 'Mahathir Mohamad industrialization; 1997 Asian Crisis: Mahathir rejects IMF, imposing capital controls.',
      details: `Prime Minister **Mahathir Mohamad** (1981–2003) promoted rapid industrialization (Proton national car, Multimedia Super Corridor) under the "Look East Policy" modeling Japan and South Korea.

During the 1997 Asian Financial Crisis, when Western hedge funds attacked Southeast Asian currencies, Mahathir famously defied the IMF, refusing austerity conditions, sacking IMF-aligned deputy Anwar Ibrahim, and imposing capital controls that stabilized the Malaysian Ringgit. [4]`,
      keyFigures: ['Mahathir Mohamad', 'Anwar Ibrahim', 'Michel Camdessus (IMF Chief)'],
      citationIds: [4],
    },
    {
      id: 'malaysia-present-electronics-palm-oil-working-class',
      title: '8. Present: Electronics Export Manufacturing, Palm Oil Monoculture & Working-Class Reality',
      period: 'Present',
      categoryTag: 'challenges',
      summary: 'Major semiconductor packaging hub; palm oil monoculture; Reformasi government under Anwar Ibrahim.',
      details: `Today, Malaysia serves as a critical global hub for semiconductor assembly and testing (Penang) and palm oil exports.

Under Prime Minister Anwar Ibrahim (Pakatan Harapan), Malaysia balances trade relations between China and the US, while migrant and domestic industrial workers organize for living wages, public healthcare access, and an end to communal political patronage. [3][4]`,
      keyFigures: ['Anwar Ibrahim', 'Mahathir Mohamad', 'Muhyiddin Yassin'],
      citationIds: [3, 4],
    },
  ],

  sources: [
    {
      id: 1,
      label: 'A History of Malaysia: Tin, Rubber Monopolies and Colonial Division of Labor',
      publisher: 'Barbara Watson Andaya & Leonard Y. Andaya / Palgrave Macmillan',
      year: '2016',
      excerpt: 'Comprehensive historical survey of Malacca spice trade, British rubber plantations, and colonial labor structures.',
    },
    {
      id: 2,
      label: 'My Side of History: The Malayan Communist Party and Anti-British Liberation War',
      publisher: 'Chin Peng / Media Masters',
      year: '2003',
      excerpt: 'Autobiographical account of Chin Peng, the MPAJA anti-fascist resistance, and the 1948-1960 Malayan Emergency.',
    },
    {
      id: 3,
      label: 'The Malayan Emergency: British Counter-Insurgency, "New Villages" and Colonial State Power',
      publisher: 'Karl Hack / Oxford University Press',
      year: '2001',
      excerpt: 'Documentary investigation of British counter-insurgency tactics, forced internment camps, defoliants, and 1957 independence.',
    },
    {
      id: 4,
      label: 'Defying the IMF: Mahathir Mohamad, Capital Controls and the 1997 Asian Financial Crisis',
      publisher: 'Jomo Kwame Sundaram / Zed Books',
      year: '2001',
      excerpt: 'Political economy analysis of Malaysia\'s New Economic Policy (NEP), the 1997 Asian Crisis, and resistance to IMF austerity.',
    },
  ],
};
