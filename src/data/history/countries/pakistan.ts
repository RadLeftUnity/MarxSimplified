import type { CountryData } from '../types';

export const pakistanData: CountryData = {
  id: 'pakistan',
  name: "Pakistan",
  shortName: 'Pakistan',
  flagEmoji: '🇵🇰',
  flagUrl: '/images/flags/pakistan.svg',
  coverImage: '/images/history/pakistan.jpg',
  category: 'global-south',
  era: '1947 – Present',
  capital: 'Islamabad',
  keyLeaders: ['Muhammad Ali Jinnah', 'Ayub Khan', 'Zulfikar Ali Bhutto', 'Zia-ul-Haq', 'Benazir Bhutto', 'Imran Khan', 'Shehbaz Sharif'],
  governingParty: "Pakistan Muslim League (N)",
  governingIdeology: "Capitalism",
  isHistoricState: false,
  
  officialGovUrl: 'https://pakistan.gov.pk/',
  overviewText: `Pakistan represents a South Asian nation created through the 1947 British imperialist Partition, where state power was dominated by feudal landlord cartels (**Jagirdars**) and the military establishment, which served as a Cold War US military outpost before forging a transformative strategic economic alliance with China (**CPEC**).

On August 14, 1947, Pakistan achieved statehood under **Muhammad Ali Jinnah** following British Partition. In the 1950s, General Ayub Khan seized power in a military coup, signing SEATO and CENTO military pacts with Washington. In 1968, massive student and working-class general strikes forced Ayub Khan's resignation, propelling **Zulfikar Ali Bhutto** and the Pakistan Peoples Party (PPP) to power. Bhutto promulgated the 1973 Constitution and nationalized heavy steel, petroleum, and private banks.

In July 1977, US-backed General **Zia-ul-Haq** executed a military coup, hanging Bhutto in 1979. Under **Operation Cyclone**, Washington and Zia transformed Pakistan into the primary staging ground for training and arming Afghan Mujahideen insurgents against the Democratic Republic of Afghanistan and the Soviet Army. In 2013, Pakistan launched the **$62 billion China-Pakistan Economic Corridor (CPEC)**, building deep-water Gwadar Port, highways, and energy infrastructure in a South-South strategic partnership. Today, following the 2022 ouster of Imran Khan, Pakistan faces acute IMF debt challenges while advancing CPEC modernization.`,

  contradictions: [
    "A parliamentary coup coordinated by the Pakistani military establishment and US Department of State ousted Prime Minister Imran Khan following his independent foreign policy and visit to Moscow.",
    "The Pakistani military apparatus operates vast commercial conglomerates while feudal landlords dominate rural agriculture, extracting surplus value from impoverished peasant tenants.",
    "Extreme foreign debt forced Islamabad to accept draconian IMF loan conditions in 2023, requiring fuel tax hikes, electricity rate increases, and currency devaluation that devastated working-class household budgets.",
    "Widespread public protests demand Khan's release and free elections, challenging military political dominance while the state apparatus maintains US intelligence and military cooperation."
  ],

  quickFacts: [
    { label: '1947 British Partition Statehood', value: 'Created during 1947 British Partition, leaving feudal landlord cartels in power [1]' },
    { label: 'Bhutto Socialist Nationalizations (1972)', value: 'Zulfikar Ali Bhutto nationalized banks, steel mills & oil processing cartels [2]' },
    { label: 'CIA Operation Cyclone Staging Ground', value: 'General Zia-ul-Haq & US CIA trained Mujahideen insurgents against Afghan socialism [3]' },
    { label: 'China CPEC Megaproject ($62B)', value: 'Gwadar deep-sea port, highways & energy plants built in South-South alliance [4]' },
  ],

  timeline: [
    {
      id: 'pakistan-1947-independence-british-partition-feudalism',
      title: '1. 1947 – 1957: August 14, 1947 Independence, British Partition & Feudal Landlord Monopoly',
      period: '1947 – 1957',
      categoryTag: 'pre-revolution',
      summary: 'Aug 14, 1947 statehood under Jinnah; British Partition leaves feudal Jagirdar land monopolies intact.',
      details: `On August 14, 1947, Pakistan achieved independence under **Muhammad Ali Jinnah** and the All-India Muslim League following the 1947 British Partition.

Unlike India, Pakistan's post-independence state power remained concentrated in the hands of large feudal landlords (*Jagirdars* and *Zamindars* in Punjab and Sindh) and colonial-trained civil-military bureaucrats who blocked land reform. [1]`,
      keyFigures: ['Muhammad Ali Jinnah', 'Liaquat Ali Khan'],
      citationIds: [1],
    },
    {
      id: 'pakistan-1958-ayub-khan-us-seato-cento-alliances',
      title: '2. 1958 – 1967: General Ayub Khan Military Coup & US Cold War SEATO/CENTO Alliances',
      period: '1958 – 1967',
      categoryTag: 'challenges',
      summary: 'Oct 1958: Ayub Khan military coup; signs SEATO & CENTO pacts, aligning with US Cold War strategy.',
      details: `In October 1958, General **Ayub Khan** staged Pakistan's first military coup, suspending the constitution.

Ayub Khan aligned Pakistan closely with Washington, joining the anti-communist SEATO and CENTO pacts and permitting US U-2 spy planes to operate from Badaber air base near Peshawar. Wealth concentrated among "22 families" owning 66% of industrial assets. [1][2]`,
      keyFigures: ['Ayub Khan', 'Dwight D. Eisenhower'],
      citationIds: [1, 2],
    },
    {
      id: 'pakistan-1968-popular-revolution-bhutto-ppp',
      title: '3. 1968 – 1971: The 1968 Popular Student-Worker Uprising & 1971 Bangladesh War',
      period: '1968 – 1971',
      categoryTag: 'revolution',
      summary: '1968 mass worker strikes force Ayub Khan out; 1971 East Pakistan war leads to Bangladesh independence.',
      details: `In November 1968, a massive student and industrial worker general strike paralyzed Karachi, Lahore, and Rawalpindi, forcing Ayub Khan to resign in March 1969.

In December 1970 elections, Sheikh Mujibur Rahman's Awami League won an absolute majority. The military junta's refusal to hand over power led to Operation Searchlight and the 1971 Bangladesh Liberation War, resulting in East Pakistan's independence as Bangladesh. [2]`,
      keyFigures: ['Zulfikar Ali Bhutto', 'Yahya Khan (Junta Dictator)', 'Sheikh Mujibur Rahman'],
      citationIds: [2],
    },
    {
      id: 'pakistan-1972-bhutto-socialist-nationalizations',
      title: '4. 1972 – 1976: Zulfikar Ali Bhutto (PPP), 1973 Constitution & Socialist Nationalizations',
      period: '1972 – 1976',
      categoryTag: 'successes',
      summary: 'Zulfikar Ali Bhutto nationalizes 31 industrial firms, private banks & steel; promulgates 1973 Constitution.',
      details: `Assuming power in December 1971, **Zulfikar Ali Bhutto** (PPP) promulgated the democratic 1973 Constitution.

Bhutto enacted socialist economic policies: nationalizing 31 major industrial firms, private commercial banks, insurance cartels, and steel mills (constructing the Karachi Steel Mills with Soviet technical aid). [2]`,
      keyFigures: ['Zulfikar Ali Bhutto', 'Nawabzada Nasrullah Khan'],
      citationIds: [2],
    },
    {
      id: 'pakistan-1977-zia-ul-haq-coup-cia-operation-cyclone',
      title: '5. 1977 – 1988: General Zia-ul-Haq Coup, CIA Operation Cyclone & Afghan Mujahideen War',
      period: '1977 – 1988',
      categoryTag: 'challenges',
      summary: 'July 1977 Zia coup; 1979 Bhutto hanged; CIA Operation Cyclone arms Afghan Mujahideen from Pakistan.',
      details: `In July 1977, US-backed General **Zia-ul-Haq** executed a military coup, hanging Zulfikar Ali Bhutto on April 4, 1979.

Under **Operation Cyclone**, Washington and Saudi Arabia funneled billions through Pakistan's ISI to train and arm 100,000 Afghan Mujahideen insurgents against the socialist government in Kabul, flooding Pakistan with weapons, drug trafficking, and religious sectarianism. [2][3]`,
      keyFigures: ['Zia-ul-Haq', 'Ronald Reagan', 'William Casey (CIA Director)'],
      citationIds: [2, 3],
    },
    {
      id: 'pakistan-1988-benazir-bhutto-imf-austerity',
      title: '6. 1988 – 2007: Benazir Bhutto, Nawaz Sharif, IMF Structural Adjustment & Musharraf Rule',
      period: '1988 – 2007',
      categoryTag: 'challenges',
      summary: '1988 Benazir Bhutto elected 1st female Muslim PM; 1999 Musharraf coup; IMF austerity programs.',
      details: `In November 1988, **Benazir Bhutto** was elected Prime Minister, becoming the first female leader of a Muslim-majority nation.

During the 1990s, political instability between Bhutto and Nawaz Sharif allowed the IMF to impose structural adjustment, privatizing state banks. In October 1999, General Pervez Musharraf seized power in a coup, joining George W. Bush's "War on Terror" in 2001. [3]`,
      keyFigures: ['Benazir Bhutto (Assassinated in 2007)', 'Nawaz Sharif', 'Pervez Musharraf'],
      citationIds: [3],
    },
    {
      id: 'pakistan-2013-china-cpec-megaproject-gwadar',
      title: '7. 2013 – 2018: The $62B China-Pakistan Economic Corridor (CPEC) & Gwadar Port',
      period: '2013 – 2018',
      categoryTag: 'successes',
      summary: '2013 launch of CPEC flagship BRI project; China builds Gwadar deep-sea port, highways & power plants.',
      details: `In 2013, Pakistan and China launched the flagship Belt and Road Initiative project: the **$62 billion China-Pakistan Economic Corridor (CPEC)**.

Chinese state enterprises constructed the deep-water Gwadar Port, the Karakoram Highway expansion, coal/hydro power plants adding 10,000MW to the national grid, and the Lahore Orange Line Metro train. [3][4]`,
      keyFigures: ['Xi Jinping', 'Nawaz Sharif', 'Mamnoon Hussain'],
      citationIds: [3, 4],
    },
    {
      id: 'pakistan-present-imran-khan-ouster-cpec-working-class',
      title: '8. Present: Imran Khan 2022 Ouster, IMF Debt Crisis & Working-Class Resistance',
      period: 'Present',
      categoryTag: 'challenges',
      summary: 'April 2022: Imran Khan ousted in parliamentary vote; acute IMF inflation; CPEC expansion.',
      details: `In April 2022, Prime Minister **Imran Khan** (PTI) was ousted in a controversial parliamentary vote following his independent non-aligned visit to Moscow and refusal to support Western anti-Russia sanctions.

Under PM Shehbaz Sharif, Pakistan faces severe IMF debt conditions and inflation, while continuing CPEC Phase 2 industrial cooperation with China and seeing mass popular rallies for democratic rights. [3][4]`,
      keyFigures: ['Imran Khan', 'Shehbaz Sharif', 'Asim Munir (Army Chief)'],
      citationIds: [3, 4],
    },
  ],

  sources: [
    {
      id: 1,
      label: 'The Creation of Pakistan: British Partition and Feudal Landlord Power',
      publisher: 'Tariq Ali / Verso Books (Can Pakistan Survive?)',
      year: '1983',
      excerpt: 'Definitive historical materialist study of 1947 British Partition, Jagirdar feudal land monopoly, and early US military alliances.',
    },
    {
      id: 2,
      label: 'Zulfikar Ali Bhutto, PPP Socialist Nationalizations and the 1977 Zia Coup',
      publisher: 'Stanley Wolpert / Oxford University Press (Zulfi Bhutto of Pakistan)',
      year: '1993',
      excerpt: 'Historical account of 1968 student-worker revolution, 1973 socialist constitution, bank nationalization, and 1977 Zia coup.',
    },
    {
      id: 3,
      label: 'Ghost Wars: The Secret History of the CIA, Operation Cyclone and Afghanistan',
      publisher: 'Steve Coll / Penguin Books',
      year: '2004',
      excerpt: 'Documentary investigation of CIA Operation Cyclone, Zia-ul-Haq\'s staging ground, and post-1988 IMF structural adjustment.',
    },
    {
      id: 4,
      label: 'China-Pakistan Economic Corridor (CPEC), Gwadar Port and South-South Integration',
      publisher: 'Siegfried O. Wolf / Springer (The China-Pakistan Economic Corridor of the Belt and Road Initiative)',
      year: '2019',
      excerpt: 'Political economy analysis of $62B CPEC infrastructure, Gwadar deep-sea port, and Pakistan\'s strategic partnership with China.',
    },
  ],
};
