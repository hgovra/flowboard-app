# FlowBoard

> Production-grade SaaS architecture simulation built with Angular 21+,
> Spring Boot, and Nx.

------------------------------------------------------------------------

## 🏷 Badges

![Angular](https://img.shields.io/badge/Angular-21%2B-red)
![Nx](https://img.shields.io/badge/Nx-Monorepo-blue) ![Spring
Boot](https://img.shields.io/badge/Spring%20Boot-Java%2021-green)
![PostgreSQL](https://img.shields.io/badge/PostgreSQL-16-blue) ![Design
System](https://img.shields.io/badge/Design-System%202026-purple)
![Linted](https://img.shields.io/badge/Code%20Style-ESLint%20%2B%20Prettier-orange)

------------------------------------------------------------------------

## 🎯 Project Goal

FlowBoard is not a tutorial project.

It is a realistic simulation of a modern SaaS product architecture
aligned with 2026 engineering standards, focusing on:

-   Clean frontend boundaries
-   Scalable monorepo structure
-   Backend integration
-   Design system maturity
-   Production-ready practices

------------------------------------------------------------------------

## 🏗 Architecture Diagram

                            ┌───────────────┐
                            │   AppShell    │
                            │  (Topbar +    │
                            │   Sidebar)    │
                            └───────┬───────┘
                                    │
                                    ▼
                            ┌───────────────┐
                            │  RouterOutlet │
                            └───────┬───────┘
                                    │
                    ┌───────────────┴───────────────┐
                    ▼                               ▼
            Projects Feature                 Board Feature

Monorepo:

apps/ - web (Angular 21+) - api (Spring Boot)

libs/ - ui (design abstraction) - core (infra services) - shared-types
(contracts) - features (domain logic)

------------------------------------------------------------------------

## 🎨 Design System (2026-ready)

-   Manrope typography
-   OKLCH color space
-   Semantic design tokens
-   Fluid typography via clamp()
-   Dynamic state colors via color-mix()
-   CSS cascade layers (@layer)
-   Dark mode with \[data-theme="dark"\]

------------------------------------------------------------------------

## 📸 UI Preview

Topbar with search + user controls\
Sidebar navigation\
Responsive grid layout\
Mono SVG brand icon\
Full favicon setup (SVG + PNG + Apple Touch + Manifest)

------------------------------------------------------------------------

## 🧪 Code Quality & Tooling

-   Nx enforceModuleBoundaries
-   ESLint (Flat Config)
-   simple-import-sort
-   Prettier integration
-   Husky pre-commit lint enforcement
-   BEM methodology
-   Path aliases

------------------------------------------------------------------------

## 🐳 Development Workflow

Database:

docker compose up postgres -d

Backend:

npm run dev:api

Frontend:

npx nx serve web

------------------------------------------------------------------------

## 🚀 Current Phase

-   Base layout implemented
-   Design system configured
-   Branding finalized
-   Ready to implement first feature page

------------------------------------------------------------------------

## 📌 Philosophy

-   Avoid overengineering
-   Prefer clarity over abstraction
-   Keep boundaries explicit
-   Build like a real product
