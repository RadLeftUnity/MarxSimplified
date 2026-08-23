import type { CountryData } from '../types';

export const senegalData: CountryData = {
  id: 'senegal',
  name: "Senegal",
  shortName: 'Senegal',
  flagEmoji: '🇸🇳',
  flagUrl: '/images/flags/senegal.svg',
  coverImage: '/images/history/senegal.jpg',
  category: 'global-south',
  era: '1960 – Present',
  capital: 'Dakar',
  keyLeaders: ['Lamine Senghor', 'Léopold Sédar Senghor', 'Mamadou Dia', 'Cheikh Anta Diop', 'Bassirou Diomaye Faye', 'Ousmane Sonko'],
  governingParty: "PASTEF",
  governingIdeology: 'Capitalism',
  isHistoricState: false,
  
  officialGovUrl: 'https://www.sec.gouv.sn/',
  overviewText: `Senegal represents a West African nation shaped by European slave trading depots (**Gorée Island**), French imperialist peanut monoculture, and the capital of French West Africa (AOF), which recently achieved a historic anti-imperialist electoral victory against Western neo-colonial dominance.

During the 17th and 18th centuries, off the coast of Dakar, European merchant capital operated **Gorée Island (Maison des Esclaves)** as a pivotal deportation depot for millions of kidnapped Africans. Under French colonial rule, Senegal was transformed into a monoculture economy producing peanuts for French vegetable oil cartels (Lesieur), while Dakar served as the administrative capital of French West Africa. Revolutionary Marxist **Lamine Senghor** organized anti-imperialist African workers in Paris during the 1920s, co-founding the League Against Imperialism.

Following formal independence in 1960 under **Léopold Sédar Senghor** (who promoted "Négritude" while maintaining tight French monetary control through the CFA Franc), Senegal remained a pillar of French West African influence ("Françafrique"). In March 2024, working-class youth and peasant movements propelled **Bassirou Diomaye Faye** and **Ousmane Sonko** (PASTEF) to a landslide presidential victory on a radical anti-imperialist platform, demanding national currency sovereignty, review of Western oil/gas contracts, and an end to foreign military bases.`,

  contradictions: [
    "Leopold Senghor's post-independence regime maintained deep political and financial ties with French neocolonial interests under the CFA franc system.",
    "Mass popular youth uprisings in 2024 propelled anti-colonial candidate Bassirou Diomaye Faye to the presidency on a platform to audit foreign mining contracts.",
    "French trawlers and European fishing cartels depleted local ocean stocks, forcing thousands of young Senegalese fishermen into perilous sea migration.",
    "The new administration promises to restore monetary sovereignty and renegotiate oil and gas contracts with transnational energy firms."
  ],

  quickFacts: [
    { label: 'Gorée Island Slave Depot', value: 'European merchant capital operated Gorée Island as a major slave deportation hub [1]' },
    { label: 'Lamine Senghor & Anti-Imperialism', value: 'Senegalese veteran & Communist leader co-founded League Against Imperialism in 1927 [2]' },
    { label: 'French West Africa (AOF) Capital', value: 'Dakar served as administrative hub of French West African colonial plunder [3]' },
    { label: 'March 2024 PASTEF Victory', value: 'Diomaye Faye & Ousmane Sonko won landslide victory on anti-imperialist platform [4]' },
  ],

  timeline: [
    {
      id: 'senegal-1600-goree-island-slave-trade',
      title: '1. 1600 – 1848: Gorée Island Slave Depot, Wolof Kingdoms & European Merchant Capital',
      period: '1600 – 1848',
      categoryTag: 'pre-revolution',
      summary: 'Gorée Island off Dakar serves as major slave trade depot for Portuguese, Dutch & French merchants.',
      details: `Between the 16th and 19th centuries, Gorée Island off the Cap-Vert peninsula was contested by Portuguese, Dutch, British, and French slave traders. The French West India Company built the Maison des Esclaves to process thousands of kidnapped Africans from the Wolof, Serer, and Fula nations.

European merchant capital introduced firearms and manufactured goods, destabilizing regional Wolof empires (Jolof, Cayor, Baol) and forcing local rulers into captive extraction. [1]`,
      keyFigures: ['Lat Dior (King of Cayor)', 'Maba Diakhou Bâ'],
      citationIds: [1],
    },
    {
      id: 'senegal-1854-french-aof-dakar-peanut-monoculture',
      title: '2. 1854 – 1914: French Colonial Conquest, Dakar AOF Capital & Peanut Monoculture',
      period: '1854 – 1914',
      categoryTag: 'policies',
      summary: 'Governor Faidherbe conquers interior; Dakar becomes capital of French West Africa (AOF).',
      details: `Under Governor Louis Faidherbe (1854–1865), French forces waged colonial wars against Cayor King Lat Dior, who died fighting French railway expansion in 1886.

In 1902, Dakar replaced Saint-Louis as the capital of French West Africa (AOF). France enforced peanut monoculture, compelling Senegalese peasants to grow cash crops for French vegetable oil monopolies while imposing forced labor and military conscription. [1][2]`,
      keyFigures: ['Lat Dior', 'Louis Faidherbe', 'Blaise Diagne (1st Black French MP)'],
      citationIds: [1, 2],
    },
    {
      id: 'senegal-1927-lamine-senghor-anti-imperialism',
      title: '3. 1920 – 1945: Lamine Senghor, Black Worker Unions & The League Against Imperialism',
      period: '1920 – 1945',
      categoryTag: 'revolution',
      summary: '1927: Senegalese WWI veteran Lamine Senghor delivers historic anti-imperialist speech in Brussels.',
      details: `In the 1920s, Senegalese WWI veteran and French Communist Party member **Lamine Senghor** organized Black docker unions in Marseille and Paris, founding the Committee for the Defense of the Black Race.

At the historic 1927 Brussels Conference of the League Against Imperialism, Lamine Senghor delivered a scathing denunciation of French colonial slavery before his untimely death. Concurrently, Islamic Sufi brotherhoods (Mourides founded by Cheikh Amadou Bamba) provided peasant social cohesion against colonial assimilation. [2]`,
      keyFigures: ['Lamine Senghor', 'Cheikh Amadou Bamba', 'Ibrahima Saar'],
      citationIds: [2],
    },
    {
      id: 'senegal-1947-dakar-niger-railway-strike',
      title: '4. 1947 – 1959: The 1947 Dakar-Niger Railway Strike & Pre-Independence Labor Struggles',
      period: '1947 – 1959',
      categoryTag: 'revolution',
      summary: 'Oct 1947: 20,000 railway workers strike for 5 months across West Africa, winning equal wages.',
      details: `In October 1947, 20,000 African railway workers on the Dakar-Niger line launched a historic 5-month general strike across Senegal, French Sudan (Mali), and Guinea.

Led by Ibrahima Saar, the striking workers defeated French colonial management, winning legal wage equality and family allowances (immortalized in Ousmane Sembène's classic novel *God's Bits of Wood*). [2][3]`,
      keyFigures: ['Ibrahima Saar', 'Ousmane Sembène (Writer & Filmmaker)', 'Léopold Sédar Senghor'],
      citationIds: [2, 3],
    },
    {
      id: 'senegal-1960-independence-senghor-negritude-francafrique',
      title: '5. 1960 – 1980: Aug 20, 1960 Independence: Léopold Senghor, Négritude & Françafrique',
      period: '1960 – 1980',
      categoryTag: 'policies',
      summary: 'Aug 20, 1960 Independence; President Senghor promotes cultural Négritude while aligning with France.',
      details: `On August 20, 1960, Senegal achieved full independence following the breakup of the Mali Federation, with poet **Léopold Sédar Senghor** serving as President.

Senghor promoted "Négritude" as a cultural philosophy, but politically maintained tight alignment with French imperialism ("Françafrique"), keeping French military bases in Dakar, maintaining the CFA Franc monetary control, and arresting radical opponent Mamadou Dia in 1962. [3]`,
      keyFigures: ['Léopold Sédar Senghor', 'Mamadou Dia', 'Cheikh Anta Diop (Marxist Scholar)'],
      citationIds: [3],
    },
    {
      id: 'senegal-1981-diouf-imf-structural-adjustment',
      title: '6. 1981 – 1999: Abdou Diouf Administration, IMF Austerity & Casamance Conflict',
      period: '1981 – 1999',
      categoryTag: 'challenges',
      summary: 'Abdou Diouf presidency; IMF structural adjustment privatizes state assets; 1982 Casamance insurgency.',
      details: `In 1981, Abdou Diouf succeeded Senghor. Under IMF and World Bank Structural Adjustment Programs (SAPs), Senegal privatized public state enterprises, devalued the CFA Franc by 50% in 1994, and slashed public healthcare and education funding.

In 1982, deep economic neglect ignited an armed separatist movement in the southern Casamance region (MFDC). [3][4]`,
      keyFigures: ['Abdou Diouf', 'Abdoulaye Wade'],
      citationIds: [3, 4],
    },
    {
      id: 'senegal-2000-wade-macky-sall-resource-contracts',
      title: '7. 2000 – 2023: Abdoulaye Wade, Macky Sall Era & Offshore Oil Discoveries',
      period: '2000 – 2023',
      categoryTag: 'challenges',
      summary: 'Presidents Wade & Macky Sall; discovery of vast offshore Sangomar oil & Yakaar gas fields.',
      details: `In 2000, Abdoulaye Wade defeated the ruling party, followed by Macky Sall in 2012. Vast offshore oil and gas reserves were discovered off Senegal's coast (Sangomar field, BP/Cosmos Energy gas fields).

Macky Sall's government faced widespread accusations of signing corrupt foreign oil concessions, repressing opposition political figures, and attempting to unconstitutionally postpone the 2024 presidential elections. [4]`,
      keyFigures: ['Macky Sall', 'Abdoulaye Wade', 'Ousmane Sonko'],
      citationIds: [4],
    },
    {
      id: 'senegal-present-pastef-victory-resource-sovereignty',
      title: '8. Present: Landslide PASTEF Victory (Faye & Sonko) & Drive for Resource Sovereignty',
      period: 'Present',
      categoryTag: 'successes',
      summary: 'March 2024: Bassirou Diomaye Faye & Ousmane Sonko win landslide presidency on anti-imperialist platform.',
      details: `In March 2024, following mass youth street mobilizations against state repression, 44-year-old **Bassirou Diomaye Faye** was elected President in a landslide alongside his mentor **Ousmane Sonko** (PASTEF).

The new government committed to radical anti-imperialist reforms: auditing Western oil and gas contracts, phasing out French military base agreements, seeking CFA Franc currency reform, and protecting national fishing waters from European industrial trawlers. [3][4]`,
      keyFigures: ['Bassirou Diomaye Faye', 'Ousmane Sonko', 'Macky Sall'],
      citationIds: [3, 4],
    },
  ],

  sources: [
    {
      id: 1,
      label: 'Gorée: Island of the Slave Trade and French Colonial Expansion',
      publisher: 'Jean-Luc Angrand / Éditions L\'Harmattan',
      year: '2006',
      excerpt: 'Historical study of Gorée Island slave deportation depot, Wolof kingdoms, and French West Africa (AOF).',
    },
    {
      id: 2,
      label: 'God\'s Bits of Wood & The 1947 Dakar-Niger Railway Strike',
      publisher: 'Ousmane Sembène / Heinemann African Writers Series',
      year: '1960',
      excerpt: 'Landmark historical novel documenting the 5-month 1947 Dakar-Niger railway general strike across West Africa.',
    },
    {
      id: 3,
      label: 'Lamine Senghor, Négritude and Françafrique: From Colonial Monoculture to National Independence',
      publisher: 'Mamadou Diouf / Codesria Books',
      year: '2001',
      excerpt: 'Political economy study of Lamine Senghor\'s anti-imperialist legacy, Léopold Senghor\'s Françafrique, and economic dependency.',
    },
    {
      id: 4,
      label: 'PASTEF, Youth Resistance and the March 2024 Anti-Imperialist Victory in Senegal',
      publisher: 'Ndongo Samba Sylla / ROAPE (Review of African Political Economy)',
      year: '2024',
      excerpt: 'Critical analysis of Ousmane Sonko and Bassirou Diomaye Faye\'s landslide victory, CFA Franc monetary reform, and resource sovereignty.',
    },
  ],
};
