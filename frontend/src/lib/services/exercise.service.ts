import type { Exercise } from '../../types/exercise';

const API_URL = process.env.NEXT_PUBLIC_API_URL;

export const exerciseService = {
  async getGlobalExercises(token: string): Promise<Exercise[]> {
    const response = await fetch(`${API_URL}/exercises/global`, {
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${token}`,
      },
      credentials: 'include',
    });

    if (!response.ok) {
      throw new Error('Failed to fetch global exercises');
    }

    return response.json();
  },

  async getCoachExercises(token: string): Promise<Exercise[]> {
    const response = await fetch(`${API_URL}/exercises/coach`, {
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${token}`,
      },
      credentials: 'include',
    });

    if (!response.ok) {
      throw new Error('Failed to fetch coach exercises');
    }

    return response.json();
  },

  async createExercise(data: Partial<Exercise>, token: string): Promise<Exercise> {
    const response = await fetch(`${API_URL}/exercises`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${token}`,
      },
      credentials: 'include',
      body: JSON.stringify(data),
    });

    if (!response.ok) {
      throw new Error('Failed to create exercise');
    }

    return response.json();
  },

  async updateExercise(id: string, data: Partial<Exercise>, token: string): Promise<Exercise> {
    const response = await fetch(`${API_URL}/exercises/${id}`, {
      method: 'PATCH',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${token}`,
      },
      credentials: 'include',
      body: JSON.stringify(data),
    });

    if (!response.ok) {
      throw new Error('Failed to update exercise');
    }

    return response.json();
  },

  async deleteExercise(id: string, token: string): Promise<void> {
    const response = await fetch(`${API_URL}/exercises/${id}`, {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${token}`,
      },
      credentials: 'include',
    });

    if (!response.ok) {
      throw new Error('Failed to delete exercise');
    }
  },
}; 