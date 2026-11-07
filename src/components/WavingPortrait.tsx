'use client';

import Image from 'next/image';
import { useCallback, useEffect, useId, useRef, useState } from 'react';
import { route } from '@qubitcodes/qcrouter';
import { HERO_WAVE_VIDEO } from '@config/portrait';
import '@/lib/navigation';

/** Play one continuous greeting, preserving the original portrait as a loading/error fallback. */
export default function WavingPortrait() {
	const edgeFilterId = useId();
	const [playing, setPlaying] = useState(false);
	const [unavailable, setUnavailable] = useState(false);
	const videoRef = useRef<HTMLVideoElement>(null);
	const active = useRef(false);
	const mounted = useRef(false);
	const watchdog = useRef<ReturnType<typeof setTimeout> | null>(null);
	const requestId = useRef(0);

	/** Cancel pending play requests and restore the still image on completion or failure. */
	const stopWave = useCallback(() => {
		requestId.current += 1;
		active.current = false;
		if (watchdog.current) clearTimeout(watchdog.current);
		videoRef.current?.pause();
		if (mounted.current) setPlaying(false);
	}, []);

	useEffect(() => {
		mounted.current = true;
		const preference = window.matchMedia('(prefers-reduced-motion: reduce)');
		/** Stop immediately when the visitor enables reduced motion. */
		const onPreferenceChange = () => { if (preference.matches) stopWave(); };
		/** Avoid leaving the greeting running in an inactive browser tab. */
		const onVisibilityChange = () => { if (document.hidden) stopWave(); };
		preference.addEventListener('change', onPreferenceChange);
		document.addEventListener('visibilitychange', onVisibilityChange);
		return () => {
			mounted.current = false;
			stopWave();
			preference.removeEventListener('change', onPreferenceChange);
			document.removeEventListener('visibilitychange', onVisibilityChange);
		};
	}, [stopWave]);

	/** Ignore duplicate focus/tap triggers and recover from unsupported or rejected playback. */
	const playWave = async () => {
		const video = videoRef.current;
		if (!video || active.current || document.hidden || window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
		active.current = true;
		const currentRequest = ++requestId.current;
		// Bound loading/stalling time so a failed download cannot lock the interaction.
		watchdog.current = setTimeout(stopWave, 8000);
		try {
			video.currentTime = 0;
			await video.play();
		} catch {
			if (currentRequest === requestId.current) stopWave();
		}
	};

	/** Reveal only decoded, playing video so loading never produces a blank portrait. */
	const revealVideo = () => {
		if (!active.current || window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
			stopWave();
			return;
		}
		setPlaying(true);
	};

	/** Retain the original on decode failures, including browsers without transparent WebM. */
	const restoreStillPortrait = () => {
		stopWave();
		setUnavailable(true);
	};

	/** The exported top-left pixel is transparent; an opaque decode would show a black rectangle. */
	const checkTransparency = () => {
		const video = videoRef.current;
		if (!video) return;
		try {
			const canvas = document.createElement('canvas');
			canvas.width = canvas.height = 1;
			const context = canvas.getContext('2d', { willReadFrequently: true });
			if (!context) { restoreStillPortrait(); return; }
			context.drawImage(video, 0, 0, 1, 1, 0, 0, 1, 1);
			if (context.getImageData(0, 0, 1, 1).data[3] > 0) restoreStillPortrait();
		} catch {
			restoreStillPortrait();
		}
	};

	/** Trim matte noise and desaturate only its narrow rim; retain the original interior colours. */
	const edgeFilter = (
		<svg width='0' height='0' aria-hidden='true' focusable='false' className='absolute pointer-events-none'>
			<defs>
				<filter id={edgeFilterId} colorInterpolationFilters='sRGB'>
					<feMorphology in='SourceAlpha' operator='erode' radius='3' result='insetAlpha' />
					<feGaussianBlur in='insetAlpha' stdDeviation='0.4' result='softAlpha' />
					<feColorMatrix in='SourceGraphic' type='saturate' values='0.15' result='neutralEdge' />
					<feComposite in='neutralEdge' in2='softAlpha' operator='in' result='cleanEdge' />
					<feMorphology in='SourceAlpha' operator='erode' radius='5' result='coreAlpha' />
					<feGaussianBlur in='coreAlpha' stdDeviation='0.5' result='softCore' />
					<feComposite in='SourceGraphic' in2='softCore' operator='in' result='originalCore' />
					<feMerge><feMergeNode in='cleanEdge' /><feMergeNode in='originalCore' /></feMerge>
				</filter>
			</defs>
		</svg>
	);
	const edgeStyle = { filter: `url(#${edgeFilterId})` };
	const portrait = <Image src={route('avatar')} width={1086} height={1448} alt='Stylized portrait of Harithamol in a pearl blazer' className='hero-avatar' style={edgeStyle} preload />;

	// Avoid a dead button or missing-asset request until the continuous clip is ready.
	if (!HERO_WAVE_VIDEO.enabled || unavailable) return <>{edgeFilter}{portrait}</>;

	return (
		<>
		{edgeFilter}
		<button
			type='button'
			className='portrait-interaction'
			data-waving={playing}
			aria-label='Harithamol: play a friendly wave'
			onPointerEnter={(event) => { if (event.pointerType === 'mouse') void playWave(); }}
			onFocus={(event) => { if (event.currentTarget.matches(':focus-visible')) void playWave(); }}
			onClick={() => void playWave()}
			onKeyDown={(event) => { if (event.key === 'Escape') stopWave(); }}
		>
			{portrait}
			<video
				ref={videoRef}
				className='portrait-wave-video'
				style={edgeStyle}
				src={route(HERO_WAVE_VIDEO.routeName)}
				muted
				playsInline
				preload='none'
				aria-hidden='true'
				tabIndex={-1}
				onPlaying={revealVideo}
				onLoadedData={checkTransparency}
				onEnded={stopWave}
				onError={restoreStillPortrait}
				onPause={stopWave}
			/>
		</button>
		</>
	);
}
