# Claude Build Specification

## Project Overview

Project Name: Orchestra

Tagline: From Idea to Execution in Minutes

Orchestra is an AI-native project planning platform that transforms a startup or project idea into an execution-ready blueprint.

The platform generates planning artifacts, not application code.

Primary outputs:

* Software Architecture
* UI/UX Wireframes
* Documentation
* Pitch Deck Content
* Project Planning

The goal is to eliminate the planning bottleneck before development begins.

---

## MVP Goal

Build a polished hackathon MVP.

The objective is demonstrating end-to-end blueprint generation from a single idea.

The objective is NOT production readiness.

The objective is NOT code generation.

---

## Technology Stack

### Frontend

* Next.js
* TypeScript
* TailwindCSS
* shadcn/ui

### Backend

* FastAPI
* Python

### AI Layer

* Gemini API

### Architecture

Frontend
→ FastAPI Backend
→ Orchestrator
→ Specialized Agents
→ Aggregator
→ Project Blueprint
→ Frontend Dashboard

---

## Source of Truth

The Stitch screens are the source of truth.

Requirements:

* Generated outputs must match the UI structure.
* Do not redesign screens.
* Do not invent additional dashboard sections.
* Do not remove existing sections.
* Build data structures around the screens.

All screen screenshots and exported Stitch HTML should be used as implementation references.

---

## Project Documentation

Use the following files as authoritative references.

### Product Requirements

PRD.txt

### Agent Ownership

orchestra-orchestrator-data-models.md

### Agent Output Definitions

orchestra-orchestrator-outputs.md

### Project Blueprint Structure

orchestra-orchestrator-blueprint.md

---

## Application Flow

The application consists of three primary screens.

### 1. Landing Page

Purpose:

* Accept user idea input
* Explain the product
* Trigger blueprint generation

Actions:

* Enter project idea
* Click Generate Blueprint

---

### 2. Generation Screen

Purpose:

* Display generation progress
* Provide visual feedback while agents execute

Behavior:

* Show loading/progress state
* Display active generation steps
* Transition automatically when generation completes

Generation Flow:

Idea Submitted
→ Architect Agent
→ Designer Agent
→ Strategist Agent
→ Documentation Agent
→ Planner Agent
→ Aggregation
→ Results Dashboard

---

### 3. Results Dashboard

Purpose:

* Display generated Project Blueprint

Sections:

* Architecture
* Wireframes
* Documentation
* Pitch Deck
* Project Planning

Each section supports independent regeneration.

The Results Dashboard is the primary workspace after generation completes.

---

## Dashboard Structure

### Architecture

Contains:

* Tech Stack
* System Topology
* Database Schema
* API Design
* Scalability

---

### Wireframes

Contains:

* Personas
* User Flows
* Screen Inventory
* Wireframe Specifications

---

### Documentation

Contains:

* Problem Statement
* Product Vision
* User Stories
* Functional Requirements
* Non Functional Requirements

---

### Pitch Deck

Contains:

* Problem
* Solution
* Market
* Business Model
* Go-To-Market
* Roadmap
* Suggestions

---

### Project Planning

Contains:

* Sprint Plan
* Milestones
* Development Timeline
* Team Recommendations

---

## Agent System

### Architect Agent

Responsible for:

* Tech Stack
* System Topology
* Database Schema
* API Design
* Scalability

### Designer Agent

Responsible for:

* Personas
* User Flows
* Screen Inventory
* Wireframe Specifications

### Strategist Agent

Responsible for:

* Problem
* Solution
* Market
* Business Model
* Go-To-Market
* Roadmap
* Suggestions

### Documentation Agent

Responsible for:

* Problem Statement
* Product Vision
* User Stories
* Functional Requirements
* Non Functional Requirements

### Planner Agent

Responsible for:

* Sprint Plan
* Milestones
* Development Timeline
* Team Recommendations

---

## Generation Flow

User enters an idea.

Orchestrator executes:

1. Architect Agent
2. Designer Agent
3. Strategist Agent
4. Documentation Agent
5. Planner Agent

Parallel execution is preferred.

Agent outputs are aggregated into a single Project Blueprint object.

The frontend consumes the Project Blueprint.

---

## Regeneration Flow

### Architecture Regeneration

* Execute Architect Agent only
* Preserve Design outputs
* Preserve Documentation outputs
* Preserve Pitch Deck outputs
* Preserve Planning outputs

### Wireframe Regeneration

* Execute Designer Agent only
* Preserve Architecture outputs
* Preserve Documentation outputs
* Preserve Pitch Deck outputs
* Preserve Planning outputs

### Documentation Regeneration

* Execute Documentation Agent only
* Preserve Architecture outputs
* Preserve Design outputs
* Preserve Pitch Deck outputs
* Preserve Planning outputs

### Pitch Deck Regeneration

* Execute Strategist Agent only
* Preserve Architecture outputs
* Preserve Design outputs
* Preserve Documentation outputs
* Preserve Planning outputs

### Planning Regeneration

* Execute Planner Agent only
* Preserve Architecture outputs
* Preserve Design outputs
* Preserve Documentation outputs
* Preserve Pitch Deck outputs

---

## Backend API Expectations

Minimum endpoints:

### POST /generate

Purpose:

* Accept project idea
* Generate complete blueprint
* Return Project Blueprint

### POST /regenerate/architecture

Purpose:

* Regenerate Architecture only

### POST /regenerate/design

Purpose:

* Regenerate Wireframes only

### POST /regenerate/documentation

Purpose:

* Regenerate Documentation only

### POST /regenerate/pitch-deck

Purpose:

* Regenerate Pitch Deck only

### POST /regenerate/planning

Purpose:

* Regenerate Planning only

No authentication required.

No persistent storage required.

---

## Data Contract Rules

All agent outputs must conform to:

orchestra-orchestrator-outputs.md

The aggregated response must conform to:

orchestra-orchestrator-blueprint.md

Output consistency is more important than creativity.

Agents should return structured JSON that can be rendered directly by the frontend.

---

## Agent Output Requirements

All agents must return structured JSON.

Do not return markdown.

Do not return explanatory text outside JSON.

Each output must match the structures defined in:

* orchestra-orchestrator-outputs.md

The orchestrator must aggregate all outputs into a Project Blueprint object matching:

* orchestra-orchestrator-blueprint.md

If an agent response cannot be parsed, retry generation before returning an error.

---

## MVP Constraints

Do NOT implement:

* Authentication
* Team Collaboration
* Persistent Storage
* Database Infrastructure
* Code Generation
* Deployment Automation
* CI/CD
* GitHub Integration

---

## Expected Deliverables

### Frontend

* Next.js application
* Stitch-based UI implementation
* Landing Page
* Generation Screen
* Results Dashboard
* Architecture Tab
* Wireframes Tab
* Documentation Tab
* Pitch Deck Tab
* Project Planning Tab
* Section Regeneration Actions

### Backend

* FastAPI application
* Orchestrator Service
* Architect Agent
* Designer Agent
* Strategist Agent
* Documentation Agent
* Planner Agent
* Aggregation Layer

### AI Integration

* Gemini API integration
* Agent prompting system
* Structured JSON output handling

---

## Success Criteria

The final MVP should allow:

Idea Input
→ AI Generation
→ Results Dashboard
→ Section Navigation
→ Individual Section Regeneration

All generated outputs must be displayed in the Stitch-designed interface and conform to the defined Project Blueprint structure.
