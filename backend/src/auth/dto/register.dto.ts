import { IsEmail, IsString, IsEnum, IsOptional } from 'class-validator';
import { Role } from '@prisma/client';

export class RegisterDto {
  @IsString()
  id: string;

  @IsEmail()
  email: string;

  @IsString()
  password: string;

  @IsString()
  name: string;

  @IsEnum(Role)
  role: Role;

  @IsOptional()
  profileInfo?: any;
} 