import { ReactNode } from 'react';

export interface Step {
  title: string;
  icon: ReactNode;
  description: string;
  details: string[];
} 