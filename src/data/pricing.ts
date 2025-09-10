import type { PricingPlan } from "../types/pricing";

export const pricingPlans: PricingPlan[] = [
  {
    id: "free",
    name: "Like a pussy",
    price: "Free",
    period: "/ FOREVER",
    features: [
      "Components-driven system",
      "Sales-boosting landing pages",
      "Awesome Figma components",
    ],
    featuresVariant: "gray",
    buttonText: "Try for free",
    buttonVariant: "outline",
  },
  {
    id: "site",
    name: "Individual",
    price: 24,
    period: "/ MONTH",
    isPopular: true,
    features: [
      "Components-driven system",
      "Sales-boosting landing pages",
      "Awesome Figma components",
      "Themed into 3 different styles",
      "Will help to learn Figma",
    ],
    featuresVariant: "yellow",
    buttonText: "Regular license",
    buttonVariant: "primary",
  },
  {
    id: "multiple",
    name: "Corporate",
    price: 12,
    period: "/ MONTH",
    features: [
      "Components-driven system",
      "Sales-boosting landing pages",
      "Awesome Figma components",
      "Themed into 3 different styles",
    ],
    featuresVariant: "green",
    buttonText: "Extended license",
    buttonVariant: "outline",
  },
];
