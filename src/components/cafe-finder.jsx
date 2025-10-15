import { useState } from "react";
import React from "react";
import { MapPin, Star, Clock, Navigation, Filter } from "lucide-react";
import { Button } from "./ui/button.jsx";
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card.jsx";
import { Badge } from "./ui/badge.jsx";
import { ImageWithFallback } from "./figma/ImageWithFallback";

export function CafeFinder({ onSelectCafe }) {
  const [viewMode, setViewMode] = useState('map');
  
  const mockCafes = [
    {
      id: '1',
      name: 'The Modern Grind',
      rating: 4.8,
      distance: '0.3 mi',
      estimatedTime: '5 min',
      image: 'https://images.unsplash.com/photo-1611653682161-f58ba65ead46?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjBjYWZlJTIwaW50ZXJpb3J8ZW58MXx8fHwxNzU4Nzk3NjIzfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      specialties: ['Artisan Coffee', 'Fresh Pastries'],
      priceRange: '$$',
      isOpen: true
    },
    {
      id: '2',
      name: 'Corner Coffee Co.',
      rating: 4.6,
      distance: '0.5 mi',
      estimatedTime: '8 min',
      image: 'https://images.unsplash.com/photo-1523368749929-6b2bf370dbf8?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb2ZmZWUlMjBzaG9wJTIwZXh0ZXJpb3J8ZW58MXx8fHwxNzU4ODI2NjMyfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      specialties: ['Specialty Brews', 'Breakfast'],
      priceRange: '$',
      isOpen: true
    },
    {
      id: '3',
      name: 'Brew & Bite',
      rating: 4.9,
      distance: '0.7 mi',
      estimatedTime: '12 min',
      image: 'https://images.unsplash.com/photo-1736520537688-1f1f06b71605?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmcmVzaCUyMHBhc3RyaWVzJTIwYmFrZXJ5fGVufDF8fHx8MTc1ODg5MjYxNnww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      specialties: ['Bakery', 'Sandwiches'],
      priceRange: '$$',
      isOpen: false
    }
  ];

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="flex flex-col lg:flex-row gap-6">
        {/* Map/Filter Section */}
        <div className="lg:w-2/3">
          <div className="flex items-center justify-between mb-6">
            <div>
              <h2>Cafes Near You</h2>
              <p className="text-muted-foreground">Found {mockCafes.length} cafes within 2 miles</p>
            </div>
            
            <div className="flex items-center gap-2">
              <Button variant="outline" size="sm">
                <Filter className="mr-2 h-4 w-4" />
                Filters
              </Button>
              <div className="flex border rounded-lg">
                <Button
                  variant={viewMode === 'map' ? 'default' : 'ghost'}
                  size="sm"
                  onClick={() => setViewMode('map')}
                  className="rounded-r-none"
                >
                  Map
                </Button>
                <Button
                  variant={viewMode === 'list' ? 'default' : 'ghost'}
                  size="sm"
                  onClick={() => setViewMode('list')}
                  className="rounded-l-none"
                >
                  List
                </Button>
              </div>
            </div>
          </div>
          
          {/* Mock Map */}
          <Card className="h-96 mb-6">
            <CardContent className="p-0 h-full">
              <div className="h-full bg-muted rounded-lg flex items-center justify-center relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-chart-1/10"></div>
                <div className="text-center z-10">
                  <MapPin className="h-12 w-12 text-primary mx-auto mb-4" />
                  <div className="font-medium">Interactive Map</div>
                  <div className="text-sm text-muted-foreground">Google Maps integration</div>
                </div>
                
                {/* Mock map pins */}
                <div className="absolute top-16 left-20 w-8 h-8 bg-primary rounded-full flex items-center justify-center shadow-lg">
                  <MapPin className="h-4 w-4 text-primary-foreground" />
                </div>
                <div className="absolute top-32 right-24 w-8 h-8 bg-chart-2 rounded-full flex items-center justify-center shadow-lg">
                  <MapPin className="h-4 w-4 text-white" />
                </div>
                <div className="absolute bottom-20 left-32 w-8 h-8 bg-chart-3 rounded-full flex items-center justify-center shadow-lg">
                  <MapPin className="h-4 w-4 text-white" />
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
        
        {/* Cafe List */}
        <div className="lg:w-1/3 space-y-4">
          <h3 className="font-medium">Nearby Cafes</h3>
          {mockCafes.map((cafe) => (
            <Card key={cafe.id} className="cursor-pointer hover:shadow-md transition-shadow">
              <CardContent className="p-4">
                <div className="flex gap-3">
                  <div className="w-16 h-16 rounded-lg overflow-hidden flex-shrink-0">
                    <ImageWithFallback
                      src={cafe.image}
                      alt={cafe.name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  
                  <div className="flex-1 min-w-0">
                    <div className="flex items-start justify-between mb-2">
                      <h4 className="font-medium truncate">{cafe.name}</h4>
                      <Badge variant={cafe.isOpen ? "default" : "secondary"}>
                        {cafe.isOpen ? "Open" : "Closed"}
                      </Badge>
                    </div>
                    
                    <div className="flex items-center gap-3 text-sm text-muted-foreground mb-2">
                      <div className="flex items-center gap-1">
                        <Star className="h-3 w-3 fill-yellow-400 text-yellow-400" />
                        {cafe.rating}
                      </div>
                      <div className="flex items-center gap-1">
                        <Navigation className="h-3 w-3" />
                        {cafe.distance}
                      </div>
                      <div className="flex items-center gap-1">
                        <Clock className="h-3 w-3" />
                        {cafe.estimatedTime}
                      </div>
                    </div>
                    
                    <div className="flex flex-wrap gap-1 mb-3">
                      {cafe.specialties.map((specialty, index) => (
                        <Badge key={index} variant="outline" className="text-xs">
                          {specialty}
                        </Badge>
                      ))}
                    </div>
                    
                    <Button 
                      size="sm" 
                      className="w-full"
                      onClick={() => onSelectCafe(cafe)}
                      disabled={!cafe.isOpen}
                    >
                      {cafe.isOpen ? "View Menu" : "Closed"}
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
}