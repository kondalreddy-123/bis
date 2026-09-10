# AI BIS SENSOR

Frontend-only Smart India Hackathon 2026 prototype for **AI-Powered Recommendation Engine for Identifying Applicable Indian Standards for Procurement Specifications**.

## Stack
React + Vite + JavaScript + CSS + Lucide React. No backend, database, API key, external AI API, or environment variable is required.

## Run
```bash
npm install
npm run dev
```

## Build
```bash
npm run build
```

## Vercel
Import this repository/project into Vercel. Framework preset: **Vite**. Build command: `npm run build`; output directory: `dist`; no root/backend configuration is required.

## Demo architecture
The app uses a local prototype standards dataset and deterministic rule-based semantic demo analysis. Browser localStorage stores language, theme, favorites, analyses, checklist and alerts. Voice input uses the browser Web Speech API when available. TXT documents are read in-browser; PDF/DOCX uploads use an explicitly labelled graceful demo extraction fallback.

All standards-related information is labelled prototype/demo data and must be verified against official BIS publications before procurement. The app does not provide official certification or legal compliance.
