export interface PricingPlan {
  id: string;
  name: string;
  price: number | string;
  period: string;
  isPopular?: boolean;
  features: string[];
  featuresVariant: string;
  buttonText: string;
  buttonVariant: "primary" | "secondary" | "outline";
}
