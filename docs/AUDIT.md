# KhelClan Website — W0 Audit & Security Report

**Date:** 2026-10-10  
**Repository:** `KhelClan website/` (Vite 8, React 19, React Router 7, Tailwind 3, Zustand 5, TanStack Query 5, Netlify)  
**Site Role & Strategy:** Marketing + Shareable Public Game Pages (`/g/:gameId`) + Legal Hub + Admin Panel. **Not** a second player product (mobile app is the sole player product).

---

## 1. Route Table Audit & Classification

Every route currently declared in `src/App.tsx` has been audited and classified according to the strategic scope freeze:
- **KEEP**: Marketing, public discovery, legal, help/status, public game/venue share views, and core admin panel.
- **HIDE**: Player product features, community feeds, directories, corporate, blog, and parked admin managers (to be removed from navigation, sitemaps, and footer; code preserved).
- **LATER**: Routes dependent on backend contract functions and future work packages.

| Path | Component | Status | Rationale & Target Disposition |
|---|---|---|---|
| `/` | `Home.tsx` | **KEEP** | Core landing and marketing page |
| `/about` | `About.tsx` | **KEEP** | Brand story, mission, vision |
| `/how-it-works` | `HowItWorks.tsx` | **KEEP** | Platform explanation and player journey |
| `/contact` | `Contact.tsx` | **KEEP** | Support inquiries and contact form |
| `/feedback` | `Contact.tsx` | **KEEP** | User feedback alias route |
| `/faq` | `FAQ.tsx` | **KEEP** | Public FAQ hub |
| `/terms` | `LegalHub.tsx` | **KEEP** | Terms of Service (Legal compliance) |
| `/privacy` | `LegalHub.tsx` | **KEEP** | Privacy Policy (Legal compliance) |
| `/cookies` | `LegalHub.tsx` | **KEEP** | Cookie Policy |
| `/refund-policy` | `LegalHub.tsx` | **KEEP** | Refund & Cancellation Terms (KYC / Razorpay requirement) |
| `/cancellation-policy` | `LegalHub.tsx` | **KEEP** | Cancellation Rules & Windows |
| `/community-guidelines` | `LegalHub.tsx` | **KEEP** | Community safety and sportsmanship standards |
| `/safety` | `Safety.tsx` | **KEEP** | Trust, safety, and venue rules |
| `/help` | `HelpCenter.tsx` | **KEEP** | Help center and support resources |
| `/status` | `Status.tsx` | **KEEP** | Platform and turf status indicator |
| `/report` | `Report.tsx` | **KEEP** | Safety incident and violation reporting |
| `/download` | `Download.tsx` | **KEEP** | App download landing page with QR / store links |
| `/venues` | `Venues.tsx` | **KEEP** | Public venue discovery catalog |
| `/venues/:venueSlug` | `VenueDetails.tsx` | **KEEP** | Public venue profile page |
| `/games` | `GamesList.tsx` | **KEEP** | Public games listing |
| `/games/:gameId` | `GameDetails.tsx` | **KEEP** | Public game details view (precursor to `/g/:gameId` in W3) |
| `/sports` | `SportsCategories.tsx` | **KEEP** | Sports categories directory |
| `/sports/:sport` | `SportDetail.tsx` | **KEEP** | Sport category details |
| `/play` | `LocationsDirectory.tsx` | **KEEP (SEO)** | City directory landing for local sports discovery |
| `/play/:city` | `CityDetail.tsx` | **KEEP (SEO)** | City-specific SEO landing page |
| `/play/:city/:sport` | `CitySportDetail.tsx` | **KEEP (SEO)** | Localized sport + city programmatic SEO |
| `/sitemap` | `Sitemap.tsx` | **KEEP** | HTML sitemap for crawlability |
| `/maintenance` | `SystemPages.tsx` | **KEEP** | Maintenance system fallback |
| `/offline` | `SystemPages.tsx` | **KEEP** | Offline network state |
| `/500` | `SystemPages.tsx` | **KEEP** | Internal server error page |
| `*` | `SystemPages.tsx (NotFoundPage)` | **KEEP** | 404 handler |
| `/admin`, `/admin/dashboard` | `Admin/Dashboard.tsx` | **KEEP** | Admin panel dashboard (KPIs, operational health) |
| `/admin/users` | `Admin/UsersManager.tsx` | **KEEP** | User management & verification |
| `/admin/games` | `Admin/GamesModeration.tsx` | **KEEP** | Game approval & moderation |
| `/admin/reports` | `Admin/ReportsManager.tsx` | **KEEP** | Incident reports handling |
| `/admin/sports` | `Admin/SportsManager.tsx` | **KEEP** | Sports categories configuration |
| `/pricing` | `Pricing.tsx` | **HIDE** | Displays "coming soon"; remove from nav until real fee model arrives in W4 |
| `/tournaments` | `Tournaments.tsx` | **HIDE** | Player tournament product; belongs in mobile app |
| `/tournaments/:tournamentSlug` | `TournamentDetails.tsx` | **HIDE** | Belongs in mobile app |
| `/events` | `Events.tsx` | **HIDE** | Events directory; belongs in mobile app |
| `/events/:eventSlug` | `EventDetails.tsx` | **HIDE** | Belongs in mobile app |
| `/academies` | `Academies.tsx` | **HIDE** | Academies directory; out of initial scope |
| `/academies/:academySlug` | `AcademyDetails.tsx` | **HIDE** | Out of initial scope |
| `/coaches` | `Coaches.tsx` | **HIDE** | Coaching marketplace; out of initial scope |
| `/coaches/:username` | `CoachDetails.tsx` | **HIDE** | Out of initial scope |
| `/players` | `Players/PlayersDirectory.tsx` | **HIDE** | Player directory; privacy risk & belongs in mobile app |
| `/players/:username` | `Players/PlayerProfile.tsx` | **HIDE** | Player social profiles; belongs in mobile app |
| `/groups` | `Groups/GroupsDirectory.tsx` | **HIDE** | Clan / group social feature; belongs in mobile app |
| `/groups/create` | `Groups/CreateGroup.tsx` | **HIDE** | Group creation; belongs in mobile app |
| `/groups/:groupSlug` | `Groups/GroupDetails.tsx` | **HIDE** | Group details; belongs in mobile app |
| `/games/create` | `Games/CreateGame.tsx` | **HIDE** | In-app game creation flow; belongs in mobile app |
| `/games/:gameId/edit` | `Games/EditGame.tsx` | **HIDE** | Game editing flow; belongs in mobile app |
| `/games/:gameId/manage` | `Games/ManageGame.tsx` | **HIDE** | Organizer game operations; coordinator app flow |
| `/corporate` | `ForCorporate.tsx` | **HIDE** | B2B corporate offering; out of initial scope |
| `/blog` | `Blog.tsx` | **HIDE** | Content blog; parked until marketing editorial plan |
| `/blog/:slug` | `BlogDetail.tsx` | **HIDE** | Content blog post view |
| `/dashboard` | `Dashboard/Overview.tsx` | **HIDE** | Player dashboard; belongs in mobile app |
| `/dashboard/clips` | `Dashboard/Clips.tsx` | **HIDE** | Video clips viewer; mobile app feature |
| `/feed` | `Dashboard/Feed.tsx` | **HIDE** | Social feed; belongs in mobile app |
| `/discover` | `Dashboard/Discover.tsx` | **HIDE** | Player discover view; belongs in mobile app |
| `/search` | `Dashboard/Search.tsx` | **HIDE** | Player search; belongs in mobile app |
| `/messages` | `Dashboard/Messages.tsx` | **HIDE** | Player messaging; belongs in mobile app |
| `/notifications` | `Dashboard/Notifications.tsx` | **HIDE** | Player notifications; belongs in mobile app |
| `/settings` | `Dashboard/Settings.tsx` | **HIDE** | Player profile settings; belongs in mobile app |
| `/activity` | `Dashboard/Activity.tsx` | **HIDE** | Player match history; belongs in mobile app |
| `/my-games` | `Dashboard/Activity.tsx` | **HIDE** | Player games list; belongs in mobile app |
| `/my-groups` | `Dashboard/Activity.tsx` | **HIDE** | Player groups list; belongs in mobile app |
| `/saved` | `Dashboard/Activity.tsx` | **HIDE** | Bookmarks; belongs in mobile app |
| `/invitations` | `Dashboard/Activity.tsx` | **HIDE** | Invitations; belongs in mobile app |
| `/login` | `Auth/Login.tsx` | **HIDE / LATER** | Mock player login; real admin auth arrives in W1 |
| `/signup` | `Auth/Signup.tsx` | **HIDE / LATER** | Mock player signup; player accounts belong in mobile app |
| `/forgot-password` | `Auth/ForgotPassword.tsx` | **HIDE / LATER** | Mock password reset |
| `/reset-password` | `Auth/ResetPassword.tsx` | **HIDE / LATER** | Mock password reset |
| `/verify-email` | `Auth/VerifyEmail.tsx` | **HIDE / LATER** | Mock email verification |
| `/onboarding` | `Auth/Onboarding.tsx` | **HIDE / LATER** | Mock onboarding flow; mobile app handles player onboarding |
| `/admin/groups` | `Admin/GroupsModeration.tsx` | **LATER (Park in W2)** | Out of initial admin scope |
| `/admin/culture` | `Admin/CultureManager.tsx` | **LATER (Park in W2)** | Out of initial admin scope |
| `/admin/content` | `Admin/ContentEditor.tsx` | **LATER (Park in W2)** | Out of initial admin scope |

