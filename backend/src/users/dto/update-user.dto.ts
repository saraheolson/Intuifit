import { Role } from '../../../generated/prisma';

export class UpdateUserDto {
  email?: string;
  passwordHash?: string;
  name?: string;
  role?: Role;
  profileInfo?: any;
} 