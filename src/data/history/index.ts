import type { CountryData, CountryCategory } from './types';
import { ussrData } from './countries/ussr';
import { cubaData } from './countries/cuba';
import { chinaData } from './countries/china';
import { vietnamData } from './countries/vietnam';
import { laosData } from './countries/laos';
import { myanmarData } from './countries/myanmar';
import { iranData } from './countries/iran';
import { lebanonData } from './countries/lebanon';
import { israelData } from './countries/israel';
import { panamaData } from './countries/panama';
import { bulgariaData } from './countries/bulgaria';
import { ukraineData } from './countries/ukraine';
import { japanData } from './countries/japan';
import { southKoreaData } from './countries/southKorea';
import { taiwanData } from './countries/taiwan';
import { canadaData } from './countries/canada';
import { yugoslaviaData } from './countries/yugoslavia';
import { scotlandData } from './countries/scotland';
import { haitiData } from './countries/haiti';
import { jamaicaData } from './countries/jamaica';
import { dominicaData } from './countries/dominica';
import { dominicanRepublicData } from './countries/dominicanRepublic';
import { puertoRicoData } from './countries/puertoRico';
import { hawaiiData } from './countries/hawaii';
import { guatemalaData } from './countries/guatemala';
import { hondurasData } from './countries/honduras';
import { costaRicaData } from './countries/costaRica';
import { colombiaData } from './countries/colombia';
import { nicaraguaData } from './countries/nicaragua';
import { indiaData } from './countries/india';
import { pakistanData } from './countries/pakistan';
import { bangladeshData } from './countries/bangladesh';
import { nepalData } from './countries/nepal';
import { italyData } from './countries/italy';
import { greeceData } from './countries/greece';
import { ghanaData } from './countries/ghana';
import { nigeriaData } from './countries/nigeria';
import { sierraLeoneData } from './countries/sierraLeone';
import { beninData } from './countries/benin';
import { senegalData } from './countries/senegal';
import { angolaData } from './countries/angola';
import { philippinesData } from './countries/philippines';
import { malaysiaData } from './countries/malaysia';
import { ethiopiaData } from './countries/ethiopia';
import { algeriaData } from './countries/algeria';
import { mozambiqueData } from './countries/mozambique';
import { zimbabweData } from './countries/zimbabwe';
import { southAfricaData } from './countries/southAfrica';
import { tanzaniaData } from './countries/tanzania';
import { dprkData } from './countries/dprk';
import { venezuelaData } from './countries/venezuela';
import { libyaData } from './countries/libya';
import { afghanistanData } from './countries/afghanistan';
import { palestineData } from './countries/palestine';
import { irelandData } from './countries/ireland';
import { burkinaFasoData } from './countries/burkinaFaso';
import { germanyData } from './countries/germany';
import { franceData } from './countries/france';
import { ukData } from './countries/uk';
import { usaData } from './countries/usa';
import { saudiArabiaData } from './countries/saudiArabia';
import { uaeData } from './countries/uae';
import { syriaData } from './countries/syria';
import { egyptData } from './countries/egypt';
import { georgiaData } from './countries/georgia';
import { belarusData } from './countries/belarus';
import { boliviaData } from './countries/bolivia';
import { russiaData } from './countries/russia';
import { serbiaData } from './countries/serbia';
import { swedenData } from './countries/sweden';
import { norwayData } from './countries/norway';
import { finlandData } from './countries/finland';
import { denmarkData } from './countries/denmark';
import { gdrData } from './countries/gdr';
import { albaniaData } from './countries/albania';
import { polandData } from './countries/poland';
import { czechoslovakiaData } from './countries/czechoslovakia';
import { hungaryData } from './countries/hungary';
import { romaniaData } from './countries/romania';
import { southYemenData } from './countries/southYemen';
import { grenadaData } from './countries/grenada';
import { mongoliaData } from './countries/mongolia';
import { cambodiaData } from './countries/cambodia';
import { czechiaData } from './countries/czechia';
import { yemenModernData } from './countries/yemenModern';
import { parisCommuneData } from './countries/parisCommune';
import { congoPRData } from './countries/congoPR';
import { somaliaHistoricData } from './countries/somaliaHistoric';
import { barbadosData } from './countries/barbados';
import { trinidadAndTobagoData } from './countries/trinidadAndTobago';
import { guyanaData } from './countries/guyana';
import { surinameData } from './countries/suriname';
import { belizeData } from './countries/belize';
import { stKittsAndNevisData } from './countries/stKittsAndNevis';
import { stLuciaData } from './countries/stLucia';
import { stVincentAndTheGrenadinesData } from './countries/stVincentAndTheGrenadines';
import { antiguaAndBarbudaData } from './countries/antiguaAndBarbuda';
import { bahamasData } from './countries/bahamas';

