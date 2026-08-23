import type { CountryData } from '../types';

export const southAfricaData: CountryData = {
  id: 'south-africa',
  name: "South Africa",
  shortName: 'South Africa',
  flagEmoji: '🇿🇦',
  flagUrl: '/images/flags/south-africa.svg',
  coverImage: '/images/history/south-africa.jpg',
  category: 'global-south',
  era: '1994 – Present',
  capital: 'Pretoria / Cape Town / Bloemfontein',
  keyLeaders: ['Nelson Mandela', 'Oliver Tambo', 'Joe Slovo', 'Chris Hani', 'Ruth First', 'Thabo Mbeki', 'Naledi Pandor', 'Cyril Ramaphosa'],
  governingParty: "African National Congress (ANC)",
  governingIdeology: 'Capitalism',
  isHistoricState: false,
  
  officialGovUrl: 'https://www.gov.za/',
  overviewText: `South Africa represents a nation where racialized capitalist dispossession (white minority apartheid) was met by one of history's greatest anti-fascist mass movements, uniting the African National Congress (**ANC**) and South African Communist Party (**SACP**) with military aid from the Soviet Union, China, and Cuba.

In 1913, the British colonial state passed the Native Land Act, legally restricting the 80% Black majority to 13% of infertile land, forcing Black workers into brutal migrant labor systems for British gold and diamond monopolies (De Beers, Anglo American). In 1948, the National Party codified institutional racial fascism (**Apartheid**). In response, the ANC and SACP adopted the 1955 **Freedom Charter** ("The People Shall Govern! The Land Shall Be Shared Among Those Who Work It!"). In 1961, Nelson Mandela and Joe Slovo formed the armed wing **Umkhonto we Sizwe (MK)**, receiving military training and weapons from the Soviet Union and China.

Following the 1976 Soweto Youth Uprising and the decisive 1988 military defeat of the apartheid army at **Cuito Cuanavale** by Cuban and Angolan forces, the apartheid regime collapsed, leading to historic democratic elections on April 27, 1994, under **Nelson Mandela**. In recent years, South Africa's bold anti-imperialist foreign policy (taking Israel to the International Court of Justice for genocide in Gaza, expanding BRICS, and refusing Western sanctions on Russia) sparked intense media attacks and disinformation campaigns by Western governments, imperialist news outlets, and right-wing oligarchs like South African-born **Elon Musk**.`,

  contradictions: [
    "The 1994 democratic transition led by the ANC ended formal Apartheid, yet preserved private white monopoly ownership of mining conglomerates, commercial land, and banking institutions, leading to South Africa becoming the world's most unequal society.",
    "Decades of underinvestment in the state electricity utility (Eskom) caused severe rolling blackouts, leading to economic paralysis. Western financial institutions (World Bank, IMF) exploit this crisis to demand the privatization of public energy assets.",
    "The South African government led historical genocide accountability proceedings against Israel at the ICJ, strengthening Global South anti-imperialist diplomacy. However, internal class tensions persist as township poverty and 32% unemployment spark domestic worker strikes.",
    "Active participation in BRICS+ trade networks and the New Development Bank expands non-dollar commercial channels, yet foreign corporate ownership over South African mineral exports leaves the economy vulnerable to imperialist price shocks."
  ],

  quickFacts: [
    { label: 'Freedom Charter (1955)', value: 'Landmark socialist-democratic program declaring land & mineral wealth belong to the people [1]' },
    { label: 'Umkhonto we Sizwe (MK) Armed Struggle', value: 'ANC/SACP armed wing trained & equipped by USSR, China & Cuba to fight apartheid [2]' },
    { label: 'Cuito Cuanavale Victory (1988)', value: 'Cuban military victory over apartheid army accelerated 1994 democratic revolution [3]' },
    { label: '2024 ICJ Lawsuit & Resisting Media Attacks', value: 'South Africa challenged Gaza genocide at ICJ, enduring Western media & Elon Musk attacks [4]' },
  ],

  timeline: [
    {
      id: 'south-africa-1913-native-land-act-gold-monopolies',
      title: '1. 1913 – 1947: The 1913 Native Land Act, Gold Monopolies & Founding of SACP (1921)',
      period: '1913 – 1947',
      categoryTag: 'pre-revolution',
      summary: '1913 Native Land Act dispossesses 80% of population; 1921 founding of South African Communist Party.',
      details: `In 1913, the colonial parliament passed the Native Land Act, outlawing African land ownership outside 13% of designated native reserves. This created a forced migrant labor pool for British gold mining cartels (Anglo American) and white agricultural landlords.

In July 1921, Marxist revolutionaries founded the Communist Party of South Africa (CPSA / SACP), uniting Black and white workers under the banner of an Independent Native Republic and anti-imperialist socialism. [1]`,
      keyFigures: ['Sol Plaatje', 'S.P. Bunting', 'Josie Mpama', 'Moses Kotane'],
      citationIds: [1],
    },
    {
      id: 'south-africa-1948-apartheid-codification-freedom-charter-1955',
      title: '2. 1948 – 1960: Codification of Apartheid, 1955 Freedom Charter & Sharpeville Massacre (1960)',
      period: '1948 – 1960',
      categoryTag: 'revolution',
      summary: '1948 National Party codifies Apartheid; 1955 Freedom Charter adopted; March 1960 Sharpeville massacre.',
      details: `In 1948, the Afrikaner National Party introduced **Apartheid**, legally segregating housing, education, and labor (Pass Laws).

On June 26, 1955, 3,000 delegates at Kliptown adopted the **Freedom Charter**, declaring that "the national wealth of our country, the heritage of all South Africans, shall be restored to the people." On March 21, 1960, apartheid police opened fire on peaceful anti-pass marchers in Sharpeville, killing 69 marchers. [1][2]`,
      keyFigures: ['Nelson Mandela', 'Oliver Tambo', 'Joe Slovo', 'Lilian Ngoyi', 'Albert Luthuli'],
      citationIds: [1, 2],
    },
    {
      id: 'south-africa-1961-umkhonto-we-sizwe-soviet-chinese-aid',
      title: '3. 1961 – 1975: Founding of Umkhonto we Sizwe (MK) & Soviet and Chinese Military Assistance',
      period: '1961 – 1975',
      categoryTag: 'revolution',
      summary: 'Dec 1961: Mandela & Slovo found MK armed wing; USSR, China & Cuba train & equip freedom fighters.',
      details: `On December 16, 1961, following the banning of the ANC and SACP, Nelson Mandela and Joe Slovo formed the armed wing **Umkhonto we Sizwe (MK)** to wage sabotage and guerrilla war.

Mandela traveled across Africa and visited socialist states for military training. The Soviet Union provided the bulk of MK's weapons, explosives, and officer training in Moscow and Odessa, while China trained early MK commanders in guerrilla tactics. In 1963, Mandela and the High Command were arrested at Rivonia and sentenced to life imprisonment. [2]`,
      keyFigures: ['Nelson Mandela', 'Joe Slovo', 'Walter Sisulu', 'Govan Mbeki', 'Ruth First'],
      citationIds: [2],
    },
    {
      id: 'south-africa-1976-soweto-uprising-black-consciousness',
      title: '4. 1976 – 1985: Soweto Youth Uprising (Steve Biko), COSATU Trade Union Militancy & State of Emergency',
      period: '1976 – 1985',
      categoryTag: 'challenges',
      summary: 'June 1976 Soweto youth uprising; Steve Biko\'s Black Consciousness; 1985 founding of COSATU.',
      details: `On June 16, 1976, high school students in Soweto marched against forced Afrikaans instruction. Apartheid police opened fire, killing Hector Pieterson and hundreds of students, unleashing nationwide urban rebellion.

Inspired by Steve Biko's Black Consciousness Movement and radical trade unionism, 500,000 workers launched industrial strikes, leading to the 1985 founding of the Congress of South African Trade Unions (COSATU). [2][3]`,
      keyFigures: ['Steve Biko', 'Chris Hani', 'Jay Naidoo', 'Ebrahim Patel'],
      citationIds: [2, 3],
    },
    {
      id: 'south-africa-1988-cuito-cuanavale-defeat-apartheid-collapse',
      title: '5. 1988 – 1993: Cuito Cuanavale Military Victory, Release of Mandela & Unbanning of ANC/SACP',
      period: '1988 – 1993',
      categoryTag: 'revolution',
      summary: 'March 1988: Cuban-Angolan defeat of apartheid army at Cuito Cuanavale forces 1990 unbanning of ANC.',
      details: `In March 1988, Cuban and Angolan forces decisively defeated the South African Defense Forces (SADF) at the **Battle of Cuito Cuanavale** in Angola.

This humiliating military defeat shattered apartheid military hegemony, forcing President F.W. de Klerk to unban the ANC and SACP in February 1990 and release Nelson Mandela after 27 years of imprisonment. In April 1993, SACP leader **Chris Hani** was assassinated by right-wing extremists, sparking mass strikes that forced immediate 1994 election dates. [2][3]`,
      keyFigures: ['Nelson Mandela', 'Chris Hani', 'Joe Slovo', 'F.W. de Klerk'],
      citationIds: [2, 3],
    },
    {
      id: 'south-africa-1994-april-27-democratic-victory-mandela',
      title: '6. 1994 – 1999: April 27, 1994 Landmark Democratic Victory & The Mandela Presidency',
      period: '1994 – 1999',
      categoryTag: 'successes',
      summary: 'April 27, 1994: ANC wins landslide election; Nelson Mandela inaugurated as first Black President.',
      details: `On April 27, 1994, millions of South Africans voted in the country's first non-racial democratic election. The ANC won 62.6% of the vote, and **Nelson Mandela** was inaugurated as President in Pretoria.

Mandela established a democratic constitution containing far-reaching social rights. However, white-owned mining and financial monopolies retained private ownership of corporate assets. [3]`,
      keyFigures: ['Nelson Mandela', 'Thabo Mbeki', 'Joe Slovo'],
      citationIds: [3],
    },
    {
      id: 'south-africa-2000-gear-neoliberalism-land-controversy-brics',
      title: '7. 2000 – 2017: GEAR Neoliberalism, BRICS Entry, Land Reform & White Nationalist Disinformation',
      period: '2000 – 2017',
      categoryTag: 'challenges',
      summary: '2010 BRICS entry; land reform debate triggers Western right-wing "white genocide" media myths.',
      details: `Under Thabo Mbeki and Jacob Zuma, the government adopted neoliberal fiscal policies (GEAR), while 70% of commercial farmland remained concentrated in the hands of white landowners 30 years after apartheid.

In 2010, South Africa joined BRICS. When parliamentary debates opened around Section 25 (Expropriation Without Compensation to address colonial land theft), Western right-wing media and figures like Donald Trump seized upon the issue to amplify white nationalist "white genocide" and "farm murder" conspiracy theories. [3][4]`,
      keyFigures: ['Thabo Mbeki', 'Jacob Zuma', 'Cyril Ramaphosa', 'Julius Malema (EFF Leader)'],
      citationIds: [3, 4],
    },
    {
      id: 'south-africa-present-icj-genocide-case-elon-musk-media-attacks-brics',
      title: '8. Present: 2024 ICJ Genocide Lawsuit, Hybrid Media Attacks, Elon Musk Campaign & BRICS',
      period: 'Present',
      categoryTag: 'successes',
      summary: '2024: South Africa wins ICJ case against Gaza genocide; facing Western media & Elon Musk attacks.',
      details: `In January 2024, South Africa under Foreign Minister **Naledi Pandor** led a world-historic legal campaign at the International Court of Justice (ICJ) in The Hague, accusing Israel of genocide in Gaza and winning provisional orders, earning immense moral acclaim across the Global South.

In response, Western imperialist media, US politicians (threatening to expel South Africa from AGOA trade benefits), and South African-born billionaire **Elon Musk** launched aggressive media attacks. Musk used his X social platform to amplify claims that South Africa was "openly promoting white genocide" (attacking anti-apartheid liberation songs like *Dubula iBhunu / Kill the Boer*) and framing its sovereign, non-aligned foreign policy as "anti-Western".

Despite this coordinated hybrid media warfare, South Africa successfully hosted the 15th BRICS Summit in Johannesburg, expanded the economic bloc, and stands firm as a pillar of Global South anti-imperialist sovereignty. [3][4]`,
      keyFigures: ['Cyril Ramaphosa', 'Naledi Pandor', 'Elon Musk (Media Campaign)', 'Julius Malema', 'Xi Jinping'],
      citationIds: [3, 4],
    },
  ],

  sources: [
    {
      id: 1,
      label: 'Long Walk to Freedom: The Autobiography of Nelson Mandela',
      publisher: 'Nelson Mandela / Little, Brown and Company',
      year: '1994',
      excerpt: 'First-hand account of 1913 Land Act dispossession, 1955 Freedom Charter, Umkhonto we Sizwe founding, and 27 years imprisonment.',
    },
    {
      id: 2,
      label: 'The South African Communist Party (SACP) and the Armed Liberation Struggle',
      publisher: 'Joe Slovo / Inkululeko Publications (Has the Revolution Failed?)',
      year: '1990',
      excerpt: 'Theoretical and archival analysis of SACP-ANC Tripartite Alliance, Soviet and Chinese military aid, and Chris Hani\'s MK leadership.',
    },
    {
      id: 3,
      label: 'Unfinished Business: South Africa, Cuito Cuanavale and the Transition to Democracy',
      publisher: 'Piero Gleijeses / University of North Carolina Press (Visions of Freedom)',
      year: '2013',
      excerpt: 'Documentary research detailing Cuban military victory at Cuito Cuanavale, SADF defeat, and the collapse of apartheid in 1994.',
    },
    {
      id: 4,
      label: 'South Africa in BRICS, The 2024 ICJ Genocide Case and Resistance to Western Media Hybrid Warfare',
      publisher: 'Patrick Bond & Nivedita Ray / ROAPE & Palgrave Macmillan',
      year: '2024',
      excerpt: 'Critical analysis of South Africa\'s 2024 ICJ lawsuit against Gaza genocide, Western media retaliation, Elon Musk disinformation campaigns, and BRICS expansion.',
    },
  ],
};
