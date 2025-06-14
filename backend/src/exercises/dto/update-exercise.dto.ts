import { ApiProperty } from '@nestjs/swagger';
import { IsString, IsNumber, IsEnum, IsOptional } from 'class-validator';

export class UpdateExerciseDto {
  @ApiProperty({
    description: 'The name of the exercise',
    example: 'Bench Press',
    required: false
  })
  @IsString()
  @IsOptional()
  name?: string;

  @ApiProperty({
    description: 'The default number of sets for this exercise',
    example: 3,
    required: false
  })
  @IsNumber()
  @IsOptional()
  defaultSets?: number;

  @ApiProperty({
    description: 'The default number of reps for this exercise',
    example: 10,
    required: false
  })
  @IsNumber()
  @IsOptional()
  defaultReps?: number;

  @ApiProperty({
    description: 'The default weight for this exercise',
    example: 135,
    required: false
  })
  @IsNumber()
  @IsOptional()
  defaultWeight?: number;

  @ApiProperty({
    description: 'The type of weight measurement',
    enum: ['lbs', 'kg', 'bodyweight'],
    example: 'lbs',
    required: false
  })
  @IsEnum(['lbs', 'kg', 'bodyweight'])
  @IsOptional()
  weightType?: 'lbs' | 'kg' | 'bodyweight';
} 