import React, { useRef } from 'react';
import WrappedStory from './components/WrappedStory';
import StickerSection from './components/StickerSection';
import ManifestoSection from './components/ManifestoSection';
import HeartSection from './components/HeartSection';

const App: React.FC = () => {
  const topRef = useRef<HTMLDivElement>(null);

  const scrollToTop = () => {
    topRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <main className="w-full bg-bg text-dark overflow-x-hidden" ref={topRef}>
      <section className="h-screen w-full relative z-20">
         <div className="absolute top-[-20%] left-[-10%] w-[50vw] h-[50vw] bg-accent/20 rounded-full blur-[100px] -z-10" />
         <div className="absolute bottom-[-10%] right-[-10%] w-[40vw] h-[40vw] bg-secondary/20 rounded-full blur-[100px] -z-10" />
         <WrappedStory />
      </section>
      <section className="relative z-10">
          <StickerSection />
      </section>
      <section className="relative z-10">
          <ManifestoSection />
      </section>
      <section className="relative z-10 bg-gradient-to-b from-[#A4958F] to-bg">
          <HeartSection onRestart={scrollToTop} />
      </section>
    </main>
  );
};

export default App;