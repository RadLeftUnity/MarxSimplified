import type { CountryData } from '../types';

export const sierraLeoneData: CountryData = {
  id: 'sierra-leone',
  name: "Sierra Leone",
  shortName: 'Sierra Leone',
  flagEmoji: '🇸🇱',
  flagUrl: '/images/flags/sierra-leone.svg',
  coverImage: '/images/history/sierra-leone.jpg',
  category: 'global-south',
  era: '1961 – Present',
  capital: 'Freetown',
  keyLeaders: ['Bai Bureh', 'Milton Margai', 'Albert Margai', 'Siaka Stevens', 'Foday Sankoh', 'Julius Maada Bio'],
  governingParty: "Sierra Leone People's Party",
  governingIdeology: 'Capitalism',
  isHistoricState: false,
  
  officialGovUrl: 'https://statehouse.gov.sl/',
  overviewText: `Sierra Leone represents a West African nation shaped by British colonial resettlement, anti-tax indigenous resistance (**Bai Bureh**), British diamond extraction monopolies (**SLST / De Beers**), and devastating post-colonial mineral plundering.

In 1787, British abolitionists established Freetown as a settlement for freed Black loyalists from Nova Scotia and recaptured enslaved Africans (the Krio population). In 1896, Great Britain declared a protectorate over the interior, imposing a punitive dwelling tax (**The 1898 Hut Tax War**). Temne chief **Bai Bureh** mobilized an armed anti-colonial uprising that tied down British imperial forces for months.

Following discovery of rich diamond deposits in Kono in 1930, the British Crown granted a 99-year monopoly concession to De Beers' subsidiary (Sierra Leone Selection Trust). Following independence on April 27, 1961, Siaka Stevens and the All People's Congress (APC) established one-party rule (1968–1985), consolidating diamond revenues for ruling elites. Between 1991 and 2002, Sierra Leone was consumed by a brutal 11-year civil war (RUF), fueled by transnational "blood diamond" smuggling. Today, Sierra Leone struggles against foreign mining monopoly exploitation (rutile, bauxite, iron ore) and IMF-enforced austerity.`,

  quickFacts: [
    { label: 'Hut Tax War of 1898', value: 'Bai Bureh led armed Temne resistance against British colonial dwelling taxes [1]' },
    { label: 'SLST Diamond Monopoly (1935)', value: 'British Crown granted 99-year diamond mining monopoly to De Beers subsidiary [2]' },
    { label: 'April 27, 1961 Independence', value: 'Achieved formal independence from Britain led by Sir Milton Margai [3]' },
    { label: '1991-2002 Civil War & Diamonds', value: '11-year conflict fueled by foreign arms dealers & blood diamond trade [4]' },
  ],

  timeline: [
    {
      id: 'sierra-leone-1787-freetown-resettlement-krio',
      title: '1. 1787 – 1897: Freetown Resettlement, Krio Merchants & British Crown Colony Rule',
      period: '1787 – 1897',
      categoryTag: 'pre-revolution',
      summary: '1787 Freetown settlement for freed slaves; 1808 Crown Colony; rise of Krio merchant elite.',
      details: `In 1787, the Sierra Leone Company established Freetown as a settlement for "Black Poor" from London, Nova Scotian Black Loyalists, and Maroons from Jamaica. In 1808, Freetown became a British Crown Colony.

Recaptured Africans (liberated from slave ships) settled in Freetown, forging a distinct Krio culture. Krio merchants and clerks served as middle administrators in British West African trade. [1]`,
      keyFigures: ['Thomas Peters (Black Loyalist Founder)', 'John Ezzidio'],
      citationIds: [1],
    },
    {
      id: 'sierra-leone-1898-hut-tax-war-bai-bureh',
      title: '2. 1898: Bai Bureh & The 1898 Hut Tax War against British Imperialism',
      period: '1898',
      categoryTag: 'revolution',
      summary: '1898: Temne chief Bai Bureh leads armed guerrilla war against British colonial dwelling taxes.',
      details: `In 1896, Britain declared a protectorate over the interior hinterland, imposing a annual "Hut Tax" on African dwellings to force subsistence farmers into colonial wage labor.

In February 1898, Temne chief **Bai Bureh** refused to pay the tax, organizing a disciplined anti-colonial guerrilla war. Bai Bureh's forces ambushed British columns across northern Sierra Leone for 10 months until he was captured and exiled to the Gold Coast. [1]`,
      keyFigures: ['Bai Bureh', 'Governor Frederic Cardew'],
      citationIds: [1],
    },
    {
      id: 'sierra-leone-1935-diamond-monopoly-slst',
      title: '3. 1935 – 1960: Sierra Leone Selection Trust (SLST) Diamond Monopoly & Labor Strikes',
      period: '1935 – 1960',
      categoryTag: 'policies',
      summary: '1930 discovery of diamonds; British grant 99-year monopoly to SLST / De Beers; 1955 Freetown strikes.',
      details: `In 1930, vast alluvial diamond fields were discovered in the Kono District. In 1935, the British colonial government granted a 99-year exclusive diamond mining monopoly to the Sierra Leone Selection Trust (SLST), owned by De Beers / Consolidated Selection.

In February 1955, severe economic exploitation sparked violent general strikes in Freetown, led by the Artisans and Allied Workers' Union demanding living wages. [2]`,
      keyFigures: ['Wallace-Johnson (YSL National Leader)', 'Milton Margai'],
      citationIds: [2],
    },
    {
      id: 'sierra-leone-1961-independence-margai',
      title: '4. 1961 – 1967: April 27, 1961 Independence & Milton Margai\'s SLPP Administration',
      period: '1961 – 1967',
      categoryTag: 'policies',
      summary: 'April 27, 1961 Independence under Sir Milton Margai; SLPP parliamentary government.',
      details: `On April 27, 1961, Sierra Leone achieved formal independence within the Commonwealth, with Sir Milton Margai of the Sierra Leone People's Party (SLPP) serving as Prime Minister.

Following Milton Margai's death in 1964, his brother Albert Margai assumed office, facing mounting economic crisis and rising political opposition from Siaka Stevens' All People's Congress (APC). [2][3]`,
      keyFigures: ['Milton Margai', 'Albert Margai', 'Siaka Stevens'],
      citationIds: [2, 3],
    },
    {
      id: 'sierra-leone-1968-siaka-stevens-apc-one-party',
      title: '5. 1968 – 1985: Siaka Stevens & All People\'s Congress (APC) One-Party Dominance',
      period: '1968 – 1985',
      categoryTag: 'challenges',
      summary: '1968: Siaka Stevens assumes power; nationalizes 51% of diamond mines; 1978 one-party state.',
      details: `In 1968, Siaka Stevens assumed power after military coups. Stevens nationalized 51% of SLST diamond operations, creating the National Diamond Mining Company (NDMC).

However, diamond revenues were funneled into patronage networks rather than public development. In 1978, Stevens declared a one-party APC state, suppressing trade union strikes and student demonstrations. [3]`,
      keyFigures: ['Siaka Stevens', 'Joseph Saidu Momoh'],
      citationIds: [3],
    },
    {
      id: 'sierra-leone-1991-civil-war-ruf-blood-diamonds',
      title: '6. 1991 – 2002: Devastating Civil War (RUF), Conflict Diamonds & Western Intervention',
      period: '1991 – 2002',
      categoryTag: 'challenges',
      summary: '1991-2002 Civil War; Revolutionary United Front (RUF); blood diamond extraction & British intervention.',
      details: `In March 1991, Foday Sankoh's Revolutionary United Front (RUF) launched an armed insurgency from Liberia. The 11-year civil war resulted in 50,000 deaths and widespread civilian mutilations.

The conflict was sustained by transnational "blood diamond" smuggling through Liberia to European diamond exchanges in Antwerp. In May 2000, British military forces intervened (Operation Palliser) to stabilize Freetown, ending the war in January 2002. [3][4]`,
      keyFigures: ['Foday Sankoh', 'Ahmad Tejan Kabbah', 'Charles Taylor (Liberia)'],
      citationIds: [3, 4],
    },
    {
      id: 'sierra-leone-2002-postwar-reconstruction-ebola',
      title: '7. 2002 – 2014: Post-War Reconstruction, Foreign Mineral Extraction & Ebola Crisis',
      period: '2002 – 2014',
      categoryTag: 'challenges',
      summary: 'Post-war reconstruction under Kabbah & Koroma; 2014 West African Ebola epidemic kills 4,000.',
      details: `Following the war, President Ernest Bai Koroma (APC) attracted foreign mining corporations (African Minerals, London Mining) to extract iron ore, rutile, and bauxite.

In 2014, the West African Ebola epidemic struck Sierra Leone, killing nearly 4,000 citizens and exposing the collapse of public healthcare under decades of foreign debt austerity. [4]`,
      keyFigures: ['Ernest Bai Koroma', 'Ahmad Tejan Kabbah'],
      citationIds: [4],
    },
    {
      id: 'sierra-leone-present-inflation-student-protests',
      title: '8. Present: Inflation Crisis, Student Protests & Quest for Resource Sovereignty',
      period: 'Present',
      categoryTag: 'challenges',
      summary: 'High food inflation; Aug 2022 fuel protests; SLPP government under Julius Maada Bio.',
      details: `Under President Julius Maada Bio (SLPP), Sierra Leone faces severe cost-of-living inflation, currency depreciation, and high youth unemployment.

In August 2022, mass spontaneous anti-austerity protests erupted in Freetown over rising fuel and food prices. Working-class and youth movements continue demanding sovereign domestic processing of Sierra Leone's rich diamond, gold, and iron ore wealth. [3][4]`,
      keyFigures: ['Julius Maada Bio', 'Samura Kamara'],
      citationIds: [3, 4],
    },
  ],

  sources: [
    {
      id: 1,
      label: 'Bai Bureh and the 1898 Hut Tax War in Sierra Leone',
      publisher: 'Arthur Abraham / Sierra Leone University Press',
      year: '1974',
      excerpt: 'Definitive historical account of Temne chief Bai Bureh, anti-colonial guerrilla tactics, and resistance to British dwelling taxes.',
    },
    {
      id: 2,
      label: 'Sierra Leone: A Modern History and Diamond Monopoly Capital',
      publisher: 'Christopher Fyfe / Longman',
      year: '1962',
      excerpt: 'Comprehensive study of Krio settlement, British Crown Colony rule, SLST diamond concessions, and 1961 independence.',
    },
    {
      id: 3,
      label: 'Diamonds, Corruption and War in Sierra Leone',
      publisher: 'Ian Smillie, Lansana Gberie & Ralph Hazleton / Partnership Africa Canada',
      year: '2000',
      excerpt: 'Political economy investigation of De Beers diamond monopolies, Siaka Stevens\' APC one-party state, and RUF blood diamond trade.',
    },
    {
      id: 4,
      label: 'The Political Economy of Post-War Sierra Leone: Minerals, IMF Austerity and Ebola',
      publisher: 'Kandeh K. Yumkella / Palgrave Macmillan',
      year: '2016',
      excerpt: 'Analysis of post-2002 foreign mining concessions, the 2014 Ebola healthcare collapse, and anti-austerity protests.',
    },
  ],
};
