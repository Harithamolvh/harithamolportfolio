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
        <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full glass-pill mb-3">
          <Terminal className="w-3.5 h-3.5 text-indigo-500" />
          <span className="text-xs font-bold uppercase tracking-wider text-indigo-900">
            Production Engineering Quality
          </span>
        </div>
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-slate-900 tracking-tight">
          &quot;Under-The-Hood&quot; Code Console
        </h2>
        <p className="mt-3 text-slate-600 text-sm sm:text-base">
          Inspect actual production architectural patterns: multi-tenant dynamic database routing, cryptographic payment webhook idempotency, and automated zero-downtime Docker CI/CD workflows.
        </p>
      </div>

      {/* Glass Terminal Window */}
      <div className="glass-terminal rounded-3xl overflow-hidden shadow-2xl border border-white/20">
        {/* Terminal Header Bar */}
        <div className="bg-slate-900/90 px-4 sm:px-6 py-3.5 flex flex-wrap items-center justify-between gap-3 border-b border-white/10">
          {/* Traffic Light Dots & Title */}
          <div className="flex items-center gap-3">
            <div className="flex items-center gap-1.5">
              <span className="w-3 h-3 rounded-full bg-rose-500/80 inline-block border border-rose-600/50" />
              <span className="w-3 h-3 rounded-full bg-amber-500/80 inline-block border border-amber-600/50" />
              <span className="w-3 h-3 rounded-full bg-emerald-500/80 inline-block border border-emerald-600/50" />
            </div>
            <span className="text-xs font-mono text-slate-400 pl-2 border-l border-slate-700">
              harithamol@production-stack: ~/architecture
            </span>
          </div>

          {/* Interactive Tooling: Explain Drawer & Copy */}
          <div className="flex items-center gap-2">
            <button
              onClick={() => setShowExplainModal(true)}
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl text-xs font-semibold text-purple-200 bg-purple-900/50 hover:bg-purple-800/60 border border-purple-500/30 transition-all hover:scale-105"
            >
              <Info className="w-3.5 h-3.5 text-purple-300" />
              <span>Explain Architecture</span>
            </button>

            <button
              onClick={handleCopy}
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl text-xs font-semibold text-slate-200 bg-slate-800 hover:bg-slate-700 border border-slate-700 transition-all active:scale-95"
            >
              {copied ? (
                <>
                  <Check className="w-3.5 h-3.5 text-emerald-400" />
                  <span className="text-emerald-300 font-bold">Copied!</span>
                </>
              ) : (
                <>
                  <Copy className="w-3.5 h-3.5 text-slate-400" />
                  <span>Copy Code</span>
                </>
              )}
            </button>
          </div>
        </div>

        {/* Tab Strip */}
        <div className="bg-slate-950/80 px-4 sm:px-6 pt-2 flex gap-2 border-b border-white/5 overflow-x-auto">
          {snippets.map((snippet) => {
            const isActive = snippet.id === activeTabId;
            return (
              <button
                key={snippet.id}
                onClick={() => setActiveTabId(snippet.id)}
                className={`flex items-center gap-2 px-4 py-2.5 rounded-t-xl text-xs font-mono transition-all border-t-2 ${
                  isActive
                    ? "bg-slate-900 text-purple-300 border-indigo-400 font-bold"
                    : "text-slate-400 hover:text-slate-200 border-transparent hover:bg-slate-900/40"
                }`}
              >
                <FileCode className="w-3.5 h-3.5 text-indigo-400" />
                <span>{snippet.filename}</span>
                <span className="text-[10px] px-1.5 py-0.5 rounded bg-white/10 text-slate-300 font-sans">
                  {snippet.badge}
                </span>
              </button>
            );
          })}
        </div>

        {/* Console Body & Code Area */}
        <div className="p-4 sm:p-6 bg-slate-950/90 overflow-x-auto max-h-[560px]">
          <div className="mb-3 pb-3 border-b border-white/5 flex flex-wrap items-center justify-between gap-2 text-xs font-sans text-slate-400">
            <span className="text-indigo-300 font-semibold">{currentSnippet.title}</span>
            <span className="font-mono text-[11px] text-slate-500">
              Language: {currentSnippet.language.toUpperCase()} • Strict Types
            </span>
          </div>

          <pre className="font-mono text-xs sm:text-[13px] leading-relaxed text-slate-200 selection:bg-purple-900 selection:text-white">
            <code>
              {currentSnippet.code.split("\n").map((line, idx) => (
                <div key={idx} className="table-row hover:bg-white/5">
                  <span className="table-cell pr-4 text-right select-none text-slate-600 text-xs w-8">
                    {idx + 1}
                  </span>
                  <span className="table-cell whitespace-pre">{line}</span>
                </div>
              ))}
            </code>
          </pre>
        </div>
      </div>

      {/* Explain Architecture Modal / Drawer */}
      {showExplainModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/60 backdrop-blur-md animate-in fade-in duration-200">
          <div className="glass-panel bg-white/95 rounded-3xl p-6 sm:p-8 max-w-2xl w-full border border-white/90 shadow-2xl animate-in zoom-in-95 duration-200 text-left">
            <div className="flex items-center justify-between pb-4 border-b border-slate-200">
              <div>
                <span className="text-xs font-bold text-indigo-600 uppercase tracking-wider">
                  Architectural Deep-Dive
                </span>
                <h3 className="text-xl font-black text-slate-900 mt-0.5">
                  {currentSnippet.filename}
                </h3>
              </div>
              <button
                onClick={() => setShowExplainModal(false)}
                className="w-8 h-8 rounded-full bg-slate-100 hover:bg-slate-200 flex items-center justify-center text-slate-600 font-bold"
              >
                ✕
              </button>
            </div>

            <div className="space-y-4 my-6 text-xs sm:text-sm">
              <div className="p-3.5 rounded-2xl bg-indigo-50/80 border border-indigo-100">
                <span className="font-bold text-indigo-900 flex items-center gap-1.5 mb-1">
                  <Sparkles className="w-4 h-4 text-indigo-600" /> Engineering Summary
                </span>
                <p className="text-slate-700 leading-relaxed">
                  {currentSnippet.explanation.summary}
                </p>
              </div>

              <div className="p-3.5 rounded-2xl bg-emerald-50/80 border border-emerald-100">
                <span className="font-bold text-emerald-900 flex items-center gap-1.5 mb-1">
                  <Shield className="w-4 h-4 text-emerald-600" /> Security Guarantee
                </span>
                <p className="text-slate-700 leading-relaxed">
                  {currentSnippet.explanation.security}
                </p>
              </div>

              <div className="p-3.5 rounded-2xl bg-purple-50/80 border border-purple-100">
                <span className="font-bold text-purple-900 flex items-center gap-1.5 mb-1">
                  <Zap className="w-4 h-4 text-purple-600" /> Scalability &amp; Latency
                </span>
                <p className="text-slate-700 leading-relaxed">
                  {currentSnippet.explanation.scalability}
                </p>
              </div>

              <div className="p-3.5 rounded-2xl bg-slate-100 border border-slate-200">
                <span className="font-bold text-slate-800 flex items-center gap-1.5 mb-1">
                  <Code2 className="w-4 h-4 text-slate-600" /> Design Patterns
                </span>
                <p className="text-slate-700 font-mono text-xs leading-relaxed">
                  {currentSnippet.explanation.patterns}
                </p>
              </div>
            </div>

            <div className="flex justify-end">
              <button
                onClick={() => setShowExplainModal(false)}
                className="px-5 py-2.5 rounded-xl text-xs font-bold text-white bg-indigo-600 hover:bg-indigo-700 shadow-md"
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
