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
exports.AssignmentsController = void 0;
const common_1 = require("@nestjs/common");
const assignments_service_1 = require("./assignments.service");
const create_assignment_dto_1 = require("./dto/create-assignment.dto");
const create_progress_log_dto_1 = require("./dto/create-progress-log.dto");
const jwt_auth_guard_1 = require("../auth/guards/jwt-auth.guard");
const roles_guard_1 = require("../auth/roles.guard");
const roles_decorator_1 = require("../auth/roles.decorator");
const prisma_1 = require("../../generated/prisma");
let AssignmentsController = class AssignmentsController {
    assignmentsService;
    constructor(assignmentsService) {
        this.assignmentsService = assignmentsService;
    }
    async createAssignment(data, req) {
        return this.assignmentsService.createAssignment(data, req.user.id);
    }
    async getClientAssignments(clientId, req) {
        return this.assignmentsService.getClientAssignments(clientId, req.user.id);
    }
    async getAssignment(id, req) {
        return this.assignmentsService.getAssignment(id, req.user.id);
    }
    async updateAssignmentStatus(id, status, req) {
        return this.assignmentsService.updateAssignmentStatus(id, status, req.user.id);
    }
    async createProgressLog(id, data, req) {
        return this.assignmentsService.createProgressLog(data, req.user.id);
    }
    async getProgressLogs(id, req) {
        return this.assignmentsService.getProgressLogs(id, req.user.id);
    }
};
exports.AssignmentsController = AssignmentsController;
__decorate([
    (0, common_1.Post)(),
    (0, roles_decorator_1.Roles)('coach', 'team_coach'),
    __param(0, (0, common_1.Body)()),
    __param(1, (0, common_1.Request)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_assignment_dto_1.CreateAssignmentDto, Object]),
    __metadata("design:returntype", Promise)
], AssignmentsController.prototype, "createAssignment", null);
__decorate([
    (0, common_1.Get)('client/:clientId'),
    (0, roles_decorator_1.Roles)('coach', 'team_coach'),
    __param(0, (0, common_1.Param)('clientId')),
    __param(1, (0, common_1.Request)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, Object]),
    __metadata("design:returntype", Promise)
], AssignmentsController.prototype, "getClientAssignments", null);
__decorate([
    (0, common_1.Get)(':id'),
    (0, roles_decorator_1.Roles)('coach', 'team_coach', 'client'),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Request)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, Object]),
    __metadata("design:returntype", Promise)
], AssignmentsController.prototype, "getAssignment", null);
__decorate([
    (0, common_1.Put)(':id/status'),
    (0, roles_decorator_1.Roles)('coach', 'team_coach'),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)('status')),
    __param(2, (0, common_1.Request)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, String, Object]),
    __metadata("design:returntype", Promise)
], AssignmentsController.prototype, "updateAssignmentStatus", null);
__decorate([
    (0, common_1.Post)(':id/progress'),
    (0, roles_decorator_1.Roles)('client'),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __param(2, (0, common_1.Request)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, create_progress_log_dto_1.CreateProgressLogDto, Object]),
    __metadata("design:returntype", Promise)
], AssignmentsController.prototype, "createProgressLog", null);
__decorate([
    (0, common_1.Get)(':id/progress'),
    (0, roles_decorator_1.Roles)('client'),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Request)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, Object]),
    __metadata("design:returntype", Promise)
], AssignmentsController.prototype, "getProgressLogs", null);
exports.AssignmentsController = AssignmentsController = __decorate([
    (0, common_1.Controller)('assignments'),
    (0, common_1.UseGuards)(jwt_auth_guard_1.JwtAuthGuard, roles_guard_1.RolesGuard),
    __metadata("design:paramtypes", [assignments_service_1.AssignmentsService])
], AssignmentsController);
//# sourceMappingURL=assignments.controller.js.map