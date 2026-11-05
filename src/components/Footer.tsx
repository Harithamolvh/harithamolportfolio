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
    <footer className="mt-20 border-t border-white/70 bg-white/40 backdrop-blur-xl py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
        {/* Brand identity */}
        <div className="flex flex-col items-center md:items-start text-center md:text-left">
          <div className="flex items-center gap-2.5">
            <div className="w-8 h-8 rounded-full bg-gradient-to-tr from-indigo-500 to-pink-500 text-white font-black text-xs flex items-center justify-center shadow-md">
              HV
            </div>
            <span className="font-extrabold text-slate-900 tracking-tight text-base">
              {PORTFOLIO_DATA.hero.name}
            </span>
          </div>
          <p className="text-xs text-slate-500 mt-1 max-w-sm">
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
            className="w-9 h-9 rounded-full bg-white/80 hover:bg-white text-slate-700 hover:text-black border border-white flex items-center justify-center shadow-sm transition-all hover:scale-110"
          >
            <GithubIcon className="w-4 h-4" />
          </a>

          <a
            href={PORTFOLIO_DATA.hero.linkedinUrl}
            target="_blank"
            rel="noopener noreferrer"
            title="LinkedIn"
            className="w-9 h-9 rounded-full bg-white/80 hover:bg-white text-slate-700 hover:text-indigo-600 border border-white flex items-center justify-center shadow-sm transition-all hover:scale-110"
          >
            <LinkedinIcon className="w-4 h-4" />
          </a>

          <a
            href={`mailto:${PORTFOLIO_DATA.hero.email}`}
            title="Email"
            className="w-9 h-9 rounded-full bg-white/80 hover:bg-white text-slate-700 hover:text-pink-600 border border-white flex items-center justify-center shadow-sm transition-all hover:scale-110"
          >
            <Mail className="w-4 h-4" />
          </a>

          <button
            onClick={scrollToTop}
            title="Scroll to Top"
            className="w-9 h-9 rounded-full bg-indigo-600 hover:bg-indigo-700 text-white flex items-center justify-center shadow-md shadow-indigo-500/20 transition-all hover:scale-110"
          >
            <ArrowUp className="w-4 h-4" />
          </button>
        </div>
      </div>

      <div className="max-w-7xl mx-auto mt-8 pt-6 border-t border-slate-200/50 flex flex-col sm:flex-row items-center justify-between text-xs text-slate-500 gap-2 text-center">
        <div>
          © {new Date().getFullYear()} Harithamol V H. All rights reserved.
        </div>
        <div className="flex items-center gap-1.5">
          <span>Crafted with Ethereal Iridescent Glassmorphism &amp; Next.js</span>
          <Sparkles className="w-3.5 h-3.5 text-indigo-500" />
        </div>
      </div>
    </footer>
  );
}
