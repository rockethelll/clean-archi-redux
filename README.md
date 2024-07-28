# CleanArchi frontend Redux Toolkit / Typescript

## Installation

`pnpm install`

## Lancement

`pnpm dev` et voir l'app sur `http://localhost:3000`.

```
src
├── DI─ Injection de dépendances, pour les View Models
├── Domain
│   ├── Entities (règles métier)
│   ├── Models (data models TypeScript)
│   └── Usecases (actions/logique métier)
├── Infrastructure
│   └── Gateways (connexion aux API's, fetchs)
│   └── Presenters (adapters usecases/viewmodels)
│   └── Repositories (adapters usecases/gateways)
│   └── inMemory (fake database)
├── Store
├── Utils
└── UserInterface
    ├── Components
    └── Pages
```
