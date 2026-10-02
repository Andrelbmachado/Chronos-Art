import React, { useState, useEffect } from 'react';
import { Movement, Region, RegionalContextEntry, ContextCategory, ThemeMode } from './types';
import { MOVEMENTS } from './data/movements';
import { REGIONS } from './data/regions';
import { REGIONAL_CONTEXTS } from './data/regionalContexts';
import { Navbar } from './components/Navbar';
import { TimelineCanvas } from './components/TimelineCanvas';
import { MovementModal } from './components/MovementModal';

// Helper to calculate responsive drawer width based on device viewport
function computeResponsiveSidebarWidth(rawWidth: number, viewportWidth: number, viewportHeight: number): number {
  const isMobileLandscape = viewportHeight <= 520 && viewportWidth > viewportHeight;
  const isTabletOrIPad = !isMobileLandscape && (viewportWidth <= 1024 && viewportWidth >= 640);
  const isMobilePortrait = viewportWidth < 640;

  if (isMobileLandscape) {
    // Modo celular deitado: redimensionável entre 200px e no máximo metade da tela (50%)
    const max50 = Math.floor(viewportWidth * 0.50);
    return Math.max(200, Math.min(rawWidth, max50));
  }
  if (isTabletOrIPad) {
    // iPad: no máximo metade do tamanho da tela (50%)
    const max50 = Math.floor(viewportWidth * 0.50);
    return Math.max(260, Math.min(rawWidth, max50));
  }
  if (isMobilePortrait) {
    return Math.min(rawWidth, viewportWidth - 20);
  }
  // Desktop standard (Computador): pode ser mais larga, permitindo até 75% da tela
  const maxDesktop = Math.floor(viewportWidth * 0.75);
  return Math.max(480, Math.min(rawWidth, maxDesktop));
}

export default function App() {
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [theme, setTheme] = useState<ThemeMode>(() => {
    const saved = localStorage.getItem('timeline_theme');
    return (saved === 'light' || saved === 'dark') ? saved : 'dark';
  });

  useEffect(() => {
    localStorage.setItem('timeline_theme', theme);
  }, [theme]);
  
  // Selected movement modal
  const [selectedMovement, setSelectedMovement] = useState<Movement | null>(null);

  // Viewport dimensions tracker for responsive drawer and floating controls sync
  const [viewportSize, setViewportSize] = useState({
    width: typeof window !== 'undefined' ? window.innerWidth : 1200,
    height: typeof window !== 'undefined' ? window.innerHeight : 800
  });

  useEffect(() => {
    const handleResize = () => {
      setViewportSize({ width: window.innerWidth, height: window.innerHeight });
    };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // Synchronized drawer width so canvas controls (zoom and minimap) slide left of the drawer
  const [rawSidebarWidth, setRawSidebarWidth] = useState<number>(() => {
    if (typeof window !== 'undefined') {
      const isLandscapeMobile = window.innerHeight <= 520 && window.innerWidth > window.innerHeight;
      if (isLandscapeMobile) {
        return Math.floor(window.innerWidth * 0.48);
      }
      const saved = localStorage.getItem('cronos_sidebar_width');
      if (saved) {
        const parsed = parseInt(saved, 10);
        if (!isNaN(parsed) && parsed >= 200 && parsed <= 1800) {
          // If on desktop (>=1024) and old stored width was too narrow (<560), upgrade to 640px
          if (window.innerWidth >= 1024 && parsed < 560) {
            return Math.min(640, Math.floor(window.innerWidth * 0.75));
          }
          return parsed;
        }
      }
      // On desktop computer, default to 640px for generous viewing
      if (window.innerWidth >= 1024) {
        return Math.min(640, Math.floor(window.innerWidth * 0.55));
      }
      return Math.min(480, window.innerWidth - 40);
    }
    return 640;
  });

  const effectiveSidebarWidth = computeResponsiveSidebarWidth(rawSidebarWidth, viewportSize.width, viewportSize.height);

  // Active region and facet layers
  const [activeRegions, setActiveRegions] = useState<string[]>([
    'brasil', 'italia', 'franca', 'alemanha', 'espanha', 'japao', 'egito', 'america-pre-colombiana'
  ]);
  const [activeCategories, setActiveCategories] = useState<ContextCategory[]>([
    'arte', 'politica', 'sociedade', 'musica', 'arquitetura', 'tecnologia', 'religiao', 'economia', 'filosofia'
  ]);

  const handleSelectContextFromCanvas = (region: Region, entry: RegionalContextEntry) => {
    const matchingMov = MOVEMENTS.find(m => m.startYear <= entry.endYear && m.endYear >= entry.startYear);
    if (matchingMov) {
      setSelectedMovement(matchingMov);
    }
  };

  const isDark = theme === 'dark';

  return (
    <div 
      className={`h-screen font-sans flex flex-col antialiased overflow-hidden transition-colors duration-200 ${
        isDark 
          ? 'bg-[#18181b] text-neutral-100 selection:bg-neutral-700 selection:text-white' 
          : 'bg-[#fbf9f5] text-neutral-900 selection:bg-neutral-300 selection:text-black'
      }`}
    >
      
      {/* Top Navbar Header */}
      <Navbar
        searchQuery={searchQuery}
        onSearchChange={setSearchQuery}
        movements={MOVEMENTS}
        onSelectMovement={setSelectedMovement}
        theme={theme}
        onToggleTheme={() => setTheme(prev => prev === 'dark' ? 'light' : 'dark')}
      />

      {/* Main Timeline Canvas View */}
      <main className="flex-1 relative overflow-hidden">
        <TimelineCanvas
          movements={MOVEMENTS}
          regions={REGIONS}
          regionalContexts={REGIONAL_CONTEXTS}
          selectedEra="all"
          selectedMovement={selectedMovement}
          onSelectMovement={(movement) => {
            setSelectedMovement(prev => (prev?.id === movement?.id ? null : movement));
          }}
          onSelectContext={handleSelectContextFromCanvas}
          activeRegions={activeRegions}
          activeCategories={activeCategories}
          theme={theme}
          searchQuery={searchQuery}
          isDrawerOpen={!!selectedMovement}
          sidebarWidth={effectiveSidebarWidth}
        />
      </main>

      {/* Detail Drawer / Modal for Art Movement */}
      <MovementModal
        movement={selectedMovement}
        onClose={() => setSelectedMovement(null)}
        onSelectConnectedMovement={(m) => setSelectedMovement(m)}
        theme={theme}
        sidebarWidth={effectiveSidebarWidth}
        onWidthChange={setRawSidebarWidth}
      />

    </div>
  );
}
