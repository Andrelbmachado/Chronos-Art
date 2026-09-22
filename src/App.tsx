import React, { useState, useEffect } from 'react';
import { ViewMode, Movement, Region, RegionalContextEntry, ContextCategory, ThemeMode } from './types';
import { MOVEMENTS } from './data/movements';
import { REGIONS } from './data/regions';
import { REGIONAL_CONTEXTS } from './data/regionalContexts';
import { Navbar } from './components/Navbar';
import { TimelineCanvas } from './components/TimelineCanvas';
import { LinearTimelineView } from './components/LinearTimelineView';
import { MovementModal } from './components/MovementModal';
import { DinosaurMode } from './components/DinosaurMode';

export default function App() {
  const [currentView, setCurrentView] = useState<ViewMode>('canvas');
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [theme, setTheme] = useState<ThemeMode>(() => {
    const saved = localStorage.getItem('timeline_theme');
    return (saved === 'light' || saved === 'dark') ? saved : 'dark';
  });
  const [isDinoModeActive, setIsDinoModeActive] = useState<boolean>(false);

  useEffect(() => {
    localStorage.setItem('timeline_theme', theme);
  }, [theme]);
  
  // Selected movement modal
  const [selectedMovement, setSelectedMovement] = useState<Movement | null>(null);

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
      className={`min-h-screen font-sans flex flex-col antialiased transition-colors duration-200 ${
        isDark 
          ? 'bg-[#18181b] text-neutral-100 selection:bg-neutral-700 selection:text-white' 
          : 'bg-[#fbf9f5] text-neutral-900 selection:bg-neutral-300 selection:text-black'
      }`}
    >
      
      {/* Top Navbar Header - Simplified with App Icon, Timeline, Search Inputbar, View Dropdown & Theme */}
      <Navbar
        currentView={currentView}
        onViewChange={setCurrentView}
        searchQuery={searchQuery}
        onSearchChange={setSearchQuery}
        movements={MOVEMENTS}
        onSelectMovement={setSelectedMovement}
        theme={theme}
        onToggleTheme={() => setTheme(prev => prev === 'dark' ? 'light' : 'dark')}
      />

      {/* Main View Area */}
      <main className="flex-1 relative overflow-hidden">
        {currentView === 'canvas' && (
          <TimelineCanvas
            movements={MOVEMENTS}
            regions={REGIONS}
            regionalContexts={REGIONAL_CONTEXTS}
            selectedEra="all"
            onSelectMovement={setSelectedMovement}
            onSelectContext={handleSelectContextFromCanvas}
            activeRegions={activeRegions}
            activeCategories={activeCategories}
            theme={theme}
            searchQuery={searchQuery}
            onTriggerDinoMode={() => setIsDinoModeActive(true)}
          />
        )}

        {currentView === 'linear' && (
          <LinearTimelineView
            movements={MOVEMENTS}
            selectedEra="all"
            onSelectMovement={setSelectedMovement}
            theme={theme}
          />
        )}
      </main>

      {/* Detail Drawer / Modal for Art Movement */}
      <MovementModal
        movement={selectedMovement}
        onClose={() => setSelectedMovement(null)}
        onSelectConnectedMovement={(m) => setSelectedMovement(m)}
        theme={theme}
      />

      {/* Dinosaur Mode Easter Egg */}
      {isDinoModeActive && (
        <DinosaurMode
          onClose={() => setIsDinoModeActive(false)}
          theme={theme}
        />
      )}

    </div>
  );
}
