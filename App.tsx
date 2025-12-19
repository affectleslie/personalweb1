
import React, { useState } from 'react';
import Navbar from './components/Navbar.tsx';
import Home from './pages/Home.tsx';
import Thoughts from './pages/Thoughts.tsx';
import Observations from './pages/Observations.tsx';
import { Page } from './types.ts';

const App: React.FC = () => {
  const [currentPage, setCurrentPage] = useState<Page>(Page.Home);
  const [transitioning, setTransitioning] = useState(false);

  const handleNavigate = (page: Page) => {
    if (page === currentPage) return;
    setTransitioning(true);
    // 平滑切换动效：先淡出，再切换内容，最后淡入
    setTimeout(() => {
      setCurrentPage(page);
      window.scrollTo(0, 0);
      setTimeout(() => {
        setTransitioning(false);
      }, 50);
    }, 600);
  };

  const renderPage = () => {
    switch (currentPage) {
      case Page.Home: return <Home />;
      case Page.Thoughts: return <Thoughts />;
      case Page.Observations: return <Observations />;
      default: return <Home />;
    }
  };

  return (
    <div className="relative min-h-screen bg-[#fcfcfc]">
      <Navbar currentPage={currentPage} onNavigate={handleNavigate} />
      
      <main className={`transition-all duration-700 ease-in-out ${
        transitioning 
          ? 'opacity-0 translate-y-8 blur-lg scale-95' 
          : 'opacity-100 translate-y-0 blur-0 scale-100'
      }`}>
        {renderPage()}
      </main>

      {/* 装饰性暗角 */}
      <div className="fixed inset-0 pointer-events-none z-[60] shadow-[inset_0_0_150px_rgba(0,0,0,0.015)]"></div>
      
      <footer className="w-full py-20 flex flex-col items-center justify-center opacity-30">
        <div className="w-12 h-[1px] bg-black/20 mb-4"></div>
        <p className="text-[9px] tracking-[0.6em] uppercase font-light">
          The Lens · Curator's Sanctuary · 2024
        </p>
      </footer>
    </div>
  );
};

export default App;
