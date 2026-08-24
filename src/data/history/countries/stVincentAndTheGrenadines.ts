import type { CountryData } from '../types';

export const stVincentAndTheGrenadinesData: CountryData = {
  id: 'st-vincent-and-the-grenadines',
  name: 'Saint Vincent and the Grenadines',
  shortName: 'Saint Vincent',
  flagEmoji: '🇻🇨',
  flagUrl: '/images/flags/stVincent.svg',
  coverImage: '/images/history/stVincent.jpg',
  category: 'global-south',
  era: '1795 – Present',
  capital: 'Kingstown',
  keyLeaders: ['Joseph Chatoyer (Garifuna Chief)', 'Ebenezer Joshua', 'Milton Cato', 'Ralph Gonsalves'],
  governingParty: 'Unity Labour Party (ULP)',
  governingIdeology: 'Democratic Socialism',
  isHistoricState: false,

  officialGovUrl: 'https://www.gov.vc/',
  overviewText: `Saint Vincent and the Grenadines represents a heroic Eastern Caribbean nation defined by Garifuna indigenous anti-colonial resistance (Chief Joseph Chatoyer), British forced genocide and deportation, sugar turned arrowroot and banana monocrop dependency, and modern anti-imperialist leadership under Ralph Gonsalves.

Before British conquest, Saint Vincent was the sovereign homeland of the **Garifuna** (Black Caribs), born from the anti-colonial union of indigenous Caribs and escaped African Maroon workers. Led by Supreme Chief **Joseph Chatoyer**, the Garifuna fought the **Second Carib War (1795–1797)** against British army forces. Following Chatoyer's death in battle, British colonizers committed genocide, exiling over five thousand Garifuna to Roatán island off Honduras and seizing all fertile island soil for British sugar cane monocrop plantations.

Following slave emancipation in 1838, British plantocrats introduced arrowroot and banana monocrop export agriculture, maintaining peasant landlessness. In the 1950s, trade union leader **Ebenezer Joshua** organized agricultural workers in the People's Political Party. Following full independence on October 27, 1979, Prime Minister **Ralph Gonsalves** ("Comrade Ralph") and the Unity Labour Party (ULP) built a democratic socialist administration: expanding public housing, joining the Bolivarian Alliance for the Peoples of Our America (ALBA), partnering closely with socialist Cuba and Venezuela, and resisting imperialist sanctions across the Americas.`,

  contradictions: [
    "British colonial sugar and arrowroot monoculture relied on the violent expulsion and genocide of the Garifuna population, creating long-term agricultural land concentration in private plantocracy estates.",
    "Joining the anti-imperialist ALBA alliance alongside Venezuela and Cuba expanded public housing, healthcare infrastructure, and airport construction, yet invited diplomatic coercion and financial blockades from US state agencies.",
    "The 1990s US corporate WTO banana rulings crushed small Vincentian agricultural producers, forcing mass rural displacement into low-wage urban informal work.",
    "Severe climate destruction from Category 5 hurricanes and the 2021 La Soufrière volcanic eruption (which destroyed 100% of northern agriculture) required massive reconstruction capital, which Western financial institutions exploit to push high-interest debt loans.",
    "Prime Minister Ralph Gonsalves maintains popular electoral support through anti-imperialist diplomacy and South-South solidarity, while domestic labor unions demand higher minimum wages and expanded agricultural co-op subsidies."
  ],

  quickFacts: [
    { label: 'Garifuna Resistance and Chatoyer (1795)', value: 'Chief Joseph Chatoyer led Second Carib War against British army forces [1]' },
    { label: 'British Genocide and 1797 Exile', value: 'British troops deported 5,000+ Garifuna to Roatan, seizing land for sugar monoculture [2]' },
    { label: '1979 Independence Victory', value: 'Achieved full sovereign independence from Great Britain on October 27, 1979 [3]' },
    { label: 'ALBA Anti-Imperialist Leadership', value: 'Joined ALBA under Ralph Gonsalves, partnering with Cuba and Venezuela for South solidarity [4]' },
  ],

  timeline: [
    {
      id: 'st-vincent-1795-garifuna-war-chatoyer-deportation',
      title: '1. 1795 – 1838: The 1795 Garifuna Liberation War, British Genocide and Sugar Slavery',
      period: '1795 – 1838',
      categoryTag: 'pre-revolution',
      summary: 'Joseph Chatoyer leads Garifuna Second Carib War; British genocide and deportation; sugar monoculture.',
      details: `In March 1795, Garifuna Supreme Chief **Joseph Chatoyer** launched the Second Carib War to defend Vincentian land against British colonial plantation enclosure. Allied with French anti-slavery forces, Chatoyer's guerrillas captured British forts before Chatoyer was killed in hand-to-hand combat at Dorsetshire Hill.

Following victory in 1797, British troops committed genocide, rounding up over five thousand Garifuna men, women, and children, incarcerating them on Baliceaux island where half died, before forcibly deporting survivors to Roatán, Honduras. British plantocrats enclosed all fertile soil for sugar cane monoculture under enslaved labor until 1838. [1][2]`,
      keyFigures: ['Joseph Chatoyer', 'Alexander Leith (British Officer)'],
      citationIds: [1, 2],
    },
    {
      id: 'st-vincent-1950-joshua-labor-independence-1979',
      title: '2. 1950 – 1979: Labor Revolts, Arrowroot Monoculture and 1979 Independence',
      period: '1950 – 1979',
      categoryTag: 'revolution',
      summary: 'Ebenezer Joshua organizes agricultural labor; arrowroot and banana exports; 1979 independence.',
      details: `Following emancipation, Saint Vincent became the world's leading producer of arrowroot starch, later transitioning to banana monocrop export. Agricultural workers remained impoverished on plantocracy estates.

In 1951, **Ebenezer Joshua** organized the Agricultural and General Workers' Union, founding the People's Political Party (PPP) to demand land reform and self-rule. On October 27, 1979, under Prime Minister Milton Cato, Saint Vincent achieved full independence. [3]`,
      keyFigures: ['Ebenezer Joshua', 'Milton Cato'],
      citationIds: [3],
    },
    {
      id: 'st-vincent-2001-gonsalves-alba-socialism-present',
      title: '3. 2001 – Present: Ralph Gonsalves, ALBA Solidarity and Resisting Imperialist Debt Harassment',
      period: '2001 – Present',
      categoryTag: 'successes',
      summary: 'Ralph Gonsalves elected in 2001; ALBA integration; Argyle Airport; resisting climate debt traps.',
      details: `In March 2001, Dr. Ralph Gonsalves led the Unity Labour Party (ULP) to victory on a democratic socialist platform. Gonsalves joined the Bolivarian Alliance for the Peoples of Our America (ALBA) in 2009, constructing Argyle International Airport with Cuban medical/engineering aid and Venezuelan oil financing under Petrocaribe.

However, Saint Vincent's anti-imperialist alignment provoked diplomatic harassment and financial blockades from US state agencies. US sanctions against Venezuela disrupted Petrocaribe energy financing, forcing Saint Vincent to seek costlier fuel imports from Western cartels.

Furthermore, Saint Vincent suffers from extreme climate vulnerability and natural disasters. The April 2021 eruption of the La Soufrière volcano displaced twenty percent of the population and wiped out one hundred percent of northern agriculture. Rebuilding infrastructure after volcanic eruptions and Category 5 hurricanes forces Saint Vincent into secondary borrowing from foreign commercial institutions. Under Ralph Gonsalves, Saint Vincent has emerged as an articulate global voice demanding imperialist climate reparations and sovereign debt forgiveness in CARICOM and the United Nations. [4]`,
      keyFigures: ['Ralph Gonsalves', 'Camillo Gonsalves'],
      citationIds: [4],
    },
  ],

  sources: [
    {
      id: 1,
      label: 'The Garifuna History and Heritage',
      publisher: 'Christopher Taylor / Signal Books',
      year: '2012',
      excerpt: 'Historical study of Chief Joseph Chatoyer, Garifuna resistance, and the Second Carib War against British colonial forces.',
    },
    {
      id: 2,
      label: 'The Black Caribs of St. Vincent: Genocide and Exile',
      publisher: 'Nancie L. Gonzalez / University of Illinois Press',
      year: '1988',
      excerpt: 'Detailed documentation of the 1797 British forced exile of the Garifuna population to Baliceaux and Roatan.',
    },
    {
      id: 3,
      label: 'A History of St. Vincent and the Grenadines',
      publisher: 'Rupert John / Collins Caribbean',
      year: '1979',
      excerpt: 'Historical analysis of sugar, arrowroot, and banana monocrop agriculture and the 1979 independence movement.',
    },
    {
      id: 4,
      label: 'The Making of "The Comrade": Political Journey of Ralph Gonsalves',
      publisher: 'Ralph E. Gonsalves / Sankar Publishing',
      year: '2010',
      excerpt: 'Autobiographical and political account of democratic socialism, ALBA integration, and anti-imperialism in Saint Vincent.',
    },
  ],
};
