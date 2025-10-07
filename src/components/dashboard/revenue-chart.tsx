"use client";

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { TrendingUp, BarChart3, LineChart, PieChart, Activity, Zap, Target, DollarSign } from "lucide-react";
import { useState } from "react";

// Enhanced mock data with multiple metrics
const revenueData = [
  { 
    time: "8:00", 
    revenue: 1200, 
    patients: 8, 
    appointments: 12, 
    optical: 320, 
    consultations: 4,
    efficiency: 85,
    satisfaction: 4.2
  },
  { 
    time: "9:00", 
    revenue: 1800, 
    patients: 12, 
    appointments: 15, 
    optical: 480, 
    consultations: 6,
    efficiency: 92,
    satisfaction: 4.5
  },
  { 
    time: "10:00", 
    revenue: 2200, 
    patients: 15, 
    appointments: 18, 
    optical: 650, 
    consultations: 8,
    efficiency: 88,
    satisfaction: 4.7
  },
  { 
    time: "11:00", 
    revenue: 1900, 
    patients: 13, 
    appointments: 16, 
    optical: 520, 
    consultations: 7,
    efficiency: 90,
    satisfaction: 4.4
  },
  { 
    time: "12:00", 
    revenue: 1500, 
    patients: 10, 
    appointments: 12, 
    optical: 380, 
    consultations: 5,
    efficiency: 82,
    satisfaction: 4.1
  },
  { 
    time: "13:00", 
    revenue: 2100, 
    patients: 14, 
    appointments: 17, 
    optical: 580, 
    consultations: 7,
    efficiency: 94,
    satisfaction: 4.6
  },
  { 
    time: "14:00", 
    revenue: 2800, 
    patients: 18, 
    appointments: 22, 
    optical: 750, 
    consultations: 9,
    efficiency: 96,
    satisfaction: 4.8
  },
  { 
    time: "15:00", 
    revenue: 2400, 
    patients: 16, 
    appointments: 19, 
    optical: 680, 
    consultations: 8,
    efficiency: 89,
    satisfaction: 4.5
  },
  { 
    time: "16:00", 
    revenue: 2600, 
    patients: 17, 
    appointments: 20, 
    optical: 720, 
    consultations: 8,
    efficiency: 91,
    satisfaction: 4.7
  },
  { 
    time: "17:00", 
    revenue: 3200, 
    patients: 20, 
    appointments: 24, 
    optical: 890, 
    consultations: 10,
    efficiency: 98,
    satisfaction: 4.9
  }
];

const maxRevenue = Math.max(...revenueData.map(d => d.revenue));
const totalRevenue = revenueData.reduce((sum, d) => sum + d.revenue, 0);
const avgRevenue = totalRevenue / revenueData.length;

