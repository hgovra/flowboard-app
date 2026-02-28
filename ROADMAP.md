# FlowBoard Roadmap

This roadmap defines the phased evolution of FlowBoard as a production-grade SaaS architecture project.

The goal is to simulate real-world engineering standards aligned with 2026 practices, without overengineering.

---

# 🔵 FASE 0 — Foundation & Local Setup

## Objectives

- Nx integrated monorepo
- Angular 21+ standalone architecture
- Spring Boot (Java 21)
- PostgreSQL via Docker
- ESLint (Flat Config)
- Prettier
- Husky (pre-commit lint)
- Path aliases
- Module boundaries enforcement
- Taiga UI integration
- Modern design system (OKLCH, clamp, color-mix, @layer)
- AppShell + AuthShell layout
- Branding + favicon setup

Status: ✅ Completed

---

# 🟢 FASE 1 — Core Frontend Features

## Objectives

- Implement ProjectsPage
- Implement BoardPage
- Wire router structure
- Integrate Taiga UI components
- Create mock data layer
- Introduce Signals for local state
- Establish feature folder structure inside libs/features

Focus: frontend architecture maturity.

---

# 🟡 FASE 2 — Authentication & Security

This phase introduces real security concerns and architectural separation.

## 2.1 — Authentication Basics

- User entity
- Login endpoint
- Password hashing
- Session handling

## 2.2 — Introduce BFF Layer (Spring-Based)

FlowBoard will implement the Backend for Frontend (BFF) pattern using Spring Boot.

No additional Node layer will be introduced.

Architectural Strategy:

Browser → Spring (BFF layer) → Domain Layer → Database

Responsibilities of BFF layer:

- Adapt domain models for UI consumption
- Control authentication flow
- Issue and validate HttpOnly cookies
- Protect against XSS token exposure
- Centralize security logic
- Prepare RBAC enforcement

Goal: simulate enterprise-grade security architecture.

---

# 🟠 FASE 3 — Authorization & RBAC

- Role-based access control
- Permission checks
- UI adaptation based on roles
- Backend enforcement of roles

---

# 🟣 FASE 3.5 — Global State Architecture (NgRx)

This phase introduces NgRx to simulate enterprise-level frontend state management.

Purpose:

- Practice NgRx in a realistic environment
- Manage authenticated user state
- Normalize entities (projects, boards, tasks)
- Implement loading and error handling patterns
- Introduce optimistic updates
- Structure feature-based stores

Scope:

- NgRx Store
- Feature stores per domain
- NgRx Effects for async flows
- NgRx Entity for normalization
- DevTools integration
- Hybrid approach: Signals for local state, NgRx for global complex state

NgRx is introduced after authentication and RBAC to ensure it solves real architectural problems rather than being added prematurely.

---

# 🔵 FASE 4 — Realtime & Advanced Features

- WebSocket or SSE
- Live board updates
- Optimistic UI patterns refinement
- Advanced state synchronization

---

# 🟣 FASE 5 — Infrastructure & Deployment

- Dockerization refinement
- Production configuration
- Environment-based config separation
- AWS deployment simulation
- CI/CD pipeline (GitHub Actions)

---

# Architectural Principles (Always Active)

- Avoid overengineering
- Prefer clarity over abstraction
- Keep boundaries explicit
- No unnecessary microservices
- Production-oriented mindset
- Clean dependency graph
- Feature-based structure

---

This roadmap is iterative and may evolve as architectural decisions mature.
