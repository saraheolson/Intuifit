import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { Role } from '../../generated/prisma';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';

@Injectable()
export class UsersService {
  constructor(private prisma: PrismaService) {}

  async findUserByEmail(email: string) {
    return this.prisma.user.findUnique({
      where: { email },
    });
  }

  async createUser(data: {
    id: string;
    email: string;
    passwordHash: string;
    name: string;
    role: Role;
    profileInfo: any;
  }) {
    return this.prisma.user.create({
      data: {
        id: data.id,
        email: data.email,
        passwordHash: data.passwordHash,
        name: data.name,
        role: data.role,
        profileInfo: data.profileInfo,
      },
    });
  }

  async findUserById(id: string) {
    return this.prisma.user.findUnique({
      where: { id },
      include: {
        coach: true,
        client: true,
      },
    });
  }

  async updateUser(id: string, data: {
    name?: string;
    profileInfo?: any;
  }) {
    return this.prisma.user.update({
      where: { id },
      data,
    });
  }

  async deleteUser(id: string) {
    return this.prisma.user.delete({
      where: { id },
    });
  }

  async findByEmail(email: string) {
    return this.prisma.user.findUnique({
      where: { email },
    });
  }

  async create(createUserDto: CreateUserDto) {
    return this.prisma.user.create({
      data: {
        id: createUserDto.id,
        email: createUserDto.email,
        passwordHash: createUserDto.passwordHash,
        name: createUserDto.name,
        role: createUserDto.role,
        profileInfo: createUserDto.profileInfo,
      },
    });
  }

  async findAll() {
    return this.prisma.user.findMany();
  }

  async findOne(id: string) {
    return this.prisma.user.findUnique({
      where: { id },
    });
  }

  async update(id: string, updateUserDto: UpdateUserDto) {
    return this.prisma.user.update({
      where: { id },
      data: {
        id: updateUserDto.id,
        email: updateUserDto.email,
        passwordHash: updateUserDto.passwordHash,
        name: updateUserDto.name,
        role: updateUserDto.role,
        profileInfo: updateUserDto.profileInfo,
      },
    });
  }

  async remove(id: string) {
    return this.prisma.user.delete({
      where: { id },
    });
  }
} 