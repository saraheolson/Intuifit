import { WorkoutsService } from './workouts.service';
import { CreateWorkoutDto } from './dto/create-workout.dto';
export declare class WorkoutsController {
    private readonly workoutsService;
    constructor(workoutsService: WorkoutsService);
    createWorkout(data: CreateWorkoutDto, req: any): Promise<{
        id: string;
        description: string;
        title: string;
        coachId: string;
        exercises: import("@prisma/client/runtime/library").JsonValue;
        createdAt: Date;
    }>;
    getWorkouts(req: any): Promise<({
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
    getWorkout(id: string, req: any): Promise<{
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
    updateWorkout(id: string, data: Partial<CreateWorkoutDto>, req: any): Promise<{
        id: string;
        description: string;
        title: string;
        coachId: string;
        exercises: import("@prisma/client/runtime/library").JsonValue;
        createdAt: Date;
    }>;
    deleteWorkout(id: string, req: any): Promise<{
        id: string;
        description: string;
        title: string;
        coachId: string;
        exercises: import("@prisma/client/runtime/library").JsonValue;
        createdAt: Date;
    }>;
    assignWorkout(id: string, data: {
        clientId: string;
        scheduledDate: Date;
    }, req: any): Promise<{
        id: string;
        workoutId: string;
        clientId: string;
        scheduledDate: Date;
        status: import(".prisma/client").$Enums.AssignmentStatus;
    }>;
}
