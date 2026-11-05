import React from "react";

export function GithubIcon({ className = "w-4 h-4" }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
      <path d="M9 18c-4.51 2-5-2-7-2" />
    </svg>
  );
}

export function LinkedinIcon({ className = "w-4 h-4" }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
      <rect width="4" height="12" x="2" y="9" />
      <circle cx="4" cy="4" r="2" />
    </svg>
  );
}

export function CrystalButterflyIcon({ className = "w-12 h-12" }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 100 100"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <defs>
        {/* Crystal Rainbow Wing Gradient 1 */}
        <linearGradient id="crystalWing1" x1="10" y1="10" x2="50" y2="60" gradientUnits="userSpaceOnUse">
          <stop offset="0%" stopColor="#FFFFFF" stopOpacity="0.8" />
          <stop offset="30%" stopColor="#C4B5FD" stopOpacity="0.6" />
          <stop offset="60%" stopColor="#FBCFE8" stopOpacity="0.5" />
          <stop offset="100%" stopColor="#BAE6FD" stopOpacity="0.7" />
        </linearGradient>

        {/* Crystal Rainbow Wing Gradient 2 */}
        <linearGradient id="crystalWing2" x1="90" y1="10" x2="50" y2="60" gradientUnits="userSpaceOnUse">
          <stop offset="0%" stopColor="#FFFFFF" stopOpacity="0.8" />
          <stop offset="30%" stopColor="#BAE6FD" stopOpacity="0.6" />
          <stop offset="60%" stopColor="#FBCFE8" stopOpacity="0.5" />
          <stop offset="100%" stopColor="#C4B5FD" stopOpacity="0.7" />
        </linearGradient>

        {/* Beveled Specular Highlight */}
        <linearGradient id="specularGlint" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#FFFFFF" stopOpacity="0.95" />
          <stop offset="50%" stopColor="#FFFFFF" stopOpacity="0.4" />
          <stop offset="100%" stopColor="#E9D5FF" stopOpacity="0.8" />
        </linearGradient>
      </defs>

      {/* Top Left Wing */}
      <path
        d="M50 45 C40 25, 15 10, 8 26 C2 38, 12 55, 32 60 C42 62, 48 52, 50 45 Z"
        fill="url(#crystalWing1)"
        stroke="url(#specularGlint)"
        strokeWidth="1.5"
        style={{ filter: "drop-shadow(0 4px 12px rgba(192, 132, 252, 0.4))" }}
      />
      {/* Top Left Wing Facet Ribs */}
      <path d="M48 48 C36 34, 20 22, 12 28" stroke="#FFFFFF" strokeWidth="1" strokeOpacity="0.7" strokeLinecap="round" />
      <path d="M47 50 C38 42, 25 36, 18 42" stroke="#FFFFFF" strokeWidth="0.8" strokeOpacity="0.6" strokeLinecap="round" />

      {/* Top Right Wing */}
      <path
        d="M50 45 C60 25, 85 10, 92 26 C98 38, 88 55, 68 60 C58 62, 52 52, 50 45 Z"
        fill="url(#crystalWing2)"
        stroke="url(#specularGlint)"
        strokeWidth="1.5"
        style={{ filter: "drop-shadow(0 4px 12px rgba(186, 230, 253, 0.4))" }}
      />
      {/* Top Right Wing Facet Ribs */}
      <path d="M52 48 C64 34, 80 22, 88 28" stroke="#FFFFFF" strokeWidth="1" strokeOpacity="0.7" strokeLinecap="round" />
      <path d="M53 50 C62 42, 75 36, 82 42" stroke="#FFFFFF" strokeWidth="0.8" strokeOpacity="0.6" strokeLinecap="round" />

      {/* Bottom Left Wing */}
      <path
        d="M48 54 C35 58, 18 64, 22 78 C26 90, 42 85, 48 68 Z"
        fill="url(#crystalWing1)"
        stroke="url(#specularGlint)"
        strokeWidth="1.2"
        opacity="0.9"
      />

      {/* Bottom Right Wing */}
      <path
        d="M52 54 C65 58, 82 64, 78 78 C74 90, 58 85, 52 68 Z"
        fill="url(#crystalWing2)"
        stroke="url(#specularGlint)"
        strokeWidth="1.2"
        opacity="0.9"
      />

      {/* Butterfly Body & Crystal Antennae */}
      <ellipse cx="50" cy="54" rx="2.5" ry="12" fill="#FFFFFF" stroke="#C4B5FD" strokeWidth="1" />
      <circle cx="50" cy="40" r="2.8" fill="#FFFFFF" stroke="#C4B5FD" strokeWidth="0.8" />
      {/* Antennae */}
      <path d="M49 38 Q42 28 38 24" stroke="#FFFFFF" strokeWidth="1" strokeLinecap="round" />
      <circle cx="38" cy="24" r="1.2" fill="#C4B5FD" />
      <path d="M51 38 Q58 28 62 24" stroke="#FFFFFF" strokeWidth="1" strokeLinecap="round" />
      <circle cx="62" cy="24" r="1.2" fill="#BAE6FD" />
    </svg>
  );
}
