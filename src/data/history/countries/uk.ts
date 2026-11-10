import type { CountryData } from '../types';

export const ukData: CountryData = {
  id: 'uk',
  name: "United Kingdom",
  shortName: 'United Kingdom',
  flagEmoji: '🇬🇧',
  flagUrl: '/images/flags/uk.svg',
  coverImage: '/images/history/uk.jpg',
  category: 'global-north',
  era: '1707 to Present',
  capital: 'London',
  keyLeaders: ['Oliver Cromwell', 'Winston Churchill', 'Clement Attlee', 'Harold Wilson', 'Margaret Thatcher', 'Tony Blair', 'Jeremy Corbyn', 'Boris Johnson', 'Nigel Farage', 'Keir Starmer'],
  governingParty: "Labour Party",
  governingIdeology: 'Capitalism',
  isHistoricState: false,
  
  officialGovUrl: 'https://www.gov.uk/',
  overviewText: `The United Kingdom represents the world's primary birthplace of industrial capitalism, the industrial proletariat, and global financial imperialism.

The economic foundation of the British state was constructed through "primitive accumulation of capital." Domestically, the Parliamentary Enclosure Acts forcibly evicted millions of peasants from communal lands, creating a landless working class dependent on wage labor. Globally, transatlantic slavery and the plunder of India ($45 trillion extracted per Utsa Patnaik) provided the liquid capital that financed the Industrial Revolution.

Following World War II, militant working-class pressure forced the creation of the National Health Service (NHS). However, US intelligence covert operations (CIA plots against Harold Wilson, the founding of the **British American Project** in 1985) and Thatcherite neoliberalism groomed "New Labour" under Tony Blair to embrace privatized **Private Finance Initiatives (PFI)** and imperialist wars in Yugoslavia, Afghanistan, and Iraq. Today, US healthcare conglomerates (**Centene Corporation / Operose Health**, **UnitedHealth Group**, and Peter Thiel's **Palantir**) take massive stakes in NHS procurement and data. Concurrently, US oligarchs like **Elon Musk**, Donald Trump, and dark-money networks (**Paul Marshall / GB News**, 55 Tufton Street) fund right-wing demagogues (**Nigel Farage / Reform UK**) to weaponize anti-migrant populism while Keir Starmer's Labour government enforces social austerity, sparking ongoing trade union strikes and million-strong Palestine solidarity demonstrations.`,

  contradictions: [
    "Decades of neoliberal austerity under Conservative and Labour administrations privatized national water, railway, and energy infrastructure, enriching City of London financial capital while real wages stagnated.",
    "British foreign policy remains tightly bound to US military hegemony, spending billions on NATO nuclear weapons and foreign wars while Keir Starmer's Labour government slashed winter fuel payments for pensioners and kept the two-child benefit cap.",
    "Racialized anti-immigrant rhetoric is weaponized by billionaire press outlets and Reform UK to divert public outrage away from corporate energy and housing monopolies toward vulnerable migrant communities.",
    "The legacy of British colonial extraction continues through London-based mining and financial conglomerates that control vast mineral reserves across Africa and South Asia."
  ],

  quickFacts: [
    { label: 'Global Imperial Peak', value: '25% of Earth\'s land area and 400M+ colonized subjects' },
    { label: 'Indian Wealth Extraction', value: '$45 Trillion extracted from India (1765 to 1938 per Utsa Patnaik [1])' },
    { label: 'US Soft Power Grooming (BAP)', value: 'British American Project (1985) cultivated New Labour into pro-NATO Atlanticism [4]' },
    { label: 'US Capitalist NHS Takeovers', value: 'Operose Health (Centene Corp US) bought 70+ GP surgeries covering 600k patients [4]' },
  ],

  timeline: [
    {
      id: 'uk-founding-union',
      title: '1. 1707 to 1760: Founding of Great Britain, 1707 Act of Union and Mercantile Capitalism',
      period: '1707 to 1760',
      categoryTag: 'pre-revolution',
      summary: '1707 Act of Union combines England and Scotland; English Civil War legacy and mercantile financial state.',
      details: `The modern British state was consolidated through the 1707 Act of Union, which merged the Kingdom of England and Kingdom of Scotland into the Kingdom of Great Britain. This political unification followed the 17th-century English Civil War (1642 to 1651) and Oliver Cromwell's brutal colonial reconquest of Ireland, which redistributed Irish land to Protestant landlord elites.

Under mercantile capitalism, the state established the Bank of England (1694) and passed strict Navigation Acts to enforce a national trade monopoly over overseas colonies. This centralized financial system provided the state credit and naval dominance necessary to secure global trade routes. [2][4]`,
      keyFigures: ['Oliver Cromwell', 'Robert Walpole', 'Queen Anne'],
      citationIds: [2, 4],
    },
    {
      id: 'uk-enclosures-primitive',
      title: '2. 1760 to 1800: Parliamentary Enclosure Acts and Primitive Accumulation of Capital',
      period: '1760 to 1800',
      categoryTag: 'policies',
      summary: 'Parliamentary Enclosures privatize common land, forcibly converting peasants into urban factory wage laborers.',
      details: `During the 18th century, Parliament passed over 4,000 Enclosure Acts, privatizing communal pastures and woodlands that peasants had used for generations.

As Karl Marx detailed in Chapter 27 of *Capital*, enclosures forcibly severed smallholders from their independent means of production. Stripped of land, millions of rural families were driven into burgeoning industrial cities like Manchester, Leeds, and Birmingham, forming the world's first landless proletariat forced to sell their labor power to factory owners to avoid starvation. [2]`,
      keyFigures: ['Karl Marx', 'Arthur Young'],
      citationIds: [2],
    },
    {
      id: 'uk-slave-trade-cotton',
      title: '3. 1760 to 1833: The Transatlantic Slave Trade and Imperial Textile Monopoly',
      period: '1760 to 1833',
      categoryTag: 'policies',
      summary: 'British merchant monopolies dominate the slave trade; colonial cotton plundered to feed Lancashire mills.',
      details: `The rapid rise of British manufacturing was fueled by the Transatlantic Slave Trade. British ports like Liverpool and Bristol grew immensely wealthy shipping manufactured goods to West Africa, kidnapping enslaved Africans to slave plantations in the Caribbean and American South, and importing raw slave-grown cotton back to Britain.

Profits extracted from human slavery provided the liquid capital that funded canal networks, iron foundries, and steam engine innovation. As Eric Williams demonstrated in *Capitalism and Slavery*, modern British industrial capitalism was directly built upon the blood and labor of enslaved Africans. [1][3]`,
      keyFigures: ['Eric Williams', 'William Wilberforce'],
      citationIds: [1, 3],
    },
    {
      id: 'uk-industrial-revolution',
      title: '4. 1800 to 1830s: The Industrial Revolution and Factory System Exploitation',
      period: '1800 to 1830s',
      categoryTag: 'policies',
      summary: 'Steam power mechanization; 14-hour factory workdays for women and children; Luddite riots and Peterloo Massacre.',
      details: `The introduction of James Watt's steam engine transformed production. In Manchester ("Cottonopolis"), workers, including young children, labored 14 to 16 hours a day in dangerous, smoke-filled textile mills under brutal factory discipline.

Early resistance was organized by the Luddites (1811 to 1816), who broke mechanized looms that destroyed artisan wages. In August 1819, British cavalry charged a peaceful gathering of 60,000 pro-democracy workers at St Peter's Field in Manchester (the Peterloo Massacre), killing 18 and injuring hundreds. [3]`,
      keyFigures: ['James Watt', 'Richard Arkwright', 'Ned Ludd'],
      citationIds: [3],
    },
    {
      id: 'uk-chartism',
      title: '5. 1838 to 1848: Chartism: The First Mass Working-Class Movement in History',
      period: '1838 to 1848',
      categoryTag: 'revolution',
      summary: 'Publishing The People\'s Charter in 1838; mass petitions, general strikes (Plug Riots), and 1848 Kennington Common rally.',
      details: `Formed in 1838, the Chartist movement was the world's first mass working-class democratic movement. Workers mobilized around "The People's Charter," demanding universal male suffrage, secret ballots, annual parliaments, and equal electoral districts.

Chartists organized massive petitions containing millions of signatures, general strikes (the 1842 Plug Riots), and armed uprisings like the 1839 Newport Rising. Although Parliament repeatedly rejected their petitions, Chartist militancy laid the foundation for trade unions and socialist politics across Europe. [3]`,
      keyFigures: ['Feargus O\'Connor', 'Ernest Jones', 'Julian Harney'],
      citationIds: [3],
    },
    {
      id: 'uk-peak-empire',
      title: '6. 1850s to 1890s: The Peak of Imperialism, Plunder of India and Marx in London',
      period: '1850s to 1890s',
      categoryTag: 'policies',
      summary: 'Direct Crown rule over India after 1857 Rebellion; Opium Wars against China; Marx writes Das Kapital in London.',
      details: `Following the suppression of the 1857 Indian Sepoy Rebellion, the British Crown took direct control of India. Economically, Britain extracted raw materials while flooding Indian markets with British manufactured goods, destroying local Indian textiles and causing devastating famines. Economist Utsa Patnaik estimates British plunder of India totalled $45 trillion between 1765 and 1938.

During this period, London became the exile home for international revolutionaries. Karl Marx spent thirty years in London, utilizing British parliamentary reports to write *Das Kapital* (1867), while Friedrich Engels published *The Condition of the Working Class in England* (1845). [1][2]`,
      keyFigures: ['Karl Marx', 'Friedrich Engels', 'Queen Victoria', 'Benjamin Disraeli'],
      citationIds: [1, 2],
    },
    {
      id: 'uk-wwi-general-strike',
      title: '7. 1914 to 1926: WWI Imperialist Slaughter and The 1926 General Strike',
      period: '1914 to 1926',
      categoryTag: 'challenges',
      summary: 'Inter-imperialist war kills 900,000 British soldiers; founding of CPGB (1920); 1926 Nine-Day General Strike.',
      details: `World War I was an inter-imperialist war between British, French, German, and Austro-Hungarian capital for colonial division. Over 900,000 British and Empire soldiers died in trench warfare. Inspired by the 1917 Russian October Revolution, British workers founded the Communist Party of Great Britain (CPGB) in 1920.

In May 1926, 1.7 million coal miners, railway workers, and industrial laborers launched the 1926 General Strike against wage cuts. The Conservative government deployed troops and warships, while Trade Union Congress (TUC) reformist leadership betrayed the strike after nine days, outlawing sympathy strikes. [4]`,
      keyFigures: ['Shapurji Saklatvala', 'Arthur Cook', 'Winston Churchill'],
      citationIds: [4],
    },
    {
      id: 'uk-wwii-bengal-famine',
      title: '8. 1939 to 1945: WWII Anti-Fascist Mobilization and The 1943 Bengal Famine',
      period: '1939 to 1945',
      categoryTag: 'challenges',
      summary: 'War against German Nazism; 1943 Bengal Famine causes 3 million Indian deaths due to wartime grain diversion.',
      details: `During World War II, the British working class mobilized against Nazi Germany, enduring aerial devastation during the Blitz (1940 to 1941).

However, British imperial policy maintained brutal colonial exploitation. In 1943, wartime grain stockpiling and scorched-earth policies under Prime Minister Winston Churchill directly caused the Bengal Famine in British India, resulting in the starvation deaths of 3 million Bengalis while grain was stockpiled for European reserves. [1][4]`,
      keyFigures: ['Winston Churchill', 'Clement Attlee'],
      citationIds: [1, 4],
    },
    {
      id: 'uk-nhs-decolonization-cia-plots',
      title: '9. 1945 to 1978: Founding the NHS, CIA and MI5 Subversion of Harold Wilson and Colonial Wars',
      period: '1945 to 1978',
      categoryTag: 'successes',
      summary: '1948 NHS creation; 1970s CIA and MI5 plots against Harold Wilson; Mau Mau internment in Kenya.',
      details: `In July 1945, returning workers swept Clement Attlee's Labour Party to power. Led by Health Minister Aneurin Bevan, the government created the National Health Service (NHS) in 1948, providing free universal healthcare funded by general taxation.

During the 1960s and 1970s, as Labour Prime Minister Harold Wilson expanded social welfare and trade union rights, US intelligence and domestic security networks targeted the elected government. Declassified documents and whistleblower testimony (including Peter Wright's *Spycatcher*) revealed that the US CIA (under James Jesus Angleton) and rogue British MI5 officers (operating through the Information Research Department, IRD) conducted psychological warfare and military coup plotting against Wilson, terrified of trade union power and potential removal of US bases. Concurrently, Britain waged brutal colonial counter-insurgencies in Kenya and Malaya. [4]`,
      keyFigures: ['Aneurin Bevan', 'Harold Wilson', 'James Jesus Angleton (CIA)'],
      citationIds: [4],
    },
    {
      id: 'uk-thatcherism-miners-strike-bap',
      title: '10. 1979 to 1996: Thatcherism, 1985 British American Project (BAP) and Militant Poll Tax Revolt',
      period: '1979 to 1996',
      categoryTag: 'challenges',
      summary: 'Thatcher crushes 1984 to 1985 NUM Miners\' strike; 1985 US-funded BAP grooms Labour elites; Militant Poll Tax victory.',
      details: `Elected in 1979, Margaret Thatcher deployed militarized police at the Battle of Orgreave to crush the 1984 to 1985 National Union of Mineworkers (NUM) strike led by Arthur Scargill.

In 1985, the US Embassy in London, alongside corporate sponsors (BP, Monsanto, Coca-Cola, British Airways), founded the **British American Project (BAP)**. BAP operated as an elite transatlantic grooming network designed to cultivate rising center-left politicians, journalists, and trade unionists, steering New Labour figures (such as Peter Mandelson, Geoff Hoon, and George Robertson, later NATO Secretary-General) away from socialist economics and anti-nuclear unilateral disarmament toward US market Atlanticism and NATO hegemony.

Concurrently, the Trotskyist **Militant Tendency** won leadership of Liverpool City Council (1983 to 1987) under Derek Hatton and organized the 14-million-strong anti-Poll Tax non-payment campaign (1989 to 1990) that forced Thatcher's resignation. [4]`,
      keyFigures: ['Margaret Thatcher', 'Arthur Scargill', 'Peter Mandelson (BAP Fellow)', 'Derek Hatton'],
      citationIds: [4],
    },
    {
      id: 'uk-new-labour-operose-blair-imperialism',
      title: '11. 1997 to 2014: New Labour, Tony Blair\'s Imperialist Wars and US Capitalist Stakes in the NHS',
      period: '1997 to 2014',
      categoryTag: 'challenges',
      summary: 'Blair abandons Clause IV; liberal humanitarian imperialism (Yugoslavia, Iraq, Afghan wars); Operose Health NHS takeovers.',
      details: `In 1994, Tony Blair removed Clause IV (public ownership commitment) from the Labour constitution, establishing neoliberal "New Labour" with the guidance of BAP-cultivated strategists like Peter Mandelson.

In his 1999 Chicago speech, Blair formulated the "Doctrine of the International Community," providing ideological cover for Western regime change. Blair co-led the 1999 NATO bombing of Yugoslavia, the 2000 military intervention in Sierra Leone, the 2001 invasion of Afghanistan, and the 2003 illegal invasion of Iraq alongside US President George W. Bush. Based on fabricated "Weapons of Mass Destruction" claims, the Iraq War caused over 1 million civilian deaths, destroyed Iraqi state infrastructure, and secured lucrative oil production contracts for British and American oil monopolies (BP, Shell).

Simultaneously, New Labour opened public healthcare to foreign capital. Operose Health (a UK subsidiary of US managed care giant **Centene Corporation**, a major corporate donor to both US Democratic and Republican funds) quietly bought up 70+ GP surgeries covering 600,000 UK patients, replacing fully qualified doctors with cheaper Physician Associates to maximize profits. US giant **UnitedHealth Group** (Optum UK) embedded into NHS commissioning, while Blair expanded predatory Private Finance Initiative (PFI) contracts, saddling NHS trusts with £80 billion+ in high-interest debt to private banks (HSBC, Barclays). [4]`,
      keyFigures: ['Tony Blair', 'Peter Mandelson', 'Gordon Brown', 'Rupert Murdoch', 'Richard Branson'],
      citationIds: [4],
    },
    {
      id: 'uk-corbyn-socialist-landscape',
      title: '12. 2015 to 2019: Jeremy Corbyn\'s Socialist Surge and Analysis of UK Socialist Tendencies',
      period: '2015 to 2019',
      categoryTag: 'revolution',
      summary: 'Corbyn elected Labour leader; 2017 manifesto; analysis of UK socialist parties (Militant, SWP, WPB, CPB).',
      details: `In 2015, anti-war MP **Jeremy Corbyn** captured the Labour leadership in a landslide grassroots surge, proposing a transformative socialist manifesto: ending NHS privatization, renationalizing rail, water, energy, and mail, abolishing university tuition fees, and halting imperialist wars.

Fearing a left-wing government, capitalist media tycoons (Rupert Murdoch, Viscount Rothermere / Daily Mail), right-wing Labour MP factionalists, and security apparatus figures launched a relentless smear campaign. The 2020 Forde Report and leaked internal emails confirmed that right-wing Labour Party bureaucrats actively sabotaged their own party's 2017 general election campaign to prevent a Corbyn victory.

The landscape of UK socialist organizations reflects distinct historical trajectories. The **Socialist Party** (formerly Militant) built deep roots in urban working-class estates, leading the anti-Poll Tax movement that brought down Thatcher in 1990 before facing electoral isolation under TUSC. The **Socialist Workers Party (SWP)**, adhering to Tony Cliff's state capitalism theory, organized major anti-fascist campaigns through the Anti-Nazi League and anchored the 2003 Stop the War Coalition that mobilized over one million people against the Iraq War, though it subsequently faced major splits in 2013 over leadership scandals. The **Workers Party of Britain (WPB)**, founded in 2019 by George Galloway, combines anti-imperialist, anti-NATO foreign policy with working-class interventionism, achieving prominence when Galloway won the February 2024 Rochdale by-election. The **Communist Party of Britain (CPB)** maintains the *Morning Star* daily Marxist newspaper, providing trade union coverage across Britain. [4]`,
      keyFigures: ['Jeremy Corbyn', 'George Galloway', 'Tony Cliff (SWP Founder)', 'Ted Grant (Militant Founder)'],
      citationIds: [4],
    },
    {
      id: 'uk-reform-farage-musk-trump-present',
      title: '13. 2019 to Present: Reform UK Dark-Money Networks, Starmer Austerity and Mass Protests',
      period: '2019 to Present',
      categoryTag: 'challenges',
      summary: '2022 to 2026 rail and NHS strikes; Reform UK dark money and August 2024 riots; Starmer Labour austerity and anti-war marches.',
      details: `Following 14 years of Conservative austerity, severe inflation triggered historic strike waves from 2022 through 2026, as rail workers (RMT led by Mick Lynch), nurses (RCN), teachers, and junior doctors (BMA) shut down infrastructure resisting real-term wage cuts. Simultaneously, between 2023 and 2026, over one million people repeatedly marched through London in national Palestine solidarity demonstrations organized by the Palestine Solidarity Campaign and Stop the War Coalition, opposing British arms exports to Israel and RAF spy flights from Cyprus despite heavy police restrictions and arrests of anti-war activists.

In the July 2024 General Election, Nigel Farage's **Reform UK** won 4.1 million votes (14.3% national vote) and 5 MPs, backed by hedge fund tycoon **Paul Marshall** (owner of GB News and UnHerd), property developer **Richard Tice**, and libertarian think tanks based at **55 Tufton Street** (Institute of Economic Affairs, Center for Policy Studies) funded by US fossil fuel and private healthcare lobbies. In August 2024, tech oligarch **Elon Musk** weaponized his platform X to amplify far-right agitators (Tommy Robinson) during racist anti-immigrant riots across English towns, which were met by massive working-class anti-fascist counter-demonstrations. Meanwhile, **Keir Starmer's** Labour government deepened neoliberal austerity: slashing winter fuel payments for 10 million pensioners, retaining the two-child benefit cap, suspending left-wing MPs who voted against child poverty cuts, and handing Peter Thiel's US defense contractor **Palantir** a £330 million NHS data contract, triggering renewed union and public-sector protests. [4]`,
      keyFigures: ['Keir Starmer', 'Nigel Farage', 'Elon Musk', 'Peter Thiel (Palantir)', 'Paul Marshall (GB News)', 'Mick Lynch (RMT Leader)'],
      citationIds: [4],
    },
  ],

  sources: [
    {
      id: 1,
      label: 'How British Colonialism Plundered $45 Trillion From India',
      publisher: 'Utsa Patnaik / Columbia University Press (Disintegrating Democracy at 50)',
      year: '2018',
      url: 'https://www.aljazeera.com/opinions/2018/12/19/how-britain-stole-45-trillion-from-india',
      excerpt: 'Detailed economic calculation revealing that between 1765 and 1938, Britain drained $45 trillion from India through trade monopoly tax mechanisms.',
    },
    {
      id: 2,
      label: 'Capital: Critique of Political Economy (Volume I, Part VIII: So-Called Primitive Accumulation)',
      publisher: 'Karl Marx / Progress Publishers',
      year: '1867',
      excerpt: 'Marx\'s definitive analysis of Parliamentary Enclosures, peasant eviction, and capital accumulation in Great Britain.',
    },
    {
      id: 3,
      label: 'The Condition of the Working Class in England',
      publisher: 'Friedrich Engels / Foreign Languages Publishing House',
      year: '1845',
      excerpt: 'Engels\' landmark empirical study of factory working conditions, child labor, health, and Chartist resistance in Manchester.',
    },
    {
      id: 4,
      label: 'The Secretive US Embassy-Backed Group Cultivating the British Left and British Imperial Politics',
      publisher: 'Declassified UK (Matt Kennard) and Pluto Press',
      year: '2024',
      url: 'https://www.declassifieduk.org/the-secretive-us-embassy-backed-group-cultivating-the-british-left/',
      excerpt: 'Investigative reporting detailing the British American Project (BAP), CIA plots against Harold Wilson, Centene/Operose NHS acquisitions, and Elon Musk / Reform UK dark-money funding.',
    },
  ],
};
