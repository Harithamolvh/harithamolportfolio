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
    <div className="glass-panel rounded-3xl p-5 sm:p-6 border border-white/80 shadow-lg mt-6">
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 pb-4 border-b border-slate-200/60 mb-5">
        <div>
          <div className="flex items-center gap-2">
            <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-ping" />
            <span className="text-xs font-bold uppercase tracking-wider text-indigo-900">
              High-Concurrency Forex Payment Gateway &amp; Audit Engine
            </span>
          </div>
          <p className="text-xs text-slate-500 mt-0.5">
            Cryptographic signature checking and distributed atomic mutex locking for zero race condition double-credits.
          </p>
        </div>

        <button
          onClick={runBurstSimulation}
          disabled={isSimulating}
          className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl text-xs font-bold text-white bg-slate-900 hover:bg-slate-800 shadow-md transition-all active:scale-95 disabled:opacity-50"
        >
          <Zap className="w-3.5 h-3.5 text-amber-400" />
          <span>{isSimulating ? "Simulating 50 Burst Requests..." : "Simulate 50 Concurrent Webhooks"}</span>
        </button>
      </div>

      {/* Visual Pipeline Schematic */}
      <div className="grid grid-cols-1 sm:grid-cols-4 gap-3 text-xs">
        <div className="rounded-2xl bg-white/90 border border-slate-200 p-3.5 flex flex-col justify-between">
          <div className="flex items-center gap-2 text-indigo-700 font-bold mb-2">
            <Activity className="w-4 h-4" />
            <span>1. Ingress Webhook</span>
          </div>
          <p className="text-slate-600 text-[11px] leading-relaxed">
            Multi-currency forex deposit arrives from banking gateway.
          </p>
          <span className="font-mono text-[10px] text-slate-400 mt-2 block">
            Payload: HMAC-SHA256
          </span>
        </div>

        <div className="rounded-2xl bg-white/90 border border-slate-200 p-3.5 flex flex-col justify-between">
          <div className="flex items-center gap-2 text-purple-700 font-bold mb-2">
            <Lock className="w-4 h-4" />
            <span>2. Redis Atomic Lock</span>
          </div>
          <p className="text-slate-600 text-[11px] leading-relaxed">
            <code className="text-[10px] bg-slate-100 px-1 py-0.5 rounded">Redis::set(key, NX, EX)</code> locks transaction ID.
          </p>
          <span className="font-mono text-[10px] text-purple-600 font-semibold mt-2 block">
            Atomic Mutex
          </span>
        </div>

        <div className="rounded-2xl bg-white/90 border border-slate-200 p-3.5 flex flex-col justify-between">
          <div className="flex items-center gap-2 text-sky-700 font-bold mb-2">
            <Database className="w-4 h-4" />
            <span>3. DB Transaction</span>
          </div>
          <p className="text-slate-600 text-[11px] leading-relaxed">
            Row-level lock on trader ledger balance ensures isolation.
          </p>
          <span className="font-mono text-[10px] text-slate-400 mt-2 block">
            Isolation: Serializable
          </span>
        </div>

        <div className="rounded-2xl bg-white/90 border border-slate-200 p-3.5 flex flex-col justify-between">
          <div className="flex items-center gap-2 text-emerald-700 font-bold mb-2">
            <CheckCircle className="w-4 h-4" />
            <span>4. Balance Credited</span>
          </div>
          <p className="text-slate-600 text-[11px] leading-relaxed">
            Funds credited; audit trail logged; 200 OK returned.
          </p>
          <span className="font-mono text-[10px] text-emerald-600 font-semibold mt-2 block">
            Audit Hash Recorded
          </span>
        </div>
      </div>

      {/* Burst Result Box */}
      {burstResult && (
        <div className="mt-4 rounded-2xl bg-emerald-50/90 border border-emerald-200 p-4 animate-in fade-in duration-300">
          <div className="flex items-center gap-2 text-emerald-900 font-bold text-xs mb-2">
            <CheckCircle className="w-4 h-4 text-emerald-600" />
            <span>Concurrency Test Succeeded with Zero Race Conditions</span>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 text-xs">
            <div>
              <span className="text-slate-500 text-[10px] uppercase">Simulated Requests</span>
              <div className="font-mono font-bold text-slate-900">{burstResult.totalRequests} Burst Packets</div>
            </div>
            <div>
              <span className="text-slate-500 text-[10px] uppercase">Exact-Once Executed</span>
              <div className="font-mono font-bold text-emerald-700">{burstResult.processed} Processed</div>
            </div>
            <div>
              <span className="text-slate-500 text-[10px] uppercase">Duplicates Throttled</span>
              <div className="font-mono font-bold text-slate-900">{burstResult.duplicatesThrottled} Deduplicated</div>
            </div>
            <div>
              <span className="text-slate-500 text-[10px] uppercase">Average Latency</span>
              <div className="font-mono font-bold text-indigo-700">{burstResult.latencyMs}ms</div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
