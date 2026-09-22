import React, { useState, useRef, useEffect, useCallback, useMemo } from 'react';
import { Movement, Region, RegionalContextEntry, ContextCategory, CanvasTransform, ThemeMode } from '../types';
import { ERAS } from '../data/eras';
import { Minimap } from './Minimap';
import { 
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
  onSelectMovement: (movement: Movement) => void;
  onSelectContext: (region: Region, entry: RegionalContextEntry, facetKey?: ContextCategory) => void;
  activeRegions: string[];
  activeCategories: ContextCategory[];
  theme?: ThemeMode;
  searchQuery?: string;
  onTriggerDinoMode?: () => void;
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
  onSelectMovement,
  onSelectContext,
  activeRegions,
  activeCategories,
  theme = 'dark',
  searchQuery = '',
  onTriggerDinoMode
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

  // Transform State (Pan & Zoom)
  const [transform, setTransform] = useState<CanvasTransform>({
    x: -800,
    y: 0,
    zoom: 1
  });

  const [isDragging, setIsDragging] = useState(false);
  const [hoveredMovement, setHoveredMovement] = useState<MovementWithLane | null>(null);
  const [expandedRegions, setExpandedRegions] = useState<Record<string, boolean>>({
    brasil: true,
    italia: true
  });

  // Easter Egg 5-Second Hold State for Dinosaur Mode
  const [isHoldingAtLimit, setIsHoldingAtLimit] = useState<boolean>(false);
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

  // Calculate year position mapped to canvas X coordinate (supports from 4 million BCE to 2026 CE)
  const yearToX = useCallback((year: number) => {
    let x = 0;
    if (year < -40000) {
      // 4 million BCE (-4,000,000) to 40,000 BCE (-40,000)
      const ratio = Math.max(0, (year - (-4000000)) / ((-40000) - (-4000000)));
      x = -1200 + ratio * 1200; // -1200 at -4Ma, 0 at -40,000
    } else if (year < -10000) {
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
  }, []);

  // Boundary: Strict lock at 4 million years ago (-4,000,000 BCE)
  // At -4,000,000, yearToX(-4000000) = -1000
  // Left limit constraint:
  // When looking at -4 million years, the mark at canvas X = -1000 locks at 40px from the left edge of the screen
  // Screen X = transform.x + (-1000) * zoom = 40 => transform.x = 40 + 1000 * zoom
  const getMaxAllowedX = useCallback((zoom: number) => {
    return 40 + 1000 * zoom;
  }, []);

  // Right limit constraint:
  // Present/future (year 2026 at yearToX(2026) = 9800) should not scroll past right edge
  const getMinAllowedX = useCallback((zoom: number) => {
    return (viewportWidth - 120) - 9800 * zoom;
  }, [viewportWidth]);

  // Hold Timer functions for Dinosaur Mode Easter Egg (mobile pull-to-refresh lateral interaction)
  const startHoldTimer = useCallback(() => {
    if (holdIntervalRef.current) return;
    setIsHoldingAtLimit(true);
    holdStartTimeRef.current = Date.now();

    holdIntervalRef.current = window.setInterval(() => {
      const elapsed = Date.now() - holdStartTimeRef.current;
      const pct = Math.min(100, (elapsed / 2200) * 100);
      setHoldProgress(pct);

      if (elapsed >= 2200) {
        if (holdIntervalRef.current) {
          clearInterval(holdIntervalRef.current);
          holdIntervalRef.current = null;
        }
        setIsHoldingAtLimit(false);
        setHoldProgress(0);
        isDraggingRef.current = false;
        setIsDragging(false);
        onTriggerDinoMode?.();
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
  }, []);

  useEffect(() => {
    return () => {
      if (holdIntervalRef.current) {
        clearInterval(holdIntervalRef.current);
      }
    };
  }, []);

  // Calculate vertical lanes so overlapping periods stack vertically into separate rows
  const movementLanes = useMemo(() => {
    const sorted = [...movements].sort((a, b) => a.startYear - b.startYear || a.endYear - b.endYear);
    const laneEndPositions: number[] = [];
    const minSpacingPx = 16;

    const positioned: MovementWithLane[] = sorted.map((m) => {
      const startX = yearToX(m.startYear);
      const endX = yearToX(m.endYear);
      const rawWidth = Math.max(0, endX - startX);
      // Period cards reflect exact chronological duration: longer periods are wider, shorter periods are compact
      const cardWidth = Math.max(140, rawWidth);
      const cardRight = startX + cardWidth;

      // Find the first lane where card fits without horizontal collision
      let targetLane = -1;
      for (let i = 0; i < laneEndPositions.length; i++) {
        if (laneEndPositions[i] + minSpacingPx <= startX) {
          targetLane = i;
          laneEndPositions[i] = cardRight;
          break;
        }
      }

      // If no existing lane fits, stack into a new vertical row
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

  const cardHeight = 115;
  const laneGap = 16;
  const movementTrackHeight = Math.max(280, movementLanes.totalLanes * (cardHeight + laneGap) + 30);

  // Filter active regions
  const visibleRegions = useMemo(() => 
    regions.filter(r => activeRegions.includes(r.id)), 
    [regions, activeRegions]
  );

  // Vertical Y Boundary Constraints
  // Upper limit: user cannot pan too far up (cannot detach timeline content from sticky ruler)
  const getMaxAllowedY = useCallback(() => {
    return 0; // The canvas content is anchored directly below the 70px sticky ruler
  }, []);

  // Lower limit: user cannot scroll into void below the contextual cards
  const getMinAllowedY = useCallback((zoom: number) => {
    const containerHeight = containerRef.current?.clientHeight || 800;
    // Total content height: top padding (75) + central track (movementTrackHeight + 16) + context tracks (visibleRegions.length * 186) + padding
    const totalContentHeight = 75 + movementTrackHeight + 16 + (visibleRegions.length * 186) + 40;
    const scaledHeight = totalContentHeight * zoom;
    return Math.min(0, containerHeight - scaledHeight);
  }, [visibleRegions.length, movementTrackHeight]);

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

    // Lateral overscroll elastic pull at past boundary (4 million years ago)
    let newX = rawNewX;
    if (rawNewX > maxAllowedX) {
      const overX = rawNewX - maxAllowedX;
      // Pull-to-refresh gentle elastic resistance
      newX = maxAllowedX + Math.min(45, Math.pow(overX, 0.72));
      startHoldTimer();
    } else if (rawNewX < minAllowedX) {
      const underX = minAllowedX - rawNewX;
      newX = minAllowedX - Math.min(30, Math.pow(underX, 0.72));
      cancelHoldTimer();
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
  }, [transform.x, transform.y, transform.zoom, getMaxAllowedX, getMinAllowedX, getMaxAllowedY, getMinAllowedY, startHoldTimer, cancelHoldTimer]);

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
          const newZoom = Math.max(0.35, Math.min(2.8, prev.zoom * zoomFactor));
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

  const panToYear = (year: number) => {
    stopInertia();
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
    const duration = 500;

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
  };

  const handleCardClick = (m: Movement) => {
    // Prevent accidental click when swiping/gliding
    if (dragDistRef.current > 6) return;
    onSelectMovement(m);
  };

  // Calculate coordinates in screen space for the single continuous connection line
  // bridging the sticky year ruler, card center, and country layers without any gap or seams
  const curveData = useMemo(() => {
    if (!hoveredMovement) return null;

    // Movement card center in canvas coordinates:
    const trackContentTop = 75 + 8 + 8;
    const cardTop = trackContentTop + (hoveredMovement.lane * (cardHeight + laneGap) + 12);
    const cardLocalCenterY = cardTop + (cardHeight / 2);
    const cardLocalCenterX = hoveredMovement.startX + (hoveredMovement.cardWidth / 2);

    // Convert to screen coordinates:
    const cardScreenCenterX = transform.x + cardLocalCenterX * transform.zoom;
    const cardScreenCenterY = transform.y + cardLocalCenterY * transform.zoom;

    // Ruler start year in screen coordinates:
    const rulerScreenX = transform.x + yearToX(hoveredMovement.startYear) * transform.zoom;
    const rulerTopY = 24; // directly beneath the year pill badge in sticky ruler
    const rulerExitY = 66; // at the bottom border of the sticky ruler

    // Regional country points in screen coordinates:
    const trackBottom = trackContentTop + movementTrackHeight + 8;
    const regionListTop = trackBottom + 12 + 24;
    const regionRowStep = 186;
    const regionTrackCenterOffset = 96;

    const screenPoints: Array<{ x: number; y: number }> = [];

    // Point 0: at the ruler badge
    screenPoints.push({ x: rulerScreenX, y: rulerTopY });
    // Point 1: vertical guide passing through the ruler bottom border
    screenPoints.push({ x: rulerScreenX, y: rulerExitY });
    // Point 2: card center
    screenPoints.push({ x: cardScreenCenterX, y: cardScreenCenterY });

    // Points 3+: country layers
    const countryNodes: Array<{
      regionId: string;
      regionName: string;
      year: number;
      yearFormatted: string;
      localX: number;
      localY: number;
      x: number;
      y: number;
      status: string;
    }> = [];

    visibleRegions.forEach((region, idx) => {
      const countryYear = getCountryMovementYear(hoveredMovement, region.id);
      const countryLocalX = yearToX(countryYear);
      const countryLocalY = regionListTop + idx * regionRowStep + regionTrackCenterOffset;
      const screenX = transform.x + countryLocalX * transform.zoom;
      const screenY = transform.y + countryLocalY * transform.zoom;

      screenPoints.push({ x: screenX, y: screenY });

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
        x: screenX,
        y: screenY,
        status: getCountryStatusAtYear(region.id, countryYear)
      });
    });

    const pathD = generateSmoothVerticalSpline(screenPoints);

    return {
      rulerScreenX,
      rulerTopY,
      rulerExitY,
      cardCenterX: cardScreenCenterX,
      cardCenterY: cardScreenCenterY,
      pathD,
      countryNodes
    };
  }, [hoveredMovement, visibleRegions, yearToX, cardHeight, laneGap, movementTrackHeight, getCountryStatusAtYear, transform.x, transform.y, transform.zoom]);

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
      className={`relative w-full h-[calc(100vh-50px)] overflow-hidden select-none transition-colors duration-200 ${
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

      {/* Floating Monochromatic Zoom Controls */}
      <div 
        className={`absolute top-4 right-4 z-40 flex flex-col gap-1.5 p-1.5 rounded-xl border shadow-lg backdrop-blur-md transition-colors ${
          isDark 
            ? 'bg-[#18181b]/90 border-neutral-800 text-neutral-200' 
            : 'bg-[#faf8f5]/90 border-[#e2ddd5] text-neutral-800'
        }`}
      >
        <button
          onClick={() => {
            stopInertia();
            setTransform(prev => {
              const newZoom = Math.min(2.8, prev.zoom * 1.2);
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
          }}
          className={`p-2 rounded-lg transition-colors ${
            isDark ? 'hover:bg-neutral-800 text-neutral-200' : 'hover:bg-neutral-200 text-neutral-800'
          }`}
          title="Aproximar (+)"
        >
          <ZoomIn className="w-4 h-4" />
        </button>
        <button
          onClick={() => {
            stopInertia();
            setTransform(prev => {
              const newZoom = Math.max(0.35, prev.zoom / 1.2);
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
          }}
          className={`p-2 rounded-lg transition-colors ${
            isDark ? 'hover:bg-neutral-800 text-neutral-200' : 'hover:bg-neutral-200 text-neutral-800'
          }`}
          title="Afastar (-)"
        >
          <ZoomOut className="w-4 h-4" />
        </button>
        <button
          onClick={() => {
            stopInertia();
            setTransform({ x: -800, y: 0, zoom: 1 });
          }}
          className={`p-2 rounded-lg transition-colors ${
            isDark ? 'hover:bg-neutral-800 text-neutral-200' : 'hover:bg-neutral-200 text-neutral-800'
          }`}
          title="Resetar Posição"
        >
          <RotateCcw className="w-4 h-4" />
        </button>
        <div 
          className={`text-[10px] text-center font-mono font-medium border-t pt-1 ${
            isDark ? 'border-neutral-800 text-neutral-400' : 'border-[#e2ddd5] text-neutral-600'
          }`}
        >
          {Math.round(transform.zoom * 100)}%
        </div>
      </div>

      {/* =========================================================== */}
      {/* STICKY TIMELINE YEAR RULER (FIXED ON SCREEN TOP)            */}
      {/* =========================================================== */}
      <div 
        className={`absolute top-0 left-0 right-0 z-30 shadow-md py-2 overflow-hidden pointer-events-auto border-b backdrop-blur-md select-none ${
          isDark 
            ? 'bg-[#18181b]/95 border-neutral-800/90 text-neutral-200' 
            : 'bg-[#faf8f5]/95 border-[#e5e0d8] text-neutral-800'
        }`}
      >
        {/* Subtle Pull-To-Refresh Mini Loading Icon at the limit of the ruler bar */}
        {holdProgress > 0 && (
          <div 
            className="absolute z-50 pointer-events-none transition-all duration-75 flex items-center justify-center"
            style={{
              left: `${Math.max(12, transform.x + yearToX(-4000000) * transform.zoom - 15)}px`,
              top: '50%',
              transform: 'translateY(-50%)'
            }}
          >
            <div className={`w-7 h-7 rounded-full p-1 shadow-md border flex items-center justify-center backdrop-blur-md ${
              isDark 
                ? 'bg-neutral-900/95 border-neutral-700/80 text-amber-400' 
                : 'bg-white/95 border-neutral-300 text-amber-500'
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
            {ERAS.map((era) => {
              const startX = yearToX(era.startYear) * transform.zoom;
              const endX = yearToX(era.endYear) * transform.zoom;
              const width = Math.max(70, endX - startX);
              return (
                <div
                  key={era.id}
                  onClick={() => panToYear(era.startYear)}
                  className={`absolute top-0 h-7 rounded-md border px-2.5 py-0.5 flex items-center justify-between text-[11px] font-semibold cursor-pointer transition-colors ${
                    isDark 
                      ? 'bg-neutral-800/70 border-neutral-700/80 text-neutral-200 hover:bg-neutral-700/90' 
                      : 'bg-[#ede8df] border-[#ded8cc] text-neutral-800 hover:bg-[#e4ded4]'
                  }`}
                  style={{
                    left: `${startX}px`,
                    width: `${width - 4}px`
                  }}
                >
                  <span className="truncate pr-1">{era.name}</span>
                  <span className={`text-[9px] font-mono shrink-0 ${isDark ? 'text-neutral-400' : 'text-neutral-500'}`}>
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
            {/* Year 0 Red Indicator Line in Sticky Ruler */}
            <div
              className="absolute top-0 bottom-0 -translate-x-1/2 flex flex-col items-center pointer-events-none z-30"
              style={{ left: `${yearToX(0) * transform.zoom}px` }}
            >
              <div className="w-1 h-full bg-red-500 shadow-[0_0_8px_rgba(239,68,68,0.9)]" />
              <span className="absolute -top-1 px-1.5 py-0.5 rounded text-[8px] font-mono font-black bg-red-600 text-white shadow-xs">
                Ano 0
              </span>
            </div>

            {/* 4 Million BCE Boundary Line in Sticky Ruler */}
            <div
              className="absolute top-0 bottom-0 -translate-x-1/2 flex flex-col items-center pointer-events-none z-30"
              style={{ left: `${yearToX(-4000000) * transform.zoom}px` }}
            >
              <div className="w-1 h-full bg-amber-500/70" />
              <span className="absolute -top-1 px-1.5 py-0.5 rounded text-[8px] font-mono font-bold bg-amber-600/90 text-white shadow-xs whitespace-nowrap">
                4 Ma a.C.
              </span>
            </div>

            {/* Hover Start Year Badge in Sticky Ruler */}
            {hoveredMovement && (
              <div
                className="absolute top-0 -translate-x-1/2 flex flex-col items-center pointer-events-none z-40"
                style={{ left: `${yearToX(hoveredMovement.startYear) * transform.zoom}px` }}
              >
                <span className="px-2 py-0.5 rounded text-[10px] font-mono font-bold bg-sky-500 text-white shadow-md border border-sky-300 whitespace-nowrap">
                  Início: {hoveredMovement.startYear < 0 ? `${Math.abs(hoveredMovement.startYear)} a.C.` : `${hoveredMovement.startYear} d.C.`}
                </span>
              </div>
            )}

            {[-4000000, -40000, -25000, -10000, -5000, -3000, -1000, 0, 500, 1000, 1400, 1500, 1600, 1700, 1780, 1850, 1900, 1920, 1945, 1970, 2000, 2026].map(year => {
              const posX = yearToX(year) * transform.zoom;
              const formattedYear = year === -4000000 
                ? '4 Ma a.C.' 
                : year < 0 
                  ? `${Math.abs(year)} a.C.` 
                  : `${year} d.C.`;
              const isYearZero = year === 0;
              const isLimitYear = year === -4000000;
              const isMajor = isYearZero || isLimitYear || Math.abs(year) >= 10000 || year === 0 || year === 1500 || year === 2000 || year === 2026;

              // Optimize readability when zoomed out
              if (transform.zoom < 0.65 && !isMajor && year % 1000 !== 0) return null;

              return (
                <div
                  key={year}
                  className="absolute top-0 -translate-x-1/2 flex flex-col items-center"
                  style={{ left: `${posX}px` }}
                >
                  <div 
                    className={`w-0.5 ${
                      isYearZero 
                        ? 'h-3 bg-red-500 w-1' 
                        : isLimitYear
                          ? 'h-3 bg-amber-500 w-1'
                          : 'h-1.5 mb-0.5 ' + (isDark ? 'bg-neutral-700' : 'bg-neutral-300')
                    }`} 
                  />
                  <span className={isYearZero ? 'text-red-500 font-extrabold text-[11px]' : isLimitYear ? 'text-amber-400 font-bold text-[10px]' : ''}>
                    {isYearZero ? '0' : formattedYear}
                  </span>
                </div>
              );
            })}
          </div>
        </div>
      </div>

      {/* =========================================================== */}
      {/* CONTINUOUS UNBROKEN HOVER CONNECTION LINE (VIEWPORT LEVEL)  */}
      {/* =========================================================== */}
      {curveData && (
        <svg 
          className="absolute inset-0 w-full h-full pointer-events-none z-35 overflow-visible"
        >
          <defs>
            <filter id="softGlowLine" x="-30%" y="-30%" width="160%" height="160%">
              <feGaussianBlur stdDeviation="3.5" result="blur" />
              <feMerge>
                <feMergeNode in="blur" />
                <feMergeNode in="SourceGraphic" />
              </feMerge>
            </filter>

            <linearGradient id="softLineGradient" x1="0%" y1="0%" x2="0%" y2="100%">
              <stop offset="0%" stopColor="#38bdf8" stopOpacity="0.95" />
              <stop offset="35%" stopColor="#60a5fa" stopOpacity="0.85" />
              <stop offset="70%" stopColor="#38bdf8" stopOpacity="0.8" />
              <stop offset="100%" stopColor="#818cf8" stopOpacity="0.65" />
            </linearGradient>
          </defs>

          {/* Ambient Glow Halo underneath the curve */}
          <path
            d={curveData.pathD}
            fill="none"
            stroke="#38bdf8"
            strokeWidth="6"
            strokeOpacity="0.18"
            strokeLinecap="round"
          />

          {/* Main Continuous Crisp Line */}
          <path
            d={curveData.pathD}
            fill="none"
            stroke="url(#softLineGradient)"
            strokeWidth="2.5"
            strokeLinecap="round"
            strokeLinejoin="round"
            filter="url(#softGlowLine)"
          />

          {/* Subtle Connection Pin at sticky ruler base */}
          <circle
            cx={curveData.rulerScreenX}
            cy={curveData.rulerExitY}
            r="3"
            fill="#38bdf8"
            stroke="#ffffff"
            strokeWidth="1.5"
          />

          {/* Soft Glow Center Dot inside the hovered card */}
          <circle
            cx={curveData.cardCenterX}
            cy={curveData.cardCenterY}
            r="4.5"
            fill="#38bdf8"
            stroke="#ffffff"
            strokeWidth="2"
            className="animate-pulse"
          />
        </svg>
      )}

      {/* =========================================================== */}
      {/* THE TRANSFORMABLE 2D CANVAS WORLD                           */}
      {/* =========================================================== */}
      <div
        className="absolute top-0 left-0 origin-top-left will-change-transform"
        style={{
          transform: `translate3d(${transform.x}px, ${transform.y}px, 0px) scale(${transform.zoom})`,
          width: '10000px',
          height: '4000px',
          paddingTop: '75px'
        }}
      >
        {/* Subtle 4 Million Years BCE Marker across Canvas */}
        <div
          className="absolute top-0 bottom-0 pointer-events-none z-10"
          style={{ left: `${yearToX(-4000000)}px` }}
        >
          {/* Subtle Vertical Amber Line */}
          <div className="w-0.5 h-full bg-amber-500/40" />
          <div className="sticky top-20 -translate-x-1/2 px-2 py-0.5 rounded text-[9px] font-mono text-amber-500/80 whitespace-nowrap">
            4 Ma a.C.
          </div>
        </div>

        {/* Permanent Year 0 Red Vertical Line across Canvas */}
        <div
          className="absolute top-0 bottom-0 pointer-events-none z-10"
          style={{ left: `${yearToX(0)}px` }}
        >
          <div className="w-0.5 h-full bg-red-500/80 shadow-[0_0_8px_rgba(239,68,68,0.5)] border-r border-red-500/40" />
          <div className="sticky top-20 -translate-x-1/2 px-2.5 py-1 rounded-full text-[10px] font-bold font-mono bg-red-600 text-white shadow-md border border-red-400 whitespace-nowrap">
            Ano 0 (Marco Histórico)
          </div>
        </div>
        
        {/* CENTRAL TRACK: ART MOVEMENTS TIMELINE WITH VERTICAL LANE STACKING */}
        <div className="relative mt-2 mb-3 py-2">
          {/* Main Central Monochromatic Guide Line */}
          <div 
            className={`absolute top-1/2 left-0 right-0 h-0.5 -translate-y-1/2 ${
              isDark ? 'bg-neutral-800' : 'bg-[#e2ddd5]'
            }`} 
          />

          {/* Render Movement Cards Stacked Vertically in Lanes for Overlapping Periods */}
          <div 
            className="relative"
            style={{ height: `${movementTrackHeight}px` }}
          >
            {movementLanes.positionedMovements.map((m) => {
              const topOffset = m.lane * (cardHeight + laneGap) + 12;
              const famousArtwork = m.famousWorks[0];
              const match = isHighlighted(m);
              const isHovered = hoveredMovement?.id === m.id;

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
                  className={`interactive-card absolute rounded-2xl overflow-hidden border shadow-sm cursor-pointer group select-none transition-all duration-200 ${
                    match ? 'opacity-100' : 'opacity-25'
                  } ${
                    isHovered
                      ? 'ring-1 ring-sky-400/80 shadow-[0_0_30px_rgba(56,189,248,0.32),0_0_15px_rgba(56,189,248,0.2)] border-sky-400/70 z-20'
                      : ''
                  } ${
                    isDark 
                      ? 'border-neutral-700/80 hover:border-neutral-400 bg-[#202024]' 
                      : 'border-[#ded8cc] hover:border-neutral-600 bg-white'
                  }`}
                  style={{
                    left: `${m.startX}px`,
                    top: `${topOffset}px`,
                    width: `${m.cardWidth}px`,
                    height: `${cardHeight}px`
                  }}
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

                  {/* Monochromatic Vignette Overlay for High Legibility */}
                  <div 
                    className={`absolute inset-0 pointer-events-none ${
                      isDark 
                        ? 'bg-gradient-to-t from-[#18181b] via-[#18181b]/80 via-45% to-[#18181b]/20' 
                        : 'bg-gradient-to-t from-[#faf8f5] via-[#faf8f5]/85 via-50% to-[#faf8f5]/25'
                    }`} 
                  />

                  {/* Accent Stripe / Indicator on Hover */}
                  <div 
                    className={`absolute top-0 left-0 right-0 h-0.5 z-10 transition-colors ${
                      isHovered
                        ? 'bg-sky-400 shadow-[0_0_8px_rgba(56,189,248,0.8)]'
                        : (isDark ? 'bg-neutral-500' : 'bg-neutral-400')
                    }`}
                  />

                  {/* Subtle Center Origin Dot on Card */}
                  {isHovered && (
                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-2.5 h-2.5 rounded-full bg-sky-400 shadow-[0_0_10px_rgba(56,189,248,0.9)] ring-2 ring-white/70 pointer-events-none z-30" />
                  )}

                  {/* Content: Title on top, Years below without background and without "c." */}
                  <div className="absolute inset-0 p-3.5 flex flex-col justify-end z-10 text-left pointer-events-none">
                    <h3 
                      className={`text-sm sm:text-base font-bold tracking-tight leading-tight line-clamp-1 drop-shadow-sm ${
                        isHovered 
                          ? 'text-sky-300 drop-shadow-[0_0_6px_rgba(56,189,248,0.4)]' 
                          : (isDark ? 'text-white' : 'text-neutral-900')
                      }`}
                    >
                      {m.name}
                    </h3>
                    <p 
                      className={`text-xs sm:text-sm font-semibold tracking-tight mt-0.5 line-clamp-1 drop-shadow-xs ${
                        isDark ? 'text-neutral-200' : 'text-neutral-800'
                      }`}
                    >
                      {formatCleanPeriod(m.displayPeriod)}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* VERTICAL Y-AXIS REGIONAL CONTEXT TRACKS */}
        <div className="mt-2 space-y-3 px-4">
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
                    <span className="text-xl">{region.flagEmoji}</span>
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
                          className={`ml-2 px-2.5 py-1 rounded-md text-[11px] font-mono whitespace-nowrap shadow-lg border backdrop-blur-md max-w-sm truncate ${
                            isDark 
                              ? 'bg-[#18181b]/92 border-sky-500/40 text-sky-100 shadow-black/60' 
                              : 'bg-white/95 border-sky-400 text-sky-950 shadow-neutral-300/80'
                          }`}
                        >
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
                        className={`interactive-card absolute top-2 rounded-xl border p-2.5 shadow-xs transition-all cursor-pointer group ${
                          isDark 
                            ? 'border-neutral-700/80 bg-[#18181b]/95 hover:border-neutral-400 text-neutral-200' 
                            : 'border-[#ded8cc] bg-white hover:border-neutral-600 text-neutral-800'
                        }`}
                        style={{
                          left: `${startX}px`,
                          width: `${entryWidth}px`
                        }}
                      >
                        <div className="flex items-center justify-between mb-1">
                          <span 
                            className={`text-[10px] font-bold uppercase tracking-wider font-mono ${
                              isDark ? 'text-neutral-300' : 'text-neutral-700'
                            }`}
                          >
                            {entry.startYear < 0 ? `${Math.abs(entry.startYear)} a.C.` : entry.startYear} – {entry.endYear} d.C.
                          </span>
                        </div>

                        <div className="space-y-1 text-xs">
                          {entry.facets.arte && activeCategories.includes('arte') && (
                            <div className={`line-clamp-2 text-[11px] ${isDark ? 'text-neutral-300' : 'text-neutral-700'}`}>
                              <span className="font-semibold">Arte: </span>
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

      </div>

      {/* Persistent Spatial Minimap */}
      <Minimap
        movements={movements}
        transform={transform}
        canvasWidth={containerRef.current?.clientWidth || 1000}
        canvasHeight={containerRef.current?.clientHeight || 800}
        onPanToYear={panToYear}
        theme={theme}
      />
    </div>
  );
};
