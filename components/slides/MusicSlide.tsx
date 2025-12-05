import React, { useState, useRef, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Music, Play, Pause } from 'lucide-react';
import { SlideData } from '../../types';

const MusicSlide: React.FC<{ data: SlideData }> = ({ data }) => {
  const music = data.musicData;
  const [isPlaying, setIsPlaying] = useState(false);
  const audioRef = useRef<HTMLAudioElement | null>(null);

  if (!music) return null;

  const togglePlay = (e: React.MouseEvent) => {
    e.stopPropagation(); 
    if (audioRef.current) {
      if (isPlaying) {
        audioRef.current.pause();
      } else {
        audioRef.current.play();
      }
      setIsPlaying(!isPlaying);
    }
  };

  useEffect(() => {
    return () => {
      if (audioRef.current) {
        audioRef.current.pause();
      }
    };
  }, []);

  return (
    <div className="flex flex-col items-center justify-center h-full p-4 relative overflow-hidden">
       <audio ref={audioRef} src={data.musicData?.audioUrl || "/music.mp3"} loop />

       <div className="absolute inset-0 overflow-hidden z-0">
         <img src={music.albumArt} className="w-full h-full object-cover blur-3xl opacity-40 scale-125" alt="Background" />
       </div>

      <div className="z-10 w-full flex flex-col items-center justify-center h-full max-h-[80vh]">
        <motion.div
          initial={{ y: -20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          className="mb-4 md:mb-6 text-center shrink-0"
        >
          <div className="flex items-center justify-center gap-2 text-dark/70">
            <Music size={14} />
            <span className="font-sans uppercase tracking-widest text-xs font-bold">Наша песня</span>
          </div>
        </motion.div>

        <div className="relative w-56 h-56 md:w-64 md:h-64 mb-6 md:mb-10 shrink-0">
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ 
                scale: 1, 
                opacity: 1, 
                rotate: isPlaying ? 360 : 0 
            }}
            transition={{ 
              scale: { duration: 0.5 },
              opacity: { duration: 0.5 },
              rotate: { duration: isPlaying ? 8 : 0, repeat: Infinity, ease: "linear" } 
            }}
            className="w-full h-full rounded-full bg-black shadow-2xl flex items-center justify-center overflow-hidden border-4 border-black/20"
          >
            <div className="w-24 h-24 md:w-32 md:h-32 rounded-full overflow-hidden relative z-10 border-2 border-white/10">
              <img src={music.albumArt} alt="Album" className="w-full h-full object-cover" />
            </div>
          </motion.div>
        </div>

        <div className="text-center w-full px-4 shrink-0">
          <motion.h3 className="font-serif text-2xl md:text-3xl font-black text-dark mb-1 tracking-tight truncate">
            {music.song}
          </motion.h3>
          <motion.p className="font-sans text-lg md:text-xl text-dark/60 font-medium truncate">
            {music.artist}
          </motion.p>
          
          <motion.div 
             initial={{ opacity: 0, scale: 0.5 }}
             animate={{ opacity: 1, scale: 1 }}
             className="mt-6 md:mt-10 flex justify-center items-center"
          >
             <motion.button
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                onClick={togglePlay}
                className="w-16 h-16 md:w-20 md:h-20 rounded-full bg-dark text-bg flex items-center justify-center shadow-xl cursor-pointer hover:bg-black transition-colors z-50"
             >
                {isPlaying ? (
                    <Pause size={28} fill="currentColor" />
                ) : (
                    <Play size={28} fill="currentColor" className="ml-1" />
                )}
             </motion.button>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default MusicSlide;