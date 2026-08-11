import React from 'react';

export function SkeletonBlock({ className, style }: { className?: string; style?: React.CSSProperties }) {
  return (
    <div 
      className={`bg-gray-800 animate-pulse rounded-xl ${className || ''}`} 
      style={style}
    ></div>
  );
}

export function SkeletonText({ lines = 1, className }: { lines?: number; className?: string }) {
  return (
    <div className={`space-y-3 ${className || ''}`}>
      {Array.from({ length: lines }).map((_, i) => (
        <div 
          key={i} 
          className={`h-4 bg-gray-800 animate-pulse rounded ${i === lines - 1 && lines > 1 ? 'w-2/3' : 'w-full'}`}
        ></div>
      ))}
    </div>
  );
}

export function SkeletonAvatar({ size = 'md', className }: { size?: 'sm' | 'md' | 'lg' | 'xl'; className?: string }) {
  const sizeClass = {
    sm: 'w-8 h-8',
    md: 'w-12 h-12',
    lg: 'w-16 h-16',
    xl: 'w-24 h-24'
  }[size];
  
  return (
    <div className={`${sizeClass} bg-gray-800 animate-pulse rounded-full ${className || ''}`}></div>
  );
}
