import React, { useState } from 'react';
import { Search, ChevronRight, MessageSquare, AlertTriangle, HelpCircle } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function HelpCenter() {
  const [query, setQuery] = useState('');

  const categories = [
    'Account & Profile',
    'Finding Games',
    'Creating & Organizing Games',
    'Groups & Communities',
    'Trust & Safety',
    'Privacy & Data',
    'Reporting an Issue',
    'Payments & Refunds'
  ];

  return (
    <div className="pt-32 pb-24 min-h-screen bg-brand-neutral px-4">
      <div className="max-w-4xl mx-auto">
        
        {/* Header */}
        <div className="text-center mb-12">
          <HelpCircle className="mx-auto text-brand-forest mb-6" size={64} />
          <h1 className="text-4xl md:text-5xl font-heading font-black text-brand-forest mb-6">How can we help?</h1>
          
          <div className="max-w-2xl mx-auto relative">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" size={24} />
            <input 
              type="text" 
              placeholder="Search for articles, guides, or troubleshooting..." 
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              className="w-full border-0 rounded-[32px] p-6 pl-14 bg-white shadow-sm outline-none text-lg font-body focus:ring-4 focus:ring-brand-lime/20"
            />
          </div>
        </div>

        {/* Categories */}
        <div className="grid grid-autofit gap-4 mb-12">
          {categories.map((c, i) => (
            <div key={i} className="bg-white p-6 rounded-2xl shadow-sm border border-black/5 flex justify-between items-center cursor-pointer hover:border-brand-lime transition-colors group">
              <span className="font-bold text-brand-forest group-hover:text-brand-lime transition-colors">{c}</span>
              <ChevronRight className="text-gray-300" size={20} />
            </div>
          ))}
        </div>

        {/* Contact CTA */}
        <div className="bg-white rounded-[32px] p-8 md:p-12 shadow-sm border border-black/5 text-center">
          <h2 className="text-2xl font-heading font-black text-brand-forest mb-4">Can't find what you're looking for?</h2>
          <p className="text-gray-600 mb-8 max-w-lg mx-auto">Our support team is available to assist you with any platform issues or feedback.</p>
          
          <div className="flex flex-wrap justify-center gap-4">
            <Link to="/contact" className="bg-brand-forest text-white font-bold px-8 py-4 rounded-xl flex items-center gap-2 hover:bg-brand-flame transition">
              <MessageSquare size={20} /> Contact Support
            </Link>
            <Link to="/feedback" className="bg-white border text-gray-700 font-bold px-8 py-4 rounded-xl flex items-center gap-2 hover:bg-gray-50 transition">
              Submit Feedback
            </Link>
            <Link to="/status" className="bg-white border text-gray-700 font-bold px-8 py-4 rounded-xl flex items-center gap-2 hover:bg-gray-50 transition">
              <AlertTriangle size={20} className="text-amber-500" /> Platform Status
            </Link>
          </div>
        </div>

      </div>
    </div>
  );
}
