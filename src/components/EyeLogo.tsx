
import React from 'react';
import { cn } from '@/lib/utils';

interface EyeLogoProps {
  className?: string;
}

const EyeLogo: React.FC<EyeLogoProps> = ({ className }) => {
  return (
    <div className={cn("relative", className)}>
      <img 
        src="/lovable-uploads/ac39d093-94a6-435e-b85e-ad5fc1c2ccfa.png" 
        alt="AI Eye" 
        className="w-full h-full object-contain"
      />
    </div>
  );
};

export default EyeLogo;
