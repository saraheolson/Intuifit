"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.WorkoutsService = void 0;
const common_1 = require("@nestjs/common");
const prisma_service_1 = require("../prisma/prisma.service");
let WorkoutsService = class WorkoutsService {
    prisma;
    constructor(prisma) {
        this.prisma = prisma;
    }
    async createWorkout(data, coachId) {
        return this.prisma.workout.create({
            data: {
                ...data,
                coachId,
                exercises: data.exercises,
            },
        });
    }
    async getWorkouts(coachId) {
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
    async getWorkout(id, coachId) {
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
            throw new common_1.NotFoundException('Workout not found');
        }
        if (workout.coachId !== coachId) {
            throw new common_1.ForbiddenException('You do not have access to this workout');
        }
        return workout;
    }
    async updateWorkout(id, data, coachId) {
        const workout = await this.prisma.workout.findUnique({
            where: { id },
        });
        if (!workout) {
            throw new common_1.NotFoundException('Workout not found');
        }
        if (workout.coachId !== coachId) {
            throw new common_1.ForbiddenException('You do not have permission to update this workout');
        }
        return this.prisma.workout.update({
            where: { id },
            data: {
                ...data,
                exercises: data.exercises,
            },
        });
    }
    async deleteWorkout(id, coachId) {
        const workout = await this.prisma.workout.findUnique({
            where: { id },
        });
        if (!workout) {
            throw new common_1.NotFoundException('Workout not found');
        }
        if (workout.coachId !== coachId) {
            throw new common_1.ForbiddenException('You do not have permission to delete this workout');
        }
        return this.prisma.workout.delete({
            where: { id },
        });
    }
    async assignWorkout(workoutId, clientId, scheduledDate) {
        const workout = await this.prisma.workout.findUnique({
            where: { id: workoutId },
        });
        if (!workout) {
            throw new common_1.NotFoundException('Workout not found');
        }
        const client = await this.prisma.client.findUnique({
            where: { id: clientId },
        });
        if (!client) {
            throw new common_1.NotFoundException('Client not found');
        }
        if (client.coachId !== workout.coachId) {
            throw new common_1.ForbiddenException('Client does not belong to your coaching team');
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
};
exports.WorkoutsService = WorkoutsService;
exports.WorkoutsService = WorkoutsService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [prisma_service_1.PrismaService])
], WorkoutsService);
//# sourceMappingURL=workouts.service.js.map