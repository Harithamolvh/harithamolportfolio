'use client';

import { Cloud, Code2, CreditCard, Database, Layers, Server, Sparkles, X } from 'lucide-react';
import { PORTFOLIO_DATA } from '@/data/portfolioData';

interface TechMatrixSectionProps {
	activeTechFilter: string | null;
	onSelectTechFilter: (tech: string | null) => void;
}

/** Square skill tiles use existing skills and retain the project technology filter. */
export default function TechMatrixSection({ activeTechFilter, onSelectTechFilter }: TechMatrixSectionProps) {
	const icons = [Server, Cloud, CreditCard, Database, Code2, Layers];
	const skills = PORTFOLIO_DATA.technicalMatrix.flatMap((category, index) =>
		category.skills.slice(0, 2).map((skill) => ({ ...skill, Icon: icons[index % icons.length] }))
	).slice(0, 12);
	return (
		<section id='skills' className='portfolio-section skills-section'>
			<div className='section-heading' data-section-heading>
				<div><span className='section-kicker'><Sparkles size={14} /> THE TOOLKIT</span><h2>Craft meets capability.</h2></div>
				<p>From the first interaction to the last database query.<br />A considered stack for ambitious ideas.</p>
			</div>
			<div className='skills-panel glass-surface glass-stationary'>
				<div className='skill-grid'>
					{skills.map(({ name, level, Icon }) => <button key={name} className={'skill-tile glass-inset' + (activeTechFilter === name ? ' glass-selected' : '')} aria-pressed={activeTechFilter === name} onClick={() => onSelectTechFilter(activeTechFilter === name ? null : name)}>
						<Icon size={29} strokeWidth={1.2} /><span>{name}</span><small>{level}</small>
					</button>)}
				</div>
				<div className='skills-caption'><span>THOUGHTFUL TOOLS. MEANINGFUL OUTCOMES.</span>{activeTechFilter ? <button className='glass-btn' onClick={() => onSelectTechFilter(null)} aria-label='Clear skill filter'>{activeTechFilter}<X size={14} /></button> : <span>Choose a skill to explore related work <span aria-hidden='true'>↗</span></span>}</div>
			</div>
		</section>
	);
}
