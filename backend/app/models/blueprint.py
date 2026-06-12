"""
Orchestra MVP — ProjectBlueprint Pydantic model.

This is the top-level aggregated response returned to the frontend.
Matches the schema defined in:
  orchestra-orchestrator-blueprint.md
"""
from pydantic import BaseModel
from typing import Optional
from .agent_outputs import (
    ArchitectOutput,
    StrategistOutput,
    DesignerOutput,
    DocumentationOutput,
    PlannerOutput,
)


class ProjectMeta(BaseModel):
    project_id: str
    project_name: str
    idea: str
    generated_at: str


class ProjectBlueprint(BaseModel):
    project: ProjectMeta
    architecture: ArchitectOutput
    pitch_deck: StrategistOutput
    design: DesignerOutput
    documentation: DocumentationOutput
    planning: PlannerOutput
