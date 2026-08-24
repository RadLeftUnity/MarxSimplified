import type { CountryData } from '../types';

export const trinidadAndTobagoData: CountryData = {
  id: 'trinidad-and-tobago',
  name: 'Republic of Trinidad and Tobago',
  shortName: 'Trinidad and Tobago',
  flagEmoji: '🇹🇹',
  flagUrl: '/images/flags/trinidadAndTobago.svg',
  coverImage: '/images/history/trinidadAndTobago.jpg',
  category: 'global-south',
  era: '1797 – Present',
  capital: 'Port of Spain',
  keyLeaders: ['Tubal Uriah "Buzz" Butler', 'Eric Williams', 'C.L.R. James', 'Makandal Daaga'],
  governingParty: 'People\'s National Movement',
  governingIdeology: 'Capitalism',
  isHistoricState: false,

  officialGovUrl: 'https://www.gov.tt/',
  overviewText: `Trinidad and Tobago represents a pivotal Caribbean twin-island republic defined by Spanish and British plantation slavery, post-emancipation indentured labor, historic anti-colonial labor revolts led by Uriah Butler, anti-imperialist scholarship by Eric Williams and C.L.R. James, and post-colonial oil and natural gas industrialization.

Following Spanish enclosure and the 1797 British conquest, Trinidad was developed as a cocoa and sugar monocrop plantation economy. British plantocrats exploited enslaved Africans until emancipation in 1838. To preserve low wages and plantation profits, the colonial state imported over one hundred and forty thousand indentured laborers from India between 1845 and 1917 under harsh contract indentureship. This created a complex multi-ethnic working class subjected to divide-and-rule colonial manipulation.

During the 1930s, **Tubal Uriah "Buzz" Butler** organized oilfield and sugar plantation workers, launching the 1937 Butler Oilfield Labor Riots that united Afro-Trinidadian and Indo-Trinidadian workers against British colonial capital. In 1956, historian **Eric Williams** (author of *Capitalism and Slavery*) founded the People's National Movement, leading the nation to independence in 1962. In 1970, the Black Power Revolution led by Makandal Daaga challenged foreign corporate ownership of oil, forcing the state to nationalize energy reserves and establish state-guided energy industrialization.`,

  contradictions: [
    "Colonial sugar and cocoa monocrop production relied on British divide-and-rule strategies between Afro-Trinidadian and Indo-Trinidadian working classes, creating racialized electoral divisions that post-colonial political parties manipulate to delay unified working-class economic transformation.",
    "Transitioning from agricultural monoculture into an energy enclave model (petroleum and liquefied natural gas) created high vulnerability to Western commodity price shocks and foreign multinational energy cartels (bpTT and Shell) that repatriate massive natural resource profits.",
    "The 1970 Black Power Revolution forced state nationalization of oil, gas, and banking sectors, yet modern neoliberal restructuring and IMF structural adjustment pressure reopened energy fields to foreign corporate penetration while closing state refineries (Petrotrin).",
    "Immense state revenues from petroleum exports contrast sharply with persistent working-class poverty, decaying public municipal infrastructure, and environmental pollution from industrial chemical extractions."
  ],

  quickFacts: [
    { label: 'Indentured Labor System (1845-1917)', value: 'Imported 140,000+ Indian indentured workers to replace emancipated sugar labor [1]' },
    { label: '1937 Butler Labor Revolts', value: 'Uriah Butler led oil and sugar strikes uniting African and Indian working class against British rule [2]' },
    { label: 'Independence under Eric Williams (1962)', value: 'Marxist scholar Eric Williams led PNM to independence, exposing British slavery capital [3]' },
    { label: '1970 Black Power Revolution', value: 'Mass worker uprisings forced state nationalization of energy and banking sectors [4]' },
  ],

  timeline: [
    {
      id: 'trinidad-1797-sugar-cocoa-indentureship',
      title: '1. 1797 – 1917: British Plantation Monoculture and Indian Indentured Labor',
      period: '1797 – 1917',
      categoryTag: 'pre-revolution',
      summary: 'British conquest; sugar and cocoa monocrop plantations; importing 140,000 Indian indentured laborers.',
      details: `In 1797, British forces seized Trinidad from Spain, expanding large-scale sugar cane and cocoa monocrop plantations worked by enslaved Africans.

Following slave emancipation in 1838, British plantocrats faced labor shortages as freed Africans refused low estate wages and established independent peasant villages. To maintain plantation profits, the colonial government introduced the indentured labor system, importing over 140,000 contract workers from India between 1845 and 1917. Indentured laborers were bound by restrictive labor laws, enduring low wages and harsh estate discipline. [1]`,
      keyFigures: ['Colonial Plantocrats', 'Indentured Workers'],
      citationIds: [1],
    },
    {
      id: 'trinidad-1937-butler-oil-strikes-eric-williams',
      title: '2. 1937 – 1962: The 1937 Butler Labor Uprising and Independence under Eric Williams',
      period: '1937 – 1962',
      categoryTag: 'revolution',
      summary: '1937 Butler strikes unite oil and sugar workers; Eric Williams leads PNM to independence in 1962.',
      details: `In June 1937, Tubal Uriah "Buzz" Butler led a historic general strike starting in the Fyzabad oilfields and spreading across sugar plantations. The Butler Revolts united Afro-Trinidadian oil workers and Indo-Trinidadian sugar workers against British colonial capital, giving rise to modern trade unionism.

In 1956, Marxist historian Dr. Eric Williams formed the People's National Movement (PNM). Williams's scholarship in *Capitalism and Slavery* demonstrated how West Indian slave labor financed British industrialization. Williams guided Trinidad and Tobago to full independence on August 31, 1962. [2][3]`,
      keyFigures: ['Tubal Uriah "Buzz" Butler', 'Eric Williams', 'Adrian Cola Rienzi', 'C.L.R. James'],
      citationIds: [2, 3],
    },
    {
      id: 'trinidad-1970-black-power-revolution-oil',
      title: '3. 1970 – Present: The 1970 Black Power Uprising, Energy Enclave Capitalism and Neoliberal Restructuring',
      period: '1970 – Present',
      categoryTag: 'policies',
      summary: '1970 Black Power Revolution forces state energy nationalization; neoliberal restructuring and oil cartel exploitation.',
      details: `In February 1970, mass demonstrations led by the National Joint Action Committee (NJAC) and Makandal Daaga launched the Black Power Revolution, demanding an end to foreign corporate control over oil, banking, and land. A mutiny by progressive army officers supported the popular uprising.

To contain the revolutionary movement, Dr. Eric Williams nationalized foreign oil fields and sugar estates, creating state energy enterprises like TRINTOC and the National Gas Company. However, political independence failed to dismantle Trinidad's integration into global capitalist commodity markets. The economy transitioned from agricultural monoculture to an energy enclave model, leaving national budgets hyper-vulnerable to global oil and gas price collapses.

Under post-1980s neoliberal adjustment and IMF guidance, successive governments restructured energy production, reopening deep-water offshore gas blocks to transnational energy giants like bpTT and Shell under generous tax concessions. In 2018, the state shuttered the historic state-owned Petrotrin oil refinery, laying off thousands of energy workers and deepening reliance on foreign refined fuel imports. Today, popular trade unions like the Oilfields Workers' Trade Union (OWTU) fight against state privatization and foreign corporate extraction, demanding sovereign industrialization and working-class economic control. [4]`,
      keyFigures: ['Makandal Daaga', 'Raffique Shah', 'Eric Williams', 'Ancel Roget'],
      citationIds: [4],
    },
  ],

  sources: [
    {
      id: 1,
      label: 'A History of Modern Trinidad 1783–1962',
      publisher: 'Bridget Brereton / Heinemann',
      year: '1981',
      excerpt: 'Comprehensive historical analysis of sugar monoculture, slave emancipation, and Indian indentured labor in Trinidad.',
    },
    {
      id: 2,
      label: 'The Butler Revolts and the Modern Labor Movement',
      publisher: 'Oilfields Workers\' Trade Union (OWTU)',
      year: '1977',
      excerpt: 'Historical study of the 1937 oilfield strikes led by Uriah Butler and the unification of working-class resistance.',
    },
    {
      id: 3,
      label: 'Capitalism and Slavery',
      publisher: 'Eric Williams / University of North Carolina Press',
      year: '1944',
      excerpt: 'Pioneering Marxist political economy text exposing how British industrial capital was accumulated through transatlantic slave plantations.',
    },
    {
      id: 4,
      label: 'The Black Power Revolution 1970: A Historical Perspective',
      publisher: 'Selwyn Ryan / University of the West Indies Press',
      year: '1995',
      excerpt: 'Detailed study of the 1970 NJAC Black Power Uprising and the subsequent state nationalization of oil and banking assets.',
    },
  ],
};
