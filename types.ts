
import type React from 'react';

export interface LessonStepType {
  title: string;
  content: React.ReactNode;
  visual: React.ComponentType<any>;
}
