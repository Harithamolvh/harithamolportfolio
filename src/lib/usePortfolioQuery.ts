'use client';

import { useSyncExternalStore } from 'react';

/** Subscribe to browser navigation and same-document UI changes. */
function subscribe(callback: () => void) {
	window.addEventListener('popstate', callback);
	window.addEventListener('portfolio-query', callback);
	return () => {
		window.removeEventListener('popstate', callback);
		window.removeEventListener('portfolio-query', callback);
	};
}

/** Keep filters and overlays deep-linkable while retaining the current section anchor. */
export function updatePortfolioQuery(values: Record<string, string | null>) {
	const url = new URL(window.location.href);
	for (const [key, value] of Object.entries(values)) {
		if (value) url.searchParams.set(key, value);
		else url.searchParams.delete(key);
	}
	window.history.pushState(null, '', url);
	window.dispatchEvent(new Event('portfolio-query'));
}

/** Read a hydration-safe query snapshot; Back and Forward restore UI selections. */
export function usePortfolioQuery() {
	const search = useSyncExternalStore(subscribe, () => window.location.search, () => '');
	return new URLSearchParams(search);
}