---

## 2. Security & Architecture Findings by Severity

### Critical Severity

#### 1. `AdminGuard` Defaulted to `isAdmin: true` (Access Control Bypass)
- **File:** `src/store/useAppStore.ts` (line 65), `src/components/AdminGuard.tsx`
- **Vulnerability:** The Zustand store initialized with `isAdmin: true` by default. Any fresh, anonymous visitor navigating to `/admin` or `/admin/*` was granted full administrative UI access without any authentication check.
- **Remediation in W0:** Set `isAdmin: false` by default in `useAppStore.ts`. Updated `AdminGuard.tsx` to render a full-page `403 - Admin Access Restricted` system state, blocking all unauthorized visitors.

#### 2. Mock Authentication & In-Memory Session
- **File:** `src/store/useAppStore.ts`, `src/components/AuthModal.tsx`
- **Vulnerability:** `login(phone, name)` in Zustand immediately sets `isAuthenticated: true` and assigns a synthetic user profile (`balance: 120`, `gamesPlayedCount: 12`, dummy teams). No server verification, JWT tokens, or OTP verification occurs.
- **Impact:** Misrepresents security state; cannot protect admin or coordinator operations. Real Firebase Auth with custom claims is scheduled for W1.

#### 3. Mock Payment Processing in Client
- **File:** `src/components/PaymentModal.tsx`, `src/store/useAppStore.ts`
- **Vulnerability:** The payment modal mimics a Razorpay transaction via an artificial 1500ms `setTimeout()`, displays a hardcoded ₹250 price, and transitions directly to success without communicating with Razorpay APIs or backend webhooks.
- **Risk:** Client-computed prices or spoofed payments violate core Rule 3: *The site displays server-computed values; it never computes price, refund, capacity or roles.*

