import React, { useState, useMemo } from 'react';
import { Link } from 'react-router-dom';
import {
  Search,
  Home,
  Flame,
  MapPin,
  Building,
  Info,
  BookOpen,
  HelpCircle,
  Mail,
  FileText,
  Lock,
  LayoutDashboard,
  Film,
  ShieldAlert,
  Settings,
  PenTool,
  ChevronRight,
  Map
} from 'lucide-react';

interface SitemapItem {
  name: string;
  path: string;
  description: string;
  id: string;
}

interface SitemapCategory {
  title: string;
  description: string;
  icon: React.ReactNode;
  items: SitemapItem[];
}

export default function Sitemap() {
  const [searchQuery, setSearchQuery] = useState('');

  const categories: SitemapCategory[] = useMemo(() => [
    {
      title: 'Main Navigation',
      description: 'Explore the core KhelClan experience, sports categories, and corporate programs.',
      icon: <Home className="w-6 h-6 text-brand-lime" />,
      items: [
        { name: 'Home', path: '/', description: 'Return to the landing page and overview.', id: 'sitemap-link-home' },
        { name: 'Browse Games', path: '/games', description: 'Find and book upcoming amateur games.', id: 'sitemap-link-games' },
        { name: 'Sports Categories', path: '/sports', description: 'Explore various sport disciplines we host.', id: 'sitemap-link-sports' },
        { name: 'Venue Locations', path: '/locations', description: 'Find sports complexes and fields near you.', id: 'sitemap-link-locations' },
        { name: 'For Corporate', path: '/corporate', description: 'Custom programs and sports events for businesses.', id: 'sitemap-link-corporate' },
        { name: 'About Us', path: '/about', description: 'Learn about KhelClan\'s mission and our team.', id: 'sitemap-link-about' },
        { name: 'Blog', path: '/blog', description: 'Updates, strategies, and highlights from the community.', id: 'sitemap-link-blog' }
      ]
    },
    {
      title: 'Member Dashboard',
      description: 'Manage your player profile, bookings, stats, and recorded media.',
      icon: <LayoutDashboard className="w-6 h-6 text-brand-lime" />,
      items: [
        { name: 'Overview', path: '/dashboard', description: 'Your player profile dashboard and active bookings.', id: 'sitemap-link-dashboard' },
        { name: 'Recorded Clips', path: '/dashboard/clips', description: 'Access and share your automated match highlights.', id: 'sitemap-link-dashboard-clips' }
      ]
    },
    {
      title: 'Support & Legal',
      description: 'Access help materials, get in touch with us, or read our terms.',
      icon: <HelpCircle className="w-6 h-6 text-brand-lime" />,
      items: [
        { name: 'Help Center & FAQ', path: '/faq', description: 'Common questions regarding gameplay and bookings.', id: 'sitemap-link-faq' },
        { name: 'Contact Support', path: '/contact', description: 'Get direct help from our team with any issues.', id: 'sitemap-link-contact' },
        { name: 'Terms of Use', path: '/terms', description: 'Rules and regulations for using the KhelClan platform.', id: 'sitemap-link-terms' },
        { name: 'Privacy Policy', path: '/privacy', description: 'How we collect, protect, and use your personal information.', id: 'sitemap-link-privacy' }
      ]
    },
    {
      title: 'Admin Portal',
      description: 'Administrative dashboard, culture managers, and content editing tools.',
      icon: <ShieldAlert className="w-6 h-6 text-brand-lime" />,
      items: [
        { name: 'Admin Dashboard', path: '/admin/dashboard', description: 'Site-wide administration, metrics, and logs.', id: 'sitemap-link-admin' },
        { name: 'Culture Manager', path: '/admin/culture', description: 'Configure internal culture programs and events.', id: 'sitemap-link-admin-culture' },
        { name: 'Content Editor', path: '/admin/content', description: 'Manage and update landing page content and layout.', id: 'sitemap-link-admin-content' }
      ]
    }
  ], []);

  // Filter items based on search query
  const filteredCategories = useMemo(() => {
    if (!searchQuery.trim()) return categories;

    const query = searchQuery.toLowerCase();
    return categories
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
  }, [searchQuery, categories]);

  const totalMatches = useMemo(() => {
    return filteredCategories.reduce((acc, cat) => acc + cat.items.length, 0);
  }, [filteredCategories]);

  return (
    <div className="bg-muted-green min-h-screen py-24 px-4 font-body">
      <div className="max-w-6xl mx-auto">
        
        {/* Hero Header */}
        <div className="text-center mb-16 animate-fadeIn">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-brand-forest/10 text-brand-forest mb-4 text-xs font-semibold uppercase tracking-wider">
            <Map className="w-4 h-4" />
            Website Index
          </div>
          <h1 className="text-4xl md:text-6xl font-heading font-black text-brand-forest mb-6">
            Sitemap & Support Hub
          </h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto leading-relaxed">
            Can't find a specific page? Browse the complete directory of KhelClan pages, dashboards, and administrative support links below.
          </p>
        </div>

        {/* Search Input */}
        <div className="max-w-md mx-auto mb-16 relative">
          <div className="relative shadow-md rounded-2xl overflow-hidden bg-white border border-gray-100 focus-within:border-brand-forest focus-within:ring-2 focus-within:ring-brand-forest/20 transition-all duration-300">
            <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
              <Search className="h-5 w-5 text-gray-400" />
            </div>
            <input
              type="text"
              id="sitemap-search-input"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search pages, routes, or categories..."
              className="block w-full pl-12 pr-4 py-4 text-base text-brand-forest placeholder-gray-400 bg-transparent border-0 focus:outline-none focus:ring-0"
            />
            {searchQuery && (
              <button
                onClick={() => setSearchQuery('')}
                className="absolute inset-y-0 right-0 pr-4 flex items-center text-sm text-gray-400 hover:text-brand-forest"
              >
                Clear
              </button>
            )}
          </div>
          {searchQuery && (
            <p className="text-center text-sm text-gray-500 mt-3">
              Found {totalMatches} {totalMatches === 1 ? 'page' : 'pages'} matching your search.
            </p>
          )}
        </div>

        {/* Sitemap Grid */}
        {filteredCategories.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 animate-slideUp">
            {filteredCategories.map((category) => (
              <div
                key={category.title}
                className="bg-white rounded-[32px] p-8 shadow-lg hover:shadow-xl border border-gray-100 hover:border-brand-lime/50 transition-all duration-300 flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center gap-4 mb-4">
                    <div className="p-3 bg-brand-forest rounded-2xl">
                      {category.icon}
                    </div>
                    <div>
                      <h2 className="text-2xl font-heading font-black text-brand-forest">
                        {category.title}
                      </h2>
                      <p className="text-sm text-gray-500 mt-1">
                        {category.description}
                      </p>
                    </div>
                  </div>

                  <hr className="my-6 border-gray-100" />

                  <ul className="space-y-4">
                    {category.items.map((item) => (
                      <li key={item.id}>
                        <Link
                          to={item.path}
                          id={item.id}
                          className="group flex items-start gap-3 p-3 rounded-2xl hover:bg-muted-green/40 transition-colors duration-200"
                        >
                          <div className="p-1 bg-brand-forest/5 group-hover:bg-brand-lime rounded-lg text-brand-forest transition-colors duration-200 mt-0.5">
                            <ChevronRight className="w-4 h-4" />
                          </div>
                          <div>
                            <span className="font-heading font-bold text-brand-forest group-hover:text-brand-lime transition-colors block">
                              {item.name}
                            </span>
                            <span className="text-xs text-gray-400 block mt-0.5">
                              {item.description}
                            </span>
                            <span className="text-[10px] font-mono text-gray-400/80 block mt-1">
                              {item.path}
                            </span>
                          </div>
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="text-center py-20 bg-white rounded-[32px] border border-dashed border-gray-200">
            <p className="text-lg text-gray-500 font-medium">No pages matched "{searchQuery}"</p>
            <button
              onClick={() => setSearchQuery('')}
              className="mt-4 px-6 py-2.5 bg-brand-forest text-white hover:bg-brand-lime hover:text-brand-forest font-bold rounded-xl transition duration-200"
            >
              Reset Search
            </button>
          </div>
        )}

        {/* Footer Contact Help banner */}
        <div className="mt-20 bg-brand-forest text-white rounded-[32px] p-8 md:p-12 relative overflow-hidden shadow-2xl">
          <div className="absolute top-0 right-0 w-64 h-64 bg-brand-lime opacity-10 rounded-full -mr-32 -mt-32"></div>
          <div className="relative z-10 max-w-2xl">
            <h3 className="text-3xl font-heading font-black text-brand-lime mb-4">
              Need Direct Assistance?
            </h3>
            <p className="font-body text-white/80 leading-relaxed mb-6">
              If you have any questions or are experiencing issues with bookings, account setups, or camera replays, get in touch with our live support channel.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link
                to="/faq"
                className="px-6 py-3 bg-white/10 hover:bg-white/20 text-white font-bold rounded-2xl transition duration-200"
              >
                Go to FAQ
              </Link>
              <Link
                to="/contact"
                className="px-6 py-3 bg-brand-lime hover:bg-white text-brand-forest font-bold rounded-2xl transition duration-200"
              >
                Contact Us
              </Link>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}
