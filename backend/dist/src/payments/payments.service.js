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
Object.defineProperty(exports, "__esModule", { value: true });
exports.PaymentsService = void 0;
const common_1 = require("@nestjs/common");
const prisma_service_1 = require("../prisma/prisma.service");
const create_subscription_dto_1 = require("./dto/create-subscription.dto");
const stripe_1 = require("stripe");
let PaymentsService = class PaymentsService {
    prisma;
    stripe;
    subscriptionPrices = {
        [create_subscription_dto_1.SubscriptionPlan.BASIC]: {
            priceId: process.env.STRIPE_BASIC_PRICE_ID,
            amount: 29.99,
        },
        [create_subscription_dto_1.SubscriptionPlan.PROFESSIONAL]: {
            priceId: process.env.STRIPE_PROFESSIONAL_PRICE_ID,
            amount: 79.99,
        },
        [create_subscription_dto_1.SubscriptionPlan.ENTERPRISE]: {
            priceId: process.env.STRIPE_ENTERPRISE_PRICE_ID,
            amount: 199.99,
        },
    };
    constructor(prisma) {
        this.prisma = prisma;
        const stripeKey = process.env.STRIPE_SECRET_KEY;
        if (!stripeKey) {
            throw new Error('STRIPE_SECRET_KEY is not defined');
        }
        this.stripe = new stripe_1.default(stripeKey, {
            apiVersion: '2025-05-28.basil',
        });
    }
    async createPayment(data) {
        const client = await this.prisma.client.findUnique({
            where: { id: data.clientId },
            include: {
                user: true,
            },
        });
        const coach = await this.prisma.coach.findUnique({
            where: { id: data.coachId },
            include: {
                user: true,
            },
        });
        if (!client || !coach) {
            throw new common_1.NotFoundException('Client or coach not found');
        }
        if (client.coachId !== coach.id) {
            throw new common_1.ForbiddenException('Client does not belong to this coach');
        }
        if (!client.user.stripeCustomerId) {
            throw new Error('Client does not have a Stripe customer ID');
        }
        try {
            const invoice = await this.stripe.invoices.create({
                customer: client.user.stripeCustomerId,
                collection_method: 'charge_automatically',
                auto_advance: true,
                pending_invoice_items_behavior: 'exclude',
                metadata: {
                    clientId: data.clientId,
                    coachId: data.coachId,
                },
            });
            if (!invoice.id) {
                throw new Error('Failed to create invoice');
            }
            await this.stripe.invoiceItems.create({
                customer: client.user.stripeCustomerId,
                invoice: invoice.id,
                amount: Math.round(data.amount * 100),
                currency: data.currency,
                description: data.description,
            });
            const finalizedInvoice = await this.stripe.invoices.finalizeInvoice(invoice.id, {});
            if (!finalizedInvoice.id) {
                throw new Error('Failed to get invoice ID after finalization');
            }
            const payment = await this.prisma.payment.create({
                data: {
                    clientId: data.clientId,
                    coachId: data.coachId,
                    stripeInvoiceId: finalizedInvoice.id,
                    status: 'pending',
                },
                include: {
                    client: {
                        include: {
                            user: {
                                select: {
                                    id: true,
                                    name: true,
                                    email: true,
                                },
                            },
                        },
                    },
                    coach: {
                        include: {
                            user: {
                                select: {
                                    id: true,
                                    name: true,
                                    email: true,
                                },
                            },
                        },
                    },
                },
            });
            return payment;
        }
        catch (error) {
            throw new Error(`Failed to create payment: ${error.message}`);
        }
    }
    async handleStripeWebhook(event) {
        switch (event.type) {
            case 'invoice.paid':
                await this.handleInvoicePaid(event.data.object);
                break;
            case 'invoice.payment_failed':
                await this.handleInvoicePaymentFailed(event.data.object);
                break;
        }
    }
    async handleInvoicePaid(invoice) {
        const payment = await this.prisma.payment.findFirst({
            where: { stripeInvoiceId: invoice.id },
        });
        if (payment) {
            await this.prisma.payment.update({
                where: { id: payment.id },
                data: { status: 'paid' },
            });
        }
    }
    async handleInvoicePaymentFailed(invoice) {
        const payment = await this.prisma.payment.findFirst({
            where: { stripeInvoiceId: invoice.id },
        });
        if (payment) {
            await this.prisma.payment.update({
                where: { id: payment.id },
                data: { status: 'failed' },
            });
        }
    }
    async getClientPayments(clientId, coachId) {
        const client = await this.prisma.client.findUnique({
            where: { id: clientId },
        });
        if (!client) {
            throw new common_1.NotFoundException('Client not found');
        }
        if (client.coachId !== coachId) {
            throw new common_1.ForbiddenException('You do not have access to this client\'s payments');
        }
        return this.prisma.payment.findMany({
            where: { clientId },
            include: {
                client: {
                    include: {
                        user: {
                            select: {
                                id: true,
                                name: true,
                                email: true,
                            },
                        },
                    },
                },
            },
            orderBy: {
                createdAt: 'desc',
            },
        });
    }
    async getCoachPayments(coachId) {
        const coach = await this.prisma.coach.findUnique({
            where: { id: coachId },
        });
        if (!coach) {
            throw new common_1.NotFoundException('Coach not found');
        }
        return this.prisma.payment.findMany({
            where: { coachId },
            include: {
                client: {
                    include: {
                        user: {
                            select: {
                                id: true,
                                name: true,
                                email: true,
                            },
                        },
                    },
                },
            },
            orderBy: {
                createdAt: 'desc',
            },
        });
    }
    async createSubscription(data) {
        const coach = await this.prisma.coach.findUnique({
            where: { id: data.coachId },
            include: {
                user: true,
            },
        });
        if (!coach) {
            throw new common_1.NotFoundException('Coach not found');
        }
        if (!coach.user.stripeCustomerId) {
            throw new Error('Coach does not have a Stripe customer ID');
        }
        const priceId = this.subscriptionPrices[data.plan].priceId;
        if (!priceId) {
            throw new Error(`Price ID not found for plan: ${data.plan}`);
        }
        try {
            await this.stripe.paymentMethods.attach(data.paymentMethodId, {
                customer: coach.user.stripeCustomerId,
            });
            await this.stripe.customers.update(coach.user.stripeCustomerId, {
                invoice_settings: {
                    default_payment_method: data.paymentMethodId,
                },
            });
            const subscription = await this.stripe.subscriptions.create({
                customer: coach.user.stripeCustomerId,
                items: [{ price: priceId }],
                payment_behavior: 'default_incomplete',
                payment_settings: { save_default_payment_method: 'on_subscription' },
                expand: ['latest_invoice.payment_intent'],
            });
            await this.prisma.coach.update({
                where: { id: data.coachId },
                data: {
                    subscriptionPlan: data.plan,
                    subscriptionId: subscription.id,
                },
            });
            return subscription;
        }
        catch (error) {
            throw new Error(`Failed to create subscription: ${error.message}`);
        }
    }
    async cancelSubscription(coachId) {
        const coach = await this.prisma.coach.findUnique({
            where: { id: coachId },
            include: {
                user: true,
            },
        });
        if (!coach) {
            throw new common_1.NotFoundException('Coach not found');
        }
        if (!coach.subscriptionId) {
            throw new Error('No active subscription found');
        }
        try {
            const subscription = await this.stripe.subscriptions.update(coach.subscriptionId, { cancel_at_period_end: true });
            await this.prisma.coach.update({
                where: { id: coachId },
                data: {
                    subscriptionPlan: null,
                    subscriptionId: null,
                },
            });
            return subscription;
        }
        catch (error) {
            throw new Error(`Failed to cancel subscription: ${error.message}`);
        }
    }
    async handleSubscriptionWebhook(event) {
        switch (event.type) {
            case 'customer.subscription.updated':
                await this.handleSubscriptionUpdated(event.data.object);
                break;
            case 'customer.subscription.deleted':
                await this.handleSubscriptionDeleted(event.data.object);
                break;
        }
    }
    async handleSubscriptionUpdated(subscription) {
        const coach = await this.prisma.coach.findFirst({
            where: { subscriptionId: subscription.id },
        });
        if (coach) {
            await this.prisma.coach.update({
                where: { id: coach.id },
                data: {
                    subscriptionPlan: subscription.status === 'active' ? coach.subscriptionPlan : null,
                },
            });
        }
    }
    async handleSubscriptionDeleted(subscription) {
        const coach = await this.prisma.coach.findFirst({
            where: { subscriptionId: subscription.id },
        });
        if (coach) {
            await this.prisma.coach.update({
                where: { id: coach.id },
                data: {
                    subscriptionPlan: null,
                    subscriptionId: null,
                },
            });
        }
    }
};
exports.PaymentsService = PaymentsService;
exports.PaymentsService = PaymentsService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [prisma_service_1.PrismaService])
], PaymentsService);
//# sourceMappingURL=payments.service.js.map