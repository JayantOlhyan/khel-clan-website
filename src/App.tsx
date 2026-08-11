import React, { Suspense } from 'react';
import RouteLoader from './components/Skeletons/RouteLoader';
import { HeroGridSkeleton, DirectorySkeleton, DetailSkeleton } from './components/Skeletons/PageSkeletons';

// A helper to artificially delay chunk loading by 800ms to demonstrate the skeletons!
const lazyWithDelay = (importFunc: () => Promise<any>, delay = 800) => {
  return React.lazy(() => 
    Promise.all([
      importFunc(),
      new Promise(resolve => setTimeout(resolve, delay))
    ]).then(([moduleExports]) => moduleExports)
  );
};
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import PublicLayout from './layouts/PublicLayout';
import DashboardLayout from './layouts/DashboardLayout';
import AdminLayout from './layouts/AdminLayout';

const Home = lazyWithDelay(() => import('./pages/Home'));
const About = lazyWithDelay(() => import('./pages/About'));
const HowItWorks = lazyWithDelay(() => import('./pages/HowItWorks'));
const Blog = lazyWithDelay(() => import('./pages/Blog'));
const BlogDetail = lazyWithDelay(() => import('./pages/BlogDetail'));
const FAQ = lazyWithDelay(() => import('./pages/FAQ'));
const Contact = lazyWithDelay(() => import('./pages/Contact'));
const LegalHub = lazyWithDelay(() => import('./pages/LegalHub'));
const SportsCategories = lazyWithDelay(() => import('./pages/SportsCategories'));
const SportDetail = lazyWithDelay(() => import('./pages/SportDetail'));
const Venues = lazyWithDelay(() => import('./pages/Venues'));
const VenueDetails = lazyWithDelay(() => import('./pages/VenueDetails'));
// Directory Pages
const LocationsDirectory = lazyWithDelay(() => import('./pages/LocationsDirectory'));
const CityDetail = lazyWithDelay(() => import('./pages/CityDetail'));
const CitySportDetail = lazyWithDelay(() => import('./pages/CitySportDetail'));
// Groups Pages
const GroupsDirectory = lazyWithDelay(() => import('./pages/Groups/GroupsDirectory'));
const CreateGroup = lazyWithDelay(() => import('./pages/Groups/CreateGroup'));
const GroupDetails = lazyWithDelay(() => import('./pages/Groups/GroupDetails'));
// Game Pages
const GamesList = lazyWithDelay(() => import('./pages/Games/GamesList'));
const GameDetails = lazyWithDelay(() => import('./pages/Games/GameDetails'));
const CreateGame = lazyWithDelay(() => import('./pages/Games/CreateGame'));
const EditGame = lazyWithDelay(() => import('./pages/Games/EditGame'));
const ManageGame = lazyWithDelay(() => import('./pages/Games/ManageGame'));

const Coaches = lazyWithDelay(() => import('./pages/Coaches'));
const CoachDetails = lazyWithDelay(() => import('./pages/CoachDetails'));
const Academies = lazyWithDelay(() => import('./pages/Academies'));
const AcademyDetails = lazyWithDelay(() => import('./pages/AcademyDetails'));
const Tournaments = lazyWithDelay(() => import('./pages/Tournaments'));
const TournamentDetails = lazyWithDelay(() => import('./pages/TournamentDetails'));
const Events = lazyWithDelay(() => import('./pages/Events'));
const EventDetails = lazyWithDelay(() => import('./pages/EventDetails'));
const Pricing = lazyWithDelay(() => import('./pages/Pricing'));
const Download = lazyWithDelay(() => import('./pages/Download'));
const ForCorporate = lazyWithDelay(() => import('./pages/ForCorporate'));
const Sitemap = lazyWithDelay(() => import('./pages/Sitemap'));

