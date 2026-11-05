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
          <Briefcase className="w-3.5 h-3.5 text-[var(--ink-soft)]" />
          <span className="text-xs font-bold uppercase tracking-wider text-[var(--ink)]">
            Career Trajectory
          </span>
        </div>
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-black tracking-tight text-crystal-title">
          Engineering Career Timeline
        </h2>
        <p className="mt-3 text-[var(--ink)] text-sm sm:text-base font-normal">
          5+ Years of progressive software engineering excellence across commercial SaaS products, enterprise state platforms, and client software delivery.
        </p>
      </div>

      {/* Vertical Timeline Container with Central Iridescent Neon Spine */}
      <div className="relative max-w-4xl mx-auto">
        {/* Neon Spine Line */}
        <div className="absolute top-4 bottom-4 left-4 md:left-1/2 -translate-x-1/2 w-1.5 glass-inset rounded-full" />

        <div className="space-y-12">
          {PORTFOLIO_DATA.timeline.map((item, index) => {
            const isEven = index % 2 === 0;

            const icon =
              item.type === "commercial" ? (
                <Briefcase className="w-4 h-4 text-[var(--ink)]" />
              ) : item.type === "education" ? (
                <GraduationCap className="w-4 h-4 text-[var(--ink)]" />
              ) : (
                <Award className="w-4 h-4 text-[var(--ink)]" />
              );

            return (
              <div
                key={item.company + item.period}
                className={`relative flex flex-col md:flex-row items-start ${
                  isEven ? "md:flex-row-reverse" : ""
                }`}
              >
                {/* Central Node Badge */}
                <div className="absolute left-4 md:left-1/2 -translate-x-1/2 w-10 h-10 rounded-full glass-inset border-4 border-white flex items-center justify-center z-10">
                  {icon}
                </div>

                {/* Content Card */}
                <div
                  className={`w-full md:w-[calc(50%-36px)] pl-14 md:pl-0 ${
                    isEven ? "md:text-left" : "md:text-left"
                  }`}
                >
                  <div className="crystal-card crystal-sheen rounded-3xl p-6 border border-white/95 hover:border-white transition-all">
                    {/* Period & Badge */}
                    <div className="flex flex-wrap items-center justify-between gap-2 mb-2">
                      <span className="inline-flex items-center gap-1.5 text-xs font-bold text-[var(--ink)] glass-inset px-3 py-1 rounded-full border border-[var(--glass-border)]">
                        <Calendar className="w-3.5 h-3.5 text-[var(--ink-soft)]" />
                        {item.period}
                      </span>
                      {item.current && (
                        <span className="px-2.5 py-0.5 rounded-full glass-inset text-[var(--ink)] text-[11px] font-extrabold flex items-center gap-1 border border-[var(--glass-border)]">
                          <span className="w-1.5 h-1.5 rounded-full glass-inset animate-ping" />
                          Current Role
                        </span>
                      )}
                    </div>

                    {/* Role & Company */}
                    <h3 className="text-xl font-black text-[var(--ink)] tracking-tight">
                      {item.role}
                    </h3>
                    <div className="flex items-center gap-2 text-xs font-bold text-[var(--ink-soft)] mt-0.5">
                      <span className="text-[var(--ink)] font-extrabold">{item.company}</span>
                      <span>•</span>
                      <span className="flex items-center gap-0.5 text-[var(--ink-soft)] font-medium">
                        <MapPin className="w-3 h-3 text-[var(--ink-soft)]" /> {item.location}
                      </span>
                    </div>

                    {/* Summary */}
                    <p className="text-xs sm:text-sm text-[var(--ink)] mt-3 leading-relaxed font-normal">
                      {item.summary}
                    </p>

                    {/* Achievements List */}
                    {item.achievements.length > 0 && (
                      <div className="mt-4 pt-3 border-t border-[var(--glass-border)] space-y-2">
                        {item.achievements.map((ach, i) => (
                          <div key={i} className="flex items-start gap-2 text-xs text-[var(--ink)]">
                            <CheckCircle2 className="w-3.5 h-3.5 text-[var(--ink-soft)] shrink-0 mt-0.5" />
                            <span className="font-medium">{ach}</span>
                          </div>
                        ))}
                      </div>
                    )}

                    {/* Tech Badges */}
                    <div className="flex flex-wrap gap-1.5 mt-4 pt-3 border-t border-[var(--glass-border)]">
                      {item.stack.map((s) => (
                        <span
                          key={s}
                          className="text-[11px] font-semibold px-2.5 py-0.5 rounded-xl glass-inset text-[var(--ink)] border border-white/90"
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
