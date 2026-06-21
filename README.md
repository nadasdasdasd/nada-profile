# Nada Profile

Personal portfolio website built with **React + TypeScript + Vite + Tailwind CSS**.

🌐 **Live**: [https://nada-profile-mu.vercel.app/](https://nada-profile-mu.vercel.app/)

## Structure

Uses **Feature-Driven Development (FDD)** — each feature is self-contained:

```
src/Features/Profile/
  index.tsx              → Main page
  types.ts               → TypeScript interfaces
  data.ts                → Profile data
  sections/              → Page sections (Hero, About, Skills, etc.)
  components/            → Reusable components (ProjectCard, ContactForm)
  utils/                 → Utilities (PDF resume generator)
```

## Prerequisites

- Node.js >= 18
- pnpm

## Setup

```bash
pnpm install
pnpm dev
```

Open `http://localhost:5173` in the browser.

## Build

```bash
pnpm build
pnpm preview
```
