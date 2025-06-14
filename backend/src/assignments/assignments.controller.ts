import { Controller, Get, Post, Put, Body, Param, UseGuards, Request } from '@nestjs/common';
import { AssignmentsService } from './assignments.service';
import { CreateAssignmentDto } from './dto/create-assignment.dto';
import { CreateProgressLogDto } from './dto/create-progress-log.dto';
import { JwtAuthGuard } from '../auth/guards/jwt-auth.guard';
import { RolesGuard } from '../auth/roles.guard';
import { Roles } from '../auth/roles.decorator';
import { AssignmentStatus } from '../../generated/prisma';

@Controller('assignments')
@UseGuards(JwtAuthGuard, RolesGuard)
export class AssignmentsController {
  constructor(private readonly assignmentsService: AssignmentsService) {}

  @Post()
  @Roles('coach', 'team_coach')
  async createAssignment(@Body() data: CreateAssignmentDto, @Request() req) {
    return this.assignmentsService.createAssignment(data, req.user.id);
  }

  @Get('client/:clientId')
  @Roles('coach', 'team_coach')
  async getClientAssignments(@Param('clientId') clientId: string, @Request() req) {
    return this.assignmentsService.getClientAssignments(clientId, req.user.id);
  }

  @Get(':id')
  @Roles('coach', 'team_coach', 'client')
  async getAssignment(@Param('id') id: string, @Request() req) {
    return this.assignmentsService.getAssignment(id, req.user.id);
  }

  @Put(':id/status')
  @Roles('coach', 'team_coach')
  async updateAssignmentStatus(
    @Param('id') id: string,
    @Body('status') status: AssignmentStatus,
    @Request() req,
  ) {
    return this.assignmentsService.updateAssignmentStatus(id, status, req.user.id);
  }

  @Post(':id/progress')
  @Roles('client')
  async createProgressLog(
    @Param('id') id: string,
    @Body() data: CreateProgressLogDto,
    @Request() req,
  ) {
    return this.assignmentsService.createProgressLog(data, req.user.id);
  }

  @Get(':id/progress')
  @Roles('client')
  async getProgressLogs(@Param('id') id: string, @Request() req) {
    return this.assignmentsService.getProgressLogs(id, req.user.id);
  }
} 