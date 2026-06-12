"use client";

import { useBlueprint } from "@/hooks/useBlueprint";
import { RegenerateButton } from "./RegenerateButton";
import { Download } from "lucide-react";
import { Button } from "@/components/ui/button";

export function PitchDeckTab() {
  const { blueprint } = useBlueprint();
  if (!blueprint) return null;

  const deck = blueprint.pitch_deck;

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center mb-8">
        <div>
          <h1 className="text-4xl font-sans font-bold text-foreground">Pitch Deck</h1>
        </div>
        <div className="flex items-center gap-4">
          <RegenerateButton section="pitch-deck" />
          <Button className="bg-[#adc6ff] text-black hover:bg-[#adc6ff]/90">
            <Download className="w-4 h-4 mr-2" /> Export PPT
          </Button>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <div className="glass-panel p-8 rounded-xl aspect-video flex flex-col justify-center border-t-4 border-t-[#ffb786]">
          <h3 className="text-sm font-mono text-muted-foreground mb-4 uppercase">Slide 1: Problem</h3>
          <h2 className="text-2xl font-bold mb-4">{deck.problem.headline}</h2>
          <p className="text-sm text-muted-foreground">{deck.problem.summary}</p>
        </div>
        
        <div className="glass-panel p-8 rounded-xl aspect-video flex flex-col justify-center border-t-4 border-t-[#adc6ff]">
          <h3 className="text-sm font-mono text-muted-foreground mb-4 uppercase">Slide 2: Solution</h3>
          <h2 className="text-2xl font-bold mb-4">{deck.solution.headline}</h2>
          <p className="text-sm text-muted-foreground">{deck.solution.summary}</p>
        </div>

        <div className="glass-panel p-8 rounded-xl aspect-video flex flex-col justify-center border-t-4 border-t-[#ddb7ff]">
          <h3 className="text-sm font-mono text-muted-foreground mb-4 uppercase">Slide 3: Market</h3>
          <h2 className="text-2xl font-bold mb-4">TAM: {deck.market.market_size}</h2>
          <ul className="text-sm text-muted-foreground list-disc pl-4">
            {deck.market.target_users.slice(0,3).map((u, i) => <li key={i}>{u}</li>)}
          </ul>
        </div>

        <div className="glass-panel p-8 rounded-xl aspect-video flex flex-col justify-center">
          <h3 className="text-sm font-mono text-muted-foreground mb-4 uppercase">Slide 4: Business Model</h3>
          <p className="text-sm text-muted-foreground mb-4 font-mono">{deck.business_model.pricing}</p>
          <div className="flex flex-wrap gap-2">
            {deck.business_model.revenue_streams.map((rs, i) => (
              <span key={i} className="px-2 py-1 bg-white/5 border border-border rounded text-[10px] font-mono">{rs}</span>
            ))}
          </div>
        </div>

        <div className="glass-panel p-8 rounded-xl aspect-video flex flex-col justify-center">
          <h3 className="text-sm font-mono text-muted-foreground mb-4 uppercase">Slide 5: Go To Market</h3>
          <p className="text-sm text-muted-foreground mb-4 line-clamp-3">{deck.go_to_market.acquisition_strategy}</p>
        </div>

        <div className="glass-panel p-8 rounded-xl aspect-video flex flex-col justify-center">
          <h3 className="text-sm font-mono text-muted-foreground mb-4 uppercase">Slide 6: Roadmap</h3>
          <div className="space-y-2">
            <p className="text-xs text-muted-foreground"><strong className="text-foreground">P1:</strong> {deck.roadmap.phase_1}</p>
            <p className="text-xs text-muted-foreground"><strong className="text-foreground">P2:</strong> {deck.roadmap.phase_2}</p>
            <p className="text-xs text-muted-foreground"><strong className="text-foreground">P3:</strong> {deck.roadmap.phase_3}</p>
          </div>
        </div>
      </div>
    </div>
  );
}
