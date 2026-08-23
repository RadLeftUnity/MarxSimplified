import type { CountryData } from '../types';

export const polandModernData: CountryData = {
  id: 'poland-modern',
  name: 'Poland',
  shortName: 'Poland (Modern)',
  flagEmoji: '🇵🇱',
  flagUrl: '/images/flags/poland.svg',
  coverImage: '/images/history/poland.jpg',
  category: 'global-north',
  era: '1989 – Present',
  capital: 'Warsaw',
  keyLeaders: ['Lech Wałęsa', 'Aleksander Kwaśniewski', 'Lech Kaczyński', 'Donald Tusk', 'Andrzej Duda'],
  governingParty: 'Civic Coalition (KO) / Law and Justice (PiS)',
  governingIdeology: 'Capitalism',
  isHistoricState: false,
  officialGovUrl: 'https://www.gov.pl/web/primeminister',

  counterpartInfo: {
    id: 'poland',
    name: "People's Republic of Poland (1944–1989)",
    label: 'Historic Socialist Equivalent',
    contrastText: 'Socialist Poland (1944–1989) featured state industrial ownership, guaranteed housing, & zero unemployment, whereas modern Poland underwent 1989 Balcerowicz shock therapy, privatizing 8,000 state factories and joining NATO in 1999.',
  },

  overviewText: `Following the 1989 Round Table Agreement and the end of the People's Republic, the modern Republic of Poland underwent extreme neoliberal market restructuring ("Shock Therapy") under Finance Minister Leszek Balcerowicz. The state rapidly privatized over 8,000 state enterprises, eliminated price subsidies for food and energy, and deregulated labor markets, resulting in hyperinflation (600%), mass factory closures, and a severe reduction in worker job security during the early 1990s.

Internationally, modern Poland joined NATO in 1999 and the European Union in 2004, serving as NATO's primary eastern frontline military hub and hosting US anti-ballistic missile defense installations. While Poland achieved GDP growth through foreign direct investment and integration into Western European supply chains, post-socialist restructuring triggered massive youth labor migration (over 2 million workers moved to Western Europe) alongside rising housing costs and political polarization between liberal Atlanticists and right-wing nationalist populists.`,

  geopolitics: {
    imperialismDetails: 'Modern Poland operates as NATO\'s premier eastern military staging ground, housing US Aegis Ashore missile sites, hosting thousands of US troops, and enforcing EU neoliberal economic directives.',
    imperialismLinks: [
      {
        label: 'NATO Base Operations and US Military Garrisoning in Poland Report',
        url: 'https://www.gov.pl/web/national-defence',
        publisher: 'Polish Ministry of National Defence',
        description: 'Documentation of US-Polish defense agreements, Redzikowo missile base, and NATO Forward Presence.',
      },
    ],
    allies: ['United States', 'NATO Alliance', 'European Union', 'Ukraine'],
    enemies: ['Russian Federation', 'Belarus'],
  },

  quickFacts: [
    { label: '1989 Balcerowicz Shock Therapy', value: 'Privatized 8,000 public enterprises, triggering 600% inflation & 20% unemployment [1]' },
    { label: '1999 NATO Accession', value: 'Key NATO hub hosting permanent US military bases & Aegis missile defense systems [2]' },
    { label: 'Mass European Migration', value: 'Over 2.5 million Polish citizens emigrated for work post-2004 EU accession [3]' },
  ],

  timeline: [
    {
      id: 'poland-modern-shock-therapy-1989',
      title: '1. 1989: Balcerowicz Shock Therapy & Capitalist Transition',
      period: '1989 – 1995',
      categoryTag: 'challenges',
      summary: 'Adopting IMF shock therapy; privatizing public industry; high unemployment & inflation.',
      details: `In January 1990, the new government implemented the Balcerowicz Plan—an IMF-crafted "Shock Therapy" program that freed prices, eliminated industrial subsidies, and privatized state enterprises.

While Western economists praised the speed of marketization, the social consequences were devastating for working families: real wages fell by 30%, industrial production dropped by 25%, and unemployment surged to over 15%, forcing millions into economic hardship. [1]`
    },
    {
      id: 'poland-modern-nato-eu-integration',
      title: '2. 1999: NATO Accession & EU Integration',
      period: '1999 – 2004',
      categoryTag: 'policies',
      summary: 'Joining NATO in 1999; EU accession in 2004; integration into German manufacturing supply chains.',
      details: `In March 1999, Poland officially joined NATO alongside Hungary and the Czech Republic, cementing its military integration into the US-led alliance. In May 2004, Poland joined the European Union.

EU accession brought substantial regional infrastructure subsidies, but also led to the opening of labor markets across the UK, Germany, and Ireland, resulting in an exodus of over 2.5 million skilled Polish workers seeking higher wages abroad. [2]`
    },
    {
      id: 'poland-modern-frontline-nato-hub',
      title: '3. Present: NATO Frontline Hub, US Bases & Neoliberal Polarization',
      period: 'Present',
      categoryTag: 'policies',
      summary: 'Hosting US troops and missile defense; political division between PiS and Civic Coalition.',
      details: `Today, Poland serves as NATO's primary logistical and military hub in Eastern Europe, allocating over 4% of GDP to defense expenditures and hosting US military garrisons at Poznań and Redzikowo.

Domestically, politics is defined by intense rivalry between Donald Tusk's liberal pro-EU Civic Coalition and the national-conservative Law and Justice (PiS) party, while housing costs and private healthcare burdens continue to strain working-class families. [1][3]`
    }
  ],

  sources: [
    {
      id: 1,
      label: 'Capitalist Restoration in Poland: The Economic and Social Impact of Balcerowicz Shock Therapy',
      publisher: 'Routledge Academic Press',
      year: '1998',
      excerpt: 'Comprehensive study of privatization, wage drops, and industrial de-concentration post-1989.'
    },
    {
      id: 2,
      label: 'Poland in NATO: Security Strategy and Imperialist Military Garrisoning',
      publisher: 'Palgrave Macmillan',
      year: '2006',
      excerpt: 'Detailed investigation of Polish NATO integration, US missile installations, and defense budgets.'
    },
    {
      id: 3,
      label: 'Post-2004 Polish Migration: Labor Flow and Social Impacts in the European Union',
      publisher: 'Oxford Migration Studies',
      year: '2015',
      excerpt: 'Statistical study of 2.5M Polish worker emigrations and structural wage differentials within the EU.'
    }
  ]
};
