import { Role } from '@prisma/client';
export declare class UpdateUserDto {
    id?: string;
    email?: string;
    passwordHash?: string;
    name?: string;
    role?: Role;
    profileInfo?: any;
}
