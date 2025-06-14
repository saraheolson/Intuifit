'use client';

import { useAuth, useUser, useClerk } from '@clerk/nextjs';
import { useRouter } from 'next/navigation';
import Link from 'next/link';
import { useEffect } from 'react';

export default function Home() {
  const { userId } = useAuth();
  const { user } = useUser();
  const { signOut } = useClerk();
  const router = useRouter();

  useEffect(() => {
    if (userId && user) {
      const role = user.publicMetadata.role as string;
      if (role === 'admin') {
        router.push('/admin');
      } else if (role === 'coach' || role === 'team_coach') {
        router.push('/dashboard');
      } else if (role === 'client') {
        router.push('/home');
      }
    }
  }, [userId, user, router]);

  const handleSignOut = async () => {
    try {
      await signOut();
      router.push('/');
    } catch (error) {
      console.error('Error signing out:', error);
    }
  };

  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="w-full max-w-md space-y-8">
        <div>
          <h2 className="mt-6 text-center text-3xl font-bold tracking-tight text-gray-900">
            Welcome to IntuiFIT
          </h2>
          <p className="mt-2 text-center text-sm text-gray-600">
            Your fitness coaching platform
          </p>
        </div>
        <div className="mt-8 flex justify-center space-x-4">
          {userId ? (
            <button
              onClick={handleSignOut}
              className="inline-flex items-center rounded-md bg-red-600 px-4 py-2 text-sm font-semibold text-white shadow-sm hover:bg-red-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-red-600"
            >
              Sign Out
            </button>
          ) : (
            <>
              <Link
                href="/sign-in"
                className="inline-flex items-center rounded-md bg-teal-600 px-4 py-2 text-sm font-semibold text-white shadow-sm hover:bg-teal-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-teal-600"
              >
                Sign In
              </Link>
              <Link
                href="/sign-up"
                className="inline-flex items-center rounded-md bg-white px-4 py-2 text-sm font-semibold text-teal-600 shadow-sm ring-1 ring-inset ring-teal-300 hover:bg-teal-50"
              >
                Sign Up
              </Link>
            </>
          )}
        </div>
      </div>
    </div>
  );
} 