export function RevenueChart() {
  const [activeView, setActiveView] = useState<'bars' | 'line' | 'mixed' | 'circles'>('mixed');
  const [hoveredHour, setHoveredHour] = useState<number | null>(null);

  const getBarHeight = (value: number, max: number) => {
    return Math.max((value / max) * 100, 8);
  };

  const getCircleSize = (value: number, max: number) => {
    return Math.max((value / max) * 40 + 20, 15);
  };

  const getGradientColor = (efficiency: number) => {
    if (efficiency >= 95) return 'from-green-500 to-emerald-400';
    if (efficiency >= 90) return 'from-blue-500 to-cyan-400';
    if (efficiency >= 85) return 'from-yellow-500 to-orange-400';
    return 'from-red-500 to-pink-400';
  };

  const getSatisfactionColor = (rating: number) => {
    if (rating >= 4.7) return 'text-green-600';
    if (rating >= 4.4) return 'text-blue-600';
    if (rating >= 4.1) return 'text-yellow-600';
    return 'text-red-600';
  };

  return (
    <Card className="hover:shadow-lg transition-shadow duration-300">
      <CardHeader>
        <div className="flex items-center justify-between">
          <div>
            <CardTitle className="text-xl font-semibold flex items-center gap-2">
              <BarChart3 className="h-5 w-5 text-blue-600" />
              Dynamic Revenue Analytics
            </CardTitle>
            <CardDescription>
              Multi-dimensional revenue performance with AI insights
            </CardDescription>
          </div>
          <div className="flex items-center gap-2">
          <Badge variant="outline" className="text-green-600 border-green-200">
            <TrendingUp className="h-3 w-3 mr-1" />
            +18% vs yesterday
          </Badge>
            <Badge variant="secondary" className="text-purple-600">
              <Zap className="h-3 w-3 mr-1" />
              AI Enhanced
            </Badge>
          </div>
        </div>
        
        {/* View Toggle Buttons */}
        <div className="flex gap-2 mt-4">
          <Button
            variant={activeView === 'bars' ? 'default' : 'outline'}
            size="sm"
            onClick={() => setActiveView('bars')}
          >
            <BarChart3 className="h-4 w-4 mr-1" />
            Bars
          </Button>
          <Button
            variant={activeView === 'line' ? 'default' : 'outline'}
            size="sm"
            onClick={() => setActiveView('line')}
          >
            <LineChart className="h-4 w-4 mr-1" />
            Line
          </Button>
          <Button
            variant={activeView === 'mixed' ? 'default' : 'outline'}
            size="sm"
            onClick={() => setActiveView('mixed')}
          >
            <Activity className="h-4 w-4 mr-1" />
            Mixed
          </Button>
          <Button
            variant={activeView === 'circles' ? 'default' : 'outline'}
            size="sm"
            onClick={() => setActiveView('circles')}
          >
            <Target className="h-4 w-4 mr-1" />
            Circles
          </Button>
        </div>
      </CardHeader>
      
      <CardContent>
        <div className="h-80 relative">
          {/* Main Chart Area */}
          <div className="h-full flex items-end justify-between gap-1 px-2">
            {revenueData.map((data, index) => {
              const isHovered = hoveredHour === index;
              const barHeight = getBarHeight(data.revenue, maxRevenue);
              const circleSize = getCircleSize(data.revenue, maxRevenue);
              const gradientColor = getGradientColor(data.efficiency);
              const satisfactionColor = getSatisfactionColor(data.satisfaction);

              return (
                <div 
                  key={index} 
                  className="flex flex-col items-center flex-1 group relative"
                  onMouseEnter={() => setHoveredHour(index)}
                  onMouseLeave={() => setHoveredHour(null)}
                >
                  {/* Chart Elements Based on Active View */}
                  <div className="relative w-full flex justify-center items-end h-full">
                    
                    {/* Professional Bar Chart */}
                    {(activeView === 'bars' || activeView === 'mixed') && (
                      <div className="w-full flex flex-col items-center space-y-2">
                        {/* Main Revenue Bar with Professional Design */}
                        <div className="w-full relative group">
                          <div 
                            className={`w-full bg-gradient-to-t ${gradientColor} rounded-t-lg transition-all duration-700 hover:shadow-2xl cursor-pointer min-h-[16px] relative overflow-hidden`}
                            style={{ height: `${barHeight}%` }}
                            title={`Revenue: $${data.revenue.toLocaleString()}`}
                          >
                            {/* Professional inner highlight */}
                            <div className="absolute inset-x-0 top-0 h-1/2 bg-gradient-to-b from-white/40 to-transparent rounded-t-lg"></div>
                            
                            {/* Revenue amount overlay with professional styling */}
                            <div className="absolute inset-0 flex items-center justify-center">
                              <span className="text-sm font-bold text-white drop-shadow-lg opacity-0 group-hover:opacity-100 transition-all duration-500 transform group-hover:scale-110">
                                ${Math.round(data.revenue / 100)}
                              </span>
                            </div>
                            
                            {/* Professional Efficiency Indicator */}
                            <div className="absolute -top-3 -right-3 w-5 h-5 bg-white rounded-full border-3 border-gray-200 flex items-center justify-center shadow-xl">
                              <div className={`w-2.5 h-2.5 rounded-full ${
                                data.efficiency >= 95 ? 'bg-green-500' : 
                                data.efficiency >= 90 ? 'bg-blue-500' : 
                                data.efficiency >= 85 ? 'bg-yellow-500' : 'bg-red-500'
                              }`}></div>
                            </div>
                            
                            {/* Animated efficiency progress bar */}
                            <div 
                              className={`absolute bottom-0 left-0 h-1.5 bg-white/60 rounded-full transition-all duration-1500 ${
                                data.efficiency >= 95 ? 'w-full' : 
                                data.efficiency >= 90 ? 'w-4/5' : 
                                data.efficiency >= 85 ? 'w-3/5' : 'w-2/5'
                              }`}
                            ></div>
                            
                            {/* Professional glow effect */}
                            <div className={`absolute inset-0 rounded-t-lg opacity-0 group-hover:opacity-30 transition-opacity duration-500 ${
                              data.efficiency >= 95 ? 'bg-green-400' : 
                              data.efficiency >= 90 ? 'bg-blue-400' : 
                              data.efficiency >= 85 ? 'bg-yellow-400' : 'bg-red-400'
                            }`}></div>
                          </div>
                          
                          {/* Professional revenue value display */}
                          <div className="absolute -bottom-8 left-1/2 transform -translate-x-1/2 text-sm font-bold text-gray-800 opacity-0 group-hover:opacity-100 transition-all duration-500 bg-white px-2 py-1 rounded-lg shadow-lg border">
                            ${data.revenue.toLocaleString()}
                          </div>
                        </div>
                        
                        {/* Patient Count Mini Bar with Professional Design */}
                        {activeView === 'mixed' && (
                          <div className="w-full flex justify-center">
                            <div 
                              className="w-2/3 bg-gradient-to-t from-purple-600 to-purple-500 rounded-t-lg mt-2 opacity-90 hover:opacity-100 transition-all duration-500 relative group shadow-lg"
                              style={{ height: `${getBarHeight(data.patients, 20)}%` }}
                              title={`Patients: ${data.patients}`}
                            >
                              <div className="absolute inset-x-0 top-0 h-1/2 bg-gradient-to-b from-white/30 to-transparent rounded-t-lg"></div>
                              <div className="absolute inset-0 flex items-center justify-center">
                                <span className="text-sm font-bold text-white drop-shadow opacity-0 group-hover:opacity-100 transition-all duration-500 transform group-hover:scale-110">
                                  {data.patients}
                                </span>
                              </div>
                              {/* Patient count indicator */}
                              <div className="absolute -top-2 -right-2 w-3 h-3 bg-purple-300 rounded-full border border-white"></div>
                            </div>
                          </div>
                        )}
                        
                        {/* Professional Additional Metrics for Bars View */}
                        {activeView === 'bars' && (
                          <div className="w-full space-y-2 mt-3">
                            {/* Efficiency Progress Bar */}
                            <div className="relative">
                              <div className="flex items-center justify-between mb-1">
                                <span className="text-xs font-semibold text-gray-600">Efficiency</span>
                                <span className="text-xs font-bold text-gray-800">{data.efficiency}%</span>
                              </div>
                              <div className="w-full bg-gray-200 rounded-full h-2 overflow-hidden shadow-inner">
                                <div 
                                  className={`h-full transition-all duration-1500 rounded-full ${
                                    data.efficiency >= 95 ? 'bg-gradient-to-r from-green-500 to-green-400' : 
                                    data.efficiency >= 90 ? 'bg-gradient-to-r from-blue-500 to-blue-400' : 
                                    data.efficiency >= 85 ? 'bg-gradient-to-r from-yellow-500 to-yellow-400' : 'bg-gradient-to-r from-red-500 to-red-400'
                                  }`}
                                  style={{ width: `${data.efficiency}%` }}
                                ></div>
                              </div>
                            </div>
                            
                            {/* Satisfaction Progress Bar */}
                            <div className="relative">
                              <div className="flex items-center justify-between mb-1">
                                <span className="text-xs font-semibold text-gray-600">Satisfaction</span>
                                <span className="text-xs font-bold text-gray-800">{data.satisfaction}/5</span>
                              </div>
                              <div className="w-full bg-gray-200 rounded-full h-2 overflow-hidden shadow-inner">
                                <div 
                                  className="h-full bg-gradient-to-r from-yellow-500 to-yellow-400 transition-all duration-1500 rounded-full"
                                  style={{ width: `${(data.satisfaction / 5) * 100}%` }}
                                ></div>
                              </div>
                            </div>
                            
                            {/* Patient Count Progress Bar */}
                            <div className="relative">
                              <div className="flex items-center justify-between mb-1">
                                <span className="text-xs font-semibold text-gray-600">Patients</span>
                                <span className="text-xs font-bold text-gray-800">{data.patients}</span>
                              </div>
                              <div className="w-full bg-gray-200 rounded-full h-2 overflow-hidden shadow-inner">
                                <div 
                                  className="h-full bg-gradient-to-r from-purple-500 to-purple-400 transition-all duration-1500 rounded-full"
                                  style={{ width: `${(data.patients / 20) * 100}%` }}
                                ></div>
                              </div>
                            </div>
                          </div>
                        )}
                      </div>
                    )}

                    {/* Professional Line Chart Points */}
                    {(activeView === 'line' || activeView === 'mixed') && (
                      <div className="absolute inset-0 flex items-end justify-center">
                        <div 
                          className={`w-6 h-6 rounded-full border-4 border-white shadow-2xl transition-all duration-500 ${isHovered ? 'scale-150' : 'scale-100'} relative group cursor-pointer`}
                          style={{ 
                            backgroundColor: `hsl(${120 + (data.efficiency - 85) * 2}, 70%, 50%)`,
                            bottom: `${barHeight}%`
                          }}
                          title={`Revenue: $${data.revenue.toLocaleString()}, Efficiency: ${data.efficiency}%`}
                        >
                          {/* Professional inner glow effect */}
                          <div className="absolute inset-1 rounded-full bg-white/40"></div>
                          
                          {/* Professional center dot */}
                          <div className="absolute inset-0 flex items-center justify-center">
                            <div className="w-2 h-2 bg-white rounded-full shadow-lg"></div>
                          </div>
                          
                          {/* Professional hover indicator */}
                          <div className={`absolute -top-12 left-1/2 transform -translate-x-1/2 bg-gray-900 text-white px-3 py-2 rounded-lg text-sm font-bold opacity-0 group-hover:opacity-100 transition-all duration-500 whitespace-nowrap shadow-xl border-2 border-white/20`}>
                            ${data.revenue.toLocaleString()}
                            <div className="absolute top-full left-1/2 transform -translate-x-1/2 w-0 h-0 border-l-4 border-r-4 border-t-4 border-transparent border-t-gray-900"></div>
                          </div>
                          
                          {/* Professional animated pulse rings */}
                          <div 
                            className={`absolute inset-0 rounded-full border-2 animate-ping ${
                              data.efficiency >= 95 ? 'border-green-400' : 
                              data.efficiency >= 90 ? 'border-blue-400' : 
                              data.efficiency >= 85 ? 'border-yellow-400' : 'border-red-400'
                            }`}
                            style={{ 
                              width: '24px', 
                              height: '24px',
                              top: '-3px',
                              left: '-3px'
                            }}
                          ></div>
                          
                          {/* Secondary pulse ring */}
                          <div 
                            className={`absolute inset-0 rounded-full border animate-ping ${
                              data.efficiency >= 95 ? 'border-green-300' : 
                              data.efficiency >= 90 ? 'border-blue-300' : 
                              data.efficiency >= 85 ? 'border-yellow-300' : 'border-red-300'
                            }`}
                            style={{ 
                              width: '32px', 
                              height: '32px',
                              top: '-7px',
                              left: '-7px',
                              animationDelay: '0.5s'
                            }}
                          ></div>
                          
                          {/* Efficiency indicator */}
                          <div className={`absolute -top-2 -right-2 w-4 h-4 rounded-full border-2 border-white shadow-lg ${
                            data.efficiency >= 95 ? 'bg-green-500' : 
                            data.efficiency >= 90 ? 'bg-blue-500' : 
                            data.efficiency >= 85 ? 'bg-yellow-500' : 'bg-red-500'
                          }`}>
                            <div className="absolute inset-0 flex items-center justify-center">
                              <span className="text-xs font-bold text-white">{data.efficiency}%</span>
                            </div>
                          </div>
                        </div>
                      </div>
                    )}

                    {/* Circle Chart */}
                    {activeView === 'circles' && (
                      <div className="flex flex-col items-center space-y-3">
                        {/* Main Revenue Circle with Enhanced Design */}
                        <div className="relative">
                          <div 
                            className={`rounded-full bg-gradient-to-br ${gradientColor} shadow-xl transition-all duration-500 hover:scale-110 cursor-pointer flex items-center justify-center text-white font-bold text-sm relative overflow-hidden`}
                            style={{ 
                              width: `${circleSize}px`, 
                              height: `${circleSize}px` 
                            }}
                            title={`Revenue: $${data.revenue.toLocaleString()}`}
                          >
                            {/* Inner glow effect */}
                            <div className="absolute inset-1 rounded-full bg-white/20"></div>
                            <div className="relative z-10">
                              ${Math.round(data.revenue / 100)}
                            </div>
                            {/* Efficiency indicator dot */}
                            <div className={`absolute -top-1 -right-1 w-3 h-3 rounded-full border-2 border-white ${
                              data.efficiency >= 95 ? 'bg-green-500' : 
                              data.efficiency >= 90 ? 'bg-blue-500' : 
                              data.efficiency >= 85 ? 'bg-yellow-500' : 'bg-red-500'
                            }`}></div>
                          </div>
                          
                          {/* Animated pulse ring */}
                          <div 
                            className={`absolute inset-0 rounded-full border-2 animate-ping ${
                              data.efficiency >= 95 ? 'border-green-400' : 
                              data.efficiency >= 90 ? 'border-blue-400' : 
                              data.efficiency >= 85 ? 'border-yellow-400' : 'border-red-400'
                            }`}
                            style={{ 
                              width: `${circleSize + 8}px`, 
                              height: `${circleSize + 8}px`,
                              top: '-4px',
                              left: '-4px'
                            }}
                          ></div>
                        </div>
                        
                        {/* Enhanced Efficiency Ring with Progress */}
                        <div className="relative">
                          <div className="w-8 h-8 relative">
                            {/* Background circle */}
                            <div className="w-8 h-8 rounded-full bg-gray-200 absolute"></div>
                            {/* Progress circle */}
                            <div 
                              className={`w-8 h-8 rounded-full transition-all duration-500 ${
                                data.efficiency >= 95 ? 'bg-green-500' : 
                                data.efficiency >= 90 ? 'bg-blue-500' : 
                                data.efficiency >= 85 ? 'bg-yellow-500' : 'bg-red-500'
                              }`}
                              style={{
                                background: `conic-gradient(${
                                  data.efficiency >= 95 ? '#10b981' : 
                                  data.efficiency >= 90 ? '#3b82f6' : 
                                  data.efficiency >= 85 ? '#f59e0b' : '#ef4444'
                                } 0deg, ${
                                  data.efficiency >= 95 ? '#10b981' : 
                                  data.efficiency >= 90 ? '#3b82f6' : 
                                  data.efficiency >= 85 ? '#f59e0b' : '#ef4444'
                                } ${(data.efficiency / 100) * 360}deg, #e5e7eb ${(data.efficiency / 100) * 360}deg)`
                              }}
                            ></div>
                            {/* Center text */}
                            <div className="absolute inset-0 flex items-center justify-center">
                              <span className="text-xs font-bold text-gray-700">{data.efficiency}%</span>
                            </div>
                          </div>
                        </div>

                        {/* Patient Count Indicator */}
                        <div className="flex items-center space-x-1">
                          <div className="w-2 h-2 bg-purple-500 rounded-full"></div>
                          <span className="text-xs text-gray-600 font-medium">{data.patients}</span>
            </div>

                        {/* Satisfaction Rating */}
                        <div className="flex items-center space-x-1">
                          <div className="flex">
                            {[1, 2, 3, 4, 5].map((star) => (
                              <div
                                key={star}
                                className={`w-1.5 h-1.5 rounded-full ${
                                  star <= Math.floor(data.satisfaction) 
                                    ? 'bg-yellow-400' 
                                    : 'bg-gray-300'
                                }`}
                              ></div>
                            ))}
                          </div>
                          <span className="text-xs text-gray-600">{data.satisfaction}</span>
                        </div>
                      </div>
                    )}
                  </div>

                  {/* Time Labels */}
                  <span className={`text-xs mt-2 transition-colors ${isHovered ? 'text-gray-900 font-semibold' : 'text-gray-600'}`}>
                    {data.time}
                  </span>
                  
                  {/* Hover Details */}
                  {isHovered && (
                    <div className="absolute -top-32 left-1/2 transform -translate-x-1/2 bg-gray-900 text-white p-3 rounded-lg shadow-xl z-10 min-w-[200px]">
                      <div className="text-center">
                        <div className="font-semibold text-sm mb-2">{data.time} Details</div>
                        <div className="space-y-1 text-xs">
                          <div className="flex justify-between">
                            <span>Revenue:</span>
                            <span className="font-semibold">${data.revenue.toLocaleString()}</span>
                          </div>
                          <div className="flex justify-between">
                            <span>Patients:</span>
                            <span>{data.patients}</span>
                          </div>
                          <div className="flex justify-between">
                            <span>Appointments:</span>
                            <span>{data.appointments}</span>
                          </div>
                          <div className="flex justify-between">
                            <span>Optical:</span>
                            <span>${data.optical}</span>
                          </div>
                          <div className="flex justify-between">
                            <span>Efficiency:</span>
                            <span className={data.efficiency >= 95 ? 'text-green-400' : data.efficiency >= 90 ? 'text-blue-400' : data.efficiency >= 85 ? 'text-yellow-400' : 'text-red-400'}>{data.efficiency}%</span>
                          </div>
                          <div className="flex justify-between">
                            <span>Satisfaction:</span>
                            <span className={satisfactionColor}>{data.satisfaction}/5</span>
                          </div>
                        </div>
                      </div>
                      {/* Arrow */}
                      <div className="absolute top-full left-1/2 transform -translate-x-1/2 w-0 h-0 border-l-4 border-r-4 border-t-4 border-transparent border-t-gray-900"></div>
                    </div>
                  )}
                </div>
              );
            })}
          </div>

          {/* Professional Connecting Lines for Line Chart */}
          {(activeView === 'line' || activeView === 'circles') && (
            <svg className="absolute inset-0 w-full h-full pointer-events-none">
              {/* Professional SVG definitions */}
              <defs>
                <linearGradient id="mainGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                  <stop offset="0%" stopColor="#3b82f6" />
                  <stop offset="20%" stopColor="#8b5cf6" />
                  <stop offset="40%" stopColor="#ec4899" />
                  <stop offset="60%" stopColor="#f59e0b" />
                  <stop offset="80%" stopColor="#10b981" />
                  <stop offset="100%" stopColor="#06b6d4" />
                </linearGradient>
                <linearGradient id="shadowGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                  <stop offset="0%" stopColor="#1e40af" stopOpacity="0.4" />
                  <stop offset="50%" stopColor="#7c3aed" stopOpacity="0.3" />
                  <stop offset="100%" stopColor="#059669" stopOpacity="0.4" />
                </linearGradient>
                <linearGradient id="glowGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                  <stop offset="0%" stopColor="#60a5fa" stopOpacity="0.8" />
                  <stop offset="50%" stopColor="#a78bfa" stopOpacity="0.6" />
                  <stop offset="100%" stopColor="#34d399" stopOpacity="0.8" />
                </linearGradient>
                <filter id="glow">
                  <feGaussianBlur stdDeviation="4" result="coloredBlur"/>
                  <feMerge> 
                    <feMergeNode in="coloredBlur"/>
                    <feMergeNode in="SourceGraphic"/>
                  </feMerge>
                </filter>
                <filter id="strongGlow">
                  <feGaussianBlur stdDeviation="6" result="coloredBlur"/>
                  <feMerge> 
                    <feMergeNode in="coloredBlur"/>
                    <feMergeNode in="SourceGraphic"/>
                  </feMerge>
                </filter>
              </defs>
              
              {/* Professional grid lines */}
              {[0, 20, 40, 60, 80, 100].map((percent) => (
                <line
                  key={percent}
                  x1="0%"
                  y1={`${percent}%`}
                  x2="100%"
                  y2={`${percent}%`}
                  stroke="#f3f4f6"
                  strokeWidth="1"
                  strokeDasharray="3,3"
                  opacity="0.6"
                />
              ))}
              
              {/* Vertical grid lines */}
              {revenueData.map((_, index) => (
                <line
                  key={`v-${index}`}
                  x1={`${(index / (revenueData.length - 1)) * 100}%`}
                  y1="0%"
                  x2={`${(index / (revenueData.length - 1)) * 100}%`}
                  y2="100%"
                  stroke="#f3f4f6"
                  strokeWidth="1"
                  strokeDasharray="2,2"
                  opacity="0.4"
                />
              ))}
              
              {/* Professional trend line with multiple layers */}
              <path
                d={`M ${revenueData.map((data, index) => {
                  const height = getBarHeight(data.revenue, maxRevenue);
                  const x = (index / (revenueData.length - 1)) * 100;
                  const y = 100 - height;
                  return `${x}% ${y}%`;
                }).join(' L ')}`}
                stroke="url(#shadowGradient)"
                strokeWidth="8"
                fill="none"
                opacity="0.2"
              />
              
              <path
                d={`M ${revenueData.map((data, index) => {
                  const height = getBarHeight(data.revenue, maxRevenue);
                  const x = (index / (revenueData.length - 1)) * 100;
                  const y = 100 - height;
                  return `${x}% ${y}%`;
                }).join(' L ')}`}
                stroke="url(#glowGradient)"
                strokeWidth="6"
                fill="none"
                filter="url(#strongGlow)"
                opacity="0.7"
              />
              
              <path
                d={`M ${revenueData.map((data, index) => {
                  const height = getBarHeight(data.revenue, maxRevenue);
                  const x = (index / (revenueData.length - 1)) * 100;
                  const y = 100 - height;
                  return `${x}% ${y}%`;
                }).join(' L ')}`}
                stroke="url(#mainGradient)"
                strokeWidth="5"
                fill="none"
                filter="url(#glow)"
                className="animate-pulse"
              />
              
              {/* Professional data point connections */}
              {revenueData.slice(0, -1).map((data, index) => {
                const currentHeight = getBarHeight(data.revenue, maxRevenue);
                const nextHeight = getBarHeight(revenueData[index + 1].revenue, maxRevenue);
                const x1 = (index / (revenueData.length - 1)) * 100;
                const x2 = ((index + 1) / (revenueData.length - 1)) * 100;
                const y1 = 100 - currentHeight;
                const y2 = 100 - nextHeight;
                
                return (
                  <g key={index}>
                    {/* Professional connection line */}
                    <line
                      x1={`${x1}%`}
                      y1={`${y1}%`}
                      x2={`${x2}%`}
                      y2={`${y2}%`}
                      stroke="url(#mainGradient)"
                      strokeWidth="3"
                      opacity="0.9"
                      strokeDasharray="5,5"
                      className="animate-pulse"
                    />
                    
                    {/* Professional animated dots */}
                    <circle
                      cx={`${(x1 + x2) / 2}%`}
                      cy={`${(y1 + y2) / 2}%`}
                      r="3"
                      fill="white"
                      stroke="url(#mainGradient)"
                      strokeWidth="2"
                      className="animate-ping"
                      opacity="0.8"
                    />
                    
                    {/* Secondary animated dot */}
                    <circle
                      cx={`${(x1 + x2) / 2}%`}
                      cy={`${(y1 + y2) / 2}%`}
                      r="5"
                      fill="none"
                      stroke="url(#mainGradient)"
                      strokeWidth="1"
                      className="animate-ping"
                      opacity="0.4"
                      style={{ animationDelay: '0.5s' }}
                    />
                  </g>
                );
              })}
            </svg>
          )}
        </div>

        {/* Enhanced Summary Statistics */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-6">
          <div className="text-center p-4 bg-gradient-to-br from-blue-50 to-blue-100 rounded-xl border border-blue-200 hover:shadow-lg transition-all duration-300 group">
            <div className="flex items-center justify-center mb-2">
              <DollarSign className="h-5 w-5 text-blue-600 mr-2" />
              <span className="text-sm font-semibold text-blue-800">Total Revenue</span>
            </div>
            <div className="text-3xl font-bold text-blue-600 mb-1">${totalRevenue.toLocaleString()}</div>
            <div className="text-xs text-blue-600 bg-blue-200 px-2 py-1 rounded-full inline-block">
              +18% vs yesterday
            </div>
          </div>
          
          <div className="text-center p-4 bg-gradient-to-br from-green-50 to-green-100 rounded-xl border border-green-200 hover:shadow-lg transition-all duration-300 group">
            <div className="flex items-center justify-center mb-2">
              <TrendingUp className="h-5 w-5 text-green-600 mr-2" />
              <span className="text-sm font-semibold text-green-800">Average/Hour</span>
            </div>
            <div className="text-3xl font-bold text-green-600 mb-1">${avgRevenue.toLocaleString()}</div>
            <div className="text-xs text-green-600 bg-green-200 px-2 py-1 rounded-full inline-block">
              +12% vs target
            </div>
          </div>
          
          <div className="text-center p-4 bg-gradient-to-br from-purple-50 to-purple-100 rounded-xl border border-purple-200 hover:shadow-lg transition-all duration-300 group">
            <div className="flex items-center justify-center mb-2">
              <Target className="h-5 w-5 text-purple-600 mr-2" />
              <span className="text-sm font-semibold text-purple-800">Peak Revenue</span>
            </div>
            <div className="text-3xl font-bold text-purple-600 mb-1">${maxRevenue.toLocaleString()}</div>
            <div className="text-xs text-purple-600 bg-purple-200 px-2 py-1 rounded-full inline-block">
              At 5:00 PM
            </div>
          </div>
          
          <div className="text-center p-4 bg-gradient-to-br from-orange-50 to-orange-100 rounded-xl border border-orange-200 hover:shadow-lg transition-all duration-300 group">
            <div className="flex items-center justify-center mb-2">
              <Activity className="h-5 w-5 text-orange-600 mr-2" />
              <span className="text-sm font-semibold text-orange-800">Avg Efficiency</span>
            </div>
            <div className="text-3xl font-bold text-orange-600 mb-1">92%</div>
            <div className="text-xs text-orange-600 bg-orange-200 px-2 py-1 rounded-full inline-block">
              +3% vs target
            </div>
          </div>
        </div>

        {/* Performance Indicators */}
        <div className="mt-4 flex items-center justify-between text-sm">
          <div className="flex items-center gap-4">
            <span className="text-blue-600 font-medium flex items-center gap-1">
              <DollarSign className="h-4 w-4" />
            Current: ${revenueData[revenueData.length - 1].revenue.toLocaleString()}
          </span>
            <span className="text-green-600 font-medium flex items-center gap-1">
              <TrendingUp className="h-4 w-4" />
            Peak: ${maxRevenue.toLocaleString()} at 5:00 PM
          </span>
          </div>
          <div className="flex items-center gap-2">
            <div className="flex items-center gap-1">
              <div className="w-2 h-2 bg-green-500 rounded-full"></div>
              <span className="text-xs text-gray-600">High Efficiency</span>
            </div>
            <div className="flex items-center gap-1">
              <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
              <span className="text-xs text-gray-600">Good Efficiency</span>
            </div>
            <div className="flex items-center gap-1">
              <div className="w-2 h-2 bg-yellow-500 rounded-full"></div>
              <span className="text-xs text-gray-600">Moderate</span>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
