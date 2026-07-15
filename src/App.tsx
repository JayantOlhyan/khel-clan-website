import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import PublicLayout from './layouts/PublicLayout';
import DashboardLayout from './layouts/DashboardLayout';
import AdminLayout from './layouts/AdminLayout';

import Home from './pages/Home';
import About from './pages/About';
import HowItWorks from './pages/HowItWorks';
import Blog from './pages/Blog';
import BlogDetail from './pages/BlogDetail';
import FAQ from './pages/FAQ';
import Contact from './pages/Contact';
import LegalHub from './pages/LegalHub';
import SportsCategories from './pages/SportsCategories';
import SportDetail from './pages/SportDetail';
import Venues from './pages/Venues';
import VenueDetails from './pages/VenueDetails';
// Directory Pages
import LocationsDirectory from './pages/LocationsDirectory';
import CityDetail from './pages/CityDetail';
import CitySportDetail from './pages/CitySportDetail';
// Groups Pages
import GroupsDirectory from './pages/Groups/GroupsDirectory';
import CreateGroup from './pages/Groups/CreateGroup';
import GroupDetails from './pages/Groups/GroupDetails';
// Game Pages
import GamesList from './pages/Games/GamesList';
import GameDetails from './pages/Games/GameDetails';
import CreateGame from './pages/Games/CreateGame';
import EditGame from './pages/Games/EditGame';
import ManageGame from './pages/Games/ManageGame';

import Coaches from './pages/Coaches';
import CoachDetails from './pages/CoachDetails';
import Academies from './pages/Academies';
import AcademyDetails from './pages/AcademyDetails';
import Tournaments from './pages/Tournaments';
import TournamentDetails from './pages/TournamentDetails';
import Events from './pages/Events';
import EventDetails from './pages/EventDetails';
import Pricing from './pages/Pricing';
import Download from './pages/Download';
import ForCorporate from './pages/ForCorporate';
import Sitemap from './pages/Sitemap';

// Admin Pages
import AdminDashboard from './pages/Admin/Dashboard';
import CultureManager from './pages/Admin/CultureManager';
import ContentEditor from './pages/Admin/ContentEditor';
import SportsManager from './pages/Admin/SportsManager';
import UsersManager from './pages/Admin/UsersManager';
import GamesModeration from './pages/Admin/GamesModeration';
import GroupsModeration from './pages/Admin/GroupsModeration';
import ReportsManager from './pages/Admin/ReportsManager';
import AdminGuard from './components/AdminGuard';

// Dashboard Pages
import Overview from './pages/Dashboard/Overview';
import Clips from './pages/Dashboard/Clips';
import Discover from './pages/Dashboard/Discover';
import Feed from './pages/Dashboard/Feed';
import Notifications from './pages/Dashboard/Notifications';
import Settings from './pages/Dashboard/Settings';
import Messages from './pages/Dashboard/Messages';
import Activity from './pages/Dashboard/Activity';
import Search from './pages/Dashboard/Search';

// Public/Trust & Safety
import Safety from './pages/Safety';
import Report from './pages/Report';
import HelpCenter from './pages/HelpCenter';
import Status from './pages/Status';
import { NotFoundPage, MaintenancePage, OfflinePage, ServerErrorPage } from './pages/SystemPages';

// Player Pages
import PlayersDirectory from './pages/Players/PlayersDirectory';
import PlayerProfile from './pages/Players/PlayerProfile';

import AuthModal from './components/AuthModal';
import PaymentModal from './components/PaymentModal';
import AIAssistant from './components/AIAssistant';
import ScrollToTop from './components/ScrollToTop';
import AppBanner from './components/AppBanner';

