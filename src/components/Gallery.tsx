import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import clsx from 'clsx';

const galleryImages = [
  { 
    id: 1, 
    type: "wedding", 
    src: "https://images.unsplash.com/photo-1519225421980-715cb0215aed?q=80&w=1200&auto=format&fit=crop", 
    span: "md:col-span-2 md:row-span-2 col-span-2 row-span-2" 
  },
  { 
    id: 2, 
    type: "corporate", 
    src: "https://images.unsplash.com/photo-1511795409834-ef04bbd61622?q=80&w=800&auto=format&fit=crop", 
    span: "md:col-span-1 md:row-span-1 col-span-1 row-span-1" 
  },
  { 
    id: 3, 
    type: "wedding", 
    src: "https://images.unsplash.com/photo-1519741497674-611481863552?q=80&w=800&auto=format&fit=crop", 
    span: "md:col-span-1 md:row-span-1 col-span-1 row-span-1" 
  },
  { 
    id: 4, 
    type: "birthday", 
    src: "https://images.unsplash.com/photo-1464349095431-e9a21285b5f3?q=80&w=800&auto=format&fit=crop", 
    span: "md:col-span-1 md:row-span-2 col-span-1 row-span-2" 
  },
  { 
    id: 5, 
    type: "corporate", 
    src: "https://images.unsplash.com/photo-1540575861501-7cf05a4b125a?q=80&w=1200&auto=format&fit=crop", 
    span: "md:col-span-2 md:row-span-1 col-span-2 row-span-1" 
  },
  { 
    id: 6, 
    type: "wedding", 
    src: "https://images.unsplash.com/photo-1465495976277-4387d4b0b4c6?q=80&w=800&auto=format&fit=crop", 
    span: "md:col-span-1 md:row-span-1 col-span-1 row-span-1" 
  },
  { 
    id: 7, 
    type: "birthday", 
    src: "https://images.unsplash.com/photo-1533174072545-7a4b6ad7a6c3?q=80&w=800&auto=format&fit=crop", 
    span: "md:col-span-1 md:row-span-1 col-span-1 row-span-1" 
  },
];

const filters = ["All", "Wedding", "Corporate", "Birthday"];

export default function Gallery() {
  const [activeFilter, setActiveFilter] = useState("All");

  const filteredImages = galleryImages.filter(img => 
    activeFilter === "All" ? true : img.type.toLowerCase() === activeFilter.toLowerCase()
  );

  return (
    <section id="gallery" className="py-20 md:py-[120px] bg-canvas-white px-6">
      <div className="max-w-[1200px] mx-auto">
        <div className="text-center mb-10 md:mb-12">
          <h2 className="text-3xl md:text-5xl font-semibold tracking-tighter mb-6 md:mb-8 text-ink">Past Celebrations</h2>
          
          <div className="flex flex-wrap justify-center gap-2">
            {filters.map(filter => (
              <button
                key={filter}
                onClick={() => setActiveFilter(filter)}
                className={clsx(
                  "px-4 md:px-5 py-2 md:py-2 rounded-full text-sm font-medium transition-colors duration-200 min-h-[44px]", // Mobile touch target
                  activeFilter === filter 
                    ? "bg-ink text-white" 
                    : "bg-canvas-parchment text-ink/70 hover:bg-black/5"
                )}
              >
                {filter}
              </button>
            ))}
          </div>
        </div>

        <motion.div layout className="grid grid-cols-2 md:grid-cols-3 gap-3 md:gap-4 auto-rows-[140px] md:auto-rows-[200px]">
          <AnimatePresence>
            {filteredImages.map((img) => (
              <motion.div
                layout
                key={img.id}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.3 }}
                className={clsx("relative overflow-hidden rounded-2xl group", img.span)}
              >
                <img 
                  src={img.src} 
                  alt="Gallery image" 
                  className="w-full h-full object-cover md:group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-black/20 opacity-0 md:group-hover:opacity-100 transition-opacity duration-300" />
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
}
