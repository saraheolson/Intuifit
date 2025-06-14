export interface Workout {
  id: string;
  title: string;
  description: string;
  exercises: Exercise[];
  createdAt: string;
  updatedAt: string;
}

export interface Exercise {
  id: string;
  name: string;
  sets: number;
  reps: number;
  weight: number;
  weightType: 'bodyweight' | 'kettlebell' | 'dumbbell' | 'band' | 'machine' | 'other';
  weightMeasurementType: 'lbs' | 'kg' | 'other';
  notes?: string;
}

export interface WorkoutAssignment {
  id: string;
  workoutId: string;
  clientId: string;
  workout: Workout;
  scheduledDate: string;
  status: 'planned' | 'in_progress' | 'complete';
  notes?: string;
  createdAt: string;
  updatedAt: string;
} 