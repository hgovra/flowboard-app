# FlowBoard --- System Architecture

This document describes the current architectural state of FlowBoard.

It reflects only what has already been implemented and stabilized.

Future architectural decisions will be documented as the system evolves.

---

# 1. High-Level Architecture

Current system structure:

Client (Angular - Nx app) ↓ REST API (Spring Boot) ↓ PostgreSQL (Docker
container)

At this stage:

- Angular and Spring Boot are scaffolded
- PostgreSQL is fully configured and running via Docker
- Backend runs locally during development
- Infrastructure foundation is complete

---

# 2. Monorepo Structure

FlowBoard uses an Nx Integrated Monorepo.

flowboard-app/ │ ├── apps/ │ ├── web/ → Angular application │ └── api/ →
Spring Boot backend │ ├── libs/ → Reserved for shared frontend libraries
│ ├── docker-compose.yml ├── .env ├── .env.example ├── PROMPT.md └──
ARCHITECTURE.md

## Rationale

Nx provides:

- Monorepo organization
- Future shared libraries
- Scalable frontend structure
- Clean separation of concerns

Backend remains independent but co-located for cohesive development.

---

# 3. Backend Architecture (Current State)

Location:

apps/api/

## Technology Stack

- Java 21
- Spring Boot 3+
- Spring Web
- Spring Security
- Spring Data JPA
- PostgreSQL
- Spring Boot DevTools
- Maven (wrapper included)

## Design Decisions

- No Lombok
- Explicit constructors and methods
- Records will be used for DTOs (future phase)
- Feature-based package structure planned
- Clean separation between:
  - Controller
  - Service
  - Repository
  - Entity

## Configuration Strategy

Spring profiles enabled:

- application.yml (base)
- application-dev.yml (development config)

Environment variables injected via:

dotenv-cli + .env file

Backend runs locally during development for faster feedback and
debugging.

---

# 4. Database Architecture

PostgreSQL 16 running inside Docker.

Defined in docker-compose.yml:

- Isolated container
- Named volume for persistence
- Environment variables injected from `.env`

Connection strategy:

- Local development → jdbc:postgresql://localhost:5432/flowboard
- Container network (future full-container mode) →
  jdbc:postgresql://postgres:5432/flowboard

Database is not installed directly on host machine.

---

# 5. Environment Configuration Strategy

Environment variables stored in:

.env (ignored by Git)

Template file:

.env.example (committed)

Variables include:

- POSTGRES_DB
- POSTGRES_USER
- POSTGRES_PASSWORD
- SPRING_DATASOURCE_URL
- SPRING_DATASOURCE_USERNAME
- SPRING_DATASOURCE_PASSWORD
- SPRING_PROFILES_ACTIVE

Variables are loaded using:

dotenv-cli inside package.json script.

---

# 6. Development Workflow

## Database

Start database container:

docker compose up postgres -d

## Backend

Run locally with environment variables:

npm run dev:api

Internally executes:

dotenv -e .env -- bash -c "cd apps/api && ./mvnw spring-boot:run"

Benefits:

- Hot reload via DevTools
- Faster feedback loop
- Simplified debugging
- Clean infrastructure isolation

---

# 7. Containerization Strategy

Current state:

- PostgreSQL containerized
- Backend runs locally

Reason:

Optimized development speed.

Future plan:

- Full backend containerization for integration testing
- Full-stack container orchestration
- Production-ready Docker images
- AWS deployment

---

# 8. Frontend Architecture (Current State)

Location:

apps/web/

Angular application scaffolded via Nx.

Key decisions:

- Standalone components only
- Taiga UI selected as component library
- Feature-based structure planned
- Signal-based state management planned

Frontend implementation has not yet started beyond scaffolding.

---

# 9. Security (Current State)

Spring Security dependency included.

Default basic authentication active.

JWT-based authentication will be implemented in future phase.

---

# 10. Architectural Principles

- Avoid overengineering
- Prefer clarity over abstraction
- Feature-based modularization
- Environment isolation
- Infrastructure as code
- Clean separation between frontend and backend

---

# 11. Current Phase

Infrastructure Stabilization --- Completed

Monorepo setup, backend scaffolding, database configuration, environment
management, and development workflow are fully operational.

Next Phase:

Domain modeling and first backend module implementation.
