import React from 'react';
import { CheckCircle2, Activity } from 'lucide-react';

export default function Status() {
  const services = [
    { name: 'Web Application', status: 'Operational' },
    { name: 'API Services', status: 'Operational' },
    { name: 'Database', status: 'Operational' },
    { name: 'Messaging (WhatsApp Sync)', status: 'Maintenance' },
    { name: 'Payment Gateway', status: 'Operational' },
  ];

  return (
    <div className="pt-32 pb-24 min-h-screen bg-brand-neutral px-4">
      <div className="max-w-3xl mx-auto">
        <div className="text-center mb-12">
          <Activity className="mx-auto text-brand-forest mb-6" size={64} />
          <h1 className="text-4xl md:text-5xl font-heading font-black text-brand-forest mb-4">Platform Status</h1>
          <p className="text-gray-600 font-body">Current operational status of KhelClan services.</p>
        </div>

        <div className="bg-white rounded-[32px] p-8 shadow-sm border border-black/5">
          <div className="flex items-center gap-3 bg-green-50 text-green-700 p-6 rounded-2xl mb-8">
            <CheckCircle2 size={24} />
            <span className="font-bold">All core systems are operational</span>
          </div>

          <div className="space-y-4">
            {services.map((s, i) => (
              <div key={i} className="flex justify-between items-center p-4 border-b last:border-0">
                <span className="font-bold text-gray-700">{s.name}</span>
                <span className={`px-3 py-1 rounded-full text-xs font-bold ${
                  s.status === 'Operational' ? 'bg-green-100 text-green-700' : 'bg-amber-100 text-amber-700'
                }`}>
                  {s.status}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
