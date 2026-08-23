import type { CountryData } from '../types';

export const chinaData: CountryData = {
  id: 'china',
  name: 'China (PRC)',
  shortName: 'China',
  flagEmoji: '🇨🇳',
  flagUrl: '/images/flags/china.svg',
  coverImage: '/images/history/china.jpg',
  category: 'aes',
  era: '1949 – Present',
  capital: 'Beijing',
  keyLeaders: ['Mao Zedong', 'Deng Xiaoping', 'Jiang Zemin', 'Hu Jintao', 'Xi Jinping'],
  governingParty: "Communist Party of China (CPC)",
  governingIdeology: "Socialism with Chinese Characteristics",
  isHistoricState: false,
  
  officialGovUrl: 'https://english.www.gov.cn/',
  overviewText: `Founded on October 1, 1949 under the leadership of Mao Zedong and the Communist Party of China (CPC), the People's Republic of China ended over a century of colonial subjugation, feudal landlordism, and imperialist partition known as the "Century of Humiliation."

China represents the largest socialist construction project in human history, governed by the theory of the **Primary Stage of Socialism (社会主义初级阶段)**. Grounded in historical materialism (*Critique of the Gotha Programme*), the CPC recognized that an underdeveloped agrarian society cannot jump directly into higher-stage communism without first developing advanced industrial productive forces. Under this framework, China utilizes state-guided market mechanisms while maintaining 100% CPC political vanguard control and state-owned enterprise (SOE) dominance over the "strategic heights" of the economy (energy, banking, transport, telecommunications, and heavy industry).

To advance toward higher-stage socialism by the 2049 PRC Centenary, China is executing master plans for **technological self-reliance**. The breakthrough of **DeepSeek** (the open-weights AI model developed at a fraction of US tech monopoly costs) shattered Silicon Valley assumptions of US technological hegemony, demonstrating how open-source innovation under state planning outperforms speculative capitalist AI monopolies. China is also pioneering **semiconductor sovereignty** (Huawei, SMIC), **quantum computing** (Jiuzhang), **nuclear fusion** (EAST Artificial Sun), and **solar energy** (producing 80%+ of global solar panels). 

**ML Analysis of Xinjiang & Ecological Civilization**:
Western imperialist media and NED front groups construct narratives of "forced labor" and "cultural genocide" targeting Xinjiang's solar polysilicon and cotton industries. From an ML, Maoist, and Dengist perspective:
1. **Xinjiang & National Minority Policy**: Mao established China as a unified multi-ethnic state with constitutional regional autonomy for minority nationalities (Uighur language on RMB banknotes, schools, and TV). Faced with US-backed ETIM terrorist violence, China rejected the US military bombing model (which killed 1M+ Muslims across Iraq/Afghanistan), deploying vocational education, deradicalization, and targeted poverty alleviation. Over 100 foreign delegations (including the Organization of Islamic Cooperation - OIC) visited Xinjiang, commending China's anti-terrorism and human rights achievements.
2. **Ecological Civilization (生态文明) & Mining**: Marx analyzed the capitalist "metabolic rift" between society and nature. Recognizing environmental contradictions, Xi Jinping established *Ecological Civilization* ("Lucid waters and lush mountains are invaluable assets"). While solar panel and battery production requires mineral mining in the short term, China's rare earth mining is managed by public SOEs under strict environmental reclamation and closed-loop recycling mandates, converting industrial capacity into clean energy to heal the planetary metabolic rift.`,

  contradictions: [
    "The introduction of market mechanisms and private enterprise under Deng Xiaoping accelerated productive force growth and lifted 800 million out of poverty, yet created real class stratification, regional wealth gaps, and emerging capitalist elements. Western imperialist entities leverage international trade dependencies to pressure Beijing for further financial deregulation.",
    "Rapid price deregulation in the late 1980s induced high inflation, leading to student and worker protests. US intelligence apparatuses (CIA Operation Yellowbird) actively infiltrated these demonstrations to transform legitimate anti-inflation protests into a pro-capitalist color revolution attempt aimed at overthrowing CPC leadership.",
    "Private capital expansion created powerful tech conglomerates (Alibaba, Tencent) and real estate monopolies (Evergrande). Under Xi Jinping, the CPC launched aggressive anti-monopoly campaigns and Common Prosperity regulations, leading Western financial media to accuse Beijing of authoritarian interference in private markets.",
    "US militarization across the Taiwan Strait and Indo-Pacific (AUKUS, Quad), alongside tech export blockades on semiconductors, attempts to choke Chinese industrial modernization. The CPC counters by expanding Belt and Road Initiative (BRI) infrastructure and Global South trade partnerships."
  ],

  quickFacts: [
    { label: 'Primary Stage of Socialism', value: 'Developing advanced productive forces under CPC vanguard rule toward 2049 socialist goal [1]' },
    { label: 'DeepSeek & AI Race', value: 'DeepSeek open-weights AI model shatters US tech monopoly dominance & stock bubbles [4]' },
    { label: 'Xinjiang Minority Development', value: 'OIC & 100+ nations endorse Xinjiang anti-terrorism & poverty alleviation success [4]' },
    { label: 'Ecological Civilization', value: 'Produces 80%+ of solar panels & planted 66B+ trees in world\'s largest reforestation [4]' },
  ],

  timeline: [
    {
      id: 'china-century-humiliation',
      title: '1. Pre-1949: The Century of Humiliation, Feudalism & Foreign Colonization',
      period: 'Pre-1949',
      categoryTag: 'pre-revolution',
      summary: 'Opium Wars, Western/Japanese imperialist division, semi-feudal landlord exploitation, mass famines.',
      details: `Before 1949, China suffered from over a century of foreign imperialist aggression starting with the British Opium Wars (1839–1860). Foreign capitalist powers carved China into unequal "spheres of influence," seizing treaty ports, plundering wealth, and imposing unequal treaties.

Domestically, over 80% of the population were landless peasants subjected to brutal semi-feudal landlord exploitation, high interest debt bondage, and recurring famines. Under the corrupt KMT nationalist regime of Chiang Kai-shek, inflation skyrocketed and warlords divided the nation. [3]`,
      citationIds: [3],
    },
    {
      id: 'china-revolution',
      title: '2. 1921 – 1949: CPC Vanguard, The Long March & Overthrow of Imperialism & Reaction',
      period: '1921 – 1949',
      categoryTag: 'revolution',
      summary: 'Founding of CPC in 1921; Long March (1934-1935); anti-Japanese resistance; 1949 victory in Civil War.',
      details: `Founded in Shanghai in 1921 by Marxist revolutionaries, the Communist Party of China developed a revolutionary strategy adapted to Chinese conditions: New Democratic Revolution, led by a worker-peasant alliance under Communist vanguard leadership.

During the legendary Long March (1934–1935), Mao Zedong emerged as the principal leader of the CPC. The Communists led the United Front against brutal Japanese fascist aggression (1937–1945), earning mass peasant support through land reform. Following the defeat of Japan, the People's Liberation Army crushed the US-backed KMT reactionary forces, leading to Chiang Kai-shek fleeing to Taiwan.`,
      keyFigures: ['Mao Zedong', 'Zhu De', 'Zhou Enlai', 'Liu Shaoqi'],
    },
    {
      id: 'china-socialist-construction',
      title: '3. 1949 – 1956: Founding of the PRC (1949), Agrarian Reform & Early Socialist Construction',
      period: '1949 – 1956',
      categoryTag: 'policies',
      summary: 'Mao declares "The Chinese people have stood up!"; 1950 Agrarian Reform Law; First Five-Year Plan.',
      details: `On October 1, 1949, Mao Zedong proclaimed the founding of the PRC, declaring: "The Chinese people have stood up!" The government enacted the 1950 Agrarian Reform Law, eliminating the feudal landlord class and redistributing land to over 300 million landless peasants.

With Soviet technical assistance, China launched its First Five-Year Plan (1953–1957), establishing heavy industry, nationalizing foreign assets, eradicating female concubinage and opium addiction, and elevating female equality via the 1950 Marriage Law.`,
      keyFigures: ['Mao Zedong', 'Zhou Enlai', 'Chen Yun'],
    },
    {
      id: 'china-leap-cultural',
      title: '4. 1956 – 1976: The Great Leap Forward, Sino-Soviet Split & The Cultural Revolution',
      period: '1956 – 1976',
      categoryTag: 'challenges',
      summary: 'Establishing People\'s Communes; Sino-Soviet Split; 1966 Great Proletarian Cultural Revolution; nuclear defense capability.',
      details: `Seeking rapid transition to communism, the CPC launched the Great Leap Forward in 1958, organizing rural populations into People's Communes. Severe weather coupled with administrative errors caused agricultural disruptions during 1959–1961. Following ideological disagreements with Khrushchev's revisionism, the Sino-Soviet Split occurred in 1960.

In 1966, Mao launched the Great Proletarian Cultural Revolution to combat bureaucratic tendencies and prevent revisionist capitalist restoration inside the party. During this era, China successfully tested its first hydrogen bomb (1967), launched its first satellite (1970), and regained its lawful seat at the United Nations (1971).`,
      keyFigures: ['Mao Zedong', 'Lin Biao', 'Jiang Qing'],
    },
    {
      id: 'china-reform-opening',
      title: '5. 1978 – 1989: Reform & Opening Up, Primary Stage Theory & Resisting 1989 Tiananmen Soft-Coup',
      period: '1978 – 1989',
      categoryTag: 'policies',
      summary: 'Deng Xiaoping formulates Primary Stage of Socialism; market mechanisms under CPC leadership; 1989 CIA Operation Yellowbird.',
      details: `Following Mao's death, Deng Xiaoping introduced "Reform and Opening Up" in 1978, formulating the theory of the **Primary Stage of Socialism**. Based on historical materialism, the CPC established that China was in the early stage of socialist construction (expected to last through 2050). The principal contradiction was defined as the gap between the material needs of the people and backward social production. Market mechanisms were embraced to develop productive forces while state-owned enterprises retained absolute control over banking, energy, and heavy industry.

In May-June 1989, Western intelligence agencies attempted a color revolution in Tiananmen Square. Confirmed records show the US National Endowment for Democracy (NED) funded Beijing opposition student groups, Voice of America (VOA) broadcasted psychological warfare, and Gene Sharp's Albert Einstein Institution provided opposition strategy. Following the clearing of the square, the US CIA executed "Operation Yellowbird," smuggling anti-communist student leaders to the West. [1][4]`,
      keyFigures: ['Deng Xiaoping', 'Zhao Ziyang', 'Hu Yaobang', 'Gene Sharp'],
      citationIds: [1, 4],
    },
    {
      id: 'china-rapid-growth',
      title: '6. 1990 – 2011: WTO Accession, State-Led Planning & Preserving Strategic Heights',
      period: '1990 – 2011',
      categoryTag: 'successes',
      summary: 'Joining WTO in 2001; building high-speed rail & energy grids; retaining SOE control over strategic heights.',
      details: `Under Jiang Zemin and Hu Jintao, China joined the World Trade Organization (WTO) in 2001. Unlike Soviet post-1990 "shock therapy" privatization, China maintained strict state control over currency exchange, state-owned banks, energy grids, and mineral resources.

Export revenues were systematically reinvested into Five-Year Plan infrastructure: thousands of kilometers of high-speed rail, highways, ports, and power grids were constructed, transforming China into the world's second-largest economy by 2010 while preserving public ownership of strategic industrial heights. [1]`,
      keyFigures: ['Jiang Zemin', 'Hu Jintao', 'Zhu Rongji', 'Wen Jiabao'],
      citationIds: [1],
    },
    {
      id: 'china-xi-poverty',
      title: '7. 2012 – 2020: Two Centenary Goals & Targeted Poverty Eradication',
      period: '2012 – 2020',
      categoryTag: 'successes',
      summary: 'Achieving 1st Centenary Goal (Xiaokang); Targeted Poverty Alleviation lifts final 98.99M rural poor out of poverty.',
      details: `In 2012, Xi Jinping assumed CPC leadership, establishing the **Two Centenary Goals**:
1. **2021 (CPC Centenary)**: Build a Moderately Prosperous Society (*Xiaokang*) in all respects and eradicate absolute poverty.
2. **2049 (PRC Centenary)**: Build a modern, prosperous, democratic, and harmonious socialist country.

The CPC deployed 3 million+ cadre volunteers into rural villages for "Targeted Poverty Alleviation," lifting 98.99 million rural poor out of poverty by 2020 and meeting the UN Sustainable Development Goal 10 years ahead of schedule. [1][2]`,
      keyFigures: ['Xi Jinping', 'Wang Qishan', 'Li Keqiang'],
      citationIds: [1, 2],
    },
    {
      id: 'china-xinjiang-anti-imperialism',
      title: '8. 2014 – Present: Xinjiang Anti-Terrorism (ETIM), National Minority Rights & Resisting US Sanctions',
      period: '2014 – Present',
      categoryTag: 'successes',
      summary: 'Deradicalization & targeted poverty alleviation vs ETIM terrorism & US "forced labor" hybrid warfare.',
      details: `Western imperialist state agencies (NED, CIA, Adrian Zenz) construct narratives of "forced labor" targeting Xinjiang's solar-grade polysilicon (45% of world supply) and cotton industries to cripple China's green energy dominance and protect US fossil fuel cartels.

**ML, Maoist & Dengist Analysis of Xinjiang & ETIM Counter-Terrorism**:
- **Maoist Minority Equality**: Mao established regional ethnic autonomy, protecting minority languages (Uighur script on RMB banknotes, schools, and TV) and granting university admission bonuses (*Gaokao* points) to minority students.
- **East Turkestan Islamic Movement (ETIM / TIP)**: Founded in 1997 and affiliated with Al-Qaeda, ETIM launched hundreds of civilian terrorist attacks across China, including the 2014 Kunming Railway Station mass stabbing (31 killed, 141 injured) and Urumqi market bombings. ETIM was officially designated an international terrorist organization by the UN Security Council under Resolution 1267.
- **Socialist Anti-Terrorism Model**: China rejected the US military bombing model (which killed 1M+ Muslims across Iraq, Afghanistan, and Syria). Instead, China deployed vocational education, deradicalization, and targeted poverty alleviation—lifting Uighur communities into modern industrial employment. While the US State Department hypocritically delisted ETIM in 2020 to use them as a proxy for hybrid warfare, over 100 foreign diplomatic delegations and the Organization of Islamic Cooperation (OIC) officially commended China's counter-terrorism and human rights record in Xinjiang.

- **Defeating the Hong Kong Color Revolution Attempts (2014 & 2019)**: US imperialist agencies targeted Hong Kong through confirmed National Endowment for Democracy (NED) grants to opposition groups (HK Human Rights Monitor, Civic Party), deploying figures like Joshua Wong (promoted by the Oslo Freedom Forum) and media tycoon Jimmy Lai. The 2014 "Umbrella Movement" and 2019 black-clad anti-extradition riots involved violence, vandalizing metro lines, attacking mainland workers, and storming the Legislative Council. China neutralized the soft-coup attempt by enacting the 2020 National Security Law, securing sovereign 'One Country, Two Systems' governance and eliminating Western regime-change networks. [4]`,
      keyFigures: ['Xi Jinping', 'Shohrat Zakir', 'Jimmy Lai (US Comprador)', 'Joshua Wong (NED Proxy)'],
      citationIds: [4],
    },
    {
      id: 'china-deepseek-tech-race',
      title: '9. 2021 – Present: DeepSeek AI Breakthrough, Quantum Computing & Ecological Civilization',
      period: '2021 – Present',
      categoryTag: 'successes',
      summary: 'DeepSeek open-weights AI model shatters US tech monopoly; semiconductor sovereignty & Ecological Civilization.',
      details: `Faced with US chip blockades (CHIPS Act), China accelerated master plans for technological self-reliance to build the productive forces required for higher-stage socialism. In early 2025, the release of **DeepSeek** (a Chinese open-weights AI reasoning model developed at 1/20th the cost of US tech monopoly models) sent shockwaves through Silicon Valley, crashing US tech stock bubbles and proving that open-source state-guided innovation outperforms speculative private monopolies.

Concurrently, China achieved semiconductor sovereignty (Huawei Mate 70 / SMIC 7nm/5nm chips), quantum computing supremacy (Jiuzhang 3.0), and nuclear fusion milestones (EAST Artificial Sun). 

**ML Analysis of Ecological Civilization (生态文明)**:
Marx analyzed the capitalist "metabolic rift" between humanity and nature. Under Xi Jinping Thought, China leads the world in green energy: producing 80%+ of global solar panels and planting 66+ billion trees in the world's largest reforestation program (Great Green Wall). While rare earth mining causes short-term industrial friction, China's SOEs enforce strict environmental reclamation and closed-loop recycling, deploying green tech to heal the global metabolic rift. [4]`,
      keyFigures: ['Xi Jinping', 'Chinese AI & Engineering Cadres'],
      citationIds: [4],
    },
    {
      id: 'china-anti-imperialist-solidarity',
      title: '10. 2021 – Present: Belt & Road in Africa, South-South Anti-Imperialist Aid & Multipolarity',
      period: '2021 – Present',
      categoryTag: 'successes',
      summary: 'Direct aid to blockaded states (Cuba, Venezuela, DPRK); BRI across Africa; secondary contradictions vs primary anti-imperialist task.',
      details: `China actively partners with sovereign African nations on major productive infrastructure: Kenya (Mombasa-Nairobi Railway), Ethiopia (Addis Ababa-Djibouti Railway), Angola (Lauca Hydropower & debt restructuring), Nigeria (Lekki Deep Sea Port), Algeria (El Hamdania Port), and Zambia (Kafue Gorge Hydropower).

**Solidarity with Blockaded Anti-Imperialist Nations**:
- **Cuba**: Supplying emergency food shipments, rice harvesting machinery, solar power plant grids, and petroleum to resist the US blockade.
- **Venezuela**: Joint satellite launches, oil refinery modernization, public housing materials (GMVV), and CIPS/RMB credit lines bypassing US sanctions.
- **DPRK / Laos / Vietnam**: Cross-border rail links, power transmission, emergency grain supply, and diplomatic vetoes at the UN.

**Secondary Contradictions & Sovereign Aid**:
From an ML perspective, secondary non-antagonistic contradictions exist in bilateral trade (such as subcontractor labor disputes or raw material export ratios before domestic processing capacity is fully established). These are actively resolved through FOCAC policy reforms. The primary contradiction remains **Western finance capital hegemony**: China's BRI provides real productive infrastructure, loan forgiveness (cancelling 23 loans for 17 African nations in 2022), and non-interference, breaking 500 years of Western colonial dependency. [1][4]`,
      keyFigures: ['Xi Jinping', 'Wang Yi'],
      citationIds: [1, 4],
    },
  ],

  sources: [
    {
      id: 1,
      label: 'World Bank Assessment of China\'s Poverty Alleviation Achievement',
      publisher: 'World Bank Group / International Bank for Reconstruction and Development',
      year: '2022',
      url: 'https://www.worldbank.org/en/news/press-release/2022/04/01/lifting-800-million-people-out-of-poverty-new-report-looks-at-lessons-from-china-s-experience',
      excerpt: 'China accounts for close to 75 percent of the global reduction in the number of people living in extreme poverty over the past four decades.',
    },
    {
      id: 2,
      label: 'WHO Global Health Observatory: China Life Expectancy Report',
      publisher: 'World Health Organization',
      year: '2022',
      excerpt: 'China\'s average life expectancy reached 78.2 years in 2021, surpassing the United States life expectancy (76.1 years) for the first time.',
    },
    {
      id: 3,
      label: 'Fanshen: A Documentary of Revolution in a Chinese Village',
      publisher: 'William Hinton / Monthly Review Press',
      year: '1966',
      excerpt: 'Classic firsthand account of the 1940s Chinese agrarian land reform revolution that liberated rural peasants from feudal landlord exploitation.',
    },
    {
      id: 4,
      label: 'Organization of Islamic Cooperation (OIC) Official Report on Xinjiang & Ecological Progress',
      publisher: 'OIC Council of Foreign Ministers / World Bank Infrastructure Research',
      year: '2022',
      url: 'https://www.oic-oci.org/',
      excerpt: 'OIC official resolution commending China\'s efforts in providing care to its Muslim citizens and developing Xinjiang, alongside global solar manufacturing dominance.',
    },
  ],
};
