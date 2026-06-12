"use client";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { useBlueprint } from "@/hooks/useBlueprint";
import { Navbar } from "@/components/layout/Navbar";
import { Sidebar } from "@/components/layout/Sidebar";
import { ArchitectureTab } from "@/components/dashboard/ArchitectureTab";
import { WireframesTab } from "@/components/dashboard/WireframesTab";
import { DocumentationTab } from "@/components/dashboard/DocumentationTab";
import { PitchDeckTab } from "@/components/dashboard/PitchDeckTab";
import { PlanningTab } from "@/components/dashboard/PlanningTab";

export default function DashboardPage() {
  const router = useRouter();
  const { blueprint } = useBlueprint();
  const [activeTab, setActiveTab] = useState("architecture");

  useEffect(() => {
    if (!blueprint) {
      router.push("/");
    }
  }, [blueprint, router]);

  if (!blueprint) return null;

  const renderTab = () => {
    switch (activeTab) {
      case "architecture": return <ArchitectureTab />;
      case "wireframes": return <WireframesTab />;
      case "documentation": return <DocumentationTab />;
      case "pitch-deck": return <PitchDeckTab />;
      case "planning": return <PlanningTab />;
      default: return <ArchitectureTab />;
    }
  };

  return (
    <div className="flex flex-col min-h-screen bg-background">
      <Navbar />
      <div className="flex flex-1 overflow-hidden">
        <Sidebar activeTab={activeTab} setActiveTab={setActiveTab} />
        <main className="flex-1 overflow-y-auto p-8 lg:p-12">
          <div className="max-w-6xl mx-auto">
            {renderTab()}
          </div>
        </main>
      </div>
    </div>
  );
}
