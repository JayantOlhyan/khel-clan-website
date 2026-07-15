import React from 'react';
import { Shield, AlertTriangle, Users, Book } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function Safety() {
  return (
    <div className="pt-32 pb-24 bg-brand-neutral min-h-screen">
      <div className="max-w-4xl mx-auto px-4 text-center">
        <Shield className="mx-auto text-brand-forest mb-6" size={64} />
        <h1 className="text-4xl md:text-6xl font-heading font-black text-brand-forest mb-6">Trust & Safety</h1>
        <p className="text-xl text-gray-600 mb-12 font-body max-w-2xl mx-auto">
          KhelClan connects people in the real world. Your safety is not an optional feature—it is the foundation of our platform.
        </p>

        <div className="grid md:grid-cols-2 gap-6 text-left">
          <div className="bg-white p-8 rounded-[32px] shadow-sm border border-black/5">
            <h3 className="text-xl font-bold font-heading text-brand-forest mb-3 flex items-center gap-2">
              <Users className="text-blue-500" /> Real People, Real Identity
            </h3>
            <p className="text-gray-600 text-sm">We encourage connecting social profiles and verifying phone numbers to build a trusted community.</p>
          </div>
          <div className="bg-white p-8 rounded-[32px] shadow-sm border border-black/5">
            <h3 className="text-xl font-bold font-heading text-brand-forest mb-3 flex items-center gap-2">
              <AlertTriangle className="text-amber-500" /> Zero Tolerance
            </h3>
            <p className="text-gray-600 text-sm">Harassment, discrimination, or unsportsmanlike behavior will result in immediate suspension.</p>
          </div>
        </div>

        <div className="mt-12 space-x-4">
          <Link to="/community-guidelines" className="inline-block bg-white text-brand-forest font-bold px-8 py-4 rounded-xl shadow-sm border hover:bg-gray-50 transition">Read Guidelines</Link>
          <Link to="/report" className="inline-block bg-brand-forest text-white font-bold px-8 py-4 rounded-xl shadow-sm hover:bg-brand-flame transition">Report an Incident</Link>
        </div>
      </div>
    </div>
  );
}
