import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Toaster } from "@/components/ui/sonner";
import { Providers } from "@/components/providers";
import { Navigation } from "@/components/navigation";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "AI EyeCare Platform - Revolutionary Eyecare Management",
  description: "The ultimate AI-powered ophthalmology and optometry practice management platform with voice AI, predictive analytics, and optical retail optimization.",
  keywords: "eyecare, ophthalmology, optometry, practice management, AI, voice AI, SightSync, optical retail, vision care",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Providers>
          <Navigation />
          {children}
          <Toaster />
        </Providers>
      </body>
    </html>
  );
}
