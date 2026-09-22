import React from 'react';
import { Movement, CanvasTransform, ThemeMode } from '../types';
import { ERAS } from '../data/eras';

interface MinimapProps {
  movements: Movement[];
  transform: CanvasTransform;
  canvasWidth: number;
  canvasHeight?: number;
  onPanToYear: (year: number) => void;
  theme?: ThemeMode;
}

export const Minimap: React.FC<MinimapProps> = ({
  movements,
  transform,
  canvasWidth,
  onPanToYear,
  theme = 'dark'
}) => {
  const isDark = theme === 'dark';

  // Segmented percentage calculation aligning with main canvas yearToX mapping (200px to 9800px)
  const getPercentageForYear = (year: number) => {
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
    return Math.max(0, Math.min(100, (canvasX / 9800) * 100));
  };

  const getYearForPercentage = (pct: number) => {
    const canvasX = (pct / 100) * 9800;
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
  };

  const getYearForCanvasX = (canvasX: number) => {
    if (canvasX < 200) {
      const rel = Math.max(0, (canvasX - (-1000)) / 1200);
      return -4000000 + rel * 3960000;
    }
    const x = canvasX - 200;
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
  };

  const zeroPct = getPercentageForYear(0);

  // Exact year at the horizontal center of the user's viewport
  const centerCanvasX = (-transform.x + canvasWidth / 2) / transform.zoom;
  const centerYearRaw = Math.round(getYearForCanvasX(centerCanvasX));
  const centerYearFormatted = centerYearRaw < 0 
    ? `${Math.abs(centerYearRaw).toLocaleString('pt-BR')} a.C.` 
    : `${centerYearRaw.toLocaleString('pt-BR')} d.C.`;

  return (
    <div 
      className={`absolute bottom-4 right-4 z-20 backdrop-blur-md border rounded-xl p-2.5 shadow-xl w-64 md:w-76 text-xs transition-colors ${
        isDark 
          ? 'bg-[#18181b]/92 border-neutral-800 text-neutral-300' 
          : 'bg-[#faf8f5]/92 border-[#e2ddd5] text-neutral-800'
      }`}
    >
      {/* Timeline Bar Background */}
      <div 
        className={`relative h-8 rounded-lg overflow-hidden border cursor-pointer ${
          isDark 
            ? 'bg-[#121214] border-neutral-700/80' 
            : 'bg-[#ffffff] border-[#ded8cc]'
        }`}
        onClick={(e) => {
          const rect = e.currentTarget.getBoundingClientRect();
          const clickX = e.clientX - rect.left;
          const ratioPct = Math.max(0, Math.min(100, (clickX / rect.width) * 100));
          const targetYear = getYearForPercentage(ratioPct);
          onPanToYear(targetYear);
        }}
      >
        {/* Era Monochromatic Blocks */}
        {ERAS.map((era, idx) => {
          const startPct = getPercentageForYear(era.startYear);
          const endPct = getPercentageForYear(era.endYear);
          const widthPct = Math.max(1, endPct - startPct);
          const isEven = idx % 2 === 0;
          return (
            <div
              key={era.id}
              className={`absolute top-0 bottom-0 transition-opacity ${
                isDark 
                  ? (isEven ? 'bg-neutral-800 opacity-60 hover:opacity-80' : 'bg-neutral-700 opacity-40 hover:opacity-70')
                  : (isEven ? 'bg-neutral-200 opacity-70 hover:opacity-90' : 'bg-neutral-300 opacity-50 hover:opacity-80')
              }`}
              style={{
                left: `${startPct}%`,
                width: `${widthPct}%`
              }}
              title={`${era.name} (${era.displayYears})`}
            />
          );
        })}

        {/* Year 0 Red Vertical Line on Minimap (clean line only, no circle) */}
        <div
          className="absolute top-0 bottom-0 -translate-x-1/2 w-0.5 bg-red-500 z-15 pointer-events-none shadow-[0_0_4px_rgba(239,68,68,0.7)]"
          style={{ left: `${zeroPct}%` }}
        />

        {/* Movement Dots on Minimap */}
        {movements.map((m) => {
          const pct = getPercentageForYear(m.startYear);
          return (
            <div
              key={m.id}
              className={`absolute top-1/2 -translate-y-1/2 w-1.5 h-1.5 rounded-full pointer-events-none ${
                isDark ? 'bg-neutral-400' : 'bg-neutral-700'
              }`}
              style={{
                left: `${pct}%`
              }}
            />
          );
        })}

        {/* Current Viewport Indicator Box */}
        <div
          className={`absolute top-0 bottom-0 border-2 rounded pointer-events-none will-change-transform ${
            isDark 
              ? 'border-neutral-200 bg-neutral-100/10' 
              : 'border-neutral-900 bg-neutral-900/10'
          }`}
          style={{
            left: `${Math.max(0, Math.min(92, (-transform.x / (canvasWidth * transform.zoom)) * 100))}%`,
            width: `${Math.max(8, Math.min(100, (1 / transform.zoom) * 35))}%`
          }}
        />
      </div>

      {/* Bottom Bar: 40.000 a.C. | Exact Current Center Year in the center | 2026 d.C. */}
      <div className={`flex justify-between items-center text-[10px] mt-2 font-mono ${isDark ? 'text-neutral-400' : 'text-neutral-500'}`}>
        <span className="text-[9px]">40.000 a.C.</span>
        
        {/* Exact Year at screen center */}
        <div className={`px-2 py-0.5 rounded font-bold text-xs shadow-xs border ${
          isDark 
            ? 'bg-neutral-800/90 border-neutral-700 text-neutral-100' 
            : 'bg-[#ede8df] border-[#ded8cc] text-neutral-900'
        }`}>
          {centerYearFormatted}
        </div>

        <span className="text-[9px]">2026 d.C.</span>
      </div>
    </div>
  );
};
