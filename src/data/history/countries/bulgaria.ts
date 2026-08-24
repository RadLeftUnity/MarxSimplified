import type { CountryData } from '../types';

export const bulgariaData: CountryData = {
  id: 'bulgaria',
  name: "Bulgaria",
  shortName: 'Bulgaria',
  flagEmoji: '🇧🇬',
  flagUrl: '/images/flags/bulgaria.svg',
  coverImage: '/images/history/bulgaria.jpg',
  category: 'global-south',
  era: '1946 – Present',
  capital: 'Sofia',
  keyLeaders: ['Dimitar Blagoev', 'Georgi Dimitrov', 'Valko Chervenkov', 'Todor Zhivkov', 'Zhelyu Zhelev', 'Boyko Borisov', 'Rumen Radev'],
  governingParty: "GERB Coalition",
  governingIdeology: 'Capitalism',
  isHistoricState: false,

  officialGovUrl: 'https://www.gov.bg/en',
  overviewText: `Bulgaria represents a profound historical example of socialist industrial transformation, anti-fascist heroism, and the severe long-term consequences of post-1990 capitalist shock therapy.

In 1891, Dimitar Blagoev founded the Bulgarian Social Democratic Workers' Party ("Narrow Socialists"), establishing one of Europe's earliest revolutionary Marxist movements. In 1933, Bulgarian Marxist leader Georgi Dimitrov achieved global renown during the Leipzig Trial, turning a Nazi frame-up into a trial of European fascism. On September 9, 1944, the communist-led Fatherland Front and partisan militias launched an armed uprising, liberating Sofia from pro-Nazi monarchist rule.

Under the People's Republic of Bulgaria (PRB) (1946–1990), Bulgaria transformed from an impoverished, illiterate agrarian country into an advanced industrial-technological power. Renowned as the "Silicon Valley of the Eastern Bloc," socialist Bulgaria produced over 40% of Comecon's mainframe computers and microelectronics, guaranteeing universal healthcare, free education, housing, and zero unemployment. The 1989–1990 capitalist restoration liquidated state industries, triggering 300% hyperinflation in 1997, strict IMF currency controls, and a catastrophic depopulation crisis where over 2.5 million citizens emigrated to Western Europe.`,

  contradictions: [
    "Bulgaria transformed from an agrarian nation into an advanced electronics and computer exporter tied closely to Soviet supply chains. When Soviet trade fractured in the late 1980s, Bulgarian heavy industry faced acute raw material shortages.",
    "Post-1990 IMF shock therapy privatized state agricultural cooperatives and electronics manufacturing, liquidating high-tech jobs and destroying rural public health networks.",
    "Capitalist restructuring triggered the world's fastest national depopulation crisis, with Bulgaria's population plunging from 9 million in 1989 to 6.4 million today due to mass economic emigration to Western Europe.",
    "Modern Bulgaria functions as a key NATO Black Sea military hub, hosting US joint military installations at Novo Selo and Bezmer Air Base while operating as the lowest-wage nation in the European Union."
  ],

  quickFacts: [
    { label: 'Sept 9, 1944 Revolution', value: 'Fatherland Front armed uprising liberated Bulgaria from pro-Nazi monarchy [1]' },
    { label: 'Silicon Valley of East Bloc', value: 'Bulgaria produced 40%+ of Comecon microelectronics and mainframe computers [2]' },
    { label: '1997 Hyperinflation Crisis', value: '300% inflation liquidated savings; IMF imposed Currency Board pegging the Lev [3]' },
    { label: 'Post-1990 Depopulation Crisis', value: 'Population plunged from 9M (1989) to 6.4M today due to mass European labor emigration [4]' },
  ],

  timeline: [
    {
      id: 'bulgaria-1891-blagoev-dimitrov-leipzig',
      title: '1. Pre-1944: Dimitar Blagoev, Founding of Bulgarian Marxism and Dimitrov\'s 1933 Leipzig Victory',
      period: 'Pre-1944',
      categoryTag: 'pre-revolution',
      summary: 'Blagoev founds Marxist party in 1891; 1923 September Anti-Fascist Uprising; Dimitrov trial victory in 1933.',
      details: `In July 1891, Dimitar Blagoev organized the Buzludzha Congress, founding the Bulgarian Social Democratic Workers' Party. In 1903, the party split, and the revolutionary Marxist faction ("Narrow Socialists") led by Blagoev and Georgi Dimitrov rejected reformism, forming the Communist Party of Bulgaria (BKP) in 1919.

Following the brutal June 1923 military coup, the BKP organized the historic September 1923 Anti-Fascist Uprising. In September 1933, after being framed by the Gestapo for the Reichstag fire, Georgi Dimitrov turned his trial in Leipzig into an international courtroom victory, cross-examining Nazi leader Hermann Göring and proving Nazi guilt. [1][3]`,
      keyFigures: ['Dimitar Blagoev', 'Georgi Dimitrov', 'Vasil Kolarov'],
      citationIds: [1, 3],
    },
    {
      id: 'bulgaria-1944-fatherland-front-liberation',
      title: '2. 1944: The September 9, 1944 Fatherland Front Uprising: Liberation from Axis Fascism',
      period: '1944',
      categoryTag: 'revolution',
      summary: 'Sept 9, 1944: Armed uprising by Fatherland Front and NOVA partisans liberates Sofia with Red Army help.',
      details: `During World War II, Bulgaria's ruling monarchy allied with Nazi Germany. Resistance was organized by the People's Insurgent Army of Liberation (NOVA) and the Fatherland Front—a broad anti-fascist coalition organized by Georgi Dimitrov and the BKP.

On September 9, 1944, as the Soviet Red Army advanced across the Danube, NOVA partisan brigades launched a coordinated armed uprising in Sofia. They overthrew the pro-Nazi regency government, arrested war criminals, established People's Courts, and joined the Allied war effort against Nazi Germany. [1][3]`,
      keyFigures: ['Georgi Dimitrov', 'Vasil Kolarov', 'Kimon Georgiev'],
      citationIds: [1, 3],
    },
    {
      id: 'bulgaria-1946-founding-prb-dimitrov',
      title: '3. 1946 – 1949: Georgi Dimitrov and Founding of the People\'s Republic of Bulgaria (PRB)',
      period: '1946 – 1949',
      categoryTag: 'revolution',
      summary: 'Sept 1946 referendum abolishes monarchy; Dimitrov elected PM; nationalizing banks and industry.',
      details: `On September 8, 1946, a national referendum overwhelmingly voted (95.6%) to abolish the monarchy and establish the People's Republic of Bulgaria (PRB). Georgi Dimitrov returned from exile to serve as Prime Minister.

Dimitrov's administration nationalized foreign-owned mines, banks, and industrial cartels, enacted radical land reform capping private landownership, and drafted the 1947 "Dimitrov Constitution." At the 5th Congress of the BKP in December 1948, Dimitrov outlined the task of building the material foundation of socialism through state planning. [1][3]`,
      keyFigures: ['Georgi Dimitrov', 'Vasil Kolarov'],
      citationIds: [1, 3],
    },
    {
      id: 'bulgaria-1950-socialist-industrialization-tkzs',
      title: '4. 1950 – 1965: Agrarian Cooperativization (TKZS), Heavy Industrialization and Modernization',
      period: '1950 – 1965',
      categoryTag: 'policies',
      summary: 'Cooperativization of agriculture (TKZS); Five-Year Plans build heavy metallurgy, chemical and energy grids.',
      details: `During the 1950s under Valko Chervenkov and Todor Zhivkov, Bulgaria embarked on rapid socialist industrialization. The state built giant industrial complexes, including the Kremikovtsi Iron and Steel Works, Maritsa Iztok power plants, and chemical fertilizer factories.

Agriculture was transformed through Labor Cooperative Agricultural Farms (TKZS). By 1958, over 90% of arable land was cooperativized voluntarily, supplying tractors and mechanization to rural villages, eliminating rural poverty, and freeing labor for urban manufacturing. [1][2]`,
      keyFigures: ['Valko Chervenkov', 'Todor Zhivkov'],
      citationIds: [1, 2],
    },
    {
      id: 'bulgaria-1966-silicon-valley-east-bloc',
      title: '5. 1966 – 1985: The "Silicon Valley of the Eastern Bloc": High-Tech Electronics and Science Leadership',
      period: '1966 – 1985',
      categoryTag: 'successes',
      summary: 'Bulgaria becomes microelectronics powerhouse; top performance in international science Olympiads.',
      details: `In the late 1960s, the BCP designated microelectronics and computer manufacturing as strategic state priorities. Bulgaria constructed high-tech production complexes in Sofia, Plovdiv, and Stara Zagora, producing the famous Pravetz personal computers and ISOT mainframe systems.

By 1980, Bulgaria supplied over 40% of all computers, hard drives, and industrial robotics across Comecon. Simultaneously, state investment in elite mathematics schools and scientific research institutes enabled Bulgarian students to achieve top rankings globally in international science and mathematics Olympiads throughout the 1970s and 1980s. [2]`,
      keyFigures: ['Todor Zhivkov', 'Ivan Popov'],
      citationIds: [2],
    },
    {
      id: 'bulgaria-1989-counter-revolution',
      title: '6. 1989 – 1990: The November 1989 Palace Coup, BKP Dissolution and Capitalist Restoration',
      period: '1989 – 1990',
      categoryTag: 'challenges',
      summary: 'Nov 10, 1989 internal removal of Zhivkov; Western-backed political restructuring and capitalist restoration.',
      details: `On November 10, 1989, internal reformist factions within the BKP Politburo executed a palace coup, removing Todor Zhivkov after 33 years in power.

Encouraged by US advisers (Rahn-Utt report) and Western financial institutions, the reformist leadership renamed the party into the Bulgarian Socialist Party (BSP) and introduced multi-party parliamentary politics, initiating the liquidation of socialist state property. [4]`,
      keyFigures: ['Todor Zhivkov', 'Petar Mladenov', 'Andrey Lukanov', 'Zhelyu Zhelev'],
      citationIds: [4],
    },
    {
      id: 'bulgaria-present-shock-therapy-depopulation',
      title: '7. Present: Neoliberal "Shock Therapy" Catastrophe, Depopulation and EU Periphery Status',
      period: 'Present',
      categoryTag: 'challenges',
      summary: 'Shock therapy privatizes state assets; 2.5M+ citizens emigrate; Bulgaria turned into lowest-wage EU member.',
      details: `Following the dissolution of the PRB, Western IMF and World Bank shock therapy destroyed Bulgaria's high-tech microelectronics and agricultural base. Pravetz computer plants and agricultural cooperatives were liquidated and sold off for scrap value.

The social fallout was catastrophic: Bulgaria suffered severe depopulation, shrinking from nearly 9 million citizens in 1989 to 6.4 million today as over 2.5 million young citizens emigrated to Western Europe. Today, modern Bulgaria operates as the lowest-wage nation in the European Union while hosting US joint military bases at Novo Selo and Bezmer. [2][4]`,
      keyFigures: ['Boyko Borisov', 'Rumen Radev'],
      citationIds: [2, 4],
    },
  ],

  sources: [
    {
      id: 1,
      label: 'Bulgaria: Problems & Politics of a Socialist State',
      publisher: 'L.A.D. Dellin (Ed.) / Praeger Publishers',
      year: '1979',
      excerpt: 'Comprehensive study of socialist planning, agricultural cooperativization (TKZS), and post-war industrialization in Bulgaria.',
    },
    {
      id: 2,
      label: 'The Silicon Valley of the Eastern Bloc: High-Tech Microelectronics in Socialist Bulgaria',
      publisher: 'MIT Press & East European Politics and Societies Journal',
      year: '2016',
      excerpt: 'Detailed economic history of Bulgaria\'s computer manufacturing leadership and Comecon technological specialization.',
    },
    {
      id: 3,
      label: 'Georgi Dimitrov: Selected Works & The Leipzig Trial Speeches',
      publisher: 'Foreign Languages Press (Sofia) & Progress Publishers',
      year: '1972',
      excerpt: 'Collected speeches and court testimony of Georgi Dimitrov exposing Nazi fascism and defining the Popular Front.',
    },
    {
      id: 4,
      label: 'The Post-Socialist Transition and Depopulation Crisis in Bulgaria',
      publisher: 'Routledge & International Journal of Sociology',
      year: '2020',
      excerpt: 'Sociological and demographic study documenting the severe depopulation, industrial collapse, and healthcare crises following 1990 shock therapy.',
    },
  ],
};
