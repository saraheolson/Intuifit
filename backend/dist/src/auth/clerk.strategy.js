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
var ClerkStrategy_1;
Object.defineProperty(exports, "__esModule", { value: true });
exports.ClerkStrategy = void 0;
const common_1 = require("@nestjs/common");
const passport_1 = require("@nestjs/passport");
const passport_jwt_1 = require("passport-jwt");
const config_1 = require("@nestjs/config");
const clerk_sdk_node_1 = require("@clerk/clerk-sdk-node");
const jwt = require("jsonwebtoken");
const jwksClient = require("jwks-rsa");
let ClerkStrategy = ClerkStrategy_1 = class ClerkStrategy extends (0, passport_1.PassportStrategy)(passport_jwt_1.Strategy, 'clerk') {
    configService;
    logger = new common_1.Logger(ClerkStrategy_1.name);
    jwksClient;
    constructor(configService) {
        const secretKey = configService.get('CLERK_SECRET_KEY');
        if (!secretKey) {
            throw new Error('CLERK_SECRET_KEY is not defined in environment variables');
        }
        super({
            jwtFromRequest: passport_jwt_1.ExtractJwt.fromAuthHeaderAsBearerToken(),
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
        this.configService = configService;
        this.jwksClient = jwksClient({
            jwksUri: 'https://causal-flounder-68.clerk.accounts.dev/.well-known/jwks.json',
            cache: true,
            rateLimit: true,
        });
        this.logger.debug('Initializing ClerkStrategy with JWKS');
    }
    async validate(req, payload) {
        try {
            this.logger.debug('Token validation started');
            this.logger.debug('Request headers:', JSON.stringify(req.headers, null, 2));
            this.logger.debug('Token payload:', JSON.stringify(payload, null, 2));
            const token = passport_jwt_1.ExtractJwt.fromAuthHeaderAsBearerToken()(req);
            this.logger.debug('Extracted token:', token ? token.substring(0, 20) + '...' : 'No token found');
            if (!token) {
                throw new common_1.UnauthorizedException('No token provided');
            }
            if (payload.iss?.includes('clerk.accounts.dev')) {
                this.logger.debug('Processing Clerk session token');
                try {
                    const userId = payload.sub;
                    this.logger.debug('User ID from token:', userId);
                    const user = await clerk_sdk_node_1.clerkClient.users.getUser(userId);
                    this.logger.debug('Clerk user data:', JSON.stringify(user, null, 2));
                    if (!user) {
                        throw new common_1.UnauthorizedException('User not found in Clerk');
                    }
                    const role = user.publicMetadata.role;
                    this.logger.debug('User role from metadata:', role);
                    if (!role) {
                        throw new common_1.UnauthorizedException('User role not found in Clerk metadata');
                    }
                    const userData = {
                        id: userId,
                        email: user.emailAddresses[0]?.emailAddress,
                        role: role,
                    };
                    this.logger.debug('Successfully validated Clerk user:', JSON.stringify(userData, null, 2));
                    return userData;
                }
                catch (clerkError) {
                    this.logger.error('Clerk API error:', clerkError);
                    throw new common_1.UnauthorizedException('Failed to verify Clerk user');
                }
            }
            throw new common_1.UnauthorizedException('Invalid token issuer');
        }
        catch (error) {
            this.logger.error('Token validation error:', error);
            throw new common_1.UnauthorizedException('Invalid token');
        }
    }
};
exports.ClerkStrategy = ClerkStrategy;
exports.ClerkStrategy = ClerkStrategy = ClerkStrategy_1 = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [config_1.ConfigService])
], ClerkStrategy);
//# sourceMappingURL=clerk.strategy.js.map