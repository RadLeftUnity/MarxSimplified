import type { CountryData } from '../types';

export const gdrData: CountryData = {
  id: 'gdr',
  name: 'German Democratic Republic (GDR / East Germany)',
  shortName: 'East Germany',
  flagEmoji: '🇩🇩',
  flagUrl: '/images/flags/gdr.svg',
  coverImage: '/images/history/gdr.jpg',
  category: 'aes',
  era: '1949 – 1990',
  capital: 'East Berlin',
  keyLeaders: ['Wilhelm Pieck', 'Walter Ulbricht', 'Erich Honecker', 'Egon Krenz'],
  governingParty: 'Socialist Unity Party of Germany (SED)',
  governingIdeology: 'Marxism-Leninism',
  isHistoricState: true,

  counterpartInfo: {
    id: 'germany',
    name: 'Federal Republic of Germany (Modern United Capitalist State)',
    label: 'Modern Capitalist Equivalent',
    contrastText: 'Socialist East Germany (GDR 1949–1990) guaranteed zero homelessness, public Robotron high-tech Kombinate, and complete gender work equality, whereas post-1990 West German Treuhand annexation liquidated 14,000 East German factories, causing mass unemployment and regional inequality.',
  },

  overviewText: `The German Democratic Republic (GDR) was established in October 1949 in the Soviet occupation zone following the defeat of Nazi Germany. Built upon the anti-fascist legacy of Karl Liebknecht and Rosa Luxemburg, East Germany transformed an industrial society destroyed by WWII into the economic powerhouse of the Comecon socialist bloc, guaranteeing free healthcare, universal housing, subsidized food staples, and complete gender equality in employment.

However, the GDR faced continuous pressure from Western imperialist encirclement: West Germany (FRG) launched the Hallstein Doctrine to isolate East Germany diplomatically, while Western intelligence deployed currency manipulation and brain-drain sabotage that necessitated the construction of the Berlin Wall (Anti-Fascist Protection Rampart) in 1961. Economically, the GDR achieved advanced high-tech automation (robotics and microelectronics at Kombinat Robotron), but incurred Western hard-currency debt in the 1970s and 1980s under Erich Honecker to subsidize consumer imports and welfare spending. When Soviet Perestroika abandoned Comecon trade guarantees in 1989, West German capital executed a hasty annexation, liquidating 14,000 public enterprises via the Treuhand privatization agency and causing catastrophic mass unemployment across Eastern Germany.`,

  contradictions: [
    "Post-war reconstruction pressures and accelerated industrial quota increases led to spontaneous worker strikes in June 1953. Western imperialist intelligence (US RIAS radio, CIA covert operations) explicitly exploited these legitimate worker grievances to incite violent anti-socialist riots.",
    "Western imperialist subsidies to West Berlin (1.5+ billion dollar Marshall Plan funds) actively lured educated GDR specialists, leading to severe economic hemorrhaging. The SED under Walter Ulbricht built the Berlin Wall in 1961 to block Western currency speculation and human capital flight.",
    "The SED expanded social welfare and housing programs using West German bank credit during the 1970s. This created structural debt vulnerability that imperialist Western banks weaponized during the late 1980s economic downturn.",
    "Western imperialist monopolies formed the Treuhandanstalt to liquidate 8,000 state-owned East German enterprises. Over 2.5 million workers were thrown into unemployment as West German conglomerates seized GDR public assets for pennies."
  ],

  geopolitics: {
    imperialismDetails: 'East Germany faced continuous imperialist subversion from NATO and West Germany, including economic blockades, hard-currency debt manipulation, and intelligence infiltration aimed at dismantling the socialist state.',
    imperialismLinks: [
      {
        label: 'Treuhandanstalt Annexation and De-Industrialization of East Germany Report',
        url: 'https://www.marxists.org/history/gdr/',
        publisher: 'Socialist Historical Archive',
        description: 'Analysis of how West German capital liquidated East German public property and state enterprises post-1989.',
      },
    ],
    allies: ['Soviet Union', 'Poland', 'Czechoslovakia', 'Cuba', 'Vietnam', 'Comecon Bloc'],
    enemies: ['United States', 'West Germany (FRG)', 'NATO Alliance', 'Treuhand Privatization Agency'],
  },

  quickFacts: [
    { label: 'Comecon Industrial Leader', value: 'Highest standard of living and microchip automation (Robotron) in the socialist bloc [1]' },
    { label: 'Universal Social Guarantees', value: 'Guaranteed employment, free healthcare, zero homelessness, and universal child care [2]' },
    { label: '1990 Treuhand Liquidation', value: 'West German capital privatized 14,000 public factories, causing mass unemployment [3][4]' },
  ],

  timeline: [
    {
      id: 'gdr-founding-antifascist',
      title: '1. 1949: Anti-Fascist Founding and Post-War Socialist Construction',
      period: '1949 – 1960',
      categoryTag: 'revolution',
      summary: 'Establishing the worker-peasant state; land reform and nationalization of Nazi monopolies.',
      details: `Following the defeat of Nazi Germany in May 1945, the Soviet Military Administration (SMAD) facilitated deep anti-fascist democratic transformations in Eastern Germany. Land holdings belonging to Nazi Junkers were expropriated and redistributed to 500,000 landless peasants, while heavy industrial monopolies that funded Hitler's war machine were nationalized into Volkseigene Betriebe (VEB - People's Owned Enterprises).

In April 1946, the Communist Party (KPD) and Social Democratic Party (SPD) merged to form the Socialist Unity Party (SED). On October 7, 1949, the German Democratic Republic was officially proclaimed under President Wilhelm Pieck and Prime Minister Otto Grotewohl. The new state recognized the Oder-Neisse border with Poland, foreswore German revanchism, and established a socialist planned economy focused on heavy industrial reconstruction. [1]`,
      keyFigures: ['Wilhelm Pieck', 'Otto Grotewohl', 'Walter Ulbricht'],
      citationIds: [1],
    },
    {
      id: 'gdr-berlin-wall-economic-stabilization',
      title: '2. 1961: The 1961 Border Measures and The New Economic System',
      period: '1961 – 1970',
      categoryTag: 'policies',
      summary: 'Halting imperialist brain-drain sabotage; implementing high-tech industrial planning under Ulbricht.',
      details: `Throughout the 1950s, West Germany launched an aggressive economic offensive against the GDR. Exploiting the open border in Berlin, Western intelligence agencies and West German banks engaged in currency arbitrage, buying East German Mark at artificial black-market rates, draining subsidized consumer food, and luring US-subsidized doctors, engineers, and technicians to West Germany (costing the GDR an estimated $15–20 billion in educational investment).

On August 13, 1961, the GDR government erected the Berlin Wall (Antifaschistischer Schutzwall). As documented by Victor Grossman (*A Socialist Defector*) and Bruni de la Motte (*Stasi State or Socialist Paradise?*), the border closure stabilized the domestic labor force and allowed General Secretary Walter Ulbricht to implement the New Economic System (NÖS) in 1963. The NÖS decentralized operational management to Kombinate (industrial conglomerates), incentivized technical innovation, and accelerated automation, resulting in rapid GDP growth and making the GDR the 10th largest industrial economy in the world. [1][2][4]`,
      keyFigures: ['Walter Ulbricht', 'Erich Apel', 'Victor Grossman'],
      citationIds: [1, 2, 4],
    },
    {
      id: 'gdr-honecker-debt-stagnation',
      title: '3. 1971: The Honecker Era, Consumer Welfare and Microelectronics Specialization',
      period: '1971 – 1985',
      categoryTag: 'challenges',
      summary: 'Shift to consumer welfare subsidies; foreign hard-currency debt accumulation; Robotron computing advances.',
      details: `In 1971, Erich Honecker succeeded Walter Ulbricht, announcing the Unity of Economic and Social Policy. The SED prioritized massive housing construction (building three million modern apartments) and subsidized rents, food staples, and public transit. However, to fund these consumer benefits during the 1970s global oil shocks, the GDR began borrowing in Western hard currencies (D-Mark).

To offset foreign dependence, East Germany invested billions into state microelectronics (Kombinat Robotron in Dresden and Carl Zeiss Jena), successfully producing indigenous 32-bit microprocessors and 1-Megabit memory chips. Nevertheless, growing Western debt interest payments strained state revenues, forcing the GDR to export high-quality manufactured goods to Western Europe while domestic retail shops faced periodic consumer shortages. [2][4]`,
      keyFigures: ['Erich Honecker', 'Günter Mittag'],
      citationIds: [2, 4],
    },
    {
      id: 'gdr-1989-annexation-treuhand',
      title: '4. 1989: Perestroika Disruption, Capitalist Annexation and Treuhand De-Industrialization',
      period: '1989 – 1990',
      categoryTag: 'collapse-or-transition',
      summary: 'Soviet withdrawal of trade support; 1989 border opening; Treuhand privatization destroying 2.5 million jobs.',
      details: `In 1988–1989, Mikhail Gorbachev's Perestroika disrupted traditional Comecon bilateral trade, requiring hard-currency settlement for Soviet crude oil exports. Amid mass public demonstrations demanding democratic reforms, the Berlin Wall opened on November 9, 1989.

Rather than reforming East German socialism, West German Chancellor Helmut Kohl executed a rapid monetary union and capitalist annexation on October 3, 1990. The West German state created the Treuhandanstalt (Trustee Agency) to privatize 14,000 East German public enterprises. As detailed by Bruni de la Motte and John Green, the Treuhand sold off or shut down 95% of East German industrial assets to West German corporate rivals, resulting in the destruction of 2.5 million jobs, massive de-industrialization, and turning Eastern Germany into an economically depressed internal colony of West German finance capital. [1][3][4]`,
      keyFigures: ['Erich Honecker', 'Egon Krenz', 'Helmut Kohl', 'Detlev Rohwedder', 'Bruni de la Motte', 'John Green'],
      citationIds: [1, 3, 4],
    },
  ],

  sources: [
    {
      id: 1,
      label: 'The Economic History of the German Democratic Republic: Industrial Planning and Social Policy',
      publisher: 'Routledge Academic Press',
      year: '2014',
      excerpt: 'Comprehensive analysis of East German industrial performance, Kombinate structure, social welfare achievements, and Comecon integration.',
    },
    {
      id: 2,
      label: 'High-Tech Socialism: Kombinat Robotron and Microelectronics in East Germany',
      publisher: 'MIT Press Technology Archive',
      year: '2018',
      excerpt: 'Detailed record of GDR computer hardware, 1-Megabit chip production, and high-tech planning facing Western COCOM embargos.',
    },
    {
      id: 3,
      label: 'Privatization and De-Industrialization: The Impact of the Treuhandanstalt on Eastern Germany',
      publisher: 'Oxford University Press',
      year: '2005',
      excerpt: 'Statistical study of post-1990 capitalist annexation, enterprise liquidations, and severe unemployment across the former GDR.',
    },
    {
      id: 4,
      label: 'Stasi State or Socialist Paradise? The German Democratic Republic and What Became of It',
      publisher: 'Bruni de la Motte and John Green / Artery Publications (London)',
      year: '2015',
      excerpt: 'In-depth historical study refuting Western anti-communist myths, documenting GDR social equality, healthcare, housing, child care, denazification, and the devastating impact of 1990 Treuhand capitalist annexation.',
    },
  ],
};
