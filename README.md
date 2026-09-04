# KhelClan Web Platform

> A comprehensive frontend prototype for an offline sports community platform, built with React 19, Vite, and Tailwind CSS.

## Overview

KhelClan is a web application designed to serve as a central hub for players, coordinators, and administrators in a sports community ecosystem. Currently, the repository contains a **high-fidelity frontend UI prototype** that maps out the extensive user workflows, directories, and administrative dashboards required for the platform.

**Status:** Frontend Prototype / Mock State. The application relies on client-side state management (Zustand) to simulate user interactions and does not currently connect to a live backend database or authentication provider.

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

Currently, the application is entirely client-side and driven by static data and mock states. No environment variables are strictly required to run the development server. 

*(Note: Prior documentation referenced `VITE_FIREBASE_API_KEY` and `VITE_RAZORPAY_KEY_ID`, but these integrations are not present in the current codebase).*

## Database & API

**Not yet implemented.** 
All data currently originates from static files within `src/data/` (e.g., `blogPosts.ts`, `cultureData.json`, `faqs.ts`) or is managed ephemerally via Zustand stores located in `src/store/` (e.g., `useAppStore.ts`). 

## Authentication & Authorization

**Mocked Implementation.**
- Authentication is simulated entirely via `useAppStore` in Zustand.
- Logging in sets a hardcoded mock `user` object in memory and toggles `isAuthenticated: true`.
- The `AdminGuard` component currently relies on an `isAdmin` flag in the local state, which defaults to `true` for prototype testing. 
- **Security Warning:** There is no actual security, session validation, or protected routing backed by a server. 

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