export * from './types';
export * from './continents';

export const allCountries: CountryData[] = [
  vietnamData,
  laosData,
  chinaData,
  parisCommuneData,
  gdrData,
  albaniaData,
  polandData,
  czechoslovakiaData,
  czechiaData,
  hungaryData,
  romaniaData,
  southYemenData,
  yemenModernData,
  grenadaData,
  congoPRData,
  somaliaHistoricData,
  mongoliaData,
  cambodiaData,
  myanmarData,
  iranData,
  lebanonData,
  panamaData,
  bulgariaData,
  ukraineData,
  japanData,
  southKoreaData,
  taiwanData,
  canadaData,
  yugoslaviaData,
  scotlandData,
  haitiData,
  jamaicaData,
  dominicaData,
  dominicanRepublicData,
  puertoRicoData,
  barbadosData,
  trinidadAndTobagoData,
  guyanaData,
  surinameData,
  belizeData,
  stKittsAndNevisData,
  stLuciaData,
  stVincentAndTheGrenadinesData,
  antiguaAndBarbudaData,
  bahamasData,
  hawaiiData,
  guatemalaData,
  hondurasData,
  costaRicaData,
  colombiaData,
  nicaraguaData,
  indiaData,
  pakistanData,
  bangladeshData,
  nepalData,
  italyData,
  greeceData,
  ghanaData,
  nigeriaData,
  sierraLeoneData,
  beninData,
  senegalData,
  angolaData,
  philippinesData,
  malaysiaData,
  ethiopiaData,
  algeriaData,
  mozambiqueData,
  zimbabweData,
  southAfricaData,
  tanzaniaData,
  cubaData,
  dprkData,
  palestineData,
  venezuelaData,
  libyaData,
  afghanistanData,
  irelandData,
  ussrData,
  germanyData,
  franceData,
  burkinaFasoData,
  ukData,
  usaData,
  saudiArabiaData,
  uaeData,
  syriaData,
  egyptData,
  georgiaData,
  belarusData,
  boliviaData,
  russiaData,
  serbiaData,
  swedenData,
  norwayData,
  finlandData,
  denmarkData,
  israelData,
];

export const getCountryById = (id: string): CountryData | undefined => {
  return allCountries.find((c) => c.id.toLowerCase() === id.toLowerCase());
};

export const getCountriesByCategory = (category: CountryCategory | 'all'): CountryData[] => {
  if (category === 'all') return allCountries;
  return allCountries.filter((c) => c.category === category);
};

export const CATEGORY_LABELS: Record<CountryCategory | 'all', { label: string; description: string; icon: string }> = {
  all: {
    label: 'All Nations',
    description: 'Explore all 73 socialist, Global South, and Global North state histories.',
    icon: '',
  },
  aes: {
    label: 'AES / Socialist States',
    description: 'Currently existing and historical socialist states (Actually Existing Socialism).',
    icon: '',
  },
  'global-south': {
    label: 'Global South / Periphery',
    description: 'Developing nations, anti-colonial liberation histories, and non-aligned sovereignty movements.',
    icon: '',
  },
  'global-north': {
    label: 'Global North / Imperial Core',
    description: 'Capitalist superpower economies, NATO partners, and Western imperial core states.',
    icon: '',
  },
};
