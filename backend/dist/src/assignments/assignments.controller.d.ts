import { AssignmentsService } from './assignments.service';
import { CreateAssignmentDto } from './dto/create-assignment.dto';
import { CreateProgressLogDto } from './dto/create-progress-log.dto';
import { AssignmentStatus } from '../../generated/prisma';
export declare class AssignmentsController {
    private readonly assignmentsService;
    constructor(assignmentsService: AssignmentsService);
    createAssignment(data: CreateAssignmentDto, req: any): Promise<{
        client: {
            user: {
                id: string;
                email: string;
                name: string;
            };
        } & {
            id: string;
            coachId: string;
            userId: string;
            onboardingData: import("@prisma/client/runtime/library").JsonValue;
        };
        workout: {
            id: string;
            description: string;
            title: string;
            coachId: string;
            exercises: import("@prisma/client/runtime/library").JsonValue;
            createdAt: Date;
        };
    } & {
        id: string;
        workoutId: string;
        clientId: string;
        scheduledDate: Date;
        status: import(".prisma/client").$Enums.AssignmentStatus;
    }>;
    getClientAssignments(clientId: string, req: any): Promise<({
        workout: {
            id: string;
            description: string;
            title: string;
            coachId: string;
            exercises: import("@prisma/client/runtime/library").JsonValue;
            createdAt: Date;
        };
        progressLogs: {
            id: string;
            createdAt: Date;
            clientId: string;
            assignmentId: string;
            exerciseResults: import("@prisma/client/runtime/library").JsonValue;
            notes: string | null;
        }[];
    } & {
        id: string;
        workoutId: string;
        clientId: string;
        scheduledDate: Date;
        status: import(".prisma/client").$Enums.AssignmentStatus;
    })[]>;
    getAssignment(id: string, req: any): Promise<{
        client: {
            user: {
                id: string;
                email: string;
                name: string;
            };
        } & {
            id: string;
            coachId: string;
            userId: string;
            onboardingData: import("@prisma/client/runtime/library").JsonValue;
        };
        workout: {
            id: string;
            description: string;
            title: string;
            coachId: string;
            exercises: import("@prisma/client/runtime/library").JsonValue;
            createdAt: Date;
        };
        progressLogs: {
            id: string;
            createdAt: Date;
            clientId: string;
            assignmentId: string;
            exerciseResults: import("@prisma/client/runtime/library").JsonValue;
            notes: string | null;
        }[];
    } & {
        id: string;
        workoutId: string;
        clientId: string;
        scheduledDate: Date;
        status: import(".prisma/client").$Enums.AssignmentStatus;
    }>;
    updateAssignmentStatus(id: string, status: AssignmentStatus, req: any): Promise<{
        client: {
            user: {
                id: string;
                email: string;
                name: string;
            };
        } & {
            id: string;
            coachId: string;
            userId: string;
            onboardingData: import("@prisma/client/runtime/library").JsonValue;
        };
        workout: {
            id: string;
            description: string;
            title: string;
            coachId: string;
            exercises: import("@prisma/client/runtime/library").JsonValue;
            createdAt: Date;
        };
    } & {
        id: string;
        workoutId: string;
        clientId: string;
        scheduledDate: Date;
        status: import(".prisma/client").$Enums.AssignmentStatus;
    }>;
    createProgressLog(id: string, data: CreateProgressLogDto, req: any): Promise<{
        id: string;
        createdAt: Date;
        clientId: string;
        assignmentId: string;
        exerciseResults: import("@prisma/client/runtime/library").JsonValue;
        notes: string | null;
    }>;
    getProgressLogs(id: string, req: any): Promise<{
        id: string;
        createdAt: Date;
        clientId: string;
        assignmentId: string;
        exerciseResults: import("@prisma/client/runtime/library").JsonValue;
        notes: string | null;
    }[]>;
}
