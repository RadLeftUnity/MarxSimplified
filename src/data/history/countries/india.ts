import type { CountryData } from '../types';

export const indiaData: CountryData = {
  id: 'india',
  name: "India",
  shortName: 'India',
  flagEmoji: '🇮🇳',
  flagUrl: '/images/flags/india.svg',
  coverImage: '/images/history/india.jpg',
  category: 'global-south',
  era: '1857 – Present',
  capital: 'New Delhi',
  keyLeaders: ['Mahatma Gandhi', 'Jawaharlal Nehru', 'Subhas Chandra Bose', 'Bhagat Singh', 'B.R. Ambedkar', 'Charu Majumdar', 'Narendra Modi'],
  governingParty: "Bharatiya Janata Party (BJP)",
  governingIdeology: 'Capitalism',
  isHistoricState: false,
  
  officialGovUrl: 'https://www.india.gov.in/',
  overviewText: `India represents a vast civilizational nation shaped by 200 years of British East India Company and Crown plunder ($45 trillion extracted by British colonialism), which achieved anti-colonial independence through a combination of mass non-cooperation, radical working-class strikes, and armed revolutionary struggles, only to be subjected to the catastrophic 1947 British Partition.

The 1857 First War of Independence (Sepoy Mutiny) ignited nationwide resistance against British colonial deindustrialization. Marxist revolutionaries like **Bhagat Singh** (Hindustan Socialist Republican Association) and **Subhas Chandra Bose** (Indian National Army) fought for anti-colonial liberation. Following formal independence on August 15, 1947, Prime Minister **Jawaharlal Nehru** adopted a state-led developmental model, co-founding the **Non-Aligned Movement (NAM)** at the 1955 Bandung Conference and receiving heavy industrial steel and defense aid from the Soviet Union.

In 1967, the **Naxalbari Uprising** in West Bengal launched the Naxalite communist peasant movement against feudal landlordism, while the CPI(M) governed West Bengal and Kerala, implementing radical land reforms. In 1991, India adopted neoliberal LPG (Liberalization, Privatization, Globalization) policies, creating billionaire monopolies (Adani, Ambani) alongside acute agrarian distress. In 2020–2021, over 250 million Indian workers and farmers launched the historic **Indian Farmers' Strike**, forcing the government to repeal corporate agribusiness laws. Today, India co-leads **BRICS** while balancing trade sovereignty with China and Russia.`,

  contradictions: [
    "Narendra Modi's ruling BJP government weaponizes sectarian Hindutva religious nationalism to divide Hindu and Muslim workers, diverting public outrage away from severe youth unemployment and poverty.",
    "Ports, and energy networks to enrich allied corporate monopolies (Adani and Ambani), leading to massive wealth concentration while real rural wages declined.",
    "Over 250 million workers and farmers launched historic general strikes and year-long Delhi border blockades in 2020-2021, forcing the repeal of corporate farm deregulation laws and demonstrating mass resistance.",
    "Rural communist insurgents (CPI-Maoist) continue armed resistance against mining monopoly land grabs in the Red Corridor, while the Indian state balances non-aligned BRICS membership with US Quad security alignment."
  ],

  quickFacts: [
    { label: 'British Colonial Plunder ($45 Trillion)', value: 'British Raj extracted $45T from India, engineering famines (1943 Bengal Famine: 3M dead) [1]' },
    { label: 'Revolutionary Anti-Colonial Struggle', value: 'Bhagat Singh, Bose & royal naval mutinies shattered British colonial military rule [2]' },
    { label: 'Non-Aligned Leadership & Soviet Aid', value: 'Nehru co-founded NAM (Bandung 1955); Soviet Union funded steel plants & heavy industry [3]' },
    { label: '2020–2021 Mass Farmers\' Strike (250M)', value: 'World\'s largest strike forced repeal of corporate agribusiness laws [4]' },
  ],

  timeline: [
    {
      id: 'india-1857-sepoy-mutiny-british-crown-takeover',
      title: '1. 1857 – 1858: The 1857 First War of Independence (Sepoy Mutiny) & Crown Rule',
      period: '1857 – 1858',
      categoryTag: 'revolution',
      summary: 'May 1857: Indian sepoys & peasants rise against East India Company; British Crown annexes India.',
      details: `In May 1857, Indian soldiers (sepoys) mutinied in Meerut, uniting Hindu and Muslim peasants and feudal rulers against British East India Company plunder, land taxation, and religious desecration.

British military forces brutally crushed the uprising, hanging tens of thousands of rebels, liquidating the East India Company, and placing India under direct British Crown rule (*British Raj*). [1]`,
      keyFigures: ['Rani Lakshmibai of Jhansi', 'Mangal Pandey', 'Bahadur Shah Zafar'],
      citationIds: [1],
    },
    {
      id: 'india-1900-bhagat-singh-subhas-chandra-bose-revolution',
      title: '2. 1900 – 1945: Bhagat Singh, Subhas Chandra Bose & Revolutionary Anti-Imperialism',
      period: '1900 – 1945',
      categoryTag: 'revolution',
      summary: '1931 martyrdom of Marxist Bhagat Singh; Bose forms Indian National Army; 1943 Bengal Famine.',
      details: `In March 1931, 23-year-old Marxist revolutionary **Bhagat Singh** was executed by British authorities for his armed struggle against British imperialism, becoming a working-class icon.

During WWII, **Subhas Chandra Bose** formed the Indian National Army (INA) to fight British colonial troops, while British Prime Minister Winston Churchill diverted grain reserves from Bengal, engineering the **1943 Bengal Famine** that starved 3 million Bengalis to death. [1][2]`,
      keyFigures: ['Bhagat Singh', 'Subhas Chandra Bose', 'Chandrashekhar Azad', 'Winston Churchill (Colonial Culprit)'],
      citationIds: [1, 2],
    },
    {
      id: 'india-1946-telangana-rebellion-royal-navy-mutiny-partition',
      title: '3. 1946 – 1947: Telangana Peasant Rebellion, Royal Indian Navy Mutiny & 1947 Partition',
      period: '1946 – 1947',
      categoryTag: 'revolution',
      summary: 'Feb 1946 Royal Indian Navy mutiny; Telangana communist peasant war; Aug 15, 1947 British Partition.',
      details: `In February 1946, 20,000 sailors of the Royal Indian Navy mutinied in Bombay, raising red flags alongside Congress and Muslim League flags, shattering British military authority. Concurrently, the Communist Party led the **Telangana Peasant Rebellion** (1946–1951) against Nizam feudal landlords.

Fearing unified socialist revolution, British imperialism engineered the hasty **1947 Partition**, displacing 15 million people and killing over 1 million in communal massacres. [2]`,
      keyFigures: ['Mahatma Gandhi', 'Jawaharlal Nehru', 'Muhammad Ali Jinnah', 'Lord Mountbatten'],
      citationIds: [2],
    },
    {
      id: 'india-1947-nehru-non-aligned-movement-soviet-aid',
      title: '4. 1947 – 1965: Jawaharlal Nehru, Non-Aligned Movement (Bandung 1955) & Soviet Industrial Aid',
      period: '1947 – 1965',
      categoryTag: 'policies',
      summary: 'Nehru state-led Five-Year Plans; co-founding Non-Aligned Movement; Soviet Union builds Bhilai steel.',
      details: `Prime Minister **Jawaharlal Nehru** established a state-led mixed economy, founding Five-Year Plans and institutes of technology. In 1955, Nehru co-founded the **Non-Aligned Movement (NAM)** at the Bandung Conference.

The Soviet Union provided massive industrial assistance, constructing the Bhilai Steel Plant, heavy engineering complexes, and supplying military jet technology to preserve Indian sovereignty. [2][3]`,
      keyFigures: ['Jawaharlal Nehru', 'B.R. Ambedkar (Author of Constitution)', 'Zhou Enlai'],
      citationIds: [2, 3],
    },
    {
      id: 'india-1967-naxalbari-uprising-cpim-kerala-emergency',
      title: '5. 1967 – 1984: The Naxalbari Peasant Uprising, CPI(M) Land Reforms & Indira Gandhi Emergency',
      period: '1967 – 1984',
      categoryTag: 'challenges',
      summary: 'May 1967 Naxalbari peasant revolt; CPI(M) land reform in Kerala; 1975-1977 Indira Gandhi Emergency.',
      details: `In May 1967, **Charu Majumdar** and Kanu Sanyal led an armed peasant uprising in Naxalbari, West Bengal, launching the Naxalite communist movement against feudal landlords. In Kerala and West Bengal, elected CPI(M) governments enacted landmark land reforms, redistributing land to millions of tenant farmers.

Faced with mass worker strikes led by Jayaprakash Narayan, Prime Minister Indira Gandhi imposed authoritarian **Emergency Rule (1975–1977)**, imprisoning 100,000 opposition activists. [3]`,
      keyFigures: ['Charu Majumdar', 'Indira Gandhi', 'E.M.S. Namboodiripad (Kerala CPI-M Leader)'],
      citationIds: [3],
    },
    {
      id: 'india-1991-neoliberal-lpg-reforms-corporate-monopolies',
      title: '6. 1991 – 2013: 1991 Neoliberal LPG Reforms, Corporate Monopolies & Agrarian Distress',
      period: '1991 – 2013',
      categoryTag: 'challenges',
      summary: '1991 Manmohan Singh LPG privatization reforms; 300,000 farmer suicides due to debt.',
      details: `In 1991, facing a balance-of-payments crisis, Finance Minister Manmohan Singh enacted neoliberal LPG reforms (Liberalization, Privatization, Globalization) under IMF dictates, slashing agricultural subsidies.

Privatization created billionaire monopoly oligarchs (Adani, Ambani) while plunging rural agriculture into crisis, leading to the heartbreaking suicide of over 300,000 indebted Indian farmers between 1995 and 2015. [3][4]`,
      keyFigures: ['P.V. Narasimha Rao', 'Manmohan Singh', 'Gautam Adani', 'Mukesh Ambani'],
      citationIds: [3, 4],
    },
    {
      id: 'india-2014-modi-hindutva-monopoly-capital-farmers-strike',
      title: '7. 2014 – 2021: Narendra Modi (BJP), Corporate Hindutva & The Historic 2020–2021 Farmers\' Strike',
      period: '2014 – 2021',
      categoryTag: 'revolution',
      summary: 'BJP Hindutva rule; Nov 2020: 250M workers & farmers launch world\'s largest strike, defeating farm laws.',
      details: `In 2014, Narendra Modi's BJP took power, combining far-right Hindutva nationalism with hyper-corporate privatization favoring the Adani and Ambani monopolies.

In September 2020, Modi passed three pro-corporate farm laws. In response, Samyukt Kisan Morcha organized a historic 1-year siege of Delhi, supported by a 250-million-strong general worker strike in November 2020. In November 2021, Modi was forced into a historic humiliation, repealing all three farm laws. [4]`,
      keyFigures: ['Narendra Modi', 'Rakesh Tikait (Farmer Leader)', 'Gautam Adani'],
      citationIds: [4],
    },
    {
      id: 'india-present-brics-china-russia-trade-working-class',
      title: '8. Present: BRICS Core Leadership, Sovereign China/Russia Trade Balance & Trade Union Fronts',
      period: 'Present',
      categoryTag: 'successes',
      summary: 'Core BRICS state; expanding rupee-ruble & rupee-yuan trade; mass trade union general strikes.',
      details: `Today, India stands as a core member of **BRICS**, expanding local currency settlement systems for crude oil and industrial goods with Russia and China while resisting Western unilateral sanctions.

Domestically, Indian trade unions (CITU, AITUC) and peasant organizations continue organizing massive national general strikes for minimum wage laws, land rights, and an end to privatization. [3][4]`,
      keyFigures: ['Narendra Modi', 'Xi Jinping', 'Vladimir Putin'],
      citationIds: [3, 4],
    },
  ],

  sources: [
    {
      id: 1,
      label: 'Inglorious Empire: What the British Did to India ($45 Trillion Extraction)',
      publisher: 'Shashi Tharoor / Penguin Random House',
      year: '2017',
      excerpt: 'Definitive historical political economy documenting $45 trillion British plunder, deindustrialization, and manufactured famines.',
    },
    {
      id: 2,
      label: 'Bhagat Singh and the Revolutionary Movement in India',
      publisher: 'Bipan Chandra / Vikas Publishing',
      year: '1979',
      excerpt: 'Historical study of Marxist revolutionary Bhagat Singh, 1946 Royal Indian Navy mutiny, and 1947 British Partition.',
    },
    {
      id: 3,
      label: 'India After Gandhi: The History of the World\'s Largest Democracy & The Naxalbari Movement',
      publisher: 'Ramachandra Guha / HarperCollins',
      year: '2007',
      excerpt: 'Comprehensive account of Nehru\'s non-alignment, Soviet industrial aid, Naxalbari peasant uprising, and 1991 LPG reforms.',
    },
    {
      id: 4,
      label: 'The Historic 2020-2021 Indian Farmers\' Revolt and Corporate Hindutva Monopoly Capital',
      publisher: 'Prabhat Patnaik & Utsa Patnaik / Tulika Books',
      year: '2021',
      excerpt: 'Marxist political economy analysis of 250M-strong general strike, repeal of farm laws, Adani/Ambani monopolies, and BRICS trade.',
    },
  ],
};
