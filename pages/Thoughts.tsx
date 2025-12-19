
import React, { useState } from 'react';
import { MOCK_THOUGHTS, COLORS } from '../constants.tsx';
import GlassCard from '../components/GlassCard.tsx';
import { Thought } from '../types.ts';
import { X } from 'lucide-react';

const Thoughts: React.FC = () => {
  const [selectedThought, setSelectedThought] = useState<Thought | null>(null);

  return (
    <div className="min-h-screen pt-48 px-8 md:px-24 pb-24 max-w-7xl mx-auto">
      <div className="mb-24 flex items-end gap-6 animate-[fadeInUp_1s_ease-out]">
        <h1 className="text-5xl md:text-6xl font-extralight tracking-tighter">我想什么</h1>
        <div className="h-[1px] flex-grow bg-gray-100 mb-3 opacity-50"></div>
        <span className="text-[10px] tracking-[0.5em] text-gray-400 uppercase mb-2">Thoughts Flow</span>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
        {MOCK_THOUGHTS.map((thought, index) => (
          <div 
            key={thought.id} 
            className="animate-[fadeInUp_1s_ease-out_forwards]" 
            style={{ animationDelay: `${index * 0.1}s`, opacity: 0 }}
          >
            <GlassCard 
              className="p-10 flex flex-col h-[400px]"
              onClick={() => setSelectedThought(thought)}
            >
              <span className="text-[9px] tracking-[0.3em] text-gray-400 uppercase mb-8">
                {thought.date}
              </span>
              <h3 className="text-2xl font-light mb-6 leading-tight group-hover:text-blue-900 transition-colors">
                {thought.title}
              </h3>
              <p className="text-gray-500 font-light text-sm leading-loose line-clamp-4">
                {thought.excerpt}
              </p>
              <div className="mt-auto flex items-center gap-2 group-hover:gap-4 transition-all duration-700">
                <div className="w-8 h-[1px] bg-gray-200 group-hover:bg-blue-300"></div>
                <span className="text-[9px] tracking-[0.5em] text-gray-300 uppercase">Focus</span>
              </div>
            </GlassCard>
          </div>
        ))}
      </div>

      {selectedThought && (
        <div className="fixed inset-0 z-[100] flex justify-end">
          <div 
            className="absolute inset-0 bg-black/5 backdrop-blur-md transition-opacity duration-1000"
            onClick={() => setSelectedThought(null)}
          ></div>
          <div 
            className="relative w-full md:w-[600px] h-full bg-white shadow-2xl overflow-y-auto animate-[slideIn_0.8s_cubic-bezier(0.16,1,0.3,1)]"
          >
            <button 
              onClick={() => setSelectedThought(null)}
              className="absolute top-10 right-10 p-2 hover:bg-gray-100 rounded-full transition-colors z-10"
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
              <div className="prose prose-gray max-w-none">
                <p className="text-lg font-light leading-relaxed text-gray-600 mb-12 italic border-l-2 border-gray-100 pl-8">
                  {selectedThought.excerpt}
                </p>
                <div className="text-gray-500 font-light leading-[2.4] text-justify space-y-8">
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
        @keyframes fadeInUp {
          from { opacity: 0; transform: translateY(40px); }
          to { opacity: 1; transform: translateY(0); }
        }
        @keyframes slideIn {
          from { transform: translateX(100%); }
          to { transform: translateX(0); }
        }
      `}</style>
    </div>
  );
};

export default Thoughts;
