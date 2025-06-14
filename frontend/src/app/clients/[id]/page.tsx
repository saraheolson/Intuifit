import { auth } from '@clerk/nextjs';
import { redirect } from 'next/navigation';
import Navigation from '@/components/Navigation';
import Link from 'next/link';

export default async function ClientDetailPage({
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
                Client Details
              </h2>
            </div>
            <div className="mt-4 flex md:ml-4 md:mt-0">
              <Link
                href="/clients"
                className="ml-3 inline-flex items-center rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50"
              >
                Back to Clients
              </Link>
            </div>
          </div>

          {/* Tabs */}
          <div className="mt-8">
            <div className="sm:hidden">
              <label htmlFor="tabs" className="sr-only">
                Select a tab
              </label>
              <select
                id="tabs"
                name="tabs"
                className="block w-full rounded-md border-gray-300 focus:border-teal-500 focus:ring-teal-500"
              >
                <option>Overview</option>
                <option>Workouts</option>
                <option>Progress</option>
                <option>Messages</option>
              </select>
            </div>
            <div className="hidden sm:block">
              <div className="border-b border-gray-200">
                <nav className="-mb-px flex space-x-8" aria-label="Tabs">
                  <a
                    href="#"
                    className="border-teal-500 text-teal-600 whitespace-nowrap border-b-2 py-4 px-1 text-sm font-medium"
                  >
                    Overview
                  </a>
                  <a
                    href="#"
                    className="border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700 whitespace-nowrap border-b-2 py-4 px-1 text-sm font-medium"
                  >
                    Workouts
                  </a>
                  <a
                    href="#"
                    className="border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700 whitespace-nowrap border-b-2 py-4 px-1 text-sm font-medium"
                  >
                    Progress
                  </a>
                  <a
                    href="#"
                    className="border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700 whitespace-nowrap border-b-2 py-4 px-1 text-sm font-medium"
                  >
                    Messages
                  </a>
                </nav>
              </div>
            </div>
          </div>

          {/* Overview Content */}
          <div className="mt-8">
            <div className="overflow-hidden bg-white shadow sm:rounded-lg">
              <div className="px-4 py-5 sm:px-6">
                <h3 className="text-lg font-medium leading-6 text-gray-900">Client Information</h3>
                <p className="mt-1 max-w-2xl text-sm text-gray-500">Personal details and fitness goals.</p>
              </div>
              <div className="border-t border-gray-200 px-4 py-5 sm:px-6">
                <dl className="grid grid-cols-1 gap-x-4 gap-y-8 sm:grid-cols-2">
                  <div className="sm:col-span-1">
                    <dt className="text-sm font-medium text-gray-500">Full name</dt>
                    <dd className="mt-1 text-sm text-gray-900">Loading...</dd>
                  </div>
                  <div className="sm:col-span-1">
                    <dt className="text-sm font-medium text-gray-500">Email address</dt>
                    <dd className="mt-1 text-sm text-gray-900">Loading...</dd>
                  </div>
                  <div className="sm:col-span-2">
                    <dt className="text-sm font-medium text-gray-500">Fitness Goals</dt>
                    <dd className="mt-1 text-sm text-gray-900">Loading...</dd>
                  </div>
                </dl>
              </div>
            </div>

            {/* Recent Activity */}
            <div className="mt-8">
              <h3 className="text-lg font-medium leading-6 text-gray-900">Recent Activity</h3>
              <div className="mt-4 overflow-hidden bg-white shadow sm:rounded-lg">
                <div className="px-4 py-5 sm:p-6">
                  <p className="text-sm text-gray-500">No recent activity</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
} 