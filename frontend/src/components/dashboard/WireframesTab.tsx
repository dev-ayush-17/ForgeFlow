"use client";

import { useBlueprint } from "@/hooks/useBlueprint";
import { MonitorPlay, Download, Share2 } from "lucide-react";
import { RegenerateButton } from "./RegenerateButton";
import { Button } from "@/components/ui/button";

export function WireframesTab() {
  const { blueprint } = useBlueprint();
  if (!blueprint) return null;

  const design = blueprint.design;

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center mb-8">
        <div>
          <div className="flex items-center gap-2 mb-2">
            <span className="text-xs font-mono text-muted-foreground uppercase tracking-widest">Workspace / Multi-Agent System V2.1</span>
          </div>
          <h1 className="text-4xl font-sans font-bold text-foreground">Wireframes & Flows</h1>
        </div>
        <div className="flex items-center gap-4">
          <RegenerateButton section="design" />
          <Button variant="outline" className="border-border bg-transparent text-foreground hover:bg-white/5">
            <Share2 className="w-4 h-4 mr-2" /> Share
          </Button>
          <Button className="bg-[#adc6ff] text-black hover:bg-[#adc6ff]/90">
            <Download className="w-4 h-4 mr-2" /> Export Figma
          </Button>
        </div>
      </div>

      <div className="grid grid-cols-1 gap-6">
        {/* User Flows */}
        <div className="glass-panel rounded-xl overflow-hidden">
          <div className="p-4 border-b border-border/40 flex justify-between items-center bg-black/50">
            <h3 className="font-bold text-sm">User Flows</h3>
          </div>
          <div className="p-6 grid grid-cols-1 md:grid-cols-2 gap-6">
            {design.flows.map((flow, i) => (
              <div key={i} className="bg-black/50 rounded-lg p-4 border border-border/40">
                <h4 className="font-bold text-[#ddb7ff] mb-4">{flow.name}</h4>
                <div className="flex flex-wrap items-center gap-2">
                  {flow.steps.map((step, j) => (
                    <div key={j} className="flex items-center gap-2">
                      <div className="px-3 py-1.5 bg-card border border-border rounded text-xs font-mono">
                        {step}
                      </div>
                      {j < flow.steps.length - 1 && <span className="text-muted-foreground">→</span>}
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Personas & Screens Bento */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <div className="glass-panel rounded-xl overflow-hidden">
            <div className="p-4 border-b border-border/40 bg-black/50">
              <h3 className="font-bold text-sm">Target Personas</h3>
            </div>
            <div className="p-6 space-y-6">
              {design.personas.map((persona, i) => (
                <div key={i} className="flex gap-4">
                  <div className="w-12 h-12 rounded-full bg-[#adc6ff]/10 border border-[#adc6ff]/30 flex items-center justify-center shrink-0">
                    <span className="font-bold text-[#adc6ff]">{persona.name.charAt(0)}</span>
                  </div>
                  <div>
                    <h4 className="font-bold text-sm">{persona.name}</h4>
                    <p className="text-xs font-mono text-muted-foreground mb-2">{persona.role}</p>
                    <ul className="text-sm text-muted-foreground list-disc pl-4">
                      {persona.goals.map((goal, j) => <li key={j}>{goal}</li>)}
                    </ul>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="glass-panel rounded-xl overflow-hidden">
            <div className="p-4 border-b border-border/40 bg-black/50">
              <h3 className="font-bold text-sm">Screen Inventory</h3>
            </div>
            <div className="p-0">
              <table className="w-full text-sm text-left">
                <tbody className="divide-y divide-border/40">
                  {design.screens.map((screen, i) => (
                    <tr key={i} className="hover:bg-white/5">
                      <td className="px-6 py-4 font-mono text-xs">{screen.name}</td>
                      <td className="px-6 py-4 text-xs text-muted-foreground">{screen.purpose}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>

        {/* Wireframes Details */}
        <div className="glass-panel rounded-xl overflow-hidden">
          <div className="p-4 border-b border-border/40 bg-black/50">
            <h3 className="font-bold text-sm">Component Specifications</h3>
          </div>
          <div className="p-6 grid grid-cols-1 md:grid-cols-3 gap-6">
            {design.wireframes.map((wf, i) => (
              <div key={i} className="border border-border/40 rounded-lg p-4 bg-black/30">
                <div className="flex items-center gap-2 mb-4">
                  <MonitorPlay className="w-4 h-4 text-muted-foreground" />
                  <h4 className="font-bold text-sm">{wf.screen}</h4>
                </div>
                <ul className="space-y-2">
                  {wf.components.map((comp, j) => (
                    <li key={j} className="flex items-center gap-2 text-xs font-mono text-muted-foreground">
                      <span className="w-1 h-1 rounded-full bg-[#ffb786]"></span>
                      {comp}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
