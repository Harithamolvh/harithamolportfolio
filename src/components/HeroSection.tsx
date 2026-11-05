"use client";

import React, { useState, useEffect } from "react";
import { PORTFOLIO_DATA } from "@/data/portfolioData";
import {
  Download,
  ChevronDown,
  Terminal,
  Mail,
  Check,
  MessageSquare,
  Sparkles,
  ArrowRight,
  ShieldCheck,
  Layers,
  Cpu,
  Clock,
  ExternalLink,
} from "lucide-react";

interface HeroSectionProps {
  onOpenResume: () => void;
}

export default function HeroSection({ onOpenResume }: HeroSectionProps) {
  const [copiedEmail, setCopiedEmail] = useState(false);
  const [timeIST, setTimeIST] = useState("");
  const [showDownloadMenu, setShowDownloadMenu] = useState(false);

  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      const options: Intl.DateTimeFormatOptions = {
        timeZone: "Asia/Kolkata",
        hour: "2-digit",
        minute: "2-digit",
        second: "2-digit",
        hour12: true,
      };
      setTimeIST(now.toLocaleTimeString("en-US", options));
    };

    updateTime();
    const interval = setInterval(updateTime, 1000);
    return () => clearInterval(interval);
  }, []);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(PORTFOLIO_DATA.hero.email);
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2500);
  };

  const handleDownloadPdf = () => {
    // Generate clean print / download of resume
    window.open("/api/resume-download", "_blank");
  };

  return (
    <section
      id="about"
      className="relative pt-32 pb-20 md:pt-40 md:pb-28 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto flex flex-col items-center text-center overflow-hidden"
    >
      {/* Iridescent Ambient Spheres */}
      <div className="absolute top-10 left-1/4 w-80 h-80 rounded-full bg-purple-300/35 blur-[120px] pointer-events-none animate-pulse-glow" />
      <div className="absolute top-28 right-1/4 w-96 h-96 rounded-full bg-sky-200/40 blur-[130px] pointer-events-none animate-float-reverse" />
      <div className="absolute top-1/2 left-1/10 w-72 h-72 rounded-full bg-pink-200/30 blur-[110px] pointer-events-none animate-float-slow" />

      {/* Availability Status Badge */}
      <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full glass-pill mb-6 border border-white/80 shadow-sm animate-in fade-in slide-in-from-bottom-3 duration-500">
        <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-ping inline-block" />
        <span className="text-xs font-semibold text-slate-800 tracking-wide uppercase">
          {PORTFOLIO_DATA.hero.availabilityText}
        </span>
        <span className="text-slate-300">|</span>
        <span className="text-xs font-medium text-slate-600 flex items-center gap-1">
          <Clock className="w-3.5 h-3.5 text-indigo-500 inline" />
          Kochi, India (IST): {timeIST || "Loading..."}
        </span>
      </div>

      {/* Main Name with Iridescent Holographic Text */}
      <h1 className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-black tracking-tight mb-4 text-slate-900">
        <span className="text-holographic-glow drop-shadow-sm inline-block">
          {PORTFOLIO_DATA.hero.name}
        </span>
      </h1>

      {/* Subtitle */}
      <div className="flex items-center justify-center gap-2 mb-6 flex-wrap">
        <span className="text-lg sm:text-2xl md:text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-slate-900 via-indigo-950 to-slate-800">
          PHP / Laravel Full-Stack Engineer
        </span>
        <span className="hidden sm:inline-block text-indigo-400 font-light">•</span>
        <span className="text-base sm:text-xl font-semibold text-indigo-600">
          5+ Years Commercial Experience
        </span>
      </div>

      {/* Narrative Lead Paragraph */}
      <p className="max-w-3xl text-sm sm:text-base md:text-lg text-slate-700 leading-relaxed mb-10 font-normal">
        Architecting scalable <strong className="font-semibold text-indigo-900">multi-tenant SaaS ecosystems</strong>, high-concurrency payment gateway engines, and mission-critical enterprise portals. Leveraging modern <strong className="font-semibold text-purple-900">PHP 8</strong>, <strong className="font-semibold text-indigo-900">Laravel</strong>, <strong className="font-semibold text-slate-900">Docker</strong>, and daily <strong className="font-semibold text-pink-700">AI-augmented engineering</strong> for rapid, zero-defect delivery.
      </p>

      {/* Primary CTA Cluster */}
      <div className="flex flex-wrap items-center justify-center gap-3 sm:gap-4 mb-14 z-10">
        {/* Explore Architecture */}
        <a
          href="#architecture"
          className="group inline-flex items-center gap-2 px-6 py-3.5 rounded-full text-sm font-semibold text-white bg-gradient-to-r from-indigo-600 via-indigo-700 to-purple-600 hover:from-indigo-700 hover:to-purple-700 shadow-lg shadow-indigo-500/25 transition-all duration-300 hover:scale-105 active:scale-95"
        >
          <Terminal className="w-4 h-4 text-indigo-200 group-hover:rotate-12 transition-transform" />
          <span>Explore Architecture</span>
          <ArrowRight className="w-4 h-4 text-white group-hover:translate-x-1 transition-transform" />
        </a>

        {/* Download CV Split Button */}
        <div className="relative inline-flex rounded-full shadow-md">
          <button
            onClick={onOpenResume}
            className="inline-flex items-center gap-2 px-5 py-3.5 rounded-l-full text-sm font-semibold text-slate-800 bg-white/85 hover:bg-white border-y border-l border-white/90 hover:text-indigo-600 transition-all"
          >
            <Download className="w-4 h-4 text-indigo-500" />
            <span>Interactive Resume</span>
          </button>
          <button
            onClick={() => setShowDownloadMenu(!showDownloadMenu)}
            className="px-3 py-3.5 rounded-r-full text-slate-700 bg-white/85 hover:bg-white border border-white/90 hover:text-indigo-600 transition-all border-l-slate-200"
            title="Download options"
          >
            <ChevronDown className="w-4 h-4" />
          </button>

          {showDownloadMenu && (
            <div className="absolute top-full mt-2 right-0 w-60 glass-panel rounded-2xl p-2 border border-white/90 shadow-2xl z-20 flex flex-col gap-1 text-left">
              <button
                onClick={() => {
                  setShowDownloadMenu(false);
                  onOpenResume();
                }}
                className="w-full text-xs font-semibold px-3 py-2.5 rounded-xl hover:bg-indigo-50 text-slate-800 text-left flex items-center justify-between"
              >
                <span>View Full-Screen Reader</span>
                <ExternalLink className="w-3.5 h-3.5 text-indigo-500" />
              </button>
              <button
                onClick={() => {
                  setShowDownloadMenu(false);
                  window.print();
                }}
                className="w-full text-xs font-semibold px-3 py-2.5 rounded-xl hover:bg-indigo-50 text-slate-800 text-left flex items-center justify-between"
              >
                <span>Print Clean PDF</span>
                <Download className="w-3.5 h-3.5 text-indigo-500" />
              </button>
            </div>
          )}
        </div>

        {/* Copy Email Button */}
        <button
          onClick={handleCopyEmail}
          className="inline-flex items-center gap-2 px-5 py-3.5 rounded-full text-sm font-semibold text-slate-700 bg-white/70 hover:bg-white border border-white/80 shadow-sm transition-all hover:scale-105 active:scale-95"
          title="Click to copy email"
        >
          {copiedEmail ? (
            <>
              <Check className="w-4 h-4 text-emerald-600" />
              <span className="text-emerald-700 font-bold">Email Copied!</span>
            </>
          ) : (
            <>
              <Mail className="w-4 h-4 text-slate-500" />
              <span>Copy Email</span>
            </>
          )}
        </button>

        {/* WhatsApp Fast Trigger */}
        <a
          href={`https://wa.me/${PORTFOLIO_DATA.hero.whatsappClean}?text=Hi%20Harithamol,%20I%20reviewed%20your%20portfolio%20and%20would%20love%20to%20discuss%20an%20engineering%20opportunity.`}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 px-4 py-3.5 rounded-full text-sm font-semibold text-emerald-800 bg-emerald-50/80 hover:bg-emerald-100/90 border border-emerald-200/80 shadow-sm transition-all hover:scale-105"
        >
          <MessageSquare className="w-4 h-4 text-emerald-600" />
          <span>WhatsApp Chat</span>
        </a>
      </div>

      {/* Live Telemetry Metric Pills (Bento Grid) */}
      <div className="w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 z-10 text-left">
        {PORTFOLIO_DATA.hero.telemetryMetrics.map((metric, index) => {
          const icons = [
            <Layers key="1" className="w-5 h-5 text-indigo-500" />,
            <ShieldCheck key="2" className="w-5 h-5 text-purple-500" />,
            <Cpu key="3" className="w-5 h-5 text-pink-500" />,
            <Sparkles key="4" className="w-5 h-5 text-emerald-500" />,
          ];
          return (
            <div
              key={metric.label}
              className="glass-panel holographic-sheen-container rounded-2xl p-5 border border-white/80 hover:border-white transition-all group"
            >
              <div className="flex items-center justify-between mb-3">
                <span className="text-xs font-semibold text-slate-500 uppercase tracking-wider">
                  {metric.label}
                </span>
                <div className="w-8 h-8 rounded-xl bg-white/70 flex items-center justify-center shadow-xs">
                  {icons[index % icons.length]}
                </div>
              </div>
              <div className="text-2xl font-black text-slate-900 tracking-tight group-hover:text-indigo-600 transition-colors">
                {metric.value}
              </div>
              <div className="text-xs text-slate-600 mt-1 font-medium">
                {metric.detail}
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
