"""
Orchestra MVP — Orchestrator service.

Dispatches specialized agents in parallel, aggregates results
into a single ProjectBlueprint.
"""
import asyncio
import uuid
import logging
from datetime import datetime, timezone

from app.agents.architect import ArchitectAgent
from app.agents.designer import DesignerAgent
from app.agents.strategist import StrategistAgent
from app.agents.documentation import DocumentationAgent
from app.agents.planner import PlannerAgent
from app.models.blueprint import ProjectBlueprint, ProjectMeta
from app.models.agent_outputs import (
    ArchitectOutput,
    DesignerOutput,
    StrategistOutput,
    DocumentationOutput,
    PlannerOutput,
)

logger = logging.getLogger(__name__)

# Singleton agent instances
_architect = ArchitectAgent()
_designer = DesignerAgent()
_strategist = StrategistAgent()
_documentation = DocumentationAgent()
_planner = PlannerAgent()


def _extract_project_name(idea: str) -> str:
    """Extract a short project name from the idea text."""
    words = idea.strip().split()
    if len(words) <= 5:
        return idea.strip()
    return " ".join(words[:5]) + "..."


async def generate_blueprint(idea: str) -> ProjectBlueprint:
    """
    Execute all 5 agents in parallel and aggregate into a ProjectBlueprint.
    """
    logger.info("Starting full blueprint generation...")

    # Run all agents concurrently
    results = await asyncio.gather(
        _architect.execute(idea),
        _designer.execute(idea),
        _strategist.execute(idea),
        _documentation.execute(idea),
        _planner.execute(idea),
    )

    architecture, design, pitch_deck, documentation, planning = results

    blueprint = ProjectBlueprint(
        project=ProjectMeta(
            project_id=str(uuid.uuid4()),
            project_name=_extract_project_name(idea),
            idea=idea,
            generated_at=datetime.now(timezone.utc).isoformat(),
        ),
        architecture=architecture,
        design=design,
        pitch_deck=pitch_deck,
        documentation=documentation,
        planning=planning,
    )

    logger.info("Blueprint generation complete.")
    return blueprint


async def regenerate_section(
    idea: str,
    section: str,
    current_blueprint: dict,
) -> ProjectBlueprint:
    """
    Regenerate a single section of the blueprint while preserving all others.
    """
    agent_map = {
        "architecture": _architect,
        "design": _designer,
        "pitch-deck": _strategist,
        "documentation": _documentation,
        "planning": _planner,
    }

    # Map route section name to blueprint field name
    section_field_map = {
        "architecture": "architecture",
        "design": "design",
        "pitch-deck": "pitch_deck",
        "documentation": "documentation",
        "planning": "planning",
    }

    agent = agent_map.get(section)
    field = section_field_map.get(section)

    if not agent or not field:
        raise ValueError(f"Unknown section: {section}")

    logger.info(f"Regenerating section: {section} using {agent.name}")

    # Execute only the target agent
    new_output = await agent.execute(idea)

    # Replace the section in the current blueprint
    current_blueprint[field] = new_output.model_dump()
    current_blueprint["project"]["generated_at"] = datetime.now(timezone.utc).isoformat()

    # Rebuild as validated ProjectBlueprint
    return ProjectBlueprint(**current_blueprint)
