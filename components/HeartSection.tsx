import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Heart } from 'lucide-react';
import { heartQuotes } from '../data';

const particles = Array.from({ length: 50 });

const HeartSection: React.FC<{ onRestart: () => void }> = ({ onRestart }) => {
  const [clickCount, setClickCount] = useState(0);
  const [currentQuote, setCurrentQuote] = useState<string | null>(null);
  const [isExploding, setIsExploding] = useState(false);

  const handleClick = () => {
    if (isExploding) return;

    if (clickCount < heartQuotes.length) {
      setCurrentQuote(heartQuotes[clickCount]);
      setClickCount(prev => prev + 1);
    } else {
      setIsExploding(true);
    }
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center py-20 relative overflow-hidden">
      
      {/* Цитата */}
      <AnimatePresence mode="wait">
        {currentQuote && !isExploding && (
            <motion.div
                key={clickCount}
                initial={{ opacity: 0, y: 20, scale: 0.8 }}
                animate={{ opacity: 1, y: -50, scale: 1 }}
                exit={{ opacity: 0, y: -100 }}
                className="absolute top-1/4 text-center pointer-events-none z-20 px-4 w-full"
            >
                <p className="font-sans text-2xl md:text-4xl font-bold text-dark bg-white/90 backdrop-blur-md px-8 py-4 rounded-3xl shadow-2xl border-4 border-white inline-block max-w-lg">
                    {currentQuote}
                </p>
            </motion.div>
        )}
      </AnimatePresence>
      <motion.div
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        animate={isExploding ? {
            scale: [1, 1.4, 1],
            transition: { repeat: Infinity, duration: 0.4 }
        } : {
            scale: [1, 1.05, 1],
            transition: { repeat: Infinity, duration: 1.5 }
        }}
        onClick={handleClick}
        className="cursor-pointer relative z-30"
      >
        <Heart 
            size={220} 
            weight="fill" 
            className={`fill-secondary drop-shadow-2xl transition-colors duration-500 ${isExploding ? 'text-accent' : 'text-secondary'}`} 
            fill="currentColor"
        />
      </motion.div>

      {isExploding && (
        <div className="absolute inset-0 pointer-events-none overflow-hidden z-10">
            {particles.map((_, i) => (
                <motion.div
                    key={i}
                    initial={{ y: "110vh", x: Math.random() * 100 + "vw", opacity: 1, scale: 0.5 }}
                    animate={{ y: "-10vh", rotate: 360 }}
                    transition={{ 
                        duration: Math.random() * 5 + 3, 
                        repeat: Infinity, 
                        delay: Math.random() * 2,
                        ease: "linear"
                    }}
                    className="absolute text-5xl filter drop-shadow-md"
                >
                    {["💜", "👁️", "😭", "👅", "😜", "💍", "🥰", "🖤", "🤍"][Math.floor(Math.random() * 6)]}
                </motion.div>
            ))}
        </div>
      )}
      <AnimatePresence>
        {isExploding && (
            <motion.div
                initial={{ y: 100, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 1 }}
                className="mt-24 relative z-50"
            >
                <button
                    onClick={onRestart}
                    className="font-pixel text-lg md:text-xl text-white bg-[#7E6673] px-8 py-4 active:translate-y-1 transition-transform outline-none cursor-pointer"
                    style={{
                        boxShadow: `
                            inset 4px 4px 0px 0px rgba(255,255,255,0.4), 
                            inset -4px -4px 0px 0px rgba(0,0,0,0.4),
                            4px 4px 0px 0px rgba(0,0,0,0.5)
                        `,
                        border: '4px solid #2A2025',
                        textShadow: '2px 2px 0px #2A2025'
                    }}
                >
                    НАЧАТЬ СНАЧАЛА
                </button>
            </motion.div>
        )}
      </AnimatePresence>
      
      {!isExploding && (
           <p className="absolute bottom-10 text-dark/30 font-sans font-bold animate-pulse">
               Нажимай на сердце до конца...
           </p>
      )}
    </div>
  );
};

export default HeartSection;