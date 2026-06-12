import { ProjectBlueprint } from "@/types/blueprint";

const API_BASE_URL = process.env.NEXT_PUBLIC_API_URL || "http://localhost:8000";

export async function generateBlueprint(idea: string): Promise<ProjectBlueprint> {
  const response = await fetch(`${API_BASE_URL}/generate`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ idea }),
  });

  if (!response.ok) {
    const err = await response.json().catch(() => ({}));
    throw new Error(err.detail || "Failed to generate blueprint");
  }

  return response.json();
}

export async function regenerateSection(
  section: string,
  idea: string,
  currentBlueprint: ProjectBlueprint
): Promise<ProjectBlueprint> {
  const response = await fetch(`${API_BASE_URL}/regenerate/${section}`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      idea,
      current_blueprint: currentBlueprint,
    }),
  });

  if (!response.ok) {
    const err = await response.json().catch(() => ({}));
    throw new Error(err.detail || `Failed to regenerate ${section}`);
  }

  return response.json();
}
