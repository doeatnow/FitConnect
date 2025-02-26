import React from "react";
import { Card, CardContent } from "../ui/card";
import { BarChart3, Apple, LineChart } from "lucide-react";

interface Feature {
  icon: React.ReactNode;
  title: string;
  description: string;
}

interface FeaturesSectionProps {
  features?: Feature[];
  title?: string;
  subtitle?: string;
}

const FeaturesSection = ({
  features = [
    {
      icon: <BarChart3 className="w-12 h-12 text-primary" />,
      title: "Training Plans",
      description:
        "Customized workout routines tailored to your fitness goals and experience level.",
    },
    {
      icon: <Apple className="w-12 h-12 text-primary" />,
      title: "Macro Tracking",
      description:
        "Easily track your daily nutrition and macronutrients to optimize your diet.",
    },
    {
      icon: <LineChart className="w-12 h-12 text-primary" />,
      title: "Progress Charts",
      description:
        "Visualize your fitness journey with detailed progress tracking and analytics.",
    },
  ],
  title = "Features",
  subtitle = "Everything you need to achieve your fitness goals",
}: FeaturesSectionProps) => {
  return (
    <section className="w-full py-24 bg-[#01021a] text-[#8a6c6c]">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4 text-[#ffffff]">{title}</h2>
          <p className="text-muted-foreground text-lg">{subtitle}</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 border-0">
          {features.map((feature, index) => (
            <Card key={index} className="bg-card ">
              <CardContent className="pt-6">
                <div className="flex flex-col items-center text-center">
                  <div className="mb-6 p-3 rounded-full bg-primary/10">
                    {feature.icon}
                  </div>
                  <h3 className="text-xl font-semibold mb-3">
                    {feature.title}
                  </h3>
                  <p className="text-muted-foreground">{feature.description}</p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
