import type { CountryData } from '../types';

export const bangladeshData: CountryData = {
  id: 'bangladesh',
  name: 'People\'s Republic of Bangladesh',
  shortName: 'Bangladesh',
  flagEmoji: '🇧🇩',
  flagUrl: '/images/flags/bangladesh.svg',
  coverImage: '/images/history/bangladesh.jpg',
  category: 'global-south',
  era: '1971 – Present',
  capital: 'Dhaka',
  keyLeaders: ['Sheikh Mujibur Rahman (Bangabandhu)', 'Tajuddin Ahmad', 'Ziaur Rahman', 'Hussain Muhammad Ershad', 'Sheikh Hasina', 'Muhammad Yunus'],
  governingParty: "Interim Government",
  governingIdeology: 'Capitalism',
  isHistoricState: false,
  
  officialGovUrl: 'https://bangladesh.gov.bd/',
  overviewText: `Bangladesh represents a nation forged through a heroic 1971 anti-colonial war of national liberation (**The Bangladesh Liberation War**) against West Pakistani military-feudal exploitation, which defeated state genocide with Soviet and Indian assistance, and recently carried out a historic 2024 mass student-worker revolution.

Following the 1947 British Partition, East Bengal was subjected to severe economic extraction by West Pakistani military-feudal elites, who treated East Bengal as a raw jute export colony. On February 21, 1952, the **Language Movement (Bhasha Andolon)** erupted in Dhaka as students sacrificed their lives demanding recognition for Bengali. In 1970, **Sheikh Mujibur Rahman (Bangabandhu)** and the Awami League won a landslide electoral victory. On March 25, 1971, the Pakistani military launched **Operation Searchlight**, initiating a genocide that killed 3 million Bengalis. Freedom fighters (**Mukti Bahini**) waged 9 months of guerrilla war, winning independence on December 16, 1971, with Soviet and Indian military support.

Following independence, Sheikh Mujib nationalized foreign jute, tea, and banking monopolies before his tragic assassination in an August 1975 right-wing military coup. In the 1980s and 1990s, Bangladesh became the world's second-largest exporter of ready-made garments (RMG), where 4 million predominantly female workers endured sweatshop conditions (culminating in the 2013 **Rana Plaza collapse** that killed 1,134 workers). In August 2024, mass student-led protests (*Monsoon Revolution*) defeated severe state repression, forcing authoritarian Prime Minister Sheikh Hasina to flee, opening a new era of working-class democratic refoundation.`,

  quickFacts: [
    { label: '1952 Bengali Language Movement', value: 'Dhaka students martyred on Feb 21 defending native language against state suppression [1]' },
    { label: '1971 Liberation War (3M Martyrs)', value: 'Mukti Bahini guerrillas defeated West Pakistani army with Soviet & Indian assistance [2]' },
    { label: '2013 Rana Plaza Disaster (1,134 Dead)', value: 'Tragic collapse exposed global Western fast-fashion garment sweatshop exploitation [3]' },
    { label: 'August 2024 Mass Student Revolution', value: 'Mass student-worker uprising ousted 15-year regime of Sheikh Hasina [4]' },
  ],

  timeline: [
    {
      id: 'bangladesh-1947-east-bengal-jute-extraction-1952-language-movement',
      title: '1. 1947 – 1956: East Bengal Colonial Extraction & The Feb 21, 1952 Bengali Language Movement',
      period: '1947 – 1956',
      categoryTag: 'pre-revolution',
      summary: '1947 Partition; Feb 21, 1952 Language Movement in Dhaka (International Mother Language Day).',
      details: `Following the 1947 British Partition, East Bengal was made part of Pakistan. West Pakistani ruling elites extracted East Bengal's raw jute export revenues to industrialize West Pakistan, while imposing Urdu as the sole national language.

On February 21, 1952, police opened fire on university students marching in Dhaka for Bengali language rights, killing Salam, Barkat, Rafiq, and Jabbar (commemorated globally as UNESCO International Mother Language Day). [1]`,
      keyFigures: ['Salam', 'Barkat', 'Rafiq', 'Jabbar', 'Abul Kashem'],
      citationIds: [1],
    },
    {
      id: 'bangladesh-1966-six-point-movement-1970-electoral-landslide',
      title: '2. 1966 – 1970: Sheikh Mujibur Rahman, The Six-Point Movement & 1970 Landslide Victory',
      period: '1966 – 1970',
      categoryTag: 'revolution',
      summary: '1966: Sheikh Mujib proposes 6-Point regional autonomy; Awami League wins 167 of 169 East Pakistan seats in 1970.',
      details: `In 1966, **Sheikh Mujibur Rahman (Bangabandhu)** launched the Six-Point Movement demanding full regional autonomy for East Bengal.

In December 1970 general elections, the Awami League won a historic landslide, capturing 167 of 169 seats in East Pakistan, giving Mujib an absolute majority in the national parliament. The West Pakistani military junta refused to hand over power. [1][2]`,
      keyFigures: ['Sheikh Mujibur Rahman (Bangabandhu)', 'Tajuddin Ahmad'],
      citationIds: [1, 2],
    },
    {
      id: 'bangladesh-1971-operation-searchlight-mukti-bahini-liberation-war',
      title: '3. 1971: March 25 Genocide (Operation Searchlight) & The 1971 Mukti Bahini Liberation War',
      period: '1971',
      categoryTag: 'revolution',
      summary: 'March 25, 1971: Pakistani army genocide; Mukti Bahini wage guerrilla war; Dec 16 victory.',
      details: `On March 25, 1971, the Pakistani military launched **Operation Searchlight**, executing 3 million Bengali civilians and intellectuals. Millions fled as refugees to India.

Bengali freedom fighters (**Mukti Bahini**) waged 9 months of fierce guerrilla war. Supported by Indian military intervention and Soviet diplomatic backing at the UN (against US Nixon-Kissinger support for Pakistan), the Pakistani army surrendered in Dhaka on December 16, 1971. [2]`,
      keyFigures: ['Sheikh Mujibur Rahman', 'Tajuddin Ahmad', 'General M.A.G. Osmani', 'Indira Gandhi (Indian PM)'],
      citationIds: [2],
    },
    {
      id: 'bangladesh-1972-mujib-baksal-socialist-nationalization-1975-coup',
      title: '4. 1972 – 1975: Bangabandhu Sheikh Mujib, Socialist Nationalizations & August 15, 1975 Coup',
      period: '1972 – 1975',
      categoryTag: 'successes',
      summary: '1972 Constitution enshrines Socialism; Mujib nationalizes jute, banks & tea; Aug 15, 1975 coup assassination.',
      details: `In 1972, Sheikh Mujib promulgated a constitution declaring **Socialism, Nationalism, Secularism, and Democracy** as state pillars. The government nationalized 85% of industrial assets, including jute mills, textile factories, and banks.

On August 15, 1975, right-wing military officers assassinated Sheikh Mujib and most of his family in a violent military coup, halting socialist nationalization programs. [2][3]`,
      keyFigures: ['Sheikh Mujibur Rahman', 'Tajuddin Ahmad (Martyred in 1975)', 'Khandakar Mushtaq Ahmed (Coup Figure)'],
      citationIds: [2, 3],
    },
    {
      id: 'bangladesh-1975-military-dictatorships-ziaur-rahman-ershad',
      title: '5. 1975 – 1990: Military Dictatorships (Ziaur Rahman, Ershad) & IMF Restructuring',
      period: '1975 – 1990',
      categoryTag: 'challenges',
      summary: 'Generals Ziaur Rahman & Ershad rule for 15 years; privatizing state industries under IMF programs.',
      details: `From 1975 to 1990, General Ziaur Rahman (BNP founder) and General Hussain Muhammad Ershad ruled through military regimes.

Under IMF and World Bank structural adjustment programs, the military regimes denationalized public jute mills, privatized commercial banking, and introduced export processing zones. [3]`,
      keyFigures: ['Ziaur Rahman', 'Hussain Muhammad Ershad', 'Begum Khaleda Zia'],
      citationIds: [3],
    },
    {
      id: 'bangladesh-1991-garment-sweatshop-boom-rana-plaza-2013',
      title: '6. 1991 – 2013: Ready-Made Garment (RMG) Sweatshop Export Boom & 2013 Rana Plaza Collapse',
      period: '1991 – 2013',
      categoryTag: 'challenges',
      summary: 'Bangladesh becomes 2nd largest garment exporter; April 24, 2013 Rana Plaza collapse kills 1,134 workers.',
      details: `Between 1991 and 2013, Bangladesh developed into the world's second-largest exporter of fast-fashion clothing for Western brands (H&M, Walmart, Zara), employing 4 million female workers at minimum wages.

On April 24, 2013, the **Rana Plaza factory complex collapsed** in Savar due to criminal structural neglect, killing 1,134 garment workers and injuring 2,500, sparking global outrage against Western corporate exploitation. [3]`,
      keyFigures: ['Kalpona Akter (Garment Union Leader)', 'Sohel Rana (Rana Plaza Owner)'],
      citationIds: [3],
    },
    {
      id: 'bangladesh-2014-sheikh-hasina-china-bri-padma-bridge',
      title: '7. 2014 – 2023: Authoritarian Sheikh Hasina Era, China BRI Padma Bridge & Infrastructure',
      period: '2014 – 2023',
      categoryTag: 'policies',
      summary: 'Sheikh Hasina (Awami League) rules for 15 years; China builds Padma Bridge & Karnaphuli tunnel.',
      details: `Under Prime Minister **Sheikh Hasina** (daughter of Sheikh Mujib), Bangladesh achieved rapid GDP growth, constructing the mega **Padma Bridge** and partnering with China under the Belt and Road Initiative (building the Bangabandhu Tunnel under the Karnaphuli River and power plants).

However, Hasina's administration turned increasingly authoritarian, suppressing opposition parties (BNP, Jamaat), arresting journalists under the Digital Security Act, and staging rigged elections in 2014, 2018, and 2024. [3][4]`,
      keyFigures: ['Sheikh Hasina', 'Xi Jinping'],
      citationIds: [3, 4],
    },
    {
      id: 'bangladesh-present-august-2024-monsoon-revolution-muhammad-yunus',
      title: '8. Present: The August 2024 Student-Worker Revolution & Democratic Refoundation',
      period: 'Present',
      categoryTag: 'successes',
      summary: 'Aug 5, 2024: Mass student-worker uprising forces Sheikh Hasina to flee; interim government led by Muhammad Yunus.',
      details: `In July 2024, student protests against discriminatory civil service quotas erupted across Bangladesh. When security forces killed over 500 student marchers, the movement transformed into a mass popular uprising (*Monsoon Revolution*).

On August 5, 2024, hundreds of thousands of citizens stormed the presidential palace in Dhaka, forcing Sheikh Hasina to flee to India. Nobel laureate **Muhammad Yunus** was appointed head of an interim government tasked with democratic and electoral refoundation. [3][4]`,
      keyFigures: ['Nahid Islam (Student Leader)', 'Asif Mahmud', 'Muhammad Yunus', 'Sheikh Hasina (Ousted)'],
      citationIds: [3, 4],
    },
  ],

  sources: [
    {
      id: 1,
      label: 'The Feb 21, 1952 Bengali Language Movement and East Bengal Colonial Extraction',
      publisher: 'Badruddin Umar / University Press Limited (Language Movement in East Bengal)',
      year: '1970',
      excerpt: 'Definitive historical materialist study of the 1952 Language Movement, East Bengal jute revenue extraction, and early Bengali anti-colonialism.',
    },
    {
      id: 2,
      label: 'The 1971 Bangladesh Liberation War: Operation Searchlight, Mukti Bahini and Soviet Aid',
      publisher: 'Srinath Raghavan / Harvard University Press (1971: A Global History of the Creation of Bangladesh)',
      year: '2013',
      excerpt: 'Documentary investigation of 1971 Pakistani military genocide, Mukti Bahini guerrilla war, Nixon-Kissinger support for Pakistan, and Soviet aid.',
    },
    {
      id: 3,
      label: 'Garment Sweatshop Exploitation, The 2013 Rana Plaza Collapse and Working-Class Resistance',
      publisher: 'Dina M. Siddiqi / Journal of Agrarian Change',
      year: '2014',
      excerpt: 'Critical political economy of the 4-million-strong RMG garment industry, Rana Plaza 1,134 deaths, and trade union organizing.',
    },
    {
      id: 4,
      label: 'The August 2024 Monsoon Revolution: Ouster of Sheikh Hasina and Bangladesh Democratic Refoundation',
      publisher: 'Ali Riaz & Anu Muhammad / ROAPE',
      year: '2024',
      excerpt: 'Analysis of student quota protests, state violence, August 5 mass uprising storming Dhaka palace, and interim government prospects.',
    },
  ],
};
