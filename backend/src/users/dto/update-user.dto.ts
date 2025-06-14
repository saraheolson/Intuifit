import { IsEmail, IsString, IsEnum, IsOptional } from 'class-validator';
import { Role } from '@prisma/client';

export class UpdateUserDto {
  @IsString()
  @IsOptional()
  id?: string;

  @IsEmail()
  @IsOptional()
  email?: string;

  @IsString()
  @IsOptional()
  passwordHash?: string;

  @IsString()
  @IsOptional()
  name?: string;

  @IsEnum(Role)
  @IsOptional()
  role?: Role;

  @IsOptional()
  profileInfo?: any;
} 