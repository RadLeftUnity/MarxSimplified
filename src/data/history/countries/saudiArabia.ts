import type { CountryData } from '../types';

export const saudiArabiaData: CountryData = {
  id: 'saudi-arabia',
  name: "Saudi Arabia",
  shortName: 'Saudi Arabia',
  flagEmoji: '🇸🇦',
  flagUrl: '/images/flags/saudi-arabia.svg',
  coverImage: '/images/history/saudi-arabia.jpg',
  category: 'global-south',
  era: '1744 – Present',
  capital: 'Riyadh',
  keyLeaders: ['Ibn Saud', 'King Faisal', 'King Fahd', 'King Abdullah', 'Mohammed bin Salman (MbS)'],
  governingParty: "House of Saud",
  governingIdeology: "Capitalism",
  isHistoricState: false,

  officialGovUrl: 'https://www.my.gov.sa/',
  overviewText: `Saudi Arabia represents an absolutist rentier petro-state whose modern political economy was forged through an alliance between the House of Saud and US monopoly capital.

In the 1930s, American oil monopolies established **ARAMCO** (Arabian American Oil Company), transforming feudal tribal land into the world's premier petroleum exporter. In 1973–1974, President Nixon and King Faisal formalized the **Petrodollar System**, mandating that all global oil sales be priced in US dollars and recycled into Wall Street banks and US Treasury bonds in exchange for US military protection.

Domestically, the rentier state produces a rigid two-tier class structure: Saudi citizens receiving oil-subsidized welfare (free housing, guaranteed government jobs, no income tax) while millions of South Asian and African migrant workers are exploited under the **Kafala System**, a modern form of indentured servitude. Regionally, Riyadh has served as a counterrevolutionary force against Arab nationalism, pan-Arab socialism, and Palestinian liberation, funding Islamist proxies, waging war on Yemen, and normalizing relations with Israel through the Abraham Accords.`,

  contradictions: [
    "The autocratic House of Saud monarchy relies on US military guarantees, purchasing hundreds of billions in Western arms to suppress regional democratic movements.",
    "Unfathomable state oil wealth is concentrated within the royal family while millions of disenfranchised migrant workers from South Asia face severe labor exploitation.",
    "Saudi military intervention in Yemen caused catastrophic destruction before recent diplomatic normalization agreements brokered by China.",
    "The regime invests heavily in Western financial assets and sports washing while enforcing strict public political repression against domestic dissidents."
  ],

  quickFacts: [
    { label: 'ARAMCO Oil Monopolism', value: 'World\'s largest oil exporter; founded via US monopoly capital concessions in 1933 [1]' },
    { label: '1973 Petrodollar Agreement', value: 'Priced global oil in US dollars, funding US financial hegemony & arms purchases [2]' },
    { label: 'Kafala Two-Tier Class System', value: '13M+ migrant workers (40%+ of population) under indentured sponsorship with zero union rights [3]' },
    { label: 'BRICS+ Accession & PIF', value: '$900B Public Investment Fund executing Vision 2030 & balancing with China/BRICS+ [4]' },
  ],

  timeline: [
    {
      id: 'saudi-house-of-saud-aramco-founding',
      title: '1. 1744 – 1944: House of Saud, Wahhabism, 1933 ARAMCO Concession & US Alliance',
      period: '1744 – 1944',
      categoryTag: 'pre-revolution',
      summary: '1744 Saud-Wahhab alliance; 1932 Kingdom unification; 1933 Standard Oil ARAMCO concession; 1945 USS Quincy pact.',
      details: `The Saudi state originated in 1744 through a pact between tribal leader Muhammad ibn Saud and the ultra-conservative Wahhabi cleric Muhammad ibn Abd al-Wahhab. This alliance gave the Saud clan political and military power, while Wahhabism supplied religious legitimacy through a rigid interpretation of Sunni Islam that condemned pluralism and sanctioned conquest of "apostate" tribes.

In September 1932, Abdulaziz ibn Saud unified the Arabian Peninsula by military conquest, declaring the Kingdom of Saudi Arabia. Desperate for revenue to consolidate state power, the monarchy granted a petroleum concession to Standard Oil of California (Socal) in 1933, creating **ARAMCO**. In February 1945, President Franklin D. Roosevelt met King Abdulaziz aboard the USS Quincy, sealing a foundational imperial pact: US military protection for the monarchy in exchange for exclusive US corporate access to Saudi oil reserves. [1]`,
      keyFigures: ['Abdulaziz ibn Saud', 'Muhammad ibn Abd al-Wahhab', 'Franklin D. Roosevelt'],
      citationIds: [1],
    },
    {
      id: 'saudi-petrodollar-system-arab-nationalism-rivalry',
      title: '2. 1945 – 1974: Counterrevolution Against Arab Nationalism & The Petrodollar System',
      period: '1945 – 1974',
      categoryTag: 'policies',
      summary: 'Saudi funding of Islamism against Nasser\'s Arab socialism; 1973 oil embargo; 1974 Petrodollar agreement.',
      details: `Saudi Arabia's primary regional role from the 1950s was as a **counterrevolutionary force** against Arab nationalism. Egypt's President Gamal Abdel Nasser promoted pan-Arab socialism, land reform, and anti-imperialist unity, inspiring mass movements across the Arab world. Riyadh viewed Nasserism as an existential threat to monarchical power and allied with the US to suppress it.

Saudi Arabia funded the **Muslim Brotherhood** as an Islamist ideological counter-weight to Arab socialist movements, sponsored Egyptian and Syrian Islamist exiles, and backed royalist forces against the republican (Nasser-aligned) revolution in Yemen throughout the 1960s, fighting an early proxy war against Cairo.

During the October 1973 Arab-Israeli War, King Faisal led OPEC in an oil embargo against Western nations supporting Israel, causing global oil prices to quadruple. Recognizing the threat to US hegemony, President Nixon and Henry Kissinger negotiated the **Petrodollar Agreement** in 1974: Saudi Arabia would price all petroleum exports in US dollars and recycle surplus revenues into US Treasury bonds and Wall Street banks, in return for advanced US weaponry and guaranteed military defense of the monarchy. [1][2]`,
      keyFigures: ['King Faisal', 'Gamal Abdel Nasser', 'Richard Nixon', 'Henry Kissinger'],
      citationIds: [1, 2],
    },
    {
      id: 'saudi-kafala-origins-class-structure',
      title: '3. 1950s – 1990s: Origins of the Kafala System & The Two-Tier Rentier Class Structure',
      period: '1950s – 1990s',
      categoryTag: 'challenges',
      summary: 'Oil wealth creates citizen rentier class; Kafala system imports indentured South Asian labor; Afghan Mujahideen funding.',
      details: `The **Kafala System** originated in the 1950s as the oil boom generated massive demand for construction and domestic labor that the small Saudi citizen population could not fill. Gulf monarchies adapted pre-existing kafala (sponsorship) traditions from Islamic commercial law into a formalized state labor control mechanism.

The class structure produced is explicitly two-tiered: Saudi citizens constitute a **rentier bourgeoisie and petty bourgeoisie**, receiving oil-subsidized welfare (free housing, guaranteed public sector employment, utility subsidies, zero income tax). Foreign migrant workers (now over 13 million, comprising roughly 40% of the Saudi population) are legally bound to individual Saudi employers or corporate sponsors (their "kafeel"). Workers cannot change jobs, leave the country, or access courts without employer permission, enabling systematic passport confiscation, wage theft, and physical abuse.

Workers from India, Pakistan, Bangladesh, Nepal, the Philippines, and Ethiopia are stratified further: South and Southeast Asians fill construction and domestic work, while Arab and Western expatriates fill managerial and professional positions, creating a racial hierarchy within the migrant underclass. During the 1980s, Saudi Arabia also matched CIA funding dollar-for-dollar (Operation Cyclone), channeling billions to anti-communist Mujahideen fighters in Afghanistan, incubating forces that would later form Al-Qaeda. [1][3]`,
      keyFigures: ['King Fahd', 'King Abdullah', 'Osama bin Laden'],
      citationIds: [1, 3],
    },
    {
      id: 'saudi-arab-relations-qatar-split-palestine',
      title: '4. 1990 – 2019: Intra-Arab Rivalries, The Qatar Blockade & Fracturing Arab Solidarity on Palestine',
      period: '1990 – 2019',
      categoryTag: 'challenges',
      summary: '1990 Gulf War split; 2017 Qatar blockade; Saudi fracturing of pan-Arab solidarity on Palestine.',
      details: `Saudi Arabia's relationship with the Arab world has been defined by hegemonic competition rather than solidarity. In 1990, Saudi Arabia invited US forces onto Arabian Peninsula soil to defend against Saddam Hussein's Iraqi invasion of Kuwait, fracturing the Arab League and setting the stage for the permanent US military presence that ignited Al-Qaeda's war against the monarchy.

In 2017, Riyadh led a blockade against **Qatar** over Doha's independent foreign policy, Al Jazeera media, and ties with Iran and the Muslim Brotherhood, attempting to economically strangle a neighboring Arab state into submission. The blockade failed, ending in 2021 with no concessions.

Saudi Arabia also systematically undermined Palestinian liberation by purchasing Arab League acquiescence to US-Israeli demands, providing diplomatic cover for the Oslo Accords, and using Palestinian Authority funding as leverage. Riyadh has historically armed and funded competing Palestinian factions to prevent unified resistance. [1][3]`,
      keyFigures: ['King Fahd', 'King Salman', 'Hamad bin Khalifa Al Thani (Qatar)', 'Mahmoud Abbas'],
      citationIds: [1, 3],
    },
    {
      id: 'saudi-yemen-war-mbs-vision-2030-brics',
      title: '5. Present: Yemen War, MbS Absolutism, Abraham Accords & BRICS+ Multipolar Realignment',
      period: 'Present',
      categoryTag: 'challenges',
      summary: '2015 Yemen war; MbS consolidates power; Abraham Accords; BRICS+ accession & China energy ties.',
      details: `In March 2015, Crown Prince Mohammed bin Salman (MbS) launched a devastating military invasion and naval blockade against Yemen, utilizing US and British weaponry (Lockheed Martin, BAE Systems) in a war that produced the world's worst humanitarian crisis: over 150,000 killed, 21 million in food insecurity, and cholera outbreaks affecting millions.

MbS consolidated domestic absolutism by imprisoning rival princes in the Ritz-Carlton Hotel and ordering the assassination of journalist Jamal Khashoggi in the Saudi consulate in Istanbul (2018). Regionally, MbS pursued the **Abraham Accords** normalization track with Israel, formally fracturing the historic Arab position that normalization required Palestinian statehood.

Internationally, Saudi Arabia officially joined BRICS+ in January 2024, signed major energy and tech partnerships with China (Huawei 5G infrastructure), and maintained OPEC+ oil production coordination with Russia, balancing its historical US military dependency with emerging multipolar trade networks and sovereign investment through the $900 billion Public Investment Fund (PIF). [3][4]`,
      keyFigures: ['Mohammed bin Salman (MbS)', 'Xi Jinping', 'Vladimir Putin', 'Jamal Khashoggi'],
      citationIds: [3, 4],
    },
  ],

  sources: [
    {
      id: 1,
      label: 'A History of Saudi Arabia',
      publisher: 'Madawi Al-Rasheed / Cambridge University Press',
      year: '2010',
      excerpt: 'In-depth historical analysis of the Saud-Wahhab alliance, ARAMCO oil concessions, and rentier state formation.',
    },
    {
      id: 2,
      label: 'The Hidden Hand of American Hegemony: Petrodollar Recycling and International Markets',
      publisher: 'David E. Spiro / Cornell University Press',
      year: '1999',
      excerpt: 'Documenting the 1974 Nixon-Kissinger petrodollar agreement locking OPEC oil sales into US dollar reserves.',
    },
    {
      id: 3,
      label: 'Kafala Migrant Exploitation & The War on Yemen',
      publisher: 'Human Rights Watch & Amnesty International',
      year: '2023',
      excerpt: 'Documentation of unfree migrant labor conditions under the Kafala system, the Saudi-Qatar blockade, and US/UK arms sales fueling the Saudi coalition war on Yemen.',
    },
    {
      id: 4,
      label: 'Saudi Arabia BRICS+ Accession & Vision 2030 Economic Report',
      publisher: 'Saudi Public Investment Fund & BRICS Economic Bulletin',
      year: '2024',
      excerpt: 'Official data on the $900B PIF investments, NEOM megacity development, and non-dollar trade integration with China and BRICS+.',
    },
  ],
};
