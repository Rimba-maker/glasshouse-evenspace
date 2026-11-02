import React, { useState } from 'react';

type Plan = { id: string; label: string; capacity: string; pax: number; desc: string };

const layouts: Plan[] = [
	{ id: 'banquet', label: 'Banquet Round Tables', capacity: '100 pax', pax: 100, desc: '10-12 per round table' },
	{ id: 'family', label: 'Long Table Family Style', capacity: '80 pax', pax: 80, desc: '3 long tables' },
	{ id: 'theatre', label: 'Theatre Style', capacity: '120 pax', pax: 120, desc: 'Rows of chairs' },
	{ id: 'cocktail', label: 'Cocktail Standing', capacity: '150 pax', pax: 150, desc: 'High tables, standing' },
	{ id: 'split', label: 'Ceremony + Reception Split', capacity: '100 + 100 pax', pax: 100, desc: '100 pax ceremony, dilanjut 100 banquet' },
];

const range = (n: number) => Array.from({ length: n }, (_, i) => i);

// Hall outline is 400 x 280; every plan below is drawn from the counts on this page.
function Banquet({ x0 = 60, cols = 5, rows = 2, dx = 70, y0 = 95, dy = 100 }) {
	return (
		<>
			{range(rows).flatMap((r) => range(cols).map((c) => <circle key={`${r}-${c}`} cx={x0 + c * dx} cy={y0 + r * dy} r="22" />))}
		</>
	);
}

function Seats({ x0, y0, cols, rows, pitch = 17 }: { x0: number; y0: number; cols: number; rows: number; pitch?: number }) {
	return (
		<>
			{range(rows).flatMap((r) => range(cols).map((c) => <rect key={`${r}-${c}`} x={x0 + c * pitch} y={y0 + r * pitch} width="10" height="10" />))}
		</>
	);
}

function PlanDrawing({ id }: { id: string }) {
	return (
		<svg className="plan" viewBox="0 0 400 280" role="img" aria-label="Denah layout ruang" focusable="false">
			<rect className="muted" x="2" y="2" width="396" height="276" />
			{id === 'banquet' && <Banquet />}
			{id === 'family' && range(3).map((i) => <rect key={i} x="40" y={55 + i * 72} width="320" height="30" />)}
			{id === 'theatre' && (
				<>
					<rect x="60" y="24" width="280" height="26" />
					<Seats x0={42} y0={76} cols={16} rows={8} pitch={20} />
				</>
			)}
			{id === 'cocktail' &&
				range(4).flatMap((r) =>
					range(5).map((c) => <circle key={`${r}-${c}`} cx={50 + c * 75 + (r % 2 ? 35 : 0)} cy={45 + r * 63} r="11" />),
				)}
			{id === 'split' && (
				<>
					<line className="muted" x1="200" y1="2" x2="200" y2="278" />
					<rect x="30" y="24" width="140" height="22" />
					<Seats x0={30} y0={72} cols={8} rows={9} pitch={18} />
					{range(2).flatMap((r) => range(2).map((c) => <circle key={`${r}-${c}`} cx={250 + c * 100} cy={85 + r * 110} r="26" />))}
				</>
			)}
		</svg>
	);
}

export default function CapacityLayout() {
	const [activeTab, setActiveTab] = useState(layouts[0].id);
	const active = layouts.find((l) => l.id === activeTab)!;

	const onKey = (e: React.KeyboardEvent, i: number) => {
		if (e.key !== 'ArrowDown' && e.key !== 'ArrowUp') return;
		e.preventDefault();
		const next = layouts[(i + (e.key === 'ArrowDown' ? 1 : layouts.length - 1)) % layouts.length];
		setActiveTab(next.id);
		document.getElementById(`tab-${next.id}`)?.focus();
	};

	return (
		<section id="layout" className="section band-2">
			<div className="container">
				<div className="sec-head">
					<h2>Layout Yang Fleksibel</h2>
					<p>Konfigurasi disesuaikan dengan jenis acara. Tim kami siap konsultasi.</p>
				</div>

				<div className="grid12">
					<div className="lay__tabs span-5" role="tablist" aria-label="Pilih layout" aria-orientation="vertical">
						{layouts.map((layout, i) => (
							<button
								key={layout.id}
								id={`tab-${layout.id}`}
								role="tab"
								type="button"
								aria-selected={activeTab === layout.id}
								aria-controls="layout-panel"
								tabIndex={activeTab === layout.id ? 0 : -1}
								className="lay__tab"
								onClick={() => setActiveTab(layout.id)}
								onKeyDown={(e) => onKey(e, i)}
							>
								<span className="name">{layout.label}</span>
								<span className="figure">{layout.capacity}</span>
								<small>{layout.desc}</small>
							</button>
						))}
					</div>

					<div className="span-7" id="layout-panel" role="tabpanel" aria-labelledby={`tab-${active.id}`}>
						<div className="lay__well">
							<PlanDrawing id={active.id} />
						</div>
						<div className="lay__caption">
							<span className="label">{active.label}: {active.desc}</span>
							<span className="figure">{active.capacity}</span>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
}
