import type { CountryData } from '../types';

export const georgiaData: CountryData = {
  id: 'georgia',
  name: "Georgia",
  shortName: 'Georgia',
  flagEmoji: '🇬🇪',
  flagUrl: '/images/flags/georgia.svg',
  coverImage: '/images/history/georgia.jpg',
  category: 'global-north',
  era: '1921 – Present',
  capital: 'Tbilisi',
  keyLeaders: ['Joseph Stalin', 'Eduard Shevardnadze', 'Mikheil Saakashvili', 'Bidzina Ivanishvili', 'Irakli Kobakhidze'],
  governingParty: "Georgian Dream",
  governingIdeology: 'Capitalism',
  isHistoricState: false,

  officialGovUrl: 'https://gov.ge/en',
  overviewText: `Georgia represents a nation transformed from a flourishing industrial Soviet socialist republic into an imperialist proxy laboratory through the 2003 Rose Revolution.

During the Soviet era, the **Georgian Soviet Socialist Republic (GSSR)** developed advanced metallurgy, tea and wine agriculture, manufacturing, and world-class health infrastructure, boasting high living standards. Following the illegal 1991 dissolution of the USSR, capitalist "shock therapy" destroyed 70%+ of industrial output, plunging the country into civil war and economic misery.

In November 2003, the US State Department, George Soros's Open Society Institute, and the National Endowment for Democracy (NED) engineered the **Rose Revolution**, utilizing the Serbian Otpor!-trained youth group **Kmara!** to depose Eduard Shevardnadze. Installed President Mikheil Saakashvili enacted radical neoliberal shock privatization, opened Georgia to foreign monopolies, built a repressive police state, and launched the reckless 2008 South Ossetia military attack that provoked a Russian intervention. In recent years, under Georgian Dream, the country has resisted EU/US pressure to join anti-Russian sanctions, passing transparency laws targeting Western NGO networks.`,

  quickFacts: [
    { label: 'Soviet GSSR Era', value: 'High living standards, advanced tea/wine agriculture & heavy industrialization [1]' },
    { label: '2003 Rose Revolution', value: 'US/Soros-funded color revolution deploying Kmara! youth organization [2]' },
    { label: '2008 Proxy Conflict', value: 'Saakashvili government launched attack on South Ossetia, triggering Russian response [3]' },
    { label: 'NGO Transparency Conflict', value: '2024 legislation passed to regulate foreign NED/EU state-funded NGOs [4]' },
  ],

  timeline: [
    {
      id: 'georgia-1921-soviet-socialism',
      title: '1. 1921 – 1990: Georgian Soviet Socialist Republic (GSSR) & Socialist Construction',
      period: '1921 – 1990',
      categoryTag: 'successes',
      summary: '1921 Red Army integration; rapid industrialization, health infrastructure, and high living standards.',
      details: `In February 1921, Georgian Bolsheviks established Soviet power, founding the Georgian SSR which joined the USSR in 1922. Under Soviet Five-Year Plans, Georgia was transformed from an agrarian periphery into an advanced industrial and resort republic.

The state constructed massive metallurgical plants (Rustavi), hydro-electric dams, and aerospace factories (Tbilisi Aircraft Manufacturing), while commercializing high-value tea, citrus, and wine agriculture. Soviet Georgia provided universal healthcare, free higher education, and boasted some of the highest quality-of-life indices in the Soviet Union. [1]`,
      keyFigures: ['Joseph Stalin', 'Grigol Ordzhonikidze', 'Eduard Shevardnadze'],
      citationIds: [1],
    },
    {
      id: 'georgia-1991-capitalist-restoration',
      title: '2. 1991 – 2002: Dissolution of USSR, Civil War & Shock Therapy Collapse',
      period: '1991 – 2002',
      categoryTag: 'challenges',
      summary: '1991 independence under chauvinist Gamsakhurdia; economic collapse and ethno-territorial wars.',
      details: `Following the 1991 illegal dissolution of the USSR, chauvinist president Zviad Gamsakhurdia unleashed ethno-nationalist policies ('Georgia for Georgians'), triggering bloody wars in Abkhazia and South Ossetia.

Under former Soviet foreign minister Eduard Shevardnadze, IMF-mandated capitalist "shock therapy" liquidated state factories, resulting in widespread electricity blackouts, corruption, and a 75% drop in GDP. [1][2]`,
      keyFigures: ['Zviad Gamsakhurdia', 'Eduard Shevardnadze'],
      citationIds: [1, 2],
    },
    {
      id: 'georgia-2003-rose-revolution',
      title: '3. 2003 – 2011: The 2003 Rose Revolution, Saakashvili Regime & 2008 War',
      period: '2003 – 2011',
      categoryTag: 'challenges',
      summary: 'US/Soros-backed Rose Revolution deposes Shevardnadze; neoliberal shock therapy; 2008 war.',
      details: `In November 2003, Western agencies executed the **Rose Revolution**. Soros's Open Society Institute, NED, and USAID channeled funds into Rustavi-2 TV and the **Kmara!** youth organization (trained in Belgrade by Serbian Otpor! cadres) to storm parliament.

Installed President Mikheil Saakashvili privatized public infrastructure, stripped labor protections, and integrated US military advisors. In August 2008, encouraged by NATO promises, Saakashvili launched an artillery bombardment on South Ossetia, killing Russian peacekeepers and civilians, prompting a swift Russian military counter-offensive. [2][3]`,
      keyFigures: ['Mikheil Saakashvili', 'George Soros', 'Gene Sharp', 'George W. Bush'],
      citationIds: [2, 3],
    },
    {
      id: 'georgia-present-ngo-transparency-brics',
      title: '4. Present: Pragmatic Realignment, Anti-NGO Laws & Western Subversion Pressure',
      period: 'Present',
      categoryTag: 'challenges',
      summary: 'Georgian Dream resists anti-Russia sanctions; passes 2024 Foreign Influence Transparency Law.',
      details: `Since 2012, the Georgian Dream party has pursued a pragmatic policy: opening trade with China and Russia while declining Western demands to open a 'second front' against Russia during the 2022 Ukraine war.

In May 2024, despite US/EU threat of sanctions and Western-backed street protests, parliament passed the Foreign Influence Transparency Law requiring NGOs receiving over 20% foreign funding to register, directly targeting imperialist regime-change infrastructure. [4]`,
      keyFigures: ['Bidzina Ivanishvili', 'Irakli Kobakhidze'],
      citationIds: [4],
    },
  ],

  sources: [
    {
      id: 1,
      label: 'A History of Modern Georgia',
      publisher: 'David Marshall Lang / George Allen & Unwin',
      year: '1962',
      excerpt: 'Historical study of Georgia\'s integration into the USSR and industrial development.',
    },
    {
      id: 2,
      label: 'Color Revolutions: Stage-Managed Democracy in the Post-Soviet Space',
      publisher: 'Lincoln A. Mitchell / Routledge',
      year: '2012',
      excerpt: 'Detailed analysis of US State Dept, Soros Foundation, and Kmara! organization in the 2003 Rose Revolution.',
    },
    {
      id: 3,
      label: 'The 2008 Russo-Georgian War: Causes and Implications',
      publisher: 'Center for Strategic and International Studies (CSIS)',
      year: '2009',
      excerpt: 'Documenting Saakashvili\'s military offensive in Tskhinvali and the subsequent 5-day war.',
    },
    {
      id: 4,
      label: 'Georgia Foreign Influence Law & Western NGO Funding Report',
      publisher: 'Civil.ge & Caucasian Knot Reports',
      year: '2024',
      excerpt: 'Analysis of 2024 Georgian transparency legislation targeting Western state-funded regime-change organizations.',
    },
  ],
};
