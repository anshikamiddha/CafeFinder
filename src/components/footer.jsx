import { MapPin, Mail, Phone, Twitter, Instagram, Facebook, Github } from "lucide-react";
import { Button } from "./ui/button.jsx";
import { Input } from "./ui/input.jsx";
import { Separator } from "./ui/separator.jsx";
import React from "react";

export function Footer({ onViewChange }) {
  return (
    <footer className="bg-background border-t">
      <div className="container px-4 mx-auto">
        {/* Main Footer Content */}
        <div className="py-16">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Brand & Description */}
            <div className="space-y-4">
              <div className="flex items-center space-x-2">
                <div className="flex items-center justify-center w-8 h-8 bg-primary rounded-lg">
                  <MapPin className="h-5 w-5 text-primary-foreground" />
                </div>
                <span className="font-medium text-lg">CafeFinder</span>
              </div>
              <p className="text-muted-foreground leading-relaxed">
                Revolutionizing the cafe experience with smart timing technology. 
                Perfect coffee, perfectly timed, every time.
              </p>
              <div className="flex space-x-2">
                <Button variant="outline" size="icon">
                  <Twitter className="h-4 w-4" />
                </Button>
                <Button variant="outline" size="icon">
                  <Instagram className="h-4 w-4" />
                </Button>
                <Button variant="outline" size="icon">
                  <Facebook className="h-4 w-4" />
                </Button>
                <Button variant="outline" size="icon">
                  <Github className="h-4 w-4" />
                </Button>
              </div>
            </div>
            
            {/* Quick Links */}
            <div className="space-y-4">
              <h3 className="font-medium">Quick Links</h3>
              <div className="space-y-2">
                <button 
                  onClick={() => onViewChange('home')}
                  className="block text-muted-foreground hover:text-foreground transition-colors"
                >
                  Home
                </button>
                <button 
                  onClick={() => onViewChange('finder')}
                  className="block text-muted-foreground hover:text-foreground transition-colors"
                >
                  Find Cafes
                </button>
                <button 
                  onClick={() => onViewChange('orders')}
                  className="block text-muted-foreground hover:text-foreground transition-colors"
                >
                  Your Orders
                </button>
                <button 
                  onClick={() => onViewChange('dashboard')}
                  className="block text-muted-foreground hover:text-foreground transition-colors"
                >
                  Restaurant Dashboard
                </button>
              </div>
            </div>
            
            {/* Support */}
            <div className="space-y-4">
              <h3 className="font-medium">Support</h3>
              <div className="space-y-2">
                <a href="#" className="block text-muted-foreground hover:text-foreground transition-colors">
                  Help Center
                </a>
                <a href="#" className="block text-muted-foreground hover:text-foreground transition-colors">
                  Partner with Us
                </a>
                <a href="#" className="block text-muted-foreground hover:text-foreground transition-colors">
                  Privacy Policy
                </a>
                <a href="#" className="block text-muted-foreground hover:text-foreground transition-colors">
                  Terms of Service
                </a>
                <a href="#" className="block text-muted-foreground hover:text-foreground transition-colors">
                  Contact Us
                </a>
              </div>
            </div>
            
            {/* Newsletter */}
            <div className="space-y-4">
              <h3 className="font-medium">Stay Updated</h3>
              <p className="text-sm text-muted-foreground">
                Get the latest updates about new cafe partners and features.
              </p>
              <div className="space-y-2">
                <Input 
                  type="email" 
                  placeholder="Enter your email"
                  className="w-full"
                />
                <Button className="w-full">Subscribe</Button>
              </div>
              
              <div className="space-y-2 pt-4">
                <div className="flex items-center gap-2 text-sm text-muted-foreground">
                  <Mail className="h-4 w-4" />
                  <span>hello@cafefinder.com</span>
                </div>
                <div className="flex items-center gap-2 text-sm text-muted-foreground">
                  <Phone className="h-4 w-4" />
                  <span>+1 (555) 123-4567</span>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        <Separator />
        
        {/* Bottom Footer */}
        <div className="py-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <div className="text-sm text-muted-foreground">
              © 2025 CafeFinder. All rights reserved. Made with ❤️ for coffee lovers.
            </div>
            
            <div className="flex items-center gap-4 text-sm text-muted-foreground">
              <span>Available on:</span>
              <Button variant="outline" size="sm">
                iOS App Store
              </Button>
              <Button variant="outline" size="sm">
                Google Play
              </Button>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}