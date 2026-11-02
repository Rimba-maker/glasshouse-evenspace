import React, { useState } from 'react';

export default function SiteVisit() {
	const [help, setHelp] = useState('');

	const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault();
		const form = e.currentTarget;
		const invalid = Array.from(form.elements).find((el) => el instanceof HTMLInputElement && !el.checkValidity()) as HTMLInputElement | undefined;
		form.querySelectorAll('[aria-invalid]').forEach((el) => el.removeAttribute('aria-invalid'));
		if (invalid) {
			invalid.setAttribute('aria-invalid', 'true');
			invalid.focus();
			setHelp('Ada isian yang belum lengkap. Periksa kolom yang ditandai.');
			return;
		}
		setHelp('Belum ada yang terkirim: formulir ini belum terhubung. Hubungi kami lewat WhatsApp untuk sementara.');
	};

	return (
		<section id="site-visit" className="section">
			<div className="container grid12">
				<div className="span-5">
					<h2>Lihat Langsung The Glasshouse</h2>
					<p className="lead" style={{ marginTop: 'var(--space-lg)' }}>
						Cara terbaik mengenal venue adalah dengan berkunjung. Tour 45-60 menit dengan tim kami. Kapan tanggal yang cocok?
					</p>
					<div style={{ marginTop: 'var(--space-2xl)', display: 'grid', gap: 'var(--space-md)', justifyItems: 'start' }}>
						<p className="label">Atau hubungi kami langsung via WhatsApp untuk respons cepat.</p>
						<a href="#" className="btn btn--secondary">WhatsApp Direct</a>
					</div>
				</div>

				<div className="visit__well span-7">
					<form onSubmit={onSubmit} noValidate data-endpoint="">
						<div className="form-grid">
							<div className="field">
								<label htmlFor="sv-nama">Nama</label>
								<input id="sv-nama" name="nama" type="text" autoComplete="name" required placeholder="Nama lengkap" />
							</div>
							<div className="field">
								<label htmlFor="sv-wa">WhatsApp</label>
								<input id="sv-wa" name="whatsapp" type="tel" autoComplete="tel" required placeholder="0812..." />
							</div>
							<div className="field">
								<label htmlFor="sv-tipe">Tipe Event</label>
								<select id="sv-tipe" name="tipe-event">
									<option>Intimate Wedding</option>
									<option>Corporate Gathering</option>
									<option>Birthday / Milestone</option>
									<option>Lainnya</option>
								</select>
							</div>
							<div className="field">
								<label htmlFor="sv-pax">Estimasi Pax</label>
								<input id="sv-pax" name="pax" type="number" min="1" inputMode="numeric" placeholder="Contoh: 100" />
							</div>
							<div className="field">
								<label htmlFor="sv-tanggal">Target Tanggal Event</label>
								<input id="sv-tanggal" name="tanggal-event" type="date" />
							</div>
							<div className="field">
								<label htmlFor="sv-slot">Preferred Site Visit Slot</label>
								<input id="sv-slot" name="slot-visit" type="date" />
							</div>
						</div>

						<button type="submit" className="btn btn--primary btn--block" style={{ marginTop: 'var(--space-xl)' }}>
							Schedule Site Visit
						</button>
						<p className="form-help" aria-live="polite">{help}</p>
					</form>
				</div>
			</div>
		</section>
	);
}
