import type { CountryData } from '../types';

export const greeceData: CountryData = {
  id: 'greece',
  name: "Greece",
  shortName: 'Greece',
  flagEmoji: '🇬🇷',
  flagUrl: '/images/flags/greece.svg',
  coverImage: '/images/history/greece.jpg',
  category: 'global-north',
  era: '1941 to Present',
  capital: 'Athens',
  keyLeaders: ['Nikos Zachariadis', 'Aris Velouchiotis', 'Georgios Papadopoulos', 'Andreas Papandreou', 'Alexis Tsipras', 'Kyriakos Mitsotakis'],
  governingParty: "New Democracy",
  governingIdeology: 'Capitalism',
  isHistoricState: false,
  
  officialGovUrl: 'https://www.government.gov.gr/',
  overviewText: `Greece represents a Mediterranean nation shaped by heroic communist-led anti-fascist resistance (**EAM-ELAS**), the first proxy conflict of the Cold War (**The 1946 to 1949 Greek Civil War**), a brutal US-backed military junta, and ruthless debt extraction by Western European finance capital (**The EU Troika**).

During World War II, the Communist Party of Greece (KKE) organized the **National Liberation Front (EAM-ELAS)** led by **Aris Velouchiotis**, liberating 80% of Greece from Nazi German occupation and establishing democratic popular self-government. In December 1944 (**Dekemvriana**), British troops under Winston Churchill opened fire on peaceful anti-fascist demonstrators in Athens, installing former Nazi collaborators in power. Between 1946 and 1949, the **Democratic Army of Greece (DSE)** waged civil war against monarchist forces backed by US President Truman (**1947 Truman Doctrine**), who deployed napalm bombs for the first time in military history.

In April 1967, a US-backed military junta led by Colonel Georgios Papadopoulos seized power, unleashing torture until the November 1973 **Athens Polytechnic Student Uprising** broke the regime. Following the 2008 global financial crisis, the European Union, European Central Bank, and IMF (**The Troika**) forced extreme austerity on Greece. In July 2015, 61.3% of Greeks voted **OXI (NO)** against Troika debt terms in a historic referendum, though SYRIZA leadership capitulated to Western banks. Today, China COSCO operates the strategic Port of Piraeus as a key BRI hub, while the Greek working class led by PAME and the KKE wages massive general strikes against railway privatization disasters (the Tempi crash), the 2024 six-day workweek law, and NATO war involvement.`,

  contradictions: [
    "The 2015 Alexis Tsipras administration capitulated to EU and IMF debt demands, imposing severe austerity that privatized public ports, railways, and utilities, setting the stage for the deadly 2023 Tempi rail crash.",
    "Western financial monopolies extracted billions in debt servicing while Greek public pensions were slashed and Kyriakos Mitsotakis's government legalized a six-day workweek in July 2024.",
    "Greece serves as a frontline military logistics outpost for US and NATO operations in the Eastern Mediterranean and Red Sea despite militant port and railway blockades by communist trade unionists.",
    "Public healthcare and education budgets were gutted under international loan conditions, forcing mass emigration of young skilled workers while private universities were legalized in 2024 over mass student occupations."
  ],

  quickFacts: [
    { label: 'EAM-ELAS Anti-Fascist Resistance', value: 'Communist guerrillas led by Aris Velouchiotis liberated 80% of Greece from Nazis [1]' },
    { label: '1946 to 1949 Civil War and US Truman Doctrine', value: 'US and British forces deployed napalm to crush DSE communist partisans [2]' },
    { label: '1973 Athens Polytechnic Uprising', value: 'Student revolt shattered US-backed military dictatorship of the Colonels [3]' },
    { label: 'July 2015 OXI Referendum (61.3% NO)', value: 'Greek working class voted overwhelmingly against EU Troika debt austerity [4]' },
  ],

  timeline: [
    {
      id: 'greece-1941-wwii-nazi-occupation-eam-elas-resistance',
      title: '1. 1941 to 1944: WWII Nazi Occupation, Great Famine and EAM-ELAS Anti-Fascist Resistance',
      period: '1941 to 1944',
      categoryTag: 'revolution',
      summary: '1941 Nazi invasion; Great Famine kills 300,000; EAM-ELAS liberates 80% of Greece by 1944.',
      details: `In April 1941, Nazi Germany invaded Greece. Axis occupation food requisitions caused the 1941 to 1942 Great Famine, killing 300,000 Greeks.

In September 1941, the Communist Party of Greece (KKE) founded **EAM** (National Liberation Front) and its military wing **ELAS**, led by **Aris Velouchiotis**. By 1944, ELAS had 120,000 fighters, liberating 80% of the country and establishing local popular self-government (*Laokratia*). [1]`,
      keyFigures: ['Aris Velouchiotis', 'Nikos Zachariadis', 'Stefanos Sarafis'],
      citationIds: [1],
    },
    {
      id: 'greece-1944-dekemvriana-british-troops-fire-athens',
      title: '2. 1944: The December 1944 Dekemvriana: British Imperialism Firing on Anti-Fascists',
      period: '1944',
      categoryTag: 'challenges',
      summary: 'Dec 3, 1944: British troops and royal police massacre 28 peaceful EAM marchers in Syntagma Square.',
      details: `In October 1944, German troops evacuated Athens. However, British Prime Minister Winston Churchill ordered British forces under General Ronald Scobie to disarm ELAS while empowering Nazi collaborators (*Security Battalions*).

On December 3, 1944 (**Dekemvriana**), British troops and royal police opened fire on a peaceful 250,000-strong EAM demonstration in Syntagma Square, killing 28 marchers and igniting 37 days of street fighting in Athens. [1][2]`,
      keyFigures: ['Winston Churchill', 'General Ronald Scobie', 'George Papandreou'],
      citationIds: [1, 2],
    },
    {
      id: 'greece-1946-greek-civil-war-truman-doctrine-napalm',
      title: '3. 1946 to 1949: The Greek Civil War and US Truman Doctrine Napalm Warfare',
      period: '1946 to 1949',
      categoryTag: 'revolution',
      summary: '1946 to 1949 Civil War: Democratic Army of Greece (DSE) fights US-backed royalist military.',
      details: `In October 1946, facing monarchist death squad terror (*White Terror*), KKE General Secretary **Nikos Zachariadis** formed the Democratic Army of Greece (**DSE**), launching the Greek Civil War.

In March 1947, US President Harry Truman announced the **Truman Doctrine**, sending $400 million in military aid, US advisors (General James Van Fleet), and napalm bombs. DSE forces were defeated in August 1949 at the Battle of Grammos-Vitsi. [2]`,
      keyFigures: ['Nikos Zachariadis', 'Markos Vafiadis', 'Harry S. Truman', 'General James Van Fleet'],
      citationIds: [2],
    },
    {
      id: 'greece-1950-post-war-repression-beloyannis-execution',
      title: '4. 1950 to 1966: Post-Civil War State Terror, Execution of Nikos Beloyannis and Outlawed KKE',
      period: '1950 to 1966',
      categoryTag: 'challenges',
      summary: 'KKE outlawed; 100,000 communists exiled or imprisoned; March 1952 execution of Nikos Beloyannis.',
      details: `Following the civil war, over 100,000 communists were imprisoned in concentration camps on Makronisos and Yiaros islands, or fled into exile in the Soviet Union and Eastern Bloc.

On March 30, 1952, communist hero **Nikos Beloyannis** ("The Man with the Carnation") was executed by firing squad despite international protests by Pablo Picasso and Jean-Paul Sartre. The electoral front EDA organized legal left resistance. [2][3]`,
      keyFigures: ['Nikos Beloyannis', 'Pablo Picasso (Drew "Man with Carnation")', 'Grigoris Lambrakis (Assassinated in 1963)'],
      citationIds: [2, 3],
    },
    {
      id: 'greece-1967-us-backed-military-junta-polytechnic-uprising',
      title: '5. 1967 to 1974: The US-Backed Junta of the Colonels and November 1973 Polytechnic Uprising',
      period: '1967 to 1974',
      categoryTag: 'challenges',
      summary: 'April 1967 CIA-backed military coup; Nov 17, 1973 Athens Polytechnic student uprising.',
      details: `On April 21, 1967, right-wing military officers led by Colonel **Georgios Papadopoulos** executed a CIA-backed military coup, establishing the Dictatorship of the Colonels (*Junta*).

On November 14, 1973, students occupied the **Athens Polytechnic**, broadcasting radio calls for a worker-student revolution under the slogan "Bread, Education, Freedom." On November 17, army tanks smashed through the university gates, killing 24 students, but shattering the junta's legitimacy until its collapse in July 1974. [3]`,
      keyFigures: ['Georgios Papadopoulos', 'Dimitrios Ioannidis', 'Sotiris Petroulas'],
      citationIds: [3],
    },
    {
      id: 'greece-1974-metapolitefsi-pasok-2008-youth-uprising',
      title: '6. 1974 to 2008: Metapolitefsi Transition, PASOK Social Democracy and 2008 Youth Revolt',
      period: '1974 to 2008',
      categoryTag: 'policies',
      summary: '1974 legalisation of KKE; PASOK government under Papandreou; Dec 2008 youth uprising.',
      details: `In July 1974, democracy was restored (*Metapolitefsi*), legalising the KKE. Andreas Papandreou's PASOK party won 1981 elections, introducing social welfare programs and recognizing EAM-ELAS wartime resistance.

In December 2008, after police shot dead 15-year-old Alexandros Grigoropoulos in Exarcheia, nationwide youth uprisings paralyzed Greek cities for a month. [3][4]`,
      keyFigures: ['Andreas Papandreou', 'Constantine Karamanlis', 'Alexandros Grigoropoulos'],
      citationIds: [3, 4],
    },
    {
      id: 'greece-2009-troika-debt-crisis-syriza-oxi-referendum',
      title: '7. 2009 to 2022: The EU Troika Debt Crisis, SYRIZA Election and July 5, 2015 OXI Referendum',
      period: '2009 to 2022',
      categoryTag: 'revolution',
      summary: '2010 EU-IMF bailout austerity; Jan 2015 SYRIZA election victory; July 5, 2015: 61.3% vote OXI (NO).',
      details: `Following the 2008 global financial crisis, the EU, ECB, and IMF (**The Troika**) imposed draconian austerity bailouts on Greece, cutting pensions by 40%, privatizing state railways and utilities, and pushing youth unemployment above 50%.

In January 2015, left coalition **SYRIZA** led by **Alexis Tsipras** was elected. On July 5, 2015, in a historic referendum, 61.3% of the Greek working class voted **OXI (NO)** against Troika debt terms. However, Tsipras capitulated to German finance capital days later, enforcing a third austerity bailout. [4]`,
      keyFigures: ['Alexis Tsipras', 'Yanis Varoufakis', 'Wolfgang Schäuble (German Finance Minister)'],
      citationIds: [4],
    },
    {
      id: 'greece-present-china-cosco-piraeus-port-kke-resistance',
      title: '8. 2023 to Present: Tempi Rail Crash Outrage, Six-Day Workweek Law and PAME-KKE General Strikes',
      period: '2023 to Present',
      categoryTag: 'challenges',
      summary: 'Feb 2023 Tempi rail crash kills 57; July 2024 six-day workweek law; massive 2024 to 2026 PAME and KKE general strikes.',
      details: `While China's COSCO shipping group transformed the **Port of Piraeus** into a premier Mediterranean container gateway, domestic public infrastructure suffered catastrophic neglect under Troika privatization mandates. On February 28, 2023, a passenger train collided head-on with a freight train at **Tempi**, killing 57 people (mostly university students) after years of railway privatization, staff cuts, and uncompleted electronic safety signaling. Under the slogan "Their profits or our lives," the Communist-affiliated **All-Workers Militant Front (PAME)** and the **KKE** led massive nationwide general strikes that recurred across 2024, 2025, and 2026 on the anniversaries of the disaster, mobilizing over a million demonstrators against state cover-ups.

In 2024, Prime Minister Kyriakos Mitsotakis's conservative New Democracy government provoked further working-class and student fury by legalizing private universities (violating Article 16 of the Constitution and triggering months of university occupations) and enacting a **six-day workweek law** (effective July 2024) allowing employers in industrial, retail, and agricultural sectors to impose 48-hour workweeks. Throughout 2024 to 2026, PAME, dockworkers, ferry crews, railway workers, and hospital staff repeatedly paralyzed Greek transport in 24-hour general strikes while physically blocking NATO munitions trains and trucks bound for Ukraine and Israel. [3][4]`,
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
      publisher: 'C.M. Woodhouse / Faber and Faber (Modern Greece: A Short History)',
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
