// src/pages/Admin/Dashboard.tsx
import React from 'react';
import { Users, TrendingUp, Calendar, MessageSquare } from 'lucide-react';

const stats = [
  { label: 'Total Players', value: '1,280', icon: <Users className="text-blue-500" />, trend: '+12%' },
  { label: 'Revenue', value: '₹24,500', icon: <TrendingUp className="text-green-500" />, trend: '+8%' },
  { label: 'Bookings', value: '142', icon: <Calendar className="text-purple-500" />, trend: '+15%' },
  { label: 'AI Queries', value: '450', icon: <MessageSquare className="text-yellow-500" />, trend: '+22%' },
];

export default function Dashboard() {
  return (
    <div className="space-y-8">
      {/* Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {stats.map((stat, idx) => (
          <div key={idx} className="bg-gray-50 p-6 rounded-xl border border-gray-100 flex items-center justify-between">
            <div>
              <p className="text-sm text-gray-500 font-medium">{stat.label}</p>
              <h3 className="text-2xl font-black mt-1">{stat.value}</h3>
              <span className="text-xs text-green-600 font-bold">{stat.trend} from last month</span>
            </div>
            <div className="p-3 bg-white rounded-lg shadow-sm">
              {stat.icon}
            </div>
          </div>
        ))}
      </div>

      {/* Recent Activity */}
      <div>
        <h2 className="text-xl font-bold mb-4">Recent Bookings</h2>
        <div className="overflow-x-auto">
          <table className="w-full text-left">
            <thead>
              <tr className="border-b border-gray-100 italic text-gray-400 text-sm">
                <th className="pb-4 font-medium uppercase tracking-wider">Player</th>
                <th className="pb-4 font-medium uppercase tracking-wider">Game</th>
                <th className="pb-4 font-medium uppercase tracking-wider">Time</th>
                <th className="pb-4 font-medium uppercase tracking-wider">Status</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-50">
              {[1, 2, 3, 4, 5].map((_, i) => (
                <tr key={i} className="hover:bg-gray-50 transition-colors">
                  <td className="py-4 font-medium">Player {i + 1}</td>
                  <td className="py-4 text-gray-600">Evening Turf Battle</td>
                  <td className="py-4 text-gray-600">Today, 6:00 PM</td>
                  <td className="py-4">
                    <span className="bg-green-100 text-green-700 px-2 py-1 rounded text-xs font-bold uppercase">Confirmed</span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
