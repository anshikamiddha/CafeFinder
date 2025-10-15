import { Download, MapPin, Smartphone } from "lucide-react";
import React from "react";
import { Button } from "./ui/button.jsx";
import { Card, CardContent } from "./ui/card.jsx";
import { ImageWithFallback } from "./figma/ImageWithFallback";

export function CtaSection({ onGetStarted }) {
  return (
    <section className="py-24 bg-gradient-to-br from-primary/5 to-chart-1/10">
      <div className="container px-4 mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="space-y-8">
            <div className="space-y-4">
              <h2 className="text-3xl lg:text-5xl">
                Ready for Perfect
                <span className="bg-gradient-to-r from-primary to-chart-1 bg-clip-text text-transparent">
                  {" "}Coffee Timing{" "}
                </span>
                Every Time?
              </h2>
              <p className="text-lg text-muted-foreground">
                Join thousands of coffee lovers who never wait for their perfect cup. 
                Download CafeFinder and experience the future of cafe ordering.
              </p>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="lg" onClick={onGetStarted} className="text-base">
                <MapPin className="mr-2 h-5 w-5" />
                Start Finding Cafes
              </Button>
              <Button variant="outline" size="lg" className="text-base">
                <Download className="mr-2 h-5 w-5" />
                Download App
              </Button>
            </div>
            
            {/* Stats */}
            <div className="grid grid-cols-3 gap-6 pt-8">
              <div className="text-center">
                <div className="text-2xl font-bold">10K+</div>
                <div className="text-sm text-muted-foreground">Happy Customers</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold">500+</div>
                <div className="text-sm text-muted-foreground">Partner Cafes</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold">98%</div>
                <div className="text-sm text-muted-foreground">On-Time Orders</div>
              </div>
            </div>
          </div>
          
          {/* Phone Mockup */}
          <div className="relative">
            <Card className="overflow-hidden shadow-2xl max-w-sm mx-auto">
              <CardContent className="p-0">
                <div className="bg-gradient-to-br from-primary to-chart-1 p-8">
                  <div className="bg-white rounded-2xl p-6 shadow-lg">
                    <ImageWithFallback
                      src="https://images.unsplash.com/photo-1651594565454-40654e86f83a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHxtb2JpbGUlMjBhcHAlMjBpbnRlcmZhY2UlMjBjb2ZmZWV8ZW58MXx8fHwxNzU4OTAxNjM0fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                      alt="CafeFinder Mobile App"
                      className="w-full h-64 object-cover rounded-lg"
                    />
                    
                    <div className="mt-4 space-y-3">
                      <div className="flex items-center justify-between text-sm">
                        <span>Order Status</span>
                        <span className="text-green-600 font-medium">Ready in 3 min</span>
                      </div>
                      
                      <div className="h-2 bg-muted rounded-full">
                        <div className="h-full bg-primary rounded-full w-4/5"></div>
                      </div>
                      
                      <div className="flex items-center gap-2 text-sm text-muted-foreground">
                        <Smartphone className="h-4 w-4" />
                        <span>Location shared with cafe</span>
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
            
            {/* Floating elements */}
            <div className="absolute -top-4 -right-4 w-16 h-16 bg-chart-2 rounded-full flex items-center justify-center text-white shadow-lg animate-bounce">
              ☕
            </div>
            
            <div className="absolute -bottom-4 -left-4 w-12 h-12 bg-chart-3 rounded-full flex items-center justify-center text-white shadow-lg">
              ⏰
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}