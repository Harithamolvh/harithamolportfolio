"use client";

import React, { useState } from "react";
import { PORTFOLIO_DATA } from "@/data/portfolioData";
import { useDialogAccessibility } from '@/lib/useDialogAccessibility';
import {
  X,
  Printer,
  Download,
  Copy,
  Check,
  ExternalLink,
  Briefcase,
  GraduationCap,
  Award,
  Layers,
  MapPin,
  Mail,
  Phone,
  Globe,
} from "lucide-react";
import { GithubIcon, LinkedinIcon } from "@/components/Icons";

interface ResumeModalProps {
  isOpen: boolean;
  onClose: () => void;
  onOpenAts: () => void;
}

export default function ResumeModal({
  isOpen,
  onClose,
  onOpenAts,
}: ResumeModalProps) {
  const [copiedLink, setCopiedLink] = useState(false);
  const dialogRef = useDialogAccessibility(isOpen, onClose);

  if (!isOpen) return null;

  const handlePrint = () => {
    window.print();
  };

  return (
    <div ref={dialogRef} role='dialog' aria-modal='true' aria-label='Resume reader' tabIndex={-1} className="fixed inset-0 z-50 overflow-y-auto glass-overlay backdrop-blur-md flex justify-end animate-in fade-in duration-300">
      <div className="w-full max-w-4xl glass-inset glass-dialog min-h-screen flex flex-col justify-between border-l border-[var(--glass-border)] animate-in slide-in-from-right duration-300">
        {/* Slide-over Control Bar (Hidden during print) */}
        <div className="sticky top-0 z-20 glass-stationary glass-dialog crystal-card glass-inset backdrop-blur-2xl px-4 sm:px-6 py-4 border-b border-white/95 flex flex-wrap gap-3 items-center justify-between print:hidden">
          <div className="flex items-center gap-2">
            <span className="w-2.5 h-2.5 rounded-full glass-inset animate-pulse" />
            <span className="font-extrabold text-[var(--ink)] text-sm">
              Resume Reader — Harithamol V H
            </span>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={onOpenAts}
              className="glass-btn text-xs font-bold px-3 py-1.5 rounded-xl border border-[var(--glass-border)] text-[var(--ink)] hover:border-[var(--bg-4)] transition-colors"
            >
              ATS Plain Text
            </button>

            <button
              onClick={handlePrint}
              className="glass-btn crystal-sheen inline-flex items-center gap-1.5 text-xs font-black px-4 py-1.5 rounded-xl glass-inset text-[var(--ink)] hover:opacity-95 transition-all border border-white/40"
            >
              <Printer className="w-3.5 h-3.5" />
              <span>Print / Save as PDF</span>
            </button>

            <button
              onClick={onClose}
              className="glass-btn w-8 h-8 rounded-full glass-inset hover:border-[var(--bg-4)] flex items-center justify-center text-[var(--ink-soft)] transition-colors ml-2"
              title="Close viewer"
            >
              <X className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* High-Fidelity Printable Resume Document */}
        <div className="p-8 sm:p-12 text-[var(--ink)] font-sans print:p-0">
          {/* Header */}
          <div className="text-center pb-6 border-b-2 border-[var(--glass-border)]">
            <h1 className="text-3xl sm:text-4xl font-black tracking-tight text-[var(--ink)] uppercase">
              HARITHAMOL V H
            </h1>
            <p className="text-xs sm:text-sm text-[var(--ink-soft)] mt-1">
              Veliparambil, Muhamma PO, Alappuzha, Kerala, India
            </p>
            <div className="flex flex-wrap items-center justify-center gap-3 sm:gap-4 mt-2 text-xs font-semibold text-[var(--ink)]">
              <span className="flex items-center gap-1">
                <Mail className="w-3.5 h-3.5 text-[var(--ink-soft)]" />
                {PORTFOLIO_DATA.hero.email}
              </span>
              <span>•</span>
              <span className="flex items-center gap-1">
                <Phone className="w-3.5 h-3.5 text-[var(--ink-soft)]" />
                {PORTFOLIO_DATA.hero.phone}
              </span>
              <span>•</span>
              <span className="flex items-center gap-1">
                <Globe className="w-3.5 h-3.5 text-[var(--ink-soft)]" />
                harithamol.com
              </span>
              <span>•</span>
              <a
                href={PORTFOLIO_DATA.hero.linkedinUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="text-[var(--ink-soft)] hover:underline flex items-center gap-0.5"
              >
                <LinkedinIcon className="w-3.5 h-3.5" /> LinkedIn
              </a>
              <span>•</span>
              <a
                href={PORTFOLIO_DATA.hero.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="text-[var(--ink-soft)] hover:underline flex items-center gap-0.5"
              >
                <GithubIcon className="w-3.5 h-3.5" /> GitHub
              </a>
            </div>
          </div>

          {/* Professional Summary */}
          <div className="mt-6">
            <h2 className="text-sm font-extrabold text-[var(--ink)] uppercase tracking-wider pb-1 border-b border-[var(--glass-border)] mb-2">
              PROFESSIONAL SUMMARY
            </h2>
            <p className="text-xs sm:text-sm text-[var(--ink)] leading-relaxed text-justify">
              PHP / Laravel Full Stack Developer with 5 years of experience building scalable web applications, multi-tenant SaaS platforms, e-commerce solutions, and enterprise software. Strong in PHP 8 and object-oriented programming, RESTful API design and integration, and modern JavaScript and CSS front ends. Experienced with Git, Docker, GitHub Actions CI/CD, and AWS (EC2, S3), working in Agile teams. Uses AI tools such as ChatGPT and GitHub Copilot daily for code generation, debugging, and workflow optimization.
            </p>
          </div>

          {/* Professional Experience */}
          <div className="mt-6">
            <h2 className="text-sm font-extrabold text-[var(--ink)] uppercase tracking-wider pb-1 border-b border-[var(--glass-border)] mb-3">
              PROFESSIONAL EXPERIENCE
            </h2>

            {/* Role 1 */}
            <div className="mb-5">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between">
                <div>
                  <h3 className="text-xs font-bold text-[var(--ink)] uppercase tracking-tight">
                    FULL STACK DEVELOPER
                  </h3>
                  <div className="text-xs text-[var(--ink-soft)] font-semibold">
                    MashupTech, Infopark, Kakkanad, Kerala, India
                  </div>
                </div>
                <div className="text-xs font-bold text-[var(--ink-soft)] mt-0.5 sm:mt-0">
                  September 2025 – Present
                </div>
              </div>
              <ul className="mt-2 list-disc list-outside ml-4 space-y-1 text-xs text-[var(--ink)] leading-normal">
                <li>Develop and maintain EazyCart, a multi-tenant SaaS e-commerce platform that supports multiple businesses from a single Laravel codebase.</li>
                <li>Designed and implemented tenant-aware architecture enabling isolated store management, customizable configurations, and scalable deployment.</li>
                <li>Contributed to Kshetra, a SaaS Temple Management System covering temple operations, devotees, bookings, and administration.</li>
                <li>Built and integrated RESTful and JSON APIs, MSG91 services (OTP verification, SMS notifications), and secure online payment gateways for donations, bookings, and other transactions.</li>
                <li>Developed dynamic theme-switching so organizations can customize the application&apos;s appearance without affecting core functionality.</li>
                <li>Used AI-assisted tools (ChatGPT, GitHub Copilot) for code generation, debugging, and faster delivery.</li>
                <li>Collaborated with cross-functional teams to improve performance, scalability, and user experience across multiple SaaS products.</li>
              </ul>
            </div>

            {/* Role 2 */}
            <div className="mb-5">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between">
                <div>
                  <h3 className="text-xs font-bold text-[var(--ink)] uppercase tracking-tight">
                    SOFTWARE ENGINEER
                  </h3>
                  <div className="text-xs text-[var(--ink-soft)] font-semibold">
                    Trusttech Solutions LLP, Kerala, India
                  </div>
                </div>
                <div className="text-xs font-bold text-[var(--ink-soft)] mt-0.5 sm:mt-0">
                  February 2025 – September 2025
                </div>
              </div>
              <ul className="mt-2 list-disc list-outside ml-4 space-y-1 text-xs text-[var(--ink)] leading-normal">
                <li>Worked on the revamp of the ICMBrokers website, a forex trading platform with multiple payment gateway integrations.</li>
                <li>Implemented secure and efficient payment processing for trading transactions with atomic mutex lock checks.</li>
                <li>Collaborated with cross-functional teams to improve user experience and platform functionality.</li>
              </ul>
            </div>

            {/* Role 3 */}
            <div className="mb-5">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between">
                <div>
                  <h3 className="text-xs font-bold text-[var(--ink)] uppercase tracking-tight">
                    SOFTWARE ENGINEER
                  </h3>
                  <div className="text-xs text-[var(--ink-soft)] font-semibold">
                    Metric Tree Labs, Palarivattom, Ernakulam, Kerala
                  </div>
                </div>
                <div className="text-xs font-bold text-[var(--ink-soft)] mt-0.5 sm:mt-0">
                  September 2023 – December 2024
                </div>
              </div>
              <ul className="mt-2 list-disc list-outside ml-4 space-y-1 text-xs text-[var(--ink)] leading-normal">
                <li>Spearheaded development of KAMCO, a government machinery service platform, from inception through delivery.</li>
                <li>Built CI/CD pipelines with GitHub Actions and configured Nginx and Apache hosting; applied Docker for containerization and environment consistency.</li>
                <li>Implemented secure payment gateways (Razorpay, PayPal, Stripe, Cashfree) via REST APIs and webhooks.</li>
                <li>Provided development and support for four additional Laravel projects.</li>
              </ul>
            </div>

            {/* Role 4 */}
            <div className="mb-5">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between">
                <div>
                  <h3 className="text-xs font-bold text-[var(--ink)] uppercase tracking-tight">
                    SOFTWARE DEVELOPER
                  </h3>
                  <div className="text-xs text-[var(--ink-soft)] font-semibold">
                    Webrins Technologies, Ambalappuzha, Kerala, India
                  </div>
                </div>
                <div className="text-xs font-bold text-[var(--ink-soft)] mt-0.5 sm:mt-0">
                  December 2021 – August 2023
                </div>
              </div>
              <ul className="mt-2 list-disc list-outside ml-4 space-y-1 text-xs text-[var(--ink)] leading-normal">
                <li>Delivered 8 web projects for 7 clients using Laravel, PHP, JavaScript, jQuery, Ajax, and relational databases.</li>
                <li>Integrated third-party APIs and payment gateways; worked on web design and front-end development.</li>
                <li>Resolved web application issues reported internally and externally, with a 100% resolution rate.</li>
                <li>Increased website visits by 12% through website modernization and SEO optimization.</li>
              </ul>
            </div>
          </div>

          {/* Education */}
          <div className="mt-6">
            <h2 className="text-sm font-extrabold text-[var(--ink)] uppercase tracking-wider pb-1 border-b border-[var(--glass-border)] mb-2">
              EDUCATION
            </h2>
            <div className="flex items-center justify-between text-xs">
              <div>
                <span className="font-bold text-[var(--ink)]">
                  Bachelor of Vocation in Software Development
                </span>
                <span className="text-[var(--ink-soft)] block">Kerala University</span>
              </div>
              <span className="font-bold text-[var(--ink-soft)]">2017 – 2020</span>
            </div>
          </div>

          {/* Technical Skills Table */}
          <div className="mt-6">
            <h2 className="text-sm font-extrabold text-[var(--ink)] uppercase tracking-wider pb-1 border-b border-[var(--glass-border)] mb-2">
              TECHNICAL SKILLS
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-12 gap-y-1.5 text-xs text-[var(--ink)]">
              <div className="sm:col-span-4 font-bold text-[var(--ink)]">Backend &amp; Languages</div>
              <div className="sm:col-span-8">PHP 8, Laravel, Laravel Livewire, Object-Oriented Programming (OOP), MVC Architecture, JavaScript (ES6+)</div>

              <div className="sm:col-span-4 font-bold text-[var(--ink)]">Frontend</div>
              <div className="sm:col-span-8">JavaScript (ES6+), HTML5, CSS3 (Flexbox, Grid, custom properties), jQuery, Ajax, Responsive Design</div>

              <div className="sm:col-span-4 font-bold text-[var(--ink)]">APIs &amp; Integrations</div>
              <div className="sm:col-span-8">RESTful API Design &amp; Integration, GraphQL, JSON APIs, Webhooks, Payment Gateways (Razorpay, Stripe, PayPal, Cashfree), MSG91 SMS &amp; OTP</div>

              <div className="sm:col-span-4 font-bold text-[var(--ink)]">Cloud &amp; DevOps</div>
              <div className="sm:col-span-8">AWS (EC2, S3), Docker, Git, GitHub Actions, CI/CD Pipelines, Linux, Nginx, Apache</div>

              <div className="sm:col-span-4 font-bold text-[var(--ink)]">Databases</div>
              <div className="sm:col-span-8">MySQL, PostgreSQL, MongoDB, Redis</div>

              <div className="sm:col-span-4 font-bold text-[var(--ink)]">AI &amp; Productivity</div>
              <div className="sm:col-span-8">AI-Assisted Software Development, Prompt Engineering, ChatGPT, GitHub Copilot</div>

              <div className="sm:col-span-4 font-bold text-[var(--ink)]">SaaS &amp; Enterprise</div>
              <div className="sm:col-span-8">Multi-Tenant SaaS Architecture, E-commerce Development, Enterprise Web Applications, Theme Customization, Role &amp; Permission Management</div>

              <div className="sm:col-span-4 font-bold text-[var(--ink)]">Testing &amp; Messaging</div>
              <div className="sm:col-span-8">PHPUnit, Unit Testing, Functional Testing, RabbitMQ</div>

              <div className="sm:col-span-4 font-bold text-[var(--ink)]">Core Competencies</div>
              <div className="sm:col-span-8">Version Control (Git), Agile Development, Performance Optimization, Authentication &amp; Authorization, Code Reviews, Problem Solving</div>
            </div>
          </div>

          {/* Certifications */}
          <div className="mt-6">
            <h2 className="text-sm font-extrabold text-[var(--ink)] uppercase tracking-wider pb-1 border-b border-[var(--glass-border)] mb-2">
              CERTIFICATIONS
            </h2>
            <ul className="list-disc list-outside ml-4 space-y-0.5 text-xs text-[var(--ink)]">
              <li>Advanced Python Certification, Inet Infotech, Ernakulam</li>
              <li>Responsive Web Design Certification, freeCodeCamp.org</li>
              <li>JavaScript Algorithms and Data Structures</li>
            </ul>
          </div>

          {/* Key Projects */}
          <div className="mt-6 mb-8">
            <h2 className="text-sm font-extrabold text-[var(--ink)] uppercase tracking-wider pb-1 border-b border-[var(--glass-border)] mb-2">
              KEY PROJECTS
            </h2>
            <ul className="list-disc list-outside ml-4 space-y-1 text-xs text-[var(--ink)]">
              <li><strong>EazyCart:</strong> Multi-tenant SaaS e-commerce platform with payment gateway integration and customizable storefronts.</li>
              <li><strong>Kshetra:</strong> SaaS Temple Management System with MSG91 integration, online payments, and theme customization.</li>
              <li><strong>KAMCO:</strong> Web platform for farmers to schedule machinery servicing, with automated service tracking and digital payments.</li>
              <li><strong>ICMBrokers:</strong> Revamped forex trading platform with integrated payment systems.</li>
              <li><strong>Sgate:</strong> Cargo shipping platform with payment integration.</li>
              <li><strong>Ecogarden:</strong> Online resort and room booking web application.</li>
              <li><strong>Nakshathra Designs:</strong> E-commerce websites for enhanced customer experience.</li>
              <li><strong>Olmesera, ABM Events, Kanippayyur Official, RDC Media.</strong></li>
            </ul>
          </div>
        </div>

        {/* Footer actions (Hidden on print) */}
        <div className="sticky bottom-0 glass-inset glass-dialog px-6 py-4 border-t border-[var(--glass-border)] flex flex-wrap gap-3 items-center justify-between print:hidden">
          <span className="text-xs text-[var(--ink-soft)] font-medium">
            5+ Years Commercial Experience • Harithamol V H
          </span>
          <div className="flex items-center gap-2">
            <button
              onClick={handlePrint}
              className="glass-btn inline-flex items-center gap-1.5 px-4 py-2 rounded-xl text-xs font-bold text-[var(--ink)] glass-inset hover:border-[var(--bg-4)]"
            >
              <Download className="w-3.5 h-3.5" />
              <span>Download PDF</span>
            </button>
            <button
              onClick={onClose}
              className="glass-btn px-4 py-2 rounded-xl text-xs font-semibold text-[var(--ink)] hover:border-[var(--bg-4)]"
            >
              Close
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
