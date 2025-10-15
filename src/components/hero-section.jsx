import { MapPin, Clock, Star, Truck, Play } from "lucide-react";
import React from "react";
import { Button } from "./ui/button.jsx";
import { Card, CardContent } from "./ui/card.jsx";
import { Badge } from "./ui/badge.jsx";
import { ImageWithFallback } from "./figma/ImageWithFallback";

export function HeroSection({ onGetStarted }) {
  return (
    <div className="relative overflow-hidden bg-gradient-to-br from-background to-muted/30">
      <div className="container px-4 py-16 mx-auto lg:py-24">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="space-y-8">
            <div className="space-y-4">
              <h1 className="text-4xl lg:text-6xl tracking-tight">
                Find Perfect 
                <span className="bg-gradient-to-r from-primary to-chart-1 bg-clip-text text-transparent">
                  {" "}Cafes{" "}
                </span>
                Near You
              </h1>
              <p className="text-lg text-muted-foreground max-w-md">
                Discover amazing cafes, order your favorite drinks, and track your order in real-time. 
                Food ready exactly when you arrive.
              </p>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="lg" onClick={onGetStarted} className="text-base group">
                <MapPin className="mr-2 h-5 w-5 group-hover:animate-pulse" />
                Find Cafes Near Me
              </Button>
              <Button variant="outline" size="lg" className="text-base group">
                <Play className="mr-2 h-5 w-5 group-hover:scale-110 transition-transform" />
                Watch Demo
              </Button>
            </div>
            
            <div className="flex items-center gap-6 pt-4">
              <Badge variant="secondary" className="flex items-center gap-2">
                <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                500+ Cafes Online
              </Badge>
              <div className="flex items-center gap-1 text-sm text-muted-foreground">
                <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                <span>4.8/5 from 10K+ users</span>
              </div>
            </div>
            
            {/* Features */}
            <div className="grid grid-cols-3 gap-4 pt-8">
              <div className="text-center space-y-2">
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mx-auto">
                  <MapPin className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <div className="font-medium">Live Tracking</div>
                  <div className="text-sm text-muted-foreground">Real-time location</div>
                </div>
              </div>
              
              <div className="text-center space-y-2">
                <div className="w-12 h-12 bg-chart-2/10 rounded-lg flex items-center justify-center mx-auto">
                  <Clock className="h-6 w-6 text-chart-2" />
                </div>
                <div>
                  <div className="font-medium">Perfect Timing</div>
                  <div className="text-sm text-muted-foreground">Food ready on arrival</div>
                </div>
              </div>
              
              <div className="text-center space-y-2">
                <div className="w-12 h-12 bg-chart-3/10 rounded-lg flex items-center justify-center mx-auto">
                  <Star className="h-6 w-6 text-chart-3" />
                </div>
                <div>
                  <div className="font-medium">Top Rated</div>
                  <div className="text-sm text-muted-foreground">Best cafes nearby</div>
                </div>
              </div>
            </div>
          </div>
          
          {/* Hero Image */}
          <div className="relative">
            <Card className="overflow-hidden shadow-2xl">
              <CardContent className="p-0">
                <ImageWithFallback
                  src="https://images.unsplash.com/photo-1729860649884-40ec104f9dfd?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmb29kJTIwZGVsaXZlcnklMjBzbWFydHBob25lJTIwYXBwfGVufDF8fHx8MTc1ODg4NzY5Nnww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                  alt="CafeFinder App Interface"
                  className="w-full h-[400px] object-cover"
                />
              </CardContent>
            </Card>
            
            {/* Floating cards */}
            <Card className="absolute -top-4 -left-4 w-48 shadow-lg animate-float">
              <CardContent className="p-4">
                <div className="flex items-center space-x-3">
                  <div className="w-12 h-12 bg-muted rounded-lg overflow-hidden">
                    <ImageWithFallback
                      src="https://images.unsplash.com/photo-1626868207738-e5bc2c3e828a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhcnRpc2FuYWwlMjBjb2ZmZWUlMjBsYXR0ZXxlbnwxfHx8fDE3NTg4OTI2MTZ8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                      alt="Coffee"
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div>
                    <div className="font-medium">Artisan Latte</div>
                    <div className="text-sm text-green-600 flex items-center gap-1">
                      <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                      Ready in 2 min
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
            
            <Card className="absolute -bottom-4 -right-4 w-48 shadow-lg animate-float-delayed">
              <CardContent className="p-4">
                <div className="text-center">
                  <div className="text-2xl mb-1">⭐ 4.9</div>
                  <div className="text-sm text-muted-foreground">250+ cafes rated</div>
                  <Badge variant="secondary" className="mt-2">
                    Top Rated
                  </Badge>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
}