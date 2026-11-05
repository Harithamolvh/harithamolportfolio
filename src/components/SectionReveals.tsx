'use client';

import { useEffect } from 'react';

/** Progressively reveal section headings; content remains visible without JavaScript. */
export default function SectionReveals() {
	useEffect(() => {
		const preference = window.matchMedia('(prefers-reduced-motion: reduce)');
		const sections = document.querySelectorAll<HTMLElement>('[data-section-heading]');
		if (!('IntersectionObserver' in window)) return;
		const observer = new IntersectionObserver((entries) => {
			for (const entry of entries) {
				if (!entry.isIntersecting) continue;
				(entry.target as HTMLElement).dataset.reveal = 'visible';
				observer.unobserve(entry.target);
			}
		}, { threshold: 0.08 });
		/** Never conceal content when reduced motion is enabled. */
		const syncPreference = () => {
			observer.disconnect();
			for (const section of sections) {
				delete section.dataset.reveal;
				if (!preference.matches && section.getBoundingClientRect().top > window.innerHeight) {
					section.dataset.reveal = 'waiting';
					observer.observe(section);
				}
			}
		};
		syncPreference();
		preference.addEventListener('change', syncPreference);
		return () => {
			observer.disconnect();
			preference.removeEventListener('change', syncPreference);
			sections.forEach((section) => { delete section.dataset.reveal; });
		};
	}, []);
	return null;
}
