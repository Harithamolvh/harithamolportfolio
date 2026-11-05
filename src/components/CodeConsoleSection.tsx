"use client";

import React, { useState } from "react";
import { PORTFOLIO_DATA, CodeSnippet } from "@/data/portfolioData";
import {
  Terminal,
  Copy,
  Check,
  Info,
  Shield,
  Zap,
  Code2,
  FileCode,
  Sparkles,
  ExternalLink,
} from "lucide-react";

export default function CodeConsoleSection() {
  const [activeTabId, setActiveTabId] = useState<string>("tenant-resolver");
  const [copied, setCopied] = useState(false);
  const [showExplainModal, setShowExplainModal] = useState(false);

  const snippets = PORTFOLIO_DATA.codeSnippets;
  const currentSnippet = snippets.find((s) => s.id === activeTabId) || snippets[0];

  const handleCopy = () => {
    navigator.clipboard.writeText(currentSnippet.code);
    setCopied(true);
    setTimeout(() => setCopied(false), 2200);
  };

  return (
    <section id="architecture" className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      {/* Header */}
      <div className="text-center max-w-3xl mx-auto mb-12">
        <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full crystal-pill mb-3">
          <Terminal className="w-3.5 h-3.5 text-[var(--ink-soft)]" />
          <span className="text-xs font-bold uppercase tracking-wider text-[var(--ink)]">
            Production Engineering Quality
          </span>
        </div>
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-black tracking-tight text-crystal-title">
          &quot;Under-The-Hood&quot; Code Console
        </h2>
        <p className="mt-3 text-[var(--ink)] text-sm sm:text-base font-normal">
          Inspect actual production architectural patterns: multi-tenant dynamic database routing, cryptographic payment webhook idempotency, and automated zero-downtime Docker CI/CD workflows.
        </p>
      </div>

      {/* Crystal Terminal Window */}
      <div className="crystal-terminal rounded-3xl overflow-hidden border border-white/30">
        {/* Terminal Header Bar */}
        <div className="glass-inset px-4 sm:px-6 py-3.5 flex flex-wrap items-center justify-between gap-3 border-b border-white/10 backdrop-blur-xl">
          {/* Traffic Light Dots & Title */}
          <div className="flex items-center gap-3">
            <div className="flex items-center gap-1.5">
              <span className="w-3 h-3 rounded-full glass-inset inline-block border border-white/30" />
              <span className="w-3 h-3 rounded-full glass-inset inline-block border border-white/30" />
              <span className="w-3 h-3 rounded-full glass-inset inline-block border border-white/30" />
            </div>
            <span className="text-xs font-mono text-[var(--ink-soft)] pl-2 border-l border-[var(--glass-border)]">
              harithamol@crystal-node: ~/architecture
            </span>
          </div>

          {/* Interactive Tooling: Explain Drawer & Copy */}
          <div className="flex items-center gap-2">
            <button
              onClick={() => setShowExplainModal(true)}
              className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-xl text-xs font-bold text-[var(--ink-soft)] glass-inset hover:border-[var(--bg-4)] border border-[var(--glass-border)] transition-all hover:scale-105"
            >
              <Info className="w-3.5 h-3.5 text-[var(--ink-soft)]" />
              <span>Explain Architecture</span>
            </button>

            <button
              onClick={handleCopy}
              className="glass-btn inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-xl text-xs font-bold text-[var(--ink-soft)] glass-inset hover:border-[var(--bg-4)] border border-[var(--glass-border)] transition-all active:scale-95"
            >
              {copied ? (
                <>
                  <Check className="w-3.5 h-3.5 text-[var(--ink-soft)]" />
                  <span className="text-[var(--ink-soft)] font-extrabold">Copied!</span>
                </>
              ) : (
                <>
                  <Copy className="w-3.5 h-3.5 text-[var(--ink-soft)]" />
                  <span>Copy Code</span>
                </>
              )}
            </button>
          </div>
        </div>

        {/* Tab Strip */}
        <div className="glass-inset px-4 sm:px-6 pt-2 flex gap-2 border-b border-white/5 overflow-x-auto">
          {snippets.map((snippet) => {
            const isActive = snippet.id === activeTabId;
            return (
              <button
                key={snippet.id}
                aria-pressed={activeTabId === snippet.id}
                onClick={() => setActiveTabId(snippet.id)}
                className={`flex items-center gap-2 px-4 py-2.5 rounded-t-2xl text-xs font-mono transition-all border-t-2 ${
                  isActive
                    ? "glass-selected text-[var(--ink)] border-[var(--bg-4)] font-extrabold "
                    : "text-[var(--ink-soft)] hover:text-[var(--ink-soft)] border-transparent hover:border-[var(--bg-4)]"
                }`}
              >
                <FileCode className="w-3.5 h-3.5 text-[var(--ink-soft)]" />
                <span>{snippet.filename}</span>
                <span className="text-[10px] px-2 py-0.5 rounded-md glass-inset text-[var(--ink-soft)] font-sans font-semibold">
                  {snippet.badge}
                </span>
              </button>
            );
          })}
        </div>

        {/* Console Body & Code Area */}
        <div className="p-4 sm:p-6 glass-inset overflow-x-auto max-h-[560px]">
          <div className="mb-3 pb-3 border-b border-white/10 flex flex-wrap items-center justify-between gap-2 text-xs font-sans text-[var(--ink-soft)]">
            <span className="text-[var(--ink-soft)] font-bold">{currentSnippet.title}</span>
            <span className="font-mono text-[11px] text-[var(--ink-soft)] font-semibold">
              Language: {currentSnippet.language.toUpperCase()} • Strict Types
            </span>
          </div>

          <pre className="font-mono text-xs sm:text-[13px] leading-relaxed text-[var(--ink-soft)] selection:glass-inset selection:text-[var(--ink)]">
            <code>
              {currentSnippet.code.split("\n").map((line, idx) => (
                <div key={idx} className="table-row hover:border-[var(--bg-4)]">
                  <span className="table-cell pr-4 text-right select-none text-[var(--ink-soft)] text-xs w-8">
                    {idx + 1}
                  </span>
                  <span className="table-cell whitespace-pre">{line}</span>
                </div>
              ))}
            </code>
          </pre>
        </div>
      </div>

      {/* Explain Architecture Modal */}
      {showExplainModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 glass-overlay backdrop-blur-md animate-in fade-in duration-200">
          <div className="crystal-card glass-inset glass-dialog glass-stationary rounded-3xl p-6 sm:p-8 max-w-2xl w-full border border-white/95 animate-in zoom-in-95 duration-200 text-left">
            <div className="flex items-center justify-between pb-4 border-b border-[var(--glass-border)]">
              <div>
                <span className="text-xs font-black text-[var(--ink)] uppercase tracking-wider">
                  Architectural Deep-Dive
                </span>
                <h3 className="text-xl font-black text-[var(--ink)] mt-0.5">
                  {currentSnippet.filename}
                </h3>
              </div>
              <button
                onClick={() => setShowExplainModal(false)}
                className="w-8 h-8 rounded-full glass-inset hover:border-[var(--bg-4)] border border-[var(--glass-border)] flex items-center justify-center text-[var(--ink-soft)] font-bold"
              >
                ✕
              </button>
            </div>

            <div className="space-y-4 my-6 text-xs sm:text-sm">
              <div className="p-4 rounded-2xl glass-inset border border-[var(--glass-border)]">
                <span className="font-bold text-[var(--ink)] flex items-center gap-1.5 mb-1">
                  <Sparkles className="w-4 h-4 text-[var(--ink-soft)]" /> Engineering Summary
                </span>
                <p className="text-[var(--ink)] leading-relaxed font-medium">
                  {currentSnippet.explanation.summary}
                </p>
              </div>

              <div className="p-4 rounded-2xl glass-inset border border-[var(--glass-border)]">
                <span className="font-bold text-[var(--ink)] flex items-center gap-1.5 mb-1">
                  <Shield className="w-4 h-4 text-[var(--ink-soft)]" /> Security Guarantee
                </span>
                <p className="text-[var(--ink)] leading-relaxed font-medium">
                  {currentSnippet.explanation.security}
                </p>
              </div>

              <div className="p-4 rounded-2xl glass-inset border border-[var(--glass-border)]">
                <span className="font-bold text-[var(--ink)] flex items-center gap-1.5 mb-1">
                  <Zap className="w-4 h-4 text-[var(--ink-soft)]" /> Scalability &amp; Latency
                </span>
                <p className="text-[var(--ink)] leading-relaxed font-medium">
                  {currentSnippet.explanation.scalability}
                </p>
              </div>

              <div className="p-4 rounded-2xl glass-inset border border-[var(--glass-border)]">
                <span className="font-bold text-[var(--ink)] flex items-center gap-1.5 mb-1">
                  <Code2 className="w-4 h-4 text-[var(--ink)]" /> Design Patterns
                </span>
                <p className="text-[var(--ink)] font-mono text-xs leading-relaxed font-semibold">
                  {currentSnippet.explanation.patterns}
                </p>
              </div>
            </div>

            <div className="flex justify-end">
              <button
                onClick={() => setShowExplainModal(false)}
                className="px-5 py-2.5 rounded-xl text-xs font-black text-[var(--ink)] glass-inset hover:opacity-95"
              >
                Close Inspector
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
