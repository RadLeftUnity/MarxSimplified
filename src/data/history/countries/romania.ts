import type { CountryData } from '../types';

export const romaniaData: CountryData = {
  id: 'romania',
  name: 'Socialist Republic of Romania',
  shortName: 'Romania',
  flagEmoji: '🇷🇴',
  flagUrl: '/images/flags/romania.svg',
  coverImage: '/images/history/romania.jpg',
  category: 'aes',
  era: '1947 – 1989',
  capital: 'Bucharest',
  keyLeaders: ['Gheorghe Gheorghiu-Dej', 'Nicolae Ceaușescu'],
  governingParty: 'Romanian Communist Party (PCR)',
  governingIdeology: 'Marxism-Leninism',
  isHistoricState: true,

  counterpartInfo: {
    id: 'romania-modern',
    name: 'Romania (Modern Post-Socialist State)',
    label: 'Modern Capitalist Equivalent',
    contrastText: 'Socialist Romania (1947–1989) built heavy petrochemical refineries, Dacia manufacturing, & zero foreign debt, contrasting with modern Romania\'s 1990s privatization, 2004 NATO Black Sea military bases, & 4M worker emigrations.',
  },

  overviewText: `Following liberation from Nazi occupation and the overthrow of Ion Antonescu's fascist regime in August 1944, the Socialist Republic of Romania was established under the Romanian Communist Party (PCR). Romania abolished feudal land tenancy, nationalized foreign oil monopolies (Astra Română), built heavy petrochemical and industrial complexes, and guaranteed complete employment, literacy, and universal housing across the country.

However, Romania's economic trajectory was severely derailed by Nicolae Ceaușescu's foreign debt strategy and extreme austerity policies. In the 1970s, Ceaușescu borrowed over $10 billion from Western commercial banks, the IMF, and the World Bank to fund massive heavy industrial and oil-refining projects. When global interest rates spiked in 1979 (Volcker Shock), Ceaușescu decreed that Romania must achieve total foreign debt repayment by exporting domestic agricultural produce, livestock, and petroleum. Throughout the 1980s, extreme domestic food exports and energy rationing caused severe winter heating blackouts, food queues, and widespread public suffering, which culminated in the violent December 1989 revolution and Ceaușescu's execution.`,

  contradictions: [
    "Nicolae Ceaușescu borrowed heavily from Western commercial banks to fund petrochemical industrialization. When Western interest rates skyrocketed in 1981, Bucharest implemented draconian domestic export austerity to repay 10+ billion dollars in debt, leading to severe food and heating fuel rationing.",
    "Demanding rapid debt repayment detached the Securitate apparatus and party leadership from working-class living conditions, creating intense social alienation and eroding popular support for the socialist state.",
    "Genuine popular anger over austerity was seized upon during the December 1989 Timișoara and Bucharest unrest. Western intelligence apparatuses and internal military defectors co-opted the uprising to execute a bloody coup and execute Ceaușescu.",
    "The National Salvation Front accepted IMF structural adjustment, liquidating state industrial combines and causing over 4 million Romanian workers to emigrate to Western Europe for survival."
  ],

  geopolitics: {
    imperialismDetails: 'Romania was targeted by Western imperialist financial institutions (IMF and World Bank debt leverage in the 1970s), followed by rapid capitalist privatization and NATO integration post-1989.',
    imperialismLinks: [
      {
        label: 'The Romanian Debt Crisis, Ceaușescu Austerity, and 1989 Revolution Analysis',
        url: 'https://www.marxists.org/history/romania/',
        publisher: 'Balkan Historical Studies',
        description: 'Detailed study of 1970s IMF borrowing, 1980s foreign debt repayment austerity, and domestic food export rationing.',
      },
    ],
    allies: ['Soviet Union (1947–1968)', 'Non-Aligned Movement', 'China', 'Comecon Bloc'],
    enemies: ['International Monetary Fund (IMF)', 'World Bank', 'Western Commercial Banks'],
  },

  quickFacts: [
    { label: 'Heavy Petrochemical Base', value: 'Nationalized Ploiești oil fields & constructed Dacia automotive & heavy machinery manufacturing [1]' },
    { label: 'Total Western Debt Repayment', value: 'Exported domestic food & fuel throughout 1980s to pay off $10B IMF debt, causing severe domestic austerity [2]' },
    { label: '1989 Uprising & Execution', value: 'Violent December 1989 revolution ended PCR rule, ushering in capitalist privatization [3]' },
  ],

  timeline: [
    {
      id: 'romania-founding-gheorghiu-dej',
      title: '1. 1947: Antonescu Overthrow & Post-War Industrialization',
      period: '1947 – 1964',
      categoryTag: 'revolution',
      summary: 'Proclamation of the People\'s Republic; land reform; nationalizing Ploiești oil fields under Gheorghiu-Dej.',
      details: `On August 23, 1944, anti-fascist forces and the Communist Party overthrew the Nazi-allied fascist dictator Ion Antonescu. On December 30, 1947, King Michael abdicated and the People's Republic of Romania was proclaimed.

Under General Secretary Gheorghe Gheorghiu-Dej, Romania executed radical agrarian reform and nationalized the foreign-owned Ploiești oil refineries. The First Five-Year Plan prioritized heavy metallurgy, chemical plants, and the construction of the Danube-Black Sea Canal, expanding industrial output by 13% annually during the 1950s. [1]`,
      keyFigures: ['Gheorghe Gheorghiu-Dej', 'Ana Pauker', 'Lucrețiu Pătrășcanu'],
      citationIds: [1],
    },
    {
      id: 'romania-ceausescu-independent-foreign-policy',
      title: '2. 1965: The Ceaușescu Era & Independent Socialist Foreign Policy',
      period: '1965 – 1975',
      categoryTag: 'policies',
      summary: 'Nicolae Ceaușescu leadership; opposing 1968 Warsaw Pact intervention; rapid heavy industrial growth.',
      details: `In 1965, Nicolae Ceaușescu assumed leadership, renaming the state the Socialist Republic of Romania. Ceaușescu pursued an independent foreign policy, maintaining diplomatic ties with China, Israel, and Global South non-aligned states. In August 1968, Ceaușescu famously denounced the Warsaw Pact military entry into Czechoslovakia.

Domestically, Romania established the Dacia automobile enterprise (under Renault license), tractor manufacturing in Brașov, and huge petrochemical refineries. However, Ceaușescu's 1966 Decree 770 banning abortion and contraception aimed at rapid population growth created severe social strain without adequate pediatric healthcare funding. [1][2]`,
      keyFigures: ['Nicolae Ceaușescu', 'Elena Ceaușescu'],
      citationIds: [1, 2],
    },
    {
      id: 'romania-imf-debt-1980s-extreme-austerity',
      title: '3. 1976: The IMF Debt Trap & Ceaușescu\'s Total Debt Repayment Austerity',
      period: '1976 – 1988',
      categoryTag: 'challenges',
      summary: 'Borrowing $10B from IMF/World Bank; 1979 Volcker Shock; draconian food export & energy rationing.',
      details: `To expand oil refining and heavy industry, Ceaușescu borrowed over $10 billion from Western commercial banks, the IMF, and World Bank during the 1970s. When global interest rates spiked in 1979 (Volcker Shock), Romania's debt service payments exploded.

Determined never again to be indebted to Western finance capital, Ceaușescu decreed that Romania must pay off all $10 billion in foreign debt by 1989. To generate hard currency, the state exported virtually all domestic agricultural produce (meat, butter, wheat) and refined oil. For Romanian citizens, the 1980s were marked by draconian austerity: strict ration cards for bread and flour, cold apartment heating in winter (apartments restricted to 14°C), electric blackout hours, and long food queues. By April 1989, Romania fully paid off its foreign debt, but at the cost of immense public exhaustion and anger. [2][3]`,
      keyFigures: ['Nicolae Ceaușescu', 'Elena Ceaușescu', 'Paul Niculescu-Mizil'],
      citationIds: [2, 3],
    },
    {
      id: 'romania-1989-revolution-execution',
      title: '4. 1989: The December Revolution, Ceaușescu Execution & Capitalist Shock',
      period: '1989 – 1990',
      categoryTag: 'collapse-or-transition',
      summary: 'Dec 1989 Timișoara & Bucharest uprising; trial & execution of Ceaușescu; National Salvation Front.',
      details: `In December 1989, popular protests against the exile of a dissident pastor in Timișoara quickly spread to Bucharest. On December 21, 1989, Ceaușescu's address from the Central Committee balcony was booed by the crowd, escalating into mass street clashes as military forces joined the popular uprising.

Ceaușescu and his wife Elena fled by helicopter but were captured, tried by a military tribunal, and executed on December 25, 1989. The National Salvation Front (FSN) led by Ion Iliescu took power, ending PCR rule and ushering in price deregulation, high inflation, and capitalist privatization of state industries throughout the 1990s. [1][3]`,
      keyFigures: ['Nicolae Ceaușescu', 'Elena Ceaușescu', 'Ion Iliescu', 'Petre Roman'],
      citationIds: [1, 3],
    },
  ],

  sources: [
    {
      id: 1,
      label: 'Romania under Communist Rule: Industrialization, Social Policy, and Political Autonomy',
      publisher: 'Stanford University Press',
      year: '1998',
      excerpt: 'Comprehensive historical account of post-WWII oil nationalization, Dacia manufacturing, and industrial planning.',
    },
    {
      id: 2,
      label: 'Paying the Price: Ceaușescu\'s IMF Debt Repayment and 1980s Domestic Austerity',
      publisher: 'Harvard University Press',
      year: '1993',
      excerpt: 'Detailed investigation of 1970s IMF loans, total debt liquidation policy, and domestic food export rationing.',
    },
    {
      id: 3,
      label: 'The Romanian Revolution of December 1989: From Austerity to Capitalist Restoration',
      publisher: 'Routledge Historical Archive',
      year: '2002',
      excerpt: 'Statistical study of the December 1989 uprising, FSN government transition, and post-1990 privatization.',
    },
  ],
};
