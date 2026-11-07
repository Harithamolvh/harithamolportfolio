'use client';

import { ArrowUpRight, Award, Briefcase, GraduationCap, MapPin } from 'lucide-react';
import { PORTFOLIO_DATA } from '@/data/portfolioData';

/** Present work in reverse chronological order, followed by learning milestones. */
export default function TimelineSection() {
	const experience = PORTFOLIO_DATA.timeline.filter((item) => item.type === 'commercial');
	const milestones = PORTFOLIO_DATA.timeline.filter((item) => item.type !== 'commercial');

	return (
		<section id='timeline' className='portfolio-section experience-section' aria-labelledby='experience-title'>
			<div className='section-heading' data-section-heading>
				<div><span className='section-kicker'>THE JOURNEY SO FAR</span><h2 id='experience-title'>Experience &amp; milestones.</h2></div>
				<p>From first launches to growing platforms.<br />The teams, projects, and learning along the way.</p>
			</div>
			<ol className='experience-list'>
				{experience.map((item) => (
					<li className='experience-entry' key={item.company + item.period}>
						<div className='experience-date'>
							<span className='experience-node glass-inset' aria-hidden='true'><Briefcase size={18} strokeWidth={1.5} /></span>
							<span>{item.period}</span>
							{item.current && <span className='experience-current'><span aria-hidden='true' />Current role</span>}
						</div>
						<article className='experience-card glass-surface glass-stationary'>
							<div className='experience-card-heading'><div><p className='experience-company'>{item.company}</p><h3>{item.role}</h3></div><ArrowUpRight size={22} strokeWidth={1.3} aria-hidden='true' /></div>
							<p className='experience-location'><MapPin size={14} aria-hidden='true' />{item.location}</p>
							<p className='experience-summary'>{item.summary}</p>
							<ul className='experience-achievements'>{item.achievements.map((achievement) => <li key={achievement}>{achievement}</li>)}</ul>
							<ul className='experience-stack' aria-label='Technologies'>{item.stack.map((technology) => <li className='glass-inset' key={technology}>{technology}</li>)}</ul>
						</article>
					</li>
				))}
			</ol>
			<div className='milestones-heading' data-section-heading><span className='section-kicker'>ALWAYS LEARNING</span><h3>Foundations &amp; milestones</h3></div>
			<div className='milestones-grid'>
				{milestones.map((item) => {
					const Icon = item.type === 'education' ? GraduationCap : Award;
					return (
						<article className='milestone-card glass-surface glass-stationary' key={item.company}>
							<div className='milestone-label'><Icon size={22} strokeWidth={1.5} aria-hidden='true' /><span>{item.period}</span></div>
							<h4>{item.role}</h4><p className='experience-company'>{item.company}</p>
							<p className='experience-summary'>{item.summary}</p>
							<ul className='experience-achievements'>{item.achievements.map((achievement) => <li key={achievement}>{achievement}</li>)}</ul>
						</article>
					);
				})}
			</div>
		</section>
	);
}
