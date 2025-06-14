declare class ExerciseResult {
    exerciseId: string;
    exerciseName: string;
    sets: {
        weight: number;
        reps: number;
        completed: boolean;
    }[];
}
export declare class CreateProgressLogDto {
    assignmentId: string;
    exerciseResults: ExerciseResult[];
    notes?: string;
}
export {};
