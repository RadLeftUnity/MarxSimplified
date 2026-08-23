import type { CountryData } from '../types';

export const burkinaFasoData: CountryData = {
  id: 'burkina-faso',
  name: 'Burkina Faso',
  shortName: 'Burkina Faso',
  flagEmoji: '🇧🇫',
  flagUrl: '/images/flags/burkina-faso.svg',
  coverImage: '/images/history/burkina-faso.jpg',
  category: 'global-south',
  era: '1987 – Present',
  capital: 'Ouagadougou',
  keyLeaders: ['Captain Ibrahim Traoré', 'Roch Marc Christian Kaboré', 'Blaise Compaoré (1987–2014)'],
  governingParty: "Patriotic Movement for Safeguarding and Restoration (MPSR)",
  governingIdeology: "Anti-Imperialist Sovereignty",
  isHistoricState: false,

  counterpartInfo: {
    id: 'burkina-faso-sankara',
    name: 'Burkina Faso (Sankara Era / CNR, 1983–1987)',
    label: 'Historic Socialist Equivalent',
    contrastText: 'Modern Burkina Faso draws on Sankara\'s 1983–1987 anti-imperialist legacy, expelling French military forces in 2022, nationalizing gold refineries, and forming the Alliance of Sahel States (AES).'
  },
  
  officialGovUrl: 'https://www.sig.gov.bf/',
  overviewText: `Following the 1987 French-backed coup and assassination of Thomas Sankara, Blaise Compaoré imposed 27 years of neocolonial rule, accepting IMF structural adjustment, privatizing state assets, and serving as a key military base for French forces in West Africa. In October 2014, a massive popular uprising burned the parliament building and forced Compaoré to flee the country.

In September 2022, Captain Ibrahim Traoré came to power in a military revolution supported by popular anti-imperialist movements. Traoré's government revoked French military agreements, expelled French troops and diplomats, and asserted full national sovereignty over natural resources.

Burkina Faso joined with Mali and Niger to form the Alliance of Sahel States (AES), severing ties with the French-backed ECOWAS bloc, establishing unified military defense, and building domestic state-owned gold refineries to process national mineral wealth for public development.`,

  contradictions: [
    "Captain Ibrahim Traoré led a popular military revolution in September 2022, expelling French military forces, revoking French mining concessions, and asserting full national sovereignty over natural resources.",
    "Burkina Faso, Mali, and Niger formed the Alliance of Sahel States (AES), withdrawing from the French-controlled ECOWAS bloc and establishing unified military and economic defense against imperialist interference.",
    "Decades of French neocolonial plunder extracted gold and cotton while leaving 70% of the population without electricity. Traoré's administration constructed state-owned gold refineries to process mineral wealth domestically.",
    "Western intelligence agencies and foreign-backed extremist groups attempt to sabotage AES sovereignty. Popular mobilization of the Volunteers for the Defense of the Fatherland (VDP) builds grass-roots defense of the revolution."
  ],

  quickFacts: [
    { label: 'Sahel Alliance', value: 'Founding Member of AES (2023)' },
    { label: 'Gold Refinery', value: 'First State-Owned Facility Constructed (2023)' },
    { label: 'French Troops', value: '100% Expelled from National Territory' },
    { label: 'Literacy Rate', value: 'Expanding Public Adult Education Programs' },
  ],

  timeline: [
    {
      id: 'burkina-modern-1',
      title: 'French-Backed Coup & Neocolonial Era',
      period: '1987',
      categoryTag: 'pre-revolution',
      summary: 'Blaise Compaoré seizes power in a coup, reversing Sankara\'s socialist reforms.',
      details: 'Blaise Compaoré seizes power in a coup, reverses Sankara\'s socialist reforms, and aligns Burkina Faso with French geopolitical interests and IMF structural adjustment.'
    },
    {
      id: 'burkina-modern-2',
      title: 'Popular Uprising & Compaoré Ouster',
      period: '2014',
      categoryTag: 'revolution',
      summary: 'Hundreds of thousands of citizens march in Ouagadougou, burning parliament.',
      details: 'Hundreds of thousands of citizens march in Ouagadougou, burning parliament and forcing dictator Blaise Compaoré to flee into exile in Côte d\'Ivoire.'
    },
    {
      id: 'burkina-modern-3',
      title: 'Anti-Imperialist Military Revolution',
      period: '2022',
      categoryTag: 'revolution',
      summary: 'Captain Ibrahim Traoré leads a progressive military movement, expelling French troops.',
      details: 'Captain Ibrahim Traoré leads a progressive military movement, terminating French military agreements, expelling French troops, and asserting national economic sovereignty.'
    },
    {
      id: 'burkina-modern-4',
      title: 'Alliance of Sahel States (AES) Formed',
      period: '2023',
      categoryTag: 'policies',
      summary: 'Burkina Faso, Mali, and Niger create the Alliance of Sahel States.',
      details: 'Burkina Faso, Mali, and Niger sign the Liptako-Gourma Charter creating the Alliance of Sahel States (AES), breaking away from the French-controlled ECOWAS bloc.'
    },
    {
      id: 'burkina-modern-5',
      title: 'Nationalizing Gold Refineries & Resource Sovereignty',
      period: '2024',
      categoryTag: 'successes',
      summary: 'The Traoré administration inaugurates Burkina Faso\'s first state-owned gold refinery.',
      details: 'The Traoré administration inaugurates Burkina Faso\'s first state-owned gold refinery to process mineral wealth domestically and fund public infrastructure.'
    }
  ],

  sources: [
    {
      id: 1,
      label: 'Official Portal of Burkina Faso Government Information Service',
      publisher: 'SIG Burkina Faso',
      year: '2024',
      url: 'https://www.sig.gov.bf/'
    },
    {
      id: 2,
      label: 'The Alliance of Sahel States and Sovereign Transformation',
      publisher: 'Sahel Research Group',
      year: '2024',
      url: 'https://sahelresearch.org/'
    }
  ]
};
