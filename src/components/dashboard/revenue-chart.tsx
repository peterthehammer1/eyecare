"use client";

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { TrendingUp, BarChart3 } from "lucide-react";

// Mock data for the chart
const revenueData = [
  { time: "8:00", revenue: 1200 },
  { time: "9:00", revenue: 1800 },
  { time: "10:00", revenue: 2200 },
  { time: "11:00", revenue: 1900 },
  { time: "12:00", revenue: 1500 },
  { time: "13:00", revenue: 2100 },
  { time: "14:00", revenue: 2800 },
  { time: "15:00", revenue: 2400 },
  { time: "16:00", revenue: 2600 },
  { time: "17:00", revenue: 3200 }
];

const maxRevenue = Math.max(...revenueData.map(d => d.revenue));

export function RevenueChart() {
  return (
    <Card className="hover:shadow-lg transition-shadow duration-300">
      <CardHeader>
        <div className="flex items-center justify-between">
          <div>
            <CardTitle className="text-xl font-semibold flex items-center gap-2">
              <BarChart3 className="h-5 w-5 text-blue-600" />
              Hourly Revenue Trend
            </CardTitle>
            <CardDescription>
              Today&apos;s revenue performance by hour
            </CardDescription>
          </div>
          <Badge variant="outline" className="text-green-600 border-green-200">
            <TrendingUp className="h-3 w-3 mr-1" />
            +18% vs yesterday
          </Badge>
        </div>
      </CardHeader>
      <CardContent>
        <div className="h-48 flex items-end justify-between gap-2">
          {revenueData.map((data, index) => (
            <div key={index} className="flex flex-col items-center flex-1">
              <div 
                className="w-full bg-gradient-to-t from-blue-500 to-blue-400 rounded-t mb-2 transition-all duration-300 hover:from-blue-600 hover:to-blue-500 cursor-pointer"
                style={{ height: `${(data.revenue / maxRevenue) * 100}%` }}
                title={`${data.time}: $${data.revenue.toLocaleString()}`}
              />
              <span className="text-xs text-gray-600">{data.time}</span>
            </div>
          ))}
        </div>
        <div className="flex items-center justify-between mt-4 text-sm">
          <span className="text-blue-600 font-medium">
            Current: ${revenueData[revenueData.length - 1].revenue.toLocaleString()}
          </span>
          <span className="text-green-600 font-medium">
            Peak: ${maxRevenue.toLocaleString()} at 5:00 PM
          </span>
        </div>
      </CardContent>
    </Card>
  );
}
