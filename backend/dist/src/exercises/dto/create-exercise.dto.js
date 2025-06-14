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
exports.CreateExerciseDto = void 0;
const swagger_1 = require("@nestjs/swagger");
const class_validator_1 = require("class-validator");
const client_1 = require("@prisma/client");
class CreateExerciseDto {
    name;
    videoUrl;
    thumbnailUrl;
    instructionsText;
    defaultSets;
    defaultReps;
    defaultWeight;
    weightType;
    weightMeasurementType;
}
exports.CreateExerciseDto = CreateExerciseDto;
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'The name of the exercise',
        example: 'Bench Press'
    }),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], CreateExerciseDto.prototype, "name", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'URL to the exercise video',
        example: 'https://example.com/exercise-video.mp4'
    }),
    (0, class_validator_1.IsUrl)(),
    __metadata("design:type", String)
], CreateExerciseDto.prototype, "videoUrl", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'URL to the exercise thumbnail',
        example: 'https://example.com/exercise-thumbnail.jpg'
    }),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", String)
], CreateExerciseDto.prototype, "thumbnailUrl", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'Text instructions for the exercise',
        example: 'Lie on the bench and grip the bar...'
    }),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], CreateExerciseDto.prototype, "instructionsText", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'The default number of sets for this exercise',
        example: 3,
        default: 3
    }),
    (0, class_validator_1.IsInt)(),
    (0, class_validator_1.IsPositive)(),
    __metadata("design:type", Number)
], CreateExerciseDto.prototype, "defaultSets", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'The default number of reps for this exercise',
        example: 10,
        default: 10
    }),
    (0, class_validator_1.IsInt)(),
    (0, class_validator_1.IsPositive)(),
    __metadata("design:type", Number)
], CreateExerciseDto.prototype, "defaultReps", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'The default weight for this exercise',
        example: 135,
        default: 0
    }),
    (0, class_validator_1.IsNumber)(),
    (0, class_validator_1.IsPositive)(),
    __metadata("design:type", Number)
], CreateExerciseDto.prototype, "defaultWeight", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'The type of weight measurement',
        enum: ['lbs', 'kg', 'bodyweight'],
        example: 'lbs',
        default: 'lbs'
    }),
    (0, class_validator_1.IsEnum)(client_1.WeightType),
    __metadata("design:type", String)
], CreateExerciseDto.prototype, "weightType", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'The type of weight measurement',
        enum: ['lbs', 'kg', 'bodyweight'],
        example: 'lbs',
        default: 'lbs'
    }),
    (0, class_validator_1.IsEnum)(client_1.WeightMeasurementType),
    __metadata("design:type", String)
], CreateExerciseDto.prototype, "weightMeasurementType", void 0);
//# sourceMappingURL=create-exercise.dto.js.map