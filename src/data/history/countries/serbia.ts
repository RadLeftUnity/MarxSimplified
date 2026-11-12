import type { CountryData } from '../types';

export const serbiaData: CountryData = {
  id: 'serbia',
  name: "Serbia",
  shortName: 'Serbia',
  flagEmoji: '🇷🇸',
  flagUrl: '/images/flags/serbia.svg',
  coverImage: '/images/history/serbia.jpg',
  category: 'global-south',
  era: '2006 to Present',
  capital: 'Belgrade',
  keyLeaders: ['Slobodan Milošević', 'Zoran Đinđić', 'Boris Tadić', 'Aleksandar Vučić'],
  governingParty: "Serbian Progressive Party (SNS)",
  governingIdeology: 'Capitalism',
  isHistoricState: false,

  counterpartInfo: {
    id: 'yugoslavia',
    name: 'Socialist Federal Republic of Yugoslavia (SFRY, 1945 to 1992)',
    label: 'Historic Socialist Equivalent',
    contrastText: 'Socialist Yugoslavia (SFRY 1945 to 1992) pioneered Workers\' Self-Management and Non-Aligned Movement leadership across a 6-republic federation, contrasting with post-1990 IMF debt destruction, 1999 NATO carpet-bombing, and modern post-socialist Balkan fragmentation.',
  },

  officialGovUrl: 'https://www.srbija.gov.rs/',
  overviewText: `The modern Republic of Serbia emerged from the violent Western-backed breakup of the Socialist Federal Republic of Yugoslavia and the October 2000 US-engineered **Bulldozer Revolution**.

Following the 1999 78-day NATO bombing campaign (Operation Allied Force) that pulverized Yugoslav public infrastructure, the US State Department and USAID funneled over $40 million to depose Slobodan Milošević. Subsequent post-2000 neoliberal administrations liquidated socially owned Yugoslav enterprises, selling mines, telecommunications, and factories to Western and Gulf transnational capital.

Under Aleksandar Vučić (2014 to 2026), Serbia operated a multi-vector foreign policy: maintaining economic integration with the EU while refusing to join NATO or Western sanctions against Russia, and hosting major Chinese Belt and Road infrastructure projects (the Belgrade-Budapest high-speed railway and Smederevo Steel Mill). Between 2024 and 2026, mass environmental blockades against Western lithium mining cartels (Rio Tinto) and an unprecedented nationwide student-worker protest movement triggered by the fatal November 2024 Novi Sad railway station collapse convulsed the country.`,

  contradictions: [
    "The 1999 78-day illegal NATO bombing campaign destroyed civil infrastructure and forcibly partitioned Kosovo to privatize public mining combines.",
    "Post-2000 neoliberal governments privatized state factories under Western pressure, creating severe regional unemployment and industrial decline.",
    "The state balances European Union integration demands with popular public resistance to NATO and strategic trade ties with China and Russia.",
    "Foreign lithium extraction deals with Rio Tinto for European Union electric vehicle supply chains and deadly deregulation of public infrastructure construction (culminating in the November 2024 Novi Sad railway station collapse) triggered historic student occupations and general strikes."
  ],

  quickFacts: [
    { label: '2000 US Bulldozer Revolution', value: 'USAID and NED funded Otpor! youth movement to depose Milosevic and open state to Western capital [1]' },
    { label: 'Post-Socialist Privatization', value: 'Liquidated Yugoslav social property, transferring mines and factories to foreign monopolies [2]' },
    { label: 'China BRI and Railway Hub', value: 'Major hub for China\'s Belt and Road (Belgrade-Budapest High-Speed Rail and Smederevo Steel) [3]' },
    { label: 'Rio Tinto and Novi Sad Protests', value: 'Mass anti-lithium blockades and 2024 to 2026 student-worker strikes over Novi Sad tragedy [4]' },
  ],

  timeline: [
    {
      id: 'serbia-2000-bulldozer-revolution-neoliberalism',
      title: '1. 2000 to 2007: The 2000 Bulldozer Revolution and Mass Privatization of Social Property',
      period: '2000 to 2007',
      categoryTag: 'challenges',
      summary: '2000 US-backed Bulldozer Revolution; Zoran Đinđić government liquidates Yugoslav state enterprises.',
      details: `On October 5, 2000, US-backed groups executed the **Bulldozer Revolution**, deposing Slobodan Milošević. US agencies (USAID, NED, IRI) had funneled $40M+ into opposition parties and the **Otpor!** youth movement.

Installed Prime Minister Zoran Đinđić implemented swift IMF-mandated shock therapy, selling off 2,000+ socially owned enterprises to foreign cartels for pennies. Đinđić was assassinated in March 2003 by organized crime networks linked to former security structures. [1][2]`,
      keyFigures: ['Slobodan Milošević', 'Zoran Đinđić', 'Vojislav Koštunica', 'Boris Tadić'],
      citationIds: [1, 2],
    },
    {
      id: 'serbia-2008-kosovo-secession-eu-talks',
      title: '2. 2008 to 2013: The 2008 Unilateral Secession of Kosovo and EU Integration Push',
      period: '2008 to 2013',
      categoryTag: 'challenges',
      summary: '2008 Western-backed unilateral declaration of independence by Kosovo; IMF austerity programs.',
      details: `In February 2008, under US and NATO sponsorship, Kosovo unilaterally declared independence from Serbia, violating UN Security Council Resolution 1244. Serbia refused recognition, supported by UN vetoes from China and Russia.

Concurrently, the Boris Tadić government pursued EU accession, accepting IMF austerity packages that cut public sector pensions and health spending. [2][3]`,
      keyFigures: ['Boris Tadić', 'Vuk Jeremić', 'Hashim Thaçi'],
      citationIds: [2, 3],
    },
    {
      id: 'serbia-2014-present-vucic-china-rio-tinto',
      title: '3. 2014 to 2023: Aleksandar Vučić, China BRI Infrastructure and Rio Tinto Lithium Resistance',
      period: '2014 to 2023',
      categoryTag: 'challenges',
      summary: 'Vučić multi-vector diplomacy; China BRI investments; mass anti-Rio Tinto lithium mining strikes.',
      details: `From 2014 onward, Aleksandar Vučić and the SNS dominated Serbian politics. Serbia refused to join Western sanctions against Russia in 2022, maintaining direct flights and energy supplies.

China became Serbia's largest foreign investor, purchasing the Smederevo Steel Mill (HBIS) and Bor Copper Mine (Zijin), and building the Belgrade-Budapest high-speed railway. Between 2021 and 2024, mass strikes and highway blockades fought the government's attempts to approve Anglo-Australian mining giant **Rio Tinto's** $2.4 billion Jadar Valley lithium mine project backed by German and EU automakers. [3][4]`,
      keyFigures: ['Aleksandar Vučić', 'Xi Jinping', 'Ana Brnabić'],
      citationIds: [3, 4],
    },
    {
      id: 'serbia-2024-present-novi-sad-collapse-student-general-strikes',
      title: '4. 2024 to Present: Novi Sad Station Collapse, Mass Student Occupations and General Strikes',
      period: '2024 to Present',
      categoryTag: 'challenges',
      summary: 'Nov 1, 2024 Novi Sad station roof collapse kills 16; nationwide student blockades, general strikes and political crisis.',
      details: `In July 2024, after the Serbian government signed a strategic lithium extraction memorandum in Belgrade with German Chancellor Olaf Scholz and the European Union to revive Rio Tinto's Jadar mine, tens of thousands of workers and farmers blockaded railways and highways across Serbia against turning the country into a sacrificial mining colony for Western European automakers.

On November 1, 2024, the newly renovated concrete canopy at the Novi Sad main railway station collapsed, killing 16 people. Public outrage over state cronyism, subcontracting corruption, and safety deregulation erupted into the largest sustained protest wave in Serbia since 2000. University and high school students occupied over 60 university faculties nationwide, joined by farmers driving tractors into Belgrade, teachers, lawyers, and trade unions staging nationwide general strikes in 2025 and 2026 that forced the resignation of Prime Minister Miloš Vučević and culminated in the 2026 snap election crisis. [4]`,
      keyFigures: ['Aleksandar Vučić', 'Miloš Vučević', 'Olaf Scholz'],
      citationIds: [4],
    },
  ],

  sources: [
    {
      id: 1,
      label: 'The Bulldozer Revolution: US Intervention in Serbian Elections',
      publisher: 'National Endowment for Democracy (NED) and Pluto Press',
      year: '2002',
      excerpt: 'Documenting USAID, IRI, and NED million-dollar funding of Otpor! activist networks.',
    },
    {
      id: 2,
      label: 'Post-Socialist Transformation in Serbia: Privatization and Class Restructuring',
      publisher: 'Mladen Lazić / Central European University Press',
      year: '2011',
      excerpt: 'In-depth study of the destruction of Yugoslav social property and the creation of peripheral comprador capital.',
    },
    {
      id: 3,
      label: 'China\'s Belt and Road Initiative in the Western Balkans: The Case of Serbia',
      publisher: 'European Council on Foreign Relations (ECFR)',
      year: '2023',
      excerpt: 'Analysis of HBIS Smederevo Steel, Zijin Copper, and high-speed rail integration.',
    },
    {
      id: 4,
      label: 'Environmental Class Struggle and the Novi Sad Movement in Serbia (2021 to 2026)',
      publisher: 'Balkan Insight and Institute of Political Ecology',
      year: '2025',
      excerpt: 'Documentation of mass working-class blockades against Rio Tinto lithium extraction and the 2024 to 2026 Novi Sad student and general strikes.',
    },
  ],
};
