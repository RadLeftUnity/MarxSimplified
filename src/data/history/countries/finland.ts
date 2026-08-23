import type { CountryData } from '../types';

export const finlandData: CountryData = {
  id: 'finland',
  name: "Finland",
  shortName: 'Finland',
  flagEmoji: '🇫🇮',
  flagUrl: '/images/flags/finland.svg',
  coverImage: '/images/history/finland.jpg',
  category: 'global-north',
  era: '1917 – Present',
  capital: 'Helsinki',
  keyLeaders: ['Carl Gustaf Emil Mannerheim', 'Juho Kusti Paasikivi', 'Urho Kekkonen', 'Sanna Marin', 'Petteri Orpo'],
  governingParty: "National Coalition Party",
  governingIdeology: "Social Democracy",
  isHistoricState: false,

  officialGovUrl: 'https://valtioneuvosto.fi/en/',
  overviewText: `Finland's modern political economy was forged through class war, post-WWII Soviet neutrality trade, and eventual integration into NATO imperialist structures.

Following independence in 1917, the **1918 Finnish Civil War** pitted the working-class Red Guard against landlord-backed White Guards led by General Mannerheim (supported by imperial German troops). The White terror slaughtered over 20,000 Red workers and imprisoned 80,000 in concentration camps, establishing bourgeois capitalist rule.

Following the 1939–1940 Winter War and WWII, Finland pursued **Finlandization** under Presidents Paasikivi and Urho Kekkonen: maintaining strict military neutrality while building massive trade ties with the USSR (exporting ships and machinery in exchange for Soviet crude oil). This Soviet trade anchored Finland's post-war industrial boom and social democratic welfare state. In April 2023, under Sanna Marin and Petteri Orpo, Finland formally joined NATO, building a 1,300 km militarized border with Russia.`,

  contradictions: [
    "Formal military non-alignment was abandoned to join NATO in 2023, increasing border militarization and tying national security to US imperialist planning.",
    "Neoliberal labor market reforms proposed by right-wing coalitions spark general strikes by trade unions defending workplace bargaining rights.",
    "Export-oriented forestry and industrial monopolies face economic disruption from severed trade relations with neighboring post-Soviet markets.",
    "Public social services face budget cuts as national defense expenditures rise to meet NATO spending targets."
  ],

  quickFacts: [
    { label: '1918 Finnish Civil War', value: 'White Guard Mannerheim crushed socialist Red Guard; 20,000+ Red workers executed in White terror [1]' },
    { label: 'Paasikivi-Kekkonen Neutrality', value: 'Post-WWII "Finlandization" neutrality pact with USSR driving high-tech industrial trade [2]' },
    { label: 'Nordic Welfare & High-Tech', value: 'Built social democratic welfare funded by forestry, paper & Nokia telecommunications [3]' },
    { label: 'April 2023 NATO Accession', value: 'Abandoned 75 years of military neutrality to join NATO, militarizing 1,300 km eastern border [4]' },
  ],

  timeline: [
    {
      id: 'finland-1918-civil-war-white-terror',
      title: '1. 1918 – 1938: The 1918 Finnish Civil War, White Terror & Bourgeois Consolidation',
      period: '1918 – 1938',
      categoryTag: 'revolution',
      summary: '1918 Red Guard worker revolution crushed by White Guard & German troops; mass White terror executions.',
      details: `In January 1918, Finnish socialist workers formed the Red Guard, seizing Helsinki and declaring the Finnish Socialist Workers' Republic. The landlord and industrial elite formed the White Guard under General Carl Gustaf Emil Mannerheim, requesting German imperialist military invasion.

By May 1918, White forces crushed the Red Guard. Over 8,000 Red workers were summarily executed and 12,000+ died of starvation in post-war concentration camps, entrenching anti-communist bourgeois rule. [1]` ,
      keyFigures: ['Kullervo Manner (Red Leader)', 'Carl Gustaf Emil Mannerheim (White General)', 'Otto Wille Kuusinen'],
      citationIds: [1],
    },
    {
      id: 'finland-1939-1948-wwii-paasikivi-kekkonen',
      title: '2. 1939 – 1981: WWII Conflict, Paasikivi-Kekkonen Line & Soviet Neutrality Trade',
      period: '1939 – 1981',
      categoryTag: 'policies',
      summary: '1939 Winter War; 1948 YYA Agreement with USSR establishing Finlandization neutrality & industrial boom.',
      details: `Finland fought the Soviet Union in the 1939–1940 Winter War and the 1941–1944 Continuation War (allied with Nazi Germany).

In 1948, President Juho Kusti Paasikivi signed the Agreement of Friendship, Cooperation, and Mutual Assistance (YYA Treaty) with the USSR. Under President **Urho Kekkonen** (1956–1981), the 'Paasikivi-Kekkonen line' established strict military neutrality. Bilateral clearing trade with the USSR enabled Finland to industrialize rapidly, building shipbuilding (Wärtsilä) and electronics sectors. [2][3]`,
      keyFigures: ['Juho Kusti Paasikivi', 'Urho Kekkonen', 'J.V. Stalin'],
      citationIds: [2, 3],
    },
    {
      id: 'finland-1990-present-eu-nokia-nato-accession',
      title: '3. 1990 – Present: EU Entry, Nokia Boom, Neoliberal Reforms & April 2023 NATO Accession',
      period: '1990 – Present',
      categoryTag: 'challenges',
      summary: '1995 EU entry; Nokia telecommunications boom; April 2023 full NATO accession.',
      details: `Following the Soviet collapse, Finland experienced a severe 1991–1993 recession, prompting 1995 EU entry and neoliberal privatization. In the late 1990s, mobile giant **Nokia** drove 40%+ of export growth.

In April 2023, ending 75 years of military non-alignment, Finland officially joined NATO under Prime Minister Sanna Marin. The current Petteri Orpo coalition has enacted austerity cuts to unemployment benefits and health spending while expanding NATO border fortifications. [3][4]`,
      keyFigures: ['Sanna Marin', 'Petteri Orpo', 'Sauli Niinistö'],
      citationIds: [3, 4],
    },
  ],

  sources: [
    {
      id: 1,
      label: 'The Red Insurrection in Finland 1918: A Study in Class Warfare',
      publisher: 'Anthony F. Upton / University of Minnesota Press',
      year: '1980',
      excerpt: 'Definitive historical study of the 1918 Finnish Civil War, Red Guard revolution, and White Guard terror.',
    },
    {
      id: 2,
      label: 'Finland in the Twentieth Century: History and Politics',
      publisher: 'D.G. Kirby / Hurst & Company',
      year: '1979',
      excerpt: 'Analysis of the Paasikivi-Kekkonen line, Soviet trade agreements, and post-war neutrality.',
    },
    {
      id: 3,
      label: 'The Nordic Model and Finnish High-Tech Capitalism',
      publisher: 'Pekka Ylä-Anttila / ETLA Institute for Economic Research',
      year: '2005',
      excerpt: 'Economic analysis of Nokia\'s role in Finnish exports and post-1990 neoliberal structural adjustments.',
    },
    {
      id: 4,
      label: 'Finland\'s NATO Accession & Border Security Report',
      publisher: 'Finnish Institute of International Affairs (FIIA)',
      year: '2023',
      excerpt: 'Official record of April 2023 NATO accession, 1,300 km eastern border defense, and military spending.',
    },
  ],
};
