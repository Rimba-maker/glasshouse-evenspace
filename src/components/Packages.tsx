import React from 'react';
import clsx from 'clsx';

const packages = [
  {
    title: "Essential Rental",
    price: "Rp 25 juta",
    highlight: false,
    features: [
      "8 jam pemakaian",
      "Main Hall ATAU Garden",
      "Sound system basic + 2 mic",
      "6 staff venue",
      "AC, listrik, water",
      "Free 1 hour rehearsal"
    ]
  },
  {
    title: "Premium Half-Day",
    price: "Rp 40 juta",
    highlight: true,
    features: [
      "12 jam pemakaian",
      "Main Hall + Garden (combo)",
      "Sound system pro + lighting",
      "10 staff venue",
      "Holding room (Lounge) included",
      "Free 2 hours rehearsal"
    ]
  },
  {
    title: "Full Day Experience",
    price: "Rp 65 juta",
    highlight: false,
    features: [
      "Full day venue (12-18 jam)",
      "All 3 spaces (Hall, Garden, Lounge)",
      "Pro sound + lighting + LED screen",
      "15 staff venue",
      "Wedding consultant on duty",
      "Free rehearsal hari sebelumnya"
    ]
  }
];

export default function Packages() {
  return (
    <section id="packages" className="py-20 md:py-[120px] bg-canvas-dark text-white px-6">
      <div className="max-w-[1200px] mx-auto">
        <div className="text-center mb-12 md:mb-16 space-y-3 md:space-y-4">
          <h2 className="text-3xl md:text-5xl font-semibold tracking-tighter">Paket Sewa Venue</h2>
          <p className="text-base md:text-lg text-white/70 max-w-2xl mx-auto">Pilih paket sesuai kebutuhan — semuanya termasuk venue, sound system dasar, AC, dan tim teknis.</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 lg:gap-6 items-center">
          {packages.map((pkg, i) => (
            <div 
              key={i}
              className={clsx(
                "rounded-[32px] p-8 md:p-10 flex flex-col transition-transform duration-300 md:hover:-translate-y-2",
                pkg.highlight 
                  ? "bg-white text-ink shadow-[var(--shadow-product)] scale-100 lg:scale-105 z-10" 
                  : "bg-white/5 border border-white/10"
              )}
            >
              <h3 className="text-xl md:text-2xl font-semibold tracking-tight mb-2">{pkg.title}</h3>
              <div className="mb-6 md:mb-8">
                <span className="text-3xl md:text-4xl font-semibold tracking-tighter">{pkg.price}</span>
              </div>

              <ul className="space-y-3 md:space-y-4 mb-8 md:mb-10 flex-1">
                {pkg.features.map((feat, j) => (
                  <li key={j} className="flex items-start gap-3">
                    <svg className={clsx("w-5 h-5 mt-0.5 shrink-0", pkg.highlight ? "text-action-blue" : "text-white/40")} viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z" clipRule="evenodd" />
                    </svg>
                    <span className={clsx("text-sm md:text-[15px]", pkg.highlight ? "text-ink/80" : "text-white/80")}>{feat}</span>
                  </li>
                ))}
              </ul>

              <button className={clsx(
                "w-full py-4 rounded-full font-semibold transition-transform duration-200 hover:scale-95",
                pkg.highlight 
                  ? "bg-action-blue text-white" 
                  : "bg-white/10 text-white hover:bg-white/20"
              )}>
                Pilih Paket
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
