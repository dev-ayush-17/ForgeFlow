"""
Orchestra MVP — Generate API route.
"""
from fastapi import APIRouter, HTTPException
from app.models.request import GenerateRequest
from app.services.orchestrator import generate_blueprint

router = APIRouter()


@router.post("/generate")
async def generate(request: GenerateRequest):
    """
    Accept a project idea and generate a complete ProjectBlueprint
    by executing all 5 specialized agents in parallel.
    """
    if not request.idea.strip():
        raise HTTPException(status_code=400, detail="Idea cannot be empty")

    try:
        blueprint = await generate_blueprint(request.idea)
        return blueprint.model_dump()
    except Exception as e:
        raise HTTPException(
            status_code=500,
            detail=f"Blueprint generation failed: {str(e)}",
        )
