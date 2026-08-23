import type { CountryData } from '../types';

export const mozambiqueData: CountryData = {
  id: 'mozambique',
  name: "Mozambique",
  shortName: 'Mozambique',
  flagEmoji: '🇲🇿',
  flagUrl: '/images/flags/mozambique.svg',
  coverImage: '/images/history/mozambique.jpg',
  category: 'global-south',
  era: '1975 – Present',
  capital: 'Maputo',
  keyLeaders: ['Eduardo Mondlane', 'Samora Machel', 'Joaquim Chissano', 'Filipe Nyusi', 'Daniel Chapo'],
  governingParty: "FRELIMO",
  governingIdeology: 'Capitalism',
  isHistoricState: false,
  
  officialGovUrl: 'https://www.portaldogoverno.gov.mz/',
  overviewText: `Mozambique represents a nation forged through 400+ years of Portuguese colonial land theft and forced labor, which won independence through a Marxist-Leninist armed revolution (**FRELIMO**) supported by Chinese military training, Soviet arms, and Cuban medical assistance.

In June 1962, **Eduardo Mondlane** founded FRELIMO (Mozambican Liberation Front), launching an armed liberation struggle in September 1964. FRELIMO military commanders (including **Samora Machel**) received military training in China at the Nachingwea camp in Tanzania and heavy weaponry from the Soviet Union. FRELIMO liberated rural provinces, establishing liberated zones with collective agriculture, free healthcare, and schools.

On June 25, 1975, Samora Machel proclaimed the **People's Republic of Mozambique**, declaring Marxism-Leninism, nationalizing land, banks, and education, and granting rear-base support to anti-apartheid fighters (ZANU and ANC). In response, white-minority regimes in Rhodesia and South Africa created and funded the RENAMO terrorist proxy to destroy Mozambican infrastructure. Following Samora Machel's tragic martyrdom in a 1986 plane crash, Mozambique faced IMF structural adjustment, but today maintains strong economic ties with China (building the Maputo-Katembe suspension bridge) and Russia.`,

  quickFacts: [
    { label: 'FRELIMO Liberation War (1964)', value: 'Eduardo Mondlane & Samora Machel launched armed struggle trained by China & USSR [1]' },
    { label: 'June 25, 1975 Socialist Independence', value: 'Samora Machel proclaimed People\'s Republic, nationalizing land, banks & schools [2]' },
    { label: 'Frontline Support for ANC & ZANU', value: 'Mozambique hosted freedom fighters, suffering Rhodesia/South Africa RENAMO terror [3]' },
    { label: 'China BRI Maputo Bridge ($785M)', value: 'Maputo-Katembe suspension bridge built in South-South economic partnership [4]' },
  ],

  timeline: [
    {
      id: 'mozambique-1500-portuguese-colonialism-prazos',
      title: '1. 1500 – 1960: Portuguese Colonial Plunder, Prazos Feudal Land Theft & Forced Cotton',
      period: '1500 – 1960',
      categoryTag: 'pre-revolution',
      summary: '400 years of Portuguese colonialism; Prazos land grants; Chibalo forced labor on cotton farms.',
      details: `From the 16th century, Portuguese traders operated coastal slave ports in Mozambique. Colonial authorities granted vast feudal land estates (Prazos) to Portuguese settlers, dispossessing native populations.

Under Salazar's fascist Estado Novo, Portugal enforced **Chibalo** forced labor, compelling peasant families to cultivate raw cotton for Portuguese textile cartels under threat of public beatings. [1]`,
      keyFigures: ['António de Oliveira Salazar', 'Eduardo Mondlane'],
      citationIds: [1],
    },
    {
      id: 'mozambique-1962-frelimo-founding-chinese-soviet-training',
      title: '2. 1962 – 1974: FRELIMO Armed Struggle, Chinese Military Training & Samora Machel',
      period: '1962 – 1974',
      categoryTag: 'revolution',
      summary: '1962: Mondlane founds FRELIMO; 1964 armed struggle; guerrillas trained in China & armed by USSR.',
      details: `In June 1962 in Dar es Salaam, **Eduardo Mondlane** united anti-colonial groups into FRELIMO. On September 25, 1964, FRELIMO launched armed guerrilla war in Cabo Delgado.

FRELIMO commanders (led by **Samora Machel**) received military training in China (under Maoist guerrilla doctrine) and heavy arms from the Soviet Union. After Mondlane was assassinated by a Portuguese parcel bomb in 1969, Samora Machel assumed command, liberating over a third of the country. [1][2]`,
      keyFigures: ['Eduardo Mondlane', 'Samora Machel', 'Josina Machel', 'Marcelino dos Santos'],
      citationIds: [1, 2],
    },
    {
      id: 'mozambique-1975-peoples-republic-socialist-construction',
      title: '3. 1975: June 25, 1975 Independence & The People\'s Republic of Mozambique',
      period: '1975',
      categoryTag: 'successes',
      summary: 'June 25, 1975: Samora Machel proclaims People\'s Republic; nationalizing land, banks & healthcare.',
      details: `On June 25, 1975, Samora Machel proclaimed the **People's Republic of Mozambique**. In 1977, FRELIMO formally declared itself a Marxist-Leninist vanguard party.

The socialist state nationalized all land, private healthcare, rented housing, and schools, while Cuban internationalist medical and educational brigades provided doctors and teachers across the country. [2]`,
      keyFigures: ['Samora Machel', 'Graça Machel', 'Fidel Castro'],
      citationIds: [2],
    },
    {
      id: 'mozambique-1976-frontline-state-renamo-terror-war',
      title: '4. 1976 – 1985: Frontline Support for ZANU/ANC & Rhodesia/South Africa RENAMO Terror',
      period: '1976 – 1985',
      categoryTag: 'challenges',
      summary: 'Mozambique bases ZANU & ANC guerrillas; white-minority regimes create RENAMO proxy death squads.',
      details: `Samora Machel provided rear bases, weapons, and diplomatic support to Robert Mugabe's ZANU (Zimbabwe) and Nelson Mandela's ANC (South Africa).

In retaliation, Rhodesian intelligence and South African military intelligence created and funded **RENAMO**, a proxy terrorist organization that systematically destroyed Mozambican schools, clinics, railway lines, and power grids, killing 1 million citizens. [2][3]`,
      keyFigures: ['Samora Machel', 'Robert Mugabe', 'Oliver Tambo (ANC Leader)'],
      citationIds: [2, 3],
    },
    {
      id: 'mozambique-1986-martyrdom-samora-machel-nkomati',
      title: '5. 1986: The Tragic Martyrdom of Samora Machel & The Nkomati Accord Pressure',
      period: '1986',
      categoryTag: 'challenges',
      summary: 'Oct 19, 1986: President Samora Machel killed in suspicious plane crash orchestrated by South Africa.',
      details: `Under severe economic blockade, Mozambique signed the 1984 Nkomati Accord with South Africa, agreeing to cease ANC support if South Africa stopped funding RENAMO (a treaty South Africa violated).

On October 19, 1986, President **Samora Machel** and 33 senior officials were martyred when their presidential Tupolev aircraft crashed inside South Africa under suspicious circumstances involving South African military decoy beacons. [3]`,
      keyFigures: ['Samora Machel', 'Joaquim Chissano', 'P.W. Botha (Apartheid President)'],
      citationIds: [3],
    },
    {
      id: 'mozambique-1987-chissano-imf-peace-accord',
      title: '6. 1987 – 1994: Joaquim Chissano, 1992 Rome Peace Accords & IMF Restructuring',
      period: '1987 – 1994',
      categoryTag: 'challenges',
      summary: '1989 FRELIMO drops Marxism; 1992 Rome Peace Accords end civil war; IMF neoliberal shock therapy.',
      details: `Under President Joaquim Chissano, facing total economic collapse, FRELIMO dropped Marxism-Leninism in 1989 and adopted a multi-party constitution in 1990.

The October 1992 Rome Peace Accords ended the 16-year RENAMO war. The IMF and World Bank imposed harsh structural adjustment, privatizing state enterprises and user fees for health services. [3][4]`,
      keyFigures: ['Joaquim Chissano', 'Afonso Dhlakama (RENAMO Leader)'],
      citationIds: [3, 4],
    },
    {
      id: 'mozambique-2000-offshore-gas-china-bridge',
      title: '7. 2000 – 2019: Offshore Gas Discoveries & China BRI Maputo Bridge Infrastructure',
      period: '2000 – 2019',
      categoryTag: 'policies',
      summary: 'Vast Cabo Delgado offshore gas discoveries; China builds $785M Maputo-Katembe suspension bridge.',
      details: `In the 2010s, massive natural gas fields (over 100 trillion cubic feet) were discovered off the coast of Cabo Delgado, attracting Western energy giants (TotalEnergies, ExxonMobil).

Concurrently, China Road and Bridge Corporation constructed the $785 million Maputo-Katembe suspension bridge (Africa's longest suspension bridge), connecting Maputo to South Africa. [4]`,
      keyFigures: ['Armando Guebuza', 'Filipe Nyusi', 'Xi Jinping'],
      citationIds: [4],
    },
    {
      id: 'mozambique-present-cabo-delgado-insurgency-sovereignty',
      title: '8. Present: Cabo Delgado Northern Insurgency & Working-Class Anti-Imperialist Struggles',
      period: 'Present',
      categoryTag: 'challenges',
      summary: 'Cabo Delgado gas region conflict; SAMIM & Rwandan security deployment; FRELIMO government.',
      details: `Since 2017, northern Cabo Delgado has suffered from violent insurgent attacks, forcing TotalEnergies to suspend its $20 billion LNG project. Southern African regional forces (SADC / SAMIM) and Rwandan troops were deployed to restore stability.

Under FRELIMO leadership, Mozambican workers and peasants continue advocating for sovereign control over natural gas revenues, fair agrarian land distribution, and genuine public health investment. [3][4]`,
      keyFigures: ['Filipe Nyusi', 'Daniel Chapo'],
      citationIds: [3, 4],
    },
  ],

  sources: [
    {
      id: 1,
      label: 'Mozambique: The Revolution Under Fire & FRELIMO Liberation War',
      publisher: 'Joseph Hanlon / Zed Books',
      year: '1984',
      excerpt: 'Definitive historical materialist study of Portuguese colonial forced labor, Eduardo Mondlane, and FRELIMO\'s armed struggle.',
    },
    {
      id: 2,
      label: 'Samora Machel: An African Revolutionary (Selected Speeches)',
      publisher: 'Samora Machel / Zed Books',
      year: '1985',
      excerpt: 'First-hand speeches of Samora Machel detailing Marxist-Leninist state construction, land nationalization, and anti-apartheid solidarity.',
    },
    {
      id: 3,
      label: 'Mozambique: Who Calls the Shots? RENAMO Terror, South African Destabilization and IMF Shock Therapy',
      publisher: 'Joseph Hanlon / James Currey',
      year: '1991',
      excerpt: 'Investigative political economy detailing Rhodesian and South African creation of RENAMO, Samora Machel\'s death, and IMF austerity.',
    },
    {
      id: 4,
      label: 'Gas, Mega-Projects and Development in Mozambique: China BRI and Foreign Extraction',
      publisher: 'Lars Buur & Sergio Chichava / Oxford University Press',
      year: '2019',
      excerpt: 'Analysis of Cabo Delgado natural gas fields, China BRI Maputo bridge infrastructure, and post-socialist political economy.',
    },
  ],
};
