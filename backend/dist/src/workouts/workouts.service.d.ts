import { PrismaService } from '../prisma/prisma.service';
import { CreateWorkoutDto } from './dto/create-workout.dto';
export declare class WorkoutsService {
    private prisma;
    constructor(prisma: PrismaService);
    createWorkout(data: CreateWorkoutDto, coachId: string): Promise<{
        id: string;
        description: string;
        title: string;
        coachId: string;
        exercises: import("@prisma/client/runtime/library").JsonValue;
        createdAt: Date;
    }>;
    getWorkouts(coachId: string): Promise<({
        assignments: ({
            client: {
                user: {
                    id: string;
                    email: string;
                    name: string;
                };
                id: string;
            };
        } & {
            id: string;
            workoutId: string;
            clientId: string;
            scheduledDate: Date;
            status: import(".prisma/client").$Enums.AssignmentStatus;
        })[];
    } & {
        id: string;
        description: string;
        title: string;
        coachId: string;
        exercises: import("@prisma/client/runtime/library").JsonValue;
        createdAt: Date;
    })[]>;
    getWorkout(id: string, coachId: string): Promise<{
        assignments: ({
            client: {
                user: {
                    id: string;
                    email: string;
                    name: string;
                };
                id: string;
            };
        } & {
            id: string;
            workoutId: string;
            clientId: string;
            scheduledDate: Date;
            status: import(".prisma/client").$Enums.AssignmentStatus;
        })[];
    } & {
        id: string;
        description: string;
        title: string;
        coachId: string;
        exercises: import("@prisma/client/runtime/library").JsonValue;
        createdAt: Date;
    }>;
    updateWorkout(id: string, data: Partial<CreateWorkoutDto>, coachId: string): Promise<{
        id: string;
        description: string;
        title: string;
        coachId: string;
        exercises: import("@prisma/client/runtime/library").JsonValue;
        createdAt: Date;
    }>;
    deleteWorkout(id: string, coachId: string): Promise<{
        id: string;
        description: string;
        title: string;
        coachId: string;
        exercises: import("@prisma/client/runtime/library").JsonValue;
        createdAt: Date;
    }>;
    assignWorkout(workoutId: string, clientId: string, scheduledDate: Date): Promise<{
        id: string;
        workoutId: string;
        clientId: string;
        scheduledDate: Date;
        status: import(".prisma/client").$Enums.AssignmentStatus;
    }>;
}
