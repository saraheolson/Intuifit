import { Role } from '@prisma/client';
export declare class RegisterDto {
    id: string;
    email: string;
    password: string;
    name: string;
    role: Role;
    profileInfo?: any;
}
