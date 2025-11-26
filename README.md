# WWSI Blog — Lab03 (Next.js + Prisma SQLite)

## Uruchomienie

1. Zainstaluj zależności:
   ```
   npm install
   ```

2. Prisma wygeneruje klienta automatycznie dzięki `postinstall` (albo uruchom ręcznie):
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

## Uwaga
Plik `.env` zawiera `DATABASE_URL="file:./dev.db"`. Po uruchomieniu migracji plik `dev.db` zostanie utworzony.
