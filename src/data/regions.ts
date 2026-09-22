import { Region, CategoryInfo } from '../types';

export const REGIONS: Region[] = [
  { id: 'brasil', name: 'Brasil', flagEmoji: '🇧🇷', continent: 'América do Sul', color: '#16a34a' },
  { id: 'italia', name: 'Itália', flagEmoji: '🇮🇹', continent: 'Europa', color: '#059669' },
  { id: 'franca', name: 'França', flagEmoji: '🇫🇷', continent: 'Europa', color: '#2563eb' },
  { id: 'alemanha', name: 'Alemanha', flagEmoji: '🇩🇪', continent: 'Europa', color: '#d97706' },
  { id: 'inglaterra', name: 'Inglaterra / Reino Unido', flagEmoji: '🇬🇧', continent: 'Europa', color: '#4f46e5' },
  { id: 'espanha', name: 'Espanha', flagEmoji: '🇪🇸', continent: 'Europa', color: '#dc2626' },
  { id: 'grecia', name: 'Grécia', flagEmoji: '🇬🇷', continent: 'Europa', color: '#0284c7' },
  { id: 'egito', name: 'Egito', flagEmoji: '🇪🇬', continent: 'África / Oriente Médio', color: '#ca8a04' },
  { id: 'china', name: 'China', flagEmoji: '🇨🇳', continent: 'Ásia', color: '#e11d48' },
  { id: 'japao', name: 'Japão', flagEmoji: '🇯🇵', continent: 'Ásia', color: '#be123c' },
  { id: 'mesopotamia', name: 'Mesopotâmia', flagEmoji: '🏛️', continent: 'Oriente Médio', color: '#9a3412' },
  { id: 'america-pre-colombiana', name: 'América Pré-Colombiana', flagEmoji: '🗿', continent: 'Américas', color: '#78350f' },
  { id: 'africa', name: 'África Subsariana', flagEmoji: '🌍', continent: 'África', color: '#a16207' },
  { id: 'oriente-medio', name: 'Oriente Médio & Islão', flagEmoji: '🕌', continent: 'Oriente Médio', color: '#0d9488' }
];

export const CATEGORIES: CategoryInfo[] = [
  { id: 'arte', name: 'Arte Visual', iconName: 'Palette', color: '#ec4899' },
  { id: 'politica', name: 'Política & Poder', iconName: 'Landmark', color: '#ef4444' },
  { id: 'sociedade', name: 'Sociedade & Vida', iconName: 'Users', color: '#f59e0b' },
  { id: 'musica', name: 'Música & Som', iconName: 'Music', color: '#8b5cf6' },
  { id: 'arquitetura', name: 'Arquitetura & Urbanismo', iconName: 'Building2', color: '#06b6d4' },
  { id: 'tecnologia', name: 'Tecnologia & Ciência', iconName: 'Cpu', color: '#10b981' },
  { id: 'religiao', name: 'Religião & Espiritualidade', iconName: 'Sparkles', color: '#6366f1' },
  { id: 'economia', name: 'Economia & Comércio', iconName: 'Coins', color: '#84cc16' },
  { id: 'filosofia', name: 'Filosofia & Pensamento', iconName: 'BookOpen', color: '#3b82f6' }
];
