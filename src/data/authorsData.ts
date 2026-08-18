export interface AuthorProfile {
  id: string;
  name: string;
  years: string;
  role: string;
  framework: string;
  coverGradient: string;
  avatarColor: string;
  initials: string;
  imageUrl: string;
  blurb: string;
  keyConcepts: string[];
}

export const authorsData: AuthorProfile[] = [
  {
    id: 'karl-marx',
    name: 'Karl Marx',
    years: '1818 – 1883',
    role: 'Philosopher, Economist & Revolutionary Theorist',
    framework: 'Classical Marxism',
    coverGradient: 'linear-gradient(135deg, #8b0000 0%, #3a0000 100%)',
    avatarColor: '#8b0000',
    initials: 'KM',
    imageUrl: '/images/authors/marx.jpg',
    blurb:
      'Karl Marx was a German philosopher, political economist, historian, sociologist, and revolutionary socialist. His works, most notably Capital (Das Kapital) and The Communist Manifesto (co-authored with Friedrich Engels), formulate the theoretical framework known as historical materialism. Marx demonstrated how capitalism operates through the exploitation of surplus value, inherent class struggle, and commodity fetishism, laying the foundation for modern political economy and scientific socialism.',
    keyConcepts: [
      'Historical Materialism',
      'Surplus Value & Exploitation',
      'Commodity Fetishism',
      'Tendency of the Rate of Profit to Fall',
      'Class Struggle & Alienation',
    ],
  },
  {
    id: 'friedrich-engels',
    name: 'Friedrich Engels',
    years: '1820 – 1895',
    role: 'Social Scientist, Political Theorist & Co-Founder of Scientific Socialism',
    framework: 'Classical Marxism',
    coverGradient: 'linear-gradient(135deg, #2b2d42 0%, #1d1a39 100%)',
    avatarColor: '#2b2d42',
    initials: 'FE',
    imageUrl: '/images/authors/engels.jpg',
    blurb:
      'Friedrich Engels was a German philosopher, social scientist, and political theorist who co-developed Marxist theory alongside Karl Marx. Engels co-authored The Communist Manifesto and edited Volumes 2 and 3 of Capital following Marx’s death. His independent works, including The Origin of the Family, Private Property and the State and Anti-Dühring, expanded Marxist theory into anthropology, natural science, and the development of the state.',
    keyConcepts: [
      'Origin of the State & Family',
      'Dialectics of Nature',
      'Historical Materialism in Anthropology',
      'Scientific vs. Utopian Socialism',
    ],
  },
  {
    id: 'v-i-lenin',
    name: 'V.I. Lenin',
    years: '1870 – 1924',
    role: 'Revolutionary Leader, State Theorist & Founder of Soviet Union',
    framework: 'Marxism-Leninism',
    coverGradient: 'linear-gradient(135deg, #8c1c1c 0%, #3d0c0c 100%)',
    avatarColor: '#8c1c1c',
    initials: 'VL',
    imageUrl: '/images/authors/lenin.jpg',
    blurb:
      'Vladimir Ilyich Lenin was a Russian revolutionary, politician, and political theorist who served as the first head of Soviet Russia and the Soviet Union. Building upon classical Marxism, Lenin developed Marxist-Leninist theory, explaining monopoly capitalism and imperialist expansion in Imperialism, the Highest Stage of Capitalism, as well as the necessity of a disciplined vanguard party in What Is To Be Done? and the smashing of the bourgeois state apparatus in The State and Revolution.',
    keyConcepts: [
      'Theory of Imperialism & Monopoly Capital',
      'Vanguard Party & Democratic Centralism',
      'The State & Revolution',
      'National Liberation Struggles',
    ],
  },
  {
    id: 'mao-zedong',
    name: 'Mao Zedong',
    years: '1893 – 1976',
    role: 'Marxist Theorist, Military Strategist & Founder of the PRC',
    framework: 'Maoism',
    coverGradient: 'linear-gradient(135deg, #4e1a3b 0%, #2f0f23 100%)',
    avatarColor: '#4e1a3b',
    initials: 'MZ',
    imageUrl: '/images/authors/mao.jpg',
    blurb:
      'Mao Zedong was a Chinese communist revolutionary and founding father of the People’s Republic of China. Mao developed Maoism (Marxism-Leninism-Maoism), adapting Marxist analysis to anti-imperialist agrarian societies. His seminal theoretical works, including On Contradiction and On Guerrilla Warfare, formulated doctrines of materialist dialectics, protracted people’s war, mass line politics, and primary versus secondary contradictions.',
    keyConcepts: [
      'Protracted People’s War & Guerrilla Warfare',
      'On Contradiction & Primary Contradictions',
      'Mass Line & Cultural Revolution Theory',
      'New Democratic Revolution',
    ],
  },
  {
    id: 'alexandra-kollontai',
    name: 'Alexandra Kollontai',
    years: '1872 – 1952',
    role: 'Revolutionary Socialist, Marxist Feminist & Diplomat',
    framework: 'Marxist Feminism & Bolshevik Leadership',
    coverGradient: 'linear-gradient(135deg, #a01a4e 0%, #4a0c24 100%)',
    avatarColor: '#a01a4e',
    initials: 'AK',
    imageUrl: '/images/authors/kollontai.jpg',
    blurb:
      'Alexandra Kollontai was a Russian Marxist revolutionary, Bolshevik leader, diplomat, and pioneering theorist of Marxist feminism. She served as the People’s Commissar for Social Welfare in the early Soviet government, making her the first woman in modern history to hold a cabinet-level post. Her theoretical works, including Communism and the Family and The Social Basis of the Woman Question, analyzed women’s oppression through historical materialism, advocating for the socialized reorganization of domestic labor, childcare, and women’s economic emancipation.',
    keyConcepts: [
      'Marxist Feminism & Women’s Emancipation',
      'Socialization of Domestic Labor & Childcare',
      'Abolition of the Bourgeois Family Unit',
      'Economic Independence of Women',
      'Working Women’s International Movement',
    ],
  },
  {
    id: 'rosa-luxemburg',
    name: 'Rosa Luxemburg',
    years: '1871 - 1919',
    role: 'Marxist Economist, Anti-War Revolutionary & Co-Founder of Spartacist League',
    framework: 'Classical Marxism & Anti-Imperialism',
    coverGradient: 'linear-gradient(135deg, #9c27b0 0%, #4a148c 100%)',
    avatarColor: '#9c27b0',
    initials: 'RL',
    imageUrl: '/images/authors/luxemburg.jpg',
    blurb:
      'Rosa Luxemburg was a Polish-German Marxist philosopher, economist, anti-war activist, and revolutionary socialist. Co-founder of the Anti-War Spartacist League and the Communist Party of Germany (KPD), Luxemburg made foundational contributions to Marxist economics and political strategy. Her works, including The Accumulation of Capital, Reform or Revolution, and Women’s Suffrage and Class Struggle, analyzed imperialist expansion, spontaneous mass strikes, and the necessity of working-class revolution over bourgeois reformism.',
    keyConcepts: [
      'Reform or Revolution',
      'The Accumulation of Capital & Imperialism',
      'Mass Strike & Working-Class Spontaneity',
      'Proletarian Internationalism & Anti-Militarism',
      'Working Women’s Suffrage & Class Struggle',
    ],
  },

];
