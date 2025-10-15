
import { Star, Clock, MapPin, ArrowRight } from "lucide-react";
import React from "react";
import { Card, CardContent } from "./ui/card.jsx";
import { Badge } from "./ui/badge.jsx";
import { Button } from "./ui/button.jsx";
import { ImageWithFallback } from "./figma/ImageWithFallback";

const popularCafes = [
  {
    id: 1,
    name: "The Modern Grind",
    image: "https://images.unsplash.com/photo-1611653682161-f58ba65ead46?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjBjYWZlJTIwaW50ZXJpb3J8ZW58MXx8fHwxNzU4Nzk3NjIzfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    rating: 4.9,
    reviews: 1240,
    prepTime: "5-8 min",
    distance: "0.3 mi",
    specialty: "Artisan Coffee",
    popular: "Signature Latte"
  },
  {
    id: 2,
    name: "Corner Coffee Co.",
    image: "https://images.unsplash.com/photo-1523368749929-6b2bf370dbf8?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb2ZmZWUlMjBzaG9wJTIwZXh0ZXJpb3J8ZW58MXx8fHwxNzU4ODI2NjMyfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    rating: 4.7,
    reviews: 892,
    prepTime: "3-6 min",
    distance: "0.5 mi",
    specialty: "Quick Service",
    popular: "Cold Brew"
  },
  {
    id: 3,
    name: "Brew & Bite",
    image: "https://images.unsplash.com/photo-1736520537688-1f1f06b71605?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmcmVzaCUyMHBhc3RyaWVzJTIwYmFrZXJ5fGVufDF8fHx8MTc1ODg5MjYxNnww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    rating: 4.8,
    reviews: 654,
    prepTime: "7-10 min",
    distance: "0.7 mi",
    specialty: "Fresh Pastries",
    popular: "Croissant & Coffee"
  }
];

export function PopularCafes({ onExploreMore }) {
  return (
    <section className="py-24 bg-muted/30">
      <div className="container px-4 mx-auto">
        <div className="flex items-center justify-between mb-16">
          <div>
            <Badge variant="outline" className="mb-4">Popular Near You</Badge>
            <h2 className="text-3xl lg:text-5xl mb-4">
              Top-Rated Cafes
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl">
              Discover the most loved cafes in your area, known for their quality and perfect timing.
            </p>
          </div>
          <Button onClick={onExploreMore} className="hidden md:flex">
            Explore All
            <ArrowRight className="ml-2 h-4 w-4" />
          </Button>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {popularCafes.map((cafe) => (
            <Card key={cafe.id} className="group border-0 shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-2 cursor-pointer overflow-hidden">
              <div className="relative overflow-hidden">
                <ImageWithFallback
                  src={cafe.image}
                  alt={cafe.name}
                  className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute top-4 left-4">
                  <Badge className="bg-white/90 text-black hover:bg-white">
                    {cafe.specialty}
                  </Badge>
                </div>
                <div className="absolute top-4 right-4">
                  <div className="flex items-center gap-1 bg-white/90 rounded-full px-2 py-1">
                    <Star className="h-3 w-3 fill-yellow-400 text-yellow-400" />
                    <span className="text-xs font-medium">{cafe.rating}</span>
                  </div>
                </div>
              </div>
              
              <CardContent className="p-6">
                <div className="space-y-4">
                  <div>
                    <h3 className="text-xl mb-2">{cafe.name}</h3>
                    <div className="flex items-center gap-4 text-sm text-muted-foreground">
                      <div className="flex items-center gap-1">
                        <Star className="h-3 w-3" />
                        {cafe.rating} ({cafe.reviews})
                      </div>
                      <div className="flex items-center gap-1">
                        <MapPin className="h-3 w-3" />
                        {cafe.distance}
                      </div>
                    </div>
                  </div>
                  
                  <div className="flex items-center justify-between">
                    <div>
                      <div className="text-sm font-medium">Most Popular</div>
                      <div className="text-sm text-muted-foreground">{cafe.popular}</div>
                    </div>
                    <div className="text-right">
                      <div className="flex items-center gap-1 text-sm">
                        <Clock className="h-3 w-3" />
                        {cafe.prepTime}
                      </div>
                      <div className="text-xs text-muted-foreground">prep time</div>
                    </div>
                  </div>
                  
                  <Button className="w-full group-hover:bg-primary/90 transition-colors">
                    View Menu
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
        
        <div className="text-center mt-12 md:hidden">
          <Button onClick={onExploreMore}>
            Explore All Cafes
            <ArrowRight className="ml-2 h-4 w-4" />
          </Button>
        </div>
      </div>
    </section>
  );
}