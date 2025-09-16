// frontend/src/components/BentoFeatures.tsx

import { Button } from "./ui/button";
import { Card, CardContent, CardHeader } from "./ui/card";
import { History, GalleryHorizontal, View, MessageCircleQuestion, ArrowRight } from "lucide-react";
import { cn } from "./ui/utils";

// An array to hold the data for our feature cards
const features = [
  {
    icon: <History className="w-8 h-8 text-secondary" />,
    title: "View History",
    description: "Uncover the rich stories and timelines behind each sacred site.",
    className: "lg:col-span-1",
    buttonText: "Explore Histories",
  },
  {
    icon: <View className="w-12 h-12 text-primary" />,
    title: "AR Experience",
    description: "Bring ancient temples to life in your own space with Augmented Reality.",
    className: "lg:col-span-2 lg:row-span-2",
    buttonText: "Launch AR",
  },
  {
    icon: <GalleryHorizontal className="w-8 h-8 text-accent" />,
    title: "Image Gallery",
    description: "Browse stunning, high-resolution photos of architectural marvels.",
    className: "lg:col-span-1",
    buttonText: "View Gallery",
  },
  {
    icon: <MessageCircleQuestion className="w-8 h-8 text-yellow-500" />,
    title: "Heritage Quiz",
    description: "Test your knowledge and learn fascinating facts with our interactive quiz.",
    className: "lg:col-span-2",
    buttonText: "Start Quiz",
  },
];

export function BentoFeatures() {
  return (
    <section className="py-16 bg-card relative z-10 shadow-inner">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="mb-4">An Interactive Journey</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Engage with history like never before. Our platform offers multiple ways to explore, learn, and immerse yourself in the world of heritage.
          </p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-3 lg:grid-rows-2 gap-6 max-w-6xl mx-auto">
          {features.map((feature, i) => (
            <Card 
              key={i} 
              className={cn(
                "group relative flex flex-col justify-between p-6 transition-all duration-300 hover:shadow-2xl hover:-translate-y-1 glass",
                feature.className
              )}
            >
              <div>
                <CardHeader className="p-0 mb-4">
                  {feature.icon}
                </CardHeader>
                <CardContent className="p-0">
                  <h3 className="font-bold text-xl mb-2">{feature.title}</h3>
                  <p className="text-muted-foreground text-sm">
                    {feature.description}
                  </p>
                </CardContent>
              </div>
              <Button variant="ghost" className="justify-start p-0 h-auto mt-6 text-sm font-semibold text-primary group-hover:translate-x-1 transition-transform">
                {feature.buttonText}
                <ArrowRight className="w-4 h-4 ml-2" />
              </Button>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}