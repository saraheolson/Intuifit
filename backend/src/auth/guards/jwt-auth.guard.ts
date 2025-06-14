import { Injectable, Logger, ExecutionContext } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';

@Injectable()
export class JwtAuthGuard extends AuthGuard('clerk') {
  private readonly logger = new Logger(JwtAuthGuard.name);

  canActivate(context: ExecutionContext) {
    this.logger.debug('JwtAuthGuard.canActivate called');
    return super.canActivate(context);
  }

  handleRequest(err: any, user: any, info: any) {
    this.logger.debug('JwtAuthGuard.handleRequest called');
    this.logger.debug('Error:', err);
    this.logger.debug('User:', user);
    this.logger.debug('Info:', info);

    if (err || !user) {
      this.logger.error('Authentication failed:', err || 'No user found');
      throw err || new Error('Authentication failed');
    }
    return user;
  }
} 