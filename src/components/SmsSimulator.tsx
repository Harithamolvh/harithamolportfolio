"use client";

import React, { useState } from "react";
import {
  Smartphone,
  Send,
  CheckCircle2,
  Bell,
  Clock,
  Shield,
  Sparkles,
  RefreshCw,
} from "lucide-react";

export default function SmsSimulator() {
  const [pooja, setPooja] = useState("Maha Ganapathi Homam");
  const [devoteeName, setDevoteeName] = useState("Harithamol");
  const [mobileNumber, setMobileNumber] = useState("+91 8891336232");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [smsDelivered, setSmsDelivered] = useState(true);
  const [bookingRef, setBookingRef] = useState("KSH-2026-7842");

  const handleSimulate = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSmsDelivered(false);

    const randomRef = `KSH-2026-${Math.floor(1000 + Math.random() * 9000)}`;
    setTimeout(() => {
      setBookingRef(randomRef);
      setIsSubmitting(false);
      setSmsDelivered(true);
    }, 900);
  };

  return (
    <div className="crystal-card rounded-3xl p-5 sm:p-6 border border-white/95 shadow-xl mt-6">
      <div className="flex items-center justify-between pb-4 border-b border-slate-200/60 mb-5">
        <div>
          <div className="flex items-center gap-2">
            <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-ping" />
            <span className="text-xs font-black uppercase tracking-wider text-indigo-900 flex items-center gap-1.5">
              <Sparkles className="w-3.5 h-3.5 text-purple-600" />
              Devotee Workflow &amp; MSG91 SMS Simulator
            </span>
          </div>
          <p className="text-xs text-slate-600 mt-0.5 font-medium">
            Test how Kshetra coordinates ritual bookings, payment gateways, and automated DLT transactional SMS dispatch.
          </p>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-center">
        {/* Booking Form (Left 7 Cols) */}
        <form onSubmit={handleSimulate} className="lg:col-span-7 flex flex-col gap-3.5">
          <div>
            <label className="block text-xs font-bold text-slate-700 mb-1">
              Select Pooja / Ritual Offering
            </label>
            <select
              value={pooja}
              onChange={(e) => setPooja(e.target.value)}
              className="w-full text-xs font-semibold rounded-2xl border border-white/90 bg-white/80 px-3.5 py-2.5 text-slate-900 focus:outline-none focus:ring-2 focus:ring-purple-400 shadow-xs backdrop-blur-md"
            >
              <option value="Maha Ganapathi Homam">Maha Ganapathi Homam (₹ 500)</option>
              <option value="Ashtothara Archana">Ashtothara Archana (₹ 150)</option>
              <option value="Special Neyyabhishekam">Special Neyyabhishekam (₹ 750)</option>
              <option value="Annadanam Mahadhanam">Annadanam Daily Sponsor (₹ 1,500)</option>
            </select>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            <div>
              <label className="block text-xs font-bold text-slate-700 mb-1">
                Devotee Name
              </label>
              <input
                type="text"
                value={devoteeName}
                onChange={(e) => setDevoteeName(e.target.value)}
                className="w-full text-xs font-semibold rounded-2xl border border-white/90 bg-white/80 px-3.5 py-2.5 text-slate-900 focus:outline-none focus:ring-2 focus:ring-purple-400 shadow-xs backdrop-blur-md"
                placeholder="Enter devotee name"
                required
              />
            </div>
            <div>
              <label className="block text-xs font-bold text-slate-700 mb-1">
                Devotee Mobile (MSG91 SMS Target)
              </label>
              <input
                type="text"
                value={mobileNumber}
                onChange={(e) => setMobileNumber(e.target.value)}
                className="w-full text-xs font-semibold rounded-2xl border border-white/90 bg-white/80 px-3.5 py-2.5 text-slate-900 focus:outline-none focus:ring-2 focus:ring-purple-400 shadow-xs backdrop-blur-md"
                placeholder="+91..."
                required
              />
            </div>
          </div>

          <button
            type="submit"
            disabled={isSubmitting}
            className="crystal-sheen mt-2 inline-flex items-center justify-center gap-2 px-5 py-3 rounded-2xl text-xs font-black text-white bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 hover:opacity-95 shadow-md shadow-purple-500/25 transition-all active:scale-95 disabled:opacity-50 border border-white/40"
          >
            {isSubmitting ? (
              <>
                <RefreshCw className="w-3.5 h-3.5 animate-spin" />
                <span>Processing Order &amp; Dispatching SMS API...</span>
              </>
            ) : (
              <>
                <Send className="w-3.5 h-3.5" />
                <span>Simulate Pooja Booking &amp; Dispatch SMS</span>
              </>
            )}
          </button>

          <div className="text-[11px] text-slate-600 font-semibold flex items-center gap-3">
            <span className="flex items-center gap-1 text-emerald-700">
              <Shield className="w-3.5 h-3.5" /> PCI-DSS Gateway Tokenized
            </span>
            <span>•</span>
            <span className="flex items-center gap-1 text-purple-700">
              <Sparkles className="w-3.5 h-3.5" /> DLT Entity ID Verified
            </span>
          </div>
        </form>

        {/* Smartphone Mockup Preview (Right 5 Cols) */}
        <div className="lg:col-span-5 flex justify-center">
          <div className="w-full max-w-[300px] rounded-[34px] p-3.5 bg-slate-950/95 border-4 border-slate-800/80 shadow-2xl relative ring-1 ring-white/20">
            {/* Notch */}
            <div className="w-24 h-4 rounded-full bg-slate-900 mx-auto mb-3 flex items-center justify-center">
              <span className="w-2 h-2 rounded-full bg-slate-800" />
            </div>

            {/* Screen Content */}
            <div className="rounded-[22px] bg-slate-100/95 p-3 min-h-[220px] flex flex-col justify-between text-left backdrop-blur-md">
              {/* Header */}
              <div className="flex items-center justify-between pb-2 border-b border-slate-200 text-[10px] text-slate-500">
                <span className="font-bold text-slate-800">Messages</span>
                <span className="text-emerald-600 font-extrabold">4G LTE • 98%</span>
              </div>

              {/* SMS Bubble */}
              {smsDelivered ? (
                <div className="crystal-card bg-white/95 rounded-2xl p-3 border border-purple-200 shadow-md animate-in fade-in zoom-in-95 duration-300 my-auto">
                  <div className="flex items-center justify-between mb-1.5">
                    <span className="text-[10px] font-black text-indigo-800 bg-purple-50 px-2.5 py-0.5 rounded-full border border-purple-200">
                      VM-KSHETRA
                    </span>
                    <span className="text-[9px] text-slate-500 font-semibold">Just now</span>
                  </div>

                  <p className="text-[11px] text-slate-800 leading-snug">
                    Namaskaram <strong>{devoteeName}</strong>. Your <strong>{pooja}</strong> is confirmed.
                  </p>

                  <div className="mt-2 pt-1.5 border-t border-slate-100 flex items-center justify-between text-[10px]">
                    <span className="font-mono font-black text-slate-900">{bookingRef}</span>
                    <span className="text-emerald-700 font-bold flex items-center gap-0.5">
                      <CheckCircle2 className="w-3.5 h-3.5" /> Confirmed
                    </span>
                  </div>
                </div>
              ) : (
                <div className="my-auto text-center py-6">
                  <div className="w-8 h-8 rounded-full bg-indigo-100 flex items-center justify-center mx-auto text-indigo-600 animate-pulse mb-2">
                    <Clock className="w-4 h-4" />
                  </div>
                  <span className="text-xs text-slate-500 font-bold">
                    Awaiting MSG91 SMS gateway dispatch...
                  </span>
                </div>
              )}

              {/* Footer status */}
              <div className="text-[9px] text-slate-500 font-semibold text-center pt-2">
                Simulated MSG91 Gateway Delivery (1.2s round-trip)
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
