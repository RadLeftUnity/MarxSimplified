import type { CountryData } from '../types';

export const afghanistanData: CountryData = {
  id: 'afghanistan',
  name: 'Afghanistan',
  shortName: 'Afghanistan',
  flagEmoji: '🇦🇫',
  flagUrl: '/images/flags/afghanistan.svg',
  coverImage: '/images/history/afghanistan.jpg',
  category: 'global-south',
  era: '1919 – Present',
  capital: 'Kabul',
  keyLeaders: ['King Amanullah Khan', 'Nur Muhammad Taraki', 'Hafizullah Amin', 'Babrak Karmal', 'Mohammad Najibullah'],
  governingParty: "Taliban",
  governingIdeology: "Capitalism",
  isHistoricState: false,
  
  officialGovUrl: 'https://www.mfa.gov.af/',
  overviewText: `Afghanistan's modern history is defined by its resistance to imperialist partition (the British "Great Game"), the 1978 Saur Revolution that established a progressive socialist republic, and decades of US imperialist subversion.

On April 27, 1978, the People's Democratic Party of Afghanistan (PDPA) launched the Saur Revolution, proclaiming the Democratic Republic of Afghanistan (DRA). The socialist government enacted revolutionary decrees: Decree No. 6 abolished feudal peasant debt bondage, Decree No. 7 banned forced marriage and bride-price while guaranteeing women equal rights, Decree No. 8 redistributed land free of charge to 300,000 landless peasant families, and mass literacy campaigns educated hundreds of thousands of women and girls for the first time.

Fearing a socialist state on the border of Central Asia, the US CIA, Saudi Arabia, and Pakistani intelligence launched "Operation Cyclone"—spending over $20 billion to train, arm, and fund fundamentalist Mujahideen warlords. The Soviet Union intervened militarily from 1979 to 1989 to defend the DRA against CIA-backed insurgency. Following the fall of the republic in 1992 and the rise of the Taliban, the US invaded and occupied Afghanistan for twenty years (2001–2021), spending $2.3 trillion before suffering a catastrophic imperialist collapse in August 2021.`,

  contradictions: [
    "The 1978 Saur Revolution initiated radical agrarian reform and women's emancipation from urban hubs before building deep mass organizations among traditional rural peasantry, enabling feudal landlords to exploit religious tradition.",
    "Severe factional rivalries between the urban Parcham wing and radical rural Khalq wing weakened state unity and led to disastrous purges during a critical mobilization phase.",
    "Unprecedented US CIA funding ($20+ billion), Pakistani ISI training camps, and Saudi finance artificially sustained feudal warlord insurgency to bleed the Afghan state and Soviet defense forces.",
    "The current Taliban administration resists Western military occupation and sovereign asset seizures, yet enforces reactionary gender oppression, restricts female labor and education, and maintains private agrarian property relations."
  ],

  quickFacts: [
    { label: 'Women\'s Rights Decrees', value: 'Decree No. 7 banned forced marriage; 100,000+ women joined literacy courses [1]' },
    { label: 'Agrarian Land Reform', value: 'Decree No. 8 redistributed land to 300,000 landless peasant families [2]' },
    { label: 'CIA Operation Cyclone', value: '$20+ Billion US CIA covert funding to fundamentalist Mujahideen [3]' },
    { label: 'US Occupation Cost', value: '$2.3 Trillion spent; 240,000+ Afghans killed (2001-2021 [4])' },
  ],

  timeline: [
    {
      id: 'afghanistan-independence-modernization',
      title: '1. 1919 – 1973: Independence from British Imperialism & Early Anti-Feudal Reforms',
      period: '1919 – 1973',
      categoryTag: 'pre-revolution',
      summary: '1919 Third Anglo-Afghan War wins full independence; King Amanullah introduces early secular reforms.',
      details: `Following the Third Anglo-Afghan War in 1919, King Amanullah Khan secured full diplomatic independence from the British Empire, ending decades of British imperial "Great Game" control over Afghan foreign policy.

Amanullah attempted early anti-feudal modernizing reforms: establishing secular schools, abolishing women's forced veil dress codes, and drafting the 1923 Constitution. However, British-backed feudal warlords and conservative religious elites launched a tribal rebellion in 1929, forcing Amanullah into exile. [3]`,
      keyFigures: ['King Amanullah Khan', 'Queen Soraya Tarzi'],
      citationIds: [3],
    },
    {
      id: 'afghanistan-saur-revolution',
      title: '2. 1978: The April 27 Saur Revolution: PDPA Seizes Power & Declares the DRA',
      period: '1978',
      categoryTag: 'revolution',
      summary: 'April 27, 1978 military uprising; PDPA overthrows Daoud dictatorship; proclaiming the Democratic Republic.',
      details: `On April 27, 1978 (7th of Saur in the Persian calendar), patriotic military officers and the People's Democratic Party of Afghanistan (PDPA) executed a bloodless uprising against the autocratic regime of Mohammed Daoud Khan.

The Revolutionary Council proclaimed the Democratic Republic of Afghanistan (DRA), appointing PDPA General Secretary Nur Muhammad Taraki as President. The government pledged to eradicate feudalism, nationalize key natural resources, grant equal rights to national minorities, and build socialism. [1][2]`,
      keyFigures: ['Nur Muhammad Taraki', 'Hafizullah Amin', 'Babrak Karmal'],
      citationIds: [1, 2],
    },
    {
      id: 'afghanistan-socialist-reforms',
      title: '3. 1978 – 1979: Radical Socialist Reforms: Land Reform, Debt Abolition & Women\'s Rights',
      period: '1978 – 1979',
      categoryTag: 'policies',
      summary: 'Decree No. 6 cancels peasant mortgage debts; Decree No. 7 outlaws bride-price; Decree No. 8 redistributes land.',
      details: `In its first year, the DRA government enacted revolutionary social legislation:
- **Decree No. 6**: Cancelled usurious interest and mortgage debts owed by 11 million poor peasants to feudal landlords.
- **Decree No. 7**: Abolished forced marriages, outlawed bride-price (*walwar*), raised the legal age of marriage, and guaranteed women equal economic and political rights.
- **Decree No. 8**: Confiscated land from feudal landlords, distributing free titles to 300,000 landless peasant families.

Mass literacy campaigns deployed thousands of volunteer teachers across rural provinces, enabling hundreds of thousands of women to read for the first time. [1][2]`,
      keyFigures: ['Anahita Ratebzad', 'Nur Muhammad Taraki'],
      citationIds: [1, 2],
    },
    {
      id: 'afghanistan-operation-cyclone',
      title: '4. 1979 – 1989: Operation Cyclone: CIA Covert War & Soviet Military Assistance',
      period: '1979 – 1989',
      categoryTag: 'challenges',
      summary: 'US launches Operation Cyclone to fund Mujahideen warlords; Soviet military assists DRA against CIA insurgency.',
      details: `Fearing a stable socialist state, US National Security Advisor Zbigniew Brzezinski persuaded President Jimmy Carter in July 1979 to authorize "Operation Cyclone"—a covert CIA program to arm and train fundamentalist Mujahideen warlords to overthrow the DRA.

Faced with CIA-backed armed insurrections and external infiltration from Pakistan, the DRA requested Soviet military assistance. In December 1979, the Soviet 40th Army entered Afghanistan. Over the next decade, the US, Saudi Arabia, and Pakistan funneled $20+ billion in Stinger missiles, heavy weapons, and propaganda to Mujahideen fighters (including Osama bin Laden). [3]`,
      keyFigures: ['Babrak Karmal', 'Zbigniew Brzezinski', 'Jimmy Carter', 'Ronald Reagan'],
      citationIds: [3],
    },
    {
      id: 'afghanistan-national-reconciliation',
      title: '5. 1986 – 1992: National Reconciliation Policy & The Fall of the Democratic Republic',
      period: '1986 – 1992',
      categoryTag: 'challenges',
      summary: 'Dr. Najibullah elected President; Soviet forces withdraw in 1989; DRA fights on for 3 years until 1992 fall of Kabul.',
      details: `In 1986, Dr. Mohammad Najibullah assumed PDPA leadership, launching a "National Reconciliation" policy offering power-sharing, ceasefire agreements, and constitutional guarantees to non-violent opposition groups.

Following the Geneva Accords, Soviet troops completed their full withdrawal in February 1989. Contrary to CIA predictions of instant collapse, the Afghan armed forces and patriotic workers successfully defended Jalalabad and Kabul for three years. However, when Boris Yeltsin cut off all fuel and ammunition supplies in late 1991, Kabul fell to Mujahideen forces in April 1992. [2][3]`,
      keyFigures: ['Mohammad Najibullah', 'Abdul Rashid Dostum'],
      citationIds: [2, 3],
    },
    {
      id: 'afghanistan-warlord-civil-war',
      title: '6. 1992 – 1996: Warlord Civil War & The Rise of the Taliban',
      period: '1992 – 1996',
      categoryTag: 'challenges',
      summary: 'Mujahideen factions destroy Kabul; extreme violence against women; Taliban seizes power in 1996.',
      details: `Following the collapse of the DRA, rival CIA-funded Mujahideen warlord factions turned their weapons on each other, reducing Kabul to rubble and killing over 50,000 civilians. Warlords re-imposed feudal oppression, looting, and widespread sexual violence.

In reaction to warlord lawlessness, the Taliban movement emerged from Pakistani religious seminaries in 1994. Seizing Kabul in September 1996, the Taliban tortured and executed Dr. Najibullah, banned female education and employment, and established an extreme fundamentalist regime. [3]`,
      keyFigures: ['Mullah Omar', 'Gulbuddin Hekmatyar', 'Burhanuddin Rabbani'],
      citationIds: [3],
    },
    {
      id: 'afghanistan-us-occupation',
      title: '7. 2001 – 2021: The 20-Year US NATO Military Occupation & Puppet Regime',
      period: '2001 – 2021',
      categoryTag: 'challenges',
      summary: 'US invades under Operation Enduring Freedom; 20-year military occupation; $2.3 Trillion spent; massive corruption.',
      details: `Following the September 11 attacks, the United States launched Operation Enduring Freedom in October 2001, invading Afghanistan and overthrowing the Taliban. Over twenty years, NATO forces conducted night raids, drone strikes, and air bombardments that killed over 240,000 Afghans.

The US installed a corrupt client government in Kabul (Karzai and Ghani administrations), squandering $2.3 trillion on military contractors while 70% of the population remained in deep poverty. [4]`,
      keyFigures: ['Hamid Karzai', 'Ashraf Ghani', 'George W. Bush', 'Barack Obama'],
      citationIds: [4],
    },
    {
      id: 'afghanistan-us-collapse',
      title: '8. 2021 – Present: US Imperial Collapse, Asset Seizure & Contemporary Sovereignty',
      period: '2021 – Present',
      categoryTag: 'challenges',
      summary: 'Chaotic US military retreat in August 2021; US freezes $7 Billion in Afghan central bank assets; severe humanitarian crisis.',
      details: `In August 2021, the US-backed puppet army collapsed in days as the Taliban entered Kabul, culminating in a humiliating, chaotic evacuation from Kabul airport that symbolized the decline of US unipolar hegemony.

Following their defeat, the US government illegally seized $7 billion of Afghanistan's central bank foreign exchange reserves stored in New York, imposing devastating financial sanctions that triggered widespread economic collapse and famine across the country. [3][4]`,
      keyFigures: ['Ashraf Ghani', 'Joe Biden'],
      citationIds: [3, 4],
    },
  ],

  sources: [
    {
      id: 1,
      label: 'Revolutionary Afghanistan: A History of the People\'s Democratic Party of Afghanistan',
      publisher: 'Beverley Male / Croom Helm',
      year: '1982',
      excerpt: 'Detailed academic analysis of the 1978 Saur Revolution, PDPA land reform decrees, and women\'s rights legislation in the DRA.',
    },
    {
      id: 2,
      label: 'Afghanistan: Washington\'s Secret War',
      publisher: 'Phillip Bonosky / International Publishers',
      year: '1985',
      excerpt: 'Firsthand journalistic account of the social transformation under the Democratic Republic of Afghanistan and early CIA covert intervention.',
    },
    {
      id: 3,
      label: 'Ghost Wars: The Secret History of the CIA, Afghanistan, and Bin Laden',
      publisher: 'Steve Coll / Penguin Press',
      year: '2004',
      excerpt: 'Pulitzer Prize-winning investigation detailing CIA Operation Cyclone, Saudi funding, and the creation of the Mujahideen insurgency.',
    },
    {
      id: 4,
      label: 'Costs of War Project: Afghanistan Human and Financial Toll',
      publisher: 'Watson Institute for International and Public Affairs / Brown University',
      year: '2021',
      url: 'https://watson.brown.edu/costsofwar/figures/2021/human-and-budgetary-costs-date-us-war-afghanistan-2001-2021',
      excerpt: 'Comprehensive accounting of the $2.3 trillion US financial cost and 240,000+ direct deaths during the 20-year US military occupation.',
    },
  ],
};
