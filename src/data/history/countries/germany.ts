import type { CountryData } from '../types';

export const germanyData: CountryData = {
  id: 'germany',
  name: "Germany",
  shortName: 'Germany',
  flagEmoji: '🇩🇪',
  flagUrl: '/images/flags/germany.svg',
  coverImage: '/images/history/germany.jpg',
  category: 'global-north',
  era: '1848 to Present',
  capital: 'Berlin',
  keyLeaders: ['Karl Marx', 'Rosa Luxemburg', 'Karl Liebknecht', 'Wilhelm Pieck', 'Walter Ulbricht', 'Erich Honecker'],
  governingParty: "Social Democratic Party (SPD)",
  governingIdeology: 'Capitalism',
  isHistoricState: false,

  counterpartInfo: {
    id: 'gdr',
    name: 'German Democratic Republic (GDR, 1949 to 1990)',
    label: 'Historic Socialist Equivalent',
    contrastText: 'Socialist East Germany (GDR 1949 to 1990) operated as an anti-fascist worker-peasant state guaranteeing universal housing and job security, contrasting with West German capital\'s post-1990 Treuhand liquidation of East German public assets.',
  },
  
  officialGovUrl: 'https://www.bundesregierung.de/breg-en',
  overviewText: `Germany holds central significance as the birthplace of scientific socialism, the site of the world's first mass Marxist workers' party, the 1918 November Revolution, and the post-WWII German Democratic Republic (GDR / East Germany).

Karl Marx and Friedrich Engels were born in the Rhineland, publishing "The Communist Manifesto" in 1848. German industrialization proceeded rapidly under Prussian Bismarckian unification (1871), forging a powerful industrial working class. Following the 1918 German November Revolution and the tragic murder of Rosa Luxemburg and Karl Liebknecht by proto-fascist Freikorps deployed by social democratic reformists, Germany entered the turbulent Weimar period.

In 1933, German monopoly capital backed Adolf Hitler to establish fascist dictatorship, aiming to crush the Communist Party of Germany (KPD) and invade the USSR. Following the defeat of Nazism by the Soviet Red Army in 1945, the anti-fascist socialist German Democratic Republic (GDR) was established in East Germany (1949 to 1990), guaranteeing 100% employment, free housing, and state childcare until its capitalist liquidation by the Treuhand agency during the 1990 annexation. In recent years (2024 to 2026), de-industrialization, NATO rearmament, and corporate layoff announcements at Volkswagen have sparked mass industrial warning strikes, railway shutdowns, and farmer blockades across Germany.`,

  contradictions: [
    "The 1990 post-socialist annexation of East Germany liquidated 14,000 public enterprises through the Treuhand agency, throwing millions into unemployment and turning eastern regions into low-wage industrial sub-suppliers.",
    "German industrial monopolies depend on affordable energy and export markets, yet Berlin subordinated domestic energy security to NATO military escalations and US sanctions policies, triggering a severe industrial recession and mass layoffs.",
    "The Hartz IV and Bürgergeld labor regimes instituted precarious low-wage contracts while corporations like Volkswagen announced unprecedented domestic factory closure plans in 2024, sparking 100,000-worker IG Metall strikes.",
    "Imperialist foreign policy funnels tens of billions into NATO rearmament and weapons shipments to Ukraine and Israel while domestic police apparatuses violently suppress anti-war and Palestine solidarity demonstrations."
  ],

  quickFacts: [
    { label: 'Birthplace of Marxism', value: 'Karl Marx (Trier) and Friedrich Engels (Barmen/Wuppertal)' },
    { label: 'November Revolution 1918', value: 'Workers\' and Soldiers\' Councils formed across Kiel and Berlin [1]' },
    { label: 'East German Socialist State', value: 'GDR (1949 to 1990): Zero unemployment, free education and childcare [2]' },
    { label: 'Treuhand Capitalist Liquidation', value: 'Over 14,000 socialist state enterprises privatized in 1990 [3]' },
  ],

  timeline: [
    {
      id: 'germany-1848-marxism',
      title: '1. 1848 to 1871: The 1848 Revolutions, Communist Manifesto and Bismarckian Unification',
      period: '1848 to 1871',
      categoryTag: 'revolution',
      summary: 'Publishing The Communist Manifesto; 1848 German revolutions; Bismarck unifies Germany under Prussian militarism.',
      details: `In February 1848, Karl Marx and Friedrich Engels published *The Communist Manifesto* in London on behalf of the Communist League. Weeks later, bourgeois-democratic revolutions swept the German Confederation, with workers and peasants demanding national unity and democratic rights.

After the liberal bourgeoisie compromised with the feudal aristocracy, Otto von Bismarck unified Germany "by blood and iron" in 1871 under Prussian authoritarian rule, combining Junker landlord power with heavy industrial capital. [1]`,
      keyFigures: ['Karl Marx', 'Friedrich Engels', 'Otto von Bismarck'],
      citationIds: [1],
    },
    {
      id: 'germany-spd-anti-socialist',
      title: '2. 1875 to 1914: Growth of the SPD, Anti-Socialist Laws and The 1914 War Betrayal',
      period: '1875 to 1914',
      categoryTag: 'policies',
      summary: 'Founding of the SPD at Gotha (1875); Bismarck\'s 1878 Anti-Socialist Laws; 1914 SPD vote for imperialist war credits.',
      details: `In 1875, German working-class groups united to form the Social Democratic Party of Germany (SPD). Fearing socialist growth, Bismarck passed the Anti-Socialist Laws (1878 to 1890), banning socialist publications and trade unions.

Despite underground persecution, the SPD grew into the largest party in the Reichstag by 1912. However, opportunism and revisionism infected party leadership. On August 4, 1914, SPD parliamentary delegates voted in favor of imperialist war credits for World War I, betraying internationalist working-class solidarity. [1][4]`,
      keyFigures: ['August Bebel', 'Karl Kautsky', 'Rosa Luxemburg'],
      citationIds: [1, 4],
    },
    {
      id: 'germany-november-revolution',
      title: '3. 1918 to 1919: The German November Revolution and Murder of Luxemburg and Liebknecht',
      period: '1918 to 1919',
      categoryTag: 'revolution',
      summary: 'Kiel sailor mutiny; Workers\' and Soldiers\' Councils formed; SPD deploys Freikorps to murder Luxemburg and Liebknecht.',
      details: `In November 1918, a sailor mutiny in Kiel triggered a revolutionary wave across Germany. Workers' and Soldiers' Councils seized power, forcing Kaiser Wilhelm II to abdicate. On November 9, Karl Liebknecht proclaimed the "Free Socialist Republic of Germany" from the Berlin Palace.

To stop socialist revolution, SPD leader Friedrich Ebert allied with the monarchist army high command. In January 1919, during the Spartacist Uprising, SPD Minister Gustav Noske deployed proto-fascist Freikorps mercenaries to suppress the revolution, brutally murdering Communist leaders Rosa Luxemburg and Karl Liebknecht. [1][4]`,
      keyFigures: ['Rosa Luxemburg', 'Karl Liebknecht', 'Friedrich Ebert', 'Gustav Noske'],
      citationIds: [1, 4],
    },
    {
      id: 'germany-weimar-kpd',
      title: '4. 1919 to 1932: The Weimar Republic Crisis, Hyperinflation and KPD Resistance',
      period: '1919 to 1932',
      categoryTag: 'challenges',
      summary: '1923 hyperinflation crisis; founding of the KPD; Ernst Thälmann leads Red Front Fighters\' League.',
      details: `The Weimar Republic was plagued by structural economic crisis, French occupation of the Ruhr (1923), hyperinflation, and massive reparations imposed by the Versailles Treaty.

Led by Ernst Thälmann, the Communist Party of Germany (KPD) mobilized millions of workers, forming the Red Front Fighters' League (Roter Frontkämpferbund) to battle rising Nazi Sturmabteilung (SA) paramilitary violence in working-class neighborhoods. [1]`,
      keyFigures: ['Ernst Thälmann', 'Clara Zetkin'],
      citationIds: [1],
    },
    {
      id: 'germany-nazi-fascism',
      title: '5. 1933 to 1945: The Nazi Fascist Dictatorship: Monopoly Capital\'s Terror Against Communism',
      period: '1933 to 1945',
      categoryTag: 'challenges',
      summary: 'Hitler appointed Chancellor in 1933; Reichstag Fire frame-up; crushing the KPD and WWII anti-Soviet war of extermination.',
      details: `Facing deep capitalist crisis during the Great Depression, German industrial monopoly cartels (IG Farben, Krupp, Thyssen) financed Adolf Hitler. Appointed Chancellor in January 1933, Hitler staged the Reichstag Fire frame-up to outlaw the KPD and SPD, opening Buchenwald and Dachau concentration camps initially for communist political prisoners.

Fascism functioned as the open, terroristic dictatorship of the most reactionary elements of finance capital. In June 1941, Nazi Germany launched Operation Barbarossa, a war of extermination against the USSR that resulted in 27 million Soviet deaths before the Soviet Red Army raised the Red Flag over the Reichstag in May 1945. [1]`,
      keyFigures: ['Adolf Hitler', 'Ernst Thälmann', 'Georgi Dimitrov'],
      citationIds: [1],
    },
    {
      id: 'germany-postwar-division',
      title: '6. 1945 to 1949: Post-War Anti-Fascist Reconstruction and Division of Germany',
      period: '1945 to 1949',
      categoryTag: 'policies',
      summary: 'Potsdam Agreement; denazification and landlord expropriation in Soviet Zone; founding of Western bizone.',
      details: `Following victory in 1945, Germany was divided into four occupation zones. In the Soviet Occupation Zone (SBZ), anti-fascist committees conducted genuine land reform, expropriating Nazi war criminals and Junker landlords to distribute land to 500,000 peasant families.

In the Western zones, the US and British militaries halted denazification to preserve capitalist property relations, integrating former Nazi industrialists and intelligence officers into the West German state structure. In May 1949, the Western powers created the Federal Republic of Germany (FRG). [2]`,
      keyFigures: ['Wilhelm Pieck', 'Otto Grotewohl', 'Konrad Adenauer'],
      citationIds: [2],
    },
    {
      id: 'germany-gdr-founding',
      title: '7. 1949 to 1961: Founding of the German Democratic Republic (GDR) and Socialist Planning',
      period: '1949 to 1961',
      categoryTag: 'successes',
      summary: 'Proclamation of the GDR on October 7, 1949; founding the SED; nationalizing heavy industry into Volkseigene Betriebe.',
      details: `On October 7, 1949, the socialist German Democratic Republic (GDR) was proclaimed in Berlin under the leadership of the Socialist Unity Party (SED), formed by the merger of the KPD and left-wing SPD.

The GDR nationalized industrial enterprises into People's Own Enterprises (Volkseigene Betriebe, VEB), established centralized five-year economic planning, and eliminated rent exploitation. However, Western economic sabotage and human capital drain via open borders in West Berlin created severe labor losses. [2]`,
      keyFigures: ['Wilhelm Pieck', 'Walter Ulbricht', 'Otto Grotewohl'],
      citationIds: [2],
    },
    {
      id: 'germany-gdr-socialist-state',
      title: '8. 1961 to 1989: The GDR Socialist State: Anti-Fascist Protection Rampart and Social Guarantees',
      period: '1961 to 1989',
      categoryTag: 'successes',
      summary: 'Construction of Berlin Wall (1961); 100% employment; free state childcare, education and zero homelessness.',
      details: `On August 13, 1961, the GDR constructed the Anti-Fascist Protection Rampart (Berlin Wall) to halt Western currency speculation, brain drain, and espionage.

During the 1970s and 1980s under Erich Honecker, the GDR achieved remarkable social rights: 100% guaranteed employment, comprehensive free state childcare, free university education, subsidized basic foodstuffs, zero homelessness, and constitutional gender equality. The GDR also rendered extensive anti-imperialist aid to liberation movements in Angola, Vietnam, and Palestine. [2][3]`,
      keyFigures: ['Erich Honecker', 'Willi Stoph'],
      citationIds: [2, 3],
    },
    {
      id: 'germany-treuhand-annexation',
      title: '9. 1989 to 1990: Dissolution of the GDR, Treuhand Privatization and Capitalist Annexation',
      period: '1989 to 1990',
      categoryTag: 'challenges',
      summary: 'Fall of the Berlin Wall; Treuhand institution privatizes 14,000 socialist factories; loss of 2.5 million jobs.',
      details: `Amidst economic pressures and political demonstrations in late 1989, the border was opened. Rather than reforming the GDR, West German capital executed a swift political and economic annexation (Anschluss).

In 1990, the West German government created the Treuhandanstalt (Treuhand agency), which privatized and liquidated over 14,000 East German socialist state enterprises. Millions of East German workers lost their jobs overnight, social benefits were stripped, and public property was sold off to West German corporations for pennies on the dollar. [3]`,
      keyFigures: ['Helmut Kohl', 'Detlev Rohwedder', 'Erich Honecker'],
      citationIds: [3],
    },
    {
      id: 'germany-reunified-imperialism',
      title: '10. 1991 to Present: Reunified German Imperialism, Rearmament and 2024 to 2026 Labor Strikes',
      period: '1991 to Present',
      categoryTag: 'challenges',
      summary: 'EU austerity hegemony; €100B military rearmament; 2024 to 2026 farmer blockades, rail strikes and Volkswagen walkouts.',
      details: `Reunified Germany emerged as the dominant imperialist power of the European Union, enforcing Hartz IV domestic wage suppression and dictating austerity across southern Europe. In 1999, Germany participated in its first foreign military combat operation since WWII during the illegal NATO bombing of Yugoslavia, and in 2022 Chancellor Olaf Scholz announced a *Zeitenwende* ("turning point") with a €100 billion special military rearmament fund.

Between 2024 and 2026, the loss of affordable pipeline energy, soaring military budgets, and declining industrial competitiveness plunged Germany into deep economic contraction and social unrest. In early 2024, tens of thousands of farmers paralyzed Berlin and major highways with tractor blockades against agricultural diesel subsidy cuts, coinciding with nationwide GDL train drivers' strikes and Lufthansa and public transport walkouts led by ver.di. In late 2024, after industrial giant **Volkswagen** threatened to close domestic German plants for the first time in its 87-year history and slash wages by 10%, over 100,000 autoworkers organized by **IG Metall** launched massive warning strikes across nine factories, while Scholz's three-party coalition collapsed over debt-brake austerity and Ukraine war financing. [3][4]`,
      keyFigures: ['Gerhard Schröder', 'Angela Merkel', 'Olaf Scholz', 'Friedrich Merz', 'Sahra Wagenknecht'],
      citationIds: [3, 4],
    },
  ],

  sources: [
    {
      id: 1,
      label: 'The German Revolution 1918-1923',
      publisher: 'Pierre Broué / Haymarket Books',
      year: '2006',
      excerpt: 'Comprehensive history of the German November Revolution, the Workers\' and Soldiers\' Councils, Spartacist uprising, and the murder of Luxemburg and Liebknecht.',
    },
    {
      id: 2,
      label: 'Stasi State or Socialist Paradise? The German Democratic Republic Through the Eyes of Demystification',
      publisher: 'Bruni de la Motte and John Green / Artery Publications',
      year: '2015',
      excerpt: 'Empirical analysis of social achievements, universal housing, women\'s rights, and economic planning in East Germany (GDR).',
    },
    {
      id: 3,
      label: 'The Capitalist Annexation of East Germany: The Treuhand Experience',
      publisher: 'Victor Grossman / Monthly Review Press',
      year: '2003',
      excerpt: 'Detailed investigation of the Treuhand agency\'s liquidation of 14,000 East German state enterprises following the 1990 annexation.',
    },
    {
      id: 4,
      label: 'The Anti-Socialist Law and German Social Democracy',
      publisher: 'Vernon L. Lidtke / Princeton University Press',
      year: '1966',
      excerpt: 'Historical study of Bismarck\'s anti-socialist laws and the underground struggle of the German working class.',
    },
  ],
};
