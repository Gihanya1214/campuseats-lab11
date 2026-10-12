# CampusEats — SE3090 Lab 11

Full-stack CampusEats deployment lab: React/Vite frontend, ASP.NET Core API, PostgreSQL.

## Tiers

| Tier | Folder | Host |
|------|--------|------|
| Frontend | `frontend/` | Vercel |
| Backend API | `backend/` | Render (Docker) |
| Database | managed PostgreSQL | Neon |

## Frontend

```bash
cd frontend
npm install
npm run build
```

Environment variable: `VITE_API_URL` (baked in at build time).

## Backend

Environment variables (set on Render — never commit real values):

- `ConnectionStrings__Default`
- `Jwt__Key`
- `Jwt__Issuer`
- `Jwt__Audience`
- `FrontendOrigin`

The API listens on `0.0.0.0:8080` as required by Render.
