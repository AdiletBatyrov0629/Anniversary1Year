import React from 'react';
import { motion } from 'framer-motion';

interface ProgressBarProps {
  total: number;
  current: number;
}

const ProgressBar: React.FC<ProgressBarProps> = ({ total, current }) => {
  return (
    <div className="absolute top-4 left-0 w-full z-50 px-2 flex gap-1">
      {Array.from({ length: total }).map((_, index) => (
        <div 
          key={index} 
          className="h-1 flex-1 bg-white/30 rounded-full overflow-hidden backdrop-blur-sm"
        >
          <motion.div
            className="h-full bg-accent"
            initial={{ width: "0%" }}
            animate={{
              width: index < current ? "100%" : index === current ? "100%" : "0%" 
            }}
            transition={{ 
              duration: index < current ? 0 : (index === current ? 5 : 0.3),
              ease: "linear"
            }}
          />
        </div>
      ))}
    </div>
  );
};

export default ProgressBar;