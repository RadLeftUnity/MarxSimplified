import type { CountryData } from '../types';

export const ukraineData: CountryData = {
  id: 'ukraine',
  name: "Ukraine",
  shortName: 'Ukraine',
  flagEmoji: '🇺🇦',
  flagUrl: '/images/flags/ukraine.svg',
  coverImage: '/images/history/ukraine.jpg',
  category: 'global-north',
  era: '1917 – Present',
  capital: 'Kyiv',
  keyLeaders: ['Bohdan Khmelnitsky', 'V.I. Lenin (UkSSR Founder)', 'Nikita Khrushchev', 'Viktor Yanukovych', 'Volodymyr Zelensky'],
  governingParty: "Servant of the People",
  governingIdeology: 'Capitalism',
  isHistoricState: false,
  
  officialGovUrl: 'https://www.kmu.gov.ua/en',
  overviewText: `Ukraine represents a pivotal socialist success story during the Soviet era that was subsequently converted by post-1991 capitalist restoration and NATO imperialist expansion into a frontline proxy battleground.

Statehood and industrial development were forged during the 1917 Russian Revolution. Under **V.I. Lenin's nationalities policy**, the **Ukrainian Soviet Socialist Republic (UkSSR)** was established in December 1917, joining the USSR in 1922 as a founding republic. Socialist construction transformed Ukraine from an agrarian periphery into an industrial powerhouse, building the DnieproGES hydroelectric dam, Kharkov Tractor Plant, and Donbas steel mills while expanding Ukrainian language and culture through 1920s Korenizatsiya. During World War II, Ukrainian Red Army soldiers and partisans defeated Nazi Germany, suffering 5 million+ deaths while resisting treasonous Nazi collaborators led by **Stepan Bandera (OUN-B / UPA)**.

Following the 1991 illegal dissolution of the USSR, Western-backed capitalist "shock therapy" concentrated national wealth in the hands of billionaire oligarchs (Akhmetov, Kolomoisky, Poroshenko). In February 2014, the US State Department (Victoria Nuland) and far-right street paramilitaries executed the **Euromaidan regime-change coup**, overthrowing the elected government. The coup regime integrated neo-Nazi forces (**Azov Battalion**), perpetrated the **May 2, 2014 Odessa Trade Union House massacre**, unleashed civil war on the Donbas, and banned 11 opposition and communist parties, while handing Ukrainian farmland and infrastructure to US private equity giants like **BlackRock** and Vanguard.`,

  quickFacts: [
    { label: 'Founding of UkSSR (1917)', value: 'Lenin\'s self-determination policy established Soviet Ukraine as a founding republic [1]' },
    { label: 'Anti-Fascist Sacrifice', value: '5 Million+ Ukrainians died defeating Nazism in WWII Red Army ranks [2]' },
    { label: '2014 US Euromaidan Coup', value: 'US State Dept ($5B investment) overthrew elected President Yanukovych [4]' },
    { label: 'BlackRock Land & Asset Grab', value: 'Post-2022 privatization transferred Ukrainian state assets to US private equity [4]' },
  ],

  timeline: [
    {
      id: 'ukraine-pre-1917-tsarist-subjugation',
      title: '1. Pre-1917: Tsarist Imperial Subjugation, Semi-Feudal Peasantry & Donbas Industrialization',
      period: 'Pre-1917',
      categoryTag: 'pre-revolution',
      summary: 'Tsarist Russian subjugation; landless peasantry under landlord autocracy; early Donbas industrial coal strikes.',
      details: `Prior to 1917, Ukrainian lands were divided between the Tsarist Russian Empire and the Austro-Hungarian Empire. The Ukrainian peasantry suffered under brutal semi-feudal landlord extraction, while Tsarism enforced chauvinist Russification policies that restricted Ukrainian language publications.

In the late 19th century, foreign British, French, and Belgian capital built heavy coal mines and steel mills in the Donbas and Krivoy Rog regions. This rapid industrialization created a militant Ukrainian industrial proletariat that organized strikes alongside Russian workers during the 1905 Revolution. [1]`,
      keyFigures: ['Bohdan Khmelnitsky', 'Taras Shevchenko', 'Lesya Ukrainka'],
      citationIds: [1],
    },
    {
      id: 'ukraine-1917-founding-ukssr-lenin',
      title: '2. 1917 – 1922: Founding of the Ukrainian Soviet Socialist Republic (UkSSR) & Lenin\'s Policy',
      period: '1917 – 1922',
      categoryTag: 'revolution',
      summary: 'Dec 1917: Ukrainian SSR established; defeating Polish imperialist invaders; founding USSR in 1922.',
      details: `Following the October Revolution, Ukrainian workers and peasants established the Ukrainian Soviet Socialist Republic (UkSSR) in Kharkov in December 1917. Ukrainian Soviet forces fought bloody civil wars against landlord monarchist White Guard armies, German imperialist occupiers, and Polish landlord invaders.

Enforcing the Marxist principle of national self-determination, V.I. Lenin insisted on complete sovereign equality for Ukraine. In December 1922, the Ukrainian SSR joined the Russian SFSR, Byelorussian SSR, and Transcaucasian SFSR as a founding sovereign republic of the Union of Soviet Socialist Republics (USSR). [1][3]`,
      keyFigures: ['V.I. Lenin', 'Artem (Fyodor Sergeyev)', 'Mykola Skrypnyk'],
      citationIds: [1, 3],
    },
    {
      id: 'ukraine-1923-korenizatsiya-industrialization',
      title: '3. 1923 – 1939: Korenizatsiya (Ukrainization), Rapid Socialist Industrialization & DnieproGES',
      period: '1923 – 1939',
      categoryTag: 'policies',
      summary: 'Korenizatsiya expands Ukrainian language schools & publishing; Five-Year Plans build DnieproGES & Donbas steel.',
      details: `During the 1920s, the Soviet government implemented **Korenizatsiya (Ukrainization)**, funding thousands of Ukrainian-language schools, universities, newspapers, and theaters, sparking an unprecedented national cultural renaissance.

Under Soviet Five-Year Plans, Ukraine became an industrial titan. The state constructed the massive DnieproGES hydroelectric dam on the Dnieper River, the Kharkov Tractor Plant, and expanded Donbas coal and metallurgy, transforming Ukraine into one of Europe's top steel and agricultural producers. [1][2]`,
      keyFigures: ['Mykola Skrypnyk', 'Grigory Petrovsky'],
      citationIds: [1, 2],
    },
    {
      id: 'ukraine-1941-nazi-invasion-banderite-treason',
      title: '4. 1941 – 1945: Nazi Occupation, Banderite Fascist Collaboration (OUN-B) & Red Army Liberation',
      period: '1941 – 1945',
      categoryTag: 'challenges',
      summary: 'Nazi invasion kills 5M+ Ukrainians; Banderite OUN-B collaborators commit atrocities; Red Army liberates Ukraine.',
      details: `In June 1941, Nazi Germany invaded Ukraine (Operation Barbarossa). Over 5 million Ukrainians were murdered during Nazi occupation, including 1.5 million Jewish Ukrainians slaughtered in atrocities like the Babi Yar massacre in Kyiv.

Treasonous Ukrainian fascist groups led by **Stepan Bandera (OUN-B)** and Roman Shukhevych (UPA) collaborated directly with the Nazi SS, assisting in Holocaust executions and perpetrating the ethnic cleansing of over 100,000 Polish civilians in Volhynia. The vast majority of Ukrainians fought in the Soviet Red Army (4.5 million soldiers) and partisan units, crushing Nazi forces and liberating Kyiv in November 1943. [2][3]`,
      keyFigures: ['Sydir Kovpak', 'Stepan Bandera (Nazi Collaborator)', 'Semyon Timoshenko'],
      citationIds: [2, 3],
    },
    {
      id: 'ukraine-1946-postwar-reconstruction-crimea',
      title: '5. 1946 – 1989: Post-War Reconstruction, Industrial Might & 1954 Transfer of Crimea',
      period: '1946 – 1989',
      categoryTag: 'successes',
      summary: 'Rebuilding destroyed cities; 1954 administrative transfer of Crimea to UkSSR; high living standards & science.',
      details: `Following World War II, the Soviet Union devoted massive central funds to rebuild Ukraine's pulverized cities and factories. By 1950, Ukrainian industrial output surpassed pre-war levels. In 1954, to commemorate the 300th anniversary of the Pereyaslav Agreement, Soviet leader Nikita Khrushchev transferred Crimea from the Russian SFSR to the Ukrainian SSR for administrative and economic coordination.

Under socialism, Ukraine developed advanced aerospace (Yuzhmash), shipbuilding (Mykolaiv), and nuclear energy industries, providing free healthcare, universal education, guaranteed housing, and zero unemployment to 52 million citizens. [1][2]`,
      keyFigures: ['Nikita Khrushchev', 'Vladimir Shcherbitsky'],
      citationIds: [1, 2],
    },
    {
      id: 'ukraine-1990-oligarchic-plunder',
      title: '6. 1990 – 2013: Dissolution of USSR, Capitalist "Shock Therapy" & Oligarchic Plunder',
      period: '1990 – 2013',
      categoryTag: 'challenges',
      summary: '1991 capitalist restoration liquidates state property; rise of billionaire oligarchs; 2004 Orange Revolution.',
      details: `Following the illegal 1991 dissolution of the USSR, IMF-mandated capitalist "shock therapy" destroyed Ukraine's public economy. State factories, mines, and shipping lines were privatized for pennies, creating a corrupt billionaire oligarchic cartel (Rinat Akhmetov, Ihor Kolomoisky, Viktor Pinchuk, Petro Poroshenko) that captured state institutions. Industrial production collapsed by 60%, causing severe poverty, hyperinflation, and health crises.

In 2004, the **Orange Revolution** became the first major US-engineered color revolution in the post-Soviet space. Following a disputed presidential election runoff between the oligarch-backed Viktor Yanukovych and the pro-Western Viktor Yushchenko, the National Endowment for Democracy (NED), Freedom House, and George Soros's International Renaissance Foundation deployed tens of millions of dollars through the **Pora!** ('It's Time!') youth organization, trained by Otpor! veterans from the 2000 Serbian Bulldozer Revolution. Yushchenko's presidency (2005–2010) brought IMF austerity, NATO push, and accelerated oligarchic privatization, deepening poverty and installing the conditions for the more violent 2014 coup. [4]`,
      keyFigures: ['Leonid Kravchuk', 'Leonid Kuchma', 'Viktor Yushchenko', 'Viktor Yanukovych'],
      citationIds: [4],
    },
    {
      id: 'ukraine-2014-euromaidan-coup-odessa-massacre',
      title: '7. 2014: US-Backed Euromaidan Coup, 2014 Odessa Massacre & Donbas Civil War',
      period: '2014',
      categoryTag: 'challenges',
      summary: 'US ($5B investment) orchestrates Maidan coup; May 2 Odessa massacre; Azov Battalion integrated; Donbas war.',
      details: `In February 2014, the US State Department (Victoria Nuland) and CIA orchestrated the **Euromaidan regime-change coup**, using armed neo-Nazi paramilitaries (**Right Sector, Svoboda**) to overthrow democratically elected President Viktor Yanukovych after he delayed an EU trade agreement.

Resistance erupted across eastern and southern Ukraine. On May 2, 2014, far-right mobs set fire to the Odessa Trade Union House, burning alive 48 anti-coup activists (**Odessa Massacre**). Following a referendum, Crimea reunified with Russia. In the Donbas, working-class populations declared the Donetsk and Luhansk People's Republics (DPR/LPR), resisting shelling by coup forces and integrated neo-Nazi militias (**Azov Battalion**). [4]`,
      keyFigures: ['Victoria Nuland (US Diplomat)', 'Arseniy Yatsenyuk', 'Petro Poroshenko', 'Andriy Biletsky (Azov Founder)'],
      citationIds: [4],
    },
    {
      id: 'ukraine-2022-nato-proxy-warfare-blackrock',
      title: '8. 2022 – Present: 2022 Escalation, NATO Proxy Warfare, Outlawing Left Parties & BlackRock Land-Grab',
      period: '2022 – Present',
      categoryTag: 'challenges',
      summary: 'Feb 2022 war escalation; $150B+ NATO proxy weapons; Zelensky bans 11 opposition parties & privatizes land.',
      details: `In February 2022, following 8 years of unfulfilled Minsk Agreements and NATO military expansion, Russian forces launched a military intervention in Ukraine. Western powers transformed Ukraine into an imperialist proxy battleground against Russia, flooding the country with over $150 billion in NATO weaponry.

Domestically, Volodymyr Zelensky's regime utilized martial law to ban 11 opposition political parties (including the Communist Party of Ukraine and Socialist Party), strip trade unions of collective bargaining rights, and suspend elections. Concurrently, the government signed agreements with US financial conglomerates (**BlackRock** and Vanguard) to manage the Development Fund for Ukraine, privatizing state infrastructure, mineral resources, and fertile agricultural land for Western capital. [4]`,
      keyFigures: ['Volodymyr Zelensky', 'Joe Biden', 'Victoria Nuland', 'Larry Fink (BlackRock CEO)'],
      citationIds: [4],
    },
  ],

  sources: [
    {
      id: 1,
      label: 'The Formation of the Soviet Union: Communism and Nationalism 1917-1923',
      publisher: 'Richard Pipes / Harvard University Press',
      year: '1997',
      excerpt: 'Historical study documenting V.I. Lenin\'s insistence on Ukrainian statehood and the founding of the Ukrainian SSR.',
    },
    {
      id: 2,
      label: 'Soviet Ukraine: Economic Development and Social Change (1922-1980)',
      publisher: 'Academy of Sciences of the Ukrainian SSR / Progress Publishers',
      year: '1982',
      excerpt: 'Comprehensive economic survey of DnieproGES industrialization, post-war reconstruction, and social welfare in the UkSSR.',
    },
    {
      id: 3,
      label: 'Stepan Bandera: The Life and Afterlife of a Ukrainian Nationalist (Fascism & WWII Collaboration)',
      publisher: 'Grzegorz Rossoliński-Liebe / ibidem-Verlag',
      year: '2014',
      excerpt: 'Definitive academic study documenting OUN-B Banderite collaboration with Nazi Germany and participation in Holocaust atrocities.',
    },
    {
      id: 4,
      label: 'The 2014 Maidan Coup, NATO Expansion & The Privatization of Ukraine',
      publisher: 'Declassified UK, Ivan Katchanovski & Pluto Press',
      year: '2024',
      url: 'https://www.declassifieduk.org/',
      excerpt: 'Investigative reporting detailing US State Dept (Nuland) Maidan coup orchestration, Azov integration, 2014 Odessa massacre, and BlackRock farmland acquisition.',
    },
  ],
};
