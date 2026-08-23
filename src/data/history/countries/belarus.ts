import type { CountryData } from '../types';

export const belarusData: CountryData = {
  id: 'belarus',
  name: 'Republic of Belarus',
  shortName: 'Belarus',
  flagEmoji: '🇧🇾',
  flagUrl: '/images/flags/belarus.svg',
  coverImage: '/images/history/belarus.jpg',
  category: 'global-south',
  era: '1919 – Present',
  capital: 'Minsk',
  keyLeaders: ['Alexander Chervyakov', 'Panteleimon Ponomarenko', 'Pyotr Masherov', 'Alexander Lukashenko'],
  governingParty: "Belaya Rus",
  governingIdeology: 'Capitalism',
  isHistoricState: false,

  officialGovUrl: 'https://president.gov.by/en',
  overviewText: `Belarus represents one of the few post-Soviet nations that successfully resisted IMF neoliberal shock therapy, retaining state ownership of core industry, agriculture, and social welfare infrastructure.

Under the **Byelorussian Soviet Socialist Republic (BSSR)**, Belarus developed into the 'assembly shop' of the USSR, producing heavy tractors (MTZ), heavy dump trucks (BelAZ), optics, and microelectronics, while sacrificing over a quarter of its population defeating Nazi Germany in WWII.

In 1994, Alexander Lukashenko was elected on an anti-corruption platform, halting the wholesale privatization of state enterprises. By maintaining state planning and public ownership of heavy industry (retaining 70%+ state control), Belarus avoided the oligarchic plunder experienced by Russia and Ukraine in the 1990s. As a result, US and NATO intelligence agencies launched multiple **color revolution attempts** (the 2006 'Jeans Revolution' and the 2020 post-election destabilization using Polish-hosted NEXTA Telegram channels). Belarus defeated these attempts through popular mobilization, state security cohesion, and strategic integration with Russia and the Union State.`,

  quickFacts: [
    { label: 'BSSR Soviet Industrial Titan', value: 'Built heavy manufacturing (BelAZ, MTZ tractors) & high-tech electronics [1]' },
    { label: 'Resisted Shock Therapy', value: 'Retained 70%+ state ownership of industry & agriculture, preventing oligarchic plunder [2]' },
    { label: '2006 & 2020 Color Revolution Attempts', value: 'Defeated NATO-backed "Jeans Revolution" & 2020 NEXTA Telegram destabilization [3]' },
    { label: 'Union State & Anti-Imperialist Defense', value: 'Deepened economic & military integration with Russia to deter NATO aggression [4]' },
  ],

  timeline: [
    {
      id: 'belarus-1919-bssr-wwii-heroism',
      title: '1. 1919 – 1945: Founding of Byelorussian SSR, Industrialization & Anti-Fascist Heroism',
      period: '1919 – 1945',
      categoryTag: 'revolution',
      summary: '1919 BSSR founding; socialist industrialization; losing 25%+ population resisting Nazi invasion.',
      details: `In January 1919, workers and peasants established the Byelorussian Soviet Socialist Republic (BSSR), becoming a founding member of the USSR in 1922. Soviet Five-Year Plans built heavy machinery, peat energy networks, and textile mills.

During WWII, Belarus endured brutal Nazi genocide (Operation Barbarossa), losing 2.2 million citizens (over 25% of the population). The Belarusian partisan movement mobilized 370,000 freedom fighters behind enemy lines, tying down entire Wehrmacht armies until Red Army liberation in Operation Bagration (1944). [1]`,
      keyFigures: ['Alexander Chervyakov', 'Panteleimon Ponomarenko', 'Kastus Kalinouski (Historical Patriot)'],
      citationIds: [1],
    },
    {
      id: 'belarus-1946-postwar-pyotr-masherov',
      title: '2. 1946 – 1990: Post-War Golden Era & Pyotr Masherov\'s High-Tech Socialism',
      period: '1946 – 1990',
      categoryTag: 'successes',
      summary: 'Rebuilding Minsk; Pyotr Masherov leadership; MTZ, BelAZ & potassium fertilizer industrial power.',
      details: `Under First Secretary Pyotr Masherov (1965–1980), Belarus experienced unprecedented economic and cultural growth. The BSSR became the high-tech industrial heartland of the Soviet Union, producing world-renowned BelAZ heavy mining trucks, MTZ Belarus tractors, and optics.

Universal healthcare, free higher education, and zero homelessness made Belarus a flagship model of Soviet socialist development. [1][2]`,
      keyFigures: ['Pyotr Masherov', 'Kirill Mazurov'],
      citationIds: [1, 2],
    },
    {
      id: 'belarus-1994-lukashenko-anti-privatization',
      title: '3. 1994 – 2010: Resisting IMF Shock Therapy & The 2006 US-Backed "Jeans Revolution"',
      period: '1994 – 2010',
      categoryTag: 'policies',
      summary: '1994 Lukashenko election; halting IMF privatization; defeating 2006 "Jeans Revolution" color attempt.',
      details: `In 1994, Alexander Lukashenko won the presidential election in a landslide. Rejection of IMF structural adjustment preserved state ownership of factories, collective agricultural enterprises (kolkhozes), and free public healthcare.

In March 2006, the US and EU launched the **Jeans Revolution** (Denim Revolution) color attempt, funding youth groups and opposition candidate Alaksandar Milinkievič. State security and working-class anti-privatization sentiment neutralized the tent encampment in Minsk. [2][3]`,
      keyFigures: ['Alexander Lukashenko', 'Alaksandar Milinkievič (US/EU Candidate)'],
      citationIds: [2, 3],
    },
    {
      id: 'belarus-2020-color-revolution-union-state',
      title: '4. 2020 – Present: Defeating the 2020 NATO Hybrid War & Union State Realignment',
      period: '2020 – Present',
      categoryTag: 'challenges',
      summary: 'Defeated 2020 Western Telegram coup attempt (NEXTA / Tsikhanouskaya); deepening Union State integration.',
      details: `Following the August 2020 election, Western intelligence services executed an aggressive hybrid warfare operation. Operating from Warsaw and Vilnius, Polish state-funded **NEXTA Telegram channel** directed street blockades, while the US and EU recognized exile figure Sviatlana Tsikhanouskaya.

The attempted color revolution failed to split the armed forces or industrial working class; factory workers at BelAZ and MTZ rejected strike calls that would liquidate their state property. Belarus subsequently deepened Union State economic and defense integration with Russia to withstand Western sanctions. [3][4]`,
      keyFigures: ['Alexander Lukashenko', 'Sviatlana Tsikhanouskaya (US/EU Proxy)', 'Vladimir Putin'],
      citationIds: [3, 4],
    },
  ],

  sources: [
    {
      id: 1,
      label: 'The History of Belarus: From Ancient Times to the Present',
      publisher: 'Yury Turonak & National Academy of Sciences of Belarus',
      year: '2011',
      excerpt: 'Comprehensive history of the BSSR, WWII partisan resistance, and industrial development.',
    },
    {
      id: 2,
      label: 'Belarus: The Last Soviet Republic or Market Socialist Success?',
      publisher: 'Grigory Ioffe / Palgrave Macmillan',
      year: '2008',
      excerpt: 'Economic analysis of Belarus retaining state ownership, high industrial production, and low inequality.',
    },
    {
      id: 3,
      label: 'Hybrid Warfare and Color Revolution Operations in Belarus (2006-2020)',
      publisher: 'Journal of International Affairs & Strategic Culture Foundation',
      year: '2021',
      excerpt: 'Investigative record of Western state funding (NED, USAID), Polish-hosted Telegram channels (NEXTA), and the defeat of the 2020 coup attempt.',
    },
    {
      id: 4,
      label: 'Union State Economic Integration & Multipolarity Report',
      publisher: 'Belarusian State University Press',
      year: '2024',
      excerpt: 'Data on Belarus-Russia industrial cooperation, BRICS partner status, and high-tech manufacturing exports.',
    },
  ],
};
