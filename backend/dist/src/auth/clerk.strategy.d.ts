import { Strategy } from 'passport-jwt';
import { ConfigService } from '@nestjs/config';
declare const ClerkStrategy_base: new (...args: [opt: import("passport-jwt").StrategyOptionsWithRequest] | [opt: import("passport-jwt").StrategyOptionsWithoutRequest]) => Strategy & {
    validate(...args: any[]): unknown;
};
export declare class ClerkStrategy extends ClerkStrategy_base {
    private configService;
    private readonly logger;
    private jwksClient;
    constructor(configService: ConfigService);
    validate(req: any, payload: any): Promise<{
        id: any;
        email: string;
        role: string;
    }>;
}
export {};
