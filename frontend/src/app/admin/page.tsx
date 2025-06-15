'use client';

import React, { useEffect } from 'react';
import { useAuth, useUser } from '@clerk/nextjs';
import { useRouter } from 'next/navigation';
import AdminDashboard from '../components/admin/Admin';
import Navigation from '../components/Navigation';

export default function AdminPage() {
  const { userId } = useAuth();
  const { user } = useUser();
  const router = useRouter();

  useEffect(() => {
    console.log('AdminPage - Auth State:', {
      userId,
      user,
      role: user?.publicMetadata?.role,
      metadata: user?.publicMetadata
    });

    if (!userId || !user) {
      console.log('AdminPage - No user or userId, redirecting to sign-in');
      router.push('/sign-in');
      return;
    }

    const role = user.publicMetadata.role as string;
    if (role !== 'admin') {
      console.log('AdminPage - User is not admin, redirecting to home');
      router.push('/');
    }
  }, [userId, user, router]);

  if (!userId || !user || user.publicMetadata.role !== 'admin') {
    console.log('AdminPage - Rendering null due to auth check');
    return null;
  }

  console.log('AdminPage - Rendering AdminDashboard');
  return (
    <div className="min-h-screen bg-gray-50">
      <Navigation />
      <main className="py-10">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <AdminDashboard />
        </div>
      </main>
    </div>
  );
} 