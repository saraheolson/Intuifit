import { Controller, Get, Post, Put, Delete, Body, Param, UseGuards } from '@nestjs/common';
import { UsersService } from './users.service';
import { Role } from '../../generated/prisma';
import { CreateUserDto } from './dto/create-user.dto';

@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @Post()
  create(@Body() createUserDto: CreateUserDto) {
    return this.usersService.create(createUserDto);
  }

  @Get(':id')
  async getUser(@Param('id') id: string) {
    return this.usersService.findUserById(id);
  }

  @Put(':id')
  async updateUser(
    @Param('id') id: string,
    @Body() data: {
      name?: string;
      profileInfo?: any;
    },
  ) {
    return this.usersService.updateUser(id, data);
  }

  @Delete(':id')
  async deleteUser(@Param('id') id: string) {
    return this.usersService.deleteUser(id);
  }
} 