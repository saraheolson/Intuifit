import { Controller, Get, Post, Put, Delete, Body, Param, UseGuards, Request } from '@nestjs/common';
import { ExercisesService } from './exercises.service';
import { CreateExerciseDto } from './dto/create-exercise.dto';
import { JwtAuthGuard } from '../auth/guards/jwt-auth.guard';
import { RolesGuard } from '../auth/guards/roles.guard';
import { Roles } from '../auth/decorators/roles.decorator';
import { ApiTags, ApiOperation, ApiResponse, ApiBearerAuth } from '@nestjs/swagger';

@ApiTags('exercises')
@Controller('exercises')
@UseGuards(JwtAuthGuard, RolesGuard)
export class ExercisesController {
  constructor(private readonly exercisesService: ExercisesService) {}

  @Post('global')
  @Roles('admin')
  @ApiBearerAuth()
  @ApiOperation({ summary: 'Create a new global exercise' })
  @ApiResponse({ status: 201, description: 'Global exercise created successfully' })
  @ApiResponse({ status: 400, description: 'Bad request' })
  @ApiResponse({ status: 401, description: 'Unauthorized' })
  @ApiResponse({ status: 403, description: 'Forbidden' })
  async createGlobalExercise(@Body() data: CreateExerciseDto, @Request() req) {
    return this.exercisesService.createGlobalExercise(data, req.user.id);
  }

  @Post('coach/:baseExerciseId')
  @Roles('coach', 'team_coach')
  @ApiBearerAuth()
  @ApiOperation({ summary: 'Create a new coach exercise' })
  @ApiResponse({ status: 201, description: 'Coach exercise created successfully' })
  @ApiResponse({ status: 400, description: 'Bad request' })
  @ApiResponse({ status: 401, description: 'Unauthorized' })
  @ApiResponse({ status: 403, description: 'Forbidden' })
  async createCoachExercise(
    @Body() data: CreateExerciseDto,
    @Param('baseExerciseId') baseExerciseId: string,
    @Request() req,
  ) {
    return this.exercisesService.createCoachExercise(data, req.user.id, baseExerciseId);
  }

  @Get('global')
  @ApiBearerAuth()
  @ApiOperation({ summary: 'Get all global exercises' })
  @ApiResponse({ status: 200, description: 'Return all global exercises' })
  @ApiResponse({ status: 401, description: 'Unauthorized' })
  async getGlobalExercises() {
    return this.exercisesService.getGlobalExercises();
  }

  @Get('coach')
  @Roles('coach', 'team_coach')
  @ApiBearerAuth()
  @ApiOperation({ summary: 'Get all coach exercises' })
  @ApiResponse({ status: 200, description: 'Return all coach exercises' })
  @ApiResponse({ status: 401, description: 'Unauthorized' })
  async getCoachExercises(@Request() req) {
    return this.exercisesService.getCoachExercises(req.user.id);
  }

  @Get('global/:id')
  @ApiBearerAuth()
  @ApiOperation({ summary: 'Get a global exercise by id' })
  @ApiResponse({ status: 200, description: 'Return the global exercise' })
  @ApiResponse({ status: 401, description: 'Unauthorized' })
  @ApiResponse({ status: 404, description: 'Global exercise not found' })
  async getGlobalExercise(@Param('id') id: string) {
    return this.exercisesService.getGlobalExercise(id);
  }

  @Get('coach/:id')
  @Roles('coach', 'team_coach')
  @ApiBearerAuth()
  @ApiOperation({ summary: 'Get a coach exercise by id' })
  @ApiResponse({ status: 200, description: 'Return the coach exercise' })
  @ApiResponse({ status: 401, description: 'Unauthorized' })
  @ApiResponse({ status: 404, description: 'Coach exercise not found' })
  async getCoachExercise(@Param('id') id: string, @Request() req) {
    return this.exercisesService.getCoachExercise(id, req.user.id);
  }

  @Put('global/:id')
  @Roles('admin')
  @ApiBearerAuth()
  @ApiOperation({ summary: 'Update a global exercise' })
  @ApiResponse({ status: 200, description: 'Global exercise updated successfully' })
  @ApiResponse({ status: 400, description: 'Bad request' })
  @ApiResponse({ status: 401, description: 'Unauthorized' })
  @ApiResponse({ status: 403, description: 'Forbidden' })
  @ApiResponse({ status: 404, description: 'Global exercise not found' })
  async updateGlobalExercise(
    @Param('id') id: string,
    @Body() data: Partial<CreateExerciseDto>,
    @Request() req,
  ) {
    return this.exercisesService.updateGlobalExercise(id, data, req.user.id);
  }

  @Put('coach/:id')
  @Roles('coach', 'team_coach')
  @ApiBearerAuth()
  @ApiOperation({ summary: 'Update a coach exercise' })
  @ApiResponse({ status: 200, description: 'Coach exercise updated successfully' })
  @ApiResponse({ status: 400, description: 'Bad request' })
  @ApiResponse({ status: 401, description: 'Unauthorized' })
  @ApiResponse({ status: 403, description: 'Forbidden' })
  @ApiResponse({ status: 404, description: 'Coach exercise not found' })
  async updateCoachExercise(
    @Param('id') id: string,
    @Body() data: Partial<CreateExerciseDto>,
    @Request() req,
  ) {
    return this.exercisesService.updateCoachExercise(id, data, req.user.id);
  }

  @Delete('global/:id')
  @Roles('admin')
  @ApiBearerAuth()
  @ApiOperation({ summary: 'Delete a global exercise' })
  @ApiResponse({ status: 200, description: 'Global exercise deleted successfully' })
  @ApiResponse({ status: 401, description: 'Unauthorized' })
  @ApiResponse({ status: 403, description: 'Forbidden' })
  @ApiResponse({ status: 404, description: 'Global exercise not found' })
  async deleteGlobalExercise(@Param('id') id: string, @Request() req) {
    return this.exercisesService.deleteGlobalExercise(id, req.user.id);
  }

  @Delete('coach/:id')
  @Roles('coach', 'team_coach')
  @ApiBearerAuth()
  @ApiOperation({ summary: 'Delete a coach exercise' })
  @ApiResponse({ status: 200, description: 'Coach exercise deleted successfully' })
  @ApiResponse({ status: 401, description: 'Unauthorized' })
  @ApiResponse({ status: 403, description: 'Forbidden' })
  @ApiResponse({ status: 404, description: 'Coach exercise not found' })
  async deleteCoachExercise(@Param('id') id: string, @Request() req) {
    return this.exercisesService.deleteCoachExercise(id, req.user.id);
  }
} 