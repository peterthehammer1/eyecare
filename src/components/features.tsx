"use client";

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { 
  Stethoscope, 
  Calendar, 
  ShoppingCart, 
  FileText, 
  Brain, 
  Phone,
  BarChart3,
  Shield,
  Users,
  Eye,
  Zap,
  Target
} from "lucide-react";

const features = [
  {
    icon: Brain,
    title: "AI Vision Analysis",
    description: "Predict disease progression, analyze OCT scans, and provide treatment recommendations with 95%+ accuracy.",
    category: "Clinical Intelligence"
  },
  {
    icon: Phone,
    title: "Retell AI Voice Agents",
    description: "Natural conversation handling for appointments, prescriptions, and patient inquiries with eyecare-specific training.",
    category: "Patient Experience"
  },
  {
    icon: Calendar,
    title: "Smart Scheduling",
    description: "AI-powered appointment optimization considering equipment availability, provider preferences, and patient needs.",
    category: "Practice Management"
  },
  {
    icon: ShoppingCart,
    title: "Optical Retail AI",
    description: "Increase capture rates by 25% with AI-powered frame selection and lens recommendations.",
    category: "Revenue Optimization"
  },
  {
    icon: FileText,
    title: "Prescription Management",
    description: "Automated prescription generation for spectacles and contact lenses with insurance optimization.",
    category: "Clinical Workflow"
  },
  {
    icon: BarChart3,
    title: "Predictive Analytics",
    description: "Revenue forecasting, no-show prediction, and practice performance optimization with actionable insights.",
    category: "Business Intelligence"
  },
  {
    icon: Shield,
    title: "HIPAA Compliance",
    description: "Enterprise-grade security with end-to-end encryption and comprehensive audit trails.",
    category: "Security & Compliance"
  },
  {
    icon: Users,
    title: "Patient Portal",
    description: "Comprehensive patient management with ocular history tracking and family medical records.",
    category: "Patient Management"
  },
  {
    icon: Eye,
    title: "Diagnostic Integration",
    description: "Seamless integration with OCT, visual field analyzers, and other diagnostic equipment.",
    category: "Clinical Integration"
  },
  {
    icon: Zap,
    title: "Real-time Insights",
    description: "Live dashboards with real-time metrics, alerts, and performance indicators.",
    category: "Analytics"
  },
  {
    icon: Target,
    title: "Insurance Optimization",
    description: "Maximize both vision and medical benefits with automated claim processing and denial management.",
    category: "Revenue Cycle"
  },
  {
    icon: Stethoscope,
    title: "Telehealth Ready",
    description: "Virtual consultations and remote monitoring capabilities for comprehensive patient care.",
    category: "Modern Care"
  }
];

export function Features() {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            Everything You Need to Dominate Eyecare
          </h2>
          <p className="mt-4 text-lg text-gray-600 max-w-2xl mx-auto">
            Our platform combines cutting-edge AI with deep eyecare expertise to deliver 
            unprecedented efficiency and patient outcomes.
          </p>
        </div>
        
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          {features.map((feature, index) => (
            <Card key={index} className="hover:shadow-lg transition-shadow duration-300">
              <CardHeader>
                <div className="flex items-center space-x-3">
                  <div className="p-2 bg-blue-100 rounded-lg">
                    <feature.icon className="h-6 w-6 text-blue-600" />
                  </div>
                  <div>
                    <CardTitle className="text-lg">{feature.title}</CardTitle>
                    <Badge variant="secondary" className="text-xs">
                      {feature.category}
                    </Badge>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-gray-600">
                  {feature.description}
                </CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
