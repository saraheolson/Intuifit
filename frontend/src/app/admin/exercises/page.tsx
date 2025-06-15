'use client';

import React, { useEffect } from 'react';
import { useAuth, useUser } from '@clerk/nextjs';
import { useRouter } from 'next/navigation';
import ExerciseManagement from '../../components/admin/Exercise';
import Navigation from '../../components/Navigation';

export default function ExercisesPage() {
  const { userId } = useAuth();
  const { user } = useUser();
  const router = useRouter();

  useEffect(() => {
    console.log('ExercisesPage - Auth State:', {
      userId,
      user,
      role: user?.publicMetadata?.role,
      metadata: user?.publicMetadata
    });

    if (!userId || !user) {
      console.log('ExercisesPage - No user or userId, redirecting to sign-in');
      router.push('/sign-in');
      return;
    }

    const role = user.publicMetadata.role as string;
    if (role !== 'admin') {
      console.log('ExercisesPage - User is not admin, redirecting to home');
      router.push('/');
    }
  }, [userId, user, router]);

  if (!userId || !user || user.publicMetadata.role !== 'admin') {
    console.log('ExercisesPage - Rendering null due to auth check');
    return null;
  }

  console.log('ExercisesPage - Rendering ExerciseManagement');
  return (
    <div className="min-h-screen bg-gray-50">
      <Navigation />
      <main className="py-10">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <ExerciseManagement />
        </div>
      </main>
    </div>
  );
} 