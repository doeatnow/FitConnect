import React from "react";
import { Button } from "../ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "../ui/card";
import { Check } from "lucide-react";

interface PricingFeature {
  name: string;
  included: boolean;
}

interface PricingCardProps {
  title?: string;
  description?: string;
  price?: string;
  period?: string;
  features?: PricingFeature[];
  ctaText?: string;
  popular?: boolean;
  onSubscribe?: () => void;
}

const PricingCard = ({
  title = "Basic Plan",
  description = "Perfect for getting started",
  price = "$29",
  period = "per month",
  features = [
    { name: "Basic workout tracking", included: true },
    { name: "Nutrition guidelines", included: true },
    { name: "Progress tracking", included: true },
    { name: "1-on-1 coaching", included: false },
    { name: "Custom meal plans", included: false },
  ],
  ctaText = "Get Started",
  popular = false,
  onSubscribe = () => console.log("Subscribe clicked"),
}: PricingCardProps) => {
  return (
    <Card
      className={`w-[400px] bg-white ${popular ? "border-primary shadow-lg" : "border-border"}`}
    >
      {popular && (
        <div className="absolute -top-3 left-1/2 -translate-x-1/2">
          <span className="bg-primary text-primary-foreground text-sm font-medium px-3 py-1 rounded-full">
            Most Popular
          </span>
        </div>
      )}

      <CardHeader>
        <CardTitle className="text-2xl font-bold">{title}</CardTitle>
        <CardDescription className="text-muted-foreground">
          {description}
        </CardDescription>
      </CardHeader>

      <CardContent className="space-y-6">
        <div className="flex items-baseline">
          <span className="text-4xl font-bold">{price}</span>
          <span className="text-muted-foreground ml-2">{period}</span>
        </div>

        <div className="space-y-3">
          {features.map((feature, index) => (
            <div key={index} className="flex items-center space-x-3">
              <Check
                className={`h-5 w-5 ${feature.included ? "text-primary" : "text-muted-foreground/40"}`}
              />
              <span
                className={
                  feature.included
                    ? "text-foreground"
                    : "text-muted-foreground/40"
                }
              >
                {feature.name}
              </span>
            </div>
          ))}
        </div>
      </CardContent>

      <CardFooter>
        <Button
          className="w-full"
          variant={popular ? "default" : "outline"}
          onClick={onSubscribe}
        >
          {ctaText}
        </Button>
      </CardFooter>
    </Card>
  );
};

export default PricingCard;
