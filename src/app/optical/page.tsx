"use client";

import { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { 
  Search, 
  Plus, 
  Eye,
  TrendingUp,
  Package,
  DollarSign,
  MoreHorizontal,
  Star,
  Target,
  Brain,
  Zap,
  Shield,
  Activity,
  AlertTriangle,
  CheckCircle,
  Users,
  BarChart3,
  Filter,
  Settings,
  Heart,
  ShoppingCart,
  TrendingDown
} from "lucide-react";
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu";

// Mock data - will be replaced with real data from database
const mockFrames = [
  {
    id: "1",
    brand: "Ray-Ban",
    model: "Aviator Classic",
    color: "Gold",
    size: "58-14-140",
    material: "Metal",
    price: 195.00,
    cost: 98.00,
    sku: "RB-AV-GLD-58",
    stock: 12,
    minStock: 3,
    isActive: true,
    category: "Sunglasses",
    style: "Aviator",
    popularity: 4.8,
    aiInsights: {
      recommendationScore: 94,
      salesProbability: 87,
      optimalPrice: 195.00,
      customerMatch: "High",
      trendDirection: "Up",
      seasonality: "Summer Peak",
      competitorAnalysis: "Premium Position",
      inventoryOptimization: "Optimal"
    },
    salesData: {
      monthlySales: 24,
      conversionRate: 0.78,
      avgCustomerRating: 4.8,
      returnRate: 0.05,
      profitMargin: 0.50
    }
  },
  {
    id: "2",
    brand: "Oakley",
    model: "Holbrook",
    color: "Matte Black",
    size: "55-18-135",
    material: "O Matter",
    price: 165.00,
    cost: 82.50,
    sku: "OK-HB-BLK-55",
    stock: 8,
    minStock: 2,
    isActive: true,
    category: "Sunglasses",
    style: "Square",
    popularity: 4.6,
    aiInsights: {
      recommendationScore: 89,
      salesProbability: 82,
      optimalPrice: 165.00,
      customerMatch: "High",
      trendDirection: "Stable",
      seasonality: "Year-Round",
      competitorAnalysis: "Competitive",
      inventoryOptimization: "Good"
    },
    salesData: {
      monthlySales: 18,
      conversionRate: 0.72,
      avgCustomerRating: 4.6,
      returnRate: 0.08,
      profitMargin: 0.50
    }
  },
  {
    id: "3",
    brand: "Warby Parker",
    model: "Percey",
    color: "Tortoise",
    size: "52-16-145",
    material: "Acetate",
    price: 95.00,
    cost: 47.50,
    sku: "WP-PC-TRT-52",
    stock: 15,
    minStock: 5,
    isActive: true,
    category: "Eyeglasses",
    style: "Round",
    popularity: 4.7,
    aiInsights: {
      recommendationScore: 96,
      salesProbability: 91,
      optimalPrice: 95.00,
      customerMatch: "Very High",
      trendDirection: "Up",
      seasonality: "Fall Peak",
      competitorAnalysis: "Value Leader",
      inventoryOptimization: "Excellent"
    },
    salesData: {
      monthlySales: 32,
      conversionRate: 0.85,
      avgCustomerRating: 4.7,
      returnRate: 0.03,
      profitMargin: 0.50
    }
  },
  {
    id: "4",
    brand: "Gucci",
    model: "GG0061S",
    color: "Black",
    size: "54-17-140",
    material: "Acetate",
    price: 425.00,
    cost: 212.50,
    sku: "GC-GG-BLK-54",
    stock: 3,
    minStock: 1,
    isActive: true,
    category: "Eyeglasses",
    style: "Cat Eye",
    popularity: 4.9
  },
  {
    id: "5",
    brand: "Tom Ford",
    model: "FT5401",
    color: "Havana",
    size: "56-15-135",
    material: "Acetate",
    price: 385.00,
    cost: 192.50,
    sku: "TF-FT-HVN-56",
    stock: 0,
    minStock: 2,
    isActive: false,
    category: "Eyeglasses",
    style: "Rectangle",
    popularity: 4.5
  }
];

const mockLenses = [
  {
    id: "1",
    type: "Single Vision",
    material: "Polycarbonate",
    coating: "Anti-Reflective",
    price: 89.00,
    cost: 35.00,
    sku: "SV-PC-AR",
    stock: 50,
    isActive: true
  },
  {
    id: "2",
    type: "Progressive",
    material: "High Index 1.67",
    coating: "Blue Light Filter",
    price: 245.00,
    cost: 98.00,
    sku: "PRG-HI-BLF",
    stock: 25,
    isActive: true
  },
  {
    id: "3",
    type: "Bifocal",
    material: "CR-39",
    coating: "Anti-Reflective",
    price: 125.00,
    cost: 50.00,
    sku: "BF-CR-AR",
    stock: 30,
    isActive: true
  }
];

export default function OpticalPage() {
  const [searchTerm, setSearchTerm] = useState("");
  const [activeTab, setActiveTab] = useState("frames");
  const [filterCategory, setFilterCategory] = useState("all");

  const filteredFrames = mockFrames.filter(frame => {
    const matchesSearch = 
      frame.brand.toLowerCase().includes(searchTerm.toLowerCase()) ||
      frame.model.toLowerCase().includes(searchTerm.toLowerCase()) ||
      frame.sku.toLowerCase().includes(searchTerm.toLowerCase());
    
    const matchesFilter = filterCategory === "all" || frame.category === filterCategory;
    
    return matchesSearch && matchesFilter;
  });

  const lowStockItems = mockFrames.filter(frame => frame.stock <= frame.minStock);
  const totalInventoryValue = mockFrames.reduce((sum, frame) => sum + (frame.stock * frame.cost), 0);
  const averageSellingPrice = mockFrames.reduce((sum, frame) => sum + frame.price, 0) / mockFrames.length;

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="container mx-auto px-4 py-6">
        {/* Header */}
        <div className="flex items-center justify-between mb-6">
          <div>
            <h1 className="text-3xl font-bold text-gray-900">AI-Powered Optical Retail</h1>
            <p className="text-gray-600 mt-1">Smart frame recommendations and sales optimization</p>
          </div>
          <div className="flex gap-2">
            <Button variant="outline" className="flex items-center gap-2">
              <Brain className="h-4 w-4" />
              AI Insights
            </Button>
            <Button variant="outline">
              <Package className="h-4 w-4 mr-2" />
              Inventory Report
            </Button>
            <Button className="bg-blue-600 hover:bg-blue-700">
              <Plus className="h-4 w-4 mr-2" />
              Add Product
            </Button>
          </div>
        </div>

        {/* AI Analytics Dashboard */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
          <Card>
            <CardContent className="p-4">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-gray-600">AI Recommendations</p>
                  <p className="text-2xl font-bold text-purple-600">94%</p>
                </div>
                <Brain className="h-8 w-8 text-purple-600" />
              </div>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-4">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-gray-600">Sales Conversion</p>
                  <p className="text-2xl font-bold text-green-600">78%</p>
                </div>
                <Target className="h-8 w-8 text-green-600" />
              </div>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-4">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-gray-600">Revenue Potential</p>
                  <p className="text-2xl font-bold text-blue-600">
                    ${mockFrames.reduce((sum, frame) => sum + (frame.salesData.monthlySales * frame.price), 0).toLocaleString()}
                  </p>
                </div>
                <DollarSign className="h-8 w-8 text-blue-600" />
              </div>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-4">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-gray-600">Customer Satisfaction</p>
                  <p className="text-2xl font-bold text-yellow-600">4.7/5</p>
                </div>
                <Star className="h-8 w-8 text-yellow-600" />
              </div>
            </CardContent>
          </Card>
        </div>

        {/* AI Sales Optimization Panel */}
        <Card className="mb-6">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Zap className="h-5 w-5 text-yellow-600" />
              AI Sales Optimization
            </CardTitle>
            <CardDescription>
              Smart recommendations for maximizing optical sales and customer satisfaction
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="p-4 bg-green-50 rounded-lg border border-green-200">
                <div className="flex items-center gap-2 mb-2">
                  <TrendingUp className="h-4 w-4 text-green-600" />
                  <span className="font-medium text-green-800">Top Performers</span>
                </div>
                <div className="text-sm text-green-700">
                  Warby Parker Percey: 96% recommendation score, 91% sales probability
                </div>
              </div>
              <div className="p-4 bg-blue-50 rounded-lg border border-blue-200">
                <div className="flex items-center gap-2 mb-2">
                  <Shield className="h-4 w-4 text-blue-600" />
                  <span className="font-medium text-blue-800">Inventory Alerts</span>
                </div>
                <div className="text-sm text-blue-700">
                  {lowStockItems.length} items need restocking to optimize sales
                </div>
              </div>
              <div className="p-4 bg-purple-50 rounded-lg border border-purple-200">
                <div className="flex items-center gap-2 mb-2">
                  <Activity className="h-4 w-4 text-purple-600" />
                  <span className="font-medium text-purple-800">Trend Analysis</span>
                </div>
                <div className="text-sm text-purple-700">
                  Round frames trending up 15%, recommend increasing inventory
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Tabs */}
        <div className="flex space-x-1 mb-6">
          <Button
            variant={activeTab === "frames" ? "default" : "outline"}
            onClick={() => setActiveTab("frames")}
          >
            <Eye className="h-4 w-4 mr-2" />
            Frames
          </Button>
          <Button
            variant={activeTab === "lenses" ? "default" : "outline"}
            onClick={() => setActiveTab("lenses")}
          >
            <Package className="h-4 w-4 mr-2" />
            Lenses
          </Button>
          <Button
            variant={activeTab === "analytics" ? "default" : "outline"}
            onClick={() => setActiveTab("analytics")}
          >
            <TrendingUp className="h-4 w-4 mr-2" />
            Analytics
          </Button>
        </div>

        {/* Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-6">
          <Card>
            <CardContent className="p-4">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-gray-600">Total Inventory Value</p>
                  <p className="text-2xl font-bold text-gray-900">${totalInventoryValue.toLocaleString()}</p>
                </div>
                <DollarSign className="h-8 w-8 text-green-600" />
              </div>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-4">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-gray-600">Active Products</p>
                  <p className="text-2xl font-bold text-blue-600">
                    {mockFrames.filter(f => f.isActive).length + mockLenses.filter(l => l.isActive).length}
                  </p>
                </div>
                <Package className="h-8 w-8 text-blue-600" />
              </div>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-4">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-gray-600">Low Stock Items</p>
                  <p className="text-2xl font-bold text-orange-600">{lowStockItems.length}</p>
                </div>
                <Target className="h-8 w-8 text-orange-600" />
              </div>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-4">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-gray-600">Avg. Selling Price</p>
                  <p className="text-2xl font-bold text-purple-600">${averageSellingPrice.toFixed(0)}</p>
                </div>
                <TrendingUp className="h-8 w-8 text-purple-600" />
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Search and Filters */}
        <Card className="mb-6">
          <CardContent className="p-6">
            <div className="flex flex-col sm:flex-row gap-4">
              <div className="flex-1 relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
                <Input
                  placeholder="Search products by brand, model, or SKU..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="pl-10"
                />
              </div>
              {activeTab === "frames" && (
                <div className="flex gap-2">
                  <Button
                    variant={filterCategory === "all" ? "default" : "outline"}
                    onClick={() => setFilterCategory("all")}
                    size="sm"
                  >
                    All
                  </Button>
                  <Button
                    variant={filterCategory === "Eyeglasses" ? "default" : "outline"}
                    onClick={() => setFilterCategory("Eyeglasses")}
                    size="sm"
                  >
                    Eyeglasses
                  </Button>
                  <Button
                    variant={filterCategory === "Sunglasses" ? "default" : "outline"}
                    onClick={() => setFilterCategory("Sunglasses")}
                    size="sm"
                  >
                    Sunglasses
                  </Button>
                </div>
              )}
            </div>
          </CardContent>
        </Card>

        {/* Content based on active tab */}
        {activeTab === "frames" && (
          <Card>
            <CardHeader>
              <CardTitle>Frame Inventory</CardTitle>
              <CardDescription>
                {filteredFrames.length} frames in inventory
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {filteredFrames.map((frame) => (
                  <Card key={frame.id} className="hover:shadow-lg transition-shadow duration-300">
                    <CardContent className="p-4">
                      <div className="flex items-start justify-between">
                        <div className="flex items-start space-x-4">
                          <div className="w-16 h-16 bg-gray-100 rounded-lg flex items-center justify-center">
                            <Eye className="h-8 w-8 text-gray-400" />
                          </div>
                          <div className="flex-1">
                            <div className="flex items-center gap-2 mb-2">
                              <h3 className="font-semibold text-gray-900">
                                {frame.brand} {frame.model}
                              </h3>
                              <Badge variant={frame.isActive ? "default" : "secondary"}>
                                {frame.isActive ? "Active" : "Inactive"}
                              </Badge>
                            </div>
                            
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-3">
                              <div className="space-y-1 text-sm text-gray-600">
                                <div>Color: {frame.color}</div>
                                <div>Size: {frame.size}</div>
                                <div>Material: {frame.material}</div>
                                <div>SKU: {frame.sku}</div>
                              </div>
                              
                              <div className="space-y-1 text-sm text-gray-600">
                                <div className="flex items-center gap-2">
                                  <Badge variant="outline">{frame.category}</Badge>
                                  <Badge variant="outline">{frame.style}</Badge>
                                </div>
                                <div className="flex items-center space-x-1">
                                  <Star className="h-3 w-3 text-yellow-500 fill-current" />
                                  <span>Rating: {frame.popularity}</span>
                                </div>
                                <div className="flex items-center space-x-1">
                                  <DollarSign className="h-3 w-3" />
                                  <span>Price: ${frame.price}</span>
                                </div>
                                <div className="flex items-center space-x-1">
                                  <Package className="h-3 w-3" />
                                  <span className={`font-medium ${frame.stock <= frame.minStock ? 'text-red-600' : 'text-green-600'}`}>
                                    Stock: {frame.stock}
                                  </span>
                                </div>
                              </div>
                            </div>

                            {/* AI Insights Panel */}
                            <div className="grid grid-cols-2 md:grid-cols-4 gap-2 mb-3">
                              <div className="p-2 bg-purple-50 rounded text-center">
                                <div className="text-xs text-gray-600">AI Score</div>
                                <div className="text-sm font-medium text-purple-600">
                                  {frame.aiInsights.recommendationScore}%
                                </div>
                              </div>
                              <div className="p-2 bg-green-50 rounded text-center">
                                <div className="text-xs text-gray-600">Sales Prob</div>
                                <div className="text-sm font-medium text-green-600">
                                  {frame.aiInsights.salesProbability}%
                                </div>
                              </div>
                              <div className="p-2 bg-blue-50 rounded text-center">
                                <div className="text-xs text-gray-600">Monthly Sales</div>
                                <div className="text-sm font-medium text-blue-600">
                                  {frame.salesData.monthlySales}
                                </div>
                              </div>
                              <div className="p-2 bg-yellow-50 rounded text-center">
                                <div className="text-xs text-gray-600">Conversion</div>
                                <div className="text-sm font-medium text-yellow-600">
                                  {(frame.salesData.conversionRate * 100).toFixed(0)}%
                                </div>
                              </div>
                            </div>

                            {/* AI Recommendations */}
                            <div className="flex items-center space-x-4 text-xs text-gray-500">
                              <span>Customer Match: {frame.aiInsights.customerMatch}</span>
                              <span>Trend: {frame.aiInsights.trendDirection}</span>
                              <span>Season: {frame.aiInsights.seasonality}</span>
                              <span>Margin: {(frame.salesData.profitMargin * 100).toFixed(0)}%</span>
                            </div>
                          </div>
                        </div>
                        
                        <div className="flex items-center space-x-2">
                          {frame.stock <= frame.minStock && (
                            <Badge variant="destructive" className="text-xs">Low Stock</Badge>
                          )}
                          <DropdownMenu>
                            <DropdownMenuTrigger asChild>
                              <Button variant="ghost" size="sm">
                                <MoreHorizontal className="h-4 w-4" />
                              </Button>
                            </DropdownMenuTrigger>
                            <DropdownMenuContent align="end">
                              <DropdownMenuItem>
                                <Eye className="h-4 w-4 mr-2" />
                                View Details
                              </DropdownMenuItem>
                              <DropdownMenuItem>
                                <Package className="h-4 w-4 mr-2" />
                                Update Stock
                              </DropdownMenuItem>
                              <DropdownMenuItem>
                                <DollarSign className="h-4 w-4 mr-2" />
                                Edit Pricing
                              </DropdownMenuItem>
                              <DropdownMenuItem>
                                <Brain className="h-4 w-4 mr-2" />
                                AI Analysis
                              </DropdownMenuItem>
                              <DropdownMenuItem>
                                <TrendingUp className="h-4 w-4 mr-2" />
                                Sales Report
                              </DropdownMenuItem>
                            </DropdownMenuContent>
                          </DropdownMenu>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </CardContent>
          </Card>
        )}

        {activeTab === "lenses" && (
          <Card>
            <CardHeader>
              <CardTitle>Lens Inventory</CardTitle>
              <CardDescription>
                {mockLenses.length} lens types available
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {mockLenses.map((lens) => (
                  <div
                    key={lens.id}
                    className="flex items-center justify-between p-4 border rounded-lg hover:bg-gray-50 transition-colors"
                  >
                    <div className="flex items-center space-x-4">
                      <div className="w-16 h-16 bg-blue-100 rounded-lg flex items-center justify-center">
                        <Package className="h-8 w-8 text-blue-600" />
                      </div>
                      <div>
                        <h3 className="font-semibold text-gray-900">
                          {lens.type} Lens
                        </h3>
                        <div className="flex items-center space-x-4 text-sm text-gray-600">
                          <span>Material: {lens.material}</span>
                          <span>Coating: {lens.coating}</span>
                          <span>SKU: {lens.sku}</span>
                        </div>
                        <div className="flex items-center space-x-2 mt-1">
                          <Badge variant={lens.isActive ? "default" : "secondary"}>
                            {lens.isActive ? "Active" : "Inactive"}
                          </Badge>
                        </div>
                      </div>
                    </div>
                    <div className="flex items-center space-x-4">
                      <div className="text-right text-sm">
                        <p className="font-medium text-gray-900">${lens.price}</p>
                        <p className="text-gray-600">Cost: ${lens.cost}</p>
                        <p className="text-green-600 font-medium">
                          Stock: {lens.stock}
                        </p>
                      </div>
                      <DropdownMenu>
                        <DropdownMenuTrigger asChild>
                          <Button variant="ghost" size="sm">
                            <MoreHorizontal className="h-4 w-4" />
                          </Button>
                        </DropdownMenuTrigger>
                        <DropdownMenuContent align="end">
                          <DropdownMenuItem>
                            <Eye className="h-4 w-4 mr-2" />
                            View Details
                          </DropdownMenuItem>
                          <DropdownMenuItem>
                            <Package className="h-4 w-4 mr-2" />
                            Update Stock
                          </DropdownMenuItem>
                          <DropdownMenuItem>
                            <DollarSign className="h-4 w-4 mr-2" />
                            Edit Pricing
                          </DropdownMenuItem>
                        </DropdownMenuContent>
                      </DropdownMenu>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        )}

        {activeTab === "analytics" && (
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <Card>
              <CardHeader>
                <CardTitle>Top Selling Frames</CardTitle>
                <CardDescription>Most popular frames this month</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  {mockFrames.slice(0, 5).map((frame, index) => (
                    <div key={frame.id} className="flex items-center justify-between">
                      <div className="flex items-center space-x-3">
                        <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center">
                          <span className="text-blue-600 font-semibold text-sm">{index + 1}</span>
                        </div>
                        <div>
                          <p className="font-medium">{frame.brand} {frame.model}</p>
                          <p className="text-sm text-gray-600">{frame.category}</p>
                        </div>
                      </div>
                      <div className="text-right">
                        <p className="font-medium">${frame.price}</p>
                        <p className="text-sm text-gray-600">Stock: {frame.stock}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Inventory Alerts</CardTitle>
                <CardDescription>Items requiring attention</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  {lowStockItems.map((frame) => (
                    <div key={frame.id} className="flex items-center justify-between p-3 bg-orange-50 rounded-lg">
                      <div>
                        <p className="font-medium text-orange-900">{frame.brand} {frame.model}</p>
                        <p className="text-sm text-orange-700">SKU: {frame.sku}</p>
                      </div>
                      <Badge variant="destructive">
                        {frame.stock} left
                      </Badge>
                    </div>
                  ))}
                  {lowStockItems.length === 0 && (
                    <p className="text-gray-600 text-center py-4">No low stock alerts</p>
                  )}
                </div>
              </CardContent>
            </Card>
          </div>
        )}
      </div>
    </div>
  );
}
