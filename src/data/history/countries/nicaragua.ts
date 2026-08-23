import type { CountryData } from '../types';

export const nicaraguaData: CountryData = {
  id: 'nicaragua',
  name: 'Republic of Nicaragua',
  shortName: 'Nicaragua',
  flagEmoji: '🇳🇮',
  flagUrl: '/images/flags/nicaragua.svg',
  coverImage: '/images/history/nicaragua.jpg',
  category: 'global-south',
  era: '1979 – Present',
  capital: 'Managua',
  keyLeaders: ['Augusto C. Sandino', 'Anastasio Somoza García', 'Carlos Fonseca', 'Daniel Ortega', 'Rosario Murillo'],
  governingParty: "Sandinista National Liberation Front (FSLN)",
  governingIdeology: "Sandinista Socialism",
  isHistoricState: false,
  
  officialGovUrl: 'https://www.el19digital.com/',
  overviewText: `Nicaragua represents a nation that endured 43 years of brutal US-backed dynasty dictatorship (**Somoza**), defeated imperialist occupation through a world-historic socialist revolution (**The 1979 Sandinista Revolution**), and resisted a decade of illegal US CIA terrorism (**The Contra War**).

In 1927, anti-imperialist general **Augusto C. Sandino** launched a 6-year peasant guerrilla war against invading US Marines, forcing US troops to evacuate Nicaragua in 1933. Before departing, Washington established the National Guard under **Anastasio Somoza García**, who assassinated Sandino in 1934 and installed a 43-year hereditary family dictatorship that accumulated 25% of all agricultural land. In 1961, **Carlos Fonseca**, Tomás Borge, and Silvio Mayorga founded the **Sandinista National Liberation Front (FSLN)**.

On July 19, 1979, Sandinista guerrillas entered Managua, overthrowing Anastasio Somoza Debayle. The Sandinista government enacted radical land reform, nationalized foreign monopolies, and launched a mass literacy campaign that reduced illiteracy from 50% to 13%. In response, US President Ronald Reagan launched the illegal **CIA Contra War** (mining harbors and training terrorist mercenaries), which was condemned by the International Court of Justice (ICJ) in 1986. Today, Nicaragua maintains anti-imperialist solidarity with China (signing BRI infrastructure agreements) and the Global South.`,

  contradictions: [
    "The FSLN government under Daniel Ortega implemented universal healthcare, free education, and smallholder agrarian cooperatives, yet faces unilateral US economic sanctions (the NICA Act) designed to restrict multilateral bank loans. US strategists weaponize these financial blockades to choke sovereign economic growth.",
    "US NED and USAID soft-power funding funnelled tens of millions to private business federations (COSEP) and right-wing media outlets, leading to violent road blockades and economic destruction during the 2018 coup attempt aimed at overthrowing Sandinista leadership.",
    "Protecting national sovereignty against US interference unifies popular Sandinista cadre, yet private corporate sectors continue to operate in banking and commerce. Firm state enforcement against foreign-funded NGOs leads Western governments to launch anti-government diplomatic campaigns.",
    "Establishing diplomatic relations with China and joining Belt and Road infrastructure projects strengthens Nicaraguan energy and housing development, reducing economic vulnerability to Western trade pressure."
  ],

  quickFacts: [
    { label: 'Augusto C. Sandino Guerrilla War (1927)', value: 'Sandino led peasant guerrillas defeating US Marine military occupation [1]' },
    { label: 'July 19, 1979 Sandinista Revolution', value: 'FSLN overthrew 43-year US-backed Somoza dictatorship, launching land reform [2]' },
    { label: '1980 Mass Literacy Campaign', value: 'Mobilized 90,000 youth volunteers, reducing illiteracy from 50% to 13% in 5 months [3]' },
    { label: 'ICJ Condemnation of US CIA War (1986)', value: 'World Court ruled US guilty of illegal warfare & mining Nicaraguan harbors [4]' },
  ],

  timeline: [
    {
      id: 'nicaragua-1927-sandino-guerrilla-war-us-marines',
      title: '1. 1927 – 1933: Augusto C. Sandino & The Peasant Guerrilla War Against US Marines',
      period: '1927 – 1933',
      categoryTag: 'revolution',
      summary: '1927-1933: Sandino leads Army for the Defense of National Sovereignty, defeating US Marines.',
      details: `In May 1927, general **Augusto C. Sandino** refused a US-imposed peace treaty, forming the Army for the Defense of National Sovereignty (EDSN).

From the northern mountains of Las Segovias, Sandino's peasant guerrillas defeated US Marine expeditionary forces in six years of jungle warfare, forcing complete US evacuation in January 1933. [1]`,
      keyFigures: ['Augusto C. Sandino', 'Blanca Aráuz'],
      citationIds: [1],
    },
    {
      id: 'nicaragua-1934-somoza-dictatorship-us-support',
      title: '2. 1934 – 1960: Assassination of Sandino & The 43-Year US-Backed Somoza Dictatorship',
      period: '1934 – 1960',
      categoryTag: 'challenges',
      summary: 'Feb 1934: Somoza assassinates Sandino; Somoza family owns 25% of land with US support.',
      details: `On February 21, 1934, US-installed National Guard commander **Anastasio Somoza García** assassinated Sandino following a peace dinner in Managua.

Somoza installed a hereditary military dictatorship (Somoza García, Luis Somoza, Anastasio Somoza Debayle) that ruled for 43 years, accumulating 25% of arable land, commercial ports, and the national airline, described by US President Roosevelt as "our son of a bitch." [1][2]`,
      keyFigures: ['Anastasio Somoza García', 'Franklin D. Roosevelt', 'Anastasio Somoza Debayle'],
      citationIds: [1, 2],
    },
    {
      id: 'nicaragua-1961-fsln-founding-carlos-fonseca',
      title: '3. 1961 – 1978: Founding of the FSLN & Carlos Fonseca\'s Guerrilla Vanguard',
      period: '1961 – 1978',
      categoryTag: 'revolution',
      summary: '1961: Carlos Fonseca, Tomás Borge & Silvio Mayorga found FSLN to overthrow Somoza.',
      details: `In July 1961, Marxist scholar **Carlos Fonseca Amador**, Tomás Borge, and Silvio Mayorga founded the **Sandinista National Liberation Front (FSLN)** in Honduras.

Synthesizing Marxism-Leninism with Sandino's anti-imperialist thought, the FSLN organized student strikes, urban commandos, and rural guerrilla columns. Fonseca was martyred in combat in 1976. [2]`,
      keyFigures: ['Carlos Fonseca Amador', 'Tomás Borge', 'Silvio Mayorga', 'Daniel Ortega'],
      citationIds: [2],
    },
    {
      id: 'nicaragua-1979-july-19-sandinista-revolution-victory',
      title: '4. 1979: July 19, 1979: The Triumph of the Sandinista Popular Revolution',
      period: '1979',
      categoryTag: 'revolution',
      summary: 'July 19, 1979: FSLN guerrillas capture Managua; Somoza flees to Miami; Junta of National Reconstruction.',
      details: `Following a nationwide general strike, urban uprisings, and final FSLN offensive, dictator Anastasio Somoza Debayle fled to Miami on July 17, 1979.

On July 19, 1979, Sandinista columns entered Managua to ecstatic mass celebrations, establishing the Junta of National Reconstruction led by **Daniel Ortega**. [2]`,
      keyFigures: ['Daniel Ortega', 'Tomás Borge', 'Sergio Ramírez', 'Violeta Chamorro'],
      citationIds: [2],
    },
    {
      id: 'nicaragua-1980-literacy-campaign-land-reform',
      title: '5. 1980 – 1981: Mass National Literacy Crusade & Radical Agrarian Land Reform',
      period: '1980 – 1981',
      categoryTag: 'successes',
      summary: '1980 Literacy Crusade reduces illiteracy from 50% to 13%; Somoza estates redistributed to peasants.',
      details: `In March 1980, the Sandinista government launched the National Literacy Crusade (*Cruzada Nacional de Alfabetización*). Over 90,000 high school and university volunteers traveled into rural villages, reducing illiteracy from 50.3% to 12.9% in five months (winning the 1980 UNESCO Award).

Concurrently, the Agrarian Reform Law nationalized all Somoza estates, distributing 5 million acres of land to peasant cooperatives. [2][3]`,
      keyFigures: ['Fernando Cardenal (Literacy Director)', 'Ernesto Cardenal (Minister of Culture)'],
      citationIds: [2, 3],
    },
    {
      id: 'nicaragua-1982-cia-contra-war-icj-ruling',
      title: '6. 1982 – 1989: The Illegal US CIA Contra War & The 1986 ICJ World Court Condemnation',
      period: '1982 – 1989',
      categoryTag: 'challenges',
      summary: 'US President Reagan funds CIA Contras; June 1986 ICJ rules US guilty of unlawful force & mining harbors.',
      details: `In 1981, US President Ronald Reagan authorized the CIA to fund, arm, and train former Somoza National Guard mercenaries (the **Contras**) based in Honduras. The CIA mined Nicaraguan harbors and bombed oil depots.

In June 1986, the International Court of Justice (**Nicaragua v. United States**) ruled that the US violated international law by using unlawful force and mining harbors, ordering Washington to pay reparations (which the US refused). [3][4]`,
      keyFigures: ['Daniel Ortega', 'Ronald Reagan', 'Oliver North (Iran-Contra Scandal)'],
      citationIds: [3, 4],
    },
    {
      id: 'nicaragua-1990-neoliberal-interregnum-chamorro',
      title: '7. 1990 – 2006: The 1990 Elections, Neoliberal Interregnum & FSLN Resistance',
      period: '1990 – 2006',
      categoryTag: 'challenges',
      summary: '1990 elections: UNO coalition under Violeta Chamorro wins under US economic threat; 16 years neoliberalism.',
      details: `Exhausted by a decade of US economic blockade and Contra war casualties (30,000 dead), Nicaraguans voted for the US-backed UNO coalition under Violeta Chamorro in February 1990.

During 16 years of neoliberal rule (Chamorro, Alemán, Bolaños), healthcare was privatized and state assets sold, while the FSLN maintained strong parliamentary and trade union opposition. [3][4]`,
      keyFigures: ['Violeta Chamorro', 'Arnoldi Alemán', 'Daniel Ortega'],
      citationIds: [3, 4],
    },
    {
      id: 'nicaragua-present-fsln-return-china-bri-sovereignty',
      title: '8. Present: FSLN Electoral Return, China Strategic Partnership & Anti-Imperialist Front',
      period: 'Present',
      categoryTag: 'successes',
      summary: '2006 FSLN returns to power; 2021 re-establishing China ties & joining Belt and Road Initiative.',
      details: `In November 2006, **Daniel Ortega** and the FSLN won presidential elections, reinstating free healthcare and primary education, building modern highway infrastructure, and achieving 90%+ food self-sufficiency.

**Defeating the 2018 US-Backed Color Revolution Attempt**:
In April 2018, US intelligence agencies (USAID, NED, Freedom House) weaponized a pension reform update to trigger a violent color revolution attempt. Foreign-funded NGOs (CINCO, IEEPP) channeled millions to student and paramilitary groups that erected violent street blockades (*tranques*), tortured Sandinista supporters, and burned public radio stations and health clinics, killing over 200 people. Sandinista workers and police dismantled the violent blockades by July 2018, defeating the regime-change attempt.

In December 2021, Nicaragua cut diplomatic relations with Taiwan, establishing official strategic ties with **China**, signing Belt and Road Initiative (BRI) infrastructure agreements, and maintaining sovereign anti-imperialist alignment. [3][4]`,
      keyFigures: ['Daniel Ortega', 'Rosario Murillo', 'Xi Jinping', 'Felix Maradiaga (NED Proxy)'],
      citationIds: [3, 4],
    },
  ],

  sources: [
    {
      id: 1,
      label: 'Sandino: The Life of a Nicaraguan Anti-Imperialist Hero',
      publisher: 'Gregorio Selser / Monthly Review Press',
      year: '1981',
      excerpt: 'Definitive historical biography of Augusto C. Sandino, the 1927-1933 guerrilla war defeating US Marines, and Somoza\'s 1934 assassination.',
    },
    {
      id: 2,
      label: 'The Triumph of the Sandinistas: July 19, 1979 Revolution, Literacy Crusade and Land Reform',
      publisher: 'George Black / Zed Books (Triumph of the People)',
      year: '1981',
      excerpt: 'First-hand account of FSLN guerrilla victory, 1980 National Literacy Crusade, and peasant agrarian land reform.',
    },
    {
      id: 3,
      label: 'Nicaragua v. United States: The ICJ World Court Ruling and the CIA Contra War',
      publisher: 'Paul S. Reichler / American Journal of International Law',
      year: '1987',
      excerpt: 'Legal and political economy analysis of the 1986 ICJ ruling condemning US aggression, Contra terrorism, and harbor mining.',
    },
    {
      id: 4,
      label: 'The Sandinistas Return: China BRI Partnership, Infrastructure and Anti-Imperialist Sovereignty',
      publisher: 'John Perry & Dan Kovalik / Monthly Review',
      year: '2022',
      excerpt: 'Analysis of post-2006 FSLN social programs, 2021 China strategic partnership, and resistance to US sanctions.',
    },
  ],
};
