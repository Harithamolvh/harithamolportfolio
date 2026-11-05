"use client";

import React, { useEffect, useState } from "react";

export default function CrystalCursorAura() {
  const [mousePos, setMousePos] = useState({ x: -200, y: -200 });
  const [smoothPos, setSmoothPos] = useState({ x: -200, y: -200 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePos({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  // Smooth lerp for liquid crystal refraction feeling
  useEffect(() => {
    let animId: number;
    const lerp = () => {
      setSmoothPos((prev) => ({
        x: prev.x + (mousePos.x - prev.x) * 0.12,
        y: prev.y + (mousePos.y - prev.y) * 0.12,
      }));
      animId = requestAnimationFrame(lerp);
    };
    animId = requestAnimationFrame(lerp);
    return () => cancelAnimationFrame(animId);
  }, [mousePos]);

  return (
    <div className="pointer-events-none fixed inset-0 z-0 overflow-hidden">
      {/* Dynamic Cursor Light Caustic Flare */}
      <div
        className="absolute w-[480px] h-[480px] rounded-full blur-[100px] opacity-60 transition-transform duration-75 ease-out"
        style={{
          transform: `translate3d(${smoothPos.x - 240}px, ${smoothPos.y - 240}px, 0)`,
          background:
            "radial-gradient(circle, rgba(238, 226, 255, 0.75) 0%, rgba(254, 215, 226, 0.5) 40%, rgba(186, 230, 253, 0.55) 70%, transparent 100%)",
        }}
      />

      {/* Ambient Crystal Dispersion Flares */}
      <div className="absolute top-[8%] left-[15%] w-[420px] h-[420px] rounded-full bg-gradient-to-tr from-purple-200/40 via-pink-200/35 to-sky-200/40 blur-[120px] animate-crystal-pulse" />
      <div className="absolute top-[35%] right-[10%] w-[500px] h-[500px] rounded-full bg-gradient-to-bl from-sky-200/45 via-indigo-200/35 to-pink-200/40 blur-[140px] animate-crystal-float" />
      <div className="absolute top-[65%] left-[8%] w-[460px] h-[460px] rounded-full bg-gradient-to-tr from-violet-200/45 via-rose-200/35 to-cyan-200/35 blur-[130px] animate-crystal-pulse" />
      <div className="absolute bottom-[5%] right-[20%] w-[520px] h-[520px] rounded-full bg-gradient-to-tl from-purple-200/40 via-sky-200/40 to-pink-100/40 blur-[130px] animate-crystal-float" />
    </div>
  );
}
