import type { CountryData } from '../types';

export const parisCommuneData: CountryData = {
  id: 'paris-commune',
  name: "Paris Commune (1871)",
  shortName: 'Paris Commune',
  flagEmoji: '🚩',
  flagUrl: '/images/flags/paris-commune.svg',
  coverImage: '/images/history/paris-commune.jpg',
  category: 'aes',
  era: '1871',
  capital: 'Paris',
  keyLeaders: ['Louis-Eugène Varlin', 'Jarosław Dąbrowski', 'Élisabeth Dmitrieff', 'Louise Michel', 'Léo Frankel'],
  governingParty: "Council of the Paris Commune (Blanquists and First International)",
  governingIdeology: "Socialism",
  isHistoricState: true,

  overviewText: `The Paris Commune of 1871 stands as the world's first working-class socialist state, established on March 18, 1871, when the armed proletarian National Guard of Paris refused to surrender their cannons to Adolphe Thiers' reactionary French bourgeois government following the Franco-Prussian War.

For 72 heroic days, the workers of Paris abolished the standing army in favor of the armed people, capped civil servant salaries at average worker wages, declared the separation of church and state, instituted free secular public education, and handed abandoned factories over to worker co-operatives. Women played a decisive vanguard role through the Union des Femmes, led by Élisabeth Dmitrieff and Louise Michel, organizing field hospitals, barricade defense, and workplace equality.

Karl Marx analyzed the Paris Commune in 'The Civil War in France,' demonstrating that the working class cannot simply lay hold of the ready-made bourgeois state machinery and wield it for its own purposes, but must shatter the capitalist state and replace it with a dictatorship of the proletariat based on recallable delegates. In May 1871, Thiers' Versailles troops colluded with Bismarck's Prussian army to enter Paris during Bloody Week (Semaine Sanglante), executing over 20,000 communards and sending thousands into penal exile.`,

  contradictions: [
    "The Commune council hesitated to seize the assets of the Bank of France, leaving billions of francs in private capital that Thiers used to finance the Versailles counter-revolutionary army.",
    "The communards maintained strict electoral democracy and defensive tactics rather than launching an immediate offensive against Thiers' fleeing troops in Versailles, allowing the bourgeoisie time to regroup.",
    "Bismarck's Prussian occupying army released 100,000 French prisoners of war specifically to reinforce Thiers' assault, demonstrating how imperialist rivals unite to crush working-class revolution.",
    "The heroic martyrdom of 20,000 communards during Bloody Week proved Marx's materialist thesis that the working class must dismantle the bourgeois state apparatus to defend workers power."
  ],

  quickFacts: [
    { label: 'March 18, 1871 Insurrection', value: 'Working-class National Guard seized Paris and proclaimed the Commune [1]' },
    { label: 'Worker Cooperative Ownership', value: 'Handed abandoned capitalist workshops over to democratic worker associations [2]' },
    { label: 'Union des Femmes Mobilization', value: 'Élisabeth Dmitrieff & Louise Michel organized women workers & barricade defense [3]' },
    { label: 'Bloody Week (May 1871)', value: '20,000+ communards executed by French bourgeois troops colluding with Bismarck [4]' }
  ],

  timeline: [
    {
      id: 'paris-commune-siege-march18',
      title: '1. Franco-Prussian War Defeat & March 18, 1871 Insurrection',
      period: '1870 – March 18, 1871',
      categoryTag: 'revolution',
      summary: 'Prussian siege of Paris; Thiers attempts to disarm Montmartre; workers seize power on March 18.',
      details: `Following Napoleon III's defeat at Sedan in September 1870, Prussian forces besieged Paris. The Parisian working class organized the armed National Guard to defend the city. When Adolphe Thiers sent troops on March 18, 1871, to seize the cannons at Montmartre, working women and soldiers fraternized, arrested the generals, and drove Thiers' government to Versailles. [1]`,
      keyFigures: ['Louis-Eugène Varlin', 'Adolphe Thiers', 'Louise Michel'],
      citationIds: [1]
    },
    {
      id: 'paris-commune-decrees-reforms',
      title: '2. March – May 1871: Socialist Decrees & Working-Class Democracy',
      period: 'March – May 1871',
      categoryTag: 'policies',
      summary: 'Commune Council decrees wage caps, moratorium on rents, worker factory ownership, and secular education.',
      details: `The Commune instituted direct working-class democracy: all administrative and judicial posts were elected and subject to immediate recall, with salaries capped at ordinary worker pay. Night work for bakeries was abolished, worker cooperatives took over abandoned factories, and church property was nationalized for secular public schools. [2]`,
      keyFigures: ['Élisabeth Dmitrieff', 'Léo Frankel', 'Jarosław Dąbrowski'],
      citationIds: [2]
    },
    {
      id: 'paris-commune-bloody-week',
      title: '3. May 21 – 28, 1871: Bloody Week (Semaine Sanglante) & Bourgeois Repression',
      period: 'May 1871',
      categoryTag: 'challenges',
      summary: 'Versailles troops enter Paris; 20,000+ communards executed; Communards\' Wall martyrdom at Père Lachaise.',
      details: `With Bismarck's assistance, Thiers assembled an army of 130,000 troops. On May 21, Versailles forces entered Paris. Communards fought behind street barricades for eight days. At the Communards' Wall in Père Lachaise Cemetery, the final 147 defenders were executed. Over 20,000 men, women, and children were slaughtered by the victorious bourgeoisie. [3]`,
      keyFigures: ['Louise Michel', 'Jarosław Dąbrowski', 'Adolphe Thiers'],
      citationIds: [3]
    }
  ],

  sources: [
    {
      id: 1,
      label: 'The Civil War in France (Karl Marx)',
      publisher: 'General Council of the International Workingmen\'s Association',
      year: '1871',
      excerpt: 'The working class cannot simply lay hold of the ready-made state machinery, and wield it for its own purposes.'
    },
    {
      id: 2,
      label: 'History of the Paris Commune of 1871 (Prosper-Olivier Lissagaray)',
      publisher: 'Reeves and Turner',
      year: '1886',
      excerpt: 'The Commune was the first great battle of the proletariat against capital.'
    }
  ]
};
