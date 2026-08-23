import type { CountryData } from '../types';

export const irelandData: CountryData = {
  id: 'ireland',
  name: "Ireland",
  shortName: 'Ireland',
  flagEmoji: '🇮🇪',
  flagUrl: '/images/flags/ireland.svg',
  coverImage: '/images/history/ireland.jpg',
  category: 'global-north',
  era: '1798 – Present',
  capital: 'Dublin',
  keyLeaders: ['Theobald Wolfe Tone', 'James Connolly', 'Jim Larkin', 'Constance Markievicz', 'Michael Collins'],
  governingParty: "Fine Gael",
  governingIdeology: 'Capitalism',
  isHistoricState: false,
  
  officialGovUrl: 'https://www.gov.ie/',
  overviewText: `Ireland holds profound significance as England's oldest colony, the laboratory of British imperial land confiscation, and the birthplace of modern socialist anti-imperialism in the Western world.

Through centuries of violent British conquest, the Irish population was dispossessed of its land via the 17th-century Cromwellian plantations and Penal Laws. During An Gorta Mór (The Great Famine, 1845–1852), British colonial policy forced the export of livestock and grain while over 1 million Irish people starved to death and another 1.5 million were forced into exile—a tragedy Karl Marx analyzed as a direct outcome of colonial capitalist landlordism.

In the early 20th century, Marxist leader James Connolly and labor organizer Jim Larkin led the 1913 Dublin Lockout and founded the Irish Citizen Army (ICA)—the world's first socialist worker militia. Executed by British firing squad following the 1916 Easter Rising, Connolly synthesized national liberation with socialist revolution, famously writing: "If you remove the English army tomorrow and hoist the green flag over Dublin Castle, unless you set about the organization of the Socialist Republic, England would still rule you through her capitalists."`,

  contradictions: [
    "Low corporate tax rates transformed Dublin into an offshore tax haven for US tech and pharmaceutical monopolies, creating severe domestic housing crises for working tenants.",
    "Historical anti-colonial struggles led to the partition of Six Counties under British rule, where political friction and economic inequality persist.",
    "Popular domestic solidarity with Palestine contrasts with government diplomatic alignment with EU foreign policy and US commercial interests.",
    "Foreign multinational investment drives high headline GDP figures while domestic public health and transport systems suffer from chronic underfunding."
  ],

  quickFacts: [
    { label: 'Famine Population Loss', value: '25% of population died or exiled during 1845-1852 Great Famine [1]' },
    { label: 'First Socialist Worker Militia', value: 'Irish Citizen Army (ICA) founded by James Connolly in 1913 [2]' },
    { label: '1916 Socialist Martyrdom', value: 'James Connolly executed by British firing squad on May 12, 1916 [2]' },
    { label: 'Current Island Partition', value: '6 North-Eastern counties remain under British jurisdiction' },
  ],

  timeline: [
    {
      id: 'ireland-1798-rebellion',
      title: '1. 1798 – 1840s: United Irishmen 1798 Rebellion, Wolfe Tone & The 1800 Act of Union',
      period: '1798 – 1840s',
      categoryTag: 'revolution',
      summary: '1798 United Irishmen rising led by Wolfe Tone; 1800 Act of Union abolishing Irish Parliament.',
      details: `Inspired by the French Revolution, Theobald Wolfe Tone founded the Society of United Irishmen in 1791, seeking to unite Catholic, Protestant, and Dissenter in a secular, anti-colonial republic.

The 1798 Rebellion was brutally suppressed by British military forces, resulting in 30,000 deaths and the execution of Tone. In response, the British Crown passed the 1800 Act of Union, abolishing the Irish Parliament and incorporating Ireland directly into Great Britain to strengthen imperial control. [3]`,
      keyFigures: ['Theobald Wolfe Tone', 'Robert Emmet'],
      citationIds: [3],
    },
    {
      id: 'ireland-great-famine',
      title: '2. 1845 – 1852: An Gorta Mór (The Great Famine): Imperial Plunder & Colonial Genocide',
      period: '1845 – 1852',
      categoryTag: 'challenges',
      summary: 'Potato blight triggers famine; British laissez-faire policy forces food exports while 1 million starve.',
      details: `When potato blight struck in 1845, British landlordism had reduced Irish peasants to total reliance on the potato crop for survival, while high-value wheat, oats, and cattle were exported to England to pay rent to Anglo-Irish landlords.

Enforcing strict "laissez-faire" capitalist doctrine, British Assistant Secretary Charles Trevelyan restricted relief. Over 1 million people died of starvation and disease, while 1.5 million fled on "coffin ships." Karl Marx noted that the Famine was not a natural disaster, but an artificial eviction of an entire nationality to turn Irish land into landlord sheep pastures. [1]`,
      keyFigures: ['Karl Marx', 'Charles Trevelyan', 'John Mitchel'],
      citationIds: [1],
    },
    {
      id: 'ireland-land-war',
      title: '3. 1879 – 1890s: The Irish Land War: Michael Davitt, Land League & Boycotting Landlords',
      period: '1879 – 1890s',
      categoryTag: 'policies',
      summary: 'Michael Davitt founds Irish National Land League; tenant strikes & inventing the "boycott" tactic.',
      details: `In 1879, former Fenian prisoner Michael Davitt founded the Irish National Land League alongside Charles Stewart Parnell. The League mobilized tenant farmers around the "3 Fs": Fair Rent, Fixity of Tenure, and Free Sale.

Tenant farmers organized rent strikes and social ostracization of evicting landlords and land-grabbers, famously inventing the tactic against Captain Charles Boycott in County Mayo. The militant struggle forced Parliament to pass Land Acts, eventually enabling tenant farmers to purchase their holdings. [3]`,
      keyFigures: ['Michael Davitt', 'Charles Stewart Parnell'],
      citationIds: [3],
    },
    {
      id: 'ireland-dublin-lockout',
      title: '4. 1913: The 1913 Dublin Lockout & Birth of the Irish Citizen Army (ICA)',
      period: '1913',
      categoryTag: 'policies',
      summary: '20,000 Dublin workers locked out by employer cartel; Jim Larkin & James Connolly form Irish Citizen Army.',
      details: `In August 1913, employer cartel leader William Martin Murphy locked out 20,000 workers organized under Jim Larkin's Irish Transport and General Workers' Union (ITGWU) for refusing to sign anti-union pledges.

During the eight-month Lockout, police brutally attacked striking workers, killing two and injuring hundreds. In response, Marxist revolutionary James Connolly and ex-British officer Jack White organized the Irish Citizen Army (ICA)—a uniformed, armed worker defense militia designed to protect strikes and advance socialist revolution. [2]`,
      keyFigures: ['James Connolly', 'Jim Larkin', 'Jack White'],
      citationIds: [2],
    },
    {
      id: 'ireland-easter-rising',
      title: '5. 1916: The 1916 Easter Rising & James Connolly\'s Socialist Anti-Imperialist Vision',
      period: '1916',
      categoryTag: 'revolution',
      summary: 'ICA & Irish Volunteers seize Dublin GPO; reading 1916 Proclamation; execution of James Connolly.',
      details: `On Easter Monday, April 24, 1916, the Irish Citizen Army and Irish Volunteers seized key Dublin buildings, establishing the General Post Office (GPO) as headquarters. Patrick Pearse read the Proclamation of the Irish Republic, guaranteeing universal suffrage and declaring the right of the people of Ireland to the ownership of Ireland.

After six days of heavy British artillery bombardment destroyed central Dublin, the rebels surrendered. James Connolly, wounded during the fighting, was tied to a chair and executed by British firing squad at Kilmainham Gaol on May 12, 1916, cementing his legacy as a martyr for international socialism and anti-imperialism. [2]`,
      keyFigures: ['James Connolly', 'Patrick Pearse', 'Constance Markievicz', 'Tom Clarke'],
      citationIds: [2],
    },
    {
      id: 'ireland-war-independence',
      title: '6. 1919 – 1921: The Irish War of Independence, Dáil Éireann & Black and Tans Terror',
      period: '1919 – 1921',
      categoryTag: 'revolution',
      summary: '1918 Sinn Féin electoral landslide; establishing First Dáil; IRA guerrilla war against British Black & Tans.',
      details: `In December 1918, Sinn Féin won a landslide electoral victory, refusing to take seats in Westminster and convening the revolutionary First Dáil Éireann in Dublin in January 1919.

The Irish Republican Army (IRA), organized by Michael Collins and Cathal Brugha, waged a relentless guerrilla war against British occupation forces. The British state deployed ruthless mercenary units (the "Black and Tans" and Auxiliaries), who burned the city of Cork and committed civilian atrocities before Britain was forced to negotiate a truce in July 1921. [3]`,
      keyFigures: ['Michael Collins', 'Éamon de Valera', 'Cathal Brugha'],
      citationIds: [3],
    },
    {
      id: 'ireland-partition-civil-war',
      title: '7. 1921 – 1923: The Partition of Ireland, Anglo-Irish Treaty & Counter-Revolutionary Civil War',
      period: '1921 – 1923',
      categoryTag: 'challenges',
      summary: '1921 Anglo-Irish Treaty partitions Ireland into 26-county Free State & 6-county British North; Civil War erupts.',
      details: `In December 1921, British Prime Minister Lloyd George forced Irish negotiators to sign the Anglo-Irish Treaty under threat of "immediate and terrible war." The Treaty partitioned Ireland, creating a 6-county northern statelet under British rule and a 26-county Irish Free State bound by an oath of allegiance to the British Crown.

Anti-Treaty republicans rejected the partition as a betrayal of Connolly's Socialist Republic. In 1922–1923, the Free State government, armed with British artillery, waged a bloody counter-revolutionary Civil War against anti-Treaty forces, executing 77 republican prisoners and establishing a conservative capitalist state controlled by the Catholic hierarchy. [3]`,
      keyFigures: ['Michael Collins', 'Liam Mellows', 'Éamon de Valera'],
      citationIds: [3],
    },
    {
      id: 'ireland-troubles',
      title: '8. 1968 – 1998: The Troubles in Northern Ireland: Civil Rights & British Military Occupation',
      period: '1968 – 1998',
      categoryTag: 'challenges',
      summary: 'Northern Ireland Civil Rights Movement; 1972 Bloody Sunday massacre; 1981 Hunger Strikes (Bobby Sands).',
      details: `In 1968, Catholic nationalist working-class communities in Northern Ireland organized civil rights marches against gerrymandering, housing discrimination, and police violence. On January 30, 1972, British paratroopers opened fire on peaceful civil rights marchers in Derry, killing 14 civilians (Bloody Sunday).

Decades of military conflict (The Troubles) ensued between the Provisional IRA, British military forces, and loyalist paramilitaries. In 1981, ten republican prisoners led by Bobby Sands died on hunger strike in Long Kesh prison, demanding political prisoner status against Margaret Thatcher's criminalization policy. [4]`,
      keyFigures: ['Bobby Sands', 'Bernadette Devlin McAliskey', 'Gerry Adams'],
      citationIds: [4],
    },
    {
      id: 'ireland-good-friday-celtic-tiger',
      title: '9. 1998 – 2008: The Good Friday Agreement & The Celtic Tiger Financial Bubble',
      period: '1998 – 2008',
      categoryTag: 'policies',
      summary: '1998 Good Friday Agreement ends armed conflict in North; 12.5% corporate tax creates Celtic Tiger bubble.',
      details: `Signed in April 1998, the Good Friday Agreement established a power-sharing executive in Northern Ireland and cross-border institutions, bringing an end to three decades of armed conflict.

In the Republic of Ireland, the government instituted a 12.5% corporate tax rate, transforming Dublin into an offshore tax haven for US tech and financial monopolies (Apple, Google, Pfizer). This "Celtic Tiger" boom produced massive property speculation, bank debt, and inequality. [3]`,
      keyFigures: ['Bertie Ahern', 'Tony Blair', 'John Hume'],
      citationIds: [3],
    },
    {
      id: 'ireland-contemporary-solidarity',
      title: '10. 2008 – Present: Post-Crash Austerity, Housing Crisis & Anti-Imperialist Solidarity',
      period: '2008 – Present',
      categoryTag: 'challenges',
      summary: '2008 Troika bailout austerity; severe housing crisis; strong grassroots solidarity with Palestinian liberation.',
      details: `Following the 2008 financial crash, the Irish government bailed out speculative private banks, accepting a humiliating EU-IMF "Troika" austerity package that slashed public services and healthcare.

Today, Ireland faces a catastrophic housing crisis caused by vulture funds and private landlordism. Concurrently, the Irish working class maintains strong anti-imperialist solidarity, with overwhelming popular support for Palestinian liberation reflecting Ireland's own history of colonial resistance against British imperialism. [1][4]`,
      keyFigures: ['Clare Daly', 'Mick Wallace', 'Mary Lou McDonald'],
      citationIds: [1, 4],
    },
  ],

  sources: [
    {
      id: 1,
      label: 'The Great Irish Famine: A History in Four Essays',
      publisher: 'Karl Marx & Friedrich Engels / International Publishers',
      year: '1971',
      excerpt: 'Collection of Marx and Engels\' writings analyzing the 1845-1852 Irish famine as an outcome of colonial landlordism and forced grain export.',
    },
    {
      id: 2,
      label: 'Labour in Irish History',
      publisher: 'James Connolly / Maunsel & Company',
      year: '1910',
      excerpt: 'Connolly\'s masterwork analyzing Irish history from a historical materialist perspective, arguing that national liberation is inseparable from socialist revolution.',
    },
    {
      id: 3,
      label: 'The Lost Revolution: The Story of the Official IRA and the Workers\' Party',
      publisher: 'Brian Hanley & Scott Millar / Penguin Ireland',
      year: '2009',
      excerpt: 'Detailed history of 20th-century Irish republicanism, anti-colonial guerrilla warfare, and socialist political movements.',
    },
    {
      id: 4,
      label: 'Ten Men Dead: The Story of the 1981 Irish Hunger Strike',
      publisher: 'David Beresford / Atlantic Monthly Press',
      year: '1987',
      excerpt: 'Authoritative account of the 1981 Long Kesh hunger strike led by Bobby Sands against Margaret Thatcher\'s criminalization policy.',
    },
  ],
};
