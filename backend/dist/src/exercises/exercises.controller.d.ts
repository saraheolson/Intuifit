import { ExercisesService } from './exercises.service';
import { CreateExerciseDto } from './dto/create-exercise.dto';
export declare class ExercisesController {
    private readonly exercisesService;
    constructor(exercisesService: ExercisesService);
    createGlobalExercise(data: CreateExerciseDto, req: any): Promise<{
        id: string;
        name: string;
        videoUrl: string;
        thumbnailUrl: string;
        instructionsText: string;
        defaultSets: number;
        defaultReps: number;
        defaultWeight: number;
        weightType: import(".prisma/client").$Enums.WeightType;
        weightMeasurementType: import(".prisma/client").$Enums.WeightMeasurementType;
        createdById: string;
    }>;
    createCoachExercise(data: CreateExerciseDto, baseExerciseId: string, req: any): Promise<{
        id: string;
        name: string;
        videoUrl: string;
        thumbnailUrl: string;
        instructionsText: string;
        defaultSets: number;
        defaultReps: number;
        defaultWeight: number;
        weightType: import(".prisma/client").$Enums.WeightType;
        weightMeasurementType: import(".prisma/client").$Enums.WeightMeasurementType;
        coachId: string;
        baseExerciseId: string;
    }>;
    getGlobalExercises(): Promise<({
        createdBy: {
            id: string;
            email: string;
            name: string;
        };
    } & {
        id: string;
        name: string;
        videoUrl: string;
        thumbnailUrl: string;
        instructionsText: string;
        defaultSets: number;
        defaultReps: number;
        defaultWeight: number;
        weightType: import(".prisma/client").$Enums.WeightType;
        weightMeasurementType: import(".prisma/client").$Enums.WeightMeasurementType;
        createdById: string;
    })[]>;
    getCoachExercises(req: any): Promise<({
        baseExercise: {
            id: string;
            name: string;
            videoUrl: string;
            thumbnailUrl: string;
            instructionsText: string;
            defaultSets: number;
            defaultReps: number;
            defaultWeight: number;
            weightType: import(".prisma/client").$Enums.WeightType;
            weightMeasurementType: import(".prisma/client").$Enums.WeightMeasurementType;
            createdById: string;
        };
    } & {
        id: string;
        name: string;
        videoUrl: string;
        thumbnailUrl: string;
        instructionsText: string;
        defaultSets: number;
        defaultReps: number;
        defaultWeight: number;
        weightType: import(".prisma/client").$Enums.WeightType;
        weightMeasurementType: import(".prisma/client").$Enums.WeightMeasurementType;
        coachId: string;
        baseExerciseId: string;
    })[]>;
    getGlobalExercise(id: string): Promise<{
        createdBy: {
            id: string;
            email: string;
            name: string;
        };
    } & {
        id: string;
        name: string;
        videoUrl: string;
        thumbnailUrl: string;
        instructionsText: string;
        defaultSets: number;
        defaultReps: number;
        defaultWeight: number;
        weightType: import(".prisma/client").$Enums.WeightType;
        weightMeasurementType: import(".prisma/client").$Enums.WeightMeasurementType;
        createdById: string;
    }>;
    getCoachExercise(id: string, req: any): Promise<{
        baseExercise: {
            id: string;
            name: string;
            videoUrl: string;
            thumbnailUrl: string;
            instructionsText: string;
            defaultSets: number;
            defaultReps: number;
            defaultWeight: number;
            weightType: import(".prisma/client").$Enums.WeightType;
            weightMeasurementType: import(".prisma/client").$Enums.WeightMeasurementType;
            createdById: string;
        };
    } & {
        id: string;
        name: string;
        videoUrl: string;
        thumbnailUrl: string;
        instructionsText: string;
        defaultSets: number;
        defaultReps: number;
        defaultWeight: number;
        weightType: import(".prisma/client").$Enums.WeightType;
        weightMeasurementType: import(".prisma/client").$Enums.WeightMeasurementType;
        coachId: string;
        baseExerciseId: string;
    }>;
    updateGlobalExercise(id: string, data: Partial<CreateExerciseDto>, req: any): Promise<{
        id: string;
        name: string;
        videoUrl: string;
        thumbnailUrl: string;
        instructionsText: string;
        defaultSets: number;
        defaultReps: number;
        defaultWeight: number;
        weightType: import(".prisma/client").$Enums.WeightType;
        weightMeasurementType: import(".prisma/client").$Enums.WeightMeasurementType;
        createdById: string;
    }>;
    updateCoachExercise(id: string, data: Partial<CreateExerciseDto>, req: any): Promise<{
        id: string;
        name: string;
        videoUrl: string;
        thumbnailUrl: string;
        instructionsText: string;
        defaultSets: number;
        defaultReps: number;
        defaultWeight: number;
        weightType: import(".prisma/client").$Enums.WeightType;
        weightMeasurementType: import(".prisma/client").$Enums.WeightMeasurementType;
        coachId: string;
        baseExerciseId: string;
    }>;
    deleteGlobalExercise(id: string, req: any): Promise<{
        id: string;
        name: string;
        videoUrl: string;
        thumbnailUrl: string;
        instructionsText: string;
        defaultSets: number;
        defaultReps: number;
        defaultWeight: number;
        weightType: import(".prisma/client").$Enums.WeightType;
        weightMeasurementType: import(".prisma/client").$Enums.WeightMeasurementType;
        createdById: string;
    }>;
    deleteCoachExercise(id: string, req: any): Promise<{
        id: string;
        name: string;
        videoUrl: string;
        thumbnailUrl: string;
        instructionsText: string;
        defaultSets: number;
        defaultReps: number;
        defaultWeight: number;
        weightType: import(".prisma/client").$Enums.WeightType;
        weightMeasurementType: import(".prisma/client").$Enums.WeightMeasurementType;
        coachId: string;
        baseExerciseId: string;
    }>;
}
