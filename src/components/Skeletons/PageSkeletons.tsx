import React from 'react';
import { SkeletonBlock, SkeletonText, SkeletonAvatar } from './BaseSkeleton';
import RouteLoader from './RouteLoader';

export function DirectorySkeleton() {
  return (
    <RouteLoader>
      <div className="pt-24 min-h-screen bg-[#05110a] px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto w-full">
        <div className="flex justify-between items-center mb-8">
          <SkeletonText lines={1} className="w-48 h-10" />
          <SkeletonBlock className="w-32 h-10" />
        </div>
        
        {/* Filter Bar */}
        <div className="flex gap-4 mb-8 overflow-x-hidden">
          <SkeletonBlock className="w-24 h-10" />
          <SkeletonBlock className="w-24 h-10" />
          <SkeletonBlock className="w-24 h-10" />
          <SkeletonBlock className="w-24 h-10" />
        </div>

        {/* Grid */}
        <div className="grid grid-autofit gap-6">
          {Array.from({ length: 6 }).map((_, i) => (
            <div key={i} className="bg-[#0a1a12] rounded-2xl p-4 border border-white/5">
              <SkeletonBlock className="w-full aspect-video mb-4 rounded-xl" />
              <SkeletonText lines={1} className="w-3/4 mb-2 h-6" />
              <SkeletonText lines={2} className="w-full mb-4" />
              <div className="flex justify-between items-center pt-4 border-t border-white/10">
                <SkeletonBlock className="w-16 h-6 rounded" />
                <SkeletonBlock className="w-20 h-8 rounded-lg" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </RouteLoader>
  );
}

export function HeroGridSkeleton() {
  return (
    <RouteLoader>
      <div className="pt-24 min-h-screen bg-[#05110a] w-full">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col items-center text-center pb-20">
          <SkeletonText lines={1} className="w-3/4 max-w-[600px] h-16 md:h-24 mb-6" />
          <SkeletonText lines={2} className="w-1/2 max-w-[400px] mb-8" />
          <div className="flex gap-4">
            <SkeletonBlock className="w-40 h-12 rounded-xl" />
            <SkeletonBlock className="w-40 h-12 rounded-xl" />
          </div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="grid grid-autofit gap-6">
            {Array.from({ length: 4 }).map((_, i) => (
              <SkeletonBlock key={i} className="w-full h-80 rounded-2xl" />
            ))}
          </div>
        </div>
      </div>
    </RouteLoader>
  );
}

export function DetailSkeleton() {
  return (
    <RouteLoader>
      <div className="pt-24 min-h-screen bg-[#05110a] w-full">
        {/* Cover */}
        <SkeletonBlock className="w-full h-[40vh] min-h-[300px] rounded-none border-b border-white/10" />
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div className="lg:col-span-2 space-y-8">
              <SkeletonText lines={1} className="w-2/3 h-12 mb-4" />
              <div className="flex gap-4 mb-8 border-b border-white/10 pb-4">
                <SkeletonBlock className="w-24 h-8 rounded-full" />
                <SkeletonBlock className="w-24 h-8 rounded-full" />
                <SkeletonBlock className="w-24 h-8 rounded-full" />
              </div>
              
              <div className="space-y-6">
                <SkeletonText lines={4} />
                <SkeletonText lines={3} />
              </div>
            </div>
            
            <div className="lg:col-span-1">
              <div className="bg-[#0a1a12] rounded-2xl p-6 border border-white/10 space-y-6">
                <SkeletonBlock className="w-full h-12 rounded-xl" />
                <div className="space-y-4">
                  <SkeletonText lines={1} className="w-full h-16" />
                  <SkeletonText lines={1} className="w-full h-16" />
                  <SkeletonText lines={1} className="w-full h-16" />
                </div>
                <SkeletonBlock className="w-full h-12 rounded-xl mt-4" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </RouteLoader>
  );
}
