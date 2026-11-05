"use client";

import React, { useState } from "react";
import { PORTFOLIO_DATA } from "@/data/portfolioData";
import {
  Server,
  Cloud,
  CreditCard,
  Database,
  Layout,
  Cpu,
  GitCommit,
  GitPullRequest,
  Flame,
  Zap,
  CheckCircle2,
  Filter,
  Sparkles,
} from "lucide-react";
import { GithubIcon } from "./Icons";

interface TechMatrixSectionProps {
  activeTechFilter: string | null;
  onSelectTechFilter: (tech: string | null) => void;
}

export default function TechMatrixSection({
  activeTechFilter,
  onSelectTechFilter,
}: TechMatrixSectionProps) {
  const [hoveredDay, setHoveredDay] = useState<string | null>(null);

  // Generate simulated 52-week or 28-day commit heatmap strip
  const heatmapWeeks = Array.from({ length: 32 }, (_, weekIndex) => {
    return Array.from({ length: 7 }, (_, dayIndex) => {
      const commitCount = Math.floor(Math.sin(weekIndex * 0.4 + dayIndex) * 3 + 2.5);
      return Math.max(0, Math.min(5, commitCount));
    });
  });

  const getHeatmapColor = (count: number) => {
    if (count === 0) return "bg-slate-200/50";
    if (count === 1) return "bg-purple-200";
    if (count === 2) return "bg-purple-300";
    if (count === 3) return "bg-indigo-400";
    if (count === 4) return "bg-indigo-500";
    return "bg-indigo-600";
  };

  const getCategoryIcon = (iconName: string) => {
    switch (iconName) {
      case "Server":
        return <Server className="w-4 h-4 text-indigo-500" />;
      case "Cloud":
        return <Cloud className="w-4 h-4 text-sky-500" />;
      case "CreditCard":
        return <CreditCard className="w-4 h-4 text-emerald-500" />;
      case "Database":
        return <Database className="w-4 h-4 text-amber-500" />;
      case "Layout":
        return <Layout className="w-4 h-4 text-pink-500" />;
      case "Cpu":
        return <Cpu className="w-4 h-4 text-purple-500" />;
      default:
        return <Zap className="w-4 h-4 text-indigo-500" />;
    }
  };

  return (
    <section id="skills" className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      {/* Section Header */}
      <div className="text-center max-w-3xl mx-auto mb-14">
        <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full glass-pill mb-3">
          <Sparkles className="w-3.5 h-3.5 text-indigo-500" />
          <span className="text-xs font-bold uppercase tracking-wider text-indigo-900">
            Engineered Capabilities
          </span>
        </div>
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-slate-900 tracking-tight">
          Real-Time GitHub &amp; Technical Matrix
        </h2>
        <p className="mt-3 text-slate-600 text-sm sm:text-base">
          Production-tested stack across high-throughput Laravel micro-architectures, payment ecosystems, and containerized deployments. Click any skill badge to highlight its implementation across projects below.
        </p>
      </div>

      {/* GitHub Live Telemetry Ribbon */}
      <div className="glass-panel rounded-3xl p-6 sm:p-8 mb-12 border border-white/80 shadow-xl">
        <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-6 pb-6 border-b border-slate-200/60">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 rounded-2xl bg-gradient-to-tr from-slate-900 to-indigo-900 flex items-center justify-center text-white shadow-md">
              <GithubIcon className="w-6 h-6" />
            </div>
            <div>
              <div className="flex items-center gap-2">
                <span className="font-bold text-slate-900 text-lg">GitHub Production Telemetry</span>
                <span className="px-2 py-0.5 rounded-full bg-emerald-100 text-emerald-800 text-[11px] font-semibold flex items-center gap-1">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
                  Live Sync
                </span>
              </div>
              <p className="text-xs text-slate-500 mt-0.5">
                Verified repository commit frequency &amp; automated CI/CD deployments
              </p>
            </div>
          </div>

          {/* Quick Metrics */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 w-full lg:w-auto">
            <div className="glass-subtle rounded-xl p-3 text-center">
              <div className="flex items-center justify-center gap-1 text-slate-500 text-xs font-medium">
                <GitCommit className="w-3.5 h-3.5 text-indigo-500" />
                <span>Commits/Yr</span>
              </div>
              <div className="text-lg font-bold text-slate-900 mt-0.5">
                {PORTFOLIO_DATA.githubStats.totalCommitsPastYear}+
              </div>
            </div>

            <div className="glass-subtle rounded-xl p-3 text-center">
              <div className="flex items-center justify-center gap-1 text-slate-500 text-xs font-medium">
                <Flame className="w-3.5 h-3.5 text-amber-500" />
                <span>Streak</span>
              </div>
              <div className="text-lg font-bold text-slate-900 mt-0.5">
                {PORTFOLIO_DATA.githubStats.contributionStreak} Days
              </div>
            </div>

            <div className="glass-subtle rounded-xl p-3 text-center">
              <div className="flex items-center justify-center gap-1 text-slate-500 text-xs font-medium">
                <GitPullRequest className="w-3.5 h-3.5 text-purple-500" />
                <span>PRs Merged</span>
              </div>
              <div className="text-lg font-bold text-slate-900 mt-0.5">
                {PORTFOLIO_DATA.githubStats.prsMerged}
              </div>
            </div>

            <div className="glass-subtle rounded-xl p-3 text-center">
              <div className="flex items-center justify-center gap-1 text-slate-500 text-xs font-medium">
                <Zap className="w-3.5 h-3.5 text-emerald-500" />
                <span>AI Boost</span>
              </div>
              <div className="text-lg font-bold text-emerald-700 mt-0.5">
                {PORTFOLIO_DATA.githubStats.codeVelocityBoost}
              </div>
            </div>
          </div>
        </div>

        {/* Heatmap & Language Distribution */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 pt-6">
          {/* Commit Heatmap Visualizer */}
          <div className="lg:col-span-2">
            <div className="flex items-center justify-between mb-2">
              <span className="text-xs font-semibold text-slate-600">
                Continuous Deployment &amp; Engineering Activity
              </span>
              <div className="flex items-center gap-1 text-[11px] text-slate-500">
                <span>Less</span>
                <span className="w-2.5 h-2.5 rounded-sm bg-slate-200" />
                <span className="w-2.5 h-2.5 rounded-sm bg-purple-200" />
                <span className="w-2.5 h-2.5 rounded-sm bg-indigo-400" />
                <span className="w-2.5 h-2.5 rounded-sm bg-indigo-600" />
                <span>More</span>
              </div>
            </div>

            {/* Grid of commits */}
            <div className="overflow-x-auto pb-2">
              <div className="flex gap-1.5 min-w-[540px]">
                {heatmapWeeks.map((week, wIndex) => (
                  <div key={wIndex} className="flex flex-col gap-1.5">
                    {week.map((commits, dIndex) => (
                      <div
                        key={dIndex}
                        onMouseEnter={() =>
                          setHoveredDay(`Week ${wIndex + 1}: ${commits} commits & tests passed`)
                        }
                        onMouseLeave={() => setHoveredDay(null)}
                        className={`w-3.5 h-3.5 rounded-xs transition-all hover:scale-125 cursor-pointer ${getHeatmapColor(
                          commits
                        )}`}
                        title={`${commits} verified commits`}
                      />
                    ))}
                  </div>
                ))}
              </div>
            </div>
            <div className="h-4 text-[11px] text-indigo-700 font-medium">
              {hoveredDay ? hoveredDay : "Hover squares to inspect verified deployment intervals"}
            </div>
          </div>

          {/* Language Breakdown */}
          <div className="glass-subtle rounded-2xl p-4 flex flex-col justify-between">
            <div>
              <span className="text-xs font-semibold text-slate-700 block mb-2">
                Production Codebase Breakdown
              </span>
              {/* Stacked Bar */}
              <div className="w-full h-3 rounded-full overflow-hidden flex bg-slate-200 mb-3 shadow-inner">
                {PORTFOLIO_DATA.githubStats.topLanguages.map((lang) => (
                  <div
                    key={lang.name}
                    style={{
                      width: `${lang.percentage}%`,
                      backgroundColor: lang.color,
                    }}
                    title={`${lang.name}: ${lang.percentage}%`}
                  />
                ))}
              </div>
            </div>

            <div className="grid grid-cols-2 gap-2 text-xs">
              {PORTFOLIO_DATA.githubStats.topLanguages.map((lang) => (
                <div key={lang.name} className="flex items-center gap-1.5">
                  <span
                    className="w-2.5 h-2.5 rounded-full inline-block"
                    style={{ backgroundColor: lang.color }}
                  />
                  <span className="text-slate-700 font-medium truncate">{lang.name}</span>
                  <span className="text-slate-400 font-semibold ml-auto">{lang.percentage}%</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Interactive Node Linking Active Filter Alert */}
      {activeTechFilter && (
        <div className="mb-6 flex items-center justify-between glass-pill px-4 py-2 rounded-2xl border-indigo-200 bg-indigo-50/80">
          <div className="flex items-center gap-2 text-xs font-semibold text-indigo-900">
            <Filter className="w-3.5 h-3.5 text-indigo-600" />
            <span>Active Project Filter:</span>
            <span className="px-2 py-0.5 rounded-md bg-indigo-600 text-white font-mono">
              {activeTechFilter}
            </span>
            <span className="text-indigo-600 font-normal">
              — Scroll to Section 3 to see matching project implementations
            </span>
          </div>
          <button
            onClick={() => onSelectTechFilter(null)}
            className="text-xs font-bold text-indigo-700 hover:text-indigo-950 underline ml-3"
          >
            Clear Filter
          </button>
        </div>
      )}

      {/* Categorized Technical Matrix Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {PORTFOLIO_DATA.technicalMatrix.map((category) => (
          <div
            key={category.title}
            className="glass-panel holographic-sheen-container rounded-3xl p-6 border border-white/80 hover:border-white transition-all flex flex-col justify-between"
          >
            <div>
              <div className="flex items-center gap-3 mb-3">
                <div className="w-9 h-9 rounded-xl bg-white/80 flex items-center justify-center shadow-xs">
                  {getCategoryIcon(category.icon)}
                </div>
                <div>
                  <h3 className="font-bold text-slate-900 text-base">{category.title}</h3>
                  <p className="text-[11px] text-slate-500">{category.description}</p>
                </div>
              </div>

              {/* Skills Badges */}
              <div className="flex flex-wrap gap-1.5 mt-4">
                {category.skills.map((skill) => {
                  const isSelected = activeTechFilter === skill.name;
                  return (
                    <button
                      key={skill.name}
                      onClick={() =>
                        onSelectTechFilter(isSelected ? null : skill.name)
                      }
                      title={skill.description || skill.name}
                      className={`text-xs px-3 py-1.5 rounded-xl font-medium transition-all duration-200 flex items-center gap-1.5 text-left ${
                        isSelected
                          ? "bg-indigo-600 text-white shadow-md scale-105 ring-2 ring-indigo-400"
                          : skill.highlight
                          ? "bg-white/80 text-slate-900 hover:bg-indigo-50 hover:text-indigo-700 border border-white/90 shadow-2xs"
                          : "bg-slate-100/70 text-slate-700 hover:bg-white border border-slate-200/50"
                      }`}
                    >
                      <span>{skill.name}</span>
                      {skill.highlight && (
                        <span
                          className={`w-1.5 h-1.5 rounded-full ${
                            isSelected ? "bg-white" : "bg-indigo-500"
                          }`}
                        />
                      )}
                    </button>
                  );
                })}
              </div>
            </div>

            <div className="mt-5 pt-3 border-t border-slate-200/50 text-[11px] text-slate-500 flex items-center justify-between">
              <span>{category.skills.length} Core Technologies</span>
              <span className="text-indigo-600 font-semibold cursor-pointer hover:underline">
                Tap to link projects
              </span>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
