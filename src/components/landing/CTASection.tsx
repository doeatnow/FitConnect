import React from "react";
import { Button } from "../ui/button";

interface CTASectionProps {
  title?: string;
  description?: string;
  trainerButtonText?: string;
  clientButtonText?: string;
  onTrainerClick?: () => void;
  onClientClick?: () => void;
  backgroundImage?: string;
}

const CTASection = ({
  title = "Ready to Transform Lives?",
  description = "Join FitPal today and become part of a growing community of fitness professionals and enthusiasts.",
  trainerButtonText = "Register as Trainer",
  clientButtonText = "Join as Client",
  onTrainerClick = () => console.log("Trainer registration clicked"),
  onClientClick = () => console.log("Client registration clicked"),
  backgroundImage = "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?q=80&w=1920&auto=format&fit=crop",
}: CTASectionProps) => {
  return (
    <section className="relative w-full h-[400px] bg-background flex items-center justify-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url(${backgroundImage})` }}
      >
        <div className="absolute inset-0 bg-black/60" />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-4xl mx-auto px-4 text-center">
        <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
          {title}
        </h2>
        <p className="text-lg md:text-xl text-gray-200 mb-8 max-w-2xl mx-auto">
          {description}
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button
            size="lg"
            className="bg-primary hover:bg-primary/90 text-white px-8"
            onClick={onTrainerClick}
          >
            {trainerButtonText}
          </Button>
          <Button
            size="lg"
            variant="outline"
            className="bg-transparent text-white border-white hover:bg-white hover:text-black px-8"
            onClick={onClientClick}
          >
            {clientButtonText}
          </Button>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
