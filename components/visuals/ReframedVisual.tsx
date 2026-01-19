
import React from 'react';

export const ReframedVisual: React.FC = () => {
  return (
    <div className="w-full max-w-xs aspect-square p-4" aria-label="The complex plane with the real number line highlighted">
      <svg width="100%" height="100%" viewBox="-150 -150 300 300">
        <defs>
          <pattern id="grid-reframed" width="25" height="25" patternUnits="userSpaceOnUse">
            <path d="M 25 0 L 0 0 0 25" fill="none" stroke="#e2e8f0" strokeWidth="0.5"/>
          </pattern>
        </defs>

        <rect x="-150" y="-150" width="300" height="300" fill="url(#grid-reframed)" />
        <rect x="-150" y="-150" width="300" height="300" fill="white" fillOpacity="0.5" />

        {/* Highlighted Plane */}
         <rect x="-150" y="-10" width="300" height="20" fill="#e0e7ff" />

        {/* Axes */}
        <line x1="-140" y1="0" x2="140" y2="0" stroke="#4338ca" strokeWidth="2.5" />
        <line x1="0" y1="140" x2="0" y2="-140" stroke="#a5b4fc" strokeWidth="1.5" strokeDasharray="4 4" />

        {/* Axis Labels */}
        <text x="100" y="-10" fill="#312e81" fontSize="12" fontWeight="bold">The Real Number Line...</text>
        <text x="10" y="-120" fill="#64748b" fontSize="12" >...is just one slice</text>
        <text x="10" y="-105" fill="#64748b" fontSize="12" >of the Complex Plane.</text>

        {/* Some points */}
        <circle cx="50" cy="0" r="4" fill="#4338ca" />
        <text x="48" y="15" fill="#4338ca" fontSize="12">2</text>
        
        <circle cx="75" cy="-50" r="4" fill="#818cf8" />
        <text x="65" y="-55" fill="#64748b" fontSize="12">3+2i</text>
      </svg>
    </div>
  );
};
