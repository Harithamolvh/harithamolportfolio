'use client';

import { route } from '@qubitcodes/qcrouter';
import '@/lib/navigation';
import { usePortfolioQuery, updatePortfolioQuery } from '@/lib/usePortfolioQuery';
import Navbar from '@/components/Navbar';
import HeroSection from '@/components/HeroSection';
import TechMatrixSection from '@/components/TechMatrixSection';
import ProjectsSection from '@/components/ProjectsSection';
import ProcessSection from '@/components/ProcessSection';
import StatsSection from '@/components/StatsSection';
import CodeConsoleSection from '@/components/CodeConsoleSection';
import TimelineSection from '@/components/TimelineSection';
import ContactSection from '@/components/ContactSection';
import Footer from '@/components/Footer';
import ResumeModal from '@/components/ResumeModal';
import AtsModal from '@/components/AtsModal';
import CrystalCursorAura from '@/components/CrystalCursorAura';
import SectionReveals from '@/components/SectionReveals';

/** Compose the crystal portfolio; query parameters are the source of overlay and filter state. */
export default function Home() {
	const query = usePortfolioQuery();
	const openResume = () => updatePortfolioQuery({ action: 'resume' });
	const openAts = () => updatePortfolioQuery({ action: 'ats' });
	const closeOverlay = () => updatePortfolioQuery({ action: null });
	const selectSkill = (tech: string | null) => updatePortfolioQuery({ tech });
	return (
		<div className='crystal-canvas portfolio-page'>
			<a className='skip-link glass-btn glass-dialog' href={route('content')}>Skip to content</a>
			<CrystalCursorAura />
			<SectionReveals />
			<Navbar onOpenResume={openResume} onOpenAts={openAts} />
			<main id='main-content' tabIndex={-1} className='portfolio-main'>
				<HeroSection onOpenResume={openResume} />
				<TechMatrixSection activeTechFilter={query.get('tech')} onSelectTechFilter={selectSkill} />
				<ProcessSection />
				<ProjectsSection activeTechFilter={query.get('tech')} onSelectTechFilter={selectSkill} />
				<StatsSection />
				<section className='portfolio-section deeper-work' aria-label='Engineering details'>
					<details className='glass-surface glass-stationary'><summary>Behind the work <span>Architecture & code ↗</span></summary><CodeConsoleSection /></details>
					<details className='glass-surface glass-stationary'><summary>The journey so far <span>Experience & milestones ↗</span></summary><TimelineSection /></details>
				</section>
				<ContactSection />
			</main>
			<Footer />
			<ResumeModal isOpen={query.get('action') === 'resume'} onClose={closeOverlay} onOpenAts={openAts} />
			<AtsModal isOpen={query.get('action') === 'ats'} onClose={closeOverlay} />
		</div>
	);
}
