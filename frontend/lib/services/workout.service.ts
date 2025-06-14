import type { Workout, WorkoutAssignment } from '@/types/workout';

const API_URL = process.env.NEXT_PUBLIC_API_URL;

interface ExerciseProgress {
  exerciseId: string;
  sets: {
    reps: number;
    weight: number;
    completed: boolean;
  }[];
  notes?: string;
}

export const workoutService = {
  async getWorkouts(): Promise<Workout[]> {
    const response = await fetch(`${API_URL}/workouts`, {
      headers: {
        'Content-Type': 'application/json',
      },
      credentials: 'include',
    });

    if (!response.ok) {
      throw new Error('Failed to fetch workouts');
    }

    return response.json();
  },

  async getClientWorkouts(clientId: string): Promise<WorkoutAssignment[]> {
    const response = await fetch(`${API_URL}/clients/${clientId}/workouts`, {
      headers: {
        'Content-Type': 'application/json',
      },
      credentials: 'include',
    });

    if (!response.ok) {
      throw new Error('Failed to fetch client workouts');
    }

    return response.json();
  },

  async getWorkoutAssignment(assignmentId: string): Promise<WorkoutAssignment> {
    const response = await fetch(`${API_URL}/workout-assignments/${assignmentId}`, {
      headers: {
        'Content-Type': 'application/json',
      },
      credentials: 'include',
    });
    if (!response.ok) {
      throw new Error('Failed to fetch workout assignment');
    }
    return response.json();
  },

  async assignWorkout(clientId: string, data: {
    workoutId: string;
    scheduledDate: string;
    notes?: string;
  }): Promise<WorkoutAssignment> {
    const response = await fetch(`${API_URL}/clients/${clientId}/workouts`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      credentials: 'include',
      body: JSON.stringify(data),
    });

    if (!response.ok) {
      throw new Error('Failed to assign workout');
    }

    return response.json();
  },

  async updateWorkoutStatus(assignmentId: string, status: 'planned' | 'in_progress' | 'complete'): Promise<WorkoutAssignment> {
    const response = await fetch(`${API_URL}/workout-assignments/${assignmentId}/status`, {
      method: 'PATCH',
      headers: {
        'Content-Type': 'application/json',
      },
      credentials: 'include',
      body: JSON.stringify({ status }),
    });

    if (!response.ok) {
      throw new Error('Failed to update workout status');
    }

    return response.json();
  },

  async submitWorkoutProgress(assignmentId: string, progress: ExerciseProgress[]): Promise<WorkoutAssignment> {
    const response = await fetch(`${API_URL}/workout-assignments/${assignmentId}/progress`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      credentials: 'include',
      body: JSON.stringify({ progress }),
    });

    if (!response.ok) {
      throw new Error('Failed to submit workout progress');
    }

    return response.json();
  },
}; 