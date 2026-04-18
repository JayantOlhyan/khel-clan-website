# 🟢 KhelClan Web Platform

![KhelClan Banner](https://via.placeholder.com/1200x300/1D6A36/F2F7F4?text=Find+a+game.+Show+up.+Play.+Leave+with+your+clip.)

> **Elevating amateur sports to a pro experience. Find open games, book your slot, play, and receive professional-grade highlights automatically synced to your dashboard.**

Welcome to the **KhelClan** web application repository. This platform serves as the central hub for players, coordinators, and administrators within the KhelClan ecosystem.

---

## 🚀 Features

- **Public Game Browser:** Discover available matched games by sport, turf zone, and time.
- **Secure Slot Booking:** Direct integration with Razorpay for seamless match payments.
- **Player Dashboard (Upcoming):** Manage your scheduled games, view your wallet, track referral points, and watch/download your post-game clips.
- **Coordinator Dashboard (Upcoming):** Turf owners and organizers can manage schedules, upload massive game files via the Clip Pipeline, and track earnings.
- **The "Clip Pipeline" (Upcoming):** Proprietary workflow for ingesting raw game footage and serving it elegantly back to the player dashboard.

---

## 🛠 Technology Stack

This project is built prioritizing performance, modularity, and premium aesthetics.

### Core Frameworks
- **React 18** (UI Library)
- **Vite** (Next Generation Frontend Tooling)
- **TypeScript** (Static Typing and Integrity)

### Styling & UI
- **Tailwind CSS v3** (Utility-first styling, integrated with exact WRD design tokens)
- **Framer Motion** (Micro-animations and fluid layout transitions)
- **clsx / tailwind-merge** (Dynamic classy manipulation)
- **Lucide React** (Vector icons)

### State Management & Data Fetching
- **Zustand** (Predictable, lightweight global state)
- **TanStack React Query** (Server state, caching, synchronization)

### Backend & Infrastructure (In Development)
- **Firebase:** Phone Auth, Firestore Database, Cloud Storage.
- **Razorpay:** Payments Web SDK & Webhooks.

---

## 📂 Architecture

We use a feature-driven structural pattern to keep our React codebase strictly organized as it scales.

```text
/src
 ├── assets/        # Media assets (SVGs, core graphics)
 ├── components/    # Globally shared UI primitives (Navbar, Footer, Buttons)
 ├── features/      # Domain specific logic (auth, games, clips, payments)
 ├── hooks/         # Custom global React hooks
 ├── layouts/       # Structural wrappers (PublicLayout, DashboardLayout)
 ├── pages/         # Top-level Route components
 ├── store/         # Zustand global state slices
 ├── styles/        # Global index.css containing base font variables
 ├── lib/           # 3rd-party configuration (firebase.js, razorpay.js)
 └── App.tsx        # React Router configuration matrix
```

---

## 🎨 Design System

KhelClan utilizes a strict, proprietary color palette and typography system injected directly into the `tailwind.config.js`.

- **Colors:**
  - `primary-green`: `#1D6A36`
  - `energy-gold`: `#D4860A`
  - `deep-black`: `#1A1A1A`
  - `muted-green`: `#F2F7F4`

- **Typography:**
  - `font-heading`: **Plus Jakarta Sans** (Strong, modern, bold headings)
  - `font-body`: **Inter** (Excellent readability for standard copy)
  - `font-mono`: **JetBrains Mono** (Technical readouts and numbers)

---

## 💻 Local Development

Follow these steps to run the application locally on your machine.

### Prerequisites
- Node.js (v18+)
- npm (v9+)
- Git

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/JayantOlhyan/khel-clan-website.git
   cd "khel-clan-website"
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Configure Environment Variables**
   Create a `.env.local` file in the root directory and add your API keys (Keys provided by administration):
   ```env
   VITE_FIREBASE_API_KEY="your-api-key"
   VITE_RAZORPAY_KEY_ID="your-razorpay-key"
   ```

4. **Start the Development Server**
   ```bash
   npm run dev
   ```

5. Open your browser and navigate to `http://localhost:5173`.

### Building for Production
To build the application for deployment into the `dist` directory:
```bash
npm run build
```

---

## 📋 Implementation Roadmap

- [x] **Phase 1:** Foundational Architecture, Vite scaffolding, and Tailwind Design System setup.
- [x] **Phase 2:** Global Routing and Public Discovery Pages (UI/UX completeness).
- [ ] **Phase 3:** Booking engine logic and Razorpay SDK integration.
- [ ] **Phase 4:** Firebase Auth implementation and core Dashboards scaffolding.
- [ ] **Phase 5:** The Clip Pipeline (Upload dropzones, player delivery, video.js components).

---

> Proudly developed for **KhelClan** by the Devcation Dominators team.
