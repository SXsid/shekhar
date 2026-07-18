"use client";
import React from "react";
import ThemeToggle from "@/components/ThemeToggle";

export default function HeroBanner() {
  return (
    <div
      style={{
        position: "relative",
        height: "clamp(200px, 30vw, 270px)",
        borderRadius: "16px",
        overflow: "hidden",
        border: "1px solid var(--border)",
        width: "100%",
      }}
    >
      <img
        src="/banner.png"
        alt="banner"
        style={{
          width: "100%",
          height: "100%",
          objectFit: "cover",
          objectPosition: "center 40%",
          display: "block",
        }}
      />
      {/* bottom fade */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          background: "linear-gradient(to bottom, transparent 40%, rgba(0,0,0,0.5) 100%)",
        }}
      />

      {/* Theme toggle — top right of banner */}
      <div style={{ position: "absolute", top: "12px", right: "12px", zIndex: 10 }}>
        <ThemeToggle />
      </div>
    </div>
  );
}
