
import React from 'react';

const Logo: React.FC = () => {
  return (
    <div className="flex items-center gap-2">
      <div className="w-8 h-8 bg-white/10 border border-white/20 rounded-md flex items-center justify-center">
        <span className="text-white font-bold">DS</span>
      </div>
      <span className="font-semibold text-white">DesignStudio</span>
    </div>
  );
};

export default Logo;
