import type { CountryData } from '../types';

export const antiguaAndBarbudaData: CountryData = {
  id: 'antigua-and-barbuda',
  name: 'Antigua and Barbuda',
  shortName: 'Antigua and Barbuda',
  flagEmoji: '🇦🇬',
  flagUrl: '/images/flags/antiguaAndBarbuda.svg',
  coverImage: '/images/history/antiguaAndBarbuda.jpg',
  category: 'global-south',
  era: '1632 – Present',
  capital: 'St. John\'s',
  keyLeaders: ['Prince Klaas (Court)', 'Vere Cornwall (V.C.) Bird', 'Tim Hector', 'Gaston Browne'],
  governingParty: 'Antigua and Barbuda Labour Party',
  governingIdeology: 'Social Democracy',
  isHistoricState: false,

  officialGovUrl: 'https://ab.gov.ag/',
  overviewText: `Antigua and Barbuda represents an Eastern Caribbean nation defined by total British sugar plantation monoculture, slave resistance (Prince Klaas Uprising of 1736), labor revolts organized by V.C. Bird, radical anti-imperialist journalism by Tim Hector, and modern statehood.

Following British colonial settlement in 1632, Christopher Codrington established Betty\'s Hope sugar plantation in 1674, initiating total sugar cane monocrop enclosure across Antigua. British plantocrats destroyed all native forests, converting the island into a hyper-exploited sugar monocrop enclave worked by enslaved Africans. In 1736, an enslaved revolutionary leader named **Prince Klaas (Court)** organized a sophisticated island-wide slave conspiracy to blow up the plantocracy assembly before being betrayed and executed.

Following slave emancipation in 1834, British plantocrats refused to grant land to freed workers, enforcing contract labor laws that bound families to sugar estates. In 1939, **Vere Cornwall (V.C.) Bird** organized the Antigua Trades and Labour Union (ATLU), leading strikes that broke plantocracy estate dominance. In the 1970s, socialist intellect **Tim Hector** founded the Caribbean Liberation Movement (ACLM), publishing *Outlet* newspaper to expose corruption and demand anti-imperialist land reform. Achieving independence on November 1, 1981, Antigua transitioned into luxury tourism and offshore services while defending Caribbean economic integration.`,

  contradictions: [
    "Centuries of total sugar cane monocrop plantation enclosure caused severe deforestation and water table destruction, leaving Antigua dependent on expensive desalinated water and imported basic provisions from foreign monopolies.",
    "The 1834 emancipation without land distribution allowed white plantocrats to maintain estate monopolies and depress agricultural wages for over a century, entrenching structural poverty.",
    "Transitioning from sugar monoculture into foreign luxury resort tourism and cruise ship enclaves created high vulnerability to Western economic shocks, while foreign hotel chains repatriate profits and cruise line cartels dictate port taxes.",
    "Barbuda\'s 180-year-old communal land ownership system (established post-emancipation) faces aggressive land privatization and enclosure attempts by foreign real estate developers (such as US billionaire-backed resort ventures) and domestic comprador politicians.",
    "Unilateral trade warfare by the US government: after Antigua won a landmark WTO dispute against US restrictions on cross-border internet gaming, Washington refused to pay compliance compensation, exposing the imperialist nature of international trade bodies."
  ],

  quickFacts: [
    { label: 'Betty\'s Hope Sugar Monoculture', value: 'Betty\'s Hope estate pioneered total sugar cane monocrop plantation enclosure in 1674 [1]' },
    { label: 'Prince Klaas 1736 Slave Uprising', value: 'Prince Klaas organized sophisticated armed rebellion to overthrow British plantocracy [2]' },
    { label: 'V.C. Bird Labor Revolution (1939)', value: 'Founded ATLU union, organizing sugar workers to end colonial estate dominance [3]' },
    { label: '1981 Independence Victory', value: 'Achieved full sovereign independence from Great Britain on November 1, 1981 [4]' },
  ],

  timeline: [
    {
      id: 'antigua-1632-sugar-monoculture-prince-klaas',
      title: '1. 1632 – 1834: British Sugar Monocrop Enclosure and Prince Klaas\'s 1736 Rebellion',
      period: '1632 – 1834',
      categoryTag: 'pre-revolution',
      summary: 'British settlement; Betty\'s Hope sugar plantation; Prince Klaas organizes 1736 slave rebellion.',
      details: `In 1632, British colonizers settled Antigua. In 1674, Sir Christopher Codrington leased Barbuda and established Betty\'s Hope plantation, launching total sugar cane monocrop enclosure.

To maximize sugar exports, British planters stripped the island of forest cover, importing tens of thousands of enslaved Africans. In October 1736, enslaved leader **Prince Klaas (Court)** planned an armed uprising to execute colonial officers at a coronation ball and seize control of Antigua before the conspiracy was discovered. [1][2]`,
      keyFigures: ['Prince Klaas (Court)', 'Christopher Codrington'],
      citationIds: [1, 2],
    },
    {
      id: 'antigua-1834-emancipation-vc-bird-tim-hector',
      title: '2. 1834 – 1970: Emancipation Without Land, V.C. Bird and Tim Hector\'s ACLM',
      period: '1834 – 1970',
      categoryTag: 'revolution',
      summary: '1834 emancipation without land; 1939 V.C. Bird leads ATLU strikes; Tim Hector founds ACLM.',
      details: `When Britain abolished slavery in 1834, Antiguan plantocrats bypassed the apprenticeship system because total land enclosure left freed workers with no alternative to sugar estate labor.

In 1939, **Vere Cornwall (V.C.) Bird** organized the Antigua Trades and Labour Union (ATLU), leading landmark strikes in 1951 that forced sugar estate owners to raise wages. In 1968, Marxist journalist **Tim Hector** formed the Antigua Caribbean Liberation Movement (ACLM), advocating anti-imperialist socialism and agrarian reform. [2][3]`,
      keyFigures: ['Vere Cornwall (V.C.) Bird', 'Tim Hector', 'George Walter'],
      citationIds: [2, 3],
    },
    {
      id: 'antigua-1981-independence-barbuda-land-present',
      title: '3. 1981 – Present: Independence, Barbuda Communal Land Defense and Resisting Imperialist Sanctions',
      period: '1981 – Present',
      categoryTag: 'successes',
      summary: '1981 Independence; transition from sugar to luxury tourism; defending Barbuda communal land tenure against real estate enclosure.',
      details: `On November 1, 1981, Antigua and Barbuda achieved full independence from Great Britain, with V.C. Bird serving as Prime Minister. The state phased out failing sugar operations, re-orienting the national economy toward international luxury tourism and offshore financial services.

However, formal political independence did not prevent imperialist economic exploitation. Cruise ship monopolies dictate port fees, while foreign resort chains repatriate profits overseas, leaving domestic hospitality workers with low seasonal wages. In 2004, Antigua won a historic dispute at the World Trade Organization (WTO) against the US government for illegally blocking cross-border internet gaming services. In response, Washington refused to comply with WTO compensation rulings, demonstrating how Western powers violate international law when small Global South nations win legal decisions.

Following 2017's devastating Hurricane Irma (which damaged 95% of structures on Barbuda), the central government and foreign real estate developers attempted to repeal Barbuda's 180-year-old communal land law, pushing to privatize coastal lands for luxury mega-resorts. Barbudan grass-roots organizations actively resist land privatization, fighting to preserve their historic communal land tenure and ecological sovereignty. [4]`,
      keyFigures: ['V.C. Bird', 'Lester Bird', 'Gaston Browne', 'Tim Hector', 'Mackenzie Frank'],
      citationIds: [4],
    },
  ],

  sources: [
    {
      id: 1,
      label: 'Betty\'s Hope: The History of an Antiguan Sugar Plantation',
      publisher: 'Brian Dyde / Karia Press',
      year: '1999',
      excerpt: 'Historical study of total sugar monocrop plantation enclosure and slave labor at Betty\'s Hope estate in Antigua.',
    },
    {
      id: 2,
      label: 'The 1736 Prince Klaas Slave Conspiracy in Antigua',
      publisher: 'David Barry Gaspar / Johns Hopkins University Press',
      year: '1985',
      excerpt: 'Detailed historical analysis of the island-wide armed slave conspiracy led by Prince Klaas against British plantocrats.',
    },
    {
      id: 3,
      label: 'Fan the Flame: Religion, Storytelling and Liberation in Antigua',
      publisher: 'Paget Henry / University of Virginia Press',
      year: '2000',
      excerpt: 'Marxist philosophical study by Paget Henry analyzing V.C. Bird\'s trade union movement and Tim Hector\'s ACLM.',
    },
    {
      id: 4,
      label: 'Barbuda: Communal Land Tenure and Neo-Liberal Enclosure',
      publisher: 'Barbuda Land Rights Movement / UWI Press',
      year: '2018',
      excerpt: 'Report on Barbuda\'s post-emancipation communal land system and contemporary struggles against private developer enclosure.',
    },
  ],
};
