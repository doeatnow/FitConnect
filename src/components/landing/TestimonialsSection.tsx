import React from "react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "../ui/carousel";
import { Card, CardContent } from "../ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "../ui/avatar";
import { Quote } from "lucide-react";

interface Testimonial {
  id: string;
  name: string;
  role: string;
  quote: string;
  image: string;
  achievement: string;
}

interface TestimonialsSectionProps {
  testimonials?: Testimonial[];
}

const TestimonialsSection = ({
  testimonials = [
    {
      id: "1",
      name: "Sarah Johnson",
      role: "Fitness Enthusiast",
      quote:
        "FitPal transformed my fitness journey. The personalized training plans and progress tracking helped me achieve my goals faster than ever.",
      image: "https://api.dicebear.com/7.x/avataaars/svg?seed=sarah",
      achievement: "Lost 30 lbs in 6 months",
    },
    {
      id: "2",
      name: "Mike Chen",
      role: "Personal Trainer",
      quote:
        "As a trainer, FitPal has streamlined my client management and made it easier to track their progress. It's an essential tool for my business.",
      image: "https://api.dicebear.com/7.x/avataaars/svg?seed=mike",
      achievement: "Trains 20+ clients successfully",
    },
    {
      id: "3",
      name: "Emma Davis",
      role: "Marathon Runner",
      quote:
        "The macro tracking and nutrition guidance have been game-changers for my marathon training. I've never felt stronger or more prepared.",
      image: "https://api.dicebear.com/7.x/avataaars/svg?seed=emma",
      achievement: "Completed 3 marathons",
    },
  ],
}: TestimonialsSectionProps) => {
  return (
    <section className="w-full py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">Success Stories</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Hear from our community about how FitPal has helped them achieve
            their fitness goals
          </p>
        </div>

        <Carousel className="w-full max-w-5xl mx-auto">
          <CarouselContent>
            {testimonials.map((testimonial) => (
              <CarouselItem
                key={testimonial.id}
                className="md:basis-1/2 lg:basis-1/3"
              >
                <Card className="mx-2 h-full bg-white">
                  <CardContent className="p-6 flex flex-col items-center text-center">
                    <Quote className="w-8 h-8 text-primary mb-4" />
                    <Avatar className="w-20 h-20 mb-4">
                      <AvatarImage
                        src={testimonial.image}
                        alt={testimonial.name}
                      />
                      <AvatarFallback>{testimonial.name[0]}</AvatarFallback>
                    </Avatar>
                    <p className="text-sm text-muted-foreground mb-4">
                      {testimonial.quote}
                    </p>
                    <div className="mt-auto">
                      <h4 className="font-semibold">{testimonial.name}</h4>
                      <p className="text-sm text-muted-foreground">
                        {testimonial.role}
                      </p>
                      <div className="mt-2 inline-block bg-primary/10 text-primary px-3 py-1 rounded-full text-sm">
                        {testimonial.achievement}
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious className="-left-12" />
          <CarouselNext className="-right-12" />
        </Carousel>
      </div>
    </section>
  );
};

export default TestimonialsSection;
