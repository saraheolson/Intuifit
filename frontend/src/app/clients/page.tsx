'use client';

import { useAuth, useUser } from '@clerk/nextjs';
import { useRouter } from 'next/navigation';
import { useEffect } from 'react';
import Navigation from '../components/Navigation';
import Link from 'next/link';

export default function ClientsPage() {
  const { userId } = useAuth();
  const { user } = useUser();
  const router = useRouter();

  useEffect(() => {
    console.log('Clients Page - Auth State:', {
      userId,
      user,
      role: user?.publicMetadata?.role,
      metadata: user?.publicMetadata
    });

    if (!userId || !user) {
      console.log('Clients Page - No user or userId, redirecting to sign-in');
      router.push('/sign-in');
      return;
    }

    const role = user.publicMetadata.role as string;
    console.log('Clients Page - Role:', role);

    if (role !== 'coach' && role !== 'team_coach' && role !== 'COACH' && role !== 'TEAM_COACH') {
      console.log('Clients Page - Invalid role, redirecting to home');
      router.push('/');
    }
  }, [userId, user, router]);

  if (!userId || !user) {
    console.log('Clients Page - Rendering null due to auth check');
    return null;
  }

  const role = user.publicMetadata.role as string;
  if (role !== 'coach' && role !== 'team_coach' && role !== 'COACH' && role !== 'TEAM_COACH') {
    console.log('Clients Page - Rendering null due to role check');
    return null;
  }

  console.log('Clients Page - Rendering clients page');
  return (
    <div className="min-h-screen bg-gray-50">
      <Navigation />
      
      <main className="py-10">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="sm:flex sm:items-center">
            <div className="sm:flex-auto">
              <h1 className="text-3xl font-bold leading-tight tracking-tight text-gray-900">
                Clients
              </h1>
              <p className="mt-2 text-sm text-gray-700">
                A list of all your clients including their name, email, and status.
              </p>
            </div>
            <div className="mt-4 sm:ml-16 sm:mt-0 sm:flex-none">
              <Link
                href="/clients/new"
                className="block rounded-md bg-teal-600 px-3 py-2 text-center text-sm font-semibold text-white shadow-sm hover:bg-teal-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-teal-600"
              >
                Add Client
              </Link>
            </div>
          </div>

          <div className="mt-8 flow-root">
            <div className="-mx-4 -my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
              <div className="inline-block min-w-full py-2 align-middle sm:px-6 lg:px-8">
                <div className="overflow-hidden shadow ring-1 ring-black ring-opacity-5 sm:rounded-lg">
                  <table className="min-w-full divide-y divide-gray-300">
                    <thead className="bg-gray-50">
                      <tr>
                        <th scope="col" className="py-3.5 pl-4 pr-3 text-left text-sm font-semibold text-gray-900 sm:pl-6">
                          Name
                        </th>
                        <th scope="col" className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900">
                          Email
                        </th>
                        <th scope="col" className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900">
                          Status
                        </th>
                        <th scope="col" className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900">
                          Last Workout
                        </th>
                        <th scope="col" className="relative py-3.5 pl-3 pr-4 sm:pr-6">
                          <span className="sr-only">Actions</span>
                        </th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-gray-200 bg-white">
                      <tr>
                        <td className="whitespace-nowrap py-4 pl-4 pr-3 text-sm font-medium text-gray-900 sm:pl-6">
                          No clients yet
                        </td>
                        <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">-</td>
                        <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">-</td>
                        <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">-</td>
                        <td className="relative whitespace-nowrap py-4 pl-3 pr-4 text-right text-sm font-medium sm:pr-6">
                          <Link href="#" className="text-teal-600 hover:text-teal-900">
                            View<span className="sr-only">, client name</span>
                          </Link>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
} 