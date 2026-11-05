import { Compass, Gem, Layers, Rocket } from 'lucide-react';
import { PROCESS_STEPS } from '@/data/presentationData';

/** Four connected crystal lenses describe the working process without replacing career facts. */
export default function ProcessSection() {
	const icons = [Compass, Layers, Gem, Rocket];
	return (
		<section id='process' className='portfolio-section process-section'>
			<div className='section-heading' data-section-heading><div><span className='section-kicker'>THE WAY I WORK</span><h2>From possibility to purposeful.</h2></div><p>A clear process.<br />Space for a little magic.</p></div>
			<ol className='process-grid'>
				{PROCESS_STEPS.map((step, index) => {
					const Icon = icons[index];
					return <li key={step.title} className='process-step'>
						<div className='process-sphere'><Icon size={38} strokeWidth={1} /></div>
						<span className='process-number'>0{index + 1}</span><h3>{step.title}</h3><p>{step.text}</p>
					</li>;
				})}
			</ol>
		</section>
	);
}
