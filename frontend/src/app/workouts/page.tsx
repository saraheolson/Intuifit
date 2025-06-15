'use client';

import { useAuth, useUser } from '@clerk/nextjs';
import { useRouter } from 'next/navigation';
import { useEffect } from 'react';
import Navigation from '../../components/Navigation';
import WorkoutsList from './WorkoutsList';

export default function WorkoutsPage() {
  const { userId, isLoaded: isAuthLoaded } = useAuth();
  const { user } = useUser();
  const router = useRouter();

  useEffect(() => {
    if (isAuthLoaded && !userId) {
      router.push('/sign-in');
      return;
    }

    const role = user?.publicMetadata?.role as string;
    console.log('Current role:', role);
    
    if (role !== 'coach' && role !== 'team_coach' && role !== 'COACH' && role !== 'TEAM_COACH') {
      console.log('Invalid role, redirecting to home');
      router.push('/');
    }
  }, [isAuthLoaded, userId, user, router]);

  if (!isAuthLoaded || !userId) {
    return null;
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <Navigation />
      <main className="py-10">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="md:flex md:items-center md:justify-between">
            <div className="min-w-0 flex-1">
              <h2 className="text-2xl font-bold leading-7 text-gray-900 sm:truncate sm:text-3xl sm:tracking-tight">
                Workouts
              </h2>
            </div>
            <div className="mt-4 flex md:ml-4 md:mt-0">
              <button
                onClick={() => router.push('/workouts/new')}
                className="ml-3 inline-flex items-center rounded-md bg-teal-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-teal-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-teal-600"
              >
                Create Workout
              </button>
            </div>
          </div>
          <div className="mt-8">
            <WorkoutsList />
          </div>
        </div>
      </main>
    </div>
  );
} 