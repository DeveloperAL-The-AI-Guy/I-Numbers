
import React from 'react';

export const MobiusStripVisual: React.FC = () => {
  return (
    <div className="w-full max-w-xs flex flex-col items-center p-4">
      <svg width="100%" viewBox="-100 -60 200 120" aria-label="A Möbius strip with an ant crawling along its single surface.">
        <defs>
          <linearGradient id="mobiusGradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" style={{ stopColor: '#c7d2fe', stopOpacity: 1 }} />
            <stop offset="100%" style={{ stopColor: '#a5b4fc', stopOpacity: 1 }} />
          </linearGradient>
        </defs>
        
        {/* Main Mobius path */}
        <path
          d="M 80 0 C 80 44.18 -80 44.18 -80 0 C -80 -44.18 80 -44.18 80 0 Z"
          fill="url(#mobiusGradient)"
          stroke="#6366f1"
          strokeWidth="1"
        />
        <path
          d="M 60 0 C 60 33.14 -60 33.14 -60 0 C -60 -33.14 60 -33.14 60 0 Z"
          fill="#f1f5f9"
          stroke="#818cf8"
          strokeWidth="0.5"
        />

        {/* Ant on path animation */}
        <g>
            <circle cx="0" cy="0" r="3" fill="#ef4444">
                 <animateMotion dur="8s" repeatCount="indefinite" rotate="auto">
                    <mpath href="#antPath"/>
                 </animateMotion>
            </circle>
            <path id="antPath" d="M 70,0 A 70,38.5 0 1 1 -70,0 A 70,38.5 0 1 1 70,0" fill="none"/>
        </g>
      </svg>
      <p className="text-center text-sm text-slate-600 mt-4">A twist creates a single continuous surface, removing the distinction between "inside" and "outside."</p>
    </div>
  );
};
