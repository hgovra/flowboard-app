# FlowBoard --- Roadmap

This roadmap outlines the planned evolution of FlowBoard in clear and
incremental phases.

Each phase focuses on delivering meaningful architectural progress while
avoiding overengineering.

------------------------------------------------------------------------

## Phase 1 --- Backend Core

Goal: Establish domain foundation and authentication.

-   User entity
-   Role enum (ADMIN, MEMBER, VIEWER)
-   Basic user CRUD
-   Authentication endpoint
-   JWT-based security
-   Password hashing
-   Protected routes

Outcome: Secure backend foundation with role-based access control ready
for frontend integration.

------------------------------------------------------------------------

## Phase 2 --- Frontend Foundation

Goal: Build production-grade UI structure.

-   MainLayout (Sidebar + Topbar)
-   Theme toggle (Light/Dark)
-   Taiga UI integration
-   Route structure
-   Auth pages (Login/Register)
-   Global layout system

Outcome: Stable UI shell ready for feature development.

------------------------------------------------------------------------

## Phase 3 --- Project & Task Domain

Goal: Implement core project management features.

Backend: - Project entity - Task entity - Relationship modeling - CRUD
endpoints - Permission enforcement

Frontend: - Projects dashboard - Kanban board (mock → real API) - Drag &
drop (Angular CDK) - Signal-based state management

Outcome: Functional project management system with persistent data.

------------------------------------------------------------------------

## Phase 4 --- Realtime Collaboration

Goal: Introduce live updates.

-   WebSocket configuration
-   Board event broadcasting
-   Task move synchronization
-   Optional presence indicators

Outcome: Collaborative Kanban experience.

------------------------------------------------------------------------

## Phase 5 --- Production Readiness

Goal: Infrastructure and deployment.

-   Full containerization (frontend + backend)
-   CI/CD (GitHub Actions)
-   AWS deployment (EC2 / RDS)
-   Environment separation (dev / prod)
-   HTTPS configuration

Outcome: Cloud-deployed production-ready system.

------------------------------------------------------------------------

## Guiding Principles

-   Build incrementally
-   Keep architecture clean
-   Avoid unnecessary abstraction
-   Focus on clarity over complexity
-   Treat this as a real SaaS system

------------------------------------------------------------------------

Current Status:

Infrastructure phase completed.\
Next step: Phase 1 --- Backend Core.
