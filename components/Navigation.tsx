
import React from 'react';

interface NavigationProps {
  currentStep: number;
  totalSteps: number;
  onPrev: () => void;
  onNext: () => void;
  onReset: () => void;
}

const NavButton: React.FC<{ onClick: () => void; disabled?: boolean; children: React.ReactNode; className?: string }> = ({ onClick, disabled, children, className }) => (
  <button
    onClick={onClick}
    disabled={disabled}
    className={`px-6 py-2.5 rounded-lg text-sm font-semibold transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 disabled:opacity-50 disabled:cursor-not-allowed ${className}`}
  >
    {children}
  </button>
);

export const Navigation: React.FC<NavigationProps> = ({ currentStep, totalSteps, onPrev, onNext, onReset }) => {
  const isFirstStep = currentStep === 0;
  const isLastStep = currentStep === totalSteps - 1;

  return (
    <div className="flex justify-between items-center">
      <NavButton onClick={onPrev} disabled={isFirstStep} className="bg-white text-slate-700 border border-slate-300 hover:bg-slate-100">
        Previous
      </NavButton>
      {isLastStep ? (
        <NavButton onClick={onReset} className="bg-indigo-600 text-white hover:bg-indigo-700 shadow-sm">
          Start Over
        </NavButton>
      ) : (
        <NavButton onClick={onNext} className="bg-indigo-600 text-white hover:bg-indigo-700 shadow-sm">
          Next
        </NavButton>
      )}
    </div>
  );
};
