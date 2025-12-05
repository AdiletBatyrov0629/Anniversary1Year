import React, { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { SlideData } from '../../types';
import { Image as ImageIcon } from 'lucide-react';

const GallerySlide: React.FC<{ data: SlideData }> = ({ data }) => {
  const images = data.images || [];
  const [activeIndex, setActiveIndex] = useState(0);
  const lastScrollTime = useRef(0);

  const handleWheel = (e: React.WheelEvent) => {
    const now = Date.now();
    if (now - lastScrollTime.current < 100) return;

    lastScrollTime.current = now;

    if (e.deltaY > 0) {
      setActiveIndex((prev) => (prev + 1) % images.length);
    } else {
      setActiveIndex((prev) => (prev - 1 + images.length) % images.length);
    }
  };

  return (
    <div 
        className="h-full w-full p-4 flex flex-col pt-14"
        onWheel={handleWheel} 
    >
        <div className="z-10 mb-4 relative text-center shrink-0">
            <h2 className="font-serif text-2xl md:text-3xl text-dark font-black uppercase tracking-tight bg-bg/90 inline-block px-4 py-2 rounded-lg">
                {data.title}
            </h2>
        </div>

      <div className="relative w-full flex-1 mt-4 flex justify-center items-center perspective-1000">
        <div className="relative w-64 max-w-[80%] aspect-[3/4]">
            {images.map((img, index) => {
                const offset = (index - activeIndex + images.length) % images.length;
                if (offset > 2) return null;

                return (
                  <motion.div
                    key={img}
                    layout
                    initial={false}
                    animate={{ 
                        scale: 1 - offset * 0.05, 
                        y: offset * 15,
                        rotate: offset === 0 ? 0 : (index % 2 === 0 ? 3 : -3), 
                        opacity: 1 - offset * 0.2,
                        zIndex: images.length - offset 
                    }}
                    transition={{ type: "spring", stiffness: 300, damping: 30 }}
                    className="absolute inset-0 bg-white p-2 shadow-xl rounded-lg border border-dark/5"
                  >
                    <div className="w-full h-full overflow-hidden rounded bg-gray-200 relative group">
                        <img 
                            src={img} 
                            alt={`Memory`} 
                            className="w-full h-full object-cover pointer-events-none" 
                            onError={(e) => {
                                e.currentTarget.style.display = 'none';
                                const parent = e.currentTarget.parentElement;
                                if(parent) {
                                     const fallback = parent.querySelector('.fallback-icon');
                                     if(fallback) (fallback as HTMLElement).style.display = 'flex';
                                }
                            }}
                        />
                        <div className="fallback-icon hidden absolute inset-0 flex-col items-center justify-center text-gray-400 -z-10 bg-gray-100">
                            <ImageIcon size={32} className="mb-2 opacity-50"/>
                            <span className="text-xs font-bold">No Image</span>
                        </div>
                    </div>
                  </motion.div>
                );
            })}
        </div>
      </div>
      <div className="h-8 text-center z-10 opacity-50 font-sans text-xs font-bold uppercase tracking-widest mt-2 shrink-0 hidden md:block">
        Крути колесико вверх
      </div>
    </div>
  );
};

export default GallerySlide;