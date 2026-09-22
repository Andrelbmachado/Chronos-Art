export type EraId = 
  | 'pre-historia'
  | 'antiguidade'
  | 'idade-media'
  | 'renascimento-maneirismo'
  | 'barroco-rococo'
  | 'neoclassicismo-romantismo'
  | 'seculo-xix'
  | 'vanguardas-seculo-xx'
  | 'pos-guerra-conceitual'
  | 'era-digital-contemporanea';

export interface Era {
  id: EraId;
  name: string;
  startYear: number; // Negative for BCE
  endYear: number;
  displayYears: string;
  description: string;
  color: string;
}

export interface Artist {
  name: string;
  birthYear?: number | string;
  deathYear?: number | string;
  country: string;
  role: string;
  bio?: string;
}

export interface Artwork {
  id: string;
  title: string;
  artist: string;
  year?: string;
  location?: string;
  imageUrl: string;
  description: string;
}

export interface Movement {
  id: string;
  name: string;
  eraId: EraId;
  startYear: number;
  endYear: number;
  displayPeriod: string;
  originRegion: string;
  visualCharacteristics: string[];
  historicalContext: string;
  keyArtists: Artist[];
  famousWorks: Artwork[];
  influences: string[]; // IDs of preceding movements
  influenced: string[]; // IDs of succeeding movements
  color: string;
  quote?: string;
  summary: string;
  tags: string[];
}

export type RegionId =
  | 'brasil'
  | 'italia'
  | 'franca'
  | 'alemanha'
  | 'inglaterra'
  | 'espanha'
  | 'grecia'
  | 'egito'
  | 'china'
  | 'japao'
  | 'mesopotamia'
  | 'america-pre-colombiana'
  | 'africa'
  | 'oriente-medio';

export interface Region {
  id: RegionId;
  name: string;
  flagEmoji: string;
  continent: string;
  color: string;
}

export type ContextCategory =
  | 'arte'
  | 'politica'
  | 'sociedade'
  | 'musica'
  | 'arquitetura'
  | 'tecnologia'
  | 'religiao'
  | 'economia'
  | 'filosofia';

export interface CategoryInfo {
  id: ContextCategory;
  name: string;
  iconName: string;
  color: string;
}

export interface RegionalContextEntry {
  id: string;
  regionId: RegionId;
  eraId: EraId;
  startYear: number;
  endYear: number;
  facets: Partial<Record<ContextCategory, string>>;
  highlights?: string[];
}

export type ViewMode = 'canvas' | 'linear' | 'comparative' | 'explorer' | 'docs';

export type ThemeMode = 'dark' | 'light';

export interface CanvasTransform {
  x: number;
  y: number;
  zoom: number;
}
