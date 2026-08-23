import type { CountryData } from '../types';

export const tanzaniaData: CountryData = {
  id: 'tanzania',
  name: 'United Republic of Tanzania',
  shortName: 'Tanzania',
  flagEmoji: '🇹🇿',
  flagUrl: '/images/flags/tanzania.svg',
  coverImage: '/images/history/tanzania.jpg',
  category: 'global-south',
  era: '1964 – Present',
  capital: 'Dodoma / Dar es Salaam',
  keyLeaders: ['Julius Nyerere (Mwalimu)', 'Abeid Karume', 'Ali Hassan Mwinyi', 'Benjamin Mkapa', 'Samia Suluhu Hassan'],
  governingParty: "Chama Cha Mapinduzi (CCM)",
  governingIdeology: "Socialism",
  isHistoricState: false,
  
  officialGovUrl: 'https://www.tanzania.go.tz/',
  overviewText: `Tanzania represents a pioneering African socialist state that served as the primary rear-base headquarters for Southern African anti-colonial liberation movements, constructed with historic aid from China (**TAZARA Freedom Railway**) and the Soviet Union.

In 1905, indigenous Tanganyikans launched the Maji Maji Rebellion against brutal German colonial cotton labor. Following WWI, Tanganyika became a British mandate colony until **Julius Nyerere** and TANU won independence on December 9, 1961. In January 1964, the **Zanzibar Revolution** overthrew feudal Arab sultans, uniting with Tanganyika in April 1964 to form the United Republic of Tanzania.

In February 1967, Nyerere issued the **Arusha Declaration**, establishing **Ujamaa** (African Socialism): nationalizing foreign banks, sisal plantations, and industrial cartels. Under Nyerere, Chairman Mao Zedong and Premier Zhou Enlai partnered with Tanzania to build the **TAZARA Railway (1970–1975)**, a 1,860km engineering marvel constructed by 50,000 Chinese, Tanzanian, and Zambian workers using $500 million in interest-free Chinese aid to break apartheid South Africa's economic blockade against landlocked Zambia. Tanzania hosted military training camps for FRELIMO (Mozambique), ZANLA (Zimbabwe), MPLA (Angola), and ANC (South Africa). Today, under President Samia Suluhu Hassan, Tanzania remains a core pillar of South-South economic integration.`,

  contradictions: [
    "Julius Nyerere's 1967 Arusha Declaration instituted Ujamaa African socialism, nationalizing banks and building national unity across diverse ethnic groups.",
    "Market reforms in the 1990s introduced foreign gold mining conglomerates, creating friction over mineral royalties and small-scale miner livelihoods.",
    "President Samia Suluhu Hassan balances foreign infrastructure investment with public state transport and energy construction projects.",
    "Tanzania maintains historical anti-colonial solidarity traditions, supporting regional African economic integration."
  ],

  quickFacts: [
    { label: 'Arusha Declaration (1967)', value: 'Julius Nyerere established Ujamaa African Socialism, nationalizing foreign banks & cartels [1]' },
    { label: 'TAZARA Freedom Railway (1975)', value: '$500M interest-free Chinese aid built 1,860km rail breaking apartheid economic blockade [2]' },
    { label: 'Rear Base for African Liberation', value: 'Hosted military training camps for FRELIMO, ZANLA, MPLA, PAC & ANC freedom fighters [3]' },
    { label: 'Zanzibar Revolution (1964)', value: 'Overthrew feudal sultans, uniting Tanganyika & Zanzibar into Tanzania [4]' },
  ],

  timeline: [
    {
      id: 'tanzania-1905-maji-maji-rebellion-german-colonialism',
      title: '1. 1905 – 1918: The Maji Maji Anti-Colonial Rebellion & German Colonial Scorched-Earth',
      period: '1905 – 1918',
      categoryTag: 'pre-revolution',
      summary: '1905 Maji Maji Uprising against German forced cotton labor; 300,000 Tanganyikans killed by famine.',
      details: `In July 1905, indigenous Matumbi and southern ethnicities launched the **Maji Maji Rebellion** against German East Africa colonial authorities who forced Africans to cultivate cotton for German textile cartels under brutal conditions.

Led by Kinjikitile Ngwale, 20 ethnic groups united in armed resistance. German imperial forces deployed scorched-earth famine tactics, burning crops and villages, killing up to 300,000 Tanganyikans by 1907. [1]`,
      keyFigures: ['Kinjikitile Ngwale', 'Julius von Soden (German Governor)'],
      citationIds: [1],
    },
    {
      id: 'tanzania-1961-independence-tanu-nyerere',
      title: '2. 1961 – 1964: Dec 9, 1961 Independence, 1964 Zanzibar Revolution & Union Formation',
      period: '1961 – 1964',
      categoryTag: 'revolution',
      summary: 'Dec 9, 1961 Independence under Nyerere; Jan 1964 Zanzibar Revolution overthrows feudal sultans.',
      details: `On December 9, 1961, Tanganyika achieved independence under **Julius Nyerere** and the Tanganyika African National Union (TANU).

On January 12, 1964, John Okello and the Afro-Shirazi Party launched the **Zanzibar Revolution**, overthrowing the feudal Arab sultanate and landowning elite. On April 26, 1964, Nyerere and Abeid Karume signed the Union Treaty, founding the United Republic of Tanzania. [1][2]`,
      keyFigures: ['Julius Nyerere (Mwalimu)', 'Abeid Karume', 'John Okello'],
      citationIds: [1, 2],
    },
    {
      id: 'tanzania-1967-arusha-declaration-ujamaa-socialism',
      title: '3. 1967: The Arusha Declaration & The Blueprint for Ujamaa African Socialism',
      period: '1967',
      categoryTag: 'policies',
      summary: 'Feb 5, 1967: Nyerere promulgates Arusha Declaration, nationalizing banks & foreign monopolies.',
      details: `On February 5, 1967, Julius Nyerere issued the **Arusha Declaration**, establishing **Ujamaa** (African Socialism / Familyhood).

The socialist state nationalized all foreign commercial banks, insurance companies, sisal export plantations, and grain mills, founding communal Ujamaa villages where peasants collectively owned equipment and land. [2]`,
      keyFigures: ['Julius Nyerere', 'Rashidi Kawawa'],
      citationIds: [2],
    },
    {
      id: 'tanzania-1970-tazara-railway-china-aid',
      title: '4. 1970 – 1975: The TAZARA Freedom Railway & Historic Chinese Interest-Free Aid',
      period: '1970 – 1975',
      categoryTag: 'successes',
      summary: 'China provides $500M interest-free loan; 50,000 workers build 1,860km TAZARA Freedom Railway.',
      details: `When the World Bank and Western nations refused to fund a railway connecting landlocked Zambia to the sea, Chairman Mao Zedong and Premier Zhou Enlai agreed to assist Tanzania and Zambia.

Between 1970 and 1975, 50,000 Chinese, Tanzanian, and Zambian workers constructed the **1,860km TAZARA Railway** through rugged mountains and wildlife reserves using a $500 million interest-free Chinese loan. TAZARA broke landlocked Zambia's economic reliance on apartheid South Africa and Rhodesia. [2][3]`,
      keyFigures: ['Julius Nyerere', 'Mao Zedong', 'Kenneth Kaunda (Zambia PM)', 'Zhou Enlai'],
      citationIds: [2, 3],
    },
    {
      id: 'tanzania-1975-headquarters-for-african-liberation-wars',
      title: '5. 1975 – 1979: Rear-Base Headquarters for Southern African Liberation & Uganda War',
      period: '1975 – 1979',
      categoryTag: 'revolution',
      summary: 'Tanzania hosts FRELIMO, ZANLA, MPLA & ANC training camps; 1979 defeat of Idi Amin\'s invasion.',
      details: `Tanzania became the primary operational headquarters for the OAU Liberation Committee. Nyerere established military training camps at Nachingwea, Kongwa, and Morogoro for FRELIMO (Mozambique), ZANLA (Zimbabwe), MPLA (Angola), and ANC (South Africa) freedom fighters.

In October 1978, when Ugandan dictator Idi Amin invaded northern Tanzania, the Tanzanian People's Defence Force (TPDF) launched a counter-offensive, capturing Kampala in April 1979 and overthrowing Amin's regime. [2][3]`,
      keyFigures: ['Julius Nyerere', 'Samora Machel', 'Robert Mugabe', 'Idi Amin (Ugandan Invader)'],
      citationIds: [2, 3],
    },
    {
      id: 'tanzania-1985-mwinyi-imf-structural-adjustment',
      title: '6. 1985 – 1995: Ali Hassan Mwinyi, Economic Crisis & IMF Structural Adjustment',
      period: '1985 – 1995',
      categoryTag: 'challenges',
      summary: '1985 Nyerere retires; President Mwinyi adopts IMF economic liberalization & multi-party system (1992).',
      details: `In 1985, Julius Nyerere voluntarily retired from the presidency. Facing acute economic shortages caused by global oil shocks and the cost of the 1979 Uganda war, successor Ali Hassan Mwinyi signed an agreement with the IMF in 1986.

The IMF imposed structural adjustment: privatizing state commercial firms, floating the Shilling, and introducing user charges for public healthcare. In 1992, Tanzania transitioned to multi-party democracy. [3][4]`,
      keyFigures: ['Ali Hassan Mwinyi', 'Julius Nyerere'],
      citationIds: [3, 4],
    },
    {
      id: 'tanzania-1995-mkapa-magufuli-resource-nationalism',
      title: '7. 1995 – 2021: Mkapa, Kikwete & John Magufuli\'s "Bulldozer" Resource Nationalism',
      period: '1995 – 2021',
      categoryTag: 'policies',
      summary: '2015-2021 President John Magufuli enforces anti-corruption & mineral resource sovereignty laws.',
      details: `Under Presidents Benjamin Mkapa and Jakaya Kikwete, foreign mining cartels expanded gold extraction (Acacia Mining / Barrick).

In 2015, President **John Magufuli** ("The Bulldozer") enacted radical resource nationalism: passing 2017 mining laws that banned raw mineral exports, demanded state shares in foreign mining companies, and forced Barrick Gold to pay $300 million in back taxes. [4]`,
      keyFigures: ['John Magufuli', 'Benjamin Mkapa', 'Jakaya Kikwete'],
      citationIds: [4],
    },
    {
      id: 'tanzania-present-samia-suluhu-hassan-china-mega-infrastructure',
      title: '8. Present: President Samia Suluhu Hassan, Standard Gauge Rail & China BRI Cooperation',
      period: 'Present',
      categoryTag: 'successes',
      summary: 'President Samia Suluhu Hassan; electric Standard Gauge Railway & Julius Nyerere Hydroelectric Dam.',
      details: `Under **Samia Suluhu Hassan** (Tanzania's first female President), Tanzania continues constructing major mega-infrastructure projects, including the 2,115MW Julius Nyerere Hydroelectric Dam on the Rufiji River and the electric Standard Gauge Railway (SGR).

Tanzania maintains deep South-South diplomatic and trade cooperation with China, modernizing the historic TAZARA Railway and strengthening African economic integration. [3][4]`,
      keyFigures: ['Samia Suluhu Hassan', 'Xi Jinping'],
      citationIds: [3, 4],
    },
  ],

  sources: [
    {
      id: 1,
      label: 'Maji Maji: The Anti-Colonial Uprising in German East Africa (1905-1907)',
      publisher: 'G.C.K. Gwassa & John Iliffe / Tanzania Publishing House',
      year: '1971',
      excerpt: 'Historical materialist study of the Maji Maji rebellion, Kinjikitile Ngwale, and German colonial famine warfare.',
    },
    {
      id: 2,
      label: 'The Arusha Declaration and Ujamaa: Essays on Socialism',
      publisher: 'Julius K. Nyerere / Oxford University Press',
      year: '1968',
      excerpt: 'First-hand compilation of Nyerere\'s speeches detailing Arusha Declaration land nationalization and Ujamaa philosophy.',
    },
    {
      id: 3,
      label: 'The TAZARA Railway: China\'s Great Aid Project in Africa and the Southern African Liberation Struggles',
      publisher: 'Jamie Monson / Indiana University Press (Africa\'s Freedom Railway)',
      year: '2009',
      excerpt: 'Landmark archival study of the 1,860km Chinese-built TAZARA railway, Chairman Mao\'s aid, and rear-base liberation training camps.',
    },
    {
      id: 4,
      label: 'Resource Nationalism and Economic Transformation in Tanzania',
      publisher: 'Dan Paget / African Affairs',
      year: '2021',
      excerpt: 'Analysis of John Magufuli\'s mining tax reforms, Samia Suluhu Hassan\'s SGR railway, and China BRI partnerships.',
    },
  ],
};
