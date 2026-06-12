"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { useBlueprint } from "@/hooks/useBlueprint";
import { generateBlueprint } from "@/lib/api";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { AgentProgressCard } from "@/components/generation/AgentProgressCard";
import { OrchestrationHub } from "@/components/generation/OrchestrationHub";
import { Button } from "@/components/ui/button";
import { X, Network, Paintbrush, FileText, Share2, Calendar } from "lucide-react";
import { motion } from "framer-motion";

export default function GeneratePage() {
  const router = useRouter();
  const { idea, setBlueprint } = useBlueprint();
  const [progress, setProgress] = useState(0);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    if (!idea) {
      router.push("/");
      return;
    }

    let isSubscribed = true;

    // Fake progress simulation
    const timer = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 90) return prev;
        return prev + Math.random() * 5;
      });
    }, 1000);

    generateBlueprint(idea)
      .then((data) => {
        if (!isSubscribed) return;
        setProgress(100);
        setBlueprint(data);
        setTimeout(() => router.push("/dashboard"), 1000);
      })
      .catch((err) => {
        if (!isSubscribed) return;
        setError(err.message || "Failed to generate blueprint");
        clearInterval(timer);
      });

    return () => {
      isSubscribed = false;
      clearInterval(timer);
    };
  }, [idea, router, setBlueprint]);

  const handleCancel = () => {
    router.push("/");
  };

  const getAgentStatus = (min: number, max: number, name: string) => {
    if (error) return "WAITING";
    if (progress >= max) return "DONE";
    if (progress >= min) {
      if (name === "UI Agent" || name === "Documentation Agent") return "WRITING";
      return "PROCESSING";
    }
    return progress === 0 ? "WAITING" : "QUEUED";
  };

  const getAgentProgress = (min: number, max: number) => {
    if (progress >= max) return 100;
    if (progress <= min) return 0;
    return Math.round(((progress - min) / (max - min)) * 100);
  };

  return (
    <>
      <Navbar />
      <main className="flex-1 flex flex-col pt-12 pb-24 px-4 bg-[#0a0a0a] min-h-screen">
        <div className="container mx-auto max-w-5xl flex-1 flex flex-col">
          <div className="text-center mb-16">
            <h1 className="text-3xl md:text-5xl font-sans font-bold text-foreground mb-4">
              Generating Your Project Blueprint
            </h1>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Our specialized AI agents are crafting your startup vision. Each node handles a specific dimension of your architectural stack.
            </p>
          </div>

          {error ? (
            <div className="flex-1 flex flex-col items-center justify-center">
              <div className="glass-panel p-8 rounded-xl border-destructive/50 max-w-md text-center">
                <h3 className="text-destructive font-bold mb-2">Generation Failed</h3>
                <p className="text-muted-foreground text-sm mb-6">{error}</p>
                <Button variant="outline" onClick={handleCancel}>Return Home</Button>
              </div>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 flex-1">
              <AgentProgressCard 
                name="Architecture Agent" 
                task="Designing System Schema" 
                progress={getAgentProgress(0, 90)} 
                status={getAgentStatus(0, 90, "Architecture Agent") as any}
                icon={Network} 
              />
              <AgentProgressCard 
                name="UI Agent" 
                task="Generating Wireframes" 
                progress={getAgentProgress(10, 95)} 
                status={getAgentStatus(10, 95, "UI Agent") as any}
                icon={Paintbrush} 
              />
              <AgentProgressCard 
                name="Documentation Agent" 
                task="Writing API Specs" 
                progress={getAgentProgress(20, 100)} 
                status={getAgentStatus(20, 100, "Documentation Agent") as any}
                icon={FileText} 
              />
              <AgentProgressCard 
                name="Pitch Deck Agent" 
                task="Crafting Narrative" 
                progress={getAgentProgress(30, 95)} 
                status={getAgentStatus(30, 95, "Pitch Deck Agent") as any}
                icon={Share2} 
              />
              <AgentProgressCard 
                name="Project Planner Agent" 
                task="Planning Sprints" 
                progress={getAgentProgress(40, 100)} 
                status={getAgentStatus(40, 100, "Project Planner Agent") as any}
                icon={Calendar} 
              />
              
              <OrchestrationHub progress={progress} />
            </div>
          )}

          {!error && (
            <div className="mt-16 flex flex-col items-center gap-6">
              <div className="glass-panel px-6 py-3 rounded-full flex items-center gap-3">
                <div className="w-2 h-2 rounded-full bg-[#adc6ff] animate-pulse" />
                <span className="font-mono text-xs text-muted-foreground">
                  Status: Processing 5/5 Agents active
                </span>
              </div>
              <Button 
                variant="outline" 
                className="border-border bg-transparent text-foreground hover:bg-white/5"
                onClick={handleCancel}
              >
                <X className="w-4 h-4 mr-2" /> Cancel Process
              </Button>
            </div>
          )}
        </div>
      </main>
      <Footer />
    </>
  );
}
