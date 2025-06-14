declare class WorkoutExercise {
    exerciseId: string;
    name: string;
    videoUrl: string;
    instructionsText: string;
    weightType: string;
    weightMeasurementType: string;
}
export declare class CreateWorkoutDto {
    title: string;
    description: string;
    exercises: WorkoutExercise[];
}
export {};
