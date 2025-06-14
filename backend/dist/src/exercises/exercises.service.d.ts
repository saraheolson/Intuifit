import { PrismaService } from '../prisma/prisma.service';
import { CreateExerciseDto } from './dto/create-exercise.dto';
export declare class ExercisesService {
    private prisma;
    constructor(prisma: PrismaService);
    createGlobalExercise(data: CreateExerciseDto, createdById: string): Promise<{
        id: string;
        name: string;
        videoUrl: string;
        instructionsText: string;
        defaultSets: number;
        defaultReps: number;
        defaultWeight: number;
        weightType: import(".prisma/client").$Enums.WeightType;
        weightMeasurementType: import(".prisma/client").$Enums.WeightMeasurementType;
        createdById: string;
    }>;
    createCoachExercise(data: CreateExerciseDto, coachId: string, baseExerciseId: string): Promise<{
        id: string;
        name: string;
        videoUrl: string;
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
        instructionsText: string;
        defaultSets: number;
        defaultReps: number;
        defaultWeight: number;
        weightType: import(".prisma/client").$Enums.WeightType;
        weightMeasurementType: import(".prisma/client").$Enums.WeightMeasurementType;
        createdById: string;
    })[]>;
    getCoachExercises(coachId: string): Promise<({
        baseExercise: {
            id: string;
            name: string;
            videoUrl: string;
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
        instructionsText: string;
        defaultSets: number;
        defaultReps: number;
        defaultWeight: number;
        weightType: import(".prisma/client").$Enums.WeightType;
        weightMeasurementType: import(".prisma/client").$Enums.WeightMeasurementType;
        createdById: string;
    }>;
    getCoachExercise(id: string, coachId: string): Promise<{
        baseExercise: {
            id: string;
            name: string;
            videoUrl: string;
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
        instructionsText: string;
        defaultSets: number;
        defaultReps: number;
        defaultWeight: number;
        weightType: import(".prisma/client").$Enums.WeightType;
        weightMeasurementType: import(".prisma/client").$Enums.WeightMeasurementType;
        coachId: string;
        baseExerciseId: string;
    }>;
    updateGlobalExercise(id: string, data: Partial<CreateExerciseDto>, userId: string): Promise<{
        id: string;
        name: string;
        videoUrl: string;
        instructionsText: string;
        defaultSets: number;
        defaultReps: number;
        defaultWeight: number;
        weightType: import(".prisma/client").$Enums.WeightType;
        weightMeasurementType: import(".prisma/client").$Enums.WeightMeasurementType;
        createdById: string;
    }>;
    updateCoachExercise(id: string, data: Partial<CreateExerciseDto>, coachId: string): Promise<{
        id: string;
        name: string;
        videoUrl: string;
        instructionsText: string;
        defaultSets: number;
        defaultReps: number;
        defaultWeight: number;
        weightType: import(".prisma/client").$Enums.WeightType;
        weightMeasurementType: import(".prisma/client").$Enums.WeightMeasurementType;
        coachId: string;
        baseExerciseId: string;
    }>;
    deleteGlobalExercise(id: string, userId: string): Promise<{
        id: string;
        name: string;
        videoUrl: string;
        instructionsText: string;
        defaultSets: number;
        defaultReps: number;
        defaultWeight: number;
        weightType: import(".prisma/client").$Enums.WeightType;
        weightMeasurementType: import(".prisma/client").$Enums.WeightMeasurementType;
        createdById: string;
    }>;
    deleteCoachExercise(id: string, coachId: string): Promise<{
        id: string;
        name: string;
        videoUrl: string;
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
