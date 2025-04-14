
import React from 'react';
import { cn } from '@/lib/utils';

interface EyeLogoProps {
  className?: string;
}

const EyeLogo: React.FC<EyeLogoProps> = ({ className }) => {
  return (
    <div className={cn("relative flex flex-col items-center", className)}>
      <span className="font-display font-bold text-2xl md:text-4xl w-full text-center">
        <span className="text-black">my</span>
        <span className="text-blue-500">br<span className="text-blue-500 relative">ai<span className="absolute inset-0 text-transparent" style={{ WebkitTextStroke: '1px #8E9196' }}>ai</span></span>n</span>
        <span className="text-orange-500">dev</span>
      </span>
    </div>
  );
};

export default EyeLogo;
