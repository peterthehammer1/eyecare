"use client";

import { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { 
  Search, 
  Plus, 
  Filter, 
  MoreHorizontal, 
  Eye, 
  Calendar,
  Phone,
  Mail,
  MapPin,
  User,
  Clock
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
    insurance: "Blue Cross Blue Shield"
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
    insurance: "Aetna"
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
    insurance: "Cigna"
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
    insurance: "Medicare"
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
          <Card>
            <CardContent className="p-4">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-gray-600">High Risk Patients</p>
                  <p className="text-2xl font-bold text-red-600">
                    {mockPatients.filter(p => p.riskFactors.length > 1).length}
                  </p>
                </div>
                <Clock className="h-8 w-8 text-red-600" />
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Patient List */}
        <Card>
          <CardHeader>
            <CardTitle>Patient Records</CardTitle>
            <CardDescription>
              {filteredPatients.length} patients found
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {filteredPatients.map((patient) => (
                <div
                  key={patient.id}
                  className="flex items-center justify-between p-4 border rounded-lg hover:bg-gray-50 transition-colors"
                >
                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center">
                      <span className="text-blue-600 font-semibold">
                        {patient.firstName[0]}{patient.lastName[0]}
                      </span>
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-900">
                        {patient.firstName} {patient.lastName}
                      </h3>
                      <div className="flex items-center space-x-4 text-sm text-gray-600">
                        <div className="flex items-center space-x-1">
                          <Mail className="h-3 w-3" />
                          <span>{patient.email}</span>
                        </div>
                        <div className="flex items-center space-x-1">
                          <Phone className="h-3 w-3" />
                          <span>{patient.phone}</span>
                        </div>
                        <div className="flex items-center space-x-1">
                          <Clock className="h-3 w-3" />
                          <span>DOB: {new Date(patient.dateOfBirth).toLocaleDateString()}</span>
                        </div>
                      </div>
                      <div className="flex items-center space-x-2 mt-1">
                        <Badge variant={patient.status === "active" ? "default" : "secondary"}>
                          {patient.status}
                        </Badge>
                        {patient.riskFactors.map((risk, index) => (
                          <Badge key={index} variant="outline" className="text-xs">
                            {risk.replace(/_/g, " ")}
                          </Badge>
                        ))}
                      </div>
                    </div>
                  </div>
                  <div className="flex items-center space-x-2">
                    <div className="text-right text-sm text-gray-600">
                      <p>Last Visit: {new Date(patient.lastVisit).toLocaleDateString()}</p>
                      {patient.nextAppointment && (
                        <p>Next: {new Date(patient.nextAppointment).toLocaleDateString()}</p>
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
                          <Calendar className="h-4 w-4 mr-2" />
                          Schedule Appointment
                        </DropdownMenuItem>
                        <DropdownMenuItem>
                          <User className="h-4 w-4 mr-2" />
                          Edit Patient
                        </DropdownMenuItem>
                      </DropdownMenuContent>
                    </DropdownMenu>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
