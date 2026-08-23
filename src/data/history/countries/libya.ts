import type { CountryData } from '../types';

export const libyaData: CountryData = {
  id: 'libya',
  name: "Libya",
  shortName: 'Libya',
  flagEmoji: '🇱🇾',
  flagUrl: '/images/flags/libya.svg',
  coverImage: '/images/history/libya.jpg',
  category: 'global-south',
  era: '1911 – Present',
  capital: 'Tripoli',
  keyLeaders: ['Omar al-Mukhtar', 'Muammar Gaddafi'],
  governingParty: "Basic People's Congresses",
  
  officialGovUrl: 'https://pm.gov.ly/',
  overviewText: `From an anti-imperialist and historical materialist perspective, Libya's modern history represents a battle against colonial genocide, foreign oil plunder, and imperialist state destruction.

Following decades of heroic resistance led by Omar al-Mukhtar against Italian fascist colonial genocide (1911–1931), Libya was ruled by an Anglo-American puppet monarchy (King Idris) that leased naval bases to the US military (Wheelus Field) and handed oil concessions to Western corporations. On September 1, 1969, young anti-imperialist officers led by Muammar Gaddafi overthrew the monarchy, expelled US military bases, nationalized foreign oil monopolies, and redirected petroleum wealth toward national development.

Under the Jamahiriya ("State of the Masses") framework, Libya achieved the highest Human Development Index (HDI) score in Africa: guaranteeing free public housing, free education, free healthcare, subsidized electricity, and constructing the Great Man-Made River—the world's largest underground irrigation network. In 2011, NATO forces launched an aggressive military intervention, destroying the state apparatus, resulting in slave markets, economic collapse, and ongoing imperialist fragmentation.`,

  contradictions: [
    "Muammar Gaddafi's 1969 revolution nationalized oil reserves and built the Great Man-Made River, achieving the highest human development index in Africa.",
    "The 2011 NATO military bombardment destroyed the sovereign state, resulting in Gaddafi's murder, open slave markets, and ongoing warlord partition.",
    "Rival Western-backed and regional factions battle for control over Libya's oil revenues while foreign energy monopolies extract crude wealth.",
    "NATO intervention transformed a prosperous non-aligned nation into a fractured staging ground for regional instability and human trafficking."
  ],

  quickFacts: [
    { label: 'Highest African HDI', value: 'Ranked #1 Human Development Index in Africa prior to 2011 NATO invasion [1]' },
    { label: 'Great Man-Made River', value: '$33 Billion self-funded water engineering project irrigating 130,000 hectares [2]' },
    { label: 'Free Public Housing Policy', value: 'Housing declared a basic human right; zero mortgages or rent exploitation [3]' },
    { label: 'African Currency Initiative', value: 'Spearheaded gold-backed Dinar to replace French CFA & US Dollar [4]' },
  ],

  timeline: [
    {
      id: 'libya-italian-colonialism',
      title: '1. 1911 – 1943: Italian Colonial Genocide & Omar al-Mukhtar\'s Guerrilla Resistance',
      period: '1911 – 1943',
      categoryTag: 'pre-revolution',
      summary: 'Italian invasion of 1911; fascist concentration camps; Omar al-Mukhtar\'s 20-year armed resistance.',
      details: `In 1911, imperial Italy invaded Libya. Under fascist dictator Benito Mussolini, Italian military forces waged a genocidal war of conquest, forcibly incarcerating over 100,000 Bedouin civilians in desert concentration camps where half perished from starvation and disease.

Omar al-Mukhtar ("Lion of the Desert") organized anti-colonial guerrilla resistance for twenty years, inflicting heavy losses on Italian occupation troops. Captured in 1931, the 73-year-old resistance leader was executed by hanging, becoming an immortal symbol of African and Arab anti-colonial liberation. [3]`,
      keyFigures: ['Omar al-Mukhtar', 'Benito Mussolini', 'Rodolfo Graziani'],
      citationIds: [3],
    },
    {
      id: 'libya-monarchy-plunder',
      title: '2. 1951 – 1969: Anglo-American Puppet Monarchy & Foreign Oil Concession Plunder',
      period: '1951 – 1969',
      categoryTag: 'challenges',
      summary: 'King Idris monarchy established in 1951; Wheelus Air Base leased to US; Western oil cartels extract wealth.',
      details: `Following World War II, the United Nations recognized Libya's independence in 1951 under King Idris I. The monarchist regime functioned as a client state for Western imperialism, hosting the massive US military Wheelus Air Base and British military garrisons.

When vast petroleum reserves were discovered in 1959, Western oil monopolies (Exxon, Mobil, BP) extracted billions in profits, leaving over 80% of the Libyan population illiterate, impoverished, and living in informal shantytowns without clean water or healthcare. [4]`,
      keyFigures: ['King Idris I'],
      citationIds: [4],
    },
    {
      id: 'libya-september-revolution',
      title: '3. 1969: The September 1st Revolution: Expelling US Bases & Oil Nationalization',
      period: '1969',
      categoryTag: 'revolution',
      summary: 'September 1, 1969 bloodless revolution; expelling US/UK military bases; nationalizing foreign oil companies.',
      details: `On September 1, 1969, a group of patriotic young military officers (the Free Unionist Officers) led by 27-year-old Muammar Gaddafi executed a bloodless coup, overthrowing the monarchy while King Idris was abroad.

The new government immediately closed Wheelus Air Base and British military posts, evicted remaining Italian colonial landlords, and nationalized major foreign oil companies. Libya forced oil monopolies to pay higher royalties, raising state revenues to fund public welfare. [3]`,
      keyFigures: ['Muammar Gaddafi', 'Free Unionist Officers'],
      citationIds: [3],
    },
    {
      id: 'libya-jamahiriya-welfare',
      title: '4. 1977 – 1989: Proclaiming the Jamahiriya & Building the Great Man-Made River',
      period: '1977 – 1989',
      categoryTag: 'successes',
      summary: '1977 proclamation of Jamahiriya direct democracy; launching Great Man-Made River; free housing & healthcare.',
      details: `In March 1977, Gaddafi proclaimed the Socialist People's Libyan Arab Jamahiriya ("State of the Masses"). Political authority was theoretically decentralized into local Basic People's Congresses.

Using state oil revenue, Libya launched the Great Man-Made River in 1984—a $33 billion civil engineering project piping 6.5 million cubic meters of fresh water daily from fossil aquifers beneath the Sahara to coastal agricultural zones. The state guaranteed free public housing, free healthcare, zero electricity fees, and stipends for university graduates. [2][3]`,
      keyFigures: ['Muammar Gaddafi'],
      citationIds: [2, 3],
    },
    {
      id: 'libya-us-bombing-resistance',
      title: '5. 1986: Resisting Imperialist Aggression: The 1986 US Bombing of Tripoli & Benghazi',
      period: '1986',
      categoryTag: 'challenges',
      summary: 'US President Reagan orders Operation El Dorado Canyon; US jet bombers strike Tripoli and Benghazi.',
      details: `Due to Libya's financial support for anti-imperialist liberation movements worldwide (including the ANC in South Africa, the IRA in Ireland, and Palestinian groups), US President Ronald Reagan declared Libya an "outlaw nation."

In April 1986, US aircraft launched Operation El Dorado Canyon, bombing residential areas in Tripoli and Benghazi. The air strikes killed dozens of civilians, including Gaddafi's adopted infant daughter, but failed to destabilize the regime. [3][4]`,
      keyFigures: ['Muammar Gaddafi', 'Ronald Reagan'],
      citationIds: [3, 4],
    },
    {
      id: 'libya-african-union',
      title: '6. 1990s – 2000s: The African Union Project & Free Universal Social Guarantees',
      period: '1990s – 2000s',
      categoryTag: 'successes',
      summary: 'Spearheading founding of African Union in 1999; gold-backed African Dinar proposal; highest HDI in Africa.',
      details: `In September 1999, Gaddafi convened the Sirte Summit, spearheading the transformation of the OAU into the African Union (AU). Libya provided billions in developmental loans and infrastructure investment to sub-Saharan African nations.

To achieve financial sovereignty, Libya proposed establishing a gold-backed Pan-African currency (the African Dinar) to replace the French CFA franc and US dollar in African trade. By 2010, Libya maintained zero external national debt and $150 billion in sovereign foreign reserves. [1][4]`,
      keyFigures: ['Muammar Gaddafi'],
      citationIds: [1, 4],
    },
    {
      id: 'libya-nato-destruction',
      title: '7. 2011: The 2011 Benghazi Color Revolution Front, NATO Aggression & Destruction of the Jamahiriya',
      period: '2011',
      categoryTag: 'challenges',
      summary: 'NED/CIA back Benghazi color revolution front; NATO launches 26,000 air sorties under UN 1973; destroying state.',
      details: `In February 2011, Western intelligence agencies engineered a color revolution front in Benghazi. Confirmed records show the National Endowment for Democracy (NED) funded opposition exile groups (National Front for the Salvation of Libya), while US CIA Special Activities Center teams and Qatari special forces deployed on the ground.

Western corporate media constructed fabricated claims of "mass Libyan air strikes on civilians" to manufacture consent for UN Resolution 1973. NATO conducted 26,000 air sorties over 7 months, bombing cities, schools, and the Great Man-Made River factory. On October 20, 2011, NATO aircraft bombed Gaddafi's convoy near Sirte, leading to his extrajudicial murder. US Secretary of State Hillary Clinton famously celebrated: "We came, we saw, he died." [3][4]`,
      keyFigures: ['Muammar Gaddafi', 'Hillary Clinton', 'Barack Obama', 'Nicolas Sarkozy'],
      citationIds: [3, 4],
    },
    {
      id: 'libya-post-nato-chaos',
      title: '8. 2011 – Present: Post-NATO Devastation, Slave Markets & Resurgent Sovereignty',
      period: '2011 – Present',
      categoryTag: 'challenges',
      summary: 'Collapse of central state; open-air slave markets; rival militia warlords & resurgent popular anti-imperialist movement.',
      details: `The 2011 NATO destruction of the Libyan state plunged the country into catastrophic collapse. Modern housing, free healthcare, and social safety nets were destroyed. Rival armed militias, jihadist groups, and foreign powers partitioned the nation, while international media documented open-air slave markets selling African migrants in Tripoli.

Despite ongoing imperialist destabilization, popular movements across Libya continue to demand national unification, the expulsion of foreign mercenary forces, and the restoration of national sovereignty over petroleum reserves. [1][3]`,
      keyFigures: ['Popular Libyan Assembly Cadres'],
      citationIds: [1, 3],
    },
  ],

  sources: [
    {
      id: 1,
      label: 'United Nations Human Development Index Report (Libya Pre-2011 Assessment)',
      publisher: 'United Nations Development Programme (UNDP)',
      year: '2010',
      excerpt: 'Documenting Libya\'s #1 Human Development Index ranking in Africa, boasting highest life expectancy, literacy, and per-capita GDP on the continent.',
    },
    {
      id: 2,
      label: 'The Great Man-Made River: Engineering Triumph in the Sahara',
      publisher: 'Water Power & Dam Construction Journal / UNESCO Technical Report',
      year: '2008',
      excerpt: 'Technical evaluation of Libya\'s 4,000 km underground pipeline network piping fresh water from Nubian Sandstone Aquifers to coastal cities.',
    },
    {
      id: 3,
      label: 'A History of Modern Libya',
      publisher: 'Dirk Vandewalle / Cambridge University Press',
      year: '2012',
      excerpt: 'Comprehensive historical analysis of the 1969 Revolution, Italian colonial period, oil nationalization, and the 2011 NATO war.',
    },
    {
      id: 4,
      label: 'Illegal War: The Truth About NATO\'s Intervention in Libya',
      publisher: 'Max Blumenthal / Real News Press',
      year: '2016',
      excerpt: 'Investigative record of NATO\'s 2011 air strikes, regime change motives, African Union gold dinar destruction, and post-war chaos.',
    },
  ],
};
