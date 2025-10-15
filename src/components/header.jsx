import { MapPin, User, ShoppingBag, Search } from "lucide-react";
import { Button } from "./ui/button.jsx";
import { Badge } from "./ui/badge.jsx";
import React from "react";

export function Header({ currentView, onViewChange, cartItems }) {
  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center">
        <div className="mr-4 hidden md:flex">
          <button 
            onClick={() => onViewChange('home')}
            className="mr-6 flex items-center space-x-2"
          >
            <div className="flex items-center justify-center w-8 h-8 bg-primary rounded-lg">
              <MapPin className="h-5 w-5 text-primary-foreground" />
            </div>
            <span className="font-medium">CafeFinder</span>
          </button>
        </div>
        
        <div className="flex flex-1 items-center justify-between space-x-2 md:justify-end">
          <div className="w-full flex-1 md:w-auto md:flex-none">
            <div className="relative">
              <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
              <input
                type="search"
                placeholder="Search cafes, food..."
                className="w-full rounded-md bg-muted px-8 py-2 text-sm placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring"
              />
            </div>
          </div>
          
          <nav className="flex items-center space-x-1">
            <Button
              variant={currentView === 'finder' ? 'default' : 'ghost'}
              size="sm"
              onClick={() => onViewChange('finder')}
            >
              <MapPin className="mr-1 h-4 w-4" />
              Find Cafes
            </Button>
            
            <Button
              variant={currentView === 'orders' ? 'default' : 'ghost'}
              size="sm"
              onClick={() => onViewChange('orders')}
              className="relative"
            >
              <ShoppingBag className="mr-1 h-4 w-4" />
              Orders
              {cartItems > 0 && (
                <Badge variant="destructive" className="absolute -top-1 -right-1 h-5 w-5 p-0 text-xs">
                  {cartItems}
                </Badge>
              )}
            </Button>
            
            <Button
              variant={currentView === 'dashboard' ? 'default' : 'ghost'}
              size="sm"
              onClick={() => onViewChange('dashboard')}
            >
              <User className="mr-1 h-4 w-4" />
              Dashboard
            </Button>
          </nav>
        </div>
      </div>
    </header>
  );
}