import { Rocket } from "lucide-react";
import { motion } from "framer-motion";

interface OrchestrationHubProps {
  progress: number;
}

export function OrchestrationHub({ progress }: OrchestrationHubProps) {
  return (
    <div className="glass-panel p-8 rounded-xl border border-border flex flex-col items-center justify-center h-full min-h-[240px]">
      <div className="relative mb-6">
        <div className="absolute inset-0 bg-[#adc6ff]/20 blur-xl rounded-full" />
        <motion.div 
          className="w-16 h-16 bg-black border border-border rounded-2xl flex items-center justify-center relative z-10"
          animate={{ rotate: [0, 5, -5, 0] }}
          transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
        >
          <Rocket className="w-8 h-8 text-[#adc6ff]" />
        </motion.div>
        
        <svg className="absolute -inset-4 w-24 h-24 text-muted-foreground/30 animate-[spin_10s_linear_infinite]" viewBox="0 0 100 100">
          <circle cx="50" cy="50" r="48" fill="none" stroke="currentColor" strokeWidth="1" strokeDasharray="4 4" />
        </svg>
      </div>
      
      <h3 className="text-[#adc6ff] font-mono text-sm mb-2 text-center">Global Orchestration</h3>
      <p className="text-muted-foreground font-mono text-[10px] text-center">
        {progress < 100 ? "Estimated completion: < 1m" : "Finalizing blueprint..."}
      </p>
    </div>
  );
}
