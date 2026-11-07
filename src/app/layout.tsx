import type { Metadata } from "next";
import '@/app/globals.css';
import '@/app/portfolio.css';

/** Shared search and social identity for the portfolio. */
const SITE_TITLE = 'Harithamol V H | Full Stack Developer';
const SITE_DESCRIPTION = 'Harithamol V H is a Full Stack Developer building thoughtful web applications, SaaS platforms, and digital experiences. Explore projects, experience, and get in touch.';

export const metadata: Metadata = {
	metadataBase: new URL('https://harithamol.com'),
	title: SITE_TITLE,
	description: SITE_DESCRIPTION,
	applicationName: 'Harithamol Portfolio',
	keywords: ['Harithamol V H', 'Haritha', 'Full Stack Developer', 'Web Developer', 'Software Developer', 'SaaS Development', 'Web Applications', 'Developer Portfolio'],
	authors: [{ name: 'Harithamol V H', url: 'https://harithamol.com' }],
	creator: 'Harithamol V H',
	alternates: { canonical: '/' },
	robots: { index: true, follow: true },
	openGraph: {
		title: SITE_TITLE,
		description: SITE_DESCRIPTION,
		url: 'https://harithamol.com',
		siteName: 'Harithamol V H',
		locale: 'en_IN',
		type: 'website',
	},
	twitter: {
		card: 'summary_large_image',
		title: SITE_TITLE,
		description: SITE_DESCRIPTION,
		images: ['/opengraph-image'],
	},
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth antialiased">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&family=JetBrains+Mono:wght@400;500;700&family=Sora:wght@400;600;700;800&family=Space+Grotesk:wght@500;700&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="min-h-screen text-[var(--ink-soft)] font-sans selection:bg-[#D9D4FF] selection:text-[#2B2468] overflow-x-hidden">
        {children}
      </body>
    </html>
  );
}
