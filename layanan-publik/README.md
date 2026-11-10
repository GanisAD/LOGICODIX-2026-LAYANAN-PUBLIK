# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Oxc](https://oxc.rs)
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/)

## React Compiler

The React Compiler is not enabled on this template because of its impact on dev & build performances. To add it, see [this documentation](https://react.dev/learn/react-compiler/installation).

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.

## 1. Clone & Install Dependencies

``` Bash
git clone <repository-url>
cd LOGICODIX-2026-LAYANAN-PUBLIK
npm install
```

## 2. Jalankan Development Server

``` Bash
npm run dev
```

Buka peramban di http://localhost:5173.

### Directory Tree Definition

```
licensing-navigator/
├── public/
│   ├── favicon.ico
│   └── assets/
│       └── markers/
│           └── map-marker.svg
├── scripts/
│   └── validate-data.js
├── src/
│   ├── components/
│   │   ├── catalog/
│   │   │   ├── CatalogCard.tsx
│   │   │   ├── CatalogSearch.tsx
│   │   │   ├── CatalogView.tsx
│   │   │   └── ServiceIntakeDiagnostic.tsx
│   │   ├── common/
│   │   │   ├── AntiExtortionBanner.tsx
│   │   │   ├── DisclaimerFooter.tsx
│   │   │   ├── Header.tsx
│   │   │   └── Layout.tsx
│   │   ├── map/
│   │   │   └── ServiceMap.tsx
│   │   ├── results/
│   │   │   ├── DocumentChecklist.tsx
│   │   │   ├── FeeDisplay.tsx
│   │   │   ├── ProcessSteps.tsx
│   │   │   ├── ResultsView.tsx
│   │   │   └── SharePrintActions.tsx
│   │   └── wizard/
│   │       ├── QuestionCard.tsx
│   │       └── WizardEngine.tsx
│   ├── data/
│   │   ├── intake-diagnostic.json
│   │   └── services/
│   │       ├── permits-building-01.json
│   │       ├── permits-health-02.json
│   │       └── permits-microbusiness-03.json
│   ├── hooks/
│   │   ├── useChecklistState.ts
│   │   └── useUrlState.ts
│   ├── types/
│   │   └── index.ts
│   ├── utils/
│   │   ├── exportFormatters.ts
│   │   └── urlEncoder.ts
│   ├── App.tsx
│   ├── index.css
│   └── main.tsx
├── README.md
├── package.json
└── tsconfig.json
```

### Directory Responsibility Mapping

* `scripts/`: Contains Node.js build automation modules. The `validate-data.js` script parses `src/data/intake-diagnostic.json` and all files in `src/data/services/` prior to build execution, halting continuous integration (CI) pipelines if schema or logic rules are breached (Story N8).
* `src/data/`: Isolated static JSON datasets.
  * `src/data/intake-diagnostic.json`: Defines the global initial diagnostic question graph used to guide non-technical users to appropriate service catalog items (Story N10).
  * `src/data/services/*.json`: Independent data schemas for individual municipal permit services containing decision trees, fee structures, document checklists, and location data (Stories N1, N2, N3, N8, N9).
* `src/components/catalog/`: Visual modules handling catalog browsing (`CatalogView.tsx`), real-time search filtering (`CatalogSearch.tsx`), individual service cards (`CatalogCard.tsx`), and the pre-wizard global diagnostic intake modal (`ServiceIntakeDiagnostic.tsx`) (Stories N1, N10).
* `src/components/wizard/`: The single-question adaptive decision tree rendering engine (`WizardEngine.tsx`) and card component (`QuestionCard.tsx`). Dynamically parses service decision paths while preserving in-memory navigation history (Story N2).
* `src/components/results/`: UI modules rendering the terminal assessment state (`ResultsView.tsx`), interactive document checklists (`DocumentChecklist.tsx`), verified fee structures (`FeeDisplay.tsx`), numbered operational steps (`ProcessSteps.tsx`), and stateless sharing actions (`SharePrintActions.tsx`) (Stories N3, N4).
* `src/components/map/`: OpenStreetMap integration (`ServiceMap.tsx`) rendering physical service counter locations, operating hours, and Leaflet map markers based on JSON coordinates (Story N9).
* `src/components/common/`: Global UI layout framing (`Layout.tsx`, `Header.tsx`), persistent anti-extortion complaint banners (`AntiExtortionBanner.tsx`), and prototype disclaimers (`DisclaimerFooter.tsx`) (Stories N5, N6, N7).
* `src/hooks/` &amp; `src/utils/`: Custom React hooks and transformation utilities managing transient session storage (`useChecklistState.ts`), Base64/URI state string encoding (`urlEncoder.ts`, `useUrlState.ts`), and text exports (`exportFormatters.ts`) (Story N4).

### Component Relationship Breakdown

```
                                 ┌─────────────────────────────────────┐
                                 │   ServiceIntakeDiagnostic (N10)     │
                                 │ (src/data/intake-diagnostic.json)   │
                                 └──────────────────┬──────────────────┘
                                                    │ Recommends Service ID
                                                    ▼
┌────────────────────────────────────────────────────────────────────────────────────────┐
│                                  CatalogView (N1)                                      │
│ ┌───────────────────────────┐                 ┌──────────────────────────────────────┐ │
│ │ CatalogSearch             │                 │ CatalogCard (x3 Services)            │ │
│ └───────────────────────────┘                 └──────────────────────────────────────┘ │
└───────────────────────────────────────────┬────────────────────────────────────────────┘
                                            │ Direct Launch (ServiceSchemaDTO)
                                            ▼
┌────────────────────────────────────────────────────────────────────────────────────────┐
│                                  WizardEngine (N2)                                     │
│ ┌───────────────────────────┐                 ┌──────────────────────────────────────┐ │
│ │ QuestionCard (1 / Screen) │                 │ Progress Indicator (3-5 Steps)       │ │
│ └───────────────────────────┘                 └──────────────────────────────────────┘ │
└───────────────────────────────────────────┬────────────────────────────────────────────┘
                                            │ Reaches Terminal Result Node
                                            ▼
┌────────────────────────────────────────────────────────────────────────────────────────┐
│                                  ResultsView (N3)                                      │
│ ┌───────────────────────────┐    ┌──────────────────────────┐    ┌───────────────────┐ │
│ │ DocumentChecklist         │    │ FeeDisplay               │    │ ProcessSteps      │ │
│ └───────────────────────────┘    └──────────────────────────┘    └───────────────────┘ │
│ ┌───────────────────────────┐    ┌──────────────────────────┐    ┌───────────────────┐ │
│ │ SharePrintActions (N4)    │    │ AntiExtortionBanner (N5) │    │ ServiceMap (N9)   │ │
│ └───────────────────────────┘    └──────────────────────────┘    └───────────────────┘ │
│ ┌────────────────────────────────────────────────────────────────────────────────────┐ │
│ │ Inline Disclaimer Banner (N6)                                                      │ │
│ └────────────────────────────────────────────────────────────────────────────────────┘ │
└───────────────────────────────────────────┬────────────────────────────────────────────┘
                                            │
                                            ▼
┌────────────────────────────────────────────────────────────────────────────────────────┐
│                                 DisclaimerFooter (N6)                                  │
│            (Mounted globally via Layout.tsx - WCAG AA / 360px Fluid - N7)             │
└────────────────────────────────────────────────────────────────────────────────────────┘

```

| Triggering Event | Source File / Component | Target File / Component | Data / Control Transferred (DTO) |
| :--- | :--- | :--- | :--- |
| **Build Initiation** | Terminal / CI Pipeline | `scripts/validate-data.js` | Invokes validation scripts over `src/data/**/*.json`. |
| **Build Validation Pass** | `scripts/validate-data.js` | Bundler (`vite build`) | Returns exit code 0, permitting output generation to `/dist`. |
| **Initial Page Render** | Browser HTTP Request | `App.tsx` $\rightarrow$ `CatalogView.tsx` | Instantiates application layout; passes `ServiceSummaryDTO[]`. |
| **Diagnostic Execution** | User opens diagnostic | `ServiceIntakeDiagnostic.tsx` | Parses `src/data/intake-diagnostic.json`; passes selected `targetServiceId` to catalog/wizard. |
| **Keyword Search Filter** | User types search term | `CatalogSearch.tsx` $\rightarrow$ `CatalogView.tsx` | Passes string filter token; updates visible `CatalogCard` components in place. |
| **Wizard Node Launch** | User selects service card | `WizardEngine.tsx` | Loads target service schema (`ServiceSchemaDTO`); initializes `WizardAnswerState`. |
| **Option Selection** | User taps question choice | `QuestionCard.tsx` $\rightarrow$ `WizardEngine.tsx` | Passes option `nextId`; updates active step index and answer history graph. |
| **Checklist Selection** | User toggles document check | `DocumentChecklist.tsx` $\rightarrow$ `useChecklistState.ts` | Toggles item index state string in volatile `sessionStorage`. |
| **WhatsApp Share** | User taps "Bagikan WhatsApp" | `SharePrintActions.tsx` | Invokes `urlEncoder.ts`; formats `whatsapp://send?text=...` URI string payload. |
| **Deep Link Direct Load** | Incoming shared URL request | `useUrlState.ts` $\rightarrow$ `ResultsView.tsx` | Decodes `EncodedUrlParams` string (`?s=...&a=...`); skips wizard, rendering `ServiceResultDTO` directly. |
