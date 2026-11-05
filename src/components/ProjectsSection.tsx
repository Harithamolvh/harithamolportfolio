'use client';

import { ArrowDown, ArrowUpRight, X } from 'lucide-react';
import { useEffect, useRef } from 'react';
import { PORTFOLIO_DATA } from '@/data/portfolioData';
import { usePortfolioQuery, updatePortfolioQuery } from '@/lib/usePortfolioQuery';
import ProjectPreview from '@/components/ProjectPreview';
import TenantSimulator from '@/components/TenantSimulator';
import SmsSimulator from '@/components/SmsSimulator';
import PipelineTracker from '@/components/PipelineTracker';
import ConcurrencySchematic from '@/components/ConcurrencySchematic';

interface ProjectsSectionProps { activeTechFilter: string | null; onSelectTechFilter: (tech: string | null) => void; }

/** Filterable project gallery with shareable, inline project details and retained simulators. */
export default function ProjectsSection({ activeTechFilter, onSelectTechFilter }: ProjectsSectionProps) {
	const query = usePortfolioQuery();
	const category = query.get('category') || 'All';
	const activeProject = PORTFOLIO_DATA.projects.find((project) => project.id === query.get('project'));
	const detailRef = useRef<HTMLDivElement>(null);
	useEffect(() => {
		if (!activeProject || !detailRef.current) return;
		detailRef.current.focus({ preventScroll: true });
		detailRef.current.scrollIntoView({ behavior: window.matchMedia('(prefers-reduced-motion: reduce)').matches ? 'instant' : 'smooth', block: 'start' });
	}, [activeProject]);
	const categories = ['All', 'Multi-Tenant SaaS', 'Fintech & Payments', 'Enterprise & Booking'];
	const filtered = PORTFOLIO_DATA.projects.filter((project) =>
		(category === 'All' || project.categories.includes(category)) &&
		(!activeTechFilter || project.technologies.some((tech) => tech.toLowerCase().includes(activeTechFilter.toLowerCase().replace(/ \(.*\)/, ''))))
	);
	const displayed = query.get('work') === 'all' ? filtered : filtered.slice(0, 6);
	return (
		<section id='projects' className='portfolio-section'>
			<div className='section-heading' data-section-heading><div><span className='section-kicker'>SELECTED WORK / REAL-WORLD IMPACT</span><h2>Ideas, brought to life.</h2></div><p>Considered experiences. Reliable systems.<br />A few things I’ve helped build.</p></div>
			<div className='project-filters' aria-label='Project category filters'>
				{categories.map((item) => <button key={item} className={'glass-btn filter-button' + (category === item ? ' glass-selected' : '')} aria-pressed={category === item} onClick={() => updatePortfolioQuery({ category: item === 'All' ? null : item })}>{item}</button>)}
				{activeTechFilter && <button className='glass-btn filter-button' onClick={() => onSelectTechFilter(null)}>{activeTechFilter}<X size={14} /></button>}
			</div>
			<div className='project-grid'>
				{displayed.map((project) => {
					const index = PORTFOLIO_DATA.projects.indexOf(project);
					return <article key={project.id} className='project-card glass-surface'>
						<ProjectPreview title={project.title} index={index} category={project.category === 'Multi-Tenant SaaS' ? 'SaaS' : 'Web App'} />
						<div className='project-card-content'><div className='project-title-row'><span className='project-number'>{String(index + 1).padStart(2, '0')}</span><h3>{project.title}</h3><button className='glass-btn round-button' aria-label={'Explore ' + project.title} aria-expanded={activeProject?.id === project.id} onClick={() => updatePortfolioQuery({ project: activeProject?.id === project.id ? null : project.id })}><ArrowUpRight size={19} /></button></div>
							<p>{project.subtitle}</p><span className='glass-chip'>{project.category === 'Multi-Tenant SaaS' ? 'SaaS' : 'Web App'}</span>
						</div>
					</article>;
				})}
			</div>
			{filtered.length === 0 && <div className='glass-surface empty-projects'><p>No projects match these filters.</p><button className='glass-btn' onClick={() => { onSelectTechFilter(null); updatePortfolioQuery({ category: null }); }}>Show all work <ArrowUpRight size={16} /></button></div>}
			{filtered.length > 6 && <div className='gallery-more'><button className='glass-btn' onClick={() => updatePortfolioQuery({ work: query.get('work') === 'all' ? null : 'all' })}>{query.get('work') === 'all' ? 'Show selected work' : 'Explore all projects'}<ArrowDown size={16} /></button></div>}
			{activeProject && <div ref={detailRef} tabIndex={-1} className='project-detail glass-surface glass-stationary' role='region' aria-label={activeProject.title + ' details'}>
				<div className='project-detail-heading'><div><span className='section-kicker'>BEHIND THE EXPERIENCE</span><h3>{activeProject.title}</h3></div><button className='glass-btn round-button' aria-label='Close project details' onClick={() => updatePortfolioQuery({ project: null })}><X size={19} /></button></div>
				<p>{activeProject.description}</p><div className='project-detail-tags'>{activeProject.technologies.map((tech) => <span className='glass-chip' key={tech}>{tech}</span>)}</div>
				{activeProject.id === 'eazycart' && <TenantSimulator />}
				{activeProject.id === 'kshetra' && <SmsSimulator />}
				{activeProject.id === 'kamco' && <PipelineTracker />}
				{activeProject.id === 'icmbrokers' && <ConcurrencySchematic />}
			</div>}
		</section>
	);
}
