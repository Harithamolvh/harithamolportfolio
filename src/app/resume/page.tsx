"use client";

import React from "react";
import ResumeModal from "@/components/ResumeModal";
import AtsModal from "@/components/AtsModal";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";

export default function ResumePage() {
  const [isAtsOpen, setIsAtsOpen] = React.useState(false);

  return (
    <div className="min-h-screen bg-slate-100 flex flex-col">
      <div className="bg-white border-b border-slate-200 px-6 py-4 flex items-center justify-between print:hidden">
        <Link
          href="/"
          className="inline-flex items-center gap-2 text-xs font-bold text-indigo-600 hover:text-indigo-800"
        >
          <ArrowLeft className="w-4 h-4" />
          <span>Back to Portfolio</span>
        </Link>
        <span className="text-xs text-slate-500 font-medium">
          Harithamol V H — Full-Stack Resume
        </span>
      </div>

      <div className="flex-1 flex justify-center py-6">
        <ResumeModal
          isOpen={true}
          onClose={() => {
            window.location.href = "/";
          }}
          onOpenAts={() => setIsAtsOpen(true)}
        />
      </div>

      <AtsModal isOpen={isAtsOpen} onClose={() => setIsAtsOpen(false)} />
    </div>
  );
}
