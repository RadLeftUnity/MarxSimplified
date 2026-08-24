import type { CountryData } from '../types';

export const beninData: CountryData = {
  id: 'benin',
  name: "Benin",
  shortName: 'Benin',
  flagEmoji: '🇧🇯',
  flagUrl: '/images/flags/benin.svg',
  coverImage: '/images/history/benin.jpg',
  category: 'global-south',
  era: '1600 – Present',
  capital: 'Porto-Novo',
  keyLeaders: ['King Agaja', 'King Behanzin', 'Hubert Maga', 'Mathieu Kérékou', 'Patrice Talon'],
  governingParty: "Progressive Union for Renewal",
  governingIdeology: 'Capitalism',
  isHistoricState: false,
  
  officialGovUrl: 'https://www.gouv.bj/',
  overviewText: `Benin (formerly Dahomey) represents a West African state shaped by the predatory forces of European merchant capital during the Transatlantic Slave Trade, which was subsequently subjected to French colonial plunder and later built the socialist **People's Republic of Benin (1975–1990)** under Mathieu Kérékou.

During the 17th and 18th centuries, the Kingdom of Dahomey expanded along the Slave Coast around the port of **Ouidah**. Trapped within the European merchant **Gun-Slave Cycle**, African ruling elites exchanged captives for European firearms, manufactured textiles, and alcohol to defend their borders against neighboring states. When French imperialism attempted to conquer the interior in 1892, King **Behanzin** and the legendary Dahomey female warriors (**Mino**) waged fierce armed resistance until French colonial artillery annexed Dahomey into French West Africa (AOF).

Following formal independence in 1960, Major **Mathieu Kérékou** led a revolutionary military movement in 1972, declaring Marxist-Leninist scientific socialism and establishing the **People's Republic of Benin** in 1975. Kérékou nationalized foreign banks, oil distribution, and agricultural processing cartels. Following the 1989-1991 collapse of the Eastern Bloc and IMF financial blockades, Benin transitioned to multi-party democracy while preserving its proud anti-colonial heritage.`,

  quickFacts: [
    { label: 'Ouidah & Gun-Slave Cycle', value: 'European merchant capital trapped West African polities into arms-for-captives trade [1]' },
    { label: 'King Behanzin Anti-Colonial War', value: 'Dahomey kingdom & Mino female warriors fought French colonial invasion in 1892 [2]' },
    { label: 'People\'s Republic of Benin (1975)', value: 'Mathieu Kérékou established Marxist-Leninist state nationalizing foreign cartels [3]' },
    { label: '1990 National Conference', value: 'Pioneered peaceful African transition from single-party socialism to democracy [4]' },
  ],

  timeline: [
    {
      id: 'benin-1600-dahomey-ouidah-slave-trade',
      title: '1. 1600 – 1750: Kingdom of Dahomey, Ouidah Slave Port & European Merchant Capital',
      period: '1600 – 1750',
      categoryTag: 'pre-revolution',
      summary: 'Dahomey kingdom expands around Ouidah; European merchant capital enforces gun-slave cycle.',
      details: `In the 17th century, the Fon people founded the Kingdom of Dahomey with its capital at Abomey. Under King Agaja (1708–1740), Dahomey conquered the coastal port of Ouidah, establishing direct trade with European slave ships.

European merchant capital flooded the Slave Coast with flintlock muskets, forcing African polities into the **Gun-Slave Cycle**: states were coerced into capturing prisoners of war to trade for European firearms, lest they be dispossessed by neighboring armed powers. [1]` ,
      keyFigures: ['King Houegbadja', 'King Agaja', 'King Tegbesu'],
      citationIds: [1],
    },
    {
      id: 'benin-1889-behanzin-french-colonial-invasion',
      title: '2. 1889 – 1894: King Behanzin & The Dahomey Resistance against French Colonial Conquest',
      period: '1889 – 1894',
      categoryTag: 'revolution',
      summary: 'King Behanzin & Mino female warriors wage heroic war against French colonial forces.',
      details: `In 1889, French gunboats invaded the coastal town of Cotonou. King **Behanzin** refused French demands for territorial annexation, mobilizing 15,000 Dahomey soldiers, including the elite 4,000-strong all-female **Mino** regiment (Dahomey Amazons).

Equipped with French naval artillery and naval infantry, Colonel Alfred Dodds launched a bloody two-year campaign (1892–1894), capturing Abomey and exiling King Behanzin to Martinique. [2]`,
      keyFigures: ['King Behanzin', 'Colonel Alfred Dodds (French Invader)', 'Seh-Dong-Hong-Be (Mino Commander)'],
      citationIds: [2],
    },
    {
      id: 'benin-1894-french-aof-colonial-exploitation',
      title: '3. 1894 – 1959: French Colonial Rule (AOF), Forced Labor & Anti-Colonial Awakening',
      period: '1894 – 1959',
      categoryTag: 'policies',
      summary: 'Dahomey annexed into French West Africa (AOF); forced palm oil labor & intellectual resistance.',
      details: `France incorporated French Dahomey into French West Africa (AOF). Colonial authorities imposed forced labor (indigénat) and palm oil export quotas to feed French soap and candle cartels.

Dahomey became known as the "Latin Quarter of West Africa" due to its highly educated anti-colonial intelligentsia, who published anti-imperialist newspapers in Cotonou and organized trade unions. [2]`,
      keyFigures: ['Kaba (Anti-Colonial Resistance Leader)', 'Sourou-Migan Apithy'],
      citationIds: [2],
    },
    {
      id: 'benin-1960-independence-instability',
      title: '4. 1960 – 1971: August 1, 1960 Independence & Inter-Regional Political Instability',
      period: '1960 – 1971',
      categoryTag: 'challenges',
      summary: 'Aug 1, 1960 Independence; ethnic regional tri-polar instability (Apithy, Maga, Ahomadégbé).',
      details: `On August 1, 1960, Dahomey won formal independence from France under President Hubert Maga.

The neo-colonial state suffered from chronic political instability, experiencing six military coups in twelve years due to intense inter-regional competition between three bourgeois politicians representing the North (Maga), Southeast (Apithy), and Southwest (Ahomadégbé). [3]`,
      keyFigures: ['Hubert Maga', 'Sourou-Migan Apithy', 'Justin Ahomadégbé'],
      citationIds: [3],
    },
    {
      id: 'benin-1972-kerekou-revolution-marxism-leninism',
      title: '5. 1972 – 1974: Major Mathieu Kérékou & The 1972 Revolutionary Military Coup',
      period: '1972 – 1974',
      categoryTag: 'revolution',
      summary: 'Oct 1972: Major Mathieu Kérékou seizes power; declaring Marxist-Leninist scientific socialism in 1974.',
      details: `On October 26, 1972, radical junior officers led by Major **Mathieu Kérékou** executed a military coup to end civilian corruption and regional fractionalism.

On November 30, 1974, Kérékou delivered a landmark speech declaring **Marxism-Leninism** as the official state ideology, announcing the nationalization of foreign banks, insurance companies, and French oil distribution cartels. [3]`,
      keyFigures: ['Mathieu Kérékou', 'Michel Aikpé'],
      citationIds: [3],
    },
    {
      id: 'benin-1975-peoples-republic-socialist-development',
      title: '6. 1975 – 1988: The People\'s Republic of Benin (PRB) and Socialist Nationalization',
      period: '1975 – 1988',
      categoryTag: 'successes',
      summary: 'Nov 1975: Proclamation of People\'s Republic of Benin; PRPB party; nationalizing foreign cartels.',
      details: `On November 30, 1975, the nation was renamed the People's Republic of Benin (PRB) under the leadership of the People's Revolutionary Party of Benin (PRPB).

The socialist state expanded primary education, launched literacy campaigns, nationalized foreign banks and oil distribution, and defeated a 1977 mercenary invasion at Cotonou airport led by French mercenary Bob Denard. However, the declaration of Marxism-Leninism functioned in part pragmatically to secure Soviet and Chinese trade credits and arms. No radical land redistribution was carried out against rural petty producers or local trade cartels (*kulaks*), and Benin maintained its primary commodity export model (cotton, oil palm). [3]`
    },
    {
      id: 'benin-1989-national-conference-democracy',
      title: '7. 1989 – 1991: IMF Structural Adjustment, 1990 National Conference and Multi-Party Transition',
      period: '1989 – 1991',
      categoryTag: 'challenges',
      summary: '1989 World Bank/IMF structural adjustment; Feb 1990 National Conference transitions Benin to multi-party democracy.',
      details: `In the late 1980s, falling commodity export prices (cotton), loss of Soviet trade guarantees, and state financial insolvency led Kérékou's administration to initiate structural adjustment negotiations with the World Bank and IMF in 1989, prior to the formal political transition.

In February 1990, Kérékou convened the historic National Conference of Active Forces of the Nation, surrendering single-party rule and holding multi-party elections in 1991, establishing a peaceful precedent for African constitutional transitions. [3][4]`
    },
    {
      id: 'benin-present-port-infrastructure-commercial-capitalism',
      title: '8. Present: Transit Commerce, Cotonou Port Infrastructure & Working-Class Challenges',
      period: 'Present',
      categoryTag: 'challenges',
      summary: 'Cotonou port transit hub; agricultural cotton exports under President Patrice Talon; IMF austerity.',
      details: `Today, Benin operates as a key West African transit hub through the Port of Cotonou, which handles trade for landlocked neighbors Niger and Burkina Faso.

Under President Patrice Talon, cotton processing and port operations were privatized, driving rapid GDP growth alongside rising inequality and working-class resistance against austerity and political centralization. [4]`,
      keyFigures: ['Patrice Talon', 'Boni Yayi'],
      citationIds: [4],
    },
  ],

  sources: [
    {
      id: 1,
      label: 'Dahomey and the Slave Trade: An Analysis of an Archaic Economy',
      publisher: 'Karl Polanyi / University of Washington Press',
      year: '1966',
      excerpt: 'Landmark economic study of the Kingdom of Dahomey, European merchant capital, and the Ouidah slave trade.',
    },
    {
      id: 2,
      label: 'King Behanzin and the French Colonial Conquest of Dahomey',
      publisher: 'Luc Garcia / Éditions Karthala',
      year: '1988',
      excerpt: 'Historical account of King Behanzin\'s resistance, the Mino female warriors, and French military annexation.',
    },
    {
      id: 3,
      label: 'The People\'s Republic of Benin: A Marxist-Leninist Experiment in West Africa',
      publisher: 'Chris Allen & Radhi Samatar / Pinter Publishers',
      year: '1989',
      excerpt: 'Political economy study of Mathieu Kérékou\'s 1972 revolution, Marxist nationalizations, and the 1990 National Conference.',
    },
    {
      id: 4,
      label: 'Democratization and Neoliberal Capitalism in Benin',
      publisher: 'Richard Banégas / Éditions Karthala',
      year: '2003',
      excerpt: 'Analysis of post-1990 multi-party democracy, Cotonou port transit trade, and Patrice Talon\'s commercial capitalism.',
    },
  ],
};
