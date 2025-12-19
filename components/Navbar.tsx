
import React from 'react';
import { Page } from '../types.ts';
import { COLORS } from '../constants.tsx';

interface NavbarProps {
  currentPage: Page;
  onNavigate: (page: Page) => void;
}

const Navbar: React.FC<NavbarProps> = ({ currentPage, onNavigate }) => {
  const navItems = [
    { id: Page.Home, label: '首页' },
    { id: Page.Thoughts, label: '想法' },
    { id: Page.Observations, label: '见闻' },
  ];

  return (
    <nav className="fixed top-0 left-0 w-full z-50 px-8 py-10 flex justify-between items-center mix-blend-difference">
      <div className="flex flex-col group cursor-pointer pointer-events-auto" onClick={() => onNavigate(Page.Home)}>
        <span className="text-sm font-light tracking-[0.4em] uppercase text-white transition-all duration-700 group-hover:tracking-[0.6em]">
          LENS
        </span>
        <div className="w-8 h-[1px] bg-white/30 mt-1 transition-all duration-700 group-hover:w-12"></div>
      </div>
      
      <div className="flex gap-12 pointer-events-auto">
        {navItems.map((item) => (
          <button
            key={item.id}
            onClick={() => onNavigate(item.id)}
            className={`text-xs tracking-[0.3em] transition-all duration-700 ${
              currentPage === item.id 
                ? 'text-white font-normal opacity-100' 
                : 'text-white/40 font-extralight hover:text-white/80'
            }`}
          >
            <span className="relative pb-1">
              {item.label}
              {currentPage === item.id && (
                <span 
                  className="absolute bottom-0 left-0 w-full h-[1px] animate-[grow_0.6s_ease-out_forwards]" 
                  style={{ backgroundColor: COLORS.accent }}
                />
              )}
            </span>
          </button>
        ))}
      </div>
      <style>{`
        @keyframes grow {
          from { width: 0; }
          to { width: 100%; }
        }
      `}</style>
    </nav>
  );
};

export default Navbar;
