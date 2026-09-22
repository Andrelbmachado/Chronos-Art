import React, { useState } from 'react';
import { Region, RegionalContextEntry, ContextCategory, EraId } from '../types';
import { REGIONS, CATEGORIES } from '../data/regions';
import { REGIONAL_CONTEXTS } from '../data/regionalContexts';
import { ERAS } from '../data/eras';
import { GitCompare, Layers, Globe, Filter } from 'lucide-react';

export const ComparativeView: React.FC = () => {
  const [selectedEra, setSelectedEra] = useState<EraId>('barroco-rococo');
  const [selectedRegionA, setSelectedRegionA] = useState<string>('brasil');
  const [selectedRegionB, setSelectedRegionB] = useState<string>('italia');
  const [selectedRegionC, setSelectedRegionC] = useState<string>('japao');
  const [activeFacet, setActiveFacet] = useState<ContextCategory | 'all'>('all');

  const eraObj = ERAS.find(e => e.id === selectedEra);

  const getContextForRegionAndEra = (regionId: string, eraId: EraId) => {
    return REGIONAL_CONTEXTS.find(rc => rc.regionId === regionId && rc.eraId === eraId);
  };

  const contextA = getContextForRegionAndEra(selectedRegionA, selectedEra);
  const contextB = getContextForRegionAndEra(selectedRegionB, selectedEra);
  const contextC = getContextForRegionAndEra(selectedRegionC, selectedEra);

  const regionObjA = REGIONS.find(r => r.id === selectedRegionA);
  const regionObjB = REGIONS.find(r => r.id === selectedRegionB);
  const regionObjC = REGIONS.find(r => r.id === selectedRegionC);

  const facetsToDisplay = activeFacet === 'all' 
    ? CATEGORIES 
    : CATEGORIES.filter(c => c.id === activeFacet);

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-8 text-slate-100">
      
      {/* Header Banner */}
      <div className="p-6 rounded-2xl bg-gradient-to-r from-slate-900 via-indigo-950 to-slate-900 border border-slate-800 shadow-2xl space-y-3">
        <div className="flex items-center gap-2 text-xs font-bold text-amber-400 uppercase tracking-wider">
          <GitCompare className="w-4 h-4" />
          <span>Matriz Comparativa de História da Arte e Atlas Cultural</span>
        </div>
        <h2 className="text-2xl sm:text-3xl font-extrabold text-white">
          Comparativo Cultural lado a lado no mesmo Período
        </h2>
        <p className="text-sm text-slate-300 max-w-3xl leading-relaxed">
          Selecione uma Era Histórica e escolha até 3 países ou regiões para comparar simultaneamente a evolução da <strong>Arte, Política, Sociedade, Música, Arquitetura, Tecnologia, Religião, Economia e Filosofia</strong>.
        </p>
      </div>

      {/* Control Bar: Era Selector & Country Dropdowns */}
      <div className="p-4 rounded-xl bg-slate-900 border border-slate-800 space-y-4 shadow-xl">
        {/* Era Radio/Buttons */}
        <div>
          <label className="block text-xs font-bold text-slate-400 uppercase mb-2">
            1. Escolha o Período Histórico para Comparar:
          </label>
          <div className="flex flex-wrap gap-2">
            {ERAS.map((era) => (
              <button
                key={era.id}
                onClick={() => setSelectedEra(era.id)}
                className={`px-3 py-1.5 rounded-lg text-xs font-medium transition-all ${
                  selectedEra === era.id
                    ? 'bg-amber-500 text-slate-950 font-bold shadow-md shadow-amber-500/20'
                    : 'bg-slate-950 text-slate-300 hover:bg-slate-800 border border-slate-800'
                }`}
              >
                {era.name} ({era.displayYears})
              </button>
            ))}
          </div>
        </div>

        {/* Region Pickers */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 pt-2 border-t border-slate-800">
          <div>
            <label className="block text-xs font-bold text-emerald-400 mb-1">
              País / Região A:
            </label>
            <select
              value={selectedRegionA}
              onChange={(e) => setSelectedRegionA(e.target.value)}
              className="w-full bg-slate-950 border border-slate-800 rounded-lg p-2 text-xs text-white focus:outline-none focus:border-amber-500"
            >
              {REGIONS.map(r => (
                <option key={r.id} value={r.id}>{r.flagEmoji} {r.name}</option>
              ))}
            </select>
          </div>

          <div>
            <label className="block text-xs font-bold text-blue-400 mb-1">
              País / Região B:
            </label>
            <select
              value={selectedRegionB}
              onChange={(e) => setSelectedRegionB(e.target.value)}
              className="w-full bg-slate-950 border border-slate-800 rounded-lg p-2 text-xs text-white focus:outline-none focus:border-amber-500"
            >
              {REGIONS.map(r => (
                <option key={r.id} value={r.id}>{r.flagEmoji} {r.name}</option>
              ))}
            </select>
          </div>

          <div>
            <label className="block text-xs font-bold text-rose-400 mb-1">
              País / Região C:
            </label>
            <select
              value={selectedRegionC}
              onChange={(e) => setSelectedRegionC(e.target.value)}
              className="w-full bg-slate-950 border border-slate-800 rounded-lg p-2 text-xs text-white focus:outline-none focus:border-amber-500"
            >
              {REGIONS.map(r => (
                <option key={r.id} value={r.id}>{r.flagEmoji} {r.name}</option>
              ))}
            </select>
          </div>
        </div>

        {/* Facet Filter Tabs */}
        <div className="pt-2 border-t border-slate-800 flex items-center gap-2 overflow-x-auto no-scrollbar">
          <span className="text-xs font-semibold text-slate-400 shrink-0">Filtrar Tema:</span>
          <button
            onClick={() => setActiveFacet('all')}
            className={`px-2.5 py-1 rounded text-xs font-medium ${
              activeFacet === 'all'
                ? 'bg-indigo-600 text-white font-bold'
                : 'bg-slate-950 text-slate-400 hover:text-slate-200'
            }`}
          >
            Todos os 9 Temas
          </button>
          {CATEGORIES.map(c => (
            <button
              key={c.id}
              onClick={() => setActiveFacet(c.id)}
              className={`px-2.5 py-1 rounded text-xs font-medium ${
                activeFacet === c.id
                  ? 'bg-indigo-600 text-white font-bold'
                  : 'bg-slate-950 text-slate-400 hover:text-slate-200'
              }`}
            >
              {c.name}
            </button>
          ))}
        </div>
      </div>

      {/* Comparative Columns Display */}
      <div className="space-y-6">
        
        {/* Column Headers */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 font-bold text-center">
          <div className="p-3 rounded-xl bg-slate-900 border border-emerald-500/40 text-emerald-300 text-base flex items-center justify-center gap-2 shadow-lg">
            <span>{regionObjA?.flagEmoji}</span>
            <span>{regionObjA?.name}</span>
          </div>
          <div className="p-3 rounded-xl bg-slate-900 border border-blue-500/40 text-blue-300 text-base flex items-center justify-center gap-2 shadow-lg">
            <span>{regionObjB?.flagEmoji}</span>
            <span>{regionObjB?.name}</span>
          </div>
          <div className="p-3 rounded-xl bg-slate-900 border border-rose-500/40 text-rose-300 text-base flex items-center justify-center gap-2 shadow-lg">
            <span>{regionObjC?.flagEmoji}</span>
            <span>{regionObjC?.name}</span>
          </div>
        </div>

        {/* Rows by Facet Category */}
        <div className="space-y-4">
          {facetsToDisplay.map((cat) => (
            <div key={cat.id} className="rounded-xl bg-slate-900/90 border border-slate-800 p-4 space-y-3 shadow-xl">
              
              <div className="flex items-center gap-2 text-sm font-bold border-b border-slate-800 pb-2" style={{ color: cat.color }}>
                <Layers className="w-4 h-4" />
                <span>{cat.name} ({eraObj?.name})</span>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-xs leading-relaxed">
                {/* Region A */}
                <div className="p-3 rounded-lg bg-slate-950 border border-slate-800 space-y-1">
                  <span className="text-[10px] text-emerald-400 font-bold uppercase">{regionObjA?.name}:</span>
                  <p className="text-slate-300">
                    {contextA?.facets[cat.id] || 'Informações históricas não registradas para este período específico.'}
                  </p>
                </div>

                {/* Region B */}
                <div className="p-3 rounded-lg bg-slate-950 border border-slate-800 space-y-1">
                  <span className="text-[10px] text-blue-400 font-bold uppercase">{regionObjB?.name}:</span>
                  <p className="text-slate-300">
                    {contextB?.facets[cat.id] || 'Informações históricas não registradas para este período específico.'}
                  </p>
                </div>

                {/* Region C */}
                <div className="p-3 rounded-lg bg-slate-950 border border-slate-800 space-y-1">
                  <span className="text-[10px] text-rose-400 font-bold uppercase">{regionObjC?.name}:</span>
                  <p className="text-slate-300">
                    {contextC?.facets[cat.id] || 'Informações históricas não registradas para este período específico.'}
                  </p>
                </div>
              </div>

            </div>
          ))}
        </div>

      </div>

    </div>
  );
};
