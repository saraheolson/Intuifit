import { auth } from '@clerk/nextjs';
import { redirect } from 'next/navigation';
import Navigation from '@/components/Navigation';
import WorkoutHistory from './WorkoutHistory';

interface WorkoutHistoryPageProps {
  params: {
    id: string;
  };
}

export default function WorkoutHistoryPage({ params }: WorkoutHistoryPageProps) {
  const { userId, sessionClaims } = auth();

  if (!userId) {
    redirect('/sign-in');
  }

  // Check if user has appropriate role (coach or team coach)
  const role = sessionClaims?.role as string;
  if (!['coach', 'team_coach'].includes(role)) {
    redirect('/');
  }

  return (
    <div>
      <Navigation />
      <main className="py-10">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="md:flex md:items-center md:justify-between">
            <div className="min-w-0 flex-1">
              <h2 className="text-2xl font-bold leading-7 text-gray-900 sm:truncate sm:text-3xl sm:tracking-tight">
                Workout History
              </h2>
            </div>
          </div>

          <div className="mt-8">
            <WorkoutHistory clientId={params.id} />
          </div>
        </div>
      </main>
    </div>
  );
} 