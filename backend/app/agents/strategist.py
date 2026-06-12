"""
Orchestra MVP — Strategist Agent.
"""
from app.agents.base import BaseAgent
from app.prompts.strategist import get_strategist_prompt
from app.models.agent_outputs import StrategistOutput


class StrategistAgent(BaseAgent):
    @property
    def name(self) -> str:
        return "Strategist Agent"

    def _build_prompt(self, idea: str) -> str:
        return get_strategist_prompt(idea)

    def _parse_output(self, raw: dict) -> StrategistOutput:
        return StrategistOutput(**raw)
