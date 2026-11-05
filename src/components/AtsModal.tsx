"use client";

import React, { useState } from "react";
import { PORTFOLIO_DATA } from "@/data/portfolioData";
import { useDialogAccessibility } from '@/lib/useDialogAccessibility';
import { Copy, Check, X, Sparkles, FileText } from "lucide-react";
import confetti from "canvas-confetti";

interface AtsModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function AtsModal({ isOpen, onClose }: AtsModalProps) {
  const [copied, setCopied] = useState(false);
  const dialogRef = useDialogAccessibility(isOpen, onClose);

  if (!isOpen) return null;

  const atsPlainText = `HARITHAMOL V H
Veliparambil, Muhamma PO, Alappuzha, Kerala, India
Email: ${PORTFOLIO_DATA.hero.email} | Phone: ${PORTFOLIO_DATA.hero.phone}
Portfolio: ${PORTFOLIO_DATA.hero.portfolioUrl} | GitHub: ${PORTFOLIO_DATA.hero.githubUrl} | LinkedIn: ${PORTFOLIO_DATA.hero.linkedinUrl}

PROFESSIONAL SUMMARY
PHP / Laravel Full Stack Developer with 5 years of commercial experience building scalable web applications, multi-tenant SaaS platforms, e-commerce solutions, and enterprise software. Strong in PHP 8 and object-oriented programming (OOP), RESTful API design and integration, and modern JavaScript/CSS front ends. Experienced with Git, Docker, GitHub Actions CI/CD pipelines, and AWS (EC2, S3), working in Agile teams. Uses AI tools such as ChatGPT and GitHub Copilot daily for code generation, debugging, and workflow optimization.

PROFESSIONAL EXPERIENCE

FULL STACK DEVELOPER
MashupTech, Infopark, Kakkanad, Kerala, India
September 2025 – Present
- Develop and maintain EazyCart, a multi-tenant SaaS e-commerce platform that supports multiple businesses from a single Laravel codebase.
- Designed and implemented tenant-aware architecture enabling isolated store management, customizable configurations, and scalable deployment.
- Contributed to Kshetra, a SaaS Temple Management System covering temple operations, devotees, bookings, and administration.
- Built and integrated RESTful and JSON APIs, MSG91 services (OTP verification, SMS notifications), and secure online payment gateways for donations, bookings, and other transactions.
- Developed dynamic theme-switching so organizations can customize the application's appearance without affecting core functionality.
- Used AI-assisted tools (ChatGPT, GitHub Copilot) for code generation, debugging, and faster delivery.
- Collaborated with cross-functional teams to improve performance, scalability, and user experience across multiple SaaS products.

SOFTWARE ENGINEER
Trusttech Solutions LLP, Kerala, India
February 2025 – September 2025
- Worked on the revamp of the ICMBrokers website, a forex trading platform with multiple payment gateway integrations.
- Implemented secure and efficient payment processing for trading transactions with Redis-backed atomic lock idempotency.
- Collaborated with cross-functional teams to improve user experience and platform functionality.

SOFTWARE ENGINEER
Metric Tree Labs, Palarivattom, Ernakulam, Kerala, India
September 2023 – December 2024
- Spearheaded development of KAMCO, a state government machinery service platform, from inception through delivery.
- Built CI/CD pipelines with GitHub Actions and configured Nginx and Apache hosting; applied Docker for containerization and environment consistency.
- Implemented secure payment gateways (Razorpay, PayPal, Stripe, Cashfree) via REST APIs and webhooks.
- Provided development and support for four additional Laravel projects.

SOFTWARE DEVELOPER
Webrins Technologies, Ambalappuzha, Kerala, India
December 2021 – August 2023
- Delivered 8 web projects for 7 clients using Laravel, PHP, JavaScript, jQuery, Ajax, and relational databases.
- Integrated third-party APIs and payment gateways; worked on web design and front-end development.
- Resolved web application issues reported internally and externally, with a 100% resolution rate.
- Increased website visits by 12% through website modernization and SEO optimization.

TECHNICAL SKILLS
- Backend & Languages: PHP 8, Laravel (v9-v12), Laravel Livewire, Object-Oriented Programming (OOP), MVC Architecture, JavaScript (ES6+), Python
- Frontend: JavaScript (ES6+), HTML5, CSS3 (Flexbox, Grid), jQuery, Ajax, Responsive Design, Tailwind CSS
- APIs & Integrations: RESTful API Design & Integration, GraphQL, JSON APIs, Webhooks, Payment Gateways (Razorpay, Stripe, PayPal, Cashfree), MSG91 SMS & OTP
- Cloud & DevOps: AWS (EC2, S3), Docker Containerization, Git, GitHub Actions CI/CD Pipelines, Linux, Nginx, Apache
- Databases & Storage: MySQL, PostgreSQL, MongoDB, Redis
- AI & Productivity: AI-Assisted Software Development, Prompt Engineering, ChatGPT, GitHub Copilot
- SaaS & Enterprise: Multi-Tenant SaaS Architecture, E-commerce Development, Enterprise Web Applications, Dynamic Theme Customization, Role & Permission Management (RBAC)
- Testing & Messaging: PHPUnit, Automated Testing, RabbitMQ

EDUCATION
Bachelor of Vocation in Software Development
Kerala University (2017 – 2020)

CERTIFICATIONS
- Advanced Python Certification, Inet Infotech, Ernakulam
- Responsive Web Design Certification, freeCodeCamp.org
- JavaScript Algorithms and Data Structures Certification, freeCodeCamp.org

KEY PROJECTS
- EazyCart: Multi-tenant SaaS e-commerce platform with isolated tenant databases, dynamic theming, and multi-gateway payments.
- Kshetra: SaaS Temple Management System with MSG91 OTP/SMS verification and online donation checkout.
- KAMCO: Agricultural machinery service portal for state farmers with automated lifecycle tracking and Docker CI/CD.
- ICMBrokers: High-concurrency forex trading web revamp with multi-currency payment routing.
- Sgate: Cargo shipping logistics platform with webhook tracking.
- Ecogarden: Online room booking and resort reservation system with calendar locks.
- Nakshathra Designs: Bespoke e-commerce modernization boosting page speed by 40%.
- Olmesera, ABM Events, Kanippayyur Official, RDC Media.`;

