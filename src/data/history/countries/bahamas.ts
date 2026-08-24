import type { CountryData } from '../types';

export const bahamasData: CountryData = {
  id: 'bahamas',
  name: 'Commonwealth of The Bahamas',
  shortName: 'The Bahamas',
  flagEmoji: '🇧🇸',
  flagUrl: '/images/flags/bahamas.svg',
  coverImage: '/images/history/bahamas.jpg',
  category: 'global-south',
  era: '1648 – Present',
  capital: 'Nassau',
  keyLeaders: ['Pompey (Exuma Slave Leader)', 'Milo Butler', 'Lynden Pindling', 'Randol Fawkes'],
  governingParty: 'Progressive Liberal Party (PLP)',
  governingIdeology: 'Capitalism',
  isHistoricState: false,

  officialGovUrl: 'https://www.bahamas.gov.bs/',
  overviewText: `The Bahamas represents an Atlantic Caribbean archipelago shaped by Spanish Lucayan genocide, British plantation slavery, slave insurrections (Pompey's 1830 Revolt), imperialist blockade running, the 1958 Nassau General Strike, and Lynden Pindling's Quiet Revolution.

Following Spanish enslavement of the native Lucayan population, British Eleutheran Adventurers settled the islands in 1648. British colonizers built cotton, pineapple, and sugar monocrop plantations worked by enslaved Africans. On Exuma in 1830, an enslaved leader named **Pompey** led a historic revolt against forced plantation transfer, refusing estate orders and fleeing into the bush with 77 workers to resist plantocracy dispossession.

Following slave emancipation in 1838, a white merchant oligarchy known as the "Bay Street Boys" monopolized land, banking, and import trade. The Bay Street Boys enriched themselves through imperialist contraband trade during the US Civil War (blockade running) and Prohibition (rum running). In January 1958, trade union leader **Randol Fawkes** organized the historic **Nassau General Strike**, uniting taxi drivers and hotel workers against white oligarchy rule. In 1967, **Lynden Pindling** led the Progressive Liberal Party (PLP) to electoral victory in the "Quiet Revolution," guiding The Bahamas to full independence on July 10, 1973, and establishing a major offshore banking and luxury tourism enclave economy.`,

  contradictions: [
    "Centuries of cotton and pineapple monoculture under British plantation owners exhausted island soil, forcing post-colonial reliance on US agribusiness food imports and foreign commercial credit.",
    "The white merchant oligarchy (Bay Street Boys) accumulated capital through imperialist contraband trade (blockade running and Prohibition rum smuggling), entrenching racialized wealth concentration that post-colonial reforms failed to equalize.",
    "Transitioning into an international offshore banking tax haven generated state revenue, yet attracted US financial cartels and made national fiscal policy vulnerable to EU and US financial blacklists.",
    "Transnational cruise line cartels (Carnival, Royal Caribbean, and Disney) purchase entire private Bahamian caye islands, walling off revenue from the national treasury while extracting profits from local marine ecosystems.",
    "Catastrophic Category 5 climate destruction (such as 2019's Hurricane Dorian, which caused 3.4 billion dollars in damage, equal to 25% of GDP) forces the government into recurring high-interest borrowing from Western commercial banks."
  ],

  quickFacts: [
    { label: 'Pompey\'s 1830 Exuma Slave Revolt', value: 'Enslaved leader Pompey led armed resistance against forced plantation labor transfer [1]' },
    { label: 'Bay Street Boys Monopoly', value: 'White merchant oligarchy controlled banking, contraband trade and colonial politics [2]' },
    { label: '1958 Nassau General Strike', value: 'Randol Fawkes led general strike shutting down Nassau to demand worker rights [3]' },
    { label: '1973 Independence under Pindling', value: 'Lynden Pindling led Quiet Revolution, achieving sovereign independence from Britain [4]' },
  ],

  timeline: [
    {
      id: 'bahamas-1648-plantation-slavery-pompey-revolt',
      title: '1. 1648 – 1838: British Plantation Slavery and Pompey\'s 1830 Exuma Uprising',
      period: '1648 – 1838',
      categoryTag: 'pre-revolution',
      summary: 'British settlement; cotton plantation monoculture; Pompey leads 1830 slave revolt on Exuma.',
      details: `In 1648, British colonizers arrived in The Bahamas, establishing cotton, salt, and pineapple monocrop plantations worked by enslaved Africans.

In 1830, on the Rolle estate on Exuma, an enslaved worker named **Pompey** organized seventy-seven enslaved workers to resist forced transfer to Cat Island. Pompey\'s insurgents seized the plantation boat, sailing to Nassau to petition the Governor against plantocracy cruelty. Although suppressed, Pompey\'s revolt demonstrated unbreakable slave resistance prior to 1838 emancipation. [1]`,
      keyFigures: ['Pompey', 'Lord Rolle (Plantocrat)'],
      citationIds: [1],
    },
    {
      id: 'bahamas-1838-bay-street-boys-1958-strike',
      title: '2. 1838 – 1958: The Bay Street Boys Oligarchy and the 1958 Nassau General Strike',
      period: '1838 – 1958',
      categoryTag: 'revolution',
      summary: 'White merchant oligarchy control; rum running wealth; Randol Fawkes leads 1958 General Strike.',
      details: `Following emancipation, economic and political power was seized by a white merchant elite known as the Bay Street Boys, who accumulated wealth through Civil War blockade running and 1920s Prohibition rum smuggling.

In January 1958, labor leader **Randol Fawkes** and the Bahamas Trade Union Congress launched the nineteen-day Nassau General Strike. Supported by taxi drivers and hotel workers, the general strike paralyzed the capital, forcing Britain to introduce universal adult suffrage. [2][3]`,
      keyFigures: ['Randol Fawkes', 'Milo Butler', 'Bay Street Merchants'],
      citationIds: [2, 3],
    },
    {
      id: 'bahamas-1967-quiet-revolution-independence-1973',
      title: '3. 1967 – Present: Lynden Pindling\'s Quiet Revolution, Offshore Financial Enclaves and Climate Debt',
      period: '1967 – Present',
      categoryTag: 'successes',
      summary: '1967 PLP victory; 1973 independence under Lynden Pindling; offshore tax haven enclaves and hurricane climate debt.',
      details: `In January 1967, **Lynden Pindling** and the Progressive Liberal Party (PLP) won majority government in the "Quiet Revolution," ending white merchant political control. On July 10, 1973, The Bahamas achieved full sovereign independence from Great Britain.

Pindling\'s government expanded public education and healthcare while developing The Bahamas into a premier international offshore banking center and luxury resort destination. However, formal political independence did not alter the archipelago\'s structural position in the global capitalist economy. Transnational cruise monopolies buy up entire outer islands (such as Castaway Cay and CocoCay), creating walled-off private tourist enclaves that extract super-profits while paying minimal local taxes.

Furthermore, The Bahamas is severely impacted by climate imperialism. In September 2019, Category 5 Hurricane Dorian devastated Abaco and Grand Bahama, inflicting 3.4 billion dollars in damage (over twenty-five percent of national GDP). Rebuilding destroyed infrastructure forced the state to incur massive new foreign debt to Western commercial lenders. Today, Bahamian trade unions and climate justice activists demand international debt cancellation and climate reparations from imperialist powers. [4]`,
      keyFigures: ['Lynden Pindling', 'Hubert Ingraham', 'Philip Davis'],
      citationIds: [4],
    },
  ],

  sources: [
    {
      id: 1,
      label: 'Homeward Bound: A History of the Bahama Islands to 1838',
      publisher: 'Michael Craton / University of Georgia Press',
      year: '1986',
      excerpt: 'Comprehensive historical analysis of Lucayan extermination, British plantation slavery, and Pompey\'s 1830 Exuma slave revolt.',
    },
    {
      id: 2,
      label: 'Islanders in the Stream: A History of the Bahamian People',
      publisher: 'Michael Craton and Gail Saunders / University of Georgia Press',
      year: '1998',
      excerpt: 'Two-volume history examining the Bay Street Boys merchant oligarchy, contraband trade, and working-class resistance.',
    },
    {
      id: 3,
      label: 'The Faith that Moved the Mountain: Sir Randol Fawkes',
      publisher: 'Randol Fawkes / Memorial Publishing',
      year: '1979',
      excerpt: 'Autobiographical account of the 1958 Nassau General Strike and the labor movement\'s role in dismantling colonial oligarchy.',
    },
    {
      id: 4,
      label: 'Pindling: The Making of the Father of the Nation',
      publisher: 'Michael Craton / Macmillan Caribbean',
      year: '2002',
      excerpt: 'Biographical study of Lynden Pindling, the Quiet Revolution, and the achievement of Bahamian independence in 1973.',
    },
  ],
};