// Admin Pages
const AdminDashboard = lazyWithDelay(() => import('./pages/Admin/Dashboard'));
const CultureManager = lazyWithDelay(() => import('./pages/Admin/CultureManager'));
const ContentEditor = lazyWithDelay(() => import('./pages/Admin/ContentEditor'));
const SportsManager = lazyWithDelay(() => import('./pages/Admin/SportsManager'));
const UsersManager = lazyWithDelay(() => import('./pages/Admin/UsersManager'));
const GamesModeration = lazyWithDelay(() => import('./pages/Admin/GamesModeration'));
const GroupsModeration = lazyWithDelay(() => import('./pages/Admin/GroupsModeration'));
const ReportsManager = lazyWithDelay(() => import('./pages/Admin/ReportsManager'));
import AdminGuard from './components/AdminGuard';

// Dashboard Pages
const Overview = lazyWithDelay(() => import('./pages/Dashboard/Overview'));
const Clips = lazyWithDelay(() => import('./pages/Dashboard/Clips'));
const Discover = lazyWithDelay(() => import('./pages/Dashboard/Discover'));
const Feed = lazyWithDelay(() => import('./pages/Dashboard/Feed'));
const Notifications = lazyWithDelay(() => import('./pages/Dashboard/Notifications'));
const Settings = lazyWithDelay(() => import('./pages/Dashboard/Settings'));
const Messages = lazyWithDelay(() => import('./pages/Dashboard/Messages'));
const Activity = lazyWithDelay(() => import('./pages/Dashboard/Activity'));
const Search = lazyWithDelay(() => import('./pages/Dashboard/Search'));

// Public/Trust & Safety
const Safety = lazyWithDelay(() => import('./pages/Safety'));
const Report = lazyWithDelay(() => import('./pages/Report'));
const HelpCenter = lazyWithDelay(() => import('./pages/HelpCenter'));
const Status = lazyWithDelay(() => import('./pages/Status'));
import { NotFoundPage, MaintenancePage, OfflinePage, ServerErrorPage } from './pages/SystemPages';

// Player Pages
const PlayersDirectory = lazyWithDelay(() => import('./pages/Players/PlayersDirectory'));
const PlayerProfile = lazyWithDelay(() => import('./pages/Players/PlayerProfile'));

import AuthModal from './components/AuthModal';
import PaymentModal from './components/PaymentModal';
import AIAssistant from './components/AIAssistant';
import ScrollToTop from './components/ScrollToTop';
import AppBanner from './components/AppBanner';

// Auth Pages
const Login = lazyWithDelay(() => import('./pages/Auth/Login'));
const Signup = lazyWithDelay(() => import('./pages/Auth/Signup'));
const ForgotPassword = lazyWithDelay(() => import('./pages/Auth/ForgotPassword'));
const ResetPassword = lazyWithDelay(() => import('./pages/Auth/ResetPassword'));
const VerifyEmail = lazyWithDelay(() => import('./pages/Auth/VerifyEmail'));
const Onboarding = lazyWithDelay(() => import('./pages/Auth/Onboarding'));

