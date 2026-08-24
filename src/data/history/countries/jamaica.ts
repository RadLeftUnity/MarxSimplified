import type { CountryData } from '../types';

export const jamaicaData: CountryData = {
  id: 'jamaica',
  name: "Jamaica",
  shortName: 'Jamaica',
  flagEmoji: '🇯🇲',
  flagUrl: '/images/flags/jamaica.svg',
  coverImage: '/images/history/jamaica.jpg',
  category: 'global-south',
  era: '1655 – Present',
  capital: 'Kingston',
  keyLeaders: ['Nanny of the Maroons', 'Paul Bogle', 'Marcus Garvey', 'Alexander Bustamante', 'Michael Manley'],
  governingParty: "Jamaica Labour Party",
  governingIdeology: 'Capitalism',
  isHistoricState: false,
  
  officialGovUrl: 'https://opm.gov.jm/',
  overviewText: `Jamaica represents a historic bastion of anti-colonial slave resistance and democratic socialist anti-imperialism that was subjected to British sugar plantation slavery, US bauxite mining exploitation, and CIA political destabilization.

Following British conquest in 1655, Jamaica was developed into the crown jewel of British sugar capital. Organized as a hyper-exploited sugar monocrop plantation economy, British plantocrats seized all fertile arable land, forcing hundreds of thousands of enslaved Africans to produce sugar for European export while importing basic foodstuffs at inflated prices. Escaped slaves formed autonomous mountain communities led by **Nanny of the Maroons**, forcing the British Crown to sign the 1739 Maroon Treaty. Enslaved workers repeatedly launched armed rebellions, including Tacky's War (1760) and Sam Sharpe's 1831 Baptist War, which hastened slave emancipation in 1838. Following emancipation, British corporations introduced banana monocrop exports under United Fruit Company monopolies, maintaining plantation dependency. In 1865, **Paul Bogle** led the **Morant Bay Rebellion** against landlord dispossession, facing horrific British colonial massacres.

During the 1970s, Prime Minister **Michael Manley** and the People's National Party (PNP) declared a program of **Democratic Socialism**: nationalizing bauxite mining reserves, expanding public education and healthcare, establishing agricultural worker cooperatives, and building a close anti-imperialist alliance with Fidel Castro's Cuba and the Non-Aligned Movement. In response, Henry Kissinger's US State Department and the CIA engineered economic blockades, covert arms smuggling, and violent street warfare through Edward Seaga's JLP, forcing Jamaica into IMF debt subordination in 1980.`,

  contradictions: [
    "Michael Manley's 1970s democratic socialist government expanded education and bauxite taxes, provoking US State Department destabilization and CIA covert weapons smuggling.",
    "IMF structural adjustment programs in the 1980s and 1990s forced the privatization of state assets and currency devaluation, destroying domestic agricultural production and inducing high food import dependency.",
    "Severe foreign debt servicing to Western financial institutions starves public healthcare and municipal infrastructure, driving high youth unemployment and skilled worker emigration.",
    "Transnational hotel cartels and foreign bauxite mining conglomerates extract natural wealth while popular working-class movements demand reparations from Britain for colonial sugar plantation chattel slavery."
  ],

  quickFacts: [
    { label: 'Maroon Anti-Colonial Victory', value: 'Nanny of the Maroons defeated British army forces, winning autonomous mountain land [1]' },
    { label: 'Morant Bay Revolt (1865)', value: 'Paul Bogle led agricultural workers against British colonial land dispossession [2]' },
    { label: 'Michael Manley\'s Socialism (1970s)', value: 'Nationalized bauxite reserves, built worker co-ops and aligned with socialist Cuba [3]' },
    { label: 'CIA Destabilization (1976-1980)', value: 'US intelligence funneled arms and financial blockades to break democratic socialism [4]' },
  ],

  timeline: [
    {
      id: 'jamaica-1655-maroon-guerrilla-victory',
      title: '1. 1655 – 1739: British Sugar Monocrop Slavery and Nanny of the Maroons\' Anti-Colonial Victory',
      period: '1655 – 1739',
      categoryTag: 'pre-revolution',
      summary: 'British seize Jamaica; sugar plantation monoculture; Nanny of the Maroons forces 1739 Peace Treaty.',
      details: `In 1655, British forces seized Jamaica from Spain, transforming the island into a brutal sugar monocrop plantation economy fueled by enslaved African labor. British plantocrats monopolized arable land, enforcing sugar monoculture and food import dependency.

Escaped enslaved Africans fled into the Blue Mountains, organizing autonomous Maroon communities. Under the military leadership of **Nanny of the Maroons**, Maroon guerrillas ambushed British redcoats, using camouflage and horn signals (abeng). In 1739, after decades of unsuccessful war, the British Crown was forced to sign a peace treaty recognizing Maroon land autonomy. [1]`,
      keyFigures: ['Nanny of the Maroons', 'Cudjoe', 'Edward Trelawny'],
      citationIds: [1],
    },
    {
      id: 'jamaica-1760-tacky-sam-sharpe-baptist-war',
      title: '2. 1760 – 1838: Tacky\'s Rebellion (1760), Sam Sharpe\'s 1831 Baptist War and Slavery Abolition',
      period: '1760 – 1838',
      categoryTag: 'revolution',
      summary: '1760 Tacky\'s Rebellion; 1831 Sam Sharpe Baptist War (60,000 enslaved strike); 1838 Abolition.',
      details: `In May 1760, Tacky led a synchronized slave uprising across Saint Mary parish, seizing gunpowder and fighting British troops.

In December 1831, enslaved preacher **Samuel Sharpe** organized the Christmas Rebellion (Baptist War), mobilizing 60,000 enslaved workers in a general strike that set fire to sugar estates. The scale of the uprising convinced British industrialists that chattel slavery was unviable, leading to the 1833 Abolition Act and full emancipation in 1838. [1][2]`,
      keyFigures: ['Samuel Sharpe', 'Tacky', 'George William Gordon'],
      citationIds: [1, 2],
    },
    {
      id: 'jamaica-1865-morant-bay-rebellion-bogle',
      title: '3. 1865: The 1865 Morant Bay Rebellion: Paul Bogle\'s Uprising & Colonial State Massacre',
      period: '1865',
      categoryTag: 'challenges',
      summary: 'Oct 1865: Paul Bogle leads Morant Bay uprising against landlord poverty; Governor Eyre massacres 439.',
      details: `Following emancipation, British plantocracy landlords maintained monopoly control over fertile arable land, leaving freed Black workers in severe poverty, disenfranchised, and facing high taxation.

On October 11, 1865, Baptist deacon **Paul Bogle** led a march on the Morant Bay Courthouse to demand land rights and justice. Colonial militia opened fire, sparking a parish-wide rebellion. In response, Governor Edward Eyre unleashed brutal state terror, executing 439 Jamaicans (including hanging Paul Bogle and mixed-race assemblyman George William Gordon) and flogging 600. [2]`,
      keyFigures: ['Paul Bogle', 'Edward Eyre (Colonial Governor)', 'George William Gordon'],
      citationIds: [2],
    },
    {
      id: 'jamaica-1914-garvey-unia-1938-labor-rebellion',
      title: '4. 1914 – 1938: Marcus Garvey\'s UNIA Pan-Africanism & The 1938 Labor Rebellion',
      period: '1914 – 1938',
      categoryTag: 'policies',
      summary: 'Marcus Garvey founds UNIA (1914); 1938 mass sugar & dock strikes create modern trade union movement.',
      details: `In 1914, Jamaican thinker **Marcus Garvey** founded the Universal Negro Improvement Association (UNIA), building the largest global Pan-African mass movement advocating Black self-reliance and anti-colonialism.

In May 1938, severe poverty sparked nationwide labor rebellions among dockworkers and sugar workers in Frome and Kingston. Led by Alexander Bustamante and Norman Manley, the 1938 revolt birthed modern Jamaican trade unions (BITU, NWU) and political parties (PNP, JLP). [2][3]`,
      keyFigures: ['Marcus Garvey', 'Alexander Bustamante', 'Norman Manley'],
      citationIds: [2, 3],
    },
    {
      id: 'jamaica-1962-independence-bauxite-cartels',
      title: '5. 1962 – 1971: 1962 Formal Independence & US Bauxite Mining Cartel Dominance',
      period: '1962 – 1971',
      categoryTag: 'policies',
      summary: 'Aug 6, 1962 Independence; US multinationals (Alcoa, Reynolds) extract Jamaican bauxite wealth.',
      details: `On August 6, 1962, Jamaica achieved formal political independence from Great Britain. However, real economic power remained in the hands of foreign imperialist corporations.

US and Canadian aluminum multinationals (Alcoa, Reynolds, Kaiser, Alcan) acquired vast bauxite mining concessions, extracting raw ore at cheap royalty rates while local unemployment and urban slum poverty expanded across West Kingston. [3]`,
      keyFigures: ['Alexander Bustamante', 'Donald Sangster', 'Hugh Shearer'],
      citationIds: [3],
    },
    {
      id: 'jamaica-1972-michael-manley-democratic-socialism-cia',
      title: '6. 1972 – 1980: Michael Manley\'s Democratic Socialism, Non-Aligned Alliance & CIA Destabilization',
      period: '1972 – 1980',
      categoryTag: 'revolution',
      summary: 'Manley enacts Democratic Socialism; 7.5% bauxite levy; CIA fuels violent street warfare & economic blockade.',
      details: `Elected in 1972, **Michael Manley** declared a program of **Democratic Socialism**. The PNP government imposed a 7.5% bauxite production levy on foreign cartels, nationalized public utilities, expanded free housing and education, established agricultural worker cooperatives, and forged close anti-imperialist ties with Fidel Castro's Cuba.

In response, US Secretary of State Henry Kissinger and the CIA launched covert destabilization: weaponizing economic blockades, smuggling arms to Edward Seaga's right-wing JLP, and orchestrating street violence that killed hundreds, forcing Manley to seek an IMF loan in 1977. [3][4]`,
      keyFigures: ['Michael Manley', 'Fidel Castro', 'Edward Seaga', 'Henry Kissinger'],
      citationIds: [3, 4],
    },
    {
      id: 'jamaica-1980-seaga-neoliberal-imf-debt-traps',
      title: '7. 1980 – 1990s: Edward Seaga Neoliberal Restructuring, IMF Debt Traps & SAP Austerity',
      period: '1980 – 1990s',
      categoryTag: 'challenges',
      summary: '1980: Seaga elected after CIA campaign; IMF structural adjustment privatizes assets & cuts public health.',
      details: `In October 1980, following a bloody election campaign that claimed 800 lives, right-wing JLP leader Edward Seaga was elected. Seaga severed relations with Cuba and enthusiastically embraced Ronald Reagan's Caribbean Basin Initiative.

The IMF and World Bank imposed harsh Structural Adjustment Programs (SAPs), forcing Jamaica to privatize state assets, slash healthcare and education budgets, and devalue the dollar. By the 1990s, debt servicing consumed over 40% of Jamaica's national budget. [4]`,
      keyFigures: ['Edward Seaga', 'P.J. Patterson', 'Ronald Reagan'],
      citationIds: [4],
    },
    {
      id: 'jamaica-present-tourism-debt-working-class-struggle',
      title: '8. Present: Post-Colonial Debt Burden, Tourism Extraction and Popular Working-Class Struggle',
      period: 'Present',
      categoryTag: 'challenges',
      summary: 'Extreme foreign debt servicing; foreign hotel cartels repatriate tourism profits; popular working-class resistance.',
      details: `Today, Jamaica remains structurally trapped in high foreign debt servicing that devours up to twenty-five percent of national government expenditure. Decades of IMF Structural Adjustment Programs (SAPs) forced the privatization of public utilities, currency devaluations, and severe spending cuts in public healthcare, education, and water infrastructure.

Simultaneously, transnational resort cartels and cruise line monopolies extract massive profits from Jamaican beaches, benefiting from tax holidays while repatriating profits overseas. Local hospitality workers face low seasonal wages, while foreign-owned bauxite mining conglomerates leave behind toxic red mud lakes and environmental degradation. Working-class Jamaicans continue to fight for land reform, domestic food sovereignty, full economic independence, and reparations from Great Britain for colonial slavery. [3][4]`,
      keyFigures: ['Andrew Holness', 'Mark Golding'],
      citationIds: [3, 4],
    },
  ],

  sources: [
    {
      id: 1,
      label: 'The Maroons of Jamaica: 1655-1796 (Anti-Colonial Resistance)',
      publisher: 'Mavis C. Campbell / Africa World Press',
      year: '1990',
      excerpt: 'Comprehensive study of Nanny of the Maroons, guerrilla warfare, and the 1739 Maroon Peace Treaty.',
    },
    {
      id: 2,
      label: 'The Morant Bay Rebellion and the 1938 Jamaican Labor Revolts',
      publisher: 'Gad Heuman / University of North Carolina Press',
      year: '1994',
      excerpt: 'Historical study of Paul Bogle\'s 1865 uprising, Governor Eyre\'s massacres, and Marcus Garvey\'s labor legacy.',
    },
    {
      id: 3,
      label: 'Ststruggle in the Periphery: Michael Manley and the Democratic Socialist Experiment in Jamaica',
      publisher: 'Evelyne Huber Stephens & John D. Stephens / Westview Press',
      year: '1986',
      excerpt: 'Political economy analysis of Michael Manley\'s bauxite levy, worker co-ops, and anti-imperialist diplomacy.',
    },
    {
      id: 4,
      label: 'Covert Action in the Caribbean: CIA Destabilization of Michael Manley\'s Jamaica',
      publisher: 'Ernest Volkman & John Cummings / Penthouse & Pluto Press',
      year: '1977',
      excerpt: 'Investigative report detailing US State Dept and CIA covert arms smuggling, economic blockades, and 1980 election violence in Jamaica.',
    },
  ],
};
