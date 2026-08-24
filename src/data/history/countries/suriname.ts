import type { CountryData } from '../types';

export const surinameData: CountryData = {
  id: 'suriname',
  name: 'Republic of Suriname',
  shortName: 'Suriname',
  flagEmoji: '🇸🇷',
  flagUrl: '/images/flags/suriname.svg',
  coverImage: '/images/history/suriname.jpg',
  category: 'global-south',
  era: '1667 – Present',
  capital: 'Paramaribo',
  keyLeaders: ['Boni (Maroon Leader)', 'Anton de Kom', 'Henck Arron', 'Desi Bouterse'],
  governingParty: 'Progressive Reform Party (VHP)',
  governingIdeology: 'Capitalism',
  isHistoricState: false,

  officialGovUrl: 'https://gov.sr/',
  overviewText: `Suriname represents a Dutch Caribbean South American republic forged through horrific Dutch plantation slavery, heroic Maroon anti-colonial wars (Boni Wars), anti-fascist Marxist labor resistance led by Anton de Kom, and post-colonial bauxite and agricultural extraction.

Under Dutch colonial rule following the 1667 Treaty of Breda, Suriname was developed into a brutal sugar, coffee, and timber monocrop plantation economy. Driven by the chattel slavery of over two hundred thousand Africans, Dutch plantocrats enforced extreme violence. Escaped slaves fled into the rainforests, forming autonomous Maroon nations (Ndyuka, Saramaka, Matawai, Aluku). Under **Boni**, Maroon guerrillas fought the **Boni Maroon Wars (1768–1793)** against Dutch mercenary armies. Following slave emancipation in 1863, Dutch authorities imported indentured laborers from India and Java to maintain sugar plantation profits.

In the 1930s, Surinamese Marxist trade unionist **Anton de Kom** (author of *We Slaves of Suriname*) organized black and East Indian workers against Dutch colonial exploitation before being exiled and later executed by the Nazis in Europe. Following independence in 1975, Desi Bouterse led a 1980 military revolution, nationalizing foreign bauxite reserves and resisting Dutch neo-colonial interference during the 1982–1992 Interior War.`,

  contradictions: [
    "Dutch colonial sugar and coffee monoculture relied on severe plantocracy violence, leaving post-colonial Suriname dependent on foreign bauxite monopolies (ALCOA and Suralco) and expensive imported foodstuffs.",
    "Dutch colonial authorities imported indentured workers from India and Java after 1863, creating ethnic enclave politics that post-colonial bourgeois parties manipulate to divide the working class.",
    "Dutch neo-colonial state intervention repeatedly weaponized development aid suspensions and financial blockades following 1975 independence to force market deregulation and asset sales.",
    "Recent 2021–2024 IMF Structural Adjustment Extended Fund Facilities forced the elimination of fuel and electricity subsidies and introduced currency floating, causing over fifty percent domestic inflation, currency devaluation, and working-class impoverishment.",
    "Transnational gold mining and timber cartels operate with minimal environmental regulation, threatening Maroon and indigenous rainforest territories with mercury pollution and deforestation."
  ],

  quickFacts: [
    { label: 'Boni Maroon Wars (1768–1793)', value: 'Maroon leader Boni waged guerrilla war against Dutch plantation mercenary armies [1]' },
    { label: 'Anton de Kom\'s Marxism', value: 'Trade union leader authored "We Slaves of Suriname" (1934), organizing multi-ethnic labor [2]' },
    { label: '1863 Abolition and Indentureship', value: 'Abolished slavery in 1863, importing 60,000+ Indian and Javanese indentured workers [3]' },
    { label: '1975 Independence from Netherlands', value: 'Achieved independence from Dutch colonial rule, establishing sovereign statehood [4]' },
  ],

  timeline: [
    {
      id: 'suriname-1667-dutch-sugar-boni-maroons',
      title: '1. 1667 – 1862: Dutch Sugar Plantation Slavery and the Boni Maroon Guerrilla Wars',
      period: '1667 – 1862',
      categoryTag: 'pre-revolution',
      summary: 'Dutch sugar monocrop plantations; African chattel slavery; Boni leads Maroon guerrilla resistance.',
      details: `In 1667, the Netherlands acquired Suriname from Britain, organizing the territory as a brutal sugar, coffee, and cocoa monocrop plantation colony.

Escaped enslaved workers escaped into the interior rainforests, establishing autonomous Maroon communities. Under **Boni**, the Aluku Maroon guerrillas constructed fortresses in the swamps (Fort Boekoe), waging the Boni Wars (1768–1793) against Dutch military forces. The Dutch Crown was forced to sign peace treaties recognizing Maroon territorial sovereignty. [1]`,
      keyFigures: ['Boni', 'Baron', 'Joli Coeur'],
      citationIds: [1],
    },
    {
      id: 'suriname-1863-indentureship-anton-de-kom',
      title: '2. 1863 – 1934: Emancipation, Asian Indentureship and Anton de Kom\'s Anti-Colonial Struggle',
      period: '1863 – 1934',
      categoryTag: 'revolution',
      summary: '1863 abolition; Indian and Javanese indentured labor; Anton de Kom authors "We Slaves of Suriname".',
      details: `Following slavery abolition in 1863, Dutch planters imported over 34,000 indentured workers from India and 32,000 from Java to maintain low estate wages.

In the 1930s, Surinamese Marxist **Anton de Kom** organized multi-ethnic worker demonstrations in Paramaribo. His 1934 book *We Slaves of Suriname* exposed Dutch colonial plunder. De Kom was arrested and deported by Dutch authorities, later joining the anti-fascist Dutch resistance during World War II before dying in a Nazi concentration camp. [2][3]`,
      keyFigures: ['Anton de Kom', 'Louis Doedel'],
      citationIds: [2, 3],
    },
    {
      id: 'suriname-1975-independence-bouterse-present',
      title: '3. 1975 – Present: Independence, IMF Structural Adjustment and Mineral Monocrop Dependency',
      period: '1975 – Present',
      categoryTag: 'policies',
      summary: '1975 Independence; 1980 military government; IMF structural adjustment programs and bauxite/gold extractions.',
      details: `On November 25, 1975, Suriname achieved independence from the Netherlands. In February 1980, Desi Bouterse led a military coup, establishing a national reconstruction council that attempted to break Dutch economic control over bauxite reserves. In response, the Netherlands suspended development aid, backing opposition insurgencies during the 1982–1992 Interior War.

Despite formal political independence, Suriname remained trapped in mineral monocrop dependency. Foreign bauxite monopolies (ALCOA and Suralco) extracted immense wealth before closing operations in 2017, leaving the state saddled with environmental remediation costs and lost tax revenues.

In 2021, facing severe foreign debt defaults, Suriname agreed to a 690 million dollar IMF Extended Fund Facility program. The IMF mandated harsh austerity: removing public fuel and electricity subsidies, floating the Surinamese dollar, and privatizing public assets. This induced over 50% inflation, wiping out working-class wages and sparking mass street protests in Paramaribo. Today, Maroon and indigenous communities organize to defend rainforest territory against foreign gold mining cartels while demanding national resource sovereignty. [4]`,
      keyFigures: ['Desi Bouterse', 'Henck Arron', 'Chan Santokhi'],
      citationIds: [4],
    },
  ],

  sources: [
    {
      id: 1,
      label: 'The Boni Maroon Wars in Suriname',
      publisher: 'Wim Hoogbergen / Brill Publishers',
      year: '1990',
      excerpt: 'Historical study of the 18th-century Maroon wars led by Boni against Dutch colonial plantation forces.',
    },
    {
      id: 2,
      label: 'We Slaves of Suriname',
      publisher: 'Anton de Kom / Left Book Club (Translated 2020)',
      year: '1934',
      excerpt: 'Classic Marxist anti-colonial work documenting Dutch colonial slavery, indentured labor, and working-class resistance in Suriname.',
    },
    {
      id: 3,
      label: 'Suriname: Economy and Society in the Post-Emancipation Era',
      publisher: 'Rosemarijn Hoefte / UWI Press',
      year: '1998',
      excerpt: 'Detailed analysis of Indian and Javanese indentured labor on Dutch sugar and cocoa plantations.',
    },
    {
      id: 4,
      label: 'Suriname: Politics, Economics and Society',
      publisher: 'Henk E. Chin and Hans Buddingh\' / Frances Pinter',
      year: '1987',
      excerpt: 'Political economy study of Suriname\'s 1975 independence, 1980 military revolution, and bauxite industry dynamics.',
    },
  ],
};
