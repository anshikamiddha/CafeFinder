import { Search, MapPin, Coffee, Clock } from "lucide-react";
import React from "react";
import { Card, CardContent } from "./ui/card.jsx";
import { Badge } from "./ui/badge.jsx";

const steps = [
  {
    icon: Search,
    step: "01",
    title: "Find Nearby Cafes",
    description: "Search and discover top-rated cafes in your area with real-time availability and menus.",
    color: "bg-primary/10 text-primary"
  },
  {
    icon: Coffee,
    step: "02", 
    title: "Place Your Order",
    description: "Browse menus, customize your drinks, and place your order with just a few taps.",
    color: "bg-chart-2/10 text-chart-2"
  },
  {
    icon: MapPin,
    step: "03",
    title: "Share Your Location",
    description: "Enable location sharing so the cafe can track your ETA and prepare your order accordingly.",
    color: "bg-chart-3/10 text-chart-3"
  },
  {
    icon: Clock,
    step: "04",
    title: "Perfect Timing",
    description: "Arrive to find your order fresh and ready - no waiting in line, no cold coffee!",
    color: "bg-chart-4/10 text-chart-4"
  }
];

export function HowItWorks() {
  return (
    <section className="py-24 bg-background">
      <div className="container px-4 mx-auto">
        <div className="text-center mb-16">
          <Badge variant="outline" className="mb-4">How It Works</Badge>
          <h2 className="text-3xl lg:text-5xl mb-4">
            Four Simple Steps to Perfect Coffee
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Our intelligent timing system ensures your coffee is always fresh and ready when you arrive.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, index) => (
            <div key={index} className="relative">
              <Card className="border-0 shadow-md hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
                <CardContent className="p-8 text-center">
                  <div className="space-y-4">
                    <div className="relative">
                      <div className={`w-16 h-16 rounded-2xl ${step.color} flex items-center justify-center mx-auto`}>
                        <step.icon className="h-8 w-8" />
                      </div>
                      <Badge 
                        variant="default" 
                        className="absolute -top-2 -right-2 w-8 h-8 rounded-full p-0 flex items-center justify-center"
                      >
                        {step.step}
                      </Badge>
                    </div>
                    <div>
                      <h3 className="text-xl mb-3">{step.title}</h3>
                      <p className="text-muted-foreground leading-relaxed">
                        {step.description}
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
              
              {/* Connection line */}
              {index < steps.length - 1 && (
                <div className="hidden lg:block absolute top-1/2 -right-4 w-8 h-0.5 bg-border"></div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}