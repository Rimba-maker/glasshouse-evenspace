# PRD: The Glasshouse Event Space — Event Space & Function Hall

## 1. Brand Identity

**Nama Brand:** The Glasshouse Event Space
**Alasan Naming:** "Glasshouse" evokes natural-lit, modern, transparent space — sangat in untuk venue intimate wedding & event modern. Memberikan visual immediate (greenhouse-style architecture) yang sudah jadi USP. Memorable, easy to share.

**Tagline:** *"Where Light Meets Celebration."*

**Target Audience:**
- Couple planning intimate wedding (30-150 pax)
- Corporate event planner (gathering, launching, conference)
- Birthday & anniversary planner (private milestone)
- Wedding organizer (B2B partnership)
- Photographer / videographer (rental venue untuk shoot)
- Brand event activation team

**Brand Voice:**
- Tone: Elegant, fresh, inviting, modern-romantic
- Style copywriting: Visual & emotional, fokus pengalaman & feeling
- Avoid: Bahasa "venue" yang generic, fokus berlebihan pada teknikal

---

## 2. Tech Stack

- **Framework:** Astro 5 (SSG)
- **Styling:** Tailwind CSS v4
- **Language:** TypeScript (strict)
- **Animation:** Framer Motion via React islands
- **Deploy:** Netlify (static)
- **Images:** Unsplash + Pexels (image-heavy, editorial)

---

## 3. Section Breakdown

| # | Section | Type | Tujuan |
|---|---------|------|--------|
| 1 | Navbar | `.astro` static | Logo elegant, nav, CTA "Site Visit" |
| 2 | Hero | React island `client:load` | Stunning shot interior glasshouse |
| 3 | The Space | `.astro` static | Story of the space, vision |
| 4 | Venue Rooms | React island `client:visible` | Main hall, garden, lounge area |
| 5 | Event Types | React island `client:visible` | Wedding, corporate, birthday, etc |
| 6 | Capacity & Layout | React island `client:visible` | Floor plans untuk setting berbeda |
| 7 | Packages | React island `client:visible` | Venue rental + optional inclusions |
| 8 | Gallery | React island `client:visible` | Past events lightbox |
| 9 | Preferred Vendors | React island `client:visible` | Catering, decor, photographer partners |
| 10 | Location | `.astro` static | Map, akses, parking |
| 11 | Testimonial | React island `client:visible` | Couple & corporate review |
| 12 | Site Visit CTA | React island `client:idle` | Form schedule site visit |
| 13 | Footer | `.astro` static | Contact, sosmed, partner badges |

---

## 4. Copywriting (Bahasa Indonesia)

### Navbar
- Menu: Space • Event Types • Packages • Gallery • Location
- CTA: **Schedule Site Visit**

### Hero
- **Headline:** Ruang Yang Bersinar Untuk Momen Bersinar.
- **Subheadline:** Venue glasshouse 350 m² dengan natural light, taman tropis, dan kapasitas 30-150 tamu. Sempurna untuk intimate wedding, corporate gathering, dan milestone celebration.
- **CTA Primary:** Lihat Venue
- **CTA Secondary:** Cek Tanggal

Stat bar: "500+ Events Hosted • 4.9 ⭐ Rating • Available 7 Days a Week"

### The Space
- **Heading:** Lebih Dari Sekadar Venue
- **Body:** The Glasshouse adalah ruang dimana kaca, kayu, dan hijau bertemu — dibangun di tahun 2021 dengan visi sederhana: menciptakan tempat dimana cahaya alami menjadi dekorasi terbaik. Setiap sudut dirancang untuk fotogenik, namun tetap fungsional. Tidak ada plafon palsu, tidak ada karpet artificial — hanya pohon yang sengaja dibiarkan tumbuh menembus atap, lantai kayu Jati, dan dinding kaca yang memberi 360° view taman.
- 3 highlight pills:
  - ☀️ Natural Sunlight All Day
  - 🌿 Indoor Garden Concept
  - 📸 Photo-Ready Every Corner

### Venue Rooms
- **Heading:** Tiga Ruang, Satu Pengalaman
- 3 area cards:

**🌿 The Main Hall (350 m²)**
- Kapasitas: 150 standing, 100 banquet, 120 theatre
- Floor-to-ceiling glass walls
- 6m ceiling height with skylight
- Best for: Wedding reception, gala dinner, product launch

