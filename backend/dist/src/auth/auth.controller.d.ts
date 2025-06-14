import { AuthService } from './auth.service';
import { RegisterDto } from './dto/register.dto';
declare class LoginDto {
    email: string;
    password: string;
}
export declare class AuthController {
    private authService;
    constructor(authService: AuthService);
    login(loginDto: LoginDto): Promise<{
        access_token: string;
        user: {
            id: any;
            email: any;
            role: any;
        };
    }>;
    register(registerDto: RegisterDto): Promise<{
        id: string;
        email: string;
        name: string;
        role: import(".prisma/client").$Enums.Role;
        profileInfo: import("@prisma/client/runtime/library").JsonValue;
        stripeCustomerId: string | null;
    }>;
    getProfile(req: any): any;
}
export {};
