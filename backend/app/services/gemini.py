"""
Orchestra MVP — Gemini API client wrapper.
"""
import os
import json
import logging
from google import genai
from google.genai import types
from dotenv import load_dotenv

load_dotenv()

logger = logging.getLogger(__name__)

_client = None


def _get_client() -> genai.Client:
    """Lazy-initialize the Gemini client."""
    global _client
    if _client is None:
        api_key = os.getenv("GEMINI_API_KEY")
        if not api_key or api_key == "your_gemini_api_key_here":
            raise RuntimeError(
                "GEMINI_API_KEY is not set. "
                "Copy .env.example to .env and add your API key."
            )
        _client = genai.Client(api_key=api_key)
    return _client


def get_model_name() -> str:
    return os.getenv("GEMINI_MODEL", "gemini-2.0-flash")


async def generate_json(prompt: str, max_retries: int = 2) -> dict:
    """
    Call Gemini with a prompt and parse the JSON response.
    Retries on parse failure up to max_retries times.
    """
    client = _get_client()
    model = get_model_name()

    for attempt in range(max_retries + 1):
        try:
            response = client.models.generate_content(
                model=model,
                contents=prompt,
                config=types.GenerateContentConfig(
                    response_mime_type="application/json",
                    temperature=0.7,
                ),
            )

            text = response.text
            if not text:
                logger.warning(f"Empty response from Gemini (attempt {attempt + 1})")
                continue

            parsed = json.loads(text)
            return parsed

        except json.JSONDecodeError as e:
            logger.warning(
                f"JSON parse error on attempt {attempt + 1}/{max_retries + 1}: {e}"
            )
            if attempt == max_retries:
                raise ValueError(
                    f"Failed to parse Gemini response as JSON after {max_retries + 1} attempts"
                )
        except Exception as e:
            logger.error(f"Gemini API error on attempt {attempt + 1}: {e}")
            if attempt == max_retries:
                raise

    raise ValueError("Failed to generate valid JSON from Gemini")