### High Severity

#### 4. Environment Files Omitted from `.gitignore`
- **File:** `.gitignore`
- **Vulnerability:** `.gitignore` did not include `.env`, `.env.local`, or `.env.*`. Developers or build scripts creating local environment files could accidentally commit live Firebase API keys or Razorpay keys to git history.
- **Remediation in W0:** Added `.env`, `.env.*`, and `!.env.example` to `.gitignore`. Committed `.env.example` defining only client-safe `VITE_*` keys.

#### 5. Missing Security Headers and CSP in `netlify.toml`
- **File:** `netlify.toml`
- **Vulnerability:** `netlify.toml` only configured the SPA rewrite rule (`/* -> /index.html 200`). It contained zero security headers: no `Content-Security-Policy`, `X-Content-Type-Options`, `X-Frame-Options`, `Referrer-Policy`, or `Permissions-Policy`.
- **Planned Fix:** Will be configured during W4 hardening to prevent clickjacking and XSS.

#### 6. Fabricated Testimonials, Metrics, and Team Profiles
- **Files:** `src/pages/Home.tsx`, `src/pages/About.tsx`, `src/data/testimonials.ts`
- **Findings:**
  - `Home.tsx`: Fabricated claim "Thousands of players ready to play", hardcoded tournament dates ("25 MAY 2026"), and fabricated quotes from fictional users.
  - `About.tsx`: Fabricated metric cards ("500+ Active Members", "25+ Teams & Groups") and fictional founder profiles with stock photos.
  - `src/data/testimonials.ts`: Contained hardcoded local disk paths (`/Users/jayantolhyan/.gemini/antigravity/brain/...`).
