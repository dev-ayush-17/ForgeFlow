"use client";

import { useBlueprint } from "@/hooks/useBlueprint";
import { RegenerateButton } from "./RegenerateButton";
import { Download, BookOpen } from "lucide-react";
import { Button } from "@/components/ui/button";

export function DocumentationTab() {
  const { blueprint } = useBlueprint();
  if (!blueprint) return null;

  const doc = blueprint.documentation;

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center mb-8">
        <div>
          <h1 className="text-4xl font-sans font-bold text-foreground">Project Documentation</h1>
        </div>
        <div className="flex items-center gap-4">
          <RegenerateButton section="documentation" />
          <Button className="bg-[#adc6ff] text-black hover:bg-[#adc6ff]/90">
            <Download className="w-4 h-4 mr-2" /> Export Markdown
          </Button>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Vision & Problem */}
        <div className="space-y-6">
          <div className="glass-panel rounded-xl overflow-hidden p-6">
            <h3 className="font-bold text-[#adc6ff] mb-4">Problem Statement</h3>
            <h4 className="font-bold text-lg mb-2">{doc.problem_statement.title}</h4>
            <p className="text-sm text-muted-foreground mb-4">{doc.problem_statement.summary}</p>
            <ul className="text-sm text-muted-foreground list-disc pl-4">
              {doc.problem_statement.challenges.map((c, i) => <li key={i}>{c}</li>)}
            </ul>
          </div>

          <div className="glass-panel rounded-xl overflow-hidden p-6">
            <h3 className="font-bold text-[#ddb7ff] mb-4">Product Vision</h3>
            <blockquote className="border-l-2 border-[#ddb7ff] pl-4 italic text-sm text-muted-foreground mb-4">
              "{doc.product_vision.vision_statement}"
            </blockquote>
            <p className="text-sm text-foreground mb-4 font-medium">{doc.product_vision.mission}</p>
            <h5 className="font-bold text-xs font-mono uppercase text-muted-foreground mb-2">Success Metrics</h5>
            <ul className="text-sm text-muted-foreground list-disc pl-4">
              {doc.product_vision.success_metrics.map((m, i) => <li key={i}>{m}</li>)}
            </ul>
          </div>
        </div>

        {/* Stories & Requirements */}
        <div className="space-y-6">
          <div className="glass-panel rounded-xl overflow-hidden p-6">
            <h3 className="font-bold text-[#ffb786] mb-4">User Stories</h3>
            <div className="space-y-3">
              {doc.user_stories.map((story, i) => (
                <div key={i} className="bg-black/50 p-3 rounded-lg border border-border/40 text-sm">
                  <span className="text-[#ffb786] font-mono text-xs">{story.actor}</span>
                  <p className="text-foreground mt-1">{story.goal}</p>
                  <p className="text-muted-foreground text-xs mt-1 italic">{story.benefit}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      <div className="glass-panel rounded-xl overflow-hidden">
        <div className="p-4 border-b border-border/40 bg-black/50 flex items-center gap-2">
          <BookOpen className="w-4 h-4 text-[#adc6ff]" />
          <h3 className="font-bold text-sm">Functional Requirements</h3>
        </div>
        <table className="w-full text-sm text-left">
          <thead className="bg-white/5 text-xs text-muted-foreground font-mono">
            <tr>
              <th className="px-6 py-3 font-normal w-24">ID</th>
              <th className="px-6 py-3 font-normal">Requirement</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-border/40">
            {doc.functional_requirements.map((fr, i) => (
              <tr key={i} className="hover:bg-white/5">
                <td className="px-6 py-4 font-mono text-xs text-[#adc6ff]">{fr.id}</td>
                <td className="px-6 py-4">
                  <p className="font-bold text-foreground text-xs mb-1">{fr.title}</p>
                  <p className="text-xs text-muted-foreground">{fr.description}</p>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