**🌳 The Garden (280 m²)**
- Outdoor tropical garden
- String lights & lanterns ready
- Tropical foliage permanent
- Best for: Outdoor ceremony, cocktail hour, sunset event

**🛋️ The Lounge (90 m²)**
- Intimate setting, sofa seating
- Bar counter included
- Mood lighting controlled
- Best for: After-party, intimate dinner, VIP holding room

### Event Types
- **Heading:** Cocok Untuk Berbagai Momen
- 6 event cards:
  - 💍 **Intimate Wedding** — 30-150 pax, indoor & outdoor ceremony
  - 🥂 **Corporate Gathering** — Year-end party, gala dinner, launching
  - 🎂 **Birthday & Milestone** — Sweet 17, 50th anniversary, retirement
  - 📸 **Pre-Wedding & Engagement** — Half-day rental, full styling
  - 🎓 **Graduation & Reunion** — Class reunion, college graduation
  - 🏢 **Brand Activation** — Pop-up, exhibition, fashion show

### Capacity & Layout
- **Heading:** Layout Yang Fleksibel
- **Subheading:** Konfigurasi disesuaikan dengan jenis acara — tim kami siap konsultasi.

Tab layouts (visual floor plan):
- **Banquet Round Tables** — 100 pax (10-12 per round)
- **Long Table Family Style** — 80 pax (3 long tables)
- **Theatre Style** — 120 pax (rows of chairs)
- **Cocktail Standing** — 150 pax (high tables)
- **Ceremony + Reception Split** — 100 pax ceremony, dilanjut 100 banquet

### Packages
- **Heading:** Paket Sewa Venue
- **Subheading:** Pilih paket sesuai kebutuhan — semuanya termasuk venue, sound system dasar, AC, dan tim teknis.

3 cards:

**🌱 Essential Rental — Rp 25 juta**
- 8 jam pemakaian
- Main Hall ATAU Garden
- Sound system basic + 2 mic
- 6 staff venue
- AC, listrik, water
- Free 1 hour rehearsal

**🌿 Premium Half-Day — Rp 40 juta**
- 12 jam pemakaian
- Main Hall + Garden (combo)
- Sound system pro + lighting
- 10 staff venue
- Holding room (Lounge) included
- Free 2 hours rehearsal

**🌳 Full Day Experience — Rp 65 juta**
- Full day venue (12-18 jam)
- All 3 spaces (Hall, Garden, Lounge)
- Pro sound + lighting + LED screen
- 15 staff venue
- Wedding consultant on duty
- Free rehearsal hari sebelumnya

Optional add-ons:
- Catering partner (Rp 200k - 800k / pax)
- Decoration package (Rp 8jt - 50jt)
- Photo & video (Rp 6jt - 25jt)
- DJ / Live music (Rp 4jt - 18jt)
- Valet parking (Rp 50k / car)

### Gallery
- **Heading:** Past Celebrations
- Filter: All • Wedding • Corporate • Birthday • Daytime • Evening
- Masonry grid 30+ foto event yang pernah dihost, lightbox-able

### Preferred Vendors
- **Heading:** Tim Yang Kami Percaya
- **Body:** Daftar vendor yang sering bekerja sama dengan The Glasshouse. Kalian bebas memilih vendor sendiri, tapi tim ini sudah familiar dengan venue dan layanannya teruji.

Categories:
- **Catering:** Mahakarya Catering, Setiabudi Boga, La Marquise
- **Decoration:** Mawarprana Decor, Suasana Floral, Akasia Studio
- **Photo & Video:** Lumiere Photoworks, Sinaran Cinema, Frame & Light Studio
- **Music:** Tujuh Strings, DJ Andro, Acoustic Trio Bandung
- **MC:** MC Andre, MC Bella, MC Ricky
- **Bridal Makeup:** Lola Hartono, Mua Studio Bekasi, Sari Beauty

Logos / mini cards per vendor.

### Location
- **Heading:** Lokasi
- **Body:** The Glasshouse berada di Cilandak, Jakarta Selatan — 15 menit dari Pondok Indah Mall, 30 menit dari Bandara Halim, 45 menit dari Bandara Soetta.
- Address: Jl. Cilandak KKO No. 88, Jakarta Selatan
- Map embed dengan pin lokasi
- Parking: 60 mobil + 40 motor on-site, overflow valet partner

