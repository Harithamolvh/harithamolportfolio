'use client';

import { useEffect, useState } from 'react';
import { ArrowUpRight, Menu, X } from 'lucide-react';
import { route } from '@qubitcodes/qcrouter';
import { NAV_ITEMS } from '@/lib/navigation';

interface NavbarProps {
	onOpenResume: () => void;
	onOpenAts: () => void;
}

/** Floating navigation compacts on scroll and keeps its mobile menu keyboard accessible. */
export default function Navbar({ onOpenResume }: NavbarProps) {
	const [scrolled, setScrolled] = useState(false);
	const [open, setOpen] = useState(false);
	useEffect(() => {
		/** Only update React when the navigation crosses its compact threshold. */
		const onScroll = () => setScrolled(window.scrollY > 48);
		const onKey = (event: KeyboardEvent) => { if (event.key === 'Escape') setOpen(false); };
		onScroll();
		window.addEventListener('scroll', onScroll, { passive: true });
		window.addEventListener('keydown', onKey);
		return () => {
			window.removeEventListener('scroll', onScroll);
			window.removeEventListener('keydown', onKey);
		};
	}, []);
	return (
		<header className={'portfolio-nav-wrap' + (scrolled ? ' is-scrolled' : '')}>
			<nav className='portfolio-nav glass-pill' aria-label='Main navigation'>
				<a href={route('home')} className='nav-monogram' aria-label='Harithamol home'>hv<span>✧</span></a>
				<div className='nav-desktop'>
					{NAV_ITEMS.map((item) => <a key={item.name} href={route(item.name)}>{item.label}</a>)}
				</div>
				<div className='nav-actions'>
					<a className='glass-btn glass-btn-primary nav-hire' href={route('contact')}>Hire me <ArrowUpRight size={15} /></a>
					<button className='glass-btn nav-toggle' aria-label={open ? 'Close navigation' : 'Open navigation'} aria-expanded={open} aria-controls='mobile-navigation' onClick={() => setOpen(!open)}>
						{open ? <X size={20} /> : <Menu size={20} />}
					</button>
				</div>
			</nav>
			{open && <div className='mobile-navigation glass-surface glass-dialog glass-stationary' id='mobile-navigation'>
				{NAV_ITEMS.map((item) => <a key={item.name} href={route(item.name)} onClick={() => setOpen(false)}>{item.label}<ArrowUpRight size={16} /></a>)}
				<button className='glass-btn' onClick={() => { setOpen(false); onOpenResume(); }}>View resume <ArrowUpRight size={16} /></button>
			</div>}
		</header>
	);
}
