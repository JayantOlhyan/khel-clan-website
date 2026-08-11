import { useState, useEffect } from 'react';

/**
 * Delays the showing of a loading skeleton to prevent flicker on fast loads.
 * @param isLoading The actual loading state
 * @param delay Delay in ms before showing the skeleton (default: 200ms)
 * @returns boolean indicating whether the skeleton should be shown
 */
export function useDelayedLoading(isLoading: boolean, delay: number = 200): boolean {
  const [showSkeleton, setShowSkeleton] = useState(false);

  useEffect(() => {
    if (!isLoading) {
      setShowSkeleton(false);
      return;
    }
    const timer = setTimeout(() => {
      setShowSkeleton(true);
    }, delay);
    
    return () => clearTimeout(timer);
  }, [isLoading, delay]);

  return showSkeleton;
}
