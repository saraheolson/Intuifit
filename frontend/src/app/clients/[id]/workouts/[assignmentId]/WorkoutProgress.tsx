import React, { useState } from 'react';
import type { Exercise } from '@/types/workout';

interface ExerciseProgress {
  exerciseId: string;
  sets: {
    reps: number;
    weight: number;
    completed: boolean;
  }[];
  notes?: string;
}

interface WorkoutProgressProps {
  exercises: Exercise[];
  onComplete: (progress: ExerciseProgress[]) => void;
  onCancel: () => void;
}

export default function WorkoutProgress({ exercises, onComplete, onCancel }: WorkoutProgressProps) {
  const [progress, setProgress] = useState<ExerciseProgress[]>(
    exercises.map(exercise => ({
      exerciseId: exercise.id,
      sets: Array(exercise.sets).fill({
        reps: exercise.reps,
        weight: exercise.weight,
        completed: false
      }),
      notes: ''
    }))
  );

  const [currentExerciseIndex, setCurrentExerciseIndex] = useState(0);
  const [currentSetIndex, setCurrentSetIndex] = useState(0);

  const currentExercise = exercises[currentExerciseIndex];
  const currentProgress = progress[currentExerciseIndex];

  const handleSetComplete = (setIndex: number, updates: { reps?: number; weight?: number }) => {
    setProgress(prev => {
      const newProgress = [...prev];
      const exerciseProgress = { ...newProgress[currentExerciseIndex] };
      const set = { ...exerciseProgress.sets[setIndex], ...updates, completed: true };
      exerciseProgress.sets[setIndex] = set;
      newProgress[currentExerciseIndex] = exerciseProgress;
      return newProgress;
    });

    // Move to next set or exercise
    if (currentSetIndex < currentExercise.sets - 1) {
      setCurrentSetIndex(currentSetIndex + 1);
    } else if (currentExerciseIndex < exercises.length - 1) {
      setCurrentExerciseIndex(currentExerciseIndex + 1);
      setCurrentSetIndex(0);
    }
  };

  const handleNotesChange = (notes: string) => {
    setProgress(prev => {
      const newProgress = [...prev];
      newProgress[currentExerciseIndex] = {
        ...newProgress[currentExerciseIndex],
        notes
      };
      return newProgress;
    });
  };

  const isComplete = progress.every(exercise => 
    exercise.sets.every(set => set.completed)
  );

  return (
    <div className="space-y-8">
      {/* Progress Header */}
      <div className="bg-white shadow sm:rounded-lg">
        <div className="px-4 py-5 sm:p-6">
          <h3 className="text-lg font-medium leading-6 text-gray-900">
            Exercise {currentExerciseIndex + 1} of {exercises.length}
          </h3>
          <div className="mt-2 max-w-xl text-sm text-gray-500">
            <p>Set {currentSetIndex + 1} of {currentExercise.sets}</p>
          </div>
        </div>
      </div>

      {/* Current Exercise */}
      <div className="bg-white shadow sm:rounded-lg">
        <div className="px-4 py-5 sm:p-6">
          <h3 className="text-lg font-medium leading-6 text-gray-900">
            {currentExercise.name}
          </h3>
          <div className="mt-4">
            <div className="space-y-4">
              <div>
                <label htmlFor="reps" className="block text-sm font-medium text-gray-700">
                  Reps Completed
                </label>
                <input
                  type="number"
                  name="reps"
                  id="reps"
                  min="0"
                  value={currentProgress.sets[currentSetIndex].reps}
                  onChange={(e) => handleSetComplete(currentSetIndex, { reps: parseInt(e.target.value) })}
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-teal-500 focus:ring-teal-500 sm:text-sm"
                />
              </div>

              {currentExercise.weight > 0 && (
                <div>
                  <label htmlFor="weight" className="block text-sm font-medium text-gray-700">
                    Weight Used ({currentExercise.weightMeasurementType})
                  </label>
                  <input
                    type="number"
                    name="weight"
                    id="weight"
                    min="0"
                    step="0.5"
                    value={currentProgress.sets[currentSetIndex].weight}
                    onChange={(e) => handleSetComplete(currentSetIndex, { weight: parseFloat(e.target.value) })}
                    className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-teal-500 focus:ring-teal-500 sm:text-sm"
                  />
                </div>
              )}

              <div>
                <label htmlFor="notes" className="block text-sm font-medium text-gray-700">
                  Notes
                </label>
                <textarea
                  id="notes"
                  name="notes"
                  rows={3}
                  value={currentProgress.notes}
                  onChange={(e) => handleNotesChange(e.target.value)}
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-teal-500 focus:ring-teal-500 sm:text-sm"
                  placeholder="Add any notes about this exercise..."
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Exercise Progress */}
      <div className="bg-white shadow sm:rounded-lg">
        <div className="px-4 py-5 sm:p-6">
          <h3 className="text-lg font-medium leading-6 text-gray-900">
            Progress
          </h3>
          <div className="mt-4">
            <div className="space-y-4">
              {exercises.map((exercise, index) => (
                <div key={exercise.id} className="flex items-center justify-between">
                  <div className="flex items-center">
                    <span className={`h-4 w-4 rounded-full ${
                      index < currentExerciseIndex
                        ? 'bg-green-400'
                        : index === currentExerciseIndex
                        ? 'bg-yellow-400'
                        : 'bg-gray-200'
                    }`} />
                    <span className="ml-3 text-sm font-medium text-gray-900">
                      {exercise.name}
                    </span>
                  </div>
                  <div className="flex space-x-2">
                    {progress[index].sets.map((set, setIndex) => (
                      <span
                        key={setIndex}
                        className={`h-2 w-2 rounded-full ${
                          set.completed ? 'bg-green-400' : 'bg-gray-200'
                        }`}
                      />
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Action Buttons */}
      <div className="flex justify-end space-x-3">
        <button
          type="button"
          onClick={onCancel}
          className="rounded-md border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-700 shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-teal-500 focus:ring-offset-2"
        >
          Cancel
        </button>
        <button
          type="button"
          onClick={() => onComplete(progress)}
          disabled={!isComplete}
          className="inline-flex justify-center rounded-md border border-transparent bg-teal-600 px-4 py-2 text-sm font-medium text-white shadow-sm hover:bg-teal-700 focus:outline-none focus:ring-2 focus:ring-teal-500 focus:ring-offset-2 disabled:opacity-50"
        >
          Complete Workout
        </button>
      </div>
    </div>
  );
} 