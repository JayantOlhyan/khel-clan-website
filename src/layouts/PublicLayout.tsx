import React, { useEffect } from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

export default function PublicLayout() {
  const location = useLocation();

  useEffect(() => {
    const domain = 'https://khelclan.online';
    const path = location.pathname;
    
    // Normalize path to strip trailing slash (except for the root '/')
    const cleanPath = path === '/' ? '/' : path.replace(/\/$/, '');
    const canonicalUrl = `${domain}${cleanPath}`;

    // Find or create the canonical link tag
    let link = document.querySelector("link[rel='canonical']") as HTMLLinkElement;
    if (!link) {
      link = document.createElement('link');
      link.setAttribute('rel', 'canonical');
      document.head.appendChild(link);
    }
    
    link.setAttribute('href', canonicalUrl);
  }, [location]);

  return (
    <div className="min-h-screen flex flex-col bg-muted-green text-deep-black font-body">
      <Navbar />
      <main className="flex-grow flex flex-col">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}
