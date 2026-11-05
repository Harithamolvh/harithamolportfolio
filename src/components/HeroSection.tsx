'use client';

import Image from 'next/image';
import { ArrowDown, ArrowUpRight, Download, Sparkles } from 'lucide-react';
import { route } from '@qubitcodes/qcrouter';
import '@/lib/navigation';
import { PORTFOLIO_DATA } from '@/data/portfolioData';

interface HeroSectionProps { onOpenResume: () => void; }

/** Three-part editorial hero with a transparent avatar and independently lit crystal lens. */
export default function HeroSection({ onOpenResume }: HeroSectionProps) {
	return (
		<section id='home' className='portfolio-hero glass-surface glass-stationary'>
			<div className='hero-topline'><span>HARITHAMOL V H / SELECTED WORK</span><span>DEVELOPER & CREATIVE THINKER <Sparkles size={12} /></span></div>
			<div className='hero-watermark' aria-hidden='true'>PORTFOLIO</div>
			<div className='hero-layout'>
				<div className='hero-intro' id='about'>
					<p className='hero-reveal hero-eyebrow'>Hi, I’m</p>
					<h1 className='hero-reveal hero-name'>Harithamol<br /><span>V H.</span></h1>
					<p className='hero-reveal hero-role'>{PORTFOLIO_DATA.hero.role}</p>
					<p className='hero-reveal hero-description'>Thoughtful experiences.<br />Powerful foundations.<br />I build web applications that look simple and do extraordinary things.</p>
					<a href={route('contact')} className='hero-reveal glass-btn glass-btn-primary availability-button'><span className='availability-dot' />Available for freelance projects <ArrowUpRight size={17} /></a>
					<button className='hero-reveal glass-btn hero-resume' onClick={onOpenResume}><Download size={15} />View my resume <ArrowUpRight size={15} /></button>
				</div>
				<div className='hero-subject'>
					<div className='portrait-sphere' aria-hidden='true' />
					<Image src={route('avatar')} width={900} height={1202} alt='Illustrative 3D developer avatar in a pearl blazer' className='hero-avatar' priority />
					<div className='portrait-rim' aria-hidden='true' />
					<span className='subject-bubble subject-bubble-one' aria-hidden='true' />
					<span className='subject-bubble subject-bubble-two' aria-hidden='true' />
					<span className='subject-bubble subject-bubble-three' aria-hidden='true' />
					<span className='avatar-caption'>A LITTLE IMAGINATION. A LOT OF ENGINEERING.</span>
				</div>
				<aside className='philosophy-card glass-surface glass-stationary'>
					<div className='philosophy-heading'><span className='glass-label'>Design<br />philosophy</span><Sparkles size={18} strokeWidth={1} /></div>
					<div className='double-bubble' aria-hidden='true'><i /><i /><span>✦</span></div>
					<p>“Beautiful on the surface.<br />Thoughtful at every layer.”</p>
					<a href={route('process')} className='glass-btn round-button' aria-label='Explore my process'><ArrowUpRight size={22} strokeWidth={1.3} /></a>
				</aside>
			</div>
			<div className='hero-bottomline'><span>BASED IN KERALA, INDIA · OPEN TO WHAT’S NEXT</span><a href={route('skills')}>Scroll to explore <ArrowDown size={14} /></a></div>
		</section>
	);
}
