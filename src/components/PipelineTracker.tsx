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
    <div className="crystal-card rounded-3xl p-5 sm:p-6 border border-white/95 mt-6">
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 pb-4 border-b border-[var(--glass-border)] mb-5">
        <div>
          <div className="flex items-center gap-2">
            <span className="w-2.5 h-2.5 rounded-full glass-inset animate-ping" />
            <span className="text-xs font-black uppercase tracking-wider text-[var(--ink)] flex items-center gap-1.5">
              <Sparkles className="w-3.5 h-3.5 text-[var(--ink-soft)]" />
              Machinery Service Lifecycle Pipeline
            </span>
          </div>
          <p className="text-xs text-[var(--ink-soft)] mt-0.5 font-medium">
            Click any milestone to inspect end-to-end auditability and CI/CD automated deployment checks.
          </p>
        </div>

        <div className="flex items-center gap-2 text-xs font-bold text-[var(--ink)] crystal-pill px-3.5 py-1.5 rounded-full border border-white/90">
          <Container className="w-3.5 h-3.5 text-[var(--ink-soft)]" />
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
                  ? "glass-inset   text-[var(--ink)]  border-white/60 scale-102"
                  : isPassed
                  ? "glass-inset text-[var(--ink)] border-[var(--glass-border)] hover:border-[var(--bg-4)]"
                  : "glass-inset text-[var(--ink)] border-white/90 hover:border-[var(--bg-4)]"
              }`}
            >
              <div className="flex items-center justify-between mb-2">
                <span
                  className={`w-7 h-7 rounded-xl flex items-center justify-center text-xs font-black ${
                    isCurrent
                      ? "glass-inset text-[var(--ink)]"
                      : isPassed
                      ? "glass-inset text-[var(--ink)]"
                      : "glass-inset text-[var(--ink-soft)] border border-[var(--glass-border)]"
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
      <div className="rounded-3xl glass-inset border border-white/95 p-5 backdrop-blur-md">
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-3 pb-3 border-b border-[var(--glass-border)]">
          <div>
            <span className="text-[10px] font-black uppercase text-[var(--ink)] tracking-wider">
              Selected Milestone Detail
            </span>
            <h4 className="text-sm font-extrabold text-[var(--ink)] mt-0.5">
              Stage {activeStep + 1}: {steps[activeStep].title}
            </h4>
          </div>
          <span className="px-3 py-1 rounded-full glass-inset text-[var(--ink)] text-xs font-bold border border-[var(--glass-border)]">
            Audit State: Verified &amp; Logged
          </span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-3 text-xs">
          <div>
            <span className="font-bold text-[var(--ink-soft)] block mb-1">Operational Flow</span>
            <p className="text-[var(--ink)] leading-relaxed font-medium">{steps[activeStep].description}</p>
          </div>
          <div>
            <span className="font-bold text-[var(--ink)] block mb-1">Architectural Implementation</span>
            <p className="text-[var(--ink)] leading-relaxed font-mono text-[11px] glass-inset p-2.5 rounded-xl border border-white/90">
              {steps[activeStep].technicalDetail}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
