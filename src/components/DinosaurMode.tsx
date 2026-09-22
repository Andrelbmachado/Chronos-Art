import React, { useState, useEffect } from 'react';
import { ThemeMode } from '../types';
import { 
  ArrowLeft, 
  Sparkles, 
  Flame, 
  Compass, 
  ShieldAlert, 
  Info,
  Calendar,
  Layers,
  ChevronRight,
  X
} from 'lucide-react';

interface DinosaurModeProps {
  onClose: () => void;
  theme?: ThemeMode;
}

interface DinoEra {
  id: string;
  name: string;
  period: string;
  millionsAgo: string;
  color: string;
  accent: string;
  summary: string;
  highlights: string[];
  climate: string;
  creatures: {
    name: string;
    type: string;
    size: string;
    diet: string;
    image: string;
    desc: string;
  }[];
}

const DINO_ERAS: DinoEra[] = [
  {
    id: 'triassico',
    name: 'Período Triássico',
    period: '252 – 201 Ma',
    millionsAgo: '252 a 201 milhões de anos atrás',
    color: '#b45309',
    accent: 'border-amber-500/50 text-amber-400',
    summary: 'A alvorada dos dinossauros logo após a grande extinção Permo-Triássica. O supercontinente Pangeia ainda era unificado com climas quentes e áridos.',
    climate: 'Quente, árido no interior continental, sem calotas polares.',
    highlights: [
      'Surgimento dos primeiros arcossauros e dinossauromorfos bípedes',
      'Origem dos primeiros mamíferos verdadeiros a partir dos cinodontes',
      'Florestas dominadas por cicadáceas, ginkgos e coníferas primitivas'
    ],
    creatures: [
      {
        name: 'Herrerasaurus',
        type: 'Terópode primitivo',
        size: '3 a 6 metros',
        diet: 'Carnívoro',
        image: 'https://images.unsplash.com/photo-1570481662006-a3a1374699e8?q=80&w=800&auto=format&fit=crop',
        desc: 'Um dos dinossauros carnívoros mais antigos descobertos na América do Sul.'
      },
      {
        name: 'Coelophysis',
        type: 'Terópode ágil',
        size: '2 a 3 metros',
        diet: 'Carnívoro',
        image: 'https://images.unsplash.com/photo-1525877442103-5dd522936e9c?q=80&w=800&auto=format&fit=crop',
        desc: 'Predador veloz com ossos ocos e cauda longa para equilíbrio dinâmico.'
      }
    ]
  },
  {
    id: 'jurassico',
    name: 'Período Jurássico',
    period: '201 – 145 Ma',
    millionsAgo: '201 a 145 milhões de anos atrás',
    color: '#047857',
    accent: 'border-emerald-500/50 text-emerald-400',
    summary: 'A Era de Ouro dos gigantes saurópodes. Pangeia se fragmenta em Laurásia e Gondwana, trazendo chuvas abundantes e exuberantes florestas tropicais.',
    climate: 'Úmido, tropical e subtropical em grande escala global.',
    highlights: [
      'Evolução dos saurópodes monumentais com dezenas de metros de comprimento',
      'Primeiras aves aladas surgem a partir de terópodes emplumados (Archaeopteryx)',
      'Mares repletos de plesiossauros, ictiossauros e amonites gigantes'
    ],
    creatures: [
      {
        name: 'Braquiossauro',
        type: 'Saurópode colossal',
        size: '22 metros de altura',
        diet: 'Herbívoro',
        image: 'https://images.unsplash.com/photo-1582234372722-50d7ccc30ebd?q=80&w=800&auto=format&fit=crop',
        desc: 'Pescoço ereto projetado para alcançar as copas das coníferas mais altas.'
      },
      {
        name: 'Estegossauro',
        type: 'Tireóforo encouraçado',
        size: '9 metros',
        diet: 'Herbívoro',
        image: 'https://images.unsplash.com/photo-1569096651661-820d0de8b4ab?q=80&w=800&auto=format&fit=crop',
        desc: 'Placas ósseas dorsais termorreguladoras e cauda armada com espigões defensivos (tagomizador).'
      }
    ]
  },
  {
    id: 'cretaceo',
    name: 'Período Cretáceo',
    period: '145 – 66 Ma',
    millionsAgo: '145 a 66 milhões de anos atrás',
    color: '#b91c1c',
    accent: 'border-rose-500/50 text-rose-400',
    summary: 'O apogeu da sofisticação anatômica dos dinossauros e a radiação das plantas com flores (angiospermas), culminando no impacto do meteoro de Chicxulub.',
    climate: 'Clima de estufa global, nível do mar elevado com mares interiores rasos.',
    highlights: [
      'Aparecimento das flores (angiospermas) e explosão de insetos polinizadores',
      'Predadores ápice de massa gigantesca e ceratopsídeos com escudos cranianos',
      'Impacto de bólido de 10km há 66 Ma em Yucatán marcando o evento de extinção K-Pg'
    ],
    creatures: [
      {
        name: 'Tiranossauro Rex',
        type: 'Superpredador terópode',
        size: '12 metros / 8 toneladas',
        diet: 'Carnívoro / Necrófago',
        image: 'https://images.unsplash.com/photo-1518709268805-4e9042af9f23?q=80&w=800&auto=format&fit=crop',
        desc: 'Força de mordida devastadora superior a 35.000 Newtons e visão binocular aguçada.'
      },
      {
        name: 'Tricerátops',
        type: 'Ceratopsídeo com chifres',
        size: '9 metros / 12 toneladas',
        diet: 'Herbívoro',
        image: 'https://images.unsplash.com/photo-1544717305-2782549b5136?q=80&w=800&auto=format&fit=crop',
        desc: 'Enorme gola óssea posterior e três chifres frontais para defesa e cortejo.'
      }
    ]
  }
];

