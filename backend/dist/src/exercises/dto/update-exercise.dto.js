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
exports.UpdateExerciseDto = void 0;
const swagger_1 = require("@nestjs/swagger");
const class_validator_1 = require("class-validator");
class UpdateExerciseDto {
    name;
    defaultSets;
    defaultReps;
    defaultWeight;
    weightType;
}
exports.UpdateExerciseDto = UpdateExerciseDto;
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'The name of the exercise',
        example: 'Bench Press',
        required: false
    }),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", String)
], UpdateExerciseDto.prototype, "name", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'The default number of sets for this exercise',
        example: 3,
        required: false
    }),
    (0, class_validator_1.IsNumber)(),
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", Number)
], UpdateExerciseDto.prototype, "defaultSets", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'The default number of reps for this exercise',
        example: 10,
        required: false
    }),
    (0, class_validator_1.IsNumber)(),
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", Number)
], UpdateExerciseDto.prototype, "defaultReps", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'The default weight for this exercise',
        example: 135,
        required: false
    }),
    (0, class_validator_1.IsNumber)(),
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", Number)
], UpdateExerciseDto.prototype, "defaultWeight", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'The type of weight measurement',
        enum: ['lbs', 'kg', 'bodyweight'],
        example: 'lbs',
        required: false
    }),
    (0, class_validator_1.IsEnum)(['lbs', 'kg', 'bodyweight']),
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", String)
], UpdateExerciseDto.prototype, "weightType", void 0);
//# sourceMappingURL=update-exercise.dto.js.map