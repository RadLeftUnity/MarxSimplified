import type { CountryData } from '../types';

export const belizeData: CountryData = {
  id: 'belize',
  name: 'Belize',
  shortName: 'Belize',
  flagEmoji: '🇧🇿',
  flagUrl: '/images/flags/belize.svg',
  coverImage: '/images/history/belize.jpg',
  category: 'global-south',
  era: '1798 – Present',
  capital: 'Belmopan',
  keyLeaders: ['Will Thomas (1894 Strike Leader)', 'Antonio Soberanis Gomez', 'George Cadle Price', 'Philip Goldson'],
  governingParty: 'People\'s United Party (PUP)',
  governingIdeology: 'Social Democracy',
  isHistoricState: false,

  officialGovUrl: 'https://www.pressoffice.gov.bz/',
  overviewText: `Belize represents a unique Central American Caribbean nation defined by Maya indigenous land defense, British timber and sugar plantation monoculture, enslaved African labor resistance, 1930s anti-colonial labor revolts led by Antonio Soberanis, and George Price's struggle for independence.

Unlike Caribbean island plantation colonies focused on sugar, colonial British Honduras was organized around a specialized timber and forestry monocrop enclave. British merchants (notably the Belize Estate and Produce Company) monopolized millions of acres of forest land, exploiting enslaved African labor to extract logwood and mahogany for European markets. Following slave emancipation in 1838, British land monopolies prevented freed people from owning land, forcing them into debt-peonage timber camps. By the late 19th century, British capital introduced sugar cane monoculture in northern Belize.

In 1934, labor leader **Antonio Soberanis Gomez** formed the Labor and Unemployment Association (LUA), organizing workers against timber monopoly low wages and British colonial rule. In 1950, **George Cadle Price** formed the People's United Party (PUP), uniting Creole, Garifuna, Maya, and Mestizo working communities to demand independence. Belize achieved full independence on September 21, 1981, navigating Guatemalan territorial claims and developing agricultural cooperatives.`,

  contradictions: [
    "Centuries of timber and sugar monoculture under the Belize Estate and Produce Company concentrated land ownership in foreign corporate hands, preventing rural land distribution to Maya and Creole agricultural workers.",
    "British colonial debt peonage kept forestry and agricultural workers trapped in truck-system wage labor, creating long-term structural poverty that post-colonial neoliberal policies failed to dismantle.",
    "Extortionate debt servicing to Western commercial bondholders and international financial institutions devours over thirty percent of state revenues, forcing expenditure cuts in public healthcare and municipal infrastructure.",
    "Transnational banana, citrus, and sugar cartels (such as Tate and Lyle) control export processing, leaving small farmers vulnerable to volatile Western commodity markets and US corporate litigation.",
    "Foreign real estate developers and luxury resort cartels rapidly buy up coastal and island land (cayes), threatening indigenous Maya communal land tenure and displacing working-class fishing communities."
  ],

  quickFacts: [
    { label: 'Mahogany Monocrop Enclave', value: 'British timber monopoly BEC controlled millions of forest acres under slave labor [1]' },
    { label: '1934 Labor Revolt (Soberanis)', value: 'Antonio Soberanis led LUA strikes against British colonial timber monopolies [2]' },
    { label: '1950 Anti-Colonial PUP Movement', value: 'George Price organized national movement uniting Creole, Maya, Garifuna and Mestizo workers [3]' },
    { label: '1981 Independence Victory', value: 'Achieved full sovereign independence from Great Britain on September 21, 1981 [4]' },
  ],

  timeline: [
    {
      id: 'belize-1798-battle-of-st-georges-caye-bec',
      title: '1. 1798 – 1838: Timber Monocrop Slavery and the Battle of St. George\'s Caye',
      period: '1798 – 1838',
      categoryTag: 'pre-revolution',
      summary: '1798 Spanish conflict; timber monocrop extraction under enslaved labor; 1838 emancipation.',
      details: `In September 1798, enslaved African workers and British timber cutters (Baymen) defended St. George's Caye against a Spanish naval fleet, securing British control over Belize.

Colonial British Honduras was organized around a timber monocrop economy. British merchant companies, consolidated into the Belize Estate and Produce Company (BEC), monopolized land ownership and exploited enslaved labor to cut logwood and mahogany. Following emancipation in 1838, the BEC used land laws and truck-system debt peonage to force freed workers back into timber camps. [1]`,
      keyFigures: ['Enslaved Timber Cutters', 'Baymen Merchant Elites'],
      citationIds: [1],
    },
    {
      id: 'belize-1934-soberanis-labor-rebellion-pup',
      title: '2. 1934 – 1950: The 1934 Soberanis Labor Uprising and the Founding of the PUP',
      period: '1934 – 1950',
      categoryTag: 'revolution',
      summary: '1934 Antonio Soberanis leads LUA strikes; 1950 People\'s United Party formed.',
      details: `During the Great Depression, severe unemployment in Belize City sparked working-class revolt. In 1934, **Antonio Soberanis Gomez** organized the Labor and Unemployment Association (LUA), leading mass strikes against the BEC monopoly and colonial authorities.

In September 1950, following a colonial currency devaluation that devastated worker purchasing power, **George Cadle Price**, Philip Goldson, and John Smith formed the People's United Party (PUP) to demand self-government and national liberation. [2][3]`,
      keyFigures: ['Antonio Soberanis Gomez', 'George Cadle Price', 'Philip Goldson'],
      citationIds: [2, 3],
    },
    {
      id: 'belize-1981-independence-sugar-citrus-present',
      title: '3. 1981 – Present: Independence, Debt Servicing and the Struggle for Maya Land Sovereignty',
      period: '1981 – Present',
      categoryTag: 'successes',
      summary: '1981 Independence under George Price; debt servicing pressures; Maya communal land defense.',
      details: `On September 21, 1981, Belize achieved full independence from Great Britain, with George Price serving as its first Prime Minister. The new state expanded agricultural cooperatives in sugar, citrus, and bananas while securing UN defense guarantees against Guatemalan military threats.

However, post-independence governments inherited severe economic structural imbalances. In the 2000s, high-interest commercial debt (the "Superbond") forced Belize to spend up to a third of state revenue servicing foreign bondholders, starving public education, roads, and healthcare. Neoliberal structural adjustment pressures led to the privatization of telecommunications and water utilities.

Simultaneously, transnational agribusiness and real estate developers expanded into southern Belize, invading ancestral Maya lands. In landmark rulings, the Maya Leaders Alliance and Caribbean Court of Justice affirmed customary Maya communal land rights. Today, Belizean workers and indigenous communities organize against foreign land speculation and imperialist debt extortion to build sovereign food security. [4]`,
      keyFigures: ['George Cadle Price', 'Manuel Esquivel', 'Johnny Briceño', 'Cristina Coc'],
      citationIds: [4],
    },
  ],

  sources: [
    {
      id: 1,
      label: 'The Formation of a Colonial Society: Belize, From Conquest to Crown Colony',
      publisher: 'O. Nigel Bolland / Johns Hopkins University Press',
      year: '1977',
      excerpt: 'Pioneering historical analysis of timber monoculture, slavery, land monopoly, and debt peonage under the Belize Estate and Produce Company.',
    },
    {
      id: 2,
      label: 'Belize: A New Nation in Central America',
      publisher: 'Sunshine and Shadows / SPEAR Belize',
      year: '1983',
      excerpt: 'Historical study of Antonio Soberanis Gomez, the 1934 labor uprising, and the birth of the Belizean trade union movement.',
    },
    {
      id: 3,
      label: 'Struggles for Freedom: Essays on Belize History',
      publisher: 'O. Nigel Bolland / Angelus Press',
      year: '1997',
      excerpt: 'Essays examining anti-colonial worker strikes, Maya land resistance, and the political formation of the PUP.',
    },
    {
      id: 4,
      label: 'George Price: Leadership and the Making of Belize',
      publisher: 'Godfrey Smith / Ian Randle Publishers',
      year: '2011',
      excerpt: 'Biographical study of George Cadle Price and the thirty-year diplomatic and political struggle for Belizean independence.',
    },
  ],
};
