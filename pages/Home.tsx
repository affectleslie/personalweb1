
import React, { useEffect, useState } from 'react';
import { COLORS } from '../constants';
import { ArrowDown } from 'lucide-react';

const Home: React.FC = () => {
  const [scrolled, setScrolled] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const opacity = Math.max(0, 1 - scrolled / 500);
  const translateY = -scrolled * 0.3;

  return (
    <div className="min-h-[150vh] relative flex flex-col items-center justify-start pt-[30vh]">
      <div 
        className="sticky top-[30vh] w-full px-8 md:px-24 flex flex-col md:flex-row items-baseline justify-between"
        style={{ opacity, transform: `translateY(${translateY}px)` }}
      >
        <div className="w-full md:w-2/3">
          <h1 className="text-[12vw] md:text-[10vw] font-thin leading-none tracking-tighter text-outline mb-12">
            Z. ARCHER
          </h1>
          <p className="text-lg md:text-xl font-light tracking-[0.2em] text-gray-500 ml-4">
            观察者 · 收集者 · 重构者
          </p>
        </div>
        
        <div className="w-full md:w-1/3 mt-24 md:mt-0 flex flex-col gap-6 items-end text-right">
          <p className="max-w-xs font-light text-sm leading-relaxed text-gray-400">
            这个网站是访客了解主人思想与见闻的唯一窗口。<br/>
            它不是一个功能堆砌的站点，<br/>
            而是一个沉浸式、画廊化的数字空间。
          </p>
        </div>
      </div>

      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce opacity-40">
        <ArrowDown size={20} strokeWidth={1} />
      </div>

      <div className="w-full max-w-6xl mt-[60vh] px-8 md:px-24 pb-48 opacity-0 animate-[fadeIn_2s_ease-out_forwards]">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-24 items-center">
          <div className="aspect-[3/4] overflow-hidden bg-gray-100 relative group">
            <img 
              src="https://picsum.photos/seed/portrait/800/1200?grayscale" 
              alt="Portrait" 
              className="w-full h-full object-cover transition-transform duration-[3s] group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-white/5 backdrop-blur-[2px] pointer-events-none"></div>
          </div>
          <div className="space-y-12">
            <h2 className="text-3xl font-light tracking-widest uppercase">精神肖像</h2>
            <p className="text-gray-500 font-light leading-loose">
              与其说这是一个身份的描述，不如说这是一次长期的“采样”。在喧嚣的时代中寻找静谧，在琐碎的生活中挖掘结构。我的关注点如同一枚透镜，在宏大叙事与微观感知之间不断对焦。
            </p>
            <div className="flex gap-8 items-center">
              <a href="mailto:hello@lens.digital" className="text-xs tracking-[0.4em] uppercase hover:text-blue-400 transition-colors">Contact</a>
              <div className="w-12 h-[1px] bg-gray-200"></div>
              <span className="text-xs tracking-[0.4em] uppercase text-gray-300">Instagram</span>
            </div>
          </div>
        </div>
      </div>
      
      <style>{`
        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(30px); }
          to { opacity: 1; transform: translateY(0); }
        }
      `}</style>
    </div>
  );
};

export default Home;
