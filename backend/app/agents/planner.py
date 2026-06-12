"""
Orchestra MVP — Planner Agent.
"""
from app.agents.base import BaseAgent
from app.prompts.planner import get_planner_prompt
from app.models.agent_outputs import PlannerOutput


class PlannerAgent(BaseAgent):
    @property
    def name(self) -> str:
        return "Planner Agent"

    def _build_prompt(self, idea: str) -> str:
        return get_planner_prompt(idea)

    def _parse_output(self, raw: dict) -> PlannerOutput:
        return PlannerOutput(**raw)
