import type { CountryData } from '../types';

export const ghanaData: CountryData = {
  id: 'ghana',
  name: "Ghana",
  shortName: 'Ghana',
  flagEmoji: '🇬🇭',
  flagUrl: '/images/flags/ghana.svg',
  coverImage: '/images/history/ghana.jpg',
  category: 'global-south',
  era: '1957 – Present',
  capital: 'Accra',
  keyLeaders: ['Kwame Nkrumah', 'Yaa Asantewaa', 'Jerry Rawlings', 'John Atta Mills'],
  governingParty: "New Patriotic Party",
  governingIdeology: 'Capitalism',
  isHistoricState: false,
  
  officialGovUrl: 'https://www.ghana.gov.gh/',
  overviewText: `Ghana represents the pioneer of sub-Saharan anti-colonial liberation and Pan-African socialism, which was subsequently targeted by CIA regime-change sabotage and Western debt traps.

In 1900, Queen Mother **Yaa Asantewaa** led the Ashanti Kingdom in the War of the Golden Stool against British colonial forces. In 1949, **Kwame Nkrumah** founded the Convention People's Party (CPP), launching the **Positive Action** campaign in 1950 (a nationwide strike of trade unionists and market women). On March 6, 1957, Ghana became the first sub-Saharan African country to achieve independence. Nkrumah declared that "our independence is meaningless unless it is linked up with the total liberation of the African continent."

Nkrumah's socialist government constructed the state-owned Volta River hydroelectric project, nationalized cocoa exports, established free universal education and healthcare, and published landmark anti-imperialist theory (*Neo-Colonialism: The Last Stage of Imperialism*). In February 1966, while Nkrumah was on a peace mission to Vietnam, the US CIA orchestrated a military coup (Operation Cold Chop), installing a comprador military junta that privatized state enterprises and re-oriented Ghana toward Western debt dependency.`,

  contradictions: [
    "Kwame Nkrumah led the first black African nation to independence in 1957 and championed Pan-African socialism before a 1966 CIA-backed military coup ousted his government.",
    "Severe foreign debt forced Accra to accept repeated IMF structural adjustment programs, privatizing public assets and devaluing the cedi currency.",
    "Foreign mining cartels extract gold and cocoa wealth while Ghanaian farmers and youth face severe living cost increases.",
    "Popular protests against IMF austerity demand debt cancellation and national control over oil and mineral processing."
  ],

  quickFacts: [
    { label: '1st Independent Sub-Saharan State', value: 'March 6, 1957 independence led by Kwame Nkrumah & CPP [1]' },
    { label: 'Positive Action Campaign (1950)', value: 'Nationwide strike action & civil disobedience forced British colonial concessions [2]' },
    { label: 'CIA Military Coup (1966)', value: 'US CIA backed military coup overthrowing socialist President Kwame Nkrumah [3]' },
    { label: 'Pan-African Socialist Vision', value: 'Nkrumah pioneered All-African Trade Union Federation & All-African People\'s Conference [4]' },
  ],

  timeline: [
    {
      id: 'ghana-1900-yaa-asantewaa-war-golden-stool',
      title: '1. 1900: Yaa Asantewaa & The War of the Golden Stool against British Colonialism',
      period: '1900',
      categoryTag: 'pre-revolution',
      summary: 'Queen Mother Yaa Asantewaa leads Ashanti armed resistance against British Governor Hodgson.',
      details: `In March 1900, British Colonial Governor Frederick Hodgson demanded the surrender of the Golden Stool, the sacred throne of the Ashanti nation.

In response, **Yaa Asantewaa**, Queen Mother of Ejisu, mobilized an army of 5,000 Ashanti fighters, laying siege to the British fort in Kumasi for several months until British reinforcements with heavy Maxim guns suppressed the uprising, annexing Ashanti into the Gold Coast colony. [1]`,
      keyFigures: ['Yaa Asantewaa', 'Prempeh I', 'Frederick Hodgson'],
      citationIds: [1],
    },
    {
      id: 'ghana-1947-nkrumah-cpp-positive-action-1950',
      title: '2. 1947 – 1956: Kwame Nkrumah, Founding of CPP & The 1950 Positive Action Campaign',
      period: '1947 – 1956',
      categoryTag: 'revolution',
      summary: '1949 founding of CPP; Jan 1950 Positive Action general strike forces colonial elections.',
      details: `In 1949, **Kwame Nkrumah** broke away from conservative bourgeois elites to found the Convention People's Party (CPP), rallying workers, youth, and market women under the slogan "Self-Government NOW."

In January 1950, the CPP launched **Positive Action**—a nationwide general strike and boycott campaign coordinated with the Gold Coast Trades Union Congress. British authorities imprisoned Nkrumah, but the CPP won a landslide electoral victory from prison in 1951, forcing the British to release Nkrumah as Leader of Government Business. [1][2]`,
      keyFigures: ['Kwame Nkrumah', 'Kojo Botsio', 'Komla Agbeli Gbedemah', 'Hannah Cudjoe'],
      citationIds: [1, 2],
    },
    {
      id: 'ghana-1957-independence-socialist-development-pan-africanism',
      title: '3. 1957 – 1965: March 6, 1957 Independence: Pan-Africanism & Socialist Development',
      period: '1957 – 1965',
      categoryTag: 'successes',
      summary: 'March 6, 1957 Independence; Volta River Dam project; All-African People\'s Conference (1958).',
      details: `On March 6, 1957, Ghana achieved independence. Nkrumah transformed Accra into the headquarters of African liberation, hosting the 1958 All-African People's Conference and supporting liberation movements in Congo, Algeria, and Angola.

Nkrumah enacted state-led socialist industrialization: constructing the massive Akosombo Dam / Volta River hydroelectric project, building state cocoa processing factories, and providing free universal education and healthcare across Ghana. [2][3]`,
      keyFigures: ['Kwame Nkrumah', 'George Padmore', 'W.E.B. Du Bois (Emigrated to Ghana)'],
      citationIds: [2, 3],
    },
    {
      id: 'ghana-1966-cia-military-coup-operation-cold-chop',
      title: '4. 1966: The CIA-Backed Military Coup Overthrowing Kwame Nkrumah',
      period: '1966',
      categoryTag: 'challenges',
      summary: 'Feb 24, 1966: US CIA orchestrates military coup while Nkrumah visits Hanoi; privatizing state industries.',
      details: `On February 24, 1966, while Nkrumah was traveling to Hanoi on a peace mission to end the US war in Vietnam, the US Central Intelligence Agency (CIA) backed a military coup by police and army officers (National Liberation Council).

The junta murdered Nkrumah's guards, suspended the constitution, outlawed the CPP, expelled Soviet and Chinese technical advisors, and liquidated state-owned factories, selling them to Western multinational corporations at bargain prices. [3]`,
      keyFigures: ['Kwame Nkrumah', 'Emmanuel Kotoka (Coup Leader)', 'Joseph Arthur Ankrah'],
      citationIds: [3],
    },
    {
      id: 'ghana-1967-military-regimes-economic-crisis',
      title: '5. 1967 – 1978: Military Regimes, Economic Dislocation & IMF Neoliberal Pressure',
      period: '1967 – 1978',
      categoryTag: 'challenges',
      summary: 'Unstable military juntas (SMC); falling cocoa prices; severe food inflation & corruption.',
      details: `Between 1967 and 1978, Ghana suffered under unstable military regimes (Kofi Busia, Ignatius Kutu Acheampong's Supreme Military Council).

Collapse in world cocoa prices, coupled with corrupt hoarding ("kalabule") and IMF-forced currency devaluations, created hyperinflation, severe food shortages, and massive working-class impoverishment across Ghana. [3][4]`,
      keyFigures: ['Ignatius Kutu Acheampong', 'Kofi Abrefa Busia', 'Fred Akuffo'],
      citationIds: [3, 4],
    },
    {
      id: 'ghana-1979-rawlings-afrc-uprising',
      title: '6. 1979 – 1981: Jerry Rawlings & The Armed Forces Revolutionary Council (AFRC) Uprising',
      period: '1979 – 1981',
      categoryTag: 'revolution',
      summary: 'June 1979: Flight Lieutenant Jerry Rawlings leads junior officers uprising; executing corrupt generals.',
      details: `On June 4, 1979, Flight Lieutenant **Jerry John Rawlings** and junior military officers launched a popular uprising, forming the Armed Forces Revolutionary Council (AFRC).

The AFRC executed corrupt military generals, confiscated hoarded goods, and held democratic elections that brought Hilla Limann to power. When Limann capitulated to IMF austerity, Rawlings launched a second uprising on December 31, 1981, forming the Provisional National Defence Council (PNDC). [4]`,
      keyFigures: ['Jerry John Rawlings', 'Kojo Tsikata', 'Hilla Limann'],
      citationIds: [4],
    },
    {
      id: 'ghana-1982-pndc-neoliberal-structural-adjustment',
      title: '7. 1982 – 1999: PNDC Era, Neoliberal Structural Adjustment & Return to Multi-Party Democracy',
      period: '1982 – 1999',
      categoryTag: 'policies',
      summary: 'PNDC adopts IMF Economic Recovery Program (ERP); 1992 return to multi-party constitutional democracy.',
      details: `Facing severe drought and Western economic blockades, the PNDC adopted an IMF/World Bank Economic Recovery Program (ERP) in 1983, implementing privatization, civil service retrenchment, and user fees for public healthcare ("cash and carry").

In 1992, Ghana adopted a new constitution, transitioning to multi-party democracy under the 4th Republic, with Rawlings winning elections as head of the National Democratic Congress (NDC). [4]`,
      keyFigures: ['Jerry John Rawlings', 'Kwesi Botchwey'],
      citationIds: [4],
    },
    {
      id: 'ghana-present-gold-extraction-imf-debt-nkrumaism',
      title: '8. Present: Western Mining Cartel Extraction, IMF Debt Traps & Nkrumaist Resurgence',
      period: 'Present',
      categoryTag: 'challenges',
      summary: '$3B+ IMF bailout (2023); gold & cocoa wealth extracted by foreign cartels; growing youth Nkrumaism.',
      details: `Today, despite being Africa's top gold producer and second-largest cocoa exporter, Ghana faces severe external debt crises, accepting a $3 billion IMF bailout in 2023 that enforced domestic tax hikes and utility price increases.

Foreign mining multinationals (Newmont, Barrick Gold) extract Ghana's mineral wealth, while working-class youth and student movements ("Arise Ghana", Socialist Movement of Ghana) organize around Nkrumaist anti-imperialist principles demanding resource sovereignty. [3][4]`,
      keyFigures: ['Nana Akufo-Addo', 'John Dramani Mahama', 'Kwesi Pratt Jr. (Socialist Movement)'],
      citationIds: [3, 4],
    },
  ],

  sources: [
    {
      id: 1,
      label: 'Ghana: The Autobiography of Kwame Nkrumah',
      publisher: 'Kwame Nkrumah / Thomas Nelson & Sons',
      year: '1957',
      excerpt: 'First-hand account of Yaa Asantewaa\'s legacy, the founding of the CPP, and the 1950 Positive Action general strike.',
    },
    {
      id: 2,
      label: 'Neo-Colonialism: The Last Stage of Imperialism',
      publisher: 'Kwame Nkrumah / Thomas Nelson & Sons',
      year: '1965',
      excerpt: 'Landmark Marxist theoretical text analyzing foreign capital control, Western mining cartels, and Pan-African socialist unification.',
    },
    {
      id: 3,
      label: 'Dark Days in Ghana: The CIA Coup Against Kwame Nkrumah',
      publisher: 'Kwame Nkrumah / International Publishers',
      year: '1968',
      excerpt: 'Detailed expose of the Feb 24, 1966 CIA-backed military coup, Western corporate privatization, and neo-colonial sabotage.',
    },
    {
      id: 4,
      label: 'The Political Economy of Reform in Ghana: From Nkrumah to Rawlings and the IMF',
      publisher: 'E. Gyimah-Boadi / Lynne Rienner Publishers',
      year: '1993',
      excerpt: 'Analysis of post-1966 military regimes, Jerry Rawlings\' PNDC, IMF structural adjustment programs, and resource extraction.',
    },
  ],
};
