import { useState } from "react";
import React from "react";
import { ArrowLeft, Star, Clock, MapPin, Plus, Minus, ShoppingBag } from "lucide-react";
import { Button } from "./ui/button.jsx";
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card.jsx";
import { Badge } from "./ui/badge.jsx";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "./ui/tabs.jsx";
import { ImageWithFallback } from "./figma/ImageWithFallback";

export function CafeDetail({ cafe, onBack, onAddToCart }) {
  const [quantities, setQuantities] = useState({});
  
  const menuItems = [
    {
      id: '1',
      name: 'Artisan Latte',
      description: 'Rich espresso with steamed milk and microfoam art',
      price: 4.50,
      image: 'https://images.unsplash.com/photo-1626868207738-e5bc2c3e828a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhcnRpc2FuYWwlMjBjb2ZmZWUlMjBsYXR0ZXxlbnwxfHx8fDE3NTg4OTI2MTZ8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      category: 'Coffee'
    },
    {
      id: '2',
      name: 'Fresh Croissant',
      description: 'Buttery, flaky pastry baked fresh daily',
      price: 3.25,
      image: 'https://images.unsplash.com/photo-1736520537688-1f1f06b71605?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmcmVzaCUyMHBhc3RyaWVzJTIwYmFrZXJ5fGVufDF8fHx8MTc1ODg5MjYxNnww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      category: 'Pastries'
    },
    {
      id: '3',
      name: 'Cappuccino',
      description: 'Equal parts espresso, steamed milk, and foam',
      price: 4.00,
      image: 'https://images.unsplash.com/photo-1626868207738-e5bc2c3e828a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhcnRpc2FuYWwlMjBjb2ZmZWUlMjBsYXR0ZXxlbnwxfHx8fDE3NTg4OTI2MTZ8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      category: 'Coffee'
    },
    {
      id: '4',
      name: 'Avocado Toast',
      description: 'Smashed avocado on artisan bread with lime and sea salt',
      price: 8.50,
      image: 'https://images.unsplash.com/photo-1736520537688-1f1f06b71605?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmcmVzaCUyMHBhc3RyaWVzJTIwYmFrZXJ5fGVufDF8fHx8MTc1ODg5MjYxNnww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      category: 'Food'
    }
  ];
  
  const updateQuantity = (itemId, change) => {
    setQuantities(prev => ({
      ...prev,
      [itemId]: Math.max(0, (prev[itemId] || 0) + change)
    }));
  };
  
  const addToCart = (item) => {
    const quantity = quantities[item.id] || 1;
    onAddToCart(item, quantity);
    setQuantities(prev => ({ ...prev, [item.id]: 0 }));
  };
  
  const categories = ['All', ...Array.from(new Set(menuItems.map(item => item.category)))];
  
  return (
    <div className="container mx-auto px-4 py-8">
      {/* Header */}
      <div className="flex items-center gap-4 mb-6">
        <Button variant="outline" size="sm" onClick={onBack}>
          <ArrowLeft className="h-4 w-4" />
        </Button>
        <div>
          <h1>{cafe.name}</h1>
          <div className="flex items-center gap-4 text-sm text-muted-foreground">
            <div className="flex items-center gap-1">
              <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
              {cafe.rating} rating
            </div>
            <div className="flex items-center gap-1">
              <MapPin className="h-4 w-4" />
              {cafe.distance} away
            </div>
            <div className="flex items-center gap-1">
              <Clock className="h-4 w-4" />
              {cafe.estimatedTime} delivery
            </div>
          </div>
        </div>
        <div className="ml-auto">
          <Badge variant={cafe.isOpen ? "default" : "secondary"}>
            {cafe.isOpen ? "Open" : "Closed"}
          </Badge>
        </div>
      </div>
      
      {/* Cafe Image */}
      <Card className="mb-8">
        <CardContent className="p-0">
          <div className="h-64 w-full overflow-hidden rounded-lg">
            <ImageWithFallback
              src={cafe.image}
              alt={cafe.name}
              className="w-full h-full object-cover"
            />
          </div>
        </CardContent>
      </Card>
      
      {/* Menu */}
      <Card>
        <CardHeader>
          <CardTitle>Menu</CardTitle>
        </CardHeader>
        <CardContent>
          <Tabs defaultValue="All" className="w-full">
            <TabsList className="grid w-full grid-cols-4">
              {categories.map(category => (
                <TabsTrigger key={category} value={category}>
                  {category}
                </TabsTrigger>
              ))}
            </TabsList>
            
            {categories.map(category => (
              <TabsContent key={category} value={category} className="space-y-4">
                {menuItems
                  .filter(item => category === 'All' || item.category === category)
                  .map(item => (
                    <Card key={item.id}>
                      <CardContent className="p-4">
                        <div className="flex gap-4">
                          <div className="w-20 h-20 rounded-lg overflow-hidden flex-shrink-0">
                            <ImageWithFallback
                              src={item.image}
                              alt={item.name}
                              className="w-full h-full object-cover"
                            />
                          </div>
                          
                          <div className="flex-1">
                            <div className="flex items-start justify-between mb-2">
                              <div>
                                <h4 className="font-medium">{item.name}</h4>
                                <p className="text-sm text-muted-foreground">{item.description}</p>
                              </div>
                              <div className="font-medium">${item.price.toFixed(2)}</div>
                            </div>
                            
                            <div className="flex items-center justify-between">
                              <div className="flex items-center gap-2">
                                <Button
                                  variant="outline"
                                  size="sm"
                                  onClick={() => updateQuantity(item.id, -1)}
                                  disabled={!quantities[item.id]}
                                >
                                  <Minus className="h-3 w-3" />
                                </Button>
                                <span className="w-8 text-center">{quantities[item.id] || 0}</span>
                                <Button
                                  variant="outline"
                                  size="sm"
                                  onClick={() => updateQuantity(item.id, 1)}
                                >
                                  <Plus className="h-3 w-3" />
                                </Button>
                              </div>
                              
                              <Button
                                size="sm"
                                onClick={() => addToCart(item)}
                                disabled={!cafe.isOpen}
                              >
                                <ShoppingBag className="mr-1 h-3 w-3" />
                                Add to Cart
                              </Button>
                            </div>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
              </TabsContent>
            ))}
          </Tabs>
        </CardContent>
      </Card>
    </div>
  );
}