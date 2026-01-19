
import React from 'react';

interface ProgressBarProps {
  currentStep: number;
  totalSteps: number;
}

export const ProgressBar: React.FC<ProgressBarProps> = ({ currentStep, totalSteps }) => {
  return (
    <div className="flex items-center gap-4 mb-8">
      <div className="w-full bg-slate-200 rounded-full h-2">
        <div
          className="bg-indigo-500 h-2 rounded-full transition-all duration-500 ease-in-out"
          style={{ width: `${((currentStep + 1) / totalSteps) * 100}%` }}
        />
      </div>
      <span className="text-sm font-medium text-slate-500 whitespace-nowrap">
        Step {currentStep + 1} / {totalSteps}
      </span>
    </div>
  );
};
