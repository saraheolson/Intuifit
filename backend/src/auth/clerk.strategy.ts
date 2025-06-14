import { Injectable, UnauthorizedException, Logger } from '@nestjs/common';
import { PassportStrategy } from '@nestjs/passport';
import { ExtractJwt, Strategy } from 'passport-jwt';
import { ConfigService } from '@nestjs/config';
import { clerkClient } from '@clerk/clerk-sdk-node';
import * as jwt from 'jsonwebtoken';
import * as jwksClient from 'jwks-rsa';

@Injectable()
export class ClerkStrategy extends PassportStrategy(Strategy, 'clerk') {
  private readonly logger = new Logger(ClerkStrategy.name);
  private jwksClient: jwksClient.JwksClient;

  constructor(private configService: ConfigService) {
    const secretKey = configService.get<string>('CLERK_SECRET_KEY');
    if (!secretKey) {
      throw new Error('CLERK_SECRET_KEY is not defined in environment variables');
    }

    super({
      jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
      ignoreExpiration: false,
      secretOrKeyProvider: (request, token, done) => {
        const decoded = jwt.decode(token, { complete: true });
        if (!decoded || !decoded.header.kid) {
          return done(new Error('Invalid token'), undefined);
        }

        this.jwksClient.getSigningKey(decoded.header.kid, (err, key) => {
          if (err) {
            return done(err, undefined);
          }
          if (!key) {
            return done(new Error('No signing key found'), undefined);
          }
          const signingKey = key.getPublicKey();
          return done(null, signingKey);
        });
      },
      algorithms: ['RS256'],
      passReqToCallback: true,
    });

    // Initialize JWKS client after super()
    this.jwksClient = jwksClient({
      jwksUri: 'https://causal-flounder-68.clerk.accounts.dev/.well-known/jwks.json',
      cache: true,
      rateLimit: true,
    });

    this.logger.debug('Initializing ClerkStrategy with JWKS');
  }

  async validate(req: any, payload: any) {
    try {
      this.logger.debug('Token validation started');
      this.logger.debug('Request headers:', JSON.stringify(req.headers, null, 2));
      this.logger.debug('Token payload:', JSON.stringify(payload, null, 2));

      // Get the token from the request
      const token = ExtractJwt.fromAuthHeaderAsBearerToken()(req);
      this.logger.debug('Extracted token:', token ? token.substring(0, 20) + '...' : 'No token found');

      if (!token) {
        throw new UnauthorizedException('No token provided');
      }

      // Handle Clerk session token
      if (payload.iss?.includes('clerk.accounts.dev')) {
        this.logger.debug('Processing Clerk session token');
        try {
          // Get user data directly from the token payload
          const userId = payload.sub;
          this.logger.debug('User ID from token:', userId);

          // Get user data from Clerk
          const user = await clerkClient.users.getUser(userId);
          this.logger.debug('Clerk user data:', JSON.stringify(user, null, 2));
          
          if (!user) {
            throw new UnauthorizedException('User not found in Clerk');
          }

          const role = user.publicMetadata.role as string;
          this.logger.debug('User role from metadata:', role);

          if (!role) {
            throw new UnauthorizedException('User role not found in Clerk metadata');
          }

          const userData = {
            id: userId,
            email: user.emailAddresses[0]?.emailAddress,
            role: role,
          };
          this.logger.debug('Successfully validated Clerk user:', JSON.stringify(userData, null, 2));
          return userData;
        } catch (clerkError) {
          this.logger.error('Clerk API error:', clerkError);
          throw new UnauthorizedException('Failed to verify Clerk user');
        }
      }

      throw new UnauthorizedException('Invalid token issuer');
    } catch (error) {
      this.logger.error('Token validation error:', error);
      throw new UnauthorizedException('Invalid token');
    }
  }
} 