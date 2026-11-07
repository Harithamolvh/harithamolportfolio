'use client';

import dynamic from 'next/dynamic';
import { LoadingPanel, LoadingDocument } from '@/components/DeferredContent';
import { route } from '@qubitcodes/qcrouter';
import '@/lib/navigation';
import { usePortfolioQuery, updatePortfolioQuery } from '@/lib/usePortfolioQuery';
import Navbar from '@/components/Navbar';
import HeroSection from '@/components/HeroSection';
import TechMatrixSection from '@/components/TechMatrixSection';
import ProjectsSection from '@/components/ProjectsSection';
import ProcessSection from '@/components/ProcessSection';
import StatsSection from '@/components/StatsSection';
import ContactSection from '@/components/ContactSection';
import Footer from '@/components/Footer';
import CrystalCursorAura from '@/components/CrystalCursorAura';
import SectionReveals from '@/components/SectionReveals';

const TimelineSection = dynamic(() => import('@/components/TimelineSection'), { loading: LoadingPanel });
const ResumeModal = dynamic(() => import('@/components/ResumeModal'), { loading: LoadingDocument });
const ContactModal = dynamic(() => import('@/components/ContactModal'), { loading: LoadingDocument });
const AtsModal = dynamic(() => import('@/components/AtsModal'), { loading: LoadingDocument });

/** Compose the crystal portfolio; query parameters are the source of overlay and filter state. */
export default function Home() {
	const query = usePortfolioQuery();
	const openResume = () => updatePortfolioQuery({ action: 'resume' });
	const openContact = () => updatePortfolioQuery({ action: 'contact' });
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
				<TimelineSection />
				<ContactSection onOpenContact={openContact} />
			</main>
			<Footer />
			{query.get('action') === 'resume' && <ResumeModal isOpen onClose={closeOverlay} onOpenAts={openAts} />}
			{query.get('action') === 'contact' && <ContactModal onClose={closeOverlay} />}
			{query.get('action') === 'ats' && <AtsModal isOpen onClose={closeOverlay} />}
		</div>
	);
}
