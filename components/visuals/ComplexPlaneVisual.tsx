
import React from 'react';

export const ComplexPlaneVisual: React.FC = () => {
  return (
    <div className="w-full max-w-xs aspect-square p-4" aria-label="The complex plane with a real and imaginary axis">
      <svg width="100%" height="100%" viewBox="-150 -150 300 300">
        <defs>
          <marker id="arrowhead-complex" markerWidth="10" markerHeight="7" refX="0" refY="3.5" orient="auto">
            <polygon points="0 0, 10 3.5, 0 7" fill="#64748b" />
          </marker>
          <pattern id="grid" width="25" height="25" patternUnits="userSpaceOnUse">
            <path d="M 25 0 L 0 0 0 25" fill="none" stroke="#e2e8f0" strokeWidth="1"/>
          </pattern>
        </defs>

        <rect x="-150" y="-150" width="300" height="300" fill="url(#grid)" />

        {/* Axes */}
        <line x1="-140" y1="0" x2="140" y2="0" stroke="#64748b" strokeWidth="2" markerEnd="url(#arrowhead-complex)" />
        <line x1="0" y1="140" x2="0" y2="-140" stroke="#64748b" strokeWidth="2" markerEnd="url(#arrowhead-complex)" />

        {/* Axis Labels */}
        <text x="120" y="15" fill="#475569" fontSize="12" fontWeight="bold">Real</text>
        <text x="-15" y="-125" transform="rotate(90, 0, -130)" fill="#475569" fontSize="12" fontWeight="bold">Imaginary</text>

        {/* Number Ticks */}
        {[1, 2, 3, 4].map(n => (
          <g key={`real-${n}`}>
            <line x1={n*25} y1="-3" x2={n*25} y2="3" stroke="#94a3b8" strokeWidth="1" />
            <line x1={-n*25} y1="-3" x2={-n*25} y2="3" stroke="#94a3b8" strokeWidth="1" />
          </g>
        ))}
        {[1, 2, 3, 4].map(n => (
          <g key={`imag-${n}`}>
            <line x1="-3" y1={-n*25} x2="3" y2={-n*25} stroke="#94a3b8" strokeWidth="1" />
            <line x1="-3" y1={n*25} x2="3" y2={n*25} stroke="#94a3b8" strokeWidth="1" />
          </g>
        ))}
        
        {/* Point i */}
        <circle cx="0" cy="-25" r="5" fill="#4f46e5" />
        <text x="8" y="-22" fill="#4f46e5" fontSize="14" fontWeight="bold" fontFamily="serif">i</text>

        {/* Point 1 */}
        <circle cx="25" cy="0" r="4" fill="#64748b" />
        <text x="29" y="15" fill="#64748b" fontSize="12" fontWeight="500">1</text>
      </svg>
    </div>
  );
};
