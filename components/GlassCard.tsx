
import React from 'react';

interface GlassCardProps {
  children: React.ReactNode;
  className?: string;
  onClick?: () => void;
}

const GlassCard: React.FC<GlassCardProps> = ({ children, className = '', onClick }) => {
  return (
    <div 
      onClick={onClick}
      className={`
        backdrop-blur-md bg-white/40 border border-white/20 shadow-sm
        transition-all duration-700 ease-out cursor-pointer group
        hover:shadow-xl hover:bg-white/60 hover:-translate-y-1
        ${className}
      `}
    >
      {children}
    </div>
  );
};

export default GlassCard;
