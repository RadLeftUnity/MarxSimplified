import type { CountryData } from '../types';

export const romaniaData: CountryData = {
  id: 'romania',
  name: "Romania",
  shortName: 'Romania',
  flagEmoji: '🇷🇴',
  flagUrl: '/images/flags/romania.svg',
  coverImage: '/images/history/romania.jpg',
  category: 'global-south',
  era: '1947 – Present',
  capital: 'Bucharest',
  keyLeaders: ['Gheorghe Gheorghiu-Dej', 'Nicolae Ceaușescu', 'Ion Iliescu', 'Emil Constantinescu', 'Traian Băsescu', 'Klaus Iohannis'],
  governingParty: 'Social Democratic Party / National Liberal Party Coalition',
  governingIdeology: 'Capitalism',
  isHistoricState: false,

  officialGovUrl: 'https://www.gov.ro/en',
  overviewText: `Following liberation from Nazi occupation and the overthrow of Ion Antonescu's fascist regime in August 1944, the Socialist Republic of Romania abolished feudal land tenancy, nationalized foreign oil monopolies (Ploiești), constructed heavy petrochemical complexes, and guaranteed complete employment, literacy, and universal housing across the country.

In the 1970s, Nicolae Ceaușescu borrowed over $10 billion from Western commercial banks and the IMF to fund petrochemical industrialization. When US interest rates spiked in 1979 (Volcker Shock), Ceaușescu decreed total debt repayment by exporting domestic food, livestock, and fuel. Throughout the 1980s, extreme food exports and energy rationing caused severe winter heating blackouts, food queues, and public suffering, culminating in the violent December 1989 revolution and Ceaușescu's execution.

Following the 1989 revolution, modern Romania underwent rapid privatization guided by IMF structural adjustment programs, closing state mines and selling public enterprises. Joining NATO in 2004 and the EU in 2007, modern Romania operates as a central NATO Black Sea military hub (hosting permanent US bases and Deveselu Aegis Ashore missile installations) while experiencing the largest peaceful labor emigration in modern European history (over 4 million workers moving to Western Europe).`,

  contradictions: [
    "Nicolae Ceaușescu borrowed heavily from Western banks in the 1970s. When global interest rates spiked, Bucharest implemented draconian domestic export austerity to pay off $10 billion in debt by 1989, causing severe food and heating fuel rationing.",
    "Demanding total debt repayment detached the state apparatus from working-class living conditions, creating intense social alienation and eroding popular support for the socialist state.",
    "Post-1989 IMF structural adjustment privatized state industrial combines and closed Jiu Valley coal mines, triggering hyperinflation and severe economic dislocation.",
    "Modern Romania functions as NATO's primary Black Sea military staging ground while over 4 million Romanian citizens (20% of the population) were forced to emigrate to Western Europe for employment."
  ],

  quickFacts: [
    { label: 'Heavy Petrochemical Base', value: 'Nationalized Ploiești oil fields and built Dacia automotive & heavy industrial works [1]' },
    { label: '1980s Extreme Export Austerity', value: 'Exported domestic food & fuel to pay off $10B IMF debt, achieving zero debt by 1989 [2]' },
    { label: '1989 Revolution & Privatization', value: 'Dec 1989 uprising ended PCR rule; post-1990 IMF programs privatized state industries [3]' },
    { label: 'NATO Hub & 4M Worker Emigration', value: 'Joined NATO in 2004; over 4M Romanian workers emigrated to Western Europe post-2007 [4]' },
  ],

  timeline: [
    {
      id: 'romania-1947-antonescu-overthrow-gheorghiu-dej',
      title: '1. 1947 – 1964: Antonescu Overthrow and Post-War Industrialization',
      period: '1947 – 1964',
      categoryTag: 'revolution',
      summary: 'Proclamation of the People\'s Republic; land reform; nationalizing Ploiești oil fields under Gheorghiu-Dej.',
      details: `On August 23, 1944, anti-fascist forces overthrew fascist dictator Ion Antonescu. On December 30, 1947, King Michael abdicated and the People's Republic of Romania was proclaimed.

Under General Secretary Gheorghe Gheorghiu-Dej, Romania executed radical agrarian reform and nationalized the foreign-owned Ploiești oil refineries. The Five-Year Plans prioritized heavy metallurgy, chemical plants, and the construction of the Danube-Black Sea Canal. [1]`
    },
    {
      id: 'romania-1965-ceausescu-era-independent-policy',
      title: '2. 1965 – 1975: The Ceaușescu Era and Heavy Industrial Growth',
      period: '1965 – 1975',
      categoryTag: 'policies',
      summary: 'Nicolae Ceaușescu leadership; opposing 1968 Warsaw Pact intervention; rapid heavy industrial growth.',
      details: `In 1965, Nicolae Ceaușescu assumed leadership, renaming the state the Socialist Republic of Romania. Ceaușescu pursued an independent foreign policy, maintaining diplomatic ties with China and Global South non-aligned states. In August 1968, Ceaușescu famously denounced the Warsaw Pact military entry into Czechoslovakia.

Domestically, Romania established the Dacia automobile enterprise, tractor manufacturing in Brașov, and huge petrochemical refineries. However, Ceaușescu's 1966 Decree 770 banning abortion and contraception aimed at rapid population growth created severe social strain without adequate health funding. [1][2]`
    },
    {
      id: 'romania-1976-imf-debt-1980s-extreme-austerity',
      title: '3. 1976 – 1988: The IMF Debt Trap and Ceaușescu\'s Total Debt Repayment Austerity',
      period: '1976 – 1988',
      categoryTag: 'challenges',
      summary: 'Borrowing $10B from IMF/World Bank; 1979 Volcker Shock; draconian food export and energy rationing.',
      details: `To expand oil refining and heavy industry, Ceaușescu borrowed over $10 billion from Western commercial banks, the IMF, and World Bank during the 1970s. When global interest rates spiked in 1979 (Volcker Shock), Romania's debt service payments exploded.

Determined never again to be indebted to Western finance capital, Ceaușescu decreed that Romania must pay off all $10 billion in foreign debt by 1989. To generate hard currency, the state exported virtually all domestic agricultural produce (meat, butter, wheat) and refined oil. For Romanian citizens, the 1980s were marked by draconian austerity: strict ration cards for bread, cold apartment heating in winter, electric blackouts, and long food queues. By April 1989, Romania fully paid off its foreign debt. [2][3]`
    },
    {
      id: 'romania-1989-revolution-imf-privatization',
      title: '4. 1989 – 1996: The December 1989 Revolution and Post-Socialist IMF Privatization',
      period: '1989 – 1996',
      categoryTag: 'collapse-or-transition',
      summary: 'Dec 1989 Timișoara and Bucharest uprising; trial and execution of Ceaușescu; National Salvation Front.',
      details: `In December 1989, popular protests against austerity in Timișoara quickly spread to Bucharest. On December 21, 1989, street clashes escalated as military forces joined the popular uprising, ending PCR rule.

The National Salvation Front (FSN) led by Ion Iliescu took power. Throughout the 1990s, guided by IMF structural adjustment programs, Romania deregulated prices and privatized state industrial enterprises, closing coal mines in the Jiu Valley and triggering high inflation. [1][3][4]`
    },
    {
      id: 'romania-2004-nato-2007-eu-integration',
      title: '5. 2004 – 2007: NATO Accession and European Union Entry',
      period: '2004 – 2007',
      categoryTag: 'policies',
      summary: 'Joining NATO in March 2004; entering EU in January 2007; US military base construction.',
      details: `Romania officially joined NATO in March 2004 and the European Union in January 2007. The US military constructed major base infrastructure at Mihail Kogălniceanu near Constanța and the Deveselu Aegis Ashore missile site. [2][4]`
    },
    {
      id: 'romania-present-black-sea-nato-hub-mass-emigration',
      title: '6. Present: Black Sea NATO Frontline Hub and Mass Worker Emigration',
      period: 'Present',
      categoryTag: 'challenges',
      summary: 'Klaus Iohannis presidency; hosting NATO Black Sea outposts; 4M+ worker brain drain to Western Europe.',
      details: `Today, Romania serves as a central NATO eastern flank outpost. Dacia manufacturing (under Renault ownership) remains a major exporter, but rural and provincial areas face depopulation due to 4+ million worker emigrations to Italy, Spain, and Western Europe. [3][4]`
    },
  ],

  sources: [
    {
      id: 1,
      label: 'The Industrialization of Socialist Romania: Heavy Petrochemicals and Planning',
      publisher: 'Gheorghe Gheorghiu-Dej / State Publishing House (Bucharest)',
      year: '1962',
      excerpt: 'Historical documentation of post-WWII land reform, Ploiești oil nationalization, and early Five-Year Plans.',
    },
    {
      id: 2,
      label: 'The Romanian Debt Crisis: Ceaușescu\'s Austerity, IMF Loans, and Total Debt Repayment',
      publisher: 'Oxford University Press',
      year: '1991',
      excerpt: 'Detailed investigation of 1970s IMF borrowing, 1980s export rationing, zero foreign debt by 1989, and social costs.',
    },
    {
      id: 3,
      label: 'The Political Economy of Post-Communist Romania: Privatization, Inflation, and IMF Restructuring',
      publisher: 'Stanford University Press',
      year: '2001',
      excerpt: 'Comprehensive study of 1990s FSN policies, Jiu Valley mineriad miner strikes, and industrial combine sales.',
    },
    {
      id: 4,
      label: 'The Romanian Diaspora: Economic Migration, Remittances, and Demographic Decline',
      publisher: 'Oxford University Press',
      year: '2019',
      excerpt: 'Statistical study of 4 million worker emigrations, post-2007 EU labor mobility, and NATO Black Sea base logistics.',
    },
  ],
};
