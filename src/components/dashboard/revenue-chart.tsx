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
                    
                    {/* Bar Chart */}
                    {(activeView === 'bars' || activeView === 'mixed') && (
                      <div className="w-full flex flex-col items-center">
                        {/* Revenue Bar */}
                        <div 
                          className={`w-full bg-gradient-to-t ${gradientColor} rounded-t transition-all duration-500 hover:shadow-lg cursor-pointer min-h-[8px] relative`}
                          style={{ height: `${barHeight}%` }}
                          title={`Revenue: $${data.revenue.toLocaleString()}`}
                        >
                          {/* Efficiency Indicator */}
                          <div className="absolute -top-1 -right-1 w-3 h-3 bg-white rounded-full border-2 border-gray-300 flex items-center justify-center">
                            <div className={`w-1.5 h-1.5 rounded-full ${data.efficiency >= 95 ? 'bg-green-500' : data.efficiency >= 90 ? 'bg-blue-500' : data.efficiency >= 85 ? 'bg-yellow-500' : 'bg-red-500'}`}></div>
                          </div>
                        </div>
                        
                        {/* Patient Count Mini Bar */}
                        {activeView === 'mixed' && (
                          <div 
                            className="w-1/2 bg-gradient-to-t from-purple-400 to-purple-300 rounded-t mt-1 opacity-70"
                            style={{ height: `${getBarHeight(data.patients, 20)}%` }}
                            title={`Patients: ${data.patients}`}
                          />
                        )}
                      </div>
                    )}

                    {/* Line Chart Points */}
                    {(activeView === 'line' || activeView === 'mixed') && (
                      <div className="absolute inset-0 flex items-end justify-center">
                        <div 
                          className={`w-4 h-4 rounded-full border-4 border-white shadow-lg transition-all duration-300 ${isHovered ? 'scale-125' : 'scale-100'}`}
                          style={{ 
                            backgroundColor: `hsl(${120 + (data.efficiency - 85) * 2}, 70%, 50%)`,
                            bottom: `${barHeight}%`
                          }}
                          title={`Revenue: $${data.revenue.toLocaleString()}, Efficiency: ${data.efficiency}%`}
                        />
                      </div>
                    )}

                    {/* Circle Chart */}
                    {activeView === 'circles' && (
                      <div className="flex flex-col items-center space-y-2">
                        {/* Main Revenue Circle */}
                        <div 
                          className={`rounded-full bg-gradient-to-br ${gradientColor} shadow-lg transition-all duration-500 hover:scale-110 cursor-pointer flex items-center justify-center text-white font-bold text-xs`}
                          style={{ 
                            width: `${circleSize}px`, 
                            height: `${circleSize}px` 
                          }}
                          title={`Revenue: $${data.revenue.toLocaleString()}`}
                        >
                          ${Math.round(data.revenue / 100)}
                        </div>
                        
                        {/* Efficiency Ring */}
                        <div className="relative">
                          <div 
                            className={`w-6 h-6 rounded-full border-2 transition-all duration-300 ${data.efficiency >= 95 ? 'border-green-500' : data.efficiency >= 90 ? 'border-blue-500' : data.efficiency >= 85 ? 'border-yellow-500' : 'border-red-500'}`}
                            style={{
                              background: `conic-gradient(${data.efficiency >= 95 ? '#10b981' : data.efficiency >= 90 ? '#3b82f6' : data.efficiency >= 85 ? '#f59e0b' : '#ef4444'} 0deg, ${data.efficiency >= 95 ? '#10b981' : data.efficiency >= 90 ? '#3b82f6' : data.efficiency >= 85 ? '#f59e0b' : '#ef4444'} ${(data.efficiency / 100) * 360}deg, #e5e7eb ${(data.efficiency / 100) * 360}deg)`
                            }}
                          />
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

          {/* Connecting Lines for Line Chart */}
          {activeView === 'line' && (
            <svg className="absolute inset-0 w-full h-full pointer-events-none">
              {revenueData.slice(0, -1).map((data, index) => {
                const currentHeight = getBarHeight(data.revenue, maxRevenue);
                const nextHeight = getBarHeight(revenueData[index + 1].revenue, maxRevenue);
                const x1 = (index / (revenueData.length - 1)) * 100;
                const x2 = ((index + 1) / (revenueData.length - 1)) * 100;
                const y1 = 100 - currentHeight;
                const y2 = 100 - nextHeight;
                
                return (
                  <line
                    key={index}
                    x1={`${x1}%`}
                    y1={`${y1}%`}
                    x2={`${x2}%`}
                    y2={`${y2}%`}
                    stroke="url(#gradient)"
                    strokeWidth="3"
                    strokeDasharray="5,5"
                    className="animate-pulse"
                  />
                );
              })}
              <defs>
                <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="0%">
                  <stop offset="0%" stopColor="#3b82f6" />
                  <stop offset="50%" stopColor="#8b5cf6" />
                  <stop offset="100%" stopColor="#ec4899" />
                </linearGradient>
              </defs>
            </svg>
          )}
        </div>

        {/* Summary Statistics */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-6">
          <div className="text-center p-3 bg-blue-50 rounded-lg">
            <div className="text-2xl font-bold text-blue-600">${totalRevenue.toLocaleString()}</div>
            <div className="text-xs text-gray-600">Total Revenue</div>
          </div>
          <div className="text-center p-3 bg-green-50 rounded-lg">
            <div className="text-2xl font-bold text-green-600">${avgRevenue.toLocaleString()}</div>
            <div className="text-xs text-gray-600">Average/Hour</div>
          </div>
          <div className="text-center p-3 bg-purple-50 rounded-lg">
            <div className="text-2xl font-bold text-purple-600">${maxRevenue.toLocaleString()}</div>
            <div className="text-xs text-gray-600">Peak Revenue</div>
          </div>
          <div className="text-center p-3 bg-orange-50 rounded-lg">
            <div className="text-2xl font-bold text-orange-600">92%</div>
            <div className="text-xs text-gray-600">Avg Efficiency</div>
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
