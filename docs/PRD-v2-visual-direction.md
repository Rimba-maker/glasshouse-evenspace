# PRD addendum: visual direction v2 (Hedgerow)

Melengkapi `90-event-space-PRD.md` (lokal, di-gitignore). Konten dan urutan 13 section tidak berubah; yang berubah adalah sistem visual.

## Arah visual
- **Tema:** Hedgerow. Hijau daun gelap sebagai ground, teks krem, satu aksen chartreuse. Dipilih karena glasshouse = hijau + cahaya; malam/senja membuat jendela kaca menyala jadi titik fokus ("Where Light Meets Celebration").
- **Tipografi:** Prata (display, serif kontras tinggi) + Manrope (body). Label sentence case, tanpa huruf kapital ber-spasi.
- **Permukaan:** persegi, flat, tanpa shadow/blur. Kedalaman lewat langkah warna paper (`paper`, `paper-2`, `paper-3`) dan satu band krem untuk Packages.
- **Motion:** hanya state (hover, fokus, pergantian foto). Tanpa Ken Burns, tanpa carousel auto-rotate, tanpa scroll reveal. Semua ada fallback `prefers-reduced-motion`.
- **Foto:** low-key dan warna asli (grade `sat -10, contrast +8, exp -8`), dalam frame `data-slot`.

## Perubahan konten (dari PRD asli)
- Hero: subheadline dipadatkan jadi satu kalimat; stat bar pindah ke baris figur di The Space.
- The Space: emoji diganti baris indeks; ditambah strip foto dan 6 figur (350 m², 30-150 tamu, 2021, 500+ events, 4.9, 7 hari).
- Venue Rooms: kapasitas Main Hall ditambah "120 theatre"; fitur Garden/Lounge dilengkapi sesuai PRD.
- Event Types: 6 kartu jadi indeks + satu frame foto yang berganti saat hover/fokus.
- Capacity & Layout: 5 layout sesuai PRD (ditambah Ceremony + Reception Split), foto diganti denah garis dari hitungan pax.
- Packages: add-ons opsional (PRD) ditambahkan.
- Gallery: lightbox dengan keyboard (Esc, panah) sesuai PRD.
- Preferred Vendors: kategori MC dan Bridal Makeup ditambahkan.
- Location: waktu tempuh jadi tiga figur; tombol Google Maps kini menuju pencarian alamat.
- Testimonial: carousel diganti tiga kutipan statis dengan foto.
- Site Visit: field "Target Tanggal Event" dan "Preferred Site Visit Slot" ditambahkan; form memberi pesan jujur bahwa belum terhubung ke backend.
- SEO: JSON-LD `EventVenue` + `LocalBusiness`, OG image dari hero.

## Foto
Semua foto adalah **stand-in dari Pexels** (`public/photos/`, katalog di `src/shared/photos.ts`, kredit di footer). Ganti dengan foto The Glasshouse sendiri dengan menimpa file bernama sama. Bagian "Past Celebrations" dan Testimonial saat ini memakai foto stand-in, bukan acara yang pernah digelar.

## Perlu diverifikasi pemilik
"500+ Events Hosted", "4.9 Rating", kapasitas Garden (100/60) dan Lounge (40/20), serta kutipan testimonial dibawa apa adanya dari konten lama.
