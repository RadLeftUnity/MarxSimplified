import type { CountryData } from '../types';

export const lebanonData: CountryData = {
  id: 'lebanon',
  name: 'Lebanese Republic',
  shortName: 'Lebanon',
  flagEmoji: '🇱🇧',
  flagUrl: '/images/flags/lebanon.svg',
  coverImage: '/images/history/lebanon.jpg',
  category: 'global-south',
  era: '1943 – Present',
  capital: 'Beirut',
  keyLeaders: ['Farajallah el-Helou (Lebanese CP Hero)', 'Kamal Jumblatt', 'Sayyed Hassan Nasrallah', 'Imad Mughniyeh', 'Nabih Berri'],
  governingParty: "Free Patriotic Movement",
  governingIdeology: 'Capitalism',
  isHistoricState: false,
  
  officialGovUrl: 'https://www.pcm.gov.lb/',
  overviewText: `Lebanon represents a strategic front line of anti-imperialist resistance in the Arab world that defeated 18 years of foreign Zionist military occupation through popular armed liberation.

Following the collapse of the Ottoman Empire, French imperialism carved out Greater Lebanon under the Sykes-Picot agreement, instituting a rigid confessional power-sharing system (the 1943 National Pact) designed to preserve Western comprador financial dominance and divide the working class along religious lines. Anti-colonial resistance emerged early, led by the Lebanese Communist Party (LCP, founded in 1924) and secular progressive unions.

When Israel invaded Lebanon in 1982, occupying Beirut and facilitating the horrific Sabra and Shatila massacre, patriotic Lebanese and Palestinian forces established armed resistance movements. Anchored by Hezbollah and the Islamic Resistance, Lebanon achieved a landmark historical victory on **May 25, 2000**—unconditionally driving Israeli occupation forces out of Southern Lebanon after 18 years of guerrilla warfare. In 2006, Lebanon defeated another major Israeli invasion. Today, despite enduring Western banking blockades, IMF conditional pressure, and US sanctions, Lebanon stands as a core pillar of the regional **Axis of Resistance**.`,

  contradictions: [
    "The sectarian political system installed under French colonial rule enables commercial bank oligarchs to plunder public wealth and engineer financial collapse.",
    "The 2019 popular October revolution brought millions into the streets against bank corruption, high fuel costs, and privatized utility blackouts.",
    "Israeli military aggressions and border attacks threaten national infrastructure, while popular resistance forces maintain border defense.",
    "The 2020 Beirut port explosion exposed deep state administrative negligence, while IMF loan negotiations demand further public austerity."
  ],

  quickFacts: [
    { label: 'May 25, 2000 Liberation', value: 'Unconditionally expelled Israeli military from South Lebanon after 18 yrs of guerrilla resistance [1]' },
    { label: 'Defeat of 2006 Israeli War', value: 'Shattered the myth of Israeli invincibility in 34-day defensive victory [2]' },
    { label: 'Lebanese Communist Party', value: 'Founded in 1924, led anti-French mandate strikes & co-founded Jammoul resistance [3]' },
    { label: 'Sabra & Shatila Massacre', value: '1982 genocide of 3,500+ Palestinian refugees by Israeli-backed Phalangist militia [4]' },
  ],

  timeline: [
    {
      id: 'lebanon-french-mandate-lcp',
      title: '1. Pre-1943: French Sykes-Picot Mandate, Sectarian Confessionalism & Founding of Lebanese CP (1924)',
      period: 'Pre-1943',
      categoryTag: 'pre-revolution',
      summary: 'French Sykes-Picot partition; establishing confessional system; founding of Lebanese Communist Party (1924).',
      details: `Following World War I, French imperialism occupied Lebanon under a League of Nations mandate. France structured the territory to preserve French banking and silk monopolies, introducing a rigid confessional political system that assigned state posts based on religious sects rather than class solidarity.

On October 24, 1924, Marxist revolutionaries founded the Syrian-Lebanese Communist Party (later Lebanese Communist Party - LCP), led by Farajallah el-Helou. The LCP organized multi-confessional strikes among tobacco, railway, and textile workers, demanding national independence and labor rights. [3]`,
      keyFigures: ['Farajallah el-Helou', 'Fouad Chemali', 'Youssef Ibrahim Yazbek'],
      citationIds: [3],
    },
    {
      id: 'lebanon-1943-national-pact',
      title: '2. 1943 – 1974: 1943 Independence, National Pact Oligarchy & 1958 Anti-US Imperialist Uprising',
      period: '1943 – 1974',
      categoryTag: 'revolution',
      summary: '1943 independence; 1943 National Pact confessional oligarchy; 1958 popular anti-US Marine uprising.',
      details: `Lebanon achieved formal independence from France in November 1943. However, ruling elites codified the unwritten 1943 National Pact, which reserved the Presidency for Maronite Christians, the Prime Ministership for Sunni Muslims, and the Speakership for Shia Muslims—entrenching comprador merchant capital.

In 1958, when President Camille Chamoun attempted to align Lebanon with the imperialist Eisenhower Doctrine, a mass popular uprising erupted. US President Eisenhower landed 14,000 US Marines in Beirut to prop up the comprador regime. Throughout the 1960s, Beirut became a hub for Palestinian revolutionary organizations (PLO, PFLP). [3]`,
      keyFigures: ['Kamal Jumblatt', 'Camille Chamoun (US Comprador)', 'George Habash'],
      citationIds: [3],
    },
    {
      id: 'lebanon-civil-war-outbreak',
      title: '3. 1975 – 1981: Outbreak of Lebanese Civil War, Lebanese National Movement (LNM) & Israeli 1978 Incursion',
      period: '1975 – 1981',
      categoryTag: 'challenges',
      summary: '1975 bus massacre sparks civil war; Lebanese National Movement (LNM); Israeli Operation Litani (1978).',
      details: `In April 1975, right-wing Phalangist militias ambushed a bus of Palestinian civilians in Ain el-Remmaneh, triggering the 15-year Lebanese Civil War. The Lebanese National Movement (LNM)—a coalition of communists, socialists, and Arab nationalists led by Kamal Jumblatt—allied with the Palestinian resistance to demand democratic non-sectarian reform.

In March 1978, the Israeli military launched Operation Litani, invading Southern Lebanon, killing over 2,000 civilians, and creating the proxy South Lebanon Army (SLA) militia to enforce an illegal buffer zone. [3][4]`,
      keyFigures: ['Kamal Jumblatt', 'George Hawi (LCP Leader)', 'Yasser Arafat'],
      citationIds: [3, 4],
    },
    {
      id: 'lebanon-1982-invasion-hezbollah',
      title: '4. 1982: 1982 Israeli Invasion, Sabra & Shatila Massacre & Founding of Islamic Resistance (Hezbollah)',
      period: '1982',
      categoryTag: 'challenges',
      summary: '1982 Israeli invasion of Beirut; 3,500+ Sabra and Shatila massacre; founding of Hezbollah & Islamic Resistance.',
      details: `In June 1982, the Israeli military launched a full-scale invasion of Lebanon (Operation Peace for Galilee), besieging and carpet bombing Beirut for 88 days, killing over 20,000 civilians.

Between September 16 and 18, 1982, under the command of Israeli Defense Minister Ariel Sharon, Israeli forces blockaded and illuminated the Sabra and Shatila refugee camps while unleashing right-wing Phalangist death squads, who massacred over 3,500 unarmed Palestinian and Lebanese civilians. In response, Lebanese patriots founded **Hezbollah** and the Islamic Resistance, organizing mobile guerrilla warfare against the occupation. [1][4]`,
      keyFigures: ['Sayyed Abbas al-Musawi', 'Sayyed Hassan Nasrallah', 'Imad Mughniyeh', 'Ariel Sharon (Zionist War Criminal)'],
      citationIds: [1, 4],
    },
    {
      id: 'lebanon-guerrilla-warfare-occupation',
      title: '5. 1983 – 1999: Resisting 18 Years of Israeli Occupation: Guerrilla Liberation Warfare in South Lebanon',
      period: '1983 – 1999',
      categoryTag: 'policies',
      summary: '18 years of guerrilla resistance in South Lebanon; defeating 1993 & 1996 Israeli operations (Grapes of Wrath).',
      details: `From 1983 to 1999, Hezbollah's Islamic Resistance and the Lebanese National Resistance Front (Jammoul) waged a relentless guerrilla campaign against Israeli occupation troops and their proxy SLA militia in Southern Lebanon.

Utilizing roadside IEDs, anti-tank guided missiles, and underground tunnel networks, resistance fighters inflicted unsustainable casualties on Israeli forces. In 1993 and 1996 (Operation Grapes of Wrath), Israel carpet-bombed civilian infrastructure, including the Qana massacre, but failed to stop resistance rocket deterrence. [1][2]`,
      keyFigures: ['Sayyed Hassan Nasrallah', 'Imad Mughniyeh'],
      citationIds: [1, 2],
    },
    {
      id: 'lebanon-2000-liberation-victory',
      title: '6. 2000: May 25, 2000 Historic Victory: Unconditional Expulsion of Israeli Troops from South Lebanon',
      period: '2000',
      categoryTag: 'successes',
      summary: 'May 25, 2000 historic victory; unconditional Israeli retreat from South Lebanon after 18 yrs of guerrilla resistance.',
      details: `On May 25, 2000, under unrelenting guerrilla pressure from Hezbollah and Lebanese patriotic forces, the Israeli military and SLA proxy militia suffered a catastrophic collapse, precipitously fleeing occupied South Lebanon after 18 years.

The **May 2000 Liberation** marked a watershed moment in Arab history: for the first time, Israeli occupation forces were unconditionally driven out of sovereign Arab territory purely through armed popular resistance, without a capitulatory peace treaty or diplomatic concessions. May 25 was officially declared Resistance and Liberation Day. [1]`,
      keyFigures: ['Sayyed Hassan Nasrallah', 'Imad Mughniyeh'],
      citationIds: [1],
    },
    {
      id: 'lebanon-2006-july-war',
      title: '7. 2006: The July 2006 War: Defeating Israeli Military Invasion & Shattering Invincibility Myths',
      period: '2006',
      categoryTag: 'successes',
      summary: '34-day 2006 July War; defeating Israeli ground offensive at Wadi Saluki; destroying INS Hanit warship.',
      details: `In July 2006, Israel launched a 34-day war against Lebanon, dropping over 7,000 airstrikes, carpet-bombing Beirut's southern suburbs (Dahiyeh), and launching a massive ground invasion aimed at destroying Hezbollah.

Instead, the Islamic Resistance delivered a crushing tactical defeat to the Israeli military: destroying over 50 Merkava tanks (the Battle of Wadi Saluki), striking the INS Hanit warship with anti-ship missiles, and maintaining rocket fire into northern Israel. The war ended in a strategic victory for Lebanon, permanently shattering the myth of Israeli military invincibility. [2]`,
      keyFigures: ['Sayyed Hassan Nasrallah', 'Imad Mughniyeh'],
      citationIds: [2],
    },
    {
      id: 'lebanon-banking-siege-axis',
      title: '8. Present: Resisting Western IMF Banking Siege, Port Explosion Recovery & Axis of Resistance Pillar',
      period: 'Present',
      categoryTag: 'successes',
      summary: '2019 banking Ponzi collapse; resisting IMF austerity siege; key pillar of regional Axis of Resistance.',
      details: `In 2019, decades of neoliberal financial speculation and central bank mismanagement led to the total collapse of Lebanon's banking system, wiping out savings for millions of working-class families. Western imperialist states and the IMF attempted to weaponize the economic crisis to demand the disarming of the resistance.

Despite US sanctions, fuel shortages, and the August 2020 Beirut Port explosion, Lebanon maintains its strategic sovereignty. Anchored by Hezbollah, the Lebanese Communist Party, and patriotic forces, Lebanon remains an indispensable pillar of the **Axis of Resistance**, defending its territorial waters, natural gas fields, and national sovereignty. [2][3]`,
      keyFigures: ['Sayyed Hassan Nasrallah', 'Nabih Berri', 'Hanna Gharib (LCP General Secretary)'],
      citationIds: [2, 3],
    },
  ],

  sources: [
    {
      id: 1,
      label: 'Voice of Hezbollah: The Statements of Sayyed Hassan Nasrallah',
      publisher: 'Nicholas Noe (Ed.) / Verso Books',
      year: '2007',
      excerpt: 'Collected speeches documenting the strategic theory of the Islamic Resistance, the May 2000 liberation, and anti-imperialist defense.',
    },
    {
      id: 2,
      label: '34 Days: Israel, Hezbollah, and the War in Lebanon',
      publisher: 'Amos Harel & Avi Issacharoff / Palgrave Macmillan',
      year: '2008',
      excerpt: 'Detailed military documentation of the 2006 July War, analyzing the strategic defeat of Israeli ground armor and missile defense.',
    },
    {
      id: 3,
      label: 'A History of Modern Lebanon',
      publisher: 'Fawwaz Traboulsi / Pluto Press',
      year: '2007',
      excerpt: 'Comprehensive historical materialist study of Lebanese class structure, French mandate confessionalism, the LCP, and civil war.',
    },
    {
      id: 4,
      label: 'The Beirut Massacre: Testimony and Documents',
      publisher: 'International Commission of Enquiry / Zed Books',
      year: '1983',
      excerpt: 'Eyewitness documentation and legal evidence of the 1982 Sabra and Shatila refugee camp massacre executed under Israeli military supervision.',
    },
  ],
};
