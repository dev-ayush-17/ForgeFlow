"use client";

import { useBlueprint } from "@/hooks/useBlueprint";
import { RegenerateButton } from "./RegenerateButton";
import { Download, CalendarCheck, Users } from "lucide-react";
import { Button } from "@/components/ui/button";

export function PlanningTab() {
  const { blueprint } = useBlueprint();
  if (!blueprint) return null;

  const plan = blueprint.planning;

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center mb-8">
        <div>
          <h1 className="text-4xl font-sans font-bold text-foreground">Project Planning</h1>
        </div>
        <div className="flex items-center gap-4">
          <RegenerateButton section="planning" />
          <Button className="bg-[#adc6ff] text-black hover:bg-[#adc6ff]/90">
            <Download className="w-4 h-4 mr-2" /> Export JSON
          </Button>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Milestones & Timeline */}
        <div className="lg:col-span-1 space-y-6">
          <div className="glass-panel rounded-xl p-6">
            <div className="flex items-center gap-2 mb-6">
              <CalendarCheck className="w-5 h-5 text-[#adc6ff]" />
              <h3 className="font-bold">Key Milestones</h3>
            </div>
            <div className="space-y-4">
              {plan.milestones.map((ms, i) => (
                <div key={i} className="relative pl-4 border-l border-border pb-4 last:border-0 last:pb-0">
                  <div className="absolute w-2 h-2 rounded-full bg-[#adc6ff] -left-[4.5px] top-1.5" />
                  <p className="text-xs font-mono text-[#adc6ff] mb-1">{ms.target_date}</p>
                  <h4 className="text-sm font-bold text-foreground">{ms.name}</h4>
                  <p className="text-xs text-muted-foreground mt-1">{ms.description}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="glass-panel rounded-xl p-6">
            <div className="flex items-center gap-2 mb-6">
              <Users className="w-5 h-5 text-[#ddb7ff]" />
              <h3 className="font-bold">Team Recommendations</h3>
            </div>
            <div className="space-y-4">
              {plan.team_recommendations.map((team, i) => (
                <div key={i} className="bg-black/50 p-3 rounded-lg border border-border/40">
                  <h4 className="text-sm font-bold text-[#ddb7ff] mb-2">{team.role}</h4>
                  <ul className="text-xs text-muted-foreground list-disc pl-4">
                    {team.responsibilities.map((r, j) => <li key={j}>{r}</li>)}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Sprint Plan */}
        <div className="lg:col-span-2 glass-panel rounded-xl overflow-hidden">
          <div className="p-4 border-b border-border/40 bg-black/50">
            <h3 className="font-bold text-sm">Sprint Execution Plan</h3>
          </div>
          <div className="p-6 space-y-6">
            {plan.sprint_plan.map((sprint, i) => (
              <div key={i} className="border border-border/40 rounded-xl overflow-hidden bg-black/30">
                <div className="bg-white/5 px-4 py-3 border-b border-border/40 flex justify-between items-center">
                  <h4 className="font-bold text-foreground text-sm">{sprint.sprint_name}</h4>
                  <span className="font-mono text-xs text-muted-foreground bg-black px-2 py-1 rounded">{sprint.duration}</span>
                </div>
                <div className="p-4 grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <h5 className="text-xs font-mono text-muted-foreground uppercase mb-2">Objectives</h5>
                    <ul className="text-sm text-foreground list-disc pl-4 space-y-1">
                      {sprint.objectives.map((obj, j) => <li key={j}>{obj}</li>)}
                    </ul>
                  </div>
                  <div>
                    <h5 className="text-xs font-mono text-muted-foreground uppercase mb-2">Deliverables</h5>
                    <ul className="text-sm text-muted-foreground list-disc pl-4 space-y-1">
                      {sprint.deliverables.map((del, j) => <li key={j}>{del}</li>)}
                    </ul>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
