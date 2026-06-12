"""
Orchestra MVP — FastAPI application entry point.
"""
import os
import logging
from pathlib import Path
from dotenv import load_dotenv

# Load .env FIRST — before any agent/service imports
_env_path = Path(__file__).resolve().parent.parent / ".env"
load_dotenv(_env_path, override=True)

from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from app.routes.generate import router as generate_router
from app.routes.regenerate import router as regenerate_router

# Configure logging
logging.basicConfig(
    level=logging.INFO,
    format="%(asctime)s | %(name)-30s | %(levelname)-7s | %(message)s",
)

logger = logging.getLogger(__name__)

app = FastAPI(
    title="Orchestra API",
    description="AI-native project planning platform — Multi-Agent Hackathon Builder",
    version="1.0.0",
)

# CORS — allow the Next.js frontend
app.add_middleware(
    CORSMiddleware,
    allow_origins=["http://localhost:3000", "http://127.0.0.1:3000"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

# Register routes
app.include_router(generate_router, tags=["Generation"])
app.include_router(regenerate_router, tags=["Regeneration"])

# Log demo mode status at startup
_demo_mode = os.getenv("DEMO_MODE", "false").lower() == "true"
logger.info(f"DEMO_MODE is {'ON — using mock responses' if _demo_mode else 'OFF — using real Gemini API'}")


@app.get("/")
async def root():
    return {
        "name": "Orchestra API",
        "version": "1.0.0",
        "status": "operational",
        "demo_mode": _demo_mode,
    }


@app.get("/health")
async def health():
    return {"status": "healthy", "demo_mode": _demo_mode}

