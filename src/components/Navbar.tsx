import React, { useState, useRef, useEffect } from 'react';
import { ViewMode, Movement, ThemeMode } from '../types';
import { Search, Moon, Sun, X } from 'lucide-react';

interface NavbarProps {
  searchQuery: string;
  onSearchChange: (q: string) => void;
  movements: Movement[];
  onSelectMovement: (m: Movement) => void;
  theme: ThemeMode;
  onToggleTheme: () => void;
  currentView?: ViewMode;
  onViewChange?: (mode: ViewMode) => void;
}

export const Navbar: React.FC<NavbarProps> = ({
  searchQuery,
  onSearchChange,
  movements,
  onSelectMovement,
  theme,
  onToggleTheme,
  onViewChange
}) => {
  const [isSearchFocused, setIsSearchFocused] = useState(false);
  const searchContainerRef = useRef<HTMLDivElement>(null);

  // Close search autocomplete on outside click or touch
  useEffect(() => {
    const handleOutside = (e: MouseEvent | TouchEvent) => {
      if (searchContainerRef.current && !searchContainerRef.current.contains(e.target as Node)) {
        setIsSearchFocused(false);
      }
    };
    document.addEventListener('mousedown', handleOutside);
    document.addEventListener('touchstart', handleOutside, { passive: true });
    return () => {
      document.removeEventListener('mousedown', handleOutside);
      document.removeEventListener('touchstart', handleOutside);
    };
  }, []);

  // Filtered movements for search autocomplete
  const searchResults = searchQuery.trim()
    ? movements.filter(m => {
        const query = searchQuery.toLowerCase();
        return (
          m.name.toLowerCase().includes(query) ||
          m.displayPeriod.toLowerCase().includes(query) ||
          m.originRegion.toLowerCase().includes(query) ||
          m.keyArtists.some(a => a.name.toLowerCase().includes(query)) ||
          m.tags.some(t => t.toLowerCase().includes(query))
        );
      }).slice(0, 6)
    : [];

  const isDark = theme === 'dark';

  const handleSelectResult = (m: Movement) => {
    onSelectMovement(m);
    onSearchChange('');
    setIsSearchFocused(false);
  };

  return (
    <header 
      className={`sticky top-0 z-[60] backdrop-blur-md border-b transition-colors duration-200 select-none ${
        isDark 
          ? 'bg-[#18181b]/95 border-neutral-800 text-neutral-100 shadow-sm' 
          : 'bg-[#faf8f5]/95 border-[#e5e0d8] text-neutral-900 shadow-sm'
      }`}
    >
      <div className="w-full px-2.5 sm:px-6 py-1 flex items-center justify-between gap-2 sm:gap-3 h-12">
        
        {/* Left: App Logo & Name (Cronos art) - Icon only on mobile vertical, name on sm+ */}
        <div 
          className="flex items-center space-x-2 cursor-pointer shrink-0 group select-none"
          onClick={() => onViewChange?.('canvas')}
          title="Cronos art • Linha do Tempo"
        >
          {/* Logo: Vector Number Eight with Fibonacci Golden Spiral, pure black in light mode and pure white in dark mode */}
          <div className={`w-6 h-6 flex items-center justify-center transition-transform duration-200 group-hover:scale-105 shrink-0 ${
            isDark ? 'text-white' : 'text-black'
          }`}>
            <svg
              className="w-full h-full"
              viewBox="0 0 32 32"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              aria-label="Cronos art logo"
            >
              {/* Upper Loop of the 8 */}
              <path
                d="M 16 14.5
                   C 12.8 14.5, 10 12.2, 10 9.2
                   C 10 6.2, 12.8 3.8, 16 3.8
                   C 19.2 3.8, 22 6.2, 22 9.2
                   C 22 12.2, 19.2 14.5, 16 14.5 Z"
                stroke={isDark ? '#FFFFFF' : '#000000'}
                strokeWidth="2.8"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              {/* Lower Fibonacci Golden Spiral Loop */}
              <path
                d="M 16 14.5
                   C 20.8 14.5, 24.8 18, 24.8 22.5
                   C 24.8 27, 20.8 29.8, 16 29.8
                   C 11 29.8, 7.2 26.6, 7.2 22
                   C 7.2 17.6, 10.8 15.5, 15.5 15.5
                   C 19.2 15.5, 22 17.8, 22 21.2
                   C 22 24, 19.8 25.8, 16.8 25.8
                   C 14.2 25.8, 12.5 24.2, 12.5 22.2
                   C 12.5 20.6, 13.9 19.5, 15.6 19.5
                   C 17 19.5, 18 20.4, 18 21.5"
                stroke={isDark ? '#FFFFFF' : '#000000'}
                strokeWidth="2.8"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </div>

          {/* Unified Brand Typography - Hidden on small mobile vertical to let search bar expand */}
          <span className={`hidden sm:inline font-bold text-[15px] tracking-tight ${
            isDark ? 'text-white' : 'text-black'
          }`}>
            Cronos art
          </span>
        </div>

        {/* Center / Main: Search Input Bar - Fills the vast majority of the top bar on mobile vertical */}
        <div ref={searchContainerRef} className="relative flex-1 min-w-0 mx-1 sm:mx-3 sm:max-w-md">
          <div 
            className={`flex items-center h-8 w-full rounded-lg border px-2.5 transition-all text-xs ${
              isDark 
                ? 'bg-[#222226] border-neutral-700/80 text-neutral-100 focus-within:border-neutral-500' 
                : 'bg-[#ffffff] border-[#e2ddd5] text-neutral-900 focus-within:border-neutral-500 shadow-xs'
            }`}
            title="Barra de busca • Procure por movimentos artísticos, épocas, artistas ou regiões"
          >
            <Search className={`w-3.5 h-3.5 mr-1.5 shrink-0 ${isDark ? 'text-neutral-400' : 'text-neutral-500'}`} />
            <input
              type="text"
              placeholder="Buscar movimento, artista..."
              value={searchQuery}
              onChange={(e) => {
                onSearchChange(e.target.value);
                setIsSearchFocused(true);
              }}
              onFocus={() => setIsSearchFocused(true)}
              onKeyDown={(e) => {
                if (e.key === 'Enter' && searchResults.length > 0) {
                  handleSelectResult(searchResults[0]);
                } else if (e.key === 'Escape') {
                  setIsSearchFocused(false);
                }
              }}
              className="w-full bg-transparent border-none outline-none text-xs text-inherit placeholder:text-neutral-400"
            />
            {searchQuery && (
              <button 
                type="button"
                onClick={() => onSearchChange('')}
                className="p-0.5 rounded hover:opacity-75 transition-opacity cursor-pointer shrink-0"
                title="Limpar pesquisa"
              >
                <X className="w-3 h-3 text-neutral-400" />
              </button>
            )}
          </div>

          {/* Search Autocomplete Results Dropdown */}
          {isSearchFocused && searchResults.length > 0 && (
            <div 
              className={`absolute top-full left-0 right-0 mt-1.5 rounded-xl border shadow-2xl overflow-hidden z-[70] py-1 max-h-60 overflow-y-auto ${
                isDark 
                  ? 'bg-[#202024] border-neutral-700 text-neutral-100 shadow-black/80' 
                  : 'bg-[#ffffff] border-[#e2ddd5] text-neutral-900 shadow-neutral-400/40'
              }`}
            >
              {searchResults.map((m) => (
                <div
                  key={m.id}
                  onClick={() => handleSelectResult(m)}
                  className={`px-3 py-1.5 flex items-center justify-between cursor-pointer transition-colors text-xs ${
                    isDark ? 'hover:bg-neutral-800/80' : 'hover:bg-neutral-100'
                  }`}
                  title={`Ver detalhes do movimento ${m.name} (${m.displayPeriod})`}
                >
                  <div className="flex flex-col">
                    <span className="font-semibold text-current">{m.name}</span>
                    <span className={`text-[10px] ${isDark ? 'text-neutral-400' : 'text-neutral-500'}`}>
                      {m.keyArtists[0]?.name ? `${m.keyArtists[0].name} • ` : ''}{m.originRegion}
                    </span>
                  </div>
                  <span 
                    className={`text-[9px] font-mono px-1.5 py-0.5 rounded border ${
                      isDark 
                        ? 'bg-neutral-800 border-neutral-700 text-neutral-300' 
                        : 'bg-neutral-100 border-neutral-200 text-neutral-700'
                    }`}
                  >
                    {m.displayPeriod}
                  </span>
                </div>
              ))}
            </div>
          )}
        </div>

        {/* Right: Monochromatic Dark/Light Theme Toggle directly next to search bar */}
        <button
          type="button"
          onClick={onToggleTheme}
          className={`w-8 h-8 rounded-lg border transition-colors flex items-center justify-center cursor-pointer shrink-0 ${
            isDark 
              ? 'bg-[#222226] border-neutral-700/80 text-neutral-300 hover:text-white hover:border-neutral-500' 
              : 'bg-[#ffffff] border-[#e2ddd5] text-neutral-700 hover:text-black hover:border-neutral-400 shadow-xs'
          }`}
          title={isDark ? 'Mudar para modo claro (Branco creme)' : 'Mudar para modo escuro (Cinza escuro)'}
          aria-label="Alternar tema"
        >
          {isDark ? <Sun className="w-3.5 h-3.5" /> : <Moon className="w-3.5 h-3.5" />}
        </button>

      </div>
    </header>
  );
};
