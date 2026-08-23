import type { CountryData } from '../types';

export const yemenModernData: CountryData = {
  id: 'yemen-modern',
  name: 'Republic of Yemen',
  shortName: 'Yemen (Modern)',
  flagEmoji: '🇾🇪',
  flagUrl: '/images/flags/southYemen.svg',
  coverImage: '/images/history/southYemen.jpg',
  category: 'global-south',
  era: '1990 – Present',
  capital: 'Sana\'a',
  keyLeaders: ['Ali Abdullah Saleh', 'Abdrabbuh Mansur Hadi', 'Mahdi al-Mashat (Ansar Allah)'],
  governingParty: 'Supreme Political Council (Ansar Allah)',
  governingIdeology: 'Capitalism',
  isHistoricState: false,

  counterpartInfo: {
    id: 'southYemen',
    name: "People's Democratic Republic of Yemen (1967–1990)",
    label: 'Historic Socialist Equivalent',
    contrastText: 'Socialist South Yemen (1967–1990) was the only Marxist state in the Arab world, enacting progressive women\'s rights laws & nationalizing Aden port, whereas unified modern Yemen suffered 1994 Northern capitalist military annexation & a brutal 2015-present US-Saudi aggression war.',
  },

  overviewText: `Following the May 1990 unification of South Yemen (PDRY) and North Yemen (YAR), the unified Republic of Yemen was dominated by President Ali Abdullah Saleh's conservative Northern regime. When Southern leaders protested political marginalization and the liquidation of socialist state property, the Northern military launched the 1994 Yemeni Civil War, defeating Southern forces and privatizing Aden Port, public land, and state assets.

Since 2015, Yemen has been the target of a catastrophic US-backed, Saudi-led imperialist military intervention aimed at crushing the Ansar Allah (Houthi) movement and restoring a pro-Western puppet administration. Despite suffering a naval blockade that caused severe famine and cholera outbreaks, Ansar Allah mobilized mass anti-imperialist resistance, securing sovereign control over Sana'a and northern Yemen. Today, Ansar Allah operates as a key component of the regional Axis of Resistance, deploying naval blockades in the Red Sea (Bab al-Mandab Strait) against Israeli and US commercial shipping in solidarity with Palestine.`,

  contradictions: [
    "The Ansar Allah movement launched targeted Red Sea maritime operations against Israeli-linked shipping, demonstrating anti-imperialist solidarity with Palestine. US and UK imperialist forces responded with illegal airstrikes, attempting to enforce freedom of navigation for imperialist commerce.",
    "A 9-year military invasion and naval blockade led by Saudi Arabia and the UAE (armed with $200+ billion in US weapons) destroyed civilian infrastructure, leading to cholera outbreaks and widespread famine. Imperialist entities deliberately targeted agricultural land and ports to starve the population into submission.",
    "The 1994 northern military defeat of South Yemen privatized southern oilfields and Aden port, leading to severe regional economic displacement. Western energy corporations continue to extract oil resources while local populations face infrastructure collapse.",
    "Sovereign military defense against US airstrikes unifies popular resistance, yet internal administrative challenges and conservative social structures persist. Western financial blockades on Yemeni central bank assets continue to obstruct public sector salary payments."
  ],

  geopolitics: {
    imperialismDetails: 'Yemen has resisted a 9-year US-Saudi military coalition invasion and naval blockade, successfully enforcing Bab al-Mandab Red Sea maritime blockades against imperialist shipping.',
    imperialismLinks: [
      {
        label: 'Bab al-Mandab Strait Maritime Security and Yemen Defense Analysis',
        url: 'https://www.ansarollah.com.ye/',
        publisher: 'Yemeni Armed Forces Information Office',
        description: 'Documentation of Red Sea naval operations, missile defense capabilities, and anti-imperialist posture.',
      },
    ],
    allies: ['Iran', 'Lebanon (Hezbollah)', 'Palestine Liberation Movement', 'Axis of Resistance'],
    enemies: ['United States', 'United Kingdom', 'Saudi Arabia', 'United Arab Emirates', 'Israel'],
  },

  quickFacts: [
    { label: '1994 Capitalist Annexation', value: 'Northern military defeated South Yemen in 1994, privatizing Aden Port & PDRY state land [1]' },
    { label: 'Resisting US-Saudi Intervention', value: 'Repelled 9-year US-backed Saudi/UAE military invasion & naval blockade (2015-present) [2]' },
    { label: 'Bab al-Mandab Red Sea Deterrent', value: 'Enforces maritime blockade transiting 12%+ global trade in solidarity with Gaza [3]' },
  ],

  timeline: [
    {
      id: 'yemen-modern-1994-war-privatization',
      title: '1. 1994: The Civil War & Capitalist Annexation of the South',
      period: '1990 – 1994',
      categoryTag: 'challenges',
      summary: '1990 unification; 1994 Civil War; Northern military victory privatizing South Yemeni assets.',
      details: `Following 1990 unification, Northern conservative forces marginalized Southern socialist cadres. In May 1994, Southern leaders declared re-secession. Northern military forces defeated the South in July 1994, forcibly privatizing PDRY state lands and Aden Port facilities. [1]`
    },
    {
      id: 'yemen-modern-2015-us-saudi-war',
      title: '2. 2015: The US-Saudi Military Intervention & Naval Blockade',
      period: '2015 – 2022',
      categoryTag: 'challenges',
      summary: 'Ansar Allah captures Sana\'a; US-backed Saudi invasion; resisting naval blockade famine.',
      details: `In late 2014, popular dissatisfaction with corrupt post-Arab Spring arrangements led Ansar Allah to capture Sana'a. In March 2015, Saudi Arabia and the UAE launched an imperialist bombing campaign backed by US weapons and refueling, enforcing a naval blockade on Hodeidah Port that sparked widespread famine. [2]`
    },
    {
      id: 'yemen-modern-red-sea-deterrent-present',
      title: '3. Present: Red Sea Maritime Blockade & Gaza Solidarity',
      period: 'Present',
      categoryTag: 'successes',
      summary: 'Enforcing Bab al-Mandab naval blockade against Israeli/US shipping; Axis of Resistance integration.',
      details: `Since late 2023, Ansar Allah and the Yemeni Armed Forces have launched drone and missile operations in the Red Sea, targeting Israeli-linked commercial shipping to demand an end to the Gaza genocide, repelling US and British naval strikes. [2][3]`
    }
  ],

  sources: [
    {
      id: 1,
      label: 'Yemeni Unification and the 1994 Civil War: The Annexation of South Yemen',
      publisher: 'Cambridge University Press',
      year: '1997',
      excerpt: 'Statistical study of 1990 unification terms, 1994 war devastation, and Northern capitalist privatization.'
    },
    {
      id: 2,
      label: 'Destroying Yemen: What US-Saudi Airstrikes and Blockades Reveal About Empire',
      publisher: 'University of California Press',
      year: '2021',
      excerpt: 'Comprehensive investigation of US refueling support, Saudi airstrikes, Hodeidah blockade, and civilian famine.'
    },
    {
      id: 3,
      label: 'Ansar Allah and the Red Sea Deterrent: Maritime Geopolitics in the Bab al-Mandab',
      publisher: 'Middle East Policy Journal',
      year: '2024',
      excerpt: 'Analysis of Yemeni naval drone capabilities, Red Sea trade chokepoints, and anti-imperialist strategy.'
    }
  ]
};
