export declare enum SubscriptionPlan {
    BASIC = "basic",
    PROFESSIONAL = "professional",
    ENTERPRISE = "enterprise"
}
export declare class CreateSubscriptionDto {
    coachId: string;
    plan: SubscriptionPlan;
    paymentMethodId: string;
}
