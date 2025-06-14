import { PrismaService } from '../prisma/prisma.service';
import { CreateAssignmentDto } from './dto/create-assignment.dto';
import { CreateProgressLogDto } from './dto/create-progress-log.dto';
import { AssignmentStatus } from '@prisma/client';
export declare class AssignmentsService {
    private prisma;
    constructor(prisma: PrismaService);
    createAssignment(data: CreateAssignmentDto, coachId: string): Promise<{
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
    getClientAssignments(clientId: string, coachId: string): Promise<({
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
    getAssignment(id: string, coachId: string): Promise<{
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
    updateAssignmentStatus(id: string, status: AssignmentStatus, coachId: string): Promise<{
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
    createProgressLog(data: CreateProgressLogDto, clientId: string): Promise<{
        id: string;
        createdAt: Date;
        clientId: string;
        assignmentId: string;
        exerciseResults: import("@prisma/client/runtime/library").JsonValue;
        notes: string | null;
    }>;
    getProgressLogs(assignmentId: string, clientId: string): Promise<{
        id: string;
        createdAt: Date;
        clientId: string;
        assignmentId: string;
        exerciseResults: import("@prisma/client/runtime/library").JsonValue;
        notes: string | null;
    }[]>;
}
