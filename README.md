# KhelClan Web Platform

> A comprehensive frontend prototype for an offline sports community platform, built with React 19, Vite, and Tailwind CSS.

## Overview

KhelClan is a web application designed to serve as a central hub for players, coordinators, and administrators in a sports community ecosystem. Currently, the repository contains a **high-fidelity frontend UI prototype** that maps out the extensive user workflows, directories, and administrative dashboards required for the platform.

**Status:** Transitioning from Prototype to Production Foundation. The platform scope is focused on Marketing, Public Game Share Pages (`/g/:gameId`), Legal & Compliance Hub, and an Admin Operations Panel (with player features centered in the mobile app). Recent milestones include Phase W0 (Security Lockdown & Baseline Audit) and W1 foundational changes (Firebase Admin Claim Guard, Route Delay removal).

## Implementation & Milestone Roadmap

- [x] **Phase W0: Baseline Audit & Security Lockdown**
  - [x] Secured `.gitignore` and authored `.env.example`.
  - [x] Cleaned fabricated marketing metrics, preview labels, and sanitized prototype testimonials.
  - [x] Re-authored `public/sitemap.xml` strictly to keep indexable public routes.
  - [x] Generated comprehensive technical and security audit report (`docs/AUDIT.md`).
- [x] **Phase W1 / W3 Milestones**
  - [x] **Firebase Admin Claim Guard:** Replaced client-side boolean check in `AdminGuard.tsx` with live Firebase Auth token inspection requiring custom claim `admin: true` (via `src/lib/firebase.ts`).
  - [x] **Route Performance Optimization:** Removed artificial 800ms `lazyWithDelay` on route loading across `src/App.tsx`.
  - [x] **Shareable Game Route:** Added `/g/:gameId` public route alias for shareable matches.
- [ ] **Upcoming Phases**
  - [ ] Dedicated Admin Sign-in UI & session handling.
  - [ ] Image optimization (responsive WebP/AVIF, CDN integration).
  - [ ] Netlify security headers (CSP, HSTS, frame protection in `netlify.toml`).
  - [ ] Native App Universal Linking configuration (`assetlinks.json`, `apple-app-site-association`).

## Why This Project Exists

This repository implements the visual and structural foundation of the KhelClan platform. It exists to solve the problem of organizing local sports by providing a scalable frontend architecture that covers:
- Public discovery of venues, games, and academies.
- Player dashboards and community interaction interfaces.
- Administrative controls for managing the platform.

## Features

### Implemented
- **Public Directory System:** Browseable pages for Sports, Locations, Venues, Players, Groups, Games, and Academies.
- **Mock Authentication Flow:** Visual interfaces for Login, Signup, Password Reset, and Onboarding.
- **Player Dashboard Shell:** UI for Overview, Clips, Discover, Feed, Messages, Notifications, Activity, and Settings.
- **Admin Panel Shell:** UI for managing Users, Games, Groups, Reports, Culture, Content, and Sports.
- **Global Overlays:** Mocked integration for Auth, Payments, and AI Assistant interactions.
- **Performance Optimizations:** Route-level code splitting using `React.lazy` and `Suspense`, combined with custom skeleton loaders (e.g., `HeroGridSkeleton`, `DirectorySkeleton`).

### Not Yet Implemented (Planned)
- Real user authentication (Firebase/NextAuth).
- Persistent database storage.
- Real payment processing (Razorpay integration is planned but not currently implemented).
- The "Clip Pipeline" (Video ingestion and processing).
- Functional API integrations.

## Architecture

The current architecture is strictly a Single Page Application (SPA) utilizing client-side routing and state.

```text
User
 ↓
Vite/React SPA (Frontend)
 ↓
React Router (Page Navigation & Suspense Boundaries)
 ↓
Zustand (Global Mock State: useAppStore, useGameStore, etc.)
```

## Tech Stack

### Frontend
- **Framework:** React 19
- **Build Tool:** Vite 8
- **Language:** TypeScript
- **Routing:** React Router v7
- **Styling:** Tailwind CSS v3, PostCSS, `clsx`, `tailwind-merge`
- **Animations:** Framer Motion
- **Icons:** Lucide React
- **Visuals:** Recharts (Data Visualization), Swiper (Carousels)

### State Management & Data
- **Global State:** Zustand
- **Async State:** TanStack React Query v5 (Configured, awaiting API endpoints)

## Repository Structure

