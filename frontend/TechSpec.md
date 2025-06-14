# IntuiFIT Frontend

This is the frontend application for IntuiFIT, built with Next.js and Tailwind CSS.

## Getting Started

1. Install dependencies:
```bash
npm install
```

2. Create a `.env.local` file in the root directory with the following variables:
```env
NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY=your_clerk_publishable_key
CLERK_SECRET_KEY=your_clerk_secret_key
NEXT_PUBLIC_CLERK_SIGN_IN_URL=/sign-in
NEXT_PUBLIC_CLERK_SIGN_UP_URL=/sign-up
NEXT_PUBLIC_CLERK_AFTER_SIGN_IN_URL=/dashboard
NEXT_PUBLIC_CLERK_AFTER_SIGN_UP_URL=/dashboard
NEXT_PUBLIC_API_URL=http://localhost:3001
```

3. Run the development server:
```bash
npm run dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser.

## Features

- Authentication with Clerk
- Role-based access control (Coach, Client, Team Coach)
- Responsive design with Tailwind CSS
- Real-time updates with React Query
- Form handling with React Hook Form
- Type safety with TypeScript

## Project Structure

```
frontend/
├── app/                    # Next.js app directory
│   ├── dashboard/         # Coach dashboard
│   ├── home/             # Client home
│   ├── clients/          # Client management
│   ├── workouts/         # Workout management
│   ├── exercises/        # Exercise library
│   ├── messages/         # Messaging system
│   └── billing/          # Payment management
├── components/            # Reusable components
├── lib/                  # Utility functions
├── types/                # TypeScript types
└── public/              # Static assets
```

## Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm start` - Start production server
- `npm run lint` - Run ESLint
- `npm run type-check` - Run TypeScript type checking

## Dependencies

- Next.js 14
- React 18
- Tailwind CSS
- Clerk (Authentication)
- React Query
- React Hook Form
- Zod (Validation)
- Headless UI
- Heroicons 