"use client";

import { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { 
  BarChart3,
  TrendingUp,
  Users,
  DollarSign,
  Eye,
  Calendar,
  Target,
  Brain,
  AlertTriangle
} from "lucide-react";
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, BarChart, Bar, PieChart, Pie, Cell } from "recharts";

// Mock data for charts
const revenueData = [
  { month: "Jan", revenue: 45000, patients: 180, appointments: 220 },
  { month: "Feb", revenue: 52000, patients: 195, appointments: 240 },
  { month: "Mar", revenue: 48000, patients: 170, appointments: 210 },
  { month: "Apr", revenue: 61000, patients: 220, appointments: 280 },
  { month: "May", revenue: 55000, patients: 200, appointments: 250 },
  { month: "Jun", revenue: 67000, patients: 240, appointments: 300 }
];

const diseaseProgressionData = [
  { name: "Glaucoma", cases: 45, progression: 12, risk: "High" },
  { name: "Macular Degeneration", cases: 38, progression: 8, risk: "Medium" },
  { name: "Diabetic Retinopathy", cases: 32, progression: 15, risk: "High" },
  { name: "Cataracts", cases: 28, progression: 5, risk: "Low" },
  { name: "Myopia", cases: 156, progression: 3, risk: "Low" }
];

const opticalSalesData = [
  { name: "Frames", value: 45, color: "#3B82F6" },
  { name: "Lenses", value: 30, color: "#10B981" },
  { name: "Contact Lenses", value: 20, color: "#F59E0B" },
  { name: "Accessories", value: 5, color: "#EF4444" }
];

const aiInsights = [
  {
    type: "revenue",
    title: "Revenue Optimization Opportunity",
    description: "AI detected 3 patients with high optical purchase probability. Recommend frame consultation.",
    impact: "Potential +$1,200",
    priority: "high",
    icon: DollarSign,
    color: "text-green-600",
    bgColor: "bg-green-50",
    borderColor: "border-green-200"
  },
  {
    type: "efficiency",
    title: "Schedule Optimization",
    description: "Moving Dr. Johnson's 2:30 PM appointment to 3:15 PM could reduce wait times by 40%.",
    impact: "Save 12 min",
    priority: "medium",
    icon: TrendingUp,
    color: "text-blue-600",
    bgColor: "bg-blue-50",
    borderColor: "border-blue-200"
  },
  {
    type: "risk",
    title: "Patient Risk Alert",
    description: "Sarah Chen shows early signs of glaucoma progression. Recommend immediate follow-up.",
    impact: "High Priority",
    priority: "high",
    icon: AlertTriangle,
    color: "text-red-600",
    bgColor: "bg-red-50",
    borderColor: "border-red-200"
  },
  {
    type: "prediction",
    title: "No-Show Prediction",
    description: "AI predicts 15% no-show rate for tomorrow's appointments. Consider overbooking.",
    impact: "3 patients",
    priority: "low",
    icon: Users,
    color: "text-orange-600",
    bgColor: "bg-orange-50",
    borderColor: "border-orange-200"
  }
];

