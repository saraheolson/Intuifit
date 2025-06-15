import type { Workout, WorkoutAssignment } from '../../types/workout';

const API_URL = process.env.NEXT_PUBLIC_API_URL;

export const workoutService = {
  async getWorkouts(token: string): Promise<Workout[]> {
    const response = await fetch(`${API_URL}/workouts`, {
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${token}`,
      },
      credentials: 'include',
    });

    if (!response.ok) {
      throw new Error('Failed to fetch workouts');
    }

    return response.json();
  },

  async createWorkout(data: Partial<Workout>, token: string): Promise<Workout> {
    const response = await fetch(`${API_URL}/workouts`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${token}`,
      },
      credentials: 'include',
      body: JSON.stringify(data),
    });

    if (!response.ok) {
      throw new Error('Failed to create workout');
    }

    return response.json();
  },

  async getClientWorkouts(clientId: string, token: string): Promise<WorkoutAssignment[]> {
    const response = await fetch(`${API_URL}/clients/${clientId}/workouts`, {
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${token}`,
      },
      credentials: 'include',
    });

    if (!response.ok) {
      throw new Error('Failed to fetch client workouts');
    }

    return response.json();
  },

  async getWorkoutAssignment(assignmentId: string, token: string): Promise<WorkoutAssignment> {
    const response = await fetch(`${API_URL}/workout-assignments/${assignmentId}`, {
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${token}`,
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
  }, token: string): Promise<WorkoutAssignment> {
    const response = await fetch(`${API_URL}/clients/${clientId}/workouts`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${token}`,
      },
      credentials: 'include',
      body: JSON.stringify(data),
    });

    if (!response.ok) {
      throw new Error('Failed to assign workout');
    }

    return response.json();
  }
}; 