"""
Orchestra MVP — Regenerate API routes.

POST /regenerate/architecture
POST /regenerate/design
POST /regenerate/documentation
POST /regenerate/pitch-deck
POST /regenerate/planning
"""
from fastapi import APIRouter, HTTPException
from app.models.request import RegenerateRequest
from app.services.orchestrator import regenerate_section

router = APIRouter()

VALID_SECTIONS = ["architecture", "design", "documentation", "pitch-deck", "planning"]


@router.post("/regenerate/{section}")
async def regenerate(section: str, request: RegenerateRequest):
    """
    Regenerate a single section of the blueprint.
    Only the targeted agent re-executes; all other sections are preserved.
    """
    if section not in VALID_SECTIONS:
        raise HTTPException(
            status_code=400,
            detail=f"Invalid section: {section}. Must be one of: {VALID_SECTIONS}",
        )

    if not request.idea.strip():
        raise HTTPException(status_code=400, detail="Idea cannot be empty")

    try:
        blueprint = await regenerate_section(
            idea=request.idea,
            section=section,
            current_blueprint=request.current_blueprint,
        )
        return blueprint.model_dump()
    except Exception as e:
        raise HTTPException(
            status_code=500,
            detail=f"Regeneration failed for {section}: {str(e)}",
        )
