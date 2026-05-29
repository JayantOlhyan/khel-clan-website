import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import PublicLayout from './layouts/PublicLayout';
import DashboardLayout from './layouts/DashboardLayout';
import AdminLayout from './layouts/AdminLayout';

import Home from './pages/Home';
import GamesList from './pages/GamesList';
import GameDetails from './pages/GameDetails';
import About from './pages/About';
import Blog from './pages/Blog';
import BlogDetail from './pages/BlogDetail';
import FAQ from './pages/FAQ';
import Contact from './pages/Contact';
import TermsOfUse from './pages/TermsOfUse';
import PrivacyPolicy from './pages/PrivacyPolicy';
import SportsCategories from './pages/SportsCategories';
import VenueLocations from './pages/VenueLocations';
import ForCorporate from './pages/ForCorporate';

// Admin Pages
import AdminDashboard from './pages/Admin/Dashboard';
import CultureManager from './pages/Admin/CultureManager';
import ContentEditor from './pages/Admin/ContentEditor';

import Overview from './pages/Dashboard/Overview';
import Clips from './pages/Dashboard/Clips';

import AuthModal from './components/AuthModal';
import PaymentModal from './components/PaymentModal';
import AIAssistant from './components/AIAssistant';
import ScrollToTop from './components/ScrollToTop';

function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      {/* Global Modals overlaying everything */}
      <AuthModal />
      <PaymentModal />
      <AIAssistant />
      
      <Routes>
        <Route element={<PublicLayout />}>
          <Route path="/" element={<Home />} />
          <Route path="/games" element={<GamesList />} />
          <Route path="/games/:id" element={<GameDetails />} />
          <Route path="/sports" element={<SportsCategories />} />
          <Route path="/locations" element={<VenueLocations />} />
          <Route path="/corporate" element={<ForCorporate />} />
          <Route path="/about" element={<About />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/blog/:slug" element={<BlogDetail />} />
          <Route path="/faq" element={<FAQ />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/terms" element={<TermsOfUse />} />
          <Route path="/privacy" element={<PrivacyPolicy />} />
        </Route>

        <Route element={<DashboardLayout />}>
          <Route path="/dashboard" element={<Overview />} />
          <Route path="/dashboard/clips" element={<Clips />} />
        </Route>

        <Route element={<AdminLayout />}>
          <Route path="/admin" element={<AdminDashboard />} />
          <Route path="/admin/dashboard" element={<AdminDashboard />} />
          <Route path="/admin/culture" element={<CultureManager />} />
          <Route path="/admin/content" element={<ContentEditor />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
