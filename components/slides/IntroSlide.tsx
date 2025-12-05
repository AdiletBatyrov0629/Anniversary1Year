import React from 'react';
import { motion } from 'framer-motion';
import { Heart } from 'lucide-react';
import { SlideData } from '../../types';

const IntroSlide: React.FC<{ data: SlideData; onAction?: () => void }> = ({ data, onAction }) => {
  return (
    <div className="flex flex-col items-center justify-center h-full p-6 text-center relative z-10">
      <motion.div
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ type: "spring", stiffness: 200 }}
        className="mb-6 p-5 bg-white/20 backdrop-blur-md text-accent rounded-full shadow-xl border border-white/30"
      >
        <Heart className="w-12 h-12 fill-current" />
      </motion.div>
      
      <motion.h1 
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        className="font-serif text-4xl md:text-6xl text-dark font-black mb-4 leading-tight tracking-tight drop-shadow-sm"
      >
        {data.title}
      </motion.h1>
      
      <motion.h2
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.2 }}
        className="font-sans text-2xl md:text-3xl text-accent font-bold mb-8"
      >
        {data.subtitle}
      </motion.h2>

      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.4 }}
        className="font-sans text-dark font-semibold text-xl md:text-2xl mb-10 max-w-xs leading-relaxed"
      >
        {data.content}
      </motion.p>

      {onAction && (
        <div className="relative z-50"> 
            <motion.button
              initial={{ y: 50, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.6 }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={(e) => {
                 e.stopPropagation();
                 e.preventDefault();
                 onAction();
              }}
              className="px-10 py-4 bg-accent text-white font-serif font-bold rounded-full shadow-xl text-xl hover:bg-accent/90 transition-colors cursor-pointer"
            >
              {data.buttonText}
            </motion.button>
        </div>
      )}
    </div>
  );
};

export default IntroSlide;