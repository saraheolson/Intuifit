export interface Client {
  id: string;
  firstName: string;
  lastName: string;
  email: string;
  goals: string;
  status: 'active' | 'inactive';
  lastWorkout?: string;
  createdAt: string;
  updatedAt: string;
} 