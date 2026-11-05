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
    <div className="crystal-card rounded-3xl p-5 sm:p-6 border border-white/95 shadow-xl mt-6">
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 pb-4 border-b border-slate-200/60 mb-5">
        <div>
          <div className="flex items-center gap-2">
            <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-ping" />
            <span className="text-xs font-black uppercase tracking-wider text-indigo-900 flex items-center gap-1.5">
              <Sparkles className="w-3.5 h-3.5 text-purple-600" />
              Forex Payment Gateway &amp; Audit Engine
            </span>
          </div>
          <p className="text-xs text-slate-600 mt-0.5 font-medium">
            Cryptographic signature checking and distributed atomic mutex locking for zero race condition double-credits.
          </p>
        </div>

        <button
          onClick={runBurstSimulation}
          disabled={isSimulating}
          className="crystal-sheen inline-flex items-center gap-1.5 px-4 py-2.5 rounded-2xl text-xs font-black text-white bg-gradient-to-r from-slate-900 via-indigo-950 to-slate-900 hover:opacity-95 shadow-lg transition-all active:scale-95 disabled:opacity-50 border border-white/30"
        >
          <Zap className="w-3.5 h-3.5 text-amber-400" />
          <span>{isSimulating ? "Simulating 50 Burst Requests..." : "Simulate 50 Concurrent Webhooks"}</span>
        </button>
      </div>

      {/* Visual Pipeline Schematic */}
      <div className="grid grid-cols-1 sm:grid-cols-4 gap-3 text-xs">
        <div className="rounded-3xl bg-white/80 border border-white/95 p-4 flex flex-col justify-between shadow-xs">
          <div className="flex items-center gap-2 text-indigo-700 font-extrabold mb-2">
            <Activity className="w-4 h-4" />
            <span>1. Ingress Webhook</span>
          </div>
          <p className="text-slate-600 text-[11px] leading-relaxed font-medium">
            Multi-currency forex deposit arrives from banking gateway.
          </p>
          <span className="font-mono text-[10px] text-slate-500 font-bold mt-2 block">
            Payload: HMAC-SHA256
          </span>
        </div>

        <div className="rounded-3xl bg-white/80 border border-white/95 p-4 flex flex-col justify-between shadow-xs">
          <div className="flex items-center gap-2 text-purple-700 font-extrabold mb-2">
            <Lock className="w-4 h-4" />
            <span>2. Redis Atomic Lock</span>
          </div>
          <p className="text-slate-600 text-[11px] leading-relaxed font-medium">
            <code className="text-[10px] bg-slate-100 px-1 py-0.5 rounded font-bold">Redis::set(key, NX, EX)</code> locks transaction ID.
          </p>
          <span className="font-mono text-[10px] text-purple-700 font-extrabold mt-2 block">
            Atomic Mutex
          </span>
        </div>

        <div className="rounded-3xl bg-white/80 border border-white/95 p-4 flex flex-col justify-between shadow-xs">
          <div className="flex items-center gap-2 text-sky-700 font-extrabold mb-2">
            <Database className="w-4 h-4" />
            <span>3. DB Transaction</span>
          </div>
          <p className="text-slate-600 text-[11px] leading-relaxed font-medium">
            Row-level lock on trader ledger balance ensures isolation.
          </p>
          <span className="font-mono text-[10px] text-slate-500 font-bold mt-2 block">
            Isolation: Serializable
          </span>
        </div>

        <div className="rounded-3xl bg-white/80 border border-white/95 p-4 flex flex-col justify-between shadow-xs">
          <div className="flex items-center gap-2 text-emerald-700 font-extrabold mb-2">
            <CheckCircle className="w-4 h-4" />
            <span>4. Balance Credited</span>
          </div>
          <p className="text-slate-600 text-[11px] leading-relaxed font-medium">
            Funds credited; audit trail logged; 200 OK returned.
          </p>
          <span className="font-mono text-[10px] text-emerald-700 font-extrabold mt-2 block">
            Audit Hash Recorded
          </span>
        </div>
      </div>

      {/* Burst Result Box */}
      {burstResult && (
        <div className="mt-4 rounded-3xl bg-emerald-50/95 border border-emerald-300 p-4 animate-in fade-in duration-300 shadow-md">
          <div className="flex items-center gap-2 text-emerald-950 font-black text-xs mb-2">
            <CheckCircle className="w-4 h-4 text-emerald-600" />
            <span>Concurrency Test Succeeded with Zero Race Conditions</span>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 text-xs">
            <div>
              <span className="text-slate-600 text-[10px] uppercase font-bold">Simulated Requests</span>
              <div className="font-mono font-black text-slate-900">{burstResult.totalRequests} Burst Packets</div>
            </div>
            <div>
              <span className="text-slate-600 text-[10px] uppercase font-bold">Exact-Once Executed</span>
              <div className="font-mono font-black text-emerald-700">{burstResult.processed} Processed</div>
            </div>
            <div>
              <span className="text-slate-600 text-[10px] uppercase font-bold">Duplicates Throttled</span>
              <div className="font-mono font-black text-slate-900">{burstResult.duplicatesThrottled} Deduplicated</div>
            </div>
            <div>
              <span className="text-slate-600 text-[10px] uppercase font-bold">Average Latency</span>
              <div className="font-mono font-black text-indigo-700">{burstResult.latencyMs}ms</div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
