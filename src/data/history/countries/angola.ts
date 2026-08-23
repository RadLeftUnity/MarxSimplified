import type { CountryData } from '../types';

export const angolaData: CountryData = {
  id: 'angola',
  name: "Angola",
  shortName: 'Angola',
  flagEmoji: '🇦🇴',
  flagUrl: '/images/flags/angola.svg',
  coverImage: '/images/history/angola.jpg',
  category: 'global-south',
  era: '1975 – Present',
  capital: 'Luanda',
  keyLeaders: ['Queen Nzinga Mbande', 'Agostinho Neto', 'Fidel Castro', 'Samora Machel', 'José Eduardo dos Santos', 'João Lourenço'],
  governingParty: "MPLA",
  governingIdeology: 'Capitalism',
  isHistoricState: false,
  
  officialGovUrl: 'https://www.governo.gov.ao/',
  overviewText: `Angola represents a nation that endured 400+ years of Portuguese slave trading plunder and colonial forced labor, which achieved national liberation through an armed socialist revolution (**MPLA**) backed by heroic Cuban internationalist military assistance.

In the 17th century, **Queen Nzinga Mbande** of Ndongo and Matamba waged three decades of armed resistance against Portuguese slave traders. Under Portuguese fascist rule (Estado Novo), Angola was subjected to brutal forced labor (**Chibalo**), where millions of Angolan workers were coerced onto Portuguese coffee plantations and diamond mines (DIAMANG). In 1961, the People's Movement for the Liberation of Angola (**MPLA**), led by Marxist poet **Agostinho Neto**, launched an armed anti-colonial guerrilla war.

Following the collapse of Portuguese colonialism in 1975, US imperialism and the South African apartheid regime launched a covert invasion to overthrow the MPLA government. At the request of Agostinho Neto, Fidel Castro dispatched 36,000 Cuban internationalist troops (Operation Carlota). In 1988, Cuban and Angolan forces decisively defeated the apartheid South African army at the **Battle of Cuito Cuanavale**, forcing apartheid South Africa out of Angola, securing Namibian independence, and accelerating the collapse of apartheid in South Africa.`,

  quickFacts: [
    { label: 'Queen Nzinga Resistance (1620s)', value: 'Nzinga of Ndongo-Matamba waged 30 years of war against Portuguese slave traders [1]' },
    { label: 'MPLA Armed Liberation War (1961)', value: 'Marxist guerrillas led by Agostinho Neto launched armed struggle against Portugal [2]' },
    { label: 'Cuban Operation Carlota (1975)', value: '36,000 Cuban troops deployed by Fidel Castro to defend Angola from apartheid invasion [3]' },
    { label: 'Battle of Cuito Cuanavale (1988)', value: 'Cuban-Angolan forces defeated apartheid army, accelerating end of apartheid [4]' },
  ],

  timeline: [
    {
      id: 'angola-1600-queen-nzinga-portuguese-slave-trade',
      title: '1. 1600 – 1663: Queen Nzinga Mbande & 30-Year Armed War against Portuguese Slave Traders',
      period: '1600 – 1663',
      categoryTag: 'pre-revolution',
      summary: 'Queen Nzinga of Ndongo-Matamba wages 30 years of armed resistance against Portuguese slavers.',
      details: `Between the 16th and 19th centuries, Portuguese merchant capital transformed Angola into the primary source of enslaved labor for Brazilian sugar plantations, deporting over 4 million Angolans.

In the 1620s, **Queen Nzinga Mbande** of Ndongo and Matamba allied with local Mbundu communities and Dutch traders, forging an anti-colonial military coalition that resisted Portuguese slave raiding armies for over three decades until her death in 1663. [1]`,
      keyFigures: ['Queen Nzinga Mbande', 'King Garcia II of Kongo'],
      citationIds: [1],
    },
    {
      id: 'angola-1900-chibalo-forced-labor-diamang',
      title: '2. 1900 – 1960: Portuguese Colonial Plunder, Chibalo Forced Labor & Diamond Monopolies',
      period: '1900 – 1960',
      categoryTag: 'policies',
      summary: 'Portuguese Estado Novo enforces Chibalo forced labor; DIAMANG extracts Angolan diamonds.',
      details: `Under António de Oliveira Salazar's fascist Estado Novo, Portugal enforced **Chibalo**—a system of state-enforced forced labor compelling Angolans to work under brutal conditions on Portuguese coffee plantations and public infrastructure.

In 1912, foreign Anglo-American and Portuguese cartels established DIAMANG, acquiring an exclusive diamond extraction concession across the Lunda provinces. [1][2]`,
      keyFigures: ['António de Oliveira Salazar', 'Agostinho Neto'],
      citationIds: [1, 2],
    },
    {
      id: 'angola-1961-mpla-armed-liberation-struggle',
      title: '3. 1961 – 1974: The MPLA Armed Anti-Colonial Liberation Struggle & Agostinho Neto',
      period: '1961 – 1974',
      categoryTag: 'revolution',
      summary: 'Feb 4, 1961: MPLA attacks Luanda prisons; Agostinho Neto leads Marxist guerrilla liberation war.',
      details: `On February 4, 1961, militants from the **MPLA** (People's Movement for the Liberation of Angola) attacked Luanda prisons to liberate political prisoners, igniting the 14-year Angolan War of Independence.

Led by Marxist physician and poet **Agostinho Neto**, the MPLA organized liberated rural zones in eastern and central Angola, providing healthcare, literacy, and political education while fighting 60,000 Portuguese colonial troops equipped with NATO arms. [2]`,
      keyFigures: ['Agostinho Neto', 'Lúcio Lara', 'Amílcar Cabral (PAIGC Ally)'],
      citationIds: [2],
    },
    {
      id: 'angola-1975-independence-operation-carlota-cuba',
      title: '4. 1975: Nov 11, 1975 Independence & Cuban Operation Carlota Defeats Apartheid Invasion',
      period: '1975',
      categoryTag: 'revolution',
      summary: 'Nov 11, 1975 Independence; Fidel Castro sends 36,000 Cuban internationalists to defeat CIA & apartheid forces.',
      details: `Following the April 1974 Carnation Revolution in Lisbon, Portugal agreed to grant independence. However, the US CIA and South African apartheid military launched a two-front invasion to destroy the MPLA and install US puppet Jonas Savimbi (UNITA).

On November 5, 1975, Fidel Castro launched **Operation Carlota**, airlifting 36,000 Cuban internationalist troops to Luanda. On November 11, 1975, Agostinho Neto proclaimed the **People's Republic of Angola**. Combined Cuban-Angolan forces smashed the South African armored columns at the Battle of Kifangondo. [2][3]`,
      keyFigures: ['Agostinho Neto', 'Fidel Castro', 'Raúl Castro', 'Jonas Savimbi (CIA-Backed UNITA Leader)'],
      citationIds: [2, 3],
    },
    {
      id: 'angola-1976-peoples-republic-socialist-construction',
      title: '5. 1976 – 1986: The People\'s Republic of Angola & CIA-Funded UNITA Terror War',
      period: '1976 – 1986',
      categoryTag: 'successes',
      summary: 'MPLA builds People\'s Republic; nationalizing oil & diamond assets; CIA & Reagan fund UNITA terror.',
      details: `The MPLA government nationalized abandoned Portuguese properties, created state petroleum firm Sonangol, and established free universal healthcare and education staffed by Cuban doctors and teachers.

Concurrently, Ronald Reagan's White House and the CIA funneled hundreds of millions in covert arms (Stinger missiles) to Savimbi's UNITA, which sabotaged schools, hospitals, and infrastructure across rural Angola. [3]`,
      keyFigures: ['José Eduardo dos Santos', 'Jonas Savimbi', 'Ronald Reagan'],
      citationIds: [3],
    },
    {
      id: 'angola-1988-battle-cuito-cuanavale-apartheid-defeat',
      title: '6. 1987 – 1988: The Battle of Cuito Cuanavale: Defeating the Apartheid Army',
      period: '1987 – 1988',
      categoryTag: 'revolution',
      summary: 'March 1988: Cuban & Angolan forces crush apartheid South African invasion at Cuito Cuanavale.',
      details: `Between November 1987 and March 1988, the largest military battle on African soil since WWII took place at **Cuito Cuanavale** in southern Angola.

Fidel Castro reinforced Cuban troop deployments to 50,000. Combined Cuban MiG-23 pilots, Angolan tanks, and artillery decisively defeated South African Defense Forces (SADF). The defeat forced apartheid South Africa to withdraw from Angola, sign the 1988 New York Accords granting independence to Namibia, and shattered the myth of white military invincibility. [3][4]`,
      keyFigures: ['Fidel Castro', 'Arnaldo Ochoa', 'Nelson Mandela (Acknowledged Cuito Cuanavale victory)'],
      citationIds: [3, 4],
    },
    {
      id: 'angola-1991-bicesse-civil-war-continuation',
      title: '7. 1991 – 2002: Bicesse Accords, Multi-Party Transition & End of UNITA War',
      period: '1991 – 2002',
      categoryTag: 'challenges',
      summary: '1991 Bicesse Accords abandon Marxism-Leninism; Savimbi rejects 1992 elections; war ends in 2002.',
      details: `In 1991, under post-Cold War pressure, the MPLA dropped Marxism-Leninism, adopting multi-party constitutional democracy. When the MPLA won 1992 UN-monitored elections, Jonas Savimbi rejected the result and resumed civil war.

The war finally concluded in February 2002 when Savimbi was killed in battle by Angolan government forces, ending 41 years of continuous war. [4]`,
      keyFigures: ['José Eduardo dos Santos', 'Jonas Savimbi'],
      citationIds: [4],
    },
    {
      id: 'angola-present-sonangol-petroleum-china-partnership',
      title: '8. Present: Sonangol Petroleum Export, China Infrastructure & Inequality Challenges',
      period: 'Present',
      categoryTag: 'challenges',
      summary: 'Sonangol oil revenues; China oil-for-infrastructure partnerships; President João Lourenço reforms.',
      details: `Today, Angola stands as sub-Saharan Africa's second-largest crude oil producer. In the 2000s, Angola partnered with China in major oil-for-infrastructure deals, constructing modern railways, airports, and Kilamba satellite city.

Under President João Lourenço, Angola seeks to diversify beyond raw petroleum exports, address wealth concentration, and preserve the anti-imperialist legacy of its revolutionary founding. [3][4]`,
      keyFigures: ['João Lourenço', 'José Eduardo dos Santos', 'Xi Jinping'],
      citationIds: [3, 4],
    },
  ],

  sources: [
    {
      id: 1,
      label: 'Queen Nzinga and the 400-Year Portuguese Slave Trade in Angola',
      publisher: 'Linda M. Heywood / Harvard University Press',
      year: '2017',
      excerpt: 'Definitive historical study of Queen Nzinga Mbande, Mbundu resistance, and Portuguese slave extraction.',
    },
    {
      id: 2,
      label: 'Agostinho Neto and the MPLA Armed Struggle for Angolan Liberation',
      publisher: 'Basil Davidson / Penguin Books (In the Eye of the Storm)',
      year: '1972',
      excerpt: 'First-hand historical account of the MPLA armed liberation struggle, Chibalo forced labor, and Agostinho Neto\'s leadership.',
    },
    {
      id: 3,
      label: 'Missions in Conflict: Havana, Washington and the Angolan War (1975-1991)',
      publisher: 'Piero Gleijeses / University of North Carolina Press (Conflicting Missions)',
      year: '2002',
      excerpt: 'Landmark archival study of Cuban Operation Carlota, Fidel Castro\'s anti-imperialist intervention, and US CIA covert warfare.',
    },
    {
      id: 4,
      label: 'Visions of Freedom: Havana, Washington, Pretoria, and the Struggle for Southern Africa (1976-1991)',
      publisher: 'Piero Gleijeses / University of North Carolina Press',
      year: '2013',
      excerpt: 'Comprehensive historical account of the Battle of Cuito Cuanavale, the defeat of the apartheid army, and Namibian/South African liberation.',
    },
  ],
};
