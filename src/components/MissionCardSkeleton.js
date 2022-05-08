import React from 'react';

const MissionCardSkeleton = () => {
  return (
    <div className="w-full break-inside-avoid mb-10">
      <div className="w-full h-72 border border-white/5 rounded-lg overflow-hidden bg-[#0b193c]"></div>
      <div class="relative px-4 -mt-16">
        <div class="bg-[#0d1f4e] p-6 rounded-lg shadow-lg animate-pulse h-40"></div>
      </div>
    </div>
  );
};

export default MissionCardSkeleton;
