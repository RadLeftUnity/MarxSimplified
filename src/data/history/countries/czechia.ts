import type { CountryData } from '../types';

export const czechiaData: CountryData = {
  id: 'czechia',
  name: 'Czech Republic (Czechia)',
  shortName: 'Czechia',
  flagEmoji: '🇨🇿',
  flagUrl: '/images/flags/czechoslovakia.svg',
  coverImage: '/images/history/czechoslovakia.jpg',
  category: 'global-north',
  era: '1993 – Present',
  capital: 'Prague',
  keyLeaders: ['Václav Havel', 'Václav Klaus', 'Miloš Zeman', 'Petr Fiala', 'Petr Pavel'],
  governingParty: 'SPOLU (Civic Democratic Party Coalition)',
  governingIdeology: 'Neoliberalism',
  isHistoricState: false,
  officialGovUrl: 'https://www.vlada.cz/en/',

  counterpartInfo: {
    id: 'czechoslovakia',
    name: 'Czechoslovak Socialist Republic (1948–1990)',
    label: 'Historic Socialist Equivalent',
    contrastText: 'Socialist Czechoslovakia (1948–1990) maintained state industrial ownership, low foreign debt, & universal social rights across a federal republic, whereas modern Czechia underwent 1990s voucher privatization, split from Slovakia in 1993, and joined NATO in 1999.',
  },

  overviewText: `Following the 1989 Velvet Revolution and the 1993 Velvet Divorce that split Czechoslovakia, the modern Czech Republic (Czechia) executed rapid neoliberal privatization under Prime Minister Václav Klaus. Through coupon voucher privatization (*kupónová privatizace*), state industrial powerhouses (including Škoda Auto, heavy metallurgy, and chemical plants) were sold off to foreign Western European corporations, primarily German automotive conglomerates.

Internationally, Czechia joined NATO in 1999 and the European Union in 2004, serving as a key industrial manufacturing hub integrated into the German industrial supply chain. While Czechia maintains relatively high industrial productivity in Central Europe, post-socialist restructuring led to rising housing costs, deregulation of utility prices, and total alignment with Western NATO foreign policy.`,

  geopolitics: {
    imperialismDetails: 'Modern Czechia operates as an integrated manufacturing subcontracting hinterland for German industrial capital and a committed NATO member participating in foreign military deployments.',
    imperialismLinks: [
      {
        label: 'Czech Defense Strategy and NATO Integration Report',
        url: 'https://www.mocr.army.cz/en/',
        publisher: 'Ministry of Defence of the Czech Republic',
        description: 'Documentation of Czech defense budgets, NATO operations, and military modernizations.',
      },
    ],
    allies: ['United States', 'Germany', 'NATO Alliance', 'European Union', 'Slovakia'],
    enemies: ['Russian Federation'],
  },

  quickFacts: [
    { label: '1990s Coupon Privatization', value: 'Privatized state factories into Western corporate hands (Škoda acquired by Volkswagen) [1]' },
    { label: '1993 Velvet Divorce Split', value: 'Dismantled Czechoslovak federation, creating separate Czech & Slovak capitalist states [2]' },
    { label: '1999 NATO Accession', value: 'Joined NATO in 1999, hosting Western military infrastructure & aligning foreign policy [3]' },
  ],

  timeline: [
    {
      id: 'czechia-privatization-1990s',
      title: '1. 1991: Voucher Privatization & Western Corporate Acquisition',
      period: '1991 – 1995',
      categoryTag: 'policies',
      summary: 'Václav Klaus coupon privatization; foreign ownership of Škoda Auto; market deregulation.',
      details: `In the early 1990s, Finance Minister Václav Klaus orchestrated coupon voucher privatization. Citizens received vouchers to buy shares in state enterprises, which were quickly consolidated by private investment funds.

Foreign multinational corporations purchased key Czech industrial assets at bargain prices: Volkswagen acquired Škoda Auto, while German, French, and Austrian banks bought the entire national banking sector. [1]`
    },
    {
      id: 'czechia-1993-split-nato-accession',
      title: '2. 1993: The Velvet Divorce & 1999 NATO Accession',
      period: '1993 – 2004',
      categoryTag: 'policies',
      summary: '1993 separation from Slovakia; 1999 NATO membership; 2004 EU entry.',
      details: `On January 1, 1993, political leaders dissolved the federal state without a popular referendum, creating the independent Czech Republic.

Czechia joined NATO in March 1999 and the EU in May 2004, embedding its manufacturing sector into German auto export chains. [2]`
    },
    {
      id: 'czechia-present-neoliberalism',
      title: '3. Present: German Supply-Chain Integration & High Housing Costs',
      period: 'Present',
      categoryTag: 'policies',
      summary: 'Petr Fiala government; Atlanticist foreign policy; housing inflation & energy price deregulation.',
      details: `Today, Czechia functions as a major automotive assembly and precision engineering hub for European markets under Petr Fiala's center-right government.

However, real estate privatization has created severe housing affordability crises in Prague, while energy deregulation has led to rising utility burdens for working-class families. [1][3]`
    }
  ],

  sources: [
    {
      id: 1,
      label: 'Kupónová Privatizace: The Capitalist Transformation and Sale of Czech Industry',
      publisher: 'Central European University Press',
      year: '1998',
      excerpt: 'Statistical analysis of voucher privatization, bank acquisition, and foreign corporate entry in Czechia.'
    },
    {
      id: 2,
      label: 'The Velvet Divorce: The Dismantling of the Czechoslovak Socialist Federation',
      publisher: 'Oxford University Press',
      year: '1995',
      excerpt: 'Detailed political study of the 1993 partition and its economic consequences.'
    },
    {
      id: 3,
      label: 'German Capital and the Subcontracting Economy: Czechia in the EU Single Market',
      publisher: 'Routledge Economic Archive',
      year: '2012',
      excerpt: 'Investigation of Czech automotive integration into German manufacturing chains.'
    }
  ]
};
