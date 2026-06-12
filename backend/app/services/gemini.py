"""
Orchestra MVP — Gemini API client wrapper.

Key design decisions:
- Client is re-created per call to avoid stale singletons after .env changes
- Includes exponential backoff for rate-limit (429) errors
- Uses asyncio-native API (client.aio.models)
- Robust JSON extraction handles markdown-wrapped responses
"""
import os
import re
import json
import asyncio
import logging
from pathlib import Path
from google import genai
from google.genai import types
from dotenv import load_dotenv

# Always reload .env from the backend directory so hot-reloads pick up changes
_env_path = Path(__file__).resolve().parent.parent.parent / ".env"
load_dotenv(_env_path, override=True)

logger = logging.getLogger(__name__)


def _get_api_key() -> str:
    load_dotenv(_env_path, override=True)
    api_key = os.getenv("GEMINI_API_KEY", "").strip()
    if not api_key or api_key == "your_gemini_api_key_here":
        raise RuntimeError(
            "GEMINI_API_KEY is not set. "
            "Copy .env.example to .env and add your API key."
        )
    return api_key


def _get_model_name() -> str:
    load_dotenv(_env_path, override=True)
    return os.getenv("GEMINI_MODEL", "gemini-2.5-flash").strip()


def _extract_json(text: str) -> dict:
    """
    Extract JSON from Gemini response text.
    Handles cases where the model wraps JSON in markdown code fences.
    """
    # Try direct parse first
    try:
        return json.loads(text)
    except json.JSONDecodeError:
        pass

    # Try to extract from ```json ... ``` blocks
    match = re.search(r"```(?:json)?\s*\n?(.*?)\n?\s*```", text, re.DOTALL)
    if match:
        try:
            return json.loads(match.group(1))
        except json.JSONDecodeError:
            pass

    # Try to find first { ... } block
    brace_start = text.find("{")
    brace_end = text.rfind("}")
    if brace_start != -1 and brace_end != -1 and brace_end > brace_start:
        try:
            return json.loads(text[brace_start : brace_end + 1])
        except json.JSONDecodeError:
            pass

    raise ValueError(f"Could not extract valid JSON from response:\n{text[:500]}")


async def generate_json(prompt: str, max_retries: int = 3) -> dict:
    """
    Call Gemini with a prompt and parse the JSON response.

    - Creates a fresh client each call (avoids stale key/model caching).
    - Retries with exponential backoff on 429/5xx errors.
    - Falls back to text extraction if response_mime_type isn't honoured.
    """
    api_key = _get_api_key()
    model = _get_model_name()

    logger.info(f"Using Gemini model: {model}")

    client = genai.Client(api_key=api_key)

    for attempt in range(1, max_retries + 1):
        try:
            response = await client.aio.models.generate_content(
                model=model,
                contents=prompt,
                config=types.GenerateContentConfig(
                    response_mime_type="application/json",
                    temperature=0.7,
                ),
            )

            text = response.text
            if not text:
                logger.warning(f"Empty response from Gemini (attempt {attempt})")
                if attempt < max_retries:
                    await asyncio.sleep(2 ** attempt)
                    continue
                raise ValueError("Gemini returned an empty response")

            parsed = _extract_json(text)
            return parsed

        except Exception as e:
            error_str = str(e)
            is_rate_limit = "429" in error_str or "RESOURCE_EXHAUSTED" in error_str
            is_not_found = "404" in error_str or "NOT_FOUND" in error_str

            if is_not_found:
                logger.error(
                    f"Model '{model}' not found. Check GEMINI_MODEL in .env. "
                    f"Error: {error_str}"
                )
                raise RuntimeError(
                    f"Gemini model '{model}' not found. "
                    f"Update GEMINI_MODEL in backend/.env to a valid model."
                ) from e

            if is_rate_limit and attempt < max_retries:
                wait = min(2 ** attempt * 5, 60)  # 10s, 20s, 40s max 60s
                logger.warning(
                    f"Rate limited (attempt {attempt}/{max_retries}). "
                    f"Waiting {wait}s before retry..."
                )
                await asyncio.sleep(wait)
                continue

            if attempt < max_retries and not is_not_found:
                wait = 2 ** attempt
                logger.warning(
                    f"Gemini error (attempt {attempt}/{max_retries}): {error_str}. "
                    f"Retrying in {wait}s..."
                )
                await asyncio.sleep(wait)
                continue

            logger.error(f"Gemini API failed after {attempt} attempts: {error_str}")
            raise

    raise ValueError("Failed to generate valid JSON from Gemini")
