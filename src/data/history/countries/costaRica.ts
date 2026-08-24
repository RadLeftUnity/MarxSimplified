import type { CountryData } from '../types';

export const costaRicaData: CountryData = {
  id: 'costa-rica',
  name: "Costa Rica",
  shortName: 'Costa Rica',
  flagEmoji: '🇨🇷',
  flagUrl: '/images/flags/costa-rica.svg',
  coverImage: '/images/history/costa-rica.jpg',
  category: 'global-south',
  era: '1899 – Present',
  capital: 'San José',
  keyLeaders: ['Minor Cooper Keith', 'Rafael Ángel Calderón Guardia', 'Manuel Mora Valverde', 'José Figueres Ferrer (Don Pepe)', 'Oscar Arias Sánchez'],
  governingParty: "Social Democratic Progress Party",
  governingIdeology: "Social Democracy",
  isHistoricState: false,
  
  officialGovUrl: 'https://www.presidencia.go.cr/',
  overviewText: `Costa Rica holds a distinct position in Latin American political economy: while serving as the original birthplace of the United Fruit Company (UFCO) under US railroad tycoon Minor Cooper Keith, Costa Rica avoided becoming a pure "banana republic" controlled entirely by foreign monopolies because a robust domestic coffee smallholder and middle peasant sector (*cafetaleros*) established a resilient domestic agrarian bourgeoisie.

In the 1940s, reformist President Rafael Ángel Calderón Guardia forged a historic alliance with communist leader Manuel Mora Valverde (Vanguardia Popular - PVP) and the Catholic Church to pass the landmark 1943 Labor Code and social security system. In 1948, social-democratic anti-communist José "Pepe" Figueres Ferrer led an armed counter-revolution backed by the CIA-linked Caribbean Legion, defeating Calderón's government. Seizing power, Figueres outlawed the Communist Party (PVP), suppressed left-wing trade unions, and exiled communist leaders.

Figueres abolished the national military in 1948, which redirected defense funds toward public health and education, but also served to disarm potential praetorian military rivals to his National Liberation Party (PLN) while relying on US hemispheric defense pacts. During the 1980s, despite social-democratic rhetoric, it was Figueres' own PLN successors (Luis Alberto Monge and Óscar Arias Sánchez) that implemented IMF structural adjustment programs, privatizing state banks and dismantling agricultural price supports.`,

  contradictions: [
    "Unlike Honduras or Nicaragua, where foreign monopolies acquired vast latifundia land grants, Costa Rica's coffee smallholder economy (*cafetaleros*) fostered a domestic agrarian bourgeoisie that prevented total foreign land monopsony outside the Caribbean banana enclaves.",
    "While José 'Pepe' Figueres Ferrer presented the 1948 Civil War as a defense of democracy, his administration banned Manuel Mora's Popular Vanguard Party (PVP), purged communist trade unions, and exiled left-wing leaders who had built the 1943 Labor Code.",
    "Abolishing the military in 1948 freed state capital for universal healthcare and education, but also disarmed potential military coup rivals to the ruling PLN while integrating Costa Rica into US security guarantees (Rio Treaty).",
    "Post-1980 neoliberal structural adjustment programs were enacted not by conservative opposition parties, but by Pepe Figueres' own National Liberation Party (PLN) under IMF pressure, liquidating state price supports for small farmers."
  ],

  quickFacts: [
    { label: 'Birthplace of United Fruit (1899)', value: 'Minor Cooper Keith built Limón railway, founding UFCO with 800,000 land acres [1]' },
    { label: '1934 Communist Great Banana Strike', value: 'Carlos Luis Fallas and PVP led 10,000 workers, forcing UFCO to grant 8-hour workday [2]' },
    { label: '1943 Popular Front Reforms', value: 'Calderón Guardia and communist leader Manuel Mora passed Labor Code and social security [2]' },
    { label: '1948 Civil War and Army Abolition', value: 'Pepe Figueres led anti-communist war, banned PVP communist party, and abolished army [3]' },
  ],

  timeline: [
    {
      id: 'costa-rica-1871-minor-keith-railway-united-fruit-founding',
      title: '1. 1871 – 1899: Minor Cooper Keith, Limón Railway and Founding of United Fruit Company',
      period: '1871 – 1899',
      categoryTag: 'pre-revolution',
      summary: '1871: Minor Keith builds Limón railway; 1899 merges with Boston Fruit to found United Fruit Company.',
      details: `In 1871, US entrepreneur Minor Cooper Keith contracted to build a railway connecting San José to the Caribbean port of Puerto Limón. To offset construction losses, Keith planted bananas along the track.

The Costa Rican government granted Keith 800,000 acres of tax-free land. In 1899, Keith merged his Caribbean banana railway empire with Andrew Preston's Boston Fruit Company, creating the United Fruit Company (UFCO). Unlike neighboring Central American states, Costa Rica's domestic coffee smallholders (*cafetaleros*) maintained independent agrarian land ownership in the Central Valley, preventing total corporate land monopoly. [1]`
    },
    {
      id: 'costa-rica-1934-great-banana-strike-carlos-luis-fallas',
      title: '2. 1934: The 1934 Great Atlantic Coast Banana Strike and Carlos Luis Fallas',
      period: '1934',
      categoryTag: 'revolution',
      summary: 'Aug 1934: Communist Party and Carlos Luis Fallas lead 10,000 banana workers in 30-day UFCO strike.',
      details: `In August 1934, communist union organizer and novelist Carlos Luis Fallas (author of *Mamita Yunai*) and Manuel Mora Valverde (Popular Vanguard Party / PVP) led 10,000 banana workers in a general strike against UFCO in Puerto Limón.

The 30-day strike paralyzed UFCO operations, forcing President Ricardo Jiménez to sign a historic settlement granting an 8-hour workday, minimum wages, and medical care for banana workers. [1][2]`
    },
    {
      id: 'costa-rica-1940-calderon-guardia-social-guarantees-communist-alliance',
      title: '3. 1940 – 1947: President Calderón Guardia, Social Guarantees and Communist Alliance',
      period: '1940 – 1947',
      categoryTag: 'successes',
      summary: '1940-1944: Calderón Guardia allies with Communist leader Manuel Mora to enact social security and Labor Code.',
      details: `During WWII, reformist President Rafael Ángel Calderón Guardia forged an unprecedented popular front alliance with Communist leader Manuel Mora Valverde and Catholic Archbishop Victor Sanabria.

Together, they enacted the 1942 Social Guarantees and the landmark 1943 Labor Code, establishing universal healthcare (CCSS), public housing, and the University of Costa Rica. [2]`
    },
    {
      id: 'costa-rica-1948-civil-war-don-pepe-abolition-of-military',
      title: '4. 1948 – 1949: The 1948 Civil War, Anti-Communist Purge and Army Abolition',
      period: '1948 – 1949',
      categoryTag: 'revolution',
      summary: 'March 1948: 44-day civil war; Figueres bans communist party (PVP) and abolishes national military.',
      details: `In March 1948, disputed presidential elections triggered a 44-day civil war. José "Pepe" Figueres Ferrer led the National Liberation Army, supported by the anti-communist Caribbean Legion and Venezuelan President Rómulo Betancourt, defeating Calderón's government forces.

Upon seizing power, Figueres enacted Article 98 of the 1949 Constitution, outlawing Manuel Mora's Popular Vanguard Party (PVP), purging left-wing trade unions, and exiling communist leaders. On December 1, 1948, Figueres abolished the national military, redirecting defense budgets toward health and education while eliminating potential military coup rivals to his National Liberation Party (PLN) and relying on the US Rio Treaty for external security. [2][3]`
    },
    {
      id: 'costa-rica-1950-social-democratic-welfare-state',
      title: '5. 1950 – 1979: Social Democratic Welfare Expansion and ICE Electricity Nationalization',
      period: '1950 – 1979',
      categoryTag: 'policies',
      summary: 'PLN state-led social democracy; nationalization of electricity (ICE) and banking sector.',
      details: `Throughout the 1950s and 1970s, the National Liberation Party (PLN) developed a robust social democratic state.

The government nationalized banking and electricity generation under the Costa Rican Electricity Institute (ICE), achieving universal electricity access and literacy rates exceeding 90%. [3]`
    },
    {
      id: 'costa-rica-1980-esquipulas-peace-accords-contra-war-resistance',
      title: '6. 1980 – 1989: Resisting US Contra War Pressure, Esquipulas Accords and PLN Neoliberal SAPs',
      period: '1980 – 1989',
      categoryTag: 'successes',
      summary: 'Oscar Arias resists US Contra war pressure; PLN successors implement IMF neoliberal structural adjustment.',
      details: `During the 1980s, the US Reagan administration pressured Costa Rica to allow CIA Contra forces to build military bases along the northern border with Nicaragua. President Oscar Arias Sánchez (1986–1990) authored the 1987 Esquipulas II Peace Accords, ending regional civil wars and winning the 1987 Nobel Peace Prize.

However, on the domestic economic front, Pepe Figueres' own PLN successors (Luis Alberto Monge and Óscar Arias) succumbed to USAID and IMF pressure, implementing structural adjustment programs that privatized state banking functions, reduced agricultural price supports, and initiated neoliberal market restructuring. [3][4]`
    },
    {
      id: 'costa-rica-1990-eco-tourism-intel-high-tech-assembly',
      title: '7. 1990 – 2017: Eco-Tourism Capital, Intel Semiconductor Plants and China Diplomatic Ties',
      period: '1990 – 2017',
      categoryTag: 'policies',
      summary: '1990s: Expansion of national parks and eco-tourism; 1997 Intel plant; 2007 diplomatic recognition of China.',
      details: `In the 1990s, Costa Rica transformed its economic model: establishing protected national parks covering 25% of national territory to build a world-leading eco-tourism industry, while attracting high-tech manufacturing (Intel microchip assembly plant in 1997).

In June 2007, President Oscar Arias established official diplomatic relations with the People's Republic of China, which built San José's National Stadium in a South-South partnership. [4]`
    },
    {
      id: 'costa-rica-present-chaves-administration-inequality-challenges',
      title: '8. Present: President Rodrigo Chaves, Fiscal Austerity and Working-Class Challenges',
      period: 'Present',
      categoryTag: 'challenges',
      summary: 'President Rodrigo Chaves reforms; fiscal austerity impacts healthcare; eco-tourism and trade realities.',
      details: `Today, under President Rodrigo Chaves, Costa Rica faces growing class inequality, rising cost of living, and fiscal austerity pressures threatening the historic public healthcare system (CCSS).

Costa Rican trade unionists and environmental organizations continue organizing to protect public water resources, defend state institutions, and preserve the anti-militarist heritage of the republic. [3][4]`
    },
  ],

  sources: [
    {
      id: 1,
      label: 'Empire\'s Workshop: Minor Cooper Keith and the Founding of United Fruit in Costa Rica',
      publisher: 'Greg Grandin / Metropolitan Books',
      year: '2006',
      excerpt: 'Historical political economy of Minor Keith\'s Limón railway, 800,000-acre land grants, and the founding of UFCO in 1899.',
    },
    {
      id: 2,
      label: 'Mamita Yunai and The 1934 Costa Rican Great Banana Strike',
      publisher: 'Carlos Luis Fallas / Editorial Costa Rica',
      year: '1940',
      excerpt: 'Landmark historical novel and documentary account of the 1934 communist banana strike against United Fruit in Limón.',
    },
    {
      id: 3,
      label: 'The Abolition of the Military in Costa Rica (1948) and Social Democracy',
      publisher: 'Charles D. Ameringer / Penn State University Press',
      year: '1982',
      excerpt: 'Historical study of the 1948 civil war, Don Pepe Figueres, anti-communist PVP bans, constitutional demilitarization, and social security.',
    },
    {
      id: 4,
      label: 'Esquipulas Peace Accords, China Diplomatic Relations and Neoliberal Structural Adjustment',
      publisher: 'Mitchell A. Seligson and Edward J. Williams / Westview Press',
      year: '1995',
      excerpt: 'Analysis of Oscar Arias\'s 1987 peace plan, PLN neoliberal SAP implementation, and eco-tourism political economy.',
    },
  ],
};
