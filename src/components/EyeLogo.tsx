
import React from 'react';
import { cn } from '@/lib/utils';

interface EyeLogoProps {
  className?: string;
}

const EyeLogo: React.FC<EyeLogoProps> = ({ className }) => {
  return (
    <div className={cn("relative flex flex-col items-center", className)}>
      <img 
        src="/lovable-uploads/ac39d093-94a6-435e-b85e-ad5fc1c2ccfa.png" 
        alt="AI Eye" 
        className="w-[40%] object-contain mb-1"
      />
      <div className="flex flex-col items-center">
        <span className="font-display font-bold text-2xl md:text-4xl w-full text-center">
          <span className="text-black">my</span>
          <span className="text-blue-500">brain</span>
          <span className="text-orange-500">dev</span>
        </span>
        <span className="text-lg text-gray-600 mt-2">Povežimo se i razgovarajmo o vašim AI potrebama</span>
      </div>
    </div>
  );
};

export default EyeLogo;
