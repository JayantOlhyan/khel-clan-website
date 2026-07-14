import React, { useState, useMemo } from 'react';
import { Link } from 'react-router-dom';
import { Search, Map, ChevronRight, HelpCircle } from 'lucide-react';

interface SitemapItem {
  name: string;
  path: string;
  description: string;
  id: string;
}

interface SitemapCategory {
  title: string;
  items: SitemapItem[];
}

export default function Sitemap() {
  const [searchQuery, setSearchQuery] = useState('');

  // Structured directory mirroring Apple's high-density layout
  const directory: SitemapCategory[] = useMemo(() => [
    {
      title: 'Play & Book',
      items: [
        { name: 'Browse Games', path: '/games', description: 'Find and book active amateur sports games.', id: 'sitemap-apple-games' },
        { name: 'Sports Categories', path: '/sports', description: 'Explore supported sports disciplines.', id: 'sitemap-apple-sports' },
        { name: 'Venue Locations', path: '/locations', description: 'Find sports complexes and turfs near you.', id: 'sitemap-apple-locations' },
        { name: 'For Corporate', path: '/corporate', description: 'Corporate events and employee programs.', id: 'sitemap-apple-corporate' }
      ]
    },
    {
      title: 'Account & Profile',
      items: [
        { name: 'Member Dashboard', path: '/dashboard', description: 'Access your profile and booking details.', id: 'sitemap-apple-dashboard' },
        { name: 'Recorded Clips', path: '/dashboard/clips', description: 'View and share your highlight videos.', id: 'sitemap-apple-clips' },
        { name: 'FAQ & Settings', path: '/faq', description: 'Manage accounts and search FAQs.', id: 'sitemap-apple-account-faq' }
      ]
    },
    {
      title: 'Support & Services',
      items: [
        { name: 'Help Center & FAQ', path: '/faq', description: 'Frequently asked questions and guides.', id: 'sitemap-apple-faq' },
        { name: 'Contact Support', path: '/contact', description: 'Direct contact form to get customer help.', id: 'sitemap-apple-contact' },
        { name: 'Sitemap Index', path: '/sitemap', description: 'Full list of website pages.', id: 'sitemap-apple-sitemap' }
      ]
    },
    {
      title: 'Company & Culture',
      items: [
        { name: 'About KhelClan', path: '/about', description: 'Learn about our vision and founding story.', id: 'sitemap-apple-about' },
        { name: 'Company Blog', path: '/blog', description: 'Read latest updates and player highlights.', id: 'sitemap-apple-blog' },
        { name: 'Locations & Partners', path: '/locations', description: 'Check partnered venues and arenas.', id: 'sitemap-apple-partners' }
      ]
    },
    {
      title: 'Legal & Values',
      items: [
        { name: 'Terms of Use', path: '/terms', description: 'Rules and regulations for website use.', id: 'sitemap-apple-terms' },
        { name: 'Privacy Policy', path: '/privacy', description: 'Our data protection and privacy terms.', id: 'sitemap-apple-privacy' },
        { name: 'Community Guidelines', path: '/faq', description: 'Safety rules and playing etiquette.', id: 'sitemap-apple-guidelines' }
      ]
    }
  ], []);

  // Filter items based on search query
  const filteredDirectory = useMemo(() => {
    if (!searchQuery.trim()) return directory;

    const query = searchQuery.toLowerCase();
    return directory
      .map(category => {
        const matchingItems = category.items.filter(
          item =>
            item.name.toLowerCase().includes(query) ||
            item.description.toLowerCase().includes(query) ||
            item.path.toLowerCase().includes(query)
        );
        return {
          ...category,
          items: matchingItems
        };
      })
      .filter(category => category.items.length > 0);
  }, [searchQuery, directory]);

  const totalMatches = useMemo(() => {
    return filteredDirectory.reduce((acc, cat) => acc + cat.items.length, 0);
  }, [filteredDirectory]);

  return (
    <div className="bg-brand-neutral min-h-screen font-body text-[#1d1d1f] antialiased">
      {/* Sitemap Container */}
      <div className="max-w-6xl mx-auto px-6 py-20">
        
        {/* Apple-style Breadcrumb / Section tag */}
        <div className="flex items-center gap-2 text-xs text-gray-500 mb-8 font-normal">
          <Link to="/" className="hover:underline hover:text-black">KhelClan</Link>
          <span className="text-gray-300">/</span>
          <span className="text-gray-800">Sitemap</span>
        </div>

        {/* Minimalist Header */}
        <div className="border-b border-gray-200 pb-8 mb-12">
          <h1 className="text-4xl md:text-5xl font-heading font-semibold tracking-tight text-[#1d1d1f]">
            KhelClan Sitemap
          </h1>
          <p className="text-base text-gray-500 mt-2 font-normal">
            A comprehensive directory of KhelClan pages, resource links, and dashboard portals.
          </p>
        </div>

        {/* Search Bar section */}
        <div className="max-w-md mb-16 relative">
          <div className="relative shadow-sm rounded-xl overflow-hidden bg-white border border-gray-200 focus-within:border-brand-forest focus-within:ring-1 focus-within:ring-brand-forest/20 transition-all duration-200">
            <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none">
              <Search className="h-4 w-4 text-gray-400" />
            </div>
            <input
              type="text"
              id="sitemap-apple-search"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search sitemap..."
              className="block w-full pl-10 pr-4 py-3 text-sm text-[#1d1d1f] placeholder-gray-400 bg-transparent border-0 focus:outline-none focus:ring-0"
            />
            {searchQuery && (
              <button
                onClick={() => setSearchQuery('')}
                className="absolute inset-y-0 right-0 pr-3 flex items-center text-xs text-gray-400 hover:text-black"
              >
                Clear
              </button>
            )}
          </div>
          {searchQuery && (
            <p className="text-xs text-gray-400 mt-2">
              Found {totalMatches} matching {totalMatches === 1 ? 'page' : 'pages'}.
            </p>
          )}
        </div>

        {/* Directory Columns - High density Apple format */}
        {filteredDirectory.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-y-12 gap-x-8">
            {filteredDirectory.map((category) => (
              <div key={category.title} className="flex flex-col space-y-4">
                {/* Section Title */}
                <h3 className="text-xs font-semibold text-[#1d1d1f] tracking-wider uppercase border-b border-gray-100 pb-2">
                  {category.title}
                </h3>
                
                {/* Link items list */}
                <ul className="space-y-3">
                  {category.items.map((item) => (
                    <li key={item.id} className="group">
                      <Link
                        to={item.path}
                        id={item.id}
                        className="block py-0.5"
                      >
                        <span className="text-xs text-[#515154] group-hover:text-[#0066cc] group-hover:underline transition-colors block font-normal leading-normal">
                          {item.name}
                        </span>
                        {/* Display Description only if search is active for contextual details */}
                        {searchQuery && (
                          <span className="text-[10px] text-gray-400 block mt-0.5 max-w-full truncate">
                            {item.description}
                          </span>
                        )}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        ) : (
          <div className="text-center py-20 bg-white rounded-2xl border border-dashed border-gray-200">
            <p className="text-sm text-gray-500">No matching links found for "{searchQuery}"</p>
            <button
              onClick={() => setSearchQuery('')}
              className="mt-3 text-xs text-[#0066cc] hover:underline"
            >
              Reset Search
            </button>
          </div>
        )}

        {/* Contact Banner */}
        <div className="mt-24 border-t border-gray-200 pt-10 flex flex-col md:flex-row md:items-center justify-between gap-6">
          <div>
            <h4 className="text-sm font-semibold text-[#1d1d1f]">Need direct support?</h4>
            <p className="text-xs text-[#86868b] mt-1">Visit our support contact pages or lookup answers instantly.</p>
          </div>
          <div className="flex gap-4">
            <Link
              to="/faq"
              className="text-xs text-[#0066cc] hover:underline flex items-center gap-1"
            >
              FAQ Center <ChevronRight className="w-3.5 h-3.5" />
            </Link>
            <Link
              to="/contact"
              className="text-xs text-[#0066cc] hover:underline flex items-center gap-1"
            >
              Contact Support <ChevronRight className="w-3.5 h-3.5" />
            </Link>
          </div>
        </div>

      </div>
    </div>
  );
}
