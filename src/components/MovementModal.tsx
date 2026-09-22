import React, { useState, useEffect, useRef } from 'react';
import { Movement, ThemeMode } from '../types';
import { X, ChevronLeft, ChevronRight } from 'lucide-react';

interface MovementModalProps {
  movement: Movement | null;
  onClose: () => void;
  onSelectConnectedMovement?: (movement: Movement) => void;
  theme?: ThemeMode;
}

export const MovementModal: React.FC<MovementModalProps> = ({
  movement,
  onClose,
  theme = 'dark'
}) => {
  const isDark = theme === 'dark';
  const [selectedArtworkIndex, setSelectedArtworkIndex] = useState<number>(0);
  const carouselRef = useRef<HTMLDivElement>(null);

  // Reset selected image when movement changes
  useEffect(() => {
    setSelectedArtworkIndex(0);
    if (carouselRef.current) {
      carouselRef.current.scrollTo({ left: 0, behavior: 'smooth' });
    }
  }, [movement?.id]);

  // Handle escape key to close modal
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        onClose();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [onClose]);

  if (!movement) return null;

  // Active top hero image
  const FALLBACK_HERO = 'https://images.unsplash.com/photo-1579783900882-c0d3dad7b119?q=80&w=800&auto=format&fit=crop';
  const currentArtwork = movement.famousWorks[selectedArtworkIndex] || movement.famousWorks[0];
  const heroImageUrl = currentArtwork?.imageUrl || FALLBACK_HERO;

  const scrollCarousel = (direction: 'left' | 'right') => {
    if (carouselRef.current) {
      const scrollAmount = direction === 'left' ? -320 : 320;
      carouselRef.current.scrollBy({ left: scrollAmount, behavior: 'smooth' });
    }
  };

  return (
    <div className="fixed inset-0 z-50 overflow-hidden pointer-events-none">
      {/* Clickable Backdrop to close */}
      <div 
        onClick={onClose}
        className="absolute inset-0 bg-black/50 backdrop-blur-[3px] pointer-events-auto transition-opacity duration-300 animate-in fade-in"
        aria-label="Fechar painel"
      />

      {/* Right Drawer */}
      <aside 
        className={`fixed top-0 right-0 bottom-0 z-50 w-full sm:w-[520px] md:w-[580px] lg:w-[620px] max-w-full h-full shadow-2xl flex flex-col pointer-events-auto border-l animate-in slide-in-from-right duration-300 ease-out transition-colors ${
          isDark 
            ? 'bg-[#121214] border-neutral-800 text-neutral-100' 
            : 'bg-[#faf8f5] border-[#e5e0d8] text-neutral-900'
        }`}
      >
        {/* 1. APENAS A FOTO */}
        <div className="relative w-full h-64 sm:h-72 md:h-80 shrink-0 overflow-hidden bg-neutral-950">
          <img 
            key={heroImageUrl}
            src={heroImageUrl} 
            alt={currentArtwork?.title || movement.name}
            className="w-full h-full object-cover transition-transform duration-700 hover:scale-105"
            onError={(e) => {
              const target = e.currentTarget;
              if (target.src !== FALLBACK_HERO) {
                target.src = FALLBACK_HERO;
              }
            }}
          />

          {/* Subtle bottom gradient for image caption legibility */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-black/30 pointer-events-none" />

          {/* Minimalist Close Button */}
          <button
            onClick={onClose}
            className="absolute top-4 right-4 z-30 p-2.5 rounded-full bg-black/40 hover:bg-black/75 text-white/90 hover:text-white backdrop-blur-md transition-all hover:scale-105 cursor-pointer"
            title="Fechar (Esc)"
          >
            <X className="w-4 h-4" />
          </button>

          {/* Minimal artwork caption on photo */}
          {currentArtwork && (
            <div className="absolute bottom-3 left-5 right-5 pointer-events-none">
              <p className="text-xs text-neutral-200 line-clamp-1 drop-shadow-sm font-medium">
                <span className="text-white font-semibold">{currentArtwork.title}</span>
                {currentArtwork.year && ` (${currentArtwork.year})`}
                {currentArtwork.artist && ` — ${currentArtwork.artist}`}
              </p>
            </div>
          )}
        </div>

        {/* Scrollable Content */}
        <div className="flex-1 overflow-y-auto p-6 sm:p-8 space-y-7">
          
          {/* 2. TÍTULO */}
          <header className="space-y-1.5">
            <p className={`text-xs font-mono tracking-wider uppercase ${isDark ? 'text-neutral-400' : 'text-neutral-500'}`}>
              {movement.displayPeriod} • {movement.originRegion}
            </p>
            <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-inherit">
              {movement.name}
            </h2>
          </header>

          {/* 3. DESCRIÇÃO */}
          <section className="space-y-2">
            <p className={`text-base sm:text-lg leading-relaxed ${isDark ? 'text-neutral-200' : 'text-neutral-800'}`}>
              {movement.summary}
            </p>
          </section>

          {/* 4. EXPLICAÇÃO DETALHADA */}
          <section className="space-y-6 pt-1">
            
            {/* Contexto Histórico e Cultural */}
            <div className="space-y-2">
              <h3 className={`text-xs font-bold uppercase tracking-widest ${isDark ? 'text-neutral-400' : 'text-neutral-500'}`}>
                Contexto Histórico
              </h3>
              <p className={`text-sm leading-relaxed ${isDark ? 'text-neutral-300' : 'text-neutral-700'}`}>
                {movement.historicalContext}
              </p>
            </div>

            {/* Características Estéticas */}
            {movement.visualCharacteristics && movement.visualCharacteristics.length > 0 && (
              <div className="space-y-2.5">
                <h3 className={`text-xs font-bold uppercase tracking-widest ${isDark ? 'text-neutral-400' : 'text-neutral-500'}`}>
                  Características Principais
                </h3>
                <ul className={`space-y-2 text-sm leading-relaxed ${isDark ? 'text-neutral-300' : 'text-neutral-700'}`}>
                  {movement.visualCharacteristics.map((characteristic, idx) => (
                    <li key={idx} className="flex items-start gap-2.5">
                      <span className={`w-1.5 h-1.5 rounded-full mt-2 shrink-0 ${isDark ? 'bg-neutral-500' : 'bg-neutral-400'}`} />
                      <span>{characteristic}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </section>

          {/* 5. CARROSSEL DE IMAGENS */}
          {movement.famousWorks && movement.famousWorks.length > 0 && (
            <section className="space-y-3 pt-2 pb-4">
              <div className="flex items-center justify-between">
                <h3 className={`text-xs font-bold uppercase tracking-widest ${isDark ? 'text-neutral-400' : 'text-neutral-500'}`}>
                  Obras do Período ({movement.famousWorks.length})
                </h3>
                
                {movement.famousWorks.length > 1 && (
                  <div className="flex items-center gap-1">
                    <button
                      onClick={() => scrollCarousel('left')}
                      className={`p-1.5 rounded-full transition-colors cursor-pointer ${
                        isDark 
                          ? 'hover:bg-neutral-800 text-neutral-400 hover:text-white' 
                          : 'hover:bg-neutral-200 text-neutral-600 hover:text-neutral-900'
                      }`}
                      aria-label="Obra anterior"
                    >
                      <ChevronLeft className="w-4 h-4" />
                    </button>
                    <button
                      onClick={() => scrollCarousel('right')}
                      className={`p-1.5 rounded-full transition-colors cursor-pointer ${
                        isDark 
                          ? 'hover:bg-neutral-800 text-neutral-400 hover:text-white' 
                          : 'hover:bg-neutral-200 text-neutral-600 hover:text-neutral-900'
                      }`}
                      aria-label="Próxima obra"
                    >
                      <ChevronRight className="w-4 h-4" />
                    </button>
                  </div>
                )}
              </div>

              {/* Horizontal Scroll Carousel */}
              <div 
                ref={carouselRef}
                className="flex gap-4 overflow-x-auto snap-x snap-mandatory scroll-smooth pb-2 pt-1 no-scrollbar"
              >
                {movement.famousWorks.map((work, idx) => {
                  const isSelected = selectedArtworkIndex === idx;
                  return (
                    <div 
                      key={work.id || idx}
                      onClick={() => setSelectedArtworkIndex(idx)}
                      className={`w-64 sm:w-72 shrink-0 snap-start rounded-2xl overflow-hidden cursor-pointer transition-all duration-200 border ${
                        isSelected
                          ? isDark
                            ? 'border-white/80 ring-1 ring-white/60 shadow-lg'
                            : 'border-neutral-900 ring-1 ring-neutral-900 shadow-md'
                          : isDark
                            ? 'border-neutral-800 hover:border-neutral-600'
                            : 'border-neutral-200 hover:border-neutral-400'
                      }`}
                    >
                      <div className="relative h-44 w-full bg-neutral-950 overflow-hidden">
                        <img 
                          src={work.imageUrl} 
                          alt={work.title}
                          className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                          loading="lazy"
                          onError={(e) => {
                            const target = e.currentTarget;
                            if (target.src !== FALLBACK_HERO) {
                              target.src = FALLBACK_HERO;
                            }
                          }}
                        />
                        {work.year && (
                          <span className="absolute bottom-2 right-2 px-2 py-0.5 rounded text-[10px] font-mono bg-black/75 text-neutral-200 backdrop-blur-xs">
                            {work.year}
                          </span>
                        )}
                        {isSelected && (
                          <span className="absolute top-2 left-2 px-2 py-0.5 rounded text-[9px] font-bold uppercase tracking-wider font-mono bg-white text-black shadow-xs">
                            No Topo
                          </span>
                        )}
                      </div>

                      <div className={`p-4 space-y-1 ${isDark ? 'bg-[#18181b]' : 'bg-[#f4efe6]/50'}`}>
                        <h4 className="font-semibold text-xs leading-snug line-clamp-1">
                          {work.title}
                        </h4>
                        <p className={`text-[11px] ${isDark ? 'text-neutral-400' : 'text-neutral-600'}`}>
                          {work.artist}
                        </p>
                        {work.description && (
                          <p className={`text-[11px] leading-relaxed line-clamp-2 pt-1 ${isDark ? 'text-neutral-400' : 'text-neutral-600'}`}>
                            {work.description}
                          </p>
                        )}
                      </div>
                    </div>
                  );
                })}
              </div>
            </section>
          )}

        </div>
      </aside>
    </div>
  );
};
