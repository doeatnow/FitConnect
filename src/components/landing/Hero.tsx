import React from "react";
import { Button } from "../ui/button";
import { motion } from "framer-motion";

interface HeroProps {
  title?: string;
  subtitle?: string;
  trainerCtaText?: string;
  clientCtaText?: string;
  onTrainerClick?: () => void;
  onClientClick?: () => void;
  backgroundImage?: string;
}

const Hero = ({
  title = "Transform Your Fitness Journey with FitPal",
  subtitle = "Connect with expert trainers and achieve your fitness goals through personalized training plans and real-time progress tracking",
  trainerCtaText = "Join as Trainer",
  clientCtaText = "Start Your Journey",
  onTrainerClick = () => console.log("Trainer CTA clicked"),
  onClientClick = () => console.log("Client CTA clicked"),
  backgroundImage = "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?q=80&w=2070&auto=format&fit=crop",
}: HeroProps) => {
  return (
    <div className="relative h-[700px] w-full bg-black overflow-hidden">
      {/* Background Image with Overlay */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${backgroundImage})` }}
      >
        <div className="absolute inset-0 bg-black/50" />
      </div>

      {/* Content Container */}
      <div className="relative h-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col justify-center items-center text-center">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-4xl md:text-6xl font-bold text-white mb-6 max-w-4xl"
        >
          {title}
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-xl text-gray-200 mb-12 max-w-2xl"
        >
          {subtitle}
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="flex flex-col sm:flex-row gap-4"
        >
          <Button
            size="lg"
            onClick={onTrainerClick}
            className="bg-primary hover:bg-primary/90 text-white px-8 py-6 text-lg"
          >
            {trainerCtaText}
          </Button>
          <Button
            size="lg"
            variant="outline"
            onClick={onClientClick}
            className="bg-transparent hover:bg-white/10 text-white border-white px-8 py-6 text-lg"
          >
            {clientCtaText}
          </Button>
        </motion.div>
      </div>
    </div>
  );
};

export default Hero;
