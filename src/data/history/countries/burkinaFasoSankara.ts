import type { CountryData } from '../types';

export const burkinaFasoSankaraData: CountryData = {
  id: 'burkina-faso-sankara',
  name: 'Burkina Faso (Sankara Era / CNR)',
  shortName: 'Burkina Faso (1983–1987)',
  flagEmoji: '🇧🇫',
  flagUrl: '/images/flags/burkina-faso.svg',
  coverImage: '/images/history/burkina-faso.jpg',
  category: 'aes',
  era: '1983 – 1987',
  capital: 'Ouagadougou',
  keyLeaders: ['Thomas Sankara', 'Blaise Compaoré (Pre-1987 Coup)', 'Henri Zongo', 'Jean-Baptiste Lingani'],
  governingParty: "National Council for the Revolution (CNR)",
  governingIdeology: "Sankaraism",
  isHistoricState: true,

  counterpartInfo: {
    id: 'burkina-faso',
    name: 'Republic of Burkina Faso (Modern Post-Revolution State)',
    label: 'Modern Equivalent',
    contrastText: 'The Sankara Era (1983–1987) achieved complete food self-sufficiency, mass literacy, and anti-imperialist sovereignty, contrasting with Compaoré\'s 1987–2014 French neocolonial era and modern AES Sahel sovereign transformation.'
  },
  
  officialGovUrl: 'https://www.sig.gov.bf/',
  overviewText: `In 1983, a popular anti-imperialist revolution led by 33-year-old Captain Thomas Sankara came to power in the West African nation of Upper Volta. Sankara renamed the country Burkina Faso ("Land of Incorruptible People") and initiated one of the most radical, self-reliant socialist transformations in modern African history under the National Council for the Revolution (CNR).

Rejecting foreign debt and IMF structural adjustment loans, Sankara's government mobilized working people to vaccinate 2.5 million children in under two weeks, plant 10 million trees across the Sahel to combat desertification, redistribute feudal land holdings to peasant farmers, and achieve complete national food self-sufficiency in under four years.

Sankara championed women's liberation, banning female genital mutilation, forced marriage, and polygamy while appointing women to top government posts and military units. His assassination on October 15, 1987, in a French-backed military coup led by Blaise Compaoré remains a stark testament to imperialist hostility toward sovereign African socialist development.`,

  contradictions: [
    "Unilateral French military and intelligence hostility organized economic blockades and covert subversion, exploiting internal military factionalism to orchestrate the 1987 assassination of Thomas Sankara.",
    "Feudal tribal chiefs and traditional landlords resisted agrarian land redistribution and rural popular committees (CDRs), aligning with foreign neocolonial interests to undermine peasant mobilization.",
    "Severe climate degradation across the Sahel required massive labor-intensive reforestation and irrigation efforts, creating temporary supply bottlenecks while building self-reliant agricultural infrastructure.",
    "Developing socialist state institutions while surrounded by hostile Western-backed neocolonial regimes in West Africa limited regional economic integration until the 2020s Sahel alliance."
  ],

  quickFacts: [
    { label: 'Child Vaccinations', value: '2.5 Million children in 2 weeks [1]' },
    { label: 'Wheat Production', value: '1.7 to 5.0 tonnes per hectare [2]' },
    { label: 'Trees Planted', value: '10+ Million (Sahel Reforestation)' },
    { label: 'Official Salaries', value: 'President paid $450/month (Lowest in Africa)' },
  ],

  timeline: [
    {
      id: 'burkina-sankara-1',
      title: 'Popular Anti-Imperialist Revolution',
      period: '1983',
      categoryTag: 'revolution',
      summary: 'Captain Thomas Sankara and progressive military officers launch a popular revolution.',
      details: 'Captain Thomas Sankara and progressive military officers launch a popular revolution, establishing the National Council for the Revolution (CNR) and declaring anti-imperialist self-reliance.'
    },
    {
      id: 'burkina-sankara-2',
      title: 'Renaming the Nation & Reforestation Crusade',
      period: '1984',
      categoryTag: 'policies',
      summary: 'Upper Volta is renamed Burkina Faso ("Land of Incorruptible People").',
      details: 'Upper Volta is officially renamed Burkina Faso ("Land of Incorruptible People"). Millions of citizens mobilize to plant 10 million trees across the Sahel and vaccinate 2.5 million children [1].'
    },
    {
      id: 'burkina-sankara-3',
      title: 'Agrarian Land Reform & Food Self-Sufficiency',
      period: '1985',
      categoryTag: 'successes',
      summary: 'Feudal land ownership is abolished and land is distributed to peasant farmers.',
      details: 'Feudal land ownership is abolished and land is distributed to peasant farmers. Wheat yields increase dramatically, achieving complete national food self-sufficiency [2].'
    },
    {
      id: 'burkina-sankara-4',
      title: 'Women\'s Liberation & Anti-Debt Proclamation',
      period: '1986',
      categoryTag: 'policies',
      summary: 'The CNR bans female genital mutilation and forced marriage.',
      details: 'The CNR bans female genital mutilation and forced marriage. At the OAU summit in Addis Ababa, Sankara urges African states to refuse repayment of imperialist colonial debts.'
    },
    {
      id: 'burkina-sankara-5',
      title: 'Imperialist-Backed Coup & Martyrdom',
      period: '1987',
      categoryTag: 'collapse-or-transition',
      summary: 'Thomas Sankara is assassinated on October 15, 1987, in a French-backed military coup.',
      details: 'Thomas Sankara is assassinated on October 15, 1987, in a French-backed military coup organized by Blaise Compaoré, halting the CNR socialist transformation.'
    }
  ],

  sources: [
    {
      id: 1,
      label: 'Thomas Sankara Speaks: The Burkina Faso Revolution 1983-1987',
      publisher: 'Pathfinder Press',
      year: '1988',
      url: 'https://www.pathfinderpress.com/products/thomas-sankara-speaks_by-thomas-sankara'
    },
    {
      id: 2,
      label: 'Thomas Sankara: An African Revolutionary',
      publisher: 'Ohio University Press',
      year: '2014',
      url: 'https://www.ohioswallow.com/book/Thomas+Sankara'
    }
  ]
};
