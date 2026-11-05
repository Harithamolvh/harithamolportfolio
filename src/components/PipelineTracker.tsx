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
    <div className="glass-panel rounded-3xl p-5 sm:p-6 border border-white/80 shadow-lg mt-6">
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 pb-4 border-b border-slate-200/60 mb-5">
        <div>
          <div className="flex items-center gap-2">
            <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-ping" />
            <span className="text-xs font-bold uppercase tracking-wider text-indigo-900">
              Interactive Machinery Service Lifecycle Pipeline
            </span>
          </div>
          <p className="text-xs text-slate-500 mt-0.5">
            Click any milestone to inspect end-to-end auditability and CI/CD automated deployment checks.
          </p>
        </div>

        <div className="flex items-center gap-2 text-xs font-semibold text-slate-700 bg-slate-100/80 px-3 py-1.5 rounded-full">
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
                  ? "bg-indigo-600 text-white shadow-md border-indigo-700 scale-102"
                  : isPassed
                  ? "bg-emerald-50/80 text-emerald-900 border-emerald-200 hover:bg-emerald-100"
                  : "bg-white/60 text-slate-700 border-slate-200 hover:bg-white"
              }`}
            >
              <div className="flex items-center justify-between mb-2">
                <span
                  className={`w-7 h-7 rounded-xl flex items-center justify-center text-xs font-bold ${
                    isCurrent
                      ? "bg-white/20 text-white"
                      : isPassed
                      ? "bg-emerald-200 text-emerald-800"
                      : "bg-slate-100 text-slate-600"
                  }`}
                >
                  {isPassed ? <CheckCircle2 className="w-4 h-4" /> : index + 1}
                </span>
                <span className="text-[10px] opacity-75 font-mono">{step.code}</span>
              </div>
              <div className="text-xs font-bold leading-tight">{step.title}</div>
            </button>
          );
        })}
      </div>

      {/* Selected Step Detail Inspector */}
      <div className="rounded-2xl bg-white/90 border border-slate-200 p-4 shadow-sm">
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-3 pb-3 border-b border-slate-100">
          <div>
            <span className="text-[10px] font-bold uppercase text-indigo-600 tracking-wider">
              Selected Milestone Detail
            </span>
            <h4 className="text-sm font-bold text-slate-900 mt-0.5">
              Stage {activeStep + 1}: {steps[activeStep].title}
            </h4>
          </div>
          <span className="px-2.5 py-1 rounded-full bg-indigo-50 text-indigo-700 text-xs font-semibold border border-indigo-200">
            Audit State: Verified &amp; Logged
          </span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-3 text-xs">
          <div>
            <span className="font-semibold text-slate-500 block mb-1">Operational Flow</span>
            <p className="text-slate-800 leading-relaxed">{steps[activeStep].description}</p>
          </div>
          <div>
            <span className="font-semibold text-indigo-700 block mb-1">Architectural Implementation</span>
            <p className="text-slate-700 leading-relaxed font-mono text-[11px] bg-slate-50 p-2 rounded-lg border border-slate-100">
              {steps[activeStep].technicalDetail}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
