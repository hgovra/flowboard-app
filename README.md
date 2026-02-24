# FlowBoard

**FlowBoard** is a modern full-stack project management platform
inspired by Jira, designed as a production-grade portfolio project to
demonstrate advanced frontend, backend, infrastructure, and
architectural skills aligned with 2026 market standards.

---

## 🚀 Project Vision

FlowBoard simulates a real SaaS product architecture with:

- Multi-project management
- Kanban board interface
- Role-based access control (RBAC)
- Real-time updates (planned)
- Secure authentication (planned)
- Cloud-ready deployment strategy (AWS planned)

This is not a tutorial project.\
It is a system architecture exercise designed to reflect real-world
engineering standards.

---

## 🏗 Architecture Overview

High-level system design:

Angular (Nx Monorepo) ↓ Spring Boot REST API ↓ PostgreSQL (Docker)

The project follows a clean separation between frontend, backend, and
infrastructure concerns.

For full technical details, see:\
**ARCHITECTURE.md**

---

## 🧰 Tech Stack

### Frontend

- Angular (Standalone APIs)
- Nx Monorepo
- Taiga UI
- Angular Signals (planned)
- SCSS

### Backend

- Java 21
- Spring Boot 3+
- Spring Security
- Spring Data JPA
- PostgreSQL
- Maven

### Infrastructure

- Docker (PostgreSQL container)
- Environment-based configuration
- dotenv-cli for local variable injection

---

## 📁 Monorepo Structure

flowboard-app/ │ ├── apps/ │ ├── web/ → Angular application │ └── api/ →
Spring Boot backend │ ├── libs/ → Shared frontend libraries (planned) │
├── docker-compose.yml ├── PROMPT.md ├── ARCHITECTURE.md

---

## ⚙️ Local Development Setup

### 1️⃣ Start PostgreSQL (Docker)

```bash
docker compose up postgres -d
```

### 2️⃣ Configure environment variables

Create a `.env` file based on:

    .env.example

### 3️⃣ Run Backend

```bash
npm run dev:api
```

This loads environment variables and runs:

    cd apps/api && ./mvnw spring-boot:run

Spring Boot runs locally with DevTools enabled for hot reload.

### 4️⃣ Run Frontend

```bash
npx nx serve web
```

---

## 🔐 Environment Variables

Environment configuration is managed via:

- `.env` (ignored)
- `.env.example` (committed)
- Spring profiles (`application-dev.yml`)

Sensitive credentials are never committed.

---

## 📌 Current Status

✔ Nx monorepo configured\
✔ Angular app scaffolded\
✔ Spring Boot backend scaffolded\
✔ PostgreSQL containerized\
✔ Environment strategy stabilized\
✔ Development workflow operational

Next phase:

- Domain modeling
- User authentication module
- Kanban board implementation
- Realtime updates

---

## 🎯 Purpose

FlowBoard exists to demonstrate:

- Monorepo architecture with Nx
- Modern Angular architecture
- Clean Spring Boot backend structure
- Docker-based development environment
- Infrastructure-aware engineering
- Production-oriented thinking

---

## 📄 Documentation

- Development Context → `PROMPT.md`
- System Architecture → `ARCHITECTURE.md`

---

## 📜 License

This project is for portfolio and educational purposes.
