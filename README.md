# Margo Group - Full-Stack Application

A monorepo containing Next.js frontend and NestJS backend.

## Project Structure

```
/apps
  /web  → Next.js frontend (port 3000)
  /api  → NestJS backend (port 3001)
```

## Installation

```bash
npm run install:all
```

## Development

Run both frontend and backend with a single command:

```bash
npm run dev
```

This will start:
- Backend API on http://localhost:3001
- Frontend on http://localhost:3000

## Tech Stack

- **Frontend**: Next.js 14 (App Router), TypeScript, Tailwind CSS
- **Backend**: NestJS, TypeScript
- **Package Manager**: npm
- **Dev Tools**: concurrently
