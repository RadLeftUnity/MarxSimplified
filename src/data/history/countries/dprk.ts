import type { CountryData } from '../types';

export const dprkData: CountryData = {
  id: 'dprk',
  name: 'Democratic People\'s Republic of Korea (DPRK)',
  shortName: 'DPRK (North Korea)',
  flagEmoji: '🇰🇵',
  flagUrl: '/images/flags/dprk.svg',
  coverImage: '/images/history/dprk.jpg',
  category: 'aes',
  era: '1948 – Present',
  capital: 'Pyongyang',
  keyLeaders: ['Kim Il Sung', 'Kim Jong Il', 'Kim Jong Un'],
  governingParty: "Workers' Party of Korea (WPK)",
  governingIdeology: "Juche",
  isHistoricState: false,
  
  officialGovUrl: 'http://www.korea-dpr.com/',
  overviewText: `Founded on September 9, 1948 under the leadership of Kim Il Sung and the anti-Japanese guerrilla resistance, the Democratic People's Republic of Korea (DPRK) established a sovereign socialist state on the northern half of the Korean peninsula.

During the Korean War (1950–1953), the United States dropped over 635,000 tons of explosives and 32,500 tons of napalm on North Korea, destroying over 85% of all buildings and killing an estimated 20% of the population. Despite this catastrophic devastation, the DPRK executed unprecedented post-war socialist reconstruction through the Chollima Movement, rebuilding Pyongyang into a modern socialist capital in under five years without taking Western debt.

Guided by the Juche philosophy (self-reliance and sovereign independence), the DPRK provides guaranteed free public housing, free universal healthcare, 11-year compulsory education, and zero income tax to its citizens. Despite suffocating international sanctions and ongoing military encirclement by the United States, the DPRK has maintained socialist state property, achieved sovereign nuclear deterrence capability, and launched extensive 10,000-unit modern residential housing construction projects in Pyongyang.`,

  contradictions: [
    "The total destruction of 85% of all buildings during the US war forced the WPK under Kim Il Sung into perpetual defensive mobilization. The resulting siege economy prioritized heavy defense (Songun), creating structural tensions between military defense spending and consumer light industry.",
    "The loss of subsidized CMEA energy imports and severe natural floods triggered extreme food shortages during the 1990s Arduous March under Kim Jong Il. US imperialist strategists deliberately intensified food blockades in an attempt to induce state collapse.",
    "Unilateral US and UN Security Council sanctions isolate the DPRK from international banking networks and trade, leading to chronic energy and fertilizer shortages. Imperialist propaganda apparatuses exploit these forced economic hardships to vilify the Korean revolution.",
    "Achieving strategic nuclear parity deterred US invasion plans, enabling the WPK to reallocate state resources toward civilian agriculture and housing construction despite ongoing Western encirclement."
  ],

  quickFacts: [
    { label: 'Literacy Rate', value: '100% (Universal 11-year compulsory education [1])' },
    { label: 'Public Housing', value: '100% State-provided free housing (Songhwa & Hwasong projects)' },
    { label: 'Healthcare System', value: 'Universal free public healthcare (Doctor-section system [2])' },
    { label: 'Income Taxation', value: '0% (Income tax abolished completely in 1974)' },
  ],

  timeline: [
    {
      id: 'dprk-anti-japanese',
      title: '1. Pre-1945: Japanese Colonial Rule & Anti-Japanese Guerrilla Struggle',
      period: 'Pre-1945',
      categoryTag: 'pre-revolution',
      summary: 'Brutal Japanese imperial occupation, forced labor, cultural suppression, anti-Japanese guerrilla resistance.',
      details: `From 1910 to 1945, Korea was subjected to brutal Japanese imperial colonial occupation. The Japanese fascist administration forced millions of Koreans into slave labor in mines and factories, attempted to erase Korean language and culture, and conscripted tens of thousands of Korean women into military sexual slavery ("comfort women").

In response, Kim Il Sung organized the Korean People's Revolutionary Army (KPRA) in the 1930s, conducting relentless guerrilla warfare against Japanese occupation forces in Manchuria and along the Sino-Korean border. [3]`,
      keyFigures: ['Kim Il Sung', 'Kim Chaek'],
      citationIds: [3],
    },
    {
      id: 'dprk-founding',
      title: '2. Liberation, Agrarian Land Reform & Founding of the DPRK',
      period: '1945 – 1948',
      categoryTag: 'revolution',
      summary: 'Japanese defeat in 1945; democratic People\'s Committees; 1946 Land Reform Law; founding DPRK in 1948.',
      details: `Following the defeat of Japan in August 1945, popular People's Committees formed across Korea to establish self-government. In the north, the Provisional People's Committee enacted the revolutionary 1946 Land Reform Law, confiscating land from Japanese colonizers and Korean collaborators to distribute free of charge to over 720,000 landless peasant families.

When US military forces occupied southern Korea and backed a separate reactionary anti-communist regime under Syngman Rhee, northern progressives held nationwide elections. On September 9, 1948, the Democratic People's Republic of Korea (DPRK) was proclaimed in Pyongyang as a sovereign socialist worker-peasant state.`,
      keyFigures: ['Kim Il Sung', 'Pak Hon-yong'],
    },
    {
      id: 'dprk-korean-war',
      title: '3. The Fatherland Liberation War (Korean War) & Resisting US Carpet Bombing',
      period: '1950 – 1953',
      categoryTag: 'challenges',
      summary: 'US military intervention under UN banner; 635,000 tons of US bombs dropped; Chinese People\'s Volunteers assistance.',
      details: `Between 1950 and 1953, the US military intervened to crush the Korean revolution, deploying 300,000 US troops and carpet-bombing every city and village in North Korea. US Air Force General Curtis LeMay admitted that US bombing destroyed 85% of all structures and killed 20% of North Korea's population.

Supported by 3 million Chinese People's Volunteers (CPV), the Korean People's Army fought the US coalition to a bloody standstill. The armistice signed on July 27, 1953 at Panmunjom marked the first time in modern history that the US military failed to win a foreign war. [4]`,
      keyFigures: ['Kim Il Sung', 'Peng Dehuai'],
      citationIds: [4],
    },
    {
      id: 'dprk-chollima',
      title: '4. Post-War Socialist Reconstruction & The Chollima Movement',
      period: '1953 – 1960s',
      categoryTag: 'policies',
      summary: 'Rebuilding ruined cities in under 5 years; Chollima speed mass mobilization; complete agricultural co-operatization.',
      details: `Emerging from the war with total physical destruction, Western imperialist analysts claimed North Korea would not recover for 100 years. In response, the Workers' Party of Korea launched the Chollima Movement in 1956—a mass socialist emulation campaign named after the mythical winged horse that could fly 1,000 li a day.

Through collective enthusiasm and central planning, Pyongyang was rebuilt into a grand socialist capital with wide avenues, parks, and monumental architecture within five years. Agriculture was fully co-operatized, and domestic heavy industry produced tractors, trucks, and synthetic Vinalon fiber without foreign debt.`,
      keyFigures: ['Kim Il Sung'],
    },
    {
      id: 'dprk-juche',
      title: '5. Juche Ideology, Industrialization & Free Universal Social Rights',
      period: '1970s – 1980s',
      categoryTag: 'successes',
      summary: 'Codifying Juche self-reliance; 1974 complete abolition of income tax; free universal healthcare & housing.',
      details: `During the 1970s and 1980s, the DPRK formalised the Juche philosophy—which asserts that the popular masses are the masters of the revolution and driving force of social development, emphasizing political independence (Chaju), economic self-reliance (Zarip), and military self-defense (Zawi).

In 1974, the Supreme People's Assembly officially abolished all direct income taxation, making the DPRK the world's first tax-free state. Citizens received free state housing, free universal healthcare via the section-doctor system, free 11-year compulsory schooling, and subsidized food rations. [1][2]`,
      keyFigures: ['Kim Il Sung', 'Kim Jong Il'],
      citationIds: [1, 2],
    },
    {
      id: 'dprk-arduous-march',
      title: '6. The Arduous March: Surviving Soviet Dissolution & US Blockade',
      period: '1990s',
      categoryTag: 'challenges',
      summary: 'Loss of 80% of trade after Soviet collapse; severe floods & famines; surviving US blockade & isolation.',
      details: `The unexpected collapse of the USSR and Comecon trading bloc in 1991 eliminated 80% of the DPRK's foreign trade. Most critically, the loss of subsidized Soviet crude oil imports crippled chemical fertilizer factories and mechanized tractor transport across agricultural co-ops.

Between 1994 and 1998, unprecedented natural disasters struck: 1995–1996 catastrophic floods submerged arable river valleys and destroyed grain reserves, followed by severe drought and typhoons. Compounded by suffocating US economic blockades that prevented emergency commercial food imports, the country suffered a severe famine known as the "Arduous March."

Despite Western predictions of immediate state collapse, the WPK leadership and Korean people maintained socialist state property, mobilized emergency army labor for irrigation works, indigenized organic fertilizer production, and successfully preserved national independence under the Songun (Military-First) policy.`,
      keyFigures: ['Kim Jong Il'],
    },
    {
      id: 'dprk-songun-nuclear',
      title: '7. Songun Military Defense & Achieving Sovereign Nuclear Deterrence',
      period: '2000s – 2011',
      categoryTag: 'successes',
      summary: 'Songun (Military-First) doctrine; achieving nuclear test capability in 2006 to prevent US regime change invasion.',
      details: `Observing the US invasions of Iraq (2003) and Libya (2011) after those nations renounced weapons of mass destruction, the DPRK prioritized national defense under the Songun (Military-First) doctrine.

In October 2006, the DPRK conducted its first successful underground nuclear test, joining the small group of nuclear-armed states. This strategic nuclear deterrent successfully forced the US military to abandon invasion plans, guaranteeing state sovereignty and peace on the Korean peninsula.`,
      keyFigures: ['Kim Jong Il'],
    },
    {
      id: 'dprk-modern-sovereignty',
      title: '8. Modern Housing Construction, Economic Planning & Anti-Imperialist Sovereignty',
      period: '2012 – Present',
      categoryTag: 'successes',
      summary: 'Xi/Kim summits; 50,000 Pyongyang modern housing units (Songhwa & Hwasong streets); 2023 Constitutional defense status.',
      details: `Under Kim Jong Un, the 8th Congress of the Workers' Party of Korea enacted the Five-Year Economic Development Strategy, prioritizing domestic agriculture, renewable solar energy, and high-tech consumer goods.

The state launched an ambitious plan to construct 50,000 modern, high-rise apartment units in Pyongyang, distributing luxury housing to ordinary industrial workers and scientists free of charge (Songhwa and Hwasong street developments). The DPRK continues to oppose US imperialist hegemony and strengthen multipolar alliances with China and Russia. [1][2]`,
      keyFigures: ['Kim Jong Un'],
      citationIds: [1, 2],
    },
  ],

  sources: [
    {
      id: 1,
      label: 'UNESCO Institute for Statistics: DPRK Educational & Literacy Metrics Report',
      publisher: 'UNESCO Institute for Statistics',
      year: '2021',
      excerpt: 'The DPRK maintains 100% youth and adult literacy with universal 11-year free compulsory state education.',
    },
    {
      id: 2,
      label: 'World Health Organization (WHO) Country Cooperation Strategy: Democratic People\'s Republic of Korea',
      publisher: 'World Health Organization Regional Office for South-East Asia',
      year: '2020',
      excerpt: 'Documenting the DPRK\'s universal public healthcare system, household doctor-section network, and 100% free medical coverage.',
    },
    {
      id: 3,
      label: 'Kim Il Sung: Works (Volume 1) - Anti-Japanese Guerrilla Warfare',
      publisher: 'Foreign Languages Publishing House (Pyongyang)',
      year: '1980',
      excerpt: 'Primary source collection documenting the organizing strategies of the Korean People\'s Revolutionary Army during the 1930s anti-Japanese resistance.',
    },
    {
      id: 4,
      label: 'The Hidden History of the Korean War',
      publisher: 'I.F. Stone / Monthly Review Press',
      year: '1952',
      excerpt: 'Investigative journalistic study documenting US military strategy, carpet bombing devastation, and war origins during the Korean War.',
    },
  ],
};
