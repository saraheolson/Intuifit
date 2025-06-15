'use client';

import { useState, useEffect } from 'react';
import { workoutService } from '@/lib/services/workout.service';
import type { Workout } from '@/types/workout';
import Link from 'next/link';
import { useAuth } from '@clerk/nextjs';

export default function WorkoutsList() {
  const [workouts, setWorkouts] = useState<Workout[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const { getToken } = useAuth();

  useEffect(() => {
    const fetchWorkouts = async () => {
      try {
        setLoading(true);
        const token = await getToken();
        if (!token) {
          throw new Error('No authentication token available');
        }
        const data = await workoutService.getWorkouts(token);
        setWorkouts(data);
        setError(null);
      } catch (err) {
        console.error('Error fetching workouts:', err);
        setError('Failed to load workouts. Please try again later.');
      } finally {
        setLoading(false);
      }
    };

    fetchWorkouts();
  }, [getToken]);

  if (loading) {
    return (
      <div className="flex justify-center items-center h-64">
        <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-teal-600"></div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="rounded-md bg-red-50 p-4">
        <div className="flex">
          <div className="ml-3">
            <h3 className="text-sm font-medium text-red-800">{error}</h3>
          </div>
        </div>
      </div>
    );
  }

  if (workouts.length === 0) {
    return (
      <div className="text-center py-12">
        <h3 className="text-lg font-medium text-gray-900">No workouts found</h3>
        <p className="mt-2 text-sm text-gray-500">Get started by creating a new workout.</p>
        <div className="mt-6">
          <Link
            href="/workouts/new"
            className="inline-flex items-center px-4 py-2 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-teal-600 hover:bg-teal-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-teal-500"
          >
            Create Workout
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="space-y-4">
      {workouts.map((workout) => (
        <div
          key={workout.id}
          className="bg-white shadow rounded-lg p-6 hover:shadow-md transition-shadow"
        >
          <Link href={`/workouts/${workout.id}`}>
            <h3 className="text-lg font-medium text-gray-900">{workout.title}</h3>
            <p className="mt-1 text-sm text-gray-500">{workout.description}</p>
            <div className="mt-2 text-sm text-gray-500">
              {workout.exercises.length} exercises
            </div>
          </Link>
        </div>
      ))}
    </div>
  );
} 