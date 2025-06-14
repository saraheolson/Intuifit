import { Controller, Get, Post, Put, Delete, Body, Param, UseGuards } from '@nestjs/common';
import { JwtAuthGuard } from '../auth/guards/jwt-auth.guard';
import { RolesGuard } from '../auth/guards/roles.guard';
import { Roles } from '../auth/decorators/roles.decorator';
import { Role } from '@prisma/client';
import { AdminService } from './admin.service';

@Controller('admin')
@UseGuards(JwtAuthGuard, RolesGuard)
@Roles(Role.admin)
export class AdminController {
  constructor(private readonly adminService: AdminService) {}

  // Exercise Management
  @Get('exercises')
  async getAllExercises() {
    return this.adminService.getAllExercises();
  }

  @Post('exercises')
  async createExercise(@Body() createExerciseDto: any) {
    return this.adminService.createExercise(createExerciseDto);
  }

  @Put('exercises/:id')
  async updateExercise(@Param('id') id: string, @Body() updateExerciseDto: any) {
    return this.adminService.updateExercise(id, updateExerciseDto);
  }

  @Delete('exercises/:id')
  async deleteExercise(@Param('id') id: string) {
    return this.adminService.deleteExercise(id);
  }

  // Coach Management
  @Get('coaches')
  async getAllCoaches() {
    return this.adminService.getAllCoaches();
  }

  @Get('coaches/:id/clients')
  async getCoachClients(@Param('id') id: string) {
    return this.adminService.getCoachClients(id);
  }

  @Put('coaches/:id')
  async updateCoach(@Param('id') id: string, @Body() updateCoachDto: any) {
    return this.adminService.updateCoach(id, updateCoachDto);
  }

  // Payment Management
  @Get('payments')
  async getAllPayments() {
    return this.adminService.getAllPayments();
  }

  @Get('payments/subscriptions')
  async getAllSubscriptions() {
    return this.adminService.getAllSubscriptions();
  }

  @Put('payments/subscriptions/:id')
  async updateSubscription(@Param('id') id: string, @Body() updateSubscriptionDto: any) {
    return this.adminService.updateSubscription(id, updateSubscriptionDto);
  }
} 