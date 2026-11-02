import React, { useState } from 'react';
import { photos, src } from '../shared/photos';

const events = [
	{ title: 'Intimate Wedding', desc: '30-150 pax, indoor & outdoor ceremony', photo: photos.evWedding },
	{ title: 'Corporate Gathering', desc: 'Year-end party, gala dinner, launching', photo: photos.evCorporate },
	{ title: 'Birthday & Milestone', desc: 'Sweet 17, 50th anniversary, retirement', photo: photos.evBirthday },
	{ title: 'Pre-Wedding & Engagement', desc: 'Half-day rental, full styling', photo: photos.evPrewedding },
	{ title: 'Graduation & Reunion', desc: 'Class reunion, college graduation', photo: photos.evGraduation },
	{ title: 'Brand Activation', desc: 'Pop-up, exhibition, fashion show', photo: photos.evBrand },
];

export default function EventTypes() {
	const [active, setActive] = useState(0);

	return (
		<section id="events" className="section events">
			<div className="container">
				<div className="sec-head">
					<h2>Cocok Untuk Berbagai Momen</h2>
					<p>Dari perayaan intim hingga acara korporat berskala besar, kami menyediakan ruang yang fleksibel sesuai kebutuhan Anda.</p>
				</div>

				<div className="grid12">
					<ul className="index span-6">
						{events.map((event, i) => (
							<li key={event.title}>
								<button
									type="button"
									className="events__row"
									aria-pressed={active === i}
									onClick={() => setActive(i)}
									onMouseEnter={() => setActive(i)}
									onFocus={() => setActive(i)}
								>
									<span className="name">{event.title}</span>
									<span>{event.desc}</span>
								</button>
							</li>
						))}
					</ul>

					<div className="events__frame span-6">
						<div data-slot="event" data-alt={events[active].photo.alt}>
							{events.map((event, i) => (
								<img
									key={event.title}
									src={src(event.photo.file)}
									alt={i === active ? event.photo.alt : ''}
									aria-hidden={i !== active}
									data-active={i === active ? '' : undefined}
									loading={i === 0 ? 'eager' : 'lazy'}
								/>
							))}
						</div>
					</div>
				</div>
			</div>
		</section>
	);
}
