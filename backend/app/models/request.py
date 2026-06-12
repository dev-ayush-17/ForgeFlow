"""
Orchestra MVP — Pydantic models for API requests.
"""
from pydantic import BaseModel
from typing import Optional, Any


class GenerateRequest(BaseModel):
    """Request body for POST /generate."""
    idea: str


class RegenerateRequest(BaseModel):
    """Request body for POST /regenerate/{section}.
    
    Includes the original idea and the current blueprint so that
    the regenerated section can be merged back in.
    """
    idea: str
    current_blueprint: dict[str, Any]
