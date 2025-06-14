import { Role } from '../../../generated/prisma';

export class CreateUserDto {
  email: string;
  passwordHash: string;
  name: string;
  role: Role;
  profileInfo: any;
} 