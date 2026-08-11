import React from 'react';

export default function SkeletonLoader() {
  return (
    <div className="p-8 max-w-7xl mx-auto w-full space-y-8 animate-[fadeIn_0.2s_ease-in-out]">
      {/* Header Skeleton */}
      <div className="flex flex-col md:flex-row md:items-end justify-between border-b border-black/10 pb-6 gap-4">
        <div className="space-y-3 w-full md:w-1/2">
          {/* Main Title Placeholder */}
          <div className="h-10 bg-black/5 rounded-xl w-3/4 relative overflow-hidden">
            {/* Shimmer sweep effect */}
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-brand-lime/10 to-transparent -translate-x-full animate-[shimmer_1.5s_infinite_linear]" />
          </div>
          {/* Subtext Placeholder */}
          <div className="h-5 bg-black/5 rounded-lg w-1/2 relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-brand-lime/10 to-transparent -translate-x-full animate-[shimmer_1.5s_infinite_linear]" />
          </div>
        </div>
        {/* Dropdowns Placeholders */}
        <div className="flex gap-2 w-full md:w-auto">
          <div className="h-10 bg-black/5 rounded-lg w-28 relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-brand-lime/10 to-transparent -translate-x-full animate-[shimmer_1.5s_infinite_linear]" />
          </div>
          <div className="h-10 bg-black/5 rounded-lg w-28 relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-brand-lime/10 to-transparent -translate-x-full animate-[shimmer_1.5s_infinite_linear]" />
          </div>
        </div>
      </div>

      {/* Grid skeleton matching the 3-column layout */}
      <div className="grid grid-autofit gap-6">
        {Array.from({ length: 3 }).map((_, idx) => (
          <div
            key={idx}
            className="bg-white p-6 rounded-3xl border border-black/5 flex flex-col justify-between h-[280px]"
          >
            <div>
              {/* Top tag & status */}
              <div className="flex justify-between items-start mb-4">
                <div className="h-6 w-16 bg-black/5 rounded-full relative overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-brand-lime/10 to-transparent -translate-x-full animate-[shimmer_1.5s_infinite_linear]" />
                </div>
                <div className="h-5 w-12 bg-black/5 rounded-md relative overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-brand-lime/10 to-transparent -translate-x-full animate-[shimmer_1.5s_infinite_linear]" />
                </div>
              </div>
              
              {/* Card Title */}
              <div className="h-8 bg-black/5 rounded-xl w-4/5 mb-4 relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-brand-lime/10 to-transparent -translate-x-full animate-[shimmer_1.5s_infinite_linear]" />
              </div>
              
              {/* Details Lines */}
              <div className="space-y-2 mb-6">
                <div className="h-4 bg-black/5 rounded-md w-2/3 relative overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-brand-lime/10 to-transparent -translate-x-full animate-[shimmer_1.5s_infinite_linear]" />
                </div>
                <div className="h-4 bg-black/5 rounded-md w-3/4 relative overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-brand-lime/10 to-transparent -translate-x-full animate-[shimmer_1.5s_infinite_linear]" />
                </div>
              </div>
            </div>

            {/* Card Footer */}
            <div className="pt-4 border-t border-black/5 flex items-center justify-between mt-auto">
              <div className="h-6 w-20 bg-black/5 rounded-md relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-brand-lime/10 to-transparent -translate-x-full animate-[shimmer_1.5s_infinite_linear]" />
              </div>
              <div className="h-9 w-24 bg-black/5 rounded-lg relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-brand-lime/10 to-transparent -translate-x-full animate-[shimmer_1.5s_infinite_linear]" />
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
