'use client';

import WavingPortrait from '@/components/WavingPortrait';
import { ArrowDown, ArrowUpRight, FileText, Sparkles } from 'lucide-react';
import { route } from '@qubitcodes/qcrouter';
import '@/lib/navigation';
import { PORTFOLIO_DATA } from '@/data/portfolioData';

interface HeroSectionProps { onOpenResume: () => void; }

/** Three-part editorial hero with a transparent avatar and independently lit crystal lens. */
export default function HeroSection({ onOpenResume }: HeroSectionProps) {
	return (
		<section id='home' className='portfolio-hero glass-surface glass-stationary'>
			<div className='hero-topline'><span>HARITHAMOL V H / SELECTED WORK</span><span>DEVELOPER & CREATIVE THINKER <Sparkles size={12} /></span></div>
			<div className='hero-watermark' aria-hidden='true'>FULL STACK DEV</div>
			<div className='hero-layout'>
				<div className='hero-intro' id='about'>
					<h1 className='hero-reveal hero-name'>Hi, I&apos;am <span>Haritha</span></h1>
					<p className='hero-reveal hero-role'>{PORTFOLIO_DATA.hero.role}</p>
					<p className='hero-reveal hero-description'>Thoughtful experiences.<br />Powerful foundations.<br />I build web applications that look simple and do extraordinary things.</p>
					<button type='button' className='hero-reveal glass-btn hero-resume' onClick={onOpenResume}>
						<span className='resume-button-icon' aria-hidden='true'><FileText size={20} strokeWidth={1.7} /></span>
						<span>View my resume</span>
						<ArrowUpRight className='resume-button-arrow' size={18} aria-hidden='true' />
					</button>
				</div>
				<div className='hero-subject'>
					<div className='portrait-sphere' aria-hidden='true' />
					<WavingPortrait />
					<div className='portrait-rim' aria-hidden='true' />
					<span className='subject-bubble subject-bubble-one' aria-hidden='true' />
					<span className='subject-bubble subject-bubble-two' aria-hidden='true' />
					<span className='subject-bubble subject-bubble-three' aria-hidden='true' />
					<span className='avatar-caption'>A LITTLE IMAGINATION. A LOT OF ENGINEERING.</span>
				</div>
				<aside className='freelance-card glass-surface glass-stationary' aria-labelledby='freelance-heading'>
					<div className='freelance-heading'><h2 id='freelance-heading' className='glass-label'>Contact for<br />freelance</h2><Sparkles size={18} strokeWidth={1} aria-hidden='true' /></div>
					<div className='double-bubble' aria-hidden='true'><i /><i /><span>✦</span></div>
					<div className='freelance-details'>
						<p>Reliable work. Clear communication.</p>
						<p className='freelance-status'><span className='availability-dot' aria-hidden='true' />Available for new projects</p>
					</div>
					<a href={route('contact')} className='glass-btn glass-btn-primary freelance-contact'>Let&apos;s talk <ArrowUpRight size={18} aria-hidden='true' /></a>
				</aside>
			</div>
			<div className='hero-bottomline'><span>BASED IN KERALA, INDIA · OPEN TO WHAT’S NEXT</span><a href={route('skills')}>Scroll to explore <ArrowDown size={14} /></a></div>
		</section>
	);
}
