import type { CountryData } from '../types';

export const greeceData: CountryData = {
  id: 'greece',
  name: "Greece",
  shortName: 'Greece',
  flagEmoji: '🇬🇷',
  flagUrl: '/images/flags/greece.svg',
  coverImage: '/images/history/greece.jpg',
  category: 'global-north',
  era: '1941 – Present',
  capital: 'Athens',
  keyLeaders: ['Nikos Zachariadis', 'Aris Velouchiotis', 'Georgios Papadopoulos', 'Andreas Papandreou', 'Alexis Tsipras', 'Kyriakos Mitsotakis'],
  governingParty: "New Democracy",
  governingIdeology: 'Capitalism',
  isHistoricState: false,
  
  officialGovUrl: 'https://www.government.gov.gr/',
  overviewText: `Greece represents a Mediterranean nation shaped by heroic communist-led anti-fascist resistance (**EAM-ELAS**), the first proxy conflict of the Cold War (**The 1946–1949 Greek Civil War**), a brutal US-backed military junta, and ruthless debt extraction by Western European finance capital (**The EU Troika**).

During World War II, the Communist Party of Greece (KKE) organized the **National Liberation Front (EAM-ELAS)** led by **Aris Velouchiotis**, liberating 80% of Greece from Nazi German occupation and establishing democratic popular self-government. In December 1944 (**Dekemvriana**), British troops under Winston Churchill opened fire on peaceful anti-fascist demonstrators in Athens, installing former Nazi collaborators in power. Between 1946 and 1949, the **Democratic Army of Greece (DSE)** waged civil war against monarchist forces backed by US President Truman (**1947 Truman Doctrine**), who deployed napalm bombs for the first time in military history.

In April 1967, a US-backed military junta led by Colonel Georgios Papadopoulos seized power, unleashing torture until the November 1973 **Athens Polytechnic Student Uprising** broke the regime. Following the 2008 global financial crisis, the European Union, European Central Bank, and IMF (**The Troika**) forced extreme austerity on Greece. In July 2015, 61.3% of Greeks voted **OXI (NO)** against Troika debt terms in a historic referendum, though SYRIZA leadership capitulated to Western banks. Today, China COSCO operates the strategic Port of Piraeus as a key BRI hub, while the Greek working class continues fighting EU austerity.`,

  contradictions: [
    "The 2015 Alexis Tsipras administration capitulated to EU and IMF debt demands, imposing severe austerity that privatized public ports, railways, and utilities.",
    "Western financial monopolies extracted billons in debt servicing while Greek public pensions were slashed and youth unemployment soared past 40 percent.",
    "Serving as a frontline military outpost for Western Mediterranean operations.",
    "Public healthcare and education budgets were gutted under international loan conditions, forcing mass emigration of young skilled workers."
  ],

  quickFacts: [
    { label: 'EAM-ELAS Anti-Fascist Resistance', value: 'Communist guerrillas led by Aris Velouchiotis liberated 80% of Greece from Nazis [1]' },
    { label: '1946–1949 Civil War & US Truman Doctrine', value: 'US & British forces deployed napalm to crush DSE communist partisans [2]' },
    { label: '1973 Athens Polytechnic Uprising', value: 'Student revolt shattered US-backed military dictatorship of the Colonels [3]' },
    { label: 'July 2015 OXI Referendum (61.3% NO)', value: 'Greek working class voted overwhelmingly against EU Troika debt austerity [4]' },
  ],

  timeline: [
    {
      id: 'greece-1941-wwii-nazi-occupation-eam-elas-resistance',
      title: '1. 1941 – 1944: WWII Nazi Occupation, Great Famine & EAM-ELAS Anti-Fascist Resistance',
      period: '1941 – 1944',
      categoryTag: 'revolution',
      summary: '1941 Nazi invasion; Great Famine kills 300,000; EAM-ELAS liberates 80% of Greece by 1944.',
      details: `In April 1941, Nazi Germany invaded Greece. Axis occupation food requisitions caused the 1941–1942 Great Famine, killing 300,000 Greeks.

In September 1941, the Communist Party of Greece (KKE) founded **EAM** (National Liberation Front) and its military wing **ELAS**, led by **Aris Velouchiotis**. By 1944, ELAS had 120,000 fighters, liberating 80% of the country and establishing local popular self-government (*Laokratia*). [1]`,
      keyFigures: ['Aris Velouchiotis', 'Nikos Zachariadis', 'Stefanos Sarafis'],
      citationIds: [1],
    },
    {
      id: 'greece-1944-dekemvriana-british-troops-fire-athens',
      title: '2. 1944: The December 1944 Dekemvriana: British Imperialism Firing on Anti-Fascists',
      period: '1944',
      categoryTag: 'challenges',
      summary: 'Dec 3, 1944: British troops & royal police massacre 28 peaceful EAM marchers in Syntagma Square.',
      details: `On October 1944, German troops evacuated Athens. However, British Prime Minister Winston Churchill ordered British forces under General Ronald Scobie to disarm ELAS while empowering Nazi collaborators (*Security Battalions*).

On December 3, 1944 (**Dekemvriana**), British troops and royal police opened fire on a peaceful 250,000-strong EAM demonstration in Syntagma Square, killing 28 marchers and igniting 37 days of street fighting in Athens. [1][2]`,
      keyFigures: ['Winston Churchill', 'General Ronald Scobie', 'George Papandreou'],
      citationIds: [1, 2],
    },
    {
      id: 'greece-1946-greek-civil-war-truman-doctrine-napalm',
      title: '3. 1946 – 1949: The Greek Civil War & US Truman Doctrine Napalm Warfare',
      period: '1946 – 1949',
      categoryTag: 'revolution',
      summary: '1946-1949 Civil War: Democratic Army of Greece (DSE) fights US-backed royalist military.',
      details: `In October 1946, facing monarchist death squad terror (*White Terror*), KKE General Secretary **Nikos Zachariadis** formed the Democratic Army of Greece (**DSE**), launching the Greek Civil War.

In March 1947, US President Harry Truman announced the **Truman Doctrine**, sending $400 million in military aid, US advisors (General James Van Fleet), and napalm bombs. DSE forces were defeated in August 1949 at the Battle of Grammos-Vitsi. [2]`,
      keyFigures: ['Nikos Zachariadis', 'Markos Vafiadis', 'Harry S. Truman', 'General James Van Fleet'],
      citationIds: [2],
    },
    {
      id: 'greece-1950-post-war-repression-beloyannis-execution',
      title: '4. 1950 – 1966: Post-Civil War State Terror, Execution of Nikos Beloyannis & Outlawed KKE',
      period: '1950 – 1966',
      categoryTag: 'challenges',
      summary: 'KKE outlawed; 100,000 communists exiled or imprisoned; March 1952 execution of Nikos Beloyannis.',
      details: `Following the civil war, over 100,000 communists were imprisoned in concentration camps on Makronisos and Yiaros islands, or fled into exile in the Soviet Union and Eastern Bloc.

On March 30, 1952, communist hero **Nikos Beloyannis** ("The Man with the Carnation") was executed by firing squad despite international protests by Pablo Picasso and Jean-Paul Sartre. The electoral front EDA organized legal left resistance. [2][3]`,
      keyFigures: ['Nikos Beloyannis', 'Pablo Picasso (Drew "Man with Carnation")', 'Grigoris Lambrakis (Assassinated in 1963)'],
      citationIds: [2, 3],
    },
    {
      id: 'greece-1967-us-backed-military-junta-polytechnic-uprising',
      title: '5. 1967 – 1974: The US-Backed Junta of the Colonels & November 1973 Polytechnic Uprising',
      period: '1967 – 1974',
      categoryTag: 'challenges',
      summary: 'April 1967 CIA-backed military coup; Nov 17, 1973 Athens Polytechnic student uprising.',
      details: `On April 21, 1967, right-wing military officers led by Colonel **Georgios Papadopoulos** executed a CIA-backed military coup, establishing the Dictatorship of the Colonels (*Junta*).

On November 14, 1973, students occupied the **Athens Polytechnic**, broadcasting radio calls for a worker-student revolution under the slogan "Bread-Education-Freedom." On November 17, army tanks smashed through the university gates, killing 24 students, but shattering the junta's legitimacy until its collapse in July 1974. [3]`,
      keyFigures: ['Georgios Papadopoulos', 'Dimitrios Ioannidis', 'Sotiris Petroulas'],
      citationIds: [3],
    },
    {
      id: 'greece-1974-metapolitefsi-pasok-2008-youth-uprising',
      title: '6. 1974 – 2008: Metapolitefsi Transition, PASOK Social Democracy & 2008 Youth Revolt',
      period: '1974 – 2008',
      categoryTag: 'policies',
      summary: '1974 legalisation of KKE; PASOK government under Papandreou; Dec 2008 youth uprising.',
      details: `In July 1974, democracy was restored (*Metapolitefsi*), legalising the KKE. Andreas Papandreou's PASOK party won 1981 elections, introducing social welfare programs and recognizing EAM-ELAS wartime resistance.

In December 2008, after police shot dead 15-year-old Alexandros Grigoropoulos in Exarcheia, nationwide youth uprisings paralyzed Greek cities for a month. [3][4]`,
      keyFigures: ['Andreas Papandreou', 'Constantine Karamanlis', 'Alexandros Grigoropoulos'],
      citationIds: [3, 4],
    },
    {
      id: 'greece-2009-troika-debt-crisis-syriza-oxi-referendum',
      title: '7. 2009 – 2015: The EU Troika Debt Crisis, SYRIZA Election & July 5, 2015 OXI Referendum',
      period: '2009 – 2015',
      categoryTag: 'revolution',
      summary: '2010 EU-IMF bailout austerity; Jan 2015 SYRIZA election victory; July 5, 2015: 61.3% vote OXI (NO).',
      details: `Following the 2008 global financial crisis, the EU, ECB, and IMF (**The Troika**) imposed draconian austerity bailouts on Greece, cutting pensions by 40% and pushing youth unemployment above 50%.

In January 2015, left coalition **SYRIZA** led by **Alexis Tsipras** was elected. On July 5, 2015, in a historic referendum, 61.3% of the Greek working class voted **OXI (NO)** against Troika debt terms. However, Tsipras capitulated to German finance capital days later, enforcing a third austerity bailout. [4]`,
      keyFigures: ['Alexis Tsipras', 'Yanis Varoufakis', 'Wolfgang Schäuble (German Finance Minister)'],
      citationIds: [4],
    },
    {
      id: 'greece-present-china-cosco-piraeus-port-kke-resistance',
      title: '8. Present: China COSCO Piraeus Port BRI Hub, New Democracy & Working-Class Resistance',
      period: 'Present',
      categoryTag: 'successes',
      summary: 'China COSCO transforms Piraeus into top Mediterranean port; KKE & PAME lead general strikes.',
      details: `Today, China's COSCO shipping group operates the **Port of Piraeus** under a 35-year concession, turning Piraeus into one of the top container ports in the Mediterranean and a flagship BRI gateway to Europe.

Under Prime Minister Kyriakos Mitsotakis (New Democracy), the Greek working class organized by PAME and the KKE continues staging massive general strikes for living wages, public health investment, and opposition to NATO war involvement. [3][4]`,
      keyFigures: ['Kyriakos Mitsotakis', 'Dimitris Koutsoumpas (KKE Leader)', 'Xi Jinping'],
      citationIds: [3, 4],
    },
  ],

  sources: [
    {
      id: 1,
      label: 'EAM-ELAS and the Anti-Fascist Resistance in Greece (1941-1944)',
      publisher: 'Dominique Eudes / Monthly Review Press (The Kapetanios: Partisans and Civil War)',
      year: '1972',
      excerpt: 'Definitive historical study of Aris Velouchiotis, EAM-ELAS partisan liberation of 80% of Greece, and 1944 British Dekemvriana intervention.',
    },
    {
      id: 2,
      label: 'The Greek Civil War (1946-1949), Truman Doctrine and Post-War State Terror',
      publisher: 'David Close / Longman (The Origins of the Greek Civil War)',
      year: '1995',
      excerpt: 'Documentary research on DSE guerrilla warfare, US Truman Doctrine napalm strikes, Makronisos concentration camps, and Nikos Beloyannis\'s execution.',
    },
    {
      id: 3,
      label: 'The US-Backed Junta of the Colonels (1967-1974) and the November 1973 Polytechnic Uprising',
      publisher: 'C.M. Woodhouse / Faber & Faber (Modern Greece: A Short History)',
      year: '1998',
      excerpt: 'Historical political economy of Papadopoulos\'s military dictatorship, CIA backing, and November 17, 1973 student revolt.',
    },
    {
      id: 4,
      label: 'The EU Troika Debt Crisis, July 2015 OXI Referendum and China COSCO Piraeus Port BRI Gateway',
      publisher: 'Costas Lapavitsas / Verso Books (Against the Euro)',
      year: '2012',
      excerpt: 'Critical political economy of European finance capital debt extraction, 61.3% OXI referendum vote, and China BRI maritime infrastructure at Piraeus.',
    },
  ],
};