### Testimonial
- **Heading:** Cerita Dari Couples & Klien Kami
- 4 testimonial dengan foto event:

> "Kami cari venue 4 bulan sampai akhirnya menemukan The Glasshouse. Konsep glasshouse-nya bikin foto kami magical, tamu pada bilang 'venue terindah yang pernah didatangi'. Tim venue super responsif."
> — **Nadia & Faris, Wedding February 2025**

> "Year-end party 120 tamu, semua impressed dengan venue. Setup pre-event sampai bongkar, tim sigap. Sudah booking untuk tahun depan."
> — **PT Karya Indonesia, Corporate Event**

> "Sweet 17 anak saya, kombinasi indoor + outdoor garden bikin teman-temannya betah. Foto-fotonya juga aesthetic banget."
> — **Bu Cynthia, Birthday Event**

### Site Visit CTA
- **Heading:** Lihat Langsung The Glasshouse
- **Body:** Cara terbaik mengenal venue adalah dengan berkunjung. Tour 45-60 menit dengan tim kami — kapan tanggal yang cocok?
- Form: Nama, WhatsApp, Tipe Event, Estimasi Pax, Target Tanggal Event, Preferred Site Visit Slot
- **CTA:** Schedule Site Visit

Alternative CTA: **WhatsApp Direct** untuk inquiry cepat

### Footer
- Tagline: *"Light up your milestone."*
- Operating hours: 09:00-22:00 (booking), 24/7 (event)
- Sosmed: IG (@theglasshouse.id), Pinterest, TikTok (venue setup tutorial)
- Partner badges: Bridestory, The Bride Department, Hipwee Wedding

---

## 5. Image References

| Section | Source | URL / Search Term | Alt Text | Dimensi |
|---------|--------|-------------------|----------|---------|
| Hero | Unsplash | https://unsplash.com/s/photos/glass-house-event-venue | "Glasshouse interior natural light" | 1920x1080 |
| Hero alt | Pexels | https://www.pexels.com/search/wedding%20venue%20glass/ | "Wedding venue glass walls" | 1920x1080 |
| The Space | Unsplash | https://unsplash.com/s/photos/greenhouse-interior-tropical | "Interior glasshouse hijau" | 1200x800 |
| Main Hall | Pexels | https://www.pexels.com/search/wedding%20reception%20hall/ | "Main hall banquet setup" | 1200x900 |
| Garden | Unsplash | https://unsplash.com/s/photos/garden-wedding-string-lights | "Garden outdoor ceremony" | 1200x900 |
| Lounge | Pexels | https://www.pexels.com/search/intimate%20lounge%20bar/ | "Intimate lounge area" | 1200x900 |
| Event - Wedding | Unsplash | https://unsplash.com/s/photos/intimate-wedding-reception | "Intimate wedding setup" | 800x600 |
| Event - Corporate | Pexels | https://www.pexels.com/search/corporate%20gala%20event/ | "Corporate gala" | 800x600 |
| Event - Birthday | Unsplash | https://unsplash.com/s/photos/birthday-party-elegant | "Birthday milestone" | 800x600 |
| Event - Pre-wedding | Pexels | https://www.pexels.com/search/pre%20wedding%20shoot%20indoor/ | "Pre-wedding shoot venue" | 800x600 |
| Event - Graduation | Unsplash | https://unsplash.com/s/photos/graduation-celebration | "Graduation celebration" | 800x600 |
| Event - Brand activation | Pexels | https://www.pexels.com/search/brand%20launch%20event/ | "Brand activation event" | 800x600 |
| Layout - Banquet | Unsplash | https://unsplash.com/s/photos/round-table-wedding-banquet | "Banquet round tables" | 1200x800 |
| Layout - Long table | Pexels | https://www.pexels.com/search/long%20table%20wedding/ | "Long table family style" | 1200x800 |
| Layout - Theatre | Unsplash | https://unsplash.com/s/photos/theatre-seating-event | "Theatre seating event" | 1200x800 |
| Layout - Cocktail | Pexels | https://www.pexels.com/search/cocktail%20event%20standing/ | "Cocktail standing event" | 1200x800 |
| Gallery (30+) | Unsplash + Pexels | https://unsplash.com/s/photos/wedding-venue-elegant | Berbagai event shots | 800x800 |
| Preferred Vendors | Unsplash | https://unsplash.com/s/photos/wedding-catering-buffet | "Vendor catering setup" | 600x600 |
| Location | Pexels | https://www.pexels.com/search/jakarta%20building%20entrance/ | "Venue entrance" | 1600x900 |
| Testimonial event photos | Unsplash | https://unsplash.com/s/photos/wedding-couple-venue | "Event memorable moment" | 1200x800 |

