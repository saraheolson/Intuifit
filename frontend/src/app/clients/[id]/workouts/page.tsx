import React from 'react';
import { auth } from '@clerk/nextjs';
import { redirect } from 'next/navigation';
import Navigation from '@/components/Navigation';
import WorkoutsList from './WorkoutsList';

export default async function ClientWorkoutsPage({
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
          <WorkoutsList clientId={params.id} />
        </div>
      </main>
    </div>
  );
} 