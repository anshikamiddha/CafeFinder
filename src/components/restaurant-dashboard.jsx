import { useState } from "react";
import React from "react";
import { Bell, MapPin, Clock, User, DollarSign, TrendingUp } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card.jsx";
import { Badge } from "./ui/badge.jsx";
import { Button } from "./ui/button.jsx";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "./ui/tabs.jsx";

export function RestaurantDashboard() {
  const [orders, setOrders] = useState([
    {
      id: 'ORD001',
      customerName: 'Sarah Chen',
      items: [
        { name: 'Artisan Latte', quantity: 2 },
        { name: 'Fresh Croissant', quantity: 1 }
      ],
      total: 12.25,
      status: 'new',
      orderTime: '2 min ago',
      customerETA: 8,
      distance: '0.5 mi',
      locationShared: true
    },
    {
      id: 'ORD002',
      customerName: 'Mike Johnson',
      items: [
        { name: 'Cappuccino', quantity: 1 },
        { name: 'Avocado Toast', quantity: 1 }
      ],
      total: 12.50,
      status: 'preparing',
      orderTime: '5 min ago',
      customerETA: 5,
      distance: '0.3 mi',
      locationShared: true
    },
    {
      id: 'ORD003',
      customerName: 'Emma Davis',
      items: [
        { name: 'Artisan Latte', quantity: 1 }
      ],
      total: 4.50,
      status: 'ready',
      orderTime: '12 min ago',
      customerETA: 2,
      distance: '0.1 mi',
      locationShared: false
    }
  ]);
  
  const updateOrderStatus = (orderId, newStatus) => {
    setOrders(prev => prev.map(order => 
      order.id === orderId ? { ...order, status: newStatus } : order
    ));
  };
  
  const getStatusColor = (status) => {
    switch (status) {
      case 'new':
        return 'bg-blue-100 text-blue-800';
      case 'preparing':
        return 'bg-orange-100 text-orange-800';
      case 'ready':
        return 'bg-green-100 text-green-800';
      default:
        return 'bg-gray-100 text-gray-800';
    }
  };
  
  const stats = {
    todayOrders: 47,
    todayRevenue: 642.50,
    avgOrderValue: 13.67,
    completionRate: 94
  };
  
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="flex items-center justify-between mb-8">
        <div>
          <h1>Restaurant Dashboard</h1>
          <p className="text-muted-foreground">Manage your orders and track customer arrivals</p>
        </div>
        <Button>
          <Bell className="mr-2 h-4 w-4" />
          Notifications
        </Button>
      </div>
      
      {/* Stats Overview */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
        <Card>
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-muted-foreground">Today's Orders</p>
                <p className="text-2xl font-bold">{stats.todayOrders}</p>
              </div>
              <TrendingUp className="h-8 w-8 text-muted-foreground" />
            </div>
          </CardContent>
        </Card>
        
        <Card>
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-muted-foreground">Revenue</p>
                <p className="text-2xl font-bold">${stats.todayRevenue.toFixed(2)}</p>
              </div>
              <DollarSign className="h-8 w-8 text-muted-foreground" />
            </div>
          </CardContent>
        </Card>
        
        <Card>
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-muted-foreground">Avg Order</p>
                <p className="text-2xl font-bold">${stats.avgOrderValue.toFixed(2)}</p>
              </div>
              <DollarSign className="h-8 w-8 text-muted-foreground" />
            </div>
          </CardContent>
        </Card>
        
        <Card>
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-muted-foreground">On Time</p>
                <p className="text-2xl font-bold">{stats.completionRate}%</p>
              </div>
              <Clock className="h-8 w-8 text-muted-foreground" />
            </div>
          </CardContent>
        </Card>
      </div>
      
      <Tabs defaultValue="active" className="space-y-6">
        <TabsList>
          <TabsTrigger value="active">Active Orders</TabsTrigger>
          <TabsTrigger value="history">Order History</TabsTrigger>
          <TabsTrigger value="analytics">Analytics</TabsTrigger>
        </TabsList>
        
        <TabsContent value="active" className="space-y-4">
          <div className="grid gap-4">
            {orders.map((order) => (
              <Card key={order.id}>
                <CardHeader>
                  <div className="flex items-center justify-between">
                    <CardTitle className="flex items-center gap-3">
                      <User className="h-5 w-5" />
                      <div>
                        <div>{order.customerName}</div>
                        <div className="text-sm font-normal text-muted-foreground">
                          Order #{order.id} • {order.orderTime}
                        </div>
                      </div>
                    </CardTitle>
                    <Badge className={getStatusColor(order.status)}>
                      {order.status.charAt(0).toUpperCase() + order.status.slice(1)}
                    </Badge>
                  </div>
                </CardHeader>
                
                <CardContent className="space-y-4">
                  {/* Order Items */}
                  <div>
                    <div className="font-medium mb-2">Items:</div>
                    <div className="space-y-1">
                      {order.items.map((item, index) => (
                        <div key={index} className="text-sm text-muted-foreground">
                          {item.quantity}x {item.name}
                        </div>
                      ))}
                    </div>
                    <div className="font-medium mt-2">Total: ${order.total.toFixed(2)}</div>
                  </div>
                  
                  {/* Customer Location */}
                  <div className="flex items-center justify-between p-3 bg-muted/50 rounded-lg">
                    <div className="flex items-center gap-3">
                      <MapPin className="h-5 w-5 text-muted-foreground" />
                      <div>
                        <div className="font-medium">Customer Location</div>
                        <div className="text-sm text-muted-foreground">
                          {order.distance} away • ETA: {order.customerETA} min
                        </div>
                      </div>
                    </div>
                    
                    <Badge variant={order.locationShared ? "default" : "secondary"}>
                      {order.locationShared ? "Live Location" : "No Location"}
                    </Badge>
                  </div>
                  
                  {/* Timing Recommendation */}
                  {order.status === 'new' && (
                    <div className="p-3 bg-blue-50 border border-blue-200 rounded-lg">
                      <div className="flex items-center gap-2 text-blue-800">
                        <Clock className="h-4 w-4" />
                        <div className="text-sm">
                          <strong>Timing Suggestion:</strong> Start preparing now for perfect timing with customer arrival
                        </div>
                      </div>
                    </div>
                  )}
                  
                  {order.status === 'preparing' && order.customerETA <= 3 && (
                    <div className="p-3 bg-green-50 border border-green-200 rounded-lg">
                      <div className="flex items-center gap-2 text-green-800">
                        <Clock className="h-4 w-4" />
                        <div className="text-sm">
                          <strong>Customer Arriving Soon!</strong> They'll be here in {order.customerETA} minutes
                        </div>
                      </div>
                    </div>
                  )}
                  
                  {/* Action Buttons */}
                  <div className="flex gap-2">
                    {order.status === 'new' && (
                      <Button 
                        onClick={() => updateOrderStatus(order.id, 'preparing')}
                        className="flex-1"
                      >
                        Start Preparing
                      </Button>
                    )}
                    
                    {order.status === 'preparing' && (
                      <Button 
                        onClick={() => updateOrderStatus(order.id, 'ready')}
                        className="flex-1"
                      >
                        Mark Ready
                      </Button>
                    )}
                    
                    {order.status === 'ready' && (
                      <div className="flex-1 text-center py-2 text-green-600 font-medium">
                        Ready for Pickup
                      </div>
                    )}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </TabsContent>
        
        <TabsContent value="history">
          <Card>
            <CardContent className="p-6">
              <div className="text-center py-8">
                <Clock className="h-12 w-12 text-muted-foreground mx-auto mb-4" />
                <h3>Order History</h3>
                <p className="text-muted-foreground">View and analyze past orders</p>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
        
        <TabsContent value="analytics">
          <Card>
            <CardContent className="p-6">
              <div className="text-center py-8">
                <TrendingUp className="h-12 w-12 text-muted-foreground mx-auto mb-4" />
                <h3>Analytics Dashboard</h3>
                <p className="text-muted-foreground">Detailed insights and performance metrics</p>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
}