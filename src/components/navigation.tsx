"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { 
  LayoutDashboard, 
  Users, 
  Calendar, 
  Eye, 
  BarChart3, 
  Settings,
  Menu,
  X
} from "lucide-react";
import { useState } from "react";

const navigation = [
  { name: "Dashboard", href: "/dashboard", icon: LayoutDashboard, current: true },
  { name: "Patients", href: "/patients", icon: Users, current: false },
  { name: "Appointments", href: "/appointments", icon: Calendar, current: false },
  { name: "Optical", href: "/optical", icon: Eye, current: false },
  { name: "Analytics", href: "/analytics", icon: BarChart3, current: false },
  { name: "Settings", href: "/settings", icon: Settings, current: false },
];

export function Navigation() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <nav className="bg-white border-b border-gray-200">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-sm">N</span>
            </div>
            <span className="text-xl font-bold text-gray-900">Nucleus AI</span>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-1">
            {navigation.map((item) => (
              <Link key={item.name} href={item.href}>
                <Button
                  variant={item.current ? "default" : "ghost"}
                  className={`flex items-center space-x-2 ${
                    item.current 
                      ? "bg-blue-600 text-white hover:bg-blue-700" 
                      : "text-gray-600 hover:text-gray-900"
                  }`}
                >
                  <item.icon className="h-4 w-4" />
                  <span>{item.name}</span>
                </Button>
              </Link>
            ))}
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <Button
              variant="ghost"
              size="sm"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              {mobileMenuOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </Button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {mobileMenuOpen && (
          <div className="md:hidden border-t border-gray-200 py-4">
            <div className="space-y-1">
              {navigation.map((item) => (
                <Link key={item.name} href={item.href}>
                  <Button
                    variant={item.current ? "default" : "ghost"}
                    className={`w-full justify-start ${
                      item.current 
                        ? "bg-blue-600 text-white hover:bg-blue-700" 
                        : "text-gray-600 hover:text-gray-900"
                    }`}
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    <item.icon className="h-4 w-4 mr-2" />
                    <span>{item.name}</span>
                  </Button>
                </Link>
              ))}
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
