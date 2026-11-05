"use client";

import React from "react";
import { PORTFOLIO_DATA } from "@/data/portfolioData";
import {
  Briefcase,
  GraduationCap,
  Award,
  Calendar,
  MapPin,
  CheckCircle2,
  Sparkles,
} from "lucide-react";

export default function TimelineSection() {
  return (
    <section id="timeline" className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      {/* Header */}
      <div className="text-center max-w-3xl mx-auto mb-16">
        <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full crystal-pill mb-3">
          <Briefcase className="w-3.5 h-3.5 text-purple-600" />
          <span className="text-xs font-bold uppercase tracking-wider text-indigo-900">
            Career Trajectory
          </span>
        </div>
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-black tracking-tight text-crystal-title">
          Engineering Career Timeline
        </h2>
        <p className="mt-3 text-slate-700 text-sm sm:text-base font-normal">
          5+ Years of progressive software engineering excellence across commercial SaaS products, enterprise state platforms, and client software delivery.
        </p>
      </div>

      {/* Vertical Timeline Container with Central Iridescent Neon Spine */}
      <div className="relative max-w-4xl mx-auto">
        {/* Neon Spine Line */}
        <div className="absolute top-4 bottom-4 left-4 md:left-1/2 -translate-x-1/2 w-1.5 bg-gradient-to-b from-indigo-500 via-purple-500 to-pink-500 rounded-full shadow-lg shadow-purple-500/50" />

        <div className="space-y-12">
          {PORTFOLIO_DATA.timeline.map((item, index) => {
            const isEven = index % 2 === 0;

            const icon =
              item.type === "commercial" ? (
                <Briefcase className="w-4 h-4 text-white" />
              ) : item.type === "education" ? (
                <GraduationCap className="w-4 h-4 text-white" />
              ) : (
                <Award className="w-4 h-4 text-white" />
              );

            return (
              <div
                key={item.company + item.period}
                className={`relative flex flex-col md:flex-row items-start ${
                  isEven ? "md:flex-row-reverse" : ""
                }`}
              >
                {/* Central Node Badge */}
                <div className="absolute left-4 md:left-1/2 -translate-x-1/2 w-10 h-10 rounded-full bg-gradient-to-tr from-indigo-600 via-purple-600 to-pink-500 border-4 border-white flex items-center justify-center shadow-xl z-10">
                  {icon}
                </div>

                {/* Content Card */}
                <div
                  className={`w-full md:w-[calc(50%-36px)] pl-14 md:pl-0 ${
                    isEven ? "md:text-left" : "md:text-left"
                  }`}
                >
                  <div className="crystal-card crystal-sheen rounded-3xl p-6 border border-white/95 hover:border-white shadow-xl transition-all">
                    {/* Period & Badge */}
                    <div className="flex flex-wrap items-center justify-between gap-2 mb-2">
                      <span className="inline-flex items-center gap-1.5 text-xs font-bold text-indigo-800 bg-white/80 px-3 py-1 rounded-full border border-purple-200 shadow-2xs">
                        <Calendar className="w-3.5 h-3.5 text-purple-600" />
                        {item.period}
                      </span>
                      {item.current && (
                        <span className="px-2.5 py-0.5 rounded-full bg-emerald-100 text-emerald-800 text-[11px] font-extrabold flex items-center gap-1 border border-emerald-200">
                          <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-ping" />
                          Current Role
                        </span>
                      )}
                    </div>

                    {/* Role & Company */}
                    <h3 className="text-xl font-black text-slate-900 tracking-tight">
                      {item.role}
                    </h3>
                    <div className="flex items-center gap-2 text-xs font-bold text-slate-600 mt-0.5">
                      <span className="text-indigo-700 font-extrabold">{item.company}</span>
                      <span>•</span>
                      <span className="flex items-center gap-0.5 text-slate-500 font-medium">
                        <MapPin className="w-3 h-3 text-purple-500" /> {item.location}
                      </span>
                    </div>

                    {/* Summary */}
                    <p className="text-xs sm:text-sm text-slate-700 mt-3 leading-relaxed font-normal">
                      {item.summary}
                    </p>

                    {/* Achievements List */}
                    {item.achievements.length > 0 && (
                      <div className="mt-4 pt-3 border-t border-slate-200/50 space-y-2">
                        {item.achievements.map((ach, i) => (
                          <div key={i} className="flex items-start gap-2 text-xs text-slate-700">
                            <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0 mt-0.5" />
                            <span className="font-medium">{ach}</span>
                          </div>
                        ))}
                      </div>
                    )}

                    {/* Tech Badges */}
                    <div className="flex flex-wrap gap-1.5 mt-4 pt-3 border-t border-slate-200/40">
                      {item.stack.map((s) => (
                        <span
                          key={s}
                          className="text-[11px] font-semibold px-2.5 py-0.5 rounded-xl bg-white/80 text-slate-700 border border-white/90 shadow-3xs"
                        >
                          {s}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
