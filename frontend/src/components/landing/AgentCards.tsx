"use client";

import { motion } from "framer-motion";
import { Share2, Paintbrush, FileText, Network } from "lucide-react";

const agents = [
  {
    id: "#001",
    name: "The Architect",
    description: "Defines system structure, selects the optimal tech stack, and charts data flow diagrams.",
    output: "Output: JSON / Mermaid",
    icon: Network,
  },
  {
    id: "#002",
    name: "The Designer",
    description: "Generates low-fi wireframes, color tokens, and atomic UI components for your MVP.",
    output: "Output: Figma / Tailwind",
    icon: Paintbrush,
  },
  {
    id: "#003",
    name: "The Technical Writer",
    description: "Drafts exhaustive documentation, READMEs, API specs, and setup guides.",
    output: "Output: Markdown",
    icon: FileText,
  },
  {
    id: "#004",
    name: "The Strategist",
    description: "Builds convincing pitch decks, roadmaps, and competitive analysis reports.",
    output: "Output: PPTX / PDF",
    icon: Share2,
  },
];

export function AgentCards() {
  return (
    <section className="py-24 border-t border-border/40 bg-card/30">
      <div className="container mx-auto max-w-6xl px-4">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-12 gap-4">
          <div>
            <h2 className="text-3xl font-sans font-bold text-foreground mb-2">Specialized AI Agents</h2>
            <p className="text-muted-foreground">The crew that powers your execution engine.</p>
          </div>
          <div className="px-3 py-1 rounded border border-border bg-black font-mono text-xs text-muted-foreground">
            CONCURRENT_PROCESSORS: 04
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {agents.map((agent, i) => (
            <motion.div
              key={agent.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="glass-panel p-6 rounded-xl flex flex-col h-full hover:border-[#adc6ff]/50 transition-colors group"
            >
              <div className="flex justify-between items-start mb-6">
                <agent.icon className="w-6 h-6 text-[#adc6ff] group-hover:scale-110 transition-transform" />
                <span className="font-mono text-xs text-muted-foreground">{agent.id}</span>
              </div>
              <h3 className="text-xl font-bold text-foreground mb-3">{agent.name}</h3>
              <p className="text-sm text-muted-foreground mb-8 flex-grow">{agent.description}</p>
              <div className="font-mono text-[10px] text-[#adc6ff] uppercase tracking-wider">
                {agent.output}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
