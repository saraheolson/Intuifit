import { Injectable, NotFoundException, ForbiddenException } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { CreateWorkoutDto } from './dto/create-workout.dto';

@Injectable()
export class WorkoutsService {
  constructor(private prisma: PrismaService) {}

  async createWorkout(data: CreateWorkoutDto, coachId: string) {
    return this.prisma.workout.create({
      data: {
        ...data,
        coachId,
        exercises: data.exercises as any, // Prisma will handle JSON serialization
      },
    });
  }

  async getWorkouts(coachId: string) {
    return this.prisma.workout.findMany({
      where: { coachId },
      include: {
        assignments: {
          include: {
            client: {
              select: {
                id: true,
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
        },
      },
    });
  }

  async getWorkout(id: string, coachId: string) {
    const workout = await this.prisma.workout.findUnique({
      where: { id },
      include: {
        assignments: {
          include: {
            client: {
              select: {
                id: true,
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
        },
      },
    });

    if (!workout) {
      throw new NotFoundException('Workout not found');
    }

    if (workout.coachId !== coachId) {
      throw new ForbiddenException('You do not have access to this workout');
    }

    return workout;
  }

  async updateWorkout(id: string, data: Partial<CreateWorkoutDto>, coachId: string) {
    const workout = await this.prisma.workout.findUnique({
      where: { id },
    });

    if (!workout) {
      throw new NotFoundException('Workout not found');
    }

    if (workout.coachId !== coachId) {
      throw new ForbiddenException('You do not have permission to update this workout');
    }

    return this.prisma.workout.update({
      where: { id },
      data: {
        ...data,
        exercises: data.exercises as any, // Prisma will handle JSON serialization
      },
    });
  }

  async deleteWorkout(id: string, coachId: string) {
    const workout = await this.prisma.workout.findUnique({
      where: { id },
    });

    if (!workout) {
      throw new NotFoundException('Workout not found');
    }

    if (workout.coachId !== coachId) {
      throw new ForbiddenException('You do not have permission to delete this workout');
    }

    return this.prisma.workout.delete({
      where: { id },
    });
  }

  async assignWorkout(workoutId: string, clientId: string, scheduledDate: Date) {
    const workout = await this.prisma.workout.findUnique({
      where: { id: workoutId },
    });

    if (!workout) {
      throw new NotFoundException('Workout not found');
    }

    const client = await this.prisma.client.findUnique({
      where: { id: clientId },
    });

    if (!client) {
      throw new NotFoundException('Client not found');
    }

    if (client.coachId !== workout.coachId) {
      throw new ForbiddenException('Client does not belong to your coaching team');
    }

    return this.prisma.assignment.create({
      data: {
        workoutId,
        clientId,
        scheduledDate,
        status: 'planned',
      },
    });
  }
} 