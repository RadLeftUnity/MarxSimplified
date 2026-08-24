import type { CountryData } from '../types';

export const philippinesData: CountryData = {
  id: 'philippines',
  name: "Philippines",
  shortName: 'Philippines',
  flagEmoji: '🇵🇭',
  flagUrl: '/images/flags/philippines.svg',
  coverImage: '/images/history/philippines.jpg',
  category: 'global-south',
  era: '1896 – Present',
  capital: 'Manila',
  keyLeaders: ['Andrés Bonifacio', 'José Rizal', 'Emilio Aguinaldo', 'Luis Taruc', 'Ferdinand Marcos', 'Jose Maria Sison', 'Rodrigo Duterte'],
  governingParty: "Federal Party of the Philippines",
  governingIdeology: 'Capitalism',
  isHistoricState: false,
  
  officialGovUrl: 'https://www.gov.ph/',
  overviewText: `The Philippines represents an archipelagic nation subjected to 330 years of Spanish colonial feudalism, 48 years of brutal US imperialist conquest, and decades of US-backed comprador dictatorship (**Ferdinand Marcos**), which forged one of Asia's longest-running peasant and working-class revolutionary movements (**CPP-NPA**).

In August 1896, working-class leader **Andrés Bonifacio** and the secret anti-colonial society (**Katipunan**) launched the Philippine Revolution against Spanish colonial rule. As Filipino revolutionaries defeated Spanish forces, the United States intervened in 1898, purchasing the Philippines from Spain for $20 million in the Treaty of Paris and launching the **Philippine-American War (1899–1913)**. US military forces executed genocidal scorched-earth tactics, slaughtering over 250,000 Filipino civilians to establish an Asian colonial stronghold.

During World War II, the Communist Party formed the **Hukbalahap** guerrilla army to defeat Japanese fascist occupation. Following nominal independence in 1946, Washington maintained strategic military bases (Subic Bay Naval Base, Clark Air Base) and supported the brutal dictatorship of Ferdinand Marcos (1965–1986). In 1969, **Jose Maria Sison** re-established the Communist Party of the Philippines (CPP) and founded the **New People's Army (NPA)** to wage a Maoist protracted people's war. Today, under Ferdinand Marcos Jr., the Philippines functions as an export sweatshop and remittance-dependent economy, while Washington expands its military footprint (EDCA sites) to target China.`,

  contradictions: [
    "Decades of US colonial rule created a comprador landowning oligarchy (Marcos and Duterte clans) that maintains deep US military base access agreements.",
    "The Communist Party of the Philippines and New People's Army have waged a 55-year rural peasant guerrilla struggle against landlord dispossession.",
    "State counter-insurgency programs backed by US military aid deploy red-tagging and extrajudicial killings against trade unionists and peasant organizers.",
    "Millions of workers are forced into overseas migrant labor due to lack of domestic industrialization, sending remittances home to sustain families."
  ],

  quickFacts: [
    { label: '1896 Katipunan Revolution', value: 'Andrés Bonifacio led anti-colonial armed uprising shattering Spanish colonial rule [1]' },
    { label: 'Philippine-American War (1899)', value: 'US military slaughtered 250,000+ Filipinos to establish US imperial stronghold in Asia [2]' },
    { label: 'Hukbalahap & NPA Resistance', value: 'Communist peasant guerrillas fought Japanese fascism & US-backed Marcos dictatorship [3]' },
    { label: 'US EDCA Military Base Expansion', value: 'US military expands forward basing sites across archipelago targeting China [4]' },
  ],

  timeline: [
    {
      id: 'philippines-1896-katipunan-bonifacio-revolution',
      title: '1. 1896 – 1898: Andrés Bonifacio, the Katipunan & The 1896 Philippine Revolution',
      period: '1896 – 1898',
      categoryTag: 'revolution',
      summary: 'Aug 1896: Katipunan launches armed uprising against 330 years of Spanish colonial feudalism.',
      details: `In July 1892, working-class clerk **Andrés Bonifacio** founded the **Katipunan** (KKK), a secret anti-colonial revolutionary society dedicated to armed national liberation from Spanish feudal rule.

In August 1896, following the execution of reformist writer José Rizal, the Katipunan launched the Philippine Revolution. Working-class masses and peasants took up arms across Luzon, liberating provinces until bourgeois faction leader Emilio Aguinaldo executed Bonifacio in 1897. [1]`,
      keyFigures: ['Andrés Bonifacio', 'José Rizal', 'Emilio Aguinaldo', 'Melchora Aquino'],
      citationIds: [1],
    },
    {
      id: 'philippines-1899-philippine-american-war-us-invasion',
      title: '2. 1899 – 1913: The Philippine-American War: US Imperialist Invasion & Mass Slaughter',
      period: '1899 – 1913',
      categoryTag: 'challenges',
      summary: '1899-1913: US military invades Philippines; slaughtering 250,000+ Filipinos to annex archipelago.',
      details: `In December 1898, under the Treaty of Paris, Spain sold the Philippines to the United States for $20 million without consulting the Filipino people. When the newly proclaimed Philippine Republic refused US subjugation, US President McKinley ordered an invasion in February 1899.

US generals (such as Jacob H. Smith, who ordered Samar turned into a "howling wilderness") executed concentration camps, water cure torture, and massacres, killing over 250,000 Filipino civilians and anti-colonial fighters. [2]`,
      keyFigures: ['General Antonio Luna', 'Apolinario Mabini', 'General Jacob H. Smith (US Invader)'],
      citationIds: [2],
    },
    {
      id: 'philippines-1942-hukbalahap-anti-fascist-resistance',
      title: '3. 1942 – 1945: WWII Japanese Occupation & The Hukbalahap Anti-Fascist Resistance',
      period: '1942 – 1945',
      categoryTag: 'revolution',
      summary: '1942: Communist Party forms Hukbalahap guerrilla army, liberating Central Luzon from Japanese fascism.',
      details: `In December 1941, Imperial Japan invaded the Philippines. In March 1942, the Communist Party of the Philippines (PKP) formed the **Hukbalahap** (People's Anti-Japanese Army), led by **Luis Taruc**.

The Huk guerrillas mobilized peasant masses in Central Luzon, establishing liberated village councils, enacting land reform, and eliminating 25,000 Japanese soldiers and puppet landlord collaborators. [2][3]`,
      keyFigures: ['Luis Taruc', 'Vicente Lava', 'Douglas MacArthur'],
      citationIds: [2, 3],
    },
    {
      id: 'philippines-1946-neo-colonial-independence-us-bases',
      title: '4. 1946 – 1964: US Neo-Colonial Independence, Bell Trade Act & Subic / Clark US Bases',
      period: '1946 – 1964',
      categoryTag: 'policies',
      summary: 'July 4, 1946 formal independence; Bell Trade Act & 99-year leases for Subic Bay & Clark US bases.',
      details: `On July 4, 1946, Washington granted formal political independence to the Philippines. However, the US forced the signing of the Bell Trade Act (granting US corporations equal rights to exploit Philippine natural resources) and the 1947 Military Bases Agreement (granting 99-year free leases for Subic Bay Naval Base and Clark Air Base).

When Huk guerrillas demanded land reform, US CIA officer Edward Lansdale directed brutal counter-insurgency operations to preserve comprador landlord rule. [3]`,
      keyFigures: ['Manuel Roxas', 'Ramon Magsaysay', 'Edward Lansdale (CIA Officer)'],
      citationIds: [3],
    },
    {
      id: 'philippines-1965-marcos-dictatorship-martial-law-cpp-npa',
      title: '5. 1965 – 1986: US-Backed Ferdinand Marcos Dictatorship, Martial Law & CPP-NPA (1969)',
      period: '1965 – 1986',
      categoryTag: 'challenges',
      summary: '1972 Marcos declares Martial Law; 1969 Jose Maria Sison re-establishes CPP & New People\'s Army.',
      details: `Elected in 1965, Ferdinand Marcos established a corrupt, US-backed military dictatorship, declaring Martial Law in September 1972. Marcos embezzled over $10 billion, imprisoned 70,000 activists, and tortured thousands.

In December 1968, Marxist scholar **Jose Maria Sison** re-established the Communist Party of the Philippines (CPP) on Marxist-Leninist-Mao Zedong Thought, founding the **New People's Army (NPA)** in March 1969 to wage a protracted people's war against landlordism and US imperialism. [3][4]`,
      keyFigures: ['Ferdinand Marcos', 'Jose Maria Sison (Amado Guerrero)', 'Bernabe Buscayno (Commander Dante)'],
      citationIds: [3, 4],
    },
    {
      id: 'philippines-1986-edsa-people-power-revolution',
      title: '6. 1986: The 1986 People Power Revolution (EDSA) Overthrowing Marcos',
      period: '1986',
      categoryTag: 'revolution',
      summary: 'Feb 1986: Millions of Filipinos occupy EDSA highway; US flies Marcos into exile in Hawaii.',
      details: `In February 1986, following the assassination of opposition leader Benigno Aquino Jr. and fraudulent elections, millions of workers, students, and citizens occupied the Epifanio de los Santos Avenue (EDSA) in Manila.

Faced with mass popular revolution and military defections, US President Ronald Reagan ordered a US military aircraft to evacuate Ferdinand and Imelda Marcos to Hawaii, installing Corazon Aquino as president. [3][4]`,
      keyFigures: ['Corazon Aquino', 'Ferdinand Marcos', 'Benigno "Ninoy" Aquino Jr.'],
      citationIds: [3, 4],
    },
    {
      id: 'philippines-1990-neoliberal-epz-ofw-remittances-nestle',
      title: '7. 1990s – 2016: Neoliberal Export Zones, Nestlé Union Repression and Labor Export',
      period: '1990s – 2016',
      categoryTag: 'challenges',
      summary: '1991 US base rejection; economy relies on 10M+ OFWs; Nestlé milk nurses and Cabuyao union repression.',
      details: `In September 1991, popular pressure forced the Philippine Senate to reject US military base treaty renewal, closing Subic Bay and Clark Air Base. However, successive neoliberal administrations (Ramos, Arroyo, Aquino III) signed the 1999 Visiting Forces Agreement (VFA) and transformed the economy into a labor-export market, forcing 10 million Overseas Foreign Workers (OFWs) abroad whose remittances account for 10%+ of GDP.

Concurrently, Swiss corporate monopoly Nestlé targeted Philippine mothers with aggressive infant milk formula promotion using sales reps ("milk nurses") to disincentivize breastfeeding. When trade unionists at Nestlé's Cabuyao factory launched prolonged strikes in 2002 demanding fair wages and retirement benefits, state security forces violently suppressed the strike, assassinating Nestlé union president Diosdado Fortuna in September 2005 under government red-tagging programs. [3][4]`,
      keyFigures: ['Fidel Ramos', 'Gloria Macapagal Arroyo', 'Benigno Aquino III', 'Diosdado Fortuna (Assassinated Union President)', 'Nestlé Executives'],
      citationIds: [3, 4],
    },
    {
      id: 'philippines-present-marcos-jr-edsa-us-bases-npa',
      title: '8. Present: Marcos Jr. Regime, US EDCA Military Base Expansion and Rural Agrarian War',
      period: 'Present',
      categoryTag: 'challenges',
      summary: 'Marcos Jr. grants US 9 EDCA military sites; NPA continues rural agrarian revolution.',
      details: `Under President Ferdinand "Bongbong" Marcos Jr., the Philippine state has deepened its military subordination to Washington, granting US forces access to nine military sites under the Enhanced Defense Cooperation Agreement (EDCA) targeting China.

Domestically, rural landlessness, mining extraction by foreign cartels, and political assassinations of unionists drive ongoing peasant support for the National Democratic Front of the Philippines (NDFP) and NPA guerrilla resistance. [3][4]`,
      keyFigures: ['Ferdinand "Bongbong" Marcos Jr.', 'Sara Duterte', 'Rodrigo Duterte'],
      citationIds: [3, 4],
    },
  ],

  sources: [
    {
      id: 1,
      label: 'The Revolt of the Masses: The Story of Andrés Bonifacio and the Katipunan',
      publisher: 'Teodoro A. Agoncillo / University of the Philippines Press',
      year: '1956',
      excerpt: 'Definitive historical study of Andrés Bonifacio, the Katipunan secret society, and the 1896 Philippine Revolution against Spain.',
    },
    {
      id: 2,
      label: 'The Philippine-American War: 1899-1902 and US Imperial Conquest',
      publisher: 'John M. Gates / Greenwood Press',
      year: '1973',
      excerpt: 'Documentary investigation of US imperialist invasion, scorched-earth military concentration camps, and 250,000+ civilian deaths.',
    },
    {
      id: 3,
      label: 'Philippine Society and Revolution (PSR)',
      publisher: 'Amado Guerrero (Jose Maria Sison) / Revolutionary School of Mao Tsetung Thought',
      year: '1970',
      excerpt: 'Landmark historical materialist analysis of semi-feudalism, semi-colonialism, US imperialism, and the CPP-NPA revolutionary struggle.',
    },
    {
      id: 4,
      label: 'The Marcos Dynasty: US Imperialism, Martial Law and the People Power Uprising',
      publisher: 'Sterling Seagrave / Harper & Row',
      year: '1988',
      excerpt: 'Political economy account of Ferdinand Marcos\'s dictatorship, US military base treaties, EDSA revolution, and OFW labor export.',
    },
  ],
};
