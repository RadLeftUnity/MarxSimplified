import type { CountryData } from '../types';

export const bulgariaData: CountryData = {
  id: 'bulgaria',
  name: "Bulgaria",
  shortName: 'Bulgaria',
  flagEmoji: '🇧🇬',
  flagUrl: '/images/flags/bulgaria.svg',
  coverImage: '/images/history/bulgaria.jpg',
  category: 'global-north',
  era: '1946 – Present',
  capital: 'Sofia',
  keyLeaders: ['Dimitar Blagoev (Father of Bulgarian Marxism)', 'Georgi Dimitrov', 'Valko Chervenkov', 'Todor Zhivkov'],
  governingParty: "GERB",
  governingIdeology: 'Capitalism',
  isHistoricState: false,

  counterpartInfo: {
    id: 'bulgaria-modern',
    name: 'Republic of Bulgaria (Modern Post-Socialist State)',
    label: 'Modern Capitalist Equivalent',
    contrastText: 'Socialist Bulgaria (1946–1990) built electronics manufacturing & universal social security, contrasting with modern Bulgaria\'s 1990s IMF shock therapy, 2004 NATO bases, & severe population drop from 9M to 6.4M.',
  },
  
  officialGovUrl: 'https://www.gov.bg/en',
  overviewText: `Bulgaria represents a profound historical example of socialist industrial transformation, anti-fascist heroism, and the disastrous consequences of post-1990 capitalist "shock therapy."

In 1891, Dimitar Blagoev founded the Bulgarian Social Democratic Workers' Party (the "Narrow Socialists"), establishing one of Europe's earliest Marxist vanguard movements. In 1933, Bulgarian Marxist leader **Georgi Dimitrov** achieved global renown during the Leipzig Trial, brilliantly turning a Nazi frame-up into a trial of European fascism itself. On **September 9, 1944**, the communist-led **Fatherland Front** and partisan militias launched an armed uprising, liberating Sofia from pro-Nazi monarchist rule.

Under the **People's Republic of Bulgaria (PRB)** (1946–1990), Bulgaria transformed from an impoverished, illiterate agrarian country into an advanced industrial-technological power. Renowned as the **"Silicon Valley of the Eastern Bloc,"** socialist Bulgaria produced over 40% of Comecon's mainframe computers and microelectronics, guaranteeing universal healthcare, free education, housing, and zero unemployment. The 1989–1990 capitalist restoration liquidated state industries, triggering a catastrophic depopulation crisis where over 2 million citizens fled the country.`,

  contradictions: [
    "Bulgaria transformed from an agrarian nation into an electronics and computer exporter tied closely to the Soviet market. When Soviet supply chains fractured in the late 1980s, Bulgarian heavy industry faced immediate raw material shortages.",
    "The BCP's forced assimilation campaigns targeting the Turkish minority created severe social division, leading to the emigration of 300,000 agricultural workers in 1989 and disrupting agricultural production.",
    "BCP reformists deposed Zhivkov in November 1989 to implement multi-party elections. Western financial institutions immediately leveraged Bulgarian foreign debt to demand rapid privatization.",
    "Post-1989 shock therapy privatized state agricultural cooperatives and electronics factories, causing Bulgaria's population to collapse from 9 million to 6.5 million due to mass economic emigration to Western Europe."
  ],

  quickFacts: [
    { label: 'Sept 9, 1944 Revolution', value: 'Fatherland Front armed uprising liberated Bulgaria from pro-Nazi monarchy [1]' },
    { label: 'Silicon Valley of East Bloc', value: 'Bulgaria produced 40%+ of Comecon microelectronics & mainframe computers [2]' },
    { label: 'Georgi Dimitrov Heroism', value: 'Comintern leader who humiliated Hermann Göring at the 1933 Leipzig Trial [3]' },
    { label: 'Post-1990 Depopulation', value: 'Capitalist shock therapy triggered 25%+ population decline (2M+ emigrants [4])' },
  ],

  timeline: [
    {
      id: 'bulgaria-blagoev-dimitrov-leipzig',
      title: '1. Pre-1944: Dimitar Blagoev, Founding of Bulgarian Marxism & Dimitrov\'s 1933 Leipzig Victory',
      period: 'Pre-1944',
      categoryTag: 'pre-revolution',
      summary: 'Blagoev founds Marxist party in 1891; 1923 September Anti-Fascist Uprising; Dimitrov trial victory in 1933.',
      details: `In July 1891, Dimitar Blagoev organized the Buzludzha Congress, founding the Bulgarian Social Democratic Workers' Party. In 1903, the party split, and the revolutionary Marxist faction ("Narrow Socialists" / Tesni Sotzialisti) led by Blagoev and Georgi Dimitrov rejected reformism, forming the Communist Party of Bulgaria (BKP) in 1919.

Following the brutal June 1923 military coup, the BKP organized the historic September 1923 Anti-Fascist Uprising, the world's first organized anti-fascist insurrection. In September 1933, after being framed by the Gestapo for the Reichstag fire, Georgi Dimitrov turned his trial in Leipzig into an international courtroom victory, cross-examining Nazi leader Hermann Göring and proving Nazi guilt. [3]`,
      keyFigures: ['Dimitar Blagoev', 'Georgi Dimitrov', 'Vasil Kolarov'],
      citationIds: [3],
    },
    {
      id: 'bulgaria-1944-fatherland-front',
      title: '2. 1944: The September 9, 1944 Fatherland Front Uprising: Liberation from Axis Fascism',
      period: '1944',
      categoryTag: 'revolution',
      summary: 'Sept 9, 1944: Armed uprising by Fatherland Front & NOVA partisans liberates Sofia with Red Army help.',
      details: `During World War II, Bulgaria's ruling monarchy allied with Nazi Germany. Resistance was organized by the People's Insurgent Army of Liberation (NOVA) and the **Fatherland Front**—a broad anti-fascist coalition organized by Georgi Dimitrov and the BKP.

On September 9, 1944, as the Soviet Red Army advanced across the Danube, NOVA partisan brigades and anti-fascist army units launched a coordinated armed uprising in Sofia. They overthrew the pro-Nazi regency government, arrested war criminals, established People's Courts, and joined the Allied war effort against Nazi Germany. [1][3]`,
      keyFigures: ['Georgi Dimitrov', 'Vasil Kolarov', 'Kimon Georgiev'],
      citationIds: [1, 3],
    },
    {
      id: 'bulgaria-1946-founding-prb',
      title: '3. 1946 – 1949: Georgi Dimitrov & Founding of the People\'s Republic of Bulgaria (PRB)',
      period: '1946 – 1949',
      categoryTag: 'revolution',
      summary: 'Sept 1946 referendum abolishes monarchy; Dimitrov elected PM; nationalizing banks & industry.',
      details: `On September 8, 1946, a national referendum overwhelmingly voted (95.6%) to abolish the monarchy and establish the **People's Republic of Bulgaria (PRB)**. Georgi Dimitrov returned from exile to serve as Prime Minister.

Dimitrov's administration nationalized foreign-owned mines, banks, and industrial cartels, enacted radical land reform capping private landownership, and drafted the 1947 "Dimitrov Constitution." At the 5th Congress of the BKP in December 1948, Dimitrov outlined the task of building the material foundation of socialism through state planning. [1][3]`,
      keyFigures: ['Georgi Dimitrov', 'Vasil Kolarov'],
      citationIds: [1, 3],
    },
    {
      id: 'bulgaria-1950-socialist-industrialization-tkzs',
      title: '4. 1950 – 1965: Agrarian Cooperativization (TKZS), Heavy Industrialization & Modernization',
      period: '1950 – 1965',
      categoryTag: 'policies',
      summary: 'Cooperativization of agriculture (TKZS); Five-Year Plans build heavy metallurgy, chemical & energy grids.',
      details: `During the 1950s under Valko Chervenkov and Todor Zhivkov, Bulgaria embarked on rapid socialist industrialization. The state built giant industrial complexes, including the Kremikovtsi Iron and Steel Works, Maritsa Iztok power plants, and chemical fertilizer factories.

Agriculture was transformed through Labor Cooperative Agricultural Farms (TKZS). By 1958, over 90% of arable land was cooperativized voluntarily, supplying cheap tractors and mechanization to rural villages, eliminating rural poverty, and freeing labor for urban manufacturing. [1][2]`,
      keyFigures: ['Valko Chervenkov', 'Todor Zhivkov'],
      citationIds: [1, 2],
    },
    {
      id: 'bulgaria-1966-silicon-valley-east-bloc',
      title: '5. 1966 – 1985: The "Silicon Valley of the Eastern Bloc": High-Tech Electronics Leadership',
      period: '1966 – 1985',
      categoryTag: 'successes',
      summary: 'Bulgaria becomes microelectronics powerhouse; manufacturing 40%+ of Comecon computers (Pravetz).',
      details: `Under Todor Zhivkov, the PRB executed a visionary industrial strategy, specializing within the Council for Mutual Economic Assistance (Comecon) in high-technology microelectronics, robotics, and computing.

The state established the ISOT industrial conglomerate and the Pravetz computer plant. By the late 1970s, Bulgaria produced over 40% of all personal computers, hard disk drives, and industrial robots used across the Soviet Union and Eastern Bloc, earning Bulgaria global recognition as the **"Silicon Valley of the Eastern Bloc."** [2]`,
      keyPolicies: [],
      keyFigures: ['Todor Zhivkov', 'Ivan Popov'],
      citationIds: [2],
    },
    {
      id: 'bulgaria-1986-welfare-achievements',
      title: '6. 1986 – 1989: High Social Welfare Achievements: Universal Healthcare, 100% Literacy & Guaranteed Rights',
      period: '1986 – 1989',
      categoryTag: 'successes',
      summary: '100% literacy, free universal healthcare, guaranteed public housing, and zero unemployment under PRB.',
      details: `By the late 1980s, the People's Republic of Bulgaria achieved high human development metrics: illiteracy was completely eradicated, free comprehensive healthcare was guaranteed to all citizens through polyclinics, public housing was available at minimal cost, and unemployment was 0%.

Cultural institutions, scientific research institutes, and mountain resort worker sanatoriums were fully subsidized by the state budget, providing working-class families with guaranteed annual vacations. [1][2]`,
      keyFigures: ['Todor Zhivkov', 'Lyudmila Zhivkova'],
      citationIds: [1, 2],
    },
    {
      id: 'bulgaria-1989-counter-revolution',
      title: '7. 1989 – 1990: The November 1989 Palace Coup, BKP Dissolution & Capitalist Counter-Revolution',
      period: '1989 – 1990',
      categoryTag: 'challenges',
      summary: 'Nov 10, 1989 internal removal of Zhivkov; Western-backed political restructuring & capitalist restoration.',
      details: `On November 10, 1989, internal reformist factions within the BKP Politburo (led by Petar Mladenov and Andrey Lukanov) executed a palace coup, removing Todor Zhivkov after 33 years in power.

Encouraged by US advisers (Rahn-Utt report) and Western institutions, the reformist leadership renamed the party into the Bulgarian Socialist Party (BSP) and introduced multipolar parliamentary politics. In 1990, the state launched rapid market reforms, initiating the liquidation of socialist state property. [4]`,
      keyFigures: ['Todor Zhivkov', 'Petar Mladenov', 'Andrey Lukanov', 'Zhelyu Zhelev'],
      citationIds: [4],
    },
    {
      id: 'bulgaria-present-shock-therapy-depopulation',
      title: '8. Present: Neoliberal "Shock Therapy" Catastrophe: Mass Depopulation, Privatization & EU Periphery Status',
      period: 'Present',
      categoryTag: 'challenges',
      summary: 'Shock therapy privatizes state assets; 2M+ citizens emigrate; Bulgaria turned into impoverished EU periphery.',
      details: `Following the dissolution of the PRB, Western IMF and World Bank "shock therapy" destroyed Bulgaria's industrial and agricultural base. Computer factories and agricultural cooperatives were dismantled and sold off for scrap value to private oligarchs.

The social fallout was catastrophic: Bulgaria suffered the worst peacetime depopulation crisis in modern global history, shrinking from nearly 9 million citizens in 1989 to under 6.4 million today as over 2 million young workers emigrated. As the poorest member of the European Union, Bulgaria faces crumbling public healthcare, rampant poverty among pensioners, and deep working-class nostalgia for socialist PRB guarantees. [2][4]`,
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
