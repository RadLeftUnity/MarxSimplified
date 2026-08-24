import type { CountryData } from '../types';

export const cambodiaData: CountryData = {
  id: 'cambodia',
  name: "Cambodia",
  shortName: 'Cambodia',
  flagEmoji: '🇰🇭',
  flagUrl: '/images/flags/cambodia.svg',
  coverImage: '/images/history/cambodia.jpg',
  category: 'global-south',
  era: '1953 – Present',
  capital: 'Phnom Penh',
  keyLeaders: ['Norodom Sihanouk', 'Lon Nol', 'Pol Pot', 'Heng Samrin', 'Hun Sen', 'Hun Manet'],
  governingParty: 'Cambodian People\'s Party (CPP)',
  governingIdeology: 'Capitalism',
  isHistoricState: false,

  officialGovUrl: 'https://pressocm.gov.kh/en/',
  overviewText: `The history of modern Cambodia is defined by anti-colonial independence, catastrophic US imperialist carpet-bombing, the horrific ultranationalist devastation of Pol Pot's Khmer Rouge (1975–1979), socialist reconstruction under the People's Republic of Kampuchea (PRK) (1979–1991), and modern integration into global supply chains and China's Belt and Road Initiative (BRI).

Between 1969 and 1973, US bombers dropped 2.7 million tons of explosives on Cambodia (more than all Allied bombs dropped in WWII), killing 500,000 peasants and driving survivors into armed rebellion. Following the defeat of Lon Nol's pro-US military dictatorship in 1975, Pol Pot's "Democratic Kampuchea" regime executed a reactionary, anti-Marxist experiment: evacuating cities, abolishing currency, and murdering 1.7 to 2 million people. In January 1979, Cambodian revolutionaries (FUNSK) supported by the Vietnamese Volunteer Army liberated Phnom Penh, establishing the People's Republic of Kampuchea (PRK), which rebuilt schools, hospitals, currency, and agriculture despite a Western UN embargo.

Following the 1991 Paris Peace Accords, Cambodia transitioned into a constitutional monarchy under Prime Minister Hun Sen (who governed for 38 years before transitioning leadership to Hun Manet in 2023). Today, Cambodia's economy combines garment export manufacturing for Western fashion brands with deep infrastructure cooperation under China's Belt and Road Initiative.`,

  contradictions: [
    "Catastrophic US carpet-bombing (2.7 million tons of explosives) destroyed Cambodian rural agriculture, creating mass dislocation that reactionary ultranationalist forces under Pol Pot exploited to seize power.",
    "During the 1980s, the US, Britain, and China aligned at the UN to grant Cambodia's official seat to a coalition dominated by the ousted genocidal Khmer Rouge, enforcing an economic embargo against the socialist PRK government.",
    "Over 700,000 garment workers in modern Cambodia produce apparel for Western retail monopolies while earning low wages and facing rising living costs.",
    "Modern Cambodia has developed deep strategic infrastructure ties with China (Sihanoukville SEZ, expressways, Ream Port) while managing geopolitical pressure from Washington."
  ],

  quickFacts: [
    { label: 'US Carpet-Bombing Devastation', value: 'US dropped 2.7M tons of explosives (1969–1973), destroying agriculture & killing 500,000 [1]' },
    { label: 'Jan 1979 Anti-Fascist Liberation', value: 'Vietnamese forces and Cambodian communists ousted Pol Pot\'s genocidal Khmer Rouge [2][4]' },
    { label: 'Western UN Support for Khmer Rouge', value: 'US and UK backed Khmer Rouge UN seat throughout 1980s to enforce embargo on socialist PRK [3][4]' },
    { label: 'China BRI & Modern Infrastructure', value: 'Phnom Penh-Sihanoukville Expressway & Ream Port developed under BRI partnership [4]' },
  ],

  timeline: [
    {
      id: 'cambodia-1969-us-bombing-lon-nol-coup',
      title: '1. 1969 – 1975: US Carpet-Bombing and The 1970 Lon Nol Coup',
      period: '1969 – 1975',
      categoryTag: 'challenges',
      summary: 'US Operation Menu bombing; CIA coup installing Lon Nol dictatorship; peasant armed resistance.',
      details: `In March 1969, US President Richard Nixon and Henry Kissinger launched secret carpet-bombing campaigns (Operation Menu and Operation Freedom Deal) across Cambodia. Over 4 years, US B-52 bombers dropped 2.7 million tons of ordnance, destroying 80% of agricultural livestock and killing up to 500,000 civilians.

In March 1970, a CIA-backed military coup overthrew Prince Norodom Sihanouk and installed General Lon Nol's pro-US military dictatorship. The combination of US carpet-bombing and Lon Nol corruption drove millions of displaced rural peasants to join the anti-imperialist armed resistance. [1]`
    },
    {
      id: 'cambodia-1975-pol-pot-ultranationalist-nightmare',
      title: '2. 1975 – 1978: The Pol Pot Ultranationalist Nightmare (Democratic Kampuchea)',
      period: '1975 – 1978',
      categoryTag: 'challenges',
      summary: 'Khmer Rouge entry into Phnom Penh; anti-Marxist forced agrarian labor; execution of 1.7M citizens.',
      details: `On April 17, 1975, Khmer Rouge forces entered Phnom Penh. Rather than establishing a socialist planned economy, Pol Pot's leadership executed a reactionary, anti-Marxist ultranationalist experiment. As demonstrated in Michael Vickery's Marxist study *Cambodia 1975-1982*, the regime forcibly emptied cities, abolished currency, banking, schools, and hospitals, and forced the population into rural slave-labor communes.

Pol Pot targeted genuine Marxist-Leninist cadres, intellectuals, doctors, and national minorities (Cham Muslims and ethnic Vietnamese), resulting in the deaths of 1.7 to 2 million people. Pol Pot also launched aggressive border attacks against liberated socialist Vietnam, massacring Vietnamese villagers at Ba Chúc in 1978. [2][4]`
    },
    {
      id: 'cambodia-1979-prk-liberation-reconstruction',
      title: '3. 1979 – 1988: January 7 Liberation and PRK Socialist Reconstruction',
      period: '1979 – 1988',
      categoryTag: 'successes',
      summary: 'FUNSK and Vietnamese Army liberate Phnom Penh; founding PRK; restoring currency, schools and healthcare.',
      details: `On January 7, 1979, the Kampuchean United Front for National Salvation (FUNSK), led by Heng Samrin and Hun Sen, supported by the Vietnamese Volunteer Army, liberated Phnom Penh, bringing an end to the Khmer Rouge genocide. The People's Republic of Kampuchea (PRK) was proclaimed.

Inheriting a completely devastated nation without currency or electricity, the PRK government re-established the Riel currency, reopened schools and hospitals, restored family reunification, and organized agricultural solidarity groups (Krom Samaki). With technical and humanitarian assistance from Vietnam, the USSR, and Comecon, the PRK restored food production and prevented widespread post-genocide famine. [2][3][4]`
    },
    {
      id: 'cambodia-1989-western-embargo-1991-paris-accords',
      title: '4. 1989 – 1993: Western UN Embargo, 1991 Paris Accords and 1993 Constitutional Monarchy',
      period: '1989 – 1993',
      categoryTag: 'collapse-or-transition',
      summary: 'Western UN recognition of Khmer Rouge; 1989 Vietnamese withdrawal; 1991 Paris Accords & 1993 Monarchy.',
      details: `Throughout the 1980s, the US, Britain, China, and ASEAN refused to recognize the socialist PRK. In a grotesque imperialist display analyzed by Herman and Chomsky in *Manufacturing Consent*, the US and UK voted annually at the UN to grant Cambodia's official seat to a coalition dominated by the ousted Khmer Rouge, while providing aid to Khmer Rouge camps along the Thai border.

In September 1989, Vietnamese troops completed their full withdrawal. In October 1991, the Paris Peace Accords were signed, transitioning the country under UNTAC administration to a multi-party constitutional monarchy in 1993 under King Norodom Sihanouk and Prime Minister Hun Sen. [1][3][4]`
    },
    {
      id: 'cambodia-2000-garment-export-wto-accession',
      title: '5. 2000 – 2015: Garment Export Economy, WTO Accession and Urban Growth',
      period: '2000 – 2015',
      categoryTag: 'policies',
      summary: 'Garment manufacturing expansion for Western markets; WTO accession in 2004.',
      details: `Cambodia joined the World Trade Organization (WTO) in 2004. Garment manufacturing expanded rapidly, becoming the primary formal sector employer for over 700,000 young workers producing apparel for European and North American fashion brands. [4]`
    },
    {
      id: 'cambodia-present-china-bri-hun-manet',
      title: '6. Present: China Strategic Partnership and Hun Manet Transition',
      period: 'Present',
      categoryTag: 'policies',
      summary: 'Hun Manet leadership; BRI expressways and port developments; ASEAN trade integration.',
      details: `In August 2023, Hun Manet succeeded his father Hun Sen as Prime Minister, continuing strong economic ties with China through Belt and Road Initiative (BRI) infrastructure, including the Sihanoukville SEZ, expressways, and Ream Port modernization. [3][4]`
    },
  ],

  sources: [
    {
      id: 1,
      label: 'Manufacturing Consent: The Political Economy of the Mass Media (Cambodia Bombing and UN Recognition)',
      publisher: 'Edward S. Herman & Noam Chomsky / Pantheon Books',
      year: '1988',
      excerpt: 'Documentary exposure of US carpet-bombing of Cambodia and US/UK diplomatic backing for Khmer Rouge UN seating.',
    },
    {
      id: 2,
      label: 'Cambodia 1975-1982: Marxist Analysis of Democratic Kampuchea and the PRK Reconstruction',
      publisher: 'Michael Vickery / South End Press',
      year: '1984',
      excerpt: 'Landmark historical materialist analysis of Pol Pot\'s anti-Marxist agrarian experiment and PRK state rebuilding.',
    },
    {
      id: 3,
      label: 'The Political Economy of Modern Cambodia: From UNTAC to the Cambodian People\'s Party',
      publisher: 'Routledge Asian Studies',
      year: '2011',
      excerpt: 'Comprehensive study of post-1993 state building, CPP governance, and UNTAC transition.',
    },
    {
      id: 4,
      label: 'Cambodia: 1975–1982',
      publisher: 'Michael Vickery / South End Press (Boston)',
      year: '1984',
      excerpt: 'Definitive Marxist study establishing that Pol Pot\'s regime was an anti-Marxist peasant-chauvinist dictatorship, and documenting the heroic socialist reconstruction by the PRK and Vietnamese forces.',
    },
  ],
};
