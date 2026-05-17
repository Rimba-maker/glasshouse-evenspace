import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

const testimonials = [
  {
    quote: "Kami cari venue 4 bulan sampai akhirnya menemukan The Glasshouse. Konsep glasshouse-nya bikin foto kami magical, tamu pada bilang 'venue terindah yang pernah didatangi'. Tim venue super responsif.",
    author: "Nadia & Faris",
    event: "Wedding February 2025"
  },
  {
    quote: "Year-end party 120 tamu, semua impressed dengan venue. Setup pre-event sampai bongkar, tim sigap. Sudah booking untuk tahun depan.",
    author: "PT Karya Indonesia",
    event: "Corporate Event"
  },
  {
    quote: "Sweet 17 anak saya, kombinasi indoor + outdoor garden bikin teman-temannya betah. Foto-fotonya juga aesthetic banget.",
    author: "Bu Cynthia",
    event: "Birthday Event"
  }
];

export default function Testimonial() {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % testimonials.length);
    }, 8000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="py-20 md:py-[120px] bg-canvas-dark text-white px-6 text-center overflow-hidden">
      <div className="max-w-[980px] mx-auto relative flex flex-col justify-center">
        
        <h2 className="text-xs md:text-sm font-semibold tracking-wide uppercase text-white/50 mb-8 md:mb-12">Cerita Dari Couples & Klien Kami</h2>

        {/* 
          Trik Ultimate Anti-Bouncing:
          Kita me-render SEMUA testimonial sekaligus di dalam satu Grid Cell yang sama (col-start-1 row-start-1).
          Karena semuanya ada di dalam DOM secara permanen (tidak dihapus oleh AnimatePresence), 
          tinggi kontainer <div className="grid"> ini akan SELALU sama persis dengan tinggi testimonial yang paling panjang!
          Hasilnya: Dots tidak akan pernah bergerak naik-turun 1 piksel pun.
        */}
        <div className="grid items-center w-full text-left md:text-center">
          {testimonials.map((testi, index) => (
            <motion.div
              key={index}
              initial={false}
              animate={{ 
                opacity: currentIndex === index ? 1 : 0, 
                y: currentIndex === index ? 0 : 15,
                zIndex: currentIndex === index ? 10 : 0,
                pointerEvents: currentIndex === index ? "auto" : "none"
              }}
              transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
              className="col-start-1 row-start-1 w-full"
              aria-hidden={currentIndex !== index}
            >
              <p className="text-xl sm:text-2xl md:text-4xl font-medium tracking-tight leading-relaxed mb-6 md:mb-8 text-center">
                "{testi.quote}"
              </p>
              <div className="text-center">
                <p className="font-semibold text-base md:text-lg">{testi.author}</p>
                <p className="text-white/60 text-sm md:text-base">{testi.event}</p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Dots */}
        <div className="mt-10 md:mt-16 flex justify-center gap-3">
          {testimonials.map((_, i) => (
            <button
              key={i}
              onClick={() => setCurrentIndex(i)}
              className={`w-2.5 h-2.5 md:w-2.5 md:h-2.5 rounded-full transition-all duration-300 ${i === currentIndex ? "bg-white scale-125" : "bg-white/20 hover:bg-white/40"}`}
              aria-label={`Go to testimonial ${i + 1}`}
            />
          ))}
        </div>

      </div>
    </section>
  );
}
