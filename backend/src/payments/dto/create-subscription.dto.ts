import { IsString, IsNotEmpty, IsEnum } from 'class-validator';

export enum SubscriptionPlan {
  BASIC = 'basic',
  PROFESSIONAL = 'professional',
  ENTERPRISE = 'enterprise',
}

export class CreateSubscriptionDto {
  @IsString()
  @IsNotEmpty()
  coachId: string;

  @IsEnum(SubscriptionPlan)
  @IsNotEmpty()
  plan: SubscriptionPlan;

  @IsString()
  @IsNotEmpty()
  paymentMethodId: string;
} 