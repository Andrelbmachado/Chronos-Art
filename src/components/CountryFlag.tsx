import React from 'react';

interface CountryFlagProps {
  regionId: string;
  className?: string;
  size?: 'sm' | 'md' | 'lg';
}

/**
 * CountryFlag renders a crisp, high-fidelity SVG flag badge.
 * Size 'md' (default) is medium-sized (~28px x 19px) - neither too small nor too big,
 * offering instant visual recognition across contextual layers.
 */
export const CountryFlag: React.FC<CountryFlagProps> = ({ 
  regionId, 
  className = '',
  size = 'md' 
}) => {
  const normId = regionId.toLowerCase().trim();

  // Dimensions based on size
  const sizeClasses = {
    sm: 'w-5 h-3.5',       // 20x14
    md: 'w-7 h-[19px]',    // 28x19 (Medium - standard for quick layer recognition)
    lg: 'w-9 h-6',         // 36x24
  }[size];

  const baseContainerClass = `${sizeClasses} rounded-[3px] overflow-hidden inline-flex shrink-0 items-center justify-center border border-black/15 dark:border-white/25 shadow-xs select-none ${className}`;

  switch (normId) {
    case 'brasil':
      return (
        <span className={baseContainerClass} title="Brasil">
          <svg viewBox="0 0 70 48" className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
            {/* Green field */}
            <rect width="70" height="48" fill="#009c3b" />
            {/* Yellow diamond */}
            <polygon points="35,6 64,24 35,42 6,24" fill="#ffdf00" />
            {/* Blue celestial globe */}
            <circle cx="35" cy="24" r="11" fill="#002776" />
            {/* White starry band */}
            <path d="M 24.5,22.8 Q 35,28 45.5,25.2 A 11,11 0 0,0 24.5,22.8" fill="#ffffff" />
          </svg>
        </span>
      );

    case 'italia':
      return (
        <span className={baseContainerClass} title="Itália">
          <svg viewBox="0 0 72 48" className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
            <rect width="24" height="48" fill="#009246" />
            <rect x="24" width="24" height="48" fill="#ffffff" />
            <rect x="48" width="24" height="48" fill="#ce2b37" />
          </svg>
        </span>
      );

    case 'franca':
      return (
        <span className={baseContainerClass} title="França">
          <svg viewBox="0 0 72 48" className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
            <rect width="24" height="48" fill="#002395" />
            <rect x="24" width="24" height="48" fill="#ffffff" />
            <rect x="48" width="24" height="48" fill="#ed2939" />
          </svg>
        </span>
      );

    case 'alemanha':
      return (
        <span className={baseContainerClass} title="Alemanha">
          <svg viewBox="0 0 72 48" className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
            <rect width="72" height="16" fill="#18181b" />
            <rect y="16" width="72" height="16" fill="#dd0000" />
            <rect y="32" width="72" height="16" fill="#ffce00" />
          </svg>
        </span>
      );

    case 'inglaterra':
    case 'reino-unido':
      return (
        <span className={baseContainerClass} title="Inglaterra / Reino Unido">
          <svg viewBox="0 0 60 40" className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
            <clipPath id="uk-clip">
              <rect width="60" height="40" />
            </clipPath>
            <g clipPath="url(#uk-clip)">
              {/* Blue field */}
              <rect width="60" height="40" fill="#012169" />
              {/* White diagonal saltires */}
              <path d="M0,0 L60,40 M60,0 L0,40" stroke="#ffffff" strokeWidth="8" />
              {/* Red diagonal saltires */}
              <path d="M0,0 L60,40 M60,0 L0,40" stroke="#c8102e" strokeWidth="4" />
              {/* White central cross */}
              <path d="M30,0 v40 M0,20 h60" stroke="#ffffff" strokeWidth="12" />
              {/* Red central cross (St George) */}
              <path d="M30,0 v40 M0,20 h60" stroke="#c8102e" strokeWidth="7" />
            </g>
          </svg>
        </span>
      );

    case 'espanha':
      return (
        <span className={baseContainerClass} title="Espanha">
          <svg viewBox="0 0 72 48" className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
            <rect width="72" height="12" fill="#aa151b" />
            <rect y="12" width="72" height="24" fill="#f1bf00" />
            <rect y="36" width="72" height="12" fill="#aa151b" />
            {/* Coat of arms silhouette */}
            <circle cx="22" cy="24" r="5" fill="#aa151b" />
            <circle cx="22" cy="24" r="3" fill="#f1bf00" />
            <rect x="21" y="16" width="2" height="4" fill="#aa151b" />
          </svg>
        </span>
      );

    case 'grecia':
      return (
        <span className={baseContainerClass} title="Grécia">
          <svg viewBox="0 0 72 48" className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
            {/* 9 blue and white stripes */}
            <rect width="72" height="48" fill="#ffffff" />
            <rect width="72" height="5.33" fill="#0d5eaf" />
            <rect y="10.66" width="72" height="5.33" fill="#0d5eaf" />
            <rect y="21.33" width="72" height="5.33" fill="#0d5eaf" />
            <rect y="32" width="72" height="5.33" fill="#0d5eaf" />
            <rect y="42.66" width="72" height="5.34" fill="#0d5eaf" />
            {/* Canton */}
            <rect width="26.66" height="26.66" fill="#0d5eaf" />
            <rect x="10.66" width="5.33" height="26.66" fill="#ffffff" />
            <rect y="10.66" width="26.66" height="5.33" fill="#ffffff" />
          </svg>
        </span>
      );

    case 'egito':
      return (
        <span className={baseContainerClass} title="Egito">
          <svg viewBox="0 0 72 48" className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
            <rect width="72" height="16" fill="#c8102e" />
            <rect y="16" width="72" height="16" fill="#ffffff" />
            <rect y="32" width="72" height="16" fill="#18181b" />
            {/* Golden eagle of Saladin */}
            <path d="M 33,21 L 39,21 L 38,27 L 36,29 L 34,27 Z" fill="#c49a45" />
            <circle cx="36" cy="19" r="1.8" fill="#c49a45" />
          </svg>
        </span>
      );

    case 'china':
      return (
        <span className={baseContainerClass} title="China">
          <svg viewBox="0 0 72 48" className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
            <rect width="72" height="48" fill="#de2910" />
            {/* Large gold star */}
            <polygon points="12,7 14,13 20,13 15,17 17,23 12,19 7,23 9,17 4,13 10,13" fill="#ffde00" />
            {/* Small stars */}
            <circle cx="24" cy="9" r="1.5" fill="#ffde00" />
            <circle cx="28" cy="13" r="1.5" fill="#ffde00" />
            <circle cx="28" cy="19" r="1.5" fill="#ffde00" />
            <circle cx="24" cy="24" r="1.5" fill="#ffde00" />
          </svg>
        </span>
      );

    case 'japao':
      return (
        <span className={baseContainerClass} title="Japão">
          <svg viewBox="0 0 72 48" className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
            <rect width="72" height="48" fill="#ffffff" />
            <circle cx="36" cy="24" r="14" fill="#bc002d" />
          </svg>
        </span>
      );

    case 'mesopotamia':
      return (
        <span className={baseContainerClass} title="Mesopotâmia">
          <svg viewBox="0 0 72 48" className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
            {/* Lapis lazuli blue field with golden terracotta borders */}
            <rect width="72" height="48" fill="#1e3a8a" />
            <rect width="72" height="6" fill="#d97706" />
            <rect y="42" width="72" height="6" fill="#d97706" />
            {/* Stylized Babylonian Ziggurat / Arch */}
            <polygon points="36,12 48,34 24,34" fill="#f59e0b" opacity="0.9" />
            <rect x="33" y="24" width="6" height="10" fill="#1e3a8a" />
            <circle cx="36" cy="16" r="2.5" fill="#ffffff" />
          </svg>
        </span>
      );

    case 'america-pre-colombiana':
      return (
        <span className={baseContainerClass} title="América Pré-Colombiana">
          <svg viewBox="0 0 72 48" className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
            {/* Jade emerald green & Inca solar gold */}
            <rect width="72" height="48" fill="#047857" />
            {/* Stepped Pyramid outline */}
            <polygon points="36,10 42,16 46,16 52,24 56,24 62,36 10,36 16,24 20,24 26,16 30,16" fill="#f59e0b" />
            <circle cx="36" cy="22" r="4" fill="#dc2626" />
          </svg>
        </span>
      );

    case 'africa':
      return (
        <span className={baseContainerClass} title="África Subsariana">
          <svg viewBox="0 0 72 48" className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
            {/* Pan-African red, black, green stripes */}
            <rect width="72" height="16" fill="#b91c1c" />
            <rect y="16" width="72" height="16" fill="#18181b" />
            <rect y="32" width="72" height="16" fill="#15803d" />
            {/* Gold sun center */}
            <circle cx="36" cy="24" r="5" fill="#facc15" />
          </svg>
        </span>
      );

    case 'oriente-medio':
      return (
        <span className={baseContainerClass} title="Oriente Médio & Islão">
          <svg viewBox="0 0 72 48" className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
            {/* Deep Islamic emerald green field */}
            <rect width="72" height="48" fill="#0f766e" />
            {/* Gold Crescent & Star */}
            <circle cx="35" cy="24" r="10" fill="#fbbf24" />
            <circle cx="38" cy="24" r="8.5" fill="#0f766e" />
            <polygon points="40,24 43,26 42,22 45,20 41,20 40,16 39,20 35,20 38,22 37,26" fill="#fbbf24" />
          </svg>
        </span>
      );

    default:
      return (
        <span className={baseContainerClass} title={regionId}>
          <span className="text-xs">🌐</span>
        </span>
      );
  }
};
