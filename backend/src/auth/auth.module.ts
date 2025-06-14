import { Module } from '@nestjs/common';
import { PassportModule } from '@nestjs/passport';
import { ConfigModule } from '@nestjs/config';
import { JwtModule } from '@nestjs/jwt';
import { ClerkStrategy } from './clerk.strategy';
import { JwtAuthGuard } from './guards/jwt-auth.guard';
import { AuthController } from './auth.controller';
import { AuthService } from './auth.service';
import { UsersModule } from '../users/users.module';
import { RolesGuard } from './guards/roles.guard';

@Module({
  imports: [
    PassportModule.register({ defaultStrategy: 'clerk' }),
    ConfigModule,
    UsersModule,
    JwtModule.register({
      secret: process.env.CLERK_SECRET_KEY,
      signOptions: { expiresIn: '1d' },
    }),
  ],
  controllers: [AuthController],
  providers: [ClerkStrategy, JwtAuthGuard, RolesGuard, AuthService],
  exports: [PassportModule, JwtAuthGuard, RolesGuard, AuthService],
})
export class AuthModule {}
