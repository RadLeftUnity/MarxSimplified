import type { CountryData } from '../types';

export const venezuelaData: CountryData = {
  id: 'venezuela',
  name: 'Bolivarian Republic of Venezuela',
  shortName: 'Venezuela',
  flagEmoji: '🇻🇪',
  flagUrl: '/images/flags/venezuela.svg',
  coverImage: '/images/history/venezuela.jpg',
  category: 'global-south',
  era: '1999 – Present',
  capital: 'Caracas',
  keyLeaders: ['Hugo Chávez', 'Nicolás Maduro'],
  governingParty: "United Socialist Party of Venezuela (PSUV)",
  governingIdeology: "Bolivarian Socialism",
  isHistoricState: false,
  
  officialGovUrl: 'http://www.presidencia.gob.ve/',
  overviewText: `The Bolivarian Revolution of Venezuela, initiated under the leadership of Hugo Chávez in 1998, ended forty years of corporate corrupt oligarchy (the Puntofijo Pact) and established a sovereign anti-imperialist state committed to participatory democracy, communal ownership, and Latin American integration.

Through the nationalization of the state oil company (PDVSA) and the creation of social programs known as "Misiones," the Bolivarian government directed national oil wealth directly to working-class communities. Massive achievements followed: extreme poverty was halved, illiteracy was eliminated (certified by UNESCO in 2005), over 4.9 million free public housing units were constructed via Great Mission Housing Venezuela (GMVV), and healthcare was democratized via Cuban doctor clinics (Barrio Adentro).

Venezuela possesses over 303 billion barrels of proven oil reserves (the largest on Earth). Under Chávez and Nicolás Maduro, oil revenue was nationalized to fund public welfare instead of enriching US oil monopolies (ExxonMobil, ConocoPhillips, Chevron). In June 2023, former US President Donald Trump publicly admitted the imperialist motive: "When I left, Venezuela was ready to collapse. We would have taken it over; we would have gotten all that oil; it would have been right next door."

Despite facing illegal US sanctions, asset theft ($7 billion CITGO oil refining subsidiary seized in the US and $1.9 billion in Venezuelan gold frozen by the Bank of England), and mercenary invasions (Operation Gideon), Venezuela defeated the imperialist siege through grassroots Communal Councils, the Bolivarian Militia, Local Supply and Production Committees (CLAP), and strategic alliances with China, Russia, Cuba, and BRICS+.`,

  contradictions: [
    "US imperialist executive orders (enacted under Trump and maintained under Biden) block PDVSA oil exports and freeze 10+ billion dollars in foreign bank assets, leading to severe foreign currency shortages and food import bottlenecks. US Department of State strategists explicitly weaponize these economic blockades to manufacture domestic discontent and justify puppet regime installation (e.g. Juan Guaidó).",
    "The PSUV administration under Nicolás Maduro created CLAP food distribution and public housing programs, yet domestic private merchant monopolies (e.g. Empresas Polar) hoard goods and manipulate black-market exchange rates, leading to artificial price inflation.",
    "Nationalizing oil reserves protects Venezuelan crude from US corporate plunder, yet domestic capitalist property relations persist in commerce. Imperialist intelligence services (US CIA, DEA) coordinate directly with comprador oligarchs to organize military coup attempts and mercenary invasions (Operation Gideon).",
    "Russia, Iran, and BRICS+ provides economic lifelines against Western sanctions, leading to stabilized domestic production. The growth of worker-run communes (Comunas) builds grass-roots socialist power to counter private merchant hoarding."
  ],

  quickFacts: [
    { label: 'Proven Oil Reserves', value: '303 Billion barrels (largest on Earth, nationalized for public welfare) [2]' },
    { label: 'Public Housing Built', value: '4.9+ Million homes built & delivered free to working class (GMVV [1])' },
    { label: 'Trump Imperialist Admission', value: '"We would have taken it over; we would have gotten all that oil" (Trump 2023 [4])' },
    { label: 'Communal Democracy', value: '49,000+ Communal Councils, 3,600+ Communes & 4.5M+ Bolivarian Militia' },
  ],

  timeline: [
    {
      id: 'venezuela-puntofijo',
      title: '1. Pre-1999: The Puntofijo Oligarchy, 1989 Caracazo & Neoliberal Crisis',
      period: 'Pre-1999',
      categoryTag: 'pre-revolution',
      summary: 'Oil wealth plundered by two-party oligarchy; 1989 Caracazo anti-IMF uprising crushed by state military force.',
      details: `Before 1999, Venezuela was governed by the Puntofijo Pact—a corrupt two-party power-sharing agreement between AD and COPEI elites. Despite immense oil revenues, over 65% of the population lived in poverty, while foreign oil monopolies and domestic oligarchs siphoned national wealth.

In February 1989, when President Carlos Andrés Pérez imposed IMF neoliberal austerity measures (doubling bus fares and gas prices), spontaneous working-class uprisings erupted across Caracas (the Caracazo). The government deployed military forces, killing thousands of unarmed civilians. In 1992, Lt. Col. Hugo Chávez led a heroic military uprising against the corrupt regime, taking responsibility with his famous phrase "Por ahora" ("For now"). [3]`,
      keyFigures: ['Hugo Chávez', 'Carlos Andrés Pérez'],
      citationIds: [3],
    },
    {
      id: 'venezuela-chavez-election',
      title: '2. 1998 – 1999: Election of Hugo Chávez & Drafting the 1999 Bolivarian Constitution',
      period: '1998 – 1999',
      categoryTag: 'revolution',
      summary: 'Chávez wins 1998 election; drafting democratic 1999 Bolivarian Constitution via popular constitutional assembly.',
      details: `In December 1998, Hugo Chávez was elected President with a landslide mandate to dismantle the oligarchy. The new government immediately convened a Constituent Assembly elected by popular vote to draft a new constitution.

In December 1999, Venezuelan citizens overwhelmingly ratified the Bolivarian Constitution. The constitution established participatory democracy, guaranteed human rights, nationalized natural resources, recognized Indigenous land rights, and renamed the nation the Bolivarian Republic of Venezuela.`,
      keyFigures: ['Hugo Chávez', 'Constituent Assembly Cadres'],
    },
    {
      id: 'venezuela-coup-defeat',
      title: '3. 2002: Repelling Imperialist Counter-Revolution: Defeating 2002 US/NED Backed Coup',
      period: '2002',
      categoryTag: 'challenges',
      summary: 'US-backed military coup kidnaps Chávez; NED grants to coup leaders; popular uprising restores Chávez in 47 hours.',
      details: `Fearing land reform and sovereign oil policy, Venezuelan oligarchs, private media monopolies, and the US Bush administration orchestrated a military coup on April 11, 2002. Declassified US documents confirmed CIA prior knowledge and millions in US National Endowment for Democracy (NED) grants to coup organizations (Súmate, CTV leadership). Coup leaders kidnapped Chávez and installed business chamber president Pedro Carmona.

However, millions of working-class people descended from the hillside barrios surrounding Caracas, surrounding Miraflores presidential palace alongside loyal military officers. Within 47 hours, the counter-revolution was crushed, restoring Chávez to the presidency. [4]`,
      keyFigures: ['Hugo Chávez', 'Raúl Isaías Baduel', 'Pedro Carmona (US Comprador)'],
      citationIds: [4],
    },
    {
      id: 'venezuela-pdvsa-missions',
      title: '4. 2003 – 2005: Oil Nationalization & Launching the Social Missions (Misiones)',
      period: '2003 – 2005',
      categoryTag: 'policies',
      summary: 'Smashing the 2002-2003 oil lock-out; recovering state oil revenue for free healthcare (Barrio Adentro) and literacy (Robinson).',
      details: `Following the 2002-2003 reactionary oil lock-out by corrupt management, the government established full state control over Petróleos de Venezuela (PDVSA). Oil revenues were re-directed from foreign banks directly into community social programs called "Misiones."

In partnership with Cuba, Misión Barrio Adentro brought 20,000+ Cuban doctors into working-class neighborhoods to provide 100% free healthcare. Misión Robinson eradicated illiteracy (UNESCO certified 2005), and Misión Mercal provided subsidized food networks. [2]`,
      keyFigures: ['Hugo Chávez', 'Fidel Castro'],
      citationIds: [2],
    },
    {
      id: 'venezuela-21st-socialism',
      title: '5. 2006 – 2013: Declaring 21st Century Socialism, ALBA Integration & Communal Councils',
      period: '2006 – 2013',
      categoryTag: 'successes',
      summary: 'Chávez declares 21st Century Socialism; founding ALBA & CELAC; establishing Communal Councils & Communes.',
      details: `At the 2005 World Social Forum, Hugo Chávez declared that capitalism could not solve human poverty and that Venezuela would build "21st Century Socialism." In 2006, the Law of Communal Councils was passed, giving local communities direct democratic authority over public funds.

Internationally, Venezuela led the creation of anti-imperialist regional alliances, including ALBA (Bolivarian Alliance for the Peoples of Our America), Petrocaribe, and CELAC, bypassing US dominance and promoting Latin American integration.`,
      keyFigures: ['Hugo Chávez', 'Nicolás Maduro'],
    },
    {
      id: 'venezuela-sanctions-war',
      title: '6. 2014 – 2018: US Blockade, Executive Order 13692 & Violent Guarimba Color Revolutions',
      period: '2014 – 2018',
      categoryTag: 'challenges',
      summary: 'Obama issues Executive Order 13692; USAID/NED funding right-wing Guarimba terrorism; defeating violent soft-coups.',
      details: `Following Hugo Chávez's death in 2013, President Nicolás Maduro was elected amidst an escalating imperialist siege. In 2015, US President Barack Obama declared Venezuela an "unusual and extraordinary threat," signing Executive Order 13692 and unleashing severe financial sanctions.

In 2014 and 2017, right-wing opposition groups (Voluntad Popular, Primero Justicia)—backed by confirmed USAID and NED grants—launched violent color revolution insurgencies (*Guarimbas*). Armed opposition mobs constructed street barricades, burned Afro-descendant socialist supporters alive (Orlando Figuera), and attacked maternity hospitals. The state defeated the violence by convening the 2017 National Constituent Assembly. [2][3]`,
      keyFigures: ['Nicolás Maduro', 'Leopoldo López (US Proxy)', 'Delcy Rodríguez'],
      citationIds: [2, 3],
    },
    {
      id: 'venezuela-trump-guaido-coup',
      title: '7. 2019 – 2022: Defeating the Trump-Guaidó Soft-Coup, Asset Theft & Operation Gideon Mercenary Raid',
      period: '2019 – 2022',
      categoryTag: 'successes',
      summary: 'US Trump regime & Guaidó soft-coup; $7B CITGO theft; Bank of England gold freeze; defeating Silvercorp Operation Gideon.',
      details: `In January 2019, US President Donald Trump, National Security Advisor John Bolton, Special Envoy Elliott Abrams, and Senator Marco Rubio orchestrated an aggressive soft-coup attempt, appointing un-elected comprador politician Juan Guaidó as "interim president."

**Capitalist Forces & Imperialist Asset Theft**:
- **Corporate Oil Drive**: In June 2023, Donald Trump publicly admitted the true motive: *"When I left, Venezuela was ready to collapse. We would have taken it over; we would have gotten all that oil."* Capitalist monopolies (ExxonMobil, ConocoPhillips) lobbied for access to Venezuela's 303 billion barrels of proven oil reserves.
- **Imperialist Robbery**: The US government seized $7 billion in assets belonging to CITGO Petroleum (PDVSA's US refining subsidiary) and handed control to Guaidó's corrupt circle, while the Bank of England froze $1.9 billion in Venezuelan sovereign gold reserves.
- **Operation Gideon Mercenary Raid**: In May 2020, Guaidó's team signed a $212 million contract with US private military firm Silvercorp USA (run by former US Green Beret Jordan Goudreau) to launch an amphibious mercenary raid to infiltrate Venezuela, kidnap President Maduro, and execute a regime-change takeover.

**How It Was Defeated**:
The civil-military alliance (*Unión Cívico-Militar*), 4.5 million members of the Bolivarian Militia, and Venezuelan fishermen captured the mercenaries at Chudunavare and Chuao. To neutralize imperialist famine warfare, the government expanded the Local Supply and Production Committees (CLAP), delivering monthly food packages to 7 million+ families until Guaidó's "interim government" collapsed in December 2022 amidst massive financial corruption scandals. [1][2][4]`,
      keyFigures: ['Nicolás Maduro', 'Donald Trump (US President)', 'John Bolton', 'Elliott Abrams', 'Juan Guaidó (US Comprador)', 'Jordan Goudreau (US Mercenary)'],
      citationIds: [1, 2, 4],
    },
    {
      id: 'venezuela-communal-future',
      title: '8. 2023 – Present: Economic Recovery, Communal Economy Expansion & BRICS+ Multipolarity',
      period: '2023 – Present',
      categoryTag: 'successes',
      summary: 'Single-digit inflation recovery; expanding 4,000+ Communes; joining BRICS+ multipolar alliance.',
      details: `Through state-guided economic restructuring, domestic agricultural expansion, and gold/oil production recovery, Venezuela overcome hyperinflation and achieved continuous GDP growth despite ongoing US sanctions.

The government continues to prioritize the "Communal State," expanding over 3,600 organized Communes and 49,000 Communal Councils managing local production. Internationally, Venezuela has deepened strategic partnerships with China, Russia, Iran, and BRICS+, standing as a pillar of anti-imperialist multipolarity in the Americas. [1][2]`,
      keyFigures: ['Nicolás Maduro', 'Jorge Arreaza'],
      citationIds: [1, 2],
    },
  ],

  sources: [
    {
      id: 1,
      label: 'Great Mission Housing Venezuela (GMVV) Official Milestones Report',
      publisher: 'Ministry of Popular Power for Housing and Habitat (Venezuela)',
      year: '2023',
      excerpt: 'Over 4.9 million state-constructed housing units completed and delivered to working-class families free of mortgage debt.',
    },
    {
      id: 2,
      label: 'Economic Sanctions as Collective Punishment: The Case of Venezuela',
      publisher: 'Center for Economic and Policy Research (CEPR) - Mark Weisbrot & Jeffrey Sachs',
      year: '2019',
      url: 'https://cepr.net/images/stories/reports/venezuela-sanctions-2019-04.pdf',
      excerpt: 'U.S. sanctions reduced caloric intake, increased disease and mortality, and fit the definition of collective punishment under international law.',
    },
    {
      id: 3,
      label: 'Building the Commune: Radical Democracy in Venezuela',
      publisher: 'George Ciccariello-Maher / Verso Books',
      year: '2016',
      excerpt: 'In-depth study of Venezuelan communal councils, popular assemblies, and working-class democratic power from the barrios to the communes.',
    },
    {
      id: 4,
      label: 'Donald Trump Public Address Confession on Venezuelan Oil',
      publisher: 'North Carolina Speech Broadcast / Reuters & Associated Press Records',
      year: '2023',
      url: 'https://www.reuters.com/',
      excerpt: 'Former US President Donald Trump publicly admitting the imperialist motive: "When I left, Venezuela was ready to collapse. We would have taken it over; we would have gotten all that oil."',
    },
  ],
};
