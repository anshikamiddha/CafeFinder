import { useState, useEffect } from "react";
import React from "react";
import { MapPin, Clock, CheckCircle, Truck, Coffee, Navigation } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card.jsx";
import { Badge } from "./ui/badge.jsx";
import { Button } from "./ui/button.jsx";
import { Progress } from "./ui/progress.jsx";

export function OrderTracking({ orders, onLocationShare }) {
  const [locationSharing, setLocationSharing] = useState({});
  const [userPosition, setUserPosition] = useState({ lat: 40.7128, lng: -74.0060 });
  
  useEffect(() => {
    // Mock location updates
    const interval = setInterval(() => {
      setUserPosition(prev => ({
        lat: prev.lat + (Math.random() - 0.5) * 0.001,
        lng: prev.lng + (Math.random() - 0.5) * 0.001
      }));
    }, 5000);
    
    return () => clearInterval(interval);
  }, []);
  
  const getStatusIcon = (status) => {
    switch (status) {
      case 'placed':
        return <Clock className="h-5 w-5 text-blue-500" />;
      case 'preparing':
        return <Coffee className="h-5 w-5 text-orange-500" />;
      case 'ready':
        return <CheckCircle className="h-5 w-5 text-green-500" />;
      case 'completed':
        return <CheckCircle className="h-5 w-5 text-green-500" />;
      default:
        return <Clock className="h-5 w-5" />;
    }
  };
  
  const getStatusText = (status) => {
    switch (status) {
      case 'placed':
        return 'Order Placed';
      case 'preparing':
        return 'Being Prepared';
      case 'ready':
        return 'Ready for Pickup';
      case 'completed':
        return 'Completed';
      default:
        return 'Unknown';
    }
  };
  
  const getProgress = (status) => {
    switch (status) {
      case 'placed':
        return 25;
      case 'preparing':
        return 60;
      case 'ready':
        return 90;
      case 'completed':
        return 100;
      default:
        return 0;
    }
  };
  
  const handleLocationShare = (orderId) => {
    setLocationSharing(prev => ({ ...prev, [orderId]: true }));
    onLocationShare(orderId);
  };
  
  if (orders.length === 0) {
    return (
      <div className="container mx-auto px-4 py-8">
        <div className="text-center py-12">
          <Coffee className="h-16 w-16 text-muted-foreground mx-auto mb-4" />
          <h2>No Active Orders</h2>
          <p className="text-muted-foreground">Your orders will appear here once you place them.</p>
        </div>
      </div>
    );
  }
  
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="mb-8">Your Orders</h1>
      
      <div className="grid gap-6">
        {orders.map((order) => (
          <Card key={order.id}>
            <CardHeader>
              <div className="flex items-center justify-between">
                <CardTitle className="flex items-center gap-3">
                  {getStatusIcon(order.status)}
                  <div>
                    <div>{order.cafeName}</div>
                    <div className="text-sm font-normal text-muted-foreground">
                      Order #{order.id.slice(-6)}
                    </div>
                  </div>
                </CardTitle>
                <Badge variant={order.status === 'completed' ? 'default' : 'secondary'}>
                  {getStatusText(order.status)}
                </Badge>
              </div>
            </CardHeader>
            
            <CardContent className="space-y-6">
              {/* Progress */}
              <div className="space-y-2">
                <div className="flex justify-between text-sm">
                  <span>Order Progress</span>
                  <span>{getProgress(order.status)}%</span>
                </div>
                <Progress value={getProgress(order.status)} className="h-2" />
              </div>
              
              {/* Timing */}
              <div className="grid grid-cols-2 gap-4">
                <div className="flex items-center gap-2 text-sm">
                  <Clock className="h-4 w-4 text-muted-foreground" />
                  <div>
                    <div className="font-medium">Food Ready In</div>
                    <div className="text-muted-foreground">{order.estimatedTime} min</div>
                  </div>
                </div>
                
                <div className="flex items-center gap-2 text-sm">
                  <Navigation className="h-4 w-4 text-muted-foreground" />
                  <div>
                    <div className="font-medium">Your ETA</div>
                    <div className="text-muted-foreground">{order.userETA} min</div>
                  </div>
                </div>
              </div>
              
              {/* Items */}
              <div>
                <div className="font-medium mb-2">Order Items</div>
                <div className="space-y-1">
                  {order.items.map((item, index) => (
                    <div key={index} className="flex justify-between text-sm">
                      <span>{item.quantity}x {item.name}</span>
                      <span>${(item.price * item.quantity).toFixed(2)}</span>
                    </div>
                  ))}
                </div>
                <div className="border-t pt-2 mt-2 flex justify-between font-medium">
                  <span>Total</span>
                  <span>${order.total.toFixed(2)}</span>
                </div>
              </div>
              
              {/* Location Sharing */}
              {order.status === 'preparing' && (
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <div>
                      <div className="font-medium">Live Location Sharing</div>
                      <div className="text-sm text-muted-foreground">
                        Help the cafe prepare your order perfectly timed
                      </div>
                    </div>
                    
                    {!locationSharing[order.id] ? (
                      <Button 
                        onClick={() => handleLocationShare(order.id)}
                        size="sm"
                      >
                        <MapPin className="mr-1 h-4 w-4" />
                        Share Location
                      </Button>
                    ) : (
                      <Badge className="bg-green-100 text-green-800">
                        <MapPin className="mr-1 h-3 w-3" />
                        Location Shared
                      </Badge>
                    )}
                  </div>
                  
                  {locationSharing[order.id] && (
                    <Card className="bg-muted/50">
                      <CardContent className="p-4">
                        <div className="flex items-center gap-3">
                          <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                            <Truck className="h-6 w-6 text-primary" />
                          </div>
                          <div>
                            <div className="font-medium">Location Tracking Active</div>
                            <div className="text-sm text-muted-foreground">
                              The cafe can see your ETA and will time your order accordingly
                            </div>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  )}
                </div>
              )}
              
              {/* Ready Notification */}
              {order.status === 'ready' && (
                <Card className="bg-green-50 border-green-200">
                  <CardContent className="p-4">
                    <div className="flex items-center gap-3">
                      <CheckCircle className="h-8 w-8 text-green-600" />
                      <div>
                        <div className="font-medium text-green-800">Your order is ready!</div>
                        <div className="text-sm text-green-600">
                          Perfect timing! Your food is hot and ready for pickup.
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              )}
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}