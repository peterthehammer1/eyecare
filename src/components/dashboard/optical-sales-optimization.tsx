"use client";

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { 
  ShoppingCart, 
  TrendingUp, 
  Target,
  Star,
  Users,
  DollarSign,
  Lightbulb
} from "lucide-react";

const opticalInsights = [
  {
    patient: "Sarah Chen",
    currentFrame: "Ray-Ban Aviator",
    upgradePotential: "High",
    suggestedFrames: [
      { name: "Gucci GG0061S", price: 485, matchScore: 96, reason: "Perfect for professional setting" },
      { name: "Prada PR 01VS", price: 320, matchScore: 89, reason: "Trendy acetate frame" },
      { name: "Tom Ford TF5381", price: 650, matchScore: 94, reason: "Luxury titanium construction" }
    ],
    aiConfidence: 0.94,
    expectedUpsell: 485,
    riskFactors: ["High income", "Fashion conscious", "Previous premium purchases"]
  },
  {
    patient: "Michael Rodriguez",
    currentFrame: "Generic plastic",
    upgradePotential: "Medium",
    suggestedFrames: [
      { name: "Oakley Holbrook", price: 165, matchScore: 92, reason: "Durable for active lifestyle" },
      { name: "Warby Parker Finch", price: 95, matchScore: 88, reason: "Great value proposition" },
      { name: "Ray-Ban Clubmaster", price: 185, matchScore: 85, reason: "Classic style upgrade" }
    ],
    aiConfidence: 0.87,
    expectedUpsell: 165,
    riskFactors: ["Budget conscious", "Value-oriented", "Active lifestyle"]
  },
  {
    patient: "Emma Davis",
    currentFrame: "No current frame",
    upgradePotential: "High",
    suggestedFrames: [
      { name: "Chanel CH5347", price: 750, matchScore: 98, reason: "Perfect for oval face shape" },
      { name: "Dior DIORSO1", price: 420, matchScore: 91, reason: "Elegant and sophisticated" },
      { name: "Versace VE4365", price: 380, matchScore: 89, reason: "Luxury brand appeal" }
    ],
    aiConfidence: 0.91,
    expectedUpsell: 750,
    riskFactors: ["First-time buyer", "High disposable income", "Fashion-forward"]
  }
];

const salesMetrics = {
  todayRevenue: 2450,
  captureRate: 78,
  avgOrderValue: 185,
  upsellSuccess: 34,
  conversionRate: 68,
  topSellingBrand: "Ray-Ban",
  profitMargin: 42
};

const pricingOptimization = {
  dynamicPricing: true,
  currentStrategy: "Value-based",
  priceAdjustments: [
    { product: "Progressive Lenses", adjustment: "+12%", reason: "High demand, low inventory" },
    { product: "Basic Frames", adjustment: "-5%", reason: "Competitive positioning" },
    { product: "Premium Frames", adjustment: "+8%", reason: "Brand value increase" }
  ],
  recommendations: [
    "Bundle frames with lens upgrades for 15% discount",
    "Offer seasonal promotions on slow-moving inventory",
    "Implement loyalty program for repeat customers"
  ]
};

