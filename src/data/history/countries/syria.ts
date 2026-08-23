import type { CountryData } from '../types';

export const syriaData: CountryData = {
  id: 'syria',
  name: 'Syrian Arab Republic',
  shortName: 'Syria',
  flagEmoji: '🇸🇾',
  flagUrl: '/images/flags/syria.svg',
  coverImage: '/images/history/syria.jpg',
  category: 'global-south',
  era: '1920 – Present',
  capital: 'Damascus',
  keyLeaders: ['Shukri al-Quwatli', 'Gamal Abdel Nasser (UAR)', 'Hafez al-Assad', 'Bashar al-Assad', 'Ahmad al-Sharaa (HTS)'],
  governingParty: "Syrian Transitional Government",
  governingIdeology: "Ba'athism",
  isHistoricState: false,

  officialGovUrl: 'http://www.pmo.gov.sy/',
  overviewText: `Syria represents one of the most strategically contested nations in West Asia: a society that built an Arab socialist state through mass mobilization and Ba'ath Party land reform, only to be subjected to a devastating imperialist proxy war designed to destroy its sovereignty.

France colonized Syria under a League of Nations mandate (1920–1946), deliberately carving the region into sectarian administrative units to prevent unified national resistance. Following independence, Syria experienced mass class struggle: land reform abolishing feudal landlordism, nationalizations of oil and industry, and the 1958–1961 United Arab Republic experiment uniting Syria and Egypt under pan-Arab socialism.

From 1970, the Assad governments (Hafez, then Bashar) maintained Syria as a core pillar of the **Axis of Resistance**, providing the critical land corridor linking Iran to Hezbollah in Lebanon. When the 2011 Arab Spring protests emerged, the US, Saudi Arabia, Qatar, Turkey, and Israel coordinated a proxy war funneling billions in weapons and financing to armed jihadist factions (including Al-Qaeda affiliate Jabhat al-Nusra) to destroy the Syrian state. In December 2024, Hayat Tahrir al-Sham (HTS) toppled Damascus, fracturing the Axis of Resistance land corridor.`,

  contradictions: [
    "NATO, and Gulf monarchy proxy war deployed extremist insurgent groups to destroy Syrian state infrastructure. US military forces maintain illegal occupation of Syrian oilfields and wheat fields in Hasakah, plundering sovereign national resources.",
    "Unilateral US Caesar Act sanctions impose total economic blockades, prohibiting foreign reconstruction investment and medicine imports, leading to currency collapse and severe fuel rationing across Syrian cities.",
    "Iran, and Hezbollah liberated key population centers, preserving state unity. However, ongoing Israeli airstrikes and Turkish military occupation in Northern Syria obstruct complete national territorial reunification.",
    "Sovereign anti-imperialist defense protects Syrian territory from imperialist regime-change, yet post-war economic reconstruction requires firm state control over private merchant black-market profiteering."
  ],

  quickFacts: [
    { label: 'French Colonial Sectarian Divide', value: 'France deliberately divided Syria into sectarian cantons (1920) to prevent unified resistance [1]' },
    { label: '1963 Ba\'ath Land Reform', value: 'Ba\'ath Party abolishes feudal landlordism; nationalization of oil, banks & industry [2]' },
    { label: 'US-Saudi-Qatar Proxy War (2011)', value: '$10B+ funneled to armed opposition including Al-Qaeda affiliates to destroy Syrian state [3]' },
    { label: 'December 2024 HTS Offensive', value: 'HTS-led coalition topples Assad government, fracturing Iran-Hezbollah land corridor [4]' },
  ],

  timeline: [
    {
      id: 'syria-french-mandate-sectarian-division',
      title: '1. 1920 – 1946: French Colonial Mandate, Sectarian Division & Anti-Colonial Resistance',
      period: '1920 – 1946',
      categoryTag: 'pre-revolution',
      summary: 'France imposes League of Nations mandate; deliberately divides Syria into sectarian cantons; mass uprisings.',
      details: `Following WWI, France seized Syria under a League of Nations mandate. French colonial administrators applied classic divide-and-rule strategy: deliberately carving Syria into six separate sectarian and ethnic administrative cantons (including separate Alawi, Druze, and Sunni states) to fragment national identity and prevent unified resistance.

France brutally suppressed the Great Syrian Revolt (1925–1927) led by Sultan Pasha al-Atrash, killing thousands. Syrian independence was only achieved in April 1946 through sustained mass pressure after French forces bombed the Syrian parliament in 1945. The colonial-era sectarian administrative boundaries and inter-communal resentments France engineered would be weaponized repeatedly in future imperialist interventions. [1]`,
      keyFigures: ['Sultan Pasha al-Atrash', 'Shukri al-Quwatli', 'Ibrahim Hananu'],
      citationIds: [1],
    },
    {
      id: 'syria-baath-land-reform-arab-socialism-uar',
      title: '2. 1946 – 1970: Ba\'ath Party Arab Socialism, Land Reform & The United Arab Republic',
      period: '1946 – 1970',
      categoryTag: 'revolution',
      summary: '1963 Ba\'ath coup; land reform; nationalization of oil & industry; 1958–1961 UAR union with Egypt.',
      details: `Following independence, Syria experienced intense class conflict between urban merchant elites, rural landlords, the nascent working class, and the peasantry. The **Ba'ath Party** (Arab Socialist Renaissance Party) emerged as the dominant force uniting Arab nationalist intellectuals, military officers from rural minority backgrounds (particularly Alawi officers excluded from Sunni-dominated elite institutions), and peasant organizations.

In 1958, Syria and Egypt united as the **United Arab Republic (UAR)** under Nasser's pan-Arab socialist leadership. The union collapsed in 1961 following a Syrian military coup by conservative officers representing the landlord class threatened by Egyptian-style land reform. The Ba'ath Party seized power definitively in March 1963, implementing sweeping land reform: confiscating large feudal estates and redistributing land to 150,000 peasant families, nationalizing oil, banks, and heavy industry, and building free universal education and healthcare. [1][2]`,
      keyFigures: ['Michel Aflaq', 'Salah al-Din al-Bitar', 'Gamal Abdel Nasser', 'Akram al-Hawrani'],
      citationIds: [1, 2],
    },
    {
      id: 'syria-hafez-axis-of-resistance-1973-war',
      title: '3. 1970 – 2010: Hafez al-Assad, The Axis of Resistance & Anti-Imperialist Geopolitics',
      period: '1970 – 2010',
      categoryTag: 'policies',
      summary: 'Hafez consolidates Ba\'athist state; 1973 October War; Axis of Resistance; Iran-Hezbollah land corridor.',
      details: `In November 1970, General Hafez al-Assad took power in the "Corrective Movement," consolidating the state under his secular Ba'athist leadership. In October 1973, Syria and Egypt launched the **October War** to recover territories occupied by Israel in 1967. Syria recovered part of the Golan Heights but was ultimately forced back by US military resupply of Israel.

Hafez built Syria as the geographic lynchpin of regional anti-imperialist resistance: providing the critical land corridor connecting Iran to Palestinian and Lebanese resistance forces (Hezbollah). Syria hosted Palestinian liberation organization leadership following the 1982 Israeli invasion of Lebanon. Despite severe US economic sanctions, Syria maintained sovereign foreign policy independence throughout the Cold War and post-Cold War unipolar period. [1][2]`,
      keyFigures: ['Hafez al-Assad', 'Yasser Arafat', 'Ayatollah Khomeini'],
      citationIds: [1, 2],
    },
    {
      id: 'syria-2011-proxy-war-imperialist-intervention',
      title: '4. 2011 – 2024: The US-Saudi-NATO Proxy War & Destruction of the Syrian State',
      period: '2011 – 2024',
      categoryTag: 'challenges',
      summary: '2011 protests weaponized; $10B+ CIA/Saudi/Qatar arms pipelines; HTS topples Damascus Dec 2024.',
      details: `When genuine popular protests against the Assad government emerged in 2011 during the Arab Spring, the US, Saudi Arabia, Qatar, Turkey, and Israel rapidly moved to weaponize and hijack the movement to destroy Syrian sovereignty. The CIA launched **Operation Timber Sycamore**, the largest covert weapons program in US history at the time, funneling $10B+ in weapons through Jordan and Turkey to armed factions. Saudi Arabia and Qatar directed funds specifically to jihadist groups, including Jabhat al-Nusra (Al-Qaeda Syria affiliate).

The resulting proxy war killed over 500,000 people, displaced 13 million, and destroyed Syria's industrial and agricultural infrastructure. The US military illegally occupied the oil-rich northeastern provinces (Al-Jazeera region), looting Syrian crude to deny state revenues. In December 2024, a rapid HTS-led military offensive led by Ahmad al-Sharaa (formerly Abu Mohammad al-Jolani of Jabhat al-Nusra) toppled the Assad government, fracturing the Axis of Resistance land corridor between Iran and Hezbollah. [3][4]`,
      keyFigures: ['Bashar al-Assad', 'Ahmad al-Sharaa (HTS / Abu Muhammad al-Jolani)', 'Barack Obama', 'King Salman', 'Recep Tayyip Erdogan'],
      citationIds: [3, 4],
    },
  ],

  sources: [
    {
      id: 1,
      label: 'A History of Syria in the Twentieth Century',
      publisher: 'Sami Moubayed / Saqi Books',
      year: '2006',
      excerpt: 'Comprehensive history of French colonialism, Syrian independence, Ba\'ath Party land reform, and the Arab socialist state.',
    },
    {
      id: 2,
      label: 'Asad: The Struggle for the Middle East',
      publisher: 'Patrick Seale / University of California Press',
      year: '1989',
      excerpt: 'Definitive analysis of Hafez al-Assad\'s consolidation of Ba\'athist state power and Syria\'s role in the Axis of Resistance.',
    },
    {
      id: 3,
      label: 'Syria Burning: A Short History of a Catastrophe',
      publisher: 'Charles Glass / Verso Books',
      year: '2015',
      excerpt: 'Analysis of CIA Operation Timber Sycamore, Saudi-Qatari jihadi financing, and the destruction of Syrian sovereignty.',
    },
    {
      id: 4,
      label: 'The Fall of Damascus & HTS December 2024 Offensive',
      publisher: 'Al Jazeera Investigations & Middle East Eye Reports',
      year: '2024',
      excerpt: 'Documentation of the December 2024 HTS offensive, Ahmad al-Sharaa\'s military campaign, and the fragmentation of the Axis of Resistance land corridor.',
    },
  ],
};
