import { clerkClient } from "@clerk/clerk-sdk-node";

interface TestExercise {
  name: string;
  type: 'strength' | 'cardio' | 'flexibility';
  description: string;
  instructions: string;
  videoUrl?: string;
  equipment: string[];
  muscleGroups: string[];
}

interface TestWorkout {
  title: string;
  description: string;
  exercises: {
    exerciseId: string;
    sets: number;
    reps: number;
    weight: number;
    weightType: 'fixed' | 'percentage';
    weightMeasurementType: 'kg' | 'lbs';
    notes?: string;
  }[];
}

const sampleExercises: TestExercise[] = [
  {
    name: 'Barbell Squat',
    type: 'strength',
    description: 'A compound exercise that targets the lower body, primarily the quadriceps, hamstrings, and glutes.',
    instructions: '1. Position the barbell on your upper back\n2. Stand with feet shoulder-width apart\n3. Lower your body by bending your knees\n4. Return to starting position',
    videoUrl: 'https://example.com/squat-video',
    equipment: ['barbell', 'squat rack'],
    muscleGroups: ['quadriceps', 'hamstrings', 'glutes']
  },
  {
    name: 'Bench Press',
    type: 'strength',
    description: 'A compound exercise that targets the chest, shoulders, and triceps.',
    instructions: '1. Lie on the bench\n2. Grip the barbell slightly wider than shoulder-width\n3. Lower the bar to your chest\n4. Push the bar back up',
    videoUrl: 'https://example.com/bench-press-video',
    equipment: ['barbell', 'bench'],
    muscleGroups: ['chest', 'shoulders', 'triceps']
  },
  {
    name: 'Deadlift',
    type: 'strength',
    description: 'A compound exercise that targets the entire posterior chain.',
    instructions: '1. Stand with feet hip-width apart\n2. Bend down and grip the barbell\n3. Lift the bar by extending your hips and knees\n4. Lower the bar with control',
    videoUrl: 'https://example.com/deadlift-video',
    equipment: ['barbell'],
    muscleGroups: ['back', 'hamstrings', 'glutes']
  }
];

const sampleWorkouts: TestWorkout[] = [
  {
    title: 'Full Body Strength',
    description: 'A comprehensive full-body workout focusing on compound movements.',
    exercises: [
      {
        exerciseId: 'barbell-squat',
        sets: 4,
        reps: 8,
        weight: 135,
        weightType: 'fixed',
        weightMeasurementType: 'lbs',
        notes: 'Focus on form and depth'
      },
      {
        exerciseId: 'bench-press',
        sets: 3,
        reps: 10,
        weight: 95,
        weightType: 'fixed',
        weightMeasurementType: 'lbs',
        notes: 'Control the descent'
      },
      {
        exerciseId: 'deadlift',
        sets: 3,
        reps: 8,
        weight: 185,
        weightType: 'fixed',
        weightMeasurementType: 'lbs',
        notes: 'Keep back straight throughout'
      }
    ]
  },
  {
    title: 'Upper Body Focus',
    description: 'Targeted workout for upper body strength and hypertrophy.',
    exercises: [
      {
        exerciseId: 'bench-press',
        sets: 4,
        reps: 8,
        weight: 115,
        weightType: 'fixed',
        weightMeasurementType: 'lbs',
        notes: 'Progressive overload focus'
      }
    ]
  }
];

async function createTestData() {
  try {
    // Get the coach user
    const coach = await clerkClient.users.getUserList({
      emailAddress: ['coach@intuifit.test']
    });

    if (!coach.length) {
      console.error('Coach account not found. Please create test accounts first.');
      return;
    }

    const coachId = coach[0].id;

    // Create exercises
    console.log('Creating sample exercises...');
    const createdExercises = await Promise.all(
      sampleExercises.map(async (exercise) => {
        const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/exercises`, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${process.env.CLERK_SECRET_KEY}`
          },
          body: JSON.stringify({
            ...exercise,
            createdBy: coachId
          })
        });

        if (!response.ok) {
          throw new Error(`Failed to create exercise: ${exercise.name}`);
        }

        return response.json();
      })
    );

    console.log('Created exercises:', createdExercises.map(e => e.name));

    // Create workouts
    console.log('Creating sample workouts...');
    const createdWorkouts = await Promise.all(
      sampleWorkouts.map(async (workout) => {
        const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/workouts`, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${process.env.CLERK_SECRET_KEY}`
          },
          body: JSON.stringify({
            ...workout,
            createdBy: coachId
          })
        });

        if (!response.ok) {
          throw new Error(`Failed to create workout: ${workout.title}`);
        }

        return response.json();
      })
    );

    console.log('Created workouts:', createdWorkouts.map(w => w.title));
    console.log('Test data creation completed successfully!');

  } catch (error) {
    console.error('Error creating test data:', error);
  }
}

createTestData(); 