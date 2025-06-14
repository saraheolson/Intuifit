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
exports.AssignmentsService = void 0;
const common_1 = require("@nestjs/common");
const prisma_service_1 = require("../prisma/prisma.service");
const client_1 = require("@prisma/client");
let AssignmentsService = class AssignmentsService {
    prisma;
    constructor(prisma) {
        this.prisma = prisma;
    }
    async createAssignment(data, coachId) {
        const workout = await this.prisma.workout.findUnique({
            where: { id: data.workoutId },
        });
        if (!workout) {
            throw new common_1.NotFoundException('Workout not found');
        }
        if (workout.coachId !== coachId) {
            throw new common_1.ForbiddenException('You do not have access to this workout');
        }
        const client = await this.prisma.client.findUnique({
            where: { id: data.clientId },
        });
        if (!client) {
            throw new common_1.NotFoundException('Client not found');
        }
        if (client.coachId !== coachId) {
            throw new common_1.ForbiddenException('Client does not belong to your coaching team');
        }
        return this.prisma.assignment.create({
            data: {
                workoutId: data.workoutId,
                clientId: data.clientId,
                scheduledDate: new Date(data.scheduledDate),
                status: client_1.AssignmentStatus.planned,
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
    async getClientAssignments(clientId, coachId) {
        const client = await this.prisma.client.findUnique({
            where: { id: clientId },
        });
        if (!client) {
            throw new common_1.NotFoundException('Client not found');
        }
        if (client.coachId !== coachId) {
            throw new common_1.ForbiddenException('You do not have access to this client');
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
    async getAssignment(id, coachId) {
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
            throw new common_1.NotFoundException('Assignment not found');
        }
        if (assignment.client.coachId !== coachId) {
            throw new common_1.ForbiddenException('You do not have access to this assignment');
        }
        return assignment;
    }
    async updateAssignmentStatus(id, status, coachId) {
        const assignment = await this.prisma.assignment.findUnique({
            where: { id },
            include: {
                client: true,
            },
        });
        if (!assignment) {
            throw new common_1.NotFoundException('Assignment not found');
        }
        if (assignment.client.coachId !== coachId) {
            throw new common_1.ForbiddenException('You do not have access to this assignment');
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
    async createProgressLog(data, clientId) {
        const assignment = await this.prisma.assignment.findUnique({
            where: { id: data.assignmentId },
            include: {
                client: true,
            },
        });
        if (!assignment) {
            throw new common_1.NotFoundException('Assignment not found');
        }
        if (assignment.clientId !== clientId) {
            throw new common_1.ForbiddenException('You do not have access to this assignment');
        }
        const progressLog = await this.prisma.progressLog.create({
            data: {
                assignmentId: data.assignmentId,
                clientId,
                exerciseResults: data.exerciseResults,
                notes: data.notes,
            },
        });
        if (assignment.status === client_1.AssignmentStatus.planned) {
            await this.prisma.assignment.update({
                where: { id: data.assignmentId },
                data: { status: client_1.AssignmentStatus.in_progress },
            });
        }
        return progressLog;
    }
    async getProgressLogs(assignmentId, clientId) {
        const assignment = await this.prisma.assignment.findUnique({
            where: { id: assignmentId },
            include: {
                client: true,
            },
        });
        if (!assignment) {
            throw new common_1.NotFoundException('Assignment not found');
        }
        if (assignment.clientId !== clientId) {
            throw new common_1.ForbiddenException('You do not have access to this assignment');
        }
        return this.prisma.progressLog.findMany({
            where: { assignmentId },
            orderBy: {
                createdAt: 'desc',
            },
        });
    }
};
exports.AssignmentsService = AssignmentsService;
exports.AssignmentsService = AssignmentsService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [prisma_service_1.PrismaService])
], AssignmentsService);
//# sourceMappingURL=assignments.service.js.map