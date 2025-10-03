"use client";

import { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { 
  Search, 
  Plus, 
  MoreHorizontal, 
  Eye, 
  Calendar,
  Phone,
  Mail,
  User,
  Clock,
  Brain,
  AlertTriangle,
  Shield,
  TrendingUp,
  Activity,
  Heart,
  Zap,
  Target,
  CheckCircle,
  Filter
} from "lucide-react";
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu";

// Mock data - will be replaced with real data from database
const mockPatients = [
  {
    id: "1",
    firstName: "Sarah",
    lastName: "Chen",
    email: "sarah.chen@email.com",
    phone: "(555) 123-4567",
    dateOfBirth: "1985-03-15",
    gender: "FEMALE",
    lastVisit: "2024-01-15",
    nextAppointment: "2024-02-15",
    status: "active",
    riskFactors: ["diabetes", "family_history_glaucoma"],
    insurance: "Blue Cross Blue Shield",
    aiRiskScore: 87,
    aiInsights: {
      diseaseRisk: "High",
      progressionRate: "Moderate",
      treatmentResponse: "Excellent",
      opticalPotential: "High",
      noShowProbability: 12
    },
    conditions: ["Early Glaucoma", "Diabetic Retinopathy"],
    lastOCT: "2024-01-15",
    visualAcuity: "20/25 OD, 20/30 OS"
  },
  {
    id: "2",
    firstName: "Michael",
    lastName: "Rodriguez",
    email: "michael.r@email.com",
    phone: "(555) 234-5678",
    dateOfBirth: "1978-07-22",
    gender: "MALE",
    lastVisit: "2024-01-10",
    nextAppointment: null,
    status: "active",
    riskFactors: ["hypertension"],
    insurance: "Aetna",
    aiRiskScore: 45,
    aiInsights: {
      diseaseRisk: "Low",
      progressionRate: "Stable",
      treatmentResponse: "Good",
      opticalPotential: "Medium",
      noShowProbability: 8
    },
    conditions: ["Hypertensive Retinopathy"],
    lastOCT: "2024-01-10",
    visualAcuity: "20/20 OD, 20/20 OS"
  },
  {
    id: "3",
    firstName: "Emily",
    lastName: "Johnson",
    email: "emily.j@email.com",
    phone: "(555) 345-6789",
    dateOfBirth: "1992-11-08",
    gender: "FEMALE",
    lastVisit: "2023-12-20",
    nextAppointment: "2024-02-20",
    status: "active",
    riskFactors: ["myopia"],
    insurance: "Cigna",
    aiRiskScore: 23,
    aiInsights: {
      diseaseRisk: "Low",
      progressionRate: "Stable",
      treatmentResponse: "Good",
      opticalPotential: "Very High",
      noShowProbability: 5
    },
    conditions: ["High Myopia"],
    lastOCT: "2023-12-20",
    visualAcuity: "20/400 OD, 20/400 OS"
  },
  {
    id: "4",
    firstName: "David",
    lastName: "Kim",
    email: "david.kim@email.com",
    phone: "(555) 456-7890",
    dateOfBirth: "1965-05-12",
    gender: "MALE",
    lastVisit: "2023-11-15",
    nextAppointment: null,
    status: "inactive",
    riskFactors: ["diabetes", "hypertension"],
    insurance: "Medicare",
    aiRiskScore: 92,
    aiInsights: {
      diseaseRisk: "Critical",
      progressionRate: "Rapid",
      treatmentResponse: "Poor",
      opticalPotential: "Low",
      noShowProbability: 25
    },
    conditions: ["Advanced Diabetic Retinopathy", "Macular Edema"],
    lastOCT: "2023-11-15",
    visualAcuity: "20/200 OD, 20/300 OS"
  }
];

export default function PatientsPage() {
  const [searchTerm, setSearchTerm] = useState("");
  const [filterStatus, setFilterStatus] = useState("all");

  const filteredPatients = mockPatients.filter(patient => {
    const matchesSearch = 
      patient.firstName.toLowerCase().includes(searchTerm.toLowerCase()) ||
      patient.lastName.toLowerCase().includes(searchTerm.toLowerCase()) ||
      patient.email.toLowerCase().includes(searchTerm.toLowerCase()) ||
      patient.phone.includes(searchTerm);
    
    const matchesFilter = filterStatus === "all" || patient.status === filterStatus;
    
    return matchesSearch && matchesFilter;
  });

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="container mx-auto px-4 py-6">
        {/* Header */}
        <div className="flex items-center justify-between mb-6">
          <div>
            <h1 className="text-3xl font-bold text-gray-900">Patient Management</h1>
            <p className="text-gray-600 mt-1">Manage your patient records and medical history</p>
          </div>
          <Button className="bg-blue-600 hover:bg-blue-700">
            <Plus className="h-4 w-4 mr-2" />
            Add Patient
          </Button>
        </div>

        {/* Search and Filters */}
        <Card className="mb-6">
          <CardContent className="p-6">
            <div className="flex flex-col sm:flex-row gap-4">
              <div className="flex-1 relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
                <Input
                  placeholder="Search patients by name, email, or phone..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="pl-10"
                />
              </div>
              <div className="flex gap-2">
                <Button
                  variant={filterStatus === "all" ? "default" : "outline"}
                  onClick={() => setFilterStatus("all")}
                  size="sm"
                >
                  All
                </Button>
                <Button
                  variant={filterStatus === "active" ? "default" : "outline"}
                  onClick={() => setFilterStatus("active")}
                  size="sm"
                >
                  Active
                </Button>
                <Button
                  variant={filterStatus === "inactive" ? "default" : "outline"}
                  onClick={() => setFilterStatus("inactive")}
                  size="sm"
                >
                  Inactive
                </Button>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Patient Stats */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-6">
          <Card>
            <CardContent className="p-4">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-gray-600">Total Patients</p>
                  <p className="text-2xl font-bold text-gray-900">{mockPatients.length}</p>
                </div>
                <User className="h-8 w-8 text-blue-600" />
              </div>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-4">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-gray-600">Active Patients</p>
                  <p className="text-2xl font-bold text-green-600">
                    {mockPatients.filter(p => p.status === "active").length}
                  </p>
                </div>
                <Eye className="h-8 w-8 text-green-600" />
              </div>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-4">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-gray-600">Upcoming Appointments</p>
                  <p className="text-2xl font-bold text-orange-600">
                    {mockPatients.filter(p => p.nextAppointment).length}
                  </p>
                </div>
                <Calendar className="h-8 w-8 text-orange-600" />
              </div>
            </CardContent>
          </Card>
        {/* Patient Stats */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4 mb-6">
          <Card>
            <CardContent className="p-4">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-gray-600">Total Patients</p>
                  <p className="text-2xl font-bold text-gray-900">{mockPatients.length}</p>
                </div>
                <User className="h-8 w-8 text-blue-600" />
              </div>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-4">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-gray-600">High Risk Patients</p>
                  <p className="text-2xl font-bold text-red-600">
                    {mockPatients.filter(p => p.aiRiskScore >= 80).length}
                  </p>
                </div>
                <AlertTriangle className="h-8 w-8 text-red-600" />
              </div>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-4">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-gray-600">AI Predictions</p>
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
                  <p className="text-sm text-gray-600">Optical Potential</p>
                  <p className="text-2xl font-bold text-green-600">
                    {mockPatients.filter(p => p.aiInsights.opticalPotential === "High" || p.aiInsights.opticalPotential === "Very High").length}
                  </p>
                </div>
                <Eye className="h-8 w-8 text-green-600" />
              </div>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-4">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-gray-600">No-Show Risk</p>
                  <p className="text-2xl font-bold text-orange-600">
                    {mockPatients.filter(p => p.aiInsights.noShowProbability >= 20).length}
                  </p>
                </div>
                <Clock className="h-8 w-8 text-orange-600" />
              </div>
            </CardContent>
          </Card>
        </div>

        {/* AI Risk Assessment Panel */}
        <Card className="mb-6">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Brain className="h-5 w-5 text-purple-600" />
              AI Risk Assessment Dashboard
            </CardTitle>
            <CardDescription>
              Real-time patient risk analysis and predictive insights
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="p-4 bg-red-50 rounded-lg border border-red-200">
                <div className="flex items-center gap-2 mb-2">
                  <AlertTriangle className="h-4 w-4 text-red-600" />
                  <span className="font-medium text-red-800">Critical Risk</span>
                </div>
                <div className="text-2xl font-bold text-red-600">
                  {mockPatients.filter(p => p.aiRiskScore >= 90).length}
                </div>
                <div className="text-sm text-red-600">Immediate attention required</div>
              </div>
              <div className="p-4 bg-yellow-50 rounded-lg border border-yellow-200">
                <div className="flex items-center gap-2 mb-2">
                  <Shield className="h-4 w-4 text-yellow-600" />
                  <span className="font-medium text-yellow-800">Moderate Risk</span>
                </div>
                <div className="text-2xl font-bold text-yellow-600">
                  {mockPatients.filter(p => p.aiRiskScore >= 50 && p.aiRiskScore < 90).length}
                </div>
                <div className="text-sm text-yellow-600">Monitor closely</div>
              </div>
              <div className="p-4 bg-green-50 rounded-lg border border-green-200">
                <div className="flex items-center gap-2 mb-2">
                  <CheckCircle className="h-4 w-4 text-green-600" />
                  <span className="font-medium text-green-800">Low Risk</span>
                </div>
                <div className="text-2xl font-bold text-green-600">
                  {mockPatients.filter(p => p.aiRiskScore < 50).length}
                </div>
                <div className="text-sm text-green-600">Stable condition</div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Patient List */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredPatients.map((patient) => (
            <Card key={patient.id} className="hover:shadow-lg transition-shadow duration-300">
              <CardHeader className="pb-3">
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-3">
                    <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center">
                      <User className="h-5 w-5 text-blue-600" />
                    </div>
                    <div>
                      <CardTitle className="text-lg">{patient.firstName} {patient.lastName}</CardTitle>
                      <CardDescription className="text-sm">
                        {new Date().getFullYear() - new Date(patient.dateOfBirth).getFullYear()} years old
                      </CardDescription>
                    </div>
                  </div>
                  <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                      <Button variant="ghost" size="sm">
                        <MoreHorizontal className="h-4 w-4" />
                      </Button>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent align="end">
                      <DropdownMenuItem>View Details</DropdownMenuItem>
                      <DropdownMenuItem>Edit Patient</DropdownMenuItem>
                      <DropdownMenuItem>Schedule Appointment</DropdownMenuItem>
                      <DropdownMenuItem className="text-red-600">Archive</DropdownMenuItem>
                    </DropdownMenuContent>
                  </DropdownMenu>
                </div>
              </CardHeader>
              <CardContent className="space-y-4">
                {/* AI Risk Score */}
                <div className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                  <div className="flex items-center gap-2">
                    <Brain className="h-4 w-4 text-purple-600" />
                    <span className="text-sm font-medium">AI Risk Score</span>
                  </div>
                  <Badge 
                    variant={patient.aiRiskScore >= 80 ? "destructive" : patient.aiRiskScore >= 50 ? "default" : "secondary"}
                    className="text-sm font-bold"
                  >
                    {patient.aiRiskScore}
                  </Badge>
                </div>

                {/* AI Insights */}
                <div className="space-y-2">
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-gray-600">Disease Risk:</span>
                    <Badge 
                      variant={patient.aiInsights.diseaseRisk === "Critical" ? "destructive" : 
                              patient.aiInsights.diseaseRisk === "High" ? "default" : "secondary"}
                    >
                      {patient.aiInsights.diseaseRisk}
                    </Badge>
                  </div>
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-gray-600">Optical Potential:</span>
                    <Badge 
                      variant={patient.aiInsights.opticalPotential === "Very High" ? "default" : 
                              patient.aiInsights.opticalPotential === "High" ? "default" : "secondary"}
                    >
                      {patient.aiInsights.opticalPotential}
                    </Badge>
                  </div>
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-gray-600">No-Show Risk:</span>
                    <Badge 
                      variant={patient.aiInsights.noShowProbability >= 20 ? "destructive" : 
                              patient.aiInsights.noShowProbability >= 10 ? "default" : "secondary"}
                    >
                      {patient.aiInsights.noShowProbability}%
                    </Badge>
                  </div>
                </div>

                {/* Conditions */}
                <div>
                  <div className="text-sm font-medium text-gray-700 mb-2">Conditions:</div>
                  <div className="flex flex-wrap gap-1">
                    {patient.conditions.map((condition, index) => (
                      <Badge key={index} variant="outline" className="text-xs">
                        {condition}
                      </Badge>
                    ))}
                  </div>
                </div>

                {/* Contact Info */}
                <div className="space-y-2 text-sm text-gray-600">
                  <div className="flex items-center gap-2">
                    <Phone className="h-3 w-3" />
                    <span>{patient.phone}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Mail className="h-3 w-3" />
                    <span className="truncate">{patient.email}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Calendar className="h-3 w-3" />
                    <span>Last visit: {new Date(patient.lastVisit).toLocaleDateString()}</span>
                  </div>
                </div>

                {/* Visual Acuity */}
                <div className="p-2 bg-blue-50 rounded text-sm">
                  <div className="font-medium text-blue-800">Visual Acuity:</div>
                  <div className="text-blue-700">{patient.visualAcuity}</div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
}
