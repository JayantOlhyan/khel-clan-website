import React from 'react';
import { useAppStore } from '../store/useAppStore';
import { ShieldAlert } from 'lucide-react';
import SystemState from './SystemState';

export default function AdminGuard({ children }: { children: React.ReactNode }) {
  const { isAdmin } = useAppStore();

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
