# FlowBoard — Development Context & Guidance

This document defines the current state, architectural decisions, and development strategy for FlowBoard.

It must be referenced in future conversations to ensure continuity and architectural alignment.

---

# 🎯 Project Overview

FlowBoard is a modern full-stack project management platform inspired by Jira, featuring:

- Multi-project management
- Kanban board
- Real-time updates (planned)
- Authentication & authorization (planned)
- Role-based access control (planned)
- AWS deployment (planned)

Primary objective:

Build a production-grade portfolio project demonstrating:

- Modern Angular architecture (Standalone + Signals)
- Clean Spring Boot backend
- PostgreSQL
- Docker-based infrastructure
- Monorepo architecture with Nx
- Professional development workflow

---

# 🏗 Current Architecture State

## Monorepo

Nx workspace (Integrated Monorepo)

Structure:

flowboard-app/
├── apps/
│ ├── web/ → Angular application
│ └── api/ → Spring Boot backend
├── libs/ → Reserved for shared frontend libraries
├── docker-compose.yml
├── .env (ignored)
├── .env.example
├── PROMPT.md

---

# 🌐 Frontend (Angular)

Status:

- Angular app generated via Nx
- Standalone components enabled
- Taiga UI selected as UI component library
- Layout design reference defined (modern SaaS style)

Next frontend steps (planned):

- Base layout (MainLayout, Sidebar, Topbar)
- Kanban board (mock-driven)
- Signal-based state management
- Feature-based structure inside libs/

---

# 🧠 Backend (Spring Boot)

Created via Spring Initializr and placed under:

apps/api/

Key decisions:

- Java 21
- No Lombok
- Feature-based package structure
- REST API design
- JPA + PostgreSQL
- Spring Security included
- Spring Boot DevTools enabled

Current execution strategy:

- Run PostgreSQL via Docker
- Run Spring Boot locally with hot reload
- Load environment variables via dotenv-cli

---

# 🐘 Database (PostgreSQL)

Managed via Docker Compose.

docker-compose.yml includes:

- postgres:16
- Volume for persistence
- Environment variables from `.env`

Database runs isolated from host machine.

Development workflow:

docker compose up postgres -d

---

# 🔐 Environment Variables Strategy

Environment variables stored in:

.env (ignored by Git)

Template stored in:

.env.example (committed)

Variables include:

- POSTGRES_DB
- POSTGRES_USER
- POSTGRES_PASSWORD
- SPRING_DATASOURCE_URL
- SPRING_DATASOURCE_USERNAME
- SPRING_DATASOURCE_PASSWORD
- SPRING_PROFILES_ACTIVE

Spring profile system:

- application.yml → base
- application-dev.yml → development config

---

# 🚀 Backend Development Workflow

Run backend with environment variables loaded:

npm run dev:api

Script uses:

dotenv-cli + bash

Command executed internally:

dotenv -e .env -- bash -c "cd apps/api && ./mvnw spring-boot:run"

Hot reload enabled via Spring DevTools.

---

# 🐳 Containerization Strategy

Current approach:

- PostgreSQL → Docker container
- Backend → runs locally during development
- Full backend containerization prepared but not primary dev mode

Reason:

Faster development cycle and easier debugging.

Future:

Full containerized stack for integration testing and deployment.

---

# 📦 Architectural Principles

Frontend:

- Standalone components only
- Angular Signals for state
- Feature-based organization
- Separation of UI, state, services

Backend:

- Feature-based packages
- Explicit constructors and methods (no Lombok)
- Records for DTOs
- Clear service layer
- No overengineering

Infrastructure:

- Docker for database
- Environment variables for configuration
- Profiles for environment separation

---

# ❌ Avoid

- Premature microservices
- Excessive abstraction
- Event sourcing
- Complex DDD layering
- Overuse of global state
- Hardcoded secrets

---

# 📌 Current Phase

Infrastructure Setup Phase — Completed

- Nx monorepo created
- Angular app scaffolded
- Spring Boot backend scaffolded
- PostgreSQL configured with Docker
- Environment variables configured
- Dev workflow stabilized

Next phase:

Domain modeling + First backend module (User + Auth)
OR
Frontend layout implementation

---

# 🧭 How to Continue in Future Sessions

When starting a new session:

1. Reference this PROMPT.md
2. Describe current phase
3. Specify whether working on:
   - Frontend
   - Backend
   - Infrastructure
   - Integration
4. Clarify whether using:
   - Mock phase
   - Real persistence phase
   - Containerized mode

---

# 🔥 Positioning Statement

FlowBoard is not a tutorial project.

It is a production-grade SaaS architecture simulation designed to demonstrate modern full-stack engineering skills aligned with 2026 market demands.
