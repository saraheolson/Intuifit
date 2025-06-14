import { Controller, Get, Post, Body, Param, UseGuards, Request, Headers, RawBodyRequest, Delete } from '@nestjs/common';
import { PaymentsService } from './payments.service';
import { CreatePaymentDto } from './dto/create-payment.dto';
import { CreateSubscriptionDto } from './dto/create-subscription.dto';
import { JwtAuthGuard } from '../auth/guards/jwt-auth.guard';
import { RolesGuard } from '../auth/roles.guard';
import { Roles } from '../auth/roles.decorator';
import { Request as ExpressRequest } from 'express';
import Stripe from 'stripe';

@Controller('payments')
export class PaymentsController {
  constructor(private readonly paymentsService: PaymentsService) {}

  @Post()
  @UseGuards(JwtAuthGuard, RolesGuard)
  @Roles('coach', 'team_coach')
  async createPayment(@Body() data: CreatePaymentDto, @Request() req) {
    return this.paymentsService.createPayment(data);
  }

  @Get('client/:clientId')
  @UseGuards(JwtAuthGuard, RolesGuard)
  @Roles('coach', 'team_coach')
  async getClientPayments(@Param('clientId') clientId: string, @Request() req) {
    return this.paymentsService.getClientPayments(clientId, req.user.id);
  }

  @Get('coach')
  @UseGuards(JwtAuthGuard, RolesGuard)
  @Roles('coach', 'team_coach')
  async getCoachPayments(@Request() req) {
    return this.paymentsService.getCoachPayments(req.user.id);
  }

  @Post('subscriptions')
  @UseGuards(JwtAuthGuard, RolesGuard)
  @Roles('coach', 'team_coach')
  async createSubscription(@Body() data: CreateSubscriptionDto, @Request() req) {
    return this.paymentsService.createSubscription(data);
  }

  @Delete('subscriptions/:coachId')
  @UseGuards(JwtAuthGuard, RolesGuard)
  @Roles('coach', 'team_coach')
  async cancelSubscription(@Param('coachId') coachId: string, @Request() req) {
    return this.paymentsService.cancelSubscription(coachId);
  }

  @Post('webhook')
  async handleStripeWebhook(
    @Headers('stripe-signature') signature: string,
    @Request() req: RawBodyRequest<ExpressRequest>,
  ) {
    if (!signature) {
      throw new Error('No Stripe signature found');
    }

    if (!req.rawBody) {
      throw new Error('No request body found');
    }

    const webhookSecret = process.env.STRIPE_WEBHOOK_SECRET;
    if (!webhookSecret) {
      throw new Error('STRIPE_WEBHOOK_SECRET is not defined');
    }

    const stripe = new Stripe(process.env.STRIPE_SECRET_KEY || '', {
      apiVersion: '2025-05-28.basil',
    });

    try {
      const event = stripe.webhooks.constructEvent(
        req.rawBody,
        signature,
        webhookSecret,
      );

      // Handle both payment and subscription webhooks
      if (event.type.startsWith('invoice.')) {
        await this.paymentsService.handleStripeWebhook(event);
      } else if (event.type.startsWith('customer.subscription.')) {
        await this.paymentsService.handleSubscriptionWebhook(event);
      }

      return { received: true };
    } catch (err) {
      throw new Error(`Webhook Error: ${err.message}`);
    }
  }
} 