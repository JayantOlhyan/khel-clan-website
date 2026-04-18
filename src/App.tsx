import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import PublicLayout from './layouts/PublicLayout';
import DashboardLayout from './layouts/DashboardLayout';

import Home from './pages/Home';
import GamesList from './pages/GamesList';
import GameDetails from './pages/GameDetails';
import About from './pages/About';

import Overview from './pages/Dashboard/Overview';
import Clips from './pages/Dashboard/Clips';

import AuthModal from './components/AuthModal';
import PaymentModal from './components/PaymentModal';

function App() {
  return (
    <BrowserRouter>
      {/* Global Modals overlaying everything */}
      <AuthModal />
      <PaymentModal />
      
      <Routes>
        <Route element={<PublicLayout />}>
          <Route path="/" element={<Home />} />
          <Route path="/games" element={<GamesList />} />
          <Route path="/games/:id" element={<GameDetails />} />
          <Route path="/about" element={<About />} />
        </Route>

        <Route element={<DashboardLayout />}>
          <Route path="/dashboard" element={<Overview />} />
          <Route path="/dashboard/clips" element={<Clips />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
