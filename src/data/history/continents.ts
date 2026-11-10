export type Continent =
  | 'Africa'
  | 'Asia'
  | 'Europe'
  | 'North America'
  | 'South America'
  | 'Oceania';

export const CONTINENT_LIST: Continent[] = [
  'Africa',
  'Asia',
  'Europe',
  'North America',
  'South America',
  'Oceania',
];

export const COUNTRY_CONTINENT_MAP: Record<string, Continent> = {
  // Africa
  'algeria': 'Africa',
  'angola': 'Africa',
  'benin': 'Africa',
  'burkina-faso': 'Africa',
  'congo-pr': 'Africa',
  'egypt': 'Africa',
  'ethiopia': 'Africa',
  'ghana': 'Africa',
  'libya': 'Africa',
  'mozambique': 'Africa',
  'nigeria': 'Africa',
  'senegal': 'Africa',
  'sierra-leone': 'Africa',
  'somalia-historic': 'Africa',
  'south-africa': 'Africa',
  'tanzania': 'Africa',
  'zimbabwe': 'Africa',

  // Asia
  'afghanistan': 'Asia',
  'bangladesh': 'Asia',
  'cambodia': 'Asia',
  'china': 'Asia',
  'dprk': 'Asia',
  'india': 'Asia',
  'iran': 'Asia',
  'israel': 'Asia',
  'japan': 'Asia',
  'laos': 'Asia',
  'lebanon': 'Asia',
  'malaysia': 'Asia',
  'mongolia': 'Asia',
  'myanmar': 'Asia',
  'nepal': 'Asia',
  'pakistan': 'Asia',
  'palestine': 'Asia',
  'philippines': 'Asia',
  'saudi-arabia': 'Asia',
  'south-korea': 'Asia',
  'south-yemen': 'Asia',
  'syria': 'Asia',
  'taiwan': 'Asia',
  'uae': 'Asia',
  'vietnam': 'Asia',
  'yemen-modern': 'Asia',

  // Europe
  'albania': 'Europe',
  'belarus': 'Europe',
  'bulgaria': 'Europe',
  'czechia': 'Europe',
  'czechoslovakia': 'Europe',
  'denmark': 'Europe',
  'finland': 'Europe',
  'france': 'Europe',
  'gdr': 'Europe',
  'georgia': 'Europe',
  'germany': 'Europe',
  'greece': 'Europe',
  'hungary': 'Europe',
  'ireland': 'Europe',
  'italy': 'Europe',
  'norway': 'Europe',
  'paris-commune': 'Europe',
  'poland': 'Europe',
  'romania': 'Europe',
  'russia': 'Europe',
  'scotland': 'Europe',
  'serbia': 'Europe',
  'spain': 'Europe',
  'sweden': 'Europe',
  'uk': 'Europe',
  'ukraine': 'Europe',
  'ussr': 'Europe',
  'yugoslavia': 'Europe',

  // North America & Caribbean
  'antigua-and-barbuda': 'North America',
  'bahamas': 'North America',
  'barbados': 'North America',
  'belize': 'North America',
  'canada': 'North America',
  'costa-rica': 'North America',
  'cuba': 'North America',
  'dominica': 'North America',
  'dominican-republic': 'North America',
  'grenada': 'North America',
  'guatemala': 'North America',
  'haiti': 'North America',
  'honduras': 'North America',
  'jamaica': 'North America',
  'nicaragua': 'North America',
  'panama': 'North America',
  'puerto-rico': 'North America',
  'st-kitts-and-nevis': 'North America',
  'st-lucia': 'North America',
  'st-vincent-and-the-grenadines': 'North America',
  'trinidad-and-tobago': 'North America',
  'usa': 'North America',

  // South America
  'bolivia': 'South America',
  'colombia': 'South America',
  'guyana': 'South America',
  'suriname': 'South America',
  'venezuela': 'South America',
  'venezuela-bolivarian': 'South America',

  // Oceania
  'hawaii': 'Oceania',
};

export function getCountryContinent(country: { id: string; continent?: Continent }): Continent {
  if (country.continent) {
    return country.continent;
  }
  return COUNTRY_CONTINENT_MAP[country.id.toLowerCase()] || 'North America';
}
