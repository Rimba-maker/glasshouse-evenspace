import React, { useState } from 'react';

const categories = ['Catering', 'Decoration', 'Photo & Video', 'Music', 'MC', 'Bridal Makeup'];
const vendorsData: Record<string, string[]> = {
	Catering: ['Mahakarya Catering', 'Setiabudi Boga', 'La Marquise'],
	Decoration: ['Mawarprana Decor', 'Suasana Floral', 'Akasia Studio'],
	'Photo & Video': ['Lumiere Photoworks', 'Sinaran Cinema', 'Frame & Light Studio'],
	Music: ['Tujuh Strings', 'DJ Andro', 'Acoustic Trio Bandung'],
	MC: ['MC Andre', 'MC Bella', 'MC Ricky'],
	'Bridal Makeup': ['Lola Hartono', 'Mua Studio Bekasi', 'Sari Beauty'],
};

export default function PreferredVendors() {
	const [activeCategory, setActiveCategory] = useState('Catering');

	return (
		<section id="vendors" className="section band-2 vendors">
			<div className="container">
				<div className="sec-head">
					<h2>Tim Yang Kami Percaya</h2>
					<p>Daftar vendor yang sering bekerja sama dengan The Glasshouse. Kalian bebas memilih vendor sendiri, tapi tim ini sudah familiar dengan venue dan layanannya teruji.</p>
				</div>

				<div className="grid12">
					<div className="span-4">
						<div className="vendors__tabs" role="group" aria-label="Kategori vendor">
							{categories.map((cat) => (
								<button key={cat} type="button" className="chip" aria-pressed={activeCategory === cat} onClick={() => setActiveCategory(cat)}>
									{cat}
								</button>
							))}
						</div>
					</div>

					<ul className="index vendors__list span-8">
						{vendorsData[activeCategory].map((vendor) => (
							<li key={vendor}>
								<span className="name">{vendor}</span>
								<span className="label">{activeCategory}</span>
							</li>
						))}
					</ul>
				</div>
			</div>
		</section>
	);
}
