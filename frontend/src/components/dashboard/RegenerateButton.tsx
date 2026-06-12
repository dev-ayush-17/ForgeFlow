"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { RefreshCcw, Loader2 } from "lucide-react";
import { regenerateSection } from "@/lib/api";
import { useBlueprint } from "@/hooks/useBlueprint";

interface RegenerateButtonProps {
  section: string;
}

export function RegenerateButton({ section }: RegenerateButtonProps) {
  const [loading, setLoading] = useState(false);
  const { idea, blueprint, setBlueprint } = useBlueprint();

  const handleRegenerate = async () => {
    if (!idea || !blueprint) return;
    
    setLoading(true);
    try {
      const updated = await regenerateSection(section, idea, blueprint);
      setBlueprint(updated);
    } catch (error) {
      console.error(`Failed to regenerate ${section}`, error);
      alert(`Failed to regenerate ${section}. Please try again.`);
    } finally {
      setLoading(false);
    }
  };

  return (
    <Button 
      variant="outline" 
      size="sm" 
      className="border-border bg-transparent text-foreground hover:bg-white/5 font-mono text-xs"
      onClick={handleRegenerate}
      disabled={loading || !idea || !blueprint}
    >
      {loading ? (
        <Loader2 className="w-3 h-3 mr-2 animate-spin" />
      ) : (
        <RefreshCcw className="w-3 h-3 mr-2" />
      )}
      Regenerate
    </Button>
  );
}
