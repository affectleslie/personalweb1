
import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Thoughts from './pages/Thoughts';
import Observations from './pages/Observations';
import { Page } from './types';

const App: React.FC = () => {
  const [currentPage, setCurrentPage] = useState<Page>(Page.Home);
  const [transitioning, setTransitioning] = useState(false);

  const handleNavigate = (page: Page) => {
    if (page === currentPage) return;
    setTransitioning(true);
    setTimeout(() => {
      setCurrentPage(page);
      window.scrollTo(0, 0);
      setTransitioning(false);
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
    <div className="relative min-h-screen bg-[#fcfcfc] transition-colors duration-1000">
      <Navbar currentPage={currentPage} onNavigate={handleNavigate} />
      
      <main className={`transition-all duration-1000 ease-in-out ${transitioning ? 'opacity-0 translate-y-4 blur-sm scale-95' : 'opacity-100 translate-y-0 blur-0 scale-100'}`}>
        {renderPage()}
      </main>

      {/* Decorative Grain / Vignette */}
      <div className="fixed inset-0 pointer-events-none z-[60] shadow-[inset_0_0_150px_rgba(0,0,0,0.02)]"></div>
      
      {/* Footer (Minimal) */}
      <footer className="w-full py-12 flex flex-col items-center justify-center opacity-20 hover:opacity-100 transition-opacity duration-1000">
        <div className="w-8 h-[1px] bg-black mb-4"></div>
        <p className="text-[10px] tracking-[0.5em] uppercase">© LENS DIGITAL PORTFOLIO 2024</p>
      </footer>
    </div>
  );
};

export default App;
