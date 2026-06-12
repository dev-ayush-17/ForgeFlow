"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";
import { useBlueprint } from "@/hooks/useBlueprint";
import { motion } from "framer-motion";
import { Zap } from "lucide-react";

export function HeroSection() {
  const [input, setInput] = useState("");
  const { setIdea } = useBlueprint();
  const router = useRouter();

  const handleGenerate = () => {
    if (!input.trim()) return;
    setIdea(input.trim());
    router.push("/generate");
  };

  return (
    <section className="relative pt-24 pb-16 px-4 md:pt-32 md:pb-24">
      <div className="container mx-auto max-w-4xl text-center flex flex-col items-center">
        <motion.div 
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-border bg-card/50 backdrop-blur-sm text-xs font-mono text-muted-foreground mb-8"
        >
          <div className="w-2 h-2 rounded-full bg-[#adc6ff] animate-pulse" />
          V2.4 ENGINE LIVE
        </motion.div>
        
        <motion.h1 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="text-5xl md:text-7xl font-sans font-bold tracking-tight text-foreground mb-6"
        >
          From Idea to Execution <span className="text-[#adc6ff]">in Minutes</span>
        </motion.h1>
        
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="text-lg md:text-xl text-muted-foreground max-w-2xl mb-12"
        >
          Generate architecture, UI wireframes, documentation, pitch decks and project plans using specialized AI agents.
        </motion.p>
        
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="w-full max-w-2xl glass-panel p-1 rounded-2xl flex flex-col relative"
        >
          <textarea
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder="A zero-knowledge proof identity system..."
            className="w-full h-32 bg-transparent resize-none outline-none text-foreground placeholder:text-muted-foreground/50 p-6"
          />
          <div className="flex items-center justify-between p-4 border-t border-border/50">
            <span className="text-xs font-mono text-muted-foreground ml-2">Markdown supported</span>
            <Button 
              onClick={handleGenerate}
              disabled={!input.trim()}
              className="bg-[#adc6ff] text-black hover:bg-[#adc6ff]/90 px-6"
            >
              Generate Blueprint <Zap className="ml-2 w-4 h-4" />
            </Button>
          </div>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
          className="mt-20 flex flex-col items-center gap-6"
        >
          <span className="text-xs font-mono text-muted-foreground tracking-widest uppercase">Trusted by builders at</span>
          <div className="flex flex-wrap justify-center gap-8 md:gap-16 opacity-50 grayscale hover:grayscale-0 transition-all duration-500">
            <span className="font-bold text-xl">LINEAR</span>
            <span className="font-bold text-xl">VERCEL</span>
            <span className="font-bold text-xl">ANTHROPIC</span>
            <span className="font-bold text-xl">SCALE</span>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