export default function AnalyticsPage() {
  const [activeTab, setActiveTab] = useState("overview");

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="container mx-auto px-4 py-6">
        {/* Header */}
        <div className="flex items-center justify-between mb-6">
          <div>
            <h1 className="text-3xl font-bold text-gray-900">Analytics & Insights</h1>
            <p className="text-gray-600 mt-1">AI-powered analytics and business intelligence</p>
          </div>
          <div className="flex gap-2">
            <Button variant="outline">
              <BarChart3 className="h-4 w-4 mr-2" />
              Export Report
            </Button>
            <Button className="bg-blue-600 hover:bg-blue-700">
              <Brain className="h-4 w-4 mr-2" />
              Generate AI Insights
            </Button>
          </div>
        </div>

        {/* Tabs */}
        <div className="flex space-x-1 mb-6">
          <Button
            variant={activeTab === "overview" ? "default" : "outline"}
            onClick={() => setActiveTab("overview")}
          >
            <BarChart3 className="h-4 w-4 mr-2" />
            Overview
          </Button>
          <Button
            variant={activeTab === "revenue" ? "default" : "outline"}
            onClick={() => setActiveTab("revenue")}
          >
            <DollarSign className="h-4 w-4 mr-2" />
            Revenue
          </Button>
          <Button
            variant={activeTab === "clinical" ? "default" : "outline"}
            onClick={() => setActiveTab("clinical")}
          >
            <Eye className="h-4 w-4 mr-2" />
            Clinical
          </Button>
          <Button
            variant={activeTab === "optical" ? "default" : "outline"}
            onClick={() => setActiveTab("optical")}
          >
            <Target className="h-4 w-4 mr-2" />
            Optical
          </Button>
        </div>

        {/* Overview Tab */}
        {activeTab === "overview" && (
          <div className="space-y-6">
            {/* KPI Cards */}
            <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
              <Card>
                <CardContent className="p-4">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-sm text-gray-600">Monthly Revenue</p>
                      <p className="text-2xl font-bold text-gray-900">$67,000</p>
                      <p className="text-sm text-green-600 flex items-center">
                        <TrendingUp className="h-3 w-3 mr-1" />
                        +12.5%
                      </p>
                    </div>
                    <DollarSign className="h-8 w-8 text-green-600" />
                  </div>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="p-4">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-sm text-gray-600">Active Patients</p>
                      <p className="text-2xl font-bold text-gray-900">1,240</p>
                      <p className="text-sm text-green-600 flex items-center">
                        <TrendingUp className="h-3 w-3 mr-1" />
                        +8.2%
                      </p>
                    </div>
                    <Users className="h-8 w-8 text-blue-600" />
                  </div>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="p-4">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-sm text-gray-600">Appointments</p>
                      <p className="text-2xl font-bold text-gray-900">300</p>
                      <p className="text-sm text-green-600 flex items-center">
                        <TrendingUp className="h-3 w-3 mr-1" />
                        +15.3%
                      </p>
                    </div>
                    <Calendar className="h-8 w-8 text-orange-600" />
                  </div>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="p-4">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-sm text-gray-600">Optical Capture</p>
                      <p className="text-2xl font-bold text-gray-900">78%</p>
                      <p className="text-sm text-green-600 flex items-center">
                        <TrendingUp className="h-3 w-3 mr-1" />
                        +5.3%
                      </p>
                    </div>
                    <Eye className="h-8 w-8 text-purple-600" />
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Charts */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              <Card>
                <CardHeader>
                  <CardTitle>Revenue Trend</CardTitle>
                  <CardDescription>Monthly revenue and patient growth</CardDescription>
                </CardHeader>
                <CardContent>
                  <ResponsiveContainer width="100%" height={300}>
                    <LineChart data={revenueData}>
                      <CartesianGrid strokeDasharray="3 3" />
                      <XAxis dataKey="month" />
                      <YAxis />
                      <Tooltip />
                      <Line type="monotone" dataKey="revenue" stroke="#3B82F6" strokeWidth={2} />
                    </LineChart>
                  </ResponsiveContainer>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Patient Appointments</CardTitle>
                  <CardDescription>Monthly appointment volume</CardDescription>
                </CardHeader>
                <CardContent>
                  <ResponsiveContainer width="100%" height={300}>
                    <BarChart data={revenueData}>
                      <CartesianGrid strokeDasharray="3 3" />
                      <XAxis dataKey="month" />
                      <YAxis />
                      <Tooltip />
                      <Bar dataKey="appointments" fill="#10B981" />
                    </BarChart>
                  </ResponsiveContainer>
                </CardContent>
              </Card>
            </div>

            {/* AI Insights */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Brain className="h-5 w-5 text-purple-600" />
                  AI Insights & Recommendations
                </CardTitle>
                <CardDescription>Real-time AI recommendations and predictions</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                {aiInsights.map((insight, index) => (
                  <div 
                    key={index} 
                    className={`p-4 rounded-lg border-l-4 ${insight.bgColor} ${insight.borderColor} hover:shadow-md transition-shadow duration-200`}
                  >
                    <div className="flex items-start justify-between">
                      <div className="flex items-start space-x-3">
                        <div className={`p-2 rounded-lg ${insight.bgColor}`}>
                          <insight.icon className={`h-4 w-4 ${insight.color}`} />
                        </div>
                        <div className="flex-1">
                          <h4 className="font-medium text-gray-900 text-sm">
                            {insight.title}
                          </h4>
                          <p className="text-xs text-gray-600 mt-1">
                            {insight.description}
                          </p>
                        </div>
                      </div>
                      <Badge 
                        variant={insight.priority === "high" ? "destructive" : insight.priority === "medium" ? "default" : "secondary"}
                        className="text-xs"
                      >
                        {insight.impact}
                      </Badge>
                    </div>
                  </div>
                ))}
              </CardContent>
            </Card>
          </div>
        )}

        {/* Revenue Tab */}
        {activeTab === "revenue" && (
          <div className="space-y-6">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              <Card>
                <CardHeader>
                  <CardTitle>Revenue Breakdown</CardTitle>
                  <CardDescription>Revenue sources this month</CardDescription>
                </CardHeader>
                <CardContent>
                  <ResponsiveContainer width="100%" height={300}>
                    <PieChart>
                      <Pie
                        data={opticalSalesData}
                        cx="50%"
                        cy="50%"
                        labelLine={false}
                        label={false}
                        outerRadius={80}
                        fill="#8884d8"
                        dataKey="value"
                      >
                        {opticalSalesData.map((entry, index) => (
                          <Cell key={`cell-${index}`} fill={entry.color} />
                        ))}
                      </Pie>
                      <Tooltip />
                    </PieChart>
                  </ResponsiveContainer>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Revenue Forecast</CardTitle>
                  <CardDescription>AI-predicted revenue for next 6 months</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="flex justify-between items-center p-3 bg-green-50 rounded-lg">
                      <span className="font-medium">July 2024</span>
                      <Badge className="bg-green-600">$72,000</Badge>
                    </div>
                    <div className="flex justify-between items-center p-3 bg-green-50 rounded-lg">
                      <span className="font-medium">August 2024</span>
                      <Badge className="bg-green-600">$75,000</Badge>
                    </div>
                    <div className="flex justify-between items-center p-3 bg-blue-50 rounded-lg">
                      <span className="font-medium">September 2024</span>
                      <Badge className="bg-blue-600">$78,000</Badge>
                    </div>
                    <div className="flex justify-between items-center p-3 bg-blue-50 rounded-lg">
                      <span className="font-medium">October 2024</span>
                      <Badge className="bg-blue-600">$81,000</Badge>
                    </div>
                    <div className="flex justify-between items-center p-3 bg-purple-50 rounded-lg">
                      <span className="font-medium">November 2024</span>
                      <Badge className="bg-purple-600">$85,000</Badge>
                    </div>
                    <div className="flex justify-between items-center p-3 bg-purple-50 rounded-lg">
                      <span className="font-medium">December 2024</span>
                      <Badge className="bg-purple-600">$88,000</Badge>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        )}

        {/* Clinical Tab */}
        {activeTab === "clinical" && (
          <div className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>Disease Progression Analysis</CardTitle>
                <CardDescription>AI analysis of disease progression patterns</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {diseaseProgressionData.map((disease, index) => (
                    <div key={index} className="flex items-center justify-between p-4 border rounded-lg">
                      <div className="flex items-center space-x-4">
                        <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center">
                          <Eye className="h-6 w-6 text-blue-600" />
                        </div>
                        <div>
                          <h3 className="font-semibold text-gray-900">{disease.name}</h3>
                          <p className="text-sm text-gray-600">{disease.cases} active cases</p>
                        </div>
                      </div>
                      <div className="flex items-center space-x-4">
                        <div className="text-right">
                          <p className="text-sm text-gray-600">Progression Rate</p>
                          <p className="font-medium">{disease.progression}%</p>
                        </div>
                        <Badge 
                          variant={disease.risk === "High" ? "destructive" : disease.risk === "Medium" ? "default" : "secondary"}
                        >
                          {disease.risk} Risk
                        </Badge>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        )}

        {/* Optical Tab */}
        {activeTab === "optical" && (
          <div className="space-y-6">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              <Card>
                <CardHeader>
                  <CardTitle>Optical Sales Performance</CardTitle>
                  <CardDescription>Sales breakdown by category</CardDescription>
                </CardHeader>
                <CardContent>
                  <ResponsiveContainer width="100%" height={300}>
                    <BarChart data={opticalSalesData}>
                      <CartesianGrid strokeDasharray="3 3" />
                      <XAxis dataKey="name" />
                      <YAxis />
                      <Tooltip />
                      <Bar dataKey="value" fill="#3B82F6" />
                    </BarChart>
                  </ResponsiveContainer>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Capture Rate Optimization</CardTitle>
                  <CardDescription>AI recommendations to improve optical sales</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="p-4 bg-green-50 rounded-lg border-l-4 border-green-200">
                      <h4 className="font-medium text-green-900">High Probability Customers</h4>
                      <p className="text-sm text-green-700 mt-1">3 patients identified with 85%+ purchase probability</p>
                      <p className="text-xs text-green-600 mt-2">Potential revenue: $1,200</p>
                    </div>
                    <div className="p-4 bg-blue-50 rounded-lg border-l-4 border-blue-200">
                      <h4 className="font-medium text-blue-900">Frame Recommendations</h4>
                      <p className="text-sm text-blue-700 mt-1">AI suggests specific frame styles for 5 upcoming appointments</p>
                      <p className="text-xs text-blue-600 mt-2">Expected increase: 25%</p>
                    </div>
                    <div className="p-4 bg-purple-50 rounded-lg border-l-4 border-purple-200">
                      <h4 className="font-medium text-purple-900">Lens Upselling</h4>
                      <p className="text-sm text-purple-700 mt-1">Opportunity to upgrade 8 patients to premium lenses</p>
                      <p className="text-xs text-purple-600 mt-2">Additional revenue: $800</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
