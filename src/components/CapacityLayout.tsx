import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import clsx from 'clsx';

const layouts = [
  { id: "banquet", label: "Banquet", capacity: "100 pax", desc: "10-12 per round table", img: "https://images.unsplash.com/photo-1519167758481-83f550bb49b3?q=80&w=1200&auto=format&fit=crop" },
  { id: "family", label: "Family Style", capacity: "80 pax", desc: "3 long tables", img: "https://images.pexels.com/photos/3375620/pexels-photo-3375620.jpeg?auto=compress&cs=tinysrgb&w=1200" },
  { id: "theatre", label: "Theatre", capacity: "120 pax", desc: "Rows of chairs", img: "https://images.unsplash.com/photo-1561489422-45de3d015e3e?q=80&w=1200&auto=format&fit=crop" },
  { id: "cocktail", label: "Cocktail", capacity: "150 pax", desc: "High tables, standing", img: "https://images.pexels.com/photos/3171770/pexels-photo-3171770.jpeg?auto=compress&cs=tinysrgb&w=1200" },
];

export default function CapacityLayout() {
  const [activeTab, setActiveTab] = useState(layouts[0].id);

  const activeLayout = layouts.find(l => l.id === activeTab)!;

  return (
    <section className="py-20 md:py-[120px] bg-canvas-white text-ink px-6 border-t border-black/5">
      <div className="max-w-[1200px] mx-auto flex flex-col md:flex-row gap-10 md:gap-16">
        
        {/* Left: Content & Tabs */}
        <div className="flex-1 space-y-6 md:space-y-8">
          <div>
            <h2 className="text-3xl md:text-5xl font-semibold tracking-tighter mb-3 md:mb-4">Layout Yang Fleksibel</h2>
            <p className="text-base md:text-lg text-ink/80">Konfigurasi disesuaikan dengan jenis acara — tim kami siap konsultasi.</p>
          </div>

          <div className="flex flex-col gap-2">
            {layouts.map((layout) => (
              <button
                key={layout.id}
                onClick={() => setActiveTab(layout.id)}
                className={clsx(
                  "flex items-center justify-between p-4 md:p-5 rounded-2xl text-left transition-all duration-200 border min-h-[72px]", // Ensure touch target size
                  activeTab === layout.id 
                    ? "bg-canvas-parchment border-black/10 scale-[1.02]" 
                    : "bg-transparent border-transparent hover:bg-canvas-parchment/50 hover:border-black/5"
                )}
              >
                <div>
                  <h4 className={clsx("font-semibold text-base md:text-lg", activeTab === layout.id ? "text-ink" : "text-ink/70")}>{layout.label}</h4>
                  <p className={clsx("text-xs md:text-sm", activeTab === layout.id ? "text-ink/80" : "text-ink/50")}>{layout.desc}</p>
                </div>
                <div className="text-right">
                  <span className={clsx("font-semibold text-sm md:text-base", activeTab === layout.id ? "text-action-blue" : "text-ink/40")}>
                    {layout.capacity}
                  </span>
                </div>
              </button>
            ))}
          </div>
        </div>

        {/* Right: Visual Display */}
        <div className="flex-1">
          <div className="aspect-square md:aspect-[4/3] rounded-[32px] overflow-hidden bg-canvas-parchment relative shadow-[var(--shadow-product)]">
            <AnimatePresence mode="wait">
              <motion.img
                key={activeLayout.id}
                src={activeLayout.img}
                alt={activeLayout.label}
                className="absolute inset-0 w-full h-full object-cover"
                initial={{ opacity: 0, scale: 1.05 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.5, ease: "easeInOut" }}
              />
            </AnimatePresence>
            <div className="absolute inset-0 ring-1 ring-inset ring-black/10 rounded-[32px] pointer-events-none" />
          </div>
        </div>

      </div>
    </section>
  );
}
