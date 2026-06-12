"""
Orchestra MVP — Orchestrator service.

Dispatches specialized agents with staggered timing to avoid
rate-limiting, then aggregates results into a ProjectBlueprint.
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


def _extract_project_name(idea: str) -> str:
    """Extract a short project name from the idea text."""
    words = idea.strip().split()
    if len(words) <= 5:
        return idea.strip()
    return " ".join(words[:5]) + "..."


async def _run_agent_with_delay(agent, idea: str, delay: float):
    """Run an agent after an initial delay to stagger API calls."""
    if delay > 0:
        await asyncio.sleep(delay)
    return await agent.execute(idea)


async def generate_blueprint(idea: str) -> ProjectBlueprint:
    """
    Execute all 5 agents with staggered starts to avoid rate limits,
    then aggregate into a ProjectBlueprint.
    """
    logger.info("Starting full blueprint generation...")

    architect = ArchitectAgent()
    designer = DesignerAgent()
    strategist = StrategistAgent()
    documentation = DocumentationAgent()
    planner = PlannerAgent()

    # Stagger agent launches by 2 seconds each to stay under RPM limits
    results = await asyncio.gather(
        _run_agent_with_delay(architect, idea, 0),
        _run_agent_with_delay(designer, idea, 2),
        _run_agent_with_delay(strategist, idea, 4),
        _run_agent_with_delay(documentation, idea, 6),
        _run_agent_with_delay(planner, idea, 8),
    )

    architecture, design, pitch_deck, documentation_out, planning = results

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
        documentation=documentation_out,
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
        "architecture": ArchitectAgent(),
        "design": DesignerAgent(),
        "pitch-deck": StrategistAgent(),
        "documentation": DocumentationAgent(),
        "planning": PlannerAgent(),
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
