import type { Metadata } from "next";
import '@/app/globals.css';
import '@/app/portfolio.css';

export const metadata: Metadata = {
  title: "Harithamol V H | PHP & Laravel Full-Stack Engineer",
  description:
    "Portfolio of Harithamol V H — 5+ Years experience architecting Multi-Tenant SaaS, Resilient Payment Gateways, Enterprise Portals, Docker & CI/CD with AI-accelerated workflows.",
  keywords: [
    "Harithamol V H",
    "Laravel Developer",
    "PHP 8",
    "Multi-Tenant SaaS",
    "Full Stack Engineer",
    "EazyCart",
    "Kshetra",
    "KAMCO",
    "Payment Gateway Integration",
    "Docker CI/CD",
  ],
  authors: [{ name: "Harithamol V H", url: "https://harithamol.com" }],
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
