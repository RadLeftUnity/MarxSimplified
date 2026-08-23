import type { CountryData } from '../types';

export const franceData: CountryData = {
  id: 'france',
  name: "France",
  shortName: 'France',
  flagEmoji: '🇫🇷',
  flagUrl: '/images/flags/france.svg',
  coverImage: '/images/history/france.jpg',
  category: 'global-north',
  era: '1789 – Present',
  capital: 'Paris',
  keyLeaders: ['Maximilien Robespierre', 'Gracchus Babeuf', 'Louis-Auguste Blanqui', 'Louise Michel', 'Charles de Gaulle'],
  governingParty: "Renaissance",
  governingIdeology: 'Capitalism',
  isHistoricState: false,
  
  officialGovUrl: 'https://www.gouvernement.fr/en',
  overviewText: `France occupies a legendary position in revolutionary history as the laboratory of class struggle, the birthplace of the 1871 Paris Commune—the world's first dictatorship of the proletariat—and a major global imperialist power.

The Great French Revolution of 1789 shattered feudal absolutism, elevating the bourgeoisie to power while giving rise to Gracchus Babeuf's 1796 Conspiracy of the Equals, recognized by Marx as the first modern communist vanguard organization. In March 1871, working-class Parisians seized power and established the Paris Commune for 72 heroic days. The Commune abolished the standing army, replaced it with armed workers, capped official salaries at average worker wages, and collectivized abandoned factories—providing Karl Marx and V.I. Lenin with the concrete model for the socialist state (*The Civil War in France* and *The State and Revolution*).

In the 20th century, France constructed a vast colonial empire across West Africa and Indochina. Following devastating defeats in Vietnam (Dien Bien Phu, 1954) and Algeria (1962), French capital restructured its empire through neocolonial financial mechanisms like the CFA franc. Domestically, France maintains a militant working-class tradition, demonstrated by the May 1968 general strike of 10 million workers and contemporary mass strikes against neoliberal pension cuts.`,

  contradictions: [
    "President Emmanuel Macron pushed through pension age increases and labor deregulation despite mass general strikes led by the CGT trade union, demonstrating the priority of capital accumulation over worker rights.",
    "Known as Francafrique, relied on the CFA franc currency and military deployments to extract gold and uranium until recent anti-colonial revolutions in Mali, Burkina Faso, and Niger.",
    "Right-wing political factions and media networks promote anti-Muslim and anti-immigrant legislation to fracture working-class unity and suppress suburban worker resistance.",
    "French state energy monopolies depend on foreign mineral extraction while enforcing domestic price hikes on working-class households."
  ],

  quickFacts: [
    { label: 'World\'s First Workers\' State', value: 'Paris Commune (1871) for 72 days abolished standing army & set worker wages [1]' },
    { label: 'Largest European Strike', value: 'May 1968 general strike mobilized 10 million workers (two-thirds of workforce) [2]' },
    { label: 'Haitian Slave Liberation', value: '1791 Haitian Revolution defeated Napoleon\'s imperial army to win freedom [3]' },
    { label: 'Neocolonial Currency Control', value: 'CFA Franc mechanism controls reserves of 14 African sovereign nations [4]' },
  ],

  timeline: [
    {
      id: 'france-1789-babeuf',
      title: '1. 1789 – 1799: The Great French Revolution, Jacobin Radicalism & Babeuf\'s Conspiracy',
      period: '1789 – 1799',
      categoryTag: 'revolution',
      summary: 'Storming of the Bastille in 1789; Jacobin radical phase; Gracchus Babeuf founds Conspiracy of Equals (1796).',
      details: `The 1789 French Revolution destroyed feudalism in continental Europe. Driven forward by the urban working poor (Sans-culottes), the radical Jacobin government led by Maximilien Robespierre executed King Louis XVI and mobilized mass defense against counter-revolutionary European monarchies.

Following the bourgeois Thermidorian reaction in 1794, Gracchus Babeuf and Sylvain Maréchal organized the 1796 "Conspiracy of the Equals"—advocating the abolition of private property and collective agrarian production. Marx identified Babeuf's movement as the historical origin of modern communist organization. [1]`,
      keyFigures: ['Maximilien Robespierre', 'Jean-Paul Marat', 'Gracchus Babeuf'],
      citationIds: [1],
    },
    {
      id: 'france-haiti-1848',
      title: '2. 1804 – 1848: Haitian Revolution Victory, Empire & The 1848 June Days Uprising',
      period: '1804 – 1848',
      categoryTag: 'challenges',
      summary: 'Haitian slave revolution defeats Napoleon (1804); 1848 June Days working-class insurrection in Paris.',
      details: `In Saint-Domingue (Haiti), enslaved Africans led by Toussaint Louverture and Jean-Jacques Dessalines launched the 1791 Haitian Revolution, defeating Napoleon Bonaparte's imperial expeditionary force in 1804 to establish the world's first free Black republic.

In June 1848, Paris workers rose in armed insurrection after the bourgeois government dissolved the National Workshops. The uprising was brutally crushed, killing over 3,000 workers. In *The Class Struggles in France*, Karl Marx identified the June Days as the first great battle between the two main classes of modern society: proletariat and bourgeoisie. [1][3]`,
      keyFigures: ['Toussaint Louverture', 'Louis-Auguste Blanqui', 'Karl Marx'],
      citationIds: [1, 3],
    },
    {
      id: 'france-paris-commune',
      title: '3. 1871: The 1871 Paris Commune: The World\'s First Dictatorship of the Proletariat',
      period: '1871',
      categoryTag: 'revolution',
      summary: 'March 18, 1871 seizure of power; Communards establish 72-day working-class government under Red Flag.',
      details: `Following France's humiliating defeat in the Franco-Prussian War, Paris workers refused to disarm. On March 18, 1871, the National Guard and working women stopped government troops from seizing their cannons, driving Adolphe Thiers' reactionary government to Versailles.

The Paris Commune was proclaimed on March 28 under the Red Flag. Over 72 days, the Commune implemented revolutionary democracy: replacing the standing army with armed workers, capping elected representative salaries at average worker pay, revoking recallable mandates, separating church and state, turning abandoned factories over to worker co-operatives, and banning night work for bakers. Marx hailed the Commune as "the political form at last discovered under which to work out the economical emancipation of labor." [1]`,
      keyFigures: ['Louise Michel', 'Eugène Varlin', 'Leo Frankel', 'Jarosław Dąbrowski'],
      citationIds: [1],
    },
    {
      id: 'france-semaine-sanglante',
      title: '4. 1871 – 1914: The Bloody Week (Semaine Sanglante), Syndicalism & Imperial Expansion',
      period: '1871 – 1914',
      categoryTag: 'challenges',
      summary: 'Versailles army massacres 30,000 Communards in May 1871; growth of revolutionary syndicalism (CGT); African conquests.',
      details: `In May 1871, Versailles troops backed by Bismarck invaded Paris during "The Bloody Week" (Semaine Sanglante), executing over 30,000 Communard men, women, and children and deporting thousands more to New Caledonia penal colonies.

Despite severe repression, French workers rebuilt their movement, founding the General Confederation of Labor (CGT) in 1895 around revolutionary syndicalism and the general strike strategy. Concurrently, French capital expanded its colonial empire, conquering Indochina, Madagascar, and vast swathes of West and Equatorial Africa. [1][4]`,
      keyFigures: ['Louise Michel', 'Jean Jaurès', 'Fernand Pelloutier'],
      citationIds: [1, 4],
    },
    {
      id: 'france-wwi-pcf',
      title: '5. 1914 – 1935: WWI Imperialist Slaughter, Founding of the PCF (1920) & Colonial Rule',
      period: '1914 – 1935',
      categoryTag: 'challenges',
      summary: 'WWI imperialist war kills 1.4M French soldiers; 1920 Congress of Tours founds French Communist Party (PCF).',
      details: `World War I resulted in 1.4 million French military deaths and widespread devastation across northern France. In December 1920, at the Congress of Tours, the majority of the socialist party voted to join Lenin's Communist International (Comintern), founding the French Communist Party (PCF).

The PCF actively organized against French imperialist wars, including the 1925 Rif War in Morocco, while promoting working-class unity between French workers and colonized subjects. [4]`,
      keyFigures: ['Marcel Cachin', 'Maurice Thorez', 'Ho Chi Minh (Founding PCF Member)'],
      citationIds: [4],
    },
    {
      id: 'france-popular-front-resistance',
      title: '6. 1936 – 1944: The 1936 Popular Front, Anti-Fascist Resistance (FTP/Maquis) & WWII Liberation',
      period: '1936 – 1944',
      categoryTag: 'successes',
      summary: '1936 Popular Front general strike wins paid vacation & 40-hour week; PCF leads armed WWII anti-fascist resistance.',
      details: `In May 1936, the victory of the anti-fascist Popular Front electoral alliance triggered a massive spontaneous general strike of 2 million workers occupying factories. The strikes forced employers to sign the Matignon Accords, securing paid annual vacation, a 40-hour workweek, and wage increases.

Following the 1940 Nazi invasion and the establishment of the collaborationist Vichy regime, the PCF organized the Francs-Tireurs et Partisans (FTP) communist resistance networks, playing a decisive role in the liberation of Paris in August 1944. [2][4]`,
      keyFigures: ['Maurice Thorez', 'Léon Blum', 'Charles Tillon', 'Colonel Fabien'],
      citationIds: [2, 4],
    },
    {
      id: 'france-colonial-wars',
      title: '7. 1945 – 1962: Imperial Wars of Reconquest: Defeats in Indochina & Algeria',
      period: '1945 – 1962',
      categoryTag: 'challenges',
      summary: 'French military defeated at Dien Bien Phu (1954); Algerian War of Independence (1954-1962); fall of Fourth Republic.',
      details: `Following WWII, French imperial capital attempted to reconquer its Asian and African colonies by force. In Vietnam, the anti-imperialist Viet Minh led by Ho Chi Minh inflicted a catastrophic defeat on French forces at Dien Bien Phu in May 1954.

In Algeria, the National Liberation Front (FLN) launched an armed revolution in November 1954. The French military deployed torture, internment camps, and extrajudicial executions, killing over 1 million Algerians. The crisis brought down the French Fourth Republic, returning General Charles de Gaulle to power to negotiate the 1962 Évian Accords granting Algerian independence. [3][4]`,
      keyFigures: ['Ho Chi Minh', 'Frantz Fanon', 'Ahmed Ben Bella', 'Charles de Gaulle'],
      citationIds: [3, 4],
    },
    {
      id: 'france-may-1968',
      title: '8. 1968: May 1968: Worker-Student Uprising & 10-Million Strong General Strike',
      period: '1968',
      categoryTag: 'revolution',
      summary: 'Student protests spark spontaneous general strike of 10 million workers; factory occupations shut down France.',
      details: `In May 1968, police repression of student demonstrations in Paris sparked a revolutionary explosion. Workers across France spontaneously occupied factories, red flags were raised over factories, railways, and shipyards, and 10 million workers joined the general strike—the largest general strike in European history.

The uprising brought de Gaulle's government to the brink of collapse, forcing the ruling class to sign the Grenelle Accords, granting a 35% increase in the minimum wage before the reformist trade union leadership negotiated an end to factory occupations. [2]`,
      keyFigures: ['Daniel Cohn-Bendit', 'Georges Séguy'],
      citationIds: [2],
    },
    {
      id: 'france-mitterrand-neocolonialism',
      title: '9. 1981 – 2000s: Mitterrand\'s Austerity Pivot, Neoliberal Restructuring & CFA Franc Control',
      period: '1981 – 2000s',
      categoryTag: 'challenges',
      summary: '1981 Mitterrand election; 1983 austerity pivot (Tournant de la rigueur); CFA franc neocolonial monetary dominance.',
      details: `Elected in 1981 on a radical socialist platform, François Mitterrand initially nationalized banks and major industrial groups. However, under flight-of-capital pressure by international finance, Mitterrand executed the 1983 "Tournant de la rigueur" (Austerity Pivot), adopting neoliberal deregulation and privatization.

Internationally, France maintained its neocolonial grip over 14 West and Central African countries through the CFA franc currency control system, forcing African central banks to deposit 50% of foreign reserves in the French Treasury. [3][4]`,
      keyFigures: ['François Mitterrand', 'Jacques Chirac'],
      citationIds: [3, 4],
    },
    {
      id: 'france-gilets-jaunes-sahel',
      title: '10. 2018 – Present: Yellow Vests (Gilets Jaunes), Pension Reform Strikes & Anti-Colonial Sahel Revolt',
      period: '2018 – Present',
      categoryTag: 'challenges',
      summary: '2018 Gilets Jaunes working-class uprising; 2023 pension reform general strikes; Sahel anti-colonial expulsion.',
      details: `In November 2018, fuel tax increases sparked the Yellow Vests (Gilets Jaunes) working-class movement, with weekly protests occupying roundabouts and battling militarized police across France. In 2023, President Emmanuel Macron bypassed parliament to raise the retirement age, triggering massive multi-million worker general strikes.

Internationally, anti-colonial military governments in Mali, Burkina Faso, and Niger expelled French military forces and revoked colonial mining concessions, marking the historic collapse of French neocolonial "Françafrique" dominance in the Sahel. [2][4]`,
      keyFigures: ['Emmanuel Macron', 'Jean-Luc Mélenchon'],
      citationIds: [2, 4],
    },
  ],

  sources: [
    {
      id: 1,
      label: 'The Civil War in France',
      publisher: 'Karl Marx / Progress Publishers',
      year: '1871',
      excerpt: 'Marx\'s masterwork analyzing the 1871 Paris Commune as the concrete historical form of the dictatorship of the proletariat.',
    },
    {
      id: 2,
      label: 'France 1968: The Month of Revolution',
      publisher: 'Clare Doyle / Socialist Books',
      year: '1988',
      excerpt: 'Detailed history of the May 1968 worker-student uprising and the 10-million-strong general strike.',
    },
    {
      id: 3,
      label: 'The Wretched of the Earth',
      publisher: 'Frantz Fanon / Grove Press',
      year: '1961',
      excerpt: 'Landmark anti-colonial theoretical work written during the Algerian War of Independence against French imperialism.',
    },
    {
      id: 4,
      label: 'A History of the French Communist Party',
      publisher: 'Edward Mortimer / Faber & Faber',
      year: '1984',
      excerpt: 'Comprehensive study of the PCF from its 1920 founding through the Popular Front, anti-fascist Resistance, and post-war struggles.',
    },
  ],
};
