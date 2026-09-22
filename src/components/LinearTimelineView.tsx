import React, { useState } from 'react';
import { Movement, EraId, ThemeMode } from '../types';
import { ERAS } from '../data/eras';
import { Clock, MapPin, Users, ArrowRight, Filter } from 'lucide-react';

interface LinearTimelineViewProps {
  movements: Movement[];
  selectedEra: EraId | 'all';
  onSelectMovement: (m: Movement) => void;
  theme?: ThemeMode;
}

export const LinearTimelineView: React.FC<LinearTimelineViewProps> = ({
  movements,
  selectedEra,
  onSelectMovement,
  theme = 'dark'
}) => {
  const [filterTag, setFilterTag] = useState<string>('all');
  const isDark = theme === 'dark';

  const filteredMovements = movements.filter(m => {
    const eraMatch = selectedEra === 'all' || m.eraId === selectedEra;
    const tagMatch = filterTag === 'all' || m.tags.includes(filterTag);
    return eraMatch && tagMatch;
  });

  // Unique tags
  const allTags = Array.from(new Set(movements.flatMap(m => m.tags)));

  return (
    <div className={`min-h-full py-8 transition-colors ${isDark ? 'bg-[#18181b] text-neutral-100' : 'bg-[#fbf9f5] text-neutral-900'}`}>
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
        
        {/* Header - Monochromatic */}
        <div 
          className={`p-6 rounded-2xl border transition-colors ${
            isDark 
              ? 'bg-[#202024] border-neutral-800 text-neutral-100 shadow-sm' 
              : 'bg-white border-[#e5e0d8] text-neutral-900 shadow-xs'
          }`}
        >
          <div className={`flex items-center gap-2 text-xs font-semibold uppercase tracking-wider mb-2 ${isDark ? 'text-neutral-400' : 'text-neutral-500'}`}>
            <Clock className="w-4 h-4" />
            <span>Canvas 2D • Fluxo Cronológico</span>
          </div>
          <h2 className="text-xl sm:text-2xl font-bold tracking-tight mb-2">
            Movimentos Artísticos Globais
          </h2>
          <p className={`text-xs sm:text-sm max-w-2xl leading-relaxed ${isDark ? 'text-neutral-400' : 'text-neutral-600'}`}>
            Explore a sucessão temporal dos estilos artísticos, escolas e vanguardas formais organizados cronologicamente do Paleolítico à Era Contemporânea.
          </p>
        </div>

        {/* Filter Tag Bar */}
        <div 
          className={`p-2.5 rounded-xl border flex items-center gap-1.5 overflow-x-auto no-scrollbar ${
            isDark 
              ? 'bg-[#202024] border-neutral-800' 
              : 'bg-white border-[#e5e0d8]'
          }`}
        >
          <span className={`text-xs font-medium shrink-0 flex items-center gap-1 px-1 ${isDark ? 'text-neutral-400' : 'text-neutral-500'}`}>
            <Filter className="w-3 h-3" /> Filtro:
          </span>
          <button
            onClick={() => setFilterTag('all')}
            className={`px-2.5 py-1 rounded text-xs font-medium transition-all ${
              filterTag === 'all' 
                ? (isDark ? 'bg-neutral-100 text-neutral-950 font-bold' : 'bg-neutral-900 text-white font-bold') 
                : (isDark ? 'bg-neutral-800/80 text-neutral-400 hover:text-neutral-200' : 'bg-neutral-100 text-neutral-600 hover:text-neutral-900')
            }`}
          >
            Todos
          </button>
          {allTags.slice(0, 14).map(tag => (
            <button
              key={tag}
              onClick={() => setFilterTag(tag)}
              className={`px-2 py-1 rounded text-xs font-medium transition-all whitespace-nowrap ${
                filterTag === tag 
                  ? (isDark ? 'bg-neutral-100 text-neutral-950 font-bold' : 'bg-neutral-900 text-white font-bold') 
                  : (isDark ? 'bg-neutral-800/80 text-neutral-400 hover:text-neutral-200' : 'bg-neutral-100 text-neutral-600 hover:text-neutral-900')
              }`}
            >
              #{tag}
            </button>
          ))}
        </div>

        {/* Timeline Vertical Stream with Horizontal Cards */}
        <div className={`relative border-l-2 ml-4 sm:ml-8 space-y-6 pl-6 sm:pl-8 py-2 ${isDark ? 'border-neutral-800' : 'border-[#e2ddd5]'}`}>
          {filteredMovements.map((m) => {
            const eraObj = ERAS.find(e => e.id === m.eraId);
            return (
              <div key={m.id} className="relative group">
                
                {/* Timeline Connector Dot */}
                <div 
                  className={`absolute -left-[31px] sm:-left-[39px] top-4 w-4 h-4 rounded-full border-2 transition-transform group-hover:scale-125 ${
                    isDark 
                      ? 'border-[#18181b] bg-neutral-300' 
                      : 'border-[#fbf9f5] bg-neutral-700'
                  }`}
                />

                {/* Movement Stream Card */}
                <div 
                  onClick={() => onSelectMovement(m)}
                  className={`p-4 sm:p-5 rounded-2xl border transition-all cursor-pointer shadow-xs hover:shadow-md space-y-2.5 ${
                    isDark 
                      ? 'bg-[#202024] border-neutral-800 hover:border-neutral-500' 
                      : 'bg-white border-[#ded8cc] hover:border-neutral-500'
                  }`}
                >
                  <div className={`flex flex-wrap items-center justify-between gap-2 border-b pb-2 ${isDark ? 'border-neutral-800' : 'border-[#f0ebe3]'}`}>
                    <span 
                      className={`text-[11px] font-mono font-semibold px-2 py-0.5 rounded border ${
                        isDark 
                          ? 'bg-[#18181b] border-neutral-700 text-neutral-300' 
                          : 'bg-[#faf8f5] border-[#ded8cc] text-neutral-800'
                      }`}
                    >
                      {m.displayPeriod}
                    </span>
                    <div className={`flex items-center gap-2 text-xs font-mono ${isDark ? 'text-neutral-400' : 'text-neutral-500'}`}>
                      <span className="flex items-center gap-1">
                        <MapPin className="w-3 h-3" />
                        {m.originRegion}
                      </span>
                      <span>•</span>
                      <span>{eraObj?.name}</span>
                    </div>
                  </div>

                  <div className="space-y-1">
                    <h3 className={`text-lg font-bold transition-colors ${isDark ? 'text-white group-hover:text-neutral-200' : 'text-neutral-900 group-hover:text-black'}`}>
                      {m.name}
                    </h3>
                    <p className={`text-xs sm:text-sm leading-relaxed ${isDark ? 'text-neutral-400' : 'text-neutral-600'}`}>
                      {m.summary}
                    </p>
                  </div>

                  {/* Artists preview */}
                  <div className={`pt-1 flex flex-wrap items-center justify-between gap-2 text-xs ${isDark ? 'text-neutral-400' : 'text-neutral-500'}`}>
                    <span className="flex items-center gap-1.5 font-medium">
                      <Users className="w-3.5 h-3.5" />
                      Artistas: {m.keyArtists.map(a => a.name).join(', ')}
                    </span>
                    <span className="font-semibold flex items-center gap-1 group-hover:translate-x-0.5 transition-transform">
                      Ver Obras e Detalhes <ArrowRight className="w-3 h-3" />
                    </span>
                  </div>
                </div>

              </div>
            );
          })}
        </div>

      </div>
    </div>
  );
};
