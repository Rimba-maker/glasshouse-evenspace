import React from 'react';
import { motion } from 'framer-motion';
import { 
  HeartStraight, 
  Briefcase, 
  Cake, 
  Camera, 
  GraduationCap, 
  RocketLaunch 
} from "@phosphor-icons/react";

const events = [
  { 
    icon: <HeartStraight size={32} weight="thin" />, 
    title: "Intimate Wedding", 
    desc: "30-150 pax, indoor & outdoor", 
    img: "https://images.unsplash.com/photo-1519741497674-611481863552?q=80&w=1200&auto=format&fit=crop" 
  },
  { 
    icon: <Briefcase size={32} weight="thin" />, 
    title: "Corporate Event", 
    desc: "Gala dinner, launching", 
    img: "https://images.unsplash.com/photo-1511795409834-ef04bbd61622?q=80&w=1200&auto=format&fit=crop" 
  },
  { 
    icon: <Cake size={32} weight="thin" />, 
    title: "Birthday Party", 
    desc: "Sweet 17, 50th anniversary", 
    img: "https://images.unsplash.com/photo-1464349095431-e9a21285b5f3?q=80&w=1200&auto=format&fit=crop" 
  },
  { 
    icon: <Camera size={32} weight="thin" />, 
    title: "Pre-Wedding", 
    desc: "Half-day rental, full styling", 
    img: "https://images.unsplash.com/photo-1583939003579-730e3918a45a?q=80&w=1200&auto=format&fit=crop" 
  },
  { 
    icon: <GraduationCap size={32} weight="thin" />, 
    title: "Graduation", 
    desc: "Class reunion, graduation", 
    img: "https://images.unsplash.com/photo-1531058020387-3be344556be6?q=80&w=1200&auto=format&fit=crop" 
  },
  { 
    icon: <RocketLaunch size={32} weight="thin" />, 
    title: "Brand Activation", 
    desc: "Pop-up, exhibition", 
    img: "https://images.unsplash.com/photo-1540575861501-7cf05a4b125a?q=80&w=1200&auto=format&fit=crop" 
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1 }
  }
};

const cardVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { 
    opacity: 1, 
    y: 0, 
    transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] } 
  }
};

export default function EventTypes() {
  return (
    <section id="events" className="py-24 md:py-[140px] bg-canvas-white text-ink px-6">
      <div className="max-w-[1200px] mx-auto">
        <div className="flex flex-col items-center mb-16 md:mb-20 text-center">
          <h2 className="text-4xl md:text-6xl font-semibold tracking-tighter mb-4">Cocok Untuk Berbagai Momen</h2>
          <p className="text-ink/60 max-w-2xl text-lg md:text-xl">Dari perayaan intim hingga acara korporat berskala besar, kami menyediakan ruang yang fleksibel sesuai kebutuhan Anda.</p>
        </div>
        
        <motion.div 
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          {events.map((event, i) => (
            <motion.div 
              key={i}
              variants={cardVariants}
              className="group relative overflow-hidden rounded-[32px] bg-canvas-parchment flex flex-col h-[380px] md:h-[420px] transition-all duration-500 cursor-pointer"
            >
              {/* Background Image Layer */}
              <div className="absolute inset-0 z-0">
                <img 
                  src={event.img} 
                  alt={event.title} 
                  className="w-full h-full object-cover scale-105 grayscale-[40%] brightness-75 group-hover:grayscale-0 group-hover:brightness-90 group-hover:scale-110 transition-all duration-1000 ease-out"
                />
                {/* Gradient Overlay - Muted by default, darker on hover */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-60 group-hover:opacity-80 transition-opacity duration-500" />
              </div>

              {/* Content Layer */}
              <div className="relative z-10 flex flex-col justify-end h-full p-8 md:p-10 text-white">
                <div className="mb-6 transform group-hover:-translate-y-2 transition-transform duration-500 ease-out">
                  <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-white/10 backdrop-blur-md border border-white/20 mb-6 group-hover:bg-white/20 transition-colors duration-300">
                    <span className="text-white">
                      {event.icon}
                    </span>
                  </div>
                  <h3 className="text-2xl md:text-3xl font-semibold tracking-tight mb-2">{event.title}</h3>
                  <p className="text-white/70 text-base md:text-lg leading-relaxed max-w-[280px] opacity-0 group-hover:opacity-100 transform translate-y-4 group-hover:translate-y-0 transition-all duration-500">
                    {event.desc}
                  </p>
                </div>
                
                {/* Subtle bottom indicator */}
                <div className="w-8 h-[2px] bg-white/30 group-hover:w-full transition-all duration-700 ease-in-out" />
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
