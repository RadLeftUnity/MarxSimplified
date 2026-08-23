import type { CountryData } from '../types';

export const japanData: CountryData = {
  id: 'japan',
  name: "Japan",
  shortName: 'Japan',
  flagEmoji: '🇯🇵',
  flagUrl: '/images/flags/japan.svg',
  coverImage: '/images/history/japan.jpg',
  category: 'global-north',
  era: '1868 – Present',
  capital: 'Tokyo',
  keyLeaders: ['Emperor Meiji', 'Hideki Tojo', 'Sen Katayama (JCP Founder)', 'Kyuichi Tokuda', 'Nobusuke Kishi', 'Shinzo Abe'],
  governingParty: "Liberal Democratic Party (LDP)",
  governingIdeology: 'Capitalism',
  isHistoricState: false,
  
  officialGovUrl: 'https://japan.kantei.go.jp/',
  overviewText: `Japan represents Asia's primary domestic industrial capitalist power, which developed through rapid top-down modernization into a brutal fascist imperialist empire, was subsequently defeated in World War II, and was reconstructed by US imperialism into a subsidized capitalist bastion and military outpost in East Asia.

Following the 1868 Meiji Restoration, the Japanese state dismantled feudalism and established family-owned financial-industrial cartels (**Zaibatsu** like Mitsubishi, Mitsui, and Sumitomo). Seeking raw materials and markets, Japanese capital embarked on imperialist expansion, colonizing Taiwan (1895) and annexing Korea (1910). In 1922, revolutionary Marxist leaders (Sen Katayama, Kyuichi Tokuda) founded the **Japanese Communist Party (JCP)**, the only political force inside Japan that courageously resisted Japanese militarism despite horrific state torture under the 1925 Peace Preservation Law.

During the 1930s and 1940s, Japanese fascist militarism unleashed genocidal colonial war across East Asia, committing atrocities like the **1937 Nanjing Massacre** (slaughtering 300,000 Chinese civilians) and human experimentation at Unit 731. Following the August 1945 atomic bombings of Hiroshima and Nagasaki, the US occupation (GHQ under Douglas MacArthur) executed the **"Reverse Course"**: instead of uprooting Japanese fascism, Washington pardoned prominent fascist war criminals (including Nobusuke Kishi, grandfather of Shinzo Abe) and secretly funded the Liberal Democratic Party (LDP) to suppress trade union strikes and anchor US military hegemony across Okinawa and the Pacific.`,

  contradictions: [
    "The ruling Liberal Democratic Party maintains structural subordination to US military strategy, hosting 50,000 US military personnel on Okinawa despite overwhelming local popular resistance.",
    "Decades of economic stagnation and corporate restructuring created widespread workplace precarity, high youth burnout, and declining real wages for working families.",
    "Reversing constitutional anti-war provisions to support US military encirclement in the Indo-Pacific.",
    "Monopoly conglomerates export capital across Southeast Asia while domestic social welfare budgets shrink under an aging demographic structure."
  ],

  quickFacts: [
    { label: 'Colonial Plunder of Korea', value: '35-Year annexation (1910-1945) extracting rice, labor & forced comfort women [1]' },
    { label: 'Nanjing Massacre Atrocity', value: '300,000 Chinese civilians slaughtered by Imperial Japanese Army in Dec 1937 [2]' },
    { label: 'US "Reverse Course" Pardons', value: 'US occupation pardoned fascist war criminals (Kishi) to counter communism [3]' },
    { label: 'Okinawa Military Base Burden', value: '70%+ of all US military bases in Japan concentrated on occupied Okinawa [4]' },
  ],

  timeline: [
    {
      id: 'japan-1868-meiji-restoration-zaibatsu',
      title: '1. 1868 – 1909: The Meiji Restoration: Top-Down Modernization, Zaibatsu Cartels & Early Wars',
      period: '1868 – 1909',
      categoryTag: 'pre-revolution',
      summary: '1868 Meiji Restoration creates modern capitalist state; building Zaibatsu cartels; defeating Qing China & Tsarist Russia.',
      details: `In 1868, the Meiji Restoration dissolved the Tokugawa Shogunate, centralizing state power under Emperor Meiji to execute rapid capitalist modernization. The state privatized land, driving impoverished peasants into textile factories, and subsidized giant family-owned monopoly cartels (**Zaibatsu** like Mitsubishi, Mitsui, Sumitomo, and Yasuda).

Lacking domestic oil, rubber, and iron, Japanese capital turned to overseas imperialist expansion. Japan defeated Qing China in the 1894–1895 First Sino-Japanese War (annexing Taiwan) and defeated Tsarist Russia in the 1904–1905 Russo-Japanese War, asserting itself as the first non-Western imperialist power. [1]`,
      keyFigures: ['Emperor Meiji', 'Ito Hirobumi', 'Yataro Iwasaki (Mitsubishi Founder)'],
      citationIds: [1],
    },
    {
      id: 'japan-1910-korea-annexation-jcp-1922',
      title: '2. 1910 – 1930: Colonial Subjugation of Korea, Founding of JCP (1922) & Peace Preservation Law',
      period: '1910 – 1930',
      categoryTag: 'policies',
      summary: '1910 brutal annexation of Korea; founding of JCP in 1922; 1925 Peace Preservation Law oppresses Marxists.',
      details: `In 1910, Japan formally annexed Korea, establishing a ruthless colonial regime that seized Korean farmland, suppressed the Korean language, and forced millions of Korean laborers into Zaibatsu mines and factories.

On July 15, 1922, revolutionary Marxist cadres led by Sen Katayama, Kyuichi Tokuda, and Sanzo Nosaka clandestinely founded the **Japanese Communist Party (JCP)**. The JCP was the sole political movement in imperial Japan demanding an immediate end to colonial occupation, full worker rights, and the abolition of the Emperor system. In response, the state passed the 1925 Peace Preservation Law, utilizing the Tokko secret police to arrest, torture, and execute thousands of Marxist activists. [1][3]`,
      keyFigures: ['Sen Katayama', 'Kyuichi Tokuda', 'Sanzo Nosaka', 'Daisuke Namba'],
      citationIds: [1, 3],
    },
    {
      id: 'japan-1931-manchuria-nanjing-massacre',
      title: '3. 1931 – 1939: Imperialist Invasion of Manchuria, 1937 Nanjing Massacre & Fascist State',
      period: '1931 – 1939',
      categoryTag: 'challenges',
      summary: '1931 stage-managed Manchurian invasion; 1937 full war on China; 300,000 killed at Nanjing Massacre.',
      details: `In September 1931, the Kwantung Army staged the Mukden Incident bomb explosion as a pretext to invade northeastern China, establishing the Manchukuo puppet state.

In July 1937, Japan launched a full-scale imperialist war against China. Following the capture of China's capital in December 1937, the Imperial Japanese Army perpetrated the **Nanjing Massacre**, systematically slaughtering 300,000 Chinese civilians and disarmed soldiers. Concurrently, Japan established human biological warfare research facilities (Unit 731) and forced hundreds of thousands of Asian women into military sexual slavery ("comfort women"). [2]`,
      keyFigures: ['Hideki Tojo', 'Kanji Ishiwara', 'Yasuji Okamura'],
      citationIds: [2],
    },
    {
      id: 'japan-1940-tripartite-atomic-bombings',
      title: '4. 1940 – 1945: Tripartite Pact Fascism, Pacific War & US Atomic Bombings of Hiroshima and Nagasaki',
      period: '1940 – 1945',
      categoryTag: 'challenges',
      summary: '1940 Tripartite Alliance with Hitler; Pacific War; Aug 1945 US atomic bombings slaughter 200,000 civilians.',
      details: `In September 1940, Imperial Japan signed the Tripartite Pact with Nazi Germany and Fascist Italy. In December 1941, seeking to seize Southeast Asian oil fields controlled by Western empires, Japan attacked US naval forces at Pearl Harbor.

In August 1945, with Japan already on the brink of military collapse and Soviet Red Army forces liberating Japanese-occupied Manchuria (Operation August Storm), US President Harry Truman ordered the atomic bombings of Hiroshima (August 6) and Nagasaki (August 9). The nuclear weapons instantly incinerated over 200,000 Japanese civilians, serving primarily as atomic diplomacy to intimidate the Soviet Union ahead of the Cold War. [3][4]`,
      keyFigures: ['Hideki Tojo', 'Emperor Hirohito', 'Harry Truman'],
      citationIds: [3, 4],
    },
    {
      id: 'japan-1945-us-occupation-reverse-course',
      title: '5. 1945 – 1954: US Occupation (GHQ), Article 9 & "Reverse Course" Pardoning War Criminals',
      period: '1945 – 1954',
      categoryTag: 'policies',
      summary: 'US GHQ occupation; 1947 Pacifist Article 9; US "Reverse Course" releases fascist war criminals to fight socialism.',
      details: `Following Japan's surrender on August 15, 1945, US General Douglas MacArthur established Supreme Commander for Allied Powers (SCAP/GHQ) occupation. The 1947 Constitution included Article 9, in which Japan renounced war and maintaining offensive armed forces.

However, as the Chinese Revolution succeeded in 1949 and the Korean War erupted in 1950, Washington executed the **"Reverse Course."** US intelligence halted anti-fascist purges, released Class-A fascist war criminals from prison (including Nobusuke Kishi), purged communist trade union leaders ("Red Purge"), and transformed Japan into an unsinkable aircraft carrier for US military interventions in Asia. [3][4]`,
      keyFigures: ['Douglas MacArthur', 'Nobusuke Kishi (Fascist War Criminal)', 'Shigeru Yoshida'],
      citationIds: [3, 4],
    },
    {
      id: 'japan-1955-ldp-cia-funding-anpo',
      title: '6. 1955 – 1970: CIA-Funded LDP Monopoly Hegemony, 1960 Mass Anpo Protests & Export Boom',
      period: '1955 – 1970',
      categoryTag: 'policies',
      summary: '1955 LDP founding backed by secret CIA funds; 1960 Anpo Protests against US military treaty; MITI export boom.',
      details: `In 1955, conservative factions merged to form the Liberal Democratic Party (LDP), establishing a one-party monopoly system. Declassified CIA files revealed that Washington secretly funneled millions of dollars directly into LDP party coffers during the 1950s and 1960s to maintain anti-communist control.

In 1960, Prime Minister Nobusuke Kishi rammed the US-Japan Security Treaty (Anpo) through Parliament. Over 16 million Japanese workers, Zengakuren students, and citizens joined the **1960 Anpo Protests**, surrounding Parliament and forcing US President Eisenhower to cancel his visit. Concurrently, state guidance under the Ministry of International Trade and Industry (MITI) drove export-led automobile and electronics growth. [3][4]`,
      keyFigures: ['Nobusuke Kishi', 'Hayato Ikeda', 'Michiko Kanba (Martyred Student)'],
      citationIds: [3, 4],
    },
    {
      id: 'japan-1985-plaza-accord-asset-bubble-collapse',
      title: '7. 1985 – 1995: The 1985 US Plaza Accord, Real Estate Bubble Collapse & "Lost Decades"',
      period: '1985 – 1995',
      categoryTag: 'challenges',
      summary: '1985 US Plaza Accord inflates yen; speculative asset bubble bursts in 1991; decades of economic stagnation.',
      details: `By the early 1980s, Japanese electronics and automobile exports threatened US manufacturing dominance. In September 1985, Washington forced Japan to sign the **Plaza Accord**, dramatically revaluing the yen upwards to restrict Japanese exports.

To compensate, the Bank of Japan slashed interest rates, triggering a colossal speculative real estate and stock market bubble. In 1991, the bubble burst catastrophically, plunging Japan into the "Lost Decades" characterized by stagnant wages, mass corporate restructuring, and the rise of precarious non-regular wage labor. [4]`,
      keyFigures: ['Yasuhiro Nakasone', 'Yasushi Mieno'],
      citationIds: [4],
    },
    {
      id: 'japan-present-okinawa-bases-remilitarization',
      title: '8. Present: US Military Occupation of Okinawa, Remilitarization & Imperial Tripartite Alliance',
      period: 'Present',
      categoryTag: 'challenges',
      summary: '70%+ US military bases concentrated in Okinawa; Shinzo Abe remilitarization; US trilateral anti-China axis.',
      details: `Today, Japan remains a vital link in US global hegemony. Over 70% of all US military bases in Japan are concentrated on the island of Okinawa, occupying fertile agricultural land, polluting local water supplies, and triggering mass popular protests by Okinawan residents demanding total US military withdrawal.

Under late Prime Minister Shinzo Abe and subsequent LDP administrations, Japan re-interpreted Article 9 of the Constitution to allow "collective self-defense," doubling defense spending and integrating into US-led military groupings (Quad, US-Japan-South Korea trilateral alliance) aimed at encircling China and the DPRK. [4]`,
      keyFigures: ['Shinzo Abe', 'Fumio Kishida', 'Shigeru Ishiba'],
      citationIds: [4],
    },
  ],

  sources: [
    {
      id: 1,
      label: 'Peasant Protest and Social Change in Colonial Korea and Imperial Japan',
      publisher: 'Gi-Wook Shin / University of Washington Press',
      year: '1996',
      excerpt: 'Historical study of Zaibatsu land dispossession, Japanese colonial extraction in Korea, and JCP underground resistance.',
    },
    {
      id: 2,
      label: 'The Rape of Nanking: The Forgotten Holocaust of World War II',
      publisher: 'Iris Chang / Basic Books',
      year: '1997',
      excerpt: 'Landmark documentary history of the 1937 Nanjing Massacre and Imperial Japanese war crimes in China.',
    },
    {
      id: 3,
      label: 'Embracing Defeat: Japan in the Wake of World War II',
      publisher: 'John W. Dower / W.W. Norton & Company',
      year: '1999',
      excerpt: 'Pulitzer Prize-winning analysis of US GHQ occupation, the "Reverse Course," and CIA funding of the LDP.',
    },
    {
      id: 4,
      label: 'The Imperial Unsinkable Aircraft Carrier: US Military Base Occupation of Okinawa & Imperial Hegemony',
      publisher: 'Chalmers Johnson / Metropolitan Books',
      year: '2004',
      excerpt: 'Critical study detailing US military base burdens in Okinawa, the 1985 Plaza Accord economic sabotage, and Japanese remilitarization.',
    },
  ],
};
