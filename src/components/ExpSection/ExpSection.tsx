"use client";
import React, { useEffect, useRef, useState } from "react";
import experienceData from "@/data/experience.json";

/* ─────────────────────────────────────────────────────────
   Hook: fires once when element enters the viewport
───────────────────────────────────────────────────────── */
function useInView(threshold = 0.15) {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          obs.disconnect();
        }
      },
      { threshold },
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, [threshold]);

  return { ref, visible };
}

/* ─────────────────────────────────────────────────────────
   Main section
───────────────────────────────────────────────────────── */
export default function ExpSection() {
  return (
    <div className="w-full md:w-[800px] px-4 md:px-0 mt-4 mb-10">
      {/* Section header */}
      <div
        className="mb-6 pb-2"
        style={{ borderBottom: "1px solid var(--border)" }}
      >
        <span
          className="text-xs font-semibold uppercase tracking-widest"
          style={{ color: "var(--fg-sub)", fontFamily: "'Inter', sans-serif" }}
        >
          Experience
        </span>
      </div>

      {/* Timeline tree */}
      <div className="relative pl-5 md:pl-7">
        {/* Vertical spine */}
        <div
          className="absolute left-[7px] md:left-[9px] top-2 bottom-2 w-px"
          style={{ background: "var(--border)" }}
        />

        {experienceData.map((exp, i) => (
          <TimelineEntry
            key={i}
            exp={exp}
            index={i}
            isLast={i === experienceData.length - 1}
          />
        ))}
      </div>
    </div>
  );
}

/* ─────────────────────────────────────────────────────────
   Single timeline entry
───────────────────────────────────────────────────────── */
function TimelineEntry({
  exp,
  index,
  isLast,
}: {
  exp: (typeof experienceData)[number];
  index: number;
  isLast: boolean;
}) {
  const { ref, visible } = useInView();
  const [hovered, setHovered] = useState(false);

  const delay = `${index * 120}ms`;

  return (
    <div
      ref={ref}
      className="relative"
      style={{
        marginBottom: isLast ? 0 : "2rem",
        /* Fade + slide in when visible */
        opacity: visible ? 1 : 0,
        transform: visible ? "translateX(0)" : "translateX(-12px)",
        transition: `opacity 0.4s ease ${delay}, transform 0.4s ease ${delay}`,
      }}
    >
      {/* Animated dot on the spine */}
      <div
        className="absolute"
        style={{
          left: "-1.35rem",
          top: "0.45rem",
          width: "14px",
          height: "14px",
        }}
      >
        {/* Outer ring — pulses once on entry */}
        <span
          style={{
            position: "absolute",
            inset: 0,
            borderRadius: "50%",
            border: "1.5px solid var(--accent)",
            opacity: visible ? 0 : 0.6,
            transform: visible ? "scale(2)" : "scale(1)",
            transition: `opacity 0.6s ease ${delay}, transform 0.6s ease ${delay}`,
          }}
        />
        {/* Solid dot */}
        <span
          style={{
            position: "absolute",
            inset: "3px",
            borderRadius: "50%",
            background: hovered ? "var(--accent)" : "var(--fg-sub)",
            transition: "background 0.2s ease",
          }}
        />
      </div>

      {/* Card */}
      <div
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
        style={{
          background: hovered ? "var(--bg-card)" : "transparent",
          border: `1px solid ${hovered ? "var(--border)" : "transparent"}`,
          borderRadius: "8px",
          padding: "0.7rem 0.9rem",
          transition: "background 0.18s ease, border-color 0.18s ease",
          marginLeft: "0.3rem",
        }}
      >
        {/* Row 1: logo + company + date */}
        <div className="flex items-center gap-3">
          {/* Logo */}
          <div
            className="flex-shrink-0 w-8 h-8 rounded overflow-hidden flex items-center justify-center"
            style={{
              background: "var(--bg-hover)",
              border: "1px solid var(--border)",
            }}
          >
            {exp.imageURL ? (
              <img
                src={exp.imageURL}
                alt={exp.companyName}
                width={32}
                height={32}
                className="w-full h-full object-contain p-0.5"
              />
            ) : (
              <span
                className="text-xs font-bold"
                style={{
                  color: "var(--fg-sub)",
                  fontFamily: "'Inter', sans-serif",
                }}
              >
                {exp.companyName?.charAt(0)}
              </span>
            )}
          </div>

          {/* Company name */}
          <span
            className="text-sm font-semibold flex-1 min-w-0"
            style={{ color: "var(--fg)", fontFamily: "'Inter', sans-serif" }}
          >
            {exp.companyName}
          </span>

          {/* Date — right side, hidden on tiny screens */}
          <span
            className="code-badge hidden xl:inline-block"
            style={{ fontSize: "0.68rem", flexShrink: 0 }}
          >
            {exp.from} — {exp.to}
          </span>
        </div>

        {/* Row 2: role + date on mobile */}
        <div className="mt-1.5 flex items-center flex-wrap gap-2 pl-[44px]">
          <span
            className="text-xs"
            style={{
              color: "var(--fg-muted)",
              fontFamily: "'Inter', sans-serif",
            }}
          >
            {exp.positionTitle}
          </span>

          {/* Date shown inline on mobile (small screens) */}
          <span
            className="code-badge xl:hidden"
            style={{ fontSize: "0.68rem" }}
          >
            {exp.from} — {exp.to}
          </span>
        </div>
      </div>
    </div>
  );
}

