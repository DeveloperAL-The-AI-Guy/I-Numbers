
import React, { useState, useEffect } from 'react';

const positions = [
  { x: 100, y: 0, label: '1', color: '#64748b' },
  { x: 0, y: -100, label: 'i', color: '#4f46e5' },
  { x: -100, y: 0, label: '-1', color: '#64748b' },
  { x: 0, y: 100, label: '-i', color: '#4f46e5' },
];

const labels = [
    <>1 &rarr; i</>,
    <>i &rarr; -1</>,
    <>-1 &rarr; -i</>,
    <>-i &rarr; 1</>
]

export const RotationVisual: React.FC = () => {
  const [rotation, setRotation] = useState(0);

  const handleClick = () => {
    setRotation(prev => (prev + 90) % 360);
  };
  
  useEffect(() => {
    // Reset animation for next step
  }, []);

  const pointIndex = (rotation / 90) % 4;
  const currentPos = positions[pointIndex];

  return (
    <div className="w-full max-w-sm flex flex-col items-center">
      <div className="w-full max-w-xs aspect-square p-4" aria-label="An animation showing rotation in the complex plane">
        <svg width="100%" height="100%" viewBox="-150 -150 300 300">
          <defs>
            <marker id="arrowhead-rot" markerWidth="10" markerHeight="7" refX="0" refY="3.5" orient="auto">
              <polygon points="0 0, 10 3.5, 0 7" fill="#94a3b8" />
            </marker>
          </defs>

          {/* Grid lines */}
          <line x1="-140" y1="0" x2="140" y2="0" stroke="#e2e8f0" strokeWidth="1.5" />
          <line x1="0" y1="140" x2="0" y2="-140" stroke="#e2e8f0" strokeWidth="1.5" />
          
           {/* Axes */}
          <line x1="-140" y1="0" x2="140" y2="0" stroke="#94a3b8" strokeWidth="1" markerEnd="url(#arrowhead-rot)" />
          <line x1="0" y1="140" x2="0" y2="-140" stroke="#94a3b8" strokeWidth="1" markerEnd="url(#arrowhead-rot)" />


          {/* Rotation arc path */}
          {rotation > 0 && 
            <path 
                d={`M 100 0 A 100 100 0 ${rotation > 180 ? 1 : 0} 1 ${currentPos.x} ${currentPos.y}`}
                fill="none" 
                stroke="#a5b4fc"
                strokeWidth="2" 
                strokeDasharray="4 4"
            />
          }

          {/* Rotating Vector */}
          <g style={{ transform: `rotate(${rotation}deg)`, transition: 'transform 0.5s ease-in-out' }}>
              <line x1="0" y1="0" x2="100" y2="0" stroke={currentPos.color} strokeWidth="3" markerEnd="url(#arrowhead-rot)" />
          </g>
          
          {/* Point and Label */}
          <g style={{ transform: `translate(${currentPos.x}px, ${currentPos.y}px)`, transition: 'transform 0.5s ease-in-out' }}>
             <circle cx="0" cy="0" r="6" fill={currentPos.color} />
             <text x="10" y="-10" fontSize="16" fontWeight="bold" fill={currentPos.color} fontFamily="serif" style={{transform: 'translateY(5px)'}}>{currentPos.label}</text>
          </g>
          
        </svg>
      </div>
       <button 
        onClick={handleClick}
        className="mt-4 px-5 py-2 bg-indigo-100 text-indigo-700 font-semibold rounded-lg hover:bg-indigo-200 transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
      >
        Multiply by <i className="font-serif italic not-italic mx-1">i</i> : {labels[pointIndex]}
      </button>
    </div>
  );
};
