ENTERPRISE TECH website

static-site/  - ready-to-upload production build (open via any static host). Contact form needs the backend running.
frontend/     - React source. cp .env.example .env, then: yarn install && yarn start
backend/      - FastAPI source. cp .env.example .env, pip install -r requirements.txt, uvicorn server:app --port 8001

Edit placeholder text/contact info in frontend/src/data/content.js
