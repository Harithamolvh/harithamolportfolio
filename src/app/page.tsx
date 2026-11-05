"use client";

import React, { useState } from "react";
import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import TechMatrixSection from "@/components/TechMatrixSection";
import ProjectsSection from "@/components/ProjectsSection";
import CodeConsoleSection from "@/components/CodeConsoleSection";
import TimelineSection from "@/components/TimelineSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";
import ResumeModal from "@/components/ResumeModal";
import AtsModal from "@/components/AtsModal";

export default function Home() {
  const [isResumeOpen, setIsResumeOpen] = useState(false);
  const [isAtsOpen, setIsAtsOpen] = useState(false);
  const [activeTechFilter, setActiveTechFilter] = useState<string | null>(null);

  return (
    <div className="ambient-canvas min-h-screen text-slate-900 relative">
      {/* Dynamic Navigation */}
      <Navbar
        onOpenResume={() => setIsResumeOpen(true)}
        onOpenAts={() => setIsAtsOpen(true)}
      />

      <main className="relative z-10">
        {/* Section 1: Hero Command Deck */}
        <HeroSection onOpenResume={() => setIsResumeOpen(true)} />

        {/* Section 2: Real-Time GitHub & Tech Matrix */}
        <TechMatrixSection
          activeTechFilter={activeTechFilter}
          onSelectTechFilter={setActiveTechFilter}
        />

        {/* Section 3: Interactive Project Explorer & Multi-Tenant Simulator */}
        <ProjectsSection
          activeTechFilter={activeTechFilter}
          onSelectTechFilter={setActiveTechFilter}
        />

        {/* Section 4: Interactive "Under-The-Hood" Code Console */}
        <CodeConsoleSection />

        {/* Section 5: Engineering Career Timeline */}
        <TimelineSection />

        {/* Section 6: Functional Contact Gateway & Lead Capture Hub */}
        <ContactSection />
      </main>

      {/* Footer */}
      <Footer />

      {/* Section 7: Modals & Drawer Overlays */}
      <ResumeModal
        isOpen={isResumeOpen}
        onClose={() => setIsResumeOpen(false)}
        onOpenAts={() => {
          setIsResumeOpen(false);
          setIsAtsOpen(true);
        }}
      />

      <AtsModal
        isOpen={isAtsOpen}
        onClose={() => setIsAtsOpen(false)}
      />
    </div>
  );
}
