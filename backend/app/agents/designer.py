"""
Orchestra MVP — Designer Agent.
"""
from app.agents.base import BaseAgent
from app.prompts.designer import get_designer_prompt
from app.models.agent_outputs import DesignerOutput


class DesignerAgent(BaseAgent):
    @property
    def name(self) -> str:
        return "Designer Agent"

    def _build_prompt(self, idea: str) -> str:
        return get_designer_prompt(idea)

    def _parse_output(self, raw: dict) -> DesignerOutput:
        return DesignerOutput(**raw)
