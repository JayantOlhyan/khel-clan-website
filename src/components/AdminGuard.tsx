import React, { useEffect, useState } from 'react';
import { onIdTokenChanged } from 'firebase/auth';
import { ShieldAlert } from 'lucide-react';
import SystemState from './SystemState';
import { auth } from '../lib/firebase';

// Admin access requires a Firebase custom claim `admin: true` (set server-side).
export default function AdminGuard({ children }: { children: React.ReactNode }) {
  const [isAdmin, setIsAdmin] = useState<boolean | null>(null);

  useEffect(() => onIdTokenChanged(auth, async (u) => {
    setIsAdmin(u ? (await u.getIdTokenResult()).claims.admin === true : false);
  }), []);

  if (isAdmin === null) return null;

  if (!isAdmin) {
    return (
      <SystemState
        icon={ShieldAlert}
        title="403 - Admin Access Restricted"
        description="You do not have administrative permissions to view this portal. Access is restricted to authorized personnel."
        actionText="Return to Homepage"
        actionLink="/"
        isFullPage={true}
        iconColor="text-brand-flame"
      />
    );
  }

  return <>{children}</>;
}
