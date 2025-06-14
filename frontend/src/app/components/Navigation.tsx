import React from 'react';
import Link from 'next/link';
import { UserButton, useUser } from '@clerk/nextjs';

export default function Navigation() {
  const { user, isLoaded } = useUser();
  const role = user?.publicMetadata?.role as string;

  const coachMenuItems = [
    { name: 'Dashboard', href: '/dashboard' },
    { name: 'Clients', href: '/clients' },
    { name: 'Workouts', href: '/workouts' },
    { name: 'Messages', href: '/messages' },
  ];

  const clientMenuItems = [
    { name: 'Home', href: '/home' },
    { name: 'Workouts', href: '/workouts' },
    { name: 'Progress', href: '/progress' },
    { name: 'Messages', href: '/messages' },
  ];

  const menuItems = role === 'coach' || role === 'team_coach' ? coachMenuItems : clientMenuItems;

  if (!isLoaded) {
    return null;
  }

  return (
    <nav className="bg-white shadow">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 justify-between">
          <div className="flex">
            <div className="flex flex-shrink-0 items-center">
              <Link href="/" className="text-xl font-bold text-teal-600">
                IntuiFIT
              </Link>
            </div>
            <div className="hidden sm:ml-6 sm:flex sm:space-x-8">
              {menuItems.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className="inline-flex items-center border-b-2 border-transparent px-1 pt-1 text-sm font-medium text-gray-500 hover:border-teal-500 hover:text-gray-700"
                >
                  {item.name}
                </Link>
              ))}
            </div>
          </div>
          <div className="hidden sm:ml-6 sm:flex sm:items-center">
            <UserButton afterSignOutUrl="/sign-in" />
          </div>
        </div>
      </div>
    </nav>
  );
} 