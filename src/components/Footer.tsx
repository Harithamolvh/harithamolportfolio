"use client";

import React from "react";
import { PORTFOLIO_DATA } from "@/data/portfolioData";
import {
  Mail,
  ArrowUp,
  Heart,
  Sparkles,
  Layers,
} from "lucide-react";
import { GithubIcon, LinkedinIcon } from "./Icons";

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="mt-20 border-t border-white/90 bg-white/50 backdrop-blur-2xl py-12 px-4 sm:px-6 lg:px-8 shadow-inner">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
        {/* Brand identity */}
        <div className="flex flex-col items-center md:items-start text-center md:text-left">
          <div className="flex items-center gap-2.5">
            <div className="w-9 h-9 rounded-full bg-gradient-to-tr from-indigo-500 via-purple-500 to-pink-500 text-white font-black text-xs flex items-center justify-center shadow-lg ring-2 ring-white/80">
              HV
            </div>
            <span className="font-black text-slate-900 tracking-tight text-base">
              {PORTFOLIO_DATA.hero.name}
            </span>
          </div>
          <p className="text-xs text-slate-600 font-medium mt-1.5 max-w-sm">
            Senior PHP / Laravel Full-Stack Engineer specializing in Multi-Tenant SaaS, Resilient Fintech Gateways, and AI-Accelerated Engineering.
          </p>
        </div>

        {/* Social and Action Links */}
        <div className="flex items-center gap-3">
          <a
            href={PORTFOLIO_DATA.hero.githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            title="GitHub"
            className="w-10 h-10 rounded-full bg-white/80 hover:bg-white text-slate-700 hover:text-black border border-white/90 flex items-center justify-center shadow-sm transition-all hover:scale-110"
          >
            <GithubIcon className="w-4 h-4" />
          </a>

          <a
            href={PORTFOLIO_DATA.hero.linkedinUrl}
            target="_blank"
            rel="noopener noreferrer"
            title="LinkedIn"
            className="w-10 h-10 rounded-full bg-white/80 hover:bg-white text-slate-700 hover:text-indigo-600 border border-white/90 flex items-center justify-center shadow-sm transition-all hover:scale-110"
          >
            <LinkedinIcon className="w-4 h-4" />
          </a>

          <a
            href={`mailto:${PORTFOLIO_DATA.hero.email}`}
            title="Email"
            className="w-10 h-10 rounded-full bg-white/80 hover:bg-white text-slate-700 hover:text-pink-600 border border-white/90 flex items-center justify-center shadow-sm transition-all hover:scale-110"
          >
            <Mail className="w-4 h-4" />
          </a>

          <button
            onClick={scrollToTop}
            title="Scroll to Top"
            className="w-10 h-10 rounded-full bg-gradient-to-r from-indigo-600 to-purple-600 hover:opacity-95 text-white flex items-center justify-center shadow-lg shadow-purple-500/25 transition-all hover:scale-110 border border-white/40"
          >
            <ArrowUp className="w-4 h-4" />
          </button>
        </div>
      </div>

      <div className="max-w-7xl mx-auto mt-8 pt-6 border-t border-slate-200/60 flex flex-col sm:flex-row items-center justify-between text-xs text-slate-600 font-medium gap-2 text-center">
        <div>
          © {new Date().getFullYear()} Harithamol V H. All rights reserved.
        </div>
        <div className="flex items-center gap-1.5">
          <span>Engineered with Crystal Iridescent Glass &amp; Next.js</span>
          <Sparkles className="w-3.5 h-3.5 text-purple-600" />
        </div>
      </div>
    </footer>
  );
}
