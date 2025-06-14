import { Module } from '@nestjs/common';
import { ExercisesService } from './exercises.service';
import { ExercisesController } from './exercises.controller';
import { AuthModule } from '../auth/auth.module';
import { RolesGuard } from '../auth/guards/roles.guard';

@Module({
  imports: [AuthModule],
  controllers: [ExercisesController],
  providers: [ExercisesService, RolesGuard],
  exports: [ExercisesService],
})
export class ExercisesModule {}
