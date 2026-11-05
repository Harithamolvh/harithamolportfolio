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

  // Filter projects by category
  const filteredProjects = PORTFOLIO_DATA.projects.filter((project) => {
    return (
      selectedCategory === "All" ||
      project.categories.includes(selectedCategory)
    );
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
        <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full crystal-pill mb-3">
          <Layers className="w-3.5 h-3.5 text-purple-600" />
          <span className="text-xs font-bold uppercase tracking-wider text-indigo-900">
            Commercial Portfolio &amp; Interactive Engines
          </span>
        </div>
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-black tracking-tight text-crystal-title">
          Interactive Project Explorer
        </h2>
        <p className="mt-3 text-slate-700 text-sm sm:text-base font-normal">
          Proven commercial systems architected with scalable multi-tenancy, transactional financial processing, and government enterprise workflows. Test the embedded live crystal simulators below.
        </p>

        {/* Category Filter Pills */}
        <div className="flex flex-wrap items-center justify-center gap-2 mt-8">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`text-xs font-bold px-4 py-2 rounded-full transition-all duration-200 ${
                selectedCategory === cat
                  ? "bg-gradient-to-r from-indigo-600 to-purple-600 text-white shadow-lg shadow-purple-500/25 scale-105 border border-white/50"
                  : "crystal-pill text-slate-700 hover:text-indigo-600 hover:bg-white"
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
              className={`crystal-card rounded-3xl p-6 sm:p-8 border transition-all duration-300 ${
                isTechHighlighted
                  ? "ring-4 ring-purple-400 border-white shadow-2xl bg-white/70"
                  : "border-white/90 hover:border-white shadow-xl"
              }`}
            >
              {/* Highlight Badge if active tech matches */}
              {isTechHighlighted && (
                <div className="mb-4 inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-gradient-to-r from-indigo-600 to-purple-600 text-white text-xs font-bold animate-pulse shadow-md">
                  <Sparkles className="w-3.5 h-3.5 text-pink-200" />
                  <span>Implements {activeTechFilter}</span>
                </div>
              )}

              {/* Project Main Header Info */}
              <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-4 pb-6 border-b border-slate-200/60">
                <div>
                  <div className="flex flex-wrap items-center gap-2 mb-1.5">
                    <span className="text-xs font-bold px-3 py-0.5 rounded-full bg-white/80 text-purple-900 border border-purple-200 shadow-2xs">
                      {project.category}
                    </span>
                    <span className="text-xs font-semibold text-slate-600 flex items-center gap-1">
                      <Building className="w-3.5 h-3.5 text-indigo-500" /> {project.client}
                    </span>
                    <span className="text-xs font-semibold text-slate-600 flex items-center gap-1">
                      <Calendar className="w-3.5 h-3.5 text-purple-500" /> {project.period}
                    </span>
                  </div>
                  <h3 className="text-2xl sm:text-3xl font-black text-slate-900 tracking-tight">
                    {project.title}
                  </h3>
                  <p className="text-sm font-bold text-indigo-600 mt-0.5">
                    {project.subtitle}
                  </p>
                </div>

                {/* Metrics Cluster */}
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 w-full lg:w-auto">
                  {project.metrics.map((m) => (
                    <div
                      key={m.label}
                      className="crystal-subtle rounded-2xl p-2.5 text-center min-w-[110px] border border-white/80"
                    >
                      <div className="text-[10px] text-slate-500 uppercase font-bold">
                        {m.label}
                      </div>
                      <div className="text-xs font-black text-slate-900 mt-0.5">
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
                    <span className="text-xs font-extrabold uppercase tracking-wider text-slate-500 block mb-2">
                      Architectural Innovations
                    </span>
                    <ul className="space-y-2 text-xs text-slate-700">
                      {project.architecturalHighlights.map((hl, i) => (
                        <li key={i} className="flex items-start gap-2">
                          <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                          <span className="font-medium">{hl}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Technology Tags */}
                  <div>
                    <span className="text-xs font-extrabold uppercase tracking-wider text-slate-500 block mb-2">
                      Technology Stack
                    </span>
                    <div className="flex flex-wrap gap-1.5">
                      {project.technologies.map((t) => {
                        const isMatch = activeTechFilter && t.toLowerCase().includes(activeTechFilter.toLowerCase());
                        return (
                          <button
                            key={t}
                            onClick={() => onSelectTechFilter(t)}
                            className={`text-xs px-2.5 py-1 rounded-xl font-semibold transition-all ${
                              isMatch
                                ? "bg-gradient-to-r from-indigo-600 to-purple-600 text-white font-bold shadow-md"
                                : "bg-white/80 text-slate-700 hover:bg-white hover:text-indigo-600 border border-white/90 shadow-2xs"
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

      {/* Secondary Projects Grid */}
      {secondaryProjects.length > 0 && (
        <div className="mt-16">
          <div className="flex items-center justify-between mb-6 pb-2 border-b border-slate-200/60">
            <div>
              <h3 className="text-xl font-black text-slate-900 tracking-tight">
                Additional Enterprise &amp; Client Projects
              </h3>
              <p className="text-xs text-slate-600 font-medium">
                Production web applications delivered across logistics, hospitality, and media publishing
              </p>
            </div>
            <button
              onClick={() => setShowAllSecondary(!showAllSecondary)}
              className="inline-flex items-center gap-1.5 text-xs font-bold text-indigo-700 hover:text-indigo-900 crystal-pill px-3.5 py-1.5 rounded-full border border-white/90 transition-all hover:scale-105"
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
                  className={`crystal-card crystal-sheen rounded-3xl p-6 border transition-all flex flex-col justify-between ${
                    isTechHighlighted
                      ? "ring-2 ring-purple-400 border-white bg-white/70"
                      : "border-white/90 hover:border-white"
                  }`}
                >
                  <div>
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-[10px] font-bold px-2 py-0.5 rounded-full bg-white/80 text-purple-900 border border-purple-200 shadow-2xs">
                        {project.category}
                      </span>
                      <span className="text-[11px] text-slate-500 font-semibold">
                        {project.period}
                      </span>
                    </div>

                    <h4 className="text-lg font-black text-slate-900">{project.title}</h4>
                    <p className="text-xs font-bold text-indigo-600 mb-3">
                      {project.subtitle}
                    </p>

                    <p className="text-xs text-slate-600 leading-relaxed mb-4">
                      {project.description}
                    </p>

                    {/* Metrics */}
                    <div className="grid grid-cols-2 gap-2 mb-4">
                      {project.metrics.map((m) => (
                        <div key={m.label} className="crystal-subtle p-2 rounded-xl text-center border border-white/80">
                          <span className="text-[9px] uppercase text-slate-500 font-bold block">
                            {m.label}
                          </span>
                          <span className="text-xs font-black text-slate-900 mt-0.5 block">
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
                          className="text-[10px] px-2 py-0.5 rounded-lg bg-white/80 text-slate-700 font-semibold border border-white/90 shadow-3xs"
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
