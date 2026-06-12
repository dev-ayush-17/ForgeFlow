"use client";

import Link from "next/link";
import { LayoutDashboard, Network, MonitorPlay, FileText, Presentation, Calendar, Settings } from "lucide-react";
import { usePathname } from "next/navigation";

export function Sidebar({ activeTab, setActiveTab }: { activeTab: string, setActiveTab: (tab: string) => void }) {
  const tabs = [
    { id: "architecture", name: "Architecture", icon: Network },
    { id: "wireframes", name: "Wireframes", icon: MonitorPlay },
    { id: "documentation", name: "Documentation", icon: FileText },
    { id: "pitch-deck", name: "Pitch Deck", icon: Presentation },
    { id: "planning", name: "Project Planning", icon: Calendar },
  ];

  return (
    <aside className="w-64 border-r border-border/40 bg-card/30 flex flex-col h-[calc(100vh-4rem)] sticky top-16">
      <div className="p-6 pb-2">
        <h2 className="text-xs font-mono font-bold text-muted-foreground tracking-widest uppercase mb-4">Workspace</h2>
        <nav className="space-y-1">
          <button 
            className="w-full flex items-center gap-3 px-3 py-2 text-sm text-muted-foreground hover:text-foreground hover:bg-white/5 rounded-md transition-colors text-left"
          >
            <LayoutDashboard className="w-4 h-4" />
            Overview
          </button>
          
          {tabs.map((tab) => {
            const isActive = activeTab === tab.id;
            return (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`w-full flex items-center gap-3 px-3 py-2 text-sm transition-colors text-left rounded-md ${
                  isActive 
                    ? "bg-white/10 text-foreground font-medium" 
                    : "text-muted-foreground hover:text-foreground hover:bg-white/5"
                }`}
              >
                <tab.icon className={`w-4 h-4 ${isActive ? "text-[#adc6ff]" : ""}`} />
                {tab.name}
              </button>
            );
          })}
        </nav>
      </div>
      
      <div className="mt-auto p-6 pt-0 border-t border-border/40">
        <div className="flex items-center gap-3 mt-6">
          <div className="w-8 h-8 rounded-full bg-[#adc6ff] text-black flex items-center justify-center font-bold text-xs">
            JD
          </div>
          <div>
            <p className="text-sm font-medium text-foreground">John Developer</p>
            <p className="text-xs text-muted-foreground font-mono">Admin</p>
          </div>
          <Settings className="w-4 h-4 text-muted-foreground ml-auto cursor-pointer hover:text-foreground transition-colors" />
        </div>
      </div>
    </aside>
  );
}
