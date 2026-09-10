# AI BIS SENSOR — SIH 2026

Frontend-first prototype for the Smart India Hackathon 2026 problem statement: AI-Powered Recommendation Engine for Identifying Applicable Indian Standards for Procurement Specifications.

## Updated capabilities
- Specification-first requirement analysis
- Missing/ambiguous requirement awareness
- Keyword + semantic-style local matching
- Ranked IS recommendations with evidence/reasoning
- Latest version/revision and latest amendment fields
- Official BIS verification path under every IS number
- Example products and clearly labeled demo buyer ratings
- Separate product lists by domain
- Product-specific knowledge graph
- Safety, testing and compliance views
- PDF/DOCX/TXT tender demo upload flow
- Voice input
- 22-language selector
- Attractive responsive UI
- Vercel-compatible Vite build

## Important data note
The current repository is a prototype and contains structured/demo standards data. Verify every applicable requirement against the official BIS publication before procurement. Buyer ratings are synthetic demo data and are not BIS ratings.

## Technical approach
Proposed full-scale architecture: React frontend → FastAPI backend → NLP/embedding/LLM matching → BIS standards data store → ranked, explainable recommendations. The present prototype demonstrates the user experience and local recommendation flow without requiring API keys.

## Run
```bash
npm install
npm run dev
```
