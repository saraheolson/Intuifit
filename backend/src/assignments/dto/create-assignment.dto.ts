import { IsString, IsDateString, IsNotEmpty } from 'class-validator';

export class CreateAssignmentDto {
  @IsString()
  @IsNotEmpty()
  workoutId: string;

  @IsString()
  @IsNotEmpty()
  clientId: string;

  @IsDateString()
  @IsNotEmpty()
  scheduledDate: string;
} 