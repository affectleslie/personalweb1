
import React, { useState } from 'react';
import { MOCK_OBSERVATIONS } from '../constants.tsx';
import { Observation } from '../types.ts';
import { X, MapPin } from 'lucide-react';

const Observations: React.FC = () => {
  const [selectedObs, setSelectedObs] = useState<Observation | null>(null);

  return (
    <div className="min-h-screen pt-48 px-8 md:px-24 pb-24">
      <div className="max-w-7xl mx-auto mb-24 flex items-end gap-6 animate-[fadeInUp_1s_ease-out]">
        <h1 className="text-5xl md:text-6xl font-extralight tracking-tighter">我见何物</h1>
        <div className="h-[1px] flex-grow bg-gray-100 mb-3 opacity-50"></div>
        <span className="text-[10px] tracking-[0.5em] text-gray-400 uppercase mb-2">Observations</span>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-12 gap-y-24">
        {MOCK_OBSERVATIONS.map((obs, index) => (
          <div 
            key={obs.id}
            onClick={() => setSelectedObs(obs)}
            className="group cursor-pointer flex flex-col animate-[fadeInUp_1s_ease-out_forwards]"
            style={{ animationDelay: `${index * 0.15}s`, opacity: 0 }}
          >
            <div className="overflow-hidden bg-gray-100 aspect-square md:aspect-[4/5] relative mb-8">
              <img 
                src={obs.imageUrl} 
                alt={obs.title}
                className="w-full h-full object-cover grayscale transition-all duration-[2s] ease-out group-hover:grayscale-0 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-1000"></div>
              
              <div className="absolute bottom-8 left-8 opacity-0 translate-y-4 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-700">
                <span className="text-[9px] tracking-[0.4em] text-white uppercase bg-black/40 backdrop-blur-md px-4 py-2 border border-white/10">
                  {obs.category}
                </span>
              </div>
            </div>
            
            <div className="px-1 transition-transform duration-700 group-hover:translate-x-3">
              <h3 className="text-xl font-light tracking-widest mb-3">{obs.title}</h3>
              <div className="flex items-center gap-2 text-[10px] tracking-[0.3em] text-gray-400 uppercase font-extralight">
                <MapPin size={12} strokeWidth={1} />
                <span>{obs.location}</span>
              </div>
            </div>
          </div>
        ))}
      </div>

      {selectedObs && (
        <div 
          className="fixed inset-0 z-[100] bg-black/95 flex items-center justify-center p-8 animate-[fadeIn_0.8s_ease-out]"
          onClick={() => setSelectedObs(null)}
        >
          <button 
            className="absolute top-10 right-10 text-white/30 hover:text-white transition-colors p-4"
            onClick={() => setSelectedObs(null)}
          >
            <X size={32} strokeWidth={1} />
          </button>
          
          <div className="w-full h-full flex flex-col md:flex-row items-center gap-16 max-w-7xl mx-auto" onClick={e => e.stopPropagation()}>
            <div className="w-full md:w-3/5 h-[50vh] md:h-full flex items-center justify-center">
              <img 
                src={selectedObs.imageUrl} 
                alt={selectedObs.title} 
                className="max-w-full max-h-full object-contain shadow-2xl"
              />
            </div>
            <div className="w-full md:w-2/5 flex flex-col justify-center text-white space-y-10">
              <span className="text-[10px] tracking-[0.6em] text-white/40 uppercase">{selectedObs.category}</span>
              <h2 className="text-5xl font-extralight tracking-[0.1em] leading-tight">{selectedObs.title}</h2>
              <div className="flex items-center gap-3 text-sm tracking-[0.3em] text-white/60 font-extralight">
                <MapPin size={16} strokeWidth={1} />
                <span>{selectedObs.location}</span>
              </div>
              <div className="w-16 h-[1px] bg-white/10"></div>
              <p className="text-white/50 font-light leading-loose text-base italic tracking-wide">
                “ {selectedObs.description} ”
              </p>
            </div>
          </div>
        </div>
      )}

      <style>{`
        @keyframes fadeInUp {
          from { opacity: 0; transform: translateY(40px); }
          to { opacity: 1; transform: translateY(0); }
        }
        @keyframes fadeIn {
          from { opacity: 0; }
          to { opacity: 1; }
        }
      `}</style>
    </div>
  );
};

export default Observations;
