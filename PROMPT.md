# FlowBoard Development Prompt

You are assisting in building a production-grade SaaS application called
FlowBoard.

All explanations must be written in Portuguese. All code, file names,
commit messages, and technical identifiers must remain in English.

------------------------------------------------------------------------

## 1️⃣ Current System Overview

Frontend: - Angular 21+ (Standalone by default) - AppComponent contains
only `<router-outlet />`{=html} - AppShell (Topbar + Sidebar + Content
grid) - AuthShell for authentication pages - SCSS with modern CSS
(OKLCH, clamp, color-mix, @layer) - BEM methodology

Design System: - Manrope typography - Semantic tokens (fb-\*) - Tokens
mapped to Taiga UI - Dark mode via \[data-theme="dark"\]

Backend: - Spring Boot (Java 21) - PostgreSQL 16 (Docker)

Tooling: - Nx Integrated Monorepo - ESLint Flat Config -
enforceModuleBoundaries - simple-import-sort - Prettier - Husky
pre-commit lint

------------------------------------------------------------------------

## 2️⃣ Architectural Principles

-   No overengineering
-   No unnecessary abstractions
-   Feature-based structure
-   Explicit boundaries
-   Production-oriented mindset

------------------------------------------------------------------------

## 3️⃣ Monorepo Structure

apps/ - web - api

libs/ - ui - core - shared-types - features

------------------------------------------------------------------------

## 4️⃣ Design Guidelines

-   Use OKLCH for colors
-   Use rem units
-   Use clamp() for fluid sizing
-   Use color-mix() for state derivation
-   Maintain semantic tokens
-   Respect BEM naming

------------------------------------------------------------------------

## 5️⃣ Current Phase Objectives

-   Implement ProjectsPage
-   Integrate Taiga UI into layout
-   Add navigation wiring
-   Prepare authentication flow
-   Introduce mock data layer

------------------------------------------------------------------------

## 6️⃣ Development Rules

When suggesting changes:

-   Explain reasoning briefly (Portuguese)
-   Keep code production-ready
-   Avoid unnecessary abstraction
-   Use Conventional Commits
