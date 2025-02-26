import React from "react";
import PricingCard from "./PricingCard";

interface PricingSectionProps {
  title?: string;
  description?: string;
  plans?: {
    trainer: {
      title: string;
      description: string;
      price: string;
      period: string;
      features: { name: string; included: boolean }[];
      ctaText: string;
      popular: boolean;
    };
    client: {
      title: string;
      description: string;
      price: string;
      period: string;
      features: { name: string; included: boolean }[];
      ctaText: string;
      popular: boolean;
    };
  };
}

const PricingSection = ({
  title = "Simple, transparent pricing",
  description = "Choose the plan that's right for you",
  plans = {
    trainer: {
      title: "Trainer",
      description: "For fitness professionals",
      price: "$99",
      period: "per month",
      features: [
        { name: "Unlimited clients", included: true },
        { name: "Custom workout builder", included: true },
        { name: "Progress tracking", included: true },
        { name: "Nutrition planning tools", included: true },
        { name: "Business analytics", included: true },
      ],
      ctaText: "Start Training",
      popular: true,
    },
    client: {
      title: "Client",
      description: "For fitness enthusiasts",
      price: "$29",
      period: "per month",
      features: [
        { name: "Personal trainer access", included: true },
        { name: "Workout tracking", included: true },
        { name: "Progress monitoring", included: true },
        { name: "Basic nutrition guides", included: true },
        { name: "Community access", included: false },
      ],
      ctaText: "Start Your Journey",
      popular: false,
    },
  },
}: PricingSectionProps) => {
  return (
    <section className="w-full py-24 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold tracking-tight mb-4">{title}</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            {description}
          </p>
        </div>

        <div className="flex flex-col md:flex-row justify-center items-center md:items-stretch gap-8 max-w-7xl mx-auto">
          <PricingCard {...plans.client} />
          <PricingCard {...plans.trainer} />
        </div>
      </div>
    </section>
  );
};

export default PricingSection;