  const handleCopy = () => {
    navigator.clipboard.writeText(atsPlainText);
    setCopied(true);
    confetti({
      disableForReducedMotion: true,
      colors: ['#C9B8FF', '#9FB8FF', '#FFD6F0', '#BDEBFF'],
      particleCount: 50,
      spread: 60,
      origin: { y: 0.5 },
    });
    setTimeout(() => setCopied(false), 2500);
  };

  return (
    <div ref={dialogRef} role='dialog' aria-modal='true' aria-label='Plain text resume' tabIndex={-1} className="fixed inset-0 z-50 flex items-center justify-center p-4 glass-overlay backdrop-blur-md animate-in fade-in duration-200">
      <div className="crystal-card glass-inset glass-dialog glass-stationary rounded-3xl p-6 sm:p-8 max-w-3xl w-full border border-white/95 flex flex-col max-h-[85vh]">
        {/* Modal Header */}
        <div className="flex items-center justify-between pb-4 border-b border-[var(--glass-border)]">
          <div className="flex items-center gap-2.5">
            <div className="w-10 h-10 rounded-2xl glass-inset flex items-center justify-center text-[var(--ink)] border border-[var(--glass-border)]">
              <FileText className="w-5 h-5" />
            </div>
            <div>
              <h3 className="text-lg font-black text-[var(--ink)] tracking-tight">
                ATS-Optimized Plain Text Resume
              </h3>
              <p className="text-xs text-[var(--ink-soft)] font-medium">
                Parsed and validated for Applicant Tracking Systems (Workday, Greenhouse, Lever)
              </p>
            </div>
          </div>

          <button
            onClick={onClose}
            className="glass-btn w-8 h-8 rounded-full glass-inset hover:border-[var(--bg-4)] border border-[var(--glass-border)] flex items-center justify-center text-[var(--ink-soft)] transition-colors"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        {/* Text Container */}
        <div className="flex-1 overflow-y-auto my-4 p-4 rounded-2xl glass-inset border border-[var(--glass-border)] text-xs font-mono text-[var(--ink)] leading-relaxed whitespace-pre-wrap select-all">
          {atsPlainText}
        </div>

        {/* Modal Footer */}
        <div className="flex flex-wrap gap-3 items-center justify-between pt-3 border-t border-[var(--glass-border)]">
          <span className="text-xs text-[var(--ink-soft)]">
            Click &quot;Copy ATS Text&quot; to paste directly into recruiter portals
          </span>
          <div className="flex items-center gap-2">
            <button
              onClick={onClose}
              className="glass-btn px-4 py-2 rounded-xl text-xs font-semibold text-[var(--ink-soft)] hover:border-[var(--bg-4)]"
            >
              Close
            </button>
            <button
              onClick={handleCopy}
              className="glass-btn inline-flex items-center gap-1.5 px-5 py-2.5 rounded-xl text-xs font-bold text-[var(--ink)] glass-inset hover:border-[var(--bg-4)] transition-all active:scale-95"
            >
              {copied ? (
                <>
                  <Check className="w-4 h-4 text-[var(--ink-soft)]" />
                  <span>Copied to Clipboard!</span>
                </>
              ) : (
                <>
                  <Copy className="w-4 h-4" />
                  <span>Copy ATS Text</span>
                </>
              )}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

