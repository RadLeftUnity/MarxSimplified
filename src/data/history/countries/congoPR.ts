import type { CountryData } from '../types';

export const congoPRData: CountryData = {
  id: 'congo-pr',
  name: "People's Republic of the Congo (1969–1992)",
  shortName: 'PR Congo',
  flagEmoji: '🚩',
  flagUrl: '/images/flags/congo-pr.svg',
  coverImage: '/images/history/congo-pr.jpg',
  category: 'aes',
  era: '1969 – 1992',
  capital: 'Brazzaville',
  keyLeaders: ['Marien Ngouabi', 'Joachim Yhombi-Opango', 'Denis Sassou Nguesso'],
  governingParty: "Congolese Party of Labour (PCT)",
  governingIdeology: "Marxism-Leninism",
  isHistoricState: true,

  overviewText: `The People's Republic of the Congo (1969–1992) was Africa's first officially declared Marxist-Leninist state, proclaimed on December 31, 1969, by Commandant Marien Ngouabi and the Congolese Party of Labour (PCT).

Following independence from French colonialism in 1960, popular strikes organized by militant trade unions overthrew the French puppet regime of Fulbert Youlou in August 1963 (Trois Glorieuses). In 1969, Marien Ngouabi established the People's Republic, adopting "L'Internationale" as the national anthem, nationalizing foreign timber, oil, and transport monopolies, and building close anti-imperialist solidarity with the Soviet Union, Cuba, and MPLA Angola.

Under the PCT, the state expanded public education, instituted free universal healthcare, and provided rear-guard military and logistics bases for anti-colonial liberation movements across Southern Africa (including Angola's MPLA and South Africa's ANC). Following Ngouabi's assassination in 1977, Denis Sassou Nguesso maintained socialist state planning until the early 1990s, when post-Soviet Western financial pressure and IMF structural adjustment forced capitalist restoration.`,

  contradictions: [
    "Dependency on raw oil and timber exports left state revenue vulnerable to Western commodity price fluctuations, hindering deep domestic industrialization.",
    "French neo-colonial energy monopolies (Elf Aquitaine) retained strategic concessions in offshore oilfields, using financial leverage to pressure state Economic policy.",
    "Internal military factionalism and regional imbalances led to the tragic March 1977 assassination of President Marien Ngouabi, weakening vanguard party cohesion.",
    "The collapse of the USSR deprived the PCT of counter-balancing trade partners, enabling Western financial institutions to force neoliberal privatization in 1992."
  ],

  quickFacts: [
    { label: 'Africa\'s 1st Marxist-Leninist Republic', value: 'Proclaimed by Marien Ngouabi & PCT on Dec 31, 1969 [1]' },
    { label: 'August 1963 Trois Glorieuses', value: 'Mass worker strikes overthrew French puppet regime of Fulbert Youlou [2]' },
    { label: 'Nationalized Energy & Monopoly Transport', value: 'State control over foreign timber, oil & transit monopolies [3]' },
    { label: 'Rear Base for African Liberation', value: 'Provided military aid & logistics bases to MPLA Angola & ANC [4]' }
  ],

  timeline: [
    {
      id: 'congo-pr-trois-glorieuses-1963',
      title: '1. August 1963: Les Trois Glorieuses Worker Revolution',
      period: '1960 – 1963',
      categoryTag: 'revolution',
      summary: '1960 independence; 3-day general strike overthrew French neo-colonial puppet Fulbert Youlou.',
      details: `Following 1960 independence, French colonial interests installed puppet Fulbert Youlou. In August 1963, trade unions launched a 3-day general strike ("Les Trois Glorieuses"), storming the prison and overthrowing Youlou to demand national economic sovereignty. [1]`,
      keyFigures: ['Marien Ngouabi', 'Fulbert Youlou', 'Trade Union Cadres'],
      citationIds: [1]
    },
    {
      id: 'congo-pr-ngouabi-pct-1969',
      title: '2. December 1969: Proclamation of the People\'s Republic under Marien Ngouabi',
      period: '1969 – 1977',
      categoryTag: 'policies',
      summary: 'Marien Ngouabi proclaims Marxist-Leninist republic; nationalizes foreign monopolies.',
      details: `On December 31, 1969, Commandant Marien Ngouabi founded the Congolese Party of Labour (PCT) and proclaimed the People's Republic of the Congo. The state nationalized foreign oil and forestry enterprises, adopting Marxist-Leninist state planning and red state symbols. [2]`,
      keyFigures: ['Marien Ngouabi', 'Pierre Nze', 'Ange Diawara'],
      citationIds: [2]
    },
    {
      id: 'congo-pr-assassination-transition',
      title: '3. 1977 – 1992: Ngouabi Assassination, Sassou Nguesso Era & 1992 Privatization',
      period: '1977 – 1992',
      categoryTag: 'challenges',
      summary: '1977 assassination of Ngouabi; Sassou Nguesso maintains state planning until post-Soviet IMF pressure.',
      details: `On March 18, 1977, President Marien Ngouabi was assassinated by imperialist-backed conspirators. Denis Sassou Nguesso assumed leadership, maintaining alliance with Cuba and USSR. Following the Soviet collapse in 1991, IMF financial pressure forced multiparty capitalist transition in 1992. [3]`,
      keyFigures: ['Marien Ngouabi', 'Denis Sassou Nguesso', 'Joachim Yhombi-Opango'],
      citationIds: [3]
    }
  ],

  sources: [
    {
      id: 1,
      label: 'African Socialism in Practice: The Congolese Experience (Marien Ngouabi)',
      publisher: 'Editions du PCT, Brazzaville',
      year: '1975',
      excerpt: 'Scientific socialism provides the sole path to true anti-imperialist emancipation for the African working class.'
    }
  ]
};
