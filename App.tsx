
import React, { useState } from 'react';
import { LessonStepType } from './types';
import { LESSON_STEPS } from './constants';
import { ProgressBar } from './components/ProgressBar';
import { Navigation } from './components/Navigation';
import { LessonContent } from './components/LessonContent';

const App: React.FC = () => {
  const [currentStep, setCurrentStep] = useState(0);

  const handleNext = () => {
    if (currentStep < LESSON_STEPS.length - 1) {
      setCurrentStep(currentStep + 1);
    }
  };

  const handlePrev = () => {
    if (currentStep > 0) {
      setCurrentStep(currentStep - 1);
    }
  };
  
  const handleReset = () => {
    setCurrentStep(0);
  }

  const activeStep: LessonStepType = LESSON_STEPS[currentStep];
  const isLastStep = currentStep === LESSON_STEPS.length - 1;

  return (
    <div className="flex flex-col min-h-screen justify-center items-center p-4 md:p-8 bg-slate-50">
      <div className="w-full max-w-4xl mx-auto bg-white rounded-2xl shadow-2xl shadow-slate-200 overflow-hidden flex flex-col">
        <header className="p-6 border-b border-slate-200">
            <h1 className="text-2xl md:text-3xl font-bold text-slate-900 text-center">A Dimensional Shift</h1>
            <p className="text-center text-slate-500 mt-1">Understanding Imaginary Numbers</p>
        </header>

        <main className="flex-grow p-6 md:p-10">
          <ProgressBar currentStep={currentStep} totalSteps={LESSON_STEPS.length} />
          <LessonContent step={activeStep} stepNumber={currentStep + 1} />
        </main>
        
        <footer className="p-6 bg-slate-50/50 border-t border-slate-200">
          <Navigation
            currentStep={currentStep}
            totalSteps={LESSON_STEPS.length}
            onPrev={handlePrev}
            onNext={handleNext}
            onReset={handleReset}
          />
        </footer>
      </div>
       <p className="text-center text-slate-400 mt-6 text-sm">Built to inspire conceptual understanding.</p>
    </div>
  );
};

export default App;
