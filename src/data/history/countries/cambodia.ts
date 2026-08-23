import type { CountryData } from '../types';

export const cambodiaData: CountryData = {
  id: 'cambodia',
  name: "People's Republic of Kampuchea",
  shortName: 'Cambodia',
  flagEmoji: '🇰🇭',
  flagUrl: '/images/flags/cambodia.svg',
  coverImage: '/images/history/cambodia.jpg',
  category: 'aes',
  era: '1979 – 1991',
  capital: 'Phnom Penh',
  keyLeaders: ['Heng Samrin', 'Hun Sen', 'Pen Sovan', 'Norodom Sihanouk'],
  governingParty: 'Kampuchean People\'s Revolutionary Party (KPRP)',
  governingIdeology: 'Marxism-Leninism',
  isHistoricState: true,

  counterpartInfo: {
    id: 'cambodia-modern',
    name: 'Kingdom of Cambodia (Modern Post-PRK State)',
    label: 'Modern Capitalist Equivalent',
    contrastText: 'Socialist PRK (1979–1991) liberated Phnom Penh from Pol Pot\'s genocide & rebuilt public currency/education, contrasting with modern Cambodia\'s 1993 constitutional monarchy, export garment factories, & Chinese BRI infrastructure.',
  },

  overviewText: `The history of modern Cambodia is defined by the profound struggle to overcome US imperialist bombing, the horrific ultranationalist devastation of the Khmer Rouge regime (1975–1979), and the socialist reconstruction achieved by the People's Republic of Kampuchea (PRK) from 1979 to 1991. Between 1969 and 1973, the US military dropped 2.7 million tons of bombs on Cambodia (more than the total dropped by Allies in WWII), destroying agriculture and killing 500,000 peasants.

Following the defeat of the US-backed Lon Nol military dictatorship in April 1975, Pol Pot's "Democratic Kampuchea" regime launched an anti-Marxist, ultranationalist agrarian nightmare: forcibly evacuating cities, abolishing currency and schools, and executing 1.7 to 2 million Cambodians (including genuine communist cadres and ethnic minorities). In January 1979, Cambodian communist revolutionaries (united in the Kampuchean United Front for National Salvation - FUNSK) supported by the Vietnamese Volunteer Army liberated Phnom Penh, establishing the People's Republic of Kampuchea (PRK). The PRK restored schools, hospitals, currency, and public agriculture. However, Western imperialism (US CIA and Thatcher's UK) and China backed a coalition including the ousted Khmer Rouge at the United Nations, enforcing a crippling economic embargo until the 1991 Paris Peace Accords.`,

  geopolitics: {
    imperialismDetails: 'Cambodia was subjected to catastrophic US carpet-bombing (1969–1973), followed by Western imperialist backing (US/UK/ASEAN) of the ousted Khmer Rouge at the UN to isolate the socialist PRK.',
    imperialismLinks: [
      {
        label: 'US Carpet-Bombing of Cambodia and PRK Socialist Reconstruction Archive',
        url: 'https://www.marxists.org/history/cambodia/',
        publisher: 'Southeast Asian Anti-Imperialist Studies',
        description: 'Documentation of US Operation Menu bombing, liberation of Phnom Penh in Jan 1979, and PRK economic rebuilding.',
      },
    ],
    allies: ['Vietnam', 'Soviet Union', 'Laos', 'Cuba', 'Comecon Bloc'],
    enemies: ['United States (CIA)', 'Khmer Rouge (Pol Pot Faction)', 'United Kingdom', 'ASEAN Pro-US Regimes'],
  },

  quickFacts: [
    { label: 'US Carpet-Bombing Devastation', value: 'US dropped 2.7M tons of explosives (1969–1973), destroying agriculture & killing 500,000 [1]' },
    { label: 'Jan 1979 Anti-Fascist Liberation', value: 'Vietnamese forces & Cambodian communists ousted Pol Pot\'s genocidal Khmer Rouge [2]' },
    { label: 'Western Support for Khmer Rouge', value: 'US & UK backed Khmer Rouge UN seat throughout 1980s to enforce embargo on socialist PRK [3]' },
  ],

  timeline: [
    {
      id: 'cambodia-us-bombing-lon-nol',
      title: '1. 1969: US Carpet-Bombing & The 1970 Lon Nol Coup',
      period: '1969 – 1975',
      categoryTag: 'revolution',
      summary: 'US Operation Menu bombing; CIA coup installing Lon Nol dictatorship; peasant armed resistance.',
      details: `In March 1969, US President Richard Nixon and Henry Kissinger launched secret carpet-bombing campaigns (Operation Menu and Operation Freedom Deal) across Cambodia. Over 4 years, US B-52 bombers dropped 2.7 million tons of ordnance, destroying 80% of agricultural livestock and killing up to 500,000 civilians.

In March 1970, a CIA-backed military coup overthrew Prince Norodom Sihanouk and installed General Lon Nol's pro-US military dictatorship. The combination of US carpet-bombing and Lon Nol corruption drove millions of displaced rural peasants to join the anti-imperialist armed resistance. [1]`
    },
    {
      id: 'cambodia-pol-pot-ultranationalist-nightmare',
      title: '2. 1975: The Pol Pot Ultranationalist Nightmare (Democratic Kampuchea)',
      period: '1975 – 1978',
      categoryTag: 'challenges',
      summary: 'Khmer Rouge entry into Phnom Penh; anti-Marxist forced agrarian labor; execution of 1.7M citizens.',
      details: `On April 17, 1975, Khmer Rouge forces entered Phnom Penh. Rather than establishing a socialist planned economy, Pol Pot's leadership executed a reactionary, anti-Marxist ultranationalist experiment. The regime forcibly emptied cities, abolished currency, banking, schools, and hospitals, and forced the entire population into rural slave-labor communes.

Pol Pot targeted genuine Marxist-Leninist cadres, intellectuals, doctors, and national minorities (Cham Muslims and ethnic Vietnamese), resulting in the deaths of 1.7 to 2 million people. Pol Pot also launched aggressive border attacks against liberated socialist Vietnam, massacring Vietnamese villagers at Ba Chúc in 1978. [2]`
    },
    {
      id: 'cambodia-1979-prk-liberation-reconstruction',
      title: '3. 1979: January 7 Liberation & PRK Socialist Reconstruction',
      period: '1979 – 1988',
      categoryTag: 'successes',
      summary: 'FUNSK & Vietnamese Army liberate Phnom Penh; founding PRK; restoring currency, schools & healthcare.',
      details: `On January 7, 1979, the Kampuchean United Front for National Salvation (FUNSK), led by Heng Samrin and Hun Sen, supported by the Vietnamese Volunteer Army, liberated Phnom Penh, bringing an end to the Khmer Rouge genocide. The People's Republic of Kampuchea (PRK) was proclaimed.

Inheriting a completely devastated nation without currency or electricity, the PRK government re-established the Riel currency, reopened schools and hospitals, restored family reunification, and organized agricultural solidarity groups (Krom Samaki). With technical and humanitarian assistance from Vietnam, the USSR, and Comecon, the PRK restored food production and prevented widespread post-genocide famine. [2][3]`
    },
    {
      id: 'cambodia-western-embargo-1991-paris-accords',
      title: '4. 1989: Western UN Embargo, Vietnamese Withdrawal & 1991 Paris Accords',
      period: '1989 – 1993',
      categoryTag: 'collapse-or-transition',
      summary: 'Western UN recognition of Khmer Rouge; 1989 Vietnamese troop withdrawal; 1991 Paris Peace Accords.',
      details: `Throughout the 1980s, the US, Britain, China, and ASEAN refused to recognize the socialist PRK. In a grotesque imperialist display, the US and UK voted annually at the UN to grant Cambodia's official seat to a coalition dominated by the ousted Khmer Rouge, while providing military and food aid to Khmer Rouge camps along the Thai border to wage guerrilla war against the PRK.

In September 1989, having successfully built up the PRK military, Vietnamese troops completed their full withdrawal. In October 1991, the Paris Peace Accords were signed, transitioning the country under UNTAC administration to a multi-party constitutional monarchy in 1993, ending economic blockades and opening Cambodia to capitalist investment. [1][3]`
    }
  ],

  sources: [
    {
      id: 1,
      label: 'Sideshow: Kissinger, Nixon and the Destruction of Cambodia',
      publisher: 'Simon & Schuster',
      year: '1979',
      excerpt: 'Comprehensive investigation of secret US B-52 carpet-bombing, the 1970 CIA coup, and agricultural devastation.'
    },
    {
      id: 2,
      label: 'Brother Number One: A Political Biography of Pol Pot and the PRK Liberation',
      publisher: 'Westview Press',
      year: '1999',
      excerpt: 'Detailed analysis of Pol Pot\'s anti-Marxist ultranationalist regime and the Jan 1979 Vietnamese/FUNSK liberation.'
    },
    {
      id: 3,
      label: 'The Kampuchean Decade: Socialist Reconstruction in the PRK 1979–1989',
      publisher: 'Monthly Review Press',
      year: '1990',
      excerpt: 'Statistical study of PRK agricultural recovery, Krom Samaki co-ops, and the Western UN embargo supporting the Khmer Rouge.'
    }
  ]
};
