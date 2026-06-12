export interface ProjectBlueprint {
  project: {
    project_id: string;
    project_name: string;
    idea: string;
    generated_at: string;
  };
  architecture: ArchitectOutput;
  pitch_deck: StrategistOutput;
  design: DesignerOutput;
  documentation: DocumentationOutput;
  planning: PlannerOutput;
}

export interface ArchitectOutput {
  tech_stack: {
    frontend: Record<string, string>;
    backend: Record<string, string>;
    database: Record<string, string>;
    infrastructure: Record<string, string>;
  };
  system_topology: {
    nodes: string[];
    connections: string[];
  };
  database_schema: {
    tables: string[];
  };
  api_design: {
    endpoints: Array<{
      method: string;
      path: string;
      purpose: string;
    }>;
  };
  scalability: {
    scaling: string;
    caching: string;
    infrastructure: string;
  };
}

export interface StrategistOutput {
  problem: {
    headline: string;
    summary: string;
    pain_points: string[];
  };
  solution: {
    headline: string;
    summary: string;
    key_features: string[];
  };
  market: {
    market_size: string;
    target_users: string[];
    trends: string[];
  };
  business_model: {
    revenue_streams: string[];
    pricing: string;
  };
  go_to_market: {
    channels: string[];
    acquisition_strategy: string;
  };
  roadmap: {
    phase_1: string;
    phase_2: string;
    phase_3: string;
  };
  suggestions: Array<{
    title: string;
    description: string;
  }>;
}

export interface DesignerOutput {
  personas: Array<{
    name: string;
    role: string;
    goals: string[];
  }>;
  flows: Array<{
    name: string;
    steps: string[];
  }>;
  screens: Array<{
    name: string;
    purpose: string;
  }>;
  wireframes: Array<{
    screen: string;
    components: string[];
  }>;
}

export interface DocumentationOutput {
  problem_statement: {
    title: string;
    summary: string;
    challenges: string[];
  };
  product_vision: {
    vision_statement: string;
    mission: string;
    success_metrics: string[];
  };
  user_stories: Array<{
    actor: string;
    goal: string;
    benefit: string;
  }>;
  functional_requirements: Array<{
    id: string;
    title: string;
    description: string;
  }>;
  non_functional_requirements: Array<{
    category: string;
    requirement: string;
  }>;
}

export interface PlannerOutput {
  sprint_plan: Array<{
    sprint_name: string;
    duration: string;
    objectives: string[];
    deliverables: string[];
  }>;
  milestones: Array<{
    name: string;
    description: string;
    target_date: string;
  }>;
  development_timeline: Array<{
    phase: string;
    duration: string;
    goals: string[];
  }>;
  team_recommendations: Array<{
    role: string;
    responsibilities: string[];
  }>;
}
