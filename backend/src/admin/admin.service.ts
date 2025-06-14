import { Injectable, NotFoundException } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';

@Injectable()
export class AdminService {
  constructor(private prisma: PrismaService) {}

  // Exercise Management
  async getAllExercises() {
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

  async createExercise(data: any) {
    return this.prisma.globalExercise.create({
      data: {
        ...data,
        createdById: data.createdById,
      },
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

  async updateExercise(id: string, data: any) {
    const exercise = await this.prisma.globalExercise.findUnique({
      where: { id },
    });

    if (!exercise) {
      throw new NotFoundException('Exercise not found');
    }

    return this.prisma.globalExercise.update({
      where: { id },
      data,
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

  async deleteExercise(id: string) {
    const exercise = await this.prisma.globalExercise.findUnique({
      where: { id },
    });

    if (!exercise) {
      throw new NotFoundException('Exercise not found');
    }

    return this.prisma.globalExercise.delete({
      where: { id },
    });
  }

  // Coach Management
  async getAllCoaches() {
    return this.prisma.coach.findMany({
      include: {
        user: {
          select: {
            id: true,
            name: true,
            email: true,
          },
        },
        clients: {
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

  async getCoachClients(coachId: string) {
    const coach = await this.prisma.coach.findUnique({
      where: { id: coachId },
      include: {
        clients: {
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

    if (!coach) {
      throw new NotFoundException('Coach not found');
    }

    return coach.clients;
  }

  async updateCoach(id: string, data: any) {
    const coach = await this.prisma.coach.findUnique({
      where: { id },
    });

    if (!coach) {
      throw new NotFoundException('Coach not found');
    }

    return this.prisma.coach.update({
      where: { id },
      data,
      include: {
        user: {
          select: {
            id: true,
            name: true,
            email: true,
          },
        },
      },
    });
  }

  // Payment Management
  async getAllPayments() {
    return this.prisma.payment.findMany({
      include: {
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
        coach: {
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
      orderBy: {
        createdAt: 'desc',
      },
    });
  }

  async getAllSubscriptions() {
    return this.prisma.coach.findMany({
      where: {
        subscriptionId: {
          not: null,
        },
      },
      select: {
        id: true,
        subscriptionId: true,
        subscriptionPlan: true,
        user: {
          select: {
            id: true,
            name: true,
            email: true,
          },
        },
      },
    });
  }

  async updateSubscription(id: string, data: any) {
    const coach = await this.prisma.coach.findUnique({
      where: { id },
    });

    if (!coach) {
      throw new NotFoundException('Coach not found');
    }

    return this.prisma.coach.update({
      where: { id },
      data: {
        subscriptionPlan: data.subscriptionPlan,
        subscriptionId: data.subscriptionId,
      },
      include: {
        user: {
          select: {
            id: true,
            name: true,
            email: true,
          },
        },
      },
    });
  }
} 