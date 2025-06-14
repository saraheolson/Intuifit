import React from 'react';
import { Workout } from '@/types/workout';

interface WorkoutDetailsProps {
  workout: Workout;
}

export default function WorkoutDetails({ workout }: WorkoutDetailsProps) {
  return (
    <div className="bg-white shadow sm:rounded-lg">
      <div className="px-4 py-5 sm:px-6">
        <h3 className="text-lg font-medium leading-6 text-gray-900">{workout.title}</h3>
        <p className="mt-1 max-w-2xl text-sm text-gray-500">{workout.description}</p>
      </div>
      <div className="border-t border-gray-200">
        <dl>
          {workout.exercises.map((exercise, index) => (
            <div
              key={exercise.id}
              className={`${
                index % 2 === 0 ? 'bg-gray-50' : 'bg-white'
              } px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6`}
            >
              <dt className="text-sm font-medium text-gray-500">{exercise.name}</dt>
              <dd className="mt-1 text-sm text-gray-900 sm:col-span-2 sm:mt-0">
                <div className="flex items-center space-x-4">
                  <span>{exercise.sets} sets</span>
                  <span>×</span>
                  <span>{exercise.reps} reps</span>
                  {exercise.weight && (
                    <>
                      <span>@</span>
                      <span>
                        {exercise.weight} {exercise.weightMeasurementType}
                      </span>
                    </>
                  )}
                </div>
                {exercise.notes && (
                  <p className="mt-2 text-sm text-gray-500">{exercise.notes}</p>
                )}
              </dd>
            </div>
          ))}
        </dl>
      </div>
    </div>
  );
} 