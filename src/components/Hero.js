import React from 'react';
import { BsChevronDown } from 'react-icons/bs';

const Hero = () => {
  return (
    <div className="flex flex-col items-center justify-between h-full">
      <h1 className="text-6xl text-white font-title flex-1 flex items-center">
        Space X
      </h1>
      <div className="h-28 w-28 rounded-full border border-white/10 flex items-center justify-center mb-10">
        <BsChevronDown className="text-4xl text-white/30" />
      </div>-
    </div>
  );
};

export default Hero;
