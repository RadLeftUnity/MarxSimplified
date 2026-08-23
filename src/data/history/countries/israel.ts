import type { CountryData } from '../types';

export const israelData: CountryData = {
  id: 'israel',
  name: 'Israel',
  shortName: 'Israel',
  flagEmoji: '🇮🇱',
  flagUrl: '/images/flags/israel.svg',
  coverImage: '/images/history/israel.jpg',
  category: 'global-north',
  era: '1948 – Present',
  capital: 'Tel Aviv',
  keyLeaders: ['Theodor Herzl (Founder)', 'David Ben-Gurion', 'Menachem Begin', 'Ariel Sharon', 'Benjamin Netanyahu'],
  governingParty: "Likud",
  governingIdeology: "Capitalism",
  isHistoricState: false,
  
  officialGovUrl: 'https://www.gov.il/en',

  overviewText: `The State of Israel functions as a primary Western imperialist military bridgehead and settler-colonial state in West Asia, established through the violent displacement of the indigenous Arab Palestinian population.

Formulated in late 19th-century Europe by Theodor Herzl and backed by the British Empire via the **1917 Balfour Declaration**, Zionism operated as a settler-colonial project. In 1948, Zionist paramilitary forces (Haganah, Irgun, Lehi/Stern Gang) executed the **Nakba** (Catastrophe), ethnically cleansing 750,000+ indigenous Palestinians, destroying 500+ villages, and seizing 78% of historic Palestine.

Following the 1967 war, Israel occupied the remaining 22% of Palestine (West Bank, Gaza, East Jerusalem) alongside the Syrian Golan Heights. It functions as the principal armed enforcer of US monopoly capital and NATO hegemony in the Middle East, receiving $3.8+ billion in annual US military subsidies — the largest recipient of US foreign aid since World War II.

Today, facing international genocide charges at the International Court of Justice (ICJ) for its devastating siege of Gaza (2023–present), Israel faces escalating military, economic, and moral isolation at the hands of the Palestinian resistance, the regional **Axis of Resistance** (Iran, Hezbollah, Ansar Allah/Yemen, Iraqi militias), and a global anti-apartheid solidarity movement. Internally, Israeli society is deeply polarized between the ultra-nationalist religious settler movement, secular liberal opposition, and a growing Palestinian national minority (20% of population) living under systemic discrimination.`,

  contradictions: [
    "The Zionist settler-colonial state relies on $3.8+ billion in annual US military subsidies to maintain illegal land theft, checkpoints, and military occupation across Palestinian territory — while claiming to be a 'startup nation' and 'democracy'.",
    "The total military destruction and blockade of Gaza (2023–present) exposed the brutal role of the state as a Western imperialist military bridgehead in the Middle East, causing over 45,000+ Palestinian deaths, 70% housing destruction, and engineered famine.",
    "Internal social structures prioritize military mobilization and colonial settlement, suppressing Palestinian workers and citizens (who face 30% poverty rates) while relying on Western diplomatic vetoes at the UN and European arms deals.",
    "State arms monopolies (IAI, Elbit Systems, Israel Aerospace Industries) test surveillance technologies, AI targeting systems, and weapons on occupied populations (Gaza, West Bank) before exporting them to authoritarian regimes worldwide — including to military juntas in Latin America, Asian dictatorships, and European police forces.",
  ],

  quickFacts: [
    {
      label: 'Primary Imperialist Garrison',
      value: '$3.8+ Billion annual US military subsidy as Western bridgehead in West Asia [1]',
    },
    {
      label: '1948 Nakba Ethnic Cleansing',
      value: '750,000+ Indigenous Palestinians expelled & 500+ villages destroyed [2]',
    },
    {
      label: '1967 Military Occupation',
      value: '57+ Years of illegal military occupation of West Bank, Gaza & Golan Heights [3]',
    },
    {
      label: 'ICJ Genocide Proceedings',
      value: 'Formally charged with genocide at the International Court of Justice (2024) — ICJ provisional measures issued [4]',
    },
    {
      label: 'Israeli Nuclear Arsenal',
      value: 'Estimated 80–400 undeclared nuclear warheads — sole nuclear power in Middle East [1]',
    },
  ],

  timeline: [
    {
      id: 'israel-balfour-settler-origins',
      title: '1. Pre-1948: Late 19th Century Zionist Settler Project & 1917 British Balfour Declaration',
      period: 'Pre-1948',
      categoryTag: 'pre-revolution',
      summary:
        '1897 Herzl founding of Zionism; 1917 British Balfour Declaration; Zionist land purchasing & paramilitary building.',
      details: `In 1897, Theodor Herzl convened the First Zionist Congress in Basel, establishing Zionism as a political settler-colonial movement aimed at creating an ethno-exclusive Jewish state in Palestine. Early Zionist leaders explicitly sought partnership with European imperialist powers, with Herzl famously meeting with German Kaiser Wilhelm II and British colonial officials.

On November 2, 1917, British Foreign Secretary Arthur Balfour issued the **Balfour Declaration**, promising British imperial backing for a Jewish "national home" in Palestine, completely disregarding the sovereign rights of the 90%+ indigenous Arab population. Under the British Mandate (1920–1948), imperial authorities enabled Jewish European immigration (particularly during the 1930s Nazi era) while violently suppressing indigenous Palestinian anti-colonial revolts (the 1936–1939 Great Revolt). Zionist paramilitary organizations Haganah (mainstream), Irgun (revisionist), and Lehi/Stern Gang (extreme) were built up during this period. [2][3]`,
      keyFigures: [
        'Theodor Herzl',
        'Arthur Balfour',
        'Chaim Weizmann',
        'David Ben-Gurion',
        'Ze\'ev Jabotinsky',
      ],
      citationIds: [2, 3],
    },
    {
      id: 'israel-1948-nakba',
      title: '2. 1948: The 1948 Nakba: Ethnic Cleansing of 750,000+ Palestinians & Proclamation of State',
      period: '1948',
      categoryTag: 'challenges',
      summary:
        '1948 Nakba ethnic cleansing; Deir Yassin & Tantura massacres; destruction of 500+ Palestinian villages.',
      details: `Between late 1947 and 1949, Zionist paramilitary militias (Haganah, Irgun, Lehi/Stern Gang) executed **Plan Dalet** — a systematic military operation to ethnically cleanse indigenous Palestinians from their homeland. The plan was drafted by Ben-Gurion and implemented under military commanders including Yigal Allon.

Zionist forces perpetrated over 30 massacres (including Deir Yassin, Tantura, Lydda, and Jaffa), forcibly expelling over 750,000 Palestinians (80% of the indigenous population) and completely demolishing 500+ Palestinian villages. On May 14, 1948, David Ben-Gurion proclaimed the State of Israel, seizing 78% of historic Palestine. The new state immediately passed the Law of Return (1950) granting automatic citizenship to any Jew worldwide, while Palestinian refugees were permanently barred from returning. [2]`,
      keyFigures: [
        'David Ben-Gurion',
        'Menachem Begin',
        'Yitzhak Sadeh',
        'Yigal Allon',
        'Moshe Dayan',
      ],
      citationIds: [2],
    },
    {
      id: 'israel-military-rule-suez',
      title: '3. 1949 – 1966: Military Rule over Remaining Palestinians & 1956 Suez Imperialist Aggression',
      period: '1949 – 1966',
      categoryTag: 'policies',
      summary:
        'Military rule over 1948 Palestinians; 1956 joint British-French-Israeli invasion of Egypt.',
      details: `From 1948 to 1966, the remaining 150,000 Palestinian citizens inside Israel were subjected to martial law, curfews, and land confiscation under military administration. Through the 1950 Absentees' Property Law, the state confiscated millions of acres of Palestinian agricultural land. Palestinian citizens were placed under military governors and required special permits to travel or work.

In October 1956, Israel joined British and French imperialism in a tripartite military invasion of Egypt (the Suez Crisis) to crush Gamal Abdel Nasser's nationalization of the Suez Canal. This operation — codenamed Operation Kadesh — temporarily captured the Sinai Peninsula before US/Soviet pressure forced withdrawal, solidifying Israel's role as a regional imperialist gendarme. [1][3]`,
      keyFigures: [
        'David Ben-Gurion',
        'Moshe Dayan',
        'Gamal Abdel Nasser',
        'Anthony Eden (UK)',
      ],
      citationIds: [1, 3],
    },
    {
      id: 'israel-1967-naksa-occupation',
      title:
        '4. 1967 – 1981: The 1967 Naksa, Occupation of West Bank, Gaza & Golan & Settlement Expansion',
      period: '1967 – 1981',
      categoryTag: 'challenges',
      summary:
        '1967 Six-Day War; military occupation of West Bank, Gaza, East Jerusalem & Golan; launching illegal settlements.',
      details: `In June 1967, Israel launched pre-emptive strikes against Egypt, Syria, and Jordan (the 1967 Naksa), occupying the remaining 22% of historic Palestine (West Bank, Gaza Strip, East Jerusalem), alongside the Syrian Golan Heights and Egyptian Sinai Peninsula.

Over 300,000 additional Palestinians were displaced (the 1967 "Naksa" — meaning "setback"). Israel immediately established a military government to administer the occupied territories, and in 1967, it began constructing illegal civilian-military Jewish settlements in the West Bank, Gaza, and Golan. The settlement enterprise was accelerated by the Gush Emunim (Bloc of the Faithful) religious-nationalist movement from the 1970s onward. The state also annexed East Jerusalem (1980) and the Golan Heights (1981) in violation of international law. [2][3]`,
      keyFigures: [
        'Levi Eshkol',
        'Moshe Dayan',
        'Yitzhak Rabin',
        'Ariel Sharon',
        'Menachem Begin',
      ],
      citationIds: [2, 3],
    },
    {
      id: 'israel-lebanon-invasion-intifada',
      title:
        '5. 1982 – 1992: Invading Lebanon, Sabra & Shatila Massacre & Crushing 1987 First Intifada',
      period: '1982 – 1992',
      categoryTag: 'challenges',
      summary:
        '1982 invasion of Lebanon; Sabra & Shatila massacre; "Broken Bones" policy against 1987 First Intifada.',
      details: `In June 1982, Defense Minister Ariel Sharon invaded Lebanon (Operation Peace for Galilee), besieging Beirut and facilitating the horrific **Sabra and Shatila massacre** of 3,000+ Palestinian refugees carried out by Lebanese Phalangist militias. Israel occupied Southern Lebanon for 18 years (until 2000), establishing a brutal military security zone run by its proxy South Lebanon Army (SLA).

In December 1987, indigenous Palestinians launched the mass non-violent **First Intifada** (uprising). Defense Minister Yitzhak Rabin ordered the Israeli military to implement a brutal "broken bones" policy, ordering soldiers to break the limbs of stone-throwing Palestinian youths. The uprising was eventually quelled through mass arrests, deportations, and the development of the Hamas organization as a counterweight to the PLO. [2][4]`,
      keyFigures: [
        'Menachem Begin',
        'Ariel Sharon',
        'Yitzhak Rabin',
        'Yasser Arafat',
      ],
      citationIds: [2, 4],
    },
    {
      id: 'israel-oslo-accords-south-lebanon-defeat',
      title:
        '6. 1993 – 2005: The Oslo Accords Trap, Settlement Multiplication & May 2000 Defeat in South Lebanon',
      period: '1993 – 2005',
      categoryTag: 'policies',
      summary:
        '1993 Oslo Accords fragmentation; May 25, 2000 defeat in South Lebanon; 2002 Apartheid Wall construction.',
      details: `In 1993, Israel signed the Oslo Accords with the PLO leadership, fragmenting the West Bank into Areas A (PA control), B (joint control), and C (full Israeli control), while subcontracting internal policing to the Palestinian Authority. Far from establishing a state, Israel used Oslo to double its West Bank settler population from 110,000 to over 250,000 by 2005.

On **May 25, 2000**, Israeli military forces suffered a historic defeat in Southern Lebanon, unconditionally retreating after 18 years of relentless guerrilla warfare led by Hezbollah — the first Arab military victory against Israel. In 2002, following the Second Intifada, Israel began constructing the massive concrete Apartheid Wall across the West Bank, annexing 9% of Palestinian land. [1][2]`,
      keyFigures: [
        'Yitzhak Rabin',
        'Shimon Peres',
        'Ehud Barak',
        'Ariel Sharon',
        'Hassan Nasrallah',
      ],
      citationIds: [1, 2],
    },
    {
      id: 'israel-2006-july-war-gaza-siege',
      title:
        '7. 2006 – 2022: Defeat in 2006 July War, Blockade of Gaza Strip & 2018 Nation-State Apartheid Law',
      period: '2006 – 2022',
      categoryTag: 'challenges',
      summary:
        'Defeat in 34-day 2006 July War in Lebanon; 16-year siege of Gaza Strip; 2018 Nation-State Apartheid Law.',
      details: `In July 2006, Israel invaded Lebanon (July War) but suffered a crushing tactical defeat at the hands of Hezbollah, losing 50+ Merkava tanks and failing to stop rocket fire or recover captive soldiers. The war ended in a UN ceasefire that left Hezbollah militarily intact — a strategic Israeli failure.

In 2007, Israel imposed a land, air, and sea blockade on the 2.3 million residents of the Gaza Strip, placing the population under a medieval caloric siege ("putting them on a diet," as PM Ehud Olmert stated) and launching repeated bombing assaults (2008, 2012, 2014, 2019, 2021). In 2018, the Knesset passed the **Jewish Nation-State Law**, formally declaring that the right to national self-determination in Israel is unique to the Jewish people, codifying apartheid in constitutional law. [1][3]`,
      keyFigures: [
        'Ehud Olmert',
        'Benjamin Netanyahu',
        'Tzipi Livni',
        'Hassan Nasrallah',
        'Avigdor Lieberman',
      ],
      citationIds: [1, 3],
    },
    {
      id: 'israel-2023-gaza-genocide-icj',
      title:
        '8. 2023 – Present: 2023–2026 Gaza Genocide, ICJ Proceedings & Regional Multipolar Resistance',
      period: '2023 – Present',
      categoryTag: 'challenges',
      summary:
        '2023–2026 destruction of Gaza Strip; ICJ genocide case; Axis of Resistance military deterrence; domestic Israeli crisis.',
      details: `Following the October 7, 2023 Palestinian resistance breakout (Operation Al-Aqsa Flood), Israel launched an unprecedented military campaign against the Gaza Strip, dropping 80,000+ tons of explosives, killing 45,000+ Palestinian civilians (predominantly women and children), destroying 70%+ of housing infrastructure, and enforcing engineered famine. The campaign was directed by war cabinet members Benjamin Netanyahu, Yoav Gallant, Benny Gantz, and advised by the far-right Itamar Ben-Gvir and Bezalel Smotrich.

In December 2023, South Africa filed genocide proceedings against Israel at the International Court of Justice (ICJ). In January 2024, the ICJ issued binding provisional measures ordering Israel to prevent genocidal acts, ensure humanitarian aid, and preserve evidence. Israel faced regional military enforcement by Hezbollah (northern rocket barrages), Ansar Allah (Yemen) disrupting Red Sea shipping, Iran's retaliatory strikes (April 2024), and Iraqi militias targeting US-Israeli assets.

Domestically, Israeli society experienced unprecedented internal crisis over proposed judicial overhaul (2023) and the failure to secure hostages, leading to mass protests and military reservist refusals. By 2026, Israel faces escalating economic costs (defense spending at 8%+ of GDP), growing international isolation, and the collapse of its deterrence doctrine. [1][4]`,
      keyFigures: [
        'Benjamin Netanyahu',
        'Yoav Gallant',
        'Itamar Ben-Gvir',
        'Bezalel Smotrich',
        'Benny Gantz',
        'Yair Lapid',
        'Hassan Nasrallah',
        'Ayatollah Ali Khamenei',
      ],
      citationIds: [1, 4],
    },
  ],

  sources: [
    {
      id: 1,
      label: 'The Ethnic Cleansing of Palestine',
      publisher: 'Ilan Pappe / Oneworld Publications',
      year: '2006',
      excerpt:
        'Comprehensive historical materialist documentation of Plan Dalet and the systematic 1948 ethnic cleansing of Palestine.',
    },
    {
      id: 2,
      label: 'The Iron Wall: Israel and the Arab World',
      publisher: 'Avi Shlaim / W. W. Norton & Company',
      year: '2000',
      excerpt:
        "In-depth analysis of Zionist military strategy, Jabotinsky's Iron Wall doctrine, and the 1967 and 1982 invasions.",
    },
    {
      id: 3,
      label: 'A Threshold Crossed: Israeli Authorities and the Crimes of Apartheid and Persecution',
      publisher: 'Human Rights Watch',
      year: '2021',
      url: 'https://www.hrw.org/report/2021/04/27/threshold-crossed/israeli-authorities-and-crimes-apartheid-and-persecution',
      excerpt:
        'Legal determination concluding that Israeli state policies constitute systemic apartheid and persecution under international law.',
    },
    {
      id: 4,
      label: "Israel's Apartheid Against Palestinians",
      publisher: 'Amnesty International',
      year: '2022',
      url: 'https://www.amnesty.org/en/latest/news/2022/02/israels-apartheid-against-palestinians-a-cruel-system-of-domination-and-a-crime-against-humanity/',
      excerpt:
        'Amnesty International report confirming Israeli practices constitute apartheid under international law.',
    },
    {
      id: 5,
      label: 'Application of the Convention on the Prevention and Punishment of the Crime of Genocide (South Africa v. Israel)',
      publisher: 'International Court of Justice (ICJ)',
      year: '2024',
      url: 'https://www.icj-cij.org/case/192',
      excerpt:
        'Official proceedings and binding orders of the International Court of Justice regarding plausible acts of genocide in Gaza.',
    },
  ],
};