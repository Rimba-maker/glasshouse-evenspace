import React from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import clsx from 'clsx';

const rooms = [
  {
    id: "main-hall",
    title: "The Main Hall",
    size: "350 m²",
    capacity: "150 standing, 100 banquet",
    features: ["Floor-to-ceiling glass walls", "6m ceiling height with skylight"],
    bestFor: "Wedding reception, gala dinner",
    image: "https://images.pexels.com/photos/587741/pexels-photo-587741.jpeg?auto=compress&cs=tinysrgb&w=1200",
    theme: "light",
  },
  {
    id: "garden",
    title: "The Garden",
    size: "280 m²",
    capacity: "100 standing, 60 seated",
    features: ["Outdoor tropical garden", "String lights & lanterns"],
    bestFor: "Outdoor ceremony, sunset event",
    image: "https://images.unsplash.com/photo-1465495976277-4387d4b0b4c6?q=80&w=1200&auto=format&fit=crop",
    theme: "dark",
  },
  {
    id: "lounge",
    title: "The Lounge",
    size: "90 m²",
    capacity: "40 standing, 20 seated",
    features: ["Intimate sofa seating", "Bar counter included"],
    bestFor: "After-party, VIP holding room",
    image: "https://images.pexels.com/photos/274192/pexels-photo-274192.jpeg?auto=compress&cs=tinysrgb&w=1200",
    theme: "light",
  }
];

export default function VenueRooms() {
  return (
    <section id="rooms" className="w-full">
      {rooms.map((room, index) => (
        <RoomCard key={room.id} room={room} index={index} />
      ))}
    </section>
  );
}

function RoomCard({ room, index }: { room: typeof rooms[0], index: number }) {
  const isDark = room.theme === "dark";
  const isEven = index % 2 !== 0;

  const ref = React.useRef(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] });
  const y = useTransform(scrollYProgress, [0, 1], ["-5%", "5%"]); // Reduced parallax for better mobile feel

  return (
    <div 
      ref={ref}
      className={clsx(
        "py-16 md:py-[120px] px-6 md:px-12 w-full overflow-hidden flex items-center",
        isDark ? "bg-canvas-dark text-white" : "bg-canvas-white text-ink"
      )}
    >
      <div className={clsx(
        "max-w-[1200px] mx-auto flex flex-col md:flex-row items-center gap-10 md:gap-24 w-full",
        isEven ? "md:flex-row-reverse" : ""
      )}>
        
        {/* Text Content */}
        <div className="flex-1 space-y-5 md:space-y-6 z-10 relative w-full">
          <div className="space-y-1 md:space-y-2">
            <span className={clsx("text-xs md:text-sm font-semibold tracking-wide uppercase", isDark ? "text-white/50" : "text-ink/50")}>
              {room.size}
            </span>
            <h3 className="text-3xl md:text-5xl font-semibold tracking-tighter">
              {room.title}
            </h3>
          </div>

          <p className={clsx("text-base md:text-lg", isDark ? "text-white/80" : "text-ink/80")}>
            <strong>Kapasitas:</strong> {room.capacity}
          </p>

          <ul className="space-y-2 md:space-y-3">
            {room.features.map((feature, i) => (
              <li key={i} className={clsx("flex items-start gap-3 text-base md:text-lg", isDark ? "text-white/80" : "text-ink/80")}>
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={clsx("mt-1 shrink-0", isDark ? "text-white/40" : "text-black/30")}>
                  <path d="M20 6L9 17L4 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
                <span>{feature}</span>
              </li>
            ))}
          </ul>

          <div className={clsx("pt-4 border-t", isDark ? "border-white/10" : "border-black/5")}>
            <p className={clsx("text-sm md:text-base font-medium", isDark ? "text-white/60" : "text-ink/60")}>
              <span className={isDark ? "text-white" : "text-ink"}>Best for:</span> {room.bestFor}
            </p>
          </div>
        </div>

        {/* Image Container */}
        <div className="flex-1 w-full relative">
          <div className="aspect-square md:aspect-[4/3] rounded-[32px] overflow-hidden relative shadow-[var(--shadow-product)] bg-black/5">
            <motion.img 
              style={{ y, scale: 1.1 }}
              src={room.image} 
              alt={room.title}
              className="absolute inset-0 w-full h-full object-cover"
            />
          </div>
        </div>

      </div>
    </div>
  );
}
