'use client';

import React, { useState } from 'react';
import { Send, CheckCircle2, AlertCircle, X } from 'lucide-react';
import { route } from '@qubitcodes/qcrouter';
import '@/lib/navigation';
import { useDialogAccessibility } from '@/lib/useDialogAccessibility';

/** Load the inquiry form on demand and keep its dialog keyboard accessible. */
export default function ContactModal({ onClose }: { onClose: () => void }) {
	const dialogRef = useDialogAccessibility(true, onClose);
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
      // Optional celebration must never turn a successful submission into an error.
      void import('canvas-confetti').then(({ default: confetti }) => {
        confetti({ particleCount: 90, spread: 75, origin: { y: 0.6 }, colors: ['#C9B8FF', '#9FB8FF', '#FFD6F0', '#BDEBFF'], disableForReducedMotion: true });
      }).catch(() => undefined);
    } catch (error: unknown) {
      setErrorMessage(error instanceof Error ? error.message : 'Please reach out directly via email.');
    } finally {
      setLoading(false);
    }
  };

	return (
		<div className='contact-modal-overlay'>
			<div ref={dialogRef} role='dialog' aria-modal='true' aria-labelledby='contact-modal-title' tabIndex={-1} className='contact-modal glass-inset glass-dialog'>
				<header className='contact-modal-header'>
					<div><h2 id='contact-modal-title'>Have something in mind?</h2><p>Tell me about your project or opportunity.</p></div>
					<button type='button' className='glass-btn round-button' onClick={onClose} aria-label='Close contact form'><X size={20} /></button>
				</header>
        <div className="contact-form-wrap contact-modal-form">
          <div className="p-5 sm:p-8">
            {successResponse ? (
              <div role="status" className="py-8 text-center space-y-4 animate-in zoom-in-95 duration-300">
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
                {errorMessage && (
                  <div role="alert" className="p-3.5 rounded-2xl glass-inset border border-[var(--glass-border)] text-xs text-[var(--ink)] font-semibold flex items-center gap-2">
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
			</div>
		</div>
	);
}
