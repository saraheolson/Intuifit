import { RawBodyRequest } from '@nestjs/common';
import { PaymentsService } from './payments.service';
import { CreatePaymentDto } from './dto/create-payment.dto';
import { CreateSubscriptionDto } from './dto/create-subscription.dto';
import { Request as ExpressRequest } from 'express';
import Stripe from 'stripe';
export declare class PaymentsController {
    private readonly paymentsService;
    constructor(paymentsService: PaymentsService);
    createPayment(data: CreatePaymentDto, req: any): Promise<{
        coach: {
            user: {
                id: string;
                email: string;
                name: string;
            };
        } & {
            id: string;
            userId: string;
            businessName: string | null;
            subscriptionPlan: string | null;
            subscriptionId: string | null;
        };
        client: {
            user: {
                id: string;
                email: string;
                name: string;
            };
        } & {
            id: string;
            coachId: string;
            userId: string;
            onboardingData: import("@prisma/client/runtime/library").JsonValue;
        };
    } & {
        id: string;
        coachId: string;
        createdAt: Date;
        clientId: string;
        status: import(".prisma/client").$Enums.PaymentStatus;
        stripeInvoiceId: string;
        stripeSubscriptionId: string | null;
    }>;
    getClientPayments(clientId: string, req: any): Promise<({
        client: {
            user: {
                id: string;
                email: string;
                name: string;
            };
        } & {
            id: string;
            coachId: string;
            userId: string;
            onboardingData: import("@prisma/client/runtime/library").JsonValue;
        };
    } & {
        id: string;
        coachId: string;
        createdAt: Date;
        clientId: string;
        status: import(".prisma/client").$Enums.PaymentStatus;
        stripeInvoiceId: string;
        stripeSubscriptionId: string | null;
    })[]>;
    getCoachPayments(req: any): Promise<({
        client: {
            user: {
                id: string;
                email: string;
                name: string;
            };
        } & {
            id: string;
            coachId: string;
            userId: string;
            onboardingData: import("@prisma/client/runtime/library").JsonValue;
        };
    } & {
        id: string;
        coachId: string;
        createdAt: Date;
        clientId: string;
        status: import(".prisma/client").$Enums.PaymentStatus;
        stripeInvoiceId: string;
        stripeSubscriptionId: string | null;
    })[]>;
    createSubscription(data: CreateSubscriptionDto, req: any): Promise<Stripe.Response<Stripe.Subscription>>;
    cancelSubscription(coachId: string, req: any): Promise<Stripe.Response<Stripe.Subscription>>;
    handleStripeWebhook(signature: string, req: RawBodyRequest<ExpressRequest>): Promise<{
        received: boolean;
    }>;
}
