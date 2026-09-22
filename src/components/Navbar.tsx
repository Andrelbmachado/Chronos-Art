import React, { useState, useRef, useEffect } from 'react';
import { ViewMode, Movement, ThemeMode } from '../types';
import { Search, ChevronDown, Moon, Sun, Clock, X } from 'lucide-react';

interface NavbarProps {
  currentView: ViewMode;
  onViewChange: (mode: ViewMode) => void;
  searchQuery: string;
  onSearchChange: (q: string) => void;
  movements: Movement[];
  onSelectMovement: (m: Movement) => void;
  theme: ThemeMode;
  onToggleTheme: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({
  currentView,
  onViewChange,
  searchQuery,
  onSearchChange,
  movements,
  onSelectMovement,
  theme,
  onToggleTheme
}) => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isSearchFocused, setIsSearchFocused] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);
  const searchContainerRef = useRef<HTMLDivElement>(null);

  // Close dropdown on outside click
  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target as Node)) {
        setIsDropdownOpen(false);
      }
      if (searchContainerRef.current && !searchContainerRef.current.contains(e.target as Node)) {
        setIsSearchFocused(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
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

  // Inverted mapping as requested:
  // "Linha do Tempo" corresponds to interactive horizontal ruler/timeline (internal 'canvas')
  // "Canvas 2D" corresponds to the 2D chronological view (internal 'linear')
  const currentViewLabel = currentView === 'canvas' ? 'Linha do Tempo' : 'Canvas 2D';

  const handleSelectView = (view: ViewMode) => {
    onViewChange(view);
    setIsDropdownOpen(false);
  };

  const handleSelectResult = (m: Movement) => {
    onSelectMovement(m);
    onSearchChange('');
    setIsSearchFocused(false);
  };

  return (
    <header 
      className={`sticky top-0 z-50 backdrop-blur-md border-b transition-colors duration-200 select-none ${
        isDark 
          ? 'bg-[#18181b]/95 border-neutral-800 text-neutral-100 shadow-sm' 
          : 'bg-[#faf8f5]/95 border-[#e5e0d8] text-neutral-900 shadow-sm'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-2.5 flex items-center justify-between gap-4">
        
        {/* Left: App Icon & Name */}
        <div 
          className="flex items-center space-x-2.5 cursor-pointer shrink-0"
          onClick={() => onViewChange('canvas')}
        >
          <div 
            className={`w-7 h-7 rounded-md flex items-center justify-center border transition-colors ${
              isDark 
                ? 'bg-neutral-800/90 border-neutral-700 text-neutral-100' 
                : 'bg-neutral-200/80 border-neutral-300 text-neutral-900'
            }`}
          >
            <Clock className="w-3.5 h-3.5" />
          </div>
          <span className="font-semibold text-base tracking-tight text-current">
            Timeline
          </span>
        </div>

        {/* Center: Search Input Bar with Autocomplete Popover */}
        <div ref={searchContainerRef} className="relative flex-1 max-w-md mx-2">
          <div 
            className={`flex items-center w-full rounded-lg border px-3 py-1.5 transition-all text-xs ${
              isDark 
                ? 'bg-[#222226] border-neutral-700/80 text-neutral-100 focus-within:border-neutral-500' 
                : 'bg-[#ffffff] border-[#e2ddd5] text-neutral-900 focus-within:border-neutral-500 shadow-xs'
            }`}
          >
            <Search className={`w-3.5 h-3.5 mr-2 shrink-0 ${isDark ? 'text-neutral-400' : 'text-neutral-500'}`} />
            <input
              type="text"
              placeholder="Buscar movimento, artista, período..."
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
                onClick={() => onSearchChange('')}
                className="p-0.5 rounded hover:opacity-75 transition-opacity"
              >
                <X className="w-3 h-3 text-neutral-400" />
              </button>
            )}
          </div>

          {/* Search Autocomplete Results Dropdown */}
          {isSearchFocused && searchResults.length > 0 && (
            <div 
              className={`absolute top-full left-0 right-0 mt-1.5 rounded-xl border shadow-xl overflow-hidden z-50 py-1 max-h-72 overflow-y-auto ${
                isDark 
                  ? 'bg-[#202024] border-neutral-700/90 text-neutral-100' 
                  : 'bg-[#ffffff] border-[#e2ddd5] text-neutral-900'
              }`}
            >
              {searchResults.map((m) => (
                <div
                  key={m.id}
                  onClick={() => handleSelectResult(m)}
                  className={`px-3 py-2 flex items-center justify-between cursor-pointer transition-colors text-xs ${
                    isDark ? 'hover:bg-neutral-800/80' : 'hover:bg-neutral-100'
                  }`}
                >
                  <div className="flex flex-col">
                    <span className="font-semibold text-current">{m.name}</span>
                    <span className={`text-[10px] ${isDark ? 'text-neutral-400' : 'text-neutral-500'}`}>
                      {m.keyArtists[0]?.name ? `${m.keyArtists[0].name} • ` : ''}{m.originRegion}
                    </span>
                  </div>
                  <span 
                    className={`text-[10px] font-mono px-1.5 py-0.5 rounded border ${
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

        {/* Right: View Dropdown & Monochromatic Theme Toggle */}
        <div className="flex items-center space-x-2 shrink-0">
          
          {/* View Style Dropdown */}
          <div ref={dropdownRef} className="relative">
            <button
              onClick={() => setIsDropdownOpen(prev => !prev)}
              className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg border text-xs font-medium transition-all ${
                isDark 
                  ? 'bg-[#222226] border-neutral-700/80 text-neutral-100 hover:border-neutral-500' 
                  : 'bg-[#ffffff] border-[#e2ddd5] text-neutral-900 hover:border-neutral-400 shadow-xs'
              }`}
            >
              <span>{currentViewLabel}</span>
              <ChevronDown className={`w-3.5 h-3.5 transition-transform duration-200 ${isDropdownOpen ? 'rotate-180' : ''}`} />
            </button>

            {isDropdownOpen && (
              <div 
                className={`absolute right-0 mt-1.5 w-40 rounded-xl border shadow-xl overflow-hidden z-50 py-1 ${
                  isDark 
                    ? 'bg-[#202024] border-neutral-700/90 text-neutral-100' 
                    : 'bg-[#ffffff] border-[#e2ddd5] text-neutral-900'
                }`}
              >
                <button
                  onClick={() => handleSelectView('canvas')}
                  className={`w-full text-left px-3 py-2 text-xs flex items-center justify-between transition-colors ${
                    currentView === 'canvas' 
                      ? (isDark ? 'bg-neutral-800 font-semibold' : 'bg-neutral-100 font-semibold') 
                      : (isDark ? 'hover:bg-neutral-800/60' : 'hover:bg-neutral-50')
                  }`}
                >
                  <span>Linha do Tempo</span>
                  {currentView === 'canvas' && (
                    <span className="w-1.5 h-1.5 rounded-full bg-current" />
                  )}
                </button>

                <button
                  onClick={() => handleSelectView('linear')}
                  className={`w-full text-left px-3 py-2 text-xs flex items-center justify-between transition-colors ${
                    currentView === 'linear' 
                      ? (isDark ? 'bg-neutral-800 font-semibold' : 'bg-neutral-100 font-semibold') 
                      : (isDark ? 'hover:bg-neutral-800/60' : 'hover:bg-neutral-50')
                  }`}
                >
                  <span>Canvas 2D</span>
                  {currentView === 'linear' && (
                    <span className="w-1.5 h-1.5 rounded-full bg-current" />
                  )}
                </button>
              </div>
            )}
          </div>

          {/* Monochromatic Dark/Light Theme Toggle */}
          <button
            onClick={onToggleTheme}
            className={`p-1.5 rounded-lg border transition-colors ${
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

      </div>
    </header>
  );
};
