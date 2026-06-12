ARCHITECT AGENT OUTPUT
- tech_stack:
    frontend:
    backend:
    database:
    infrastructure:
    example:
        tech_stack:
            frontend:
                framework: Next.js
                language: TypeScript

            backend:
                framework: FastAPI
                language: Python

            database:
                primary: PostgreSQL

            infrastructure:
                cloud: AWS


- system_topology:
    nodes:
    connections:
    example:
        nodes:
            - API Gateway
            - Orchestrator
            - Architect Agent
            - Designer Agent

        connections:
            - API Gateway → Orchestrator
            - Orchestrator → Architect Agent


- database_schema:
    tables:
    example:
        tables:
            - Users
            - Projects
            - Documents


- api_design:
    endpoints:
        method:
        path:
        purpose:
    example:
        method: POST
        path: /generate
        purpose: Generate blueprint   


- scalability:
    scaling:
    caching:
    infrastructure:



STRATEGIST AGENT OUTPUT
- problem:
    headline:
    summary:
    pain_points:
- solution:
    headline:
    summary:
    key_features:
- market:
    market_size:
    target_users:
    trends:
- business_model:
    revenue_streams:
    pricing:
- go_to_market:
    channels:
    acquisition_strategy:
- roadmap:
    phase_1:
    phase_2:
    phase_3:
- suggestions:
    - title:
        description:




DESIGNER AGENT OUTPUT
- personas:
  - name:
    role:
    goals:
- flows:
  - name:
    steps:
- screens:
  - name:
    purpose:
- wireframes:
  screen:
  components:
  example:
    screen: Dashboard

    components:
    - Sidebar
    - Header
    - Project Cards
    - Generate Button



DOCUMENTATION AGENT OUTPUT

- problem_statement:
    title:
    summary:
    challenges:
    example:
        title: Fragmented Project Planning
        summary: Teams spend significant time planning before building.
        challenges:
        - Architecture decisions are unclear
        - Documentation is fragmented
        - Teams lack implementation direction
- product_vision:
    vision_statement:
    mission:
    success_metrics:
    example:
        vision_statement: Transform any idea into an execution-ready blueprint.
        mission: Reduce planning effort by 80%.
        success_metrics:
        - Blueprint generated in under 5 minutes
        - Consistent outputs across modules
- user_stories:
    actor:
    goal:
    benefit:
        example:
        actor: Founder
        goal: Generate a startup blueprint
        benefit: Validate ideas faster

- functional_requirements:
    id:
    title:
    description:
    example:
        id: FR-1
        title: Idea Submission
        description: Users can submit a startup idea for analysis.

- non_functional_requirements:
    category:
    requirement:
    example:
        category: Performance
        requirement: Blueprint generation completes in under 5 minutes




PLANNER AGENT OUTPUT

- sprint_plan:
    sprint_name:
    duration:
    objectives:
    deliverables:
    example:
        sprint_name: Sprint 1
        duration: Week 1
        objectives:
        - Establish project foundation
        deliverables:
        - Initial architecture
        - Project setup

- milestones:
    name:
    description:
    target_date:
    example:
        name: MVP Complete
        description: All core features implemented
        target_date: Week 4

- development_timeline:
    phase:
    duration:
    goals:
    example:
        phase: Foundation
        duration: Week 1
        goals:
        - Architecture
        - Setup
        - Planning

- team_recommendations:
    role:
    responsibilities:
    example:
        role: Full Stack Developer
        responsibilities:
        - Backend APIs
        - Frontend integration
