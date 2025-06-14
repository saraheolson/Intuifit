import { Role } from '../../../generated/prisma';
export declare class CreateUserDto {
    email: string;
    passwordHash: string;
    name: string;
    role: Role;
    profileInfo: any;
}
