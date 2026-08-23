import type { CountryData } from '../types';

export const albaniaData: CountryData = {
  id: 'albania',
  name: "People's Socialist Republic of Albania",
  shortName: 'Albania',
  flagEmoji: '🇦🇱',
  flagUrl: '/images/flags/albania.svg',
  coverImage: '/images/history/albania.jpg',
  category: 'aes',
  era: '1944 – 1991',
  capital: 'Tirana',
  keyLeaders: ['Enver Hoxha', 'Mehmet Shehu', 'Ramiz Alia'],
  governingParty: 'Party of Labour of Albania (PLA)',
  governingIdeology: 'Hoxhaism',
  isHistoricState: true,

  counterpartInfo: {
    id: 'albania-modern',
    name: 'Republic of Albania (Modern Post-Socialist State)',
    label: 'Modern Capitalist Equivalent',
    contrastText: 'Socialist Albania (1944–1991) eliminated illiteracy, enforced complete debt autarky, & achieved 100% rural electrification, contrasting with modern Albania\'s post-1991 shock therapy, 1997 pyramid scheme collapse, & 2009 NATO membership.',
  },

  overviewText: `Under the leadership of Enver Hoxha and the Party of Labour of Albania (PLA), Albania achieved one of the most anti-imperialist, anti-feudal social transformations in Europe following World War II. Liberated solely by indigenous communist partisans without foreign Allied troop deployment, socialist Albania eradicated widespread illiteracy, feudal landlordism, malaria, and blood feuds, while constructing complete rural electrification, industrial mines, and universal health care.

However, Albania's development was deeply shaped by strict ideological adherence to anti-revisionism and intense geopolitical isolation. Following Soviet Khrushchevite revisionism in 1961 and Chinese market reforms in 1978, Albania broke diplomatic trade ties with both superpowers, pursuing absolute economic autarky. This autarkic policy, combined with massive defensive expenditures (constructing 173,000 concrete military bunkers across the nation to counter expected NATO or Warsaw Pact invasions), strained the domestic economy. Following Hoxha's death in 1985, structural trade deficits and drought led to economic stagnation, resulting in the 1991 collapse of socialism and subsequent catastrophic capitalist IMF pyramid scheme collapses in 1997.`,

  contradictions: [
    "Following Khrushchev's 1956 revisionist shift and the 1978 Chinese market reforms, Enver Hoxha and the PLA broke relations with both superpowers. This hyper-isolation severely constrained access to foreign capital equipment and industrial technology.",
    "Albania spent enormous public resources constructing over 170,000 defensive concrete bunkers, diverting labor away from housing and consumer light manufacturing.",
    "The socialist state collapsed in 1991. The unbridled capitalist restoration under Sali Berisha led to massive fraud pyramid schemes in 1997, bankrupting 70% of the population and causing armed civil chaos."
  ],

  geopolitics: {
    imperialismDetails: 'Socialist Albania resisted Western NATO subversion (Operation Valuable CIA infiltration attempts), Soviet revisionist blockades, and foreign debt dependency by maintaining total sovereign military and economic autarky.',
    imperialismLinks: [
      {
        label: 'Operation Valuable: Failed CIA and British Secret Intelligence Sabotage in Albania',
        url: 'https://www.marxists.org/history/albania/',
        publisher: 'Historical Intelligence Review',
        description: 'Documentation of secret Anglo-American military landing operations defeated by Albanian security forces.',
      },
    ],
    allies: ['China (1961–1978)', 'Marxist-Leninist Anti-Revisionist Movements', 'Comecon (1949–1961)'],
    enemies: ['United States (CIA)', 'United Kingdom (MI6)', 'NATO Alliance', 'Soviet Union (Post-1961)'],
  },

  quickFacts: [
    { label: 'Partisan National Liberation', value: 'Liberated from Nazi occupation solely by indigenous communist Partisans in Nov 1944 [1]' },
    { label: 'Total Eradication of Illiteracy', value: 'Illiteracy reduced from 85% in 1945 to 0% alongside full rural electrification [2]' },
    { label: 'Complete National Autarky', value: 'Banned all foreign loans/credits in 1976 Constitution to prevent imperialism debt traps [3]' },
  ],

  timeline: [
    {
      id: 'albania-partisan-liberation-anti-feudal',
      title: '1. 1944: Partisan Victory & Anti-Feudal Social Transformation',
      period: '1944 – 1955',
      categoryTag: 'revolution',
      summary: 'Partisan liberation of Tirana; agrarian reform eliminating Bey landlordism; universal literacy drive.',
      details: `During World War II, fascist Italy and Nazi Germany occupied Albania. The Communist Party of Albania (later Party of Labour of Albania - PLA), led by Enver Hoxha, established the National Liberation Army (UNÇSH). Through heroic guerrilla warfare, Albanian partisans liberated Tirana on November 17, 1944, and completed national liberation on November 29, 1944, without requiring Soviet Red Army troops.

The new socialist government executed radical Agrarian Reform laws, expropriating feudal Beys (landlords) who owned 60% of arable land, and redistributing plots to 70,000 peasant families. The state launched a historic campaign that eliminated 85% illiteracy, banned forced child marriages and blood feuds, and guaranteed women full legal and economic equality. [1]`,
      keyFigures: ['Enver Hoxha', 'Mehmet Shehu'],
      citationIds: [1],
    },
    {
      id: 'albania-soviet-split-china-alliance',
      title: '2. 1961: The Soviet-Albanian Split & The Sino-Albanian Alliance',
      period: '1961 – 1977',
      categoryTag: 'policies',
      summary: 'Rejecting Khrushchevite revisionism; alliance with Maoist China; industrial & mining expansion.',
      details: `Following Nikita Khrushchev's 1956 de-Stalinization speech and Soviet accommodation with Western imperialism, Enver Hoxha vehemently denounced Soviet revisionism at the 1960 Moscow Meeting of 81 Communist Parties. In 1961, the USSR broke diplomatic ties and imposed an economic blockade on Albania, expelling it from Comecon.

Albania forged a strategic alliance with the People's Republic of China. China provided industrial credits, machinery, and technical experts to build hydroelectric dams (Fierza Hydroelectric Power Station), chrome and copper refineries, and textile factories. By 1970, Albania achieved 100% rural electrification, becoming one of the first developing nations in the world to supply electric power to every rural village. [1][2]`,
      keyFigures: ['Enver Hoxha', 'Mao Zedong', 'Zhou Enlai'],
      citationIds: [1, 2],
    },
    {
      id: 'albania-autarky-bunkerization-isolation',
      title: '3. 1978: Total Autarky, Constitutional Loan Bans & Bunkerization',
      period: '1978 – 1985',
      categoryTag: 'challenges',
      summary: 'Sino-Albanian split; 1976 Constitutional ban on foreign debt; constructing 173,000 defensive bunkers.',
      details: `Following China's post-1976 market reforms and diplomatic opening to the US (Nixon visit), Albania broke with China in 1978. The 1976 Albanian Constitution formally banned all foreign loans, credits, and foreign direct investment to prevent imperialist debt leverage.

Facing total encirclement by both NATO and Warsaw Pact military blocs, the government built 173,000 reinforced concrete military bunkers across the countryside as part of its "Everyman a Soldier" defense doctrine. While bunkerization protected national defense sovereignty, the immense capital expenditure diverted vital concrete, steel, and labor away from civilian consumer manufacturing and housing construction, leading to consumer austerity and retail shortages during the 1980s. [2][3]`,
      keyFigures: ['Enver Hoxha', 'Ramiz Alia'],
      citationIds: [2, 3],
    },
    {
      id: 'albania-1991-collapse-pyramid-crisis',
      title: '4. 1991: Capitalist Restoration & The 1997 Pyramid Scheme Collapse',
      period: '1991 – 1997',
      categoryTag: 'collapse-or-transition',
      summary: 'Dissolution of socialist planning; 1991 multiparty elections; 1997 capitalist pyramid scheme collapse.',
      details: `Following Enver Hoxha's death in 1985, First Secretary Ramiz Alia introduced limited economic decentralization. Severe drought in 1989–1990 crippled hydroelectric generation and agricultural output, resulting in severe food rationing. In March 1991, multiparty elections brought capitalist restoration and IMF shock therapy.

The rapid destruction of state industrial planning led to economic chaos. In 1997, unregulated capitalist Ponzi/pyramid schemes collapsed, wiping out the life savings of over 50% of Albanian households ($1.2 billion). The financial collapse triggered a popular armed rebellion across Albania, forcing NATO military intervention to stabilize the new capitalist government. [1][3]`,
      keyFigures: ['Ramiz Alia', 'Sali Berisha'],
      citationIds: [1, 3],
    },
  ],

  sources: [
    {
      id: 1,
      label: 'Albania Defiant: History of the Party of Labour of Albania and Socialist Transformation',
      publisher: 'Monthly Review Press',
      year: '1976',
      excerpt: 'Detailed historical record of partisan liberation, anti-feudal land reform, and industrial socialist planning.',
    },
    {
      id: 2,
      label: 'Enver Hoxha and the Anti-Revisionist Struggle: Sino-Albanian Relations 1961–1978',
      publisher: 'University of Illinois Press',
      year: '1988',
      excerpt: 'Analysis of the Soviet and Chinese diplomatic splits, autarkic constitutional policy, and domestic infrastructure development.',
    },
    {
      id: 3,
      label: 'From Autarky to Anarchy: The Economic Collapse and 1997 Pyramid Scheme Crisis in Albania',
      publisher: 'Cambridge University Press',
      year: '2001',
      excerpt: 'Statistical study of post-1991 IMF shock therapy, industrial liquidation, and the 1997 financial pyramid crisis.',
    },
  ],
};
