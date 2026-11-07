"use client";

import { PORTFOLIO_DATA } from "@/data/portfolioData";
import { GithubIcon, LinkedinIcon, InstagramIcon } from '@/components/Icons';
import '@/lib/navigation';

import {
  Globe,
  ArrowUpRight,
  Mail,
  MapPin,
} from "lucide-react";

/** Display the contact channels and the entry point to the inquiry dialog. */
export default function ContactSection({ onOpenContact }: { onOpenContact: () => void }) {
  return (
    <section id="contact" className="portfolio-section contact-section">
      <div className="section-heading" data-section-heading><div><span className="section-kicker">GOOD THINGS START WITH A CONVERSATION</span><h2>Let&apos;s make something meaningful.</h2></div><p>A new product. A fresh perspective.<br />I&apos;d love to hear what you&apos;re imagining.</p></div>
			<button type='button' className='glass-btn glass-btn-primary contact-open-button' onClick={onOpenContact} aria-haspopup='dialog'>Let&apos;s talk <ArrowUpRight size={18} /></button>
      <div className="contact-showcase mt-8 glass-surface glass-stationary">
        <div className="contact-channels">
          <a href={'mailto:' + PORTFOLIO_DATA.hero.email}><Mail size={21} strokeWidth={1.2} /><span><small>EMAIL</small>{PORTFOLIO_DATA.hero.email}</span><ArrowUpRight size={17} /></a>
          <a href={PORTFOLIO_DATA.hero.portfolioUrl} target="_blank" rel="noopener noreferrer"><Globe size={21} strokeWidth={1.2} /><span><small>WEBSITE</small>harithamol.com</span><ArrowUpRight size={17} /></a>
          <div><MapPin size={21} strokeWidth={1.2} /><span><small>BASED IN</small>Kerala, India &middot; Open to the world</span></div>
        </div>
        <div className="contact-monogram" aria-label="Harithamol V H">HV<span>LET&apos;S CONNECT</span></div>
        <div className="contact-socials"><span className="section-kicker">ELSEWHERE ON THE INTERNET</span><p>A little more about<br />the person behind the work.</p><div><a className="glass-btn round-button" aria-label="GitHub" href={PORTFOLIO_DATA.hero.githubUrl} target="_blank" rel="noopener noreferrer"><GithubIcon className="w-5 h-5" /></a><a className="glass-btn round-button" aria-label="LinkedIn" href={PORTFOLIO_DATA.hero.linkedinUrl} target="_blank" rel="noopener noreferrer"><LinkedinIcon className="w-5 h-5" /></a><a className='glass-btn round-button' aria-label='Instagram' href={PORTFOLIO_DATA.hero.instagramUrl} target='_blank' rel='noopener noreferrer'><InstagramIcon className='w-5 h-5' /></a></div><span className="contact-local-time">Usually replies within a day</span></div>
      </div>
    </section>
  );
}
