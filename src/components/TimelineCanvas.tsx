import React, { useState, useRef, useEffect, useCallback, useMemo } from 'react';
import { Movement, Region, RegionalContextEntry, ContextCategory, CanvasTransform, ThemeMode } from '../types';
import { ERAS } from '../data/eras';
import { DINOSAURS, Dinosaur, DINOSAUR_ERAS } from '../data/dinosaurs';
import { DinosaurDetailDrawer } from './DinosaurDetailDrawer';
import { Minimap } from './Minimap';
import { CountryFlag } from './CountryFlag';
import { 
  Search,
  ZoomIn, 
  ZoomOut, 
  RotateCcw, 
  ChevronDown, 
  ChevronRight, 
  Layers
} from 'lucide-react';

interface TimelineCanvasProps {
  movements: Movement[];
  regions: Region[];
  regionalContexts: RegionalContextEntry[];
  selectedEra: string;
  selectedMovement?: Movement | null;
  onSelectMovement: (movement: Movement | null) => void;
  onSelectContext: (region: Region, entry: RegionalContextEntry, facetKey?: ContextCategory) => void;
  activeRegions: string[];
  activeCategories: ContextCategory[];
  theme?: ThemeMode;
  searchQuery?: string;
  onTriggerDinoMode?: () => void;
  isDrawerOpen?: boolean;
  sidebarWidth?: number;
}

export interface MovementWithLane extends Movement {
  lane: number;
  startX: number;
  endX: number;
  cardWidth: number;
}

export const formatCleanPeriod = (displayPeriod: string): string => {
  if (!displayPeriod) return '';
  return displayPeriod
    .replace(/\bc\.\s*/gi, '')
    .replace(/\bca\.\s*/gi, '')
    .replace(/\bcirca\s*/gi, '')
    .trim();
};

export const getCountryMovementYear = (movement: Movement, regionId: string): number => {
  const baseYear = movement.startYear;
  const mId = movement.id.toLowerCase();

  const variations: Record<string, Record<string, number>> = {
    barroco: {
      italia: 1600,
      espanha: 1615,
      franca: 1625,
      alemanha: 1648,
      inglaterra: 1666,
      brasil: 1695,
      japao: 1603
    },
    rococo: {
      franca: 1730,
      alemanha: 1740,
      italia: 1745,
      inglaterra: 1745,
      espanha: 1755,
      brasil: 1765
    },
    neoclassicismo: {
      italia: 1760,
      inglaterra: 1765,
      alemanha: 1768,
      franca: 1770,
      espanha: 1785,
      brasil: 1816
    },
    romantismo: {
      alemanha: 1780,
      inglaterra: 1785,
      franca: 1800,
      espanha: 1808,
      italia: 1815,
      brasil: 1836
    },
    realismo: {
      franca: 1840,
      inglaterra: 1848,
      alemanha: 1850,
      espanha: 1860,
      brasil: 1875
    },
    impressionismo: {
      franca: 1860,
      inglaterra: 1880,
      alemanha: 1888,
      espanha: 1890,
      brasil: 1895
    },
    renascimento: {
      italia: 1400,
      alemanha: 1485,
      franca: 1495,
      espanha: 1500,
      inglaterra: 1515,
      brasil: 1549
    },
    'arte-gotica': {
      franca: 1140,
      inglaterra: 1175,
      espanha: 1220,
      alemanha: 1248,
      italia: 1260
    },
    'arte-romanica': {
      franca: 1000,
      espanha: 1050,
      alemanha: 1060,
      inglaterra: 1066,
      italia: 1080
    },
    'arte-bizantina': {
      italia: 540,
      grecia: 330,
      egito: 395,
      russia: 988
    },
    'arte-grega': {
      grecia: -900,
      italia: -750,
      egito: -332,
      franca: -600
    },
    'arte-egipcia': {
      egito: -3100,
      grecia: -650,
      italia: -30
    },
    'arte-mesopotamica': {
      mesopotamia: -3500,
      egito: -2500,
      grecia: -1200
    },
    'arte-romana': {
      italia: -500,
      grecia: -146,
      franca: -121,
      espanha: -206,
      egito: -30,
      inglaterra: 43
    },
    fauvismo: {
      franca: 1905,
      alemanha: 1906,
      espanha: 1907,
      brasil: 1915
    },
    'expressionismo-abstrato': {
      eua: 1943,
      franca: 1948,
      inglaterra: 1950,
      brasil: 1951,
      japao: 1954
    },
    neoconcretismo: {
      brasil: 1959,
      italia: 1960,
      inglaterra: 1962,
      franca: 1964
    },
    'arte-urbana': {
      eua: 1970,
      franca: 1980,
      inglaterra: 1982,
      brasil: 1983,
      alemanha: 1984
    },
    modernismo: {
      franca: 1907,
      alemanha: 1905,
      italia: 1909,
      brasil: 1922
    },
    cubismo: {
      franca: 1907,
      espanha: 1908,
      alemanha: 1912,
      brasil: 1922
    },
    futurismo: {
      italia: 1909,
      franca: 1912,
      brasil: 1922
    },
    expressionismo: {
      alemanha: 1905,
      franca: 1908,
      brasil: 1917
    },
    surrealismo: {
      franca: 1924,
      espanha: 1926,
      inglaterra: 1936,
      brasil: 1930
    },
    'pop-art': {
      inglaterra: 1952,
      franca: 1960,
      brasil: 1964
    },
    'arte-digital': {
      franca: 1990,
      inglaterra: 1991,
      japao: 1992,
      brasil: 1995
    },
    'generative-ai': {
      inglaterra: 2015,
      japao: 2016,
      franca: 2017,
      brasil: 2019
    }
  };

  if (variations[mId]?.[regionId] !== undefined) {
    return variations[mId][regionId];
  }

  for (const [key, map] of Object.entries(variations)) {
    if (mId.includes(key) && map[regionId] !== undefined) {
      return map[regionId];
    }
  }

  return baseYear;
};

const generateSmoothVerticalSpline = (pts: { x: number; y: number }[]): string => {
  if (pts.length < 2) return '';
  let path = `M ${pts[0].x} ${pts[0].y}`;
  for (let i = 0; i < pts.length - 1; i++) {
    const p1 = pts[i];
    const p2 = pts[i + 1];
    const dy = p2.y - p1.y;
    const cp1x = p1.x;
    const cp1y = p1.y + dy * 0.5;
    const cp2x = p2.x;
    const cp2y = p1.y + dy * 0.5;
    path += ` C ${cp1x} ${cp1y}, ${cp2x} ${cp2y}, ${p2.x} ${p2.y}`;
  }
  return path;
};

