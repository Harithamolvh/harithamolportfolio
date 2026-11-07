'use client';

import { useEffect } from 'react';

/** Targets keep text server-rendered while cards and section content reveal near the viewport. */
const REVEAL_TARGETS = '[data-section-heading],.skill-tile,.skills-caption,.process-step,.project-filters,.project-card,.gallery-more,.stats-panel,.experience-entry,.milestone-card,.contact-showcase,.contact-open-button,.portfolio-footer';

/** Reveal each element once, including cards added later by filtering or lazy components. */
export default function SectionReveals() {
	useEffect(() => {
		if (!('IntersectionObserver' in window)) return;
		const preference = window.matchMedia('(prefers-reduced-motion: reduce)');
		const tracked = new Set<HTMLElement>();

		/** Finish immediately for keyboard navigation or motion preference changes. */
		const finish = (element: HTMLElement) => {
			element.dataset.reveal = 'done';
			observer.unobserve(element);
		};
		const observer = new IntersectionObserver((entries) => {
			for (const entry of entries) {
				if (!entry.isIntersecting) continue;
				const element = entry.target as HTMLElement;
				element.dataset.reveal = 'visible';
				observer.unobserve(element);
			}
		}, { rootMargin: '0px 0px 60px 0px', threshold: 0.01 });

		/** Stagger within the current row, so mobile columns never accumulate long delays. */
		const register = (element: HTMLElement) => {
			if (tracked.has(element)) return;
			tracked.add(element);
			const siblings = Array.from(element.parentElement?.children ?? []).filter((sibling) => sibling.matches('.skill-tile,.process-step,.project-card')) as HTMLElement[];
			const row = siblings.filter((sibling) => Math.abs(sibling.offsetTop - element.offsetTop) < 8);
			const delay = Math.max(0, row.indexOf(element)) * 90;
			element.style.setProperty('--reveal-delay', `${Math.min(delay, 450)}ms`);
			if (preference.matches || element.getBoundingClientRect().top < window.innerHeight) {
				finish(element);
			} else {
				element.dataset.reveal = 'waiting';
				observer.observe(element);
			}
		};
		/** Include newly inserted project cards without watching animation/style mutations. */
		const scan = (root: ParentNode) => {
			if (root instanceof HTMLElement && root.matches(REVEAL_TARGETS)) register(root);
			root.querySelectorAll<HTMLElement>(REVEAL_TARGETS).forEach(register);
		};
		scan(document);
		const changes = new MutationObserver((records) => {
			for (const record of records) {
				for (const node of record.addedNodes) if (node instanceof HTMLElement) scan(node);
			}
			for (const element of tracked) {
				if (!element.isConnected) { observer.unobserve(element); tracked.delete(element); }
			}
		});
		changes.observe(document.querySelector('.portfolio-page') ?? document.body, { childList: true, subtree: true });
		/** Release animation transforms afterward so card hover interactions work normally. */
		const onAnimationEnd = (event: AnimationEvent) => {
			if (event.animationName === 'section-reveal' && event.target instanceof HTMLElement) finish(event.target);
		};
		/** Keyboard users must never focus an invisible control inside a waiting section. */
		const onFocus = (event: FocusEvent) => {
			if (!(event.target instanceof HTMLElement)) return;
			const element = event.target.closest<HTMLElement>('[data-reveal]');
			if (element) finish(element);
		};
		const onPreferenceChange = () => { if (preference.matches) tracked.forEach(finish); };
		document.addEventListener('animationend', onAnimationEnd);
		document.addEventListener('focusin', onFocus);
		preference.addEventListener('change', onPreferenceChange);
		return () => {
			observer.disconnect();
			changes.disconnect();
			document.removeEventListener('animationend', onAnimationEnd);
			document.removeEventListener('focusin', onFocus);
			preference.removeEventListener('change', onPreferenceChange);
			tracked.forEach((element) => { delete element.dataset.reveal; element.style.removeProperty('--reveal-delay'); });
		};
	}, []);
	return null;
}
