import { Injectable, NotFoundException, ForbiddenException } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { CreateExerciseDto } from './dto/create-exercise.dto';

@Injectable()
export class ExercisesService {
  constructor(private prisma: PrismaService) {}

  async createGlobalExercise(data: CreateExerciseDto, createdById: string) {
    return this.prisma.globalExercise.create({
      data: {
        ...data,
        createdById: createdById,
        thumbnailUrl: data.thumbnailUrl || 'https://via.placeholder.com/150',
      },
    });
  }

  async createCoachExercise(data: CreateExerciseDto, coachId: string, baseExerciseId: string) {
    const baseExercise = await this.prisma.globalExercise.findUnique({
      where: { id: baseExerciseId },
    });

    if (!baseExercise) {
      throw new NotFoundException('Base exercise not found');
    }

    return this.prisma.coachExercise.create({
      data: {
        ...data,
        coachId,
        baseExerciseId,
        thumbnailUrl: data.thumbnailUrl || baseExercise.thumbnailUrl,
      },
    });
  }

  async getGlobalExercises() {
    return this.prisma.globalExercise.findMany({
      include: {
        createdBy: {
          select: {
            id: true,
            name: true,
            email: true,
          },
        },
      },
    });
  }

  async getCoachExercises(coachId: string) {
    return this.prisma.coachExercise.findMany({
      where: { coachId },
      include: {
        baseExercise: true,
      },
    });
  }

  async getGlobalExercise(id: string) {
    const exercise = await this.prisma.globalExercise.findUnique({
      where: { id },
      include: {
        createdBy: {
          select: {
            id: true,
            name: true,
            email: true,
          },
        },
      },
    });

    if (!exercise) {
      throw new NotFoundException('Exercise not found');
    }

    return exercise;
  }

  async getCoachExercise(id: string, coachId: string) {
    const exercise = await this.prisma.coachExercise.findUnique({
      where: { id },
      include: {
        baseExercise: true,
      },
    });

    if (!exercise) {
      throw new NotFoundException('Exercise not found');
    }

    if (exercise.coachId !== coachId) {
      throw new ForbiddenException('You do not have access to this exercise');
    }

    return exercise;
  }

  async updateGlobalExercise(id: string, data: Partial<CreateExerciseDto>, userId: string) {
    const exercise = await this.prisma.globalExercise.findUnique({
      where: { id },
    });

    if (!exercise) {
      throw new NotFoundException('Exercise not found');
    }

    if (exercise.createdById !== userId) {
      throw new ForbiddenException('You do not have permission to update this exercise');
    }

    // Remove any relation data from the update
    const { createdBy, ...updateData } = data as any;

    return this.prisma.globalExercise.update({
      where: { id },
      data: updateData,
    });
  }

  async updateCoachExercise(id: string, data: Partial<CreateExerciseDto>, coachId: string) {
    const exercise = await this.prisma.coachExercise.findUnique({
      where: { id },
    });

    if (!exercise) {
      throw new NotFoundException('Exercise not found');
    }

    if (exercise.coachId !== coachId) {
      throw new ForbiddenException('You do not have permission to update this exercise');
    }

    return this.prisma.coachExercise.update({
      where: { id },
      data,
    });
  }

  async deleteGlobalExercise(id: string, userId: string) {
    const exercise = await this.prisma.globalExercise.findUnique({
      where: { id },
    });

    if (!exercise) {
      throw new NotFoundException('Exercise not found');
    }

    if (exercise.createdById !== userId) {
      throw new ForbiddenException('You do not have permission to delete this exercise');
    }

    return this.prisma.globalExercise.delete({
      where: { id },
    });
  }

  async deleteCoachExercise(id: string, coachId: string) {
    const exercise = await this.prisma.coachExercise.findUnique({
      where: { id },
    });

    if (!exercise) {
      throw new NotFoundException('Exercise not found');
    }

    if (exercise.coachId !== coachId) {
      throw new ForbiddenException('You do not have permission to delete this exercise');
    }

    return this.prisma.coachExercise.delete({
      where: { id },
    });
  }
} 