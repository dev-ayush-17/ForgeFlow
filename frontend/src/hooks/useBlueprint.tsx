"use client";

import { createContext, useContext, useState, ReactNode } from "react";
import { ProjectBlueprint } from "@/types/blueprint";

interface BlueprintContextType {
  blueprint: ProjectBlueprint | null;
  setBlueprint: (blueprint: ProjectBlueprint | null) => void;
  idea: string;
  setIdea: (idea: string) => void;
}

const BlueprintContext = createContext<BlueprintContextType | undefined>(undefined);

export function BlueprintProvider({ children }: { children: ReactNode }) {
  const [blueprint, setBlueprint] = useState<ProjectBlueprint | null>(null);
  const [idea, setIdea] = useState("");

  return (
    <BlueprintContext.Provider value={{ blueprint, setBlueprint, idea, setIdea }}>
      {children}
    </BlueprintContext.Provider>
  );
}

export function useBlueprint() {
  const context = useContext(BlueprintContext);
  if (context === undefined) {
    throw new Error("useBlueprint must be used within a BlueprintProvider");
  }
  return context;
}
