
import React, { useState } from 'react';
import { MOCK_THOUGHTS, COLORS } from '../constants';
import GlassCard from '../components/GlassCard';
import { Thought } from '../types';
import { X } from 'lucide-react';

const Thoughts: React.FC = () => {
  const [selectedThought, setSelectedThought] = useState<Thought | null>(null);

  return (
    <div className="min-h-screen pt-48 px-8 md:px-24 pb-24 max-w-7xl mx-auto">
      <div className="mb-24 flex items-end gap-6">
        <h1 className="text-6xl font-extralight tracking-tighter">我想什么</h1>
        <div className="h-[1px] flex-grow bg-gray-100 mb-3"></div>
        <span className="text-xs tracking-[0.5em] text-gray-400 uppercase mb-2">Thoughts Flow</span>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
        {MOCK_THOUGHTS.map((thought, index) => (
          <GlassCard 
            key={thought.id} 
            className="p-10 flex flex-col h-[400px]"
            onClick={() => setSelectedThought(thought)}
          >
            <span className="text-[10px] tracking-[0.3em] text-gray-400 uppercase mb-8">
              {thought.date}
            </span>
            <h3 className="text-2xl font-light mb-6 group-hover:text-blue-900 transition-colors">
              {thought.title}
            </h3>
            <p className="text-gray-500 font-light text-sm leading-relaxed line-clamp-4">
              {thought.excerpt}
            </p>
            <div className="mt-auto flex items-center gap-2 group-hover:gap-4 transition-all duration-500">
              <div className="w-8 h-[1px] bg-gray-200 group-hover:bg-blue-300"></div>
              <span className="text-[10px] tracking-[0.5em] text-gray-300 uppercase">Read</span>
            </div>
          </GlassCard>
        ))}
      </div>

      {/* Thought Modal/Slide-in */}
      {selectedThought && (
        <div className="fixed inset-0 z-[100] flex justify-end">
          <div 
            className="absolute inset-0 bg-black/5 backdrop-blur-sm transition-opacity duration-700"
            onClick={() => setSelectedThought(null)}
          ></div>
          <div 
            className="relative w-full md:w-[600px] h-full bg-white shadow-2xl overflow-y-auto animate-[slideIn_0.8s_cubic-bezier(0.16,1,0.3,1)]"
          >
            <button 
              onClick={() => setSelectedThought(null)}
              className="absolute top-10 right-10 p-2 hover:bg-gray-100 rounded-full transition-colors"
            >
              <X size={24} strokeWidth={1} />
            </button>
            <div className="p-12 md:p-24">
              <span className="text-[10px] tracking-[0.5em] text-gray-300 uppercase block mb-12">
                {selectedThought.date}
              </span>
              <h2 className="text-4xl font-light mb-16 tracking-tight leading-tight">
                {selectedThought.title}
              </h2>
              <div className="w-12 h-[1px] bg-gray-200 mb-16"></div>
              <div className="prose prose-sm prose-gray max-w-none">
                <p className="text-lg font-light leading-loose text-gray-600 mb-8 italic border-l-2 border-gray-100 pl-6">
                  {selectedThought.excerpt}
                </p>
                <div className="text-gray-500 font-light leading-[2.2] text-justify space-y-6">
                  {selectedThought.content.split('\n').map((para, i) => (
                    <p key={i}>{para}</p>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      <style>{`
        @keyframes slideIn {
          from { transform: translateX(100%); }
          to { transform: translateX(0); }
        }
      `}</style>
    </div>
  );
};

export default Thoughts;
