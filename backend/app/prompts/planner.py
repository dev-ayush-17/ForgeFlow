"""
Planner Agent prompt template.
"""


def get_planner_prompt(idea: str) -> str:
    return f"""You are the Planner Agent for Orchestra, an AI project planning platform.

Given the following startup/project idea, generate a comprehensive project execution plan.

## Project Idea
{idea}

## Your Task
Generate a complete project plan including:
1. **Sprint Plan** — Define 4-6 sprints with names, durations, objectives, and deliverables
2. **Milestones** — Define 3-5 key project milestones with descriptions and target dates
3. **Development Timeline** — Define 3-4 development phases with durations and goals
4. **Team Recommendations** — Recommend 3-5 team roles with responsibilities

## Output Format
Return a JSON object with EXACTLY this structure:
{{
  "sprint_plan": [
    {{
      "sprint_name": "Sprint 1: Foundation",
      "duration": "Week 1-2",
      "objectives": ["Objective 1", "Objective 2"],
      "deliverables": ["Deliverable 1", "Deliverable 2"]
    }}
  ],
  "milestones": [
    {{
      "name": "Milestone Name",
      "description": "What this milestone represents",
      "target_date": "Week X or Month X"
    }}
  ],
  "development_timeline": [
    {{
      "phase": "Phase Name",
      "duration": "Week X-Y",
      "goals": ["Goal 1", "Goal 2"]
    }}
  ],
  "team_recommendations": [
    {{
      "role": "Role Title",
      "responsibilities": ["Responsibility 1", "Responsibility 2"]
    }}
  ]
}}

Be realistic and actionable. Tailor the plan to the given project idea.
Return ONLY the JSON object, no additional text."""
