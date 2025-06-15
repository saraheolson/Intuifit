'use client';

import { useAuth, useUser } from '@clerk/nextjs';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { UserButton } from '@clerk/nextjs';
import { useState } from 'react';

export default function Navigation() {
  const { userId } = useAuth();
  const { user } = useUser();
  const pathname = usePathname();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  console.log('Navigation - Auth State:', {
    userId,
    user,
    role: user?.publicMetadata?.role,
    metadata: user?.publicMetadata
  });

  if (!userId) {
    console.log('Navigation - No userId, returning null');
    return null;
  }

  const role = user?.publicMetadata?.role as string;
  const isCoach = role === 'coach' || role === 'team_coach' || role === 'COACH' || role === 'TEAM_COACH';

  console.log('Navigation - Role check:', { role, isCoach });

  if (!isCoach) {
    console.log('Navigation - Not a coach, returning null');
    return null;
  }

  const isActive = (path: string) => pathname === path;

  console.log('Navigation - Rendering navigation');
  return (
    <nav className="bg-white shadow-md border-b border-gray-200">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 justify-between">
          <div className="flex">
            <div className="flex flex-shrink-0 items-center">
              <Link href="/" className="text-xl font-bold text-teal-600 hover:text-teal-700">
                Intuifit
              </Link>
            </div>
            <div className="hidden sm:ml-6 sm:flex sm:space-x-8">
              <Link
                href="/dashboard"
                className={`inline-flex items-center border-b-2 px-1 pt-1 text-sm font-medium ${
                  isActive('/dashboard')
                    ? 'border-teal-500 text-gray-900'
                    : 'border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700'
                }`}
              >
                Dashboard
              </Link>
              <Link
                href="/clients"
                className={`inline-flex items-center border-b-2 px-1 pt-1 text-sm font-medium ${
                  isActive('/clients')
                    ? 'border-teal-500 text-gray-900'
                    : 'border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700'
                }`}
              >
                Clients
              </Link>
              <Link
                href="/workouts"
                className={`inline-flex items-center border-b-2 px-1 pt-1 text-sm font-medium ${
                  isActive('/workouts')
                    ? 'border-teal-500 text-gray-900'
                    : 'border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700'
                }`}
              >
                Workouts
              </Link>
            </div>
          </div>
          <div className="flex items-center">
            <UserButton afterSignOutUrl="/sign-in" />
          </div>
          <div className="flex items-center sm:hidden">
            <button
              type="button"
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-teal-500"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              <span className="sr-only">Open main menu</span>
              {!isMobileMenuOpen ? (
                <svg className="block h-6 w-6" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
                </svg>
              ) : (
                <svg className="block h-6 w-6" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                </svg>
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {isMobileMenuOpen && (
        <div className="sm:hidden">
          <div className="space-y-1 pb-3 pt-2">
            <Link
              href="/dashboard"
              className={`block border-l-4 py-2 pl-3 pr-4 text-base font-medium ${
                isActive('/dashboard')
                  ? 'border-teal-500 bg-teal-50 text-teal-700'
                  : 'border-transparent text-gray-500 hover:border-gray-300 hover:bg-gray-50 hover:text-gray-700'
              }`}
            >
              Dashboard
            </Link>
            <Link
              href="/clients"
              className={`block border-l-4 py-2 pl-3 pr-4 text-base font-medium ${
                isActive('/clients')
                  ? 'border-teal-500 bg-teal-50 text-teal-700'
                  : 'border-transparent text-gray-500 hover:border-gray-300 hover:bg-gray-50 hover:text-gray-700'
              }`}
            >
              Clients
            </Link>
            <Link
              href="/workouts"
              className={`block border-l-4 py-2 pl-3 pr-4 text-base font-medium ${
                isActive('/workouts')
                  ? 'border-teal-500 bg-teal-50 text-teal-700'
                  : 'border-transparent text-gray-500 hover:border-gray-300 hover:bg-gray-50 hover:text-gray-700'
              }`}
            >
              Workouts
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
} 