# WWSI Blog — Lab03 (Next.js + Prisma SQLite)

## Uruchomienie

1. Zainstaluj node modules:
   ```
   npm install
   ```

2. Wygeneruj migracje prisma:
   ```
   npx prisma generate
   npx prisma migrate dev --name init
   ```

3. Uruchom aplikację:
   ```
   npm run dev
   ```

## Co zawiera projekt
- Next.js 14 (App Router)
- Prisma + SQLite
- Endpoints API:
  - GET /api/posts
  - POST /api/posts
  - GET /api/posts/{id}/comments  (only approved)
  - POST /api/posts/{id}/comments (creates approved=false)
  - POST /api/comments/{id}/approve
  - GET /api/ALL_PENDING
