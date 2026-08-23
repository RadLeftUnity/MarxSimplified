import type { CountryData } from '../types';

export const canadaData: CountryData = {
  id: 'canada',
  name: "Canada",
  shortName: 'Canada',
  flagEmoji: '🇨🇦',
  flagUrl: '/images/flags/canada.svg',
  coverImage: '/images/history/canada.jpg',
  category: 'global-north',
  era: '1867 – Present',
  capital: 'Ottawa',
  keyLeaders: ['Sir John A. Macdonald', 'W.L. Mackenzie King', 'Tommy Douglas', 'Pierre Elliott Trudeau', 'Justin Trudeau'],
  governingParty: "Liberal Party of Canada",
  governingIdeology: 'Capitalism',
  isHistoricState: false,
  
  officialGovUrl: 'https://www.canada.ca/',
  overviewText: `Canada represents a settler-colonial capitalist nation constructed through the violent dispossession of First Nations, Inuit, and Métis peoples, which developed into an imperialist financial power and junior partner in US global hegemony.

The Canadian state was forged through primitive accumulation of land. To secure corporate transcontinental railway construction (Canadian Pacific Railway), the federal government passed the 1876 Indian Act, forcibly relocating Indigenous nations onto reserves, starving plains populations, and establishing the genocide of the **Residential School System** (1883–1996) that stole 150,000 children. Working-class resistance matured through historic industrial battles, including the **1919 Winnipeg General Strike** (when 30,000 workers shut down the city) and the 1921 founding of the Communist Party of Canada (CPC).

Following World War II, militant labor organizing won major social concessions, including North America's first public universal healthcare system (**Saskatchewan Medicare** in 1962, led by Tommy Douglas). Internationally, Canadian imperialism operates as a dominant global mining cartel (Canadian corporations control 75%+ of the world's mining headquarters), participating in NATO military interventions in Yugoslavia, Haiti, and Afghanistan. Today, Canada faces a severe capitalist housing crisis, extreme wealth concentration, and ongoing Indigenous resistance against fossil fuel pipeline invasions (**Wet'suwet'en Land Back**).`,

  contradictions: [
    "Canadian mining conglomerates control over 60 percent of global mining enterprises, extracting gold and minerals across Latin America and Africa under imperialist trade agreements.",
    "The Canadian state continues forcible land dispossession against Indigenous nations to build private fossil fuel pipelines, violating sovereign land rights for corporate profit.",
    "Skyrocketing housing speculation driven by private real estate monopolies created severe housing unaffordability for working-class tenants in major urban centers.",
    "Ottawa aligns its foreign policy directly with US imperialist regime-change initiatives, supporting sanctions regimes and NATO military expansion."
  ],

  quickFacts: [
    { label: 'Residential School Genocide', value: '150,000+ Indigenous children stolen; thousands died in state mass graves [1]' },
    { label: '1919 Winnipeg General Strike', value: '30,000 workers shut down Winnipeg for 6 weeks against capitalist starvation [2]' },
    { label: 'Saskatchewan Medicare (1962)', value: 'Tommy Douglas won North America\'s first single-payer healthcare system [3]' },
    { label: 'Global Mining Imperialism', value: 'Canadian corporate cartels control 75%+ of global mining exploration headquarters [4]' },
  ],

  timeline: [
    {
      id: 'canada-1867-confederation-settler-colonialism',
      title: '1. 1867 – 1913: Confederation, Settler-Colonial Dispossession & Railway Primitive Accumulation',
      period: '1867 – 1913',
      categoryTag: 'pre-revolution',
      summary: '1867 Confederation; 1876 Indian Act dispossesses Indigenous lands for Canadian Pacific Railway.',
      details: `On July 1, 1867, the British North America Act consolidated the Dominion of Canada as a British settler dominion. Prime Minister John A. Macdonald executed state-backed primitive accumulation to construct the transcontinental Canadian Pacific Railway (built using hyper-exploited Chinese migrant labor).

To clear land for railway monopolies and European settlers, the federal state enacted the 1876 Indian Act, outlawing Indigenous governance, starving plains First Nations, and suppressing the 1885 North-West Resistance led by Métis leader Louis Riel, who was executed by the state. [1]`,
      keyFigures: ['John A. Macdonald', 'Louis Riel', 'Gabriel Dumont'],
      citationIds: [1],
    },
    {
      id: 'canada-1914-winnipeg-general-strike-cpc-1921',
      title: '2. 1914 – 1919: WWI Mobilization, 1919 Winnipeg General Strike & Founding of CPC (1921)',
      period: '1914 – 1919',
      categoryTag: 'revolution',
      summary: '1919: 30,000 workers launch Winnipeg General Strike; 1921 clandestine founding of Communist Party of Canada.',
      details: `During World War I, over 600,000 Canadians were mobilized for imperial conflict. Following the 1917 Russian October Revolution, working-class anger over war inflation and starvation wages erupted.

In May 1919, 30,000 workers launched the **Winnipeg General Strike**, shutting down the city for six weeks. The federal government deployed militarized Mounties (RCMP) on "Bloody Saturday" (June 21), killing workers and arresting strike leaders. In May 1921, Marxist cadres secretly met in a barn near Guelph, Ontario, founding the Communist Party of Canada (CPC). [2]`,
      keyFigures: ['Tim Buck (CPC Leader)', 'J.S. Woodsworth', 'William organized strike leaders'],
      citationIds: [2],
    },
    {
      id: 'canada-1930-great-depression-on-to-ottawa',
      title: '3. 1930 – 1939: The Great Depression, On-to-Ottawa Trek (1935) & Relief Camp Revolts',
      period: '1930 – 1939',
      categoryTag: 'challenges',
      summary: 'Great Depression devastates prairies; 1935 On-to-Ottawa Trek by single unemployed relief camp workers.',
      details: `The Great Depression struck Canada severely, leaving over 30% of the workforce unemployed. Conservative Prime Minister R.B. Bennett established militarized relief camps in remote forests, paying single unemployed men 20 cents a day for manual labor.

Organized by the Communist-led Relief Camp Workers' Union (RCWU), thousands of workers boarded freight trains in June 1935 in the **On-to-Ottawa Trek**. When the trek reached Regina, Bennett ordered the RCMP to attack the peaceful strikers, sparking the Regina Riot. [2]`,
      keyFigures: ['Arthur "Slim" Evans (Trek Leader)', 'R.B. Bennett', 'Tim Buck'],
      citationIds: [2],
    },
    {
      id: 'canada-1940-wwii-internment-welfare',
      title: '4. 1940 – 1961: WWII Anti-Fascist Mobilization, Japanese Internment & Post-War Welfare',
      period: '1940 – 1961',
      categoryTag: 'policies',
      summary: '1 million Canadians serve in WWII; state forcibly dispossesses & interned 22,000 Japanese Canadians.',
      details: `During World War II, over 1 million Canadians served in the anti-fascist Allied war effort. However, domestic state repression targeted minority populations: in 1942, the federal government dispossessed and forcibly interned 22,000 Japanese Canadians in BC interior camps, confiscating their property.

Following the war, militant strikes in auto and steel forced the federal state to concede unemployment insurance, public pensions (CPP), and legal collective bargaining protections to prevent working-class revolution. [2][3]`,
      keyFigures: ['W.L. Mackenzie King', 'Fred Rose (Communist MP)'],
      citationIds: [2, 3],
    },
    {
      id: 'canada-1962-saskatchewan-medicare-quebec',
      title: '5. 1962 – 1970: Tommy Douglas Wins Saskatchewan Medicare (1962) & Quebec Quiet Revolution',
      period: '1962 – 1970',
      categoryTag: 'successes',
      summary: '1962: Tommy Douglas wins North America\'s 1st single-payer healthcare system; 1970 October Crisis in Quebec.',
      details: `In 1962, the democratic socialist CCF government of Saskatchewan, led by **Tommy Douglas**, established North America's first universal single-payer healthcare system (**Saskatchewan Medicare**), defeating a 23-day strike by corporate doctors. The model proved so successful it was expanded nationally in 1966.

Concurrently, Quebec experienced the "Quiet Revolution" against Anglo-capitalist domination. In October 1970, following kidnappings by the Marxist Front de libération du Québec (FLQ), Prime Minister Pierre Trudeau invoked the War Measures Act, deploying troops to occupy Montreal and arresting 500 activists. [3]`,
      keyFigures: ['Tommy Douglas', 'Pierre Elliott Trudeau', 'René Lévesque'],
      citationIds: [3],
    },
    {
      id: 'canada-1971-residential-schools-oka-crisis',
      title: '6. 1971 – 1996: Genocide of Residential Schools & The 1990 Oka Crisis Armed Standoff',
      period: '1971 – 1996',
      categoryTag: 'challenges',
      summary: 'Residential School System operates until 1996; 1990 Oka Crisis armed Mohawks defend sacred land.',
      details: `Throughout the 20th century, the state-funded **Residential School System** continued stolen child forced assimilation, closing its final school in 1996. Over 150,000 Indigenous children suffered systematic physical and cultural abuse, resulting in thousands of unrecorded deaths in mass unmarked graves.

In July 1990, when the town of Oka, Quebec attempted to expand a golf course over sacred Mohawk burial grounds, Kanesatake Mohawks established barricades. The state deployed 2,500 Canadian Army troops in the 78-day **Oka Crisis**, inspiring nationwide Indigenous land back militancy. [1][4]`,
      keyFigures: ['Elijah Harper', 'Ellen Gabriel (Mohawk Leader)', 'Brian Mulroney'],
      citationIds: [1, 4],
    },
    {
      id: 'canada-1997-nafta-mining-cartels-imperialism',
      title: '7. 1997 – 2014: NAFTA Exploitation, Imperialist Interventions & Global Mining Cartels',
      period: '1997 – 2014',
      categoryTag: 'challenges',
      summary: 'NAFTA deindustrializes manufacturing; Canadian mining cartels dominate Global South extraction; NATO wars.',
      details: `Under NAFTA and neoliberal free trade, Canadian manufacturing was deindustrialized while Toronto became a global center for speculative mining finance. Canadian corporate cartels control over 75% of global mining exploration headquarters, extracting gold, copper, and lithium across Latin America and Africa under state diplomatic protection.

Internationally, Canadian armed forces joined NATO imperialist bombing of Yugoslavia (1999), the 2004 coup overthrowing President Jean-Bertrand Aristide in Haiti, and the 13-year occupation of Afghanistan. [4]`,
      keyFigures: ['Jean Chrétien', 'Stephen Harper', 'Paul Martin'],
      citationIds: [4],
    },
    {
      id: 'canada-present-housing-monopoly-wetsuweten',
      title: '8. Present: NATO Subordination, Housing Monopoly Crisis & Wet\'suwet\'en Land Back Resistance',
      period: 'Present',
      categoryTag: 'challenges',
      summary: 'Extreme housing crisis; $19B+ weapons for Ukraine; militarized RCMP raids on Wet\'suwet\'en land defenders.',
      details: `Today, Canada functions as a core Western imperialist nation. Under Justin Trudeau, the state allocated tens of billions in military aid for NATO proxy warfare in Ukraine while Canadian working-class families face North America's most severe housing crisis, driven by real estate monopoly financialization.

Domestically, militarized RCMP tactical squads systematically invade sovereign Wet'suwet'en territory to force Coastal GasLink pipeline construction over unceded Indigenous lands, sparking ongoing national "Land Back" blockades. [1][4]`,
      keyFigures: ['Justin Trudeau', 'Sleydo\' (Molly Wickham, Wet\'suwet\'en Leader)', 'Pierre Poilievre'],
      citationIds: [1, 4],
    },
  ],

  sources: [
    {
      id: 1,
      label: 'Clearing the Plains: Disease, Politics of Starvation, and the Loss of Aboriginal Life',
      publisher: 'James Daschuk / University of Regina Press',
      year: '2013',
      excerpt: 'Landmark historical study documenting Canadian state starvation policies, Indian Act dispossession, and Residential School genocide.',
    },
    {
      id: 2,
      label: 'Soldiers and Strikers: The 1919 Winnipeg General Strike and Canadian Working-Class History',
      publisher: 'Norman Penner / James Lorimer & Company',
      year: '1975',
      excerpt: 'Definitive account of the 1919 Winnipeg General Strike, RCMP state repression, and the founding of the Communist Party of Canada.',
    },
    {
      id: 3,
      label: 'Tommy Douglas and the Fight for Medicare in Saskatchewan',
      publisher: 'A.W. Johnson / University of Toronto Press',
      year: '2004',
      excerpt: 'Historical study of North America\'s first single-payer public healthcare victory against corporate doctor cartel strikes.',
    },
    {
      id: 4,
      label: 'Imperial Canada: Mining Cartels, Settler Colonialism and NATO Proxy Warfare',
      publisher: 'Yves Engler / Fernwood Publishing (Imperialist Canada)',
      year: '2010',
      excerpt: 'Critical political economy detailing Canadian mining cartel dominance in the Global South, NATO interventions, and Wet\'suwet\'en land defense.',
    },
  ],
};
