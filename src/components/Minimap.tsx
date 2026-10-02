import React, { useRef, useState, useCallback } from 'react';
import { Movement, CanvasTransform, ThemeMode } from '../types';
import { ERAS } from '../data/eras';
import { DINOSAUR_ERAS, DINOSAURS } from '../data/dinosaurs';
import { Map, Minimize2 } from 'lucide-react';

interface MinimapProps {
  isOpen: boolean;
  onToggleOpen: () => void;
  movements: Movement[];
  timelineMode?: 'art' | 'dinosaur';
  transform: CanvasTransform;
  canvasWidth: number;
  canvasHeight?: number;
  onPanToYear: (year: number) => void;
  onSetTransformX: (newX: number) => void;
  theme?: ThemeMode;
}

export const Minimap: React.FC<MinimapProps> = ({
  isOpen,
  onToggleOpen,
  movements,
  timelineMode = 'art',
  transform,
  canvasWidth,
  onPanToYear,
  onSetTransformX,
  theme = 'dark'
}) => {
  const isDark = theme === 'dark';
  const barRef = useRef<HTMLDivElement>(null);

  // Dragging states
  const [isDraggingViewport, setIsDraggingViewport] = useState(false);
  const [isScrubbingTrack, setIsScrubbingTrack] = useState(false);
  const dragStartXRef = useRef<number>(0);
  const dragStartTransformXRef = useRef<number>(0);

  const getPercentageForYear = useCallback((year: number) => {
    if (timelineMode === 'dinosaur') {
      const min = -252000000;
      const max = -66000000;
      const clamped = Math.max(min, Math.min(max, year));
      return ((clamped - min) / (max - min)) * 100;
    }
    let x = 0;
    if (year < -10000) {
      x = ((year - (-40000)) / 30000) * 800;
    } else if (year < -3000) {
      x = 800 + ((year - (-10000)) / 7000) * 800;
    } else if (year < 1400) {
      x = 1600 + ((year - (-3000)) / 4400) * 1600;
    } else if (year < 1850) {
      x = 3200 + ((year - 1400) / 450) * 2000;
    } else if (year < 1945) {
      x = 5200 + ((year - 1850) / 95) * 2000;
    } else {
      x = 7200 + ((year - 1945) / 81) * 2400;
    }
    const canvasX = x + 200;
    return Math.max(0, Math.min(100, ((canvasX - 200) / 9600) * 100));
  }, [timelineMode]);

  const getYearForPercentage = useCallback((pct: number) => {
    if (timelineMode === 'dinosaur') {
      return -252000000 + (pct / 100) * 186000000;
    }
    const canvasX = 200 + (pct / 100) * 9600;
    const x = Math.max(0, canvasX - 200);
    if (x <= 800) {
      return -40000 + (x / 800) * 30000;
    }
    if (x <= 1600) {
      return -10000 + ((x - 800) / 800) * 7000;
    }
    if (x <= 3200) {
      return -3000 + ((x - 1600) / 1600) * 4400;
    }
    if (x <= 5200) {
      return 1400 + ((x - 3200) / 2000) * 450;
    }
    if (x <= 7200) {
      return 1850 + ((x - 5200) / 2000) * 95;
    }
    return 1945 + ((x - 7200) / 2400) * 81;
  }, [timelineMode]);

  const getYearForCanvasX = useCallback((canvasX: number) => {
    if (timelineMode === 'dinosaur') {
      const rel = Math.max(0, Math.min(1, (canvasX - 200) / 4000));
      return -252000000 + rel * 186000000;
    }
    const x = Math.max(0, canvasX - 200);
    if (x <= 800) {
      return -40000 + (x / 800) * 30000;
    }
    if (x <= 1600) {
      return -10000 + ((x - 800) / 800) * 7000;
    }
    if (x <= 3200) {
      return -3000 + ((x - 1600) / 1600) * 4400;
    }
    if (x <= 5200) {
      return 1400 + ((x - 3200) / 2000) * 450;
    }
    if (x <= 7200) {
      return 1850 + ((x - 5200) / 2000) * 95;
    }
    return 1945 + ((x - 7200) / 2400) * 81;
  }, [timelineMode]);

  const zeroPct = getPercentageForYear(0);

  // Exact year at horizontal center of user's screen
  const centerCanvasX = (-transform.x + canvasWidth / 2) / transform.zoom;
  const centerYearRaw = Math.round(getYearForCanvasX(centerCanvasX));
  const centerYearFormatted = centerYearRaw <= -1000000
    ? `${Math.round(Math.abs(centerYearRaw) / 1000000)} Ma a.C.`
    : centerYearRaw < 0 
      ? `${Math.abs(centerYearRaw).toLocaleString('pt-BR')} a.C.` 
      : `${centerYearRaw.toLocaleString('pt-BR')} d.C.`;

  // Accurate viewport window calculation
  const totalTrackPx = timelineMode === 'dinosaur' ? 4000 : 9600;
  const leftCanvasX = (-transform.x) / transform.zoom;
  const rightCanvasX = (-transform.x + canvasWidth) / transform.zoom;
  const viewportLeftPct = Math.max(0, Math.min(97, ((leftCanvasX - 200) / totalTrackPx) * 100));
  const viewportRightPct = Math.max(viewportLeftPct + 3, Math.min(100, ((rightCanvasX - 200) / totalTrackPx) * 100));
  const viewportWidthPct = Math.max(3, Math.min(100 - viewportLeftPct, viewportRightPct - viewportLeftPct));

  // Handle direct dragging on the blue viewport window
  const handleViewportPointerDown = (e: React.PointerEvent<HTMLDivElement>) => {
    e.stopPropagation();
    e.preventDefault();
    setIsDraggingViewport(true);
    dragStartXRef.current = e.clientX;
    dragStartTransformXRef.current = transform.x;
    (e.currentTarget as HTMLElement).setPointerCapture(e.pointerId);
  };

  const handleViewportPointerMove = (e: React.PointerEvent<HTMLDivElement>) => {
    if (!isDraggingViewport || !barRef.current) return;
    const deltaX = e.clientX - dragStartXRef.current;
    const barWidth = barRef.current.clientWidth;
    if (barWidth <= 0) return;
    const deltaCanvasX = (deltaX / barWidth) * 9600;
    const newTransformX = dragStartTransformXRef.current - deltaCanvasX * transform.zoom;
    onSetTransformX(newTransformX);
  };

  const handleViewportPointerUp = (e: React.PointerEvent<HTMLDivElement>) => {
    setIsDraggingViewport(false);
    try {
      (e.currentTarget as HTMLElement).releasePointerCapture(e.pointerId);
    } catch {}
  };

  // Handle clicking / scrubbing on the background track
  const handleTrackPointerDown = (e: React.PointerEvent<HTMLDivElement>) => {
    if (!barRef.current) return;
    setIsScrubbingTrack(true);
    const rect = barRef.current.getBoundingClientRect();
    const clickX = e.clientX - rect.left;
    const ratio = Math.max(0, Math.min(1, clickX / rect.width));
    const targetCanvasX = 200 + ratio * 9600;
    const newTransformX = -(targetCanvasX * transform.zoom) + (canvasWidth / 2);
    onSetTransformX(newTransformX);
    (e.currentTarget as HTMLElement).setPointerCapture(e.pointerId);
  };

  const handleTrackPointerMove = (e: React.PointerEvent<HTMLDivElement>) => {
    if (!isScrubbingTrack || !barRef.current) return;
    const rect = barRef.current.getBoundingClientRect();
    const clickX = e.clientX - rect.left;
    const ratio = Math.max(0, Math.min(1, clickX / rect.width));
    const targetCanvasX = 200 + ratio * 9600;
    const newTransformX = -(targetCanvasX * transform.zoom) + (canvasWidth / 2);
    onSetTransformX(newTransformX);
  };

  const handleTrackPointerUp = (e: React.PointerEvent<HTMLDivElement>) => {
    setIsScrubbingTrack(false);
    try {
      (e.currentTarget as HTMLElement).releasePointerCapture(e.pointerId);
    } catch {}
  };

  // If closed: render ONLY the single map icon toggle button
  if (!isOpen) {
    return (
      <button
        onClick={onToggleOpen}
        className={`w-8 h-8 sm:w-10 sm:h-10 rounded-lg sm:rounded-xl border shadow-lg backdrop-blur-md flex items-center justify-center transition-all duration-200 cursor-pointer ${
          isDark 
            ? 'bg-[#18181b]/95 border-neutral-800 text-neutral-200 hover:border-neutral-600 hover:text-white' 
            : 'bg-[#faf8f5]/95 border-[#e2ddd5] text-neutral-800 hover:border-neutral-400 shadow-md shadow-black/15'
        }`}
        title="Minimapa"
        aria-label="Minimapa"
      >
        <Map className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-sky-500" />
      </button>
    );
  }

  // If open: render the minimap panel (without duplicate bottom button, as close is in header)
  return (
    <div 
      className={`backdrop-blur-md border rounded-xl p-2 sm:p-2.5 shadow-2xl w-[260px] sm:w-72 md:w-84 max-w-[calc(100vw-32px)] text-xs transition-all duration-300 ease-out origin-bottom-right select-none animate-in fade-in zoom-in-95 ${
        isDark 
          ? 'bg-[#18181b]/95 border-neutral-800 text-neutral-300 shadow-black/80' 
          : 'bg-[#faf8f5]/95 border-[#e2ddd5] text-neutral-800 shadow-[0_12px_36px_rgba(0,0,0,0.3)]'
      }`}
    >
      {/* Minimap Header with title and minimize button */}
      <div className="flex items-center justify-between mb-1.5 px-0.5">
        <div className="flex items-center gap-1.5 text-xs font-semibold">
          <Map className="w-3.5 h-3.5 text-sky-500" />
          <span>Minimapa</span>
        </div>
        <button
          onClick={onToggleOpen}
          className={`p-1 rounded-md transition-colors cursor-pointer ${
            isDark ? 'hover:bg-neutral-800 text-neutral-400 hover:text-neutral-200' : 'hover:bg-neutral-200 text-neutral-500 hover:text-neutral-800'
          }`}
          title="Minimizar Minimapa"
        >
          <Minimize2 className="w-3.5 h-3.5" />
        </button>
      </div>

      {/* Timeline Interactive Bar with Draggable Viewport */}
      <div 
        ref={barRef}
        onPointerDown={handleTrackPointerDown}
        onPointerMove={handleTrackPointerMove}
        onPointerUp={handleTrackPointerUp}
        className={`relative h-8 rounded-lg overflow-hidden border cursor-crosshair touch-none ${
          isDark 
            ? 'bg-[#121214] border-neutral-700/80' 
            : 'bg-[#ffffff] border-[#ded8cc]'
        }`}
        title="Minimapa • Clique ou deslize para navegar na linha do tempo"
      >
        {/* Era Monochromatic Blocks */}
        {(timelineMode === 'dinosaur' ? DINOSAUR_ERAS : ERAS).map((era, idx) => {
          const startPct = getPercentageForYear(era.startYear);
          const endPct = getPercentageForYear(era.endYear);
          const widthPct = Math.max(1, endPct - startPct);
          const isEven = idx % 2 === 0;
          return (
            <div
              key={era.id}
              className={`absolute top-0 bottom-0 pointer-events-none transition-opacity ${
                timelineMode === 'dinosaur'
                  ? (isDark 
                      ? (isEven ? 'bg-amber-900/40 opacity-70' : 'bg-amber-800/30 opacity-60')
                      : (isEven ? 'bg-amber-200/70 opacity-70' : 'bg-amber-100/60 opacity-60'))
                  : (isDark 
                      ? (isEven ? 'bg-neutral-800 opacity-60' : 'bg-neutral-700 opacity-40')
                      : (isEven ? 'bg-neutral-200 opacity-70' : 'bg-neutral-300 opacity-50'))
              }`}
              style={{
                left: `${startPct}%`,
                width: `${widthPct}%`
              }}
              title={`${era.name} (${era.displayYears})`}
            />
          );
        })}

        {/* Year 0 Red Vertical Line on Minimap (Art Mode only) */}
        {timelineMode === 'art' && (
          <div
            className="absolute top-0 bottom-0 -translate-x-1/2 w-0.5 bg-red-500 z-10 pointer-events-none shadow-[0_0_6px_rgba(239,68,68,0.8)]"
            style={{ left: `${zeroPct}%` }}
            title="Ano 0 • Marco divisor histórico"
          />
        )}

        {/* Movement / Dinosaur Dots on Minimap */}
        {timelineMode === 'dinosaur'
          ? DINOSAURS.map((d) => {
              const pct = getPercentageForYear(d.startYear);
              return (
                <div
                  key={d.id}
                  className={`absolute top-1/2 -translate-y-1/2 w-1.5 h-1.5 rounded-full pointer-events-none ${
                    isDark ? 'bg-amber-400/80' : 'bg-amber-600/80'
                  }`}
                  style={{ left: `${pct}%` }}
                  title={`${d.name} (${d.displayPeriod})`}
                />
              );
            })
          : movements.map((m) => {
              const pct = getPercentageForYear(m.startYear);
              return (
                <div
                  key={m.id}
                  className={`absolute top-1/2 -translate-y-1/2 w-1 h-1 rounded-full pointer-events-none ${
                    isDark ? 'bg-neutral-400/70' : 'bg-neutral-600/70'
                  }`}
                  style={{
                    left: `${pct}%`
                  }}
                  title={`${m.name} (${m.displayPeriod})`}
                />
              );
            })}

        {/* Draggable Viewport Window - Synchronized with Canvas Camera */}
        <div
          onPointerDown={handleViewportPointerDown}
          onPointerMove={handleViewportPointerMove}
          onPointerUp={handleViewportPointerUp}
          className={`absolute top-0 bottom-0 border-2 rounded pointer-events-auto shadow-[0_0_8px_rgba(56,189,248,0.35)] transition-colors flex items-center justify-center touch-none select-none z-20 ${
            isDraggingViewport ? 'cursor-grabbing border-sky-300 bg-sky-400/30' : 'cursor-grab border-sky-400/90 bg-sky-400/20 hover:bg-sky-400/25'
          } ${
            isDark ? 'border-sky-400/90' : 'border-sky-600/90 bg-sky-500/20'
          }`}
          style={{
            left: `${viewportLeftPct}%`,
            width: `${viewportWidthPct}%`
          }}
          title="Janela visível na tela • Arraste para navegar pelo tempo"
        >
          {/* Subtle center grip dots */}
          <div className="flex gap-0.5 pointer-events-none opacity-60">
            <div className={`w-0.5 h-3 rounded-full ${isDark ? 'bg-sky-300' : 'bg-sky-700'}`} />
            <div className={`w-0.5 h-3 rounded-full ${isDark ? 'bg-sky-300' : 'bg-sky-700'}`} />
          </div>
        </div>
      </div>

      {/* Bottom Bar: Timeline bounds & current center year */}
      <div className={`flex justify-between items-center text-[10px] mt-2 font-mono ${isDark ? 'text-neutral-400' : 'text-neutral-500'}`}>
        <span 
          className="text-[9px]" 
          title={`Início da escala: ${timelineMode === 'dinosaur' ? '252 Ma a.C. (Início do Triássico)' : '40.000 a.C. (Paleolítico Superior)'}`}
        >
          {timelineMode === 'dinosaur' ? '252 Ma a.C.' : '40.000 a.C.'}
        </span>
        
        {/* Exact Year at screen center */}
        <div 
          className={`px-2 py-0.5 rounded font-bold text-xs shadow-xs border ${
            isDark 
              ? 'bg-neutral-800/90 border-neutral-700 text-neutral-100' 
              : 'bg-[#ede8df] border-[#ded8cc] text-neutral-900'
          }`}
          title={`Ano central da visualização: ${centerYearFormatted}`}
        >
          {centerYearFormatted}
        </div>

        <span 
          className="text-[9px]" 
          title={`Fim da escala: ${timelineMode === 'dinosaur' ? '66 Ma a.C. (Final do Cretáceo)' : '2026 d.C. (Presente)'}`}
        >
          {timelineMode === 'dinosaur' ? '66 Ma a.C.' : '2026 d.C.'}
        </span>
      </div>
    </div>
  );
};
