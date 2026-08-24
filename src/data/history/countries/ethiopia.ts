import type { CountryData } from '../types';

export const ethiopiaData: CountryData = {
  id: 'ethiopia',
  name: "Ethiopia",
  shortName: 'Ethiopia',
  flagEmoji: '🇪🇹',
  flagUrl: '/images/flags/ethiopia.svg',
  coverImage: '/images/history/ethiopia.jpg',
  category: 'global-south',
  era: '1896 – Present',
  capital: 'Addis Ababa',
  keyLeaders: ['Emperor Menelik II', 'Empress Taytu Betul', 'Emperor Haile Selassie', 'Mengistu Haile Mariam', 'Meles Zenawi', 'Abiy Ahmed'],
  governingParty: "Prosperity Party",
  governingIdeology: 'Capitalism',
  isHistoricState: false,
  
  officialGovUrl: 'https://www.pm.gov.et/',
  overviewText: `Ethiopia stands as an unconquered beacon of African anti-colonial sovereignty, which defeated European imperialist invasion at the **Battle of Adwa (1896)**, dismantled centuries of feudal landlordism through a Marxist revolution in 1974 (**The Derg**), and currently serves as the diplomatic headquarters of the African Union (AU) and a key BRICS member backed by China BRI infrastructure development.

On March 1, 1896, Ethiopian forces led by Emperor Menelik II and Empress Taytu Betul routed an invading Italian imperial army at the Battle of Adwa, preserving national independence during the European "Scramble for Africa." In 1935, Benito Mussolini's Fascist Italy launched a retaliatory invasion, unleashing mustard gas war crimes while Ethiopian patriotic guerrillas (**Arbegnoch**) waged relentless anti-fascist resistance. In 1974, popular student and worker rebellions overthrew Emperor Haile Selassie's feudal empire. The Marxist military council (**Derg**), led by **Mengistu Haile Mariam**, enacted radical land reform under the slogan "Land to the Tiller," nationalizing landlord estates, expanding adult literacy from 10% to 75%, and repelling a US-backed Somali invasion in 1977 with 15,000 Cuban internationalist troops and Soviet military aid.

In the post-1991 era, Ethiopia pioneered a state-led "developmental state" model under Meles Zenawi, constructing the **Grand Ethiopian Renaissance Dam (GERD)** on the Blue Nile and partnering with China to build the $4.5 billion electrified Addis Ababa-Djibouti Railway and industrial parks. Joining **BRICS** in January 2024, Ethiopia maintains a non-aligned foreign policy while resisting US sanctions leverage.`,

  quickFacts: [
    { label: 'Battle of Adwa Victory (1896)', value: 'Menelik II & Taytu Betul routed Italian army, preserving African independence [1]' },
    { label: '1974 Marxist Land Reform', value: 'Derg abolished feudal landlordism under "Land to the Tiller", nationalizing land [2]' },
    { label: 'Soviet & Cuban Military Assistance', value: '15,000 Cuban troops & Soviet aid defended Ethiopia against 1977 Somali invasion [3]' },
    { label: 'China BRI & BRICS Entry (2024)', value: 'Addis-Djibouti railway, GERD mega-dam & 2024 entry into BRICS economic bloc [4]' },
  ],

  timeline: [
    {
      id: 'ethiopia-1896-battle-of-adwa-anti-colonial-victory',
      title: '1. 1896: The Battle of Adwa: Defeating Italian Imperial Invasion & Preserving Independence',
      period: '1896',
      categoryTag: 'revolution',
      summary: 'March 1, 1896: Menelik II & Taytu Betul rout 17,000 Italian troops at Adwa, securing sovereignty.',
      details: `On March 1, 1896, near the town of Adwa, 100,000 Ethiopian warriors led by **Emperor Menelik II** and **Empress Taytu Betul** confronted an invading Italian imperial army attempting to turn Ethiopia into a protectorate under the fraudulent Treaty of Wuchale.

In a world-historic triumph, Ethiopian forces crushed the Italian columns, killing 7,000 Italian troops and capturing 3,000. Adwa forced European empires to recognize Ethiopian sovereignty, establishing Ethiopia as a global symbol of Pan-African anti-colonial pride. [1]`,
      keyFigures: ['Emperor Menelik II', 'Empress Taytu Betul', 'Ras Makonnen', 'General Oreste Baratieri (Italian Invader)'],
      citationIds: [1],
    },
    {
      id: 'ethiopia-1916-haile-selassie-feudal-landlordism',
      title: '2. 1916 – 1935: Emperor Haile Selassie I & Feudal Land Tenure (Gult System)',
      period: '1916 – 1935',
      categoryTag: 'pre-revolution',
      summary: 'Haile Selassie consolidates autocratic imperial power; feudal Gult land system dispossesses peasantry.',
      details: `Following the reign of Empress Zewditu, Regent Ras Tafari Makonnen was crowned Emperor Haile Selassie I in 1930. He promulgated Ethiopia's first written constitution in 1931, centralizing imperial state power.

Under Haile Selassie, the traditional **Gult** feudal land system exploited millions of southern peasants, forcing tenant farmers to surrender up to 75% of their grain harvests to aristocratic landlords and the Coptic Church hierarchy. [1][2]`,
      keyFigures: ['Emperor Haile Selassie I', 'Empress Zewditu'],
      citationIds: [1, 2],
    },
    {
      id: 'ethiopia-1935-fascist-italian-invasion-arbegnoch',
      title: '3. 1935 – 1941: Fascist Italian Invasion (Mussolini) & Arbegnoch Anti-Fascist Resistance',
      period: '1935 – 1941',
      categoryTag: 'challenges',
      summary: 'Oct 1935: Mussolini invades Ethiopia using mustard gas; Arbegnoch patriotic guerrillas fight fascism.',
      details: `In October 1935, Benito Mussolini's Fascist Italy invaded Ethiopia without a declaration of war. Italian forces unleashed illegal mustard gas chemical weapons, carpet-bombing villages and Red Cross hospitals, and executing the 1937 Yekatit 12 massacre of 30,000 civilians in Addis Ababa.

Ethiopian patriotic guerrillas (**Arbegnoch**) waged fierce underground resistance in the mountains until Italian forces were ousted in May 1941 by allied Ethiopian and British-African troops. [2]`,
      keyFigures: ['Benito Mussolini', 'Ras Abebe Aregai', 'Sylvia Pankhurst (Anti-Fascist Ally)'],
      citationIds: [2],
    },
    {
      id: 'ethiopia-1974-ethiopian-popular-revolution-derg',
      title: '4. 1974: The 1974 Ethiopian Popular Revolution & Overthrow of the Feudal Monarchy',
      period: '1974',
      categoryTag: 'revolution',
      summary: 'Feb-Sept 1974: Mass student & worker strikes overthrow Haile Selassie; Derg seizes revolutionary power.',
      details: `In early 1974, catastrophic famine in Wollo (hidden by the court) coupled with hyperinflation ignited mass student strikes, taxi driver blockades, and military mutinies under the slogan "Land to the Tiller."

On September 12, 1974, junior military officers forming the Provisional Military Administrative Council (**Derg**) deposed Emperor Haile Selassie, ending the 3,000-year-old Solomonic monarchy. [2]`,
      keyFigures: ['Mengistu Haile Mariam', 'Aman Andom', 'Tafari Benti'],
      citationIds: [2],
    },
    {
      id: 'ethiopia-1975-socialist-ethiopia-land-reform-cuban-aid',
      title: '5. 1975 – 1987: Socialist Ethiopia (PDRE), Radical Land Reform & Cuban Military Assistance',
      period: '1975 – 1987',
      categoryTag: 'successes',
      summary: 'Derg nationalizes land; 1977 Ogaden War: 15,000 Cuban internationalist troops repel Somali invasion.',
      details: `In March 1975, the Derg led by **Mengistu Haile Mariam** enacted radical land reform, nationalizing all land, abolishing tenant rents, and distributing land to peasant associations. Literacy campaigns raised adult literacy from 10% to 75%.

In July 1977, taking advantage of revolutionary disruption, Siad Barre's Somalia launched a US-backed invasion of the Ogaden. Fidel Castro dispatched 15,000 Cuban internationalist troops and Soviet General Vasily Petrov provided strategic command, crushing the Somali invasion by March 1978. [2][3]`,
      keyFigures: ['Mengistu Haile Mariam', 'Fidel Castro', 'Vasily Petrov (Soviet General)'],
      citationIds: [2, 3],
    },
    {
      id: 'ethiopia-1991-eprdf-developmental-state-gerd-china',
      title: '6. 1991 – 2017: EPRDF Coalition (Meles Zenawi), GERD Dam and Resisting Nestlé Debt Demands',
      period: '1991 – 2017',
      categoryTag: 'policies',
      summary: '1991 EPRDF victory; Meles Zenawi developmental state; 2002 Nestlé debt crisis; 2011 GERD Blue Nile dam.',
      details: `In May 1991, the Ethiopian People's Revolutionary Democratic Front (EPRDF), led by **Meles Zenawi**, captured Addis Ababa, establishing a state-led developmental state model. During the severe 2002 famine threatening 11 million Ethiopians, Swiss corporate monopoly Nestlé demanded 6 million dollars in cash compensation for a business nationalized by the Derg in 1975. International civil rights groups and global consumer boycotts condemned Nestlé for extracting public funds from a starving population, forcing Nestlé to drop its demand and donate the settlement money to Ethiopian famine relief.

In 2011, Ethiopia began constructing the self-funded $4.8 billion **Grand Ethiopian Renaissance Dam (GERD)** on the Blue Nile to generate 5,000MW of hydroelectric power. China provided funding for the electrical transmission grid and built industrial manufacturing zones. [2][3][4]`,
      keyFigures: ['Meles Zenawi', 'Hailemariam Desalegn', 'Nestlé Executives'],
      citationIds: [2, 3, 4],
    },
    {
      id: 'ethiopia-2018-abiy-ahmed-tigray-conflict-sanctions',
      title: '7. 2018 – 2022: Abiy Ahmed, Tigray Conflict and Resisting Western Sanctions Leverage',
      period: '2018 – 2022',
      categoryTag: 'challenges',
      summary: 'PM Abiy Ahmed reforms; 2020-2022 Tigray civil war; resisting US AGOA trade sanctions.',
      details: `In 2018, **Abiy Ahmed** became Prime Minister, consolidating political parties into the Prosperity Party and signing a historic peace agreement with Eritrea (winning the 2019 Nobel Peace Prize).

In November 2020, violent conflict erupted between the federal government and TPLF forces in Tigray. When Washington imposed punitive trade sanctions (removing Ethiopia from AGOA) and diplomatic pressure, Addis Ababa mobilized mass popular anti-imperialist rallies under the banner #NoMore, rejecting US intervention. [4]`,
      keyFigures: ['Abiy Ahmed', 'Debretsion Gebremichael', 'Isaias Afwerki (Eritrea Leader)'],
      citationIds: [4],
    },
    {
      id: 'ethiopia-present-brics-china-bri-au-headquarters',
      title: '8. Present: 2024 BRICS Entry, China BRI Infrastructure and African Union Leadership',
      period: 'Present',
      categoryTag: 'successes',
      summary: 'Jan 1, 2024: Official entry into BRICS; China-built Addis-Djibouti electric railway and AU hub.',
      details: `On January 1, 2024, Ethiopia officially joined the **BRICS** economic alliance alongside China, Russia, Brazil, India, and South Africa.

China remains Ethiopia's primary infrastructure partner, operating the $4.5 billion electrified Addis Ababa-Djibouti Railway and investing in industrial parks. As permanent host of the African Union headquarters, Ethiopia continues to advocate for Global South non-alignment and sovereign African integration. [3][4]`,
      keyFigures: ['Abiy Ahmed', 'Xi Jinping', 'Lula da Silva'],
      citationIds: [3, 4],
    },
  ],

  sources: [
    {
      id: 1,
      label: 'The Battle of Adwa: African Victory in the Age of Empire',
      publisher: 'Raymond Jonas / Harvard University Press',
      year: '2011',
      excerpt: 'Definitive historical account of Emperor Menelik II, Empress Taytu Betul, and the 1896 defeat of the Italian army at Adwa.',
    },
    {
      id: 2,
      label: 'Ethiopia: Power and Protest (Peasant Revolts, The Derg and Land Reform)',
      publisher: 'Gebru Tareke / Red Sea Press',
      year: '1996',
      excerpt: 'Historical materialist study of Haile Selassie\'s feudal Gult system, the 1974 revolution, and Mengistu\'s land reform.',
    },
    {
      id: 3,
      label: 'Cuban Internationalism and Soviet Assistance in the 1977 Ogaden War',
      publisher: 'Piero Gleijeses / University of North Carolina Press (Visions of Freedom)',
      year: '2013',
      excerpt: 'Archival research detailing 15,000 Cuban troops, Soviet military supply, and defense of Ethiopian territorial integrity.',
    },
    {
      id: 4,
      label: 'The Ethiopian Developmental State, GERD Dam and China BRI Partnerships',
      publisher: 'Fantahun Defar & Christopher Clapham / Cambridge University Press',
      year: '2018',
      excerpt: 'Political economy analysis of state-led industrialization, China BRI infrastructure (Addis-Djibouti railway), and BRICS entry.',
    },
  ],
};
