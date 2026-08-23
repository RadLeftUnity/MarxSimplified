import type { CountryData } from '../types';

export const nepalData: CountryData = {
  id: 'nepal',
  name: 'Federal Democratic Republic of Nepal',
  shortName: 'Nepal',
  flagEmoji: '🇳🇵',
  flagUrl: '/images/flags/nepal.svg',
  coverImage: '/images/history/nepal.jpg',
  category: 'global-south',
  era: '1996 – Present',
  capital: 'Kathmandu',
  keyLeaders: ['Prithvi Narayan Shah', 'BP Koirala', 'Pushpa Kamal Dahal (Prachanda)', 'Baburam Bhattarai', 'KP Sharma Oli'],
  governingParty: "Communist Party of Nepal",
  governingIdeology: "Democratic Socialism",
  isHistoricState: false,
  
  officialGovUrl: 'https://nepal.gov.np/',
  overviewText: `Nepal represents a Himalayan nation where a 240-year-old feudal Hindu monarchy and landlord autocracy (**Rana / Shah Dynasties**) was dismantled by a historic 10-year communist revolution (**The Nepalese People's War, 1996–2006**), establishing the Federal Democratic Republic of Nepal.

In 1846, the autocratic Rana dynasty established a hereditary prime ministership, locking Nepal into feudal isolation and serving British imperial interests in India. Following the overthrow of the Ranas in 1951, the Shah monarchy instituted the autocratic Panchayat system in 1960, banning political parties and suppressing peasant movements. In 1990, the first **Jana Andolan (People's Movement)** forced King Birendra to adopt a constitutional monarchy.

On February 13, 1996, the Communist Party of Nepal (Maoist), led by **Pushpa Kamal Dahal (Prachanda)** and **Baburam Bhattarai**, launched the **Nepalese People's War**. Over ten years of protracted guerrilla warfare, the CPN(M) liberated 80% of rural Nepal, establishing autonomous village people's councils, abolishing feudal caste discrimination, and providing free healthcare. Following the 2006 **Jana Andolan II** mass uprising, the monarchy was formally abolished on May 28, 2008. Today, Nepal is governed by communist coalition leadership, partnering with China on Trans-Himalayan BRI railways and energy projects.`,

  contradictions: [
    "A decade-long Maoist People's War led to the abolition of the 240-year feudal Hindu monarchy in 2008 and the establishment of a secular republic.",
    "Unified communist parties have won multiple parliamentary elections, yet internal political fragmentation stymied rapid socialist transformation.",
    "Lack of domestic industrial employment forces millions of young Nepalese workers to seek low-wage construction jobs in the Gulf states.",
    "Geopolitical location between China and India creates foreign pressure, as the US attempts to insert infrastructure influence via the MCC grant."
  ],

  quickFacts: [
    { label: '1996–2006 Nepalese People\'s War', value: 'CPN(M) Maoist revolution liberated 80% of rural Nepal, abolishing feudal landlordism [1]' },
    { label: 'May 28, 2008 Monarchy Abolition', value: 'Parliament formally abolished 240-year Hindu monarchy, declaring secular republic [2]' },
    { label: '2015 Constitution & Indian Blockade', value: 'Adopted secular federal constitution, resisting 5-month Indian border blockade [3]' },
    { label: 'China Trans-Himalayan BRI', value: 'Trans-Himalayan railway & energy connectivity breaking landlocked dependency [4]' },
  ],

  timeline: [
    {
      id: 'nepal-1768-unification-rana-autocracy-1846',
      title: '1. 1768 – 1950: Shah Dynasty Unification, 1846 Kot Massacre & Rana Feudal Autocracy',
      period: '1768 – 1950',
      categoryTag: 'pre-revolution',
      summary: '1768 Shah unification; 1846 Kot massacre installs 104-year autocratic Rana hereditary rule.',
      details: `In 1768, Prithvi Narayan Shah unified small Himalayan principalities into the Kingdom of Nepal. In September 1846, Jung Bahadur Rana executed the bloody Kot massacre, seizing state power and establishing the 104-year autocratic **Rana Dynasty**.

Under the Ranas, Nepal's peasantry endured extreme feudal exploitation (*Birta* and *Rakam* forced labor), while the Ranas supplied Gurkha mercenaries to the British Empire in India. [1]`,
      keyFigures: ['Prithvi Narayan Shah', 'Jung Bahadur Rana'],
      citationIds: [1],
    },
    {
      id: 'nepal-1951-overthrow-of-ranas-panchayat-autocracy',
      title: '2. 1951 – 1989: Overthrow of Ranas, Monarchy Reassertion & Panchayat Authoritarianism',
      period: '1951 – 1989',
      categoryTag: 'challenges',
      summary: '1951 anti-Rana revolt; 1960 King Mahendra royal coup bans political parties (Panchayat system).',
      details: `In 1951, a popular movement backed by the Nepali Congress and early communists overthrew the Rana oligarchy, restoring King Tribhuvan. In 1959, B.P. Koirala was elected Prime Minister.

In December 1960, King Mahendra executed a royal coup, dissolving parliament, banning political parties, and establishing the autocratic **Panchayat system** that suppressed trade unions and communist organizing. [1][2]`,
      keyFigures: ['B.P. Koirala', 'King Mahendra', 'Pushpa Lal Shrestha (Communist Founder)'],
      citationIds: [1, 2],
    },
    {
      id: 'nepal-1990-jana-andolan-constitutional-monarchy',
      title: '3. 1990: The 1990 Jana Andolan (People\'s Movement) & Constitutional Monarchy',
      period: '1990',
      categoryTag: 'revolution',
      summary: 'Feb-April 1990: Mass student-worker general strike forces King Birendra to restore multi-party democracy.',
      details: `In February 1990, the United Left Front (communist alliance) and Nepali Congress launched the **Jana Andolan (People's Movement)**.

Mass street demonstrations in Kathmandu forced King Birendra in April 1990 to end the Panchayat system, legalise political parties, and promulgate a constitutional monarchy constitution. [2]`,
      keyFigures: ['King Birendra', 'Ganesh Man Singh', 'Madan Bhandari (CPN-UML Leader)'],
      citationIds: [2],
    },
    {
      id: 'nepal-1996-peoples-war-cpn-maoist-prachanda',
      title: '4. 1996 – 2001: Feb 13, 1996 Launch of the Maoist People\'s War & Royal Palace Massacre (2001)',
      period: '1996 – 2001',
      categoryTag: 'revolution',
      summary: 'Feb 13, 1996: CPN(M) under Prachanda launches People\'s War; June 2001 Royal Palace massacre.',
      details: `On February 13, 1996, the CPN (Maoist) led by **Pushpa Kamal Dahal (Prachanda)** and **Baburam Bhattarai** launched the **Nepalese People's War** following the government's rejection of 40 anti-feudal demands.

guerrillas established liberated base areas in Rolpa and Rukum. On June 1, 2001, Crown Prince Dipendra massacred King Birendra and nine royal family members inside the Narayanhiti Palace, bringing autocratic King Gyanendra to the throne. [2][3]`,
      keyFigures: ['Pushpa Kamal Dahal (Prachanda)', 'Baburam Bhattarai', 'King Birendra', 'King Gyanendra'],
      citationIds: [2, 3],
    },
    {
      id: 'nepal-2002-gyanendra-coup-jana-andolan-ii-2006',
      title: '5. 2002 – 2006: King Gyanendra Autocratic Coup & The Historic 2006 Jana Andolan II',
      period: '2002 – 2006',
      categoryTag: 'revolution',
      summary: 'Feb 2005: Gyanendra assumes absolute power; April 2006 Jana Andolan II 19-day strike forces royal surrender.',
      details: `In February 2005, King Gyanendra declared a state of emergency, seizing absolute royal power. In November 2005, the CPN(M) and 7 parliamentary parties signed a historic 12-Point Understanding in New Delhi to end the monarchy.

In April 2006, the **Jana Andolan II** general strike paralyzed Kathmandu for 19 days. Millions filled the streets, forcing King Gyanendra to reinstate parliament and hand over power. [3]`,
      keyFigures: ['Prachanda', 'Girija Prasad Koirala', 'King Gyanendra'],
      citationIds: [3],
    },
    {
      id: 'nepal-2008-monarchy-abolition-federal-republic',
      title: '6. 2008: May 28, 2008: Formal Abolition of the Monarchy & Proclamation of Republic',
      period: '2008',
      categoryTag: 'successes',
      summary: 'May 28, 2008: Constituent Assembly votes 560-4 to abolish 240-year Hindu monarchy; Prachanda PM.',
      details: `In April 2008 Constituent Assembly elections, the CPN (Maoist) won a historic electoral victory, becoming the largest party.

On May 28, 2008, the Constituent Assembly voted 560 to 4 to officially **abolish the 240-year-old Hindu monarchy**, proclaiming the Federal Democratic Republic of Nepal, with Prachanda taking office as Prime Minister. [3][4]`,
      keyFigures: ['Prachanda', 'Ram Baran Yadav (First President)', 'Baburam Bhattarai'],
      citationIds: [3, 4],
    },
    {
      id: 'nepal-2015-secular-constitution-indian-border-blockade',
      title: '7. 2015: The 2015 Secular Constitution & Resisting the 5-Month Indian Border Blockade',
      period: '2015',
      categoryTag: 'challenges',
      summary: 'Sept 2015: Secular federal constitution adopted; Nepal resists 5-month unofficial Indian border blockade.',
      details: `On September 20, 2015, Nepal promulgated its historic secular federal constitution, guaranteeing equal rights for women and indigenous Madhesi and Janajati communities.

Dissatisfied with Nepal's independent constitutional process, India imposed an unofficial 5-month border blockade, choking fuel and medicine supplies. Nepal stood firm, opening trade transit routes with China. [4]`,
      keyFigures: ['KP Sharma Oli', 'Prachanda', 'Narendra Modi'],
      citationIds: [4],
    },
    {
      id: 'nepal-present-communist-coalition-china-bri-trans-himalayan',
      title: '8. Present: Communist Coalition Leadership, China BRI Connectivity & Working-Class Realities',
      period: 'Present',
      categoryTag: 'successes',
      summary: 'Prachanda & KP Oli communist coalition; China Trans-Himalayan railway BRI project & agrarian co-ops.',
      details: `Today, Nepal is governed by alternating communist leadership coalitions (CPN Maoist Centre and CPN UML). Nepal is advancing the **Trans-Himalayan Multi-Dimensional Connectivity Network** under China's Belt and Road Initiative, including the Gyirong-Kathmandu cross-border railway.

Nepalese working-class movements continue advocating for agricultural cooperative investment, living wages for overseas migrant workers, and full implementation of federal social rights. [3][4]`,
      keyFigures: ['Pushpa Kamal Dahal (Prachanda)', 'KP Sharma Oli', 'Xi Jinping'],
      citationIds: [3, 4],
    },
  ],

  sources: [
    {
      id: 1,
      label: 'A History of Nepal: Shah Dynasty Unification and Rana Autocracy',
      publisher: 'John Whelpton / Cambridge University Press',
      year: '2005',
      excerpt: 'Definitive historical survey of Himalayan unification, 1846 Kot massacre, and Rana feudal land tenure.',
    },
    {
      id: 2,
      label: 'The Nepalese People\'s War (1996-2006) and the Maoist Revolution',
      publisher: 'Deepak Thapa & Arjun Karki / Martin Chautari (A Kingdom Under Siege)',
      year: '2003',
      excerpt: 'Documentary account of CPN(M) armed struggle, Prachanda\'s leadership, and rural base area liberation.',
    },
    {
      id: 3,
      label: 'Jana Andolan II, Abolition of the Monarchy (2008) and Federal Republic Proclamation',
      publisher: 'Prashant Jha / Aleph Book Company (Battles of the New Republic)',
      year: '2014',
      excerpt: 'Inside account of 2006 mass uprising, May 28, 2008 monarchy abolition vote, and communist constituent assembly victory.',
    },
    {
      id: 4,
      label: 'The 2015 Nepal Constitution, Indian Border Blockade and China BRI Trans-Himalayan Connectivity',
      publisher: 'Amish Raj Mulmi / Hurst & Company (All Roads Lead North)',
      year: '2021',
      excerpt: 'Political economy analysis of 2015 constitution, Indian blockade resistance, and Trans-Himalayan rail partnership with China.',
    },
  ],
};
