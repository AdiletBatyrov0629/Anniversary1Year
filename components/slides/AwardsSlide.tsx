import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Trophy, ChefHat, Heart, Star, Award, MapPin } from 'lucide-react';
import { SlideData } from '../../types';

const icons: Record<string, any> = {
  chef: ChefHat,
  heart: Heart,
  star: Star,
  award: Award,
  map: MapPin
};

const AwardsSlide: React.FC<{ data: SlideData }> = ({ data }) => {
  const [revealedIndices, setRevealedIndices] = useState<number[]>([]);
  const awards = data.awardsData || [];

  const toggleAward = (index: number) => {
    setRevealedIndices(prev => 
      prev.includes(index) 
        ? prev.filter(i => i !== index) 
        : [...prev, index] 
    );
  };

  return (
    <div className="flex flex-col h-full p-4 justify-center relative">
      <motion.div className="text-center mb-6 z-10 shrink-0">
        <div className="inline-block p-3 bg-white/20 rounded-full mb-2 backdrop-blur-sm">
          <Trophy className="w-8 h-8 text-dark" />
        </div>
        <h2 className="font-serif text-3xl text-dark font-black uppercase tracking-tight">{data.title}</h2>
      </motion.div>

      <div className="flex flex-col gap-4 items-center w-full relative z-20">
        {awards.map((award, index) => {
            const Icon = icons[award.icon] || Award;
            const isRevealed = revealedIndices.includes(index);

            return (
              <motion.div
                key={index}
                initial={{ x: 50, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                whileHover={{ scale: 1.02 }}
                transition={{ delay: index * 0.1 }}
                onClick={(e) => {
                    e.stopPropagation();
                    toggleAward(index);
                }}
                className="w-full max-w-xs h-28 relative cursor-pointer z-50 select-none"
              >
                  <motion.div 
                    layout
                    className={`absolute inset-0 shadow-lg rounded-xl flex items-center px-4 border-2 transition-all duration-300 ${
                        isRevealed 
                        ? 'bg-dark border-dark text-bg' 
                        : 'bg-white/80 backdrop-blur-md border-white/40 hover:bg-white'
                    }`}
                  >
                     {!isRevealed ? (
                         <>
                            <div className="w-12 h-12 rounded-full bg-accent/20 flex items-center justify-center mr-4 shrink-0">
                                <Icon className="text-dark w-6 h-6" />
                            </div>
                            <div className="flex flex-col overflow-hidden">
                                <h3 className="font-serif text-xl text-dark font-bold leading-none mb-1 truncate">{award.title}</h3>
                                <span className="text-xs font-sans text-dark/50 font-bold uppercase tracking-wider">Tap to reveal</span>
                            </div>
                         </>
                     ) : (
                         <div className="w-full flex items-center justify-between">
                            <div className="flex-1 mr-2">
                                <span className="text-accent text-[10px] font-black uppercase tracking-widest block mb-0.5">Winner</span>
                                <h3 className="font-serif text-2xl font-bold leading-none break-words">{award.winner}</h3>
                            </div>
                            <Award className="text-accent w-8 h-8 shrink-0" />
                         </div>
                     )}
                  </motion.div>
              </motion.div>
            );
        })}
      </div>
    </div>
  );
};

export default AwardsSlide;