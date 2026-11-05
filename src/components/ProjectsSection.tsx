"use client";

import React, { useState } from "react";
import { PORTFOLIO_DATA, Project } from "@/data/portfolioData";
import TenantSimulator from "./TenantSimulator";
import SmsSimulator from "./SmsSimulator";
import PipelineTracker from "./PipelineTracker";
import ConcurrencySchematic from "./ConcurrencySchematic";
import {
  Layers,
  Sparkles,
  ChevronDown,
  ChevronUp,
  Tag,
  ExternalLink,
  ShieldCheck,
  CheckCircle2,
  Calendar,
  Building,
} from "lucide-react";

interface ProjectsSectionProps {
  activeTechFilter: string | null;
  onSelectTechFilter: (tech: string | null) => void;
}

export default function ProjectsSection({
  activeTechFilter,
  onSelectTechFilter,
}: ProjectsSectionProps) {
  const [selectedCategory, setSelectedCategory] = useState<string>("All");
  const [showAllSecondary, setShowAllSecondary] = useState(false);

  const categories = [
    "All",
    "Multi-Tenant SaaS",
    "Fintech & Payments",
    "Enterprise & Booking",
  ];

  // Filter projects by category and tech filter
  const filteredProjects = PORTFOLIO_DATA.projects.filter((project) => {
    const matchesCategory =
      selectedCategory === "All" ||
      project.categories.includes(selectedCategory);

    return matchesCategory;
  });

  const flagshipProjects = filteredProjects.filter((p) => p.isFlagship);
  const secondaryProjects = filteredProjects.filter((p) => !p.isFlagship);

  const isProjectMatchingActiveTech = (project: Project) => {
    if (!activeTechFilter) return false;
    return project.technologies.some(
      (tech) => tech.toLowerCase().includes(activeTechFilter.toLowerCase())
    );
  };

  return (
    <section id="projects" className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      {/* Header */}
      <div className="text-center max-w-3xl mx-auto mb-12">
        <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full glass-pill mb-3">
          <Layers className="w-3.5 h-3.5 text-indigo-500" />
          <span className="text-xs font-bold uppercase tracking-wider text-indigo-900">
            Commercial Portfolio &amp; Interactive Engines
          </span>
        </div>
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-slate-900 tracking-tight">
          Interactive Project Explorer
        </h2>
        <p className="mt-3 text-slate-600 text-sm sm:text-base">
          Proven commercial systems architected with scalable multi-tenancy, transactional financial processing, and government enterprise workflows. Test the embedded live simulators below.
        </p>

        {/* Category Filter Pills */}
        <div className="flex flex-wrap items-center justify-center gap-2 mt-8">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`text-xs font-semibold px-4 py-2 rounded-full transition-all duration-200 ${
                selectedCategory === cat
                  ? "bg-indigo-600 text-white shadow-md shadow-indigo-500/25 scale-105"
                  : "bg-white/70 text-slate-700 hover:bg-white hover:text-indigo-600 border border-white/80"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>
      </div>

      {/* Flagship Projects Showcase */}
      <div className="space-y-12">
        {flagshipProjects.map((project) => {
          const isTechHighlighted = isProjectMatchingActiveTech(project);

          return (
            <div
              key={project.id}
              className={`glass-panel rounded-3xl p-6 sm:p-8 border transition-all duration-300 ${
                isTechHighlighted
                  ? "ring-4 ring-indigo-400 border-indigo-300 shadow-2xl bg-indigo-50/30"
                  : "border-white/80 hover:border-white shadow-xl"
              }`}
            >
              {/* Highlight Badge if active tech matches */}
              {isTechHighlighted && (
                <div className="mb-4 inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-indigo-600 text-white text-xs font-semibold animate-pulse">
                  <Sparkles className="w-3.5 h-3.5" />
                  <span>Implements {activeTechFilter}</span>
                </div>
              )}

              {/* Project Main Header Info */}
              <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-4 pb-6 border-b border-slate-200/60">
                <div>
                  <div className="flex flex-wrap items-center gap-2 mb-1.5">
                    <span className="text-xs font-bold px-3 py-0.5 rounded-full bg-indigo-100 text-indigo-800 border border-indigo-200">
                      {project.category}
                    </span>
                    <span className="text-xs font-medium text-slate-500 flex items-center gap-1">
                      <Building className="w-3.5 h-3.5" /> {project.client}
                    </span>
                    <span className="text-xs font-medium text-slate-500 flex items-center gap-1">
                      <Calendar className="w-3.5 h-3.5" /> {project.period}
                    </span>
                  </div>
                  <h3 className="text-2xl sm:text-3xl font-black text-slate-900 tracking-tight">
                    {project.title}
                  </h3>
                  <p className="text-sm font-semibold text-indigo-600 mt-0.5">
                    {project.subtitle}
                  </p>
                </div>

                {/* Metrics Cluster */}
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 w-full lg:w-auto">
                  {project.metrics.map((m) => (
                    <div
                      key={m.label}
                      className="glass-subtle rounded-xl p-2.5 text-center min-w-[110px]"
                    >
                      <div className="text-[10px] text-slate-500 uppercase font-semibold">
                        {m.label}
                      </div>
                      <div className="text-xs font-bold text-slate-900 mt-0.5">
                        {m.value}
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Description & Architectural Highlights */}
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 mt-6 items-start">
                <div className="lg:col-span-5">
                  <p className="text-sm text-slate-700 leading-relaxed font-normal mb-4">
                    {project.description}
                  </p>

                  <div className="mb-4">
                    <span className="text-xs font-bold uppercase tracking-wider text-slate-500 block mb-2">
                      Architectural Innovations
                    </span>
                    <ul className="space-y-2 text-xs text-slate-700">
                      {project.architecturalHighlights.map((hl, i) => (
                        <li key={i} className="flex items-start gap-2">
                          <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0 mt-0.5" />
                          <span>{hl}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Technology Tags */}
                  <div>
                    <span className="text-xs font-bold uppercase tracking-wider text-slate-500 block mb-2">
                      Technology Stack
                    </span>
                    <div className="flex flex-wrap gap-1.5">
                      {project.technologies.map((t) => {
                        const isMatch = activeTechFilter && t.toLowerCase().includes(activeTechFilter.toLowerCase());
                        return (
                          <button
                            key={t}
                            onClick={() => onSelectTechFilter(t)}
                            className={`text-xs px-2.5 py-1 rounded-lg font-medium transition-all ${
                              isMatch
                                ? "bg-indigo-600 text-white font-bold"
                                : "bg-white/80 text-slate-700 hover:bg-indigo-50 hover:text-indigo-600 border border-slate-200/60"
                            }`}
                          >
                            {t}
                          </button>
                        );
                      })}
                    </div>
                  </div>
                </div>

                {/* Right Column: Live Embedded Simulator */}
                <div className="lg:col-span-7">
                  {project.id === "eazycart" && <TenantSimulator />}
                  {project.id === "kshetra" && <SmsSimulator />}
                  {project.id === "kamco" && <PipelineTracker />}
                  {project.id === "icmbrokers" && <ConcurrencySchematic />}
                </div>
              </div>
            </div>
          );
        })}
      </div>

      {/* Secondary Projects Grid (Expandable) */}
      {secondaryProjects.length > 0 && (
        <div className="mt-16">
          <div className="flex items-center justify-between mb-6 pb-2 border-b border-slate-200/60">
            <div>
              <h3 className="text-xl font-bold text-slate-900">
                Additional Enterprise &amp; Client Projects
              </h3>
              <p className="text-xs text-slate-500">
                Production web applications delivered across logistics, hospitality, and media publishing
              </p>
            </div>
            <button
              onClick={() => setShowAllSecondary(!showAllSecondary)}
              className="inline-flex items-center gap-1.5 text-xs font-bold text-indigo-600 hover:text-indigo-800 bg-white/70 px-3 py-1.5 rounded-full border border-slate-200 transition-all"
            >
              <span>{showAllSecondary ? "Show Top 3" : `View All (${secondaryProjects.length})`}</span>
              {showAllSecondary ? (
                <ChevronUp className="w-3.5 h-3.5" />
              ) : (
                <ChevronDown className="w-3.5 h-3.5" />
              )}
            </button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {(showAllSecondary
              ? secondaryProjects
              : secondaryProjects.slice(0, 3)
            ).map((project) => {
              const isTechHighlighted = isProjectMatchingActiveTech(project);

              return (
                <div
                  key={project.id}
                  className={`glass-panel holographic-sheen-container rounded-3xl p-6 border transition-all flex flex-col justify-between ${
                    isTechHighlighted
                      ? "ring-2 ring-indigo-400 border-indigo-300 bg-indigo-50/20"
                      : "border-white/80 hover:border-white"
                  }`}
                >
                  <div>
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-[10px] font-bold px-2 py-0.5 rounded-full bg-slate-100 text-slate-700">
                        {project.category}
                      </span>
                      <span className="text-[11px] text-slate-500 font-medium">
                        {project.period}
                      </span>
                    </div>

                    <h4 className="text-lg font-bold text-slate-900">{project.title}</h4>
                    <p className="text-xs font-medium text-indigo-600 mb-3">
                      {project.subtitle}
                    </p>

                    <p className="text-xs text-slate-600 leading-relaxed mb-4">
                      {project.description}
                    </p>

                    {/* Metrics */}
                    <div className="grid grid-cols-2 gap-2 mb-4">
                      {project.metrics.map((m) => (
                        <div key={m.label} className="glass-subtle p-2 rounded-xl text-center">
                          <span className="text-[9px] uppercase text-slate-500 font-semibold block">
                            {m.label}
                          </span>
                          <span className="text-xs font-bold text-slate-900 mt-0.5 block">
                            {m.value}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div>
                    <div className="flex flex-wrap gap-1 pt-3 border-t border-slate-100">
                      {project.technologies.map((t) => (
                        <span
                          key={t}
                          className="text-[10px] px-2 py-0.5 rounded bg-slate-100 text-slate-600 font-medium"
                        >
                          {t}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      )}
    </section>
  );
}
