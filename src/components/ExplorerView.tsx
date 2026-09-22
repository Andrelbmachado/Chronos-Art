import React, { useState } from 'react';
import { Movement } from '../types';
import { MOVEMENTS } from '../data/movements';
import { REGIONS } from '../data/regions';
import { REGIONAL_CONTEXTS } from '../data/regionalContexts';
import { Search, MapPin, Users, ArrowRight, BookOpen, Layers } from 'lucide-react';

interface ExplorerViewProps {
  searchQuery: string;
  onSearchChange: (q: string) => void;
  onSelectMovement: (m: Movement) => void;
}

export const ExplorerView: React.FC<ExplorerViewProps> = ({
  searchQuery,
  onSearchChange,
  onSelectMovement
}) => {
  const [selectedCategory, setSelectedCategory] = useState<'all' | 'movements' | 'artists' | 'works' | 'regional'>('all');

  const lowerQuery = searchQuery.toLowerCase().trim();

  // Filtered Movements
  const matchingMovements = MOVEMENTS.filter(m => {
    if (!lowerQuery) return true;
    const nameMatch = m.name.toLowerCase().includes(lowerQuery);
    const originMatch = m.originRegion.toLowerCase().includes(lowerQuery);
    const summaryMatch = m.summary.toLowerCase().includes(lowerQuery);
    const artistMatch = m.keyArtists.some(a => a.name.toLowerCase().includes(lowerQuery));
    const workMatch = m.famousWorks.some(w => w.title.toLowerCase().includes(lowerQuery));
    const tagMatch = m.tags.some(t => t.toLowerCase().includes(lowerQuery));
    return nameMatch || originMatch || summaryMatch || artistMatch || workMatch || tagMatch;
  });

  // Extracted Artists
  const allArtists = MOVEMENTS.flatMap(m => 
    m.keyArtists.map(a => ({ ...a, movementName: m.name, movementObj: m }))
  ).filter(a => !lowerQuery || a.name.toLowerCase().includes(lowerQuery) || a.country.toLowerCase().includes(lowerQuery));

  // Extracted Artworks
  const allWorks = MOVEMENTS.flatMap(m => 
    m.famousWorks.map(w => ({ ...w, movementName: m.name, movementObj: m }))
  ).filter(w => !lowerQuery || w.title.toLowerCase().includes(lowerQuery) || w.artist.toLowerCase().includes(lowerQuery));

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-8 text-slate-100">
      
      {/* Header Search Box */}
      <div className="p-6 rounded-2xl bg-slate-900 border border-slate-800 shadow-2xl space-y-4">
        <h2 className="text-2xl font-extrabold text-white flex items-center gap-2">
          <Search className="w-6 h-6 text-amber-400" />
          Índice & Pesquisa da Enciclopédia de Arte
        </h2>

        <div className="relative w-full">
          <Search className="w-5 h-5 absolute left-4 top-3.5 text-slate-400" />
          <input
            type="text"
            placeholder="Pesquise por artista (ex: 'Da Vinci', 'Aleijadinho', 'Picasso'), obra, movimento, país ou tag..."
            value={searchQuery}
            onChange={(e) => onSearchChange(e.target.value)}
            className="w-full bg-slate-950 border border-slate-700 rounded-xl text-sm text-white pl-12 pr-4 py-3 focus:outline-none focus:border-amber-500 focus:ring-1 focus:ring-amber-500 shadow-inner"
          />
        </div>

        {/* Filter Pills */}
        <div className="flex gap-2 overflow-x-auto no-scrollbar text-xs">
          <button
            onClick={() => setSelectedCategory('all')}
            className={`px-3 py-1.5 rounded-lg font-medium transition-all ${
              selectedCategory === 'all' ? 'bg-amber-500 text-slate-950 font-bold' : 'bg-slate-950 text-slate-400'
            }`}
          >
            Tudo ({matchingMovements.length + allArtists.length + allWorks.length})
          </button>
          <button
            onClick={() => setSelectedCategory('movements')}
            className={`px-3 py-1.5 rounded-lg font-medium transition-all ${
              selectedCategory === 'movements' ? 'bg-amber-500 text-slate-950 font-bold' : 'bg-slate-950 text-slate-400'
            }`}
          >
            Movimentos Artísticos ({matchingMovements.length})
          </button>
          <button
            onClick={() => setSelectedCategory('artists')}
            className={`px-3 py-1.5 rounded-lg font-medium transition-all ${
              selectedCategory === 'artists' ? 'bg-amber-500 text-slate-950 font-bold' : 'bg-slate-950 text-slate-400'
            }`}
          >
            Artistas Principais ({allArtists.length})
          </button>
          <button
            onClick={() => setSelectedCategory('works')}
            className={`px-3 py-1.5 rounded-lg font-medium transition-all ${
              selectedCategory === 'works' ? 'bg-amber-500 text-slate-950 font-bold' : 'bg-slate-950 text-slate-400'
            }`}
          >
            Obras de Arte Celebradas ({allWorks.length})
          </button>
        </div>
      </div>

      {/* Results Content */}
      <div className="space-y-8">
        
        {/* Movements Section */}
        {(selectedCategory === 'all' || selectedCategory === 'movements') && (
          <div className="space-y-4">
            <h3 className="text-lg font-bold text-white flex items-center gap-2 border-b border-slate-800 pb-2">
              <BookOpen className="w-5 h-5 text-amber-400" /> Movimentos Artísticos Encontrados
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {matchingMovements.map((m) => (
                <div
                  key={m.id}
                  onClick={() => onSelectMovement(m)}
                  className="p-4 rounded-xl bg-slate-900 border border-slate-800 hover:border-amber-400 transition-all cursor-pointer space-y-2 shadow-lg"
                  style={{ borderLeftWidth: '4px', borderLeftColor: m.color }}
                >
                  <div className="flex items-center justify-between text-xs text-amber-400 font-mono font-bold">
                    <span>{m.displayPeriod}</span>
                    <span>{m.originRegion}</span>
                  </div>
                  <h4 className="font-bold text-white text-base">{m.name}</h4>
                  <p className="text-xs text-slate-300 line-clamp-2">{m.summary}</p>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Artists Section */}
        {(selectedCategory === 'all' || selectedCategory === 'artists') && (
          <div className="space-y-4">
            <h3 className="text-lg font-bold text-white flex items-center gap-2 border-b border-slate-800 pb-2">
              <Users className="w-5 h-5 text-indigo-400" /> Artistas no Acervo
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
              {allArtists.map((artist, i) => (
                <div
                  key={i}
                  onClick={() => onSelectMovement(artist.movementObj)}
                  className="p-3.5 rounded-xl bg-slate-900 border border-slate-800 hover:border-indigo-400 cursor-pointer space-y-1 transition-all"
                >
                  <div className="flex items-center justify-between">
                    <h4 className="font-bold text-white text-sm">{artist.name}</h4>
                    <span className="text-[10px] px-2 py-0.5 rounded bg-slate-800 text-amber-300 font-mono">
                      {artist.country}
                    </span>
                  </div>
                  <p className="text-xs text-indigo-300 font-medium">{artist.role}</p>
                  <p className="text-[11px] text-slate-400">Movimento: {artist.movementName}</p>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Artworks Section */}
        {(selectedCategory === 'all' || selectedCategory === 'works') && (
          <div className="space-y-4">
            <h3 className="text-lg font-bold text-white flex items-center gap-2 border-b border-slate-800 pb-2">
              <Layers className="w-5 h-5 text-rose-400" /> Obras Emblemáticas
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {allWorks.map((work) => (
                <div
                  key={work.id}
                  onClick={() => onSelectMovement(work.movementObj)}
                  className="rounded-xl bg-slate-900 border border-slate-800 overflow-hidden hover:border-amber-400 cursor-pointer transition-all shadow-lg space-y-2 p-3"
                >
                  <div className="h-40 bg-slate-950 rounded-lg overflow-hidden">
                    <img src={work.imageUrl} alt={work.title} className="w-full h-full object-cover" />
                  </div>
                  <div>
                    <h4 className="font-bold text-white text-sm line-clamp-1">{work.title}</h4>
                    <p className="text-xs text-amber-400 font-medium">{work.artist} ({work.year || 'S/D'})</p>
                    <p className="text-[11px] text-slate-400 line-clamp-2 mt-1">{work.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

      </div>

    </div>
  );
};
