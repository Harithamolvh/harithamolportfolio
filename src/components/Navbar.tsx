"use client";

import React, { useState, useEffect } from "react";
import { PORTFOLIO_DATA } from "@/data/portfolioData";
import {
  FileText,
  Menu,
  X,
  Sparkles,
  ExternalLink,
  Briefcase,
  Copy,
} from "lucide-react";
import { GithubIcon } from "./Icons";

interface NavbarProps {
  onOpenResume: () => void;
  onOpenAts: () => void;
}

export default function Navbar({ onOpenResume, onOpenAts }: NavbarProps) {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 25);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { label: "About", href: "#about" },
    { label: "Tech Matrix", href: "#skills" },
    { label: "Projects & Simulators", href: "#projects" },
    { label: "Architecture Console", href: "#architecture" },
    { label: "Career Timeline", href: "#timeline" },
    { label: "Contact", href: "#contact" },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 flex justify-center px-4 pt-4 sm:pt-6 pointer-events-none">
      <nav
        className={`pointer-events-auto transition-all duration-300 w-full max-w-6xl rounded-full px-4 sm:px-6 py-2.5 sm:py-3 flex items-center justify-between shadow-xl crystal-prismatic-border ${
          scrolled
            ? "crystal-pill bg-white/75 backdrop-blur-2xl border-white/95 shadow-purple-500/15"
            : "crystal-pill bg-white/60 backdrop-blur-xl border-white/85 shadow-purple-500/10"
        }`}
      >
        {/* Brand Crystal Avatar & Status */}
        <a
          href="#about"
          className="flex items-center gap-3 group transition-transform hover:scale-105"
        >
          <div className="relative flex items-center justify-center w-10 h-10 rounded-full bg-gradient-to-tr from-indigo-500/90 via-purple-500/90 to-pink-400/90 text-white font-extrabold text-sm shadow-md ring-2 ring-white/90 shadow-purple-500/20">
            HV
            <span className="absolute -bottom-0.5 -right-0.5 w-3.5 h-3.5 rounded-full bg-emerald-400 border-2 border-white ring-1 ring-emerald-300 animate-pulse shadow-xs" />
          </div>
          <div className="hidden md:flex flex-col text-left">
            <span className="text-sm font-extrabold tracking-tight text-slate-900 group-hover:text-indigo-600 transition-colors drop-shadow-2xs">
              {PORTFOLIO_DATA.hero.name}
            </span>
            <span className="text-[11px] font-semibold text-emerald-700 flex items-center gap-1">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 inline-block animate-ping" />
              Available for Senior Roles
            </span>
          </div>
        </a>

        {/* Desktop Anchor Navigation Links */}
        <div className="hidden lg:flex items-center gap-1 bg-white/45 p-1 rounded-full border border-white/80 shadow-inner backdrop-blur-md">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="text-xs font-bold px-3.5 py-1.5 rounded-full text-slate-700 hover:text-indigo-700 hover:bg-white/90 hover:shadow-sm transition-all duration-200"
            >
              {link.label}
            </a>
          ))}
        </div>

        {/* Action Hub */}
        <div className="flex items-center gap-2">
          {/* ATS Plain-Text Button */}
          <button
            onClick={onOpenAts}
            title="ATS Friendly Plain Text"
            className="hidden sm:inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-bold text-slate-700 bg-white/70 hover:bg-white border border-white/90 hover:border-purple-300 shadow-xs transition-all hover:scale-105"
          >
            <Copy className="w-3.5 h-3.5 text-purple-600" />
            <span className="hidden xl:inline">ATS Copy</span>
          </button>

          {/* Resume Slide-over trigger */}
          <button
            onClick={onOpenResume}
            className="crystal-sheen inline-flex items-center gap-1.5 px-4 py-1.5 rounded-full text-xs font-extrabold text-white bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-500 hover:opacity-95 shadow-md shadow-purple-500/25 transition-all hover:scale-105 active:scale-95 border border-white/40"
          >
            <FileText className="w-3.5 h-3.5" />
            <span>Resume</span>
          </button>

          {/* GitHub link */}
          <a
            href={PORTFOLIO_DATA.hero.githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            title="Harithamol GitHub Profile"
            className="w-8 h-8 rounded-full flex items-center justify-center bg-white/70 hover:bg-white text-slate-700 hover:text-black border border-white/90 shadow-xs transition-transform hover:scale-110"
          >
            <GithubIcon className="w-4 h-4" />
          </a>

          {/* Mobile hamburger */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden p-1.5 rounded-full bg-white/70 text-slate-700 hover:bg-white border border-white/80"
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </nav>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="pointer-events-auto absolute top-20 left-4 right-4 crystal-card rounded-3xl p-5 border border-white/90 shadow-2xl lg:hidden flex flex-col gap-3 animate-in fade-in slide-in-from-top-4 duration-300">
          <div className="pb-2 border-b border-slate-200/60 flex items-center justify-between">
            <div>
              <p className="font-extrabold text-slate-900 text-sm">{PORTFOLIO_DATA.hero.name}</p>
              <p className="text-xs text-indigo-600 font-bold">PHP/Laravel Full-Stack Engineer</p>
            </div>
            <span className="px-2.5 py-0.5 rounded-full bg-emerald-100 text-emerald-800 text-[10px] font-bold">
              Open to Offers
            </span>
          </div>

          <div className="flex flex-col gap-1">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="px-3 py-2 text-sm font-bold text-slate-700 hover:bg-white/80 hover:text-indigo-600 rounded-xl transition-colors"
              >
                {link.label}
              </a>
            ))}
          </div>

          <div className="pt-3 border-t border-slate-200/60 flex items-center gap-2">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenResume();
              }}
              className="flex-1 py-2.5 rounded-xl text-xs font-bold text-white bg-gradient-to-r from-indigo-600 to-purple-600 text-center shadow-md"
            >
              Interactive Resume
            </button>
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenAts();
              }}
              className="py-2.5 px-3 rounded-xl text-xs font-bold text-slate-700 bg-white/80 border border-slate-200 text-center shadow-sm"
            >
              ATS Copy
            </button>
          </div>
        </div>
      )}
    </header>
  );
}
