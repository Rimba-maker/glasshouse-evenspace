import React, { useState } from 'react';
import clsx from 'clsx';

const categories = ["Catering", "Decoration", "Photo & Video", "Music"];
const vendorsData: Record<string, string[]> = {
  "Catering": ["Mahakarya Catering", "Setiabudi Boga", "La Marquise"],
  "Decoration": ["Mawarprana Decor", "Suasana Floral", "Akasia Studio"],
  "Photo & Video": ["Lumiere Photoworks", "Sinaran Cinema", "Frame & Light Studio"],
  "Music": ["Tujuh Strings", "DJ Andro", "Acoustic Trio Bandung"],
};

export default function PreferredVendors() {
  const [activeCategory, setActiveCategory] = useState("Catering");

  return (
    <section className="py-20 md:py-[120px] bg-canvas-parchment text-ink px-6">
      <div className="max-w-[980px] mx-auto text-center">
        <h2 className="text-3xl md:text-5xl font-semibold tracking-tighter mb-3 md:mb-4">Tim Yang Kami Percaya</h2>
        <p className="text-base md:text-lg text-ink/80 max-w-2xl mx-auto mb-8 md:mb-12">
          Daftar vendor yang sering bekerja sama dengan The Glasshouse. Kalian bebas memilih vendor sendiri, tapi tim ini sudah familiar dengan venue dan layanannya teruji.
        </p>

        <div className="flex overflow-x-auto hide-scrollbar justify-start md:justify-center gap-6 mb-8 md:mb-12 border-b border-black/5 pb-0 md:pb-4 px-2 -mx-6 md:mx-0">
          {categories.map(cat => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={clsx(
                "text-base md:text-lg font-medium pb-4 border-b-2 transition-colors whitespace-nowrap min-w-[max-content]",
                activeCategory === cat ? "border-action-blue text-ink" : "border-transparent text-ink/40 hover:text-ink/70"
              )}
            >
              {cat}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 md:gap-6">
          {vendorsData[activeCategory].map((vendor, i) => (
            <div key={i} className="bg-canvas-white p-6 md:p-8 rounded-2xl border border-black/5 shadow-sm text-center group md:hover:scale-[1.02] transition-transform duration-200">
              <div className="w-12 h-12 md:w-16 md:h-16 bg-canvas-parchment rounded-full mx-auto mb-3 md:mb-4 flex items-center justify-center text-ink/20 group-hover:bg-action-blue/10 group-hover:text-action-blue transition-colors">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5 md:w-6 md:h-6"><path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"/></svg>
              </div>
              <h4 className="font-semibold text-base md:text-lg">{vendor}</h4>
            </div>
          ))}
        </div>
      </div>
      <style dangerouslySetInnerHTML={{__html: `
        .hide-scrollbar::-webkit-scrollbar { display: none; }
        .hide-scrollbar { -ms-overflow-style: none; scrollbar-width: none; }
      `}} />
    </section>
  );
}
