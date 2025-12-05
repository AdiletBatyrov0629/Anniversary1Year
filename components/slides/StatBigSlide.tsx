import React, { useEffect, useState } from 'react';
import { motion, useSpring, useTransform } from 'framer-motion';
import { Calendar, Heart, MessageCircle, Clock } from 'lucide-react';
import { SlideData } from '../../types';

const icons: Record<string, any> = {
  calendar: Calendar,
  heart: Heart,
  message: MessageCircle,
  clock: Clock
};

const StatBigSlide: React.FC<{ data: SlideData }> = ({ data }) => {
  const Icon = data.statIcon ? icons[data.statIcon] || Heart : Heart;
  
  const spring = useSpring(0, { bounce: 0, duration: 2000 });
  const value = useTransform(spring, (current) => Math.floor(current));
  const [displayValue, setDisplayValue] = useState(0);

  useEffect(() => {
    spring.set(typeof data.statValue === 'number' ? data.statValue : 0);
    const unsubscribe = value.on("change", (v) => setDisplayValue(v));
    return () => unsubscribe();
  }, [spring, value, data.statValue]);

  const targetValue = typeof data.statValue === 'number' ? data.statValue : 0;
  const isLongNumber = targetValue.toString().length > 5;
  const fontSizeClass = isLongNumber ? "text-5xl md:text-6xl" : "text-7xl md:text-8xl";

  return (
    <div className="flex flex-col items-center justify-center h-full p-4 text-center relative overflow-hidden">
      <motion.div 
        animate={{ rotate: 360 }}
        transition={{ duration: 60, repeat: Infinity, ease: "linear" }}
        className="absolute -top-20 -right-20 w-64 h-64 bg-accent/20 rounded-full blur-3xl"
      />
      <motion.div 
        animate={{ rotate: -360 }}
        transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
        className="absolute bottom-10 -left-10 w-48 h-48 bg-secondary/30 rounded-full blur-3xl"
      />

      <motion.div
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ type: "spring", stiffness: 200 }}
        className="mb-6 p-4 bg-white/30 rounded-full backdrop-blur-sm"
      >
        <Icon className="w-10 h-10 text-dark" />
      </motion.div>

      <motion.h2 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="font-serif text-2xl md:text-3xl text-dark mb-2 font-bold"
      >
        {data.title}
      </motion.h2>

      <div className="my-2 relative z-10 w-full">
        <span className={`font-serif font-black text-accent drop-shadow-sm break-all leading-none ${fontSizeClass}`}>
          {displayValue}
        </span>
      </div>

      <motion.h3
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5 }}
        className="font-sans text-xl md:text-2xl font-bold text-dark/60 uppercase tracking-widest mb-6"
      >
        {data.statLabel}
      </motion.h3>

      <motion.p
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1 }}
        className="font-sans text-dark text-xl md:text-2xl max-w-xs leading-relaxed bg-white/40 backdrop-blur-md p-5 rounded-2xl border border-white/50 shadow-lg"
      >
        {data.content}
      </motion.p>
    </div>
  );
};

export default StatBigSlide;