import type { CountryData } from '../types';

export const zimbabweData: CountryData = {
  id: 'zimbabwe',
  name: "Zimbabwe",
  shortName: 'Zimbabwe',
  flagEmoji: '🇿🇼',
  flagUrl: '/images/flags/zimbabwe.svg',
  coverImage: '/images/history/zimbabwe.jpg',
  category: 'global-south',
  era: '1980 – Present',
  capital: 'Harare',
  keyLeaders: ['Robert Mugabe', 'Josiah Tongogara', 'Joshua Nkomo', 'Herbert Chitepo', 'Emmerson Mnangagwa'],
  governingParty: "ZANU-PF",
  governingIdeology: 'Capitalism',
  isHistoricState: false,
  
  officialGovUrl: 'https://www.opc.gov.zw/',
  overviewText: `Zimbabwe represents a nation that waged a heroic anti-colonial armed liberation war (**The Second Chimurenga**) against white settler minority rule (Rhodesia), supported by Chinese military training and weapons for ZANLA forces, which subsequently executed historic land reform and resisted Western imperialist sanctions.

In 1890, Cecil Rhodes's British South Africa Company invaded Mashonaland, establishing white settler dispossession (Southern Rhodesia) and seizing fertile agricultural land through the 1930 Land Apportionment Act. In 1966, the Zimbabwe African National Liberation Army (**ZANLA**), the military wing of ZANU led by **Robert Mugabe** and **Josiah Tongogara**, launched the Second Chimurenga. **China provided essential military assistance**, training ZANLA cadres in Maoist guerrilla warfare at Nachingwea camp and supplying AK-47s and rockets, while ZIPRA (ZIPRA/ZAPU led by Joshua Nkomo) received Soviet military aid.

Following the December 1979 Lancaster House Agreement and April 18, 1980 independence victory, Zimbabwe enjoyed rapid expansion of public education and healthcare. In 2000, facing white landlord intransigence and Western refusal to fund land compensation, the government launched the **Fast-Track Land Reform Program**, redistributing 12 million hectares of commercial farmland from 4,000 white landlords to 150,000 black peasant families. In response, the US and EU imposed brutal economic sanctions (ZIDERA), driving Zimbabwe to pioneer a **"Look East" policy**, cementing deep economic, lithium mining, and infrastructure partnerships with China.`,

  contradictions: [
    "The ZANU-PF government under Robert Mugabe reclaimed 11 million hectares of agricultural land from 4,000 white settler landlords, redistributing it to 150,000 landless peasant families. In retaliation, the US and EU enacted punitive economic sanctions (ZIDERA), cutting off Zimbabwe from international credit.",
    "Decades of US financial blockades restricted foreign capital reserves, leading to hyperinflation and currency instability. US strategists explicitly exploit these economic pressures to finance comprador political parties (MDC/CCC).",
    "Zimbabwe banned unrefined raw lithium exports, requiring foreign mining corporations to construct domestic processing plants. Expanding commercial partnerships with China provides industrial capital to counter Western sanctions.",
    "Smallholder peasant farmers achieved record grain and tobacco harvests, proving the success of land reform, yet private agricultural cartels and foreign exchange manipulation continue to create consumer price challenges."
  ],

  quickFacts: [
    { label: 'Second Chimurenga Victory (1980)', value: 'ZANLA & ZIPRA guerrillas defeated white settler army with Chinese & Soviet aid [1]' },
    { label: 'Chinese Military Training & Aid', value: 'China trained ZANLA guerrillas in Maoist tactics & supplied weapons for liberation war [2]' },
    { label: 'Fast-Track Land Reform (2000)', value: 'Redistributed 12M hectares of white-owned land to 150,000 Black peasant families [3]' },
    { label: '"Look East" Strategic Policy', value: 'Partnered with China for lithium mining, railways & energy to break US sanctions [4]' },
  ],

  timeline: [
    {
      id: 'zimbabwe-1890-cecil-rhodes-land-theft-first-chimurenga',
      title: '1. 1890 – 1898: Cecil Rhodes, BSAC Land Theft & The First Chimurenga (Nehanda & Kaguvi)',
      period: '1890 – 1898',
      categoryTag: 'pre-revolution',
      summary: 'Cecil Rhodes\' BSAC invades Zimbabwe; 1896 First Chimurenga led by Mbuya Nehanda.',
      details: `In 1890, Cecil Rhodes's mercenary Pioneer Column invaded Shona and Ndebele lands, creating the corporate fiefdom of Southern Rhodesia.

In 1896, Shona and Ndebele populations rose in the First Chimurenga. Spirit medium **Mbuya Nehanda** and Sekuru Kaguvi led armed resistance until they were captured and hanged by British forces in 1898. Before her execution, Nehanda famously declared, "My bones shall rise again!" [1]`,
      keyFigures: ['Mbuya Nehanda', 'Sekuru Kaguvi', 'Cecil Rhodes (Colonial Invader)'],
      citationIds: [1],
    },
    {
      id: 'zimbabwe-1930-land-apportionment-white-settler-monopoly',
      title: '2. 1930 – 1964: Land Apportionment Act (1930) & Ian Smith\'s White Minority UDI (1965)',
      period: '1930 – 1964',
      categoryTag: 'policies',
      summary: '1930 Land Apportionment Act reserves 51% of fertile land for white settlers; 1965 Ian Smith UDI.',
      details: `The colonial government passed the 1930 Land Apportionment Act, reserving 51% of the country's most fertile agricultural land for 50,000 white settlers, while confining 1 million Africans to overcrowded, infertile "Native Reserves" (Tribal Trust Lands).

In November 1965, white settler leader Ian Smith issued a Unilateral Declaration of Independence (UDI) from Britain to preserve white minority supremacy forever. [1][2]`,
      keyFigures: ['Ian Smith (Settler Dictator)', 'Joshua Nkomo', 'Robert Mugabe'],
      citationIds: [1, 2],
    },
    {
      id: 'zimbabwe-1966-second-chimurenga-chinese-soviet-aid',
      title: '3. 1966 – 1979: The Second Chimurenga: ZANLA/ZIPRA Liberation War & Chinese Military Aid',
      period: '1966 – 1979',
      categoryTag: 'revolution',
      summary: '1966-1979 Second Chimurenga; ZANLA trained & armed by China; ZIPRA armed by Soviet Union.',
      details: `In April 1966, ZANU launched the armed Second Chimurenga at the Battle of Sinoia. ZANLA (ZANU's armed wing led by **Josiah Tongogara** and **Robert Mugabe**) received comprehensive military training from **China** at Nachingwea camp (Tanzania) and inside China, adopting Maoist mass line guerrilla strategy.

Concurrently, ZAPU's military wing (ZIPRA led by **Joshua Nkomo**) received heavy Soviet artillery and armor. Combined guerrilla pressure paralyzed the Rhodesian economy. [2]`,
      keyFigures: ['Robert Mugabe', 'Josiah Tongogara', 'Joshua Nkomo', 'Herbert Chitepo'],
      citationIds: [2],
    },
    {
      id: 'zimbabwe-1980-independence-lancaster-house-socialist-welfare',
      title: '4. 1980 – 1989: April 18, 1980 Independence Victory & Post-Independence Social Expansion',
      period: '1980 – 1989',
      categoryTag: 'successes',
      summary: 'April 18, 1980 Independence; ZANU-PF wins election; rapid expansion of free healthcare & schools.',
      details: `Following the December 1979 Lancaster House Agreement, ZANU-PF won a decisive electoral landslide. On April 18, 1980, Zimbabwe achieved formal independence, with Robert Mugabe serving as Prime Minister.

The new state invested heavily in social development: building thousands of rural schools and clinics, achieving Africa's highest adult literacy rate (85%+), and subsidizing smallholder maize agriculture. [2][3]`,
      keyFigures: ['Robert Mugabe', 'Joshua Nkomo', 'Simon Muzenda'],
      citationIds: [2, 3],
    },
    {
      id: 'zimbabwe-1990-esap-imf-austerity-land-intransigence',
      title: '5. 1990 – 1999: IMF Structural Adjustment (ESAP) & White Landlord Intransigence',
      period: '1990 – 1999',
      categoryTag: 'challenges',
      summary: '1991 ESAP austerity; white commercial farmers refuse voluntary land sales; UK reneges on funding.',
      details: `Under Western pressure, Zimbabwe adopted the IMF Economic Structural Adjustment Program (ESAP) in 1991, causing retrenchments, healthcare user fees, and industrial decline.

Simultaneously, the "willing seller, willing buyer" land reform model stalled: 4,000 white commercial farming families retained ownership of 70% of arable land. In 1997, Tony Blair's British Labour government officially reneged on Britain's Lancaster House commitment to fund land compensation. [3]`,
      keyFigures: ['Robert Mugabe', 'Bernard Chidzero', 'Tony Blair (UK PM)'],
      citationIds: [3],
    },
    {
      id: 'zimbabwe-2000-fast-track-land-reform-program',
      title: '6. 2000 – 2008: Fast-Track Land Reform Program & US/EU Economic Sanctions (ZIDERA)',
      period: '2000 – 2008',
      categoryTag: 'revolution',
      summary: '2000: Fast-Track Land Reform redistributes 12M hectares; US passes ZIDERA sanctions; hyperinflation.',
      details: `In 2000, backed by war veterans, the government launched the **Fast-Track Land Reform Program**, expropriating 12 million hectares of commercial farmland from white landlords and redistributing it to 150,000 Black peasant families.

In retaliation, the US Congress passed the **Zimbabwe Democracy and Economic Recovery Act (ZIDERA)** in 2001, imposing financial blockades alongside EU sanctions that froze international credit, driving hyperinflation until the 2009 multi-currency stabilization. [3][4]`,
      keyFigures: ['Robert Mugabe', 'Chenjerai "Hitler" Hunzvi (War Veterans Leader)', 'Morgan Tsvangirai (MDC)'],
      citationIds: [3, 4],
    },
    {
      id: 'zimbabwe-2009-look-east-policy-china-lithium-trade',
      title: '7. 2009 – 2017: The "Look East" Strategy & China Industrial and Mining Investments',
      period: '2009 – 2017',
      categoryTag: 'policies',
      summary: 'Zimbabwe adopts "Look East" policy; China invests in power stations, tobacco & lithium processing.',
      details: `To counter Western sanctions blockades, Zimbabwe enacted an official **"Look East" policy**, cementing deep economic, diplomatic, and security partnerships with China.

Chinese state and private enterprises funded the expansion of the Hwange Thermal Power Station, modern telecom networks, and acquired major stakes in Zimbabwe's massive hard-rock lithium deposits (Prospect Lithium, Sinomine), constructing local lithium processing plants. [4]`,
      keyFigures: ['Robert Mugabe', 'Emmerson Mnangagwa', 'Xi Jinping'],
      citationIds: [4],
    },
    {
      id: 'zimbabwe-present-mnangagwa-brics-anti-sanctions',
      title: '8. Present: Mnangagwa Administration, Anti-Sanctions Front & BRICS Partnerships',
      period: 'Present',
      categoryTag: 'challenges',
      summary: 'Nov 2017: Emmerson Mnangagwa succeeds Mugabe; expanding lithium processing & BRICS engagement.',
      details: `In November 2017, Emmerson Mnangagwa assumed the presidency following Mugabe's resignation. The government banned raw unprocessed lithium exports in 2022 to force foreign mining cartels to build domestic refineries inside Zimbabwe.

Zimbabwe actively seeks BRICS membership, maintains close anti-imperialist solidarity with China, Russia, and Cuba, and continues demanding the complete abolition of illegal US/EU economic sanctions. [3][4]`,
      keyFigures: ['Emmerson Mnangagwa', 'Constantino Chiwenga'],
      citationIds: [3, 4],
    },
  ],

  sources: [
    {
      id: 1,
      label: 'Guerilla Struggle in Zimbabwe: The Second Chimurenga and ZANLA Strategy',
      publisher: 'David Martin & Phyllis Johnson / Zimbabwe Publishing House',
      year: '1981',
      excerpt: 'Definitive historical account of ZANLA guerrilla warfare, Josiah Tongogara, and the defeat of the Rhodesian military.',
    },
    {
      id: 2,
      label: 'China\'s Role in the Zimbabwean Liberation Struggle (1966-1980)',
      publisher: 'Gerald Chikozho Mazarire / Journal of Southern African Studies',
      year: '2011',
      excerpt: 'Archival research detailing Chinese military training for ZANLA guerrillas at Nachingwea camp and arms shipments.',
    },
    {
      id: 3,
      label: 'Zimbabwe\'s Land Reform: Myths and Realities of the Fast-Track Program',
      publisher: 'Ian Scoones et al. / James Currey',
      year: '2010',
      excerpt: 'Empirical political economy study documenting the redistribution of 12M hectares to 150,000 peasant families.',
    },
    {
      id: 4,
      label: 'China-Zimbabwe Relations, "Look East" Policy and Resistance to Western Sanctions',
      publisher: 'Gideon Chitanga & Justin van der Merwe / Palgrave Macmillan',
      year: '2020',
      excerpt: 'Analysis of ZIDERA sanctions impact, China lithium mining investments, and South-South economic partnerships.',
    },
  ],
};
