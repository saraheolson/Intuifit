# Test Accounts

This document provides information about the test accounts available for development and testing purposes.

## Available Test Accounts

| Role | Email | Password | Description |
|------|-------|----------|-------------|
| Coach | coach@intuifit.test | Test123!@# | Primary user, can manage clients and workouts |
| Client | client@intuifit.test | Test123!@# | End user, can view and complete workouts |
| Team Coach | teamcoach@intuifit.test | Test123!@# | Secondary coach, can help manage clients |
| Admin | admin@intuifit.test | Test123!@# | Can manage global exercise database |

## Creating Test Accounts

To create these test accounts in your development environment:

1. Make sure you have the Clerk secret key in your environment:
   ```bash
   export CLERK_SECRET_KEY=your_clerk_secret_key
   ```

2. Run the test account creation script:
   ```bash
   npm run create-test-accounts
   ```

## Test Data

The platform includes sample test data that can be created for the coach account:

### Sample Exercises
- Barbell Squat
- Bench Press
- Deadlift

Each exercise includes:
- Detailed instructions
- Video links
- Equipment requirements
- Target muscle groups

### Sample Workouts
1. Full Body Strength
   - Barbell Squat (4 sets, 8 reps)
   - Bench Press (3 sets, 10 reps)
   - Deadlift (3 sets, 8 reps)

2. Upper Body Focus
   - Bench Press (4 sets, 8 reps)

To create the test data:

1. Ensure you have created the test accounts first
2. Set your API URL in the environment:
   ```bash
   export NEXT_PUBLIC_API_URL=your_backend_api_url
   ```
3. Run the test data creation script:
   ```bash
   npm run create-test-data
   ```

## Using Test Accounts

### Coach Account
- Can create and manage workout programs
- Can assign workouts to clients
- Can view client progress
- Can manage team coaches
- Has access to all coach features
- Includes sample exercises and workouts

### Client Account
- Can view assigned workouts
- Can track workout progress
- Can communicate with coach
- Has limited access to features

### Team Coach Account
- Can help manage clients
- Can view client progress
- Can create and assign workouts
- Cannot manage payments or subscription

### Admin Account
- Can manage global exercise database
- Can create and edit exercises
- Has access to all system features
- Can manage user roles

## Security Notes

1. These accounts are for development and testing only
2. Do not use these credentials in production
3. Change the passwords if deploying to staging
4. Never commit real credentials to version control

## Troubleshooting

If you encounter issues with the test accounts:

1. Verify that the Clerk secret key is correct
2. Check that the accounts were created in your Clerk dashboard
3. Ensure the role metadata is properly set
4. Try logging out and back in if permissions seem incorrect

If you encounter issues with the test data:

1. Verify that the coach account exists
2. Check that the API URL is correctly set
3. Ensure the backend API is running and accessible
4. Check the console for specific error messages

## Additional Information

- Test accounts are automatically created with the role stored in their public metadata
- The backend API uses this metadata to enforce role-based access control
- You can modify the test accounts script to create additional test users
- Remember to update this document if you add new test accounts
- Sample exercises and workouts can be modified in the `scripts/create-test-data.ts` file 