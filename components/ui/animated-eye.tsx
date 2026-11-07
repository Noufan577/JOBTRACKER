"use client";

import React from "react";

interface AnimatedEyeProps {
  open: boolean;
  className?: string;
}

export function AnimatedEye({ open, className = "h-4 w-4" }: AnimatedEyeProps) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={`${className} overflow-visible`}
    >
      {/* Bottom eyelid - stays anchored as the resting eyelid line */}
      <path
        d="M2 12C5 18.5 19 18.5 22 12"
        className="transition-all duration-300 ease-in-out"
      />

      {/* Upper eyelid - collapses downward onto the bottom lid when closed, opens arched up when open */}
      <path
        d="M2 12C5 5.5 19 5.5 22 12"
        style={{
          transformOrigin: "12px 12px",
          transform: open ? "scaleY(1)" : "scaleY(0)",
          opacity: open ? 1 : 0,
          transition: "transform 0.3s cubic-bezier(0.4, 0, 0.2, 1), opacity 0.2s ease-in-out",
        }}
      />

      {/* Pupil / Iris - scales down and fades when the eyelid shuts */}
      <circle
        cx="12"
        cy="12"
        r="3"
        style={{
          transformOrigin: "12px 12px",
          transform: open ? "scale(1)" : "scale(0)",
          opacity: open ? 1 : 0,
          transition: "transform 0.25s cubic-bezier(0.4, 0, 0.2, 1), opacity 0.2s ease-in-out",
        }}
      />

      {/* Eyelashes - fold downward when the eye is closed */}
      <g
        style={{
          transformOrigin: "12px 14px",
          transform: open ? "scaleY(0) translateY(-4px)" : "scaleY(1) translateY(0)",
          opacity: open ? 0 : 1,
          transition: "transform 0.3s cubic-bezier(0.4, 0, 0.2, 1), opacity 0.25s ease-in-out",
        }}
      >
        <line x1="4.5" y1="14" x2="3" y2="17.5" />
        <line x1="9" y1="16" x2="8" y2="20" />
        <line x1="15" y1="16" x2="16" y2="20" />
        <line x1="19.5" y1="14" x2="21" y2="17.5" />
      </g>
    </svg>
  );
}

