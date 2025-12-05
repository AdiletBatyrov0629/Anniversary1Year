import React from 'react';
import { motion } from 'framer-motion';
import { Coffee, Film, Phone, Zap, Music, Star, MapPin } from 'lucide-react';
import { SlideData } from '../../types';

const icons: Record<string, any> = {
  coffee: Coffee,
  film: Film,
  phone: Phone,
  zap: Zap,
  music: Music,
  star: Star,
  map: MapPin
};

const StatGridSlide: React.FC<{ data: SlideData }> = ({ data }) => {
  const gridData = data.gridData || [];

  return (
    <div className="flex flex-col h-full p-8 justify-center">
      <motion.h2 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="font-serif text-4xl text-dark font-bold text-center mb-12"
      >
        {data.title}
      </motion.h2>

      <div className="grid grid-cols-1 gap-4">
        {gridData.map((item, index) => {
          const Icon = icons[item.icon] || Star;
          return (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: index * 0.2 }}
              className="bg-white/60 backdrop-blur-md p-6 rounded-2xl flex items-center justify-between shadow-sm border border-white/50"
            >
              <div className="flex items-center gap-3 overflow-hidden">
                <div className="p-2 md:p-3 bg-secondary/20 rounded-full shrink-0">
                  <Icon className="w-5 h-5 md:w-6 md:h-6 text-dark" />
                </div>
                <span className="font-sans text-dark/80 font-medium text-sm md:text-lg truncate">{item.label}</span>
              </div>
              <span className={`font-serif font-bold text-accent text-right shrink-0 ${
                item.value.length > 8 ? "text-xl md:text-2xl" : "text-2xl md:text-3xl"
              }`}>
                {item.value}
              </span>
            </motion.div>
          );
        })}
      </div>
    </div>
  );
};

export default StatGridSlide;