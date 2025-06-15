'use client';

import React from 'react';
import PaymentManagement from '../../components/admin/Payment';
import Navigation from '../../components/Navigation';

export default function PaymentsPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Navigation />
      <main className="py-10">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <PaymentManagement />
        </div>
      </main>
    </div>
  );
} 