"""
Orchestra MVP — Base agent class.
"""
import logging
from abc import ABC, abstractmethod
from pydantic import ValidationError
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
        3. Parse output into Pydantic model (with retry on validation error)
        """
        logger.info(f"[{self.name}] Starting execution...")
        prompt = self._build_prompt(idea)

        last_error = None
        for attempt in range(2):
            raw = await generate_json(prompt)
            try:
                result = self._parse_output(raw)
                logger.info(f"[{self.name}] Completed successfully.")
                return result
            except (ValidationError, TypeError, KeyError) as e:
                last_error = e
                logger.warning(
                    f"[{self.name}] Pydantic validation failed (attempt {attempt + 1}): {e}. "
                    f"Raw keys: {list(raw.keys()) if isinstance(raw, dict) else type(raw)}. "
                    f"Retrying..."
                )
                continue

        logger.error(f"[{self.name}] Failed after retries: {last_error}")
        raise ValueError(
            f"[{self.name}] Could not parse Gemini output into expected schema: {last_error}"
        )
