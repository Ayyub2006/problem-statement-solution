"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { BookOpen, Menu, X, Wifi, WifiOff } from "lucide-react";
import { useState, useEffect } from "react";

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false);
  const [isOnline, setIsOnline] = useState(true);

  useEffect(() => {
    setIsOnline(navigator.onLine);
    
    const handleOnline = () => setIsOnline(true);
    const handleOffline = () => setIsOnline(false);
    
    window.addEventListener('online', handleOnline);
    window.addEventListener('offline', handleOffline);
    
    return () => {
      window.removeEventListener('online', handleOnline);
      window.removeEventListener('offline', handleOffline);
    };
  }, []);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <Link href="/" className="flex items-center gap-2">
            <BookOpen className="h-8 w-8 text-primary" />
            <span className="text-xl font-bold">EduBridge</span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-6">
            <Link href="/student" className="text-sm font-medium hover:text-primary transition-colors">
              Student Dashboard
            </Link>
            <Link href="/lesson" className="text-sm font-medium hover:text-primary transition-colors">
              Lessons
            </Link>
            <Link href="/teacher" className="text-sm font-medium hover:text-primary transition-colors">
              Teacher Portal
            </Link>
            <Link href="/community" className="text-sm font-medium hover:text-primary transition-colors">
              Community
            </Link>
            <div className="flex items-center gap-2 text-sm">
              {isOnline ? (
                <>
                  <Wifi className="h-4 w-4 text-green-500" />
                  <span className="text-muted-foreground">Online</span>
                </>
              ) : (
                <>
                  <WifiOff className="h-4 w-4 text-orange-500" />
                  <span className="text-muted-foreground">Offline Mode</span>
                </>
              )}
            </div>
            <Button>Get Started</Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-2"
          >
            {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden py-4 space-y-4">
            <Link href="/student" className="block text-sm font-medium hover:text-primary transition-colors">
              Student Dashboard
            </Link>
            <Link href="/lesson" className="block text-sm font-medium hover:text-primary transition-colors">
              Lessons
            </Link>
            <Link href="/teacher" className="block text-sm font-medium hover:text-primary transition-colors">
              Teacher Portal
            </Link>
            <Link href="/community" className="block text-sm font-medium hover:text-primary transition-colors">
              Community
            </Link>
            <div className="flex items-center gap-2 text-sm">
              {isOnline ? (
                <>
                  <Wifi className="h-4 w-4 text-green-500" />
                  <span>Online</span>
                </>
              ) : (
                <>
                  <WifiOff className="h-4 w-4 text-orange-500" />
                  <span>Offline Mode</span>
                </>
              )}
            </div>
            <Button className="w-full">Get Started</Button>
          </div>
        )}
      </div>
    </nav>
  );
}
