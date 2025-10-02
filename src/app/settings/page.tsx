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
  Package
} from "lucide-react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

export default function SettingsPage() {
  const [showApiKey, setShowApiKey] = useState(false);
  const [settings, setSettings] = useState({
    clinic: {
      name: "Nucleus EyeCare Center",
      address: "123 Medical Plaza, Suite 200",
      city: "San Francisco",
      state: "CA",
      zipCode: "94102",
      phone: "(555) 123-4567",
      email: "info@nucleuseyecare.com",
      website: "https://nucleuseyecare.com",
      timezone: "America/Los_Angeles"
    },
    notifications: {
      emailNotifications: true,
      smsNotifications: false,
      appointmentReminders: true,
      noShowAlerts: true,
      lowStockAlerts: true,
      revenueReports: true
    },
    appearance: {
      theme: "light",
      primaryColor: "blue",
      sidebarCollapsed: false,
      compactMode: false
    },
    integrations: {
      openaiApiKey: "sk-...",
      claudeApiKey: "claude-...",
      nucleusApiKey: "nucleus-...",
      databaseUrl: "postgresql://...",
      smtpHost: "smtp.gmail.com",
      smtpPort: "587"
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
            <h1 className="text-3xl font-bold text-gray-900">Settings</h1>
            <p className="text-gray-600 mt-1">Configure your practice management system</p>
          </div>
          <Button onClick={handleSave} className="bg-blue-600 hover:bg-blue-700">
            <Save className="h-4 w-4 mr-2" />
            Save Changes
          </Button>
        </div>

        <Tabs defaultValue="clinic" className="space-y-6">
          <TabsList className="grid w-full grid-cols-5">
            <TabsTrigger value="clinic">Clinic Info</TabsTrigger>
            <TabsTrigger value="notifications">Notifications</TabsTrigger>
            <TabsTrigger value="appearance">Appearance</TabsTrigger>
            <TabsTrigger value="integrations">Integrations</TabsTrigger>
            <TabsTrigger value="security">Security</TabsTrigger>
          </TabsList>

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
                    <Label htmlFor="nucleus-key">Nucleus AI API Key</Label>
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
                      <span className="text-sm">Nucleus AI</span>
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
