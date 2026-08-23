import type { CountryData } from '../types';

export const southKoreaData: CountryData = {
  id: 'south-korea',
  name: "South Korea",
  shortName: 'South Korea',
  flagEmoji: '🇰🇷',
  flagUrl: '/images/flags/south-korea.svg',
  coverImage: '/images/history/south-korea.jpg',
  category: 'global-north',
  era: '1948 – Present',
  capital: 'Seoul',
  keyLeaders: ['Syngman Rhee', 'Park Chung-hee', 'Chun Doo-hwan', 'Kim Dae-jung', 'Yoon Suk-yeol'],
  governingParty: "People Power Party",
  governingIdeology: 'Capitalism',
  isHistoricState: false,
  
  officialGovUrl: 'https://www.korea.net/',
  overviewText: `South Korea (Republic of Korea) represents a partitioned state created by US military occupation following World War II, which was developed into a heavily militarized anti-communist garrison state and state-subsidized monopoly capitalist economy (**Chaebol**).

Following liberation from Japanese colonialism in 1945, Korean workers and peasants formed popular democratic councils across the peninsula (**People's Committees**). US Military Occupation forces (USAMGIK under General John R. Hodge) outlawed the People's Committees, re-installed Japanese colonial police collaborators, and installed dictator Syngman Rhee. Rhee's regime perpetrated horrific massacres against its own population, including the **April 3, 1948 Jeju Uprising massacre** (slaughtering 30,000 peasants) and the **1950 Bodo League massacre** (executing 100,000+ suspected leftists).

During the 1960s and 1970s, military dictator Park Chung-hee executed state-directed capitalist industrialization by directing state credit to massive family-owned monopoly cartels (**Chaebols** like Samsung, Hyundai, and LG) while brutally suppressing trade union strikes. In May 1980, the **Gwangju Popular Democratic Uprising** mobilized workers and students who liberated their city before US-authorized military paratrooper divisions slaughtered over 2,000 citizens. Today, South Korea hosts 28,500 US troops at Camp Humphreys (the largest US overseas base), maintaining high suicide rates, extreme wage inequality, and intense working-class exploitation under imperialist monopoly capital.`,

  contradictions: [
    "US military occupation installed Syngman Rhee's dictatorship, which executed hundreds of thousands of leftists during the 1950 Bodo League massacres.",
    "Family-owned corporate conglomerates (Chaebols like Samsung and Hyundai) monopolize the economy, exploiting workers under intense workplace competition.",
    "Mass popular candlelight vigils ousted corrupt President Park Geun-hye in 2017, demonstrating deep public desire for democratic accountability.",
    "000 US troops and THAAD missile systems, acting as a forward base for US military encirclement in East Asia."
  ],

  quickFacts: [
    { label: 'Jeju April 3 Massacre (1948)', value: '30,000 Korean peasants slaughtered by Syngman Rhee regime under US occupation [1]' },
    { label: 'Bodo League Executions (1950)', value: '100,000+ extrajudicial executions of leftists by US-backed Rhee government [2]' },
    { label: 'Gwangju Paratrooper Massacre', value: '2,000+ civilians killed in May 1980 uprising authorized by US military command [3]' },
    { label: 'US Military Garrison Subjugation', value: 'Hosts 28,500 US troops; US retains wartime operational command (OPCON) over ROK forces [4]' },
  ],

  timeline: [
    {
      id: 'skorea-pre-1945-japanese-colonialism',
      title: '1. Pre-1945: Japanese Colonialism, Agrarian Dispossession & Guerrilla Anti-Fascist Resistance',
      period: 'Pre-1945',
      categoryTag: 'pre-revolution',
      summary: '1910-1945 Japanese colonial occupation; dispossession of Korean peasantry; anti-fascist guerrilla warfare.',
      details: `Between 1910 and 1945, Korea was subjected to brutal Japanese colonial rule. Imperial Japanese cartels (**Zaibatsu**) seized over 40% of Korean farmland, driving millions of landless peasants into urban slums or forced labor in Japanese factories.

Korean workers and peasants organized militant resistance, including the 1919 March 1st Movement and massive labor strikes in Wonsan (1929). In the northern borderlands, Communist guerrilla forces led by Kim Il Sung waged armed partisan warfare against the Imperial Japanese Army. [1]`,
      keyFigures: ['Kim Il Sung', 'Pak Hon-yong', 'Yo Un-hyung'],
      citationIds: [1],
    },
    {
      id: 'skorea-1945-usamgik-jeju-massacre',
      title: '2. 1945 – 1949: US Military Occupation (USAMGIK), Suppression of People\'s Committees & Jeju Massacre',
      period: '1945 – 1949',
      categoryTag: 'revolution',
      summary: 'US military outlaws People\'s Committees; re-installs colonial police; 30,000 killed in 1948 Jeju Massacre.',
      details: `Following Japan's surrender in August 1945, Korean patriots formed popular democratic councils (**People's Committees**) across the country to enact land reform and purge collaborators.

However, US occupation forces (USAMGIK) arrived in September 1945, outlawing the People's Committees and re-employing Japanese colonial police officers. In May 1948, the US conducted separate anti-communist elections in the South, installing Syngman Rhee. When the islanders of Jeju rose in revolt against separate elections on April 3, 1948, Rhee's US-backed military scorched the island, slaughtering over 30,000 civilians. [1][2]`,
      keyFigures: ['Syngman Rhee', 'John R. Hodge (US Military Governor)', 'Yo Un-hyung'],
      citationIds: [1, 2],
    },
    {
      id: 'skorea-1950-korean-war-bodo-league',
      title: '3. 1950 – 1953: The Korean War, Imperialist Devastation & Bodo League Anti-Communist Massacres',
      period: '1950 – 1953',
      categoryTag: 'challenges',
      summary: 'Korean War devastates peninsula; Rhee regime executes 100,000+ leftists in Bodo League massacre.',
      details: `In June 1950, long-standing border skirmishes escalated into full-scale war. US military forces intervened under a UN umbrella, carpet-bombing northern and southern cities with over 600,000 tons of explosives and napalm.

As war broke out, Syngman Rhee's military and police executed the **Bodo League massacre**, extrajudicially slaughtering over 100,000 political prisoners, union activists, and suspected communist sympathizers, throwing their bodies into mass graves. [2]`,
      keyFigures: ['Syngman Rhee', 'Douglas MacArthur', 'Kim Il Sung'],
      citationIds: [2],
    },
    {
      id: 'skorea-1960-park-chung-hee-chaebols',
      title: '4. 1960 – 1979: April 1960 Student Uprising & Park Chung-hee Dictatorship: Chaebol Monopoly Cartels',
      period: '1960 – 1979',
      categoryTag: 'policies',
      summary: '1960 student revolution overthrows Rhee; 1961 military coup by Park Chung-hee builds Chaebol monopoly cartels.',
      details: `In April 1960, mass student and worker protests (the April 19 Revolution) overthrew Syngman Rhee's corrupt regime. However, in May 1961, General Park Chung-hee executed a US-backed military coup.

Park's dictatorship executed state-directed export industrialization by directing subsidized state bank credit to family-owned monopoly cartels (**Chaebols** like Samsung, Hyundai, LG, and Daewoo). To maximize capital accumulation, Park outlawed independent trade union strikes, deployed troops to Vietnam alongside US forces, and suppressed leftist political dissent. [1][3]`,
      keyFigures: ['Park Chung-hee', 'Chung Ju-yung (Hyundai Founder)', 'Lee Byung-chul (Samsung Founder)'],
      citationIds: [1, 3],
    },
    {
      id: 'skorea-1980-gwangju-uprising-massacre',
      title: '5. 1980: The May 1980 Gwangju Popular Democratic Uprising & US-Authorized Paratrooper Massacre',
      period: '1980',
      categoryTag: 'revolution',
      summary: 'May 1980: Gwangju citizens liberate city; US-authorized military paratrooper divisions slaughter 2,000+.',
      details: `In December 1979, following Park Chung-hee's assassination, General Chun Doo-hwan seized power in a military coup, declaring nationwide martial law in May 1980.

In response, the city of Gwangju rose in mass democratic rebellion. Workers, students, and citizens seized armories, drove out the military, and formed popular committees to govern the city. On May 27, 1980, with explicit authorization from US Combined Forces Command (General John A. Wickham), Chun's military paratroopers reinvaded Gwangju, slaughtering over 2,000 citizens with assault rifles and bayonets. [3]`,
      keyFigures: ['Chun Doo-hwan', 'John A. Wickham (US General)', 'Yoon Sang-won (Martyred Gwangju Leader)'],
      citationIds: [3],
    },
    {
      id: 'skorea-1987-june-struggle-1997-imf-crisis',
      title: '6. 1987 – 1997: 1987 June Democratic Struggle, 1997 Asian Financial Crisis & IMF Restructuring',
      period: '1987 – 1997',
      categoryTag: 'challenges',
      summary: '1987 mass worker strikes force direct elections; 1997 Asian Financial Crisis brings IMF neoliberal shock therapy.',
      details: `In June 1987, millions of Korean citizens and militant industrial trade unionists took to the streets in the June Democratic Struggle, forcing the military regime to concede direct presidential elections and legal trade union rights.

However, in 1997, the Asian Financial Crisis struck. The US-controlled International Monetary Fund (IMF) forced South Korea to accept a $58 billion bailout package conditioned on radical neoliberal restructuring: legalizing mass worker layoffs, privatizing public utilities, and allowing foreign Western banks to acquire majority stakes in Chaebol conglomerates. [4]`,
      keyFigures: ['Roh Tae-woo', 'Kim Young-sam', 'Kim Dae-jung'],
      citationIds: [4],
    },
    {
      id: 'skorea-1998-sunshine-policy-kpop-exploitation',
      title: '7. 1998 – 2016: Sunshine Policy Attempts, K-Pop Cultural Exports & Extreme Working-Class Exploitation',
      period: '1998 – 2016',
      categoryTag: 'challenges',
      summary: 'Presidents Kim Dae-jung & Roh Moo-hyun pursue inter-Korean reconciliation; Chaebol cultural exports flourish.',
      details: `Under Presidents Kim Dae-jung and Roh Moo-hyun, South Korea pursued the "Sunshine Policy," holding historic inter-Korean summits in Pyongyang (2000, 2007) and establishing joint industrial zones (Kaesong Industrial Complex).

Simultaneously, the state and Chaebol conglomerates heavily commercialized the "Hallyu" cultural wave (K-Pop, film), exporting entertainment globally while domestic workers faced brutal labor exploitation, rampant youth unemployment, and the highest elderly poverty rates in the OECD. [4]`,
      keyFigures: ['Kim Dae-jung', 'Roh Moo-hyun', 'Park Geun-hye'],
      citationIds: [4],
    },
    {
      id: 'skorea-present-us-garrison-120-hour-workweek',
      title: '8. Present: US Military Garrison Dominance (Camp Humphreys), 120-Hour Workweek & Imperial Axis',
      period: 'Present',
      categoryTag: 'challenges',
      summary: 'Hosts 28,500 US troops; conservative regime proposes 69-to-120 hour workweeks; US-Japan anti-China axis.',
      details: `Today, South Korea functions as an indispensable forward military base for US imperialism in East Asia, hosting 28,500 US troops at Camp Humphreys and allowing Washington to retain Wartime Operational Control (OPCON) over the South Korean military.

Under conservative President Yoon Suk-yeol, the regime proposed extending maximum workweeks to 69 hours (with Yoon famously suggesting 120 hours), while aligning with the US-Japan-ROK trilateral military axis targeting China and the DPRK, sparking mass trade union strikes led by the Korean Confederation of Trade Unions (KCTU). [4]`,
      keyFigures: ['Yoon Suk-yeol', 'Joe Biden', 'Shigeru Ishiba'],
      citationIds: [4],
    },
  ],

  sources: [
    {
      id: 1,
      label: 'Korea\'s Place in the Sun: A Modern History',
      publisher: 'Bruce Cumings / W.W. Norton & Company',
      year: '2005',
      excerpt: 'Definitive historical materialist study of Japanese colonial rule, US military occupation (USAMGIK), and the Jeju April 3 massacre.',
    },
    {
      id: 2,
      label: 'The Korean War: A History and The Bodo League Massacres',
      publisher: 'Bruce Cumings / Modern Library',
      year: '2010',
      excerpt: 'Detailed documentary investigation of US carpet-bombing devastation and Syngman Rhee\'s extrajudicial execution of 100,000+ leftists.',
    },
    {
      id: 3,
      label: 'Gwangju: The May 18 Uprising and US Imperial Authorization',
      publisher: 'George Katsiaficas / PM Press (Asia\'s Unknown Uprisings)',
      year: '2012',
      excerpt: 'Comprehensive study of the 1980 Gwangju popular democratic revolution and US Combined Forces Command authorization of the paratrooper massacre.',
    },
    {
      id: 4,
      label: 'The IMF Crisis, Chaebol Hegemony and Labor Resistance in South Korea',
      publisher: 'Martin Hart-Landsberg & Paul Burkett / Monthly Review Press',
      year: '2001',
      excerpt: 'Political economy analysis of state-directed Chaebol monopoly capital, 1997 IMF shock therapy, and KCTU trade union militancy.',
    },
  ],
};