function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      {/* Global Modals overlaying everything */}
      <AuthModal />
      <PaymentModal />
      <AIAssistant />
      <AppBanner />
      
      <Routes>
        <Route path="/login" element={<Suspense fallback={<RouteLoader><HeroGridSkeleton /></RouteLoader>}><Login /></Suspense>} />
        <Route path="/signup" element={<Suspense fallback={<RouteLoader><HeroGridSkeleton /></RouteLoader>}><Signup /></Suspense>} />
        <Route path="/forgot-password" element={<Suspense fallback={<RouteLoader><HeroGridSkeleton /></RouteLoader>}><ForgotPassword /></Suspense>} />
        <Route path="/reset-password" element={<Suspense fallback={<RouteLoader><HeroGridSkeleton /></RouteLoader>}><ResetPassword /></Suspense>} />
        <Route path="/verify-email" element={<Suspense fallback={<RouteLoader><HeroGridSkeleton /></RouteLoader>}><VerifyEmail /></Suspense>} />
        <Route path="/onboarding" element={<Suspense fallback={<RouteLoader><HeroGridSkeleton /></RouteLoader>}><Onboarding /></Suspense>} />

        <Route element={<PublicLayout />}>
          <Route path="/contact" element={<Suspense fallback={<RouteLoader><HeroGridSkeleton /></RouteLoader>}><Contact /></Suspense>} />
          <Route path="/safety" element={<Suspense fallback={<RouteLoader><HeroGridSkeleton /></RouteLoader>}><Safety /></Suspense>} />
          <Route path="/community-guidelines" element={<Suspense fallback={<RouteLoader><HeroGridSkeleton /></RouteLoader>}><LegalHub /></Suspense>} />
          <Route path="/help" element={<Suspense fallback={<RouteLoader><HeroGridSkeleton /></RouteLoader>}><HelpCenter /></Suspense>} />
          <Route path="/feedback" element={<Suspense fallback={<RouteLoader><HeroGridSkeleton /></RouteLoader>}><Contact /></Suspense>} />
          <Route path="/status" element={<Suspense fallback={<RouteLoader><HeroGridSkeleton /></RouteLoader>}><Status /></Suspense>} />
          <Route path="/report" element={<Suspense fallback={<RouteLoader><HeroGridSkeleton /></RouteLoader>}><Report /></Suspense>} />
          <Route path="/maintenance" element={<MaintenancePage />} />
          <Route path="/offline" element={<OfflinePage />} />
          <Route path="/500" element={<ServerErrorPage />} />
          <Route path="/" element={<Suspense fallback={<RouteLoader><HeroGridSkeleton /></RouteLoader>}><Home /></Suspense>} />
          <Route path="/about" element={<Suspense fallback={<RouteLoader><HeroGridSkeleton /></RouteLoader>}><About /></Suspense>} />
          <Route path="/how-it-works" element={<Suspense fallback={<RouteLoader><HeroGridSkeleton /></RouteLoader>}><HowItWorks /></Suspense>} />
          <Route path="/terms" element={<Suspense fallback={<RouteLoader><HeroGridSkeleton /></RouteLoader>}><LegalHub /></Suspense>} />
          <Route path="/privacy" element={<Suspense fallback={<RouteLoader><HeroGridSkeleton /></RouteLoader>}><LegalHub /></Suspense>} />
          <Route path="/cookies" element={<Suspense fallback={<RouteLoader><HeroGridSkeleton /></RouteLoader>}><LegalHub /></Suspense>} />
          <Route path="/refund-policy" element={<Suspense fallback={<RouteLoader><HeroGridSkeleton /></RouteLoader>}><LegalHub /></Suspense>} />
          <Route path="/cancellation-policy" element={<Suspense fallback={<RouteLoader><HeroGridSkeleton /></RouteLoader>}><LegalHub /></Suspense>} />
          <Route path="/community-guidelines" element={<Suspense fallback={<RouteLoader><HeroGridSkeleton /></RouteLoader>}><LegalHub /></Suspense>} />
          <Route path="/sports" element={<Suspense fallback={<RouteLoader><DirectorySkeleton /></RouteLoader>}><SportsCategories /></Suspense>} />
          <Route path="/sports/:sport" element={<Suspense fallback={<RouteLoader><DetailSkeleton /></RouteLoader>}><SportDetail /></Suspense>} />
          <Route path="/play" element={<Suspense fallback={<RouteLoader><DirectorySkeleton /></RouteLoader>}><LocationsDirectory /></Suspense>} />
          <Route path="/play/:city" element={<Suspense fallback={<RouteLoader><DetailSkeleton /></RouteLoader>}><CityDetail /></Suspense>} />
          <Route path="/play/:city/:sport" element={<Suspense fallback={<RouteLoader><DetailSkeleton /></RouteLoader>}><CitySportDetail /></Suspense>} />
          <Route path="/players" element={<Suspense fallback={<RouteLoader><DirectorySkeleton /></RouteLoader>}><PlayersDirectory /></Suspense>} />
          <Route path="/players/:username" element={<Suspense fallback={<RouteLoader><DetailSkeleton /></RouteLoader>}><PlayerProfile /></Suspense>} />
          <Route path="/groups" element={<Suspense fallback={<RouteLoader><DirectorySkeleton /></RouteLoader>}><GroupsDirectory /></Suspense>} />
          <Route path="/groups/create" element={<Suspense fallback={<RouteLoader><HeroGridSkeleton /></RouteLoader>}><CreateGroup /></Suspense>} />
          <Route path="/groups/:groupSlug" element={<Suspense fallback={<RouteLoader><DetailSkeleton /></RouteLoader>}><GroupDetails /></Suspense>} />
          <Route path="/games" element={<Suspense fallback={<RouteLoader><DirectorySkeleton /></RouteLoader>}><GamesList /></Suspense>} />
          <Route path="/games/create" element={<Suspense fallback={<RouteLoader><HeroGridSkeleton /></RouteLoader>}><CreateGame /></Suspense>} />
          <Route path="/games/:gameId" element={<Suspense fallback={<RouteLoader><DetailSkeleton /></RouteLoader>}><GameDetails /></Suspense>} />
          <Route path="/games/:gameId/edit" element={<Suspense fallback={<RouteLoader><HeroGridSkeleton /></RouteLoader>}><EditGame /></Suspense>} />
          <Route path="/games/:gameId/manage" element={<Suspense fallback={<RouteLoader><HeroGridSkeleton /></RouteLoader>}><ManageGame /></Suspense>} />
          <Route path="/venues" element={<Suspense fallback={<RouteLoader><DirectorySkeleton /></RouteLoader>}><Venues /></Suspense>} />
          <Route path="/venues/:venueSlug" element={<Suspense fallback={<RouteLoader><DetailSkeleton /></RouteLoader>}><VenueDetails /></Suspense>} />
          <Route path="/coaches" element={<Suspense fallback={<RouteLoader><DirectorySkeleton /></RouteLoader>}><Coaches /></Suspense>} />
          <Route path="/coaches/:username" element={<Suspense fallback={<RouteLoader><DetailSkeleton /></RouteLoader>}><CoachDetails /></Suspense>} />
          <Route path="/academies" element={<Suspense fallback={<RouteLoader><DirectorySkeleton /></RouteLoader>}><Academies /></Suspense>} />
          <Route path="/academies/:academySlug" element={<Suspense fallback={<RouteLoader><DetailSkeleton /></RouteLoader>}><AcademyDetails /></Suspense>} />
          <Route path="/tournaments" element={<Suspense fallback={<RouteLoader><DirectorySkeleton /></RouteLoader>}><Tournaments /></Suspense>} />
          <Route path="/tournaments/:tournamentSlug" element={<Suspense fallback={<RouteLoader><DetailSkeleton /></RouteLoader>}><TournamentDetails /></Suspense>} />
          <Route path="/events" element={<Suspense fallback={<RouteLoader><DirectorySkeleton /></RouteLoader>}><Events /></Suspense>} />
          <Route path="/events/:eventSlug" element={<Suspense fallback={<RouteLoader><DetailSkeleton /></RouteLoader>}><EventDetails /></Suspense>} />
          <Route path="/pricing" element={<Suspense fallback={<RouteLoader><HeroGridSkeleton /></RouteLoader>}><Pricing /></Suspense>} />
          <Route path="/download" element={<Suspense fallback={<RouteLoader><HeroGridSkeleton /></RouteLoader>}><Download /></Suspense>} />
          <Route path="/corporate" element={<Suspense fallback={<RouteLoader><HeroGridSkeleton /></RouteLoader>}><ForCorporate /></Suspense>} />
          <Route path="/blog" element={<Suspense fallback={<RouteLoader><HeroGridSkeleton /></RouteLoader>}><Blog /></Suspense>} />
          <Route path="/blog/:slug" element={<Suspense fallback={<RouteLoader><HeroGridSkeleton /></RouteLoader>}><BlogDetail /></Suspense>} />
          <Route path="/faq" element={<Suspense fallback={<RouteLoader><HeroGridSkeleton /></RouteLoader>}><FAQ /></Suspense>} />

          <Route path="/sitemap" element={<Suspense fallback={<RouteLoader><HeroGridSkeleton /></RouteLoader>}><Sitemap /></Suspense>} />
        </Route>

        <Route element={<DashboardLayout />}>
          <Route path="/dashboard" element={<Suspense fallback={<RouteLoader><HeroGridSkeleton /></RouteLoader>}><Overview /></Suspense>} />
          <Route path="/dashboard/clips" element={<Suspense fallback={<RouteLoader><HeroGridSkeleton /></RouteLoader>}><Clips /></Suspense>} />
          <Route path="/feed" element={<Suspense fallback={<RouteLoader><HeroGridSkeleton /></RouteLoader>}><Feed /></Suspense>} />
          <Route path="/discover" element={<Suspense fallback={<RouteLoader><HeroGridSkeleton /></RouteLoader>}><Discover /></Suspense>} />
          <Route path="/search" element={<Suspense fallback={<RouteLoader><HeroGridSkeleton /></RouteLoader>}><Search /></Suspense>} />
          <Route path="/messages" element={<Suspense fallback={<RouteLoader><HeroGridSkeleton /></RouteLoader>}><Messages /></Suspense>} />
          <Route path="/notifications" element={<Suspense fallback={<RouteLoader><HeroGridSkeleton /></RouteLoader>}><Notifications /></Suspense>} />
          <Route path="/settings" element={<Suspense fallback={<RouteLoader><HeroGridSkeleton /></RouteLoader>}><Settings /></Suspense>} />
          <Route path="/activity" element={<Suspense fallback={<RouteLoader><HeroGridSkeleton /></RouteLoader>}><Activity /></Suspense>} />
          <Route path="/my-games" element={<Suspense fallback={<RouteLoader><HeroGridSkeleton /></RouteLoader>}><Activity /></Suspense>} />
          <Route path="/my-groups" element={<Suspense fallback={<RouteLoader><HeroGridSkeleton /></RouteLoader>}><Activity /></Suspense>} />
          <Route path="/saved" element={<Suspense fallback={<RouteLoader><HeroGridSkeleton /></RouteLoader>}><Activity /></Suspense>} />
          <Route path="/invitations" element={<Suspense fallback={<RouteLoader><HeroGridSkeleton /></RouteLoader>}><Activity /></Suspense>} />
        </Route>

        <Route element={<AdminGuard><AdminLayout /></AdminGuard>}>
          <Route path="/admin" element={<AdminDashboard />} />
          <Route path="/admin/dashboard" element={<AdminDashboard />} />
          <Route path="/admin/users" element={<Suspense fallback={<RouteLoader><HeroGridSkeleton /></RouteLoader>}><UsersManager /></Suspense>} />
          <Route path="/admin/games" element={<Suspense fallback={<RouteLoader><HeroGridSkeleton /></RouteLoader>}><GamesModeration /></Suspense>} />
          <Route path="/admin/groups" element={<Suspense fallback={<RouteLoader><HeroGridSkeleton /></RouteLoader>}><GroupsModeration /></Suspense>} />
          <Route path="/admin/reports" element={<Suspense fallback={<RouteLoader><HeroGridSkeleton /></RouteLoader>}><ReportsManager /></Suspense>} />
          <Route path="/admin/culture" element={<Suspense fallback={<RouteLoader><HeroGridSkeleton /></RouteLoader>}><CultureManager /></Suspense>} />
          <Route path="/admin/content" element={<Suspense fallback={<RouteLoader><HeroGridSkeleton /></RouteLoader>}><ContentEditor /></Suspense>} />
          <Route path="/admin/sports" element={<Suspense fallback={<RouteLoader><HeroGridSkeleton /></RouteLoader>}><SportsManager /></Suspense>} />
        </Route>

        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
