export type WeightType = 'fixed' | 'percentage' | 'rpe' | 'custom';
export type WeightMeasurementType = 'kg' | 'lbs' | '%' | 'rpe';

export interface Exercise {
  id: string;
  name: string;
  description?: string;
  sets: number;
  reps: number;
  weight: number;
  weightType: WeightType;
  weightMeasurementType: WeightMeasurementType;
  notes?: string;
  isGlobal: boolean;
  coachId?: string;
  createdAt: string;
  updatedAt: string;
} 