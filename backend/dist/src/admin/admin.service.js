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
exports.AdminService = void 0;
const common_1 = require("@nestjs/common");
const prisma_service_1 = require("../prisma/prisma.service");
let AdminService = class AdminService {
    prisma;
    constructor(prisma) {
        this.prisma = prisma;
    }
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
    async createExercise(data) {
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
    async updateExercise(id, data) {
        const exercise = await this.prisma.globalExercise.findUnique({
            where: { id },
        });
        if (!exercise) {
            throw new common_1.NotFoundException('Exercise not found');
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
    async deleteExercise(id) {
        const exercise = await this.prisma.globalExercise.findUnique({
            where: { id },
        });
        if (!exercise) {
            throw new common_1.NotFoundException('Exercise not found');
        }
        return this.prisma.globalExercise.delete({
            where: { id },
        });
    }
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
    async getCoachClients(coachId) {
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
            throw new common_1.NotFoundException('Coach not found');
        }
        return coach.clients;
    }
    async updateCoach(id, data) {
        const coach = await this.prisma.coach.findUnique({
            where: { id },
        });
        if (!coach) {
            throw new common_1.NotFoundException('Coach not found');
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
    async updateSubscription(id, data) {
        const coach = await this.prisma.coach.findUnique({
            where: { id },
        });
        if (!coach) {
            throw new common_1.NotFoundException('Coach not found');
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
};
exports.AdminService = AdminService;
exports.AdminService = AdminService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [prisma_service_1.PrismaService])
], AdminService);
//# sourceMappingURL=admin.service.js.map