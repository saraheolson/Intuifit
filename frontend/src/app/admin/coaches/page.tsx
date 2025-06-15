'use client';

import React from 'react';
import CoachManagement from '../../components/admin/CoachManagement';
import Navigation from '../../components/Navigation';

export default function CoachesPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Navigation />
      <main className="py-10">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <CoachManagement />
        </div>
      </main>
    </div>
  );
} 