import React from 'react';
import { auth } from '@clerk/nextjs';
import { redirect } from 'next/navigation';
import Navigation from '@/components/Navigation';
import Link from 'next/link';
import AssignWorkoutForm from './AssignWorkoutForm';

export default async function AssignWorkoutPage({
  params,
}: {
  params: { id: string };
}) {
  const { userId, sessionClaims } = await auth();
  
  if (!userId) {
    redirect('/sign-in');
  }

  const role = sessionClaims?.role as string;
  if (role !== 'coach' && role !== 'team_coach') {
    redirect('/');
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <Navigation />
      
      <main className="py-10">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="md:flex md:items-center md:justify-between">
            <div className="min-w-0 flex-1">
              <h2 className="text-3xl font-bold leading-tight tracking-tight text-gray-900">
                Assign Workout
              </h2>
            </div>
            <div className="mt-4 flex md:ml-4 md:mt-0">
              <Link
                href={`/clients/${params.id}/workouts`}
                className="ml-3 inline-flex items-center rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50"
              >
                Cancel
              </Link>
            </div>
          </div>

          <AssignWorkoutForm clientId={params.id} />
        </div>
      </main>
    </div>
  );
} 