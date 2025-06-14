import { IsString, IsArray, IsOptional, ValidateNested } from 'class-validator';
import { Type } from 'class-transformer';

class ExerciseResult {
  @IsString()
  exerciseId: string;

  @IsString()
  exerciseName: string;

  @IsArray()
  sets: {
    weight: number;
    reps: number;
    completed: boolean;
  }[];
}

export class CreateProgressLogDto {
  @IsString()
  assignmentId: string;

  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => ExerciseResult)
  exerciseResults: ExerciseResult[];

  @IsString()
  @IsOptional()
  notes?: string;
} 