# IntuiFIT Frontend

IntuiFIT is a modern fitness coaching platform that helps independent fitness coaches and small coaching teams manage clients, deliver workout programs, track progress, and process payments.

## Features

- **Authentication & Authorization**
  - Secure user authentication using Clerk
  - Role-based access control (Coach, Client, Team Coach)
  - Protected routes and API endpoints

- **Client Management**
  - View and manage client profiles
  - Track client progress and workout history
  - Assign and schedule workouts

- **Workout Management**
  - Create and customize workout programs
  - Assign workouts to clients
  - Track workout progress and completion
  - View workout history with filtering and sorting

- **Exercise Library**
  - Access to global exercise database
  - Custom exercise creation
  - Exercise details with instructions and video links

## Tech Stack

- **Framework**: Next.js 14 (React)
- **Styling**: Tailwind CSS
- **Authentication**: Clerk
- **State Management**: React Query
- **API Integration**: REST API with fetch
- **Deployment**: Vercel

## Getting Started

### Prerequisites

- Node.js 18.x or later
- npm or yarn
- Git

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/your-org/intuifit.git
   cd intuifit/frontend
   ```

2. Install dependencies:
   ```bash
   npm install
   # or
   yarn install
   ```

3. Create a `.env.local` file in the root directory with the following variables:
   ```
   NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY=your_clerk_publishable_key
   CLERK_SECRET_KEY=your_clerk_secret_key
   NEXT_PUBLIC_API_URL=your_backend_api_url
   ```

4. Start the development server:
   ```bash
   npm run dev
   # or
   yarn dev
   ```

5. Open [http://localhost:3000](http://localhost:3000) in your browser.

## Project Structure

```
frontend/
├── app/                    # Next.js app directory
│   ├── clients/           # Client-related pages
│   ├── workouts/          # Workout-related pages
│   └── layout.tsx         # Root layout
├── components/            # Reusable React components
├── lib/                   # Utility functions and services
├── types/                 # TypeScript type definitions
└── public/               # Static assets
```

## Development Guidelines

### Code Style

- Follow the TypeScript and React best practices
- Use functional components with hooks
- Implement proper error handling and loading states
- Write clean, maintainable code with comments

### Component Structure

- Keep components small and focused
- Use TypeScript interfaces for props
- Implement proper error boundaries
- Follow the single responsibility principle

### State Management

- Use React Query for server state
- Use React hooks for local state
- Implement proper loading and error states
- Cache data appropriately

### Testing

- Write unit tests for components
- Test API integration
- Implement end-to-end tests
- Use React Testing Library

## Deployment

The application is automatically deployed to Vercel when changes are pushed to the main branch. Preview deployments are created for pull requests.

## Contributing

1. Create a new branch for your feature
2. Make your changes
3. Write tests if applicable
4. Submit a pull request

## License

This project is proprietary and confidential. Unauthorized copying, distribution, or use is strictly prohibited.

## Support

For support, please contact the development team or refer to the internal documentation.