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
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ExercisesController = void 0;
const common_1 = require("@nestjs/common");
const exercises_service_1 = require("./exercises.service");
const create_exercise_dto_1 = require("./dto/create-exercise.dto");
const jwt_auth_guard_1 = require("../auth/guards/jwt-auth.guard");
const roles_guard_1 = require("../auth/guards/roles.guard");
const roles_decorator_1 = require("../auth/decorators/roles.decorator");
const swagger_1 = require("@nestjs/swagger");
let ExercisesController = class ExercisesController {
    exercisesService;
    constructor(exercisesService) {
        this.exercisesService = exercisesService;
    }
    async createGlobalExercise(data, req) {
        return this.exercisesService.createGlobalExercise(data, req.user.id);
    }
    async createCoachExercise(data, baseExerciseId, req) {
        return this.exercisesService.createCoachExercise(data, req.user.id, baseExerciseId);
    }
    async getGlobalExercises() {
        return this.exercisesService.getGlobalExercises();
    }
    async getCoachExercises(req) {
        return this.exercisesService.getCoachExercises(req.user.id);
    }
    async getGlobalExercise(id) {
        return this.exercisesService.getGlobalExercise(id);
    }
    async getCoachExercise(id, req) {
        return this.exercisesService.getCoachExercise(id, req.user.id);
    }
    async updateGlobalExercise(id, data, req) {
        return this.exercisesService.updateGlobalExercise(id, data, req.user.id);
    }
    async updateCoachExercise(id, data, req) {
        return this.exercisesService.updateCoachExercise(id, data, req.user.id);
    }
    async deleteGlobalExercise(id, req) {
        return this.exercisesService.deleteGlobalExercise(id, req.user.id);
    }
    async deleteCoachExercise(id, req) {
        return this.exercisesService.deleteCoachExercise(id, req.user.id);
    }
};
exports.ExercisesController = ExercisesController;
__decorate([
    (0, common_1.Post)('global'),
    (0, roles_decorator_1.Roles)('admin'),
    (0, swagger_1.ApiBearerAuth)(),
    (0, swagger_1.ApiOperation)({ summary: 'Create a new global exercise' }),
    (0, swagger_1.ApiResponse)({ status: 201, description: 'Global exercise created successfully' }),
    (0, swagger_1.ApiResponse)({ status: 400, description: 'Bad request' }),
    (0, swagger_1.ApiResponse)({ status: 401, description: 'Unauthorized' }),
    (0, swagger_1.ApiResponse)({ status: 403, description: 'Forbidden' }),
    __param(0, (0, common_1.Body)()),
    __param(1, (0, common_1.Request)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_exercise_dto_1.CreateExerciseDto, Object]),
    __metadata("design:returntype", Promise)
], ExercisesController.prototype, "createGlobalExercise", null);
__decorate([
    (0, common_1.Post)('coach/:baseExerciseId'),
    (0, roles_decorator_1.Roles)('coach', 'team_coach'),
    (0, swagger_1.ApiBearerAuth)(),
    (0, swagger_1.ApiOperation)({ summary: 'Create a new coach exercise' }),
    (0, swagger_1.ApiResponse)({ status: 201, description: 'Coach exercise created successfully' }),
    (0, swagger_1.ApiResponse)({ status: 400, description: 'Bad request' }),
    (0, swagger_1.ApiResponse)({ status: 401, description: 'Unauthorized' }),
    (0, swagger_1.ApiResponse)({ status: 403, description: 'Forbidden' }),
    __param(0, (0, common_1.Body)()),
    __param(1, (0, common_1.Param)('baseExerciseId')),
    __param(2, (0, common_1.Request)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_exercise_dto_1.CreateExerciseDto, String, Object]),
    __metadata("design:returntype", Promise)
], ExercisesController.prototype, "createCoachExercise", null);
__decorate([
    (0, common_1.Get)('global'),
    (0, swagger_1.ApiBearerAuth)(),
    (0, swagger_1.ApiOperation)({ summary: 'Get all global exercises' }),
    (0, swagger_1.ApiResponse)({ status: 200, description: 'Return all global exercises' }),
    (0, swagger_1.ApiResponse)({ status: 401, description: 'Unauthorized' }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], ExercisesController.prototype, "getGlobalExercises", null);
__decorate([
    (0, common_1.Get)('coach'),
    (0, roles_decorator_1.Roles)('coach', 'team_coach'),
    (0, swagger_1.ApiBearerAuth)(),
    (0, swagger_1.ApiOperation)({ summary: 'Get all coach exercises' }),
    (0, swagger_1.ApiResponse)({ status: 200, description: 'Return all coach exercises' }),
    (0, swagger_1.ApiResponse)({ status: 401, description: 'Unauthorized' }),
    __param(0, (0, common_1.Request)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], ExercisesController.prototype, "getCoachExercises", null);
__decorate([
    (0, common_1.Get)('global/:id'),
    (0, swagger_1.ApiBearerAuth)(),
    (0, swagger_1.ApiOperation)({ summary: 'Get a global exercise by id' }),
    (0, swagger_1.ApiResponse)({ status: 200, description: 'Return the global exercise' }),
    (0, swagger_1.ApiResponse)({ status: 401, description: 'Unauthorized' }),
    (0, swagger_1.ApiResponse)({ status: 404, description: 'Global exercise not found' }),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], ExercisesController.prototype, "getGlobalExercise", null);
__decorate([
    (0, common_1.Get)('coach/:id'),
    (0, roles_decorator_1.Roles)('coach', 'team_coach'),
    (0, swagger_1.ApiBearerAuth)(),
    (0, swagger_1.ApiOperation)({ summary: 'Get a coach exercise by id' }),
    (0, swagger_1.ApiResponse)({ status: 200, description: 'Return the coach exercise' }),
    (0, swagger_1.ApiResponse)({ status: 401, description: 'Unauthorized' }),
    (0, swagger_1.ApiResponse)({ status: 404, description: 'Coach exercise not found' }),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Request)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, Object]),
    __metadata("design:returntype", Promise)
], ExercisesController.prototype, "getCoachExercise", null);
__decorate([
    (0, common_1.Put)('global/:id'),
    (0, roles_decorator_1.Roles)('admin'),
    (0, swagger_1.ApiBearerAuth)(),
    (0, swagger_1.ApiOperation)({ summary: 'Update a global exercise' }),
    (0, swagger_1.ApiResponse)({ status: 200, description: 'Global exercise updated successfully' }),
    (0, swagger_1.ApiResponse)({ status: 400, description: 'Bad request' }),
    (0, swagger_1.ApiResponse)({ status: 401, description: 'Unauthorized' }),
    (0, swagger_1.ApiResponse)({ status: 403, description: 'Forbidden' }),
    (0, swagger_1.ApiResponse)({ status: 404, description: 'Global exercise not found' }),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __param(2, (0, common_1.Request)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, Object, Object]),
    __metadata("design:returntype", Promise)
], ExercisesController.prototype, "updateGlobalExercise", null);
__decorate([
    (0, common_1.Put)('coach/:id'),
    (0, roles_decorator_1.Roles)('coach', 'team_coach'),
    (0, swagger_1.ApiBearerAuth)(),
    (0, swagger_1.ApiOperation)({ summary: 'Update a coach exercise' }),
    (0, swagger_1.ApiResponse)({ status: 200, description: 'Coach exercise updated successfully' }),
    (0, swagger_1.ApiResponse)({ status: 400, description: 'Bad request' }),
    (0, swagger_1.ApiResponse)({ status: 401, description: 'Unauthorized' }),
    (0, swagger_1.ApiResponse)({ status: 403, description: 'Forbidden' }),
    (0, swagger_1.ApiResponse)({ status: 404, description: 'Coach exercise not found' }),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __param(2, (0, common_1.Request)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, Object, Object]),
    __metadata("design:returntype", Promise)
], ExercisesController.prototype, "updateCoachExercise", null);
__decorate([
    (0, common_1.Delete)('global/:id'),
    (0, roles_decorator_1.Roles)('admin'),
    (0, swagger_1.ApiBearerAuth)(),
    (0, swagger_1.ApiOperation)({ summary: 'Delete a global exercise' }),
    (0, swagger_1.ApiResponse)({ status: 200, description: 'Global exercise deleted successfully' }),
    (0, swagger_1.ApiResponse)({ status: 401, description: 'Unauthorized' }),
    (0, swagger_1.ApiResponse)({ status: 403, description: 'Forbidden' }),
    (0, swagger_1.ApiResponse)({ status: 404, description: 'Global exercise not found' }),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Request)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, Object]),
    __metadata("design:returntype", Promise)
], ExercisesController.prototype, "deleteGlobalExercise", null);
__decorate([
    (0, common_1.Delete)('coach/:id'),
    (0, roles_decorator_1.Roles)('coach', 'team_coach'),
    (0, swagger_1.ApiBearerAuth)(),
    (0, swagger_1.ApiOperation)({ summary: 'Delete a coach exercise' }),
    (0, swagger_1.ApiResponse)({ status: 200, description: 'Coach exercise deleted successfully' }),
    (0, swagger_1.ApiResponse)({ status: 401, description: 'Unauthorized' }),
    (0, swagger_1.ApiResponse)({ status: 403, description: 'Forbidden' }),
    (0, swagger_1.ApiResponse)({ status: 404, description: 'Coach exercise not found' }),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Request)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, Object]),
    __metadata("design:returntype", Promise)
], ExercisesController.prototype, "deleteCoachExercise", null);
exports.ExercisesController = ExercisesController = __decorate([
    (0, swagger_1.ApiTags)('exercises'),
    (0, common_1.Controller)('exercises'),
    (0, common_1.UseGuards)(jwt_auth_guard_1.JwtAuthGuard, roles_guard_1.RolesGuard),
    __metadata("design:paramtypes", [exercises_service_1.ExercisesService])
], ExercisesController);
//# sourceMappingURL=exercises.controller.js.map