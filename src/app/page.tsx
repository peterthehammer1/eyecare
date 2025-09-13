import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Hero } from "@/components/hero";
import { Features } from "@/components/features";
import { AIAnalytics } from "@/components/ai-analytics";
import { VoiceAI } from "@/components/voice-ai";
import { OpticalRetail } from "@/components/optical-retail";
import { Testimonials } from "@/components/testimonials";
import { CTA } from "@/components/cta";

export default function Home() {
  return (
    <main className="min-h-screen">
      <Hero />
      <Features />
      <AIAnalytics />
      <VoiceAI />
      <OpticalRetail />
      <Testimonials />
      <CTA />
    </main>
  );
}
