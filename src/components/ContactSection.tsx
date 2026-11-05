"use client";

import React, { useState, useEffect } from "react";
import { PORTFOLIO_DATA } from "@/data/portfolioData";
import confetti from "canvas-confetti";
import {
  Mail,
  MessageSquare,
  Clock,
  MapPin,
  Send,
  CheckCircle2,
  AlertCircle,
  Sparkles,
  Copy,
  Check,
  Building,
} from "lucide-react";

export default function ContactSection() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [inquiryType, setInquiryType] = useState("Full-Time Senior Role");
  const [scope, setScope] = useState("Immediate Hiring / Q1-Q2");
  const [message, setMessage] = useState("");

  const [loading, setLoading] = useState(false);
  const [successResponse, setSuccessResponse] = useState<null | {
    message: string;
    leadReference: string;
  }>(null);
  const [errorMessage, setErrorMessage] = useState("");
  const [copiedEmail, setCopiedEmail] = useState(false);
  const [timeIST, setTimeIST] = useState("");

  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      setTimeIST(
        now.toLocaleTimeString("en-US", {
          timeZone: "Asia/Kolkata",
          hour: "2-digit",
          minute: "2-digit",
          hour12: true,
        })
      );
    };
    updateTime();
    const timer = setInterval(updateTime, 1000);
    return () => clearInterval(timer);
  }, []);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(PORTFOLIO_DATA.hero.email);
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2200);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setErrorMessage("");

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name, email, inquiryType, scope, message }),
      });

      const data = await res.json();

      if (!res.ok) {
        throw new Error(data.error || "Failed to submit inquiry.");
      }

      setSuccessResponse(data);
      // Trigger celebratory confetti
      confetti({
        particleCount: 80,
        spread: 70,
        origin: { y: 0.6 },
        colors: ["#6366F1", "#A855F7", "#EC4899", "#3B82F6"],
      });
    } catch (err: unknown) {
      if (err instanceof Error) {
        setErrorMessage(err.message);
      } else {
        setErrorMessage("An unexpected error occurred. Please reach out directly via email.");
      }
    } finally {
      setLoading(false);
    }
  };

  return (
    <section id="contact" className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      {/* Header */}
      <div className="text-center max-w-3xl mx-auto mb-14">
        <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full glass-pill mb-3">
          <Sparkles className="w-3.5 h-3.5 text-indigo-500" />
          <span className="text-xs font-bold uppercase tracking-wider text-indigo-900">
            Initiate Contact
          </span>
        </div>
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-slate-900 tracking-tight">
          Functional Contact &amp; Lead Gateway
        </h2>
        <p className="mt-3 text-slate-600 text-sm sm:text-base">
          Ready to accelerate your product with multi-tenant SaaS architecture, payment integrations, or enterprise Laravel systems.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        {/* Left 5 Cols: Direct Channels & Telemetry */}
        <div className="lg:col-span-5 space-y-4">
          {/* Direct Email Card */}
          <div className="glass-panel rounded-3xl p-6 border border-white/80 shadow-lg">
            <span className="text-[10px] font-bold text-slate-400 uppercase tracking-wider block mb-2">
              Primary Direct Channel
            </span>
            <div className="flex items-center justify-between gap-2">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-2xl bg-indigo-50 flex items-center justify-center text-indigo-600">
                  <Mail className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-xs text-slate-500 font-medium">Direct Email</span>
                  <p className="text-sm font-bold text-slate-900 font-mono">
                    {PORTFOLIO_DATA.hero.email}
                  </p>
                </div>
              </div>
              <button
                onClick={handleCopyEmail}
                className="p-2.5 rounded-xl bg-white hover:bg-slate-50 text-slate-700 border border-slate-200 transition-all hover:scale-105"
                title="Copy email to clipboard"
              >
                {copiedEmail ? (
                  <Check className="w-4 h-4 text-emerald-600" />
                ) : (
                  <Copy className="w-4 h-4 text-slate-500" />
                )}
              </button>
            </div>
            {copiedEmail && (
              <p className="text-[11px] text-emerald-600 font-bold mt-2 text-right animate-in fade-in">
                ✓ Email copied to clipboard!
              </p>
            )}
          </div>

          {/* WhatsApp Direct */}
          <a
            href={`https://wa.me/${PORTFOLIO_DATA.hero.whatsappClean}?text=Hi%20Harithamol,%20I%20came%20across%20your%20portfolio%20and%20would%20love%20to%20connect%20regarding%20an%20engineering%20position.`}
            target="_blank"
            rel="noopener noreferrer"
            className="glass-panel rounded-3xl p-6 border border-emerald-200/70 shadow-lg block group hover:border-emerald-300 transition-all"
          >
            <span className="text-[10px] font-bold text-emerald-600 uppercase tracking-wider block mb-2">
              Instant Messaging &amp; Calls
            </span>
            <div className="flex items-center justify-between gap-2">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-2xl bg-emerald-100 flex items-center justify-center text-emerald-700">
                  <MessageSquare className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-xs text-slate-500 font-medium">WhatsApp / Phone</span>
                  <p className="text-sm font-bold text-slate-900 font-mono">
                    {PORTFOLIO_DATA.hero.phone}
                  </p>
                </div>
              </div>
              <span className="text-xs font-bold text-emerald-700 group-hover:translate-x-1 transition-transform">
                Open Chat →
              </span>
            </div>
          </a>

          {/* Location & Time Capsule */}
          <div className="glass-panel rounded-3xl p-6 border border-white/80 shadow-lg space-y-3">
            <div className="flex items-center justify-between">
              <span className="text-xs font-semibold text-slate-500 flex items-center gap-1.5">
                <MapPin className="w-4 h-4 text-indigo-500" />
                {PORTFOLIO_DATA.hero.location}
              </span>
              <span className="text-xs font-mono font-bold text-slate-800 bg-white/70 px-2.5 py-1 rounded-full border border-white/80">
                {timeIST} IST
              </span>
            </div>
            <div className="pt-2 border-t border-slate-200/50 flex items-center gap-2 text-xs text-slate-600">
              <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-pulse" />
              <span>Available for Senior / Lead Laravel Full-Stack roles</span>
            </div>
          </div>
        </div>

        {/* Right 7 Cols: Smart Lead Capture Form */}
        <div className="lg:col-span-7">
          <div className="glass-panel rounded-3xl p-6 sm:p-8 border border-white/90 shadow-2xl">
            {successResponse ? (
              <div className="py-8 text-center space-y-4 animate-in zoom-in-95 duration-300">
                <div className="w-16 h-16 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center mx-auto shadow-inner">
                  <CheckCircle2 className="w-8 h-8" />
                </div>
                <h3 className="text-2xl font-black text-slate-900 tracking-tight">
                  Inquiry Dispatched Successfully!
                </h3>
                <p className="text-sm text-slate-600 max-w-md mx-auto leading-relaxed">
                  {successResponse.message}
                </p>
                <div className="inline-block p-3 rounded-2xl bg-slate-100 font-mono text-xs text-slate-700 border border-slate-200">
                  Lead Ticket: <strong>{successResponse.leadReference}</strong>
                </div>
                <div>
                  <button
                    onClick={() => {
                      setSuccessResponse(null);
                      setMessage("");
                    }}
                    className="mt-4 px-6 py-2.5 rounded-xl text-xs font-bold text-white bg-indigo-600 hover:bg-indigo-700 shadow-md"
                  >
                    Send Another Message
                  </button>
                </div>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="flex items-center justify-between pb-2 border-b border-slate-200/60 mb-2">
                  <h3 className="font-bold text-slate-900 text-base">
                    Direct Engineering Lead Pipeline
                  </h3>
                  <span className="text-[11px] text-slate-500">Typical response &lt; 24h</span>
                </div>

                {errorMessage && (
                  <div className="p-3 rounded-2xl bg-rose-50 border border-rose-200 text-xs text-rose-700 flex items-center gap-2">
                    <AlertCircle className="w-4 h-4 shrink-0" />
                    <span>{errorMessage}</span>
                  </div>
                )}

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-semibold text-slate-700 mb-1">
                      Your Name / Company *
                    </label>
                    <input
                      type="text"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      placeholder="e.g. Sarah Jenkins (Tech Recruiter)"
                      required
                      className="w-full text-xs font-medium rounded-xl border border-slate-200 bg-white/90 px-3.5 py-2.5 text-slate-900 focus:outline-none focus:ring-2 focus:ring-indigo-400"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-slate-700 mb-1">
                      Work / Corporate Email *
                    </label>
                    <input
                      type="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="e.g. sjenkins@company.com"
                      required
                      className="w-full text-xs font-medium rounded-xl border border-slate-200 bg-white/90 px-3.5 py-2.5 text-slate-900 focus:outline-none focus:ring-2 focus:ring-indigo-400"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-semibold text-slate-700 mb-1">
                      Inquiry Category
                    </label>
                    <select
                      value={inquiryType}
                      onChange={(e) => setInquiryType(e.target.value)}
                      className="w-full text-xs font-medium rounded-xl border border-slate-200 bg-white/90 px-3.5 py-2.5 text-slate-900 focus:outline-none focus:ring-2 focus:ring-indigo-400"
                    >
                      <option value="Full-Time Senior Role">Full-Time Senior / Lead Role</option>
                      <option value="Multi-Tenant SaaS Consultation">Multi-Tenant SaaS Architecture</option>
                      <option value="Fintech & Gateway Integration">Fintech / Payment Gateway Contract</option>
                      <option value="General Exploration">General Technical Discussion</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-slate-700 mb-1">
                      Engagement Timeline
                    </label>
                    <select
                      value={scope}
                      onChange={(e) => setScope(e.target.value)}
                      className="w-full text-xs font-medium rounded-xl border border-slate-200 bg-white/90 px-3.5 py-2.5 text-slate-900 focus:outline-none focus:ring-2 focus:ring-indigo-400"
                    >
                      <option value="Immediate Hiring">Immediate (Next 15–30 Days)</option>
                      <option value="Quarterly Hire">Next Quarter (Q1-Q2 2026)</option>
                      <option value="Project-Based Contract">Contract / Consulting Scope</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-semibold text-slate-700 mb-1">
                    Project Scope / Opportunity Brief *
                  </label>
                  <textarea
                    rows={4}
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    placeholder="Describe your platform requirements, technical stack, or role details..."
                    required
                    className="w-full text-xs font-medium rounded-xl border border-slate-200 bg-white/90 p-3 text-slate-900 focus:outline-none focus:ring-2 focus:ring-indigo-400"
                  />
                </div>

                <button
                  type="submit"
                  disabled={loading}
                  className="w-full py-3.5 rounded-2xl text-xs font-bold text-white bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 hover:opacity-95 shadow-lg shadow-indigo-500/25 transition-all flex items-center justify-center gap-2 active:scale-98 disabled:opacity-50"
                >
                  {loading ? (
                    <span>Validating &amp; Dispatching Lead...</span>
                  ) : (
                    <>
                      <Send className="w-4 h-4" />
                      <span>Submit Inbound Inquiry</span>
                    </>
                  )}
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
