'use client';

import { useAuth, useUser } from '@clerk/nextjs';
import { useRouter } from 'next/navigation';
import { useEffect } from 'react';
import Navigation from '../../../components/Navigation';
import WorkoutBuilder from './WorkoutBuilder';

export default function NewWorkoutPage() {
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
                Create New Workout
              </h2>
            </div>
          </div>
          <div className="mt-8">
            <WorkoutBuilder />
          </div>
        </div>
      </main>
    </div>
  );
} 