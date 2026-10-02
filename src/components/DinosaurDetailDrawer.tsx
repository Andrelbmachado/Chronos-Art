import React, { useState, useEffect } from 'react';
import { Dinosaur } from '../data/dinosaurs';
import { ThemeMode } from '../types';
import { X, Sparkles, Compass, Shield, Flame, Activity } from 'lucide-react';

interface DinosaurDetailDrawerProps {
  dinosaur: Dinosaur | null;
  onClose: () => void;
  theme?: ThemeMode;
}

export const DinosaurDetailDrawer: React.FC<DinosaurDetailDrawerProps> = ({
  dinosaur,
  onClose,
  theme = 'dark'
}) => {
  const isDark = theme === 'dark';
  const [renderedDino, setRenderedDino] = useState<Dinosaur | null>(dinosaur);
  const [isSlideOpen, setIsSlideOpen] = useState<boolean>(false);

  useEffect(() => {
    if (dinosaur) {
      setRenderedDino(dinosaur);
      const r1 = requestAnimationFrame(() => {
        const r2 = requestAnimationFrame(() => {
          setIsSlideOpen(true);
        });
        return () => cancelAnimationFrame(r2);
      });
      return () => cancelAnimationFrame(r1);
    } else {
      setIsSlideOpen(false);
      const timer = setTimeout(() => {
        setRenderedDino(null);
      }, 500);
      return () => clearTimeout(timer);
    }
  }, [dinosaur]);

  const handleClose = () => {
    setIsSlideOpen(false);
    setTimeout(() => {
      onClose();
    }, 450);
  };

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        handleClose();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  if (!renderedDino) return null;

  const dietColor = renderedDino.diet === 'Carnívoro'
    ? (isDark ? 'bg-red-500/20 text-red-400 border-red-500/30' : 'bg-red-100 text-red-700 border-red-200')
    : renderedDino.diet === 'Herbívoro'
      ? (isDark ? 'bg-emerald-500/20 text-emerald-400 border-emerald-500/30' : 'bg-emerald-100 text-emerald-700 border-emerald-200')
      : (isDark ? 'bg-amber-500/20 text-amber-400 border-amber-500/30' : 'bg-amber-100 text-amber-700 border-amber-200');

  return (
    <div className="fixed inset-0 z-50 overflow-hidden pointer-events-none">
      {/* Dim backdrop with fade animation */}
      <div 
        className={`absolute inset-0 transition-opacity duration-500 ease-out pointer-events-auto ${
          isSlideOpen ? 'opacity-100' : 'opacity-0'
        } ${isDark ? 'bg-black/60 backdrop-blur-xs' : 'bg-neutral-900/30 backdrop-blur-xs'}`}
        onClick={handleClose}
      />

      {/* Slide-over sidebar container */}
      <div className="absolute inset-y-0 right-0 max-w-full flex pl-10 pointer-events-none">
        <div 
          className={`w-screen max-w-md md:max-w-lg lg:max-w-xl pointer-events-auto border-l shadow-2xl flex flex-col transform transition-transform duration-500 ease-out ${
            isSlideOpen ? 'translate-x-0' : 'translate-x-full'
          } ${
            isDark 
              ? 'bg-[#18181b] border-neutral-800 text-neutral-100' 
              : 'bg-[#faf8f5] border-[#e2ddd5] text-neutral-900'
          }`}
        >
          {/* Header Bar */}
          <div className={`p-4 border-b flex items-center justify-between shrink-0 ${
            isDark ? 'border-neutral-800 bg-[#1e1e24]' : 'border-[#ded8cc] bg-white'
          }`}>
            <div className="flex items-center gap-2">
              <span className="text-xl">🦕</span>
              <div>
                <span className="text-xs font-mono uppercase tracking-wider text-amber-500 font-bold block">
                  {renderedDino.eraName}
                </span>
                <span className="text-sm font-bold truncate">
                  {renderedDino.name}
                </span>
              </div>
            </div>
            <button
              onClick={handleClose}
              className={`p-1.5 rounded-lg border transition-colors cursor-pointer ${
                isDark 
                  ? 'border-neutral-700 hover:bg-neutral-800 text-neutral-300 hover:text-white' 
                  : 'border-[#ded8cc] hover:bg-neutral-100 text-neutral-700 hover:text-black'
              }`}
              title="Fechar"
            >
              <X className="w-4 h-4" />
            </button>
          </div>

          {/* Scrollable Content */}
          <div className="flex-1 overflow-y-auto p-5 space-y-5">
            {/* Dinosaur Image */}
            <div className={`relative h-64 rounded-xl overflow-hidden border shadow-inner ${
              isDark ? 'border-neutral-800 bg-neutral-900' : 'border-[#ded8cc] bg-neutral-100'
            }`}>
              <img 
                src={renderedDino.imageUrl} 
                alt={renderedDino.name}
                className="w-full h-full object-cover select-none" 
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent pointer-events-none" />
              <div className="absolute bottom-3 left-3 right-3 flex items-end justify-between">
                <div>
                  <h2 className="text-xl font-black text-white drop-shadow-md">
                    {renderedDino.name}
                  </h2>
                  <p className="text-xs italic text-neutral-300 font-serif">
                    {renderedDino.scientificName}
                  </p>
                </div>
                <span className={`px-2.5 py-1 rounded-full text-xs font-semibold border backdrop-blur-md ${dietColor}`}>
                  {renderedDino.diet}
                </span>
              </div>
            </div>

            {/* Quick Facts Grid */}
            <div className="grid grid-cols-2 gap-2 text-xs">
              <div className={`p-3 rounded-lg border ${isDark ? 'bg-neutral-900/70 border-neutral-800' : 'bg-white border-[#ded8cc]'}`}>
                <span className={`text-[10px] uppercase font-mono block ${isDark ? 'text-neutral-400' : 'text-neutral-500'}`}>
                  Período Temporal
                </span>
                <span className="font-semibold text-current">{renderedDino.displayPeriod}</span>
              </div>
              <div className={`p-3 rounded-lg border ${isDark ? 'bg-neutral-900/70 border-neutral-800' : 'bg-white border-[#ded8cc]'}`}>
                <span className={`text-[10px] uppercase font-mono block ${isDark ? 'text-neutral-400' : 'text-neutral-500'}`}>
                  Classificação
                </span>
                <span className="font-semibold text-current">{renderedDino.type}</span>
              </div>
              <div className={`p-3 rounded-lg border ${isDark ? 'bg-neutral-900/70 border-neutral-800' : 'bg-white border-[#ded8cc]'}`}>
                <span className={`text-[10px] uppercase font-mono block ${isDark ? 'text-neutral-400' : 'text-neutral-500'}`}>
                  Porte / Tamanho
                </span>
                <span className="font-semibold text-current">{renderedDino.size}</span>
              </div>
              <div className={`p-3 rounded-lg border ${isDark ? 'bg-neutral-900/70 border-neutral-800' : 'bg-white border-[#ded8cc]'}`}>
                <span className={`text-[10px] uppercase font-mono block ${isDark ? 'text-neutral-400' : 'text-neutral-500'}`}>
                  Peso Estimado
                </span>
                <span className="font-semibold text-current">{renderedDino.weight}</span>
              </div>
            </div>

            {/* Geographic Region */}
            <div className={`p-3 rounded-lg border flex items-center gap-2.5 text-xs ${
              isDark ? 'bg-neutral-900/70 border-neutral-800' : 'bg-white border-[#ded8cc]'
            }`}>
              <Compass className="w-4 h-4 text-amber-500 shrink-0" />
              <div>
                <span className={`text-[10px] uppercase font-mono block ${isDark ? 'text-neutral-400' : 'text-neutral-500'}`}>
                  Paleolocalização & Fósseis
                </span>
                <span className="font-semibold">{renderedDino.region}</span>
              </div>
            </div>

            {/* Description */}
            <div className="space-y-1.5">
              <h3 className="text-xs font-bold uppercase tracking-wider text-amber-500 flex items-center gap-1.5">
                <Sparkles className="w-3.5 h-3.5" />
                História Evolutiva
              </h3>
              <p className={`text-xs leading-relaxed ${isDark ? 'text-neutral-300' : 'text-neutral-700'}`}>
                {renderedDino.description}
              </p>
            </div>

            {/* Anatomical Highlights */}
            <div className="space-y-2">
              <h3 className="text-xs font-bold uppercase tracking-wider text-amber-500 flex items-center gap-1.5">
                <Shield className="w-3.5 h-3.5" />
                Adaptações Anatômicas
              </h3>
              <div className="space-y-1.5">
                {renderedDino.anatomicalFeatures.map((feat, i) => (
                  <div 
                    key={i} 
                    className={`p-2.5 rounded-lg border text-xs flex items-start gap-2 ${
                      isDark ? 'bg-neutral-900/50 border-neutral-800 text-neutral-300' : 'bg-white border-[#ded8cc] text-neutral-700'
                    }`}
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-amber-500 shrink-0 mt-1.5" />
                    <span>{feat}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Curiosities */}
            <div className="space-y-2">
              <h3 className="text-xs font-bold uppercase tracking-wider text-amber-500 flex items-center gap-1.5">
                <Flame className="w-3.5 h-3.5" />
                Curiosidades Paleontológicas
              </h3>
              <div className="space-y-1.5">
                {renderedDino.curiosities.map((cur, i) => (
                  <div 
                    key={i} 
                    className={`p-2.5 rounded-lg border text-xs flex items-start gap-2 ${
                      isDark ? 'bg-neutral-900/50 border-neutral-800 text-neutral-300' : 'bg-white border-[#ded8cc] text-neutral-700'
                    }`}
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-amber-500 shrink-0 mt-1.5" />
                    <span>{cur}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
