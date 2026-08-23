export type CountryCategory =
  | 'aes'           // Actually Existing Socialism / Historical Socialist States (Cuba, Vietnam, China, Laos, DPRK, USSR, Yugoslavia, etc.)
  | 'global-south'  // Global South / Periphery nations (Latin America, Africa, Asia, Middle East)
  | 'global-north'; // Global North / Imperial Core nations (US, Western Europe, Japan, Settler-Colonies)

export interface Citation {
  id: number;
  label: string;       // e.g. "CIA Directorate of Intelligence - American and Soviet Nutrient Intake Report (1983)"
  url?: string;        // External or declassified source URL
  publisher?: string;  // e.g. "U.S. Central Intelligence Agency"
  year?: string;       // e.g. "1983"
  excerpt?: string;    // Brief summary of source finding
}

export interface ImperialismLink {
  label: string;
  url: string;
  publisher?: string;
  description?: string;
}

export interface GeopoliticsInfo {
  imperialismDetails?: string;    // Summary of current or historical imperialist targeting, sanctions, and interference
  imperialismLinks?: ImperialismLink[]; // Links on what this country is imperialised/sanctioned/targeted by
  allies?: string[];              // Primary allies and solidarity partners
  enemies?: string[];             // Primary imperialist opponents and hostile forces
  regionalBlocs?: string[];       // Anti-imperialist and regional alliance memberships
}

export type TimelinePhaseTag =
  | 'pre-revolution'
  | 'revolution'
  | 'policies'
  | 'successes'
  | 'challenges'
  | 'collapse-or-transition';

export interface TimelinePhase {
  id: string;
  title: string;       // e.g. "1. Pre-Revolutionary Imperial Russia / Tsarist Autocracy"
  period: string;      // e.g. "Pre-1917"
  categoryTag: TimelinePhaseTag;
  summary: string;     // Overview blurb
  details: string;     // Detailed narrative analysis containing [1], [2] citation markers
  keyPolicies?: string[];
  keyFigures?: string[];
  citationIds?: number[];
}

export interface QuickFact {
  label: string;
  value: string;
}

export interface CounterpartStateInfo {
  id: string;
  name: string;
  label: string;
  contrastText: string;
}

export interface CountryData {
  id: string;                      // e.g. "ussr"
  name: string;                    // Full official name
  shortName: string;               // Display name
  flagEmoji: string;               // Flag emoji or symbol
  flagUrl?: string;                // Official SVG flag image path
  coverImage?: string;             // Card cover image path
  category: CountryCategory;       // Primary category
  categories?: CountryCategory[];  // Array of categories for countries with multi-faceted history
  era?: string;                    // Historical era range (e.g. "1917 – Present")
  capital: string;                 // e.g. "Moscow"
  keyLeaders: string[];            // e.g. ["V.I. Lenin", "J.V. Stalin"]
  governingParty?: string;         // e.g. "Communist Party of the Soviet Union"
  governingIdeology?: string;      // e.g. "Marxism-Leninism"
  isHistoricState?: boolean;       // true if dissolved/historical state (e.g., USSR, SFR Yugoslavia)
  counterpartInfo?: CounterpartStateInfo; // Cross-reference between historic socialist state & modern equivalent
  officialGovUrl?: string;         // Official web portal / government website 
  
  // Educational ML Overview
  overviewText: string;            // Introductory educational text demystifying myths from ML perspective
  
  contradictions?: string[];       // Dialectical materialist bulletpoint list of internal class tensions & collapse factors
  geopolitics?: GeopoliticsInfo;   // Imperialism links, allies, and enemies
  quickFacts: QuickFact[];
  timeline: TimelinePhase[];
  sources: Citation[];
}

