import React, { useState, useEffect, useRef } from 'react';
import { Movement, ThemeMode } from '../types';
import { X, ChevronLeft, ChevronRight, ExternalLink } from 'lucide-react';
import { getEnrichedMovement } from '../data/movementExtendedDetails';

interface MovementModalProps {
  movement: Movement | null;
  onClose: () => void;
  onSelectConnectedMovement?: (movement: Movement) => void;
  theme?: ThemeMode;
  sidebarWidth?: number;
  onWidthChange?: (width: number) => void;
}

export const MovementModal: React.FC<MovementModalProps> = ({
  movement,
  onClose,
  onSelectConnectedMovement,
  theme = 'dark',
  sidebarWidth: controlledWidth,
  onWidthChange
}) => {
  const isDark = theme === 'dark';
  const [renderedMovement, setRenderedMovement] = useState<Movement | null>(null);
  const [isSlideOpen, setIsSlideOpen] = useState<boolean>(false);
  const [selectedArtworkIndex, setSelectedArtworkIndex] = useState<number>(0);
  const [selectedMediumFilter, setSelectedMediumFilter] = useState<'todos' | 'pintura' | 'escultura' | 'arquitetura' | 'musica'>('todos');
  const carouselRef = useRef<HTMLDivElement>(null);

  // Resizable sidebar state with localStorage persistence
  const [sidebarWidth, setSidebarWidth] = useState<number>(() => {
    if (controlledWidth && controlledWidth >= 180) return controlledWidth;
    if (typeof window !== 'undefined') {
      const isLandscapeMobile = window.innerHeight <= 520 && window.innerWidth > window.innerHeight;
      if (isLandscapeMobile) {
        return Math.floor(window.innerWidth * 0.48);
      }
      const saved = localStorage.getItem('cronos_sidebar_width');
      if (saved) {
        const parsed = parseInt(saved, 10);
        if (!isNaN(parsed) && parsed >= 180 && parsed <= 1800) {
          if (window.innerWidth >= 1024 && parsed < 560) {
            return Math.min(640, Math.floor(window.innerWidth * 0.75));
          }
          return Math.min(parsed, window.innerWidth - 40);
        }
      }
      if (window.innerWidth >= 1024) {
        return Math.min(640, Math.floor(window.innerWidth * 0.55));
      }
      return Math.min(480, window.innerWidth - 40);
    }
    return 640;
  });

  // Sync when controlledWidth changes
  useEffect(() => {
    if (controlledWidth && controlledWidth >= 180 && controlledWidth !== sidebarWidth) {
      setSidebarWidth(controlledWidth);
    }
  }, [controlledWidth]);

  const [isResizing, setIsResizing] = useState<boolean>(false);
  const isResizingRef = useRef<boolean>(false);

  // Handle Drag to Resize Sidebar
  const handleMouseDownResize = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    isResizingRef.current = true;
    setIsResizing(true);
    document.body.style.cursor = 'ew-resize';
    document.body.style.userSelect = 'none';

    const handleMouseMove = (moveEvent: MouseEvent) => {
      if (!isResizingRef.current) return;
      const viewportWidth = window.innerWidth;
      const viewportHeight = window.innerHeight;
      const isLandscapeMobile = viewportHeight <= 520 && viewportWidth > viewportHeight;
      const isTablet = !isLandscapeMobile && (viewportWidth <= 1024 && viewportWidth >= 640);
      
      let maxAllowed = Math.floor(viewportWidth * 0.75); // Desktop: up to 75% of screen
      let minAllowed = 380;
      if (isLandscapeMobile) {
        maxAllowed = Math.floor(viewportWidth * 0.50); // Celular deitado: no máximo metade da tela (50%)
        minAllowed = 200;
      } else if (isTablet) {
        maxAllowed = Math.floor(viewportWidth * 0.50);
        minAllowed = 260;
      }
      const newWidth = viewportWidth - moveEvent.clientX;
      const clampedWidth = Math.max(minAllowed, Math.min(newWidth, maxAllowed));
      setSidebarWidth(clampedWidth);
      onWidthChange?.(clampedWidth);
    };

    const handleMouseUp = () => {
      isResizingRef.current = false;
      setIsResizing(false);
      document.body.style.cursor = '';
      document.body.style.userSelect = '';
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('mouseup', handleMouseUp);
    };

    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('mouseup', handleMouseUp);
  };

  // Touch resize for tablets and mobile
  const handleTouchStartResize = (e: React.TouchEvent) => {
    e.stopPropagation();
    isResizingRef.current = true;
    setIsResizing(true);

    const handleTouchMove = (moveEvent: TouchEvent) => {
      if (!isResizingRef.current || !moveEvent.touches[0]) return;
      if (moveEvent.cancelable) {
        moveEvent.preventDefault();
      }
      const viewportWidth = window.innerWidth;
      const viewportHeight = window.innerHeight;
      const isLandscapeMobile = viewportHeight <= 520 && viewportWidth > viewportHeight;
      const isTablet = !isLandscapeMobile && (viewportWidth <= 1024 && viewportWidth >= 640);
      
      let maxAllowed = Math.floor(viewportWidth * 0.75);
      let minAllowed = 380;
      if (isLandscapeMobile) {
        maxAllowed = Math.floor(viewportWidth * 0.50); // Celular deitado: no máximo metade da tela (50%)
        minAllowed = 200;
      } else if (isTablet) {
        maxAllowed = Math.floor(viewportWidth * 0.50);
        minAllowed = 260;
      }
      const newWidth = viewportWidth - moveEvent.touches[0].clientX;
      const clampedWidth = Math.max(minAllowed, Math.min(newWidth, maxAllowed));
      setSidebarWidth(clampedWidth);
      onWidthChange?.(clampedWidth);
    };

    const handleTouchEnd = () => {
      isResizingRef.current = false;
      setIsResizing(false);
      window.removeEventListener('touchmove', handleTouchMove);
      window.removeEventListener('touchend', handleTouchEnd);
    };

    window.addEventListener('touchmove', handleTouchMove, { passive: false });
    window.addEventListener('touchend', handleTouchEnd);
  };

  // Save width to localStorage when adjusted
  useEffect(() => {
    localStorage.setItem('cronos_sidebar_width', sidebarWidth.toString());
  }, [sidebarWidth]);

  // Smooth slide-in and slide-out coordinator with rich enrichment
  useEffect(() => {
    if (movement) {
      setRenderedMovement(getEnrichedMovement(movement));
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
        setRenderedMovement(null);
      }, 500);
      return () => clearTimeout(timer);
    }
  }, [movement]);

  const handleClose = () => {
    setIsSlideOpen(false);
    setTimeout(() => {
      onClose();
    }, 450);
  };

  // Reset selected image and medium filter when movement changes
  useEffect(() => {
    setSelectedArtworkIndex(0);
    setSelectedMediumFilter('todos');
    if (carouselRef.current) {
      carouselRef.current.scrollTo({ left: 0, behavior: 'smooth' });
    }
  }, [renderedMovement?.id]);

  // Handle escape key to close modal
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        handleClose();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  if (!renderedMovement) return null;

  // Active top hero image
  const FALLBACK_HERO = 'https://images.unsplash.com/photo-1579783900882-c0d3dad7b119?q=80&w=800&auto=format&fit=crop';
  const currentArtwork = renderedMovement.famousWorks[selectedArtworkIndex] || renderedMovement.famousWorks[0];
  const heroImageUrl = currentArtwork?.imageUrl || FALLBACK_HERO;

  const scrollCarousel = (direction: 'left' | 'right') => {
    if (carouselRef.current) {
      const scrollAmount = direction === 'left' ? -260 : 260;
      carouselRef.current.scrollBy({ left: scrollAmount, behavior: 'smooth' });
    }
  };

  return (
    <div className="fixed inset-0 z-50 overflow-hidden pointer-events-none">
      {/* Right Drawer Sliding Smoothly from Right to Left with forward elevation shadow */}
      {/* Entire drawer is naturally and entirely scrollable: the hero photo scrolls together with all body text */}
      <aside 
        style={{ width: `${sidebarWidth}px`, maxWidth: '100vw' }}
        className={`fixed top-0 right-0 bottom-0 z-50 h-full overflow-y-auto block pointer-events-auto border-l transform will-change-transform ${
          isResizing 
            ? 'transition-none select-none' 
            : 'transition-transform duration-500 ease-[cubic-bezier(0.16,1,0.3,1)]'
        } ${
          isSlideOpen ? 'translate-x-0' : 'translate-x-full'
        } ${
          isDark 
            ? 'bg-[#121214] border-neutral-800 text-neutral-100 shadow-[-25px_0_60px_-10px_rgba(0,0,0,0.85)]' 
            : 'bg-[#faf8f5] border-[#e5e0d8] text-neutral-900 shadow-[-20px_0_50px_-10px_rgba(0,0,0,0.38)]'
        }`}
      >
        {/* Draggable Left-Edge Resize Handle */}
        <div
          onMouseDown={handleMouseDownResize}
          onTouchStart={handleTouchStartResize}
          style={{ touchAction: 'none' }}
          className="absolute -left-3.5 top-0 bottom-0 w-7 cursor-ew-resize z-50 group flex items-center justify-center select-none"
          title="Arraste para redimensionar o painel lateral"
        >
          {/* Grip Indicator on hover or active resizing */}
          <div 
            className={`w-1.5 h-14 rounded-full transition-all duration-150 ${
              isResizing 
                ? 'bg-sky-400 shadow-[0_0_12px_rgba(56,189,248,0.9)] scale-y-125' 
                : 'bg-neutral-400/40 group-hover:bg-sky-400/80 group-hover:shadow-[0_0_8px_rgba(56,189,248,0.6)]'
            }`}
          />
        </div>

        {/* 1. FOTO DE DESTAQUE AMPLIADA (4X A ÁREA ANTERIOR) E SCROLLÁVEL COM O CONTEÚDO */}
        <div className="relative w-full h-[560px] landscape:h-[420px] sm:h-[680px] md:h-[780px] overflow-hidden bg-neutral-950">
          {/* Close Button Inside Hero Header */}
          <button
            onClick={handleClose}
            className="absolute top-3 right-3 z-40 w-8 h-8 rounded-full bg-black/60 hover:bg-black/85 text-white backdrop-blur-md transition-all hover:scale-105 cursor-pointer shadow-md border border-white/25 flex items-center justify-center"
            title="Fechar painel (Esc)"
          >
            <X className="w-4 h-4" />
          </button>

          <img 
            key={heroImageUrl}
            src={heroImageUrl} 
            alt={currentArtwork?.title || renderedMovement.name}
            className="w-full h-full object-cover transition-transform duration-700 hover:scale-105"
            onError={(e) => {
              const target = e.currentTarget;
              if (target.src !== FALLBACK_HERO) {
                target.src = FALLBACK_HERO;
              }
            }}
          />

          {/* Bottom gradient overlay for caption legibility */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 via-40% to-black/20 pointer-events-none" />

          {/* Artwork caption on hero photo with medium badge and explore button */}
          {currentArtwork && (
            <div className="absolute bottom-3.5 left-4 right-4 flex items-end justify-between gap-3 pointer-events-none">
              <div className="max-w-[75%] space-y-1">
                {currentArtwork.medium && (
                  <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full text-[10px] font-bold tracking-wider uppercase font-mono bg-sky-500/90 text-black shadow-md backdrop-blur-md">
                    {currentArtwork.medium === 'pintura' && '🎨 Pintura'}
                    {currentArtwork.medium === 'escultura' && '🗿 Escultura'}
                    {currentArtwork.medium === 'arquitetura' && '🏛️ Arquitetura'}
                    {currentArtwork.medium === 'musica' && '🎵 Música'}
                    {!['pintura','escultura','arquitetura','musica'].includes(currentArtwork.medium) && currentArtwork.medium}
                  </span>
                )}
                <p className="text-sm sm:text-base text-neutral-100 line-clamp-1 drop-shadow-md font-semibold">
                  <span>{currentArtwork.title}</span>
                  {currentArtwork.year && <span className="font-normal text-neutral-300"> ({currentArtwork.year})</span>}
                </p>
                <p className="text-xs sm:text-sm text-neutral-300 line-clamp-1 drop-shadow-sm font-medium">
                  {currentArtwork.artist}{currentArtwork.location ? ` • ${currentArtwork.location}` : ''}
                </p>
              </div>

              {currentArtwork.externalUrl && (
                <a
                  href={currentArtwork.externalUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="pointer-events-auto shrink-0 inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-semibold bg-white/95 hover:bg-white text-neutral-900 shadow-lg backdrop-blur-md transition-transform hover:scale-105 cursor-pointer"
                  title="Abrir artigo explicativo completo em nova aba"
                >
                  <span>{currentArtwork.medium === 'musica' ? 'Ouvir / Explorar' : 'Explorar Obra'}</span>
                  <ExternalLink className="w-3 h-3 text-sky-600" />
                </a>
              )}
            </div>
          )}
        </div>

        {/* 2. CONTEÚDO INTEGRALMENTE SCROLLÁVEL COM TEXTOS E CARDS MENORES E MAIOR ESPAÇO DE RESPIRO */}
        <div className="p-3.5 sm:p-5 md:p-6 space-y-4 sm:space-y-5 md:space-y-6">
          
          {/* TÍTULO E PERÍODO */}
          <header className="space-y-1 border-b pb-4 border-neutral-200 dark:border-neutral-800">
            <p className="text-[10px] sm:text-[11px] font-mono font-medium tracking-wider uppercase text-neutral-500 dark:text-neutral-400">
              {renderedMovement.displayPeriod} • {renderedMovement.originRegion}
            </p>
            <h2 className="text-lg sm:text-xl font-bold tracking-tight text-neutral-900 dark:text-neutral-100">
              {renderedMovement.name}
            </h2>
          </header>

          {/* DESCRIÇÃO / RESUMO (TEXTO REFINADO E PROPORCIONAL) */}
          <section className="space-y-1.5">
            <h3 className="text-[11px] font-bold uppercase tracking-wider font-mono text-neutral-500 dark:text-neutral-400">
              Visão Geral
            </h3>
            <p className="text-xs sm:text-[13px] leading-relaxed text-neutral-700 dark:text-neutral-300">
              {renderedMovement.summary}
            </p>
          </section>

          {/* CONTEXTO HISTÓRICO E CULTURAL */}
          <section className="space-y-1.5">
            <h3 className="text-[11px] font-bold uppercase tracking-wider font-mono text-neutral-500 dark:text-neutral-400">
              Contexto Histórico
            </h3>
            <p className="text-xs sm:text-[13px] leading-relaxed text-neutral-700 dark:text-neutral-300">
              {renderedMovement.historicalContext}
            </p>
          </section>

          {/* CARACTERÍSTICAS PRINCIPAIS */}
          {renderedMovement.visualCharacteristics && renderedMovement.visualCharacteristics.length > 0 && (
            <section className="space-y-2">
              <h3 className="text-[11px] font-bold uppercase tracking-wider font-mono text-neutral-500 dark:text-neutral-400">
                Características Principais
              </h3>
              <ul className="space-y-1.5">
                {renderedMovement.visualCharacteristics.map((characteristic, idx) => (
                  <li key={idx} className="flex items-start gap-2 text-xs sm:text-[13px] leading-relaxed text-neutral-700 dark:text-neutral-300">
                    <span className="w-1.5 h-1.5 rounded-full mt-1.5 shrink-0 bg-sky-500" />
                    <span>{characteristic}</span>
                  </li>
                ))}
              </ul>
            </section>
          )}

          {/* CARROSSEL DE OBRAS DO PERÍODO COM DISCIPLINAS ARTÍSTICAS (Pintura, Escultura, Arquitetura e Música) */}
          {renderedMovement.famousWorks && renderedMovement.famousWorks.length > 0 && (
            <section className="space-y-3 pt-1">
              <div className="flex items-center justify-between">
                <div>
                  <h3 className="text-[11px] font-bold uppercase tracking-wider font-mono text-neutral-500 dark:text-neutral-400">
                    Obras e Disciplinas Artísticas ({renderedMovement.famousWorks.length} obras)
                  </h3>
                  <p className="text-[11px] text-neutral-500 dark:text-neutral-400 mt-0.5">
                    Contemplando Pintura, Escultura, Arquitetura e Música. Clique em qualquer obra para vê-la em destaque.
                  </p>
                </div>
                
                {renderedMovement.famousWorks.length > 1 && (
                  <div className="flex items-center gap-1.5 shrink-0">
                    <button
                      onClick={() => scrollCarousel('left')}
                      className={`w-6 h-6 rounded-full border transition-colors cursor-pointer flex items-center justify-center ${
                        isDark 
                          ? 'border-neutral-700 bg-neutral-800/80 hover:bg-neutral-700 text-neutral-200' 
                          : 'border-neutral-300 bg-white hover:bg-neutral-100 text-neutral-800'
                      }`}
                      aria-label="Obra anterior"
                      title="Rolar obras para a esquerda"
                    >
                      <ChevronLeft className="w-3.5 h-3.5" />
                    </button>
                    <button
                      onClick={() => scrollCarousel('right')}
                      className={`w-6 h-6 rounded-full border transition-colors cursor-pointer flex items-center justify-center ${
                        isDark 
                          ? 'border-neutral-700 bg-neutral-800/80 hover:bg-neutral-700 text-neutral-200' 
                          : 'border-neutral-300 bg-white hover:bg-neutral-100 text-neutral-800'
                      }`}
                      aria-label="Próxima obra"
                      title="Rolar obras para a direita"
                    >
                      <ChevronRight className="w-3.5 h-3.5" />
                    </button>
                  </div>
                )}
              </div>

              {/* Discipline Filter Buttons: Todas, Pintura, Escultura, Arquitetura, Música */}
              <div className="flex flex-wrap items-center gap-1.5 pt-0.5">
                {[
                  { id: 'todos', label: 'Todas as Áreas' },
                  { id: 'pintura', label: '🎨 Pintura' },
                  { id: 'escultura', label: '🗿 Escultura' },
                  { id: 'arquitetura', label: '🏛️ Arquitetura' },
                  { id: 'musica', label: '🎵 Música' }
                ].map((filterTab) => {
                  const isActive = selectedMediumFilter === filterTab.id;
                  const count = filterTab.id === 'todos' 
                    ? renderedMovement.famousWorks.length 
                    : renderedMovement.famousWorks.filter(w => w.medium === filterTab.id).length;
                  return (
                    <button
                      key={filterTab.id}
                      onClick={() => {
                        setSelectedMediumFilter(filterTab.id as any);
                        if (carouselRef.current) {
                          carouselRef.current.scrollTo({ left: 0, behavior: 'smooth' });
                        }
                      }}
                      className={`px-2.5 py-1 rounded-full text-[11px] font-semibold transition-all cursor-pointer flex items-center gap-1 border ${
                        isActive
                          ? 'bg-sky-500 text-black border-sky-400 shadow-sm'
                          : isDark
                            ? 'bg-neutral-800/70 hover:bg-neutral-800 text-neutral-300 border-neutral-700'
                            : 'bg-white hover:bg-neutral-100 text-neutral-700 border-neutral-300'
                      }`}
                    >
                      <span>{filterTab.label}</span>
                      <span className={`text-[10px] px-1 py-0.2 rounded-full ${
                        isActive 
                          ? 'bg-black/20 text-black' 
                          : isDark ? 'bg-neutral-700 text-neutral-400' : 'bg-neutral-200 text-neutral-600'
                      }`}>
                        {count}
                      </span>
                    </button>
                  );
                })}
              </div>

              {/* Horizontal Scroll Carousel */}
              <div 
                ref={carouselRef}
                className="flex gap-3 overflow-x-auto snap-x snap-mandatory scroll-smooth pb-2 pt-1"
              >
                {renderedMovement.famousWorks
                  .map((work, originalIdx) => ({ work, originalIdx }))
                  .filter(({ work }) => selectedMediumFilter === 'todos' || work.medium === selectedMediumFilter)
                  .map(({ work, originalIdx }) => {
                    const isSelected = selectedArtworkIndex === originalIdx;
                    return (
                      <div 
                        key={work.id || originalIdx}
                        onClick={() => setSelectedArtworkIndex(originalIdx)}
                        className={`w-52 sm:w-56 shrink-0 snap-start rounded-xl overflow-hidden cursor-pointer transition-all duration-200 border flex flex-col justify-between ${
                          isSelected
                            ? isDark
                              ? 'border-sky-400 ring-2 ring-sky-400/50 shadow-[0_0_15px_rgba(56,189,248,0.25)]'
                              : 'border-sky-500 ring-2 ring-sky-500/40 shadow-md'
                            : isDark
                              ? 'border-neutral-800 hover:border-neutral-600 bg-[#18181b]'
                              : 'border-neutral-200 hover:border-neutral-400 bg-white'
                        }`}
                      >
                        {/* Image Thumbnail com Medium Badge */}
                        <div className="relative h-28 sm:h-30 w-full bg-neutral-950 overflow-hidden">
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
                          {/* Medium Badge */}
                          {work.medium && (
                            <span className="absolute top-1.5 right-1.5 px-1.5 py-0.5 rounded text-[9px] font-bold uppercase tracking-wider font-mono bg-black/80 text-sky-300 border border-sky-400/30 backdrop-blur-xs">
                              {work.medium === 'pintura' && '🎨 Pintura'}
                              {work.medium === 'escultura' && '🗿 Escultura'}
                              {work.medium === 'arquitetura' && '🏛️ Arquitetura'}
                              {work.medium === 'musica' && '🎵 Música'}
                              {!['pintura','escultura','arquitetura','musica'].includes(work.medium) && work.medium}
                            </span>
                          )}
                          {work.year && (
                            <span className="absolute bottom-1.5 right-1.5 px-1.5 py-0.5 rounded text-[10px] font-mono bg-black/80 text-neutral-200 backdrop-blur-xs">
                              {work.year}
                            </span>
                          )}
                          {isSelected && (
                            <span className="absolute top-1.5 left-1.5 px-1.5 py-0.5 rounded text-[9px] font-bold uppercase tracking-wider font-mono bg-sky-400 text-black shadow-xs">
                              No Topo
                            </span>
                          )}
                        </div>

                        {/* Card Info and Direct External Article Link */}
                        <div className={`p-2.5 space-y-1 flex-1 flex flex-col justify-between ${isDark ? 'bg-[#18181b]' : 'bg-[#faf8f5]'}`}>
                          <div>
                            <h4 className="font-semibold text-xs leading-snug line-clamp-1 text-neutral-900 dark:text-neutral-100">
                              {work.title}
                            </h4>
                            <p className="text-[11px] font-medium text-neutral-500 dark:text-neutral-400 line-clamp-1">
                              {work.artist}
                            </p>
                            {work.description && (
                              <p className="text-[11px] leading-relaxed text-neutral-600 dark:text-neutral-300 line-clamp-2 pt-0.5">
                                {work.description}
                              </p>
                            )}
                          </div>

                          {/* Clickable External Explanatory Link */}
                          {work.externalUrl && (
                            <a
                              href={work.externalUrl}
                              target="_blank"
                              rel="noopener noreferrer"
                              onClick={(e) => e.stopPropagation()}
                              className="inline-flex items-center gap-1 text-[11px] font-medium text-sky-500 hover:text-sky-400 transition-colors pt-1.5 group/link"
                              title="Abrir artigo em nova aba"
                            >
                              <span>{work.medium === 'musica' ? 'Ouvir e analisar' : 'Ver análise'}</span>
                              <ExternalLink className="w-3 h-3 group-hover/link:translate-x-0.5 group-hover/link:-translate-y-0.5 transition-transform" />
                            </a>
                          )}
                        </div>
                      </div>
                    );
                  })}
              </div>
            </section>
          )}

          {/* NOMES E MESTRES IMPORTANTES DO PERÍODO COM CARDS COMPACTOS */}
          {renderedMovement.keyArtists && renderedMovement.keyArtists.length > 0 && (
            <section className="space-y-3 pt-3 border-t border-neutral-200 dark:border-neutral-800">
              <div className="flex items-center justify-between">
                <div>
                  <h3 className="text-[11px] font-bold uppercase tracking-wider font-mono text-neutral-500 dark:text-neutral-400">
                    Nomes Importantes do Período ({renderedMovement.keyArtists.length} mestres)
                  </h3>
                  <p className="text-[11px] text-neutral-500 dark:text-neutral-400 mt-0.5">
                    Pioneiros, mestres e formuladores teóricos fundamentais deste movimento
                  </p>
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 sm:gap-3">
                {renderedMovement.keyArtists.map((artist, idx) => (
                  <div
                    key={idx}
                    className={`p-3 rounded-xl border transition-colors flex flex-col justify-between ${
                      isDark 
                        ? 'bg-[#18181b] border-neutral-800/80 hover:border-neutral-700' 
                        : 'bg-white border-[#e5e0d8] hover:border-neutral-300'
                    }`}
                  >
                    <div>
                      <div className="flex items-start justify-between gap-1.5 mb-0.5">
                        <h4 className="font-semibold text-xs sm:text-[13px] leading-tight text-neutral-900 dark:text-neutral-100">
                          {artist.name}
                        </h4>
                        {artist.externalUrl && (
                          <a
                            href={artist.externalUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-neutral-400 hover:text-sky-400 transition-colors shrink-0 p-0.5"
                            title={`Ver biografia e obras de ${artist.name}`}
                          >
                            <ExternalLink className="w-3 h-3" />
                          </a>
                        )}
                      </div>

                      <p className="text-[10px] font-semibold text-sky-500 dark:text-sky-400 line-clamp-1 mb-0.5">
                        {artist.role}
                      </p>

                      <div className="flex items-center gap-1.5 text-[10px] font-mono text-neutral-500 dark:text-neutral-400 mb-1.5">
                        <span>{artist.country}</span>
                        {(artist.birthYear || artist.deathYear) && (
                          <span>• {artist.birthYear} – {artist.deathYear || 'presente'}</span>
                        )}
                      </div>

                      {artist.bio && (
                        <p className="text-xs leading-relaxed text-neutral-600 dark:text-neutral-300 line-clamp-3">
                          {artist.bio}
                        </p>
                      )}
                    </div>

                    {artist.externalUrl && (
                      <div className="pt-1.5 mt-1.5 border-t border-neutral-100 dark:border-neutral-800/60">
                        <a
                          href={artist.externalUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-1 text-[10px] font-medium text-neutral-500 dark:text-neutral-400 hover:text-sky-400 transition-colors"
                        >
                          <span>Biografia completa</span>
                          <ExternalLink className="w-2.5 h-2.5" />
                        </a>
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </section>
          )}

          {/* CONEXÕES HISTÓRICAS E DESDOBRAMENTOS */}
          {((renderedMovement.influences && renderedMovement.influences.length > 0) || 
            (renderedMovement.influenced && renderedMovement.influenced.length > 0)) && (
            <section className="space-y-3 pt-3 border-t border-neutral-200 dark:border-neutral-800">
              <h3 className="text-[11px] font-bold uppercase tracking-wider font-mono text-neutral-500 dark:text-neutral-400">
                Conexões & Influências
              </h3>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {renderedMovement.influences && renderedMovement.influences.length > 0 && (
                  <div className="space-y-1.5">
                    <p className="text-[11px] font-medium text-neutral-500 dark:text-neutral-400">
                      Movimentos que influenciaram:
                    </p>
                    <div className="flex flex-wrap gap-1.5">
                      {renderedMovement.influences.map(infId => (
                        <span
                          key={infId}
                          className="px-2 py-0.5 rounded text-[11px] font-mono border bg-neutral-100 dark:bg-neutral-800 border-neutral-200 dark:border-neutral-700 text-neutral-800 dark:text-neutral-200"
                        >
                          {infId}
                        </span>
                      ))}
                    </div>
                  </div>
                )}

                {renderedMovement.influenced && renderedMovement.influenced.length > 0 && (
                  <div className="space-y-1.5">
                    <p className="text-[11px] font-medium text-neutral-500 dark:text-neutral-400">
                      Movimentos que influenciou:
                    </p>
                    <div className="flex flex-wrap gap-1.5">
                      {renderedMovement.influenced.map(infId => (
                        <span
                          key={infId}
                          className="px-2 py-0.5 rounded text-[11px] font-mono border bg-neutral-100 dark:bg-neutral-800 border-neutral-200 dark:border-neutral-700 text-neutral-800 dark:text-neutral-200"
                        >
                          {infId}
                        </span>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            </section>
          )}

        </div>
      </aside>
    </div>
  );
};
