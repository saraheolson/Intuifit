import { UsersService } from './users.service';
import { CreateUserDto } from './dto/create-user.dto';
export declare class UsersController {
    private readonly usersService;
    constructor(usersService: UsersService);
    create(createUserDto: CreateUserDto): Promise<{
        id: string;
        email: string;
        passwordHash: string;
        name: string;
        role: import(".prisma/client").$Enums.Role;
        profileInfo: import("@prisma/client/runtime/library").JsonValue;
        stripeCustomerId: string | null;
    }>;
    getUser(id: string): Promise<({
        client: {
            id: string;
            userId: string;
            coachId: string;
            onboardingData: import("@prisma/client/runtime/library").JsonValue;
        } | null;
        coach: {
            id: string;
            userId: string;
            businessName: string | null;
            subscriptionPlan: string | null;
            subscriptionId: string | null;
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
