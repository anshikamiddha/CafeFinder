import { useState } from "react";
import React from "react";

import { Header } from "./components/header.jsx";
import { HeroSection } from "./components/hero-section.jsx";
import { FeaturesSection } from "./components/features-section.jsx";
import { HowItWorks } from "./components/how-it-works.jsx";
import { PopularCafes } from "./components/popular-cafes.jsx";
import { Testimonials } from "./components/testimonials.jsx";
import { CtaSection } from "./components/cta-section.jsx";
import { Footer } from "./components/footer.jsx";
import { CafeFinder } from "./components/cafe-finder.jsx";
import { CafeDetail } from "./components/cafe-detail.jsx";
import { OrderTracking } from "./components/order-tracking.jsx";
import { RestaurantDashboard } from "./components/restaurant-dashboard.jsx";
import { toast, Toaster } from "sonner";


export default function App() {
  const [currentView, setCurrentView] = useState('home');
  const [selectedCafe, setSelectedCafe] = useState(null);
  const [cartItems, setCartItems] = useState([]);
  const [orders, setOrders] = useState([
    {
      id: 'ord_123456',
      cafeName: 'The Modern Grind',
      items: [
        { name: 'Artisan Latte', quantity: 1, price: 4.50 },
        { name: 'Fresh Croissant', quantity: 1, price: 3.25 }
      ],
      total: 7.75,
      status: 'preparing',
      estimatedTime: 8,
      userETA: 10,
      cafeAddress: '123 Coffee St, New York, NY'
    }
  ]);

  const handleViewChange = (view) => {
    setCurrentView(view);
    if (view !== 'cafe-detail') {
      setSelectedCafe(null);
    }
  };

  const handleGetStarted = () => {
    setCurrentView('finder');
  };

  const handleSelectCafe = (cafe) => {
    setSelectedCafe(cafe);
    setCurrentView('cafe-detail');
  };

  const handleBackToFinder = () => {
    setCurrentView('finder');
    setSelectedCafe(null);
  };

  const handleAddToCart = (item, quantity) => {
    if (!selectedCafe) return;
    
    setCartItems(prev => [...prev, { 
      item, 
      quantity, 
      cafeId: selectedCafe.id 
    }]);
    
    toast.success(`Added ${quantity}x ${item.name} to cart`, {
      description: `$${(item.price * quantity).toFixed(2)}`
    });

    // Simulate creating an order
    const newOrder = {
      id: `ord_${Date.now()}`,
      cafeName: selectedCafe.name,
      items: [{ name: item.name, quantity, price: item.price }],
      total: item.price * quantity,
      status: 'placed',
      estimatedTime: 12,
      userETA: 15,
      cafeAddress: '123 Coffee St, New York, NY'
    };

    setTimeout(() => {
      setOrders(prev => [...prev, newOrder]);
      toast.success("Order placed successfully!", {
        description: "Track your order in the Orders tab"
      });
    }, 1000);
  };

  const handleLocationShare = (orderId) => {
    toast.success("Location sharing enabled", {
      description: "The cafe can now see your ETA for perfect timing"
    });
    
    // Update order status after sharing location
    setTimeout(() => {
      setOrders(prev => prev.map(order => 
        order.id === orderId 
          ? { ...order, status: 'preparing' }
          : order
      ));
      toast.info("Your order is being prepared", {
        description: "We'll notify you when it's ready"
      });
    }, 2000);
  };

  return (
    <div className="min-h-screen bg-background">
      <Header 
        currentView={currentView} 
        onViewChange={handleViewChange}
        cartItems={cartItems.length}
      />
      
      {currentView === 'home' && (
        <>
          <HeroSection onGetStarted={handleGetStarted} />
          <FeaturesSection />
          <HowItWorks />
          <PopularCafes onExploreMore={() => setCurrentView('finder')} />
          <Testimonials />
          <CtaSection onGetStarted={handleGetStarted} />
        </>
      )}
      
      {currentView === 'finder' && (
        <CafeFinder onSelectCafe={handleSelectCafe} />
      )}
      
      {currentView === 'cafe-detail' && selectedCafe && (
        <CafeDetail 
          cafe={selectedCafe}
          onBack={handleBackToFinder}
          onAddToCart={handleAddToCart}
        />
      )}
      
      {currentView === 'orders' && (
        <OrderTracking 
          orders={orders}
          onLocationShare={handleLocationShare}
        />
      )}
      
      {currentView === 'dashboard' && (
        <RestaurantDashboard />
      )}
      
      <Footer onViewChange={handleViewChange} />
    </div>
  );
}