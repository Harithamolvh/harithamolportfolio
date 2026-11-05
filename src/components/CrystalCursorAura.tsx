'use client';

import { useEffect, useRef, type CSSProperties } from 'react';

/** Fixed scene uses seven deterministic bubbles; separate nested transforms allow parallax and float. */
const BUBBLES = [
	{ left: '4%', top: '16%', size: 116, delay: -2, depth: false },
	{ left: '83%', top: '12%', size: 66, delay: -5, depth: false },
	{ left: '72%', top: '38%', size: 174, delay: -8, depth: true },
	{ left: '13%', top: '66%', size: 48, delay: -3, depth: false },
	{ left: '91%', top: '76%', size: 110, delay: -7, depth: false },
	{ left: '40%', top: '86%', size: 64, delay: -1, depth: true },
	{ left: '2%', top: '44%', size: 200, delay: -6, depth: true },
] as const;

/** Paint a fixed pastel light stage; scroll moves its decorations at 0.3x with no React rerenders. */
export default function CrystalCursorAura() {
	const sceneRef = useRef<HTMLDivElement>(null);
	useEffect(() => {
		const preference = window.matchMedia('(prefers-reduced-motion: reduce)');
		let frame = 0;
		/** Map document scroll to the full gradient and viewport-recycled decorative depth. */
		const paint = () => {
			frame = 0;
			const scene = sceneRef.current;
			if (!scene) return;
			const maxScroll = Math.max(1, document.documentElement.scrollHeight - window.innerHeight);
			scene.style.setProperty('--scene-progress', String(window.scrollY / maxScroll));
			scene.style.setProperty('--parallax', preference.matches ? '0px' : String(-(window.scrollY * 0.3 % window.innerHeight)) + 'px');
		};
		/** Batch all scroll and resize updates into a single animation frame. */
		const schedulePaint = () => { if (!frame) frame = requestAnimationFrame(paint); };
		paint();
		window.addEventListener('scroll', schedulePaint, { passive: true });
		window.addEventListener('resize', schedulePaint);
		preference.addEventListener('change', schedulePaint);
		return () => {
			cancelAnimationFrame(frame);
			window.removeEventListener('scroll', schedulePaint);
			window.removeEventListener('resize', schedulePaint);
			preference.removeEventListener('change', schedulePaint);
		};
	}, []);
	return (
		<div ref={sceneRef} className='pastel-scene' aria-hidden='true'>
			<div className='scene-base' />
			<div className='scene-light-orb orb-violet' /><div className='scene-light-orb orb-blue' /><div className='scene-light-orb orb-pink' />
			<div className='scene-bloom bloom-left' /><div className='scene-bloom bloom-right' />
			<div className='scene-streak streak-one' /><div className='scene-streak streak-two' />
			{[0, 1].map((layer) => <div className='scene-parallax-layer' key={layer} style={{ '--layer': layer } as CSSProperties}>
				{BUBBLES.map((bubble, index) => <span key={index} className={'scene-bubble' + (bubble.depth ? ' bubble-distant' : '')} style={{ left: bubble.left, top: bubble.top, width: bubble.size, '--float-delay': bubble.delay + 's' } as CSSProperties} />)}
				<div className='scene-torus' />
			</div>)}
			<div className='scene-sparkles'>✧<span>✦</span><i>✧</i></div>
		</div>
	);
}
