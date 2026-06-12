"""
Orchestra MVP — Architect Agent.
"""
from app.agents.base import BaseAgent
from app.prompts.architect import get_architect_prompt
from app.models.agent_outputs import ArchitectOutput


class ArchitectAgent(BaseAgent):
    @property
    def name(self) -> str:
        return "Architect Agent"

    def _build_prompt(self, idea: str) -> str:
        return get_architect_prompt(idea)

    def _parse_output(self, raw: dict) -> ArchitectOutput:
        return ArchitectOutput(**raw)
