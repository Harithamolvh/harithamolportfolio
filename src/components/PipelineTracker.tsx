"use client";

import React, { useState } from "react";
import {
  Wrench,
  CheckCircle2,
  FileCheck,
  CreditCard,
  Truck,
  ArrowRight,
  Shield,
  Container,
  Cpu,
  Sparkles,
} from "lucide-react";

export default function PipelineTracker() {
  const [activeStep, setActiveStep] = useState(2);

  const steps = [
    {
      id: 0,
      title: "Farmer Service Request",
      code: "KAMCO-SR-5891",
      icon: <Wrench className="w-4 h-4" />,
      description: "Farmer logs power tiller serial number & diagnostic symptoms via portal.",
      technicalDetail: "Validated against central KAMCO machinery warranty DB via Laravel API resources.",
    },
    {
      id: 1,
      title: "Field Diagnostic Inspection",
      code: "INSPECTION_OK",
      icon: <FileCheck className="w-4 h-4" />,
      description: "Authorized agro-technician conducts GPS-tagged field inspection.",
      technicalDetail: "Technician submits diagnostic report with photo verification stored in AWS S3.",
    },
    {
      id: 2,
      title: "Parts & Labor Quotation",
      code: "ESTIMATE_GEN",
      icon: <Cpu className="w-4 h-4" />,
      description: "Automated calculation of state-subsidized spare parts and labor charges.",
      technicalDetail: "Dynamic calculation engine applies agricultural government subsidies and tax rebates.",
    },
    {
      id: 3,
      title: "Multi-Gateway Payment",
      code: "RAZORPAY_PAID",
      icon: <CreditCard className="w-4 h-4" />,
      description: "Farmer settles balance via Razorpay, Stripe, Cashfree, or PayPal UPI.",
      technicalDetail: "Asynchronous webhook verification with Redis idempotency lock ensuring zero double-charging.",
    },
    {
      id: 4,
      title: "Service Completion & Cert",
      code: "DISPATCH_DONE",
      icon: <Truck className="w-4 h-4" />,
      description: "Technician delivers repaired machinery and issues QR warranty certificate.",
      technicalDetail: "Automated PDF generation with cryptographic signature and SMS notification via MSG91.",
    },
  ];

  return (
    <div className="crystal-card rounded-3xl p-5 sm:p-6 border border-white/95 shadow-xl mt-6">
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 pb-4 border-b border-slate-200/60 mb-5">
        <div>
          <div className="flex items-center gap-2">
            <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-ping" />
            <span className="text-xs font-black uppercase tracking-wider text-indigo-900 flex items-center gap-1.5">
              <Sparkles className="w-3.5 h-3.5 text-purple-600" />
              Machinery Service Lifecycle Pipeline
            </span>
          </div>
          <p className="text-xs text-slate-600 mt-0.5 font-medium">
            Click any milestone to inspect end-to-end auditability and CI/CD automated deployment checks.
          </p>
        </div>

        <div className="flex items-center gap-2 text-xs font-bold text-slate-800 crystal-pill px-3.5 py-1.5 rounded-full border border-white/90">
          <Container className="w-3.5 h-3.5 text-indigo-600" />
          <span>Docker + GitHub Actions CI/CD</span>
        </div>
      </div>

      {/* Pipeline Step Bubbles */}
      <div className="grid grid-cols-2 sm:grid-cols-5 gap-2 mb-6">
        {steps.map((step, index) => {
          const isCurrent = activeStep === index;
          const isPassed = activeStep > index;

          return (
            <button
              key={step.id}
              onClick={() => setActiveStep(index)}
              className={`p-3 rounded-2xl text-left border transition-all flex flex-col justify-between ${
                isCurrent
                  ? "bg-gradient-to-r from-indigo-600 to-purple-600 text-white shadow-lg border-white/60 scale-102"
                  : isPassed
                  ? "bg-emerald-50/90 text-emerald-950 border-emerald-200 hover:bg-emerald-100"
                  : "bg-white/70 text-slate-700 border-white/90 hover:bg-white"
              }`}
            >
              <div className="flex items-center justify-between mb-2">
                <span
                  className={`w-7 h-7 rounded-xl flex items-center justify-center text-xs font-black ${
                    isCurrent
                      ? "bg-white/20 text-white"
                      : isPassed
                      ? "bg-emerald-200 text-emerald-800"
                      : "bg-white text-slate-600 border border-slate-200"
                  }`}
                >
                  {isPassed ? <CheckCircle2 className="w-4 h-4" /> : index + 1}
                </span>
                <span className="text-[10px] opacity-80 font-mono font-bold">{step.code}</span>
              </div>
              <div className="text-xs font-extrabold leading-tight">{step.title}</div>
            </button>
          );
        })}
      </div>

      {/* Selected Step Detail Inspector */}
      <div className="rounded-3xl bg-white/80 border border-white/95 p-5 shadow-sm backdrop-blur-md">
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-3 pb-3 border-b border-slate-100">
          <div>
            <span className="text-[10px] font-black uppercase text-purple-700 tracking-wider">
              Selected Milestone Detail
            </span>
            <h4 className="text-sm font-extrabold text-slate-900 mt-0.5">
              Stage {activeStep + 1}: {steps[activeStep].title}
            </h4>
          </div>
          <span className="px-3 py-1 rounded-full bg-purple-50 text-purple-800 text-xs font-bold border border-purple-200 shadow-2xs">
            Audit State: Verified &amp; Logged
          </span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-3 text-xs">
          <div>
            <span className="font-bold text-slate-600 block mb-1">Operational Flow</span>
            <p className="text-slate-800 leading-relaxed font-medium">{steps[activeStep].description}</p>
          </div>
          <div>
            <span className="font-bold text-indigo-700 block mb-1">Architectural Implementation</span>
            <p className="text-slate-800 leading-relaxed font-mono text-[11px] bg-white/70 p-2.5 rounded-xl border border-white/90 shadow-inner">
              {steps[activeStep].technicalDetail}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
