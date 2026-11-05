'use client';

import { useEffect, useRef, useState } from 'react';
import { BriefcaseBusiness, HeartHandshake, Layers, Sparkles } from 'lucide-react';
import { PORTFOLIO_STATS } from '@/data/presentationData';

/** Count existing milestones once on entry, with final values available to assistive technology. */
export default function StatsSection() {
	const panelRef = useRef<HTMLDivElement>(null);
	const [progress, setProgress] = useState(1);
	useEffect(() => {
		const preference = window.matchMedia('(prefers-reduced-motion: reduce)');
		if (preference.matches || !('IntersectionObserver' in window)) return;
		let frame = 0;
		const observer = new IntersectionObserver((entries) => {
			if (!entries.some((entry) => entry.isIntersecting)) return;
			observer.disconnect();
			const start = performance.now();
			/** Ease a single shared progress value rather than running four timers. */
			const tick = (now: number) => {
				const elapsed = Math.min(1, (now - start) / 1400);
				setProgress(1 - Math.pow(1 - elapsed, 3));
				if (elapsed < 1) frame = requestAnimationFrame(tick);
			};
			frame = requestAnimationFrame(tick);
		}, { threshold: 0.3 });
		if (panelRef.current) observer.observe(panelRef.current);
		/** Stop an in-flight count immediately if motion preferences change. */
		const stopMotion = () => { if (preference.matches) { cancelAnimationFrame(frame); observer.disconnect(); setProgress(1); } };
		preference.addEventListener('change', stopMotion);
		return () => { observer.disconnect(); cancelAnimationFrame(frame); preference.removeEventListener('change', stopMotion); };
	}, []);
	const icons = [BriefcaseBusiness, Layers, HeartHandshake, Sparkles];
	return (
		<section className='portfolio-section stats-section' aria-labelledby='stats-title'>
			<div className='section-heading' data-section-heading><div><span className='section-kicker'>A LITTLE PERSPECTIVE</span><h2 id='stats-title'>Experience that makes an impact.</h2></div></div>
			<div ref={panelRef} className='stats-panel glass-surface glass-stationary'>
				{PORTFOLIO_STATS.map((stat, index) => {
					const Icon = icons[index];
					return <div className='stat-item' key={stat.label}><div className='stat-icon glass-inset'><Icon size={23} strokeWidth={1.2} /></div><span className='stat-value' aria-hidden='true'>{Math.round(stat.value * progress)}{stat.suffix}</span><span className='sr-only'>{stat.value}{stat.suffix}</span><span className='stat-label'>{stat.label}</span></div>;
				})}
			</div>
		</section>
	);
}
