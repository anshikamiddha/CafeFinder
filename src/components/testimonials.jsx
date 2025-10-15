import { Star, Quote } from "lucide-react";
import React from "react";
import { Card, CardContent } from "./ui/card.jsx";
import { Badge } from "./ui/badge.jsx";
import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar.jsx";

const testimonials = [
  {
    id: 1,
    name: "Sarah Chen",
    role: "Marketing Manager",
    avatar: "https://images.unsplash.com/photo-1758519289791-ffce8889ca8c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxoYXBweSUyMGN1c3RvbWVycyUyMGNhZmV8ZW58MXx8fHwxNzU4OTAwMDg1fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    rating: 5,
    content: "CafeFinder has completely changed my morning routine. My latte is always perfect temperature when I arrive, and I never wait in line anymore. It's like magic!",
    location: "New York, NY"
  },
  {
    id: 2,
    name: "Mike Rodriguez",
    role: "Software Developer",
    avatar: "SC",
    rating: 5,
    content: "The timing is incredible. I can focus on my commute knowing my coffee will be ready exactly when I walk in. The app's location sharing feature is brilliant.",
    location: "San Francisco, CA"
  },
  {
    id: 3,
    name: "Emma Thompson",
    role: "Freelance Designer",
    avatar: "ET",
    rating: 5,
    content: "As someone who works remotely, finding good cafes with minimal wait time is crucial. CafeFinder helps me discover amazing spots with perfect service timing.",
    location: "Austin, TX"
  }
];

const cafeOwnerTestimonial = {
  name: "David Kim",
  role: "Owner, The Modern Grind",
  avatar: "https://images.unsplash.com/photo-1538104046759-707afc1daa86?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb2ZmZWUlMjBzaG9wJTIwb3duZXIlMjBzbWlsaW5nfGVufDF8fHx8MTc1ODkwMTYzNHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
  content: "CafeFinder has transformed our business. We can prepare orders with perfect timing, reduce waste, and our customer satisfaction has increased by 40%. Our customers love getting fresh, hot coffee every time."
};

export function Testimonials() {
  return (
    <section className="py-24 bg-background">
      <div className="container px-4 mx-auto">
        <div className="text-center mb-16">
          <Badge variant="outline" className="mb-4">Customer Love</Badge>
          <h2 className="text-3xl lg:text-5xl mb-4">
            What Our Users Say
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Join thousands of satisfied customers who enjoy perfect coffee timing every day.
          </p>
        </div>
        
        {/* Customer Testimonials */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {testimonials.map((testimonial) => (
            <Card key={testimonial.id} className="border-0 shadow-md hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
              <CardContent className="p-6">
                <div className="space-y-4">
                  <div className="flex items-center gap-1">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                    ))}
                  </div>
                  
                  <div className="relative">
                    <Quote className="absolute -top-2 -left-2 h-8 w-8 text-muted-foreground/20" />
                    <p className="text-muted-foreground leading-relaxed pl-6">
                      "{testimonial.content}"
                    </p>
                  </div>
                  
                  <div className="flex items-center gap-3 pt-4 border-t">
                    <Avatar className="h-10 w-10">
                      <AvatarImage src={testimonial.avatar} alt={testimonial.name} />
                      <AvatarFallback>{testimonial.name.split(' ').map(n => n[0]).join('')}</AvatarFallback>
                    </Avatar>
                    <div>
                      <div className="font-medium">{testimonial.name}</div>
                      <div className="text-sm text-muted-foreground">{testimonial.role}</div>
                      <div className="text-xs text-muted-foreground">{testimonial.location}</div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
        
        {/* Cafe Owner Testimonial */}
        <Card className="bg-gradient-to-r from-primary/5 to-chart-1/5 border-primary/20">
          <CardContent className="p-8">
            <div className="max-w-4xl mx-auto">
              <div className="text-center mb-6">
                <Badge variant="outline" className="mb-4">Cafe Partner</Badge>
                <h3 className="text-2xl mb-4">From Our Restaurant Partners</h3>
              </div>
              
              <div className="flex flex-col md:flex-row items-center gap-8">
                <div className="flex-shrink-0">
                  <Avatar className="h-20 w-20">
                    <AvatarImage src={cafeOwnerTestimonial.avatar} alt={cafeOwnerTestimonial.name} />
                    <AvatarFallback>{cafeOwnerTestimonial.name.split(' ').map(n => n[0]).join('')}</AvatarFallback>
                  </Avatar>
                </div>
                
                <div className="flex-1 text-center md:text-left">
                  <div className="relative mb-4">
                    <Quote className="absolute -top-2 -left-2 h-8 w-8 text-primary/20" />
                    <p className="text-lg leading-relaxed pl-6">
                      "{cafeOwnerTestimonial.content}"
                    </p>
                  </div>
                  
                  <div>
                    <div className="font-medium text-lg">{cafeOwnerTestimonial.name}</div>
                    <div className="text-muted-foreground">{cafeOwnerTestimonial.role}</div>
                  </div>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
}