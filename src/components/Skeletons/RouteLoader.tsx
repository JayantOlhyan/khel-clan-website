import React from 'react';
import { useDelayedLoading } from '../../hooks/useDelayedLoading';

export default function RouteLoader({ children }: { children: React.ReactNode }) {
  // When used as a Suspense fallback, this component is mounted as long as the 
  // lazy chunk is loading. We pass true to indicate it's loading.
  const showSkeleton = useDelayedLoading(true, 200);

  if (showSkeleton) {
    return (
      <div aria-busy="true" aria-live="polite" className="w-full h-full">
        <span className="sr-only">Loading section...</span>
        {children}
      </div>
    );
  }
  
  // Return an empty placeholder for the first 200ms to prevent flicker
  return <div aria-busy="true" className="w-full h-full"></div>;
}
