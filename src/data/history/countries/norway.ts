import type { CountryData } from '../types';

export const norwayData: CountryData = {
  id: 'norway',
  name: "Norway",
  shortName: 'Norway',
  flagEmoji: '🇳🇴',
  flagUrl: '/images/flags/norway.svg',
  coverImage: '/images/history/norway.jpg',
  category: 'global-north',
  era: '1905 – Present',
  capital: 'Oslo',
  keyLeaders: ['Einar Gerhardsen', 'Gro Harlem Brundtland', 'Jens Stoltenberg', 'Jonas Gahr Støre'],
  governingParty: "Labour Party",
  governingIdeology: "Social Democracy",
  isHistoricState: false,

  officialGovUrl: 'https://www.regjeringen.no/en/',
  overviewText: `Norway represents an advanced petro-capitalist state whose social democratic welfare model is underpinned by state oil extraction and global financial investments.

Following independence from Sweden in 1905, the Labour Party (*Arbeiderpartiet*) under Einar Gerhardsen built the post-WWII state, expanding public healthcare and state planning. The discovery of North Sea oil in 1969 (Ekofisk field) transformed the economy. The state created **Statoil** (now Equinor) to retain majority public ownership over petroleum resources.

In 1990, Norway established the Government Pension Fund Global—now the world's largest **Sovereign Wealth Fund ($1.6+ Trillion)**, holding shares in over 9,000 global corporations. While funding high domestic social welfare, Norway is a founding member of NATO (former PM Jens Stoltenberg served as NATO Secretary-General 2014–2024), fully aligned with US imperialist military operations while profiting from European energy crises.`,

  contradictions: [
    "State energy revenues managed through the sovereign wealth fund invest heavily in global financial markets, profiting from international capital accumulation.",
    "Norway participates actively in NATO military interventions and imperialist defense alliances.",
    "Indigenous Sámi reindeer herders resist state-backed wind energy and mining projects that encroach upon traditional northern territories.",
    "Domestic high living standards depend partly on foreign capital yields and offshore energy exports to Western European markets."
  ],

  quickFacts: [
    { label: '1969 North Sea Oil Boom', value: 'Discovered Ekofisk oil field; established state oil monopoly Statoil (Equinor) [1]' },
    { label: '$1.6 Trillion Wealth Fund', value: 'World\'s largest sovereign wealth fund investing North Sea oil surplus in global capital markets [2]' },
    { label: 'Founding NATO Member (1949)', value: 'Key northern NATO flank; former Labour PM Jens Stoltenberg served as NATO Secretary-General [3]' },
    { label: 'Post-2022 Energy Profiteering', value: 'Replaced Russian gas imports, generating record petroleum revenues during European energy crisis [4]' },
  ],

  timeline: [
    {
      id: 'norway-1945-gerhardsen-labour-welfare',
      title: '1. 1945 – 1968: Post-War Labour Hegemony, State Industrialization & Founding NATO Member',
      period: '1945 – 1968',
      categoryTag: 'policies',
      summary: 'Einar Gerhardsen Labour administration; founding NATO in 1949; expanding public healthcare.',
      details: `Under Prime Minister Einar Gerhardsen ('Father of the Nation'), the Labour Party governed for two decades after WWII. Norway used Marshall Plan funds to build state-owned aluminum smelters (Årdal og Sunndal Verk) and hydro-electric power stations.

Despite strong left-wing opposition within the trade unions, Norway joined NATO as a founding member in 1949, anchoring its security apparatus to US imperialism. [1]`,
      keyFigures: ['Einar Gerhardsen', 'Halvard Lange'],
      citationIds: [1],
    },
    {
      id: 'norway-1969-statoil-sovereign-fund',
      title: '2. 1969 – 1995: North Sea Oil Discovery, Statoil Monopoly & $1.6T Sovereign Wealth Fund',
      period: '1969 – 1995',
      categoryTag: 'successes',
      summary: '1969 Ekofisk oil discovery; 1972 Statoil founding; 1990 Oil Fund created to invest surplus in global equities.',
      details: `In December 1969, Phillips Petroleum struck oil at Ekofisk in the North Sea. Parliament established Statoil in 1972, mandating 50%+ state equity in oil fields to prevent foreign corporate plunder.

In 1990, Parliament established the Petroleum Fund (now Government Pension Fund Global) to invest oil revenues in foreign stocks and bonds, creating a $1.6+ trillion financial reservoir that owns 1.5% of all publicly listed global companies. [2]`,
      keyFigures: ['Gro Harlem Brundtland', 'Farouk al-Kasim (Petroleum Architect)'],
      citationIds: [2],
    },
    {
      id: 'norway-2000-present-nato-leadership-energy-windfalls',
      title: '3. 2000 – Present: NATO Atlanticism, Jens Stoltenberg & Post-2022 European Energy Windfalls',
      period: '2000 – Present',
      categoryTag: 'challenges',
      summary: 'Jens Stoltenberg NATO Secretary-General (2014-2024); windfall oil/gas profits following 2022 Western sanctions.',
      details: `Norway maintained a strict Atlanticist alignment. Former Labour Prime Minister Jens Stoltenberg served as NATO Secretary-General from 2014 to 2024, overseeing NATO eastward expansion and proxy warfare against Russia.

Following the 2022 Western sanctions on Russian gas, Norway became Europe's largest natural gas supplier, generating over $100 billion in windfall petroleum profits in 2022 alone. [3][4]`,
      keyFigures: ['Jens Stoltenberg', 'Jonas Gahr Støre', 'Erna Solberg'],
      citationIds: [3, 4],
    },
  ],

  sources: [
    {
      id: 1,
      label: 'Norway in the Modern World: From Periphery to Wealthy Petro-State',
      publisher: 'Helge Pharo / Scandinavian University Press',
      year: '2008',
      excerpt: 'Historical study of post-WWII Labour Party state planning, NATO founding, and industrial expansion.',
    },
    {
      id: 2,
      label: 'The Oil Fund: How Norway Created the World\'s Largest Sovereign Wealth Fund',
      publisher: 'Norges Bank Investment Management (NBIM) Official Reports',
      year: '2023',
      excerpt: 'Official data on the $1.6+ trillion Sovereign Wealth Fund holding 1.5% of global equities.',
    },
    {
      id: 3,
      label: 'NATO Operations and Norwegian Defense Policy',
      publisher: 'Norwegian Institute of International Affairs (NUPI)',
      year: '2021',
      excerpt: 'Analysis of Jens Stoltenberg\'s tenure as NATO Secretary-General and Norway\'s northern flank military posture.',
    },
    {
      id: 4,
      label: 'European Energy Crisis & Norwegian Oil Gas Windfall Report',
      publisher: 'International Energy Agency (IEA) & Statistics Norway',
      year: '2023',
      excerpt: 'Documentation of record $100B+ oil/gas revenues generated following 2022 European energy shifts.',
    },
  ],
};
