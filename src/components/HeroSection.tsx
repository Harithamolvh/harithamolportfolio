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

  return (
    <section
      id="about"
      className="relative pt-32 pb-20 md:pt-40 md:pb-28 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto flex flex-col items-center text-center overflow-hidden"
    >
      {/* Availability Status Badge in Crystal Pill */}
      <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full crystal-pill mb-6 border border-white/95 shadow-sm animate-in fade-in slide-in-from-bottom-3 duration-500">
        <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-ping inline-block" />
        <span className="text-xs font-bold text-slate-800 tracking-wide uppercase">
          {PORTFOLIO_DATA.hero.availabilityText}
        </span>
        <span className="text-purple-300">|</span>
        <span className="text-xs font-semibold text-slate-600 flex items-center gap-1">
          <Clock className="w-3.5 h-3.5 text-indigo-500 inline" />
          Kochi, India (IST): {timeIST || "Loading..."}
        </span>
      </div>

      {/* Main Name with Crystal Title Gradient */}
      <h1 className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-black tracking-tight mb-4">
        <span className="text-crystal-title inline-block">
          {PORTFOLIO_DATA.hero.name}
        </span>
      </h1>

      {/* Subtitle with Crystalline Gleam */}
      <div className="flex items-center justify-center gap-2 mb-6 flex-wrap">
        <span className="text-lg sm:text-2xl md:text-3xl font-extrabold text-crystal-gleam">
          PHP / Laravel Full-Stack Engineer
        </span>
        <span className="hidden sm:inline-block text-purple-400 font-light">•</span>
        <span className="text-base sm:text-xl font-bold text-indigo-600">
          5+ Years Commercial Experience
        </span>
      </div>

      {/* Narrative Lead Paragraph */}
      <p className="max-w-3xl text-sm sm:text-base md:text-lg text-slate-700 leading-relaxed mb-10 font-normal">
        Architecting high-throughput <strong className="font-bold text-indigo-950">multi-tenant SaaS platforms</strong>, high-concurrency payment gateway engines, and mission-critical enterprise systems. Leveraging modern <strong className="font-bold text-purple-950">PHP 8</strong>, <strong className="font-bold text-indigo-900">Laravel</strong>, <strong className="font-bold text-slate-900">Docker</strong>, and daily <strong className="font-bold text-pink-700">AI-augmented engineering</strong> for rapid, zero-defect delivery.
      </p>

      {/* Primary CTA Cluster */}
      <div className="flex flex-wrap items-center justify-center gap-3 sm:gap-4 mb-14 z-10">
        {/* Explore Architecture */}
        <a
          href="#architecture"
          className="crystal-sheen group inline-flex items-center gap-2 px-6 py-3.5 rounded-full text-sm font-bold text-white bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 hover:from-indigo-700 hover:to-pink-700 shadow-xl shadow-purple-500/25 transition-all duration-300 hover:scale-105 active:scale-95 border border-white/50"
        >
          <Terminal className="w-4 h-4 text-purple-200 group-hover:rotate-12 transition-transform" />
          <span>Explore Architecture</span>
          <ArrowRight className="w-4 h-4 text-white group-hover:translate-x-1 transition-transform" />
        </a>

        {/* Download CV Split Button */}
        <div className="relative inline-flex rounded-full shadow-lg">
          <button
            onClick={onOpenResume}
            className="crystal-sheen inline-flex items-center gap-2 px-5 py-3.5 rounded-l-full text-sm font-bold text-slate-800 bg-white/80 hover:bg-white border-y border-l border-white/95 hover:text-indigo-600 transition-all backdrop-blur-md"
          >
            <Download className="w-4 h-4 text-purple-600" />
            <span>Interactive Resume</span>
          </button>
          <button
            onClick={() => setShowDownloadMenu(!showDownloadMenu)}
            className="px-3 py-3.5 rounded-r-full text-slate-700 bg-white/80 hover:bg-white border border-white/95 hover:text-indigo-600 transition-all border-l-slate-200 backdrop-blur-md"
            title="Download options"
          >
            <ChevronDown className="w-4 h-4" />
          </button>

          {showDownloadMenu && (
            <div className="absolute top-full mt-2 right-0 w-60 crystal-card rounded-2xl p-2 border border-white/95 shadow-2xl z-20 flex flex-col gap-1 text-left">
              <button
                onClick={() => {
                  setShowDownloadMenu(false);
                  onOpenResume();
                }}
                className="w-full text-xs font-bold px-3 py-2.5 rounded-xl hover:bg-white text-slate-800 text-left flex items-center justify-between"
              >
                <span>View Full-Screen Reader</span>
                <ExternalLink className="w-3.5 h-3.5 text-indigo-500" />
              </button>
              <button
                onClick={() => {
                  setShowDownloadMenu(false);
                  window.print();
                }}
                className="w-full text-xs font-bold px-3 py-2.5 rounded-xl hover:bg-white text-slate-800 text-left flex items-center justify-between"
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
          className="crystal-sheen inline-flex items-center gap-2 px-5 py-3.5 rounded-full text-sm font-bold text-slate-700 bg-white/70 hover:bg-white border border-white/90 shadow-md transition-all hover:scale-105 active:scale-95 backdrop-blur-md"
          title="Click to copy email"
        >
          {copiedEmail ? (
            <>
              <Check className="w-4 h-4 text-emerald-600" />
              <span className="text-emerald-700 font-extrabold">Email Copied!</span>
            </>
          ) : (
            <>
              <Mail className="w-4 h-4 text-purple-600" />
              <span>Copy Email</span>
            </>
          )}
        </button>

        {/* WhatsApp Fast Trigger */}
        <a
          href={`https://wa.me/${PORTFOLIO_DATA.hero.whatsappClean}?text=Hi%20Harithamol,%20I%20reviewed%20your%20portfolio%20and%20would%20love%20to%20discuss%20an%20engineering%20opportunity.`}
          target="_blank"
          rel="noopener noreferrer"
          className="crystal-sheen inline-flex items-center gap-2 px-4 py-3.5 rounded-full text-sm font-bold text-emerald-800 bg-emerald-50/70 hover:bg-emerald-100/80 border border-emerald-200/80 shadow-md transition-all hover:scale-105 backdrop-blur-md"
        >
          <MessageSquare className="w-4 h-4 text-emerald-600" />
          <span>WhatsApp Chat</span>
        </a>
      </div>

      {/* Live Telemetry Metric Crystal Cards */}
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
              className="crystal-card crystal-sheen rounded-3xl p-6 border border-white/90 hover:border-white transition-all group"
            >
              <div className="flex items-center justify-between mb-3">
                <span className="text-xs font-bold text-slate-500 uppercase tracking-wider">
                  {metric.label}
                </span>
                <div className="w-8 h-8 rounded-xl bg-white/80 flex items-center justify-center shadow-xs border border-white/90">
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
