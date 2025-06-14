import { PrismaService } from '../prisma/prisma.service';
export declare class AdminService {
    private prisma;
    constructor(prisma: PrismaService);
    getAllExercises(): Promise<({
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
    createExercise(data: any): Promise<{
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
    updateExercise(id: string, data: any): Promise<{
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
    deleteExercise(id: string): Promise<{
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
    getAllCoaches(): Promise<({
        user: {
            id: string;
            email: string;
            name: string;
        };
        clients: ({
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
        })[];
    } & {
        id: string;
        userId: string;
        businessName: string | null;
        subscriptionPlan: string | null;
        subscriptionId: string | null;
    })[]>;
    getCoachClients(coachId: string): Promise<({
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
    })[]>;
    updateCoach(id: string, data: any): Promise<{
        user: {
            id: string;
            email: string;
            name: string;
        };
    } & {
        id: string;
        userId: string;
        businessName: string | null;
        subscriptionPlan: string | null;
        subscriptionId: string | null;
    }>;
    getAllPayments(): Promise<({
        coach: {
            user: {
                id: string;
                email: string;
                name: string;
            };
        } & {
            id: string;
            userId: string;
            businessName: string | null;
            subscriptionPlan: string | null;
            subscriptionId: string | null;
        };
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
    } & {
        id: string;
        coachId: string;
        createdAt: Date;
        clientId: string;
        status: import(".prisma/client").$Enums.PaymentStatus;
        stripeInvoiceId: string;
        stripeSubscriptionId: string | null;
    })[]>;
    getAllSubscriptions(): Promise<{
        user: {
            id: string;
            email: string;
            name: string;
        };
        id: string;
        subscriptionPlan: string | null;
        subscriptionId: string | null;
    }[]>;
    updateSubscription(id: string, data: any): Promise<{
        user: {
            id: string;
            email: string;
            name: string;
        };
    } & {
        id: string;
        userId: string;
        businessName: string | null;
        subscriptionPlan: string | null;
        subscriptionId: string | null;
    }>;
}