```text
src/
├── assets/        # Static assets and SVGs
├── components/    # Reusable UI primitives (Modals, Skeletons, Guards)
├── data/          # Static JSON/TS data mocking backend responses
├── features/      # Domain-specific components
├── hooks/         # Custom React hooks
├── layouts/       # Structural wrappers (PublicLayout, DashboardLayout, AdminLayout)
├── pages/         # Route entry points (Auth, Dashboard, Admin, Games, etc.)
├── store/         # Zustand store definitions (useAppStore, usePlayerStore, etc.)
├── styles/        # Global CSS (Tailwind directives)
└── App.tsx        # Main application router and Suspense boundaries
```

## Prerequisites

To run this project locally, you will need:
- Node.js (v18 or higher recommended)
- npm (v9 or higher)

## Installation & Local Development

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd "KhelClan website"
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start the development server**
   ```bash
   npm run dev
   ```
   The application will be available at `http://localhost:5173`.

4. **Build for production**
   ```bash
   npm run build
   ```

5. **Linting**
   ```bash
   npm run lint
   ```

## Environment Variables

Copy `.env.example` to `.env.local` to configure client-side environment settings:

```bash
cp .env.example .env.local
```

Required keys for live Firebase authentication:
- `VITE_FIREBASE_API_KEY`
- `VITE_FIREBASE_AUTH_DOMAIN`
- `VITE_FIREBASE_PROJECT_ID`
- `VITE_FIREBASE_STORAGE_BUCKET`
- `VITE_FIREBASE_MESSAGING_SENDER_ID`
- `VITE_FIREBASE_APP_ID`

## Database & API

**Not yet implemented.** 
All data currently originates from static files within `src/data/` (e.g., `blogPosts.ts`, `cultureData.json`, `faqs.ts`) or is managed ephemerally via Zustand stores located in `src/store/` (e.g., `useAppStore.ts`). 

## Authentication & Authorization

- **Admin Portal Access:** Protected by `AdminGuard.tsx` which verifies live Firebase ID tokens via `src/lib/firebase.ts`. It strictly requires a verified custom claim `admin: true` (assigned server-side via the Firebase Admin SDK). Anonymous or non-admin requests render a full 403 Forbidden state.
- **Player Auth (Legacy Mock):** General player state in `useAppStore` still simulates basic mock sessions; full player authentication will reside in the mobile app.

## Known Limitations

- **No Persistence:** Refreshing the page resets all state (logins, payments, game creation) as data is held in memory.
- **Mocked Payments:** The payment modal (`PaymentModal.tsx`) triggers a mock timeout function `processPayment()` rather than communicating with a real payment gateway.
- **Empty API Layer:** While `@tanstack/react-query` is installed, there is no `src/lib/api` or configured backend to fetch from.

## Development Workflow

Contributors should follow standard React development practices:
- Define global state in `src/store/`.
- Ensure new routes in `App.tsx` are wrapped in `React.lazy()` with artificial delays disabled or tuned appropriately (currently set to 800ms for skeleton demonstration).
- Use Tailwind classes for all styling, respecting the custom theme variables configured in `tailwind.config.js` (e.g., `brand-lime`, `brand-forest`).

## Architectural Trade-offs

### Decision: Zustand over Redux/Context for Prototype State
**Reason:** Zustand provides a boilerplate-free way to spin up complex mock stores (e.g., `useGameStore`, `usePlayerStore`) required to demonstrate UI interactions to stakeholders without building a real backend.
**Trade-off:** Fast UI iteration at the cost of needing to entirely rip out and replace these stores with TanStack Query mutations/fetches once a real API is introduced.

### Decision: `lazyWithDelay` in Routing
**Reason:** Custom `lazyWithDelay` wrapper around `React.lazy()` injects an artificial 800ms delay on route loads.
**Trade-off:** Showcases the polished skeleton loader components to stakeholders, but will need to be removed in production to ensure optimal LCP (Largest Contentful Paint) and user experience.

## AI / Developer Orientation

If you are an AI agent or a new developer modifying this codebase:
- **Routing:** All routes are registered in `src/App.tsx`.
- **State:** To change how the user acts, inspect `src/store/useAppStore.ts`.
- **Data Mocking:** To add fake entities (games, players), check `src/data/` or the default states in `src/store/`.
- **Styling:** The brand colors (`brand-lime`, `brand-forest`) are defined strictly in `tailwind.config.js`. Avoid using raw hex codes in components.

## License

*(No license file found in repository. Assume proprietary until otherwise specified).*
