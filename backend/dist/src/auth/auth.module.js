"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AuthModule = void 0;
const common_1 = require("@nestjs/common");
const passport_1 = require("@nestjs/passport");
const config_1 = require("@nestjs/config");
const jwt_1 = require("@nestjs/jwt");
const clerk_strategy_1 = require("./clerk.strategy");
const jwt_auth_guard_1 = require("./guards/jwt-auth.guard");
const auth_controller_1 = require("./auth.controller");
const auth_service_1 = require("./auth.service");
const users_module_1 = require("../users/users.module");
const roles_guard_1 = require("./guards/roles.guard");
let AuthModule = class AuthModule {
};
exports.AuthModule = AuthModule;
exports.AuthModule = AuthModule = __decorate([
    (0, common_1.Module)({
        imports: [
            passport_1.PassportModule.register({ defaultStrategy: 'clerk' }),
            config_1.ConfigModule,
            users_module_1.UsersModule,
            jwt_1.JwtModule.register({
                secret: process.env.CLERK_SECRET_KEY,
                signOptions: { expiresIn: '1d' },
            }),
        ],
        controllers: [auth_controller_1.AuthController],
        providers: [clerk_strategy_1.ClerkStrategy, jwt_auth_guard_1.JwtAuthGuard, roles_guard_1.RolesGuard, auth_service_1.AuthService],
        exports: [passport_1.PassportModule, jwt_auth_guard_1.JwtAuthGuard, roles_guard_1.RolesGuard, auth_service_1.AuthService],
    })
], AuthModule);
//# sourceMappingURL=auth.module.js.map