
import React, { useState } from 'react';
import { MOCK_OBSERVATIONS } from '../constants';
import { Observation } from '../types';
import { X, MapPin } from 'lucide-react';

const Observations: React.FC = () => {
  const [selectedObs, setSelectedObs] = useState<Observation | null>(null);

  return (
    <div className="min-h-screen pt-48 px-8 md:px-24 pb-24">
      <div className="max-w-7xl mx-auto mb-24 flex items-end gap-6">
        <h1 className="text-6xl font-extralight tracking-tighter">我见何物</h1>
        <div className="h-[1px] flex-grow bg-gray-100 mb-3"></div>
        <span className="text-xs tracking-[0.5em] text-gray-400 uppercase mb-2">Observations</span>
      </div>

      {/* Masonry-like Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-12 gap-y-24">
        {MOCK_OBSERVATIONS.map((obs, index) => (
          <div 
            key={obs.id}
            onClick={() => setSelectedObs(obs)}
            className="group cursor-pointer flex flex-col"
          >
            <div className="overflow-hidden bg-gray-100 aspect-square md:aspect-[4/5] relative mb-6">
              <img 
                src={obs.imageUrl} 
                alt={obs.title}
                className="w-full h-full object-cover grayscale transition-all duration-[1.5s] ease-out group-hover:grayscale-0 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/5 transition-colors duration-700"></div>
              
              <div className="absolute bottom-6 left-6 opacity-0 translate-y-4 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-700">
                <span className="text-[10px] tracking-[0.4em] text-white uppercase bg-black/20 backdrop-blur-sm px-3 py-1">
                  {obs.category}
                </span>
              </div>
            </div>
            
            <div className="px-1 transition-transform duration-700 group-hover:translate-x-2">
              <h3 className="text-lg font-light tracking-widest mb-2">{obs.title}</h3>
              <div className="flex items-center gap-2 text-[10px] tracking-[0.2em] text-gray-400 uppercase">
                <MapPin size={10} strokeWidth={1.5} />
                <span>{obs.location}</span>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Lightbox */}
      {selectedObs && (
        <div 
          className="fixed inset-0 z-[100] bg-black flex items-center justify-center p-8 animate-[fadeIn_0.5s_ease-out]"
          onClick={() => setSelectedObs(null)}
        >
          <button 
            className="absolute top-10 right-10 text-white/50 hover:text-white transition-colors"
            onClick={() => setSelectedObs(null)}
          >
            <X size={32} strokeWidth={1} />
          </button>
          
          <div className="w-full h-full flex flex-col md:flex-row items-center gap-12 max-w-7xl mx-auto" onClick={e => e.stopPropagation()}>
            <div className="w-full md:w-2/3 h-2/3 md:h-full flex items-center justify-center">
              <img 
                src={selectedObs.imageUrl} 
                alt={selectedObs.title} 
                className="max-w-full max-h-full object-contain"
              />
            </div>
            <div className="w-full md:w-1/3 flex flex-col justify-center text-white space-y-8">
              <span className="text-[10px] tracking-[0.5em] text-white/30 uppercase">{selectedObs.category}</span>
              <h2 className="text-4xl font-extralight tracking-widest leading-tight">{selectedObs.title}</h2>
              <div className="flex items-center gap-2 text-sm tracking-[0.2em] text-white/50">
                <MapPin size={14} strokeWidth={1} />
                <span>{selectedObs.location}</span>
              </div>
              <div className="w-12 h-[1px] bg-white/20"></div>
              <p className="text-white/60 font-light leading-loose text-sm italic">
                {selectedObs.description}
              </p>
            </div>
          </div>
        </div>
      )}

      <style>{`
        @keyframes fadeIn {
          from { opacity: 0; }
          to { opacity: 1; }
        }
      `}</style>
    </div>
  );
};

export default Observations;
