import React, { useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { slides } from '../data';
import SlideRenderer from './SlideRenderer';
import ProgressBar from './ProgressBar';

const WrappedStory: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState(0);

  const handleNext = () => {
    if (currentIndex < slides.length - 1) {
      setDirection(1);
      setCurrentIndex((prev) => prev + 1);
    }
  };

  const handlePrev = () => {
    if (currentIndex > 0) {
      setDirection(-1);
      setCurrentIndex((prev) => prev - 1);
    }
  };

  const handleRestart = () => {
    setDirection(-1);
    setCurrentIndex(0);
  };

  const slideVariants = {
    enter: (direction: number) => ({
      x: direction > 0 ? '100%' : '-100%',
      opacity: 0,
    }),
    center: {
      zIndex: 10,
      x: 0,
      opacity: 1,
    },
    exit: (direction: number) => ({
      zIndex: 0,
      x: direction < 0 ? '100%' : '-100%',
      opacity: 0,
    }),
  };

  return (
    <div className="relative w-full h-full bg-bg overflow-hidden font-sans select-none">
      <ProgressBar total={slides.length} current={currentIndex} />
      
      <div className="absolute inset-0 z-30 flex pointer-events-none">
          <div className="w-[30%] h-full cursor-pointer active:bg-black/5 transition-colors pointer-events-auto" onClick={handlePrev} />
          <div className="w-[40%] h-full" /> 
          <div className="w-[30%] h-full cursor-pointer active:bg-black/5 transition-colors pointer-events-auto" onClick={handleNext} />
      </div>

      <AnimatePresence initial={false} custom={direction} mode="popLayout">
        <motion.div
          key={currentIndex}
          custom={direction}
          variants={slideVariants}
          initial="enter"
          animate="center"
          exit="exit"
          transition={{ x: { type: "spring", stiffness: 300, damping: 30 }, opacity: { duration: 0.2 } }}
          className="absolute top-0 left-0 w-full h-full" 
        >
          <div className="w-full h-full pointer-events-auto">
              <SlideRenderer 
                  data={slides[currentIndex]} 
                  onNext={handleNext} 
                  onPrev={handlePrev}
                  onRestart={handleRestart}
              />
          </div>
        </motion.div>
      </AnimatePresence>
      
      <div className="absolute inset-0 pointer-events-none opacity-[0.04] mix-blend-overlay z-50" 
           style={{ backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")` }} 
      />
    </div>
  );
};

export default WrappedStory;