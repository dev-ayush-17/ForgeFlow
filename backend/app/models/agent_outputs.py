"""
Orchestra MVP — Agent output Pydantic models.

These models match the schemas defined in:
  orchestra-orchestrator-outputs.md
"""
from pydantic import BaseModel
from typing import Optional


# ─── Architect Agent Output ───────────────────────────────────────────────────

class TechStack(BaseModel):
    frontend: dict[str, str]
    backend: dict[str, str]
    database: dict[str, str]
    infrastructure: dict[str, str]


class SystemTopology(BaseModel):
    nodes: list[str]
    connections: list[str]


class DatabaseSchema(BaseModel):
    tables: list[str]


class ApiEndpoint(BaseModel):
    method: str
    path: str
    purpose: str


class ApiDesign(BaseModel):
    endpoints: list[ApiEndpoint]


class Scalability(BaseModel):
    scaling: str
    caching: str
    infrastructure: str


class ArchitectOutput(BaseModel):
    tech_stack: TechStack
    system_topology: SystemTopology
    database_schema: DatabaseSchema
    api_design: ApiDesign
    scalability: Scalability


# ─── Strategist Agent Output (Pitch Deck) ─────────────────────────────────────

class Problem(BaseModel):
    headline: str
    summary: str
    pain_points: list[str]


class Solution(BaseModel):
    headline: str
    summary: str
    key_features: list[str]


class Market(BaseModel):
    market_size: str
    target_users: list[str]
    trends: list[str]


class BusinessModel(BaseModel):
    revenue_streams: list[str]
    pricing: str


class GoToMarket(BaseModel):
    channels: list[str]
    acquisition_strategy: str


class Roadmap(BaseModel):
    phase_1: str
    phase_2: str
    phase_3: str


class Suggestion(BaseModel):
    title: str
    description: str


class StrategistOutput(BaseModel):
    problem: Problem
    solution: Solution
    market: Market
    business_model: BusinessModel
    go_to_market: GoToMarket
    roadmap: Roadmap
    suggestions: list[Suggestion]


# ─── Designer Agent Output (Wireframes) ───────────────────────────────────────

class Persona(BaseModel):
    name: str
    role: str
    goals: list[str]


class Flow(BaseModel):
    name: str
    steps: list[str]


class Screen(BaseModel):
    name: str
    purpose: str


class Wireframe(BaseModel):
    screen: str
    components: list[str]


class DesignerOutput(BaseModel):
    personas: list[Persona]
    flows: list[Flow]
    screens: list[Screen]
    wireframes: list[Wireframe]


# ─── Documentation Agent Output ──────────────────────────────────────────────

class ProblemStatement(BaseModel):
    title: str
    summary: str
    challenges: list[str]


class ProductVision(BaseModel):
    vision_statement: str
    mission: str
    success_metrics: list[str]


class UserStory(BaseModel):
    actor: str
    goal: str
    benefit: str


class FunctionalRequirement(BaseModel):
    id: str
    title: str
    description: str


class NonFunctionalRequirement(BaseModel):
    category: str
    requirement: str


class DocumentationOutput(BaseModel):
    problem_statement: ProblemStatement
    product_vision: ProductVision
    user_stories: list[UserStory]
    functional_requirements: list[FunctionalRequirement]
    non_functional_requirements: list[NonFunctionalRequirement]


# ─── Planner Agent Output ────────────────────────────────────────────────────

class Sprint(BaseModel):
    sprint_name: str
    duration: str
    objectives: list[str]
    deliverables: list[str]


class Milestone(BaseModel):
    name: str
    description: str
    target_date: str


class DevelopmentPhase(BaseModel):
    phase: str
    duration: str
    goals: list[str]


class TeamRecommendation(BaseModel):
    role: str
    responsibilities: list[str]


class PlannerOutput(BaseModel):
    sprint_plan: list[Sprint]
    milestones: list[Milestone]
    development_timeline: list[DevelopmentPhase]
    team_recommendations: list[TeamRecommendation]
