# Enterprise Tech frontend

React frontend built with Vite.

## Development

Use Node.js 20.19+ or 22.12+.

```powershell
npm install
Copy-Item .env.example .env
npm run dev
```

If `.env` already exists, keep it and set `VITE_BACKEND_URL` to the backend URL
(the default is `http://localhost:8001`).

## Production

```powershell
npm run build
npm run preview
```

The production build is written to `dist/`.
