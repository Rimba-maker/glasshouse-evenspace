import React from 'react';
import { motion } from 'framer-motion';

export default function Hero() {
  const heroKenBurns = {
    scale: [1, 1.15],
    transition: { duration: 30, repeat: Infinity, repeatType: "reverse" as const, ease: "linear" }
  };

  const celebrationReveal = {
    hidden: { opacity: 0, y: 30, letterSpacing: "0.1em" },
    visible: { 
      opacity: 1, 
      y: 0, 
      letterSpacing: "-0.02em",
      transition: { duration: 1.2, ease: [0.16, 1, 0.3, 1] }
    }
  };

  const textReveal = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0, 
      transition: { duration: 1, delay: 0.4, ease: [0.16, 1, 0.3, 1] }
    }
  };

  return (
    <section className="relative h-[100svh] w-full overflow-hidden bg-black">
      <motion.div 
        className="absolute inset-0 z-0"
        animate={heroKenBurns.scale ? { scale: heroKenBurns.scale } : {}}
        transition={heroKenBurns.transition}
      >
        <img 
          src="https://images.unsplash.com/photo-1519225421980-715cb0215aed?q=80&w=1920&auto=format&fit=crop" 
          alt="Glasshouse interior natural light" 
          className="w-full h-full object-cover opacity-70"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-transparent to-black/70" />
      </motion.div>

      <div className="relative z-10 h-full flex flex-col items-center justify-center text-center px-6 max-w-[980px] mx-auto text-white pt-14">
        
        <motion.h1 
          className="text-4xl sm:text-5xl md:text-7xl font-semibold mb-6 max-w-4xl tracking-tighter"
          initial="hidden"
          animate="visible"
          variants={celebrationReveal}
        >
          Ruang Yang Bersinar <br className="hidden sm:block" /> Untuk Momen Bersinar.
        </motion.h1>
        
        <motion.p 
          className="text-base sm:text-lg md:text-xl max-w-2xl mx-auto mb-10 text-white/90 font-medium leading-relaxed"
          initial="hidden"
          animate="visible"
          variants={textReveal}
        >
          Venue glasshouse 350 m² dengan natural light, taman tropis, dan kapasitas 30-150 tamu. Sempurna untuk intimate wedding, corporate gathering, dan milestone celebration.
        </motion.p>
        
        <motion.div 
          className="flex flex-col sm:flex-row items-center justify-center gap-4 w-full sm:w-auto"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.8 }}
        >
          <a href="#space" className="w-full sm:w-auto bg-canvas-white text-ink px-8 py-4 min-w-[160px] rounded-full font-semibold hover:scale-95 transition-transform duration-200">
            Lihat Venue
          </a>
          <a href="#site-visit" className="w-full sm:w-auto text-white px-8 py-4 min-w-[160px] rounded-full font-semibold border border-white/30 hover:bg-white/10 transition-colors duration-200">
            Cek Tanggal
          </a>
        </motion.div>

        <motion.div 
          className="absolute bottom-8 md:bottom-12 left-0 right-0 px-4 text-xs md:text-sm font-medium text-white/70 flex flex-col md:flex-row items-center justify-center gap-2 md:gap-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1.2 }}
        >
          <span>500+ Events Hosted</span>
          <span className="hidden md:inline">&bull;</span>
          <span>4.9 ⭐ Rating</span>
          <span className="hidden md:inline">&bull;</span>
          <span>Available 7 Days a Week</span>
        </motion.div>
      </div>
    </section>
  );
}
