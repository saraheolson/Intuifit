import { Injectable, NotFoundException } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { Role } from '@prisma/client';
import { clerkClient } from '@clerk/clerk-sdk-node';

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

  async createExercise(createExerciseDto: any) {
    return this.prisma.globalExercise.create({
      data: createExerciseDto,
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

  async updateExercise(id: string, updateExerciseDto: any) {
    const exercise = await this.prisma.globalExercise.findUnique({
      where: { id },
    });

    if (!exercise) {
      throw new NotFoundException('Exercise not found');
    }

    return this.prisma.globalExercise.update({
      where: { id },
      data: updateExerciseDto,
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

  async createCoach(createCoachDto: { name: string; email: string; subscriptionPlan: string }) {
    // Create a new user in Clerk
    const tempPassword = Math.random().toString(36).slice(-8);
    const clerkUser = await clerkClient.users.createUser({
      emailAddress: [createCoachDto.email],
      firstName: createCoachDto.name.split(' ')[0],
      lastName: createCoachDto.name.split(' ').slice(1).join(' '),
      publicMetadata: {
        role: Role.coach,
      },
      password: tempPassword,
      phoneNumber: ['+15555555555'], // Default phone number, user can update later
    });

    // Create a new user in our database
    const user = await this.prisma.user.create({
      data: {
        id: clerkUser.id,
        email: createCoachDto.email,
        name: createCoachDto.name,
        role: Role.coach,
        passwordHash: '', // Clerk handles authentication
        profileInfo: {},
      },
    });

    // Create a new coach in our database
    const coach = await this.prisma.coach.create({
      data: {
        userId: user.id,
        subscriptionPlan: createCoachDto.subscriptionPlan,
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

    // Send a sign-in email
    await clerkClient.emails.createEmail({
      fromEmailName: 'Intuifit',
      subject: 'Welcome to Intuifit',
      body: `Welcome to Intuifit! Your temporary password is: ${tempPassword}`,
      emailAddressId: clerkUser.emailAddresses[0].id,
    });

    return coach;
  }

  async getCoachClients(id: string) {
    const coach = await this.prisma.coach.findUnique({
      where: { id },
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
    });
  }

  async getAllSubscriptions() {
    return this.prisma.coach.findMany({
      where: {
        subscriptionPlan: {
          not: null,
        },
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

  async updateSubscription(id: string, data: any) {
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
} 