---

## 6. Animation Spec (Framer Motion)

### Hero (React island, `client:load`)
```tsx
// Hero: slow zoom + light shimmer overlay
const heroKenBurns = {
  scale: [1, 1.1],
  transition: { duration: 25, repeat: Infinity, repeatType: "reverse" }
}

// Light ray / lens flare overlay subtle animation
const lightRayAnimation = {
  opacity: [0.3, 0.6, 0.3],
  rotate: [0, 5, 0],
  transition: { duration: 10, repeat: Infinity }
}

// Headline elegant reveal
const celebrationReveal = {
  hidden: { opacity: 0, y: 40, letterSpacing: "0.15em" },
  visible: { 
    opacity: 1, 
    y: 0, 
    letterSpacing: "0.03em",
    transition: { duration: 1.4, ease: [0.16, 1, 0.3, 1] }
  }
}
```

### The Space (`.astro` + small island)
- Section enter: text reveal sequential
- Highlight pills: pop-in stagger

### Venue Rooms (React island, `client:visible`)
- 3 large stacked cards (alternating left-right image position)
- Image side: parallax slow `y` shift on scroll
- Card hover: image scale slight + text slide
- Smooth transition between rooms in tab/scroll

### Event Types Grid (React island, `client:visible`)
- 6 cards grid stagger reveal `staggerChildren: 0.08`
- Hover: card lift `y: -8`, image scale, overlay slide-up
- Icon: subtle bounce on visible

### Capacity & Layout (React island, `client:visible`)
- Tab switcher: smooth `layoutId` indicator
- Floor plan SVG: animated reveal saat tab switch
- Tables/chairs: stagger draw-in
- Pax count: counter animation

### Packages Cards (React island, `client:visible`)
- 3 cards reveal stagger
- "Premium" card slightly emphasized
- Card hover: lift + border glow + checkmark list pulse
- Optional add-ons: accordion expand

### Gallery (React island, `client:visible`)
- Masonry layout dengan `layout` prop
- Filter tabs: `layoutId` smooth pill animation
- Image hover: subtle scale + dark vignette + caption fade-in
- Lightbox modal: `AnimatePresence` morphing dengan `layoutId`
- Navigation arrow: keyboard support + slide transition

### Preferred Vendors (React island, `client:visible`)
- Category tabs: smooth transition
- Vendor logos: marquee scroll (desktop), stagger grid (mobile)
- Hover vendor: scale slight + tooltip with specialty

### Testimonial (React island, `client:visible`)
- Long-form carousel auto-rotate 10s
- Slide transition slow & smooth
- Event photo paired with quote
- Pause on hover

### Site Visit Form
- Date picker: smooth dropdown
- Form field smooth focus animation
- Submit: button morph + success state with checkmark animation

### Scroll Reveal Pattern (reusable)
```tsx
const eleganceFade = {
  hidden: { opacity: 0, y: 35 },
  visible: { 
    opacity: 1, 
    y: 0, 
    transition: { duration: 0.9, ease: [0.16, 1, 0.3, 1] } 
  }
}
```

### Hydration Strategy
- `client:load` → Hero
- `client:visible` → Rooms, Events, Layout, Packages, Gallery, Vendors, Testimonial
- `client:idle` → Site Visit form
- Sisanya: static

---

## 7. SEO Meta

- **Title:** The Glasshouse Event Space — Intimate Wedding & Event Venue Jakarta
- **Description:** Venue glasshouse 350 m² di Jakarta Selatan untuk intimate wedding, corporate gathering, & milestone event. Kapasitas 30-150 pax. Site visit gratis.
- **Keywords:** event space jakarta, intimate wedding venue, function hall jakarta, glasshouse venue, corporate event venue jakarta selatan
- **OG Image:** Cinematic shot venue dengan natural light (1200x630)
- **Schema:** `EventVenue` + `LocalBusiness` schema
