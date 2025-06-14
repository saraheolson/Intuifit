import { UsersService } from './users.service';
import { Role } from '../../generated/prisma';
export declare class UsersController {
    private readonly usersService;
    constructor(usersService: UsersService);
    createUser(data: {
        email: string;
        passwordHash: string;
        name: string;
        role: Role;
        profileInfo: any;
    }): Promise<{
        id: string;
        email: string;
        passwordHash: string;
        name: string;
        role: import(".prisma/client").$Enums.Role;
        profileInfo: import("@prisma/client/runtime/library").JsonValue;
        stripeCustomerId: string | null;
    }>;
    getUser(id: string): Promise<({
        coach: {
            id: string;
            userId: string;
            businessName: string | null;
            subscriptionPlan: string | null;
            subscriptionId: string | null;
        } | null;
        client: {
            id: string;
            coachId: string;
            userId: string;
            onboardingData: import("@prisma/client/runtime/library").JsonValue;
        } | null;
    } & {
        id: string;
        email: string;
        passwordHash: string;
        name: string;
        role: import(".prisma/client").$Enums.Role;
        profileInfo: import("@prisma/client/runtime/library").JsonValue;
        stripeCustomerId: string | null;
    }) | null>;
    updateUser(id: string, data: {
        name?: string;
        profileInfo?: any;
    }): Promise<{
        id: string;
        email: string;
        passwordHash: string;
        name: string;
        role: import(".prisma/client").$Enums.Role;
        profileInfo: import("@prisma/client/runtime/library").JsonValue;
        stripeCustomerId: string | null;
    }>;
    deleteUser(id: string): Promise<{
        id: string;
        email: string;
        passwordHash: string;
        name: string;
        role: import(".prisma/client").$Enums.Role;
        profileInfo: import("@prisma/client/runtime/library").JsonValue;
        stripeCustomerId: string | null;
    }>;
}
