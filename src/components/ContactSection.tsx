"use client";

import React, { useState, useEffect } from "react";
import { PORTFOLIO_DATA } from "@/data/portfolioData";
import { GithubIcon, LinkedinIcon } from '@/components/Icons';
import { route } from '@qubitcodes/qcrouter';
import '@/lib/navigation';
import confetti from "canvas-confetti";
import {
  Globe,
  ArrowUpRight,
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
  const [scope, setScope] = useState("Immediate Hiring");
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

  /** Copy the direct contact address and keep clipboard failures visible. */
  const handleCopyEmail = async () => {
    try {
      await navigator.clipboard.writeText(PORTFOLIO_DATA.hero.email);
      setCopiedEmail(true);
      setTimeout(() => setCopiedEmail(false), 2200);
    } catch {
      setErrorMessage('Please copy the email address from the contact details above.');
    }
  };

  /** Preserve the existing contact endpoint and its response contract. */
  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();
    setLoading(true);
    setErrorMessage('');
    try {
      const response = await fetch(route('api.contact'), {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ name, email, inquiryType, scope, message }),
      });
      const data = await response.json();
      if (!response.ok) throw new Error(data.error || 'Failed to submit inquiry.');
      setSuccessResponse(data);
      confetti({ particleCount: 90, spread: 75, origin: { y: 0.6 }, colors: ['#C9B8FF', '#9FB8FF', '#FFD6F0', '#BDEBFF'], disableForReducedMotion: true });
    } catch (error: unknown) {
      setErrorMessage(error instanceof Error ? error.message : 'Please reach out directly via email.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <section id="contact" className="portfolio-section contact-section">
      <div className="section-heading" data-section-heading><div><span className="section-kicker">GOOD THINGS START WITH A CONVERSATION</span><h2>Let&apos;s make something meaningful.</h2></div><p>A new product. A fresh perspective.<br />I&apos;d love to hear what you&apos;re imagining.</p></div>
      <div className="contact-showcase glass-surface glass-stationary">
        <div className="contact-channels">
          <a href={'mailto:' + PORTFOLIO_DATA.hero.email}><Mail size={21} strokeWidth={1.2} /><span><small>EMAIL</small>{PORTFOLIO_DATA.hero.email}</span><ArrowUpRight size={17} /></a>
          <a href={PORTFOLIO_DATA.hero.portfolioUrl} target="_blank" rel="noopener noreferrer"><Globe size={21} strokeWidth={1.2} /><span><small>WEBSITE</small>harithamol.com</span><ArrowUpRight size={17} /></a>
          <div><MapPin size={21} strokeWidth={1.2} /><span><small>BASED IN</small>Kerala, India &middot; Open to the world</span></div>
        </div>
        <div className="contact-monogram" aria-label="Harithamol V H">HV<span>LET&apos;S CONNECT</span></div>
        <div className="contact-socials"><span className="section-kicker">ELSEWHERE ON THE INTERNET</span><p>A little more about<br />the person behind the work.</p><div><a className="glass-btn round-button" aria-label="GitHub" href={PORTFOLIO_DATA.hero.githubUrl} target="_blank" rel="noopener noreferrer"><GithubIcon className="w-5 h-5" /></a><a className="glass-btn round-button" aria-label="LinkedIn" href={PORTFOLIO_DATA.hero.linkedinUrl} target="_blank" rel="noopener noreferrer"><LinkedinIcon className="w-5 h-5" /></a><button className="glass-btn round-button" aria-label="Copy email" onClick={handleCopyEmail}>{copiedEmail ? <Check size={20} /> : <Copy size={20} />}</button></div><span className="contact-local-time">{timeIST} IST &middot; Usually replies within a day</span></div>
      </div>
        <div className="contact-form-wrap">
          <div className="crystal-card rounded-3xl p-6 sm:p-8 border border-white/95">
            {successResponse ? (
              <div className="py-8 text-center space-y-4 animate-in zoom-in-95 duration-300">
                <div className="w-16 h-16 rounded-full glass-inset text-[var(--ink-soft)] flex items-center justify-center mx-auto border border-[var(--glass-border)]">
                  <CheckCircle2 className="w-8 h-8" />
                </div>
                <h3 className="text-2xl font-black text-[var(--ink)] tracking-tight">
                  Inquiry Dispatched Successfully!
                </h3>
                <p className="text-sm text-[var(--ink)] max-w-md mx-auto leading-relaxed font-normal">
                  {successResponse.message}
                </p>
                <div className="inline-block p-3 rounded-2xl glass-inset font-mono text-xs text-[var(--ink)] border border-[var(--glass-border)]">
                  Lead Ticket: <strong>{successResponse.leadReference}</strong>
                </div>
                <div>
                  <button
                    onClick={() => {
                      setSuccessResponse(null);
                      setMessage("");
                    }}
                    className="mt-4 px-6 py-2.5 rounded-xl text-xs font-bold text-[var(--ink)] glass-inset hover:border-[var(--bg-4)]"
                  >
                    Send Another Message
                  </button>
                </div>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="flex flex-wrap gap-2 items-center justify-between pb-2 border-b border-[var(--glass-border)] mb-2">
                  <h3 className="font-extrabold text-[var(--ink)] text-base">
                    Have something in mind?
                  </h3>
                  <span className="text-[11px] text-[var(--ink-soft)] font-semibold">Typical response &lt; 24h</span>
                </div>

                {errorMessage && (
                  <div className="p-3.5 rounded-2xl glass-inset border border-[var(--glass-border)] text-xs text-[var(--ink)] font-semibold flex items-center gap-2">
                    <AlertCircle className="w-4 h-4 shrink-0" />
                    <span>{errorMessage}</span>
                  </div>
                )}

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="contact-name" className="block text-xs font-bold text-[var(--ink)] mb-1">
                      Your Name / Company *
                    </label>
                    <input
                      id="contact-name"
                      type="text"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      placeholder="e.g. Sarah Jenkins (Tech Recruiter)"
                      required
                      className="glass-input w-full font-medium rounded-2xl border border-white/90 glass-inset px-3.5 py-2.5 text-[var(--ink)] focus:outline-none focus:ring-2 focus:ring-purple-400 backdrop-blur-md"
                    />
                  </div>

                  <div>
                    <label htmlFor="contact-email" className="block text-xs font-bold text-[var(--ink)] mb-1">
                      Work / Corporate Email *
                    </label>
                    <input
                      id="contact-email"
                      type="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="e.g. sjenkins@company.com"
                      required
                      className="glass-input w-full font-medium rounded-2xl border border-white/90 glass-inset px-3.5 py-2.5 text-[var(--ink)] focus:outline-none focus:ring-2 focus:ring-purple-400 backdrop-blur-md"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="contact-category" className="block text-xs font-bold text-[var(--ink)] mb-1">
                      Inquiry Category
                    </label>
                    <select
                      id="contact-category"
                      value={inquiryType}
                      onChange={(e) => setInquiryType(e.target.value)}
                      className="glass-input w-full font-medium rounded-2xl border border-white/90 glass-inset px-3.5 py-2.5 text-[var(--ink)] focus:outline-none focus:ring-2 focus:ring-purple-400 backdrop-blur-md"
                    >
                      <option value="Full-Time Senior Role">Full-Time Senior / Lead Role</option>
                      <option value="Multi-Tenant SaaS Consultation">Multi-Tenant SaaS Architecture</option>
                      <option value="Fintech & Gateway Integration">Fintech / Payment Gateway Contract</option>
                      <option value="General Exploration">General Technical Discussion</option>
                    </select>
                  </div>

                  <div>
                    <label htmlFor="contact-timeline" className="block text-xs font-bold text-[var(--ink)] mb-1">
                      Engagement Timeline
                    </label>
                    <select
                      id="contact-timeline"
                      value={scope}
                      onChange={(e) => setScope(e.target.value)}
                      className="glass-input w-full font-medium rounded-2xl border border-white/90 glass-inset px-3.5 py-2.5 text-[var(--ink)] focus:outline-none focus:ring-2 focus:ring-purple-400 backdrop-blur-md"
                    >
                      <option value="Immediate Hiring">Immediate (Next 15–30 Days)</option>
                      <option value="Quarterly Hire">Next quarter</option>
                      <option value="Project-Based Contract">Contract / Consulting Scope</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label htmlFor="contact-message" className="block text-xs font-bold text-[var(--ink)] mb-1">
                    Project Scope / Opportunity Brief *
                  </label>
                  <textarea
                      id="contact-message"
                    rows={4}
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    placeholder="Describe your platform requirements, technical stack, or role details..."
                    required
                    className="glass-input w-full font-medium rounded-2xl border border-white/90 glass-inset p-3.5 text-[var(--ink)] focus:outline-none focus:ring-2 focus:ring-purple-400 backdrop-blur-md"
                  />
                </div>

                <button
                  type="submit"
                  disabled={loading}
                  className="glass-btn crystal-sheen w-full py-3.5 rounded-2xl text-xs font-black text-[var(--ink)] glass-inset hover:opacity-95 transition-all flex items-center justify-center gap-2 active:scale-98 disabled:opacity-50 border border-white/40"
                >
                  {loading ? (
                    <span>Validating &amp; Dispatching Lead...</span>
                  ) : (
                    <>
                      <Send className="w-4 h-4" />
                      <span>Send message</span>
                    </>
                  )}
                </button>
              </form>
            )}
          </div>
        </div>
    </section>
  );
}
