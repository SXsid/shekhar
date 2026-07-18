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
      I build things that scale, code that's maintainable, and Product that make
      my life and maybe yours — a bit better
    </p>
  );
}
