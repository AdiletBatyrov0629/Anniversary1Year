import React from 'react';
import { motion } from 'framer-motion';
import { SlideData } from '../../types';

const ChartSlide: React.FC<{ data: SlideData }> = ({ data }) => {
  const chartData = data.chartData || [];
  const maxValue = Math.max(...chartData.map(d => d.value));

  return (
    <div className="flex flex-col h-full p-8 justify-center">
      <motion.div 
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        className="mb-12"
      >
        <h2 className="font-serif text-4xl text-dark font-bold mb-2">{data.title}</h2>
      </motion.div>

      <div className="flex justify-between items-end h-64 gap-4 px-2">
        {chartData.map((item, index) => (
          <div key={index} className="flex-1 flex flex-col items-center justify-end h-full gap-2">
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.2 + (index * 0.1) }}
              className="font-sans font-bold text-dark text-sm"
            >
              {item.value}
            </motion.div>
            
            <motion.div
              initial={{ height: 0 }}
              animate={{ height: `${(item.value / maxValue) * 100}%` }}
              transition={{ delay: 0.5 + (index * 0.1), duration: 0.8, type: "spring" }}
              className="w-full bg-gradient-to-t from-accent to-secondary rounded-t-xl relative overflow-hidden shadow-lg"
            >
               <div className="absolute inset-0 bg-white/20" />
            </motion.div>
            
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1 + (index * 0.1) }}
              className="text-2xl md:text-4xl pt-2"
            >
              {item.label}
            </motion.div>
          </div>
        ))}
      </div>
      
      <motion.div
         initial={{ opacity: 0 }}
         animate={{ opacity: 1 }}
         transition={{ delay: 2 }}
         className="mt-12 bg-white/40 p-4 rounded-xl backdrop-blur-sm text-center font-sans text-dark/80 text-lg"
      >
        Мы такие эмоциональные
      </motion.div>
    </div>
  );
};

export default ChartSlide;