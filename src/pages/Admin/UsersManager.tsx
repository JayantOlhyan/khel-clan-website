import React from 'react';
import { Users, ShieldAlert, Ban } from 'lucide-react';

export default function UsersManager() {
  return (
    <div className="space-y-6">
      <h2 className="text-xl font-heading font-black">User Management</h2>
      <div className="bg-white border rounded-xl p-6">
        <p className="text-gray-500 font-body text-sm">List of users goes here...</p>
      </div>
    </div>
  );
}
