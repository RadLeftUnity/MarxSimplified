import type { CountryData } from '../types';

export const panamaData: CountryData = {
  id: 'panama',
  name: "Panama",
  shortName: 'Panama',
  flagEmoji: '🇵🇦',
  flagUrl: '/images/flags/panama.svg',
  coverImage: '/images/history/panama.jpg',
  category: 'global-south',
  era: '1903 – Present',
  capital: 'Panama City',
  keyLeaders: ['Omar Torrijos', 'Manuel Noriega', 'Ascanio Arosemena (1964 Martyr)', 'Arnulfo Arias', 'Laurentino Cortizo'],
  governingParty: "Realizing Goals Party",
  governingIdeology: 'Capitalism',
  isHistoricState: false,
  
  officialGovUrl: 'https://www.presidencia.gob.pa/',
  overviewText: `Panama represents a vital anti-colonial nation in Central America whose history has been defined by the struggle to liberate its sovereign territory and maritime waterway from US imperialist occupation.

In 1903, US President Theodore Roosevelt engineered the forced separation of Panama from Colombia to secure canal rights, imposing the infamous 1903 Hay-Bunau-Varilla Treaty. The treaty granted the US perpetual colonial sovereignty over the 10-mile-wide Panama Canal Zone—a militarized "state within a state" housing US Southern Command (SOUTHCOM) military bases and the School of the Americas.

Anti-colonial resistance reached a revolutionary peak on **January 9, 1964 (Martyrs' Day)**, when US troops shot and killed 22 high school students attempting to raise the Panamanian flag in the Canal Zone. General Omar Torrijos championed anti-imperialist nationalism, forcing Washington to sign the **1977 Torrijos-Carter Treaties** guaranteeing the return of the Canal. On December 20, 1989, the US launched **Operation Just Cause**, carpet-bombing working-class El Chorrillo to re-impose a comprador regime. Despite this imperialist terror, Panama achieved total canal sovereignty on **December 31, 1999**, and today features a militant Marxist-led labor movement (SUNTRACS) defeating foreign mining cartels.`,

  contradictions: [
    "The 1989 US military invasion killed thousands of civilians in El Chorrillo to capture Manuel Noriega and enforce US control over regional trade transit.",
    "Sovereign control over the Panama Canal generated public revenue, yet offshore banking monopolies created intense wealth disparity in Panama City.",
    "Mass general strikes in 2022 and 2023 against foreign copper mining concessions forced the supreme court to invalidate environmental plunder contracts.",
    "Indigenous Comarcas organize to defend forest territories against international logging and private ranching encroachment."
  ],

  quickFacts: [
    { label: 'December 31, 1999 Handover', value: '100% Transfer of the Panama Canal to sovereign Panamanian state control [1]' },
    { label: '1989 US Invasion (Just Cause)', value: '27,000 US troops carpet-bombed working-class El Chorrillo, killing thousands [2]' },
    { label: '1964 Martyrs\' Day Uprising', value: '22 Panamanian students killed by US military for raising the national flag [3]' },
    { label: '2023 SUNTRACS Strike Victory', value: 'Militant construction union forced supreme court to cancel Canadian copper mine [4]' },
  ],

  timeline: [
    {
      id: 'panama-1903-us-dismemberment',
      title: '1. 1903: US Imperialist Dismemberment of Colombia & Hay-Bunau-Varilla Colonial Treaty',
      period: '1903',
      categoryTag: 'pre-revolution',
      summary: 'Roosevelt dismembers Colombia in 1903 gunboat diplomacy; 1903 treaty creates colonial US Canal Zone.',
      details: `When the Colombian Senate rejected US terms to build an interoceanic canal in 1903, US President Theodore Roosevelt dispatched US warships to Panama City and Colón, preventing Colombian troops from suppressing a US-backed separatist coup.

On November 18, 1903, French engineer Philippe Bunau-Varilla signed the Hay-Bunau-Varilla Treaty without a single Panamanian signature present. The treaty granted the US perpetual sovereignty over a 10-mile-wide militarized strip of land—establishing the US Canal Zone as an imperialist enclave that bisected the nation. [1][2]`,
      keyFigures: ['Theodore Roosevelt', 'Philippe Bunau-Varilla', 'John Hay', 'Manuel Amador Guerrero'],
      citationIds: [1, 2],
    },
    {
      id: 'panama-canal-construction-west-indians',
      title: '2. 1904 – 1950s: Construction of the Canal, West Indian Exploitation & Gold/Silver Roll Jim Crow',
      period: '1904 – 1950s',
      categoryTag: 'challenges',
      summary: 'Exploitation of 50,000+ West Indian black workers; Jim Crow "Gold and Silver" racial wage hierarchy.',
      details: `The construction of the Panama Canal (1904–1914) relied on the brutal exploitation of over 50,000 Afro-Caribbean workers imported from Barbados, Jamaica, and Trinidad, over 5,000 of whom died from tropical disease, dynamite explosions, and mudslides.

The US Isthmian Canal Commission enforced a rigid Jim Crow segregation system: white US workers were paid in gold ("Gold Roll") with luxury housing, while Black West Indian workers were paid a fraction in silver ("Silver Roll") and forced to live in segregated shantytowns outside the Zone. [1][3]`,
      keyFigures: ['George Washington Goethals', 'William Crawford Gorgas'],
      citationIds: [1, 3],
    },
    {
      id: 'panama-1964-martyrs-day',
      title: '3. 1964: January 9, 1964 Martyrs\' Day Uprising: US Military Fires on Student Flag Protest',
      period: '1964',
      categoryTag: 'revolution',
      summary: 'Jan 9, 1964: US military police open fire on high school students raising flag; 22 killed; diplomatic rupture.',
      details: `On January 9, 1964, students from the Balboa High School and National Institute marched peacefully into the Canal Zone to raise the Panamanian flag alongside the US flag, honoring a joint treaty agreement.

When US Canal Zone residents tore the Panamanian flag, US military police and armed settlers opened fire with live ammunition, sparking three days of national riots. US troops killed 22 unarmed Panamanian students and wounded over 500. President Roberto Chiari severed diplomatic relations with the US, making the Canal Zone occupation untenable. [3]`,
      keyFigures: ['Ascanio Arosemena (Martyr)', 'Roberto Chiari'],
      citationIds: [3],
    },
    {
      id: 'panama-torrijos-revolution-1977-treaty',
      title: '4. 1968 – 1981: Omar Torrijos\' Anti-Imperialist Revolution & The 1977 Torrijos-Carter Treaties',
      period: '1968 – 1981',
      categoryTag: 'successes',
      summary: 'General Omar Torrijos champions patriotic anti-imperialism; signs 1977 Torrijos-Carter Canal Handover Treaties.',
      details: `In 1968, General **Omar Torrijos** seized power, transforming Panama through a patriotic anti-imperialist program: instituting the 1972 Labor Code, expanding peasant agrarian reform, and aligning Panama with the Non-Aligned Movement.

Building an international coalition with Cuba, Yugoslavia, and Global South nations, Torrijos forced US President Jimmy Carter to sign the historic **Torrijos-Carter Treaties** on September 7, 1977. The treaties stipulated the complete abolition of the Canal Zone and the total transfer of the Panama Canal to Panamanian sovereignty on December 31, 1999. On July 31, 1981, Torrijos died in a suspicious plane crash widely attributed to CIA sabotage. [1][2]`,
      keyFigures: ['Omar Torrijos', 'Jimmy Carter', 'Fidel Castro'],
      citationIds: [1, 2],
    },
    {
      id: 'panama-1989-us-invasion-just-cause',
      title: '5. 1982 – 1989: US Economic Blockade & The December 1989 US Invasion (Operation Just Cause)',
      period: '1982 – 1989',
      categoryTag: 'challenges',
      summary: 'Dec 20, 1989 Operation Just Cause; 27,000 US troops carpet-bomb El Chorrillo, killing thousands of civilians.',
      details: `Following Torrijos' death, military commander Manuel Noriega—a former CIA asset who refused US demands to launch armed Contra attacks against Sandinista Nicaragua—faced a brutal US economic embargo and regime-change campaign.

On December 20, 1989, US President George H.W. Bush launched **Operation Just Cause**, invading Panama with 27,000 troops. US aircraft carpet-bombed the densely populated, working-class neighborhood of El Chorrillo in Panama City, burning thousands of homes and killing an estimated 3,000+ civilians to capture Noriega and install a pro-US comprador government led by Guillermo Endara. [2]`,
      keyFigures: ['Manuel Noriega', 'George H.W. Bush', 'Guillermo Endara'],
      citationIds: [2],
    },
    {
      id: 'panama-1999-canal-handover-victory',
      title: '6. 1990 – 1999: Neoliberal Reconstruction & The Historic December 31, 1999 Canal Handover Victory',
      period: '1990 – 1999',
      categoryTag: 'successes',
      summary: 'Dec 31, 1999 historic handover; Panama Canal transferred 100% to sovereign Panamanian state control.',
      details: `Throughout the 1990s, successive comprador administrations enforced IMF structural adjustment policies, privatizing telecommunications and ports.

However, the patriotic mandate of the 1977 treaties could not be reversed. At noon on **December 31, 1999**, the US military officially evacuated all military bases, dismantled the Canal Zone, and transferred 100% of the Panama Canal to the sovereign state Panama Canal Authority (ACP). For the first time in almost a century, Panama achieved complete territorial unity. [1][4]`,
      keyFigures: ['Mireya Moscoso', 'Omar Torrijos (Legacy)'],
      citationIds: [1, 4],
    },
    {
      id: 'panama-canal-expansion-suntracs',
      title: '7. 2000 – 2021: Canal Expansion, Logistics Capital & Rise of SUNTRACS Trade Union Militancy',
      period: '2000 – 2021',
      categoryTag: 'policies',
      summary: 'Panama Canal Third Set of Locks expansion ($5.2B); rise of militant Marxist SUNTRACS construction union.',
      details: `Under public state management, the Panama Canal generated more revenue for the state in its first decade than in 85 years of US occupation. In 2007–2016, Panama completed a $5.2 billion expansion project constructing a third set of locks to accommodate Neo-Panamax mega-ships.

Domestically, class contradictions deepened as financial capital turned Panama City into a banking enclave. The Construction Industry Workers' Union of Panama (**SUNTRACS**), led by Saúl Méndez, emerged as the most powerful Marxist-led trade union, organizing major general strikes for wage hikes and public housing. [4]`,
      keyFigures: ['Saúl Méndez (SUNTRACS Leader)', 'Martín Torrijos'],
      citationIds: [4],
    },
    {
      id: 'panama-2023-copper-mine-strike-victory',
      title: '8. Present: 2022-2023 Mass Social Insurrections: SUNTRACS & Indigenous Victory Over Mining Cartels',
      period: 'Present',
      categoryTag: 'successes',
      summary: '2023 nationwide general strike; SUNTRACS & indigenous unions force supreme court to cancel Canadian copper mine.',
      details: `In July 2022 and October–November 2023, Panama witnessed its largest popular insurrections in modern history. Triggered by skyrocketing fuel costs and a corrupt 20-year state concession granted to Canadian mining corporation First Quantum Minerals (Cobre Panamá), a mass united front of SUNTRACS, teachers' unions, and indigenous Ngäbe-Buglé communities shut down the Pan-American Highway.

For over four weeks, workers blockaded national logistics routes, halting mineral extraction. In November 2023, Panama's Supreme Court unanimously declared the Canadian mining contract unconstitutional, forcing the permanent closure of the open-pit copper mine and marking a historic victory for anti-imperialist resource sovereignty. [4]`,
      keyFigures: ['Saúl Méndez', 'Maribel Gordón', 'Laurentino Cortizo'],
      citationIds: [4],
    },
  ],

  sources: [
    {
      id: 1,
      label: 'The Panama Canal: The Crisis in Historical Perspective',
      publisher: 'Walter LaFeber / Oxford University Press',
      year: '1989',
      excerpt: 'Definitive historical materialist study of the 1903 US dismemberment of Colombia, the Canal Zone enclave, and the 1977 Torrijos-Carter treaties.',
    },
    {
      id: 2,
      label: 'The Invasion of Panama: Why It Happened and What It Means',
      publisher: 'Independent Commission of Inquiry on the US Invasion of Panama / International Action Center',
      year: '1990',
      excerpt: 'Comprehensive investigation documenting civilian casualty numbers, the destruction of El Chorrillo, and the geopolitical motives of Operation Just Cause.',
    },
    {
      id: 3,
      label: 'Panama: Sovereign Nation or Fortress?',
      publisher: 'Sheldon B. Liss / Westview Press',
      year: '1984',
      excerpt: 'Detailed analysis of West Indian worker exploitation, the Gold/Silver Jim Crow system, and the January 9, 1964 Martyrs\' Day flag uprising.',
    },
    {
      id: 4,
      label: 'SUNTRACS and the Popular Anti-Mining Uprising in Panama',
      publisher: 'ALAI (Latin American Information Agency) & NACLA Report on the Americas',
      year: '2023',
      url: 'https://nacla.org/panama-anti-mining-protests-victory',
      excerpt: 'Current documentation of the 2023 SUNTRACS general strike and indigenous blockades that defeated Canadian copper mining concessions.',
    },
  ],
};
