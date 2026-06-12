"""
Orchestra MVP — Documentation Agent.
"""
from app.agents.base import BaseAgent
from app.prompts.documentation import get_documentation_prompt
from app.models.agent_outputs import DocumentationOutput


class DocumentationAgent(BaseAgent):
    @property
    def name(self) -> str:
        return "Documentation Agent"

    def _build_prompt(self, idea: str) -> str:
        return get_documentation_prompt(idea)

    def _parse_output(self, raw: dict) -> DocumentationOutput:
        return DocumentationOutput(**raw)
