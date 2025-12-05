import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { manifesto } from '../data';

const ManifestoSection: React.FC = () => {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  });

  const backgroundColor = useTransform(
    scrollYProgress,
    [0, 0.5, 1],
    ["#B1A6A0", "#9E8E87", "#2A2025"] 
  );

  return (
    <motion.section 
      ref={containerRef}
      style={{ backgroundColor }}
      className="relative"
    >
      <div className="max-w-4xl mx-auto px-6 py-20">
        
        <div className="mb-32 text-center sticky top-20 z-10">
            <h3 className="font-serif text-4xl md:text-6xl font-black mb-4 text-white drop-shadow-md">
                С годовщиной!
            </h3>
            <div className="h-1 w-24 bg-accent mx-auto rounded-full"/>
        </div>

        <div className="flex flex-col gap-[40vh] pb-[20vh]">
            {manifesto.map((item, index) => (
                <Item key={index} item={item} index={index} />
            ))}
        </div>

      </div>
    </motion.section>
  );
};

interface ItemProps {
    item: { text: string; highlight: string };
    index: number;
}

const Item: React.FC<ItemProps> = ({ item, index }) => {
    return (
        <motion.div
            initial={{ opacity: 0, y: 50, scale: 0.9 }}
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            viewport={{ once: true, margin: "-20% 0px -20% 0px" }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="flex items-start gap-4 md:gap-8 group"
        >
            <span className="font-serif text-6xl md:text-9xl text-white/20 font-black select-none">
                0{index + 1}
            </span>
            <p className="font-sans text-4xl md:text-6xl font-medium leading-tight text-white drop-shadow-sm">
                {item.text}{" "}
                <span className="text-accent font-serif font-black italic relative inline-block">
                    {item.highlight}
                    <motion.span 
                        initial={{ width: 0 }}
                        whileInView={{ width: '100%' }}
                        transition={{ delay: 0.4, duration: 0.6 }}
                        className="absolute bottom-2 left-0 h-4 bg-white/10 -z-10 -rotate-2"
                    />
                </span>
            </p>
        </motion.div>
    )
}

export default ManifestoSection;