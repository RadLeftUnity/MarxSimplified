import type { CountryData } from '../types';

export const haitiData: CountryData = {
  id: 'haiti',
  name: "Haiti",
  shortName: 'Haiti',
  flagEmoji: '🇭🇹',
  flagUrl: '/images/flags/haiti.svg',
  coverImage: '/images/history/haiti.jpg',
  category: 'global-south',
  era: '1791 – Present',
  capital: 'Port-au-Prince',
  keyLeaders: ['Toussaint Louverture', 'Jean-Jacques Dessalines', 'Charlemagne Péralte (Cacos Leader)', 'Jean-Bertrand Aristide'],
  governingParty: "Transitional Presidential Council",
  governingIdeology: 'Capitalism',
  isHistoricState: false,
  
  officialGovUrl: 'https://primature.gouv.ht/',
  overviewText: `Haiti represents a world-historic anti-colonial victory that destroyed European slave power and chattel slavery, which was subsequently subjected to two centuries of imperialist punishment, financial debt extortion, and military interventions by France and the United States.

Under French colonial rule, Saint-Domingue was organized as the most ruthless and profitable sugar and coffee monocrop plantation economy in the world. Driven by the brutal exploitation of over five hundred thousand enslaved Africans, the colony generated immense capital for the French bourgeoisie. Between 1791 and 1804, enslaved workers launched the Haitian Revolution, led by Toussaint Louverture and Jean-Jacques Dessalines. They defeated the combined imperial armies of Napoleonic France, Great Britain, and Spain, abolishing chattel slavery and establishing the world's first free Black republic in January 1804.

To punish Haiti for destroying the lucrative plantation economy and to prevent anti-slavery revolutions across the Americas, imperial powers imposed a diplomatic and naval blockade. In 1825, French King Charles X dispatched warships to enforce the Haitian Debt Indemnity, extorting 150 million gold francs to compensate former slave owners, saddling Haiti with a century of crippling debt to French and US banks (National City Bank and Citigroup). In 1915, US Marines invaded and occupied Haiti for 19 years (1915–1934), seizing national gold reserves and executing Cacos guerrilla leader Charlemagne Péralte. Washington subsequently supported the brutal anti-communist Duvalier dictatorships (1957–1986) and orchestrated two US military coups (1991 and 2004) against democratically elected liberation theologian Jean-Bertrand Aristide, transforming Haiti into an exploited sweatshop periphery.`,

  contradictions: [
    "US, French, and Canadian military forces orchestrated the 2004 military coup against democratically elected President Jean-Bertrand Aristide, forcibly deporting him and establishing a 15-year UN imperialist military occupation (MINUSTAH).",
    "France forced Haiti to pay 150 million gold francs in 1825 to compensate former slaveholders for lost plantation property, followed by the 1914 US invasion that seized Haitian gold reserves for Wall Street banks, crippling long-term national economic development.",
    "Domestic oligarchs (PHTK party) and foreign imperialist apparatuses (Core Group) weaponized armed gangs to suppress working-class Popular Base mobilization and delay democratic elections.",
    "Popular worker and peasant organizations continuously resist proposed US and Kenyan armed interventions, demanding an immediate end to foreign imperialist meddling and full national sovereignty."
  ],

  quickFacts: [
    { label: 'Haitian Revolution Victory (1804)', value: 'World\'s 1st successful anti-colonial slave revolution defeated French, British and Spanish armies [1]' },
    { label: 'Predatory 1825 French Ransom', value: 'France extorted 150M gold francs to compensate slave owners, saddling Haiti with debt [2]' },
    { label: '19-Year US Military Occupation', value: 'US Marines occupied Haiti (1915-1934), executing 15,000+ Cacos resistance fighters [3]' },
    { label: '2004 US-French Coup on Aristide', value: 'US Special Forces kidnapped elected President Aristide, installing comprador rule [4]' },
  ],

  timeline: [
    {
      id: 'haiti-1791-haitian-revolution-dessalines',
      title: '1. 1791 – 1804: The Haitian Revolution: Defeating French, British and Spanish Slavery',
      period: '1791 – 1804',
      categoryTag: 'revolution',
      summary: '1791-1804: Enslaved masses defeat Napoleon\'s army and end French plantation slavery; founding 1st Black Republic on Jan 1, 1804.',
      details: `In August 1791, enslaved workers in Saint-Domingue launched a mass insurrection at Bois Caïman. Organised against the brutal French sugar and coffee monocrop plantation system, the insurgent army led by Toussaint Louverture organized disciplined military brigades, defeating Spanish and British invasion armies attempting to restore slavery.

When Napoleon Bonaparte dispatched 40,000 troops under General Leclerc in 1802 to re-enslave the population and re-establish plantation slavery, Jean-Jacques Dessalines led the revolutionary army to decisive victory at the Battle of Vertières. On January 1, 1804, Dessalines proclaimed the independent Republic of Haiti, abolishing chattel slavery and plantation servitude forever. [1]`,
      keyFigures: ['Toussaint Louverture', 'Jean-Jacques Dessalines', 'Dutty Boukman', 'Henri Christophe'],
      citationIds: [1],
    },
    {
      id: 'haiti-1804-dessalines-sovereignty-blockade',
      title: '2. 1804 – 1824: Jean-Jacques Dessalines and Early Sovereign Statehood against Western Isolation',
      period: '1804 – 1824',
      categoryTag: 'pre-revolution',
      summary: 'Dessalines enacts anti-racist Constitution; Western slave powers impose diplomatic & trade blockade.',
      details: `In 1805, Dessalines promulgated the 1805 Constitution, banning foreign white plantation ownership and declaring all Haitian citizens equal under the law.

Fearing that Haiti's anti-slavery victory would spark revolts across their slave colonies, Thomas Jefferson's United States, Great Britain, and France imposed a complete trade and diplomatic embargo on Haiti, isolating the nascent republic from global commerce. [1][2]`,
      keyFigures: ['Jean-Jacques Dessalines', 'Alexandre Pétion', 'Jean-Pierre Boyer'],
      citationIds: [1, 2],
    },
    {
      id: 'haiti-1825-french-gunboat-indemnity',
      title: '3. 1825 – 1914: The 1825 French Gunboat Indemnity & Century of Predatory Imperialist Banking Debt',
      period: '1825 – 1914',
      categoryTag: 'challenges',
      summary: '1825: French warships force Haiti to pay 150M gold francs to slave owners, causing 100+ years of debt.',
      details: `In April 1825, French King Charles X dispatched 12 warships armed with 500 cannons to Port-au-Prince, threatening destruction unless Haiti agreed to pay 150 million gold francs to compensate French slave owners for lost "property."

To pay this extortionate ransom, Haiti was forced to take high-interest loans from French and US banks (National Bank of Haiti / National City Bank of New York). Over 80% of Haiti's national budget was funneled directly into foreign debt servicing for over a century, draining public funds from healthcare, education, and infrastructure. [2]`,
      keyFigures: ['Jean-Pierre Boyer', 'King Charles X (France)'],
      citationIds: [2],
    },
    {
      id: 'haiti-1915-us-marine-occupation-cacos',
      title: '4. 1915 – 1934: The Brutal 19-Year US Military Occupation & Charlemagne Péralte\'s Resistance',
      period: '1915 – 1934',
      categoryTag: 'challenges',
      summary: '1915 US Marines invade Haiti; seizing gold reserves; Charlemagne Péralte leads Cacos guerrilla resistance.',
      details: `In July 1915, US President Woodrow Wilson ordered US Marines to invade Haiti. US troops seized the Haitian National Bank's gold reserves, transferring them to Wall Street (National City Bank), rewrote the constitution to allow US corporate land purchases, and imposed forced labor (corvée).

Guerrilla commander **Charlemagne Péralte** organized the Cacos resistance army, fighting US Marines across the central plateau. In 1919, US troops assassinated Péralte and photographed his body pinned to a door as anti-communist terror. US Marines killed over 15,000 Haitians before withdrawing in 1934. [3]`,
      keyFigures: ['Charlemagne Péralte', 'Woodrow Wilson', 'Benoît Batraville'],
      citationIds: [3],
    },
    {
      id: 'haiti-1957-duvalier-dictatorship-tonton-macoute',
      title: '5. 1957 – 1986: The US-Backed Duvalier (Papa Doc & Baby Doc) Dictatorship & Tonton Macoute Terror',
      period: '1957 – 1986',
      categoryTag: 'challenges',
      summary: 'US backs Papa Doc & Baby Doc Duvalier; Tonton Macoute death squads murder 60,000 anti-fascists.',
      details: `From 1957 to 1986, François "Papa Doc" Duvalier and his son Jean-Claude "Baby Doc" Duvalier ruled Haiti as brutal US-backed anti-communist dictators. Washington provided military aid to the Duvalier regime to counter socialist Cuba.

Duvalier created the **Tonton Macoute** paramilitary death squads, which murdered over 60,000 trade unionists, journalists, and communist activists. In February 1986, mass popular uprisings ("Dechoukaj") forced Baby Doc to flee to France on a US military aircraft. [3][4]`,
      keyFigures: ['François "Papa Doc" Duvalier', 'Jean-Claude "Baby Doc" Duvalier'],
      citationIds: [3, 4],
    },
    {
      id: 'haiti-1990-aristide-lavalas-1991-coup',
      title: '6. 1990 – 2003: Jean-Bertrand Aristide\'s Victory (Lavalas) & The First US-Backed 1991 Coup',
      period: '1990 – 2003',
      categoryTag: 'revolution',
      summary: '1990: Liberation theologian Aristide wins landslide election; 1991 CIA-backed military coup overthrows him.',
      details: `In December 1990, liberation theologian **Jean-Bertrand Aristide** and the Fanmi Lavalas movement won Haiti's first democratic election in a landslide (67% vote), promising agrarian reform, doubling the minimum wage, and resisting IMF privatization.

Just 7 months later, in September 1991, CIA-backed military officers (Raoul Cédras, FRAPH death squad leader Emmanuel Constant) executed a bloody military coup, slaughtering 4,000 Lavalas supporters. Aristide was restored in 1994 under mass popular pressure but faced continuous US economic blockades. [4]`,
      keyFigures: ['Jean-Bertrand Aristide', 'Raoul Cédras (Coup Leader)', 'Emmanuel Constant (FRAPH)'],
      citationIds: [4],
    },
    {
      id: 'haiti-2004-us-french-regime-change-coup',
      title: '7. 2004: The 2004 US-French-Canadian Regime-Change Coup Overthrowing Aristide',
      period: '2004',
      categoryTag: 'challenges',
      summary: 'Feb 2004: US Special Forces kidnap President Aristide; installing MINUSTAH UN military occupation.',
      details: `In February 2004, after Aristide formally demanded that France pay back the 1825 Debt Indemnity (valued at $21 billion), the US, France, and Canada executed a coordinated regime-change coup.

US Special Forces entered Aristide's residence, forced him onto an unmarked aircraft, and flew him into exile in the Central African Republic. The UN installed the MINUSTAH military occupation force, which occupied Haiti for 13 years, introduced a devastating cholera epidemic that killed 10,000 Haitians, and committed widespread sexual violence. [4]`,
      keyFigures: ['Jean-Bertrand Aristide', 'George W. Bush', 'Jacques Chirac'],
      citationIds: [4],
    },
    {
      id: 'haiti-present-core-group-ngo-subversion',
      title: '8. Present: Core Group Imperialism, NGO Subversion, Financial Extraction and Popular Resistance',
      period: 'Present',
      categoryTag: 'challenges',
      summary: 'US-led "Core Group" dictates politics; US agricultural dumping destroyed rice farming; 10,000+ foreign NGOs exploit periphery.',
      details: `Today, Haiti remains trapped in severe structural impoverishment explicitly engineered by Western imperialist intervention. Political governance is dictated by the "Core Group" (an unelected council of US, French, Canadian, and OAS ambassadors) that appoints comprador prime ministers without democratic elections.

Economically, US neoliberal trade policies directly destroyed Haitian agricultural self-sufficiency. In the 1990s, US-mandated tariff reductions forced Haiti to permit massive dumping of heavily subsidized US agricultural exports ("Miami Rice"), bankrupting domestic Haitian rice farmers and forcing hundreds of thousands of rural peasants into urban shantytowns. Simultaneously, Western corporate apparel cartels exploit Caracol Industrial Park sweatshops, paying workers starvation wages under HOPE/HELP trade acts.

Western institutions have turned Haiti into an "NGO Republic", where over ten thousand foreign non-governmental organizations siphon development funds away from public state institutions, while foreign-backed armed gangs suppress popular working-class Fanmi Lavalas organizations. Despite two centuries of military coups, debt extortion, and imperialist subversion, Haitian popular base movements continue fighting for national sovereignty and anti-imperialist liberation. [4]`,
      keyFigures: ['Jean-Bertrand Aristide', 'Jovenel Moïse', 'Ariel Henry'],
      citationIds: [4],
    },
  ],

  sources: [
    {
      id: 1,
      label: 'The Black Jacobins: Toussaint L\'Ouverture and the San Domingo Revolution',
      publisher: 'C.L.R. James / Vintage Books',
      year: '1938',
      excerpt: 'World-historic Marxist analysis of the Haitian Revolution, slave emancipation, and the defeat of European imperial armies.',
    },
    {
      id: 2,
      label: 'Haiti\'s Paper War and the 1825 French Ransom',
      publisher: 'Marlene Daut / University of Virginia Press',
      year: '2017',
      excerpt: 'Documentary investigation of the 1825 French gunboat extortion demand that saddled Haiti with 150M gold francs in predatory debt.',
    },
    {
      id: 3,
      label: 'The Seizure of Haiti by the United States: 1915-1934 US Occupation',
      publisher: 'Hans Schmidt / Rutgers University Press',
      year: '1971',
      excerpt: 'Detailed study of 19-year US Marine occupation, Wall Street bank gold seizures, and Charlemagne Péralte\'s Cacos resistance.',
    },
    {
      id: 4,
      label: 'Damming the Flood: Haiti and the Politics of Escalation (The 2004 Imperial Coup)',
      publisher: 'Peter Hallward / Verso Books',
      year: '2007',
      excerpt: 'Political economy analysis of Fanmi Lavalas, Jean-Bertrand Aristide, and the 2004 US-French-Canadian regime-change coup.',
    },
  ],
};
