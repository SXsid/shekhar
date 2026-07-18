"use client";
import React from "react";

export default function Bio() {
  return (
    <p
      style={{
        color: "var(--fg-muted)",
        maxWidth: "520px",
        lineHeight: 1.7,
        margin: "12px 0 16px",
        fontFamily: "ui-serif, Georgia, serif",
        fontSize: "0.9rem",
      }}
    >
      Self-taught{" "}
      <span style={{ color: "var(--fg)", fontWeight: 600 }}>
        Backend &amp; Infrastructure Engineer
      </span>{" "}
      — I build systems that stay up, ship tools people actually use, and care
      about reliability, observability, and clean code.
    </p>
  );
}
