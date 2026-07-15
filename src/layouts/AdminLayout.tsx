import React from 'react';
import { Outlet, Link, useLocation } from 'react-router-dom';
import { LayoutDashboard, FileText, Settings, Users, ArrowLeft, Trophy, Flag, Shield, Activity } from 'lucide-react';

export default function AdminLayout() {
  const location = useLocation();

  const navItems = [
    { label: 'Dashboard', path: '/admin/dashboard', icon: <LayoutDashboard size={20} /> },
    { label: 'Users', path: '/admin/users', icon: <Users size={20} /> },
    { label: 'Games', path: '/admin/games', icon: <Activity size={20} /> },
    { label: 'Groups', path: '/admin/groups', icon: <Shield size={20} /> },
    { label: 'Reports', path: '/admin/reports', icon: <Flag size={20} /> },
    { label: 'Content', path: '/admin/content', icon: <FileText size={20} /> },
    { label: 'Sports Manager', path: '/admin/sports', icon: <Trophy size={20} /> },
  ];

  return (
    <div className="flex min-h-screen bg-gray-100 font-body">
      {/* Sidebar */}
      <aside className="w-64 bg-brand-forest text-white flex flex-col">
        <div className="p-6">
          <Link to="/" className="text-2xl font-heading font-black tracking-tighter text-brand-lime">
            KHEL<span className="text-white">CLAN</span>
          </Link>
          <p className="text-xs text-brand-lime/70 mt-1 uppercase font-bold tracking-widest">Admin Portal</p>
        </div>
        
        <nav className="flex-grow mt-6">
          {navItems.map((item) => (
            <Link
              key={item.path}
              to={item.path}
              className={`flex items-center space-x-3 px-6 py-4 transition-colors ${
                location.pathname === item.path ? 'bg-brand-lime text-brand-forest font-bold' : 'hover:bg-white/5'
              }`}
            >
              {item.icon}
              <span>{item.label}</span>
            </Link>
          ))}
        </nav>

        <div className="p-6 border-t border-white/10">
          <Link to="/" className="flex items-center space-x-2 text-white/60 hover:text-white transition group">
            <ArrowLeft size={16} className="group-hover:-translate-x-1 transition-transform" />
            <span>Back to Site</span>
          </Link>
        </div>
      </aside>

      {/* Main Content */}
      <main className="flex-grow p-8">
        <header className="flex justify-between items-center mb-8">
          <h1 className="text-2xl font-heading font-bold text-gray-800">
            {navItems.find(n => n.path === location.pathname)?.label || 'Admin Panel'}
          </h1>
          <div className="flex items-center space-x-4">
            <div className="bg-white px-4 py-2 rounded-lg shadow-sm border border-gray-200">
              <span className="text-sm font-medium text-gray-600">Admin Mode</span>
            </div>
            <div className="w-10 h-10 bg-brand-lime rounded-full flex items-center justify-center font-bold text-brand-forest">
              JO
            </div>
          </div>
        </header>

        <div className="bg-white rounded-2xl shadow-sm border border-gray-200 p-6 min-h-[calc(100vh-200px)]">
          <Outlet />
        </div>
      </main>
    </div>
  );
}