export const DinosaurMode: React.FC<DinosaurModeProps> = ({
  onClose,
  theme = 'dark'
}) => {
  const isDark = theme === 'dark';
  const [selectedEraId, setSelectedEraId] = useState<string>('cretaceo');

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        onClose();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [onClose]);

  const activeEra = DINO_ERAS.find(e => e.id === selectedEraId) || DINO_ERAS[2];

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-black/90 backdrop-blur-md text-neutral-100 flex flex-col animate-in fade-in duration-300">
      
      {/* Top Prehistoric Header Bar */}
      <header className="sticky top-0 z-40 bg-[#121214]/95 border-b border-amber-900/40 backdrop-blur-md px-4 sm:px-8 py-3.5 flex items-center justify-between shadow-2xl">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-amber-600 to-rose-700 flex items-center justify-center text-xl shadow-lg shadow-amber-900/30 border border-amber-400/30 animate-pulse">
            🦖
          </div>
          <div>
            <div className="flex items-center gap-2">
              <span className="text-[10px] font-mono uppercase tracking-widest px-2 py-0.5 rounded-full bg-amber-500/20 text-amber-300 border border-amber-500/30 font-bold">
                Easter Egg Desbloqueado!
              </span>
              <span className="text-xs text-neutral-400 hidden sm:inline font-mono">
                Antes de 4 Milhões de Anos Atrás
              </span>
            </div>
            <h1 className="text-lg sm:text-xl font-black tracking-tight text-white flex items-center gap-2">
              Modo Dinossauros — Era Mesozoica
            </h1>
          </div>
        </div>

        <button
          onClick={onClose}
          className="flex items-center gap-2 px-4 py-2 rounded-xl bg-neutral-800 hover:bg-neutral-700 text-neutral-200 hover:text-white border border-neutral-700 transition-all hover:scale-105 shadow-md cursor-pointer font-medium text-xs sm:text-sm"
        >
          <ArrowLeft className="w-4 h-4" />
          <span>Voltar à Linha do Tempo</span>
        </button>
      </header>

      {/* Main Container */}
      <main className="flex-1 max-w-6xl w-full mx-auto p-4 sm:p-8 space-y-8">
        
        {/* Hero Banner with Jurassic Atmosphere */}
        <section className="relative rounded-3xl overflow-hidden border border-amber-500/30 bg-gradient-to-br from-amber-950/40 via-neutral-900 to-emerald-950/30 p-6 sm:p-10 shadow-2xl">
          <div className="absolute top-0 right-0 p-8 opacity-10 pointer-events-none select-none text-9xl">
            🦕
          </div>

          <div className="max-w-2xl space-y-3 relative z-10">
            <div className="inline-flex items-center gap-1.5 text-xs font-mono font-bold text-amber-400">
              <Sparkles className="w-3.5 h-3.5" />
              <span>VIAGEM TEMPORAL EXTREMA (252 Ma – 66 Ma)</span>
            </div>

            <h2 className="text-2xl sm:text-4xl font-extrabold tracking-tight text-white">
              Bem-vindo ao Mundo Pré-Histórico dos Grandes Répteis
            </h2>

            <p className="text-sm sm:text-base text-neutral-300 leading-relaxed">
              Você rompeu a barreira da história humana e dos primeiros hominídeos! Muito antes das primeiras ferramentas lascadas de 4 milhões de anos atrás, a Terra foi governada por mais de 180 milhões de anos pelos dinossauros.
            </p>

            <div className="flex flex-wrap items-center gap-3 pt-2 text-xs font-mono text-neutral-400">
              <span className="flex items-center gap-1 px-3 py-1 rounded-lg bg-neutral-800/80 border border-neutral-700">
                <Compass className="w-3.5 h-3.5 text-amber-400" />
                Supercontinentes: Pangeia, Laurásia e Gondwana
              </span>
              <span className="flex items-center gap-1 px-3 py-1 rounded-lg bg-neutral-800/80 border border-neutral-700">
                <Flame className="w-3.5 h-3.5 text-rose-400" />
                Duração: ~186 Milhões de Anos
              </span>
            </div>
          </div>
        </section>

        {/* Mesozoic Period Selectors (Triássico, Jurássico, Cretáceo) */}
        <section className="space-y-4">
          <div className="flex items-center justify-between">
            <h3 className="text-sm uppercase font-bold tracking-wider text-neutral-400 flex items-center gap-2">
              <Layers className="w-4 h-4 text-amber-400" />
              Escolha o Período Mesozoico
            </h3>
            <span className="text-xs font-mono text-neutral-500">
              {DINO_ERAS.length} Períodos Geológicos
            </span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {DINO_ERAS.map((era) => {
              const isSelected = era.id === selectedEraId;
              return (
                <div
                  key={era.id}
                  onClick={() => setSelectedEraId(era.id)}
                  className={`p-5 rounded-2xl border cursor-pointer transition-all ${
                    isSelected
                      ? `bg-neutral-800/90 ${era.accent} shadow-xl scale-[1.02] ring-2 ring-amber-400/50`
                      : 'bg-[#18181b]/70 border-neutral-800 text-neutral-400 hover:border-neutral-700 hover:bg-neutral-800/40'
                  }`}
                >
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-xs font-mono font-bold px-2.5 py-0.5 rounded-full bg-neutral-900 border border-neutral-700">
                      {era.period}
                    </span>
                    <span className="text-lg">
                      {era.id === 'triassico' ? '🦎' : era.id === 'jurassico' ? '🦕' : '🦖'}
                    </span>
                  </div>
                  <h4 className="text-base font-bold text-white mb-1">{era.name}</h4>
                  <p className="text-xs line-clamp-2 text-neutral-300">{era.summary}</p>
                </div>
              );
            })}
          </div>
        </section>

        {/* Active Period Deep-Dive Section */}
        <section className="rounded-3xl border border-neutral-800 bg-[#18181b]/90 p-6 sm:p-8 space-y-6 shadow-xl">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between border-b border-neutral-800 pb-4 gap-2">
            <div>
              <div className="text-xs font-mono text-amber-400 font-semibold mb-1">
                {activeEra.millionsAgo}
              </div>
              <h3 className="text-2xl font-black text-white">{activeEra.name}</h3>
            </div>
            <div className="text-xs font-mono text-neutral-400 px-3 py-1.5 rounded-xl bg-neutral-900 border border-neutral-800">
              Clima: <span className="text-neutral-200">{activeEra.climate}</span>
            </div>
          </div>

          <p className="text-sm leading-relaxed text-neutral-300">
            {activeEra.summary}
          </p>

          {/* Highlights List */}
          <div className="space-y-2">
            <h4 className="text-xs uppercase font-bold tracking-wider text-neutral-400">
              Marcos Evolutivos e Geológicos:
            </h4>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
              {activeEra.highlights.map((h, i) => (
                <div 
                  key={i}
                  className="p-3.5 rounded-xl border border-neutral-800 bg-neutral-900/60 text-xs text-neutral-300 flex items-start gap-2"
                >
                  <span className="w-1.5 h-1.5 rounded-full bg-amber-400 mt-1.5 shrink-0" />
                  <span>{h}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Creature Cards */}
          <div className="space-y-3 pt-2">
            <h4 className="text-xs uppercase font-bold tracking-wider text-neutral-400">
              Criaturas Notáveis do {activeEra.name}:
            </h4>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {activeEra.creatures.map((creature, idx) => (
                <div
                  key={idx}
                  className="rounded-2xl border border-neutral-800 bg-neutral-900/80 overflow-hidden flex flex-col sm:flex-row group hover:border-amber-500/40 transition-colors"
                >
                  <div className="relative w-full sm:w-44 h-40 shrink-0 overflow-hidden bg-neutral-950">
                    <img 
                      src={creature.image} 
                      alt={creature.name}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <span className="absolute bottom-2 left-2 px-2 py-0.5 rounded text-[10px] font-mono bg-black/80 text-amber-300 border border-amber-500/30">
                      {creature.diet}
                    </span>
                  </div>

                  <div className="p-4 flex flex-col justify-between space-y-2">
                    <div>
                      <div className="flex items-center justify-between">
                        <h5 className="text-base font-bold text-white">{creature.name}</h5>
                        <span className="text-[10px] font-mono text-neutral-400">{creature.size}</span>
                      </div>
                      <p className="text-xs text-amber-400/90 font-medium">{creature.type}</p>
                      <p className="text-xs text-neutral-300 leading-relaxed pt-1">{creature.desc}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Return Button Bottom Bar */}
        <div className="pt-4 pb-8 flex flex-col sm:flex-row items-center justify-between gap-4 border-t border-neutral-800 text-xs text-neutral-500">
          <p>
            Modo Dinossauros ativado segurando por 5 segundos no limite esquerdo da linha do tempo.
          </p>
          <button
            onClick={onClose}
            className="px-6 py-2.5 rounded-xl bg-gradient-to-r from-amber-600 to-rose-600 hover:from-amber-500 hover:to-rose-500 text-white font-bold transition-all hover:scale-105 shadow-lg shadow-amber-900/20 cursor-pointer"
          >
            ← Voltar para a Arte Humana
          </button>
        </div>

      </main>
    </div>
  );
};
