import type { Metadata } from 'next';
import type { ReactNode } from 'react';

export const metadata: Metadata = {
	title: 'Resume | Harithamol V H — Full Stack Developer',
	alternates: { canonical: '/resume' },
};

/** Keep the resume URL canonical separate from the portfolio landing page. */
export default function ResumeLayout({ children }: { children: ReactNode }) {
	return children;
}
