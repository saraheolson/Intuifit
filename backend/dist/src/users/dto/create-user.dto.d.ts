import { Role } from '@prisma/client';
export declare class CreateUserDto {
    id: string;
    email: string;
    passwordHash: string;
    name: string;
    role: Role;
    profileInfo?: any;
}
