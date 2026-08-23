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
  overviewText: `Costa Rica holds a unique place in Latin American political economy: it was the original birthplace of the **United Fruit Company (UFCO)** under railroad tycoon Minor Cooper Keith, yet developed a demilitarized social democratic state following a 1948 civil war and a historic 1934 banana strike led by the Communist Party.

In the 1870s, US railroad builder **Minor Cooper Keith** constructed the San José-Puerto Limón railway, acquiring 800,000 acres of tax-free land to plant bananas. In 1899, Keith merged his holdings with Andrew Preston's Boston Fruit Company to form the **United Fruit Company (UFCO)**. In August 1934, communist writer **Carlos Luis Fallas** and the Popular Vanguard Party (PVP) led 10,000 workers in the historic **1934 Great Atlantic Coast Banana Strike**, shutting down UFCO plantations for a month and winning the 8-hour workday and minimum wage laws.

In 1948, social reformer Rafael Ángel Calderón Guardia (allied with communist leader Manuel Mora) passed social security and labor rights, triggering a 44-day civil war led by **José Figueres Ferrer (Don Pepe)**. Winning the war, Figueres took the historic step of **abolishing the Costa Rican military in 1949**, redirecting defense spending toward universal healthcare and public education. During the 1980s, President Oscar Arias resisted US pressure to turn Costa Rica into a Contra staging base, authoring the 1987 Esquipulas Peace Accords. Today, Costa Rica maintains eco-tourism and high-tech manufacturing while balancing trade with China.`,

  quickFacts: [
    { label: 'Birthplace of United Fruit (1899)', value: 'Minor Cooper Keith built Limón railway, founding UFCO with 800,000 land acres [1]' },
    { label: '1934 Communist Great Banana Strike', value: 'Carlos Luis Fallas & PVP led 10,000 workers, forcing UFCO to grant 8-hour workday [2]' },
    { label: 'Abolition of Military (1949)', value: 'Don Pepe Figueres abolished army, redirecting budget to universal health & education [3]' },
    { label: '1987 Esquipulas Peace Accords', value: 'Oscar Arias won Nobel Peace Prize for resisting US Contra war in Central America [4]' },
  ],

  timeline: [
    {
      id: 'costa-rica-1871-minor-keith-railway-united-fruit-founding',
      title: '1. 1871 – 1899: Minor Cooper Keith, Limón Railway & Founding of United Fruit Company',
      period: '1871 – 1899',
      categoryTag: 'pre-revolution',
      summary: '1871: Minor Keith builds Limón railway; 1899 merges with Boston Fruit to found United Fruit Company.',
      details: `In 1871, US entrepreneur **Minor Cooper Keith** contracted to build a railway connecting San José to the Caribbean port of Puerto Limón. To offset construction losses, Keith planted bananas along the track.

The Costa Rican government granted Keith 800,000 acres of tax-free land. In 1899, Keith merged his Caribbean banana railway empire with Andrew Preston's Boston Fruit Company, creating the **United Fruit Company (UFCO)**. [1]`,
      keyFigures: ['Minor Cooper Keith', 'Andrew Preston'],
      citationIds: [1],
    },
    {
      id: 'costa-rica-1934-great-banana-strike-carlos-luis-fallas',
      title: '2. 1934: The 1934 Great Atlantic Coast Banana Strike & Carlos Luis Fallas',
      period: '1934',
      categoryTag: 'revolution',
      summary: 'Aug 1934: Communist Party & Carlos Luis Fallas lead 10,000 banana workers in 30-day UFCO strike.',
      details: `In August 1934, communist union organizer and novelist **Carlos Luis Fallas** (author of *Mamita Yunai*) and **Manuel Mora Valverde** (Popular Vanguard Party / PVP) led 10,000 banana workers in a general strike against UFCO in Puerto Limón.

The 30-day strike paralyzed UFCO operations, forcing President Ricardo Jiménez to sign a historic settlement granting an 8-hour workday, minimum wages, and medical care for banana workers. [1][2]`,
      keyFigures: ['Carlos Luis Fallas', 'Manuel Mora Valverde', 'Ricardo Jiménez Oreamuno'],
      citationIds: [1, 2],
    },
    {
      id: 'costa-rica-1940-calderon-guardia-social-guarantees-communist-alliance',
      title: '3. 1940 – 1947: President Calderón Guardia, Social Guarantees & Communist Alliance',
      period: '1940 – 1947',
      categoryTag: 'successes',
      summary: '1940-1944: Calderón Guardia allies with Communist leader Manuel Mora to enact social security & Labor Code.',
      details: `During WWII, reformist President **Rafael Ángel Calderón Guardia** forged an unprecedented alliance with Communist leader **Manuel Mora Valverde** and Catholic Archbishop Victor Sanabria.

Together, they enacted the 1942 Social Guarantees and the landmark 1943 Labor Code, establishing universal healthcare (CCSS), public housing, and the University of Costa Rica. [2]`,
      keyFigures: ['Rafael Ángel Calderón Guardia', 'Manuel Mora Valverde', 'Victor Sanabria'],
      citationIds: [2],
    },
    {
      id: 'costa-rica-1948-civil-war-don-pepe-abolition-of-military',
      title: '4. 1948 – 1949: The 1948 Civil War & The Historic Abolition of the Military (1948)',
      period: '1948 – 1949',
      categoryTag: 'revolution',
      summary: 'March 1948: 44-day civil war; Dec 1, 1948: Don Pepe Figueres smashes army headquarters & abolishes military.',
      details: `In March 1948, disputed presidential elections triggered a 44-day civil war. **José Figueres Ferrer (Don Pepe)** led the National Liberation Army, defeating Calderón's government forces.

On December 1, 1948, Figueres took a sledgehammer to the walls of the Cuartel Bellavista army headquarters, taking the world-historic step of **abolishing the Costa Rican military**. The 1949 Constitution permanently enshrined demilitarization, redirecting defense budgets to education and health. [2][3]`,
      keyFigures: ['José Figueres Ferrer (Don Pepe)', 'Rafael Ángel Calderón Guardia', 'Manuel Mora Valverde'],
      citationIds: [2, 3],
    },
    {
      id: 'costa-rica-1950-social-democratic-welfare-state',
      title: '5. 1950 – 1979: Social Democratic Welfare Expansion & ICE Electricity Nationalization',
      period: '1950 – 1979',
      categoryTag: 'policies',
      summary: 'PLN state-led social democracy; nationalization of electricity (ICE) & banking sector.',
      details: `Throughout the 1950s and 1970s, the National Liberation Party (PLN) developed a robust social democratic state.

The government nationalized banking and electricity generation under the Costa Rican Electricity Institute (ICE), achieving universal electricity access and literacy rates exceeding 90%. [3]`,
      keyFigures: ['José Figueres Ferrer', 'Daniel Oduber Quirós'],
      citationIds: [3],
    },
    {
      id: 'costa-rica-1980-esquipulas-peace-accords-contra-war-resistance',
      title: '6. 1980 – 1989: Resisting US Contra War Pressure & The 1987 Esquipulas Peace Accords',
      period: '1980 – 1989',
      categoryTag: 'successes',
      summary: '1980s: President Oscar Arias resists Reagan White House pressure; wins 1987 Nobel Peace Prize.',
      details: `During the 1980s, the US Reagan administration pressured Costa Rica to allow CIA Contra forces to build military bases along the northern border with Nicaragua.

President **Oscar Arias Sánchez** (1986–1990) resisted US imperialist war policy, authoring the 1987 **Esquipulas II Peace Accords** signed by all Central American presidents, ending regional civil wars and winning the 1987 Nobel Peace Prize. [3][4]`,
      keyFigures: ['Oscar Arias Sánchez', 'Ronald Reagan'],
      citationIds: [3, 4],
    },
    {
      id: 'costa-rica-1990-eco-tourism-intel-high-tech-assembly',
      title: '7. 1990 – 2017: Eco-Tourism Capital, Intel Semiconductor Plants & China Diplomatic Ties',
      period: '1990 – 2017',
      categoryTag: 'policies',
      summary: '1990s: Expansion of national parks & eco-tourism; 1997 Intel plant; 2007 diplomatic recognition of China.',
      details: `In the 1990s, Costa Rica transformed its economic model: establishing protected national parks covering 25% of national territory to build a world-leading eco-tourism industry, while attracting high-tech manufacturing (Intel microchip assembly plant in 1997).

In June 2007, President Oscar Arias established official diplomatic relations with the **People's Republic of China**, which built San José's National Stadium in a South-South partnership. [4]`,
      keyFigures: ['Oscar Arias Sánchez', 'Laura Chinchilla'],
      citationIds: [4],
    },
    {
      id: 'costa-rica-present-chaves-administration-inequality-challenges',
      title: '8. Present: President Rodrigo Chaves, Fiscal Austerity & Working-Class Challenges',
      period: 'Present',
      categoryTag: 'challenges',
      summary: 'President Rodrigo Chaves reforms; fiscal austerity impacts healthcare; eco-tourism & trade realities.',
      details: `Today, under President Rodrigo Chaves, Costa Rica faces growing class inequality, rising cost of living, and fiscal austerity pressures threatening the historic public healthcare system (CCSS).

Costa Rican trade unionists and environmental organizations continue organizing to protect public water resources, defend state institutions, and preserve the anti-militarist heritage of the republic. [3][4]`,
      keyFigures: ['Rodrigo Chaves', 'Fabricio Alvarado'],
      citationIds: [3, 4],
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
      label: 'Mamita Yunai & The 1934 Costa Rican Great Banana Strike',
      publisher: 'Carlos Luis Fallas / Editorial Costa Rica',
      year: '1940',
      excerpt: 'Landmark historical novel and documentary account of the 1934 communist banana strike against United Fruit in Limón.',
    },
    {
      id: 3,
      label: 'The Abolition of the Military in Costa Rica (1948) and Social Democracy',
      publisher: 'Charles D. Ameringer / Penn State University Press (Democracy in Costa Rica)',
      year: '1982',
      excerpt: 'Historical study of the 1948 civil war, Don Pepe Figueres, constitutional demilitarization, and social security expansion.',
    },
    {
      id: 4,
      label: 'Esquipulas Peace Accords, China Diplomatic Relations and Eco-Tourism Economy',
      publisher: 'Mitchell A. Seligson & Edward J. Williams / Westview Press',
      year: '1995',
      excerpt: 'Analysis of Oscar Arias\'s 1987 peace plan, 2007 China diplomatic relations, and eco-tourism political economy.',
    },
  ],
};
