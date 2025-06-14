import { Injectable, NotFoundException, ForbiddenException } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { CreateAssignmentDto } from './dto/create-assignment.dto';
import { CreateProgressLogDto } from './dto/create-progress-log.dto';
import { AssignmentStatus } from '@prisma/client';

@Injectable()
export class AssignmentsService {
  constructor(private prisma: PrismaService) {}

  async createAssignment(data: CreateAssignmentDto, coachId: string) {
    const workout = await this.prisma.workout.findUnique({
      where: { id: data.workoutId },
    });

    if (!workout) {
      throw new NotFoundException('Workout not found');
    }

    if (workout.coachId !== coachId) {
      throw new ForbiddenException('You do not have access to this workout');
    }

    const client = await this.prisma.client.findUnique({
      where: { id: data.clientId },
    });

    if (!client) {
      throw new NotFoundException('Client not found');
    }

    if (client.coachId !== coachId) {
      throw new ForbiddenException('Client does not belong to your coaching team');
    }

    return this.prisma.assignment.create({
      data: {
        workoutId: data.workoutId,
        clientId: data.clientId,
        scheduledDate: new Date(data.scheduledDate),
        status: AssignmentStatus.planned,
      },
      include: {
        workout: true,
        client: {
          include: {
            user: {
              select: {
                id: true,
                name: true,
                email: true,
              },
            },
          },
        },
      },
    });
  }

  async getClientAssignments(clientId: string, coachId: string) {
    const client = await this.prisma.client.findUnique({
      where: { id: clientId },
    });

    if (!client) {
      throw new NotFoundException('Client not found');
    }

    if (client.coachId !== coachId) {
      throw new ForbiddenException('You do not have access to this client');
    }

    return this.prisma.assignment.findMany({
      where: { clientId },
      include: {
        workout: true,
        progressLogs: {
          orderBy: {
            createdAt: 'desc',
          },
        },
      },
      orderBy: {
        scheduledDate: 'desc',
      },
    });
  }

  async getAssignment(id: string, coachId: string) {
    const assignment = await this.prisma.assignment.findUnique({
      where: { id },
      include: {
        workout: true,
        client: {
          include: {
            user: {
              select: {
                id: true,
                name: true,
                email: true,
              },
            },
          },
        },
        progressLogs: {
          orderBy: {
            createdAt: 'desc',
          },
        },
      },
    });

    if (!assignment) {
      throw new NotFoundException('Assignment not found');
    }

    if (assignment.client.coachId !== coachId) {
      throw new ForbiddenException('You do not have access to this assignment');
    }

    return assignment;
  }

  async updateAssignmentStatus(id: string, status: AssignmentStatus, coachId: string) {
    const assignment = await this.prisma.assignment.findUnique({
      where: { id },
      include: {
        client: true,
      },
    });

    if (!assignment) {
      throw new NotFoundException('Assignment not found');
    }

    if (assignment.client.coachId !== coachId) {
      throw new ForbiddenException('You do not have access to this assignment');
    }

    return this.prisma.assignment.update({
      where: { id },
      data: { status },
      include: {
        workout: true,
        client: {
          include: {
            user: {
              select: {
                id: true,
                name: true,
                email: true,
              },
            },
          },
        },
      },
    });
  }

  async createProgressLog(data: CreateProgressLogDto, clientId: string) {
    const assignment = await this.prisma.assignment.findUnique({
      where: { id: data.assignmentId },
      include: {
        client: true,
      },
    });

    if (!assignment) {
      throw new NotFoundException('Assignment not found');
    }

    if (assignment.clientId !== clientId) {
      throw new ForbiddenException('You do not have access to this assignment');
    }

    const progressLog = await this.prisma.progressLog.create({
      data: {
        assignmentId: data.assignmentId,
        clientId,
        exerciseResults: data.exerciseResults as any,
        notes: data.notes,
      },
    });

    // Update assignment status to in_progress if it was planned
    if (assignment.status === AssignmentStatus.planned) {
      await this.prisma.assignment.update({
        where: { id: data.assignmentId },
        data: { status: AssignmentStatus.in_progress },
      });
    }

    return progressLog;
  }

  async getProgressLogs(assignmentId: string, clientId: string) {
    const assignment = await this.prisma.assignment.findUnique({
      where: { id: assignmentId },
      include: {
        client: true,
      },
    });

    if (!assignment) {
      throw new NotFoundException('Assignment not found');
    }

    if (assignment.clientId !== clientId) {
      throw new ForbiddenException('You do not have access to this assignment');
    }

    return this.prisma.progressLog.findMany({
      where: { assignmentId },
      orderBy: {
        createdAt: 'desc',
      },
    });
  }
} 