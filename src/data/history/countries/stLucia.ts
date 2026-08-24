import type { CountryData } from '../types';

export const stLuciaData: CountryData = {
  id: 'st-lucia',
  name: 'Saint Lucia',
  shortName: 'Saint Lucia',
  flagEmoji: '🇱🇨',
  flagUrl: '/images/flags/stLucia.svg',
  coverImage: '/images/history/stLucia.jpg',
  category: 'global-south',
  era: '1660 – Present',
  capital: 'Castries',
  keyLeaders: ['Victor Hughes (French Revolutionary Leader)', 'John Compton', 'George Odlum', 'Kenny Anthony', 'Philip J. Pierre'],
  governingParty: 'Saint Lucia Labour Party',
  governingIdeology: 'Social Democracy',
  isHistoricState: false,

  officialGovUrl: 'https://www.govt.lc/',
  overviewText: `Saint Lucia represents an Eastern Caribbean island nation defined by indigenous Kalinago land defense, fourteen British-French imperial colonial wars, revolutionary Maroon anti-slavery resistance (Brigands War), sugar turned banana monocrop dependency ("Green Gold"), and George Odlum's anti-imperialist progressive labor struggle.

Due to its strategic harbor at Castries, Saint Lucia changed hands between Britain and France fourteen times. Under French and British rule, the island was organized into sugar cane monocrop plantations worked by enslaved Africans. During the French Revolution, freed enslaved insurgents joined French commissioner Victor Hugues in the **Brigands War (1794–1798)**, defeating British redcoats and establishing anti-slavery revolutionary governance for four years before British re-conquest.

In the 1950s, Saint Lucia transitioned from sugar monoculture to banana monocrop export under British shipping monopoly Geest Line. Bananas, dubbed "Green Gold," became the single dominant agricultural export, leaving small farmers vulnerable to corporate buyer pricing. In the 1970s, progressive leader **George Odlum** organized the New Democratic Movement and Saint Lucia Labour Party, demanding anti-imperialist economic planning and agricultural diversification. Following full independence on February 22, 1979, Saint Lucia suffered severe economic shock during the 1990s US corporate WTO banana trade war, forcing modern diversification into tourism and renewable energy.`,

  contradictions: [
    "Centuries of sugar turned banana monoculture under British shipping monopolies (Geest Line) stripped small farmers of food sovereignty, creating extreme structural reliance on imported basic provisions.",
    "The 1990s World Trade Organization (WTO) rulings, engineered by the US government on behalf of American multinational agribusiness cartels (Chiquita and Dole), dismantled Caribbean banana trade preferences, devastating over ten thousand small farming families.",
    "Transitioning into foreign-owned luxury hotel tourism and cruise ship enclaves generated foreign exchange, yet deepened land privatization, coastal enclosure, and the repatriation of tourism profits to Western banks.",
    "IMF debt servicing and recurring Category 5 hurricane destruction force Saint Lucia to borrow from foreign commercial lenders, creating a perpetual climate-debt trap that starves public healthcare and education."
  ],

  quickFacts: [
    { label: 'Brigands War (1794–1798)', value: 'Enslaved revolutionaries defeated British army, establishing anti-slavery state for 4 years [1]' },
    { label: 'Banana Monocrop Era ("Green Gold")', value: 'Replaced sugar with banana monoculture under British Geest Line shipping monopoly [2]' },
    { label: '1979 Independence Victory', value: 'Achieved full sovereign independence from Great Britain on February 22, 1979 [3]' },
    { label: 'WTO US Corporate Banana War', value: 'US corporate litigation crushed Caribbean banana market preferences in the 1990s [4]' },
  ],

  timeline: [
    {
      id: 'st-lucia-1660-sugar-monoculture-brigands-war',
      title: '1. 1660 – 1838: British-French Wars, Sugar Monoculture and the 1794 Brigands War',
      period: '1660 – 1838',
      categoryTag: 'pre-revolution',
      summary: '14 Anglo-French imperial wars; sugar slave plantations; 1794 Brigands anti-slavery revolution.',
      details: `Between 1660 and 1814, Britain and France fought fourteen colonial wars for control of Saint Lucia, developing large sugar cane monocrop plantations.

In 1794, inspired by the Haitian Revolution, freed enslaved workers and French revolutionaries launched the Brigands War. Led by Victor Hugues, the insurgent army liberated the island, abolished chattel slavery, and defeated British invasion forces before Britain re-conquered the island in 1798, restoring plantation slavery until 1838 emancipation. [1]`,
      keyFigures: ['Victor Hugues', 'Brigand Maroon Leaders'],
      citationIds: [1],
    },
    {
      id: 'st-lucia-1950-green-gold-banana-monoculture-odlum',
      title: '2. 1950 – 1979: "Green Gold" Banana Monoculture, George Odlum and 1979 Independence',
      period: '1950 – 1979',
      categoryTag: 'revolution',
      summary: 'Transition to banana monocrop export; George Odlum\'s progressive labor struggle; 1979 independence.',
      details: `In the 1950s, Saint Lucia abandoned sugar monoculture, replacing it with banana monocrop export under contract with British shipping firm Geest Line. Small farmers cultivated bananas ("Green Gold"), but faced price exploitation by foreign buyers.

In the 1970s, **George Odlum** led progressive working-class mobilizations against British neo-colonial control and John Compton\'s conservative policy. On February 22, 1979, Saint Lucia achieved full independence. [2][3]`,
      keyFigures: ['George Odlum', 'John Compton', 'Allan Louisy'],
      citationIds: [2, 3],
    },
    {
      id: 'st-lucia-1990s-wto-banana-war-present',
      title: '3. 1990s – Present: The WTO Corporate Banana War, Tourism Enclave Dependence and Debt Traps',
      period: '1990s – Present',
      categoryTag: 'policies',
      summary: '1990s WTO banana rulings collapse small farm exports; foreign resort profit extraction; climate debt.',
      details: `Following 1979 independence, Saint Lucia's rural economy remained reliant on smallholder banana exports protected by European Union trade quotas. However, in the 1990s, the US Trade Representative, acting on behalf of US multinational fruit giants Chiquita and Dole, filed WTO lawsuits against European banana import preferences. The WTO ruled in favor of US corporate capital, dismantling Caribbean banana quotas. Over ten thousand small farming families in Saint Lucia were forced into bankruptcy, precipitating mass rural displacement and urban poverty.

To survive agricultural collapse, Saint Lucia re-oriented its economy toward foreign-owned luxury hotel resorts and cruise line tourism. However, cruise cartels (Carnival and Royal Caribbean) dictate port fees while foreign hotel chains repatriate profits to Western financial centers, leaving local service workers with low seasonal wages and privatized beaches.

Compounding this underdevelopment, extreme weather events driven by Western carbon emissions regularly destroy roads and agricultural infrastructure. Rebuilding forces Saint Lucia into high-interest debt servicing to international lenders. Under Prime Ministers Kenny Anthony and Philip J. Pierre, Saint Lucia has sought to rebuild domestic agricultural food sovereignty and expand South-South solidarity within CARICOM. [4]`,
      keyFigures: ['Kenny Anthony', 'Philip J. Pierre', 'Allen Chastanet'],
      citationIds: [4],
    },
  ],

  sources: [
    {
      id: 1,
      label: 'The Brigands War in St. Lucia 1794–1798',
      publisher: 'Harmsen and Ellis / Caribbean Historical Society',
      year: '1999',
      excerpt: 'Historical study of the anti-slavery revolutionary uprising led by freed enslaved insurgents against British colonial forces.',
    },
    {
      id: 2,
      label: 'Banana Wars: Power, Production, and History in the Americas',
      publisher: 'Steve Striffler and Mark Moberg / Duke University Press',
      year: '2003',
      excerpt: 'Analysis of banana monoculture, British shipping monopolies, and smallholder farming in Saint Lucia.',
    },
    {
      id: 3,
      label: 'St. Lucia: Years of Change',
      publisher: 'Guy Ellis / Star Publishing',
      year: '2012',
      excerpt: 'Political history of Saint Lucia\'s 1979 independence and George Odlum\'s progressive labor movement.',
    },
    {
      id: 4,
      label: 'The Caribbean Banana Trade and the WTO',
      publisher: 'Gordon Myers / Palgrave Macmillan',
      year: '2004',
      excerpt: 'Detailed examination of how US corporate litigation at the WTO dismantled Caribbean banana trade preferences.',
    },
  ],
};
