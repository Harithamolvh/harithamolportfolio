'use client';

import { useState, type ReactNode } from 'react';
import { useDialogAccessibility } from '@/lib/useDialogAccessibility';
import { updatePortfolioQuery } from '@/lib/usePortfolioQuery';
import BrandLoader from '@/components/BrandLoader';

/** Reserve a useful loading area while an optional module downloads. */
export function LoadingPanel() {
	return <div className='deferred-loading' role='status'><span className='deferred-loading-bar' /><span className='deferred-loading-bar' /><span className='deferred-loading-bar' /><span className='sr-only'>Loading content…</span></div>;
}

/** Keep the overlay dismissible and focus trapped even before its document code arrives. */
export function LoadingDocument() {
	const close = () => updatePortfolioQuery({ action: null });
	const dialogRef = useDialogAccessibility(true, close);
	return <div ref={dialogRef} role='dialog' aria-modal='true' aria-label='Loading content' tabIndex={-1} className='fixed inset-0 z-50 glass-overlay flex items-center justify-center p-4'><div className='glass-dialog glass-surface w-full max-w-lg p-6 text-center'><BrandLoader /><button type='button' className='glass-btn' onClick={close}>Close</button></div></div>;
}

/** Mount expensive details only on first expansion, retaining their state on later visits. */
export function DeferredDetails({ title, subtitle, children }: { title: string; subtitle: string; children: ReactNode }) {
	const [loaded, setLoaded] = useState(false);
	return <details className='glass-surface glass-stationary' onToggle={(event) => { if (event.currentTarget.open) setLoaded(true); }}><summary>{title} <span>{subtitle}</span></summary>{loaded && children}</details>;
}
