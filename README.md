# Generator Drabinek Turniejowych

Aplikacja webowa do tworzenia i zarządzania drabinkami turniejowymi. Obsługuje formaty: single elimination, round robin i swiss.

**Stack:** React + TypeScript (frontend), Express + Prisma (backend), MySQL (baza danych)

## Setup

---

## Wymagania

- Node.js 22+
- Aplikacja uruchamiająca lokalnie MySQL np. XAMPP

---

## Klonowanie

```bash
git clone https://github.com/NatanKwaskiewicz/Generator_drabinek_turniejowych.git
```

---

## Instalacja modułów

```bash
npm install
```

---

## Konfiguracja

Utwórz plik `.env` w głównym katalogu projektu:

```env
DATABASE_URL="mysql://USER:PASSWORD@localhost:3306/NAZWA_BAZY"
PORT=3000
HOSTNAME=0.0.0.0
```

---

## Uruchomienie

### 1. Generowanie klienta Prisma

```bash
npx prisma generate
```

### 2. Migracja bazy danych

```bash
npx prisma migrate dev
```

### 3. Seedowanie bazy

```bash
npx prisma db seed
```

### 4. Uruchomienie backendu

```bash
npm run dev:backend
```

### 5. Uruchomienie frontendu

```bash
npm run dev
```

---

## Testy

```bash
# Wszystkie testy
npm test

# Tryb watch
npm run test:watch

# Z pokryciem kodu
npm run test:coverage
```
