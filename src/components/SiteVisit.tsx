import React from 'react';

export default function SiteVisit() {
  return (
    <section id="site-visit" className="py-20 md:py-[120px] bg-canvas-parchment text-ink px-4 md:px-6">
      <div className="max-w-[800px] mx-auto bg-canvas-white rounded-[32px] md:rounded-[40px] p-6 sm:p-8 md:p-16 shadow-[var(--shadow-product)] border border-black/5 text-center">
        <h2 className="text-3xl md:text-5xl font-semibold tracking-tighter mb-3 md:mb-4">Lihat Langsung The Glasshouse</h2>
        <p className="text-base md:text-lg text-ink/80 mb-8 md:mb-10">
          Cara terbaik mengenal venue adalah dengan berkunjung. Tour 45-60 menit dengan tim kami — kapan tanggal yang cocok?
        </p>

        <form className="space-y-4 md:space-y-6 text-left" onSubmit={(e) => e.preventDefault()}>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 md:gap-6">
            <div className="space-y-1.5 md:space-y-2">
              <label className="text-xs md:text-sm font-medium text-ink/70">Nama</label>
              <input type="text" className="w-full bg-canvas-parchment rounded-xl px-4 py-3 md:py-3.5 focus:outline-none focus:ring-2 focus:ring-focus-blue transition-shadow text-base min-h-[44px]" placeholder="Nama lengkap" />
            </div>
            <div className="space-y-1.5 md:space-y-2">
              <label className="text-xs md:text-sm font-medium text-ink/70">WhatsApp</label>
              <input type="tel" className="w-full bg-canvas-parchment rounded-xl px-4 py-3 md:py-3.5 focus:outline-none focus:ring-2 focus:ring-focus-blue transition-shadow text-base min-h-[44px]" placeholder="0812..." />
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 md:gap-6">
            <div className="space-y-1.5 md:space-y-2">
              <label className="text-xs md:text-sm font-medium text-ink/70">Tipe Event</label>
              <select className="w-full bg-canvas-parchment rounded-xl px-4 py-3 md:py-3.5 focus:outline-none focus:ring-2 focus:ring-focus-blue transition-shadow appearance-none text-base min-h-[44px]">
                <option>Intimate Wedding</option>
                <option>Corporate Gathering</option>
                <option>Birthday / Milestone</option>
                <option>Lainnya</option>
              </select>
            </div>
            <div className="space-y-1.5 md:space-y-2">
              <label className="text-xs md:text-sm font-medium text-ink/70">Estimasi Pax</label>
              <input type="number" className="w-full bg-canvas-parchment rounded-xl px-4 py-3 md:py-3.5 focus:outline-none focus:ring-2 focus:ring-focus-blue transition-shadow text-base min-h-[44px]" placeholder="Contoh: 100" />
            </div>
          </div>

          <button className="w-full bg-action-blue text-white py-3.5 md:py-4 rounded-full font-semibold text-base md:text-lg hover:scale-[0.98] transition-transform duration-200 mt-6 shadow-sm min-h-[48px]">
            Schedule Site Visit
          </button>
        </form>

        <div className="mt-8 pt-8 border-t border-black/5">
          <p className="text-sm md:text-base text-ink/60 mb-4">Atau hubungi kami langsung via WhatsApp untuk respons cepat.</p>
          <a href="#" className="inline-block bg-[#25D366] text-white px-6 md:px-8 py-3 rounded-full font-medium hover:scale-[0.98] transition-transform duration-200 shadow-sm min-h-[44px] w-full sm:w-auto">
            WhatsApp Direct
          </a>
        </div>
      </div>
    </section>
  );
}
