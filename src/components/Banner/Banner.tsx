import React from 'react';

const HiringBanner = () => {
  return (
    <div className="fixed lg:-top-20 -top-28 -right-[250px] z-45 transform rotate-50 origin-top-left bg-gradient-to-r from-neutral-800 to-neutral-600 text-white px-6 lg:py-2 py-1 shadow-xl font-semibold text-sm tracking-wider border border-white/10 w-[460px] text-center font-body lg:font-display rounded-full">
      <div className="relative inline-block">
        <span>Available for Hir</span>
        <span className="relative">
          e
          <span className="absolute -top-0 -right-2 w-3 h-3 rounded-full bg-red-600 animate-pulse"></span>
        </span>
      </div>
    </div>
  );
};

export default HiringBanner;
