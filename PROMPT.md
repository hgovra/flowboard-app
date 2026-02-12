# FlowBoard — Development Guidance Prompt

This document defines the architectural principles, technical constraints, and development strategy for FlowBoard.

It should be referenced in future conversations to ensure consistency, focus, and architectural coherence.

---

# 🎯 Project Objective

FlowBoard is a modern full-stack project management platform featuring:

- Kanban board
- Real-time updates
- Role-based access control
- Multi-project support
- Authentication & authorization
- Cloud deployment (AWS)

The primary goal is to build a **production-grade portfolio project** that demonstrates:

- Senior-level frontend architecture (Angular Signals + Standalone APIs)
- Clean backend architecture (Spring Boot 3+)
- Real-time communication (WebSocket)
- Proper database modeling (PostgreSQL)
- DevOps fundamentals (Docker + AWS + CI/CD)

Avoid overengineering while maintaining professional architectural quality.

---

# 🧠 Development Strategy

We follow a **Frontend-first approach**:

1. Build UI and state management using mocks
2. Define domain models in TypeScript
3. Stabilize UX and state architecture
4. Implement backend persistence
5. Replace mocks with real HTTP services
6. Add realtime synchronization
7. Deploy to AWS

---

# 🏗️ Architectural Principles

## Monorepo
- Nx workspace
- apps:
  - web (Angular)
  - api (Spring Boot)
- libs:
  - shared (types, enums, DTOs)
  - core (auth, layout, infrastructure)
  - ui (reusable components)
  - features (domain-driven modules)

## Frontend Rules
- Standalone Components only
- Angular Signals for state
- No NgModules
- Clear separation between:
  - UI components
  - State
  - Services
- Smart components at page level
- Dumb reusable UI components

## Backend Rules
- Feature-based package organization
- JWT authentication
- Role-based authorization
- RESTful API design
- Flyway for migrations
- WebSocket for real-time updates

---

# 📦 Core Domains

## User
- id
- name
- email
- password
- role

## Project
- id
- name
- description
- members

## Task
- id
- title
- description
- status
- priority
- assignee
- dueDate
- projectId

---

# 🔐 Roles

- ADMIN
- MEMBER
- VIEWER

Permissions must be enforced both in UI and backend.

---

# ⚡ Realtime Scope

- Board updates
- Task movement
- Comments
- Presence indicator (optional)

---

# 🧪 Testing Strategy

Frontend:
- Unit tests for stores
- Component tests for critical UI

Backend:
- Service layer tests
- Basic integration tests

Avoid excessive testing boilerplate.

---

# 🚀 Deployment Goals

- Dockerized frontend
- Dockerized backend
- PostgreSQL (RDS in production)
- AWS EC2 or Elastic Beanstalk
- HTTPS
- CI/CD with GitHub Actions

---

# 📈 Quality Standards

- Small semantic commits
- Clean commit history
- Meaningful PR-style descriptions
- Production-level README
- Architecture diagram before final deployment

---

# ❌ Avoid

- Premature microservices
- Complex DDD layering
- Event sourcing
- Unnecessary abstraction
- Overuse of global state

---

# 🧭 How to Use This File

When starting a new development session:

1. Describe what has already been implemented
2. State the next feature to build
3. Clarify whether we are in:
   - Mock phase
   - Backend implementation phase
   - Realtime phase
   - Deployment phase

This ensures continuity and architectural alignment.

---

# 🔥 Positioning Statement

FlowBoard is not a tutorial project.

It is a production-grade SaaS architecture simulation built to demonstrate modern full-stack engineering skills aligned with 2026 market demands.
