import React from 'react';
import { photos, src } from '../shared/photos';

const rooms = [
	{
		id: 'main-hall',
		title: 'The Main Hall',
		size: '350 m²',
		capacity: '150 standing, 100 banquet, 120 theatre',
		features: ['Floor-to-ceiling glass walls', '6m ceiling height with skylight'],
		bestFor: 'Wedding reception, gala dinner, product launch',
		photo: photos.roomHall,
	},
	{
		id: 'garden',
		title: 'The Garden',
		size: '280 m²',
		capacity: '100 standing, 60 seated',
		features: ['Outdoor tropical garden', 'String lights & lanterns ready', 'Tropical foliage permanent'],
		bestFor: 'Outdoor ceremony, cocktail hour, sunset event',
		photo: photos.roomGarden,
	},
	{
		id: 'lounge',
		title: 'The Lounge',
		size: '90 m²',
		capacity: '40 standing, 20 seated',
		features: ['Intimate sofa seating', 'Bar counter included', 'Mood lighting controlled'],
		bestFor: 'After-party, intimate dinner, VIP holding room',
		photo: photos.roomLounge,
	},
];

export default function VenueRooms() {
	return (
		<section id="rooms" className="section band-2">
			<div className="container">
				<div className="sec-head">
					<h2>Tiga Ruang, Satu Pengalaman</h2>
				</div>

				{rooms.map((room) => (
					<article key={room.id} className="plate grid12">
						<figure className="photo plate__photo span-7">
							<div data-slot={room.id} data-alt={room.photo.alt}>
								<img src={src(room.photo.file)} alt={room.photo.alt} loading="lazy" />
							</div>
						</figure>

						<div className="span-5">
							<h3>{room.title}</h3>
							<span className="label">{room.size}</span>
							<p>
								<strong>Kapasitas:</strong> {room.capacity}
							</p>
							<ul className="plate__list">
								{room.features.map((feature) => (
									<li key={feature}>{feature}</li>
								))}
							</ul>
							<p className="plate__best">
								<strong>Best for:</strong> {room.bestFor}
							</p>
						</div>
					</article>
				))}
			</div>
		</section>
	);
}