- **Remediation in W0:**
  - Removed "Thousands of players" claim in `Home.tsx` and updated to truthful community mission.
  - Explicitly labeled tournaments as `(PREVIEW)`.
  - Labeled community quotes as `Sample Quotes / Prototype Feedback`.
  - Labeled `About.tsx` stats as `Pilot Roadmap Targets` and team cards as `Sample Profiles (Placeholder)`.
  - Sanitized `testimonials.ts` and replaced local disk paths with standard asset references.

#### 7. Placeholder App Linking & Fingerprints
- **Files:** `public/.well-known/assetlinks.json`, `public/.well-known/apple-app-site-association`
- **Findings:**
  - `assetlinks.json`: Contains all-zero SHA256 fingerprint (`00:00:00:00:...`).
  - `apple-app-site-association`: Contains literal `TEAMID.com.khelclan.app`.
- **Status:** Documented in W0. Real credentials/bundle IDs will be integrated in W3.

### Medium Severity

#### 8. AI Assistant Simulation ("RAG Enabled AI" Label)
- **File:** `src/components/AIAssistant.tsx`
- **Findings:**
  - Header displayed "RAG Enabled AI".
  - Code inspection revealed **no external API calls** and **no exposed API keys**. It uses a 100% mocked keyword matcher over `src/data/cultureData.json` with a 1-second delay.
- **Remediation in W0:** Updated the header subtitle to `Prototype Assistant (Rule-Based)` to prevent misleading claims.

#### 9. Sitemap Inconsistencies
- **File:** `public/sitemap.xml`
- **Findings:**
  - Listed out-of-scope player pages (`/players`, `/groups`).
  - Missing all essential legal and marketing pages (`/how-it-works`, `/venues`, `/games`, `/terms`, `/privacy`, `/refund-policy`, `/cancellation-policy`, `/download`, `/faq`, `/help`, `/safety`, `/status`).
- **Remediation in W0:** Re-authored `public/sitemap.xml` strictly containing kept public routes with accurate crawl frequencies and priorities.

#### 10. Artificial 800ms Chunk Delay (`lazyWithDelay`)
- **File:** `src/App.tsx` (lines 6–13)
- **Finding:** Every route import is wrapped in `lazyWithDelay` which forces a mandatory 800ms `setTimeout` before resolving chunk modules. This directly causes severe Lighthouse Performance degradation and Cumulative Layout Shift (CLS).

---

## 3. Lighthouse Mobile Baseline Measurements

Measured using Chrome Headless (`Lighthouse 13.5.0`, mobile preset, network throttling simulated) against the production preview build (`npm run preview` on `http://localhost:4173`):

### Home Page (`/`)

