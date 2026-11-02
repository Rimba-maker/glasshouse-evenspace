import React, { useCallback, useEffect, useRef, useState } from 'react';
import { photos, src } from '../shared/photos';

type Item = { id: number; type: 'wedding' | 'corporate' | 'birthday'; photo: { file: string; alt: string }; span: string };

const galleryImages: Item[] = [
	{ id: 1, type: 'wedding', photo: photos.gNightReception, span: 'w2 h2' },
	{ id: 2, type: 'corporate', photo: photos.evCorporate, span: '' },
	{ id: 3, type: 'wedding', photo: photos.gDance, span: 'h2' },
	{ id: 4, type: 'birthday', photo: photos.gBirthday, span: 'w2' },
	{ id: 5, type: 'wedding', photo: photos.gCourtyard, span: 'w2' },
	{ id: 6, type: 'corporate', photo: photos.gCorpStage, span: '' },
	{ id: 7, type: 'wedding', photo: photos.gCouple, span: 'h2' },
	{ id: 8, type: 'birthday', photo: photos.evBirthday, span: '' },
	{ id: 9, type: 'wedding', photo: photos.gLightsTable, span: '' },
	{ id: 10, type: 'corporate', photo: photos.gCocktail, span: 'w2' },
	{ id: 11, type: 'wedding', photo: photos.gCandle, span: 'w2' },
];

const filters = ['All', 'Wedding', 'Corporate', 'Birthday'];

export default function Gallery() {
	const [activeFilter, setActiveFilter] = useState('All');
	const [open, setOpen] = useState<number | null>(null);
	const closeRef = useRef<HTMLButtonElement>(null);
	const returnRef = useRef<HTMLElement | null>(null);

	const filteredImages = galleryImages.filter((img) => (activeFilter === 'All' ? true : img.type === activeFilter.toLowerCase()));

	const step = useCallback(
		(dir: 1 | -1) => setOpen((cur) => (cur === null ? cur : (cur + dir + filteredImages.length) % filteredImages.length)),
		[filteredImages.length],
	);

	useEffect(() => {
		if (open === null) return;
		const onKey = (e: KeyboardEvent) => {
			if (e.key === 'Escape') setOpen(null);
			if (e.key === 'ArrowRight') step(1);
			if (e.key === 'ArrowLeft') step(-1);
		};
		document.addEventListener('keydown', onKey);
		document.body.style.overflow = 'hidden';
		closeRef.current?.focus();
		return () => {
			document.removeEventListener('keydown', onKey);
			document.body.style.overflow = '';
			returnRef.current?.focus();
		};
	}, [open, step]);

	const current = open === null ? null : filteredImages[open];

	return (
		<section id="gallery" className="section">
			<div className="container">
				<div className="sec-head">
					<h2>Past Celebrations</h2>
					<div className="filters" role="group" aria-label="Filter galeri">
						{filters.map((filter) => (
							<button key={filter} type="button" className="chip" aria-pressed={activeFilter === filter} onClick={() => setActiveFilter(filter)}>
								{filter}
							</button>
						))}
					</div>
				</div>

				<div className="masonry">
					{filteredImages.map((img, i) => (
						<button
							key={img.id}
							type="button"
							className={`masonry__item ${img.span}`}
							aria-label={`Perbesar foto: ${img.photo.alt}`}
							onClick={(e) => {
								returnRef.current = e.currentTarget;
								setOpen(i);
							}}
						>
							<div data-slot={`gallery-${img.id}`} data-alt={img.photo.alt}>
								<img src={src(img.photo.file)} alt="" loading="lazy" />
							</div>
						</button>
					))}
				</div>
			</div>

			{current && (
				<div className="lightbox" role="dialog" aria-modal="true" aria-label="Foto galeri">
					<div className="lightbox__stage">
						<img src={src(current.photo.file)} alt={current.photo.alt} />
					</div>
					<div className="lightbox__bar">
						<span className="label">{current.photo.alt}</span>
						<div style={{ display: 'flex', gap: 'var(--space-xs)' }}>
							<button type="button" className="btn" onClick={() => step(-1)} aria-label="Foto sebelumnya">Sebelumnya</button>
							<button type="button" className="btn" onClick={() => step(1)} aria-label="Foto berikutnya">Berikutnya</button>
							<button ref={closeRef} type="button" className="btn btn--primary" onClick={() => setOpen(null)}>Tutup</button>
						</div>
					</div>
				</div>
			)}
		</section>
	);
}
