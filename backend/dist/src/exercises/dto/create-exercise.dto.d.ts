import { WeightType, WeightMeasurementType } from '@prisma/client';
export declare class CreateExerciseDto {
    name: string;
    videoUrl: string;
    thumbnailUrl: string;
    instructionsText: string;
    defaultSets: number;
    defaultReps: number;
    defaultWeight: number;
    weightType: WeightType;
    weightMeasurementType: WeightMeasurementType;
}
