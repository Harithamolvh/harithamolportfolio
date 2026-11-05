import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Harithamol V H | Senior PHP / Laravel Full-Stack Engineer",
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
  openGraph: {
    title: "Harithamol V H | Senior PHP / Laravel Full-Stack Engineer",
    description:
      "5+ Years Experience building scalable web applications, multi-tenant SaaS platforms, e-commerce solutions, and enterprise software.",
    url: "https://harithamol.com",
    siteName: "Harithamol V H Portfolio",
    locale: "en_US",
    type: "website",
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
          href="https://fonts.googleapis.com/css2?family=JetBrains+Mono:wght@400;500;700&family=Plus+Jakarta+Sans:wght@300;400;500;600;700;800;900&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="min-h-screen bg-slate-50 font-sans text-slate-900 selection:bg-purple-300 selection:text-purple-950 overflow-x-hidden">
        {children}
      </body>
    </html>
  );
}
