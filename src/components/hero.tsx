"use client";

import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Eye, Brain, Mic, BarChart3, Users, Shield } from "lucide-react";

export function Hero() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-blue-50 via-white to-cyan-50">
      <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>
      <div className="container mx-auto px-4 py-20 lg:py-32">
        <div className="text-center">
          <Badge variant="secondary" className="mb-6 text-sm font-medium">
            🚀 Revolutionary AI-Powered Eyecare Platform
          </Badge>
          
          <h1 className="mx-auto max-w-4xl text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl lg:text-7xl">
            The Future of{" "}
            <span className="bg-gradient-to-r from-blue-600 to-cyan-600 bg-clip-text text-transparent">
              Eyecare Management
            </span>{" "}
            is Here
          </h1>
          
          <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-gray-600">
            Transform your eyecare practice with AI-powered voice agents, predictive analytics, 
            and intelligent optical retail optimization. Built specifically for ophthalmologists and optometrists.
          </p>
          
          <div className="mt-10 flex flex-col gap-4 sm:flex-row sm:justify-center">
            <Button size="lg" className="bg-blue-600 hover:bg-blue-700">
              Start Free Trial
              <Eye className="ml-2 h-5 w-5" />
            </Button>
            <Button size="lg" variant="outline">
              Watch Demo
              <Mic className="ml-2 h-5 w-5" />
            </Button>
          </div>
        </div>
        
        {/* Feature Highlights */}
        <div className="mt-20 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
          <div className="rounded-lg bg-white p-6 shadow-sm border">
            <Brain className="h-8 w-8 text-blue-600 mb-4" />
            <h3 className="text-lg font-semibold">AI Vision Analysis</h3>
            <p className="text-gray-600">Predict disease progression and optimize treatment outcomes</p>
          </div>
          
          <div className="rounded-lg bg-white p-6 shadow-sm border">
            <Mic className="h-8 w-8 text-green-600 mb-4" />
            <h3 className="text-lg font-semibold">Voice AI Agents</h3>
            <p className="text-gray-600">Natural conversation for appointments and patient care</p>
          </div>
          
          <div className="rounded-lg bg-white p-6 shadow-sm border">
            <BarChart3 className="h-8 w-8 text-purple-600 mb-4" />
            <h3 className="text-lg font-semibold">Revenue Optimization</h3>
            <p className="text-gray-600">Increase optical capture rates by 25% with AI insights</p>
          </div>
          
          <div className="rounded-lg bg-white p-6 shadow-sm border">
            <Users className="h-8 w-8 text-orange-600 mb-4" />
            <h3 className="text-lg font-semibold">Smart Scheduling</h3>
            <p className="text-gray-600">Intelligent appointment management with equipment coordination</p>
          </div>
          
          <div className="rounded-lg bg-white p-6 shadow-sm border">
            <Eye className="h-8 w-8 text-red-600 mb-4" />
            <h3 className="text-lg font-semibold">Optical Retail AI</h3>
            <p className="text-gray-600">Frame selection and lens recommendations powered by AI</p>
          </div>
          
          <div className="rounded-lg bg-white p-6 shadow-sm border">
            <Shield className="h-8 w-8 text-indigo-600 mb-4" />
            <h3 className="text-lg font-semibold">HIPAA Compliant</h3>
            <p className="text-gray-600">Enterprise-grade security for patient data protection</p>
          </div>
        </div>
      </div>
    </section>
  );
}
