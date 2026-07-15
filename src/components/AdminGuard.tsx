import React from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { useAppStore } from '../store/useAppStore';

export default function AdminGuard({ children }: { children: React.ReactNode }) {
  const { isAdmin } = useAppStore();
  const location = useLocation();

  if (!isAdmin) {
    return <Navigate to="/500" replace state={{ error: "403 - Permission Denied" }} />;
  }

  return <>{children}</>;
}
