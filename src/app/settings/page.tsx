"use client";

import { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Badge } from "@/components/ui/badge";
import { 
  Building,
  Shield,
  Bell,
  Palette,
  Key,
  Mail,
  Phone,
  Save,
  Eye,
  EyeOff,
  Calendar,
  AlertTriangle,
  Package,
  Brain,
  Zap,
  Activity,
  CheckCircle,
  Target,
  Settings,
  Database,
  Cloud,
  Wifi,
  WifiOff,
  RefreshCw,
  ExternalLink,
  Lock,
  Unlock,
  Server,
  Cpu,
  HardDrive,
  Monitor,
  CreditCard,
  TestTube
} from "lucide-react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

export default function SettingsPage() {
  const [showApiKey, setShowApiKey] = useState(false);
  const [settings, setSettings] = useState({
    clinic: {
      name: "SightSync EyeCare Center",
      address: "123 Medical Plaza, Suite 200",
      city: "San Francisco",
      state: "CA",
      zipCode: "94102",
      phone: "(555) 123-4567",
      email: "info@sightsync.com",
      website: "https://sightsync.com",
      timezone: "America/Los_Angeles"
    },
    notifications: {
      emailNotifications: true,
      smsNotifications: false,
      appointmentReminders: true,
      noShowAlerts: true,
      lowStockAlerts: true,
      revenueReports: true,
      aiInsights: true,
      riskAlerts: true,
      systemUpdates: true
    },
    appearance: {
      theme: "light",
      primaryColor: "blue",
      sidebarCollapsed: false,
      compactMode: false
    },
    ai: {
      sightSyncApiKey: "sk-sightsync-1234567890abcdef",
      openaiApiKey: "sk-openai-abcdef1234567890",
      claudeApiKey: "sk-claude-1234567890abcdef",
      aiEnabled: true,
      voiceAIEnabled: true,
      predictiveAnalytics: true,
      riskAssessment: true,
      salesOptimization: true,
      schedulingOptimization: true,
      dataRetention: "2 years",
      privacyMode: "standard"
    },
    integrations: {
      emrSystem: {
        name: "Epic MyChart",
        status: "connected",
        lastSync: "2024-01-20T10:30:00Z",
        syncFrequency: "real-time"
      },
      paymentProcessor: {
        name: "Stripe",
        status: "connected",
        lastSync: "2024-01-20T10:25:00Z",
        syncFrequency: "real-time"
      },
      labSystem: {
        name: "LabCorp",
        status: "connected",
        lastSync: "2024-01-20T09:45:00Z",
        syncFrequency: "hourly"
      },
      insuranceVerification: {
        name: "Change Healthcare",
        status: "connected",
        lastSync: "2024-01-20T10:15:00Z",
        syncFrequency: "real-time"
      },
      openaiApiKey: "sk-proj-abc123...",
      claudeApiKey: "sk-ant-abc123...",
      nucleusApiKey: "nuc-abc123...",
      databaseUrl: "postgresql://user:pass@localhost:5432/eyecare"
    },
    system: {
      serverStatus: "online",
      databaseStatus: "healthy",
      aiServiceStatus: "operational",
      lastBackup: "2024-01-20T02:00:00Z",
      uptime: "99.9%",
      responseTime: "45ms",
      storageUsed: "2.3TB",
      memoryUsage: "68%",
      cpuUsage: "42%"
    }
  });

  const handleSave = () => {
    // TODO: Implement save functionality
    console.log("Saving settings:", settings);
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="container mx-auto px-4 py-6">
        {/* Header */}
        <div className="flex items-center justify-between mb-6">
          <div>
            <h1 className="text-3xl font-bold text-gray-900">AI-Powered Settings Center</h1>
            <p className="text-gray-600 mt-1">Configure AI services, integrations, and system preferences</p>
          </div>
          <div className="flex gap-2">
            <Button variant="outline" className="flex items-center gap-2">
              <RefreshCw className="h-4 w-4" />
              Refresh Status
            </Button>
            <Button onClick={handleSave} className="bg-blue-600 hover:bg-blue-700">
              <Save className="h-4 w-4 mr-2" />
              Save Changes
            </Button>
          </div>
        </div>

        {/* System Status Overview */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
          <Card>
            <CardContent className="p-4">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-gray-600">AI Services</p>
                  <p className="text-2xl font-bold text-green-600">Operational</p>
                </div>
                <Brain className="h-8 w-8 text-green-600" />
              </div>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-4">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-gray-600">System Uptime</p>
                  <p className="text-2xl font-bold text-blue-600">99.9%</p>
                </div>
                <Activity className="h-8 w-8 text-blue-600" />
              </div>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-4">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-gray-600">Active Integrations</p>
                  <p className="text-2xl font-bold text-purple-600">4/4</p>
                </div>
                <CheckCircle className="h-8 w-8 text-purple-600" />
              </div>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-4">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-gray-600">Response Time</p>
                  <p className="text-2xl font-bold text-yellow-600">45ms</p>
                </div>
                <Zap className="h-8 w-8 text-yellow-600" />
              </div>
            </CardContent>
          </Card>
        </div>

        <Tabs defaultValue="ai-services" className="space-y-6">
          <TabsList className="grid w-full grid-cols-6">
            <TabsTrigger value="ai-services">AI Services</TabsTrigger>
            <TabsTrigger value="integrations">Integrations</TabsTrigger>
            <TabsTrigger value="system">System</TabsTrigger>
            <TabsTrigger value="clinic">Clinic Info</TabsTrigger>
            <TabsTrigger value="notifications">Notifications</TabsTrigger>
            <TabsTrigger value="appearance">Appearance</TabsTrigger>
          </TabsList>

          {/* AI Services Configuration */}
          <TabsContent value="ai-services">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Brain className="h-5 w-5 text-purple-600" />
                  AI Services Configuration
                </CardTitle>
                <CardDescription>
                  Configure AI models, voice services, and predictive analytics
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                {/* API Keys Section */}
                <div className="space-y-4">
                  <h3 className="text-lg font-semibold">API Keys</h3>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="sightSyncKey">SightSync API Key</Label>
                      <div className="flex items-center space-x-2">
                        <Input
                          id="sightSyncKey"
                          type={showApiKey ? "text" : "password"}
                          value={settings.ai.sightSyncApiKey}
                          className="font-mono text-sm"
                        />
                        <Button
                          variant="outline"
                          size="sm"
                          onClick={() => setShowApiKey(!showApiKey)}
                        >
                          {showApiKey ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
                        </Button>
                      </div>
                      <Badge variant="secondary" className="bg-green-100 text-green-800">
                        <CheckCircle className="h-3 w-3 mr-1" />
                        Active
                      </Badge>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="openaiKey">OpenAI API Key</Label>
                      <div className="flex items-center space-x-2">
                        <Input
                          id="openaiKey"
                          type={showApiKey ? "text" : "password"}
                          value={settings.ai.openaiApiKey}
                          className="font-mono text-sm"
                        />
                        <Button
                          variant="outline"
                          size="sm"
                          onClick={() => setShowApiKey(!showApiKey)}
                        >
                          {showApiKey ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
                        </Button>
                      </div>
                      <Badge variant="secondary" className="bg-green-100 text-green-800">
                        <CheckCircle className="h-3 w-3 mr-1" />
                        Active
                      </Badge>
                    </div>
                  </div>
                </div>

                {/* AI Features Section */}
                <div className="space-y-4">
                  <h3 className="text-lg font-semibold">AI Features</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="space-y-3">
                      <div className="flex items-center justify-between p-3 border rounded-lg">
                        <div className="flex items-center space-x-3">
                          <Brain className="h-5 w-5 text-purple-600" />
                          <div>
                            <p className="font-medium">AI Analytics</p>
                            <p className="text-sm text-gray-600">Predictive insights and recommendations</p>
                          </div>
                        </div>
                        <Badge variant={settings.ai.aiEnabled ? "default" : "secondary"}>
                          {settings.ai.aiEnabled ? "Enabled" : "Disabled"}
                        </Badge>
                      </div>

                      <div className="flex items-center justify-between p-3 border rounded-lg">
                        <div className="flex items-center space-x-3">
                          <Zap className="h-5 w-5 text-blue-600" />
                          <div>
                            <p className="font-medium">Voice AI</p>
                            <p className="text-sm text-gray-600">Natural language processing</p>
                          </div>
                        </div>
                        <Badge variant={settings.ai.voiceAIEnabled ? "default" : "secondary"}>
                          {settings.ai.voiceAIEnabled ? "Enabled" : "Disabled"}
                        </Badge>
                      </div>

                      <div className="flex items-center justify-between p-3 border rounded-lg">
                        <div className="flex items-center space-x-3">
                          <Activity className="h-5 w-5 text-green-600" />
                          <div>
                            <p className="font-medium">Predictive Analytics</p>
                            <p className="text-sm text-gray-600">Revenue and patient forecasting</p>
                          </div>
                        </div>
                        <Badge variant={settings.ai.predictiveAnalytics ? "default" : "secondary"}>
                          {settings.ai.predictiveAnalytics ? "Enabled" : "Disabled"}
                        </Badge>
                      </div>
                    </div>

                    <div className="space-y-3">
                      <div className="flex items-center justify-between p-3 border rounded-lg">
                        <div className="flex items-center space-x-3">
                          <Shield className="h-5 w-5 text-red-600" />
                          <div>
                            <p className="font-medium">Risk Assessment</p>
                            <p className="text-sm text-gray-600">Patient risk analysis</p>
                          </div>
                        </div>
                        <Badge variant={settings.ai.riskAssessment ? "default" : "secondary"}>
                          {settings.ai.riskAssessment ? "Enabled" : "Disabled"}
                        </Badge>
                      </div>

                      <div className="flex items-center justify-between p-3 border rounded-lg">
                        <div className="flex items-center space-x-3">
                          <Target className="h-5 w-5 text-yellow-600" />
                          <div>
                            <p className="font-medium">Sales Optimization</p>
                            <p className="text-sm text-gray-600">Optical revenue optimization</p>
                          </div>
                        </div>
                        <Badge variant={settings.ai.salesOptimization ? "default" : "secondary"}>
                          {settings.ai.salesOptimization ? "Enabled" : "Disabled"}
                        </Badge>
                      </div>

                      <div className="flex items-center justify-between p-3 border rounded-lg">
                        <div className="flex items-center space-x-3">
                          <Calendar className="h-5 w-5 text-indigo-600" />
                          <div>
                            <p className="font-medium">Schedule Optimization</p>
                            <p className="text-sm text-gray-600">Appointment scheduling AI</p>
                          </div>
                        </div>
                        <Badge variant={settings.ai.schedulingOptimization ? "default" : "secondary"}>
                          {settings.ai.schedulingOptimization ? "Enabled" : "Disabled"}
                        </Badge>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Privacy & Data Section */}
                <div className="space-y-4">
                  <h3 className="text-lg font-semibold">Privacy & Data</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="dataRetention">Data Retention Period</Label>
                      <Input
                        id="dataRetention"
                        value={settings.ai.dataRetention}
                        placeholder="2 years"
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="privacyMode">Privacy Mode</Label>
                      <Input
                        id="privacyMode"
                        value={settings.ai.privacyMode}
                        placeholder="standard"
                      />
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          {/* Integrations */}
          <TabsContent value="integrations">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Package className="h-5 w-5 text-blue-600" />
                  System Integrations
                </CardTitle>
                <CardDescription>
                  Manage third-party service connections and data synchronization
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {/* EMR System */}
                  <div className="p-4 border rounded-lg">
                    <div className="flex items-center justify-between mb-3">
                      <div className="flex items-center space-x-3">
                        <Database className="h-5 w-5 text-blue-600" />
                        <div>
                          <h4 className="font-semibold">{settings.integrations.emrSystem.name}</h4>
                          <p className="text-sm text-gray-600">Electronic Medical Records</p>
                        </div>
                      </div>
                      <Badge variant="default" className="bg-green-100 text-green-800">
                        <CheckCircle className="h-3 w-3 mr-1" />
                        Connected
                      </Badge>
                    </div>
                    <div className="space-y-2 text-sm text-gray-600">
                      <p>Last Sync: {new Date(settings.integrations.emrSystem.lastSync).toLocaleString()}</p>
                      <p>Frequency: {settings.integrations.emrSystem.syncFrequency}</p>
                    </div>
                    <Button variant="outline" size="sm" className="mt-3">
                      <ExternalLink className="h-4 w-4 mr-2" />
                      Configure
                    </Button>
                  </div>

                  {/* Payment Processor */}
                  <div className="p-4 border rounded-lg">
                    <div className="flex items-center justify-between mb-3">
                      <div className="flex items-center space-x-3">
                        <CreditCard className="h-5 w-5 text-green-600" />
                        <div>
                          <h4 className="font-semibold">{settings.integrations.paymentProcessor.name}</h4>
                          <p className="text-sm text-gray-600">Payment Processing</p>
                        </div>
                      </div>
                      <Badge variant="default" className="bg-green-100 text-green-800">
                        <CheckCircle className="h-3 w-3 mr-1" />
                        Connected
                      </Badge>
                    </div>
                    <div className="space-y-2 text-sm text-gray-600">
                      <p>Last Sync: {new Date(settings.integrations.paymentProcessor.lastSync).toLocaleString()}</p>
                      <p>Frequency: {settings.integrations.paymentProcessor.syncFrequency}</p>
                    </div>
                    <Button variant="outline" size="sm" className="mt-3">
                      <ExternalLink className="h-4 w-4 mr-2" />
                      Configure
                    </Button>
                  </div>

                  {/* Lab System */}
                  <div className="p-4 border rounded-lg">
                    <div className="flex items-center justify-between mb-3">
                      <div className="flex items-center space-x-3">
                        <TestTube className="h-5 w-5 text-purple-600" />
                        <div>
                          <h4 className="font-semibold">{settings.integrations.labSystem.name}</h4>
                          <p className="text-sm text-gray-600">Laboratory Results</p>
                        </div>
                      </div>
                      <Badge variant="default" className="bg-green-100 text-green-800">
                        <CheckCircle className="h-3 w-3 mr-1" />
                        Connected
                      </Badge>
                    </div>
                    <div className="space-y-2 text-sm text-gray-600">
                      <p>Last Sync: {new Date(settings.integrations.labSystem.lastSync).toLocaleString()}</p>
                      <p>Frequency: {settings.integrations.labSystem.syncFrequency}</p>
                    </div>
                    <Button variant="outline" size="sm" className="mt-3">
                      <ExternalLink className="h-4 w-4 mr-2" />
                      Configure
                    </Button>
                  </div>

                  {/* Insurance Verification */}
                  <div className="p-4 border rounded-lg">
                    <div className="flex items-center justify-between mb-3">
                      <div className="flex items-center space-x-3">
                        <Shield className="h-5 w-5 text-orange-600" />
                        <div>
                          <h4 className="font-semibold">{settings.integrations.insuranceVerification.name}</h4>
                          <p className="text-sm text-gray-600">Insurance Verification</p>
                        </div>
                      </div>
                      <Badge variant="default" className="bg-green-100 text-green-800">
                        <CheckCircle className="h-3 w-3 mr-1" />
                        Connected
                      </Badge>
                    </div>
                    <div className="space-y-2 text-sm text-gray-600">
                      <p>Last Sync: {new Date(settings.integrations.insuranceVerification.lastSync).toLocaleString()}</p>
                      <p>Frequency: {settings.integrations.insuranceVerification.syncFrequency}</p>
                    </div>
                    <Button variant="outline" size="sm" className="mt-3">
                      <ExternalLink className="h-4 w-4 mr-2" />
                      Configure
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          {/* System Monitoring */}
          <TabsContent value="system">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Monitor className="h-5 w-5 text-gray-600" />
                  System Monitoring
                </CardTitle>
                <CardDescription>
                  Real-time system performance and health metrics
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {/* System Status */}
                  <div className="space-y-4">
                    <h3 className="text-lg font-semibold">System Status</h3>
                    <div className="space-y-3">
                      <div className="flex items-center justify-between p-3 border rounded-lg">
                        <div className="flex items-center space-x-3">
                          <Server className="h-5 w-5 text-green-600" />
                          <div>
                            <p className="font-medium">Server Status</p>
                            <p className="text-sm text-gray-600">Main application server</p>
                          </div>
                        </div>
                        <Badge variant="default" className="bg-green-100 text-green-800">
                          {settings.system.serverStatus}
                        </Badge>
                      </div>

                      <div className="flex items-center justify-between p-3 border rounded-lg">
                        <div className="flex items-center space-x-3">
                          <Database className="h-5 w-5 text-blue-600" />
                          <div>
                            <p className="font-medium">Database Status</p>
                            <p className="text-sm text-gray-600">PostgreSQL database</p>
                          </div>
                        </div>
                        <Badge variant="default" className="bg-green-100 text-green-800">
                          {settings.system.databaseStatus}
                        </Badge>
                      </div>

                      <div className="flex items-center justify-between p-3 border rounded-lg">
                        <div className="flex items-center space-x-3">
                          <Brain className="h-5 w-5 text-purple-600" />
                          <div>
                            <p className="font-medium">AI Service Status</p>
                            <p className="text-sm text-gray-600">AI processing services</p>
                          </div>
                        </div>
                        <Badge variant="default" className="bg-green-100 text-green-800">
                          {settings.system.aiServiceStatus}
                        </Badge>
                      </div>
                    </div>
                  </div>

                  {/* Performance Metrics */}
                  <div className="space-y-4">
                    <h3 className="text-lg font-semibold">Performance Metrics</h3>
                    <div className="space-y-3">
                      <div className="p-3 border rounded-lg">
                        <div className="flex items-center justify-between mb-2">
                          <span className="text-sm font-medium">System Uptime</span>
                          <span className="text-sm text-gray-600">{settings.system.uptime}</span>
                        </div>
                        <div className="w-full bg-gray-200 rounded-full h-2">
                          <div className="bg-green-600 h-2 rounded-full" style={{ width: "99.9%" }}></div>
                        </div>
                      </div>

                      <div className="p-3 border rounded-lg">
                        <div className="flex items-center justify-between mb-2">
                          <span className="text-sm font-medium">Response Time</span>
                          <span className="text-sm text-gray-600">{settings.system.responseTime}</span>
                        </div>
                        <div className="w-full bg-gray-200 rounded-full h-2">
                          <div className="bg-blue-600 h-2 rounded-full" style={{ width: "85%" }}></div>
                        </div>
                      </div>

                      <div className="p-3 border rounded-lg">
                        <div className="flex items-center justify-between mb-2">
                          <span className="text-sm font-medium">Memory Usage</span>
                          <span className="text-sm text-gray-600">{settings.system.memoryUsage}</span>
                        </div>
                        <div className="w-full bg-gray-200 rounded-full h-2">
                          <div className="bg-yellow-600 h-2 rounded-full" style={{ width: "68%" }}></div>
                        </div>
                      </div>

                      <div className="p-3 border rounded-lg">
                        <div className="flex items-center justify-between mb-2">
                          <span className="text-sm font-medium">CPU Usage</span>
                          <span className="text-sm text-gray-600">{settings.system.cpuUsage}</span>
                        </div>
                        <div className="w-full bg-gray-200 rounded-full h-2">
                          <div className="bg-orange-600 h-2 rounded-full" style={{ width: "42%" }}></div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Storage Information */}
                <div className="space-y-4">
                  <h3 className="text-lg font-semibold">Storage Information</h3>
                  <div className="p-4 border rounded-lg">
                    <div className="flex items-center justify-between mb-3">
                      <div className="flex items-center space-x-3">
                        <HardDrive className="h-5 w-5 text-gray-600" />
                        <div>
                          <p className="font-medium">Storage Used</p>
                          <p className="text-sm text-gray-600">{settings.system.storageUsed} of 5TB</p>
                        </div>
                      </div>
                      <Badge variant="secondary">46% Used</Badge>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2">
                      <div className="bg-gray-600 h-2 rounded-full" style={{ width: "46%" }}></div>
                    </div>
                  </div>
                </div>

                {/* Backup Information */}
                <div className="space-y-4">
                  <h3 className="text-lg font-semibold">Backup Information</h3>
                  <div className="p-4 border rounded-lg">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-3">
                        <Cloud className="h-5 w-5 text-blue-600" />
                        <div>
                          <p className="font-medium">Last Backup</p>
                          <p className="text-sm text-gray-600">
                            {new Date(settings.system.lastBackup).toLocaleString()}
                          </p>
                        </div>
                      </div>
                      <Button variant="outline" size="sm">
                        <RefreshCw className="h-4 w-4 mr-2" />
                        Backup Now
                      </Button>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          {/* Clinic Information */}
          <TabsContent value="clinic">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Building className="h-5 w-5" />
                  Clinic Information
                </CardTitle>
                <CardDescription>
                  Manage your clinic&apos;s basic information and contact details
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <Label htmlFor="clinic-name">Clinic Name</Label>
                    <Input
                      id="clinic-name"
                      value={settings.clinic.name}
                      onChange={(e) => setSettings({
                        ...settings,
                        clinic: { ...settings.clinic, name: e.target.value }
                      })}
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="clinic-email">Email</Label>
                    <Input
                      id="clinic-email"
                      type="email"
                      value={settings.clinic.email}
                      onChange={(e) => setSettings({
                        ...settings,
                        clinic: { ...settings.clinic, email: e.target.value }
                      })}
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="clinic-phone">Phone</Label>
                    <Input
                      id="clinic-phone"
                      value={settings.clinic.phone}
                      onChange={(e) => setSettings({
                        ...settings,
                        clinic: { ...settings.clinic, phone: e.target.value }
                      })}
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="clinic-website">Website</Label>
                    <Input
                      id="clinic-website"
                      value={settings.clinic.website}
                      onChange={(e) => setSettings({
                        ...settings,
                        clinic: { ...settings.clinic, website: e.target.value }
                      })}
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="clinic-address">Address</Label>
                    <Input
                      id="clinic-address"
                      value={settings.clinic.address}
                      onChange={(e) => setSettings({
                        ...settings,
                        clinic: { ...settings.clinic, address: e.target.value }
                      })}
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="clinic-city">City</Label>
                    <Input
                      id="clinic-city"
                      value={settings.clinic.city}
                      onChange={(e) => setSettings({
                        ...settings,
                        clinic: { ...settings.clinic, city: e.target.value }
                      })}
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="clinic-state">State</Label>
                    <Input
                      id="clinic-state"
                      value={settings.clinic.state}
                      onChange={(e) => setSettings({
                        ...settings,
                        clinic: { ...settings.clinic, state: e.target.value }
                      })}
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="clinic-zip">ZIP Code</Label>
                    <Input
                      id="clinic-zip"
                      value={settings.clinic.zipCode}
                      onChange={(e) => setSettings({
                        ...settings,
                        clinic: { ...settings.clinic, zipCode: e.target.value }
                      })}
                    />
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          {/* Notifications */}
          <TabsContent value="notifications">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Bell className="h-5 w-5" />
                  Notification Settings
                </CardTitle>
                <CardDescription>
                  Configure how and when you receive notifications
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="space-y-4">
                  <div className="flex items-center justify-between p-4 border rounded-lg">
                    <div className="flex items-center space-x-3">
                      <Mail className="h-5 w-5 text-blue-600" />
                      <div>
                        <h3 className="font-medium">Email Notifications</h3>
                        <p className="text-sm text-gray-600">Receive notifications via email</p>
                      </div>
                    </div>
                    <Button
                      variant={settings.notifications.emailNotifications ? "default" : "outline"}
                      onClick={() => setSettings({
                        ...settings,
                        notifications: {
                          ...settings.notifications,
                          emailNotifications: !settings.notifications.emailNotifications
                        }
                      })}
                    >
                      {settings.notifications.emailNotifications ? "Enabled" : "Disabled"}
                    </Button>
                  </div>

                  <div className="flex items-center justify-between p-4 border rounded-lg">
                    <div className="flex items-center space-x-3">
                      <Phone className="h-5 w-5 text-green-600" />
                      <div>
                        <h3 className="font-medium">SMS Notifications</h3>
                        <p className="text-sm text-gray-600">Receive notifications via SMS</p>
                      </div>
                    </div>
                    <Button
                      variant={settings.notifications.smsNotifications ? "default" : "outline"}
                      onClick={() => setSettings({
                        ...settings,
                        notifications: {
                          ...settings.notifications,
                          smsNotifications: !settings.notifications.smsNotifications
                        }
                      })}
                    >
                      {settings.notifications.smsNotifications ? "Enabled" : "Disabled"}
                    </Button>
                  </div>

                  <div className="flex items-center justify-between p-4 border rounded-lg">
                    <div className="flex items-center space-x-3">
                      <Calendar className="h-5 w-5 text-orange-600" />
                      <div>
                        <h3 className="font-medium">Appointment Reminders</h3>
                        <p className="text-sm text-gray-600">Send automatic appointment reminders</p>
                      </div>
                    </div>
                    <Button
                      variant={settings.notifications.appointmentReminders ? "default" : "outline"}
                      onClick={() => setSettings({
                        ...settings,
                        notifications: {
                          ...settings.notifications,
                          appointmentReminders: !settings.notifications.appointmentReminders
                        }
                      })}
                    >
                      {settings.notifications.appointmentReminders ? "Enabled" : "Disabled"}
                    </Button>
                  </div>

                  <div className="flex items-center justify-between p-4 border rounded-lg">
                    <div className="flex items-center space-x-3">
                      <AlertTriangle className="h-5 w-5 text-red-600" />
                      <div>
                        <h3 className="font-medium">No-Show Alerts</h3>
                        <p className="text-sm text-gray-600">Get notified when patients don&apos;t show up</p>
                      </div>
                    </div>
                    <Button
                      variant={settings.notifications.noShowAlerts ? "default" : "outline"}
                      onClick={() => setSettings({
                        ...settings,
                        notifications: {
                          ...settings.notifications,
                          noShowAlerts: !settings.notifications.noShowAlerts
                        }
                      })}
                    >
                      {settings.notifications.noShowAlerts ? "Enabled" : "Disabled"}
                    </Button>
                  </div>

                  <div className="flex items-center justify-between p-4 border rounded-lg">
                    <div className="flex items-center space-x-3">
                      <Package className="h-5 w-5 text-purple-600" />
                      <div>
                        <h3 className="font-medium">Low Stock Alerts</h3>
                        <p className="text-sm text-gray-600">Get notified when inventory is low</p>
                      </div>
                    </div>
                    <Button
                      variant={settings.notifications.lowStockAlerts ? "default" : "outline"}
                      onClick={() => setSettings({
                        ...settings,
                        notifications: {
                          ...settings.notifications,
                          lowStockAlerts: !settings.notifications.lowStockAlerts
                        }
                      })}
                    >
                      {settings.notifications.lowStockAlerts ? "Enabled" : "Disabled"}
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          {/* Appearance */}
          <TabsContent value="appearance">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Palette className="h-5 w-5" />
                  Appearance Settings
                </CardTitle>
                <CardDescription>
                  Customize the look and feel of your dashboard
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <Label>Theme</Label>
                    <div className="flex space-x-2">
                      <Button
                        variant={settings.appearance.theme === "light" ? "default" : "outline"}
                        onClick={() => setSettings({
                          ...settings,
                          appearance: { ...settings.appearance, theme: "light" }
                        })}
                      >
                        Light
                      </Button>
                      <Button
                        variant={settings.appearance.theme === "dark" ? "default" : "outline"}
                        onClick={() => setSettings({
                          ...settings,
                          appearance: { ...settings.appearance, theme: "dark" }
                        })}
                      >
                        Dark
                      </Button>
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label>Primary Color</Label>
                    <div className="flex space-x-2">
                      {["blue", "green", "purple", "red", "orange"].map((color) => (
                        <Button
                          key={color}
                          variant={settings.appearance.primaryColor === color ? "default" : "outline"}
                          onClick={() => setSettings({
                            ...settings,
                            appearance: { ...settings.appearance, primaryColor: color }
                          })}
                          className={`capitalize ${settings.appearance.primaryColor === color ? `bg-${color}-600` : ''}`}
                        >
                          {color}
                        </Button>
                      ))}
                    </div>
                  </div>
                </div>

                <div className="space-y-4">
                  <div className="flex items-center justify-between p-4 border rounded-lg">
                    <div>
                      <h3 className="font-medium">Compact Mode</h3>
                      <p className="text-sm text-gray-600">Use smaller spacing and components</p>
                    </div>
                    <Button
                      variant={settings.appearance.compactMode ? "default" : "outline"}
                      onClick={() => setSettings({
                        ...settings,
                        appearance: {
                          ...settings.appearance,
                          compactMode: !settings.appearance.compactMode
                        }
                      })}
                    >
                      {settings.appearance.compactMode ? "Enabled" : "Disabled"}
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          {/* Integrations */}
          <TabsContent value="integrations">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Key className="h-5 w-5" />
                  API Integrations
                </CardTitle>
                <CardDescription>
                  Configure third-party service integrations
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="space-y-4">
                  <div className="space-y-2">
                    <Label htmlFor="openai-key">OpenAI API Key</Label>
                    <div className="flex space-x-2">
                      <Input
                        id="openai-key"
                        type={showApiKey ? "text" : "password"}
                        value={settings.integrations.openaiApiKey}
                        onChange={(e) => setSettings({
                          ...settings,
                          integrations: { ...settings.integrations, openaiApiKey: e.target.value }
                        })}
                      />
                      <Button
                        variant="outline"
                        onClick={() => setShowApiKey(!showApiKey)}
                      >
                        {showApiKey ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
                      </Button>
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="claude-key">Claude API Key</Label>
                    <div className="flex space-x-2">
                      <Input
                        id="claude-key"
                        type={showApiKey ? "text" : "password"}
                        value={settings.integrations.claudeApiKey}
                        onChange={(e) => setSettings({
                          ...settings,
                          integrations: { ...settings.integrations, claudeApiKey: e.target.value }
                        })}
                      />
                      <Button
                        variant="outline"
                        onClick={() => setShowApiKey(!showApiKey)}
                      >
                        {showApiKey ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
                      </Button>
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="nucleus-key">SightSync API Key</Label>
                    <div className="flex space-x-2">
                      <Input
                        id="nucleus-key"
                        type={showApiKey ? "text" : "password"}
                        value={settings.integrations.nucleusApiKey}
                        onChange={(e) => setSettings({
                          ...settings,
                          integrations: { ...settings.integrations, nucleusApiKey: e.target.value }
                        })}
                      />
                      <Button
                        variant="outline"
                        onClick={() => setShowApiKey(!showApiKey)}
                      >
                        {showApiKey ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
                      </Button>
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="database-url">Database URL</Label>
                    <div className="flex space-x-2">
                      <Input
                        id="database-url"
                        type={showApiKey ? "text" : "password"}
                        value={settings.integrations.databaseUrl}
                        onChange={(e) => setSettings({
                          ...settings,
                          integrations: { ...settings.integrations, databaseUrl: e.target.value }
                        })}
                      />
                      <Button
                        variant="outline"
                        onClick={() => setShowApiKey(!showApiKey)}
                      >
                        {showApiKey ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
                      </Button>
                    </div>
                  </div>
                </div>

                <div className="p-4 bg-blue-50 rounded-lg">
                  <h4 className="font-medium text-blue-900 mb-2">Integration Status</h4>
                  <div className="space-y-2">
                    <div className="flex items-center justify-between">
                      <span className="text-sm">OpenAI</span>
                      <Badge className="bg-green-600">Connected</Badge>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-sm">Claude</span>
                      <Badge className="bg-green-600">Connected</Badge>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-sm">SightSync</span>
                      <Badge className="bg-green-600">Connected</Badge>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-sm">Database</span>
                      <Badge className="bg-yellow-600">Pending</Badge>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          {/* Security */}
          <TabsContent value="security">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Shield className="h-5 w-5" />
                  Security Settings
                </CardTitle>
                <CardDescription>
                  Manage security settings and access controls
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="space-y-4">
                  <div className="p-4 border rounded-lg">
                    <h3 className="font-medium mb-2">HIPAA Compliance</h3>
                    <p className="text-sm text-gray-600 mb-3">
                      Your system is configured to meet HIPAA requirements for patient data protection.
                    </p>
                    <Badge className="bg-green-600">Compliant</Badge>
                  </div>

                  <div className="p-4 border rounded-lg">
                    <h3 className="font-medium mb-2">Data Encryption</h3>
                    <p className="text-sm text-gray-600 mb-3">
                      All patient data is encrypted both in transit and at rest.
                    </p>
                    <Badge className="bg-green-600">Enabled</Badge>
                  </div>

                  <div className="p-4 border rounded-lg">
                    <h3 className="font-medium mb-2">Access Logs</h3>
                    <p className="text-sm text-gray-600 mb-3">
                      Comprehensive audit logs are maintained for all system access.
                    </p>
                    <Badge className="bg-green-600">Active</Badge>
                  </div>

                  <div className="p-4 border rounded-lg">
                    <h3 className="font-medium mb-2">Two-Factor Authentication</h3>
                    <p className="text-sm text-gray-600 mb-3">
                      Enable 2FA for enhanced account security.
                    </p>
                    <Button variant="outline">Enable 2FA</Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
}
