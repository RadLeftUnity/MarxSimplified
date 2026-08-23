import type { CountryData } from '../types';

export const egyptData: CountryData = {
  id: 'egypt',
  name: "Egypt",
  shortName: 'Egypt',
  flagEmoji: '🇪🇬',
  flagUrl: '/images/flags/egypt.svg',
  coverImage: '/images/history/egypt.jpg',
  category: 'global-south',
  era: '1952 – Present',
  capital: 'Cairo',
  keyLeaders: ['Gamal Abdel Nasser', 'Anwar Sadat', 'Hosni Mubarak', 'Mohammed Morsi', 'Abdel Fattah el-Sisi'],
  governingParty: "Egyptian Current Party",
  governingIdeology: 'Capitalism',
  isHistoricState: false,

  officialGovUrl: 'https://www.egypt.gov.eg/',
  overviewText: `Egypt's modern history is a study in the limits, contradictions, and ultimate betrayal of Third World national liberation.

Under Gamal Abdel Nasser (1952–1970), Egypt achieved the most ambitious anti-imperialist program in the Arab world: nationalizing the Suez Canal and expelling British and French military forces (1956), pursuing land reform abolishing 150 years of landlordism, industrializing through state planning, and pioneering pan-Arab socialist unity. Nasser's Egypt was the ideological center of global non-alignment and the primary material threat to US imperialist hegemony in the Middle East.

The 1967 Israeli military defeat shattered Nasserism. Anwar Sadat reversed course entirely: expelling Soviet advisors (1972), signing the 1978 Camp David Accords with Israel, and embedding Egypt within US financial dependency (receiving 1.3 billion dollars annually in US military aid). Hosni Mubarak entrenched military-capitalist rule for 30 years until the 2011 revolution. The Muslim Brotherhood's Mohammed Morsi was rapidly overthrown by General Abdel Fattah el-Sisi's 2013 military coup, backed by Saudi Arabia and the UAE, restoring military comprador rule under IMF austerity.`,

  contradictions: [
    "General Abdel Fattah el-Sisi's military coup ousted the Muslim Brotherhood government, establishing an authoritarian regime that enacted severe IMF austerity programs, devaluing the Egyptian pound and inflating basic food prices.",
    "The Egyptian Armed Forces control vast commercial enterprises, real estate, and consumer factories, monopolizing state infrastructure contracts while independent trade unions face strict repression.",
    "Egypt receives 1.3 billion dollars in annual US military aid, leading Cairo to maintain restrictive border enforcement at the Rafah crossing during the Gaza genocide despite overwhelming public Egyptian anti-imperialist solidarity.",
    "Red Sea shipping disruptions and Ethiopia's Grand Renaissance Dam create severe foreign exchange and water security challenges, forcing Cairo to seek loans from Gulf monarchies and the IMF."
  ],

  quickFacts: [
    { label: '1956 Suez Canal Nationalization', value: 'Nasser nationalizes canal; repels Anglo-French-Israeli invasion through Soviet backing [1]' },
    { label: '1978 Camp David Betrayal', value: 'Sadat signs US-brokered peace with Israel; Egypt expelled from Arab League [2]' },
    { label: 'Military-Capitalist Empire ($35B+)', value: 'Egyptian Armed Forces control 30-40% of the economy through 3,000+ businesses [3]' },
    { label: '2013 Saudi-UAE Backed Coup', value: 'Sisi military coup against elected Morsi; $12B Saudi-UAE bailout secures loyalty [4]' },
  ],

  timeline: [
    {
      id: 'egypt-1952-revolution-nasser-land-reform',
      title: '1. 1952 – 1958: The Free Officers Revolution, Nasser\'s Rise & Land Reform',
      period: '1952 – 1958',
      categoryTag: 'revolution',
      summary: '1952 Free Officers coup; abolition of monarchy; land reform; Nasser\'s consolidation of anti-imperialist program.',
      details: `On July 23, 1952, the **Free Officers Movement** led by General Muhammad Naguib and Colonel Gamal Abdel Nasser overthrew King Farouk, ending 150 years of British-backed monarchical rule and foreign control of Egyptian land.

The new government abolished the feudal landholding system through the **Agrarian Reform Law of 1952**, capping land ownership and redistributing 650,000 acres to 145,000 peasant families. Industries, insurance companies, and banks were nationalized. Nasser, who took full control by 1954 after outmaneuvering Naguib, expelled British troops from the Suez Canal Zone by 1956 and terminated the Anglo-Egyptian Condominium over Sudan, winning enormous popular legitimacy. [1]`,
      keyFigures: ['Gamal Abdel Nasser', 'Muhammad Naguib', 'Anwar Sadat (Free Officer)'],
      citationIds: [1],
    },
    {
      id: 'egypt-suez-crisis-pan-arabism-uar',
      title: '2. 1956 – 1967: Suez Nationalization, Non-Alignment & The United Arab Republic',
      period: '1956 – 1967',
      categoryTag: 'successes',
      summary: '1956 Suez Canal nationalized; Anglo-French-Israeli invasion defeated; UAR union with Syria 1958–1961.',
      details: `On July 26, 1956, Nasser nationalized the **Suez Canal Company**, ending British and French monopoly control over the critical waterway. Britain, France, and Israel launched a military invasion (the Tripartite Aggression). Under pressure from the US (which feared Soviet response escalation) and Soviet threats, the invaders were forced to withdraw. The victory transformed Nasser into the most popular leader in the Arab world and the Global South.

Egypt became the center of **Non-Aligned Movement** leadership alongside Nehru (India) and Tito (Yugoslavia). In 1958, Egypt and Syria united as the **United Arab Republic (UAR)**, the most ambitious experiment in pan-Arab socialist unity. The union collapsed in 1961 due to Syrian landlord class opposition to Egyptian-style nationalization. Egypt's defeat in the 1967 Six-Day War by Israel, facilitated by US military and intelligence support, shattered the Nasserist project. [1][2]`,
      keyFigures: ['Gamal Abdel Nasser', 'Jawaharlal Nehru', 'Josip Broz Tito', 'Nikita Khrushchev'],
      citationIds: [1, 2],
    },
    {
      id: 'egypt-sadat-camp-david-class-betrayal',
      title: '3. 1970 – 1981: Sadat\'s Infitah, Camp David Accords & The Class Betrayal of Nasserism',
      period: '1970 – 1981',
      categoryTag: 'challenges',
      summary: '1972 Soviet expulsion; Infitah neoliberalism; 1978 Camp David peace with Israel; Arab League expulsion.',
      details: `President Anwar Sadat reversed Nasser's entire program in what represented a classic comprador class restoration. In 1972, he expelled 20,000 Soviet military advisors, realigning Egypt toward the US. In 1974, he launched **Infitah** ("Opening"), dismantling Nasserist state enterprises, welcoming foreign investment, and enriching a new parasitic bourgeoisie of import-export comprador capitalists.

In September 1978, Sadat signed the **Camp David Accords** brokered by President Carter, becoming the first Arab leader to formally recognize Israel. The agreement exchanged Egyptian recognition of Israeli occupation of Palestinian territory for the return of the Sinai Peninsula and a $1.3 billion annual US military aid package. Egypt was immediately expelled from the Arab League. Sadat was assassinated by Egyptian Islamic Jihad in October 1981 for the betrayal. [2]`,
      keyFigures: ['Anwar Sadat', 'Jimmy Carter', 'Menachem Begin', 'Khalid Islambouli (Assassin)'],
      citationIds: [2],
    },
    {
      id: 'egypt-mubarak-military-capitalism-2011-revolution',
      title: '4. 1981 – 2013: Mubarak\'s Military Capitalism, 2011 Revolution & Sisi Coup',
      period: '1981 – 2013',
      categoryTag: 'challenges',
      summary: '30 years Mubarak dictatorship; military economy; 2011 revolution; 2013 Sisi military coup backed by Saudi Arabia.',
      details: `Hosni Mubarak entrenched a **military-capitalist state** for 30 years: the Egyptian Armed Forces expanded their economic empire to control an estimated 30–40% of the economy through 3,000+ businesses spanning water, food, construction, land, and tourism, paying no taxes and using conscript labor for private profit.

The January 25, 2011 **Egyptian Revolution** ousted Mubarak after 18 days of mass protest by workers, youth, and middle classes. The Muslim Brotherhood's Mohammed Morsi was elected president in June 2012. On July 3, 2013, General Abdel Fattah el-Sisi executed a military coup, imprisoning Morsi (who died in custody in 2019) and massacring over 800 Brotherhood supporters at Rabaa Square. Saudi Arabia and UAE immediately provided $12 billion in financial support, securing the military junta's loyalty and Egypt's return to full comprador subservience. [3][4]`,
      keyFigures: ['Hosni Mubarak', 'Mohammed Morsi', 'Abdel Fattah el-Sisi', 'Mohammed bin Salman (MbS)'],
      citationIds: [3, 4],
    },
    {
      id: 'egypt-sisi-imf-austerity-debt-crisis',
      title: '5. Present: Sisi Authoritarian Capitalism, IMF Debt Trap & Gaza Border Enforcement',
      period: 'Present',
      categoryTag: 'challenges',
      summary: 'IMF austerity; currency collapse; $35B military economy; Rafah border sealed during Gaza genocide.',
      details: `Under Sisi, Egypt accepted multiple IMF structural adjustment programs (2016, 2020, 2023), each demanding currency devaluations, subsidy cuts, and privatization. The Egyptian pound lost over 70% of its value, triggering inflation exceeding 35%, devastating the working class and petty bourgeoisie. Debt servicing now consumes over 40% of government revenue.

The Egyptian military's economic empire continued expanding through mega-projects (New Administrative Capital) built with military construction companies and conscript labor. Most consequentially, Sisi's government sealed the **Rafah crossing** into Gaza during the 2023–2024 Israeli siege, preventing aid entry and refusing passage to wounded Palestinians, making Egypt a material enforcer of the Gaza blockade in exchange for US aid flows and IMF debt restructuring. [3][4]`,
      keyFigures: ['Abdel Fattah el-Sisi', 'Kristalina Georgieva (IMF)', 'Joe Biden'],
      citationIds: [3, 4],
    },
  ],

  sources: [
    {
      id: 1,
      label: 'Nasser: The Last Arab',
      publisher: 'Said Aburish / St. Martin\'s Press',
      year: '2004',
      excerpt: 'Comprehensive biography documenting Nasser\'s land reform program, Suez nationalization, and pan-Arab socialist leadership.',
    },
    {
      id: 2,
      label: 'Egypt: The Moment of Change',
      publisher: 'Rabab El-Mahdi & Philip Marfleet / Zed Books',
      year: '2009',
      excerpt: 'Historical materialist analysis of Sadat\'s Infitah neoliberalism, Camp David class betrayal, and military-capitalist state formation under Mubarak.',
    },
    {
      id: 3,
      label: 'The Army and the Economy in Egypt',
      publisher: 'Robert Springborg / Survival: Global Politics and Strategy',
      year: '2023',
      excerpt: 'Documenting the Egyptian Armed Forces\' 30-40% control of the economy through 3,000+ enterprises using conscript labor and tax exemptions.',
    },
    {
      id: 4,
      label: 'Egypt\'s Coup, the Rabaa Massacre & IMF Debt Trap',
      publisher: 'Human Rights Watch & International Monetary Fund Country Reports',
      year: '2024',
      excerpt: 'Documentation of the 2013 Sisi coup, Rabaa Square massacre of 800+ protesters, $12B Saudi-UAE bailout, and IMF structural adjustment driving 35%+ inflation.',
    },
  ],
};
