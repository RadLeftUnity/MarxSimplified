import type { CountryData } from '../types';

export const iranData: CountryData = {
  id: 'iran',
  name: 'Iran',
  shortName: 'Iran',
  flagEmoji: '🇮🇷',
  flagUrl: '/images/flags/iran.svg',
  coverImage: '/images/history/iran.jpg',
  category: 'global-south',
  era: '1979 – Present',
  capital: 'Tehran',
  keyLeaders: ['Mohammad Mosaddegh', 'Ayatollah Ruhollah Khomeini', 'Ayatollah Ali Khamenei', 'Ebrahim Raisi', 'Masoud Pezeshkian'],
  governingParty: "Combatant Clergy Association",
  governingIdeology: 'Capitalism',
  isHistoricState: false,
  
  officialGovUrl: 'https://www.president.ir/en',
  overviewText: `Iran represents a major anti-imperialist power in West Asia that ended a quarter-century of US comprador monarchy through the 1979 Islamic Revolution.

For decades, British imperialist monopolies (Anglo-Persian Oil Company / BP) plundered Iranian oil wealth. In 1951, democratically elected Prime Minister Mohammad Mosaddegh nationalized Iranian oil with broad support from oil refinery workers and the Marxist Tudeh Party of Iran. In response, the US CIA and British MI6 orchestrated the 1953 Operation Ajax military coup, destroying Iranian democracy and installing the autocratic Pahlavi Shah dictatorship backed by the brutal SAVAK secret police.

The 1979 Islamic Revolution overthrew the US puppet regime, nationalized resources, and expelled Western military bases. Iran commands strategic control over the Strait of Hormuz—the vital energy chokepoint transited by 20%+ of global oil—utilizing asymmetric naval power to counter US sanctions and Western oil seizures. Today, Iran anchors the regional Axis of Resistance against US military occupation and Israeli expansionism, while maintaining full membership in BRICS+ and the Shanghai Cooperation Organization (SCO). From a Marxist-Leninist perspective, Iran demonstrates both the strengths of sovereign anti-imperialist defense and internal social contradictions, where legitimate working-class and women's rights demands are frequently targeted by Western intelligence agencies attempting to co-opt domestic protests into color revolution regime-change operations.`,

  contradictions: [
    "US imperialist maximum pressure sanctions and JCPOA withdrawal block Iranian oil exports and banking transactions, leading to currency inflation and medical supply shortages, which US Department of State strategists explicitly weaponize to manufacture internal discontent.",
    "Sovereign military defense against US and Israeli aggression unifies national resistance, yet domestic merchant capitalists (bazaari) and private financial institutions engage in currency speculation, exacerbating price hikes for working-class families.",
    "Western intelligence apparatuses (US CIA, Israeli Mossad) and NED-funded media networks attempt to co-opt legitimate social protests and women's rights demonstrations into color revolution regime-change operations, seeking to install pro-Western comprador exiles.",
    "Signing 25-year strategic cooperation agreements with China, joining BRICS+ and SCO, and expanding military-industrial self-reliance provide crucial economic stability against Western blockades."
  ],

  quickFacts: [
    { label: '1953 CIA Coup (Operation Ajax)', value: 'US CIA & MI6 overthrew democratically elected Mosaddegh after oil nationalization [1]' },
    { label: '1979 Anti-Imperialist Revolution', value: 'Overthrew US-backed Shah dictatorship & expelled Western military bases [2]' },
    { label: 'Strait of Hormuz Deterrent', value: 'Controls 21-mile energy chokepoint (20%+ world oil) countering US naval sanctions [3]' },
    { label: 'BRICS+ & SCO Full Member', value: 'Full accession to BRICS+ & Shanghai Cooperation Organization for multipolar trade [4]' },
  ],

  timeline: [
    {
      id: 'iran-british-oil-plunder',
      title: '1. Pre-1953: British Oil Plunder, Anglo-Persian Oil Company & Early Tudeh Party Mobilization',
      period: 'Pre-1953',
      categoryTag: 'pre-revolution',
      summary: 'British monopoly plunder of oil; founding of Marxist Tudeh Party (1941); 1946 Abadan oil strikes.',
      details: `From the early 1900s, the British Empire held a total monopoly over Iranian oil through the Anglo-Persian Oil Company (later BP). Britain extracted billions of dollars in oil wealth while returning less than 10% to Iran and subjecting Iranian refinery workers to squalid living conditions.

On September 29, 1941, Marxist cadres founded the Tudeh Party of Iran. Tudeh organized massive strikes across the Abadan oil refineries in 1946, building the largest working-class trade union movement in Middle Eastern history and demanding nationalization of petroleum resources. [1]`,
      keyFigures: ['Mohammad Mosaddegh', 'Reza Shah', 'Tudeh Party Cadres'],
      citationIds: [1],
    },
    {
      id: 'iran-mosaddegh-operation-ajax',
      title: '2. 1951 – 1953: Oil Nationalization under Mosaddegh & Defeating 1953 US CIA Operation Ajax Coup',
      period: '1951 – 1953',
      categoryTag: 'revolution',
      summary: 'Mosaddegh nationalizes oil in 1951; 1953 US CIA Operation Ajax coup overthrows democratic government.',
      details: `In March 1951, the Iranian parliament led by Prime Minister Mohammad Mosaddegh passed a historic law nationalizing the oil industry, supported by popular mass rallies organized by the National Front and Tudeh Party.

In response, Britain imposed a naval embargo on Iranian oil exports. On August 19, 1953, the US CIA (under Kermit Roosevelt) and British MI6 executed **Operation Ajax**—bribing mob leaders, corrupt army officers, and media outlets to stage riots and overthrow Mosaddegh. The US re-installed Mohammad Reza Shah Pahlavi as an autocratic puppet monarch. [1]`,
      keyFigures: ['Mohammad Mosaddegh', 'Kermit Roosevelt (CIA Agent)', 'Mohammad Reza Shah Pahlavi'],
      citationIds: [1],
    },
    {
      id: 'iran-shah-dictatorship-savak',
      title: '3. 1953 – 1979: The US-Backed Shah Dictatorship & SAVAK Secret Police Repression',
      period: '1953 – 1979',
      categoryTag: 'challenges',
      summary: '26 years of US puppet monarchy; SAVAK secret police torture; White Revolution feudal modernization.',
      details: `For 26 years following the 1953 coup, the Shah governed Iran as a pro-Western dictatorship, handing 40% of Iranian oil concessions to US oil monopolies.

With assistance from the CIA and Israeli Mossad, the Shah created **SAVAK**—a brutal secret police apparatus that tortured, imprisoned, and executed tens of thousands of Marxist activists, trade unionists, students, and religious dissidents. Under the 1963 "White Revolution," Western capital accelerated feudal-landlord displacement into urban slums. [1][2]`,
      keyFigures: ['Mohammad Reza Shah Pahlavi', 'Ayatollah Ruhollah Khomeini'],
      citationIds: [1, 2],
    },
    {
      id: 'iran-1979-revolution',
      title: '4. 1979: The 1979 Islamic Revolution: Overthrowing the Shah & Expelling US Imperialism',
      period: '1979',
      categoryTag: 'revolution',
      summary: 'Mass strikes by oil workers; overthrow of Shah in Feb 1979; December 1979 Islamic Republic referendum.',
      details: `In late 1978, a massive revolutionary movement uniting industrial oil workers, bazaar merchants, university students, and religious clerics swept Iran. Oil workers staged a total general strike, cutting off oil exports and crippling the Shah's regime.

On February 11, 1979, the Shah fled into exile and the monarchy collapsed. In December 1979, citizens voted to establish the Islamic Republic of Iran under Ayatollah Ruhollah Khomeini. The new government canceled imperialist military contracts, nationalized foreign banks, and expelled US military personnel. [2]`,
      keyFigures: ['Ayatollah Ruhollah Khomeini', 'Ayatollah Mahmoud Taleghani'],
      citationIds: [2],
    },
    {
      id: 'iran-iraq-war-sanctions',
      title: '5. 1980 – 1988: Resisting the Imperialist-Backed Iran-Iraq War & Chemical Weapons Attacks',
      period: '1980 – 1988',
      categoryTag: 'challenges',
      summary: 'Saddam Hussein invades Iran with US/Western backing; 1M+ casualties; Iran repels Iraqi invasion.',
      details: `Fearing the spread of anti-imperialist revolution, the US and Western European powers backed Saddam Hussein's Iraqi regime to invade Iran in September 1980, starting an 8-year war that claimed over 1 million lives.

Western nations provided Iraq with satellite intelligence, financial credits, and chemical weapons precursors used against Iranian troops and civilians at Sardasht. Despite severe casualties and early isolation, Iranian mass mobilization (Basij) successfully repelled the invasion by 1988 without ceding an inch of territory. [2]`,
      keyFigures: ['Ayatollah Ruhollah Khomeini', 'Ali Akbar Hashemi Rafsanjani'],
      citationIds: [2],
    },
    {
      id: 'iran-nuclear-sovereignty',
      title: '6. 1989 – 2015: Post-War Reconstruction, Nuclear Energy Development & US Sanctions Siege',
      period: '1989 – 2015',
      categoryTag: 'policies',
      summary: 'Indigenizing nuclear technology; US unilateral sanctions; 2015 JCPOA nuclear agreement.',
      details: `Under Supreme Leader Ayatollah Ali Khamenei, Iran prioritized technological self-reliance, building a sovereign civilian nuclear energy program, expanding medical literacy, and developing indigenous missile defense capabilities to deter Western aggression.

In response, the US imposed escalating unilateral financial and oil export sanctions. During the 2009 presidential election, Western intelligence agencies (NED, USAID) launched a major soft-coup operation, backing candidate Mir-Hossein Mousavi in the **Green Movement** attempted color revolution. The US State Department under Hillary Clinton famously asked Twitter to delay scheduled server maintenance to keep anti-government network channels open, though the operation failed to overthrow the government.

In July 2015, Iran signed the Joint Comprehensive Plan of Action (JCPOA) with the UN Security Council P5+1, agreeing to strict uranium enrichment limits in exchange for sanctions relief. [3]`,
      keyFigures: ['Ayatollah Ali Khamenei', 'Hassan Rouhani', 'Mir-Hossein Mousavi (US/NED Proxy)', 'Mohammad Javad Zarif'],
      citationIds: [3],
    },
    {
      id: 'iran-jcpoa-sabotage-soleimani',
      title: '7. 2016 – 2020: JCPOA Sabotage, US "Maximum Pressure" & Assassination of Qasem Soleimani',
      period: '2016 – 2020',
      categoryTag: 'challenges',
      summary: 'Trump withdraws from JCPOA (2018); "Maximum Pressure" siege; Jan 3, 2020 US assassination of Qasem Soleimani.',
      details: `In May 2018, US President Donald Trump unilaterally sabotaged the JCPOA nuclear deal, imposing an illegal "Maximum Pressure" economic blockade aimed at strangling Iranian oil exports and bank transactions.

On January 3, 2020, the US military executed a drone strike at Baghdad International Airport, assassinatering General Qasem Soleimani—commander of the IRGC Quds Force and key architect of the anti-ISIS defeat in Iraq and Syria. Iran responded by launching ballistic missiles at US airbases in Iraq. [3]`,
      keyFigures: ['Ayatollah Ali Khamenei', 'General Qasem Soleimani', 'Donald Trump (US President)'],
      citationIds: [3],
    },
    {
      id: 'iran-strait-of-hormuz-axis-resistance-brics',
      title: '8. Present: Axis of Resistance, SCO/BRICS+ & The Strait of Hormuz Deterrent',
      period: 'Present',
      categoryTag: 'successes',
      summary: 'Strait of Hormuz energy chokepoint deterrence; leading Axis of Resistance; full accession to SCO & BRICS+.',
      details: `Iran controls the northern coast of the **Strait of Hormuz**—the narrow 21-mile-wide waterway between Iran, Oman, and the UAE transited by 20–21 million barrels of oil daily (over 20% of global petroleum consumption and 30% of seaborne crude trade) and 20% of global LNG (from Qatar). Major Gulf exporters (Saudi Arabia, Iraq, Kuwait, Qatar, UAE) and top global importers (China, India, Japan, South Korea, EU) rely on this chokepoint.

To counter US Fifth Fleet naval encirclement and US DOJ oil tanker confiscations, Iran's IRGC Navy deploys asymmetric speedboats, sea mines, anti-ship cruise missiles, and drone networks. Reciprocal Iranian tanker interceptions serve as a potent anti-imperialist economic deterrent.

Operating in tandem with Ansar Allah in Yemen (Bab al-Mandab Strait), Iran leads the regional **Axis of Resistance** (supporting Hezbollah in Lebanon and Palestinian liberation forces). Internationally, Iran signed a 25-year $400B strategic partnership with China, joined the Shanghai Cooperation Organization (SCO) in 2023, and officially joined BRICS+ in January 2024, driving de-dollarized global trade. [3][4][5]`,
      keyFigures: ['Ayatollah Ali Khamenei', 'Ebrahim Raisi', 'Masoud Pezeshkian', 'Xi Jinping'],
      citationIds: [3, 4, 5],
    },
  ],

  sources: [
    {
      id: 1,
      label: 'All the Shah\'s Men: An American Coup and the Roots of Middle East Terror',
      publisher: 'Stephen Kinzer / John Wiley & Sons',
      year: '2003',
      excerpt: 'Comprehensive historical account of the 1953 CIA Operation Ajax coup that overthrew Prime Minister Mohammad Mosaddegh.',
    },
    {
      id: 2,
      label: 'Iran Between Two Revolutions',
      publisher: 'Ervand Abrahamian / Princeton University Press',
      year: '1982',
      excerpt: 'In-depth historical materialist study of social classes, the Tudeh party, oil worker strikes, and the 1979 Islamic Revolution.',
    },
    {
      id: 3,
      label: 'The Axis of Resistance: Towards an Independent Middle East',
      publisher: 'Tim Anderson / Clarity Press',
      year: '2019',
      excerpt: 'Analysis of regional anti-imperialist alliances between Iran, Syria, Hezbollah, and Palestinian resistance forces against US hegemony.',
    },
    {
      id: 4,
      label: 'BRICS+ Accession and Multipolar Trade Networks',
      publisher: 'New Development Bank & SCO Economic Research Bulletin',
      year: '2024',
      url: 'https://www.ndb.int/',
      excerpt: 'Official documentation of Iran\'s full accession to BRICS+ and the Shanghai Cooperation Organization for non-dollar bilateral trade.',
    },
    {
      id: 5,
      label: 'Strait of Hormuz Maritime Security & Asymmetric Deterrence Analysis',
      publisher: 'US Energy Information Administration (EIA) & Stockholm International Peace Research Institute (SIPRI)',
      year: '2024',
      excerpt: 'Documentation of the 21-mile Strait of Hormuz chokepoint transiting 20%+ of global petroleum, IRGC Navy asymmetric defense capabilities, and tanker war economic deterrence.',
    },
  ],
};
