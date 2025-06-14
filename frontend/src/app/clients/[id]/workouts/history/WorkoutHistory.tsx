'use client';

import React, { useState, useEffect } from 'react';
import { workoutService } from '@/lib/services/workout.service';
import type { WorkoutAssignment } from '@/types/workout';

interface WorkoutHistoryProps {
  clientId: string;
}

type SortField = 'date' | 'status';
type SortOrder = 'asc' | 'desc';
type StatusFilter = 'all' | 'planned' | 'in_progress' | 'complete';

export default function WorkoutHistory({ clientId }: WorkoutHistoryProps) {
  const [workouts, setWorkouts] = useState<WorkoutAssignment[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [sortField, setSortField] = useState<SortField>('date');
  const [sortOrder, setSortOrder] = useState<SortOrder>('desc');
  const [statusFilter, setStatusFilter] = useState<StatusFilter>('all');

  useEffect(() => {
    const fetchWorkouts = async () => {
      try {
        const data = await workoutService.getClientWorkouts(clientId);
        setWorkouts(data);
      } catch (err) {
        setError('Failed to load workout history');
      } finally {
        setLoading(false);
      }
    };

    fetchWorkouts();
  }, [clientId]);

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

  const filteredWorkouts = workouts
    .filter(workout => statusFilter === 'all' || workout.status === statusFilter)
    .sort((a, b) => {
      const multiplier = sortOrder === 'asc' ? 1 : -1;
      if (sortField === 'date') {
        return multiplier * (new Date(a.scheduledDate).getTime() - new Date(b.scheduledDate).getTime());
      }
      return multiplier * a.status.localeCompare(b.status);
    });

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

  return (
    <div className="space-y-6">
      {/* Filters and Sorting */}
      <div className="bg-white shadow sm:rounded-lg">
        <div className="px-4 py-5 sm:p-6">
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-3">
            <div>
              <label htmlFor="status-filter" className="block text-sm font-medium text-gray-700">
                Status
              </label>
              <select
                id="status-filter"
                value={statusFilter}
                onChange={(e) => setStatusFilter(e.target.value as StatusFilter)}
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-teal-500 focus:ring-teal-500 sm:text-sm"
              >
                <option value="all">All</option>
                <option value="planned">Planned</option>
                <option value="in_progress">In Progress</option>
                <option value="complete">Complete</option>
              </select>
            </div>

            <div>
              <label htmlFor="sort-field" className="block text-sm font-medium text-gray-700">
                Sort By
              </label>
              <select
                id="sort-field"
                value={sortField}
                onChange={(e) => setSortField(e.target.value as SortField)}
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-teal-500 focus:ring-teal-500 sm:text-sm"
              >
                <option value="date">Date</option>
                <option value="status">Status</option>
              </select>
            </div>

            <div>
              <label htmlFor="sort-order" className="block text-sm font-medium text-gray-700">
                Order
              </label>
              <select
                id="sort-order"
                value={sortOrder}
                onChange={(e) => setSortOrder(e.target.value as SortOrder)}
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-teal-500 focus:ring-teal-500 sm:text-sm"
              >
                <option value="desc">Descending</option>
                <option value="asc">Ascending</option>
              </select>
            </div>
          </div>
        </div>
      </div>

      {/* Workout List */}
      <div className="bg-white shadow overflow-hidden sm:rounded-md">
        <ul role="list" className="divide-y divide-gray-200">
          {filteredWorkouts.map((workout) => (
            <li key={workout.id}>
              <div className="px-4 py-4 sm:px-6">
                <div className="flex items-center justify-between">
                  <div className="flex flex-col">
                    <p className="text-sm font-medium text-teal-600 truncate">
                      {workout.workout.title}
                    </p>
                    <div className="mt-2 flex">
                      <div className="flex items-center text-sm text-gray-500">
                        <p>
                          Scheduled for {new Date(workout.scheduledDate).toLocaleDateString()}
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="ml-2 flex flex-shrink-0">
                    <span className={`inline-flex rounded-full px-2 text-xs font-semibold leading-5 ${getStatusColor(workout.status)}`}>
                      {workout.status.replace('_', ' ')}
                    </span>
                  </div>
                </div>
                {workout.notes && (
                  <div className="mt-2">
                    <p className="text-sm text-gray-500">{workout.notes}</p>
                  </div>
                )}
              </div>
            </li>
          ))}
        </ul>
      </div>

      {filteredWorkouts.length === 0 && (
        <div className="text-center py-12">
          <h3 className="text-lg font-medium text-gray-900">No workouts found</h3>
          <p className="mt-2 text-sm text-gray-500">
            {statusFilter === 'all' 
              ? 'No workouts have been assigned yet.'
              : `No ${statusFilter} workouts found.`}
          </p>
        </div>
      )}
    </div>
  );
} 