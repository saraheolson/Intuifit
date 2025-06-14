import { Controller, Get, Post, Put, Delete, Body, Param, UseGuards, Request } from '@nestjs/common';
import { WorkoutsService } from './workouts.service';
import { CreateWorkoutDto } from './dto/create-workout.dto';
import { JwtAuthGuard } from '../auth/guards/jwt-auth.guard';
import { RolesGuard } from '../auth/roles.guard';
import { Roles } from '../auth/roles.decorator';

@Controller('workouts')
@UseGuards(JwtAuthGuard, RolesGuard)
export class WorkoutsController {
  constructor(private readonly workoutsService: WorkoutsService) {}

  @Post()
  @Roles('coach', 'team_coach')
  async createWorkout(@Body() data: CreateWorkoutDto, @Request() req) {
    return this.workoutsService.createWorkout(data, req.user.id);
  }

  @Get()
  @Roles('coach', 'team_coach')
  async getWorkouts(@Request() req) {
    return this.workoutsService.getWorkouts(req.user.id);
  }

  @Get(':id')
  @Roles('coach', 'team_coach')
  async getWorkout(@Param('id') id: string, @Request() req) {
    return this.workoutsService.getWorkout(id, req.user.id);
  }

  @Put(':id')
  @Roles('coach', 'team_coach')
  async updateWorkout(
    @Param('id') id: string,
    @Body() data: Partial<CreateWorkoutDto>,
    @Request() req,
  ) {
    return this.workoutsService.updateWorkout(id, data, req.user.id);
  }

  @Delete(':id')
  @Roles('coach', 'team_coach')
  async deleteWorkout(@Param('id') id: string, @Request() req) {
    return this.workoutsService.deleteWorkout(id, req.user.id);
  }

  @Post(':id/assign')
  @Roles('coach', 'team_coach')
  async assignWorkout(
    @Param('id') id: string,
    @Body() data: { clientId: string; scheduledDate: Date },
    @Request() req,
  ) {
    return this.workoutsService.assignWorkout(id, data.clientId, data.scheduledDate);
  }
} 