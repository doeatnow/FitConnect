import React from "react";
import Hero from "./landing/Hero";
import FeaturesSection from "./landing/FeaturesSection";
import PricingSection from "./landing/PricingSection";
import TestimonialsSection from "./landing/TestimonialsSection";
import CTASection from "./landing/CTASection";

interface HomeProps {
  onTrainerSignup?: () => void;
  onClientSignup?: () => void;
}

const Home = ({
  onTrainerSignup = () => console.log("Trainer signup clicked"),
  onClientSignup = () => console.log("Client signup clicked"),
}: HomeProps) => {
  return (
    <div className="min-h-screen bg-background">
      <Hero onTrainerClick={onTrainerSignup} onClientClick={onClientSignup} />

      <FeaturesSection />

      <PricingSection />

      <TestimonialsSection />

      <CTASection
        onTrainerClick={onTrainerSignup}
        onClientClick={onClientSignup}
      />
    </div>
  );
};

export default Home;