// Auth Pages
import Login from './pages/Auth/Login';
import Signup from './pages/Auth/Signup';
import ForgotPassword from './pages/Auth/ForgotPassword';
import ResetPassword from './pages/Auth/ResetPassword';
import VerifyEmail from './pages/Auth/VerifyEmail';
import Onboarding from './pages/Auth/Onboarding';

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
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/forgot-password" element={<ForgotPassword />} />
        <Route path="/reset-password" element={<ResetPassword />} />
        <Route path="/verify-email" element={<VerifyEmail />} />
        <Route path="/onboarding" element={<Onboarding />} />

        <Route element={<PublicLayout />}>
          <Route path="/contact" element={<Contact />} />
          <Route path="/safety" element={<Safety />} />
          <Route path="/community-guidelines" element={<LegalHub />} />
          <Route path="/help" element={<HelpCenter />} />
          <Route path="/feedback" element={<Contact />} />
          <Route path="/status" element={<Status />} />
          <Route path="/report" element={<Report />} />
          <Route path="/maintenance" element={<MaintenancePage />} />
          <Route path="/offline" element={<OfflinePage />} />
          <Route path="/500" element={<ServerErrorPage />} />
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/how-it-works" element={<HowItWorks />} />
          <Route path="/terms" element={<LegalHub />} />
          <Route path="/privacy" element={<LegalHub />} />
          <Route path="/cookies" element={<LegalHub />} />
          <Route path="/refund-policy" element={<LegalHub />} />
          <Route path="/cancellation-policy" element={<LegalHub />} />
          <Route path="/community-guidelines" element={<LegalHub />} />
          <Route path="/sports" element={<SportsCategories />} />
          <Route path="/sports/:sport" element={<SportDetail />} />
          <Route path="/play" element={<LocationsDirectory />} />
          <Route path="/play/:city" element={<CityDetail />} />
          <Route path="/play/:city/:sport" element={<CitySportDetail />} />
          <Route path="/players" element={<PlayersDirectory />} />
          <Route path="/players/:username" element={<PlayerProfile />} />
          <Route path="/groups" element={<GroupsDirectory />} />
          <Route path="/groups/create" element={<CreateGroup />} />
          <Route path="/groups/:groupSlug" element={<GroupDetails />} />
          <Route path="/games" element={<GamesList />} />
          <Route path="/games/create" element={<CreateGame />} />
          <Route path="/games/:gameId" element={<GameDetails />} />
          <Route path="/games/:gameId/edit" element={<EditGame />} />
          <Route path="/games/:gameId/manage" element={<ManageGame />} />
          <Route path="/venues" element={<Venues />} />
          <Route path="/venues/:venueSlug" element={<VenueDetails />} />
          <Route path="/coaches" element={<Coaches />} />
          <Route path="/coaches/:username" element={<CoachDetails />} />
          <Route path="/academies" element={<Academies />} />
          <Route path="/academies/:academySlug" element={<AcademyDetails />} />
          <Route path="/tournaments" element={<Tournaments />} />
          <Route path="/tournaments/:tournamentSlug" element={<TournamentDetails />} />
          <Route path="/events" element={<Events />} />
          <Route path="/events/:eventSlug" element={<EventDetails />} />
          <Route path="/pricing" element={<Pricing />} />
          <Route path="/download" element={<Download />} />
          <Route path="/corporate" element={<ForCorporate />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/blog/:slug" element={<BlogDetail />} />
          <Route path="/faq" element={<FAQ />} />

          <Route path="/sitemap" element={<Sitemap />} />
        </Route>

        <Route element={<DashboardLayout />}>
          <Route path="/dashboard" element={<Overview />} />
          <Route path="/dashboard/clips" element={<Clips />} />
          <Route path="/feed" element={<Feed />} />
          <Route path="/discover" element={<Discover />} />
          <Route path="/search" element={<Search />} />
          <Route path="/messages" element={<Messages />} />
          <Route path="/notifications" element={<Notifications />} />
          <Route path="/settings" element={<Settings />} />
          <Route path="/activity" element={<Activity />} />
          <Route path="/my-games" element={<Activity />} />
          <Route path="/my-groups" element={<Activity />} />
          <Route path="/saved" element={<Activity />} />
          <Route path="/invitations" element={<Activity />} />
        </Route>

        <Route element={<AdminGuard><AdminLayout /></AdminGuard>}>
          <Route path="/admin" element={<AdminDashboard />} />
          <Route path="/admin/dashboard" element={<AdminDashboard />} />
          <Route path="/admin/users" element={<UsersManager />} />
          <Route path="/admin/games" element={<GamesModeration />} />
          <Route path="/admin/groups" element={<GroupsModeration />} />
          <Route path="/admin/reports" element={<ReportsManager />} />
          <Route path="/admin/culture" element={<CultureManager />} />
          <Route path="/admin/content" element={<ContentEditor />} />
          <Route path="/admin/sports" element={<SportsManager />} />
        </Route>

        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
