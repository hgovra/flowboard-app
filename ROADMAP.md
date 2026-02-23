
# FlowBoard — Roadmap

This roadmap outlines the planned evolution of FlowBoard in clear and incremental phases.

Each phase focuses on delivering meaningful architectural progress while avoiding overengineering.

---

## 🔵 FASE 0 — Setup Mínimo para Rodar Localmente

Objetivo: ter o projeto Angular rodando com estrutura escalável e preparada para crescer.

### Monorepo Nx

- Criar workspace Nx
- Criar app Angular standalone
- Criar libs:
  - ui
  - core
  - shared-types
  - features
- Configurar path aliases
- Configurar ESLint + Prettier
- Configurar Husky (opcional)

### Angular Base

- Habilitar Standalone APIs
- Configurar Router standalone
- Configurar estrutura base:
  - app.routes.ts
  - layout principal
- Configurar biblioteca de UI (Taiga UI)
- Criar tema base (light/dark preparado)
- Criar layout base (header + sidebar)

### Mocks

- Criar pasta mocks
- Criar services fake:
  - MockProjectService
  - MockTaskService
  - MockUserService
- Criar dados estáticos iniciais

### Resultado

- Estrutura profissional
- Layout pronto
- UI base
- Serviços mockados
- Aplicação rodando sem backend

Tempo estimado: 1 semana (~30h)

---

## 🔵 FASE 1 — Projetos (Multi-projeto)

Agora adicionamos contexto multi-projeto antes do board.

### UI

- Página de listagem de projetos
- Criar projeto
- Editar projeto
- Navegação para board por projeto

### Estado

- Signal Store para projetos
- Seleção de projeto ativo

### Permissões (simuladas)

- Definir papéis mockados
- Restringir UI conforme role

### Resultado

- Multi-tenant UI
- Separação de dados por projeto
- Estrutura próxima de SaaS real

Tempo estimado: 1 semana (~30h)

---

## 🔵 FASE 2 — Board Kanban

Agora começamos pelo que é visual e impactante.

### Estrutura de Domínio

- Modelos TypeScript:
  - Project
  - Task
  - User
  - Column
- Enums:
  - TaskStatus
  - TaskPriority

### Kanban UI

- Criar página BoardPage
- Criar componente KanbanColumn
- Criar componente TaskCard
- Implementar Angular CDK Drag & Drop
- Atualizar estado via Signals
- Implementar ordenação

### Modais

- Modal criar tarefa
- Modal editar tarefa
- Exclusão com confirmação

### Estado

- Signal Store para Board
- Estado derivado:
  - tarefas por coluna
  - contadores
  - filtros ativos

### Extras estratégicos

- Filtro por usuário
- Filtro por prioridade
- Busca textual

### Resultado

- Produto visualmente forte
- Experiência tipo Jira
- Uso real de Signals
- Arquitetura frontend madura

Tempo estimado: 2 semanas (~60h)

---

## 🔵 FASE 3 — Autenticação (Mock)

### UI

- Tela de login
- Tela de registro
- Guard de rota
- Interceptor (simulado)

### Estado

- AuthStore com Signals
- Usuário logado mockado
- Persistência em localStorage

### Controle de acesso

- Proteger rotas
- Esconder elementos conforme role

### Resultado

- Aplicação com fluxo autenticado
- UX mais realista
- Base pronta para backend real

Tempo estimado: 1 semana (~30h)

---

## 🔵 FASE 4 — Conectar Backend Real

Agora começa a substituição gradual dos mocks.

### Backend Setup

- Criar app Spring Boot no monorepo
- Configurar Postgres
- Docker Compose

Tempo: 3–4 dias

### Persistência por Camadas

Ordem recomendada:

1️⃣ Projetos  
- Criar entidades  
- Criar CRUD  
- Substituir MockProjectService  

2️⃣ Tasks  
- CRUD tarefas  
- Endpoint mover tarefa  
- Substituir MockTaskService  

3️⃣ Auth  
- JWT  
- Spring Security  
- Substituir MockUserService  

Tempo total backend: 2–3 semanas (~75h)

---

## 🔵 FASE 5 — Realtime

Após persistência funcionar:

### Backend

- Configurar WebSocket
- Canal por projeto
- Broadcast de eventos

### Frontend

- Serviço WebSocket
- Atualizar Signal Store dinamicamente

Tempo estimado: 1 semana

---

## 🔵 FASE 6 — AWS + Deploy

- Dockerização completa
- RDS
- EC2
- CI/CD
- HTTPS

Tempo estimado: 1–2 semanas

---

## 📊 Cronograma Total

| Fase | Semanas |
|------|---------|
| Setup | 1 |
| Projetos | 1 |
| Kanban | 2 |
| Auth (mock) | 1 |
| Backend real | 3 |
| Realtime | 1 |
| AWS | 1–2 |
| **Total** | **10–11 semanas (~300h)** |
