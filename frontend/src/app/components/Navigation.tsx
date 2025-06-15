'use client';

import React from 'react';
import Link from 'next/link';
import { UserButton, useUser, useAuth } from '@clerk/nextjs';

export default function Navigation() {
  const { user, isLoaded } = useUser();
  const { userId } = useAuth();
  const role = user?.publicMetadata?.role as string;

  const adminMenuItems = [
    { name: 'Dashboard', href: '/admin' },
    { name: 'Exercises', href: '/admin/exercises' },
    { name: 'Coaches', href: '/admin/coaches' },
    { name: 'Payments', href: '/admin/payments' },
  ];

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

  const menuItems = role === 'admin' 
    ? adminMenuItems 
    : role === 'coach' || role === 'team_coach' 
      ? coachMenuItems 
      : clientMenuItems;

  if (!isLoaded || !userId) {
    return null;
  }

  return (
    <nav className="bg-white shadow">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 justify-between">
          <div className="flex w-[600px] justify-between items-center">
            <Link href="/" className="text-xl font-bold text-teal-600">
              IntuiFIT
            </Link>
            {menuItems.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="inline-flex items-center border-b-2 border-transparent px-10 py-2 text-sm font-medium text-gray-500 hover:border-teal-500 hover:text-gray-700"
              >
                {item.name}
              </Link>
            ))}
          </div>
          <div className="flex items-center">
            {userId && <UserButton afterSignOutUrl="/sign-in" />}
          </div>
        </div>
      </div>
    </nav>
  );
} 