import type { Exercise } from './exercise';

export interface Workout {
  id: string;
  title: string;
  description: string;
  exercises: Exercise[];
  createdAt: string;
  updatedAt: string;
}

export interface WorkoutAssignment {
  id: string;
  workout: Workout;
  clientId: string;
  scheduledDate: string;
  status: 'planned' | 'in_progress' | 'complete';
  notes?: string;
  createdAt: string;
  updatedAt: string;
} 