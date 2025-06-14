import { Injectable, UnauthorizedException } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { UsersService } from '../users/users.service';
import * as bcrypt from 'bcrypt';
import { Role } from '../../generated/prisma';
import { RegisterDto } from './dto/register.dto';

@Injectable()
export class AuthService {
  constructor(
    private usersService: UsersService,
    private jwtService: JwtService,
  ) {}

  async validateUser(email: string, password: string): Promise<any> {
    const user = await this.usersService.findUserByEmail(email);
    if (user && await bcrypt.compare(password, user.passwordHash)) {
      const { passwordHash, ...result } = user;
      return result;
    }
    return null;
  }

  async login(user: any) {
    const payload = { 
      email: user.email, 
      sub: user.id,
      role: user.role 
    };
    
    return {
      access_token: this.jwtService.sign(payload),
      user: {
        id: user.id,
        email: user.email,
        role: user.role
      }
    };
  }

  async register(data: RegisterDto) {
    const existingUser = await this.usersService.findUserByEmail(data.email);
    if (existingUser) {
      throw new UnauthorizedException('Email already exists');
    }

    const passwordHash = await bcrypt.hash(data.password, 10);
    const user = await this.usersService.createUser({
      id: data.id,
      email: data.email,
      name: data.name,
      role: data.role,
      profileInfo: data.profileInfo,
      passwordHash,
    });

    const { passwordHash: _, ...result } = user;
    return result;
  }
} 