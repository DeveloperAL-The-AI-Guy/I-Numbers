
import React from 'react';
import type { LessonStepType } from '../types';

interface LessonContentProps {
  step: LessonStepType;
  stepNumber: number;
}

export const LessonContent: React.FC<LessonContentProps> = ({ step, stepNumber }) => {
  const VisualComponent = step.visual;

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 items-center min-h-[400px]">
      <div className="prose prose-slate max-w-none text-slate-700">
        <h2 className="text-2xl md:text-3xl font-bold !text-slate-800 !mb-6">{step.title}</h2>
        {step.content}
      </div>
      <div className="flex justify-center items-center h-full min-h-[250px] bg-slate-100 rounded-lg p-4">
        {VisualComponent && <VisualComponent key={stepNumber} />}
      </div>
    </div>
  );
};
