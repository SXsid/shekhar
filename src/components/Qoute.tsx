"use client";
import React from "react";

// Simple static quote — no typing animation, clean and readable
export default function Quote() {
  return (
    <div
      className="md:w-[800px] w-full mt-10 mb-4 px-4 md:px-0"
    >
      <p
        className="text-center text-base md:text-lg font-display italic"
        style={{ color: "var(--fg-muted)" }}
      >
        ❝ Not giving up is my magic. ❞
      </p>
    </div>
  );
}