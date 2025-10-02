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
  Target
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
    popularity: 4.8
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
    popularity: 4.6
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
    popularity: 4.7
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
            <h1 className="text-3xl font-bold text-gray-900">Optical Retail Management</h1>
            <p className="text-gray-600 mt-1">Manage frames, lenses, and optical inventory</p>
          </div>
          <div className="flex gap-2">
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
                  <div
                    key={frame.id}
                    className="flex items-center justify-between p-4 border rounded-lg hover:bg-gray-50 transition-colors"
                  >
                    <div className="flex items-center space-x-4">
                      <div className="w-16 h-16 bg-gray-100 rounded-lg flex items-center justify-center">
                        <Eye className="h-8 w-8 text-gray-400" />
                      </div>
                      <div>
                        <h3 className="font-semibold text-gray-900">
                          {frame.brand} {frame.model}
                        </h3>
                        <div className="flex items-center space-x-4 text-sm text-gray-600">
                          <span>Color: {frame.color}</span>
                          <span>Size: {frame.size}</span>
                          <span>Material: {frame.material}</span>
                          <span>SKU: {frame.sku}</span>
                        </div>
                        <div className="flex items-center space-x-2 mt-1">
                          <Badge variant={frame.isActive ? "default" : "secondary"}>
                            {frame.isActive ? "Active" : "Inactive"}
                          </Badge>
                          <Badge variant="outline">{frame.category}</Badge>
                          <Badge variant="outline">{frame.style}</Badge>
                          <div className="flex items-center space-x-1">
                            <Star className="h-3 w-3 text-yellow-500 fill-current" />
                            <span className="text-xs text-gray-600">{frame.popularity}</span>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="flex items-center space-x-4">
                      <div className="text-right text-sm">
                        <p className="font-medium text-gray-900">${frame.price}</p>
                        <p className="text-gray-600">Cost: ${frame.cost}</p>
                        <p className={`font-medium ${frame.stock <= frame.minStock ? 'text-red-600' : 'text-green-600'}`}>
                          Stock: {frame.stock}
                        </p>
                        {frame.stock <= frame.minStock && (
                          <Badge variant="destructive" className="text-xs">Low Stock</Badge>
                        )}
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
