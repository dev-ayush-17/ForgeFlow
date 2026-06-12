"""
Orchestra MVP — Base agent class.
"""
import logging
from abc import ABC, abstractmethod
from app.services.gemini import generate_json

logger = logging.getLogger(__name__)


class BaseAgent(ABC):
    """Base class for all specialized agents."""

    @property
    @abstractmethod
    def name(self) -> str:
        """Human-readable agent name."""
        ...

    @abstractmethod
    def _build_prompt(self, idea: str) -> str:
        """Build the Gemini prompt for this agent."""
        ...

    @abstractmethod
    def _parse_output(self, raw: dict) -> object:
        """Parse raw JSON dict into a typed Pydantic model."""
        ...

    async def execute(self, idea: str) -> object:
        """
        Execute this agent:
        1. Build prompt
        2. Call Gemini
        3. Parse output into Pydantic model
        """
        logger.info(f"[{self.name}] Starting execution...")
        prompt = self._build_prompt(idea)
        raw = await generate_json(prompt)
        result = self._parse_output(raw)
        logger.info(f"[{self.name}] Completed successfully.")
        return result