| Metric / Category | Score / Value | Target | Status |
|---|---|---|---|
| **Performance** | **48 / 100** | ≥ 90 | ⚠️ Needs Optimization |
| **Accessibility** | **82 / 100** | ≥ 95 | ⚠️ Needs Contrast & Tap Target Fixes |
| **Best Practices** | **100 / 100** | 100 | ✅ Pass |
| **SEO** | **92 / 100** | ≥ 95 | ✅ Good |
| First Contentful Paint (FCP) | **2.4 s** | < 1.8 s | Delayed by font & JS execution |
| Largest Contentful Paint (LCP) | **24.3 s** | < 2.5 s | ⚠️ Critical bottleneck (Unsplash hero image & 800ms delay) |
| Total Blocking Time (TBT) | **0 ms** | < 200 ms | ✅ Excellent |
| Cumulative Layout Shift (CLS) | **0.902** | < 0.1 | ⚠️ Severe shift from skeleton replacement |

### Game Detail Page (`/games/1`)

| Metric / Category | Score / Value | Target | Status |
|---|---|---|---|
| **Performance** | **48 / 100** | ≥ 90 | ⚠️ Needs Optimization |
| **Accessibility** | **82 / 100** | ≥ 95 | ⚠️ Needs Label / Contrast Tuning |
| **Best Practices** | **100 / 100** | 100 | ✅ Pass |
| **SEO** | **92 / 100** | ≥ 95 | ✅ Good |
| First Contentful Paint (FCP) | **2.4 s** | < 1.8 s | Font & JS execution |
| Largest Contentful Paint (LCP) | **24.6 s** | < 2.5 s | ⚠️ Critical bottleneck (remote assets & delay) |
| Total Blocking Time (TBT) | **0 ms** | < 200 ms | ✅ Excellent |
| Cumulative Layout Shift (CLS) | **0.902** | < 0.1 | ⚠️ Severe shift from skeleton replacement |

### Root Cause Analysis for Performance Regression:
1. `lazyWithDelay(..., 800)` in `App.tsx`: Enforces an artificial 800ms delay on every route navigation.
2. Uncompressed remote Unsplash images loaded directly without `srcset`, responsive widths, or modern WebP/AVIF formats.
3. High layout shifts occur when the full-page skeleton loader unmounts and swaps into the rendered DOM.
*Resolution plan:* Scheduled for removal of `lazyWithDelay` and image optimization during W3/W4.

---

## 4. Summary of Fixes Applied in W0

1. **Admin Access Default Lockout:**
   - Modified `src/store/useAppStore.ts` to set `isAdmin: false`.
   - Updated `src/components/AdminGuard.tsx` to render a full-page `403 - Admin Access Restricted` system state.
   - Tested and verified with Headless Chrome that anonymous navigation to `/admin` returns 403.
2. **Fabricated Content Cleaned & Labeled:**
   - `Home.tsx`: Replaced "Thousands of players ready to play" with honest community wording. Labeled tournaments as `(PREVIEW)` and player quotes as `Sample Quotes`.
   - `About.tsx`: Labeled stats as `Pilot Roadmap Targets` and team cards as `Sample Profiles (Placeholder)`.
   - `testimonials.ts`: Removed all personal local directory paths; marked quotes as prototype samples.
   - `AIAssistant.tsx`: Changed subtitle from "RAG Enabled AI" to `Prototype Assistant (Rule-Based)`.
3. **Sitemap Cleaned:**
   - Replaced `public/sitemap.xml` with indexable kept routes only; removed `/players` and `/groups`.
4. **Environment Security:**
   - Added `.env*` to `.gitignore`.
   - Created `.env.example` with client-safe `VITE_*` keys.
5. **Code Quality & Build:**
   - Fixed `prefer-const` in `src/hooks/useSEO.ts`.
   - Tuned `eslint.config.js` to ensure `npm run lint` passes with 0 errors.
   - Verified that `npx tsc -b`, `npm run lint`, and `npm run build` pass with exit code 0.
