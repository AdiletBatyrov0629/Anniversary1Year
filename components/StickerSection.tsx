import React, { useRef } from 'react';
import { motion } from 'framer-motion';
import { stickers } from '../data';

const StickerSection: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  return (
    <div 
        ref={containerRef}
        className="relative w-full h-screen flex items-center justify-center overflow-hidden bg-bg py-20 z-30"
    >
      <h2 className="font-serif font-black text-[30vw] leading-none text-dark/5 select-none absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none">
        МЫ
      </h2>

      <div className="absolute inset-0 w-full h-full">
        {stickers.map((sticker, index) => {
          const randomTop = 20 + Math.random() * 60; 
          const randomLeft = 10 + Math.random() * 80;

          return (
            <motion.div
              key={index}
              drag
              dragMomentum={true}
              whileHover={{ scale: 1.1, cursor: 'grab', zIndex: 50 }}
              whileDrag={{ scale: 1.2, cursor: 'grabbing', zIndex: 100 }}
              initial={{ 
                opacity: 0, 
                scale: 0.8,
                y: 50
              }}
              whileInView={{ 
                opacity: 1, 
                scale: 1,
                y: 0,
                rotate: sticker.rotate 
              }}
              viewport={{ once: true }}
              style={{ 
                backgroundColor: sticker.bg, 
                color: sticker.color,
                position: 'absolute',
                top: `${randomTop}%`,
                left: `${randomLeft}%`,
                transform: 'translate(-50%, -50%)' 
              }}
              className="px-6 py-3 rounded-full shadow-xl font-sans font-bold text-xl md:text-3xl whitespace-nowrap select-none border-2 border-dark/10"
            >
              {sticker.text}
            </motion.div>
          );
        })}
      </div>
      
      <div className="absolute bottom-10 text-dark/40 font-sans text-sm font-bold uppercase tracking-widest animate-bounce pointer-events-none">
        Покидайся словами любви
      </div>
    </div>
  );
};

export default StickerSection;