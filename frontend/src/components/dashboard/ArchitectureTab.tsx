"use client";

import { useBlueprint } from "@/hooks/useBlueprint";
import { Download, Server, Database, Cloud, Code, Network } from "lucide-react";
import { RegenerateButton } from "./RegenerateButton";
import { Button } from "@/components/ui/button";

export function ArchitectureTab() {
  const { blueprint } = useBlueprint();
  if (!blueprint) return null;

  const arch = blueprint.architecture;

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center mb-8">
        <div>
          <div className="flex items-center gap-2 mb-2">
            <span className="text-xs font-mono text-muted-foreground uppercase tracking-widest">Workspace / Multi-Agent System V2.1</span>
          </div>
          <h1 className="text-4xl font-sans font-bold text-foreground">System Architecture</h1>
        </div>
        <div className="flex items-center gap-4">
          <RegenerateButton section="architecture" />
          <Button variant="outline" className="border-border bg-transparent text-foreground hover:bg-white/5">
            <Download className="w-4 h-4 mr-2" /> Export Spec
          </Button>
          <Button className="bg-[#adc6ff] text-black hover:bg-[#adc6ff]/90">
            Deploy Changes
          </Button>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
        {/* Tech Stack */}
        <div className="lg:col-span-4 glass-panel rounded-xl overflow-hidden flex flex-col">
          <div className="p-4 border-b border-border/40 flex justify-between items-center bg-black/50">
            <div className="flex items-center gap-2">
              <Server className="w-4 h-4 text-[#adc6ff]" />
              <h3 className="font-bold text-sm">Recommended Tech Stack</h3>
            </div>
            <span className="text-[10px] font-mono px-2 py-0.5 rounded border border-[#adc6ff]/30 text-[#adc6ff] bg-[#adc6ff]/10">VERIFIED</span>
          </div>
          <div className="p-0 flex-1 divide-y divide-border/40">
            <div className="p-4 flex gap-4 items-start hover:bg-white/5 transition-colors">
              <div className="w-10 h-10 rounded border border-border bg-black flex items-center justify-center shrink-0">
                <Code className="w-5 h-5 text-muted-foreground" />
              </div>
              <div>
                <h4 className="font-bold text-sm mb-1">Frontend</h4>
                <p className="text-xs text-muted-foreground">{arch.tech_stack.frontend.framework}, {arch.tech_stack.frontend.language}</p>
              </div>
            </div>
            <div className="p-4 flex gap-4 items-start hover:bg-white/5 transition-colors">
              <div className="w-10 h-10 rounded border border-border bg-black flex items-center justify-center shrink-0">
                <Server className="w-5 h-5 text-muted-foreground" />
              </div>
              <div>
                <h4 className="font-bold text-sm mb-1">Backend</h4>
                <p className="text-xs text-muted-foreground">{arch.tech_stack.backend.framework}, {arch.tech_stack.backend.language}</p>
              </div>
            </div>
            <div className="p-4 flex gap-4 items-start hover:bg-white/5 transition-colors">
              <div className="w-10 h-10 rounded border border-border bg-black flex items-center justify-center shrink-0">
                <Database className="w-5 h-5 text-muted-foreground" />
              </div>
              <div>
                <h4 className="font-bold text-sm mb-1">Database</h4>
                <p className="text-xs text-muted-foreground">{arch.tech_stack.database.primary}, {arch.tech_stack.database.cache}</p>
              </div>
            </div>
            <div className="p-4 flex gap-4 items-start hover:bg-white/5 transition-colors">
              <div className="w-10 h-10 rounded border border-border bg-black flex items-center justify-center shrink-0">
                <Cloud className="w-5 h-5 text-muted-foreground" />
              </div>
              <div>
                <h4 className="font-bold text-sm mb-1">Infrastructure</h4>
                <p className="text-xs text-muted-foreground">{arch.tech_stack.infrastructure.cloud}, {arch.tech_stack.infrastructure.containerization}</p>
              </div>
            </div>
          </div>
        </div>

        {/* System Topology (Mocked Diagram) */}
        <div className="lg:col-span-8 glass-panel rounded-xl overflow-hidden flex flex-col">
          <div className="p-4 border-b border-border/40 flex justify-between items-center bg-black/50">
            <div className="flex items-center gap-2">
              <Network className="w-4 h-4 text-[#adc6ff]" />
              <h3 className="font-bold text-sm">System Topology</h3>
            </div>
          </div>
          <div className="flex-1 p-8 bg-black/80 flex items-center justify-center min-h-[300px] relative">
            <div className="absolute inset-0 bg-[radial-gradient(#262626_1px,transparent_1px)] [background-size:16px_16px] opacity-20" />
            
            <div className="relative z-10 flex items-center justify-center w-full max-w-2xl">
              <div className="flex w-full items-center justify-between gap-4">
                <div className="px-4 py-3 rounded-lg border border-border bg-card/80 text-xs font-mono">
                  {arch.system_topology.nodes[0] || "Client"}
                </div>
                <div className="flex-1 h-px border-t border-dashed border-[#adc6ff]/50 relative">
                  <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 px-2 bg-black text-[10px] font-mono text-muted-foreground">HTTPS</div>
                </div>
                <div className="px-4 py-3 rounded-lg border border-[#adc6ff] bg-[#adc6ff]/10 text-[#adc6ff] text-xs font-mono font-bold shadow-[0_0_15px_rgba(173,198,255,0.2)]">
                  {arch.system_topology.nodes[1] || "API Gateway"}
                </div>
                <div className="flex-1 h-px border-t border-dashed border-[#adc6ff]/50"></div>
                <div className="flex flex-col gap-8">
                  {arch.system_topology.nodes.slice(2, 5).map((node, i) => (
                    <div key={i} className="px-4 py-3 rounded-lg border border-border bg-card/80 text-xs font-mono w-32 text-center truncate">
                      {node}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Database Schema */}
        <div className="lg:col-span-5 glass-panel rounded-xl overflow-hidden">
          <div className="p-4 border-b border-border/40 flex justify-between items-center bg-black/50">
            <div className="flex items-center gap-2">
              <Database className="w-4 h-4 text-[#adc6ff]" />
              <h3 className="font-bold text-sm">Database Schema</h3>
            </div>
          </div>
          <div className="p-0">
            <table className="w-full text-sm text-left">
              <thead className="bg-white/5 text-xs text-muted-foreground font-mono">
                <tr>
                  <th className="px-4 py-3 font-normal">Table</th>
                  <th className="px-4 py-3 font-normal text-right">Action</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-border/40">
                {arch.database_schema.tables.map((table, i) => (
                  <tr key={i} className="hover:bg-white/5">
                    <td className="px-4 py-3 font-mono text-xs text-[#ddb7ff]">{table}</td>
                    <td className="px-4 py-3 text-right">
                      <span className="text-xs text-muted-foreground hover:text-foreground cursor-pointer">View Details</span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* API Endpoints */}
        <div className="lg:col-span-7 glass-panel rounded-xl overflow-hidden">
          <div className="p-4 border-b border-border/40 flex justify-between items-center bg-black/50">
            <div className="flex items-center gap-2">
              <Server className="w-4 h-4 text-[#adc6ff]" />
              <h3 className="font-bold text-sm">API Core Endpoints</h3>
            </div>
          </div>
          <div className="p-0 overflow-x-auto">
            <table className="w-full text-sm text-left">
              <thead className="bg-white/5 text-xs text-muted-foreground font-mono">
                <tr>
                  <th className="px-4 py-3 font-normal w-20">Method</th>
                  <th className="px-4 py-3 font-normal">Path</th>
                  <th className="px-4 py-3 font-normal">Desc</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-border/40">
                {arch.api_design.endpoints.map((ep, i) => (
                  <tr key={i} className="hover:bg-white/5">
                    <td className="px-4 py-3">
                      <span className={`text-[10px] font-mono font-bold px-1.5 py-0.5 rounded ${
                        ep.method === 'GET' ? 'bg-green-500/10 text-green-400' :
                        ep.method === 'POST' ? 'bg-blue-500/10 text-blue-400' :
                        ep.method === 'DELETE' ? 'bg-red-500/10 text-red-400' :
                        'bg-yellow-500/10 text-yellow-400'
                      }`}>
                        {ep.method}
                      </span>
                    </td>
                    <td className="px-4 py-3 font-mono text-xs">{ep.path}</td>
                    <td className="px-4 py-3 text-xs text-muted-foreground truncate max-w-[200px]">{ep.purpose}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}
