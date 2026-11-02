import React from 'react';
import { photos, src } from '../shared/photos';

const testimonials = [
	{
		quote: "Kami cari venue 4 bulan sampai akhirnya menemukan The Glasshouse. Konsep glasshouse-nya bikin foto kami magical, tamu pada bilang 'venue terindah yang pernah didatangi'. Tim venue super responsif.",
		author: 'Nadia & Faris',
		event: 'Wedding February 2025',
		photo: photos.gCouple,
	},
	{
		quote: 'Year-end party 120 tamu, semua impressed dengan venue. Setup pre-event sampai bongkar, tim sigap. Sudah booking untuk tahun depan.',
		author: 'PT Karya Indonesia',
		event: 'Corporate Event',
		photo: photos.evCorporate,
	},
	{
		quote: 'Sweet 17 anak saya, kombinasi indoor + outdoor garden bikin teman-temannya betah. Foto-fotonya juga aesthetic banget.',
		author: 'Bu Cynthia',
		event: 'Birthday Event',
		photo: photos.gBirthday,
	},
];

function Quote({ t, lead = false }: { t: (typeof testimonials)[number]; lead?: boolean }) {
	return (
		<figure className={lead ? 'quote quote--lead' : 'quote'} style={{ margin: 0 }}>
			<blockquote>
				<p>“{t.quote}”</p>
			</blockquote>
			<figcaption>
				<div data-slot={`testi-${t.author}`} data-alt={t.photo.alt}>
					<img src={src(t.photo.file)} alt={t.photo.alt} loading="lazy" />
				</div>
				<strong>{t.author}</strong>
				<span className="label">{t.event}</span>
			</figcaption>
		</figure>
	);
}

export default function Testimonial() {
	const [lead, ...rest] = testimonials;

	return (
		<section id="testimonials" className="section band-2">
			<div className="container">
				<div className="sec-head">
					<h2>Cerita Dari Couples &amp; Klien Kami</h2>
				</div>

				<Quote t={lead} lead />

				<div className="quote__rest">
					{rest.map((t) => (
						<Quote key={t.author} t={t} />
					))}
				</div>
			</div>
		</section>
	);
}
