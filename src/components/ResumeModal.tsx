"use client";

import React, { useState } from "react";
import { PORTFOLIO_DATA } from "@/data/portfolioData";
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
import { GithubIcon, LinkedinIcon } from "./Icons";

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

  if (!isOpen) return null;

  const handlePrint = () => {
    window.print();
  };

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-slate-950/70 backdrop-blur-md flex justify-end animate-in fade-in duration-300">
      <div className="w-full max-w-4xl bg-white min-h-screen shadow-2xl flex flex-col justify-between border-l border-slate-200 animate-in slide-in-from-right duration-300">
        {/* Slide-over Control Bar (Hidden during print) */}
        <div className="sticky top-0 z-20 bg-white/90 backdrop-blur-lg px-6 py-4 border-b border-slate-200 flex items-center justify-between print:hidden">
          <div className="flex items-center gap-2">
            <span className="w-2.5 h-2.5 rounded-full bg-emerald-500" />
            <span className="font-bold text-slate-900 text-sm">
              Resume Reader — Harithamol V H
            </span>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={onOpenAts}
              className="text-xs font-semibold px-3 py-1.5 rounded-lg border border-slate-200 text-slate-700 hover:bg-slate-50 transition-colors"
            >
              ATS Plain Text
            </button>

            <button
              onClick={handlePrint}
              className="inline-flex items-center gap-1.5 text-xs font-bold px-3.5 py-1.5 rounded-lg bg-indigo-600 text-white hover:bg-indigo-700 shadow-sm transition-all"
            >
              <Printer className="w-3.5 h-3.5" />
              <span>Print / Save as PDF</span>
            </button>

            <button
              onClick={onClose}
              className="w-8 h-8 rounded-full bg-slate-100 hover:bg-slate-200 flex items-center justify-center text-slate-600 transition-colors ml-2"
              title="Close viewer"
            >
              <X className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* High-Fidelity Printable Resume Document */}
        <div className="p-8 sm:p-12 text-slate-900 font-sans print:p-0">
          {/* Header */}
          <div className="text-center pb-6 border-b-2 border-slate-900">
            <h1 className="text-3xl sm:text-4xl font-black tracking-tight text-slate-900 uppercase">
              HARITHAMOL V H
            </h1>
            <p className="text-xs sm:text-sm text-slate-600 mt-1">
              Veliparambil, Muhamma PO, Alappuzha, Kerala, India
            </p>
            <div className="flex flex-wrap items-center justify-center gap-3 sm:gap-4 mt-2 text-xs font-semibold text-slate-700">
              <span className="flex items-center gap-1">
                <Mail className="w-3.5 h-3.5 text-indigo-600" />
                {PORTFOLIO_DATA.hero.email}
              </span>
              <span>•</span>
              <span className="flex items-center gap-1">
                <Phone className="w-3.5 h-3.5 text-indigo-600" />
                {PORTFOLIO_DATA.hero.phone}
              </span>
              <span>•</span>
              <span className="flex items-center gap-1">
                <Globe className="w-3.5 h-3.5 text-indigo-600" />
                harithamol.com
              </span>
              <span>•</span>
              <a
                href={PORTFOLIO_DATA.hero.linkedinUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="text-indigo-600 hover:underline flex items-center gap-0.5"
              >
                <LinkedinIcon className="w-3.5 h-3.5" /> LinkedIn
              </a>
              <span>•</span>
              <a
                href={PORTFOLIO_DATA.hero.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="text-indigo-600 hover:underline flex items-center gap-0.5"
              >
                <GithubIcon className="w-3.5 h-3.5" /> GitHub
              </a>
            </div>
          </div>

          {/* Professional Summary */}
          <div className="mt-6">
            <h2 className="text-sm font-extrabold text-slate-900 uppercase tracking-wider pb-1 border-b border-slate-300 mb-2">
              PROFESSIONAL SUMMARY
            </h2>
            <p className="text-xs sm:text-sm text-slate-700 leading-relaxed text-justify">
              PHP / Laravel Full Stack Developer with 5 years of experience building scalable web applications, multi-tenant SaaS platforms, e-commerce solutions, and enterprise software. Strong in PHP 8 and object-oriented programming, RESTful API design and integration, and modern JavaScript and CSS front ends. Experienced with Git, Docker, GitHub Actions CI/CD, and AWS (EC2, S3), working in Agile teams. Uses AI tools such as ChatGPT and GitHub Copilot daily for code generation, debugging, and workflow optimization.
            </p>
          </div>

          {/* Professional Experience */}
          <div className="mt-6">
            <h2 className="text-sm font-extrabold text-slate-900 uppercase tracking-wider pb-1 border-b border-slate-300 mb-3">
              PROFESSIONAL EXPERIENCE
            </h2>

            {/* Role 1 */}
            <div className="mb-5">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between">
                <div>
                  <h3 className="text-xs font-bold text-slate-900 uppercase tracking-tight">
                    FULL STACK DEVELOPER
                  </h3>
                  <div className="text-xs text-slate-600 font-semibold">
                    MashupTech, Infopark, Kakkanad, Kerala, India
                  </div>
                </div>
                <div className="text-xs font-bold text-slate-500 mt-0.5 sm:mt-0">
                  September 2025 – Present
                </div>
              </div>
              <ul className="mt-2 list-disc list-outside ml-4 space-y-1 text-xs text-slate-700 leading-normal">
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
                  <h3 className="text-xs font-bold text-slate-900 uppercase tracking-tight">
                    SOFTWARE ENGINEER
                  </h3>
                  <div className="text-xs text-slate-600 font-semibold">
                    Trusttech Solutions LLP, Kerala, India
                  </div>
                </div>
                <div className="text-xs font-bold text-slate-500 mt-0.5 sm:mt-0">
                  February 2025 – September 2025
                </div>
              </div>
              <ul className="mt-2 list-disc list-outside ml-4 space-y-1 text-xs text-slate-700 leading-normal">
                <li>Worked on the revamp of the ICMBrokers website, a forex trading platform with multiple payment gateway integrations.</li>
                <li>Implemented secure and efficient payment processing for trading transactions with atomic mutex lock checks.</li>
                <li>Collaborated with cross-functional teams to improve user experience and platform functionality.</li>
              </ul>
            </div>

            {/* Role 3 */}
            <div className="mb-5">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between">
                <div>
                  <h3 className="text-xs font-bold text-slate-900 uppercase tracking-tight">
                    SOFTWARE ENGINEER
                  </h3>
                  <div className="text-xs text-slate-600 font-semibold">
                    Metric Tree Labs, Palarivattom, Ernakulam, Kerala
                  </div>
                </div>
                <div className="text-xs font-bold text-slate-500 mt-0.5 sm:mt-0">
                  September 2023 – December 2024
                </div>
              </div>
              <ul className="mt-2 list-disc list-outside ml-4 space-y-1 text-xs text-slate-700 leading-normal">
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
                  <h3 className="text-xs font-bold text-slate-900 uppercase tracking-tight">
                    SOFTWARE DEVELOPER
                  </h3>
                  <div className="text-xs text-slate-600 font-semibold">
                    Webrins Technologies, Ambalappuzha, Kerala, India
                  </div>
                </div>
                <div className="text-xs font-bold text-slate-500 mt-0.5 sm:mt-0">
                  December 2021 – August 2023
                </div>
              </div>
              <ul className="mt-2 list-disc list-outside ml-4 space-y-1 text-xs text-slate-700 leading-normal">
                <li>Delivered 8 web projects for 7 clients using Laravel, PHP, JavaScript, jQuery, Ajax, and relational databases.</li>
                <li>Integrated third-party APIs and payment gateways; worked on web design and front-end development.</li>
                <li>Resolved web application issues reported internally and externally, with a 100% resolution rate.</li>
                <li>Increased website visits by 12% through website modernization and SEO optimization.</li>
              </ul>
            </div>
          </div>

          {/* Education */}
          <div className="mt-6">
            <h2 className="text-sm font-extrabold text-slate-900 uppercase tracking-wider pb-1 border-b border-slate-300 mb-2">
              EDUCATION
            </h2>
            <div className="flex items-center justify-between text-xs">
              <div>
                <span className="font-bold text-slate-900">
                  Bachelor of Vocation in Software Development
                </span>
                <span className="text-slate-600 block">Kerala University</span>
              </div>
              <span className="font-bold text-slate-500">2017 – 2020</span>
            </div>
          </div>

          {/* Technical Skills Table */}
          <div className="mt-6">
            <h2 className="text-sm font-extrabold text-slate-900 uppercase tracking-wider pb-1 border-b border-slate-300 mb-2">
              TECHNICAL SKILLS
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-12 gap-y-1.5 text-xs text-slate-700">
              <div className="sm:col-span-4 font-bold text-slate-900">Backend &amp; Languages</div>
              <div className="sm:col-span-8">PHP 8, Laravel, Laravel Livewire, Object-Oriented Programming (OOP), MVC Architecture, JavaScript (ES6+)</div>

              <div className="sm:col-span-4 font-bold text-slate-900">Frontend</div>
              <div className="sm:col-span-8">JavaScript (ES6+), HTML5, CSS3 (Flexbox, Grid, custom properties), jQuery, Ajax, Responsive Design</div>

              <div className="sm:col-span-4 font-bold text-slate-900">APIs &amp; Integrations</div>
              <div className="sm:col-span-8">RESTful API Design &amp; Integration, GraphQL, JSON APIs, Webhooks, Payment Gateways (Razorpay, Stripe, PayPal, Cashfree), MSG91 SMS &amp; OTP</div>

              <div className="sm:col-span-4 font-bold text-slate-900">Cloud &amp; DevOps</div>
              <div className="sm:col-span-8">AWS (EC2, S3), Docker, Git, GitHub Actions, CI/CD Pipelines, Linux, Nginx, Apache</div>

              <div className="sm:col-span-4 font-bold text-slate-900">Databases</div>
              <div className="sm:col-span-8">MySQL, PostgreSQL, MongoDB, Redis</div>

              <div className="sm:col-span-4 font-bold text-slate-900">AI &amp; Productivity</div>
              <div className="sm:col-span-8">AI-Assisted Software Development, Prompt Engineering, ChatGPT, GitHub Copilot</div>

              <div className="sm:col-span-4 font-bold text-slate-900">SaaS &amp; Enterprise</div>
              <div className="sm:col-span-8">Multi-Tenant SaaS Architecture, E-commerce Development, Enterprise Web Applications, Theme Customization, Role &amp; Permission Management</div>

              <div className="sm:col-span-4 font-bold text-slate-900">Testing &amp; Messaging</div>
              <div className="sm:col-span-8">PHPUnit, Unit Testing, Functional Testing, RabbitMQ</div>

              <div className="sm:col-span-4 font-bold text-slate-900">Core Competencies</div>
              <div className="sm:col-span-8">Version Control (Git), Agile Development, Performance Optimization, Authentication &amp; Authorization, Code Reviews, Problem Solving</div>
            </div>
          </div>

          {/* Certifications */}
          <div className="mt-6">
            <h2 className="text-sm font-extrabold text-slate-900 uppercase tracking-wider pb-1 border-b border-slate-300 mb-2">
              CERTIFICATIONS
            </h2>
            <ul className="list-disc list-outside ml-4 space-y-0.5 text-xs text-slate-700">
              <li>Advanced Python Certification, Inet Infotech, Ernakulam</li>
              <li>Responsive Web Design Certification, freeCodeCamp.org</li>
              <li>JavaScript Algorithms and Data Structures</li>
            </ul>
          </div>

          {/* Key Projects */}
          <div className="mt-6 mb-8">
            <h2 className="text-sm font-extrabold text-slate-900 uppercase tracking-wider pb-1 border-b border-slate-300 mb-2">
              KEY PROJECTS
            </h2>
            <ul className="list-disc list-outside ml-4 space-y-1 text-xs text-slate-700">
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
        <div className="sticky bottom-0 bg-white/95 px-6 py-4 border-t border-slate-200 flex items-center justify-between print:hidden">
          <span className="text-xs text-slate-500 font-medium">
            5+ Years Commercial Experience • Harithamol V H
          </span>
          <div className="flex items-center gap-2">
            <button
              onClick={handlePrint}
              className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl text-xs font-bold text-white bg-indigo-600 hover:bg-indigo-700 shadow-md"
            >
              <Download className="w-3.5 h-3.5" />
              <span>Download PDF</span>
            </button>
            <button
              onClick={onClose}
              className="px-4 py-2 rounded-xl text-xs font-semibold text-slate-700 hover:bg-slate-100"
            >
              Close
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
