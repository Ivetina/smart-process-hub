
import React from 'react';

const EyeLogo = ({ className = "" }: { className?: string }) => {
  return (
    <svg 
      viewBox="0 0 100 60" 
      xmlns="http://www.w3.org/2000/svg"
      className={`w-12 h-8 ${className}`} // Base size, will be adjusted in parent components
    >
      {/* Outer eye shape */}
      <ellipse cx="50" cy="30" rx="48" ry="28" fill="none" stroke="black" strokeWidth="2" />
      
      {/* Iris with circuit pattern */}
      <circle cx="50" cy="30" r="18" fill="#e7edf7" stroke="#2563eb" strokeWidth="1.5" />
      
      {/* Circuit patterns in iris */}
      <path d="M38 30 H62" stroke="#2563eb" strokeWidth="1" />
      <path d="M50 18 V42" stroke="#2563eb" strokeWidth="1" />
      <path d="M40 20 L60 40" stroke="#2563eb" strokeWidth="1" />
      <path d="M40 40 L60 20" stroke="#2563eb" strokeWidth="1" />
      
      {/* Circuit nodes/processors */}
      <circle cx="50" cy="30" r="2.5" fill="#2563eb" />
      <circle cx="38" cy="30" r="1.5" fill="#2563eb" />
      <circle cx="62" cy="30" r="1.5" fill="#2563eb" />
      <circle cx="50" cy="18" r="1.5" fill="#2563eb" />
      <circle cx="50" cy="42" r="1.5" fill="#2563eb" />
      <circle cx="40" cy="20" r="1.5" fill="#2563eb" />
      <circle cx="60" cy="40" r="1.5" fill="#2563eb" />
      <circle cx="40" cy="40" r="1.5" fill="#2563eb" />
      <circle cx="60" cy="20" r="1.5" fill="#2563eb" />
      
      {/* Copper traces/wires */}
      <path d="M35 25 Q42 15, 50 15 Q58 15, 65 25" stroke="#2563eb" strokeWidth="1" fill="none" />
      <path d="M35 35 Q42 45, 50 45 Q58 45, 65 35" stroke="#2563eb" strokeWidth="1" fill="none" />
      
      {/* Pupil */}
      <circle cx="50" cy="30" r="8" fill="#1e293b" />
      
      {/* Light reflection */}
      <circle cx="46" cy="27" r="2" fill="white" opacity="0.7" />
    </svg>
  );
};

export default EyeLogo;
