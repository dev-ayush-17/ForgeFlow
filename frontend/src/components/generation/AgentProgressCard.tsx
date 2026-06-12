import { Loader2 } from "lucide-react";
import { motion } from "framer-motion";

interface AgentProgressCardProps {
  name: string;
  task: string;
  progress: number;
  status: "WAITING" | "PROCESSING" | "WRITING" | "QUEUED" | "DONE";
  icon: React.ElementType;
}

export function AgentProgressCard({ name, task, progress, status, icon: Icon }: AgentProgressCardProps) {
  const getStatusColor = () => {
    switch (status) {
      case "PROCESSING": return "bg-[#adc6ff] text-black";
      case "WRITING": return "bg-[#ffb786] text-black";
      case "WAITING": return "bg-muted text-muted-foreground";
      case "QUEUED": return "bg-[#ddb7ff] text-black";
      case "DONE": return "bg-green-400 text-black";
      default: return "bg-muted text-muted-foreground";
    }
  };

  return (
    <div className="glass-panel p-6 rounded-xl border border-border">
      <div className="flex justify-between items-start mb-6">
        <div className="flex items-center gap-3">
          <Icon className="w-5 h-5 text-muted-foreground" />
          <h3 className="text-lg font-bold text-foreground">{name}</h3>
        </div>
        <div className={`px-2 py-0.5 rounded text-[10px] font-mono font-bold uppercase ${getStatusColor()}`}>
          {status}
        </div>
      </div>
      
      <div className="flex justify-between items-end mb-2">
        <span className="font-mono text-xs text-muted-foreground">{task}</span>
        <span className="font-mono text-xs font-bold text-foreground">{progress}%</span>
      </div>
      
      <div className="h-1.5 w-full bg-muted rounded-full overflow-hidden mb-6">
        <motion.div 
          className={`h-full ${status === 'DONE' ? 'bg-green-400' : 'bg-[#adc6ff]'}`}
          initial={{ width: 0 }}
          animate={{ width: `${progress}%` }}
          transition={{ duration: 0.5 }}
        />
      </div>
      
      <div className="flex items-center gap-2">
        {status === "PROCESSING" || status === "WRITING" ? (
          <Loader2 className="w-3 h-3 animate-spin text-muted-foreground" />
        ) : (
          <div className="w-3 h-3 flex items-center justify-center">
            <div className="w-1.5 h-1.5 rounded-full bg-muted-foreground" />
          </div>
        )}
        <span className="font-mono text-[10px] text-muted-foreground truncate">
          {status === "DONE" ? "Completed." : `Executing ${name.toLowerCase()} routines...`}
        </span>
      </div>
    </div>
  );
}
