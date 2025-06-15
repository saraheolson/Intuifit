'use client';

import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { useAuth } from '@clerk/nextjs';
import { DragDropContext, Droppable, Draggable } from '@hello-pangea/dnd';
import { exerciseService } from '@/lib/services/exercise.service';
import { workoutService } from '@/lib/services/workout.service';
import type { Exercise } from '@/types/exercise';
import type { Workout } from '@/types/workout';

interface ExerciseWithOrder extends Exercise {
  order: number;
}

export default function WorkoutBuilder() {
  const router = useRouter();
  const { getToken } = useAuth();
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [exercises, setExercises] = useState<ExerciseWithOrder[]>([]);
  const [availableExercises, setAvailableExercises] = useState<Exercise[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [saving, setSaving] = useState(false);

  useEffect(() => {
    const fetchExercises = async () => {
      try {
        const token = await getToken();
        if (!token) {
          throw new Error('No authentication token');
        }

        const [globalExercises, coachExercises] = await Promise.all([
          exerciseService.getGlobalExercises(token),
          exerciseService.getCoachExercises(token)
        ]);
        setAvailableExercises([...globalExercises, ...coachExercises]);
      } catch (err) {
        setError('Failed to load exercises');
      } finally {
        setLoading(false);
      }
    };

    fetchExercises();
  }, [getToken]);

  const handleDragEnd = (result: any) => {
    if (!result.destination) return;

    const { source, destination } = result;

    // If dragging from available exercises to workout
    if (source.droppableId === 'available' && destination.droppableId === 'workout') {
      const exercise = availableExercises[source.index];
      const newExercise: ExerciseWithOrder = {
        ...exercise,
        order: exercises.length
      };
      setExercises([...exercises, newExercise]);
    }
    // If reordering within workout
    else if (source.droppableId === 'workout' && destination.droppableId === 'workout') {
      const newExercises = Array.from(exercises);
      const [removed] = newExercises.splice(source.index, 1);
      newExercises.splice(destination.index, 0, removed);
      // Update order numbers
      const updatedExercises = newExercises.map((ex, index) => ({
        ...ex,
        order: index
      }));
      setExercises(updatedExercises);
    }
    // If removing from workout
    else if (source.droppableId === 'workout' && destination.droppableId === 'available') {
      const newExercises = Array.from(exercises);
      newExercises.splice(source.index, 1);
      // Update order numbers
      const updatedExercises = newExercises.map((ex, index) => ({
        ...ex,
        order: index
      }));
      setExercises(updatedExercises);
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!title.trim()) {
      setError('Please enter a workout title');
      return;
    }
    if (exercises.length === 0) {
      setError('Please add at least one exercise');
      return;
    }

    setSaving(true);
    try {
      const token = await getToken();
      if (!token) {
        throw new Error('No authentication token');
      }

      const workout: Partial<Workout> = {
        title,
        description,
        exercises: exercises.map(ex => ({
          id: ex.id,
          name: ex.name,
          description: ex.description,
          sets: ex.sets,
          reps: ex.reps,
          weight: ex.weight,
          weightType: ex.weightType,
          weightMeasurementType: ex.weightMeasurementType,
          notes: ex.notes,
          isGlobal: ex.isGlobal,
          coachId: ex.coachId,
          createdAt: ex.createdAt,
          updatedAt: ex.updatedAt,
          order: ex.order
        }))
      };

      await workoutService.createWorkout(workout, token);
      router.push('/workouts');
    } catch (err) {
      setError('Failed to create workout');
    } finally {
      setSaving(false);
    }
  };

  if (loading) {
    return (
      <div className="flex justify-center items-center h-64">
        <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-teal-600"></div>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-8">
      {error && (
        <div className="rounded-md bg-red-50 p-4">
          <div className="flex">
            <div className="ml-3">
              <h3 className="text-sm font-medium text-red-800">{error}</h3>
            </div>
          </div>
        </div>
      )}

      <div className="space-y-6">
        <div>
          <label htmlFor="title" className="block text-sm font-medium text-gray-700">
            Workout Title
          </label>
          <input
            type="text"
            id="title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-teal-500 focus:ring-teal-500 sm:text-sm"
            required
          />
        </div>

        <div>
          <label htmlFor="description" className="block text-sm font-medium text-gray-700">
            Description
          </label>
          <textarea
            id="description"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            rows={3}
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-teal-500 focus:ring-teal-500 sm:text-sm"
          />
        </div>
      </div>

      <DragDropContext onDragEnd={handleDragEnd}>
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-2">
          <div>
            <h3 className="text-lg font-medium text-gray-900 mb-4">Available Exercises</h3>
            <Droppable droppableId="available">
              {(provided) => (
                <div
                  {...provided.droppableProps}
                  ref={provided.innerRef}
                  className="bg-white shadow rounded-lg p-4 min-h-[200px]"
                >
                  {availableExercises.map((exercise, index) => (
                    <Draggable key={exercise.id} draggableId={exercise.id} index={index}>
                      {(provided) => (
                        <div
                          ref={provided.innerRef}
                          {...provided.draggableProps}
                          {...provided.dragHandleProps}
                          className="bg-gray-50 p-3 rounded-md mb-2 cursor-move"
                        >
                          <p className="text-sm font-medium text-gray-900">{exercise.name}</p>
                          <p className="text-sm text-gray-500">
                            {exercise.sets} sets × {exercise.reps} reps
                            {exercise.weight > 0 && ` @ ${exercise.weight} ${exercise.weightMeasurementType}`}
                          </p>
                        </div>
                      )}
                    </Draggable>
                  ))}
                  {provided.placeholder}
                </div>
              )}
            </Droppable>
          </div>

          <div>
            <h3 className="text-lg font-medium text-gray-900 mb-4">Workout Exercises</h3>
            <Droppable droppableId="workout">
              {(provided) => (
                <div
                  {...provided.droppableProps}
                  ref={provided.innerRef}
                  className="bg-white shadow rounded-lg p-4 min-h-[200px]"
                >
                  {exercises.map((exercise, index) => (
                    <Draggable key={exercise.id} draggableId={exercise.id} index={index}>
                      {(provided) => (
                        <div
                          ref={provided.innerRef}
                          {...provided.draggableProps}
                          {...provided.dragHandleProps}
                          className="bg-gray-50 p-3 rounded-md mb-2 cursor-move"
                        >
                          <p className="text-sm font-medium text-gray-900">{exercise.name}</p>
                          <p className="text-sm text-gray-500">
                            {exercise.sets} sets × {exercise.reps} reps
                            {exercise.weight > 0 && ` @ ${exercise.weight} ${exercise.weightMeasurementType}`}
                          </p>
                        </div>
                      )}
                    </Draggable>
                  ))}
                  {provided.placeholder}
                </div>
              )}
            </Droppable>
          </div>
        </div>
      </DragDropContext>

      <div className="flex justify-end">
        <button
          type="submit"
          disabled={saving}
          className="inline-flex justify-center rounded-md border border-transparent bg-teal-600 py-2 px-4 text-sm font-medium text-white shadow-sm hover:bg-teal-700 focus:outline-none focus:ring-2 focus:ring-teal-500 focus:ring-offset-2 disabled:opacity-50"
        >
          {saving ? 'Creating...' : 'Create Workout'}
        </button>
      </div>
    </form>
  );
} 