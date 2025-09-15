import { DashboardHeader } from "@/components/dashboard/dashboard-header";
import { KPICards } from "@/components/dashboard/kpi-cards";
import { RevenueChart } from "@/components/dashboard/revenue-chart";
import { PatientFlow } from "@/components/dashboard/patient-flow";
import { AIInsights } from "@/components/dashboard/ai-insights";
import { AppointmentSchedule } from "@/components/dashboard/appointment-schedule";
import { EquipmentStatus } from "@/components/dashboard/equipment-status";
import { RecentActivity } from "@/components/dashboard/recent-activity";
import { VoiceAIDashboard } from "@/components/dashboard/voice-ai-dashboard";
import { OpticalRetailIntelligence } from "@/components/dashboard/optical-retail-intelligence";
import { ClinicalWorkflow } from "@/components/dashboard/clinical-workflow";
import { AdvancedAnalytics } from "@/components/dashboard/advanced-analytics";
import { OpticalSalesOptimization } from "@/components/dashboard/optical-sales-optimization";

export default function DashboardPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <DashboardHeader />
      
      <div className="container mx-auto px-4 py-6">
        {/* KPI Cards */}
        <KPICards />
        
        {/* Main Dashboard Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mt-6">
          {/* Left Column */}
          <div className="lg:col-span-2 space-y-6">
            <RevenueChart />
            <AppointmentSchedule />
            <RecentActivity />
          </div>
          
          {/* Right Column */}
          <div className="space-y-6">
            <AIInsights />
            <PatientFlow />
            <EquipmentStatus />
          </div>
        </div>

        {/* Advanced AI Features */}
        <div className="mt-8 space-y-6">
          <AdvancedAnalytics />
          <VoiceAIDashboard />
          <OpticalRetailIntelligence />
          <OpticalSalesOptimization />
          <ClinicalWorkflow />
        </div>
      </div>
    </div>
  );
}
