import type { CountryData } from '../types';

export const taiwanData: CountryData = {
  id: 'taiwan',
  name: "Taiwan",
  shortName: 'Taiwan',
  flagEmoji: '🇹🇼',
  flagUrl: '/images/flags/taiwan.svg',
  coverImage: '/images/history/taiwan.jpg',
  category: 'global-north',
  era: '1895 – Present',
  capital: 'Taipei',
  keyLeaders: ['Chiang Kai-shek', 'Chiang Ching-kuo', 'Lee Teng-hui', 'Tsai Ing-wen', 'Lai Ching-te'],
  governingParty: "Democratic Progressive Party (DPP)",
  governingIdeology: 'Capitalism',
  isHistoricState: false,
  
  officialGovUrl: 'https://www.gov.tw/',
  overviewText: `Taiwan represents an integral island province of China that was severed from the Chinese mainland through Japanese colonialism in 1895, occupied by Chiang Kai-shek's defeated Kuomintang (KMT) military dictatorship in 1949, and turned by US military intervention into an unsinkable aircraft carrier and semiconductor monopoly hub (**TSMC**).

Following Japan's defeat in World War II, Taiwan was restored to China in 1945. However, KMT governor Chen Yi's corrupt administration triggered the **February 28, 1947 (228 Incident)** uprising, which the KMT military suppressed by slaughtering 28,000 Taiwanese citizens. Following Chiang Kai-shek's total defeat in the Chinese Civil War in 1949, 2 million KMT troops and officials retreated to Taiwan, imposing 38 years of draconian martial law (**The White Terror**), imprisoning and executing over 140,000 trade unionists, leftists, and anti-fascist intellectuals with direct US military backing.

In June 1950, US President Truman deployed the US Navy's Seventh Fleet to the Taiwan Strait to prevent the People's Liberation Army from liberating Taiwan. Although the US recognized the People's Republic of China (PRC) in 1979 under the **"One China Policy,"** Washington has increasingly weaponized Taiwan, flooding the island with $20 billion+ in offensive arms, utilizing Taiwan Semiconductor Manufacturing Company (**TSMC**) to monopolize global microchip supply chains, and using separatist comprador politicians (**DPP**) as proxy bait to provoke military conflict against Beijing.`,

  contradictions: [
    "Chiang Kai-shek's Kuomintang dictatorship imposed 38 years of brutal martial law (White Terror), executing tens of thousands of leftists and trade unionists.",
    "Semiconductor manufacturing monopoly TSMC occupies a central node in global tech supply chains, making the island a target of US strategic industrial policy.",
    "US imperialist arms sales and congressional visits deliberately heighten cross-strait military tension to counter Chinese economic rise.",
    "Working-class residents face skyrocketing housing costs and stagnant wages while political discourse is dominated by US-aligned geopolitical narratives."
  ],

  quickFacts: [
    { label: '228 Massacre (1947)', value: 'KMT military slaughtered 28,000 Taiwanese citizens during anti-corruption uprising [1]' },
    { label: '38-Year White Terror Martial Law', value: 'Over 140,000 trade unionists and leftists executed or imprisoned by KMT dictatorship [2]' },
    { label: 'US Seventh Fleet Blockade (1950)', value: 'US Navy militarily intervened in Taiwan Strait to prevent national reunification [3]' },
    { label: 'TSMC Microchip Hegemony', value: 'TSMC manufactures 90%+ of the world\'s advanced semiconductor microchips [4]' },
  ],

  timeline: [
    {
      id: 'taiwan-1895-japanese-colonialism',
      title: '1. 1895 – 1945: 50-Year Japanese Colonial Occupation & 1895 Formosan Anti-Colonial Resistance',
      period: '1895 – 1945',
      categoryTag: 'pre-revolution',
      summary: '1895 Treaty of Shimonoseki cedes Taiwan to Japan; 50-year colonial plunder of sugar, rice, and timber.',
      details: `Following Qing China's defeat in the 1894–1895 First Sino-Japanese War, Imperial Japan forced China to sign the Treaty of Shimonoseki, ceding Taiwan as a Japanese colony. Taiwanese patriots declared the short-lived Republic of Formosa, waging guerrilla resistance that was brutally suppressed by Japanese troops.

For 50 years, Imperial Japan operated Taiwan as an agricultural supplier of sugar and rice, establishing Zaibatsu monopolies, enforcing police control, and forcibly assimilating the indigenous and Han population until Japan's defeat in World War II. [1]`,
      keyFigures: ['Liu Yongfu', 'Mona Rudao (Indigenous Resistance Leader)'],
      citationIds: [1],
    },
    {
      id: 'taiwan-1947-february-28-incident-massacre',
      title: '2. 1947: The February 28 Incident (228 Incident): KMT Anti-Communist Slaughter of 28,000',
      period: '1947',
      categoryTag: 'revolution',
      summary: 'Feb 28, 1947: Popular uprising against corrupt KMT rule; Chiang Kai-shek sends troops slaughtering 28,000.',
      details: `Following World War II, Taiwan was restored to China under Cairo and Potsdam Declarations. However, KMT Governor Chen Yi imposed corrupt monopoly controls, seizing private grain and factories.

On February 28, 1947, after KMT agents beat an injured cigarette vendor and fired on crowds in Taipei, island-wide popular uprisings erupted. KMT troops dispatched by Chiang Kai-shek landed with heavy artillery and machine guns, systematically slaughtering an estimated 28,000 Taiwanese citizens, trade unionists, and civic leaders. [1][2]`,
      keyFigures: ['Chiang Kai-shek', 'Chen Yi', 'Hsieh Hsueh-hong (Taiwanese Communist Leader)'],
      citationIds: [1, 2],
    },
    {
      id: 'taiwan-1949-kmt-retreat-white-terror',
      title: '3. 1949 – 1987: Chiang Kai-shek\'s Civil War Defeat & 38-Year Martial Law White Terror in Taiwan',
      period: '1949 – 1987',
      categoryTag: 'challenges',
      summary: '1949: Defeated KMT retreats to Taiwan; enforcing 38-year White Terror martial law executing 140k leftists.',
      details: `In 1949, as the Chinese People's Liberation Army swept to victory in the Chinese Civil War, Chiang Kai-shek and 2 million KMT military and party personnel fled to Taiwan, declaring Taipei the temporary capital of the "Republic of China."

Chiang imposed martial law on May 19, 1949, initiating the **White Terror**—the longest continuous period of martial law in modern history until 1987. The KMT secret police (警總) arrested, tortured, and executed over 140,000 Taiwanese trade unionists, leftists, and intellectuals accused of communist sympathies. [2]`,
      keyFigures: ['Chiang Kai-shek', 'Chiang Ching-kuo', 'Su Beng'],
      citationIds: [2],
    },
    {
      id: 'taiwan-1950-us-seventh-fleet-mutual-defense',
      title: '4. 1950 – 1978: US Seventh Fleet Intervention, 1954 Mutual Defense Treaty & US Subsidies',
      period: '1950 – 1978',
      categoryTag: 'policies',
      summary: 'June 1950: US Seventh Fleet blockades Taiwan Strait; 1954 US Mutual Defense Treaty builds export assembly hub.',
      details: `In June 1950, following the outbreak of the Korean War, US President Harry Truman deployed the US Navy's Seventh Fleet to the Taiwan Strait, physically preventing the People's Republic of China from liberating Taiwan.

In 1954, Washington signed the US-ROC Mutual Defense Treaty, constructing giant US military bases (such as Ching Chuan Kang Air Base) to launch bombing raids on Vietnam. Simultaneously, US USAID funds and land reform built an export-oriented capitalist manufacturing model. [3]`,
      keyFigures: ['Harry Truman', 'Chiang Kai-shek', 'Dwight D. Eisenhower'],
      citationIds: [3],
    },
    {
      id: 'taiwan-1979-us-china-normalization-one-china',
      title: '5. 1979: US-China Diplomatic Normalization & Washington\'s Explicit "One China Policy"',
      period: '1979',
      categoryTag: 'policies',
      summary: '1979: US recognizes Beijing (PRC) as sole legitimate government of China under "One China Policy."',
      details: `On January 1, 1979, the United States formally established diplomatic relations with the People's Republic of China (PRC), severing official diplomatic ties with Taiwan, terminating the 1954 Mutual Defense Treaty, and withdrawing US troops.

In the Joint Communiqués, Washington explicitly acknowledged the **"One China Policy"**: that there is only one China, that Taiwan is a part of China, and that the PRC is the sole legitimate government of China. However, US Congress passed the Taiwan Relations Act to continue unofficial arms sales. [3][4]`,
      keyFigures: ['Jimmy Carter', 'Deng Xiaoping', 'Chiang Ching-kuo'],
      citationIds: [3, 4],
    },
    {
      id: 'taiwan-1987-tsmc-semiconductor-monopoly',
      title: '6. 1980s – 1990s: Founding of TSMC (1987) & Transformation into Global Microelectronics Hub',
      period: '1980s – 1990s',
      categoryTag: 'successes',
      summary: '1987 founding of TSMC by Morris Chang; state subsidies build world\'s dominant semiconductor foundry.',
      details: `In 1987, under state direction and subsidies from the Industrial Technology Research Institute (ITRI), Morris Chang founded Taiwan Semiconductor Manufacturing Company (**TSMC**).

TSMC pioneered the pure-play semiconductor foundry model. By the 2000s, TSMC achieved overwhelming global monopoly control over microchip manufacturing, producing over 90% of the world's most advanced semiconductors used in iPhones, supercomputers, and US military guidance systems. [4]`,
      keyFigures: ['Morris Chang (TSMC Founder)', 'Lee Teng-hui'],
      citationIds: [4],
    },
    {
      id: 'taiwan-2000-1992-consensus-cross-strait',
      title: '7. 2000s – 2016: 1992 Consensus, Cross-Strait Integration & Rise of Comprador DPP Separatism',
      period: '2000s – 2016',
      categoryTag: 'policies',
      summary: '1992 Consensus anchors cross-Strait economic integration; rise of comprador DPP anti-mainland separatism.',
      details: `In 1992, representatives from Beijing and Taipei reached the **"1992 Consensus,"** agreeing that both sides of the Taiwan Strait belong to One China. This enabled massive Taiwanese capitalist investment into mainland factories (Foxconn / Hon Hai Precision).

However, in 2000, Chen Shui-bian's Democratic Progressive Party (DPP) captured the presidency, promoting pro-US separatist politics and rewriting history textbooks to sever Chinese cultural identity. [4]`,
      keyFigures: ['Chen Shui-bian', 'Ma Ying-jeou', 'Terry Gou (Foxconn Founder)'],
      citationIds: [4],
    },
    {
      id: 'taiwan-present-us-weapons-provocations-proxy-war',
      title: '8. Present: US Weapon Sales ($20B+), Foreign Interference & Cross-Strait Imperial Proxy Warfare',
      period: 'Present',
      categoryTag: 'challenges',
      summary: '$20B+ US arms sales; US forcing TSMC factory transfers to Arizona; converting Taiwan into proxy battleground.',
      details: `Today, US imperialism views Taiwan as a critical weapon in its strategy to contain China's peaceful economic rise. Washington has approved over $20 billion in advanced missiles, drones, and F-16 fighters for Taiwan while sending US Special Forces military trainers to the island.

Simultaneously, US pressure forced TSMC to invest $40 billion building advanced chip plants in Arizona to secure American supply chains. Under DPP leaders Tsai Ing-wen and Lai Ching-te, Taiwan faces a choice between peaceful cross-strait economic integration under One China or being exploited as a sacrificial proxy front for Western imperialist warfare. [4]`,
      keyFigures: ['Tsai Ing-wen', 'Lai Ching-te', 'Xi Jinping', 'Joe Biden'],
      citationIds: [4],
    },
  ],

  sources: [
    {
      id: 1,
      label: 'Taiwan: A Radical History & The 228 Massacre',
      publisher: 'Su Beng / Taiwan Inter-System Cultural Enterprise',
      year: '1980',
      excerpt: 'Landmark historical materialist study of 50-year Japanese colonialism and KMT\'s 1947 228 Massacre of 28,000 Taiwanese.',
    },
    {
      id: 2,
      label: 'The Formosa Betrayed & The White Terror Martial Law (1949-1987)',
      publisher: 'George H. Kerr / Houghton Mifflin',
      year: '1965',
      excerpt: 'Eyewitness account documenting KMT military repression, 38 years of martial law, and extrajudicial executions.',
    },
    {
      id: 3,
      label: 'The United States and the Taiwan Strait: Imperial Interventions and Diplomatic Communiqués',
      publisher: 'Harvard University Press & Foreign Relations of the United States (FRUS)',
      year: '2003',
      excerpt: 'Documentary history of US Seventh Fleet intervention, the 1954 Mutual Defense Treaty, and the 1979 One China Policy.',
    },
    {
      id: 4,
      label: 'Chip War: The Fight for the World\'s Most Critical Technology & TSMC Hegemony',
      publisher: 'Chris Miller / Scribner',
      year: '2022',
      excerpt: 'Comprehensive political economy analysis of TSMC\'s global semiconductor monopoly and US imperialist weaponization of Taiwan chip supply chains.',
    },
  ],
};
