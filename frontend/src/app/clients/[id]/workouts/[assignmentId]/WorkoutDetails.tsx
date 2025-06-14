'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { workoutService } from '@/lib/services/workout.service';
import type { WorkoutAssignment } from '@/types/workout';
import WorkoutProgress from './WorkoutProgress';

interface WorkoutDetailsProps {
  clientId: string;
  assignmentId: string;
}

export default function WorkoutDetails({ clientId, assignmentId }: WorkoutDetailsProps) {
  const router = useRouter();
  const [assignment, setAssignment] = useState<WorkoutAssignment | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [updatingStatus, setUpdatingStatus] = useState(false);
  const [showProgress, setShowProgress] = useState(false);

  useEffect(() => {
    const fetchWorkoutDetails = async () => {
      try {
        const data = await workoutService.getWorkoutAssignment(assignmentId);
        setAssignment(data);
      } catch (err) {
        setError('Failed to load workout details');
      } finally {
        setLoading(false);
      }
    };

    fetchWorkoutDetails();
  }, [assignmentId]);

  const handleStatusUpdate = async (newStatus: 'planned' | 'in_progress' | 'complete') => {
    if (!assignment) return;

    setUpdatingStatus(true);
    try {
      await workoutService.updateWorkoutStatus(assignmentId, newStatus);
      setAssignment((prev) => prev ? { ...prev, status: newStatus } : null);
      
      if (newStatus === 'in_progress') {
        setShowProgress(true);
      }
    } catch (err) {
      setError('Failed to update workout status');
    } finally {
      setUpdatingStatus(false);
    }
  };

  const handleProgressComplete = async (progress: any) => {
    if (!assignment) return;

    try {
      await workoutService.submitWorkoutProgress(assignmentId, progress);
      await workoutService.updateWorkoutStatus(assignmentId, 'complete');
      router.push(`/clients/${clientId}/workouts`);
    } catch (err) {
      setError('Failed to submit workout progress');
    }
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'planned':
        return 'bg-blue-100 text-blue-800';
      case 'in_progress':
        return 'bg-yellow-100 text-yellow-800';
      case 'complete':
        return 'bg-green-100 text-green-800';
      default:
        return 'bg-gray-100 text-gray-800';
    }
  };

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

  if (!assignment) {
    return (
      <div className="text-center py-12">
        <h3 className="text-lg font-medium text-gray-900">Workout not found</h3>
        <p className="mt-2 text-sm text-gray-500">
          The workout you're looking for doesn't exist or has been removed.
        </p>
        <div className="mt-6">
          <Link
            href={`/clients/${clientId}/workouts`}
            className="text-teal-600 hover:text-teal-900"
          >
            ← Back to workouts
          </Link>
        </div>
      </div>
    );
  }

  if (showProgress) {
    return (
      <div>
        <div className="md:flex md:items-center md:justify-between">
          <div className="min-w-0 flex-1">
            <h2 className="text-2xl font-bold leading-7 text-gray-900 sm:truncate sm:text-3xl sm:tracking-tight">
              {assignment.workout.title}
            </h2>
          </div>
        </div>

        <WorkoutProgress
          exercises={assignment.workout.exercises}
          onComplete={handleProgressComplete}
          onCancel={() => setShowProgress(false)}
        />
      </div>
    );
  }

  return (
    <div>
      <div className="md:flex md:items-center md:justify-between">
        <div className="min-w-0 flex-1">
          <h2 className="text-2xl font-bold leading-7 text-gray-900 sm:truncate sm:text-3xl sm:tracking-tight">
            {assignment.workout.title}
          </h2>
          <div className="mt-1 flex flex-col sm:mt-0 sm:flex-row sm:flex-wrap sm:space-x-6">
            <div className="mt-2 flex items-center text-sm text-gray-500">
              Scheduled for {new Date(assignment.scheduledDate).toLocaleDateString()}
            </div>
            <div className="mt-2 flex items-center text-sm">
              <span className={`inline-flex rounded-full px-2 text-xs font-semibold leading-5 ${getStatusColor(assignment.status)}`}>
                {assignment.status.replace('_', ' ')}
              </span>
            </div>
          </div>
        </div>
        <div className="mt-4 flex md:ml-4 md:mt-0">
          <div className="flex space-x-3">
            {assignment.status === 'planned' && (
              <button
                onClick={() => handleStatusUpdate('in_progress')}
                disabled={updatingStatus}
                className="inline-flex items-center rounded-md bg-teal-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-teal-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-teal-600 disabled:opacity-50"
              >
                Start Workout
              </button>
            )}
            <Link
              href={`/clients/${clientId}/workouts`}
              className="inline-flex items-center rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50"
            >
              Back
            </Link>
          </div>
        </div>
      </div>

      <div className="mt-8">
        <div className="overflow-hidden bg-white shadow sm:rounded-lg">
          <div className="px-4 py-5 sm:p-6">
            <h3 className="text-lg font-medium leading-6 text-gray-900">Workout Description</h3>
            <div className="mt-2 max-w-xl text-sm text-gray-500">
              <p>{assignment.workout.description}</p>
            </div>
          </div>
        </div>
      </div>

      <div className="mt-8">
        <h3 className="text-lg font-medium leading-6 text-gray-900">Exercises</h3>
        <div className="mt-4 overflow-hidden bg-white shadow sm:rounded-lg">
          <ul role="list" className="divide-y divide-gray-200">
            {assignment.workout.exercises.map((exercise, index) => (
              <li key={index} className="px-4 py-4 sm:px-6">
                <div className="flex items-center justify-between">
                  <div className="flex flex-col">
                    <p className="truncate text-sm font-medium text-teal-600">{exercise.name}</p>
                    <div className="mt-2 flex">
                      <div className="flex items-center text-sm text-gray-500">
                        <p>
                          {exercise.sets} sets × {exercise.reps} reps
                          {exercise.weight > 0 && ` @ ${exercise.weight} ${exercise.weightMeasurementType}`}
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="ml-2 flex flex-shrink-0">
                    <p className="inline-flex rounded-full bg-green-100 px-2 text-xs font-semibold leading-5 text-green-800">
                      {exercise.weightType}
                    </p>
                  </div>
                </div>
                {exercise.notes && (
                  <div className="mt-2">
                    <p className="text-sm text-gray-500">{exercise.notes}</p>
                  </div>
                )}
              </li>
            ))}
          </ul>
        </div>
      </div>

      {assignment.notes && (
        <div className="mt-8">
          <div className="overflow-hidden bg-white shadow sm:rounded-lg">
            <div className="px-4 py-5 sm:p-6">
              <h3 className="text-lg font-medium leading-6 text-gray-900">Notes</h3>
              <div className="mt-2 max-w-xl text-sm text-gray-500">
                <p>{assignment.notes}</p>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
} 