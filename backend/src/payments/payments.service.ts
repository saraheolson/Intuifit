import { Injectable, NotFoundException, ForbiddenException } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { CreatePaymentDto } from './dto/create-payment.dto';
import { CreateSubscriptionDto, SubscriptionPlan } from './dto/create-subscription.dto';
import { Prisma } from '@prisma/client';
import Stripe from 'stripe';

@Injectable()
export class PaymentsService {
  private stripe: Stripe;
  private readonly subscriptionPrices = {
    [SubscriptionPlan.BASIC]: {
      priceId: process.env.STRIPE_BASIC_PRICE_ID,
      amount: 29.99,
    },
    [SubscriptionPlan.PROFESSIONAL]: {
      priceId: process.env.STRIPE_PROFESSIONAL_PRICE_ID,
      amount: 79.99,
    },
    [SubscriptionPlan.ENTERPRISE]: {
      priceId: process.env.STRIPE_ENTERPRISE_PRICE_ID,
      amount: 199.99,
    },
  };

  constructor(private prisma: PrismaService) {
    const stripeKey = process.env.STRIPE_SECRET_KEY;
    if (!stripeKey) {
      throw new Error('STRIPE_SECRET_KEY is not defined');
    }
    this.stripe = new Stripe(stripeKey, {
      apiVersion: '2025-05-28.basil',
    });
  }

  async createPayment(data: CreatePaymentDto) {
    // Verify client and coach exist and have a valid relationship
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
      throw new NotFoundException('Client or coach not found');
    }

    if (client.coachId !== coach.id) {
      throw new ForbiddenException('Client does not belong to this coach');
    }

    if (!client.user.stripeCustomerId) {
      throw new Error('Client does not have a Stripe customer ID');
    }

    try {
      // Create a Stripe invoice
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

      // Add invoice item
      await this.stripe.invoiceItems.create({
        customer: client.user.stripeCustomerId,
        invoice: invoice.id,
        amount: Math.round(data.amount * 100), // Convert to cents and ensure integer
        currency: data.currency,
        description: data.description,
      });

      // Finalize the invoice
      const finalizedInvoice = await this.stripe.invoices.finalizeInvoice(invoice.id, {});

      if (!finalizedInvoice.id) {
        throw new Error('Failed to get invoice ID after finalization');
      }

      // Create payment record in database
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
    } catch (error) {
      throw new Error(`Failed to create payment: ${error.message}`);
    }
  }

  async handleStripeWebhook(event: Stripe.Event) {
    switch (event.type) {
      case 'invoice.paid':
        await this.handleInvoicePaid(event.data.object as Stripe.Invoice);
        break;
      case 'invoice.payment_failed':
        await this.handleInvoicePaymentFailed(event.data.object as Stripe.Invoice);
        break;
    }
  }

  private async handleInvoicePaid(invoice: Stripe.Invoice) {
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

  private async handleInvoicePaymentFailed(invoice: Stripe.Invoice) {
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

  async getClientPayments(clientId: string, coachId: string) {
    const client = await this.prisma.client.findUnique({
      where: { id: clientId },
    });

    if (!client) {
      throw new NotFoundException('Client not found');
    }

    if (client.coachId !== coachId) {
      throw new ForbiddenException('You do not have access to this client\'s payments');
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

  async getCoachPayments(coachId: string) {
    const coach = await this.prisma.coach.findUnique({
      where: { id: coachId },
    });

    if (!coach) {
      throw new NotFoundException('Coach not found');
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

  async createSubscription(data: CreateSubscriptionDto) {
    const coach = await this.prisma.coach.findUnique({
      where: { id: data.coachId },
      include: {
        user: true,
      },
    });

    if (!coach) {
      throw new NotFoundException('Coach not found');
    }

    if (!coach.user.stripeCustomerId) {
      throw new Error('Coach does not have a Stripe customer ID');
    }

    const priceId = this.subscriptionPrices[data.plan].priceId;
    if (!priceId) {
      throw new Error(`Price ID not found for plan: ${data.plan}`);
    }

    try {
      // Attach payment method to customer
      await this.stripe.paymentMethods.attach(data.paymentMethodId, {
        customer: coach.user.stripeCustomerId,
      });

      // Set as default payment method
      await this.stripe.customers.update(coach.user.stripeCustomerId, {
        invoice_settings: {
          default_payment_method: data.paymentMethodId,
        },
      });

      // Create subscription
      const subscription = await this.stripe.subscriptions.create({
        customer: coach.user.stripeCustomerId,
        items: [{ price: priceId }],
        payment_behavior: 'default_incomplete',
        payment_settings: { save_default_payment_method: 'on_subscription' },
        expand: ['latest_invoice.payment_intent'],
      });

      // Update coach's subscription plan
      await this.prisma.coach.update({
        where: { id: data.coachId },
        data: {
          subscriptionPlan: data.plan,
          subscriptionId: subscription.id,
        },
      });

      return subscription;
    } catch (error) {
      throw new Error(`Failed to create subscription: ${error.message}`);
    }
  }

  async cancelSubscription(coachId: string) {
    const coach = await this.prisma.coach.findUnique({
      where: { id: coachId },
      include: {
        user: true,
      },
    });

    if (!coach) {
      throw new NotFoundException('Coach not found');
    }

    if (!coach.subscriptionId) {
      throw new Error('No active subscription found');
    }

    try {
      // Cancel subscription at period end
      const subscription = await this.stripe.subscriptions.update(
        coach.subscriptionId,
        { cancel_at_period_end: true }
      );

      // Update coach's subscription status
      await this.prisma.coach.update({
        where: { id: coachId },
        data: {
          subscriptionPlan: null,
          subscriptionId: null,
        },
      });

      return subscription;
    } catch (error) {
      throw new Error(`Failed to cancel subscription: ${error.message}`);
    }
  }

  async handleSubscriptionWebhook(event: Stripe.Event) {
    switch (event.type) {
      case 'customer.subscription.updated':
        await this.handleSubscriptionUpdated(event.data.object as Stripe.Subscription);
        break;
      case 'customer.subscription.deleted':
        await this.handleSubscriptionDeleted(event.data.object as Stripe.Subscription);
        break;
    }
  }

  private async handleSubscriptionUpdated(subscription: Stripe.Subscription) {
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

  private async handleSubscriptionDeleted(subscription: Stripe.Subscription) {
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
} 