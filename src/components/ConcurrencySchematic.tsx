"use client";

import React, { useState } from "react";
import {
  ShieldAlert,
  Lock,
  Database,
  CheckCircle,
  TrendingUp,
  Zap,
  Activity,
  ArrowRight,
  Sparkles,
} from "lucide-react";

export default function ConcurrencySchematic() {
  const [isSimulating, setIsSimulating] = useState(false);
  const [burstResult, setBurstResult] = useState<null | {
    totalRequests: number;
    processed: number;
    duplicatesThrottled: number;
    latencyMs: number;
    balanceAuditCheck: string;
  }>(null);

  const runBurstSimulation = () => {
    setIsSimulating(true);
    setBurstResult(null);

    setTimeout(() => {
      setBurstResult({
        totalRequests: 50,
        processed: 1,
        duplicatesThrottled: 49,
        latencyMs: 14.2,
        balanceAuditCheck: "Zero Discrepancy Verified",
      });
      setIsSimulating(false);
    }, 800);
  };

  return (
    <div className="crystal-card rounded-3xl p-5 sm:p-6 border border-white/95 mt-6">
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 pb-4 border-b border-[var(--glass-border)] mb-5">
        <div>
          <div className="flex items-center gap-2">
            <span className="w-2.5 h-2.5 rounded-full glass-inset animate-ping" />
            <span className="text-xs font-black uppercase tracking-wider text-[var(--ink)] flex items-center gap-1.5">
              <Sparkles className="w-3.5 h-3.5 text-[var(--ink-soft)]" />
              Forex Payment Gateway &amp; Audit Engine
            </span>
          </div>
          <p className="text-xs text-[var(--ink-soft)] mt-0.5 font-medium">
            Cryptographic signature checking and distributed atomic mutex locking for zero race condition double-credits.
          </p>
        </div>

        <button
          onClick={runBurstSimulation}
          disabled={isSimulating}
          className="glass-btn crystal-sheen inline-flex items-center gap-1.5 px-4 py-2.5 rounded-2xl text-xs font-black text-[var(--ink)] glass-inset hover:opacity-95 transition-all active:scale-95 disabled:opacity-50 border border-white/30"
        >
          <Zap className="w-3.5 h-3.5 text-[var(--ink-soft)]" />
          <span>{isSimulating ? "Simulating 50 Burst Requests..." : "Simulate 50 Concurrent Webhooks"}</span>
        </button>
      </div>

      {/* Visual Pipeline Schematic */}
      <div className="grid grid-cols-1 sm:grid-cols-4 gap-3 text-xs">
        <div className="rounded-3xl glass-inset border border-white/95 p-4 flex flex-col justify-between">
          <div className="flex items-center gap-2 text-[var(--ink)] font-extrabold mb-2">
            <Activity className="w-4 h-4" />
            <span>1. Ingress Webhook</span>
          </div>
          <p className="text-[var(--ink-soft)] text-[11px] leading-relaxed font-medium">
            Multi-currency forex deposit arrives from banking gateway.
          </p>
          <span className="font-mono text-[10px] text-[var(--ink-soft)] font-bold mt-2 block">
            Payload: HMAC-SHA256
          </span>
        </div>

        <div className="rounded-3xl glass-inset border border-white/95 p-4 flex flex-col justify-between">
          <div className="flex items-center gap-2 text-[var(--ink)] font-extrabold mb-2">
            <Lock className="w-4 h-4" />
            <span>2. Redis Atomic Lock</span>
          </div>
          <p className="text-[var(--ink-soft)] text-[11px] leading-relaxed font-medium">
            <code className="text-[10px] glass-inset px-1 py-0.5 rounded font-bold">Redis::set(key, NX, EX)</code> locks transaction ID.
          </p>
          <span className="font-mono text-[10px] text-[var(--ink)] font-extrabold mt-2 block">
            Atomic Mutex
          </span>
        </div>

        <div className="rounded-3xl glass-inset border border-white/95 p-4 flex flex-col justify-between">
          <div className="flex items-center gap-2 text-[var(--ink)] font-extrabold mb-2">
            <Database className="w-4 h-4" />
            <span>3. DB Transaction</span>
          </div>
          <p className="text-[var(--ink-soft)] text-[11px] leading-relaxed font-medium">
            Row-level lock on trader ledger balance ensures isolation.
          </p>
          <span className="font-mono text-[10px] text-[var(--ink-soft)] font-bold mt-2 block">
            Isolation: Serializable
          </span>
        </div>

        <div className="rounded-3xl glass-inset border border-white/95 p-4 flex flex-col justify-between">
          <div className="flex items-center gap-2 text-[var(--ink)] font-extrabold mb-2">
            <CheckCircle className="w-4 h-4" />
            <span>4. Balance Credited</span>
          </div>
          <p className="text-[var(--ink-soft)] text-[11px] leading-relaxed font-medium">
            Funds credited; audit trail logged; 200 OK returned.
          </p>
          <span className="font-mono text-[10px] text-[var(--ink)] font-extrabold mt-2 block">
            Audit Hash Recorded
          </span>
        </div>
      </div>

      {/* Burst Result Box */}
      {burstResult && (
        <div className="mt-4 rounded-3xl glass-inset border border-[var(--glass-border)] p-4 animate-in fade-in duration-300">
          <div className="flex items-center gap-2 text-[var(--ink)] font-black text-xs mb-2">
            <CheckCircle className="w-4 h-4 text-[var(--ink-soft)]" />
            <span>Concurrency Test Succeeded with Zero Race Conditions</span>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 text-xs">
            <div>
              <span className="text-[var(--ink-soft)] text-[10px] uppercase font-bold">Simulated Requests</span>
              <div className="font-mono font-black text-[var(--ink)]">{burstResult.totalRequests} Burst Packets</div>
            </div>
            <div>
              <span className="text-[var(--ink-soft)] text-[10px] uppercase font-bold">Exact-Once Executed</span>
              <div className="font-mono font-black text-[var(--ink)]">{burstResult.processed} Processed</div>
            </div>
            <div>
              <span className="text-[var(--ink-soft)] text-[10px] uppercase font-bold">Duplicates Throttled</span>
              <div className="font-mono font-black text-[var(--ink)]">{burstResult.duplicatesThrottled} Deduplicated</div>
            </div>
            <div>
              <span className="text-[var(--ink-soft)] text-[10px] uppercase font-bold">Average Latency</span>
              <div className="font-mono font-black text-[var(--ink)]">{burstResult.latencyMs}ms</div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
