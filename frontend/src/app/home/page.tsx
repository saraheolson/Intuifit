import { auth } from '@clerk/nextjs';
import { redirect } from 'next/navigation';
import Navigation from '@/components/Navigation';

export default async function Home() {
  const { userId, sessionClaims } = await auth();
  
  if (!userId) {
    redirect('/sign-in');
  }

  const role = sessionClaims?.role as string;
  if (role !== 'client') {
    redirect('/');
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <Navigation />
      
      <main className="py-10">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-3xl font-bold leading-tight tracking-tight text-gray-900">
              Welcome back!
            </h1>
            <p className="mt-2 text-sm text-gray-600">
              Here's your next workout
            </p>
          </div>

          {/* Next Workout Card */}
          <div className="mt-8">
            <div className="overflow-hidden rounded-lg bg-white shadow">
              <div className="p-6">
                <div className="text-center">
                  <h3 className="text-lg font-medium leading-6 text-gray-900">
                    No upcoming workouts
                  </h3>
                  <p className="mt-2 text-sm text-gray-500">
                    Your coach will assign workouts soon
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Quick Actions */}
          <div className="mt-8">
            <h2 className="text-lg font-medium leading-6 text-gray-900">Quick Actions</h2>
            <div className="mt-4 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
              <button
                type="button"
                className="inline-flex items-center justify-center rounded-md border border-transparent bg-teal-600 px-4 py-2 text-sm font-medium text-white shadow-sm hover:bg-teal-700 focus:outline-none focus:ring-2 focus:ring-teal-500 focus:ring-offset-2"
              >
                View Workout History
              </button>
              <button
                type="button"
                className="inline-flex items-center justify-center rounded-md border border-transparent bg-teal-600 px-4 py-2 text-sm font-medium text-white shadow-sm hover:bg-teal-700 focus:outline-none focus:ring-2 focus:ring-teal-500 focus:ring-offset-2"
              >
                Track Progress
              </button>
              <button
                type="button"
                className="inline-flex items-center justify-center rounded-md border border-transparent bg-teal-600 px-4 py-2 text-sm font-medium text-white shadow-sm hover:bg-teal-700 focus:outline-none focus:ring-2 focus:ring-teal-500 focus:ring-offset-2"
              >
                Message Coach
              </button>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
} 