export const TimelineCanvas: React.FC<TimelineCanvasProps> = ({
  movements,
  regions,
  regionalContexts,
  selectedEra,
  selectedMovement = null,
  onSelectMovement,
  onSelectContext,
  activeRegions,
  activeCategories,
  theme = 'dark',
  searchQuery = '',
  onTriggerDinoMode,
  isDrawerOpen = false,
  sidebarWidth = 480
}) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const isDark = theme === 'dark';

  const [viewportWidth, setViewportWidth] = useState<number>(() => 
    typeof window !== 'undefined' ? window.innerWidth : 1200
  );

  useEffect(() => {
    const updateWidth = () => {
      if (containerRef.current) {
        setViewportWidth(containerRef.current.clientWidth);
      } else if (typeof window !== 'undefined') {
        setViewportWidth(window.innerWidth);
      }
    };
    updateWidth();
    window.addEventListener('resize', updateWidth);
    return () => window.removeEventListener('resize', updateWidth);
  }, []);

  // Zoom baseline: 0.7 is the standard 100% baseline.
  // MIN_ZOOM allows deep zoom out so the entire timeline (antiquity to contemporary) fits in a single view
  const BASE_ZOOM = 0.7;
  const MIN_ZOOM = 0.07;
  const MAX_ZOOM = 2.0;

  // Transform State (Pan & Zoom)
  const [transform, setTransform] = useState<CanvasTransform>({
    x: -560,
    y: 0,
    zoom: BASE_ZOOM
  });

  const [isDragging, setIsDragging] = useState(false);
  const [isZoomControlsHovered, setIsZoomControlsHovered] = useState(false);
  const [isMinimapOpen, setIsMinimapOpen] = useState(false);
  const zoomTimerRef = useRef<number | null>(null);
  const [hoveredMovement, setHoveredMovement] = useState<MovementWithLane | null>(null);
  const [expandedRegions, setExpandedRegions] = useState<Record<string, boolean>>({
    brasil: true,
    italia: true
  });

  // Timeline Mode: 'art' (History of Art) or 'dinosaur' (Mesozoic Era)
  const [timelineMode, setTimelineMode] = useState<'art' | 'dinosaur'>(() => {
    return localStorage.getItem('cronos_timeline_mode') === 'dinosaur' ? 'dinosaur' : 'art';
  });
  const [selectedDino, setSelectedDino] = useState<Dinosaur | null>(null);
  const [hoveredDino, setHoveredDino] = useState<Dinosaur | null>(null);
  const [modeToast, setModeToast] = useState<{ show: boolean; text: string; icon: string } | null>(null);
  const panToYearRef = useRef<((year: number) => void) | null>(null);

  // Pull-and-Hold States:
  // - in 'art' mode: forcing past left boundary (Pre-history) triggers Dinosaur Mode
  // - in 'dinosaur' mode: forcing past right boundary (end of Cretaceous) triggers Art History Mode
  const [isHoldingAtLimit, setIsHoldingAtLimit] = useState<boolean>(false);
  const [holdDirection, setHoldDirection] = useState<'to-dinosaur' | 'to-art' | null>(null);
  const [holdProgress, setHoldProgress] = useState<number>(0);
  const holdIntervalRef = useRef<number | null>(null);
  const holdStartTimeRef = useRef<number>(0);

  // Inertia & Glide Physics Refs
  const inertiaRafRef = useRef<number | null>(null);
  const isDraggingRef = useRef<boolean>(false);
  const dragStartPosRef = useRef<{ x: number; y: number }>({ x: 0, y: 0 });
  const dragDistRef = useRef<number>(0);
  const historyRef = useRef<Array<{ x: number; y: number; time: number }>>([]);
  const velocityRef = useRef<{ vx: number; vy: number }>({ vx: 0, vy: 0 });

  const stopInertia = useCallback(() => {
    if (inertiaRafRef.current) {
      cancelAnimationFrame(inertiaRafRef.current);
      inertiaRafRef.current = null;
    }
  }, []);

  // Calculate year position mapped to canvas X coordinate:
  // - In 'dinosaur' mode: spans -252 Ma (200px) to -66 Ma (4200px)
  // - In 'art' mode: spans -40.000 (200px) to 2026 (9800px)
  const yearToX = useCallback((year: number) => {
    if (timelineMode === 'dinosaur') {
      if (year <= -201000000) {
        // Triássico (-252 Ma to -201 Ma) -> Maps to [200, 1400] (width: 1200)
        const ratio = Math.max(0, Math.min(1, (year - (-252000000)) / ((-201000000) - (-252000000))));
        return 200 + ratio * 1200;
      } else if (year <= -145000000) {
        // Jurássico (-201 Ma to -145 Ma) -> Maps to [1400, 2600] (width: 1200)
        const ratio = Math.max(0, Math.min(1, (year - (-201000000)) / ((-145000000) - (-201000000))));
        return 1400 + ratio * 1200;
      } else {
        // Cretáceo (-145 Ma to -66 Ma) -> Maps to [2600, 4200] (width: 1600)
        const ratio = Math.max(0, Math.min(1, (year - (-145000000)) / ((-66000000) - (-145000000))));
        return 2600 + ratio * 1600;
      }
    }

    // Art mode coordinates
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
    return x + 200;
  }, [timelineMode]);

  // Boundary constraints:
  // When zoomed out far, the entire timeline fits horizontally on the screen!
  // Center it gracefully or allow comfortable panning without sticking
  const getMaxAllowedX = useCallback((zoom: number) => {
    const totalW = timelineMode === 'dinosaur' ? 4200 : 9800;
    const scaled = totalW * zoom;
    if (scaled <= viewportWidth - 60) {
      return Math.max(60, (viewportWidth - scaled) / 2);
    }
    // Allow moving the timeline and country layers comfortably to the right so the left edge is fully visible
    return Math.max(60, 80 * zoom);
  }, [viewportWidth, timelineMode]);

  // Right limit constraint:
  // - In dinosaur mode: end of Cretáceo (4200px)
  // - In art mode: present 2026 (9800px)
  const getMinAllowedX = useCallback((zoom: number) => {
    const totalW = timelineMode === 'dinosaur' ? 4200 : 9800;
    const scaled = totalW * zoom;
    if (scaled <= viewportWidth - 60) {
      return Math.min(20, (viewportWidth - scaled) / 2 - 40);
    }
    return (viewportWidth - 120) - scaled;
  }, [viewportWidth, timelineMode]);

  // Hold Timer for switching between modes:
  // - 'to-dinosaur': triggered by forcing left at start of art timeline
  // - 'to-art': triggered by forcing right at end of dinosaur timeline
  const startHoldTimer = useCallback((direction: 'to-dinosaur' | 'to-art') => {
    if (holdIntervalRef.current) return;
    setIsHoldingAtLimit(true);
    setHoldDirection(direction);
    holdStartTimeRef.current = Date.now();

    holdIntervalRef.current = window.setInterval(() => {
      const elapsed = Date.now() - holdStartTimeRef.current;
      const pct = Math.min(100, (elapsed / 1800) * 100);
      setHoldProgress(pct);

      if (elapsed >= 1800) {
        if (holdIntervalRef.current) {
          clearInterval(holdIntervalRef.current);
          holdIntervalRef.current = null;
        }
        setIsHoldingAtLimit(false);
        setHoldProgress(0);
        setHoldDirection(null);
        isDraggingRef.current = false;
        setIsDragging(false);

        if (direction === 'to-dinosaur') {
          setTimelineMode('dinosaur');
          localStorage.setItem('cronos_timeline_mode', 'dinosaur');
          setTransform({ x: 60, y: -20, zoom: 0.85 });
          setModeToast({ show: true, text: 'Modo Dinossauros ativado! Explore o Mesozoico.', icon: '🦖' });
          setTimeout(() => setModeToast(null), 4500);
          onTriggerDinoMode?.();
        } else {
          setTimelineMode('art');
          localStorage.setItem('cronos_timeline_mode', 'art');
          setTransform({ x: 60, y: -20, zoom: 0.85 });
          setModeToast({ show: true, text: 'Modo História da Arte restaurado!', icon: '🎨' });
          setTimeout(() => setModeToast(null), 4500);
        }
      }
    }, 25);
  }, [onTriggerDinoMode]);

  const cancelHoldTimer = useCallback(() => {
    if (holdIntervalRef.current) {
      clearInterval(holdIntervalRef.current);
      holdIntervalRef.current = null;
    }
    setIsHoldingAtLimit(false);
    setHoldProgress(0);
    setHoldDirection(null);
  }, []);

  useEffect(() => {
    return () => {
      if (holdIntervalRef.current) {
        clearInterval(holdIntervalRef.current);
      }
    };
  }, []);

  // Calculate vertical lanes so overlapping art movements stack vertically into separate rows
  const movementLanes = useMemo(() => {
    const sorted = [...movements].sort((a, b) => a.startYear - b.startYear || a.endYear - b.endYear);
    const laneEndPositions: number[] = [];
    const minSpacingPx = 16;

    const positioned: MovementWithLane[] = sorted.map((m) => {
      const startX = yearToX(m.startYear);
      const endX = yearToX(m.endYear);
      const rawWidth = Math.max(0, endX - startX);
      const cardWidth = Math.max(175, rawWidth);
      const cardRight = startX + cardWidth;

      let targetLane = -1;
      for (let i = 0; i < laneEndPositions.length; i++) {
        if (laneEndPositions[i] + minSpacingPx <= startX) {
          targetLane = i;
          laneEndPositions[i] = cardRight;
          break;
        }
      }

      if (targetLane === -1) {
        targetLane = laneEndPositions.length;
        laneEndPositions.push(cardRight);
      }

      return {
        ...m,
        lane: targetLane,
        startX,
        endX,
        cardWidth
      };
    });

    return {
      positionedMovements: positioned,
      totalLanes: Math.max(1, laneEndPositions.length)
    };
  }, [movements, yearToX]);

  // Selected movement positioned in lanes for persistent hover line & country connection
  const selectedMovementWithLane = useMemo(() => {
    if (!selectedMovement) return null;
    return movementLanes.positionedMovements.find(m => m.id === selectedMovement.id) || null;
  }, [selectedMovement, movementLanes.positionedMovements]);

  // Calculate vertical lanes for Dinosaurs in prehistoric deep-time section
  const dinosaurLanes = useMemo(() => {
    const sorted = [...DINOSAURS].sort((a, b) => a.startYear - b.startYear || a.endYear - b.endYear);
    const laneEndPositions: number[] = [];
    const minSpacingPx = 16;

    const positioned = sorted.map((d) => {
      const startX = yearToX(d.startYear);
      const endX = yearToX(d.endYear);
      const rawWidth = Math.max(0, endX - startX);
      const cardWidth = Math.max(185, Math.min(280, rawWidth));
      const cardRight = startX + cardWidth;

      let targetLane = -1;
      for (let i = 0; i < laneEndPositions.length; i++) {
        if (laneEndPositions[i] + minSpacingPx <= startX) {
          targetLane = i;
          laneEndPositions[i] = cardRight;
          break;
        }
      }

      if (targetLane === -1) {
        targetLane = laneEndPositions.length;
        laneEndPositions.push(cardRight);
      }

      return {
        ...d,
        lane: targetLane,
        startX,
        endX,
        cardWidth
      };
    });

    return {
      positionedDinosaurs: positioned,
      totalLanes: Math.max(1, laneEndPositions.length)
    };
  }, [yearToX]);

  const cardHeight = 135;
  const laneGap = 16;
  const maxLanes = Math.max(movementLanes.totalLanes, dinosaurLanes.totalLanes);
  const movementTrackHeight = Math.max(280, maxLanes * (cardHeight + laneGap) + 30);

  // Filter active regions
  const visibleRegions = useMemo(() => 
    regions.filter(r => activeRegions.includes(r.id)), 
    [regions, activeRegions]
  );

  // Vertical Y Boundary Constraints
  // Upper limit: user can pan comfortably downwards to view the top cards without sticking
  const getMaxAllowedY = useCallback(() => {
    return 120; // Generous upper breathing room so user never gets stopped abruptly
  }, []);

  // Lower limit: user can scroll all the way through all country tracks and back up smoothly
  const getMinAllowedY = useCallback((zoom: number) => {
    const containerHeight = containerRef.current?.clientHeight || 800;
    // In dinosaur mode, there are no country context tracks, so height is neatly compact
    const contextTracksHeight = timelineMode === 'dinosaur' ? 0 : (visibleRegions.length * 240);
    const totalContentHeight = 75 + movementTrackHeight + 24 + contextTracksHeight + 400;
    const scaledHeight = totalContentHeight * zoom;
    return Math.min(-200, containerHeight - scaledHeight - 120);
  }, [visibleRegions.length, movementTrackHeight, timelineMode]);

  // Helper to extract regional context summary at a specific year
  const getCountryStatusAtYear = useCallback((regionId: string, year: number) => {
    const match = regionalContexts.find(
      rc => rc.regionId === regionId && year >= rc.startYear && year <= rc.endYear
    );
    if (match) {
      return match.facets.arte || match.periodName || 'Contexto da época';
    }
    return 'Desenvolvimento histórico e artístico regional';
  }, [regionalContexts]);

  // Start smooth physics glide animation on release
  const startGlide = useCallback(() => {
    stopInertia();
    let vx = velocityRef.current.vx;
    let vy = velocityRef.current.vy;
    const friction = 0.945; // Smooth deceleration coefficient

    const step = () => {
      if (Math.abs(vx) < 0.08 && Math.abs(vy) < 0.08) {
        stopInertia();
        return;
      }

      setTransform(prev => {
        const nextX = prev.x + vx;
        const nextY = prev.y + vy;
        const maxAllowedX = getMaxAllowedX(prev.zoom);
        const minAllowedX = getMinAllowedX(prev.zoom);
        const maxAllowedY = getMaxAllowedY();
        const minAllowedY = getMinAllowedY(prev.zoom);

        let finalX = nextX;
        let finalY = nextY;

        if (nextX >= maxAllowedX) {
          vx = 0;
          finalX = maxAllowedX;
        } else if (nextX <= minAllowedX) {
          vx = 0;
          finalX = minAllowedX;
        }

        if (nextY >= maxAllowedY) {
          vy = 0;
          finalY = maxAllowedY;
        } else if (nextY <= minAllowedY) {
          vy = 0;
          finalY = minAllowedY;
        }

        return {
          ...prev,
          x: finalX,
          y: finalY
        };
      });

      vx *= friction;
      vy *= friction;
      inertiaRafRef.current = requestAnimationFrame(step);
    };

    inertiaRafRef.current = requestAnimationFrame(step);
  }, [stopInertia, getMaxAllowedX, getMinAllowedX, getMaxAllowedY, getMinAllowedY]);

  // Handle Drag Start
  const handleDragStart = useCallback((clientX: number, clientY: number) => {
    stopInertia();
    isDraggingRef.current = true;
    setIsDragging(true);
    dragDistRef.current = 0;
    dragStartPosRef.current = { x: clientX - transform.x, y: clientY - transform.y };
    velocityRef.current = { vx: 0, vy: 0 };
    historyRef.current = [{ x: clientX, y: clientY, time: performance.now() }];
  }, [stopInertia, transform.x, transform.y]);

  // Handle Drag Move
  const handleDragMove = useCallback((clientX: number, clientY: number) => {
    if (!isDraggingRef.current) return;
    const now = performance.now();
    const history = historyRef.current;
    history.push({ x: clientX, y: clientY, time: now });

    // Keep history window to the last 90ms for instant velocity detection
    while (history.length > 1 && now - history[0].time > 90) {
      history.shift();
    }

    const rawNewX = clientX - dragStartPosRef.current.x;
    const rawNewY = clientY - dragStartPosRef.current.y;
    const maxAllowedX = getMaxAllowedX(transform.zoom);
    const minAllowedX = getMinAllowedX(transform.zoom);
    const maxAllowedY = getMaxAllowedY();
    const minAllowedY = getMinAllowedY(transform.zoom);

    // Lateral overscroll elastic pull at boundaries
    let newX = rawNewX;
    if (rawNewX > maxAllowedX) {
      const overX = rawNewX - maxAllowedX;
      // Pull gentle elastic resistance
      newX = maxAllowedX + Math.min(45, Math.pow(overX, 0.72));
      if (timelineMode === 'art') {
        startHoldTimer('to-dinosaur');
      } else {
        cancelHoldTimer();
      }
    } else if (rawNewX < minAllowedX) {
      const underX = minAllowedX - rawNewX;
      newX = minAllowedX - Math.min(45, Math.pow(underX, 0.72));
      if (timelineMode === 'dinosaur') {
        startHoldTimer('to-art');
      } else {
        cancelHoldTimer();
      }
    } else {
      cancelHoldTimer();
      newX = rawNewX;
    }

    // Vertical Y clamp with pleasant elastic folga at boundary (user can gently pull up, and it will recoil back)
    let newY = rawNewY;
    if (rawNewY > maxAllowedY) {
      const overY = rawNewY - maxAllowedY;
      newY = maxAllowedY + Math.min(65, Math.pow(overY, 0.74));
    } else if (rawNewY < minAllowedY) {
      const underY = minAllowedY - rawNewY;
      newY = minAllowedY - Math.min(45, Math.pow(underY, 0.74));
    }

    const dx = newX - transform.x;
    const dy = newY - transform.y;
    dragDistRef.current += Math.hypot(dx, dy);

    setTransform(prev => ({
      ...prev,
      x: newX,
      y: newY
    }));
  }, [transform.x, transform.y, transform.zoom, getMaxAllowedX, getMinAllowedX, getMaxAllowedY, getMinAllowedY, startHoldTimer, cancelHoldTimer, timelineMode]);

  // Handle Drag End with automatic spring recoil if pulled beyond boundaries
  const handleDragEnd = useCallback(() => {
    if (!isDraggingRef.current) return;
    isDraggingRef.current = false;
    setIsDragging(false);

    cancelHoldTimer();

    const maxAllowedX = getMaxAllowedX(transform.zoom);
    const minAllowedX = getMinAllowedX(transform.zoom);
    const maxAllowedY = getMaxAllowedY();
    const minAllowedY = getMinAllowedY(transform.zoom);

    // Smooth automatic recoil back if pulled into the elastic zone (horizontally or vertically)
    const isOutOfBoundsX = transform.x > maxAllowedX || transform.x < minAllowedX;
    const isOutOfBoundsY = transform.y > maxAllowedY || transform.y < minAllowedY;

    if (isOutOfBoundsX || isOutOfBoundsY) {
      const targetX = Math.min(maxAllowedX, Math.max(minAllowedX, transform.x));
      const targetY = Math.min(maxAllowedY, Math.max(minAllowedY, transform.y));
      const startX = transform.x;
      const startY = transform.y;
      const startTime = performance.now();
      const recoilDuration = 320;

      const animateRecoil = (now: number) => {
        const elapsed = now - startTime;
        const progress = Math.min(1, elapsed / recoilDuration);
        const ease = 1 - Math.pow(1 - progress, 3);
        setTransform(prev => ({
          ...prev,
          x: startX + (targetX - startX) * ease,
          y: startY + (targetY - startY) * ease
        }));
        if (progress < 1) {
          inertiaRafRef.current = requestAnimationFrame(animateRecoil);
        }
      };

      inertiaRafRef.current = requestAnimationFrame(animateRecoil);
      return;
    }

    const history = historyRef.current;
    if (history.length >= 2) {
      const oldest = history[0];
      const newest = history[history.length - 1];
      const dt = Math.max(1, newest.time - oldest.time);
      const now = performance.now();

      // Only apply inertia if gesture wasn't paused right before release
      if (now - newest.time < 80) {
        const rawVx = ((newest.x - oldest.x) / dt) * 16;
        const rawVy = ((newest.y - oldest.y) / dt) * 16;

        let effectiveVx = rawVx * 1.2;
        let effectiveVy = rawVy * 1.2;
        if (transform.x >= maxAllowedX - 2 && effectiveVx > 0) {
          effectiveVx = 0;
        }
        if (transform.x <= minAllowedX + 2 && effectiveVx < 0) {
          effectiveVx = 0;
        }
        if (transform.y >= maxAllowedY - 2 && effectiveVy > 0) {
          effectiveVy = 0;
        }
        if (transform.y <= minAllowedY + 2 && effectiveVy < 0) {
          effectiveVy = 0;
        }

        // Velocity clamp to ensure pleasant and controlled glide
        const maxVelocity = 48;
        velocityRef.current = {
          vx: Math.max(-maxVelocity, Math.min(maxVelocity, effectiveVx)),
          vy: Math.max(-maxVelocity, Math.min(maxVelocity, effectiveVy))
        };

        if (Math.abs(velocityRef.current.vx) > 0.4 || Math.abs(velocityRef.current.vy) > 0.4) {
          startGlide();
        }
      } else {
        velocityRef.current = { vx: 0, vy: 0 };
      }
    }
  }, [startGlide, cancelHoldTimer, getMaxAllowedX, getMinAllowedX, getMaxAllowedY, getMinAllowedY, transform.x, transform.y, transform.zoom]);

  // Mouse Listeners
  const handleMouseDown = (e: React.MouseEvent) => {
    if ((e.target as HTMLElement).closest('button, select, input')) return;
    handleDragStart(e.clientX, e.clientY);
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    handleDragMove(e.clientX, e.clientY);
  };

  const handleMouseUp = () => {
    handleDragEnd();
  };

  // Touch Listeners (Mobile & Touchpad swipe)
  const handleTouchStart = (e: React.TouchEvent) => {
    if (e.touches.length === 1) {
      handleDragStart(e.touches[0].clientX, e.touches[0].clientY);
    }
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    if (e.touches.length === 1) {
      handleDragMove(e.touches[0].clientX, e.touches[0].clientY);
    }
  };

  const handleTouchEnd = () => {
    handleDragEnd();
  };

  // Trackpad 2D Navigation & Smooth Wheel
  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const handleWheelNative = (e: WheelEvent) => {
      e.preventDefault();
      stopInertia();

      // Trackpad pinch zoom or Ctrl + Wheel zoom
      if (e.ctrlKey) {
        const zoomFactor = e.deltaY < 0 ? 1.08 : 0.92;
        setTransform(prev => {
          const newZoom = Math.max(MIN_ZOOM, Math.min(MAX_ZOOM, prev.zoom * zoomFactor));
          const rect = container.getBoundingClientRect();
          const mouseX = e.clientX - rect.left;
          const mouseY = e.clientY - rect.top;
          const unconstrainedX = mouseX - (mouseX - prev.x) * (newZoom / prev.zoom);
          const unconstrainedY = mouseY - (mouseY - prev.y) * (newZoom / prev.zoom);
          const maxAllowedX = getMaxAllowedX(newZoom);
          const minAllowedX = getMinAllowedX(newZoom);
          const maxAllowedY = getMaxAllowedY();
          const minAllowedY = getMinAllowedY(newZoom);
          const newX = Math.min(maxAllowedX, Math.max(minAllowedX, unconstrainedX));
          const newY = Math.min(maxAllowedY, Math.max(minAllowedY, unconstrainedY));
          return { x: newX, y: newY, zoom: newZoom };
        });
      } else {
        // Trackpad 2D pan: deltaX for horizontal glide, deltaY for vertical
        const dx = e.deltaX !== 0 ? e.deltaX : (e.shiftKey ? e.deltaY : 0);
        const dy = e.deltaX !== 0 ? e.deltaY : (e.shiftKey ? 0 : e.deltaY);

        setTransform(prev => {
          const maxAllowedX = getMaxAllowedX(prev.zoom);
          const minAllowedX = getMinAllowedX(prev.zoom);
          const maxAllowedY = getMaxAllowedY();
          const minAllowedY = getMinAllowedY(prev.zoom);

          const rawNextX = prev.x - dx;
          const rawNextY = prev.y - dy;

          const nextX = Math.min(maxAllowedX, Math.max(minAllowedX, rawNextX));
          const nextY = Math.min(maxAllowedY, Math.max(minAllowedY, rawNextY));

          if (rawNextX >= maxAllowedX) {
            startHoldTimer();
          } else if (rawNextX < maxAllowedX - 15) {
            cancelHoldTimer();
          }

          return {
            ...prev,
            x: nextX,
            y: nextY
          };
        });
      }
    };

    container.addEventListener('wheel', handleWheelNative, { passive: false });
    return () => {
      container.removeEventListener('wheel', handleWheelNative);
    };
  }, [stopInertia, getMaxAllowedX, getMinAllowedX, getMaxAllowedY, getMinAllowedY, startHoldTimer, cancelHoldTimer]);

  // Clean up RAF on unmount
  useEffect(() => {
    return () => stopInertia();
  }, [stopInertia]);

  // Center on era if selected
  useEffect(() => {
    if (selectedEra && selectedEra !== 'all') {
      const eraObj = ERAS.find(e => e.id === selectedEra);
      if (eraObj) {
        const targetX = yearToX(eraObj.startYear);
        const containerWidth = containerRef.current?.clientWidth || 1000;
        const rawTargetX = -(targetX * 1.1) + containerWidth / 3;
        const maxAllowedX = getMaxAllowedX(1.1);
        const minAllowedX = getMinAllowedX(1.1);
        const clampedX = Math.min(maxAllowedX, Math.max(minAllowedX, rawTargetX));
        setTransform(prev => ({
          ...prev,
          x: clampedX,
          zoom: 1.1
        }));
      }
    }
  }, [selectedEra, yearToX, getMaxAllowedX, getMinAllowedX]);

  const toggleRegionExpand = (regionId: string) => {
    setExpandedRegions(prev => ({
      ...prev,
      [regionId]: !prev[regionId]
    }));
  };

  const panToYear = useCallback((year: number) => {
    stopInertia();
    if (year < -40000 && timelineMode !== 'dinosaur') {
      setTimelineMode('dinosaur');
      localStorage.setItem('cronos_timeline_mode', 'dinosaur');
    } else if (year >= -40000 && timelineMode === 'dinosaur') {
      setTimelineMode('art');
      localStorage.setItem('cronos_timeline_mode', 'art');
    }
    const targetX = yearToX(year);
    const containerWidth = containerRef.current?.clientWidth || 1000;
    const rawTargetXPosition = -(targetX * transform.zoom) + containerWidth / 3;
    const maxAllowedX = getMaxAllowedX(transform.zoom);
    const minAllowedX = getMinAllowedX(transform.zoom);
    const targetXPosition = Math.min(maxAllowedX, Math.max(minAllowedX, rawTargetXPosition));

    // Smooth ease-out pan transition
    const startX = transform.x;
    const diff = targetXPosition - startX;
    const startTime = performance.now();
    const duration = 550;

    const animateStep = (now: number) => {
      const progress = Math.min(1, (now - startTime) / duration);
      const ease = 1 - Math.pow(1 - progress, 3);
      setTransform(prev => ({
        ...prev,
        x: startX + diff * ease
      }));
      if (progress < 1) {
        inertiaRafRef.current = requestAnimationFrame(animateStep);
      }
    };
    inertiaRafRef.current = requestAnimationFrame(animateStep);
  }, [stopInertia, timelineMode, yearToX, transform.zoom, transform.x, getMaxAllowedX, getMinAllowedX]);

  useEffect(() => {
    panToYearRef.current = panToYear;
  }, [panToYear]);

  const handleSetTransformX = useCallback((newX: number) => {
    stopInertia();
    const maxAllowedX = getMaxAllowedX(transform.zoom);
    const minAllowedX = getMinAllowedX(transform.zoom);
    setTransform(prev => ({
      ...prev,
      x: Math.min(maxAllowedX, Math.max(minAllowedX, newX))
    }));
  }, [stopInertia, getMaxAllowedX, getMinAllowedX, transform.zoom]);

  // Smooth hover open and graceful delayed close for zoom controls
  const handleZoomMouseEnter = useCallback(() => {
    if (zoomTimerRef.current) {
      clearTimeout(zoomTimerRef.current);
      zoomTimerRef.current = null;
    }
    setIsZoomControlsHovered(true);
  }, []);

  const handleZoomMouseLeave = useCallback(() => {
    if (zoomTimerRef.current) {
      clearTimeout(zoomTimerRef.current);
    }
    zoomTimerRef.current = window.setTimeout(() => {
      setIsZoomControlsHovered(false);
      zoomTimerRef.current = null;
    }, 1200);
  }, []);

  const handleZoomIn = useCallback((e?: React.MouseEvent) => {
    e?.stopPropagation();
    stopInertia();
    setTransform(prev => {
      const newZoom = Math.min(MAX_ZOOM, prev.zoom * 1.25);
      const maxAllowedX = getMaxAllowedX(newZoom);
      const minAllowedX = getMinAllowedX(newZoom);
      const maxAllowedY = getMaxAllowedY();
      const minAllowedY = getMinAllowedY(newZoom);
      return {
        ...prev,
        x: Math.min(maxAllowedX, Math.max(minAllowedX, prev.x)),
        y: Math.min(maxAllowedY, Math.max(minAllowedY, prev.y)),
        zoom: newZoom
      };
    });
  }, [stopInertia, getMaxAllowedX, getMinAllowedX, getMaxAllowedY, getMinAllowedY, MAX_ZOOM]);

  const handleZoomOut = useCallback((e?: React.MouseEvent) => {
    e?.stopPropagation();
    stopInertia();
    setTransform(prev => {
      const newZoom = Math.max(MIN_ZOOM, prev.zoom / 1.25);
      const maxAllowedX = getMaxAllowedX(newZoom);
      const minAllowedX = getMinAllowedX(newZoom);
      const maxAllowedY = getMaxAllowedY();
      const minAllowedY = getMinAllowedY(newZoom);
      return {
        ...prev,
        x: Math.min(maxAllowedX, Math.max(minAllowedX, prev.x)),
        y: Math.min(maxAllowedY, Math.max(minAllowedY, prev.y)),
        zoom: newZoom
      };
    });
  }, [stopInertia, getMaxAllowedX, getMinAllowedX, getMaxAllowedY, getMinAllowedY, MIN_ZOOM]);

  const handleResetZoom = useCallback((e?: React.MouseEvent) => {
    e?.stopPropagation();
    stopInertia();
    setTransform({ x: -560, y: 0, zoom: BASE_ZOOM });
  }, [stopInertia, BASE_ZOOM]);

  useEffect(() => {
    return () => {
      if (zoomTimerRef.current) {
        clearTimeout(zoomTimerRef.current);
      }
    };
  }, []);

  const handleCardClick = (m: Movement) => {
    // Prevent accidental click when swiping/gliding
    if (dragDistRef.current > 6) return;
    if (selectedMovement?.id === m.id) {
      onSelectMovement(null);
    } else {
      onSelectMovement(m);
    }
  };

  // Calculate coordinates in screen space for the connection line
  // bridging the sticky year ruler to card top-center, and from card bottom-center down to country layers
  const curveData = useMemo(() => {
    const activeMov = hoveredMovement || selectedMovementWithLane;
    if (!activeMov) return null;

    // Movement card center and top/bottom edges in canvas coordinates:
    const trackContentTop = 75 + 8 + 8;
    const cardTop = trackContentTop + (activeMov.lane * (cardHeight + laneGap) + 12);
    const cardBottom = cardTop + cardHeight;
    const cardLocalCenterX = activeMov.startX + (activeMov.cardWidth / 2);

    // Convert to screen coordinates:
    const cardScreenCenterX = transform.x + cardLocalCenterX * transform.zoom;
    const cardScreenTopY = transform.y + cardTop * transform.zoom;
    const cardScreenBottomY = transform.y + cardBottom * transform.zoom;

    // Ruler start year in screen coordinates:
    const rulerScreenX = transform.x + yearToX(activeMov.startYear) * transform.zoom;
    const rulerBottomY = 72; // exact bottom border of the sticky ruler bar

    // Regional country points in screen coordinates:
    const trackBottom = trackContentTop + movementTrackHeight + 8;
    const regionListTop = trackBottom + 12 + 24;
    const regionRowStep = 186;
    const regionTrackCenterOffset = 96;

    // Segment 1 (Upper): from ruler bottom edge down to the top-center edge of the card (in screen coordinates)
    const upperPoints: Array<{ x: number; y: number }> = [
      { x: rulerScreenX, y: rulerBottomY },
      { x: cardScreenCenterX, y: cardScreenTopY }
    ];
    const upperPathD = generateSmoothVerticalSpline(upperPoints);

    // Segment 2 (Lower): starts from bottom-center of card down into country layers (in local canvas coordinates)
    // Rendering in local coordinates inside the canvas container allows it to pass BEHIND movement cards (z-30)
    // while passing ABOVE country context tracks (z-10)
    const localLowerPoints: Array<{ x: number; y: number }> = [
      { x: cardLocalCenterX, y: cardBottom }
    ];

    const countryNodes: Array<{
      regionId: string;
      regionName: string;
      year: number;
      yearFormatted: string;
      localX: number;
      localY: number;
      status: string;
    }> = [];

    visibleRegions.forEach((region, idx) => {
      const countryYear = getCountryMovementYear(activeMov, region.id);
      const countryLocalX = yearToX(countryYear);
      const countryLocalY = regionListTop + idx * regionRowStep + regionTrackCenterOffset;

      localLowerPoints.push({ x: countryLocalX, y: countryLocalY });

      const yearFormatted = countryYear < 0 
        ? `${Math.abs(countryYear)} a.C.` 
        : `${countryYear} d.C.`;

      countryNodes.push({
        regionId: region.id,
        regionName: region.name,
        year: countryYear,
        yearFormatted,
        localX: countryLocalX,
        localY: countryLocalY,
        status: getCountryStatusAtYear(region.id, countryYear)
      });
    });

    const localLowerPathD = localLowerPoints.length >= 2 ? generateSmoothVerticalSpline(localLowerPoints) : '';

    return {
      rulerScreenX,
      rulerBottomY,
      cardScreenCenterX,
      cardScreenTopY,
      cardLocalCenterX,
      cardBottom,
      upperPathD,
      localLowerPathD,
      countryNodes
    };
  }, [hoveredMovement, selectedMovementWithLane, visibleRegions, yearToX, cardHeight, laneGap, movementTrackHeight, getCountryStatusAtYear, transform.x, transform.y, transform.zoom]);

  // Active ruler years including illuminated hover start year if not already present
  const activeRulerYears = useMemo(() => {
    if (timelineMode === 'dinosaur') {
      const base = [-252000000, -201000000, -145000000, -66000000];
      if (hoveredDino && !base.includes(hoveredDino.startYear)) {
        return [...base, hoveredDino.startYear].sort((a, b) => a - b);
      }
      return base;
    }

    const base = [-40000, -25000, -10000, -5000, -3000, -1000, 0, 500, 1000, 1400, 1500, 1600, 1700, 1780, 1850, 1900, 1920, 1945, 1970, 2000, 2026];
    const targetMov = hoveredMovement || selectedMovement;
    if (targetMov && !base.includes(targetMov.startYear)) {
      return [...base, targetMov.startYear].sort((a, b) => a - b);
    }
    return base;
  }, [timelineMode, hoveredMovement, selectedMovement, hoveredDino]);

  // Active Eras Row: Dinosaur Eras or Art History Eras based on current mode
  const displayedEras = useMemo(() => {
    return timelineMode === 'dinosaur' ? DINOSAUR_ERAS : ERAS;
  }, [timelineMode]);

  // Filter movements if search query is active
  const queryLower = searchQuery.toLowerCase().trim();
  const isHighlighted = (m: Movement) => {
    if (!queryLower) return true;
    return (
      m.name.toLowerCase().includes(queryLower) ||
      m.displayPeriod.toLowerCase().includes(queryLower) ||
      m.keyArtists.some(a => a.name.toLowerCase().includes(queryLower)) ||
      m.tags.some(t => t.toLowerCase().includes(queryLower))
    );
  };

  return (
    <div 
      ref={containerRef}
      className={`relative w-full h-full overflow-hidden select-none transition-colors duration-200 ${
        isDark ? 'bg-[#18181b]' : 'bg-[#fbf9f5]'
      } ${isDragging ? 'cursor-grabbing' : 'cursor-grab'}`}
      onMouseDown={handleMouseDown}
      onMouseMove={handleMouseMove}
      onMouseUp={handleMouseUp}
      onMouseLeave={handleMouseUp}
      onTouchStart={handleTouchStart}
      onTouchMove={handleTouchMove}
      onTouchEnd={handleTouchEnd}
    >
      {/* Background Subtle Monochromatic Grid */}
      <div 
        className={`absolute inset-0 pointer-events-none transition-opacity ${
          isDark ? 'opacity-[0.06]' : 'opacity-[0.05]'
        }`}
        style={{
          backgroundImage: `radial-gradient(circle, ${isDark ? '#e4e4e7' : '#27272a'} 1px, transparent 1px)`,
          backgroundSize: `${28 * transform.zoom}px ${28 * transform.zoom}px`,
          backgroundPosition: `${transform.x}px ${transform.y}px`
        }}
      />

      {/* =========================================================== */}
      {/* STICKY TIMELINE YEAR RULER (FIXED ON SCREEN TOP)            */}
      {/* =========================================================== */}
      <div 
        style={{ zIndex: 50 }}
        className={`absolute top-0 left-0 right-0 shadow-md py-2 overflow-hidden pointer-events-auto border-b backdrop-blur-md select-none ${
          isDark 
            ? 'bg-[#18181b]/95 border-neutral-800/90 text-neutral-200' 
            : 'bg-[#faf8f5]/95 border-[#e5e0d8] text-neutral-800'
        }`}
        title="Barra de Anos • Linha cronológica interativa. Role ou arraste horizontalmente para navegar no tempo."
      >
        {/* Subtle Pull-To-Refresh Mini Loading Icon at the limits of the ruler bar */}
        {holdProgress > 0 && (
          <div 
            className="absolute z-50 pointer-events-none transition-all duration-75 flex items-center gap-2"
            style={
              holdDirection === 'to-art'
                ? { right: '24px', top: '50%', transform: 'translateY(-50%)' }
                : { left: `${Math.max(16, transform.x + yearToX(-40000) * transform.zoom - 20)}px`, top: '50%', transform: 'translateY(-50%)' }
            }
          >
            <div className={`w-7 h-7 rounded-full p-1 shadow-md border flex items-center justify-center backdrop-blur-md ${
              isDark 
                ? 'bg-neutral-900/95 border-amber-500/80 text-amber-400' 
                : 'bg-white/95 border-amber-500 text-amber-500'
            }`}>
              <svg className="w-5 h-5 -rotate-90" viewBox="0 0 24 24">
                <circle
                  cx="12"
                  cy="12"
                  r="8.5"
                  className={isDark ? "stroke-neutral-800" : "stroke-neutral-200"}
                  strokeWidth="2.5"
                  fill="none"
                />
                <circle
                  cx="12"
                  cy="12"
                  r="8.5"
                  className="stroke-amber-500 transition-all duration-75"
                  strokeWidth="2.5"
                  strokeDasharray={53.4}
                  strokeDashoffset={53.4 - (53.4 * holdProgress) / 100}
                  strokeLinecap="round"
                  fill="none"
                />
              </svg>
            </div>
            <span className={`text-[11px] font-medium font-mono px-2 py-0.5 rounded shadow-sm border backdrop-blur-md ${
              isDark ? 'bg-neutral-900/90 text-amber-300 border-amber-800/80' : 'bg-white/90 text-amber-800 border-amber-300'
            }`}>
              {holdDirection === 'to-dinosaur' 
                ? 'Segure 2s para entrar no Modo Dinossauro...'
                : 'Segure 2s para voltar à História da Arte...'}
            </span>
          </div>
        )}

        <div 
          className="origin-top-left whitespace-nowrap will-change-transform"
          style={{
            transform: `translate3d(${transform.x}px, 0, 0)`,
            width: '32000px'
          }}
        >
          {/* Era Banners Row Synchronized with Zoom and Pan */}
          <div className="relative h-8 w-full">
            {displayedEras.map((era) => {
              const startX = yearToX(era.startYear) * transform.zoom;
              const endX = yearToX(era.endYear) * transform.zoom;
              const width = Math.max(90, endX - startX);
              const isDinoEra = timelineMode === 'dinosaur';
              return (
                <div
                  key={era.id}
                  onClick={() => panToYear(era.startYear)}
                  className={`absolute top-0 h-7 rounded-md border px-2 py-0.5 flex items-center justify-between text-[11px] font-medium cursor-pointer transition-colors shadow-xs ${
                    isDinoEra
                      ? (isDark 
                          ? 'bg-amber-950/60 border-amber-800/80 text-amber-200 hover:bg-amber-900/60' 
                          : 'bg-amber-100/90 border-amber-300 text-amber-900 hover:bg-amber-200/90')
                      : (isDark 
                          ? 'bg-neutral-800/80 border-neutral-700/70 text-neutral-200 hover:bg-neutral-700/80' 
                          : 'bg-[#ede8df] border-[#ded8cc] text-neutral-800 hover:bg-[#e4ded4]')
                  }`}
                  style={{
                    left: `${startX}px`,
                    width: `${width - 4}px`
                  }}
                  title={`Grande Período: ${era.name} (${era.displayYears}) • Clique para posicionar a linha do tempo neste período`}
                >
                  <span className="truncate pr-1 tracking-normal" title={era.name}>
                    {isDinoEra ? '🦕 ' : ''}
                    {era.name}
                  </span>
                  <span 
                    className={`text-[10px] font-mono shrink-0 ml-1.5 ${
                      isDinoEra
                        ? (isDark ? 'text-amber-400' : 'text-amber-700')
                        : (isDark ? 'text-neutral-400' : 'text-neutral-500')
                    }`}
                    title={`Anos do período: ${era.displayYears} • Clique para navegar`}
                  >
                    {era.displayYears}
                  </span>
                </div>
              );
            })}
          </div>

          {/* Chronological Year Markers Synchronized with Zoom and Pan */}
          <div 
            className={`relative h-6 w-full font-mono text-[10px] border-t pt-0.5 ${
              isDark ? 'border-neutral-800 text-neutral-400' : 'border-[#e5e0d8] text-neutral-600'
            }`}
          >
            {/* Year 0 Red Indicator Line in Sticky Ruler (centered, only in art mode) */}
            {timelineMode === 'art' && (
              <div
                className="absolute top-0 bottom-0 -translate-x-1/2 flex flex-col items-center justify-center pointer-events-none z-30"
                style={{ left: `${yearToX(0) * transform.zoom}px` }}
                title="Ano 0 • Marco divisor histórico universal entre a.C. e d.C."
              >
                <div className="w-1.5 h-full bg-red-500 shadow-[0_0_12px_rgba(239,68,68,1)]" />
                <span className="px-2 py-0.5 rounded-full text-[9px] font-mono font-black bg-red-600 text-white shadow-md border border-red-300 tracking-wider uppercase whitespace-nowrap">
                  ANO 0
                </span>
              </div>
            )}

            {activeRulerYears.map(year => {
              const targetMov = hoveredMovement || selectedMovement;
              const isHoveredYear = (targetMov?.startYear === year) || (hoveredDino?.startYear === year);
              const posX = yearToX(year) * transform.zoom;
              const formattedYear = year <= -1000000 
                ? `${Math.round(Math.abs(year) / 1000000)} Ma a.C.` 
                : year < 0 
                  ? `${Math.abs(year).toLocaleString('pt-BR')} a.C.` 
                  : `${year} d.C.`;
              const isYearZero = year === 0;
              const isDinoYear = year <= -1000000;
              const isLimitYear = timelineMode === 'dinosaur' ? (year === -252000000 || year === -66000000) : year === -40000;
              const isMajor = isYearZero || isLimitYear || isDinoYear || Math.abs(year) >= 3000 || year === 0 || year === 500 || year === 1000 || year === 1400 || year === 1500 || year === 1850 || year === 1900 || year === 1945 || year === 2000 || year === 2026;

              // Hide nearby base year if it collides with the illuminated hover year label
              if (!isHoveredYear && (targetMov || hoveredDino)) {
                const targetHoverStart = targetMov?.startYear ?? hoveredDino?.startYear;
                if (targetHoverStart !== undefined) {
                  const hoveredPosX = yearToX(targetHoverStart) * transform.zoom;
                  if (Math.abs(posX - hoveredPosX) < 36) return null;
                }
              }

              // Optimize readability when zoomed out (hovered year is always visible)
              if (!isHoveredYear && transform.zoom < 0.65 && !isMajor && year % 500 !== 0) return null;

              return (
                <div
                  key={year}
                  className={`absolute top-0 -translate-x-1/2 flex flex-col items-center pointer-events-auto cursor-pointer transition-all duration-150 ${
                    isHoveredYear ? 'z-40' : 'z-10'
                  }`}
                  style={{ left: `${posX}px` }}
                  onClick={() => panToYear(year)}
                  title={`Ano ${formattedYear}${isYearZero ? ' • Marco Divisor Histórico (a.C. / d.C.)' : ''} • Clique para centrar neste ano`}
                >
                  <div 
                    className={`transition-all duration-150 ${
                      isHoveredYear
                        ? 'h-3 mb-0.5 bg-sky-400 shadow-[0_0_10px_rgba(56,189,248,1)] w-1 rounded-full'
                        : isYearZero 
                          ? 'h-3 bg-red-500 w-1' 
                          : isDinoYear
                            ? 'h-3 bg-amber-500 w-1'
                            : isLimitYear
                              ? 'h-3 bg-amber-500 w-1'
                              : 'h-1.5 mb-0.5 ' + (isDark ? 'bg-neutral-700' : 'bg-neutral-300') + ' w-0.5'
                    }`} 
                  />
                  <span 
                    className={`transition-all duration-150 whitespace-nowrap text-[11px] font-mono font-semibold ${
                      isHoveredYear
                        ? 'text-sky-400 font-bold text-[12px] drop-shadow-[0_0_8px_rgba(56,189,248,0.95)]'
                        : isYearZero 
                          ? 'text-red-500 font-black text-[12px] drop-shadow-[0_0_8px_rgba(239,68,68,0.9)]' 
                          : isDinoYear 
                            ? 'text-amber-400 font-bold text-[10px]' 
                            : isLimitYear 
                              ? 'text-amber-400 font-bold text-[10px]' 
                              : (isDark ? 'text-neutral-300' : 'text-neutral-700')
                    }`}
                  >
                    {isYearZero ? '0' : formattedYear}
                  </span>
                </div>
              );
            })}
          </div>
        </div>
      </div>

      {/* =========================================================== */}
      {/* UPPER CONNECTION LINE: RULER TO ACTIVE CARD (BEHIND CARDS)  */}
      {/* =========================================================== */}
      {curveData && curveData.upperPathD && (
        <svg 
          style={{ zIndex: 15 }}
          className="absolute inset-0 w-full h-full pointer-events-none overflow-visible"
        >
          <defs>
            <filter id="upperGlowLine" x="-30%" y="-30%" width="160%" height="160%">
              <feGaussianBlur stdDeviation="3.5" result="blur" />
              <feMerge>
                <feMergeNode in="blur" />
                <feMergeNode in="SourceGraphic" />
              </feMerge>
            </filter>

            <linearGradient id="upperLineGradient" x1="0%" y1="0%" x2="0%" y2="100%">
              <stop offset="0%" stopColor="#38bdf8" stopOpacity="0.95" />
              <stop offset="100%" stopColor="#60a5fa" stopOpacity="0.85" />
            </linearGradient>
          </defs>

          <path
            d={curveData.upperPathD}
            fill="none"
            stroke="#38bdf8"
            strokeWidth="6"
            strokeOpacity="0.18"
            strokeLinecap="round"
          />
          <path
            d={curveData.upperPathD}
            fill="none"
            stroke="url(#upperLineGradient)"
            strokeWidth="2.5"
            strokeLinecap="round"
            strokeLinejoin="round"
            filter="url(#upperGlowLine)"
          />

          {/* Connection Pin at sticky ruler base */}
          <circle
            cx={curveData.rulerScreenX}
            cy={curveData.rulerBottomY}
            r="3"
            fill="#38bdf8"
            stroke="#ffffff"
            strokeWidth="1.5"
          />
        </svg>
      )}

      {/* =========================================================== */}
      {/* THE TRANSFORMABLE 2D CANVAS WORLD (zIndex: 20)              */}
      {/* =========================================================== */}
      <div
        className="absolute top-0 left-0 origin-top-left will-change-transform"
        style={{
          transform: `translate3d(${transform.x}px, ${transform.y}px, 0px) scale(${transform.zoom})`,
          width: '24000px',
          height: '4000px',
          paddingTop: '75px',
          zIndex: 20
        }}
      >
        {/* LOWER CONNECTION LINE: PASSES BEHIND MOVEMENTS (zIndex: 30) AND ABOVE COUNTRY TRACKS (zIndex: 10) */}
        {curveData && curveData.localLowerPathD && (
          <svg 
            style={{ zIndex: 20 }}
            className="absolute inset-0 w-full h-full pointer-events-none overflow-visible"
          >
            <defs>
              <filter id="lowerGlowLine" x="-30%" y="-30%" width="160%" height="160%">
                <feGaussianBlur stdDeviation="3.5" result="blur" />
                <feMerge>
                  <feMergeNode in="blur" />
                  <feMergeNode in="SourceGraphic" />
                </feMerge>
              </filter>

              <linearGradient id="lowerLineGradient" x1="0%" y1="0%" x2="0%" y2="100%">
                <stop offset="0%" stopColor="#38bdf8" stopOpacity="0.95" />
                <stop offset="35%" stopColor="#60a5fa" stopOpacity="0.85" />
                <stop offset="70%" stopColor="#38bdf8" stopOpacity="0.8" />
                <stop offset="100%" stopColor="#818cf8" stopOpacity="0.65" />
              </linearGradient>
            </defs>

            <path
              d={curveData.localLowerPathD}
              fill="none"
              stroke="#38bdf8"
              strokeWidth="6"
              strokeOpacity="0.22"
              strokeLinecap="round"
            />
            <path
              d={curveData.localLowerPathD}
              fill="none"
              stroke="url(#lowerLineGradient)"
              strokeWidth="3"
              strokeLinecap="round"
              strokeLinejoin="round"
              filter="url(#lowerGlowLine)"
            />

            {/* Connection Pin at Bottom Center of active card */}
            <circle
              cx={curveData.cardLocalCenterX}
              cy={curveData.cardBottom}
              r="3.5"
              fill="#38bdf8"
              stroke="#ffffff"
              strokeWidth="1.5"
            />

            {/* Connection Pins on Country Rows in local coordinates */}
            {curveData.countryNodes.map(node => (
              <circle
                key={node.regionId}
                cx={node.localX}
                cy={node.localY}
                r="4.5"
                fill="#38bdf8"
                stroke="#ffffff"
                strokeWidth="1.8"
                filter="url(#lowerGlowLine)"
              />
            ))}
          </svg>
        )}

        {/* CENTRAL TRACK: MOVEMENTS / DINOSAURS TIMELINE (zIndex: 30: IN FRONT OF BLUE LINE zIndex: 20) */}
        <div className="relative mt-2 mb-3 py-2" style={{ zIndex: 30 }}>
          {/* Main Central Monochromatic Guide Line */}
          <div 
            className={`absolute top-1/2 left-0 right-0 h-0.5 -translate-y-1/2 ${
              isDark ? 'bg-neutral-800' : 'bg-[#e2ddd5]'
            }`} 
          />

          {/* Render Movement & Dinosaur Cards Stacked Vertically in Lanes for Overlapping Periods */}
          <div 
            className="relative"
            style={{ height: `${movementTrackHeight}px` }}
          >
            {/* DINOSAUR CARDS (RENDERED ONLY IN DINOSAUR MODE) */}
            {timelineMode === 'dinosaur' && dinosaurLanes.positionedDinosaurs.map((d) => {
              const topOffset = d.lane * (cardHeight + laneGap) + 12;
              const isHovered = hoveredDino?.id === d.id;

              return (
                <div
                  key={d.id}
                  onClick={() => setSelectedDino(d)}
                  onMouseEnter={() => {
                    if (!isDraggingRef.current) {
                      setHoveredDino(d);
                    }
                  }}
                  onMouseLeave={() => setHoveredDino(null)}
                  className={`interactive-card absolute z-10 rounded-2xl overflow-hidden border cursor-pointer group select-none transition-all duration-200 ${
                    isHovered
                      ? (isDark 
                          ? 'ring-2 ring-amber-400 shadow-[0_0_30px_rgba(245,158,11,0.35)] border-amber-400 z-30 scale-[1.02]' 
                          : 'ring-2 ring-amber-500 shadow-[0_0_24px_rgba(245,158,11,0.4),0_8px_24px_rgba(0,0,0,0.45)] border-amber-500 z-30 scale-[1.02]')
                      : (isDark 
                          ? 'shadow-[0_4px_20px_-4px_rgba(0,0,0,0.85)]' 
                          : 'shadow-[0_4px_16px_rgba(0,0,0,0.25),0_2px_6px_rgba(0,0,0,0.15)] hover:shadow-[0_8px_24px_rgba(0,0,0,0.38)]')
                  } ${
                    isDark 
                      ? 'border-neutral-700/80 hover:border-amber-400/80 bg-[#202024]' 
                      : 'border-[#ded8cc] hover:border-amber-500/80 bg-white'
                  }`}
                  style={{
                    left: `${d.startX}px`,
                    top: `${topOffset}px`,
                    width: `${d.cardWidth}px`,
                    height: `${cardHeight}px`
                  }}
                  title={`${d.name} (${d.displayPeriod}) • Período: ${d.eraName} • Dieta: ${d.diet} • Clique para ver detalhes e espécime`}
                >
                  {/* Dinosaur Specimen Illustration */}
                  <img
                    src={d.imageUrl}
                    alt={d.name}
                    className="absolute inset-0 w-full h-full object-cover select-none pointer-events-none transition-transform duration-300 group-hover:scale-105"
                    loading="eager"
                    draggable={false}
                  />

                  {/* Monochromatic Vignette Gradient - Real black shadow overlay inside card */}
                  <div 
                    className="absolute inset-0 pointer-events-none bg-gradient-to-t from-black/95 via-black/65 via-50% to-black/15" 
                  />

                  {/* Top Accent Stripe */}
                  <div 
                    className={`absolute top-0 left-0 right-0 h-0.5 z-10 transition-colors ${
                      isHovered
                        ? 'bg-amber-400 shadow-[0_0_8px_rgba(245,158,11,0.8)]'
                        : (isDark ? 'bg-amber-900/60' : 'bg-amber-300/80')
                    }`}
                  />

                  {/* Card Content Header & Footer */}
                  <div className="absolute inset-0 p-3 flex flex-col justify-between z-10 pointer-events-none">
                    <div className="flex items-center justify-between gap-1">
                      <span className={`text-[9px] font-mono font-bold px-1.5 py-0.5 rounded border backdrop-blur-md ${
                        isDark ? 'bg-amber-950/80 text-amber-300 border-amber-800/80' : 'bg-amber-50 text-amber-800 border-amber-200'
                      }`}>
                        {d.eraName}
                      </span>
                      <span className={`text-[9px] px-1.5 py-0.5 rounded-full font-semibold border backdrop-blur-md ${
                        d.diet === 'Carnívoro'
                          ? (isDark ? 'bg-red-950/80 text-red-300 border-red-800/80' : 'bg-red-50 text-red-700 border-red-200')
                          : (isDark ? 'bg-emerald-950/80 text-emerald-300 border-emerald-800/80' : 'bg-emerald-50 text-emerald-700 border-emerald-200')
                      }`}>
                        {d.diet}
                      </span>
                    </div>

                    <div>
                      <h3 className={`text-[28px] sm:text-[32px] font-black tracking-tight leading-tight line-clamp-1 drop-shadow-md ${
                        isHovered 
                          ? 'text-amber-300 drop-shadow-[0_0_8px_rgba(245,158,11,0.5)]' 
                          : 'text-white'
                      }`}>
                        {d.name}
                      </h3>
                      <p className="text-[18px] sm:text-[21px] font-bold tracking-tight mt-0.5 line-clamp-1 drop-shadow-sm text-amber-200/95">
                        {d.displayPeriod}
                      </p>
                    </div>
                  </div>
                </div>
              );
            })}

            {/* ART MOVEMENTS CARDS (RENDERED ONLY IN ART MODE) */}
            {timelineMode === 'art' && movementLanes.positionedMovements.map((m) => {
              const topOffset = m.lane * (cardHeight + laneGap) + 12;
              const famousArtwork = m.famousWorks[0];
              const match = isHighlighted(m);
              const isSelected = selectedMovement?.id === m.id;
              const isHoveredOrActive = hoveredMovement?.id === m.id || (isSelected && !hoveredMovement);

              return (
                <div
                  key={m.id}
                  onClick={() => handleCardClick(m)}
                  onMouseEnter={() => {
                    if (!isDraggingRef.current) {
                      setHoveredMovement(m);
                    }
                  }}
                  onMouseLeave={() => {
                    setHoveredMovement(null);
                  }}
                  className={`interactive-card absolute z-10 rounded-2xl overflow-hidden border cursor-pointer group select-none transition-all duration-200 ${
                    match ? 'opacity-100' : 'opacity-25'
                  } ${
                    isHoveredOrActive
                      ? (isDark 
                          ? 'ring-2 ring-sky-400 shadow-[0_0_30px_rgba(56,189,248,0.38),0_0_15px_rgba(56,189,248,0.25)] border-sky-400 z-30 scale-[1.01]' 
                          : 'ring-2 ring-sky-500 shadow-[0_0_24px_rgba(56,189,248,0.4),0_8px_24px_rgba(0,0,0,0.45)] border-sky-500 z-30 scale-[1.01]')
                      : (isDark 
                          ? 'shadow-[0_4px_20px_-4px_rgba(0,0,0,0.85)]' 
                          : 'shadow-[0_4px_16px_rgba(0,0,0,0.25),0_2px_6px_rgba(0,0,0,0.15)] hover:shadow-[0_8px_24px_rgba(0,0,0,0.38)]')
                  } ${
                    isDark 
                      ? 'border-neutral-700/80 hover:border-neutral-400 bg-[#202024]' 
                      : 'border-[#ded8cc] hover:border-neutral-600 bg-white'
                  }`}
                  style={{
                    left: `${m.startX}px`,
                    top: `${topOffset}px`,
                    width: `${m.cardWidth}px`,
                    height: `${cardHeight}px`,
                    zIndex: isHoveredOrActive ? 40 : 30
                  }}
                  title={`${m.name} (${formatCleanPeriod(m.displayPeriod)}) • Região: ${m.originRegion}${m.keyArtists[0] ? ` • Artista: ${m.keyArtists[0].name}` : ''} • Clique para ver detalhes e obras`}
                >
                  {/* Masterpiece Artwork Background Image */}
                  {famousArtwork?.imageUrl ? (
                    <img
                      src={famousArtwork.imageUrl}
                      alt={m.name}
                      className="absolute inset-0 w-full h-full object-cover select-none pointer-events-none"
                      loading="eager"
                      decoding="async"
                      draggable={false}
                    />
                  ) : (
                    <div 
                      className={`absolute inset-0 w-full h-full ${
                        isDark ? 'bg-neutral-800' : 'bg-neutral-200'
                      }`}
                    />
                  )}

                  {/* Monochromatic Vignette Overlay - Real black shadow overlay inside card */}
                  <div 
                    className="absolute inset-0 pointer-events-none bg-gradient-to-t from-black/95 via-black/75 via-60% to-black/20" 
                  />

                  {/* Accent Stripe / Indicator on Hover/Active */}
                  <div 
                    className={`absolute top-0 left-0 right-0 h-0.5 z-10 transition-colors ${
                      isHoveredOrActive
                        ? 'bg-sky-400 shadow-[0_0_8px_rgba(56,189,248,0.8)]'
                        : (isDark ? 'bg-neutral-500' : 'bg-neutral-400')
                    }`}
                  />

                  {/* Top & Bottom connection notches on hover / active */}
                  {isHoveredOrActive && (
                    <>
                      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-3 h-1 bg-sky-400 rounded-b shadow-[0_0_8px_rgba(56,189,248,0.9)] z-20" />
                      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-3 h-1 bg-sky-400 rounded-t shadow-[0_0_8px_rgba(56,189,248,0.9)] z-20" />
                    </>
                  )}

                  {/* Content: Title on top (2x size), Years below (1.5x size) */}
                  <div className="absolute inset-0 p-3.5 sm:p-4 flex flex-col justify-end z-10 text-left pointer-events-none">
                    <h3 
                      className={`text-[28px] sm:text-[32px] font-black tracking-tight leading-tight line-clamp-1 drop-shadow-md ${
                        isHoveredOrActive 
                          ? 'text-sky-300 drop-shadow-[0_0_8px_rgba(56,189,248,0.5)]' 
                          : 'text-white'
                      }`}
                    >
                      {m.name}
                    </h3>
                    <p 
                      className="text-[18px] sm:text-[21px] font-bold tracking-tight mt-0.5 line-clamp-1 drop-shadow-sm text-neutral-200"
                    >
                      {formatCleanPeriod(m.displayPeriod)}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* VERTICAL Y-AXIS REGIONAL CONTEXT TRACKS (ONLY IN ART MODE: zIndex: 10 BEHIND BLUE LINE zIndex: 20) */}
        {timelineMode === 'art' && (
          <div className="mt-2 space-y-3 pl-8 sm:pl-14 pr-4 relative" style={{ zIndex: 10 }}>
            <div 
              className={`flex items-center gap-2 mb-1.5 text-xs font-bold uppercase tracking-wider ${
                isDark ? 'text-neutral-400' : 'text-neutral-600'
              }`}
            >
              <Layers className="w-3.5 h-3.5" />
              <span>Camadas Contextuais por País (Eixo Vertical Y)</span>
            </div>

          {visibleRegions.map((region) => {
            const isExpanded = !!expandedRegions[region.id];
            const regionEntries = regionalContexts.filter(rc => rc.regionId === region.id);

            return (
              <div 
                key={region.id}
                className={`rounded-2xl border p-3 backdrop-blur-xs transition-colors relative ${
                  isDark 
                    ? 'border-neutral-800/80 bg-[#202024]/40' 
                    : 'border-[#e5e0d8] bg-white/60'
                }`}
              >
                {/* Region Row Header */}
                <div 
                  onClick={() => toggleRegionExpand(region.id)}
                  className={`flex items-center justify-between cursor-pointer p-2 rounded-xl transition-colors mb-1.5 ${
                    isDark ? 'hover:bg-neutral-800/50' : 'hover:bg-[#f0ebe3]'
                  }`}
                >
                  <div className="flex items-center space-x-2.5">
                    <CountryFlag regionId={region.id} size="md" />
                    <h4 
                      className={`text-sm font-bold flex items-center gap-2 ${
                        isDark ? 'text-white' : 'text-neutral-900'
                      }`}
                    >
                      {region.name}
                      <span className={`text-xs font-normal ${isDark ? 'text-neutral-400' : 'text-neutral-500'}`}>
                        ({region.continent})
                      </span>
                    </h4>
                  </div>

                  <div className="flex items-center space-x-2">
                    <span 
                      className={`text-[11px] font-semibold px-2 py-0.5 rounded border ${
                        isDark 
                          ? 'bg-neutral-800 border-neutral-700 text-neutral-300' 
                          : 'bg-[#ede8df] border-[#ded8cc] text-neutral-800'
                      }`}
                    >
                      {regionEntries.length} Períodos
                    </span>
                    <button 
                      className={`p-1 rounded ${
                        isDark ? 'bg-neutral-800 text-neutral-300' : 'bg-[#ede8df] text-neutral-700'
                      }`}
                    >
                      {isExpanded ? <ChevronDown className="w-3.5 h-3.5" /> : <ChevronRight className="w-3.5 h-3.5" />}
                    </button>
                  </div>
                </div>

                {/* Context Cards Track */}
                <div 
                  className={`relative h-32 w-full border-t pt-2 ${
                    isDark ? 'border-neutral-800/70' : 'border-[#e5e0d8]'
                  }`}
                >
                  {/* Blue dot on this country row positioned at this country's specific year along the curved spline */}
                  {(() => {
                    const node = curveData?.countryNodes.find(n => n.regionId === region.id);
                    if (!node) return null;
                    return (
                      <div
                        className="absolute top-1/2 -translate-y-1/2 -translate-x-1/2 z-30 flex items-center pointer-events-auto"
                        style={{ left: `${node.localX}px` }}
                      >
                        {/* Soft Blue/Cyan Dot Node on this Country */}
                        <div className="relative flex items-center justify-center">
                          <div className="w-3.5 h-3.5 rounded-full bg-sky-400 border-2 border-white dark:border-neutral-900 shadow-[0_0_12px_rgba(56,189,248,0.8)] ring-2 ring-sky-300/50" />
                          <div className="absolute w-2 h-2 rounded-full bg-white animate-ping opacity-60" />
                        </div>

                        {/* Synchronized Year & Context Tooltip */}
                        <div 
                          className={`ml-2 px-2.5 py-1 rounded-md text-[11px] font-mono whitespace-nowrap shadow-lg border backdrop-blur-md max-w-sm truncate flex items-center gap-2 ${
                            isDark 
                              ? 'bg-[#18181b]/92 border-sky-500/40 text-sky-100 shadow-black/60' 
                              : 'bg-white/95 border-sky-400 text-sky-950 shadow-neutral-300/80'
                          }`}
                        >
                          <CountryFlag regionId={region.id} size="sm" />
                          <span className="font-bold text-sky-400">{region.name} ({node.yearFormatted}):</span>{' '}
                          <span>{node.status}</span>
                        </div>
                      </div>
                    );
                  })()}

                  {regionEntries.map((entry) => {
                    const startX = yearToX(entry.startYear);
                    const endX = yearToX(entry.endYear);
                    const entryWidth = Math.max(200, Math.min(340, endX - startX));

                    return (
                      <div
                        key={entry.id}
                        onClick={() => {
                          if (dragDistRef.current <= 6) {
                            onSelectContext(region, entry);
                          }
                        }}
                        className={`interactive-card absolute top-2 rounded-xl border p-2.5 transition-all cursor-pointer group ${
                          isDark 
                            ? 'border-neutral-700/80 bg-[#18181b]/95 hover:border-neutral-400 text-neutral-200 shadow-xs' 
                            : 'border-[#ded8cc] bg-white hover:border-neutral-600 text-neutral-800 shadow-[0_2px_10px_rgba(0,0,0,0.18)] hover:shadow-[0_4px_16px_rgba(0,0,0,0.28)]'
                        }`}
                        style={{
                          left: `${startX}px`,
                          width: `${entryWidth}px`
                        }}
                      >
                        <div className="flex items-center justify-between mb-1.5">
                          <div className="flex items-center gap-2">
                            <CountryFlag regionId={region.id} size="md" />
                            <span 
                              className={`text-xs font-bold uppercase tracking-wider font-mono ${
                                isDark ? 'text-neutral-200' : 'text-neutral-800'
                              }`}
                            >
                              {entry.startYear < 0 ? `${Math.abs(entry.startYear)} a.C.` : entry.startYear} – {entry.endYear} d.C.
                            </span>
                          </div>
                        </div>

                        <div className="space-y-1 text-sm leading-relaxed">
                          {entry.facets.arte && activeCategories.includes('arte') && (
                            <div className={`line-clamp-2 text-sm leading-relaxed ${isDark ? 'text-neutral-300' : 'text-neutral-700'}`}>
                              <span className="font-semibold text-xs font-mono uppercase tracking-wider">Arte: </span>
                              {entry.facets.arte}
                            </div>
                          )}
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            );
          })}
        </div>
      )}

      </div>

      {/* Floating Canvas Controls Cluster (Dynamically slides to the left of the Period Details drawer when open) */}
      <div 
        style={{
          right: isDrawerOpen ? `${(sidebarWidth || 384) + 14}px` : '16px',
        }}
        className="absolute bottom-3 sm:bottom-6 z-40 flex flex-col items-end gap-1.5 sm:gap-2.5 select-none pointer-events-auto transition-[right] duration-500 ease-[cubic-bezier(0.16,1,0.3,1)]"
      >
        {/* Unified Zoom Controls Capsule (Expands upwards in-place smoothly with zero gap) - Compact on Mobile */}
        <div 
          className="relative w-8 h-8 sm:w-10 sm:h-10 select-none"
          onMouseEnter={handleZoomMouseEnter}
          onMouseLeave={handleZoomMouseLeave}
          title="Controles de Zoom da Linha do Tempo"
        >
          <div 
            className={`absolute bottom-0 right-0 w-8 sm:w-10 rounded-lg sm:rounded-xl border backdrop-blur-md transition-all duration-300 ease-out overflow-hidden flex flex-col items-center p-0.5 sm:p-1 ${
              isZoomControlsHovered 
                ? 'h-[118px] sm:h-[148px] shadow-2xl pointer-events-auto' 
                : 'h-8 sm:h-10 shadow-lg pointer-events-auto'
            } ${
              isDark 
                ? 'bg-[#18181b]/95 border-neutral-800 text-neutral-200 shadow-black/80' 
                : 'bg-[#faf8f5]/95 border-[#ded8cc] text-neutral-800 shadow-[0_8px_24px_rgba(0,0,0,0.3)]'
            }`}
          >
            {/* 1. Zoom In Button */}
            <button
              onClick={handleZoomIn}
              className={`w-7 h-7 sm:w-8 sm:h-8 rounded-md sm:rounded-lg flex items-center justify-center shrink-0 transition-colors cursor-pointer ${
                isDark ? 'hover:bg-neutral-800 text-neutral-200 hover:text-white' : 'hover:bg-neutral-200 text-neutral-800 hover:text-black'
              }`}
              title="Aproximar zoom (+)"
            >
              <ZoomIn className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
            </button>

            {/* 2. Zoom Out Button */}
            <button
              onClick={handleZoomOut}
              className={`w-7 h-7 sm:w-8 sm:h-8 mt-0.5 sm:mt-1 rounded-md sm:rounded-lg flex items-center justify-center shrink-0 transition-colors cursor-pointer ${
                isDark ? 'hover:bg-neutral-800 text-neutral-200 hover:text-white' : 'hover:bg-neutral-200 text-neutral-800 hover:text-black'
              }`}
              title="Afastar zoom (-)"
            >
              <ZoomOut className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
            </button>

            {/* 3. Reset Position Button */}
            <button
              onClick={handleResetZoom}
              className={`w-7 h-7 sm:w-8 sm:h-8 mt-0.5 sm:mt-1 rounded-md sm:rounded-lg flex items-center justify-center shrink-0 transition-colors cursor-pointer ${
                isDark ? 'hover:bg-neutral-800 text-neutral-200 hover:text-white' : 'hover:bg-neutral-200 text-neutral-800 hover:text-black'
              }`}
              title="Resetar zoom para o padrão"
            >
              <RotateCcw className="w-3 h-3 sm:w-3.5 sm:h-3.5" />
            </button>

            {/* 4. Zoom percentage indicator */}
            <div 
              className={`text-[8px] sm:text-[9px] text-center font-mono font-bold border-t w-full mt-1 sm:mt-1.5 pt-0.5 sm:pt-1 pb-0.5 shrink-0 select-none ${
                isDark ? 'border-neutral-800 text-neutral-400' : 'border-[#ded8cc] text-neutral-600'
              }`}
              title={`Nível de zoom atual: ${Math.round((transform.zoom / BASE_ZOOM) * 100)}%`}
            >
              {Math.round((transform.zoom / BASE_ZOOM) * 100)}%
            </div>
          </div>
        </div>

        {/* Minimap (Bottom): Either compact Map icon button or full Minimap panel */}
        <Minimap
          isOpen={isMinimapOpen}
          onToggleOpen={() => setIsMinimapOpen(prev => !prev)}
          movements={movements}
          timelineMode={timelineMode}
          transform={transform}
          canvasWidth={containerRef.current?.clientWidth || 1000}
          canvasHeight={containerRef.current?.clientHeight || 800}
          onPanToYear={panToYear}
          onSetTransformX={handleSetTransformX}
          theme={theme}
        />
      </div>

      {/* Mode Indicator & Return Button when in Dinosaur Mode */}
      {timelineMode === 'dinosaur' && (
        <div className="absolute top-16 left-4 z-40 flex items-center gap-2 pointer-events-auto">
          <div className={`px-3 py-1.5 rounded-xl border text-xs font-semibold flex items-center gap-2 shadow-lg backdrop-blur-md ${
            isDark 
              ? 'bg-[#18181b]/95 border-amber-500/50 text-amber-400' 
              : 'bg-white/95 border-amber-300 text-amber-800'
          }`}>
            <span className="text-sm">🦕</span>
            <span>Modo Dinossauros (Mesozoico)</span>
          </div>
          <button
            onClick={() => {
              setTimelineMode('art');
              localStorage.setItem('cronos_timeline_mode', 'art');
              setTransform({ x: 40 - 200 * 0.85, y: -20, zoom: 0.85 });
              setModeToast({ show: true, text: 'Modo História da Arte restaurado!', icon: '🎨' });
              setTimeout(() => setModeToast(null), 4000);
            }}
            className={`px-3 py-1.5 rounded-xl border text-xs font-semibold flex items-center gap-1.5 shadow-md backdrop-blur-md transition-all cursor-pointer ${
              isDark 
                ? 'bg-neutral-900/90 border-neutral-700 text-neutral-300 hover:bg-neutral-800 hover:text-white hover:border-neutral-500' 
                : 'bg-white/90 border-neutral-300 text-neutral-700 hover:bg-neutral-100 hover:text-black hover:border-neutral-400'
            }`}
            title="Voltar para a História da Arte (ou force para a direita no final da régua)"
          >
            <span>🎨</span>
            <span>Voltar à História da Arte ➔</span>
          </button>
        </div>
      )}

      {/* Dinosaur Detail Drawer */}
      <DinosaurDetailDrawer
        dinosaur={selectedDino}
        onClose={() => setSelectedDino(null)}
        theme={theme}
      />

      {/* Mode Transition Toast Notification */}
      {modeToast?.show && (
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-50 pointer-events-none animate-in fade-in slide-in-from-bottom-4 duration-300">
          <div className={`px-4 py-2.5 rounded-2xl border shadow-2xl backdrop-blur-md flex items-center gap-2.5 text-xs font-semibold ${
            modeToast.icon === '🦖'
              ? (isDark ? 'bg-amber-950/95 border-amber-500/80 text-amber-200' : 'bg-amber-50/95 border-amber-400 text-amber-900')
              : (isDark ? 'bg-neutral-900/95 border-neutral-700 text-neutral-100' : 'bg-white/95 border-neutral-300 text-neutral-900')
          }`}>
            <span className="text-base">{modeToast.icon}</span>
            <span>{modeToast.text}</span>
          </div>
        </div>
      )}
    </div>
  );
};
