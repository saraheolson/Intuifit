# IntuiFIT Backend

The backend service for IntuiFIT, a modern fitness coaching platform. Built with NestJS and PostgreSQL, this service provides a robust API for managing clients, workouts, exercises, and more.

## Features

- **Authentication & Authorization**
  - JWT-based authentication with Clerk integration
  - Role-based access control
  - Protected API endpoints

- **Client Management**
  - Client profile management
  - Progress tracking
  - Workout assignment and scheduling

- **Workout Management**
  - Workout program creation and customization
  - Exercise management
  - Progress tracking and completion status

- **Exercise Library**
  - Global exercise database
  - Custom exercise creation
  - Exercise details with instructions and video links

## Tech Stack

- **Framework**: NestJS (TypeScript)
- **Database**: PostgreSQL
- **ORM**: Prisma
- **Authentication**: Clerk
- **API Documentation**: Swagger/OpenAPI
- **Deployment**: Railway

## Getting Started

### Prerequisites

- Node.js 18.x or later
- PostgreSQL 14 or later
- npm or yarn
- Git

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/your-org/intuifit.git
   cd intuifit/backend
   ```

2. Install dependencies:
   ```bash
   npm install
   # or
   yarn install
   ```

3. Create a `.env` file in the root directory with the following variables:
   ```
   DATABASE_URL=postgresql://user:password@localhost:5432/intuifit
   CLERK_SECRET_KEY=your_clerk_secret_key
   PORT=3001
   NODE_ENV=development
   ```

4. Set up the database:
   ```bash
   npx prisma migrate dev
   npx prisma db seed
   ```

5. Start the development server:
   ```bash
   npm run start:dev
   # or
   yarn start:dev
   ```

6. The API will be available at [http://localhost:3001](http://localhost:3001)

## Project Structure

```
backend/
├── src/
│   ├── auth/              # Authentication module
│   ├── users/             # User management
│   ├── exercises/         # Exercise management
│   ├── workouts/          # Workout management
│   ├── clients/           # Client management
│   ├── messages/          # Messaging system
│   ├── payments/          # Payment processing
│   └── common/            # Shared utilities
├── prisma/               # Database schema and migrations
└── test/                # Test files
```

## API Documentation

The API documentation is available at `/api/docs` when running the server. It provides detailed information about all available endpoints, request/response schemas, and authentication requirements.

## Development Guidelines

### Code Style

- Follow NestJS best practices and conventions
- Use TypeScript strict mode
- Implement proper error handling
- Write clean, maintainable code with comments

### Database

- Use Prisma migrations for database changes
- Follow the schema defined in `prisma/schema.prisma`
- Write database queries using Prisma Client
- Implement proper indexing for performance

### Testing

- Write unit tests for services
- Write integration tests for controllers
- Use Jest as the testing framework
- Maintain good test coverage

### API Design

- Follow RESTful principles
- Use proper HTTP methods and status codes
- Implement proper validation using DTOs
- Document all endpoints with Swagger

## Deployment

The application is automatically deployed to Railway when changes are pushed to the main branch. The deployment process includes:

1. Running tests
2. Building the application
3. Running database migrations
4. Deploying to Railway

## Contributing

1. Create a new branch for your feature
2. Make your changes
3. Write tests
4. Submit a pull request

## License

This project is proprietary and confidential. Unauthorized copying, distribution, or use is strictly prohibited.

## Support

For support, please contact the development team or refer to the internal documentation.
