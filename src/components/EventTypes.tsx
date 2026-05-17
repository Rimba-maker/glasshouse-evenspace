import React from 'react';
import { motion } from 'framer-motion';

const events = [
  { icon: "💍", title: "Intimate Wedding", desc: "30-150 pax, indoor & outdoor", img: "https://images.unsplash.com/photo-1511285560929-80b456fea0bc?q=80&w=800&auto=format&fit=crop" },
  { icon: "🥂", title: "Corporate Event", desc: "Gala dinner, launching", img: "https://images.pexels.com/photos/1181311/pexels-photo-1181311.jpeg?auto=compress&cs=tinysrgb&w=800" },
  { icon: "🎂", title: "Birthday Party", desc: "Sweet 17, 50th anniversary", img: "https://images.unsplash.com/photo-1530103862676-de88bdf21a2c?q=80&w=800&auto=format&fit=crop" },
  { icon: "📸", title: "Pre-Wedding", desc: "Half-day rental, full styling", img: "https://images.pexels.com/photos/1024311/pexels-photo-1024311.jpeg?auto=compress&cs=tinysrgb&w=800" },
  { icon: "🎓", title: "Graduation", desc: "Class reunion, graduation", img: "https://images.unsplash.com/photo-1523580494863-6f3031224c94?q=80&w=800&auto=format&fit=crop" },
  { icon: "🏢", title: "Brand Activation", desc: "Pop-up, exhibition", img: "https://images.pexels.com/photos/2774556/pexels-photo-2774556.jpeg?auto=compress&cs=tinysrgb&w=800" },
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
    transition: { duration: 0.5, ease: "easeOut" } 
  }
};

export default function EventTypes() {
  return (
    <section id="events" className="py-20 md:py-[120px] bg-canvas-parchment text-ink px-6">
      <div className="max-w-[1200px] mx-auto">
        <h2 className="text-3xl md:text-5xl font-semibold tracking-tighter mb-10 md:mb-16 text-center">Cocok Untuk Berbagai Momen</h2>
        
        <motion.div 
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
        >
          {events.map((event, i) => (
            <motion.div 
              key={i}
              variants={cardVariants}
              className="group relative overflow-hidden rounded-[24px] md:rounded-3xl bg-canvas-white shadow-sm border border-black/5 flex flex-col h-[280px] md:h-[320px]"
            >
              <div className="absolute inset-0 z-0 overflow-hidden">
                <img 
                  src={event.img} 
                  alt={event.title} 
                  className="w-full h-full object-cover md:opacity-0 md:group-hover:opacity-100 opacity-20 transition-all duration-700 ease-out"
                />
                <div className="absolute inset-0 bg-black/60 md:opacity-0 md:group-hover:opacity-100 opacity-40 transition-opacity duration-500" />
              </div>

              <div className="relative z-10 flex flex-col justify-end h-full p-6 md:p-8 transition-transform duration-500 md:group-hover:-translate-y-2">
                <span className="text-3xl md:text-4xl mb-3 md:mb-4 md:group-hover:scale-110 transition-transform origin-bottom-left duration-300">{event.icon}</span>
                <h3 className="text-xl md:text-2xl font-semibold tracking-tight mb-1 md:mb-2 text-white md:text-ink md:group-hover:text-white transition-colors duration-300">{event.title}</h3>
                <p className="text-white/80 md:text-ink/70 md:group-hover:text-white/80 text-sm md:text-base transition-colors duration-300">{event.desc}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
