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
exports.ExercisesService = void 0;
const common_1 = require("@nestjs/common");
const prisma_service_1 = require("../prisma/prisma.service");
let ExercisesService = class ExercisesService {
    prisma;
    constructor(prisma) {
        this.prisma = prisma;
    }
    async createGlobalExercise(data, createdById) {
        return this.prisma.globalExercise.create({
            data: {
                ...data,
                createdById: createdById,
                thumbnailUrl: data.thumbnailUrl || 'https://via.placeholder.com/150',
            },
        });
    }
    async createCoachExercise(data, coachId, baseExerciseId) {
        const baseExercise = await this.prisma.globalExercise.findUnique({
            where: { id: baseExerciseId },
        });
        if (!baseExercise) {
            throw new common_1.NotFoundException('Base exercise not found');
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
    async getCoachExercises(coachId) {
        return this.prisma.coachExercise.findMany({
            where: { coachId },
            include: {
                baseExercise: true,
            },
        });
    }
    async getGlobalExercise(id) {
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
            throw new common_1.NotFoundException('Exercise not found');
        }
        return exercise;
    }
    async getCoachExercise(id, coachId) {
        const exercise = await this.prisma.coachExercise.findUnique({
            where: { id },
            include: {
                baseExercise: true,
            },
        });
        if (!exercise) {
            throw new common_1.NotFoundException('Exercise not found');
        }
        if (exercise.coachId !== coachId) {
            throw new common_1.ForbiddenException('You do not have access to this exercise');
        }
        return exercise;
    }
    async updateGlobalExercise(id, data, userId) {
        const exercise = await this.prisma.globalExercise.findUnique({
            where: { id },
        });
        if (!exercise) {
            throw new common_1.NotFoundException('Exercise not found');
        }
        if (exercise.createdById !== userId) {
            throw new common_1.ForbiddenException('You do not have permission to update this exercise');
        }
        return this.prisma.globalExercise.update({
            where: { id },
            data,
        });
    }
    async updateCoachExercise(id, data, coachId) {
        const exercise = await this.prisma.coachExercise.findUnique({
            where: { id },
        });
        if (!exercise) {
            throw new common_1.NotFoundException('Exercise not found');
        }
        if (exercise.coachId !== coachId) {
            throw new common_1.ForbiddenException('You do not have permission to update this exercise');
        }
        return this.prisma.coachExercise.update({
            where: { id },
            data,
        });
    }
    async deleteGlobalExercise(id, userId) {
        const exercise = await this.prisma.globalExercise.findUnique({
            where: { id },
        });
        if (!exercise) {
            throw new common_1.NotFoundException('Exercise not found');
        }
        if (exercise.createdById !== userId) {
            throw new common_1.ForbiddenException('You do not have permission to delete this exercise');
        }
        return this.prisma.globalExercise.delete({
            where: { id },
        });
    }
    async deleteCoachExercise(id, coachId) {
        const exercise = await this.prisma.coachExercise.findUnique({
            where: { id },
        });
        if (!exercise) {
            throw new common_1.NotFoundException('Exercise not found');
        }
        if (exercise.coachId !== coachId) {
            throw new common_1.ForbiddenException('You do not have permission to delete this exercise');
        }
        return this.prisma.coachExercise.delete({
            where: { id },
        });
    }
};
exports.ExercisesService = ExercisesService;
exports.ExercisesService = ExercisesService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [prisma_service_1.PrismaService])
], ExercisesService);
//# sourceMappingURL=exercises.service.js.map