
import React from 'react';

export const NumberLineVisual: React.FC = () => {
  return (
    <div className="w-full max-w-md p-4" aria-label="A horizontal number line from -3 to 3">
        <p className="text-center text-sm text-slate-600 mb-4 font-semibold">The Real Number Line</p>
        <div className="relative h-16 w-full">
            <svg width="100%" height="100%" viewBox="0 0 300 50">
                {/* Arrowhead definition */}
                <defs>
                    <marker id="arrowhead" markerWidth="10" markerHeight="7" refX="0" refY="3.5" orient="auto">
                        <polygon points="0 0, 10 3.5, 0 7" fill="#64748b" />
                    </marker>
                </defs>
                
                {/* Line */}
                <line x1="10" y1="25" x2="290" y2="25" stroke="#64748b" strokeWidth="2" markerEnd="url(#arrowhead)" markerStart="url(#arrowhead)" />
                
                {/* Ticks and labels */}
                {[-3, -2, -1, 0, 1, 2, 3].map((num, i) => {
                    const x = 150 + num * 40;
                    return (
                        <g key={num}>
                            <line x1={x} y1="20" x2={x} y2="30" stroke="#64748b" strokeWidth="1.5" />
                            <text x={x} y="45" textAnchor="middle" fontSize="12" fill="#475569" fontWeight="500">
                                {num}
                            </text>
                        </g>
                    );
                })}
            </svg>
        </div>
        <p className="text-center text-sm text-slate-500 mt-4 italic">Where is <code className="text-indigo-600">\sqrt{'{'}-1{'}'}</code>?</p>
    </div>
  );
};
