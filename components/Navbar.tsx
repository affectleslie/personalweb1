
import React from 'react';
import { Page } from '../types';
import { COLORS } from '../constants';

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
    <nav className="fixed top-0 left-0 w-full z-50 px-8 py-10 flex justify-between items-center mix-blend-difference pointer-events-none">
      <div className="flex flex-col">
        <span className="text-sm font-light tracking-[0.3em] uppercase text-white pointer-events-auto cursor-pointer" onClick={() => onNavigate(Page.Home)}>
          LENS
        </span>
        <div className="w-8 h-[1px] bg-white/30 mt-1"></div>
      </div>
      
      <div className="flex gap-12 pointer-events-auto">
        {navItems.map((item) => (
          <button
            key={item.id}
            onClick={() => onNavigate(item.id)}
            className={`text-sm tracking-widest transition-all duration-500 hover:opacity-100 ${
              currentPage === item.id 
                ? 'text-white font-normal opacity-100' 
                : 'text-white/50 font-extralight opacity-50 hover:tracking-[0.2em]'
            }`}
            style={{ 
              color: currentPage === item.id ? 'white' : 'rgba(255,255,255,0.6)',
              borderBottom: currentPage === item.id ? `1px solid ${COLORS.accent}` : 'none'
            }}
          >
            {item.label}
          </button>
        ))}
      </div>
    </nav>
  );
};

export default Navbar;
