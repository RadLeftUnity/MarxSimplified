import type { CountryData } from '../types';

export const palestineData: CountryData = {
  id: 'palestine',
  name: 'Palestine',
  shortName: 'Palestine',
  flagEmoji: '🇵🇸',
  flagUrl: '/images/flags/palestine.svg',
  coverImage: '/images/history/palestine.jpg',
  category: 'global-south',
  era: '1917 – Present',
  capital: 'Jerusalem (Al-Quds)',
  keyLeaders: [
    'Ghassan Kanafani',
    'Yasser Arafat',
    'George Habash',
    'Leila Khaled',
    'Edward Said',
    'Khalil al-Wazir (Abu Jihad)',
    'Nayef Hawatmeh',
    'Samiha Khalil',
  ],
  governingParty:
    'Palestine Liberation Organization (PLO)',
  governingIdeology:
    'Capitalist',
  isHistoricState: false,

  officialGovUrl: 'https://www.palestinecabinet.gov.ps/',

  overviewText: `The Palestinian struggle represents one of the paramount anti-colonial national liberation movements of the modern era.

Following the 1917 British Balfour Declaration and the establishment of the British Mandate, Western imperialist powers sought to establish a settler-colonial outpost in the heart of the Arab world to secure control over Middle Eastern oil reserves and trade routes. In 1948, the Nakba (Catastrophe) resulted in the systematic expulsion of over 750,000 Palestinians and the destruction of 500+ villages by Zionist paramilitary forces.

Marxist-Leninist organizations, most notably the Popular Front for the Liberation of Palestine (PFLP) founded by Dr. George Habash and revolutionary strategist Ghassan Kanafani, demonstrated that the liberation of Palestine is inextricably linked to the anti-imperialist overthrow of Western capitalism. Kanafani wrote extensively on how the Palestinian cause is not merely a localized conflict, but a front-line battle against world imperialism, Zionist settler-colonialism, and reactionary Arab monarchies.

The Democratic Front for the Liberation of Palestine (DFLP), founded by Nayef Hawatmeh in 1969, further developed the Marxist analysis, emphasizing class struggle within Palestinian society and the need for a democratic secular state. Today, the Palestinian resistance encompasses a broad spectrum of political forces, from Islamist movements like Hamas (founded 1987) to left-wing factions, all united in opposition to Israeli occupation and apartheid.`,

  contradictions: [
    "The Israeli occupation regime deploys $3.8+ billion in annual US military subsidies to enforce land theft, military checkpoints, and illegal settlement expansion, leading to systemic dispossession of the Palestinian population. US imperialist diplomatic vetoes at the UN explicitly shield the occupation from international law enforcement.",
    "Sea, land, and air blockade of Gaza (escalated into total military destruction) destroyed civilian housing, hospitals, and water infrastructure, leading to catastrophic human suffering. Western imperialist states actively fund and supply munitions for this military campaign to preserve their regional military bridgehead.",
    "Palestinian resistance organizations (such as the PFLP, DFLP, and armed wings of Hamas) wage armed and political anti-colonial struggle, while the Palestinian Authority (PA) in the West Bank maintains security coordination with occupation forces through its Preventive Security and National Security Forces, leading to internal political friction and popular criticism of the PA's collaborationist role.",
    "Mass international popular support and legal accountability cases (such as South Africa at the ICJ, represented by legal team including Adila Hassim and Tembeka Ngcukaitobi) isolate the occupation diplomatically, leading to heightened anti-imperialist class consciousness worldwide. Western imperialist media and state apparatuses weaponize anti-protest laws to suppress domestic Palestinian solidarity movements.",
  ],

  quickFacts: [
    {
      label: '1948 Nakba Dispossession',
      value: '750,000+ Palestinians expelled & 500+ villages destroyed [1]',
    },
    {
      label: '1936 Great Revolt Strike',
      value: '6-Month general strike, longest anti-colonial strike in history [2]',
    },
    {
      label: 'Marxist Resistance Fronts',
      value: 'PFLP founded 1967 (Habash & Kanafani); DFLP founded 1969 (Hawatmeh) [3]',
    },
    {
      label: 'UN Member Recognition',
      value: '139+ UN Member States officially recognize the State of Palestine [4]',
    },
  ],

  timeline: [
    {
      id: 'palestine-balfour-mandate',
      title: '1. 1917 – 1935: The Balfour Declaration, British Mandate & Imperialist Encroachment',
      period: '1917 – 1935',
      categoryTag: 'pre-revolution',
      summary:
        '1917 Balfour Declaration; British Mandate rule; Zionist land purchases dispossessing Arab peasants (Fellahin).',
      details: `In November 1917, British Foreign Secretary Arthur Balfour issued the Balfour Declaration, pledging British imperial support for a "national home for the Jewish people" in Palestine—promising away land that was 90% Arab Palestinian.

Under the League of Nations British Mandate (1920-1948), British authorities facilitated European Zionist land purchases that evicted indigenous Palestinian peasant farmers (Fellahin) from their ancestral land, sparking widespread popular resistance. [2]`,
      keyFigures: ['Arthur Balfour', 'Izz ad-Din al-Qassam'],
      citationIds: [2],
    },
    {
      id: 'palestine-great-revolt',
      title:
        '2. 1936 – 1939: The Great Arab Revolt: 6-Month General Strike & Peasant Insurrection',
      period: '1936 – 1939',
      categoryTag: 'revolution',
      summary:
        '1936 six-month general strike; rural armed peasant uprising against British forces and land confiscation.',
      details: `In April 1936, Palestinian workers and peasants launched a historic six-month general strike—one of the longest general strikes in anti-colonial history—demanding an end to Jewish immigration, a ban on land sales, and national independence.

When the strike was met with British martial law, the movement evolved into an armed rural peasant insurrection (1937–1939). The British military crushed the revolt with brutal force, killing, exiling, or disarming 10% of the adult male Palestinian population. Military commander Fawzi al-Qawuqji led the Arab Liberation Army in the later phases, while the revolt's political leadership was fractured between urban notables and grassroots committees. [2]`,
      keyFigures: ['Izz ad-Din al-Qassam', 'Fawzi al-Qawuqji'],
      citationIds: [2],
    },
    {
      id: 'palestine-nakba-1948',
      title:
        '3. 1947 – 1948: The 1948 Nakba (Catastrophe): Partition, Mass Expulsion & Land Seizure',
      period: '1947 – 1948',
      categoryTag: 'challenges',
      summary:
        'UN Partition Plan; Zionist massacres (Deir Yassin, Tantura); expulsion of 750,000 Palestinians; 500+ villages erased.',
      details: `In November 1947, the UN passed Resolution 181, partitioning Palestine and granting 56% of the land to a Jewish state despite Jews forming only 33% of the population.

Zionist paramilitary forces (Haganah, Irgun, Lehi) launched Plan Dalet—a systematic campaign of ethnic cleansing. Following terror massacres like Deir Yassin (April 1948) and Tantura (May 1948), over 750,000 Palestinians were forcibly driven from their homes into refugee camps in Gaza, the West Bank, Lebanon, Syria, and Jordan, while 500+ Palestinian villages were depopulated and demolished. [1]`,
      keyFigures: ['David Ben-Gurion', 'Menachem Begin'],
      citationIds: [1],
    },
    {
      id: 'palestine-plo-pflp-founding',
      title:
        '4. 1964 – 1969: Founding of PLO, 1967 Naksa, PFLP & DFLP Marxist Resistance',
      period: '1964 – 1969',
      categoryTag: 'revolution',
      summary:
        '1964 PLO founded in Cairo; 1967 Six-Day War occupation; 1967 PFLP founded; 1969 DFLP splits from PFLP.',
      details: `In 1964, the Palestine Liberation Organization (PLO) was established in Cairo under Arab League auspices, with Ahmad Shuqayri as its first chairman. During the June 1967 Six-Day War (the Naksa), Israeli military forces occupied the remaining 22% of historic Palestine (Gaza Strip, West Bank, and East Jerusalem), as well as the Syrian Golan Heights and Egyptian Sinai.

In December 1967, Marxist revolutionaries led by Dr. George Habash and Ghassan Kanafani founded the Popular Front for the Liberation of Palestine (PFLP). The PFLP adopted Marxism-Leninism, analyzing the conflict as a revolutionary anti-imperialist struggle against Western capital, Zionism, and reactionary Arab monarchies.

In 1969, Nayef Hawatmeh split from the PFLP to found the Democratic Front for the Liberation of Palestine (DFLP), emphasizing the need for class struggle within Palestinian society and a democratic secular state in all of Palestine. [3]`,
      keyFigures: [
        'Ahmad Shuqayri',
        'Yasser Arafat',
        'George Habash',
        'Ghassan Kanafani',
        'Nayef Hawatmeh',
      ],
      citationIds: [3],
    },
    {
      id: 'palestine-beirut-kanafani',
      title:
        "5. 1970s – 1982: Internationalist Liberation Front, Siege of Beirut & Kanafani's Legacy",
      period: '1970s – 1982',
      categoryTag: 'challenges',
      summary:
        '1972 Mossad assassination of Ghassan Kanafani; 1982 Israeli invasion of Lebanon & Sabra and Shatila massacre.',
      details: `During the 1970s, the Palestinian resistance established strong internationalist bonds with anti-imperialist movements worldwide (including the African National Congress, Irish Republicans, and Japanese Red Army).

On July 8, 1972, Israeli Mossad assassinated revolutionary writer Ghassan Kanafani in Beirut. In June 1982, Israeli forces invaded Lebanon, laying siege to Beirut and enabling the Sabra and Shatila massacre, where phalangist militias slaughtered 3,000 Palestinian refugees. [1][3]`,
      keyFigures: ['Ghassan Kanafani', 'Leila Khaled', 'Ariel Sharon'],
      citationIds: [1, 3],
    },
    {
      id: 'palestine-first-intifada',
      title:
        '6. 1987 – 1993: The First Intifada: Mass Popular Uprising & Grassroots Committees',
      period: '1987 – 1993',
      categoryTag: 'revolution',
      summary:
        'December 1987 popular uprising; Unified National Leadership of the Uprising (UNLU); stone-throwing youth & strikes; Hamas founded.',
      details: `In December 1987, a mass spontaneous uprising (the First Intifada) erupted across Gaza and the West Bank. The movement was led by popular neighborhood committees, women's cooperatives (including those organized by Samiha Khalil), and the Unified National Leadership of the Uprising (UNLU).

During the same month, the Islamic Resistance Movement (Hamas) was founded, combining Palestinian nationalism with Islamist ideology. Palestinians deployed civil disobedience, commercial boycotts, strike actions, and stone-throwing against Israeli tanks. Israel responded with a brutal "iron fist" policy of breaking bones and mass incarcerations, but the Intifada demonstrated the invincible power of popular grassroots resistance. [2]`,
      keyFigures: ['Marwan Barghouti', 'Samiha Khalil', 'Yasser Arafat'],
      citationIds: [2],
    },
    {
      id: 'palestine-oslo-betrayal',
      title:
        '7. 1993 – 2005: The Oslo Accords, 2000 Second Intifada & Apartheid Wall',
      period: '1993 – 2005',
      categoryTag: 'challenges',
      summary:
        '1993 Oslo Accords partition West Bank into Areas A, B, C; 2000 Second Intifada; building the illegal Apartheid Wall.',
      details: `In September 1993, the Oslo Accords were signed in Washington. Intellectuals like Edward Said denounced Oslo as a "Palestinian Versailles," pointing out that it subcontracted security to the Palestinian Authority (PA) while allowing Israeli settlement expansion to double. The PA established its security forces (Preventive Security, National Security Forces), which would later coordinate with Israeli occupation forces.

The Second Intifada (September 2000) was triggered by multiple factors: the failure of the Camp David Summit, ongoing settlement expansion, popular frustration with PA corruption, and Ariel Sharon's provocative visit to Al-Aqsa Mosque. Israel responded by building an illegal 700-km concrete Separation Wall through West Bank land and establishing hundreds of military checkpoints. [1][4]`,
      keyFigures: ['Edward Said', 'Yasser Arafat', 'Ariel Sharon'],
      citationIds: [1, 4],
    },
    {
      id: 'palestine-gaza-blockade',
      title:
        '8. 2006 – 2022: The Siege of Gaza, BDS Campaign & Apartheid Classification',
      period: '2006 – 2022',
      categoryTag: 'challenges',
      summary:
        '16-year illegal air, land, and sea blockade of Gaza; rise of Boycott, Divestment, Sanctions (BDS) movement; Amnesty & HRW classify Israeli rule as apartheid.',
      details: `Following the 2006 Palestinian democratic elections (which Hamas won), Israel and Western powers imposed a suffocating air, land, and sea blockade on the 2.3 million residents of the Gaza Strip, converting Gaza into an open-air prison.

Concurrently, Palestinian civil society—led by the Palestinian BDS National Committee (BNC)—launched the global Boycott, Divestment, Sanctions (BDS) campaign in 2005, inspired by the anti-apartheid struggle in South Africa. In 2021–2022, Human Rights Watch and Amnesty International officially classified Israeli rule as Apartheid. [1][4][5]`,
      keyFigures: ['Omar Barghouti', 'Gaza Resistance Forces'],
      citationIds: [1, 4, 5],
    },
    {
      id: 'palestine-global-uprising',
      title:
        '9. 2023 – Present: Global Anti-Imperialist Uprising & The Struggle for Full Liberation',
      period: '2023 – Present',
      categoryTag: 'successes',
      summary:
        'Mass global solidarity movement; ICJ South Africa genocide case; unbroken popular resistance for self-determination.',
      details: `In late 2023, the Palestinian resistance launched an unprecedented assault against the Gaza blockade, leading to intense Israeli bombardment and military assault. In response, South Africa brought a historic case before the International Court of Justice (ICJ), accusing Israel of genocide under international law. The South African legal team, including Adila Hassim and Tembeka Ngcukaitobi, presented compelling evidence of genocidal intent.

In January 2024, the ICJ issued a provisional ruling finding it "plausible" that Israel's actions constitute genocide. Globally, millions of people took to the streets across every continent—including mass student encampments in US and UK universities—forming a historic anti-imperialist united front demanding an end to US weapons shipments, the dismantling of settler-colonial apartheid, and the establishment of a free, sovereign Palestine from the River to the Sea. [1][4]`,
      keyFigures: [
        'Palestinian Popular Movements',
        'Adila Hassim',
        'Tembeka Ngcukaitobi',
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
        'Authoritative archival investigation of Plan Dalet, the 1948 Nakba massacres, and the systematic expulsion of 750,000 Palestinians.',
    },
    {
      id: 2,
      label: 'The 1936-39 Revolt in Palestine',
      publisher: 'Ghassan Kanafani / Committee for Democratic Palestine',
      year: '1972',
      excerpt:
        "Kanafani's Marxist historical analysis of the 1936 Great Revolt, peasant struggle, British imperialism, and feudal leadership betrayals.",
    },
    {
      id: 3,
      label: 'Strategy for the Liberation of Palestine',
      publisher:
        'Popular Front for the Liberation of Palestine (PFLP) / Foreign Languages Press',
      year: '1969',
      excerpt:
        'The foundational Marxist-Leninist theoretical document of the PFLP, outlining the strategy of anti-imperialist armed struggle and socialist revolution.',
    },
    {
      id: 4,
      label:
        'A Threshold Crossed: Israeli Authorities and the Crimes of Apartheid and Persecution',
      publisher: 'Human Rights Watch',
      year: '2021',
      url: 'https://www.hrw.org/report/2021/04/27/threshold-crossed/israeli-authorities-and-crimes-apartheid-and-persecution',
      excerpt:
        'Comprehensive legal documentation certifying Israeli government practices as committing the international crime of Apartheid.',
    },
    {
      id: 5,
      label:
        "Israel's Apartheid Against Palestinians: Cruel System of Domination and Crime Against Humanity",
      publisher: 'Amnesty International',
      year: '2022',
      url: 'https://www.amnesty.org/en/latest/news/2022/02/israels-apartheid-against-palestinians-a-cruel-system-of-domination-and-a-crime-against-humanity/',
      excerpt:
        'Amnesty International report detailing how Israeli policies constitute apartheid under international law.',
    },
  ],
};