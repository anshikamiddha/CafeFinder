import { MapPin, Clock, Star, Bell, Shield, Smartphone } from "lucide-react";
import { Card, CardContent } from "./ui/card.jsx";
import React from "react";
const features = [
  {
    icon: MapPin,
    title: "Real-Time Location Tracking",
    description: "Share your live location with cafes so they can perfectly time your order preparation.",
    color: "text-primary"
  },
  {
    icon: Clock,
    title: "Perfect Timing",
    description: "Your food is prepared and ready exactly when you arrive - no waiting, no cold coffee.",
    color: "text-chart-2"
  },
  {
    icon: Bell,
    title: "Smart Notifications",
    description: "Get real-time updates about your order status and estimated preparation time.",
    color: "text-chart-3"
  },
  {
    icon: Star,
    title: "Curated Cafes",
    description: "Only the best-rated cafes with fresh ingredients and excellent service make it to our platform.",
    color: "text-chart-4"
  },
  {
    icon: Shield,
    title: "Secure & Private",
    description: "Your location data is encrypted and only shared temporarily during order preparation.",
    color: "text-chart-5"
  },
  {
    icon: Smartphone,
    title: "Easy Mobile Experience",
    description: "Seamless ordering experience designed for mobile-first usage with intuitive interface.",
    color: "text-chart-1"
  }
];

export function FeaturesSection() {
  return (
    <section className="py-24 bg-muted/30">
      <div className="container px-4 mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-5xl mb-4">
            Why Choose CafeFinder?
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            We've revolutionized the cafe experience by combining smart technology with perfect timing, 
            ensuring you get the freshest food exactly when you need it.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <Card key={index} className="border-0 shadow-md hover:shadow-lg transition-shadow duration-300">
              <CardContent className="p-8">
                <div className="space-y-4">
                  <div className={`w-16 h-16 rounded-2xl bg-muted flex items-center justify-center ${feature.color}`}>
                    <feature.icon className="h-8 w-8" />
                  </div>
                  <div>
                    <h3 className="text-xl mb-2">{feature.title}</h3>
                    <p className="text-muted-foreground leading-relaxed">
                      {feature.description}
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}