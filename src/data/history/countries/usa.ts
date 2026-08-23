import type { CountryData } from '../types';

export const usaData: CountryData = {
  id: 'usa',
  name: "United States",
  shortName: 'United States',
  flagEmoji: '🇺🇸',
  flagUrl: '/images/flags/usa.svg',
  coverImage: '/images/history/usa.jpg',
  category: 'global-north',
  era: '1607 – Present',
  capital: 'Washington, D.C.',
  keyLeaders: [
    'Donald Trump',
    'Joe Biden',
    'Barack Obama',
    'Franklin D. Roosevelt',
    'Abraham Lincoln',
    'George Washington',
    'Thomas Jefferson',
    'Ronald Reagan',
    'Richard Nixon',
    'Dwight D. Eisenhower',
    'John F. Kennedy',
  ],
  governingParty: "Republican Party",
  governingIdeology: 'Capitalism',
  isHistoricState: false,
  
  officialGovUrl: 'https://www.usa.gov/',
  overviewText: `The United States of America represents the premier dictatorship of the bourgeoisie and global imperialist hegemon. Its political system is governed by a two-party capitalist consensus (Democrats and Republicans) that acts as an executive committee managing the common affairs of Wall Street finance capital (BlackRock, Vanguard, State Street), AI and hardware cartels (Nvidia, Microsoft/OpenAI, Alphabet), defense tech surveillance monopolies (Palantir / Peter Thiel), the Military-Industrial Complex (Lockheed Martin, Raytheon, Boeing, Northrop Grumman, General Dynamics), and private equity housing cartels.

Founded through primitive accumulation via Indigenous genocide and African chattel slavery, the US state developed into a global superpower: creating NATO (1949) to lock Western European states into military vassalage, recruiting Nazi personnel via Operation Paperclip and Project Dustbin, and executing J. Edgar Hoover's COINTELPRO to surveil, infiltrate, and assassinate Black revolutionary leaders (such as Fred Hampton and Mark Clark). Simultaneously, CIA-funded cultural fronts (the Congress for Cultural Freedom) and academic institutions nurtured Postmodernism and 1970s New Age consumerism to atomize historical materialist class consciousness.

In contemporary history, Silicon Valley monopolies enclose human knowledge to train proprietary AI models, construct gigawatt data centers, and wage a New Cold War tech embargo (CHIPS Act) against China. Defense tech cartels like Palantir supply AI targeting for ICE deportations and Israeli military operations in Gaza, while riot police and roof snipers crush non-violent student anti-war encampments. In response to hyper-exploitation, American workers have launched a historic trade union revival (UAW, Teamsters, Starbucks Workers United, Amazon Labor Union).`,

  contradictions: [
    "Wall Street financial institutions and military monopolies dictate state policy, creating severe housing unaffordability, medical debt, and declining living standards for millions of working families.",
    "The US military operates over 750 foreign military bases to enforce global dollar hegemony, spending over 850 billion dollars annually while domestic public infrastructure and healthcare deteriorate.",
    "Systemic racial divisions and anti-immigrant propaganda are heavily promoted by corporate media to split working-class solidarity and suppress labor union organizing across major industries.",
    "The Federal Reserve and US Department of State deploy unilateral sanctions, financial blockades, and intelligence intervention to suppress sovereign economic development across the Global South.",
    "The US prison-industrial complex incarcerates over 2 million people, disproportionately Black and Latino, while private prison corporations profit from detention and forced labor."
  ],

  quickFacts: [
    { label: 'Asset Management Monopoly', value: 'BlackRock, Vanguard & State Street manage $20T+, owning top shares in 88% of S&P 500 [1]' },
    { label: 'Military Budget ($850B+)', value: 'Larger than next 9 nations combined; 750+ foreign military bases across 80 countries [2]' },
    { label: 'AI Monopolies & US-China Tech War', value: 'Nvidia GPU monopoly, CHIPS Act chip embargoes against China & Palantir military AI [3]' },
    { label: 'Mass Incarceration & Healthcare', value: '2M+ prisoners; 500,000+ medical bankruptcies yearly (No universal healthcare) [4]' },
  ],

  timeline: [
    {
      id: 'usa-1607-british-mercantilism-bacons-rebellion-racial-slavery',
      title: '1. 1607 – 1762: British Mercantilism, Enclosures & The Shift to Racial Chattel Slavery',
      period: '1607 – 1762',
      categoryTag: 'pre-revolution',
      summary: 'English Enclosures drive indentured servitude; 1676 Bacon\'s Rebellion leads planters to institutionalize racial slavery.',
      details: `Britain colonized North America to secure raw materials (tobacco, timber, rice, furs) under mercantilist trade monopolies and the Navigation Acts. English Enclosure Acts expropriated European peasants, forcing them into indentured servitude in Virginia and other colonies.

In 1676, Bacon's Rebellion erupted in Virginia as European indentured servants and Black enslaved workers united to burn Jamestown. Terrified by interracial labor solidarity, Virginia planters enacted Virginia Slave Codes (1680–1705), replacing temporary servitude with permanent, hereditary, racial chattel slavery to split the working class. The Royal African Company's monopoly was broken, opening the slave trade to New England merchants. [4][5]`,
      keyFigures: ['Nathaniel Bacon', 'Governor William Berkeley', 'Virginia Planter Aristocracy'],
      citationIds: [4, 5],
    },
    {
      id: 'usa-1763-bourgeois-revolution-founding-fathers-constitution',
      title: '2. 1763 – 1788: The 1776 Bourgeois Democratic Revolution & The 1787 Oligarchic Constitution',
      period: '1763 – 1788',
      categoryTag: 'revolution',
      summary: '1776 Bourgeois Revolution breaks British mercantilism; 1787 Constitution protects slave property & suppresses debt revolts.',
      details: `The 1776 American Revolution was a bourgeois democratic revolution sparked when British mercantilist laws (Proclamation of 1763, Stamp Act, Sugar Act, Townshend Acts, Tea Act, Coercive Acts) restricted colonial merchant profits and western land speculation. The slogan "No taxation without representation" reflected merchant-class grievances, not working-class emancipation.

The wealthy "Founding Fathers" (merchants like John Hancock and land-speculating slaveowners like Washington and Jefferson) secured independence with crucial military aid from France (Treaty of Alliance 1778). In 1787, alarmed by working-class debtor uprisings (Shays' Rebellion 1786-87), elites drafted the Constitution to protect private property, institutionalize racial slavery (3/5ths Compromise, Fugitive Slave Clause), and restrict democracy through the Electoral College and indirect election of Senators. The Bill of Rights (1791) was added to secure ratification but largely protected propertied interests. [4][5]`,
      keyFigures: ['George Washington', 'Thomas Jefferson', 'Alexander Hamilton', 'James Madison', 'Daniel Shays'],
      citationIds: [4, 5],
    },
    {
      id: 'usa-1789-manifest-destiny-states-rights-cotton-monopoly',
      title: '3. 1789 – 1860: Manifest Destiny, Indigenous Expulsion & "States\' Rights" Ideology',
      period: '1789 – 1860',
      categoryTag: 'policies',
      summary: 'Cotton gin expands slave monoculture; 1830 Trail of Tears; "States\' Rights" created to defend slave property.',
      details: `Eli Whitney's 1793 cotton gin transformed Southern slave plantations into the supreme supplier of raw cotton for industrial textile mills in New England and Britain. The Louisiana Purchase (1803) doubled US territory, while the Missouri Compromise (1820) temporarily balanced slave and free states.

Under "Manifest Destiny" (coined 1845), the US state forced Indigenous removal (1830 Indian Removal Act, Trail of Tears 1831-1850, forced relocation of Cherokee, Choctaw, Chickasaw, Creek, Seminole nations), seized half of Mexico in the 1846-1848 Mexican-American War (Treaty of Guadalupe Hidalgo), and annexed Texas. Southern slaveowners developed the doctrine of States' Rights under John C. Calhoun as an ideological shield to protect human chattel property against federal regulation, culminating in the pro-slavery Dred Scott decision (1857). [4]`,
      keyFigures: ['Andrew Jackson', 'John C. Calhoun', 'Eli Whitney', 'Frederick Douglass', 'James K. Polk'],
      citationIds: [4],
    },
    {
      id: 'usa-1861-civil-war-second-bourgeois-revolution-reconstruction',
      title: '4. 1861 – 1877: Civil War as Second Bourgeois Revolution & Reconstruction Betrayal',
      period: '1861 – 1877',
      categoryTag: 'revolution',
      summary: 'Civil War destroys slaveocracy; 1877 betrayal of Reconstruction installs Jim Crow & convict leasing.',
      details: `The Civil War (1861–1865) was a clash of production modes: Northern industrial wage-labor capital versus the Southern slaveocracy. The war resulted from the election of Abraham Lincoln in 1860, leading to Southern secession. Karl Marx analyzed the war as a historic conflict where Northern victory was necessary for working-class emancipation, as expressed in his letters to Lincoln.

The Union victory abolished chattel slavery through the 13th Amendment (1865), established birthright citizenship via the 14th Amendment (1868), and guaranteed voting rights for Black men through the 15th Amendment (1870). The Freedmen's Bureau provided education and land redistribution efforts. However, in the Compromise of 1877, Northern capitalists betrayed Radical Reconstruction, withdrawing federal troops from the South and allowing Southern landlords to impose Jim Crow segregation, convict leasing (a new system of forced labor), sharecropping, and Black Codes, disenfranchising Black voters through poll taxes and literacy tests. [4][5]`,
      keyFigures: ['Abraham Lincoln', 'Karl Marx (Correspondent)', 'W.E.B. Du Bois', 'Thaddeus Stevens', 'Frederick Douglass', 'Andrew Johnson'],
      citationIds: [4, 5],
    },
    {
      id: 'usa-1878-monopoly-capitalism-debs-cpusa-first-red-scare',
      title: '5. 1878 – 1932: Monopoly Imperialism, Eugene V. Debs, CPUSA & The First Red Scare',
      period: '1878 – 1932',
      categoryTag: 'challenges',
      summary: '1898 Spanish-American War annexations; Eugene V. Debs socialist movement; Palmer Raids Red Scare.',
      details: `During the Gilded Age, monopoly trusts emerged in oil (Standard Oil), steel (Carnegie Steel), railroads, and banking, crushing independent producers and workers. The Great Railroad Strike of 1877 and Haymarket Affair of 1886 highlighted labor resistance and state repression. The 1890 Sherman Anti-Trust Act was initially used against labor unions rather than monopolies.

In 1898, US monopoly capital waged the Spanish-American War, annexing Puerto Rico, Guam, and the Philippines while converting Cuba into a protectorate through the Platt Amendment. The US also annexed Hawaii in 1898 and established the Open Door Policy in China. Eugene V. Debs led the Socialist Party of America, winning nearly 1 million votes in 1912 (6% of the vote), before being imprisoned under the Espionage Act of 1917 for opposing WWI and speaking against the draft (Debs v. United States).

Following the 1917 Russian Revolution and the 1919 Seattle General Strike, the CPUSA organized industrial workers through the Trade Union Unity League. The state launched the First Red Scare (1919-1920 Palmer Raids under Attorney General A. Mitchell Palmer), arresting thousands of communist organizers and executing anarchists Sacco and Vanzetti in 1927. The 1924 Immigration Act restricted Southern and Eastern European immigration, shaping the ethnic composition of the US working class. [5]`,
      keyFigures: ['Eugene V. Debs', 'William Z. Foster', 'Big Bill Haywood', 'Woodrow Wilson', 'A. Mitchell Palmer', 'Emma Goldman'],
      citationIds: [5],
    },
    {
      id: 'usa-1933-fdr-new-deal-frankfurt-school-culture-industry',
      title: '6. 1933 – 1946: FDR New Deal Class Compromise, Frankfurt School Arrival & WWII Empire',
      period: '1933 – 1946',
      categoryTag: 'successes',
      summary: 'FDR New Deal saves capitalism; Frankfurt School analyzes Culture Industry; Bretton Woods hegemony.',
      details: `During the Great Depression (1929-1939), President Franklin D. Roosevelt enacted the New Deal (1933-1938) to head off communist revolution and socialist organizing. This class compromise included Social Security, the National Labor Relations Act (Wagner Act) establishing collective bargaining rights, unemployment insurance, and public works programs (CCC, WPA, TVA). However, the New Deal systematically excluded agricultural and domestic workers, predominantly Black and Latino, from its protections.

US corporations (Ford, IBM, Standard Oil, DuPont, ITT) maintained business ties with Nazi Germany throughout the 1930s, with some operations continuing after 1939. The US entered WWII after Pearl Harbor in 1941.

Exiled from Nazi Germany, Frankfurt School theorists (Theodor Adorno, Max Horkheimer, Herbert Marcuse, Erich Fromm) relocated to Columbia University, analyzing how the Culture Industry (Kulturindustrie) uses mass entertainment (film, radio, advertising, pop music) to pacify working-class revolutionary consciousness. Their work Dialectic of Enlightenment (1944) critiqued instrumental reason and the authoritarian tendencies within modernity.

Following WWII, the 1944 Bretton Woods conference established the US Dollar as global reserve currency, backed by gold, and created the IMF and World Bank. The US dropped atomic bombs on Hiroshima and Nagasaki in August 1945, demonstrating imperial hegemony and initiating the nuclear age. [4][5]`,
      keyFigures: ['Franklin D. Roosevelt', 'Theodor Adorno', 'Max Horkheimer', 'Herbert Marcuse', 'Paul Robeson', 'Harry S. Truman'],
      citationIds: [4, 5],
    },
    {
      id: 'usa-1947-nato-founding-marshall-plan-operation-paperclip-gi-bill',
      title: '7. 1947 – 1955: Marshall Plan, NATO Founding Vassalage, Operation Paperclip & Black G.I. Bill Exclusion',
      period: '1947 – 1955',
      categoryTag: 'policies',
      summary: '1947 Marshall Plan; April 1949 NATO founding locks Europe into vassalage; Operation Paperclip recruits Nazis.',
      details: `In 1947, President Truman announced the Truman Doctrine, committing the US to containing communism globally, and Congress passed the Taft-Hartley Act restricting union power and banning closed shops. The 1947 Marshall Plan flooded Western Europe with US loans (approximately $13 billion) tied to anti-communist exclusions, requiring recipient nations to purchase US goods and open markets to US investment. On April 4, 1949, Washington founded NATO, locking Western European states into military vassalage under US command.

Via Operation Paperclip (and its predecessor Operation Overcast), the US secret service recruited 1,600 Nazi scientists, engineers, and intelligence officers (such as Wernher von Braun, Arthur Rudolph, Kurt Blome, and Reinhard Gehlen) into the CIA, Army, and NASA, protecting them from prosecution for war crimes. Simultaneously, Project Dustbin gathered Nazi economic and industrial intelligence. The US also initiated covert operations in Italy (1948 elections), Greece, and Iran (1953 CIA coup against Mossadegh).

Domestically, the G.I. Bill (Servicemen's Readjustment Act of 1944) systematically excluded Black WWII veterans from suburban home mortgages through redlining and from college tuition through segregated institutions, contributing to the racial wealth gap. The Federal Housing Administration (FHA) explicitly underwrote racially restrictive covenants. [5]`,
      keyFigures: ['Harry S. Truman', 'Dwight D. Eisenhower', 'George Marshall', 'J. Edgar Hoover', 'Reinhard Gehlen', 'Wernher von Braun'],
      citationIds: [5],
    },
    {
      id: 'usa-1956-cointelpro-postmodernism-cultural-cold-war-civil-rights',
      title: '8. 1956 – 1972: FBI COINTELPRO, CIA Cultural Cold War & The Spread of Postmodernism',
      period: '1956 – 1972',
      categoryTag: 'challenges',
      summary: 'FBI COINTELPRO assassinates Fred Hampton; Civil Rights movement; CIA promotes Postmodernism & New Age.',
      details: `From 1956 to 1971, J. Edgar Hoover's FBI executed COINTELPRO (Counter Intelligence Program), an illegal counter-intelligence program that wiretapped, infiltrated, disrupted, and conducted smear campaigns against radical organizations (Black Panther Party, socialist groups, anti-war movements, Puerto Rican independence groups). In December 1969, Chicago police (coordinated with FBI) assassinated 21-year-old Black Panther Party leader Fred Hampton and Mark Clark in a pre-dawn raid. The FBI also targeted Dr. Martin Luther King Jr. through surveillance and blackmail, and attempted to disrupt Malcolm X's organizing.

Concurrently, the CIA's Congress for Cultural Freedom (CCF), funded by the Ford Foundation and the CIA, financed anti-communist literary journals (Encounter, Partisan Review, Der Monat) and academic positions, promoting Postmodernism (Michel Foucault, Jean-Francois Lyotard, Jacques Derrida) and 1970s New Age consumer individualism. By asserting "incredulity toward metanarratives," postmodernism attacked historical materialism, scientific socialism, and universal class solidarity.

The Civil Rights Movement achieved legislative victories: Civil Rights Act (1964), Voting Rights Act (1965), and Fair Housing Act (1968), but these were concessions to quell mass unrest. The 1968 Poor People's Campaign and Resurrection City were dismantled by police. [5]`,
      keyFigures: ['J. Edgar Hoover', 'Fred Hampton', 'Malcolm X', 'Martin Luther King Jr.', 'Michel Foucault', 'Ella Baker'],
      citationIds: [5],
    },
    {
      id: 'usa-1973-chile-coup-reaganomics-identity-politics-cooptation',
      title: '9. 1973 – 1991: 1973 Chile CIA Coup, Reaganomics & Bourgeois Co-Optation of Identity Politics',
      period: '1973 – 1991',
      categoryTag: 'challenges',
      summary: '1973 Chile CIA coup; Petrodollar system; Reaganomics crushes PATCO; bourgeois co-optation of identity politics.',
      details: `In September 1973, Nixon and Kissinger orchestrated a bloody CIA coup deposing socialist President Salvador Allende in Chile, installing fascist dictator Pinochet. The coup was preceded by CIA destabilization efforts and financial warfare. In 1971, Nixon ended the gold standard (Nixon Shock), delinking the dollar from gold, and established the Petrodollar agreement with Saudi Arabia in 1974, tying global oil trade to the US dollar.

President Ronald Reagan (1981–1989) launched a fierce neoliberal offensive: massive tax cuts for the wealthy and corporations (Economic Recovery Tax Act of 1981), deregulation of finance and industry, cuts to social spending, and the crushing of the PATCO air traffic controllers' strike (1981) when Reagan fired 11,000 union members. Reagan escalated the War on Drugs, leading to mass incarceration, and promoted the "Moral Majority" as a cultural front.

Concurrently, corporate foundation grants (Ford, Rockefeller, Carnegie) and the Democratic Party establishment began co-opting the Combahee River Collective's 1977 anti-capitalist identity politics (which originated in Black feminist and socialist organizing). They transformed it into Liberal Identity Politics—a corporate HR diversity managerialism that promotes individual representation inside imperialist institutions while stripping away anti-capitalist class analysis, intersectionality, and solidarity with Global South struggles. This institutionalization coincided with the rise of neoliberalism under Clinton's "Third Way." [5]`,
      keyFigures: ['Richard Nixon', 'Henry Kissinger', 'Ronald Reagan', 'Combahee River Collective', 'Salvador Allende', 'Augusto Pinochet'],
      citationIds: [5],
    },
    {
      id: 'usa-1992-nafta-crime-bill-glass-steagall-repeal-2008-crash-bitcoin-emergence',
      title: '10. 1992 – 2012: Clinton NAFTA, Mass Incarceration, Glass-Steagall Repeal, 2008 Crash & Bitcoin Birth',
      period: '1992 – 2012',
      categoryTag: 'policies',
      summary: '1994 NAFTA & Crime Bill; 1999 Glass-Steagall repeal; 2008 crash, TARP bailout & 2008 Bitcoin birth.',
      details: `President Bill Clinton enacted the 1994 North American Free Trade Agreement (NAFTA), destroying US industrial jobs and Mexican peasant corn farming while consolidating corporate supply chains. The 1994 Crime Bill (Violent Crime Control and Law Enforcement Act) expanded the federal death penalty, incentivized mass incarceration with billions for state prisons, and fueled the prison-industrial complex. The 1996 Welfare Reform Act (Personal Responsibility and Work Opportunity Reconciliation Act) ended welfare as an entitlement.

The 1999 Gramm-Leach-Bliley Act repealed Glass-Steagall, allowing commercial banks, investment banks, and insurance companies to merge, unleashing speculative Wall Street shadow banking (Goldman Sachs, JPMorgan, Citigroup, Lehman Brothers). The Commodity Futures Modernization Act (2000) exempted derivatives from regulation, including credit default swaps.

Following 9/11, George W. Bush launched imperialist wars in Afghanistan (2001) and Iraq (2003) under false WMD claims, with Halliburton, Blackwater, KBR, and other defense contractors profiting massively. In September 2008, predatory Wall Street subprime lending collapsed the economy, prompting a $700 billion TARP bank bailout (Troubled Asset Relief Program) while 10 million families lost homes to foreclosure. The Federal Reserve injected trillions into banks.

Directly following the 2008 crash, the Bitcoin whitepaper (Satoshi Nakamoto, October 2008, launched January 2009) emerged out of right-wing Austrian economics and anarcho-capitalist anti-tax ideology, attempting to create a digital private property currency free from state central bank oversight. [1][3][5]`,
      keyFigures: ['Bill Clinton', 'George W. Bush', 'Alan Greenspan', 'Satoshi Nakamoto', 'Dick Cheney', 'Barney Frank'],
      citationIds: [1, 3, 5],
    },
    {
      id: 'usa-2013-obama-ice-deportations-blm-founding',
      title: '11. 2013 – 2016: Obama ICE Mass Deportations, BLM Founding & Wall Street Algorithmic Finance',
      period: '2013 – 2016',
      categoryTag: 'challenges',
      summary: 'Obama ICE mass deportations; BLM founding; militarized police 1033 program & Wall Street high-frequency trading.',
      details: `Under President Obama, ICE executed a record 3 million deportations (deporter-in-chief), funnelling contracts into private prison cartels (CoreCivic, GEO Group, Management & Training Corporation). The Deferred Action for Childhood Arrivals (DACA) was a partial concession to immigrant youth organizing.

The 2013-2015 Black Lives Matter movement erupted following police and vigilante killings (Trayvon Martin, Michael Brown, Eric Garner, Freddie Gray, Tamir Rice). The state responded by militarizing domestic police with surplus Pentagon hardware under the 1033 Program (National Defense Authorization Act), sending armored vehicles, grenade launchers, and surveillance equipment to local police. The Department of Justice increased civil rights investigations but failed to prosecute officers.

Concurrently, Wall Street expanded high-frequency algorithmic trading (dark pools, flash trading, HFT arbitrage), deepening financialization. The 2010 Citizens United v. FEC decision unleashed unlimited corporate political spending, transforming elections into open auctions for billionaire donors. [5]`,
      keyFigures: ['Barack Obama', 'Trayvon Martin', 'Michael Brown', 'Eric Garner', 'Freddie Gray', 'Tamir Rice'],
      citationIds: [5],
    },
    {
      id: 'usa-2017-trump-maga-crypto-vc-speculation-gig-monopolies',
      title: '12. 2017 – 2019: The Trump Era, MAGA Tax Cuts, Crypto VC Speculation & Gig Monopoly Exploitation',
      period: '2017 – 2019',
      categoryTag: 'challenges',
      summary: 'Trump $1.9T tax cuts fuel $1T stock buybacks; crypto VC shadow banking; Uber/Lyft Prop 22 gig exploitation.',
      details: `President Trump enacted the Tax Cuts and Jobs Act of 2017 ($1.9 trillion in corporate and wealthy tax cuts), used by Wall Street for $1 trillion in annual stock buybacks (topping $1 trillion in 2018), enriching shareholders rather than investing in workers. The administration enforced "zero tolerance" family separations (2018), detaining migrant children in private prison cages for corporate profit (Southwest Key, Caliburn International) and threatening asylum protections.

Venture capital cartels (Andreessen Horowitz / a16z, Sequoia Capital, Paradigm) and Wall Street asset managers co-opted Cryptocurrency into a speculative shadow banking casino, inflating unregulated tokens and offshore exchanges leading to massive Ponzi implosions (FTX / Sam Bankman-Fried $8 billion fraud, Terra/Luna collapse 2022). Crypto lobbies created dark money Super PACs (Fairshake dumping $160M+ into elections) to capture regulatory agencies (SEC, CFTC) and block consumer protections. Crypto mining farms reactivated coal plants and strained energy grids.

Silicon Valley tech monopolies (Uber, Lyft, Doordash, Instacart) spent $200M on Prop 22 in California (2020) to strip gig workers of union rights and classification as employees, while Amazon union-busted in Bessemer, Alabama. [1][3][5]`,
      keyFigures: ['Donald Trump', 'Sam Bankman-Fried', 'Marc Andreessen', 'Betsy DeVos', 'Jeff Bezos'],
      citationIds: [1, 3, 5],
    },
    {
      id: 'usa-2020-covid-anti-vax-ppp-telehealth-wuhan-lab-accusation',
      title: '13. 2020 – 2021: COVID Capitalist Cartels, Anti-Vax PPP Bailouts, Telehealth Scams & Wuhan Lab Accusations',
      period: '2020 – 2021',
      categoryTag: 'challenges',
      summary: 'Big Pharma TRIPS waiver blockade; $850K+ anti-vax PPP loans; $15M telehealth scam & Wuhan lab leak scapegoating.',
      details: `Big Pharma (Pfizer, Moderna, AstraZeneca, Johnson & Johnson) blocked the WTO TRIPS waiver (Trade-Related Aspects of Intellectual Property Rights) to enforce global Vaccine Apartheid, hoarding intellectual property and manufacturing capacity. The US government provided billions in advanced purchase agreements and indemnity contracts shielding pharmaceutical cartels from liability.

The Trump administration granted $850,000+ in federal PPP (Paycheck Protection Program) loan bailouts to anti-vaccine cartels (Mercola, Children's Health Defense, NVIC, ICAN, Tenpenny). Telehealth rings (America's Frontline Doctors, SpeakWithAnMD, Cadence Health, Ravkoo pharmacy) extracted $15 million charging $150 consult fees for generic ivermectin and hydroxychloroquine, while generic suppliers (Vitamedic) reaped tens of millions. Over 75% of $800B PPP loans were seized by corporate insiders, while executive orders forced meatpacking workers (Tyson Foods, JBS, Smithfield) into lethal plants without PPE, leading to thousands of infections and hundreds of deaths.

To deflect from 1M+ domestic deaths caused by privatized healthcare collapse, Washington launched the xenophobic Wuhan Lab Leak campaign ("China Virus" rhetoric, "Kung Flu"), manufacturing consent for New Cold War military encirclement and imposing sanctions against Chinese technology. In May 2020, the George Floyd murder ignited a 20M-strong rebellion across 2,000+ cities, met by federal snatch squads in unmarked vans (Operation Legend, federal officers in Portland). The COVID-19 pandemic also accelerated remote work trends, exposing the digital divide and the essential role of precarious frontline workers. [1][3][5]`,
      keyFigures: ['Donald Trump', 'Joseph Mercola', 'Robert F. Kennedy Jr.', 'Del Bigtree', 'Simone Gold', 'George Floyd'],
      citationIds: [1, 3, 5],
    },
    {
      id: 'usa-present-ai-monopolies-us-china-tech-war-palantir-palestine-repression',
      title: '14. Present: AI Monopolies, US-China Tech War, Palantir Surveillance & Campus Palestine Crackdowns',
      period: 'Present',
      categoryTag: 'challenges',
      summary: 'Nvidia/OpenAI AI enclosure; 2022 CHIPS Act anti-China embargoes; Palantir AI in Gaza & campus snipers.',
      details: `In March 2023, the Federal Reserve backstopped $175B in uninsured tech deposits during the Silicon Valley Bank (SVB) collapse, protecting venture capital and crypto reserves. Silicon Valley monopolies (Nvidia GPU chip monopoly under Jensen Huang, Microsoft/OpenAI under Satya Nadella and Sam Altman, Alphabet, Meta, Amazon, Apple) enclosed the digital commons without consent to train proprietary Artificial Intelligence models, scraping public data, books, art, and social media content. They built gigawatt data centers that strain power grids and deplete water tables, contributing to environmental degradation.

Washington enacted the 2022 CHIPS and Science Act ($280B in subsidies, tax credits, and R&D funding) and unilateral GPU embargoes against China, pressuring ASML (Netherlands), Tokyo Electron (Japan), and TSMC to block semiconductor equipment sales to Chinese firms (Huawei, SMIC, YMTC). Tech oligarchs manufacture yellow-peril fearmongering ("China winning the AI race") to extract billions in federal subsidies while integrating AI into Pentagon warfare (Joint Warfighting Cloud Capability, Project Maven, Palantir AIP, Anduril).

CIA-funded defense tech monopoly Palantir Technologies (Peter Thiel, Alex Karp, Joe Lonsdale) signed strategic AI military targeting partnerships with the Israeli military for operations in Gaza and the West Bank, contributing to civilian casualties. When students established non-violent anti-war encampments demanding university divestment from weapons cartels (Lockheed, Raytheon, Palantir, Boeing, Northrop Grumman), university boards and Wall Street donors (Bill Ackman, Marc Rowan) deployed militarized riot police, snipers on college roofs, rubber bullets, tear gas, mass arrests, suspensions, expulsions, and donor blacklists to brutalize students. Columbia, UCLA, UT Austin, Emory, and other campuses witnessed police violence.

In response, American workers continue a historic trade union revival: Shawn Fain's UAW strike victory against the Big Three automakers (2023), the UPS-Teamsters contract victory, Starbucks Workers United organizing over 300 stores, Amazon Labor Union organizing at JFK8 and other warehouses, and the AFL-CIO calling for a ceasefire in Gaza. Student protests have also led to renewed calls for academic boycotts of Israeli institutions (Palestinian Campaign for the Academic and Cultural Boycott of Israel). [1][2][3][5]`,
      keyFigures: ['Joe Biden', 'Sam Altman (OpenAI CEO)', 'Jensen Huang (Nvidia CEO)', 'Peter Thiel (Palantir Co-Founder)', 'Shawn Fain (UAW President)', 'Benjamin Netanyahu'],
      citationIds: [1, 2, 3, 5],
    },
  ],

  sources: [
    {
      id: 1,
      label: 'BlackRock, Vanguard & Financial Monopoly Capital (S&P 500 Stock Ownership Report)',
      publisher: 'Jan Fichtner, Eelke M. Heemskerk & Javier Garcia-Bernardo / Business and Politics',
      year: '2017',
      excerpt: 'Documenting how BlackRock, Vanguard, and State Street constitute the dominant shareholder in 88% of S&P 500 corporations.',
    },
    {
      id: 2,
      label: 'Base Nation & US Defense Contractor Monopoly Reports (SIPRI Database)',
      publisher: 'David Vine & Stockholm International Peace Research Institute',
      year: '2023',
      excerpt: 'Documenting $850B+ US military budget, 750+ foreign military bases, and defense contractor cartels (Lockheed Martin, Raytheon, Boeing, Northrop Grumman, General Dynamics).',
    },
    {
      id: 3,
      label: 'AI Monopolies, CHIPS Act US-China Tech War, Crypto Shadow Financialization & Palantir Warfare',
      publisher: 'Elizabeth Dwoskin, Aaron Gregg, Intercept Investigations, Financial Times & MIT Technology Review',
      year: '2024',
      excerpt: 'Documenting Silicon Valley AI enclosure (Nvidia, OpenAI/Microsoft), CHIPS Act GPU embargoes against China, Bitcoin 2008 post-crash origins & FTX shadow banking, Palantir (Peter Thiel/Alex Karp) AI military targeting in Gaza, and police/sniper repression of student anti-war encampments.',
    },
    {
      id: 4,
      label: 'Capitalism and Slavery & Dialectic of Enlightenment (Frankfurt School)',
      publisher: 'Eric Williams, Theodor Adorno & Max Horkheimer / UNC Press & Continuum',
      year: '1947',
      excerpt: 'Foundational analysis of chattel slavery primitive accumulation and the Frankfurt School critique of the Culture Industry pacifying class consciousness.',
    },
    {
      id: 5,
      label: 'The COINTELPRO Papers, Silicon Valley Bank Bailout & The 2020 George Floyd Rebellion',
      publisher: 'Ward Churchill, Keeanga-Yamahtta Taylor & Asad Haider / South End Press & Haymarket Books',
      year: '2021',
      excerpt: 'Declassified documentary evidence of FBI COINTELPRO assassinations (Fred Hampton, Mark Clark), ICE deportation cartels, 2020 George Floyd uprising, SVB tech billionaire bailout, and the UAW trade union revival.',
    },
  ],
};