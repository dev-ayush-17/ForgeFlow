# Orchestra MVP Build Instructions

You are building the Orchestra hackathon MVP.

Read ALL documentation before generating any code.

The project documentation is the source of truth.

Priority order:

1. Stitch Screens and HTML Exports
2. claude-build-spec.md
3. orchestra-orchestrator-blueprint.md
4. orchestra-orchestrator-outputs.md
5. orchestra-orchestrator-data-models.md
6. PRD.txt

If documentation conflicts with generated assumptions, follow the documentation.

Do not invent functionality that is not documented.

---

# Project Overview

Project Name: Orchestra

Tagline:

From Idea to Execution in Minutes.

Orchestra is an AI-native project planning platform that transforms a startup or project idea into a complete execution-ready blueprint.

The platform generates:

* Software Architecture
* UI/UX Wireframes
* Documentation
* Pitch Deck Content
* Project Planning

The platform DOES NOT generate application code.

The goal is eliminating the planning bottleneck before development starts.

---

# MVP Goal

Build a polished hackathon MVP.

The primary demo flow is:

User enters an idea
→ AI generates blueprint
→ Results dashboard appears
→ User explores generated outputs
→ User regenerates individual sections

The application should feel production-quality but implementation should remain lightweight.

---

# Technology Stack

Frontend:

* Next.js
* TypeScript
* TailwindCSS
* shadcn/ui

Backend:

* FastAPI
* Python

AI:

* Gemini API

---

# Source of Truth

The Stitch screens are the source of truth.

Requirements:

* Recreate the Stitch UI faithfully.
* Do not redesign screens.
* Do not invent new pages.
* Do not invent new dashboard sections.
* Do not remove existing sections.
* Build all data structures around the Stitch screens.

Use the exported Stitch HTML as implementation reference wherever possible.

---

# Application Structure

The application consists of three primary screens.

## 1. Landing Page

Purpose:

* Explain Orchestra
* Accept startup/project idea
* Trigger generation

Actions:

* User enters idea
* User clicks Generate Blueprint

---

## 2. Generation Screen

Purpose:

* Show generation progress
* Display loading state
* Provide feedback while agents run

Generation Flow:

Idea Submitted
→ Architect Agent
→ Designer Agent
→ Strategist Agent
→ Documentation Agent
→ Planner Agent
→ Aggregation
→ Results Dashboard

Transition automatically when generation completes.

---

## 3. Results Dashboard

Purpose:

Display generated blueprint.

Sections:

* Architecture
* Wireframes
* Documentation
* Pitch Deck
* Project Planning

Each section supports regeneration.

The Results Dashboard is the main application workspace.

---

# Agent Architecture

Implement an orchestrator pattern.

Flow:

User Idea
→ Orchestrator
→ Specialized Agents
→ Aggregator
→ Project Blueprint
→ Frontend

---

## Architect Agent

Responsible for:

* Tech Stack
* System Topology
* Database Schema
* API Design
* Scalability

---

## Designer Agent

Responsible for:

* Personas
* User Flows
* Screen Inventory
* Wireframe Specifications

---

## Strategist Agent

Responsible for:

* Problem
* Solution
* Market
* Business Model
* Go-To-Market
* Roadmap
* Suggestions

---

## Documentation Agent

Responsible for:

* Problem Statement
* Product Vision
* User Stories
* Functional Requirements
* Non Functional Requirements

---

## Planner Agent

Responsible for:

* Sprint Plan
* Milestones
* Development Timeline
* Team Recommendations

---

# Agent Contracts

All agent outputs must conform to:

orchestra-orchestrator-outputs.md

Do not create alternative schemas.

Do not modify field names.

Do not return unstructured text.

Each agent must return structured JSON.

---

# Project Blueprint Contract

The final aggregated output must conform to:

orchestra-orchestrator-blueprint.md

This object is the canonical source of data for the frontend.

Frontend components should consume Project Blueprint data directly.

---

# Generation Requirements

When a user submits an idea:

1. Orchestrator receives idea.
2. All five agents execute.
3. Parallel execution preferred.
4. Agent outputs are validated.
5. Outputs are aggregated.
6. Project Blueprint is returned.
7. Results dashboard is populated.

---

# Regeneration Requirements

Architecture Regeneration

* Execute Architect Agent only.
* Preserve all other sections.

Wireframe Regeneration

* Execute Designer Agent only.
* Preserve all other sections.

Documentation Regeneration

* Execute Documentation Agent only.
* Preserve all other sections.

Pitch Deck Regeneration

* Execute Strategist Agent only.
* Preserve all other sections.

Planning Regeneration

* Execute Planner Agent only.
* Preserve all other sections.

---

# Backend Requirements

Implement FastAPI backend.

Minimum endpoints:

POST /generate

Returns complete Project Blueprint.

POST /regenerate/architecture

POST /regenerate/design

POST /regenerate/documentation

POST /regenerate/pitch-deck

POST /regenerate/planning

No authentication.

No persistence.

No database.

No user accounts.

---

# Gemini Requirements

Use Gemini API.

Create dedicated prompts for:

* Architect Agent
* Designer Agent
* Strategist Agent
* Documentation Agent
* Planner Agent

Prompt instructions must enforce JSON output matching documented schemas.

If parsing fails:

* Retry generation.
* Return structured error response only after retries fail.

---

# Frontend Requirements

Implement:

Landing Page

Generation Screen

Results Dashboard

Results Dashboard Tabs:

* Architecture
* Wireframes
* Documentation
* Pitch Deck
* Project Planning

Support regeneration controls within each section.

Use TypeScript types matching Project Blueprint.

---

# UI Requirements

Use Stitch designs as source of truth.

Maintain:

* Layout
* Navigation
* Visual hierarchy
* Components
* Spacing
* Structure

Do not redesign.

Do not simplify.

Do not replace layouts with generic dashboards.

---

# MVP Constraints

Do NOT implement:

* Authentication
* Team Collaboration
* Persistent Storage
* Database Infrastructure
* Code Generation
* Deployment Automation
* CI/CD
* GitHub Integration
* Payments
* Notifications
* User Profiles

---

# Deliverables

Generate:

Frontend:

* Next.js App
* TypeScript
* TailwindCSS
* shadcn/ui

Backend:

* FastAPI
* Orchestrator
* Agent Services
* Aggregator
* Gemini Integration

Shared:

* Project Blueprint Types
* Agent Output Models

The final result should support:

Idea Input
→ Blueprint Generation
→ Results Dashboard
→ Section Navigation
→ Section Regeneration

All generated content must be rendered using the documented Project Blueprint structure and displayed through the Stitch-designed interface.

Before implementing, read every documentation file and all Stitch assets completely.
