import React from 'react';
import { photos, src } from '../shared/photos';

export default function Hero() {
	return (
		<section className="hero" id="top">
			<div className="hero__photo" data-slot="hero" data-alt={photos.hero.alt}>
				<img src={src(photos.hero.file)} alt={photos.hero.alt} fetchPriority="high" />
			</div>
			<div className="hero__scrim" aria-hidden="true" />

			<div className="container hero__body">
				<h1>Ruang Yang Bersinar Untuk Momen Bersinar.</h1>
				<p className="lead">Glasshouse 350 m² dengan cahaya alami dan taman tropis, untuk 30-150 tamu.</p>
				<div className="hero__actions">
					<a href="#space" className="btn btn--primary">Lihat Venue</a>
					<a href="#site-visit" className="btn btn--secondary">Cek Tanggal</a>
				</div>
			</div>
		</section>
	);
}
