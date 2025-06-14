import { PrismaService } from '../prisma/prisma.service';
import { CreatePaymentDto } from './dto/create-payment.dto';
import { CreateSubscriptionDto } from './dto/create-subscription.dto';
import { Prisma } from '@prisma/client';
import Stripe from 'stripe';
export declare class PaymentsService {
    private prisma;
    private stripe;
    private readonly subscriptionPrices;
    constructor(prisma: PrismaService);
    createPayment(data: CreatePaymentDto): Promise<{
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
            onboardingData: Prisma.JsonValue;
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
    handleStripeWebhook(event: Stripe.Event): Promise<void>;
    private handleInvoicePaid;
    private handleInvoicePaymentFailed;
    getClientPayments(clientId: string, coachId: string): Promise<({
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
            onboardingData: Prisma.JsonValue;
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
    getCoachPayments(coachId: string): Promise<({
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
            onboardingData: Prisma.JsonValue;
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
    createSubscription(data: CreateSubscriptionDto): Promise<Stripe.Response<Stripe.Subscription>>;
    cancelSubscription(coachId: string): Promise<Stripe.Response<Stripe.Subscription>>;
    handleSubscriptionWebhook(event: Stripe.Event): Promise<void>;
    private handleSubscriptionUpdated;
    private handleSubscriptionDeleted;
}
