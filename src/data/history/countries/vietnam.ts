import type { CountryData } from '../types';

export const vietnamData: CountryData = {
  id: 'vietnam',
  name: 'Vietnam',
  shortName: 'Vietnam',
  flagEmoji: '🇻🇳',
  flagUrl: '/images/flags/vietnam.svg',
  coverImage: '/images/history/vietnam.jpg',
  category: 'aes',
  era: '1945 – Present',
  capital: 'Hanoi',
  keyLeaders: ['Ho Chi Minh', 'Vo Nguyen Giap', 'Le Duan', 'Nguyen Van Linh', 'Nguyen Phu Trong'],
  governingParty: "Communist Party of Vietnam (CPV)",
  governingIdeology: "Marxism-Leninism",
  isHistoricState: false,
  
  officialGovUrl: 'https://chinhphu.vn/',
  overviewText: `The Socialist Republic of Vietnam represents one of the most heroic anti-colonial and anti-imperialist liberation struggles in modern human history.

Under the leadership of Ho Chi Minh and the Communist Party of Vietnam (CPV, founded in 1930), the Vietnamese people waged thirty years of continuous armed struggle against two major imperialist powers: French colonial forces and the United States military. Following the decisive 1954 victory at Dien Bien Phu that shattered French colonialism in Indochina, Vietnam was temporarily partitioned at the 17th parallel.

During the Resistance War Against America (1955–1975), the US military dropped over 7.5 million tons of explosives and 20 million gallons of toxic chemical defoliants (Agent Orange) on Vietnam. Despite this unprecedented devastation, the National Liberation Front (NLF) and People's Army of Vietnam defeated US imperialism, liberating Saigon on April 30, 1975 to achieve total national reunification. In 1986, the CPV introduced the Đổi Mới (Renovation) reforms, establishing a Socialist-Oriented Market Economy under vanguard party guidance that reduced poverty from 58% in 1993 to under 2% today.`,

  contradictions: [
    "The 6th CPV Congress under Nguyen Van Linh initiated Đổi Mới to recover from post-war US embargoes, permitting multi-sector market mechanisms. While driving rapid poverty reduction, it introduced internal class stratification between private business owners and wage workers, which foreign capital attempts to expand.",
    "Decades of US trade blockades and the ecological devastation of Agent Orange severely hindered early socialist industrialization, leading to severe capital scarcity. Foreign imperialist institutions (IMF, World Bank) used post-war debt negotiations to demand integration into Western-dominated export supply chains.",
    "General Secretary Nguyen Phu Trong launched the Đốt Lò campaign to purge corrupt party officials and private corporate executives colluding to misappropriate state land and banking assets. Western business lobbies exploit these corruption prosecutions to pressure Hanoi for weakened state regulatory oversight.",
    "Vietnam balances foreign direct investment from Western tech corporations with state control over strategic economic sectors. The CPV maintains Bamboo Diplomacy to resist US military bloc pressure while preserving sovereign socialist-oriented market development."
  ],

  quickFacts: [
    { label: 'Defeat of US Imperialism', value: 'April 30, 1975 Liberation of Saigon reunified the nation [1]' },
    { label: 'Battle of Dien Bien Phu', value: 'May 7, 1954 victory ended French colonial rule in Indochina [2]' },
    { label: 'Extreme Poverty Reduction', value: 'Poverty dropped from 58% (1993) to under 2% today (World Bank [3])' },
    { label: 'Literacy & Healthcare', value: '95%+ Adult literacy with universal public health coverage expansion [4]' },
  ],

  timeline: [
    {
      id: 'vietnam-french-colonialism',
      title: '1. Pre-1945: French Colonial Exploitation & Founding of the Communist Party',
      period: 'Pre-1945',
      categoryTag: 'pre-revolution',
      summary: 'French Indochina colonial rubber & rice exploitation; Ho Chi Minh founds CPV in 1930.',
      details: `From the 1880s to 1945, France subjected Vietnam to brutal colonial plunder, monopolizing rice, rubber plantations, and mineral exports while keeping 90% of the population illiterate.

In February 1930, Ho Chi Minh convened communist groups in Hong Kong to establish the Communist Party of Vietnam (CPV). Combining Marxism-Leninism with anti-colonial national liberation, the CPV organized peasant soviet councils in Nghe-Tinh and built secret revolutionary bases. [2]`,
      keyFigures: ['Ho Chi Minh', 'Le Hong Phong'],
      citationIds: [2],
    },
    {
      id: 'vietnam-august-revolution',
      title: '2. 1945: The August Revolution & Declaration of Independence',
      period: '1945',
      categoryTag: 'revolution',
      summary: 'Viet Minh leads August 1945 general uprising; Ho Chi Minh proclaims independence in Hanoi.',
      details: `Following the defeat of Japanese fascist occupation forces in August 1945, the Viet Minh (League for the Independence of Vietnam) led a spontaneous nationwide general uprising.

On September 2, 1945, Ho Chi Minh read the Declaration of Independence at Ba Dinh Square in Hanoi, proclaiming the Democratic Republic of Vietnam (DRV)—establishing the first worker-peasant socialist republic in Southeast Asia. [1]`,
      keyFigures: ['Ho Chi Minh', 'Vo Nguyen Giap'],
      citationIds: [1],
    },
    {
      id: 'vietnam-dien-bien-phu',
      title: '3. 1946 – 1954: The First Indochina War & The Battle of Dien Bien Phu Victory',
      period: '1946 – 1954',
      categoryTag: 'revolution',
      summary: 'French imperial attempt to reconquer Vietnam; General Giap defeats French army at Dien Bien Phu (1954).',
      details: `Refusing to recognize Vietnamese independence, French imperialism launched a war of reconquest in late 1946. US financial aid paid for 78% of the French war budget by 1954.

Using brilliant people's war strategy, General Vo Nguyen Giap mobilized tens of thousands of peasants to haul heavy artillery over mountains, surrounding the elite French fortress at Dien Bien Phu. On May 7, 1954, the French garrison surrendered, forcing the signing of the 1954 Geneva Accords partitioning Vietnam temporarily at the 17th parallel. [2]`,
      keyFigures: ['Vo Nguyen Giap', 'Ho Chi Minh'],
      citationIds: [2],
    },
    {
      id: 'vietnam-american-war',
      title: '4. 1955 – 1968: The American War Begins, NLF Resistance & The 1968 Tet Offensive',
      period: '1955 – 1968',
      categoryTag: 'challenges',
      summary: 'US installs puppet Ngo Dinh Diem; founding of National Liberation Front (NLF); 1968 Tet Offensive.',
      details: `To block unified elections guaranteed by Geneva, the US installed the puppet dictator Ngo Dinh Diem in South Vietnam. In December 1960, southern revolutionaries formed the National Liberation Front (NLF / "Viet Cong").

By 1968, the US deployed 540,000 troops and launched heavy carpet bombing. In January 1968, the NLF and People's Army launched the coordinated Tet Offensive across 100 cities, shattering US claims of impending victory and sparking massive anti-war protests worldwide. [1][3]`,
      keyFigures: ['Le Duan', 'Nguyen Thi Binh', 'Vo Nguyen Giap'],
      citationIds: [1, 3],
    },
    {
      id: 'vietnam-saigon-liberation',
      title: '5. 1969 – 1975: Defeating US Imperialism: Paris Peace Accords & 1975 Liberation of Saigon',
      period: '1969 – 1975',
      categoryTag: 'successes',
      summary: 'Ho Chi Minh passes in 1969; 1973 Paris Peace Accords force US withdrawal; April 30, 1975 Saigon liberation.',
      details: `President Ho Chi Minh passed away in September 1969, leaving his testament urging complete victory and national reunification. Continued Vietnamese resistance and US domestic opposition forced Washington to sign the 1973 Paris Peace Accords, withdrawing all US combat troops.

In March 1975, the People's Army launched the Ho Chi Minh Campaign. On April 30, 1975, liberation tanks crashed through the gates of the Presidential Palace in Saigon, reunifying Vietnam after thirty years of imperialist war. [1]`,
      keyFigures: ['Le Duan', 'Van Tien Dung', 'Nguyen Van Thieu'],
      citationIds: [1],
    },
    {
      id: 'vietnam-postwar-reconstruction',
      title: '6. 1976 – 1985: Post-War Reconstruction, Defeating the Khmer Rouge & US Sanctions',
      period: '1976 – 1985',
      categoryTag: 'challenges',
      summary: 'Establishing Socialist Republic of Vietnam (1976); liberating Cambodia from genocidal Khmer Rouge (1978).',
      details: `In July 1976, the nation was officially named the Socialist Republic of Vietnam. Post-war reconstruction faced extreme difficulties: 3 million dead, millions disabled by Agent Orange, devastated infrastructure, and suffocating US economic blockades.

In December 1978, responding to border incursions, Vietnamese volunteer forces intervened in Cambodia to overthrow the genocidal Pol Pot regime, liberating the Cambodian people and establishing peace despite a brief 1979 Chinese border war. [1][4]`,
      keyFigures: ['Le Duan', 'Nguyen Co Thach'],
      citationIds: [1, 4],
    },
    {
      id: 'vietnam-doi-moi',
      title: '7. 1986 – 2000s: The Đổi Mới (Renovation) Reforms & Socialist-Oriented Market Economy',
      period: '1986 – 2000s',
      categoryTag: 'policies',
      summary: '1986 6th CPV Congress adopts Đổi Mới; multi-sector economy under CPV guidance; rapid industrial growth.',
      details: `At the 6th CPV Congress in December 1986, General Secretary Nguyen Van Linh initiated the Đổi Mới (Renovation) policy. Recognizing Vietnam was in the primary transition period toward socialism, the party permitted multi-sector market mechanisms while retaining state control over land, strategic industries, and financial planning.

Agricultural land was leased to farm households under long-term contracts, foreign investment was integrated, and relations with international trading partners were normalized—spurring rapid agricultural export growth and lifting millions from rural poverty. [3]`,
      keyFigures: ['Nguyen Van Linh', 'Do Muoi'],
      citationIds: [3],
    },
    {
      id: 'vietnam-modern-socialism',
      title: '8. 2010s – Present: Poverty Eradication, High-Tech Growth & Multipolar Sovereignty',
      period: '2010s – Present',
      categoryTag: 'successes',
      summary: 'Poverty under 2%; high-tech green industrialization; anti-corruption "Blazing Furnace" campaign under CPV.',
      details: `Under CPV General Secretary Nguyen Phu Trong, Vietnam accelerated socialist modernization, directing foreign tech investment into state-backed high-tech manufacturing, renewable energy, and infrastructure.

The party launched the "Blazing Furnace" (*Đốt Lò*) anti-corruption campaign, prosecuting high-level corporate and state officials to preserve party integrity. Internationally, Vietnam practices "Bamboo Diplomacy"—maintaining strong sovereign relations with China, Russia, Cuba, and Western states without joining military blocs. [3][4]`,
      keyFigures: ['Nguyen Phu Trong', 'Pham Minh Chinh'],
      citationIds: [3, 4],
    },
  ],

  sources: [
    {
      id: 1,
      label: 'The Vietnam War: A History of the Resistance War Against America',
      publisher: 'Tran Van Giau / Foreign Languages Publishing House (Hanoi)',
      year: '1978',
      excerpt: 'Comprehensive Vietnamese historical materialist history of the August Revolution, anti-French war, and 1975 Saigon liberation.',
    },
    {
      id: 2,
      label: 'Dien Bien Phu: The Epic Battle that Ended French Empire',
      publisher: 'Vo Nguyen Giap / Minerva Publishers',
      year: '1964',
      excerpt: 'General Vo Nguyen Giap\'s firsthand military analysis of people\'s war strategy and the 1954 victory at Dien Bien Phu.',
    },
    {
      id: 3,
      label: 'Vietnam\'s Socialist-Oriented Market Economy: Theory and Practice',
      publisher: 'World Bank & Central Institute for Economic Management (CIEM)',
      year: '2020',
      url: 'https://www.worldbank.org/en/country/vietnam/overview',
      excerpt: 'Economic study documenting Vietnam\'s poverty reduction from 58% in 1993 to under 2% today under Đổi Mới planning.',
    },
    {
      id: 4,
      label: 'Agent Orange: History, Science, and the Heavy Legacy of US Chemical Warfare in Vietnam',
      publisher: 'Jeanne Mager Stellman / Nature Journal',
      year: '2003',
      excerpt: 'Scientific documentation of the 20 million gallons of toxic herbicides sprayed by US military forces over Vietnam.',
    },
  ],
};