export function OpticalSalesOptimization() {
  return (
    <div className="space-y-6">
      {/* Sales Performance Metrics */}
      <Card className="hover:shadow-lg transition-shadow duration-300">
        <CardHeader>
          <CardTitle className="text-xl font-semibold flex items-center gap-2">
            <ShoppingCart className="h-6 w-6 text-blue-600" />
            Optical Sales Performance
          </CardTitle>
          <CardDescription>
            AI-powered sales optimization and revenue maximization
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <div className="text-center p-4 bg-green-50 rounded-lg">
              <DollarSign className="h-8 w-8 text-green-600 mx-auto mb-2" />
              <div className="text-2xl font-bold text-green-600">${salesMetrics.todayRevenue}</div>
              <div className="text-sm text-gray-600">Today&apos;s Revenue</div>
            </div>
            <div className="text-center p-4 bg-blue-50 rounded-lg">
              <Target className="h-8 w-8 text-blue-600 mx-auto mb-2" />
              <div className="text-2xl font-bold text-blue-600">{salesMetrics.captureRate}%</div>
              <div className="text-sm text-gray-600">Capture Rate</div>
            </div>
            <div className="text-center p-4 bg-purple-50 rounded-lg">
              <TrendingUp className="h-8 w-8 text-purple-600 mx-auto mb-2" />
              <div className="text-2xl font-bold text-purple-600">${salesMetrics.avgOrderValue}</div>
              <div className="text-sm text-gray-600">Avg Order Value</div>
            </div>
            <div className="text-center p-4 bg-orange-50 rounded-lg">
              <Star className="h-8 w-8 text-orange-600 mx-auto mb-2" />
              <div className="text-2xl font-bold text-orange-600">{salesMetrics.upsellSuccess}%</div>
              <div className="text-sm text-gray-600">Upsell Success</div>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* AI-Powered Upsell Recommendations */}
      <Card className="hover:shadow-lg transition-shadow duration-300">
        <CardHeader>
          <CardTitle className="text-xl font-semibold flex items-center gap-2">
            <Lightbulb className="h-6 w-6 text-yellow-600" />
            AI Upsell Recommendations
          </CardTitle>
          <CardDescription>
            Personalized frame and lens recommendations based on patient data
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-6">
            {opticalInsights.map((insight, index) => (
              <div key={index} className="p-4 border rounded-lg hover:bg-gray-50 transition-colors">
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center space-x-3">
                    <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center">
                      <Users className="h-5 w-5 text-blue-600" />
                    </div>
                    <div>
                      <h4 className="font-medium text-gray-900">{insight.patient}</h4>
                      <p className="text-sm text-gray-600">Current: {insight.currentFrame}</p>
                    </div>
                  </div>
                  <div className="text-right">
                    <Badge 
                      variant={insight.upgradePotential === "High" ? "destructive" : insight.upgradePotential === "Medium" ? "default" : "secondary"}
                      className="text-sm"
                    >
                      {insight.upgradePotential} Potential
                    </Badge>
                    <div className="text-xs text-gray-500 mt-1">
                      {(insight.aiConfidence * 100).toFixed(0)}% confidence
                    </div>
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4">
                  {insight.suggestedFrames.map((frame, frameIndex) => (
                    <div key={frameIndex} className="p-3 bg-gray-50 rounded-lg">
                      <div className="flex items-center justify-between mb-2">
                        <h5 className="font-medium text-sm">{frame.name}</h5>
                        <Badge variant="outline" className="text-xs">
                          {frame.matchScore}% match
                        </Badge>
                      </div>
                      <p className="text-xs text-gray-600 mb-2">{frame.reason}</p>
                      <div className="text-lg font-bold text-green-600">${frame.price}</div>
                    </div>
                  ))}
                </div>

                <div className="flex items-center justify-between">
                  <div className="text-sm text-gray-600">
                    <strong>Expected Upsell:</strong> ${insight.expectedUpsell}
                  </div>
                  <Button size="sm" variant="outline">
                    View Details
                  </Button>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Dynamic Pricing Optimization */}
      <Card className="hover:shadow-lg transition-shadow duration-300">
        <CardHeader>
          <CardTitle className="text-xl font-semibold flex items-center gap-2">
            <TrendingUp className="h-6 w-6 text-green-600" />
            Dynamic Pricing Optimization
          </CardTitle>
          <CardDescription>
            AI-powered pricing strategies to maximize revenue and profit
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <h4 className="font-medium text-gray-900 mb-3">Current Pricing Strategy</h4>
              <div className="space-y-3">
                <div className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                  <span className="text-sm text-gray-600">Strategy:</span>
                  <Badge variant="outline">{pricingOptimization.currentStrategy}</Badge>
                </div>
                <div className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                  <span className="text-sm text-gray-600">Dynamic Pricing:</span>
                  <Badge variant={pricingOptimization.dynamicPricing ? "default" : "secondary"}>
                    {pricingOptimization.dynamicPricing ? "Active" : "Inactive"}
                  </Badge>
                </div>
              </div>
            </div>

            <div>
              <h4 className="font-medium text-gray-900 mb-3">Price Adjustments</h4>
              <div className="space-y-2">
                {pricingOptimization.priceAdjustments.map((adjustment, index) => (
                  <div key={index} className="flex items-center justify-between p-2 bg-gray-50 rounded">
                    <span className="text-sm text-gray-600">{adjustment.product}</span>
                    <div className="text-right">
                      <span className={`text-sm font-medium ${
                        adjustment.adjustment.startsWith('+') ? 'text-green-600' : 'text-red-600'
                      }`}>
                        {adjustment.adjustment}
                      </span>
                      <div className="text-xs text-gray-500">{adjustment.reason}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="mt-6 p-4 bg-blue-50 rounded-lg">
            <h4 className="font-medium text-blue-800 mb-2 flex items-center gap-2">
              <Lightbulb className="h-4 w-4" />
              AI Recommendations
            </h4>
            <ul className="text-sm text-blue-700 space-y-1">
              {pricingOptimization.recommendations.map((rec, index) => (
                <li key={index}>• {rec}</li>
              ))}
            </ul>
          </div>
        </CardContent>
      </Card>

      {/* Revenue Optimization Summary */}
      <Card className="hover:shadow-lg transition-shadow duration-300">
        <CardHeader>
          <CardTitle className="text-xl font-semibold flex items-center gap-2">
            <DollarSign className="h-6 w-6 text-green-600" />
            Revenue Optimization Summary
          </CardTitle>
          <CardDescription>
            AI-driven insights to maximize optical revenue
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="text-center p-4 bg-green-50 rounded-lg">
              <div className="text-3xl font-bold text-green-600">+$2,450</div>
              <div className="text-sm text-gray-600">Today&apos;s Revenue</div>
              <div className="text-xs text-green-600 mt-1">+18% vs yesterday</div>
            </div>
            <div className="text-center p-4 bg-blue-50 rounded-lg">
              <div className="text-3xl font-bold text-blue-600">+$8,200</div>
              <div className="text-sm text-gray-600">Potential Upsell</div>
              <div className="text-xs text-blue-600 mt-1">From 3 high-potential patients</div>
            </div>
            <div className="text-center p-4 bg-purple-50 rounded-lg">
              <div className="text-3xl font-bold text-purple-600">42%</div>
              <div className="text-sm text-gray-600">Profit Margin</div>
              <div className="text-xs text-purple-600 mt-1">Industry leading</div>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
