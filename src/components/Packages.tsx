import React from 'react';

const packages = [
	{
		title: 'Essential Rental',
		price: 'Rp 25 juta',
		highlight: false,
		features: ['8 jam pemakaian', 'Main Hall ATAU Garden', 'Sound system basic + 2 mic', '6 staff venue', 'AC, listrik, water', 'Free 1 hour rehearsal'],
	},
	{
		title: 'Premium Half-Day',
		price: 'Rp 40 juta',
		highlight: true,
		features: ['12 jam pemakaian', 'Main Hall + Garden (combo)', 'Sound system pro + lighting', '10 staff venue', 'Holding room (Lounge) included', 'Free 2 hours rehearsal'],
	},
	{
		title: 'Full Day Experience',
		price: 'Rp 65 juta',
		highlight: false,
		features: ['Full day venue (12-18 jam)', 'All 3 spaces (Hall, Garden, Lounge)', 'Pro sound + lighting + LED screen', '15 staff venue', 'Wedding consultant on duty', 'Free rehearsal hari sebelumnya'],
	},
];

const addons = [
	{ name: 'Catering partner', price: 'Rp 200k - 800k / pax' },
	{ name: 'Decoration package', price: 'Rp 8jt - 50jt' },
	{ name: 'Photo & video', price: 'Rp 6jt - 25jt' },
	{ name: 'DJ / Live music', price: 'Rp 4jt - 18jt' },
	{ name: 'Valet parking', price: 'Rp 50k / car' },
];

export default function Packages() {
	return (
		<section id="packages" className="section band-cream">
			<div className="container">
				<div className="sec-head">
					<h2>Paket Sewa Venue</h2>
					<p>Pilih paket sesuai kebutuhan. Semuanya termasuk venue, sound system dasar, AC, dan tim teknis.</p>
				</div>

				<div className="pkgs">
					{packages.map((pkg) => (
						<article key={pkg.title} className={pkg.highlight ? 'pkg pkg--feature' : 'pkg'}>
							<h3>{pkg.title}</h3>
							<p className="figure">{pkg.price}</p>
							<ul>
								{pkg.features.map((feat) => (
									<li key={feat}>{feat}</li>
								))}
							</ul>
							<button type="button" className={pkg.highlight ? 'btn btn--primary btn--block' : 'btn btn--block'}>
								Pilih Paket
							</button>
						</article>
					))}
				</div>

				<div className="addons">
					<h3>Optional add-ons</h3>
					<ul>
						{addons.map((a) => (
							<li key={a.name}>
								<span>{a.name}</span>
								<span>{a.price}</span>
							</li>
						))}
					</ul>
				</div>
			</div>
		</section>
	);
}
