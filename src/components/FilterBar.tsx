import React from 'react';
import { Region, ContextCategory } from '../types';
import { CATEGORIES } from '../data/regions';
import { X, Check, Filter, Layers, Globe } from 'lucide-react';

interface FilterBarProps {
  isOpen: boolean;
  onClose: () => void;
  regions: Region[];
  activeRegions: string[];
  onToggleRegion: (id: string) => void;
  onSelectAllRegions: () => void;
  onClearRegions: () => void;
  activeCategories: ContextCategory[];
  onToggleCategory: (id: ContextCategory) => void;
}

export const FilterBar: React.FC<FilterBarProps> = ({
  isOpen,
  onClose,
  regions,
  activeRegions,
  onToggleRegion,
  onSelectAllRegions,
  onClearRegions,
  activeCategories,
  onToggleCategory,
}) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-y-0 right-0 z-40 w-80 bg-slate-900/95 backdrop-blur-md border-l border-slate-800 p-5 shadow-2xl overflow-y-auto text-slate-100 flex flex-col justify-between">
      <div className="space-y-6">
        
        {/* Header */}
        <div className="flex items-center justify-between border-b border-slate-800 pb-3">
          <h3 className="font-bold text-base text-white flex items-center gap-2">
            <Filter className="w-4 h-4 text-amber-400" />
            Filtros do Canvas 2D
          </h3>
          <button
            onClick={onClose}
            className="p-1 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-300 transition-colors"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        {/* Region Filter Section */}
        <div className="space-y-3">
          <div className="flex items-center justify-between">
            <span className="text-xs font-bold text-slate-300 uppercase tracking-wider flex items-center gap-1.5">
              <Globe className="w-3.5 h-3.5 text-emerald-400" />
              Países e Regiões Visíveis:
            </span>
            <div className="flex items-center gap-2 text-[10px]">
              <button
                onClick={onSelectAllRegions}
                className="text-amber-400 hover:underline"
              >
                Todos
              </button>
              <span>•</span>
              <button
                onClick={onClearRegions}
                className="text-slate-400 hover:underline"
              >
                Limpar
              </button>
            </div>
          </div>

          <div className="space-y-1 max-h-60 overflow-y-auto pr-1 no-scrollbar text-xs">
            {regions.map((region) => {
              const isActive = activeRegions.includes(region.id);
              return (
                <div
                  key={region.id}
                  onClick={() => onToggleRegion(region.id)}
                  className={`p-2 rounded-lg border flex items-center justify-between cursor-pointer transition-all ${
                    isActive
                      ? 'bg-slate-800/90 text-white border-amber-500/50 font-medium'
                      : 'bg-slate-950/60 text-slate-400 border-slate-800/80 hover:bg-slate-800/40'
                  }`}
                >
                  <span className="flex items-center gap-2">
                    <span>{region.flagEmoji}</span>
                    <span>{region.name}</span>
                  </span>
                  {isActive && <Check className="w-3.5 h-3.5 text-amber-400" />}
                </div>
              );
            })}
          </div>
        </div>

        {/* Category Facet Filter Section */}
        <div className="space-y-3 pt-3 border-t border-slate-800">
          <span className="text-xs font-bold text-slate-300 uppercase tracking-wider flex items-center gap-1.5">
            <Layers className="w-3.5 h-3.5 text-indigo-400" />
            Subcamadas Temáticas:
          </span>

          <div className="space-y-1.5 text-xs">
            {CATEGORIES.map((cat) => {
              const isActive = activeCategories.includes(cat.id);
              return (
                <div
                  key={cat.id}
                  onClick={() => onToggleCategory(cat.id)}
                  className={`p-2 rounded-lg border flex items-center justify-between cursor-pointer transition-all ${
                    isActive
                      ? 'bg-slate-800/90 text-white border-indigo-500/50 font-medium'
                      : 'bg-slate-950/60 text-slate-400 border-slate-800/80 hover:bg-slate-800/40'
                  }`}
                >
                  <span className="flex items-center gap-2">
                    <span className="w-2.5 h-2.5 rounded-full" style={{ backgroundColor: cat.color }} />
                    <span>{cat.name}</span>
                  </span>
                  {isActive && <Check className="w-3.5 h-3.5 text-indigo-400" />}
                </div>
              );
            })}
          </div>
        </div>

      </div>

      <div className="pt-4 border-t border-slate-800">
        <button
          onClick={onClose}
          className="w-full py-2 rounded-xl bg-amber-500 hover:bg-amber-400 text-slate-950 font-bold text-xs transition-colors shadow-lg"
        >
          Aplicar Filtros no Canvas
        </button>
      </div>
    </div>
  );
};
