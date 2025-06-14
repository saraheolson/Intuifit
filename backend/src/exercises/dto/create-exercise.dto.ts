import { ApiProperty } from '@nestjs/swagger';
import { IsString, IsUrl, IsInt, IsPositive, IsNumber, IsEnum } from 'class-validator';
import { WeightType, WeightMeasurementType } from '@prisma/client';

export class CreateExerciseDto {
  @ApiProperty({
    description: 'The name of the exercise',
    example: 'Bench Press'
  })
  @IsString()
  name: string;

  @ApiProperty({
    description: 'URL to the exercise video',
    example: 'https://example.com/exercise-video.mp4'
  })
  @IsUrl()
  videoUrl: string;

  @ApiProperty({
    description: 'Text instructions for the exercise',
    example: 'Lie on the bench and grip the bar...'
  })
  @IsString()
  instructionsText: string;

  @ApiProperty({
    description: 'The default number of sets for this exercise',
    example: 3,
    default: 3
  })
  @IsInt()
  @IsPositive()
  defaultSets: number;

  @ApiProperty({
    description: 'The default number of reps for this exercise',
    example: 10,
    default: 10
  })
  @IsInt()
  @IsPositive()
  defaultReps: number;

  @ApiProperty({
    description: 'The default weight for this exercise',
    example: 135,
    default: 0
  })
  @IsNumber()
  @IsPositive()
  defaultWeight: number;

  @ApiProperty({
    description: 'The type of weight measurement',
    enum: ['lbs', 'kg', 'bodyweight'],
    example: 'lbs',
    default: 'lbs'
  })
  @IsEnum(WeightType)
  weightType: WeightType;

  @ApiProperty({
    description: 'The type of weight measurement',
    enum: ['lbs', 'kg', 'bodyweight'],
    example: 'lbs',
    default: 'lbs'
  })
  @IsEnum(WeightMeasurementType)
  weightMeasurementType: WeightMeasurementType;
} 