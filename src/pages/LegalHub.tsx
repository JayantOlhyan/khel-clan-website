import React from 'react';
import { useLocation, Link } from 'react-router-dom';
import { Scale, Shield, Cookie, RotateCcw, XCircle, Users } from 'lucide-react';

export default function LegalHub() {
  const location = useLocation();
  const path = location.pathname.replace('/', '');

  const getTitle = () => {
    switch (path) {
      case 'terms': return 'Terms of Service';
      case 'privacy': return 'Privacy Policy';
      case 'cookies': return 'Cookie Policy';
      case 'refund-policy': return 'Refund Policy';
      case 'cancellation-policy': return 'Cancellation Policy';
      case 'community-guidelines': return 'Community Guidelines';
      default: return 'Legal Information';
    }
  };

  const getIcon = () => {
    switch (path) {
      case 'terms': return <Scale className="text-brand-forest mb-4" size={48} />;
      case 'privacy': return <Shield className="text-blue-500 mb-4" size={48} />;
      case 'cookies': return <Cookie className="text-amber-500 mb-4" size={48} />;
      case 'refund-policy': return <RotateCcw className="text-green-500 mb-4" size={48} />;
      case 'cancellation-policy': return <XCircle className="text-red-500 mb-4" size={48} />;
      case 'community-guidelines': return <Users className="text-purple-500 mb-4" size={48} />;
      default: return <Scale className="text-brand-forest mb-4" size={48} />;
    }
  };

  return (
    <div className="pt-32 pb-24 min-h-screen bg-brand-neutral">
      <div className="max-w-4xl mx-auto px-4">
        
        <div className="text-center mb-12">
          {getIcon()}
          <h1 className="text-4xl md:text-5xl font-heading font-black text-brand-forest mb-4">{getTitle()}</h1>
          <p className="text-gray-500 font-body">Last updated: July 2026</p>
        </div>

        <div className="bg-white rounded-[32px] p-8 md:p-12 shadow-sm border border-black/5 prose max-w-none prose-h2:text-brand-forest prose-h2:font-heading prose-h2:font-black">
          
          {path === 'terms' && (
            <>
              <h2>1. Acceptance of Terms</h2>
              <p>By creating an account, discovering games, or organizing events on KhelClan, you agree to these Terms. KhelClan acts as an intermediary platform to facilitate sports connections; we do not own or operate venues.</p>
              <h2>2. User Conduct</h2>
              <p>Users must provide accurate information. Creating fake games, spamming groups, or abusing the platform will result in immediate suspension without refund.</p>
              <h2>3. Liability</h2>
              <p>Sports carry inherent physical risks. KhelClan is not liable for injuries sustained during games organized via our platform. Players participate at their own risk.</p>
            </>
          )}

          {path === 'privacy' && (
            <>
              <h2>1. Data We Collect</h2>
              <p>We collect basic profile information (name, city, skill levels), contact details (email, phone for verification), and gameplay activity. We do NOT track exact device locations continuously; location is only used when actively searching for nearby games.</p>
              <h2>2. How We Use It</h2>
              <p>Your data is used strictly to match you with relevant games and players. Phone numbers are kept private unless you explicitly share them with a connected group or player.</p>
              <h2>3. Data Deletion</h2>
              <p>You can delete your account and all associated data at any time via the Settings panel. Deleted data cannot be recovered.</p>
            </>
          )}

          {path === 'cookies' && (
            <>
              <h2>1. Necessary Cookies</h2>
              <p>We use local storage and essential cookies to keep you logged in and remember your session state (e.g., your active dashboard tabs).</p>
              <h2>2. Analytics</h2>
              <p>We use minimal analytics to understand which features (like Groups vs Games) are most popular so we can improve the platform. We do not sell this data to third-party ad networks.</p>
            </>
          )}

          {path === 'refund-policy' && (
            <>
              <h2>1. Platform Fees</h2>
              <p>KhelClan platform fees (if applicable) are non-refundable once a booking is confirmed.</p>
              <h2>2. Organizer Payouts</h2>
              <p>If you pay for a game slot via KhelClan, the funds are held until the game commences. If the game is cancelled by the organizer, you will receive a full refund to your original payment method.</p>
            </>
          )}

          {path === 'cancellation-policy' && (
            <>
              <h2>1. Player Cancellations</h2>
              <p>Players must cancel at least 12 hours before a scheduled game to receive a refund. Late cancellations are non-refundable and will negatively impact your reliability score.</p>
              <h2>2. Organizer Cancellations</h2>
              <p>Organizers who repeatedly cancel games last minute will have their hosting privileges revoked.</p>
            </>
          )}

          {path === 'community-guidelines' && (
            <>
              <h2>1. Respect the Game</h2>
              <p>Play fair. Aggressive behavior, fighting, or unsportsmanlike conduct is strictly prohibited.</p>
              <h2>2. Show Up</h2>
              <p>If you RSVP to a game, you are expected to attend. Repeated no-shows ruin the experience for everyone else and will result in a ban.</p>
              <h2>3. Keep it Clean</h2>
              <p>Leave venues exactly as you found them. Do not litter.</p>
            </>
          )}

        </div>

        <div className="mt-8 flex flex-wrap justify-center gap-4 text-sm font-bold text-gray-500">
          <Link to="/terms" className="hover:text-brand-forest">Terms</Link>
          <Link to="/privacy" className="hover:text-brand-forest">Privacy</Link>
          <Link to="/cookies" className="hover:text-brand-forest">Cookies</Link>
          <Link to="/refund-policy" className="hover:text-brand-forest">Refund Policy</Link>
          <Link to="/cancellation-policy" className="hover:text-brand-forest">Cancellation Policy</Link>
          <Link to="/community-guidelines" className="hover:text-brand-forest">Guidelines</Link>
        </div>
      </div>
    </div>
  );
}
